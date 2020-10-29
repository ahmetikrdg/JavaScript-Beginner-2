console.log(window);
//window objesi üzerinde bulunduğumuz en genel objedir.

//alert("Merhaba");
/*
const cevap=confirm("Emin misiniz?");
console.log(cevap);//evete basınca true şeklinde sonuç döndü


if(confirm("Emin misiniz?"))
{
    console.log("Silin Gitsin");
}
else
{
    console.log("Silmeyin");
}


const cevap=prompt("2+2=?");//input
if(cevap==4)
{
    console.log("Bildin");
}
else
{
    console.log("yuh");
}
*/
let value;

value=window.location;
value=window.location.host;
value=window.location.hostname;
value=window.location.href;//şuanki adresim gelir
/*
if(confirm("Sayfa yenilensin mi?"))
{
    window.location.reload();//sayfa yenilenir
}
else
{
    console.log("Sayfa Yenilenmedi");
}*/
value=window.outerHeight;//açık olan googleun uzunluğu ne kadar pencerenin



console.log(value);