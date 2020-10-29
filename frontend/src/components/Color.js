import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import '../CSS/color.css';

export default function Color({getImages}){
    const [showPicker, setShowPicker] = useState(false);
    const [currentColor, setCurrentColor] = useState();
    const [colorArray, setColorArray] = useState([]);
    const [selectedColorIndex, setSelectedColorIndex] = useState();    

    function handleClick(){
        setColorArray([...colorArray, '#FFFFFF'])
        setCurrentColor('#FFFFFF');
        setSelectedColorIndex(colorArray.length);
        setShowPicker(true);
    };

    function handleChange(color){
        setCurrentColor(color.hex);
        colorArray[selectedColorIndex] = currentColor;
    };

    function handleClose(){
        setShowPicker(false);
        setSelectedColorIndex();
    };

    function adjustColor(index){
        setSelectedColorIndex(index);
        setCurrentColor(colorArray[index]);
        setShowPicker(!showPicker);
    }

    function ShowPallete() {
        if(colorArray.length){
            return colorArray.map((color, i) =>
                <div id="swatch" style={{
                        backgroundColor: color, 
                        border: i===selectedColorIndex?'5px solid rgba(255,255,255,1)':'5px solid rgba(255,255,255,0)'
                    }} onClick={()=>adjustColor(i)} key={i}>
                    <div id="color"></div>
                </div>
            );
        }
        return null
    }
    
    return(
        <div id={"colorsearch"}>
            <h2>Color</h2>
            <div id={"palette"}>
                <ShowPallete />
                <button id="add-color-button" onClick={handleClick}>+</button> 
            </div>

            {showPicker ?
                <div id="popover">
                    <div id="cover" onClick={handleClose}/>
                    <ChromePicker color={currentColor} onChange={handleChange} disableAlpha={true}/>
                </div>
                :null
            }
            <button id="search-button" onClick={()=>getImages(colorArray)}>search</button>
        </div>
    )
}

