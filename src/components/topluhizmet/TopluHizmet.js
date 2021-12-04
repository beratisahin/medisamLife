import React from 'react';
import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";
import ortodonti from "./hizmetFotolar/ortodonti.jpg";
import implant from "./hizmetFotolar/implant.jpg";
import zirkonyum from "./hizmetFotolar/zirkonyum.jpg";
import disbeyazlatma from "./hizmetFotolar/beyazlatma2.jpg";
import kanal from "./hizmetFotolar/kanal2.jpg";
import pedodonti from "./hizmetFotolar/pedodonti.jpg";


export default function TopluHizmet() {
    return (
        
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:"-2rem"}}>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Ortodonti"
                    taslakphoto={ortodonti}
                    taslaktext="Ortodonti, diş hekimliğin bir uzmanlık dalıdır. Ortodonti tedavisi uygulayan doktora ortodontist denilmektedir."
                    taslaklink="/agiz-dis-sagligi/ortodonti"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="İmplant"
                    taslakphoto={implant}
                    taslaktext="Ağza yapay diş köklerinin yerleştirilmesi işlemine implant tedavisi denilmektedir. Ayrıca implant tedavisi ile ilgili ücretsiz muayene de olup gerekli bilgileri edinebilirsiniz."
                    taslaklink="/agiz-dis-sagligi/implant"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Zirkonyum Kaplama"
                    taslakphoto={zirkonyum}
                    taslaktext="Son günlerde diş hekimlerince sıklıkla uygulanan zirkonyum kaplama, doğal görünümü ile hastalar tarafından çok fazla tercih edilmektedir."
                    taslaklink="/agiz-dis-sagligi/zirkonyum-dis-kaplama"
                />      
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Pedodonti"
                    taslakphoto={pedodonti}
                    taslaktext="Çocuk diş hekimliği; bebeklerin, çocukların ve özel bakım gerektiren (engelli) bireylerin ağız ve diş sağlığı sorunları ile uğraşan, diş hekimliğinin bir anabilim dalıdır."
                    taslaklink="/agiz-dis-sagligi/pedodonti"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Diş Beyazlatma"
                    taslakphoto={disbeyazlatma}
                    taslaktext="Beyazlatma dişlerin yapısında (mine ve dentin tabakasında) oluşan renklenmeleri giderme işlemidir. Hastanın dişinin doğal renginden memnun olmaması durumlarında da uygulanır."
                    taslaklink="/agiz-dis-sagligi/dis-beyazlatma"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Kanal Tedavisi"
                    taslakphoto={kanal}
                    taslaktext="Kanal tedavisi enfekte olmuş dişleri onararak kurtarmak için kullanılan bir tedavi yöntemidir. Dişin sert dokusundaki kök kanalı pulpa ile diş siniri çıkarılır, dişin içi temizlenir ardından boşluk doldurulur. "
                    taslaklink="/agiz-dis-sagligi/kanal-ve-dolgu-tedavisi"
                />
            </div>
            

        </div>
        

    

    )
}
