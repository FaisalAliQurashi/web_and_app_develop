// var inputresult = document.getElementById('inputresult');
// function setNumber(num) {
//     var lastVal = inputresult.value.slice(inputresult.value.length - 1);
//     console.log(num)
//     var operater = ["+", "-", "/", "*"]
//     if (operater.indexOf(lastVal) !== -1 && operater.indexOf(num) !== -1) {
//         inputresult.value = inputresult.value.slice(0, -1) = num;
//     } else {
//         inputresult.value += num;
//     }
// }
// function clearresult() {
//     inputresult.value = "";
// }
// function getresult() {
//     inputresult.value = eval(inputresult.value);
//     if (inputresult.value == undefined || inputresult.value == NaN) {
//         console.log("Enter Valid Opertion")
//     }
// }
// function del() {
//     inputresult.value = inputresult.value.slice(0, inputresult.value - 1);
// }