import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from 'primereact/menubar';
import logo from "./MedisamYuvarlakLogo.png";

import BusinessIcon from '@material-ui/icons/Business';
import HouseIcon from '@material-ui/icons/House';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoodIcon from '@material-ui/icons/Mood';
import MedisamLogo from "../header/MedisamIconTr.png";
export default class Navbar extends Component {
  componentDidMount () {
    const script = document.createElement("script");

  
      const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function () {
      this.classList.toggle("close");
    });
  

    document.body.appendChild(script);
}
  render() {
    
    return (
    
         <header>
          <nav class="navbar">
            <div class="branding">
              <a href="/anasayfa">
                <img  className="MedisamLogo" title="Medisam Ağız ve Diş Sağlığı Polikliniği" src={MedisamLogo}></img>
              </a>
                
            </div>
            <label for="input-hamburger" class="hamburger "></label>
            <input type="checkbox" id="input-hamburger" hidden></input>
        <ul class="menu">
          <li><a href="/" class="menu-link" style={{fontSize:"medium"}}><HomeIcon/>&nbsp;Ana Sayfa</a></li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><BusinessIcon/>&nbsp;Kurumsal &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="/hakkimizda" class="menu-link">Hakkımızda</a></li>
            <li><a href="/belgelerimiz" class="menu-link">Belgelerimiz</a></li>
            <li><a href="/hekimlerimiz" class="menu-link">Hekimlerimiz</a></li>
            <li><a href="/referanslarimiz" class="menu-link">Referanslarımız</a></li>

              
              
            </ul>
          </li>

          
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><LocalHospitalIcon/>&nbsp;Hizmetlerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">

            <li class="has-dropdown">
                <a class="menu-link">Ağız ve Diş Sağlığı &nbsp;
                  <span class="arrow"></span>
                </a>
                <ul class="submenu">
                 
                  
                  <li class="has-dropdown">
                    <a class="menu-link">Ağız Diş ve Çene Cerrahisi&nbsp;
                      <span class="arrow"></span>
                    </a>
                    <ul class="submenu">
                      <li><a href="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/yirmi-yas-dis-tedavisi" class="menu-link">20 Yaş Diş Tedavisi</a></li>
                      <li><a href="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/gomulu-dis-operasyonlari" class="menu-link">Gömülü Diş Operasyonları</a></li>
                      <li><a href="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/kist-ve-tumor-operasyonlari" class="menu-link">Kist ve Tümör Operasyonları</a></li>
                      <li><a href="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/cene-eklemi-rahatsizliklari" class="menu-link">Çene Eklemi Rahatsızlıkları</a></li>

                    </ul>
                  </li>
                  <li><a href="/agiz-dis-sagligi/implant" class="menu-link">İmplant</a></li>
                  <li><a href="/agiz-dis-sagligi/protetik-dis-tedavisi" class="menu-link">Protetik Diş Tedavisi</a></li>
                  <li><a href="/agiz-dis-sagligi/zirkonyum-dis-kaplama" class="menu-link">Zirkonyum Diş Kaplama</a></li>
                  <li><a href="/agiz-dis-sagligi/porselen-lamine" class="menu-link">Porselen Lamine</a></li>
                  <li><a href="/agiz-dis-sagligi/dis-beyazlatma" class="menu-link">Diş Beyazlatma</a></li>
                  <li><a href="/agiz-dis-sagligi/ortodonti" class="menu-link">Ortodonti (Tel Tedavisi)</a></li>
                  <li><a href="/agiz-dis-sagligi/pedodonti" class="menu-link">Çocuk Diş Hekimliği (Pedodonti)</a></li>
                  <li><a href="/agiz-dis-sagligi/kanal-ve-dolgu-tedavisi" class="menu-link">Kanal ve Dolgu Tedavisi</a></li>
                  <li><a href="/agiz-dis-sagligi/periodontoloji" class="menu-link">Diş Eti Tedavisi (Periodontoloji)</a></li>
                  <li><a href="/agiz-dis-sagligi/dijital-dis-hekimligi" class="menu-link">Dijital Diş Hekimliği</a></li>
                 
                </ul>
              </li>

              <li><a href="/lazer-epilasyon-ve-guzellik-merkezi" class="menu-link">Güzellik Merkezi</a></li>
              <li><a href="/sac-ekim-merkezi" class="menu-link">Saç Ekim Merkezi</a></li>
              
            </ul>
          </li>
          <li><a href="/galeri" class="menu-link" style={{fontSize:"medium"}}><CameraAltIcon/>&nbsp;Galeri</a></li>
          <li><a href="/sikca-sorulan-sorular" class="menu-link" style={{fontSize:"medium"}}><HelpOutlineIcon/>&nbsp;SSS</a></li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><AccountTreeIcon/>&nbsp;Şubelerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="/merzifon-dis" class="menu-link">Merzifon Diş Polikliniği</a></li>
            <li><a href="/vezirkopru-dis" class="menu-link">Vezirköprü Diş Polikliniği</a></li>
              
              
            </ul>
          </li>
          <li><a href="/iletisim" class="menu-link" style={{fontSize:"medium"}}><ContactMailIcon/>&nbsp;İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}
