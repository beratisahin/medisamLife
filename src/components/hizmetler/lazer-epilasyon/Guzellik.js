import "../agiz-dis-sagligi/Implant.css";
import React from 'react'
import useDocumentTitle from "../../../useDocumentTitle";
import Title from "../../title/Title";

export default function Guzellik() {
    useDocumentTitle('Lazer Epilasyon ve Güzellik Merkezi - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Lazer Epilasyon"
               />
                
                <div className="card-body col-12">
                    <br/>
                   
                    <p class="hizmet-text" >Kadınlar doğaları gereği her daim bakımlı ve güzel görünmek ister. İstenmeyen tüyler de bu görüntünün en rahatsız edici taraflarından birisidir. Ağda, jilet, tüy dökücü kremler kısa süreli çözümler olmasının yanı sıra kıl köklerinin daha sert ve koyu çıkmasına sebep olmaktadır.

Buz epilasyon tüm bunları geride bırakarak kadınlara kalıcı ve konforlu çözümler
sunmaktadır. Kadınlar buz epilasyon sayesinde diledikleri bölgedeki tüylerden kalıcı olarak kurtulabilmektedir. Kadın buz epilasyonda sağlıklı sonuçlar almak isteyen kişiler belli başlı noktalara çok dikkat etmelidir.</p>     
                </div>
            </div>
            
        </div>
    )
}