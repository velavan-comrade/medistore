import React, { Component } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../img/banner1.jpg';
import img2 from '../img/banner2.jpg';
import img3 from '../img/banner3.jpg';
import img4 from '../img/banner4.jpg';
import img5 from '../img/banner5.jpg';
import './Banners.css';

class Banners extends Component {
    render() {
        return (
            <div className="slide-container">
                <Fade>
                
                    <div className="each-fade"> 
                        <div className="image-container">
                            <img src={img1} id="imgcar"alt="1"></img>
                        </div>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={img2} id="imgcar"alt="2"></img>
                    </div> 
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={img3} id="imgcar"alt="3"></img>
                    </div> 
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={img4} id="imgcar" alt="4"></img>
                    </div> 
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={img5} id="imgcar" alt="5"></img>
                    </div> 
                    </div>
                    </Fade>
            </div>
        )
    }
}

export default Banners;
