//! DÖNGÜLER  For--------While---------Do-While-------------ForEach

//* for(degisken;koşul;arttırma-azaltma){
//*     kodlar
//* }

  //?  1'den 10'a kadar yazdır.
// for(let i =1; i<=10; i++) {
//     console.log(i);
// }   

//? 0'dan 10'a kadar çiftleri yazdır.

// for(let i=0; i<=10; i+=2){
//     console.log(i);
// }

//? 1'den 10'a kadar tekleri yazdır.
// for(let i=1; i<=10; i+=2){
//     console.log(i);
// }

//? tekli ise burak yaz çift ise naber yaz
// for(let i =1; i<=10; i++){
//     if(i%2==1){
//         console.log("Burak");
//     }else{
//         console.log("Nbaer")
//     }
// }

//? 50 den 1 e kadar gidelim ve toplamları bulalım.
// let toplam=0;
// for (let i =50; i>=1; i--){
//     toplam+=i;
//     console.log(i);
// }
// console.log("Toplam: "+toplam);

//! While Döngüsü

//* while(kosul){
//*     kodlar

//*     sayacın degerini atarız sonsuz döngüye girer. 
//* }

//? 1'den 10'a kadar yazdıralım.
 
// let sayac=1;
// while(sayac<=10){
//     console.log(sayac);
//     sayac++;
// }

//? 1'den 10'a kadar çiftleri ve tekleri yazdıralım

// let sayac =0;
// while(sayac<=10){
//     if(sayac%2==1){
//         console.log(sayac);
//     }
//     sayac++;
// }

// let sayac=1;
// while(true){
//     console.log(sayac);
//     if(sayac==7){
//         break;
//     }
//     sayac++;
// }

//! Do-while döngüsü

//* do{
//*     kodlar

//* }while(kosul);

//? 1'den 10'a kadar yazalım.

// let sayac=1;
// do{
//     console.log(sayac);
//     sayac++;
// }while(sayac<=10);


// let yas = 23;
// do{
//     console.log("Ehliyeti alabilirsiniz");

// }while(yas>=25);

