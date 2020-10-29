
let i=0;

while(i<10)
{
    console.log(i);
    if(i==5)
    {
        break;
    }
    i++;
}

const langs=["C#","Pyhton","Java"];

// for(let i=0;i<lang.length;i++)
// {
//    console.log(langs[i]);
// }

langs.forEach(function(lang){//js'de böyle. lang yerine istediğini yazarsın oraya atar foreach içerikleri
console.log(lang);
});

const users=[
    {name:"Mustafa",age:25},
    {name:"Zeynep",age:40},
    {name:"Ali",age:12},
];
//isimleri alıp ben bundan bir arry oluşturmka isityorum bunun için map kullancıaz

const names=users.map(function(user){
 return user.name;
});
console.log(names);

//forin döngüsü
const userx={
    name:"Mustafa",
    age:25
};
for(let key in userx)
{
    console.log(key,userx[key]);
}
