import './Slider.css';


import s9 from '../medya/slider9.jpeg';
import sl1 from "../medya/sli1.jpg";
import sl2 from "../medya/sli2.jpeg";
import sl4 from "../medya/sl4.jpg";

import ana1 from "./ana_dis.png";
import ana2 from "./ana_sac.png";
import ana3 from "./ana_epilasyon.png";

import r1 from "../medya/slider10.jpeg";
import r2 from "../medya/slider11.jpeg";
import r3 from "../medya/slider12.jpeg";

import EmHa from "../medya/EmreHayati.jpeg";




import React, { Component } from 'react'
import { SignalWifi1BarLockTwoTone } from '@material-ui/icons';

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
           
            <div id="slide" >
               
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    
                        <div className="carousel-item active" data-interval="3000">
                            <img src={sl1} className="d-block img-responsive w-100 slidephoto" title="Cilt Bakımı" alt="logo"></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p>
                            </div>  
                         </div>
            
                         <div className="carousel-item" data-interval="3000">
                            <img src={EmHa} className="d-block img-responsive w-100 slidephoto" title="Cilt Bakımı" alt="logo"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p>   
                            </div>
                         </div>

                         <div className="carousel-item" data-interval="2000">
                            <img src={r1} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={r2} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={r3} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={s9} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                       

                        <div className="carousel-item">
                            <img src={sl2} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>

                        
                        <div className="carousel-item">
                            <img src={sl4} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Muayenelerimiz ücretsizdir</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>
                        
                        {/* 
                            <div className="carousel-caption d-none d-md-block" style={{position:"absolute",bottom:"2rem",margin:"auto",display:"block",justifyContent:"center"}}>
                        <div class="row">
                            <div class="col-4">
                                <div class="card anaCardTemp">
                                    <img src={ana1} class="card-img-top anaCardPhoto" alt="..." title="Ağız ve Diş Sağlığı"></img>
                                    <div class="card-body">
                                        <h5 class="card-title anaCardText">Ağız ve Diş Sağlığı</h5>  
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card anaCardTemp">
                                    <img src={ana2} class="card-img-top anaCardPhoto" alt="..." title="Saç Ekim"></img>
                                    <div class="card-body">
                                        <h5 class="card-title anaCardText">Saç Ekim</h5>   
                                    </div>
                                </div>
                            </div>
                          
                            <div class="col-4">
                                <div class="card anaCardTemp">
                                    <img src={ana3} class="card-img-top anaCardPhoto" alt="..." title="Lazer Epilasyon"></img>
                                    <div class="card-body">
                                        <h5 class="card-title anaCardText">Lazer Epilasyon</h5>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                        */}
                    
                        
                        
                    </div>

                    
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                   
                </div>
            </div>
        </div>
           
        )
    }
}
