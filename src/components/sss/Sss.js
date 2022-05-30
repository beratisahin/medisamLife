import React from 'react'
import "./Sss.css";
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";
import { Accordion, AccordionTab } from "primereact/accordion";



function Sss() {
  useDocumentTitle('Sıkça Sorulan Sorular - Medisam Ağız ve Diş Sağlığı Polikliniği')
  return (
    <div className="col-12">
      <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
        <Title page_title="Sıkça Sorulan Sorular" />
        
        <div class="open">    
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  20 Yaş dişleri ortodonti tedavisi öncesi çekilmeli midir?
                </button>
              </h2>
              <div id="collapseOne"  class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" >
                  <p class="urunyazi">Ortodontik tedavi öncesinde, hiç bir problem yaratmamış olsa bile, 20 yaş dişlerinizle vedalaşmanız gerekebilir.</p>
                <div>
              </div>
            </div>

          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Bebeğime yalancı emzik kullandurabilir miyim?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="urunbaslik">Her ne kadar, diş ve çene kemiklerinin gelişimini etkilememesi için yalancı emzik kullanımını önermiyor olsak da, 1 yaşına kadar ani bebek ölüm sendromunu ciddi oranda azalttığı bilindiği için sadece uykuda yalancı emzik kullanımını öneriyoruz.</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
              Ağız kokusu neden olur, nasıl kurtulabilirim?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="urunbaslik">Yapılan araştırmalar kötü ağız kokusunun, büyük oranda (%85) ağız içindeki bir problemden kaynaklandığını göstermiştir. Bunun da büyük bir kısmını diş ve diş eti problemleri oluşturur. Plaklar ve diş taşları kötü ağız kokusuna neden olabilen durumlar arasında sayılır. Bunun yanında, bazı insanlarda nedeni bilinmeyen bir şekilde dilin üzeri bir tabakayla kaplanmaktadır. Bu tabakada bulunan ve özellikle sülfür bileşikleri oluşturan bakterilerin de ağız kokusu yaptığı düşünülür. Bu sorunun giderilmesi için dilin mekanik olarak temizlenmesi gerekir.</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseTwo">
              Bebeğim diş sıkıyor ve diş gıcırdatıyor olabilir mi?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="urunbaslik">Yetişkinlerde diş sıkma-gıcırdatma sebepleri arasında olan stres, bebek ve çocuklar için de geçerli bir sebeptir. 8 aylık bir bebekte ek gıdaya geçiş süreci, kendini güvende hissettiği tek yer olan memeden ayrılma veya uyku düzensizliği bir bebek için stres sebebi olabilir. Daha önce hiç görmediği nesneleri görmek, dokunmak ya da sesleri duymak bir bebeği endişelendirebilir. Bebek bu dönemde zaten düzgün bir kapanış ya da kontakta olmayan dişlerini çok rahat gıcırdatabilir. Ebeveyn bu dönemde diş gıcırdatmanın çok anormal bir davranış olduğunu düşünüp endişelenebilir ve aşırı tepki verebilir. Aşırı tepki vermek bebeğinizin daha çok hoşuna gidebilir ve ilgi çekmek için diş gıcırdatma eylemini bir alışkanlık haline getirebilir.
                  Çocuklarda diş sürmesi sırasında dişetinde oluşan baskı çevre dokulardaki sinirleri uyarabilir. Uyarılan sinirler çiğneme kaslarını çalıştırır ve istemsiz çene kasılmaları yani diş gıcırdatmaları görülebilir. Bu tamamen fizyolojik bir olaydır ve aşırı tepki vermeden, çocuğun bu hareketten zevk almasını sağlamadan, bu alışkanlıktan vazgeçmesini beklemek doğru olacaktır. Diş sürmeleri tamamlandığında bu alışkanlıktan vazgeçecektir.
                  Bunun dışında barsak parazitleri, alerji ve endokrin bozuklukları ve yetersiz beslenme gibi faktörler de diş sıkma-gıcırdatmaya sebep olabilir.</p>
            </div>
          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
             Çocuğumun dişleri düz çıkmıyor, bu ileride dişlerinin çapraşık olacağının belirtisi midir?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="urunbaslik">Süt dişleri genelde birbirlerinden ayrık bir şekilde dizilirler. Bu ayrık dizilim, çocuğunuzun ileri de diş diziminde problem olacağına işaret değildir. Süt dişlerinin ayrık dizilimi, yerlerine gelecek olan daha büyük daimi dişlere yer sağlamak içindir. Daimi diş, süt dişinin rehberliğinde ağız içindeki yerini bulacaktır. Rehberi olmayan bir daimi diş, olması gereken yerden daha önde, arkada ya da yanda çıkabilir. Bu da ileride çapraşıklık görülme ihtimalini arttırır.

Özellikle alt ön bölgede, daimi kesici dişler, süt dişlerinin hemen arkasından, dil tarafından gelir. Bu görüntü ilk bakışta daimi dişlerde çapraşıklık mı olacak acaba diye düşündürebilir. Bu çok doğal bir süreçtir, şöyle ki alt kesici dişlerin sürme yönü öne doğrudur ve çene gelişimi devam ettikçe bu dişler de olması gereken yere gelecektir. Süt ve daimi dişlerin karışık olarak ağızda olduğu bu dönemde, acaba çocuğumun dişleri çapraşık mı olacak diye endişelenmek çok da doğru değildir. Tabi ki bu tarz endişelerinizi, bir diş hekimiyle paylaşmak daha doğru olacaktır. Sonuçta, çocuğunuzun dişleri ve çene kemikleri annesine ya da babasına benzeyecektir. Kendinizde gördüğünüz bazı problemlerin çocuğunuzda da ortaya çıkması yüksek ihtimaldir. Doğrusu düzenli olarak bir diş hekimine gitmek ve olası problemleri erken yaşta tespit ederek yönlendirmek olacaktır.</p>
            </div>
          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
              Hamileyken sürekli bulantı ve kusma yaşıyorum, dişlerim bundan zarar görür mü?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="urunbaslik">Hamilelikte çürük miktarının artmasında bulantıların da etkisi vardır. Bebeğin büyümesiyle birlikte, reflü ve kusma problemleri başlayabilir. Oldukça asidik olan mide içeriğinin zaman zaman ağıza ulaşmasıyla bilrikte, ağız ortamı ve dişler bundan etkilenir. Diş minesinde erozyon dediğimiz, dişin en dış tabakasının aşınmasıyla birlikte hassasiyet ve çürük şikayetleri artabilir. Bu tarz bulantıların ardından önemli olan, hemen dişler fırçalanmamalıdır. Önce mutlaka suyla gargara yapılması gerekir. Dişler yaklaşık 20 dakika sonra fırçalanmalıdır. Bunun nedeni ise, ağız ortamına gelen mide içeriği, asidik bir ortam yaratarak diş minesinin çözünmesine sebep olur. Hemen sonrasında dişler fırçalanırsa çözünmüş olan mine, mekanik olarak da zarar görecektir. Su ve tükürükle asidik ortam seyreltildikten sonra dişler fırçalanmalıdır. Diş minesinde oluşan erozyonun geri dönüşü yoktur. Mutlaka restoratif yöntemlerle tedavi edilmelidir.</p>
            </div>
          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
            Dişlerimi sıkma ve gıcırdatma alışkanlığı nasıl tedavi edilir? Botoks uygulaması faydalı olur mu?
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p class="urunbaslik">Diş sıkma ve gıcırdatma vakalarının derecesine göre, çeşitli tedavi yöntemleri uygulayabiliyoruz. Klasik yıllardan beri kullandığımız plaklar hala vazgeçemediğimiz tedaviler arasında olmakla birlikte, botoks uygulamasını da artık oldukça rutin bir şekilde kullanmaya başladık. Çok ileri vakalarda, çene eklem diskinin yer değiştirdiği ya da deforme olduğu vakalarda, plak kullanılması olmazsa olmaz tedavi seçeneğidir. Fakat bunun yanı sıra, diş sıkma ve gıcırdatma sırasında kas gruplarının aşırı aktivitesi sonucu gelişen spazmı çözmek ve bilinçsiz diş sıkmayı engellemek için botoks mutlaka uyguluyoruz.
                Kısacası vaka botoks uygulamaya müsait ise, mutlaka bunu tedavi planımıza ekliyoruz. Çünkü sadece gece plağı kullanmak büyük oranda hastanın kontrolünde bir tedavi seçeneğidir ve hastanın gün içinde reçete edildiği şekilde kullanıp kullanmadığını bilmemiz mümkün değildir. Botoks uygulaması ile hasta günlük yaşantısında normal fonksiyonlarını, yani yeme içme konuşma yutkunma gibi fonksiyonlarını rahatlıkla yapabilirken, paranormal fonksiyon dediğimiz diş sıkma ve gıcırdatma hareketlerini yapamayacaktır. Böylece, gerekiyorsa plak kullanımını da tedavi planına ekleyerek, çene eklem diskinin ve kemiklerinin zaman içinde, normal fonksiyonlarına geri dönmesine izin vermiş oluyoruz.
                Botoks uygulaması genelde bilindiği üzere, 6 ay içinde etkisini kaybedecektir. Bizim burada beklentimiz bu süre içinde, kas aktivitelerini normal düzeye indirerek spazmı çözmek, paranormal fonksiyonları ortadan kaldırmak ve çene ekleminin normal sağlığına kavuşmasını sağlamaktır. Bu beklentiler gerçekleştiği takdirde, hastanın ağrıları da zamanla tamamen yok olacaktır.
                Diş sıkma ve gıcırdatma tedavilerinde botoks uygulamasının önemi büyüktür. Fakat her vakada olduğu gibi, bu tarz vakalarda da erken teşhisin önemi oldukça büyüktür. Diş sıkma ve gıcırdatma sonucu gelişmiş bir kas spazmı ve ağrı vakasını, bir kerelik botoks uygulaması ile tedavi edebildiğimiz gibi, çene ekleminde geri dönüşü olmayan hasarlar meydana gelmiş ise daha ileri tedavi seçeneklerini düşünmek gerekir.</p>
            </div>
          </div>
        </div>

      </div>
      </div>
            
      </div>
    </div>
    
  );
}

export default Sss;
