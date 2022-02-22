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
import uk from "./doktorlarFoto/UfukKelesoglu.jpeg";
import ty from "./doktorlarFoto/TayfunYeter.jpeg";
import eu from "./doktorlarFoto/EnesBurakUgurlu.png";


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


export default function DoktorOwl() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={hs} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Diş Hekimi Hayati Şahin</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Hayati Şahin 2019 yılında Tokat Gazi Osman Paşa Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Merzifon Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={ea} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Diş Hekimi Emre Atalay</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Emre Atalay 2019 yılında Tokat Gazi Osman Paşa Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Merzifon Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                    </div>
                </div>
                <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={eu} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Protez Uzm. Enes Burak Uğurlu</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Enes Burak Uğurlu 2017 yılında Samsun 19 Mayıs Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Protez Uzmanlığını Samsun 19 Mayıs Üniversitesi Diş Hekimliği Fakültesinde tamamlamıştır.</p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={uk} className="owlCarouselImageDoktor" alt="Vezirköprü Medisam" title="Vezirköprü Medisam"></img>
                        <p className="owlCarouselContentDoktor">Ortodonti Uzm. Ufuk Keleşoğlu </p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Ufuk Keleşoğlu 2015 yılında Sivas Cumhuriyet Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Ortodonti (Tel Tedavisi) uzmanlığını Tokat Gazi Osman Paşa Üniversitesi Diş Hekimliği Fakültesinde tamamlamıştır. </p>
                        
                    </div>
                </div>
             
                <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={ty} className="owlCarouselImageDoktor" alt="Merzifon Medisam" title="Merzifon Medisam"></img>
                        <p className="owlCarouselContentDoktor">Cerrahi Uzm. Tayfun Yeter</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Tayfun Yeter, 2017 yılında Samsun 19 Mayıs Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Ağız, Diş ve Çene Cerrahisi Uzmanlığını Erzurum Atatürk Üniversitesi Diş Hekimliği Fakültesinde tamamlamıştır.</p>
                    </div>
                </div>
               
               
              
            
</OwlCarousel>


            
        
    )
}
