import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import logo from "../header/Medisam.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';




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
        <div class="row p-4" style={{ backgroundColor: "black", height:"auto" }}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <a href="/" title="Bercislina Epilasyon ve Güzellik Merkezi">
              <img
                src={logo}
                alt="logo"
                style={{ width: "25rem", height: "12rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                color: "#C0C0C0",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Estetik ve güzellik anlayışının sağlıkla ön planda tutulduğu güzellik merkezimde, koşulsuz müşteri memnuniyeti sunma amaçlı konusunda deneyimli ve profesyonel bir ekip tarafından hizmet vermektedir.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "#C0C0C0", fontSize: "18px" }}>Hizmetlerimiz</b>
            <ul className="bottomlist">
              <li onClick={() => this.scrollToTop()}>
                <Link to="/cilt-bakim" style={{ color: "#C0C0C0" }}>Cilt Bakım</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/epilasyon" style={{ color: "#C0C0C0" }}>
                  Epilasyon
                </Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/kalici-fondoten" style={{ color: "#C0C0C0" }}>Kalıcı Fondoten</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/kas-kontur" style={{ color: "#C0C0C0" }}>Kaş Kontür</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/dermaterapi" style={{ color: "#C0C0C0" }}>
                  Dermaterapi
                </Link>
              </li>
              <li onClick={() => this.scrollToTop()} >
                <Link to="/kalici-makyaj" style={{ color: "#C0C0C0" }}>Kalıcı Makyaj</Link>
              </li>
              
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "#C0C0C0", fontSize: "18px" }}>Kurumsal</b>
            <ul className="bottomlist">
              <li onClick={() => this.scrollToTop()} >
                <Link to="/hakkimizda" style={{ color: "#C0C0C0" }}>Hakkımızda</Link>
              </li>
              <li onClick={() => this.scrollToTop()}>
                <Link to="/belgelerimiz" style={{ color: "#C0C0C0" }}>Belgelerimiz</Link>
              </li>
              <li onClick={() => this.scrollToTop()} >
                <Link to="/referanslarimiz" style={{ color: "#C0C0C0" }}>Referanslarımız</Link>
              </li>
              <li onClick={() => this.scrollToTop()} >
                <Link to="/ekibimiz" style={{ color: "#C0C0C0" }}>Ekibimiz</Link>
              </li>
              <li onClick={() => this.scrollToTop()} >
                <Link to="/iletisim" style={{ color: "#C0C0C0" }}>İletişim</Link>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "15px" }}
          >
            <p style={{ color: "#C0C0C0", fontWeight: "bold", fontSize: "18px" }}>
              Sosyal Medya
            </p>
            <a
              href="https://www.facebook.com/bercislinakahramanmaras/"
              target="_blank"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/bercislinavipadiyaman/"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://wa.me/+905435390177"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="tel: +905435390177"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>

            <br />
            <br/>
            <p style={{ color:"#4682B4", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              bercislina_erzurum@gmail.com  
            </p>
            <p style={{ color:"#4682B4", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0543 539 01 77  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{ color:"#4682B4", fontSize: "14px", textAlign: "left" }}>
              
              <a>
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Atatürk Mahallesi Cumhuriyet Caddesi <br/> Yakutiye / Erzurum{" "}

             
            </p>
          </div>
          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",color:"#C0C0C0",paddingLeft:"1rem",float:"left"}}> ©2021 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               style={{fontSize:"12px",color:"#C0C0C0",paddingRight:"1rem",float:"right",textAlign:"right"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>

          <div className="roof-phone">
                <a
                    href="tel: +905435390177"
                    className="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    
                    <PhoneIcon className="phone-icon"/>
                  
                </a>
            </div>

            

            <div className="roof-whatsapp">
                <a
                    href="https://wa.me/+905435390177"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    <WhatsAppIcon className="whatsapp-icon"/>
                  
                </a>
            </div>

        </div>

        
      </div>
    );
  }
}
