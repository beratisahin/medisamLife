import React from 'react'
import './DoktorOwl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import hs from "./doktorlarFoto/HayatiSahin.jpeg";
import ea from "./doktorlarFoto/EmreAtalay.jpeg";
import eaBg from "./doktorlarFoto/EmreAtalay_bg.png";
import hsBg from "./doktorlarFoto/HayatiSahin_bg.png";
import avatar from "./doktorlarFoto/avatarbg.png";


//Owl Carousel Settings
const options = {
    margin: 5,
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


export default function DoktorOwl() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={hsBg} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Hayati Şahin</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Hayati Şahin  1997 Vezirköprü doğumludur. 2014-2019 yılları arasında Tokat Gazi Osman Paşa Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Kariyerine Kütahya Ceramorium Diş Polikliniğinde başlamıştır. Merzifon Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={eaBg} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Dt. Emre Atalay</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Emre Atalay 1995 Samsun doğumludur. 2014-2019 yılları arasında Tokat Gazi Osman Paşa Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Kariyerine Kütahya Ceramorium Diş Polikliniğinde başlamıştır. Merzifon Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={avatar} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Uzm. Dt. Ufuk Keleşoğlu </p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Ufuk Keleşoğlu  1990 Çorunm doğumludur. 2010-2015 yılları arasında Sivas Cumhuriyet Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Kariyerine Çorum Özel Denthol Diş Polikliniğinde başlamıştır. Merzifon Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={avatar} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Uzm. Dt. Enes Burak Uğurlu</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Enes Burak Uğurlu 1993 Vezirköprü doğumludur. 2012-2017 yılları arasında Samsun 19 Mayıs Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Kariyerine Samsun Özel Medisam Diş Polikliniğinde başlamıştır. Merzifon Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                    </div>
                </div>
               
               
              
            
</OwlCarousel>


            
        
    )
}
