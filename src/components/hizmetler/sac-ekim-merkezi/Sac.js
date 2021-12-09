import "../agiz-dis-sagligi/Implant.css";
import React from 'react'
import useDocumentTitle from "../../../useDocumentTitle";
import Title from "../../title/Title";

export default function Sac() {
    useDocumentTitle('Saç Ekim Merkezi - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Saç Ekim Merkezi"
               />
                
                <div className="card-body col-12">
                    <br/>
                   
                    <p class="hizmet-text" >Saç Ekimi, donör bölgeden alınan saçların, saç dökülmesi yaşanan bölgelere nakil edilmesi işlemidir. Kalıtsal ya da çeşitli dış etkenler sebebiyle oluşan saç dökülmesinin kalıcı çözümü olarak uzun yıllardır uygulanan saç ekim işlemi mikro cerrahi bir operasyon olarak tanımlanabilir. Donör bölgesinde yeterli saç kökü bulunan her aday, saç ekimi operasyonu yaptırabilir. Donör bölge, saç ekimini gerçekleştirecek profesyonel hekim tarafından değerlendirilir. Ekim yapılacak alana yeterli saç sağlanamaması ön görüldüğü takdirde saç dökülmesi diğer saç tedavileri kullanılarak engellenir. Saç ekiminde dikkat edilmesi gereken en önemli unsur, ön çizginin doğal görünümünü kaybetmeden nakil işleminin gerçekleştirilmesidir.</p>     
                </div>
            </div>
            
        </div>
    )
}