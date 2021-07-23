import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Slider from "../slider/Slider";
import Owl from "../slider/owlcarousel/Owl";


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
      <div className="col-12">
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.203230287595!2d35.4448884989239!3d40.87597957902375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408702394c8ecf21%3A0x7d0637087a365c6a!2sYeni%2C%20Haf%C4%B1z%20Mustafa%20Cd.%20No%3A67%2C%2005300%20Merzifon%2FAmasya!5e0!3m2!1str!2str!4v1626605284152!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #2E6772 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
      </div> 

      <div className="col-lg-6  col-12 harita" style={{marginTop:"2.5rem"}}>
                    <p className="harita_baslik">Vezirköprü Şubemiz</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.7928089536334!2d35.460363289363606!3d41.14140322226758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40864510d79883e5%3A0x8bcbca8663e43cd6!2zQ3VtaHVyaXlldCwgxLBzdGlrbGFsIENkLiAyL2EsIDU1OTAwIFZlemlya8O2cHLDvC9TYW1zdW4!5e0!3m2!1str!2str!4v1626603209513!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #2E6772 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
                
      </div> 

      </div>

           

    </div>
  );
}

export default Home;
