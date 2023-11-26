//1. Declare an empty array using JS literal notation to store
// student names in future.
let arr=[];
arr.push("Faisal");
console.log(arr)
document.write("<p>"+"1. Declare an empty array using JS literal notation to store student names in future."+"</p>")
document.write("Answer:")
document.write("<h1>"+arr+"</h1>");


//2. Declare an empty array using JS object notation to store
// student names in future.
let arr1=new Array();
arr1.push("Ali");
console.log(arr1)
document.write("<p>"+"2. Declare an empty array using JS object notation to store student names in future."+"</p>")
document.write("Answer:")
document.write("<h1>"+arr1+"</h1>");


// 3. Declare and initialize a strings array.
let arr2= ["fAISAL","ALI",'QURASHI'];   
console.log(arr2)
document.write("<p>"+"3. Declare and initialize a strings array."+"</p>")
document.write("Answer:")
document.write("<h1>"+arr2+"</h1>");


// 4. Declare and initialize a numbers array.
let arr3=[1,5,7,80,78];
console.log(arr3)
document.write("<p>"+"4. Declare and initialize a numbers array."+"</p>")
document.write("Answer:")
document.write("<h1>"+arr3+"</h1>");


// 5. Declare and initialize a boolean array.
let Booleans = [true, false, true, true, false];
console.log(Booleans)
document.write("<p>"+"5. Declare and initialize a boolean array."+"</p>")
document.write("Answer:")
document.write("<h1>"+Booleans+"</h1>");

