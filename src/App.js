import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import TopMenu from "./components/header/TopMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Hakkimizda from "./components/kurumsal/hakkimizda/Hakkimizda";
import Belgerimiz from "./components/kurumsal/belgelerimiz/Belgelerimiz";
import Referanslarimiz from "./components/kurumsal/referanslarimiz/Referanslarimiz";
import Ekibimiz from "./components/kurumsal/ekibimiz/Ekibimiz";
import Iletisim from "./components/iletisim/ContactForm";

import Yirmi from "./components/hizmetler/agiz-dis-sagligi/Yirmiyas";
import Gomulu from "./components/hizmetler/agiz-dis-sagligi/Gomulu";
import Kist from "./components/hizmetler/agiz-dis-sagligi/Kist";
import Cene from "./components/hizmetler/agiz-dis-sagligi/Cene";

import Implant from "./components/hizmetler/agiz-dis-sagligi/Implant";
import Protetik from "./components/hizmetler/agiz-dis-sagligi/Protetik";
import Zirkonyum from "./components/hizmetler/agiz-dis-sagligi/Zirkonyum";
import Porselen from "./components/hizmetler/agiz-dis-sagligi/Porselen";
import Beyazlatma from "./components/hizmetler/agiz-dis-sagligi/Beyazlatma";
import Ortodonti from "./components/hizmetler/agiz-dis-sagligi/Ortodonti";
import Pedodonti from "./components/hizmetler/agiz-dis-sagligi/Pedodonti";
import Kanal from "./components/hizmetler/agiz-dis-sagligi/Kanal";
import Periodontoloji from "./components/hizmetler/agiz-dis-sagligi/Periodontoloji";
import Dijital from "./components/hizmetler/agiz-dis-sagligi/Dijital";

import Merzifon from "./components/subeler/Merzifon";
import Vezirkopru from "./components/subeler/Vezirkopru";

import Galeri from "./components/galeri/Galeri";
import Guzellik from "./components/hizmetler/lazer-epilasyon/Guzellik";
import Sac from "./components/hizmetler/sac-ekim-merkezi/Sac";
import Sss from "./components/sss/Sss";



function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 m-0 p-0">
          
           
          
            
            <Navbar />
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/anasayfa" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />
            <Route path="/belgelerimiz" component={Belgerimiz} />
            <Route path="/referanslarimiz" component={Referanslarimiz} />
            <Route path="/hekimlerimiz" component={Ekibimiz} />
            

            <Route path="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/yirmi-yas-dis-tedavisi" component={Yirmi} />
            <Route path="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/gomulu-dis-operasyonlari" component={Gomulu} />
            <Route path="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/kist-ve-tumor-operasyonlari" component={Kist} />
            <Route path="/agiz-dis-sagligi/agiz-dis-ve-cene-cerrahisi/cene-eklemi-rahatsizliklari" component={Cene} />
            

            <Route path="/agiz-dis-sagligi/implant" component={Implant} />
            <Route path="/agiz-dis-sagligi/protetik-dis-tedavisi" component={Protetik} />
            <Route path="/agiz-dis-sagligi/zirkonyum-dis-kaplama" component={Zirkonyum} />
            <Route path="/agiz-dis-sagligi/porselen-lamine" component={Porselen} />
            <Route path="/agiz-dis-sagligi/dis-beyazlatma" component={Beyazlatma} />
            <Route path="/agiz-dis-sagligi/ortodonti" component={Ortodonti} />
            <Route path="/agiz-dis-sagligi/pedodonti" component={Pedodonti} />
            <Route path="/agiz-dis-sagligi/kanal-ve-dolgu-tedavisi" component={Kanal} />
            <Route path="/agiz-dis-sagligi/periodontoloji" component={Periodontoloji} />
            <Route path="/agiz-dis-sagligi/dijital-dis-hekimligi" component={Dijital} />

            <Route path="/merzifon-dis" component={Merzifon} />
            <Route path="/vezirkopru-dis" component={Vezirkopru} />

            <Route path="/sac-ekim-merkezi" component={Sac} />
            <Route path="/lazer-epilasyon-ve-guzellik-merkezi" component={Guzellik} />
            <Route path="/galeri" component={Galeri} />
            
            <Route path="/sss" component={Sss} /> 
            
            <Route path="/iletisim" component={Iletisim} />

          
           
          </Switch>
          
         
          <hr className="footerHr"/>
          <div className="col-12">
            <Foooter />
          </div>
          
          
        </div>
      </div>
    </Router>
  );
}

export default App;
