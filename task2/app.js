function submit() {
    var word = document.getElementById("text").value
    var reverse = word.split("").reverse().join("")
    if(word===""){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please Write some thing!",
        });
    }else{
        if(word===reverse){
            Swal.fire({
                title: word,
                text: "is a palindrome Word",
                icon: "success"
              });
        }else{
            Swal.fire({
                icon: "error",
                title: word,
                text: "is Not a palindrome Word",
              });
        }
    }
    


}