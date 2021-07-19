import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from 'primereact/menubar';


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
            
              
            </div>
            <label for="input-hamburger" class="hamburger "></label>
        <input type="checkbox" id="input-hamburger" hidden></input>
        <ul class="menu">
          <li><a href="/" class="menu-link" style={{fontSize:"medium"}}>Ana Sayfa</a></li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}>Kurumsal &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="/hakkimizda" class="menu-link">Hakkımızda</a></li>
            <li><a href="/belgelerimiz" class="menu-link">Belgelerimiz</a></li>
            <li><a href="/ekibimiz" class="menu-link">Ekibimiz</a></li>
            <li><a href="/referanslarimiz" class="menu-link">Referanslarımız</a></li>

              
              
            </ul>
          </li>

          
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}>Hizmetlerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
              <li class="has-dropdown">
                <a href="#" class="menu-link">Ağız ve Diş Sağlığı &nbsp;
                  <span class="arrow"></span>
                </a>
                <ul class="submenu">
                 
                  
                  <li class="has-dropdown">
                    <a href="#" class="menu-link">Ağız Diş ve Çene Cerrahisi&nbsp;
                      <span class="arrow"></span>
                    </a>
                    <ul class="submenu">
                      <li><a href="#" class="menu-link">İmplant</a></li>
                      <li><a href="#" class="menu-link">20 Yaş Dişler ve Tedavisi</a></li>
                      <li><a href="#" class="menu-link">Gömülü Diş Operasyonları</a></li>
                      <li><a href="#" class="menu-link">Kist ve Tümör Operasyonları</a></li>
                      <li><a href="#" class="menu-link">Botoks Uygulamaları</a></li>
                      <li><a href="#" class="menu-link">Çene Eklemi Rahatsızlıkları</a></li>

                    </ul>
                  </li>
                  <li><a href="#" class="menu-link">İmplant</a></li>
                  <li><a href="#" class="menu-link">Protetik Diş Tedavisi</a></li>
                  <li><a href="#" class="menu-link">Zirkonyum Diş Kaplama</a></li>
                  <li><a href="#" class="menu-link">Porselen Lamine</a></li>
                  <li><a href="#" class="menu-link">Gümüş Tasarımı</a></li>
                  <li><a href="#" class="menu-link">Diş Beyazlatma</a></li>
                  <li><a href="#" class="menu-link">Ortodonti (Tel Tedavisi)</a></li>
                  <li><a href="#" class="menu-link">Çocuk Diş Hekimliği (Pedodonti)</a></li>
                  <li><a href="#" class="menu-link">Kanal ve Dolgu Tedavisi</a></li>
                  <li><a href="#" class="menu-link">Diş Eti Tedavisi (Periodontoloji)</a></li>
                  <li><a href="#" class="menu-link">Dijital Diş Hekimliği</a></li>
                 
                </ul>
              </li>
              <li><a href="#" class="menu-link">Güzellik Merkezi</a></li>
              <li><a href="#" class="menu-link">Saç Ekim Merkezi</a></li>
              
            </ul>
          </li>
          <li><a href="#" class="menu-link" style={{fontSize:"medium"}}>Tedavi</a></li>
          <li><a href="#" class="menu-link" style={{fontSize:"medium"}}>Galeri</a></li>
          <li><a href="#" class="menu-link" style={{fontSize:"medium"}}>SSS</a></li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}>Şubelerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="#" class="menu-link">Merzifon Şubemiz</a></li>
            <li><a href="#" class="menu-link">Vezirköprü Şubemiz</a></li>
              
              
            </ul>
          </li>
          <li><a href="#" class="menu-link" style={{fontSize:"medium"}}>İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}
