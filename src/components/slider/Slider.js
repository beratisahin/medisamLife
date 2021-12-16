import './Slider.css';

import s3 from '../medya/slider3.jpg';
import s5 from '../medya/slider5.jpeg';
import s7 from '../medya/slider7.jpeg';
import s8 from '../medya/slider8.jpg';
import s9 from '../medya/slider9.jpeg';
import sl1 from "../medya/sli1.jpg";
import sl2 from "../medya/sli2.jpeg";
import sl3 from "../medya/sl5.png";
import sl4 from "../medya/sl4.jpg";

import ana1 from "./ana_dis.png";
import ana2 from "./ana_sac.png";
import ana3 from "./ana_epilasyon.png";
import logo from "../header/MedisamYuvarlakLogo.png";


import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
           
            <div id="slide" >
                <p className="acilDurumMobil" style={{display:"none"}}>Acil Durumlarda 7/24 Hizmet Vermekteyiz</p>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    
                        <div className="carousel-item active" data-interval="3000">
                            <img src={sl1} className="d-block img-responsive w-100 slidephoto" title="Cilt Bakımı" alt="logo"></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Profesyonellik</h3>
                                <p className="sliderText"></p>
                                
                            </div>

                           
                         </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={s9} className="d-block img-responsive w-100 slidephoto" title="Epilasyon" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-sm-block">
                                <h3 className="sliderHeader">Kurumsallık</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                        <div className="carousel-item">
                            <img src={sl3} className="d-block img-responsive w-100 slidephoto" title="Kaş Kontür" alt="logo"></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Mükemmellik</h3>
                                <p className="sliderText"></p>
                               
                            </div>
                            
                        </div>
                        <div className="carousel-item">
                            <img src={s3} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Güvenilirlik</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={s5} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Hijyeniklik</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={sl2} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Yenilikçilik</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={s8} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Ödeme Kolaylığı</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={sl4} className="d-block img-responsive w-100 slidephoto" title="Kalıcı Makyaj" alt="logo" ></img>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className="sliderHeader">Acil Durumlar için 7/24 Hizmet</h3>
                                <p className="sliderText"></p> 
                            </div>
                        </div>
                        
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
