function Cart({v,i,getData}){
    console.log(v,i)
    return(
      <div className="">
        <button onClick={()=>getData("Fasial")}> click</button>
        <h3>{v}</h3>
      </div>
    )
  }
   export default Cart;