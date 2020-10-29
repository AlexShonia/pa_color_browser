import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import '../CSS/browser.css';

export default function Browser() {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getImages()
    },[])

    return (
        <>
            <Color/>
            <div className="flex-container">
            <ShowArtworks/>  
            </div>
        </>
    )



    function ShowArtworks() {
        
        if (isLoading) {
            return <h3>Loading...</h3>
        } 
        return state.map((image, i) =>
            <div key={i} id={"div"+i} className="pixel-result" style={{maxWidth: Math.max(300, image.width) }}>
                <table>
                    <tbody>
                    <tr><td>Title:</td><td><strong>{image.title}</strong></td></tr>
                    <tr><td>Author:</td><td><strong>{image.author}</strong></td></tr>
                    <tr><td>Date:</td><td>{new Date(image.date).toLocaleDateString()}</td></tr>
                    <tr><td style={{whiteSpace: "nowrap"}}>Color count:</td><td>{image.trans ? image.colorCount + 1: image.colorCount}</td></tr>
                    <tr><td>Size:</td><td>{image.width} x {image.height}</td></tr>
                    </tbody>
                </table>
                <div className="artwork">
                    <img src={image.url} alt={image.title} id={i}></img>
                </div>
                <div className="zoom-buttons">
                    <button type="button" onClick={()=>zoomIn(i)}>+</button>
                    <button type="button" onClick={()=>zoomOut(i)}>-</button>
                </div>
            </div> 
        );
    }

    function getImages(){
        function validator(response){
            if(!response.data){
                throw new ValidationError("No data");
            }
        }

        function onSucces(response){
            setState(response.data);
            setIsLoading(false);
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        Api.get('/api/yellow', validator, onSucces, onFailure)
    }

    function zoomIn(id) {
        var img = document.getElementById(id);
        var div = document.getElementById("div" + id);
        var width = img.clientWidth;
        var divWidth = div.clientWidth;
        if (divWidth < width * 2) div.style.maxWidth = (width * 2) + "px";
        img.style.width = (width * 2) + "px";
        console.log("zooming");
    }

    function zoomOut(id) {
        var img = document.getElementById(id);
        var width = img.clientWidth;
        if (width === img.naturalWidth) return false;
        img.style.width = (width / 2) + "px";
    }

}