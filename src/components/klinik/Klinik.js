import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';






//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
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


export default function Klinik() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1m_3ZTRkvVCSYuNP_veU43TGY3vOrPngp" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1Kv9r0bvgPbkbOZoVLw-DLb5xF7Flw4Ck" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1MCmQnY351hGOOKDLR4jzfAwcrPHRXe3p" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1WOm5AKTZOcPa2CSQkQg2H6CMejsZjaeF" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1aRFDryyNIX2YE665QpS9qQ6lIWqL_ZDB" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1VR_f9AjoNcoiMFWirlz1QLQeSk3FHqBh" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1gDMFqDOOnz-lv8OKRSjfIVYAMlCT9l4c" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1-CvsA1Cjv37doDg2eUMKsWpvIy1bINv-" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1uQgqKQs1hR6JXxtt623yefToK0Qe8Lfp" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1INWjNEBUo4IDWOOWT1j_cUqsJLMSf7Ak" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1elntPqKMAPzSJfmZGoP9GkrOgYasXYJD" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1Xfa-X4rolhzylwsf_I5HQhjfGJCSKxcZ" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=17IKut-_siZDcWXaZqgv7gAXz1Dg2zrSo" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1WOYIQbtTaAsmizv8cqDf-NcWs3pCjImX" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=179ZPTpMsE9M_A8C21qVrk7atyWm3ukFl" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1mf24H3HydMM5cJ8XDEfOv4LNzwf5U-Mj" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1BAKJlrx5QKWYbUGkimfTrKHhKmpoXbmR" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1aMwLCGtdFnRsUF83JRFjKtZveyq0RLBq" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1i1-3IXCpkNi5kc7IMtXinnDa-h-itGWN" className="owlCarouselImageKlinik" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src="https://drive.google.com/uc?export=view&id=1iSjv_Jd7ZoBBjeM72Hr_DJzb_-nvwvU5" className="owlCarouselImageKlinik" alt="Vezirköprü Diş Medisam" title="Vezirköprü Diş Medisam"></img>
                    </div>
                </div>
                
                
               
              
                
                

</OwlCarousel>


            
        
    )
}

