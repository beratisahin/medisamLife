import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';
import Title from "../../title/Title";
import './ekibimiz.css';

function Ekibimiz() {
    useDocumentTitle('Hekimlerimiz - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        
        <div className="row m-4">
            
            <div className="col-12" style={{marginBottom:"2rem"}}>
                <Title 
                    page_title="Hekimlerimiz"
               />
            </div>
               <br/>
                
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 ekipTemp">
                    <img src="https://drive.google.com/uc?export=view&id=12JFkdba1wV6GuNLQMNJ47muURRRsjHap" className="imageEkip" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                    <p className="contentEkip">Diş Hekimi Hayati Şahin</p>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 ekipTemp"><img src="https://drive.google.com/uc?export=view&id=1kp3R_7sJP8MbMqOdTTDiHMdBZ2G0oF-i" className="imageEkip" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="contentEkip">Diş Hekimi Emre Atalay</p>
                        </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 ekipTemp"> <img src="https://drive.google.com/uc?export=view&id=1p7EkU2UQhcyXlOcKMlYPU6B00R4PamDd" className="imageEkip" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="contentEkip">Protez Uzm. Dt. Enes Burak Uğurlu</p>
                        </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 ekipTemp"><img src="https://drive.google.com/uc?export=view&id=1jCKGeS8bZsZ7GQSi-3Cpkms1ia4uG7y0" className="imageEkip" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="contentEkip">Ortodonti Uzm. Dt. Ufuk Keleşoğlu </p>
                       </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 ekipTemp"> <img src="https://drive.google.com/uc?export=view&id=1lXJCUJYLb4j_Xw0VTI-n7p1n4iAczUvx" className="imageEkip" alt="Merzifon Diş Medisam" title="Merzifon Diş Medisam"></img>
                        <p className="contentEkip">Cerrahi Uzm. Dt. Tayfun Yeter</p>
                        </div>



            </div>
            
        
    )
}

export default Ekibimiz
