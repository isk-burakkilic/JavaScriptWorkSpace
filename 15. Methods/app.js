//! Metotlar parça parça kodları yazıp bir yerde birleştirmedir kısaca.
//! Bir kere yazarsın o işi yapan metodu istediğinizde çağırırsın.
//! method ve fonksiyon aynı şey

//? parametresiz ve geriye değer döndürmeyen metot tanımlamak.
/*
function method demek

function methodadi(){

    kodlar yazılacak
}

*/
//* örneği
// function yazdir(){
//     console.log("BURAK");
// } // bu method burada hazırlandı çalışmadı. paketlendi.
// yazdir(); //burada çalıştı.
// yazdir();

// function topla(){
//     console.log(5+7);
// }
// topla();


//! Parametreli metot tanımlamak
// function yazdir(isim,soyisim){ // kullanıldığında isim veya soyisme her seferinde farklı değer verilebilir.
//     console.log(isim+" " + soyisim);
// }
// yazdir("Burak","Kılıç");
// yazdir("Ezgi","Kılıç");

//? farklı bir örnek

// let yas=Number(prompt("Yaşınızı giriniz: "));

// function KontrolEt(yas){
//     if(yas>=18){
//         console.log("Ehliyeti alabilirsiniz.");
//     }else{
//         console.log("Ehliyeti alamazsınız.");
//     }
// }
// KontrolEt(yas);

//! parantez aç kapa varsa o bir metottur.


//! Geriye değer döndüren metot tanımlamak

let donendeger = cube(2);
kareAl(donendeger);
function kareAl(sayi){
    let sonuc=sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc=sayi*sayi*sayi;
    return(sonuc);
}
