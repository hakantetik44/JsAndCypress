function sum() {

var num1=10
var num2=39
var num3=43
var total=num1+num2+num3
return total



}

console.log("sum : " + sum())

//Birden fazla parametreli 

function information(locaiton,price,rating) {

    console.log(`Location : ${locaiton}Price : ${price}Rating : ${rating}`)


}

information('New York','2000','5')



//Fonksiyoun cagırıp yeni bir degiskende saklama


const mySum= sum()+200

console.log(`Sum : ${mySum}`)


function diff(num1,num2) {
   return num1*num2


}

console.log(`Different: ${diff(100,40)}`)
