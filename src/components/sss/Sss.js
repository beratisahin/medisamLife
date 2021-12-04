import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

import { Accordion, AccordionTab } from "primereact/accordion";



function Sss() {
  useDocumentTitle('Sık Sorulan Sorular - Medisam Ağız ve Diş Sağlığı Polikliniği')
  return (
    <div className="col-12">
    <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
    <Title page_title="Sık Sorulan Sorular" />
        
        <Accordion multiple activeIndex={[0]} style={{padding:"2rem"}}>
          <AccordionTab  headerClassName="header" header="Sipariş Verirken Nelere Dikkat Etmeliyim?">
            <p style={{textAlign:"justify"}}>
              Siparişinin kargo ile gönderiminde, üye olurken doldurduğun üyelik
              formundaki bilgilerden yararlanılır. Siparişinin gönderimi
              sırasında doğacak herhangi bir sorunda müşteri temsilcimiz, üyelik
              bilgilerinden yararlanarak seninle iletişime geçer. Bu nedenle
              üyelik bilgilerinin eksiksiz ve güncel olmasını rica ederiz.
              Üyelik bilgilerini güncellemek için hesabım kısmından
              düzenleyebilirsiniz Siparişin tarafımıza bildireceğin kargo
              adresine gönderilir. Kargo teslimatı sırasında bir sorun
              yaşanmaması için adres bilgilerinin eksiksiz ve güncel olduğunu
              kontrol etmeni rica ederiz. Adres eklemek veya mevcut adresini
              güncellemek için hesabım kısmından düzenleyebilirsiniz
            </p>
          </AccordionTab>
          <AccordionTab header="İstediğim Ürünü Nasıl Sepetime Ekler/Sipariş Edebilirim?">
            <p style={{textAlign:"justify"}}>
              Aradığın ürünü bulduktan sonra ürünün fotoğrafına ya da ismine
              tıklaman durumunda ürün için özel yaptığımız sayfaya
              ulaşabilirsin. Bu sayfada ürünün fiyatını, alternatif
              fotoğraflarını, ürünle ilgili kısa detay bilgilerini ve stokta
              durumunu görebilirsin. Satın almak istediğiniz ürün sayısını seçip
              ürünü sepetine ekleyip alışveriş işlemine devam edebilirsin.
            </p >
          </AccordionTab>
          <AccordionTab header="Sepetime Eklediğim Ürün Benim Adıma Ayrılıyor Mu?">
            <p style={{textAlign:"justify"}}>
              Ürünü sepetine eklemen, ürünün sana ayrıldığı anlamına
              gelmemektedir. Ürünü sipariş vermen ve ödemenin tarafımıza
              ulaşması durumunda ürün senin adına ayrılmış olur.
            </p>
          </AccordionTab>
        </Accordion>


            
        </div>
          
            

  </div>
    
  );
}

export default Sss;
