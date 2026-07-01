//! koşul yapıları If notunuz 75 olsun ama koşul not>50 bu bir koşuldur. Eğer notunuz 50'den büyük ise evet if de çalışır girmiyorsa elseye geçer.

// if(kosul){
    
//     kodlar

// }
// else{

//     kodlar
// }

//* let not= prompt("Notunuzu Giriniz: ");
//* if(not>50){

//*     console.log("Geçtiniz , notunuz : ", not);
//* }
//* else{
//*     console.log("Kaldınız, notunuz : ", not);
//* }
//! ehliyet örneği
//* let yas= Number(prompt("Yaşınızı Giriniz: ")); //dönüşüm yapıldı.
//* let para=Number(prompt("Bütçeniz: "));
//* if(yas>=18 && para>=3000){
//*     alert("Ehliyet Sınavına Katılabilirsiniz.");
//* }
//* else{
//*     alert("Ehliyet Sınavına Katılamazsınız.");
//* }

//! ders ortlama bulma örneği
// //? vize1 %30, vize2 %30, final %40 
//* let vize1 = Number(prompt("İlk vize Notunuzu Giriniz: "));
//* let vize2= Number(prompt("İkinci Vİze Notunuzu Giriniz: "));
//* let final= Number(prompt("Final Notunuzu Giriniz: "));
//* let average = (((vize1*30)/100) + ((vize2*30)/100)+((final*40)/100));
//* if(average>50){
//*     alert("Dersten Geçtiniz. Tebrikler. Notunuz: "+ average);
//* }else{
//*     alert("Dersten Kaldınız. Geçmiş olsun. Notunuz: "+ average);
//* }

//! if else if else yapısı
//* if(kosul){

//*     kodlar
//* }else if(kosul){
//*     kodlar
//* }else{
//*     kodlar
//* }

//! Çoklu IF kullanımı
//? kullanıcıdan adını ve tc isteyeceğiz.  Kullanıcı adı boş geçilemez. tc de 11 karakterden oluşsun.

//* let ad= prompt("İsminizi Giriniz: ");
//* let tckn=prompt("Tckn numaranızı giriniz: ");
//* kontrolEt(ad,tckn);
//* function kontrolEt(ad, tckn){

//*     if(ad!=""){
//*         if(tckn.length==11){
//*             console.log("İsim ve TCKN problemsiz girildi. ");
//*         }else{
//*             console.log("Lütfen tcnizi 11 karakter olacak şekilde giriniz.");

//*         }

//*     }else{
//*         console.log("Lütfen isim alanını boş bırakmayınız!!!");
//*     }

//* }

 //! Beden kitle endeksi örneği
 // kişinin kilosunu boyun karesini bölersek sonuca ulşaıyoruz.

//* let kilo= Number(prompt("Kilonuzu giriniz: "));
//* let boy= Number(prompt("Boyunuzu giriniz: "));

//* let sonuc= kilo /(boy*2);

//* if(sonuc<18.5){
//*     alert("İdeal kilonun altında"+sonuc);
//* }else if(sonuc>=18.5 && sonuc<=24.9){
//*    alert("İdeal kiloda"+sonuc);
//* }else if(sonuc>=25 && sonuc<=29.9){
//*     alert("İdeal kilonun üstünde."+sonuc);
//* }else if(sonuc>=30 && sonuc<=39.9){
//*     alert("İdeal kilonun çok üstünde."+sonuc);
//* }else if(sonuc>=40){
//*     alert("Obez");
//* }