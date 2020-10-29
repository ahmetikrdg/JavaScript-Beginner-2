//scope bir değişkenin nerede var olduğunu söyler
//scope kelime anlamı kapsam

/*hangi bir if fonksiyonu içinde bulunmayan global scope

function a()
{
    //Function Scopemiz
}

if()
{
    //blog scopemiz
}*/

var value1=10;
let value2=20;
const value3=30;
/*
function Func(){ //burası ve yukarıdaki global scope karışmaz burası buraya özeldir farklı bir alandadır. Yukarısı globaldir o farklı bir alandadır.
    var value1=40;
    let value2=50;
    const value3=60;
    console.log(value1,value2,value3);
}
Func();
*/
if(true)
{//biz bir blog içindeysek
    var value1=40;//var değişkeni dışarıda var olur
    let value2=50;//fakat let
    const value3=60;//const var olmaz yani bunları yazdırmaya çalış a hariç hiçbiri gelmez
    console.log(value1,value2,value3);
    //value1 dışarıdaki value biri etkiler ve değerini değiştirir var olduğu için.Let Const değişmez.
    //const let buraya özgüdür var öyle değil
}

console.log(value1,value2,value3);