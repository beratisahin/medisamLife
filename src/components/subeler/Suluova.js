import "../hizmetler/agiz-dis-sagligi/Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Suluova() {
    useDocumentTitle('Suluova Diş Polikliniği');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Suluovadan Gelecek Hastalarımız için"
               />
                
                <div className="card-body col-12">
                <p class="hizmet-text" >Suluovadan gelecek hastalarımız için, Medisam Ağız ve Diş Sağlığı Polikliniği olarak ağız ve diş tedavilerini yeni ve farklı bir konseptle sunmaktayız. Ücretsiz röntgen ve muayene fırsatı bulunmaktadır. Hastalarımızın ihtiyaçları doğrultusunda gerekli diş tedavilerinin yapılması ve tedavilerin bölümler arasında koordineli şekilde ilerleyebilmesi için kliniğimiz zamanla genişleyerek 2 katlı, 9 klinikli bir yapıya dönüştü. Kliniğimiz, uzman doktor ve deneyimli personel kadrosuyla güler yüzlü hizmet vermeyi ve hasta memnuniyetini birincil amaç olarak görmektedir. Deneyimli kadrosu ve teknik donanımı ile üst düzeyde güvenli bir hizmet sunmaktadır. Diş Polikliniğimize dişlerinizi emanet edin. Gülümsemenin tadını çıkartın.
                    
                    </p> 
                    <p class="hizmet-text"><b>Kliniğimizin Verdiği Hizmetler</b></p>
                <ul>
                    <li class="subelist">Konservatif Tedaviler – Suluova</li>
                    <li class="subelist">Endodonti – Suluova</li>
                    <li class="subelist">Protetik Tedavi – Suluova</li>
                    <li class="subelist">Ağız Hastalıkları ve Çene Cerrahisi – Suluova</li>
                    <li class="subelist">Periodontoloji – Suluova</li>
                    <li class="subelist">Ortodontik Tedavi – Suluova</li>
                    <li class="subelist">Diş Beyazlatma – Suluova</li>
                    <li class="subelist">İmplant Tedavisi – Suluova</li>
                    <li class="subelist">Dental Radyoloji – Suluova</li>
                    <li class="subelist">Estetik Diş Hekimliği – Suluova</li>
                    <li class="subelist">Lazer – Suluova</li>
                    <li class="subelist">Gülüş Tasarımı – Suluova</li>
                    <li class="subelist">All on Four – Suluova</li>
                    
                   
                </ul>     
                </div>
            </div>
            
        </div>
    )
}