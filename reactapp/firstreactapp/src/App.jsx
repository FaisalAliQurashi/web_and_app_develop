import logo from './logo.svg';
import './App.css';
// import { Button } from '@mui/material';
import Cart from './component/cart';
import Input from './component/input';
// import BasicCard from './component/Muicard';
import BasicCard from './component/Nextstep';
function App() {
  const arr=["one","two", "three"]
  const getData=(a)=>{
    console.log("parent",a)
  }
  return (
    <div className="App">
      <Input onChange={(e)=>console.log(e.target.value)}/>
      {/* <h1>Faisal ali Qurashi</h1> */}
      {arr.map((v,i)=>(
        <BasicCard key={i} v={v} i={i} getData={getData}/>
        // <Cart key={i}/>
      ))}
    </div>
  );
}

export default App;