// 6. Declare and initialize a mixed array.
let mixed=["hi",5,true]
console.log(mixed)
document.write("<p>"+"6. Declare and initialize a mixed array."+"</p>")
document.write("Answer:")
document.write("<h1>"+mixed+"</h1>");

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD).Show the listed
// qualifications in your browser like:
let education_qualifications_in_Pakistan = ["SSC","BCS","BS","BCOM","MS","M. Phil","PhD"];
var j=1;
document.write("<p>"+"7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD).Show the listed qualifications in your browser like:"+"</p>")
document.write("Answer:")
document.write("<h1>"+"Qualifications:"+"<h1>");
for(i in education_qualifications_in_Pakistan){
    console.log(j+") "+education_qualifications_in_Pakistan[i])
    document.write("<h1>"+j+") "+education_qualifications_in_Pakistan[i]+"</h1>");
    j++
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
let student=["Faisal",'Ali','Qurashi']
let score=[490,492,450]
document.write("<p>"+"8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:"+"</p>")
document.write("Answer:")
for(i in student){
    console.log("Score of "+student[i]+" is "+score[i]+". Persentage: "+score[i]/5+"%")
    document.write("<h1>"+"Score of "+student[i]+" is "+score[i]+". Persentage: "+score[i]/5+"%"+"</h1>");

}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
document.write("<p>" + "9. Initialize an array with color names. Display the array elements in your browser." + "</p>")
document.write("Answer:")
let color = ["Green", "Red", "Black"]
document.write("<h1>" + color + "</h1>");

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
document.write("<p>" + "a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser." + "</p>")
document.write("<section><input id='colo'><button onclick='add()'>Submit</button></section>");
function add() {
    var getcolor = document.getElementById("colo").value
    color.unshift(getcolor)
    console.log(color)
    document.write("<h1>" + color + "</h1>");
}

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
document.write("<p>" + "b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser." + "</p>")
document.write("<section><input id='last'><button onclick='addlast()'>Submit</button></section>");
function addlast() {
    var lastadd = document.getElementById("last").value
    color.push(lastadd)
    console.log(color)
    document.write("<h1>" + color + "</h1>");
}

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
document.write("<p>" + "c. Add two more color to the beginning of the array. Display the updated array in your browser." + "</p>")
document.write("<h1>" + "previous Array: " + color + "</h1>");
console.log(color)
color.unshift('Blue', 'Pink')
document.write("<h1>" + "Update Array: " + color + "</h1>");
console.log(color)

// d. Delete the first color in the array. Display the updated
// array in your browser.
document.write("<p>" + "d. Delete the first color in the array. Display the updated array in your browser." + "</p>")
color.shift()
document.write("<h1>" + "Update Array: " + color + "</h1>");
console.log(color)


// e. Delete the last color in the array. Display the updated
// array in your browser.
document.write("<p>" + "d. Delete the Last color in the array. Display the updated array in your browser." + "</p>")
color.pop()
document.write("<h1>" + "Update Array: " + color + "</h1>");
console.log(color)


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
document.write("<p>" + "f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser." + "</p>")
document.write("<section><input id='indexup'><button onclick='indexup()'>Submit</button></section>");
document.write('<button value="0" class="index" onclick="valone()" id="oneindex">1</button><button value="1" class="index" onclick="valtwo()" id="twoindex">2</button><button value="2" class="index" onclick="valthree()" id="threeindex">3</button><button value="3" class="index" onclick="valfour()" id="fourindex">4</button>')
function valone() {
    var one = document.getElementById("oneindex").value
    console.log(one)
}
function valtwo() {
    one = document.getElementById("twoindex").value
    console.log(one)
}
function valthree() {
    one = document.getElementById("threeindex").value
    console.log(one)
}
function valfour() {
    one = document.getElementById("fourindex").value
    console.log(one)
}

function indexup() {
    var indexch = document.getElementById("indexup").value
    color = [
        ...color.slice(0, one),
        indexch,
        ...color.slice(one)
    ];
    console.log(color)
    document.write("<h1>" + color + "</h1>");
}


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
document.write("<p>" + "g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser." + "</p>")
document.write("<h1>" + "Which index you want to delete" + "</h1>");
document.write('<button value="0" onclick="oned()" id="oneo">1</button><button value="1" onclick="twod()" id="twoo">2</button><button value="2" onclick="threed()" id="threeo">3</button>')
function oned() {
    var inddel = document.getElementById("oneo").value
    console.log(inddel)
    document.write("<h1>" + "how many color you want to delete" + "</h1>");
    document.write('<button value="0" onclick="onee()" id="oneed">1</button><button value="1" onclick="twoe()" id="twoe">2</button><button value="2" onclick="threee()" id="threee">3</button>')
}
function onee() {
    color.shift()
    console.log(color)
    document.write("<h1>"+"Update Array: " + color + "</h1>");
}
function twoe() {
    color.shift()
    color.shift()
    console.log(color)
    document.write("<h1>"+"Update Array: " + color + "</h1>");
}
function threee() {
    color.shift()
    color.shift()
    color.shift()
    console.log(color)
    document.write("<h1>"+"Update Array: " + color + "</h1>");
}
function twod() {
    var inddel = 2;
    console.log(inddel)
    document.write("<h1>" + "how many color you want to delete" + "</h1>");
    document.write('<button value="0" onclick="onee()" id="oneed">1</button><button value="1" onclick="twoe()" id="twoe">2</button>')
}
function threed() {
    var inddel = 3;
    console.log(inddel)
    color.shift()
    color.shift()
    color.shift()
    console.log(color)
    document.write("<h1>"+"Update Array: " + color + "</h1>");
}

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
document.write('10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.')
var student_score = [320, 328, 290, 120, 340, 480]
document.write('<h1>' + 'Scors of Students ' + student_score + '</h1>')
student_score = student_score.sort()
document.write('<h1>' + 'Ordered Scors of Students ' + student_score + '</h1>')
console.log(student_score)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cityname = ["Islamabad ", 'faisalaabad', 'karachi ', 'hadrabad', 'larkana', 'lahore']
document.write('<h1>' + 'city Names: ' + cityname + '</h1>')
var selectedCities = cityname[0] + cityname[2] + cityname[5]
document.write('<h1>' + 'Selected city Names: ' + selectedCities + '</h1>')

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
document.write('12. Write a program to create a single string from the below mentioned array:var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)')
var cat = ["This", "is", 'my', 'cat.'];
document.write('<h1>' + 'Array: ' + cat + '</h1>')
cat = cat.join(" ")
document.write('<h1>' + 'String: ' + cat + '</h1>')
console.log(cat)

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
document.write('13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)')
var fifo = ["keybord", 'mouse', 'printer', 'moniter']
document.write('<h1>' + 'Devices: ' + fifo + '</h1>')
for (let i=0;i<4;i++){
    document.write('<h1>' + 'Out: ' + fifo.shift() + '</h1>')

}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
var lifo = ["keybord", 'mouse', 'printer', 'moniter']
document.write('14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)')

document.write('<h1>' + 'Devices: ' + lifo + '</h1>')
for (let i=0;i<4;i++) {
    document.write('<h1>' + 'Out: ' + lifo.pop() + '</h1>')
}

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

document.write('15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:')
var phone_manufacturers=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write('<form><select id="myList" onchange="favBrowser()"><option></option><option>Apple</option><option>Samsung</option>  <option>Motorola</option><option>Nokia</option><option>Sony</option><option>Haier</option></select></form>')



