import erkek from "./erkekDoktor.png";
import bayan from "./bayanDoktor.png";
import './ekibimiz.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function Ekibimiz() {
    useDocumentTitle('Ekibimiz - Bercislina Epilasyon ve Güzellik Merkezi');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"#5FA5A0"}}><b>Ekibimiz</b></h3>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={erkek} className="d-block img-responsive w-100 ekippho" title="temizlik" alt="temizlik" ></img>
                <p class="ekip-text">1- Dt. Enes Burak Uğurlu </p>
           
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={erkek} className="d-block img-responsive w-100 ekippho" title="ilaçlama" alt="koltuk-yıkama" ></img>
                <p class="ekip-text">2- Dt. Hayati Şahin  </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={erkek} className="d-block img-responsive w-100 ekippho" title="merdiven" alt="merdiven"></img>
                <p class="ekip-text">3- Dt. Emre Atalay</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={erkek} className="d-block img-responsive w-100 ekippho" title="araç-yıkama" alt="araç yıkama"></img>
                <p class="ekip-text" >4- Dt. Resul Yüksek</p>
            </div>
            
           


        </div>
        </div>
    )
}

export default Ekibimiz
