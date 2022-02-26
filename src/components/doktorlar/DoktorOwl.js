import React from 'react'
import './DoktorOwl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';



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
                        <img src="https://drive.google.com/uc?export=view&id=12JFkdba1wV6GuNLQMNJ47muURRRsjHap" className="owlCarouselImageDoktor" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="owlCarouselContentDoktor">Diş Hekimi Hayati Şahin</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Hayati Şahin 2019 yılında Tokat Gazi Osman Paşa Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Merzifon Diş Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src="https://drive.google.com/uc?export=view&id=1kp3R_7sJP8MbMqOdTTDiHMdBZ2G0oF-i" className="owlCarouselImageDoktor" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="owlCarouselContentDoktor">Diş Hekimi Emre Atalay</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Emre Atalay 2019 yılında Tokat Gazi Osman Paşa Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Merzifon Diş Medisam Ağız ve Diş Sağlığı Polikliniği kurucu diş hekimlerinden biri olarak hizmet vermektedir.</p>
                    </div>
                </div>
                <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src="https://drive.google.com/uc?export=view&id=1p7EkU2UQhcyXlOcKMlYPU6B00R4PamDd" className="owlCarouselImageDoktor" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="owlCarouselContentDoktor">Protez Uzm. Dt. Enes Burak Uğurlu</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Enes Burak Uğurlu 2016 yılında Samsun Ondokuz Mayıs Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Protez Uzmanlığını Samsun 19 Mayıs Üniversitesinde tamamlamıştır. Medisam ADSP kurucu ortaklarındandır.</p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src="https://drive.google.com/uc?export=view&id=1jCKGeS8bZsZ7GQSi-3Cpkms1ia4uG7y0" className="owlCarouselImageDoktor" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="owlCarouselContentDoktor">Ortodonti Uzm. Dt. Ufuk Keleşoğlu </p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Ufuk Keleşoğlu 2015 yılında Sivas Cumhuriyet Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Ortodonti (Tel Tedavisi) uzmanlığını Tokat Gazi Osman Paşa Üniversitesi Diş Hekimliği Fakültesinde tamamlamıştır. </p>
                        
                    </div>
                </div>
             
                <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src="https://drive.google.com/uc?export=view&id=1lXJCUJYLb4j_Xw0VTI-n7p1n4iAczUvx" className="owlCarouselImageDoktor" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="owlCarouselContentDoktor">Cerrahi Uzm. Dt. Tayfun Yeter</p>
                        <p className="owlCarouselContentDoktorInfo">Diş Hekimimiz Tayfun Yeter, 2016 yılında Samsun 19 Mayıs Üniversitesi Diş Hekimlği Fakültesi'nden mezun olmuştur. Ağız, Diş ve Çene Cerrahisi Uzmanlığını Erzurum Atatürk Üniversitesi Diş Hekimliği Fakültesinde tamamlamıştır.</p>
                    </div>
                </div>
               
               
              
            
</OwlCarousel>


            
        
    )
}
