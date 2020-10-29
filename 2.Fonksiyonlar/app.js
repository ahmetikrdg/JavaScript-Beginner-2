//fomksiyon tanımlama

function merhaba()
{
    console.log("Merhaba");
}
merhaba();//Fonction call fonksiyon çağrısı olarak geçer js'De

function AdSoyad(name="Name girilmedi",age="Age Girilmedi")
{
    console.log(`name ${name}  age ${age}`)
}

AdSoyad("Ahmet",21);

function cube(x)
{
    return x*x*x;
}
console.log(cube(5,5,5));

const Selam=function(name="")//bir değişkene bir fonksiyonu eşitledim
{
    console.log("Selam "+name);
};
Selam("Ahmet");

//Immeditalet Invoked Function Expression (IIFE) - Tanımlandığı yerde çalışan fonksiyonlar
// yukarıda tanımlayıp sonra çalıştırıyoduk ama bu tanımlandığı yerde çalışır

(function(name){
    console.log("Merhaba: "+name);
})("Murat");


