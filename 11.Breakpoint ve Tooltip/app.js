//* breakpoint ve tooltip nedir?

//Tooltip açıklama satırı gibi düşünebiliriz. ParseInt yazdın mesela yanında çıkan açıklamalar tooltip denir.

//? ortalamaBul // tamamını yazma birazını yaz bak gör anlayacaksın.
//* function ortalamaBul(vize1,vize2,final){
     //kodları
//*     return 75;
//* }

//! BreakPoint Nedir? 
//? yukarıdan aşağıya derleme yapılır. bir yerde bi hata oluşuyor adım adım gitmek istemek istersek breakpoint
//? adım adım çalıştırmayı sağlar. bunu da yapmak için satır numarasının soluna kırmızı nokta koy.
debugger;
let a = 10;
let b=15;
let c =a+b;
let d =a+b+c;
let e = a+c+b;
let sonuc=a+b+c+d+e;
console.log("Sonuç"+sonuc);