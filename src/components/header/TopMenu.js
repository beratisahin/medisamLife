import React, { Component } from "react";
import { Link } from "react-router-dom";
import medisam from "../footer/transparentmedisam.png"
import "./TopMenu.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import medisamlogo from "./MedisamYuvarlakLogo.png";

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{ width: "100%",backgroundColor:"white" }}
      >
        <div className="col-12" style={{display:"inline"}}>

            <div className="col-2" style={{float:"left"}}>
              <a href="/" title="Medisam Tıp Merkezi">
              <img
                className="top_image"
                style={{ height: "11rem",width:"11rem",padding:"1px",margintop:"2px",marginLeft:"2px" }}
                src={medisamlogo}
                alt="logo"
                
              ></img>
              </a>
              
            </div>

            <div
              className="col-8 firma_div"
              style={{ color: "white",float:"left",marginTop:"2rem"}}
              >
              <Link className="firma_ismi" to="/" style={{ color: "#2E6772", fontSize:"xx-large",textAlign:"center",align:"center",margin:"auto",display:"block"}}>
                <b>Medisam Life</b>
              </Link>
            </div>


          
            <div className="col-2 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem",marginRight:"-1rem"}}>
                 &nbsp;
                 
                 <a
                    href="https://www.google.com/maps/place/Yeni,+Haf%C4%B1z+Mustafa+Cd.+No:67,+05300+Merzifon%2FAmasya/@40.8757342,35.4455671,17z/data=!4m2!3m1!1s0x408702394c8ecf21:0x7d0637087a365c6a"
                    target="_blank"
                    style={{ float: "left" }}
                  >
                    <LocationOnIcon className="icon_top" />
                    
                  </a>
                  <p className="top_icon_info">&nbsp;Merzifon/Amasya</p>

                  <a
                    href="tel: +905461054500"
                    target="_blank"
                    style={{ float: "left"}}
                  >
                    <AccessTimeIcon className="icon_top"  />
                  </a>
                  <p className="top_icon_info">&nbsp;7/24</p>
            </div>

        </div>
      </div>
    );
  }
}
