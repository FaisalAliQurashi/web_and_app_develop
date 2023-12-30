// Q1
const empty_multydimension_arry = [
    [[]],
    [[[]]]
]
console.log(empty_multydimension_arry)

// Q2

const matrix_arry = [[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]]
console.log(matrix_arry)
// document.writeln(matrix_arry)
// Q3
document.write("<h1>"+"Question 3 "+"</h1>")

for (i = 1; i < 11; i++) {
    console.log(i)
    document.write(i)
    document.write("\n")
}

// Q4

function table() {
    let numTable = document.getElementById("inputnum").value
    let lentable = document.getElementById("inpulenth").value
    // console.log(numTable)
    for (i = 0; i < lentable; i++) {
        document.write("<h4>"+numTable+" X "+i+" = "+numTable*i+"</h4>")
        // console.log(numTable+"X"+i+"="+numTable*i);
    }
    
}
document.write("<h1>"+"Question 5 "+"</h1>")

const fruits = ["apple","banana","mango","orrange", "strawberry"]
for(i in fruits){
    console.log(fruits[i])
    document.write(fruits[i])

    document.write(" \n")

}