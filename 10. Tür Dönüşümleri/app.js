//! Tür dönüşümleri  TYPE CONVERSİON
            // -------------------Tür Dönüşümleri----------------
            //     String,Number,Boolean,undefined and null
            //              Object, function

 //* let a =5; 
 //* let b ="10"; 
 //* console.log(a+b);  
 // //? sonuç 510 gelir.
//! let c =Number(b);  // ya da 
//* let b =Number("10");
//* console.log(a+b); //? 15 gelir.

//! parseInt() stringden yine bu da int çevirir. parseFloat da var ondalıklı sayılar için.

//* let a=8;
//* let b= parseInt("12");
//* console.log(a+b);

//! Number tipinden string veri tipine dönüştürmek
//* let x=55;
//* bu da bir seçenek let x = (55).toString();
// *let x=String(55);
//* console.log(typeof x);
//* console.log(x);

//* let sonuc=String(true);

//* let rakamlar = string([1,2,3,4,5]); diziler objecttir. objectten stringe çevrilir.

//* let rakamalar = Number([1,2,3,4,5]);
//* console.log(rakamalar);  bu çevrilmez