import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Slider from "../slider/Slider";
import Owl from "../slider/owlcarousel/Owl";


import testimg from "../header/MedisamYuvarlakLogo.png"
import Test from "../test/Test";
import cardimg from "./card1.jpg";
import ortodonti from "./ortodonti.jpg";
import implant from "./implant.jpg";


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
      
      <div className="row mr-4 servicebox">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <Test
              photo={testimg}
              title="İmplant"
              text="Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Polikliniğimizde uzman hekimlerimiz tarafından implant tedavisi uygulanmaktadır. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz."
            />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <Test
              photo={testimg}
              title="Ortodonti"
              text="Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Polikliniğimizde uzman hekimlerimiz tarafından implant tedavisi uygulanmaktadır. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz."
            />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <Test
              photo={testimg}
              title="Zirkonyum"
              text="Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Polikliniğimizde uzman hekimlerimiz tarafından implant tedavisi uygulanmaktadır. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz."
            />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <Test
              photo={testimg}
              title="Lamine"
              text="Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Polikliniğimizde uzman hekimlerimiz tarafından implant tedavisi uygulanmaktadır. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz."
            />
        </div>

        
      </div>
      <br/>
      
      
      <div class="container" style={{margin:"30px"}}>
              <div class="row" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                <div class="image">
                  <img src={ortodonti} alt="medisam" style={{width:"100%",height:"30rem"}}></img>
                  <div class="details">
                      <a href="#" style={{textDecoration:"none",color:"#168B80"}}><h2><span>Ortodonti</span></h2></a>
                      <p>Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Polikliniğimizde uzman hekimlerimiz tarafından implant tedavisi uygulanmaktadır. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz.</p>
                  </div>

                  <div class="more">
                    <a href="#" class="read-more">Read <span>More</span></a>
                    <div class="icon-links">
                      <a href="#"><i class="fas fa-heart"></i></a>
                      <a href="#"><i class="fas fa-eye"></i></a>
                      <a href="#"><i class="fas fa-paperclip"></i></a>
                    </div>
                  </div>

                </div>

                <div class="image">
                  <img src={implant} alt="medisam" style={{width:"100%",height:"30rem"}}></img>
                  <div class="details">
                      <a href="#" style={{textDecoration:"none",color:"#168B80"}}><h2><span>İmplant</span></h2></a>
                      <p>Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Polikliniğimizde uzman hekimlerimiz tarafından implant tedavisi uygulanmaktadır. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz.</p>
                  </div>

                  <div class="more">
                    <a href="#" class="read-more">Read <span>More</span></a>
                    <div class="icon-links">
                      <a href="#"><i class="fas fa-heart"></i></a>
                      <a href="#"><i class="fas fa-eye"></i></a>
                      <a href="#"><i class="fas fa-paperclip"></i></a>
                    </div>
                  </div>

                </div>
              </div>

            
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
