import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../../useDocumentTitle";
import Title from "../../title/Title";

export default function Gomulu() {
    useDocumentTitle('Gömülü Diş Operasyonları - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Gömülü Diş Operasyonları"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    
        <h4><strong>Gömük diş nedir?</strong></h4>

<p class="hizmetyazi">Sürmesi gerekirken sürememiş diş eti ya da kemik atında kalmış dişlere gömük diş denir.</p>


<h4><strong>Gömük dişler hangi durumlarda ve ne zaman çekilmelidir?</strong></h4>

<p class="hizmetyazi">20 yaş dişleri ağızda en sonda yer alan dişlerdir. Ulaşılması ve görülmesi zor olan bir bölgede olduklarından dolayı fırçalanması ve bakımı diğer dişlere göre daha zor olabilmektedir. Yetersiz fırçalamaya bağlı olarak 20 yaş dişleri kolayca çürüyerek diş ağrılarına ve ağız kokusuna yol açmaktadırlar.</p>

<p class="hizmetyazi">
20 yaş dişleri bazı durumlarda çenelerdeki yer darlığı sebebiyle çıkamazlar. Tam olarak gömülü (hem diş eti hem çene kemiği altında kalan ağızda hiç görülmeyecek şekilde) kalabildikleri gibi dişetinin altında yarı gömülü kalarak ağız ortamıyla ilişkili hale gelebilirler. Bu durumda dişetinden çıktıkları bölgede gıdaların sıkışmasına ve birikmesine yol açarak enfeksiyona neden olurlar. 20 yaş dişinin çevresindeki diş etinde şişlik ve kızarıklık, boyuna ve kulağa yayılan şiddetli ağrı, lenf bezlerinin şişmesi, ağız açma ve yutkunma sırasında ağrıya neden olan bu tabloya perikoronitis adı verilmektedir.</p>


<h4><strong>Gömük diş operasyonu sonrası ağız bakımı ve beslenme nasıl olmalı?</strong></h4>

<p class="hizmetyazi">Çekim sonrasındaki ilk gün tükürme, diş fırçalama, şiddetli çalkalama, pipet kullanma veya gargara yapılmamalıdır. İlk iki gün ılık, taneciksiz ve yumuşak besinler tüketilmelidir. Her besin tüketimi ve diş fırçalamanın ardından doktor tarafından önerilen antiseptik gargaralar kullanılmalıdır. Ağrı kesici ilaçlar ve eğer önerildiyse antibiyotik düzenli kullanılmalıdır. İyileşme sürecini bozacağından dolayı için ilk 48 saat sigara içilmemelidir.</p>

<h4><strong>Gömülü diş çekimi sonrası çok ağrı olur mu?</strong></h4>

<p class="hizmetyazi">Hızlı ve yeterli yapılan cerrahiyi takiben fazla ağrı oluşmaz ve oluşan ağrı hafif ağrı kesicilerle kolaylıkla kontrol altına alınır.</p>

<h4><strong>Gömük diş operasyonu sonrası yüzüm çok şişer mi?</strong></h4>

<p class="hizmetyazi">Yanaktaki ödem dişin durumuna göre ve kişiden kişiye çok değişkenlik gösterir. Şişlik oluşmaması için yanak bölgesine ilk 24 saat soğuk tampon (buz kompres) yapılmalıdır. Hafif şişlik olması normaldir ve iyileşme için gereklidir.</p>


                   
                </div>
            </div>
            
        </div>
    )
}
