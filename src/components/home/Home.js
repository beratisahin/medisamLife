import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Slider from "../slider/Slider";
import Owl from "../slider/owlcarousel/Owl";
import DoktorOwl from "../doktorlar/DoktorOwl.js";
import Klinik from "../klinik/Klinik.js";


import testimg from "../header/MedisamYuvarlakLogo.png"
import Test from "../test/Test";


import TopluHizmet from "../topluhizmet/TopluHizmet.js";


function Home() {
  return (
    <div>
 
      <div className="col-12 homepageSlider">
         <Slider/>
      </div>
      <div className="col-12">
            <NedenBercislina/>
      </div>
      
      <br/>
      <hr/>
      <div className="row">
        <TopluHizmet/>
      </div>
        

      <hr/>
      <div className="col-12">
        <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",color:"#3d667c",fontFamily: "'Times New Roman', Times, serif;"}}>Doktorlarımız</h2>
         <DoktorOwl/>
      </div>
      <br/>
      <hr/>
      <div className="col-12">
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",color:"#3d667c",fontFamily: "'Times New Roman', Times, serif;"}}>Galerimiz</h2>
         <Klinik/>
      </div>
     
      
      <br/>
      <hr/>
      <div className="col-12">
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",color:"#3d667c",fontFamily: "'Times New Roman', Times, serif;"}}>Hizmetlerimiz</h2>
         <Owl/>
      </div>
      <br/>
      <div className="col-12">
            <Mail/>
      </div>
      <br/>
      <div className="row m-2">
          <div className="col-lg-6 col-12 harita" style={{marginTop:"2.5rem"}}>
        
                    <p className="harita_baslik">Merzifon Şubemiz</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12067.29641327046!2d35.4455671!3d40.8757342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdf3480789d414e0!2zTWVkaXNhbSBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBQb2xpa2xpbmnEn2kgLSBNZXJ6aWZvbg!5e0!3m2!1str!2str!4v1638480874217!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #2E6772 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
          </div> 

          <div className="col-lg-6  col-12 harita" style={{marginTop:"2.5rem"}}>
                    <p className="harita_baslik">Vezirköprü Şubemiz</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12018.756783454437!2d35.460436!3d41.1413104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4ffaefac0d0f78b!2zTUVExLBTQU0gQcSfxLF6IHZlIERpxZ8gU2HEn2zEscSfxLEgUG9saWtsaW5pxJ9pIC0gVmV6aXJrw7ZwcsO8!5e0!3m2!1str!2str!4v1638479626888!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #2E6772 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
                
          </div> 

      </div>

    </div>
  );
}

export default Home;
