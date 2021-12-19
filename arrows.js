var result = function(a,b,c){
    return a+b+c;
    
    }
    
    console.log(`Sonuc : ${result(4,5,6)}`)
    
    let isimler = function(a, b, c){
        return a+ b + c;
    }
    
    console.log(`isimler : ${isimler("AYSE","merve" ,"zeynep")}`)
    
    //function kelimesini sil
    
    //parametre ve boody arasına 
    
    var arrow =(a)=>a+100
    
    console.log(`arrow : ${arrow(34)}`)
    
    
    function sum(a, b){
    
        return a+b+100
    }
    
    console.log(`sum : ${sum(29,12)}`)
    
    var arrow2 =(a,b)=>a+b+100
    
    console.log(`Toplam : ${arrow2(29,12)}`)
    
    var arrowPrizma=(u,e,h)=>u*e*h
    
    console.log(`Prizma : ${arrowPrizma(3,3,2)}`)
    
    
    let isimler2=(ad,soyad)=>ad+soyad
    
    console.log(`isimler : ${isimler2('Merve ','yilmaz')}`)