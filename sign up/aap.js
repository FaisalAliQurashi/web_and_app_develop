function submit(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("inputEmail4").value
    var phone = document.getElementById("phone").value
    var pasword = document.getElementById("inputPassword4").value
    var cpasword = document.getElementById("cpasword").value
    if(fname===""||lname===""|| email==="" || phone==="" || pasword===""|| cpasword===""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Fill All Fields!",
          });
    }else if(pasword!==cpasword){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password Don't Match",
          });
    }else{
        Swal.fire({
            title: "Form Submit Successfully",
            icon: "success"
          });
    }
}
