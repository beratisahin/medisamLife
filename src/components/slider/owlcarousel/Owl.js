import React from 'react'
import './Owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';

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
                   <img src="https://drive.google.com/uc?export=view&id=15HiTwcUpc2EOK-pSYgBxqINb9l659p7n" className="owlCarouselImage" alt="İmplant" title="İmplant"></img>
                   <p className="owlCarouselContent">İmplant</p>
                   
               </div>
               
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1x0f-Kgi0ulntJWBRX1QCp1wUKfvU89Ma" className="owlCarouselImage" alt="Kanal" title="Kanal"></img>
                   <p className="owlCarouselContent">Kanal</p>
               </div>
                
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    
                    <img src="https://drive.google.com/uc?export=view&id=1-LC7cillGhafjh5iT83fBOwgydL-6WYo" className="owlCarouselImage" title="Zirkonyum" alt="Zirkonyum"></img>
                   <p className="owlCarouselContent">Zirkonyum</p>

               </div>
               
               
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=151QbuHAmOYQnF4dgXABCFwh-xIryQSFM" className="owlCarouselImage" alt="Lamine" title="Lamine"></img>
                   <p className="owlCarouselContent">Lamine</p>
               </div>
               
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1kfMORa0U_IC8q2_vO3c2xAkCcE6L3ON3" className="owlCarouselImage" alt="Dolgu" title="Dolgu"></img>
                   <p className="owlCarouselContent">Dolgu</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1VZieqsnci5AEu9MesDPCSsdPXXQN5hTQ" className="owlCarouselImage" alt="Endodonti" title="Endodonti"></img>
                   <p className="owlCarouselContent">Endodonti</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1DjJItt8MbU4X2Zmm_ZyVIuVgfjBadylW" className="owlCarouselImage" alt="Ortodonti" title="Ortodonti"></img>
                   <p className="owlCarouselContent">Ortodonti</p>
               </div> 
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1sD-YDwmMvzJCBEO_J3uxYIFIxNxyDjD_" className="owlCarouselImage" alt="Periodonti" title="Periodonti"></img>
                   <p className="owlCarouselContent">Periodonto</p>
               </div> 
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1KL-V4pzyyPpPMtvUUcHW2mUtTSCwjVK5" className="owlCarouselImage" alt="Periodonti" title="Periodonti"></img>
                   <p className="owlCarouselContent">Pedodonti</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src="https://drive.google.com/uc?export=view&id=1IlZbsPMf5DSqVNq073YziG2VJK7LFoBq" className="owlCarouselImage" alt="Periodonti" title="Periodonti"></img>
                   <p className="owlCarouselContent">Porselen</p>
               </div> 
            </div>

           
            
            
           
        </OwlCarousel>

        
      
    )
}

