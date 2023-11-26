
function post() {
    var name = document.getElementById("exampleFormControlInput1");
    var message = document.getElementById("exampleFormControlTextarea1");
    var colar= document.getElementById("favcolor");
    console.log(name.value);
    console.log(message.value);
    console.log(colar.value)
    if(name.value=="" || message.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Write Name and Message',
          })
    }else{
        var posts = document.getElementById("post");
        posts.innerHTML += `
        
            <div class="card" id="card" style="margin-top: 15px;">
                <h5 class="card-header" style="color: #008080;">FeedBack</h5>
                <div class="card-body" style="color:${colar.value};">
                    <h5 class="card-title" id="title">${name.value}</h5>
                    <p class="card-text"  id="text">${message.value}</p>
                </div>
            </div>
        `
        Swal.fire(
            'Good job!',
            'Your FeedBack Is Submitted',
          )
    }
}