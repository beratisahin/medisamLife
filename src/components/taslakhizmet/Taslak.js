import { Link } from "react-router-dom";
import React, { Component } from 'react';
import "./Taslak.css";

export default class Taslak extends Component { 
render() {
     //Destructing
     const {taslakphoto,taslaktitle,taslaktext,taslaklink}=this.props;
     return (
        <div class="image">
                <img src={taslakphoto} title="Medisam Ağız ve Diş Sağlığı Polikliniği" style={{width:"100%",height:"30rem"}}></img>
                <div class="details">
                        <h2 className="serviceTitle" style={{textDecoration:"none",color:"#168B80",fontWeight:"bolder",fontSize:"x-large"}}>{taslaktitle}</h2>
                        <p>{taslaktext}</p>
                </div>

                <div class="more">
        
                        <a href={taslaklink} class="read-more">Daha Fazla Bilgi</a>
                        <div class="icon-links">
                                <a href="#"><i class="fas fa-tooth"></i></a>
                                <a href="#"><i class="fas fa-teeth-open"></i></a>
                                <a href="#"><i class="fas fa-heart"></i></a>
                        </div>
                </div>

        </div>

     )
}
}