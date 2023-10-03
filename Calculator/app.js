var display = document.getElementById('display');
function press(num) {
   var lastValue=display.value.slice(display.value.length -1);
   console.log(lastValue)
   var oprator = ["+", "-", "/", "*","%"];
   if(oprator.indexOf(lastValue) !== -1 && oprator.indexOf(num) !== -1) {
       display.value = display.value.slice(0, -1) + num;
   }else{
    display.value += num;
   }

}
function deleteLastValue(){
    display.value=display.value.slice(0,display.value.length-1);
}
function deleteAll(){
    display.value="";
}
function finalresult(){
    display.value=eval(display.value);
}
// else if (num == "=") {
//     display.value = eval(display.value);
// }else if (num == "AC") {
//         display = "";
//         display.value=display.value;
// } else if (num == "d") {
//         display = display.slice(0, -1)
//         document.getElementById("display").value = display.value;
//  }else {
//         display.value += num;
//  }
// function result(){
//     display.value=eval(display.value);
    
// }
 // var lastValue = display.value.slice(display.value.length - 1);
    // // console.log(lastValue)
    // var oprator = ["+", "-", "/", "*"];
    // if (oprator.indexOf[lastValue] !== -1 && oprator.indexOf(num) !== -1) {
    //     display.value = display.value.slice(0, -1) + num;
    // } else {
    //     display.value += num;
    // }
    // document.getElementById("display").value += num;
    // // string = document.getElementById("display").value;
    // if (num == "AC") {
    //     string = "";
    //     document.getElementById("display").value = string;
    // } else if (num == "d") {
    //     string = string.slice(0, -2)
    //     document.getElementById("display").value = string;
    // }
    // else if (num == "=") {
    //     string = eval(string.slice(0, -1));
    //     document.getElementById("display").value = string;
    // }