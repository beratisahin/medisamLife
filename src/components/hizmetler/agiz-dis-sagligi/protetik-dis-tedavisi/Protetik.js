import React from 'react'
import "./Protetik.css";
import useDocumentTitle from "../../../../useDocumentTitle";
import testImg from "../../../header/MedisamYuvarlakLogo.png";
import Title from "../../../title/Title";

export default function Protetik() {
    useDocumentTitle('Protetik Diş Tedavisi - Medisam Tıp Merkezi');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <Title
                    page_title="Protetik Diş Tedavisi"
                />
               
                <div className="card-body col-12">
                    <br/>
                    
                    <p class="hizmet-text" >Estetik ve güzellik anlayışının sağlıkla ön planda tutulduğu güzellik merkezimde, koşulsuz müşteri memnuniyeti sunma amaçlı konusunda deneyimli ve profesyonel bir ekip tarafından hizmet vermektedir.

Günümüz koşullarında her gün yenilenen teknolojinin birebir takipçisi olan merkezimiz de FDA ( Dünya Sağlık Örgütü ) onayı almış teknolojik sağlık, zayıflama ve güzellik ekipmanları kullanmaktadır.

Bercislina güzellik merkezinde tüm işlemler öncesi, konunun uzmanları tarafından doğru hizmet kalitesini sunabilmek amacı müşterinin gereksinim analiz yapılarak, ihtiyaca yönelik bakım ve uygulamalar gerçekleşmektedir.

Vizyon ve misyon çerçevesinde, ana ilkemiz olan bizim emeğimiz, sizin mutluluğunuz ve ortak başarımızdır sözünü ‘’ Güzellik Herkesin Hakkıdır ‘’ sloganı ile taçlandıran Bercislina Güzellik Merkezi, yıllardır bize duyulan güven ve yaklaşımlara layık olmanın mutluluğunu yaşamaktadır.</p>     
                </div>
            </div>
            
        </div>
    )
}
