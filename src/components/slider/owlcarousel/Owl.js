import React from 'react'
import './Owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import o1 from "../owlcarousel/owlIcons/m1.PNG";
import o2 from "../owlcarousel/owlIcons/m2.PNG";
import o3 from "../owlcarousel/owlIcons/m3.PNG";
import o4 from "../owlcarousel/owlIcons/m4.PNG";
import o5 from "../owlcarousel/owlIcons/m5.PNG";
import o6 from "../owlcarousel/owlIcons/m6.PNG";
import o7 from "../owlcarousel/owlIcons/m7.PNG";
import o8 from "../owlcarousel/owlIcons/m8.PNG";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    dots:2,
    autoplay: false,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 4,
        },
        400: {
            items: 4,
        },
        600: {
            items: 6,
        },
        700: {
            items: 6,
        },
        1000: {
            items: 8,
        }
    },
  };




export default function Owl() {
    
    
    return (
        
       
        <OwlCarousel className="owl-theme owl-roof" {...options}>

            <div className="item owl-slider">
               <div className="owlCarouselTemp">
                   <img src={o1} className="owlCarouselImage" alt="İmplant" title="İmplant"></img>
                   <p className="owlCarouselContent">İmplant</p>
                  
               </div>
               
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o2} className="owlCarouselImage"></img>
                   <p className="owlCarouselContent">Kanal</p>
               </div>
                
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    
                    <img src={o3} className="owlCarouselImage" title="Zirkonyum" alt="Zirkonyum"></img>
                   <p className="owlCarouselContent">Zirkonyum</p>

               </div>
               
               
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o4} className="owlCarouselImage"></img>
                   <p className="owlCarouselContent">Lamine</p>
               </div>
               
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o5} className="owlCarouselImage"></img>
                   <p className="owlCarouselContent">Dolgu</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o6} className="owlCarouselImage"></img>
                   <p className="owlCarouselContent">Endodonti</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o7} className="owlCarouselImage"></img>
                   <p className="owlCarouselContent">Ortodonti</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o8} className="owlCarouselImage"></img>
                   <p className="owlCarouselContent">Periodonti</p>
               </div> 
            </div>
            
            
           
        </OwlCarousel>

        
      
    )
}

