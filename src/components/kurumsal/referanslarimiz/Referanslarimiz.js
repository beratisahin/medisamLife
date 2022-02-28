import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';
import Title from "../../title/Title";

function Referanslarimiz() {
    useDocumentTitle('Referanslarımız - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Referanslarımız"
               />
                
                <div className="card-body col-12">
                    <br/>
                   
                    <p class="hizmet-text" >Medisam Ağız ve Diş Sağlığı Polikliniği olarak gelişen teknolojiyi ve yenilikleri yakından izlemek, dental sektörde müşteri memnuniyetini amaç edinmek, kaliteli ve hızlı hizmet anlayışı ile ilerleyerek yolumuza devam etmek başlıca misyonumuzdur.</p>     
                </div>
            </div>
            
        </div>
    )
}

export default Referanslarimiz

