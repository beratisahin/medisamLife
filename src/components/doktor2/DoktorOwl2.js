import React from 'react'
import './DoktorOwl2.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import d1 from "./1.png";
import d2 from "./2.png";
import d3 from "./3.png";
import d4 from "./4.png";
import d5 from "./5.png";
import d6 from "./6.png";


//Owl Carousel Settings
const options = {
    margin: 5,
    autoplayHoverPause:true,
    responsiveClass: true,
    dots:2,
    autoplay: true,
    loop:true,
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


export default function DoktorOwl2() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarousel2">
                        <img src={d1} className="owlCarouselImageDoktor2" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>     
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarousel2">
                        <img src={d2} className="owlCarouselImageDoktor2" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>     
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarousel2">
                        <img src={d3} className="owlCarouselImageDoktor2" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>     
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarousel2">
                        <img src={d4} className="owlCarouselImageDoktor2" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>     
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarousel2">
                        <img src={d5} className="owlCarouselImageDoktor2" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>     
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarousel2">
                        <img src={d6} className="owlCarouselImageDoktor2" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>     
                    </div>
                </div>
               
               
               
              
               
              
            
</OwlCarousel>


            
        
    )
}
