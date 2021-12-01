import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import k1 from "./klinikFoto/klinik1.jpeg";
import k2 from "./klinikFoto/klinik2.jpeg";
import k3 from "./klinikFoto/klinik3.jpeg";
import k4 from "./klinikFoto/klinik4.jpeg";
import k5 from "./klinikFoto/klinik5.jpg";
import k6 from "./klinikFoto/klinik6.jpeg";


//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    dots:2,
    autoplay: true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    },
  };


export default function Klinik() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={k1} className="owlCarouselImageDoktor" alt="İmplant" title="İmplant"></img>
                        
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={k2} className="owlCarouselImageDoktor" alt="Kanal" title="Kanal"></img>
                        
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={k3} className="owlCarouselImageDoktor" alt="İmplant" title="İmplant"></img>
                     
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={k4} className="owlCarouselImageDoktor" alt="Kanal" title="Kanal"></img>
                        
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={k5} className="owlCarouselImageDoktor" alt="İmplant" title="İmplant"></img>
                     
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={k6} className="owlCarouselImageDoktor" alt="Kanal" title="Kanal"></img>
                        
                    </div>
                </div>
                
               
              
                
                

</OwlCarousel>


            
        
    )
}

