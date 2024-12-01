import React from 'react';
import { ReactComponent as GoBackIcon } from '../icons/gobackicon.svg';
import '../CSS/about.css';
import { Link } from 'react-router-dom';

export default function About(){

    return(
        <div className="detail-view">
            <div className="detail-top-bar">
                <div className="return-bar">
                    <Link 
                        to={{pathname:'/'}}
                        className="vertical-center"
                        >
                        <GoBackIcon/>return
                    </Link>
                </div>

            </div>
            <div className="about-body">
                <h1>About</h1>
                <p>In the pixel art color browsing app you can find works from pixeljoint.com, but only works that were published before October 14th 2020.</p>

                <p>If the artwork is an animation, color count and palette are analysed on the first frame. </p>

                <p>This site was created by <a href="http://DanielSimu.com">Daniel Simu aka Hapiel</a> and <a href="https://nl.linkedin.com/in/marinus-van-den-oever-0aa46117a">Marinus</a> as a research project in HCI, you can read the paper about it here.</p>

                <p>Kindly rehosted with permission by <a href="https://github.com/AlexShonia">Alex Shonia</a>

                <p>The <a href="https://github.com/hapiel/pa_color_browser/">source code for this website</a> and the <a href="https://github.com/hapiel/pa_color_db">source code for building the database</a> are both on github.</p>


            </div>
        </div> 
    )
}
