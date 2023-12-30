var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var even = []
var odd = []

for (i in numberArray) {
    if (numberArray[i]%2 === 0) {
        even.push(numberArray[i])
    }else{
        odd.push(numberArray[i])
    }
}
console.log(even)
console.log(odd)

    document.write('<h1>'+ "Even: "+even+"</h1>")
    document.write('<h1>'+ "Odd: "+odd+"</h1>")