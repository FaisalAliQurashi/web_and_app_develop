function setQuiz() {
    var tex = document.getElementById("floatingTextarea2").value;
    var arry = tex.split("\n")
    console.log(arry)
    for (var i in arry) {
        if (arry[i].charAt(arry[i].length-1)==="?") {
            console.log("Question: ", arry[i])
        }
        else if (arry[i].charAt(arry[i].length-1)==="*") {
            console.log("Answer: ", arry[i])
            
        } else if(arry[i]===""){
            continue
        }
         else {
            console.log("Option:", arry[i])
            
        }
       
    }

}