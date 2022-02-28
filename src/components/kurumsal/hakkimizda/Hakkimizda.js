
import './hakkımızda.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';
import Title from "../../title/Title";

function Hakkimizda() {
    useDocumentTitle('Hakkımızda - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Hakkımızda"
               />
                
                <div className="card-body col-12">
                    <br/>
                    <h4 style={{color:"#55D1BC"}}>Hikayemiz</h4>
                    <p class="hizmet-text" >2019 yılı itibariyle Medisam Ağız ve Diş Sağlığı Polikliniğimizin ilk şubesi Protez Uzman Diş Hekimi Enes Burak Uğurlu önderliğinde Samsun Vezirköprü ilçesinde kurulmuştur. 2021 yılı içinde Diş Hekimi Emre Atalay ve Diş Hekimi Hayati Şahin'in kurucu hekim olarak Medisam Ağız ve Diş Sağlığı Polikliniğinin Amasya Merzifon şubesinin açılışını gerçekleştirmiştir. Önümüzdeki süreçlerde komşu illerde de Medisam Ağız ve Diş Sağlığı Polikliniğinin şubeleri açılması durumu söz konusudur. Siz değerli hastalarımıza en iyi şekilde hizmet vermek için elimizden gelen her türlü fedakarlığı yapacağımıza emin olabilirsiniz. <br/>
                    Ağız ve Çene Cerrahisi, Ortodonti, Pedodonti, Endodonti vb. alanlardaki uzman diş hekimlerimiz ile sizlere hizmet vermekteyiz. <br/>
                    Kliniklerimizde panaromik tomografi cihazımız, implant tedavilerinde kullanılmak üzere kemik kesme aletimiz, üst seviyedeki donanımları ile unitlerimiz bulunmakdatır. Vezirköprü şubemizde 4, Merzifon şubemizde 5 adet unitimiz bulunmaktadır. </p>     
                    <h4 style={{color:"#55D1BC"}}>Misyonumuz</h4>
                    <p class="hizmet-text">Medisam Ağız ve Diş Sağlığı Polikliniği olarak gelişen teknolojiyi ve yenilikleri yakından izlemek, dental sektörde müşteri memnuniyetini amaç edinmek, kaliteli ve hızlı hizmet anlayışı ile ilerleyerek yolumuza devam etmek başlıca misyonumuzdur.</p>
                    <h4 style={{color:"#55D1BC"}}>Vizyonumuz</h4>
                    <p class="hizmet-text">Medisam Ağız ve Diş Sağlığı Polikliniği olarak, Ağız ve Diş Sağlığı Alanındaki Tecrübemiz ile siz değerli hastlarımızın gülüşlerine ortak olup Samsun, Amasya, Çorum, Tokat ve civar şehirlerden gelecek tüm hastalarımıza en kaliteli hizmeti vermeyi hedeflemekteyiz. </p>
                    <h4 style={{color:"#55D1BC"}}>Değerlerimiz</h4>
                    <p class="hizmet-text">• Etkin ve kaliteli hasta bakımı ve tedavisi hedefimizdir.<br/>

• Tüm uygulamalarımızı etik kurallar çerçevesinde sürdürürüz.<br/>

• Ölçülebilen ve değerlendirilebilen bir sistem ile kendimizi sorgularız.<br/>

• İnsan kaynağımıza mesleki gelişim ve sürekli eğitim olanakları yaratırız.<br/>

• Sunduğumuz sağlık hizmetinde güvenilir ve şeffaf olmak, sürekliliği sağlamak toplumsal sorumluluğumuzdur.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Hakkimizda
