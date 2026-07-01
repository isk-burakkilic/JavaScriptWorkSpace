//! Diyalog Kutuları

//? Alert ----- Prompt---- Confirm

// functiondır bunlar
//* alert("İşleminize devam etmeden önce kaydetmelisiniz.");

//! prompt(); Kullanıcıdan değer alırız. Kullanıcıdan alınan değerler her zmana string döner. Tür dönüşümü yapılabilir.

//* let isim= prompt("İsminizi Giriniz : ");
//* let yas= prompt("Yaşınızı Giriniz: ");
// console.log("isminiz :", isim);
// console.log("Yaşınız : ", yas);
//* console.log("isminiz :", isim, "Yaşınız : ", yas);  // bunu tercih et.

let sonuc = confirm("Silmek istediğinize emin misinz ?");
console.log(sonuc);
