// ! değişiken tanımlama 

//* int degiskenIsmi = deger; int yas= 10;
//! JavaScript de değer belirtilmez. int, string, double, float OLMAZ!!! 
//! Var - Let - Const kullanılır.
 //* var degiskenİsmi=10;
 //* console.log(degiskenİsmi);

// ? Var -Let - Const değişken tanımlamak için kullanılır.

//* var a=5;   
// ? Global Scope budur her yerden erişelebilir. Hiçbir süslü parantez içinde olmamalı.

//* if(a>3){
//*     console.log(true);
// *    console.log(a);
//* }


// ! var ile değişken tanımlarsak bu function scope olur. Çoğu yerden erişebildiği için ram bellekte çok fazla yer kaplar. 
function selamVer(){
    var selam= "Herkese selam";
    console.log(selam);  //? function scope
}
selamVer();

//! let - const block scope özelliğine sahiptir.
