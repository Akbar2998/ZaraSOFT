function YangiYilKunlari() {
    const kunlar = new Date();
    const YangiYilKuni = Date.parse("Dec 23," + kunlar.getFullYear()) //31-kun Yangi Yil bayrami 
    const HozirgiKun = Date.parse(kunlar);
    
    //mana bu qismida biz hisob kitob olib boramiz
    return Math.round((YangiYilKuni - HozirgiKun) / (1000*60*60*24));
}
document.querySelector('#kunlar').textContent = YangiYilKunlari()


