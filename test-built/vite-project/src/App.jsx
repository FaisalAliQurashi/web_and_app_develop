import './App.css'
import AppLayout from './assets/commonent/layout'
import Appheader from './assets/commonent/header'
import User from './assets/commonent/createContacx'

function App() {
  const [user, setUser] = useState({email:"faisal@gmail.com",name:"faisal"});

  return (
    <User.Provider value={{user, setUser}}>
    <div className="main">
    <AppLayout/>
     <Appheader/>
     
    </div>
    </User.Provider>
  )
}

export default App



