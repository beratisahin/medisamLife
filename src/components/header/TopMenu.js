import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopMenu.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MainLogo from "./MedisamTransparanLogo.png";

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{ width: "100%",backgroundColor:"white" }}
      >
        <div className="col-12" style={{display:"inline"}}>

            <div className="col-4 col-lg-4 col-md-6" style={{float:"left"}}>
              <a href="/anasayfa" title="Medisam Ağız ve Diş Sağlığı Polikliniği" alt="Medisam Ağız ve Diş Sağlığı Polikliniği"> 
              <img
                className="top_image"
                style={{ height: "11rem",width:"11rem",padding:"1px",margintop:"2px",marginLeft:"2px" }}
                src={MainLogo}
                alt="logo"
                
              ></img>
              </a>
              
            </div>

            <div
              id="firma_ismi_div"
              className="col-4 firma_div"
              style={{ color: "white",float:"left",marginTop:"2rem"}}
              >
              <Link className="firma_ismi" to="/" style={{fontFamily:"serif" ,color: "#2E6772", fontSize:"x-large",textAlign:"center",align:"center",margin:"auto",display:"block"}}>
                <b>Medisam Ağız ve Diş Sağlığı Polikliniği</b>
              </Link>
            </div>


          
            <div id="medya_div" className="col-4 col-lg-4 col-md-6 medya-div" style={{display:'flex', justifyContent:'flex-end',padding:"0.5rem",marginTop:"1rem"}}>
               
            <div className="col-5">
                 <a
                    href="https://www.google.com/maps/place/Yeni,+Haf%C4%B1z+Mustafa+Cd.+No:67,+05300+Merzifon%2FAmasya/@40.8757342,35.4455671,17z/data=!4m2!3m1!1s0x408702394c8ecf21:0x7d0637087a365c6a"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ float: "left"}}
                  >
                    <LocationOnIcon className="icon_top" />
                    
                    
                  </a>
                  <p className="top_icon_info_sehir" >&nbsp;Merzifon/Amasya</p>
                  <br/>
                  <br/>
                  <a
                    href="https://www.google.com/maps/place/Yeni,+Haf%C4%B1z+Mustafa+Cd.+No:67,+05300+Merzifon%2FAmasya/@40.8757342,35.4455671,17z/data=!4m2!3m1!1s0x408702394c8ecf21:0x7d0637087a365c6a"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ float: "left" }}
                  >
                    <LocationOnIcon className="icon_top" />
                    
                  </a>
                  <p className="top_icon_info_sehir">&nbsp;Vezirköprü/Samsun</p>
                  

                  

                  </div>  
                  <div className="col-5">
                 
                  <a
                    href="tel: +905461054500"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ float: "left"}}
                  >
                    <LocalPhoneIcon className="icon_top"  />
                  </a>
                  <p className="top_icon_info">&nbsp;0546 105 45 00</p>
                  <br/>
                  <br/>
                  <a
                    href="tel: +905461054500"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ float: "left"}}
                  >
                    <LocalPhoneIcon className="icon_top"  />
                  </a>
                  <p className="top_icon_info">&nbsp;0545 313 28 55</p>
                  </div>
                  
              
            </div>

            <div className="hergun" style={{display:"none"}}>
              
              <p className="hergunsaat_text"><AccessTimeIcon className="hergunsaat_icon"/>&nbsp;Her Gün: 09.00 - 24.00</p>
            </div>

        </div>
      </div>
    );
  }
}
