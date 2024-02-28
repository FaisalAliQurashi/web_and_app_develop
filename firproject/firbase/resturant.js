


const logo = document.getElementById("formFile");
const selectedlogo = document.getElementById("selected-logo");
let filelogo;
logo.addEventListener("change", (e) => {
    filelogo=e.target.files[0];
    selectedlogo.src = URL.createObjectURL(e.target.files[0])
})

const submitresturant= document.getElementById("submit-resturant")
submitresturant.addEventListener('click',()=>{
    const name = document.getElementById("resturant-name");
    const address = document.getElementById("rest-add");
    console.log(name.value,address.value,filelogo)
})