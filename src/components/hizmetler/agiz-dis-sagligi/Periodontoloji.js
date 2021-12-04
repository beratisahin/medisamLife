import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../../useDocumentTitle";
import Title from "../../title/Title";

export default function Periodontoloji() {
    useDocumentTitle('Periodontoloji - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Periodontoloji (Diş Eti Tedavisi)"
               />
                
                <div className="card-body col-12">
                    <br/>
                   
                    <p class="hizmet-text" >İmplantoloji, diş hekimliği alanında diş implantı uygulamaları olarak bilinir. Birçok kişi farklı nedenlerden dolayı diş kaybına uğrayabilir. Arka dişlerde yaşanan kayıplar ağız sağlığı sorunlarına yol açarken ön dişlerde yaşanan kayıplar aynı zamanda estetik açıdan da sorunlar yaratır.

Diş hekimliği alanında yaşanan gelişmeler sayesinde diş kayıplarına estetik ve dayanıklı çözümler sunuluyor. Eskiden yaygın olarak yapılan köprü uygulamaları, yerini daha estetik çözümler sunan implant tedavilerine bırakıyor. Uzun süre rahat kullanım sunması nedeniyle, diş implantları eksik diş tedavisinde diş hekimleri tarafından sıklıkla tercih edilmektedir.</p>     
                </div>
            </div>
            
        </div>
    )
}
