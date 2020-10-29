
console.log(2=="2")//çalıştırır true döner iksiini string alır.Diğer dillerde böyle değil buna özel
console.log(2==="2")//false döner burada tipleride karşılaştırır

//Ternary Operatörü
const number=120;
console.log(number===100?"Sayı 100":"Sayı 100 Değil");

switch(number){
    case 1:
        console.log("İşlem 1");
        break;//bunu kullanmazsan case 120 ye girer sıkıntılı olur
    case 120:
        console.log("İşlem 120");
        break;

        default:
            console.log("Gerçersiz işlem");
}