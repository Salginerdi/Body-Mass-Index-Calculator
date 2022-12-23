// Beden Kitle Endeksi Hesaplama Örneği

let kilo = Number(prompt("Lütfen kilonuzu giriniz :"));
let boy = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz :"));
let sonuc = kilo/(boy*boy);

if(sonuc<18.5) {
    console.log("İdeal kilonun altındasınız. " + sonuc)
} else if(sonuc>=18.5 && sonuc<=24.9) {
    console.log("İdeal Kilodasınız. " + sonuc)
} else if(sonuc>=25 && sonuc<=29.9) {
    console.log("İdeal kilonun üstündesiniz. " + sonuc)
} else if(sonuc>=30 && sonuc<=39.9) {
    console.log("İdeal kilonun çok üstündesiniz(Obez). " + sonuc)
} else if(sonuc>=40) {
    console.log("İdeal kilonun çok üstündesiniz(Morbid Obez). " + sonuc)
};
    
