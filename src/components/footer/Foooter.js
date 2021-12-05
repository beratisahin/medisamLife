import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import MainLogo from "../header/MedisamIconTr.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';



import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="footer">
        <div class="row p-4" style={{ backgroundColor: "white", height:"auto" }}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <a href="/" title="Medisam Ağız ve Diş Sağlığı Polikliniği" alt="Medisam Ağız ve Diş Sağlığı Polikliniği">
              <img
                src={MainLogo}
                alt="logo"
                style={{ width: "30rem", height: "12rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Medisam Ağız ve Diş Sağlığı Polikliniği olarak gelişen teknolojiyi ve yenilikleri yakından izlemek, dental sektörde müşteri memnuniyetini amaç edinmek, kaliteli ve hızlı hizmet anlayışı ile ilerleyerek yolumuza devam etmek başlıca misyonumuzdur.
            </p>
          </div>


          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <b style={{ color: "#3d667c", fontSize: "18px" }}>Kurumsal</b>
            <hr/>
            <ul className="bottomlist">
              <li onClick={() => this.scrollToTop()} >
                <Link to="/hakkimizda" style={{ fontSize:"small",color:"black"}}>Hakkımızda</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/belgelerimiz" style={{ fontSize:"small",color:"black" }}>Belgelerimiz</Link>
              </li>
              <li onClick={() => this.scrollToTop()} >
                <Link to="/referanslarimiz" style={{fontSize:"small",color:"black"}}>Referanslarımız</Link>
              </li>
              <li onClick={() => this.scrollToTop()} >
                <Link to="/ekibimiz" style={{ fontSize:"small",color:"black"}}>Ekibimiz</Link>
              </li>
              
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <p style={{ color: "#3d667c", fontWeight: "bold", fontSize: "18px" }}>
              Merzifon Medisam Life
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/medisamadsp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://wa.me/+905461054500"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="tel: +905461054500"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>

            <br />
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:medisamlifemerzifon@gmail.com">
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              medisamlifemerzifon@gmail.com  
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905461054500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0546 105 45 00  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://www.google.com/maps/place/Yeni,+Haf%C4%B1z+Mustafa+Cd.+No:67,+05300+Merzifon%2FAmasya/@40.8757342,35.4455671,17z/data=!4m2!3m1!1s0x408702394c8ecf21:0x7d0637087a365c6a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Yeni Mah. Hafız Mustafa Cd. No:67-1 <br/> Merzifon / Amasya{" "}

             
            </p>
          </div>


          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem" }}>
            <p style={{ color: "#3d667c", fontWeight: "bold", fontSize: "18px" }}>
              Vezirköprü Medisam Life
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/medisamadsp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://wa.me/+905453132855"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="tel: +905453132855"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>

            <br />
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:medisamlifevezirkopru@gmail.com"> 
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              medisamlifevezirkopru@gmail.com  
            </p>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905453132855"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0545 313 28 55  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://www.google.com/maps/place/Yeni,+Haf%C4%B1z+Mustafa+Cd.+No:67,+05300+Merzifon%2FAmasya/@40.8757342,35.4455671,17z/data=!4m2!3m1!1s0x408702394c8ecf21:0x7d0637087a365c6a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Fazıl Ahmet Paşa Mah. 113. Sk. No:7 <br/> Vezirköprü / Samsun{" "}

             
            </p>
          </div>





          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",paddingLeft:"1rem",float:"left"}}> ©2021 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>


          <div className="roof-location">
              <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12067.29641327046!2d35.4455671!3d40.8757342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdf3480789d414e0!2zTWVkaXNhbSBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBQb2xpa2xpbmnEn2kgLSBNZXJ6aWZvbg!5e0!3m2!1str!2str!4v1638480874217!5m2!1str!2str" className="location_float" target="_blank" rel="noopener noreferrer">
                  <LocationOnIcon className="location-icon"/>
              </a>
          </div>

          <div className="roof-phone">
              <a href="tel: +905461054500" className="phone_float" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="phone-icon"/>  
              </a>
          </div>

          <div className="roof-whatsapp">
              <a href="https://wa.me/+905461054500" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="whatsapp-icon"/>
              </a>
          </div>

        </div>

        
      </div>
    );
  }
}
