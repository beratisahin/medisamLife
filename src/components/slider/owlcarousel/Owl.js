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
import o9 from "../owlcarousel/owlIcons/m9.PNG";
import o10 from "../owlcarousel/owlIcons/m10.PNG";







//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    dots:2,
    loop:true,
    autoplay: true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 3,
        },
        400: {
            items: 3,
        },
        600: {
            items: 5,
        },
        700: {
            items: 5,
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
                    <img src={o2} className="owlCarouselImage" alt="Kanal" title="Kanal"></img>
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
                    <img src={o4} className="owlCarouselImage" alt="Lamine" title="Lamine"></img>
                   <p className="owlCarouselContent">Lamine</p>
               </div>
               
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o5} className="owlCarouselImage" alt="Dolgu" title="Dolgu"></img>
                   <p className="owlCarouselContent">Dolgu</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o6} className="owlCarouselImage" alt="Endodonti" title="Endodonti"></img>
                   <p className="owlCarouselContent">Endodonti</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o7} className="owlCarouselImage" alt="Ortodonti" title="Ortodonti"></img>
                   <p className="owlCarouselContent">Ortodonti</p>
               </div> 
            </div>

            

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o9} className="owlCarouselImage" alt="Periodonti" title="Periodonti"></img>
                   <p className="owlCarouselContent">Pedodonti</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o10} className="owlCarouselImage" alt="Periodonti" title="Periodonti"></img>
                   <p className="owlCarouselContent">Porselen</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o8} className="owlCarouselImage" alt="Periodonti" title="Periodonti"></img>
                   <p className="owlCarouselContent">Periodonto</p>
               </div> 
            </div>
            
            
           
        </OwlCarousel>

        
      
    )
}

