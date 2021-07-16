import React, { Component } from "react";
import { Link } from "react-router-dom";
import medisam from "../footer/transparentmedisam.png"
import "./TopMenu.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{ width: "100%",backgroundColor:"white" }}
      >
        <div className="col-12" style={{display:"inline"}}>

            <div className="col-4" style={{float:"left"}}>
              <a href="/" title="Medisam Tıp Merkezi">
              <img
                className="top_image"
                style={{ height: "12rem",width:"80%",padding:"1px",margintop:"2px",marginLeft:"2px" }}
                src={medisam}
                alt="logo"
                
              ></img>
              </a>
              
            </div>

            <div
              className="col-4 firma_div"
              style={{ color: "white",float:"left",marginTop:"2rem"}}
              >
              <Link className="firma_ismi" to="/" style={{ color: "#2E6772", fontSize:"xx-large",textAlign:"center",align:"center",margin:"auto",display:"block"}}>
                <b>Medisam Life</b>
              </Link>
            </div>


          
            <div className="col-4 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem",marginRight:"-1rem"}}>
                 &nbsp;
                 
                 <a
                    href="https://www.google.com/search?q=erzurum%20devlet%20hastanesi&rlz=1C1GCEU_enTR867TR868&oq=erzu&aqs=chrome.1.69i57j69i59j35i39j69i59j46i433j69i60l2j69i61.6271j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk03nJnVnSNdRNVOcwTgsCQxMyvqzPA:1622810193428&rflfq=1&num=10&rldimm=2502822250301760779&lqi=Chhlcnp1cnVtIGRldmxldCBoYXN0YW5lc2lIrN2SveWAgIAIWjoKEGRldmxldCBoYXN0YW5lc2kQARACGAAYAiIYZXJ6dXJ1bSBkZXZsZXQgaGFzdGFuZXNpKgQIAxABkgEQZ2VuZXJhbF9ob3NwaXRhbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSVmFIUm1SVmQzRUFFqgEYEAEqFCIQZGV2bGV0IGhhc3RhbmVzaSgh&ved=2ahUKEwitoPeI__3wAhWG-6QKHUT3BaQQvS4wAXoECAYQNg&rlst=f#rlfi=hd:;si:2502822250301760779,l,Chhlcnp1cnVtIGRldmxldCBoYXN0YW5lc2lIrN2SveWAgIAIWjoKEGRldmxldCBoYXN0YW5lc2kQARACGAAYAiIYZXJ6dXJ1bSBkZXZsZXQgaGFzdGFuZXNpKgQIAxABkgEQZ2VuZXJhbF9ob3NwaXRhbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSVmFIUm1SVmQzRUFFqgEYEAEqFCIQZGV2bGV0IGhhc3RhbmVzaSgh;mv:[[39.91315,41.274701799999995],[39.871922399999995,41.2338161]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                    target="_blank"
                    style={{ float: "left" }}
                  >
                    <LocationOnIcon className="icon_top" />
                    
                  </a>
                  <p className="top_icon_info">&nbsp;Merzifon/Amasya</p>

                  <a
                    href="tel: +905435390177"
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
