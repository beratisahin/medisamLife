import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../../useDocumentTitle";
import Title from "../../title/Title";

export default function Dijital() {
    useDocumentTitle('Dijital Diş Hekimliği - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Dijital Diş Hekimliği"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    <h4><strong>Dijital Diş Hekimliği Nedir?</strong></h4>

<h4><strong>1.Dijital Tarama (Ölçü Alımı)</strong></h4>

<p class="hizmetyazi">Hasta kliniğe gelir, işlem yapılacak dişler dijital tarayıcılarla 3 boyutlu olarak taranır. Böylece dişin 3 boyutlu görüntüsü sanal ortama taşınmış olur.</p>

<h4><strong>2.Dijital Tasarım</strong></h4>

<p class="hizmetyazi">DentLab’a Diş Laboratuvarı'na sanal olarak ulaşan 3 boyutlu tarama görüntüsü üzerinde diş tasarımı dijital olarak yapılır. Dişin şekli, konturları, diş eti ile uyumlandırılması gibi tüm işlemler bilgisayar ortamında tasarlanır.</p>

<h4><strong>3.Dijital Diş Üretimi</strong></h4>

<p class="hizmetyazi">Dijital Tasarım bittikten sonra sıra üretime gelir. DentLab’ın 3 boyutlu yazıcıları ve tarayıcıları ile (Cad/Cam destekli frezeleme makineleri) dişin üretimi gerçekleştirilir.</p>

<h4><strong>4.Porselen Dişler</strong></h4>

<p class="hizmetyazi">DentLab’da üretilen porselen dişler DentGroup kliniğine ulaştırılır. Hasta ağzına uygulamaya hazır halde olan yeni dişlerin son kontrolleri ağız içinde yapılır ve hastaya uygulanır.</p>
                   
  


                </div>
            </div>
            
        </div>
    )
}
