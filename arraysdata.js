var friendList = ['mehmet','betül','zehra','gani']

console.log(friendList)

console.log(typeof(friendList))

friendList.push('ahmet')
console.log(friendList)
friendList.unshift('derya')
console.log(friendList)

friendList.pop()
console.log(friendList)
friendList.shift()
console.log(friendList)

friendList.shift()
console.log(friendList)

var ages = [10,20,30,40,50,60,43,21]

console.log(ages.indexOf(40))
console.log(ages.lastIndexOf(21))


console.log(ages.includes(60))