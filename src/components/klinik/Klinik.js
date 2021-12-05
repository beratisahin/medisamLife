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
                    <div className="owlCarouselTempKlinik">
                        <img src={k1} className="owlCarouselImageKlinik" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempKlinik">
                            <img src={k2} className="owlCarouselImageKlinik" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k3} className="owlCarouselImageKlinik" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                     
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempKlinik">
                            <img src={k4} className="owlCarouselImageKlinik" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k5} className="owlCarouselImageKlinik" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                     
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempKlinik">
                            <img src={k6} className="owlCarouselImageKlinik" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        
                    </div>
                </div>
                
               
              
                
                

</OwlCarousel>


            
        
    )
}

