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
import SSS from "./components/kurumsal/s.s.s/Sss";
import Iletisim from "./components/iletisim/ContactForm";

import Implant from "./components/hizmetler/agiz-dis-sagligi/implant/Implant";
import Protetik from "./components/hizmetler/agiz-dis-sagligi/protetik-dis-tedavisi/Protetik";





function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 m-0 p-0">
          
           
         
            <TopMenu/>
            <Navbar />
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />
            <Route path="/belgelerimiz" component={Belgerimiz} />
            <Route path="/referanslarimiz" component={Referanslarimiz} />
            <Route path="/ekibimiz" component={Ekibimiz} />
            <Route path="/sss" component={SSS} />

            

            <Route path="/agiz-dis-sagligi/implant" component={Implant} />
            <Route path="/agiz-dis-sagligi/protetik-dis-tedavisi" component={Protetik} />

           
            
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
