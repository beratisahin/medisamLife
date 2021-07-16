import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";


function Home() {
  return (
    <div>
      
      <br/>


      <div className="col-12">
            <NedenBercislina/>
      </div>
      <br/>
      <div className="col-12">
            <Mail/>
      </div>
      

      <div className="col-12 harita" style={{}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.7988213911913!2d35.439042315070886!3d40.87628897931434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087023ef7b7d891%3A0x4a77537b12f92286!2sYeni%2C%20Alparslan%20T%C3%BCrke%C5%9F%20Cd.%2C%2005300%20Merzifon%2FAmasya!5e0!3m2!1str!2str!4v1626127899649!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #2E6772 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
            </div> 

           

    </div>
  );
}

export default Home;
