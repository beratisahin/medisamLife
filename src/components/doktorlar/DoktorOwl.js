import React from 'react'
import './DoktorOwl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import ea from "./doktorlarFoto/EmreAtalay.jpeg";
import hs from "./doktorlarFoto/HayatiSahin.jpeg";


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


export default function DoktorOwl() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={hs} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Hayati Şahin</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={ea} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Emre Atalay</p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={hs} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Hayati Şahin</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={ea} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Emre Atalay</p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={hs} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Hayati Şahin</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={ea} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Emre Atalay</p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={hs} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Hayati Şahin</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={ea} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Emre Atalay</p>
                    </div>
                </div>
              
                
                

</OwlCarousel>


            
        
    )
}
