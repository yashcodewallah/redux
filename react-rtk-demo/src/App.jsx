import './App.css'
import Userview from "./features/user/userview"
import Cakeview from "./features/cake/cakeview"
import Icecreamview from "./features/icecream/icecreamview"

function App() {

  return (
    <div className="App">
     <Cakeview/>
     <Icecreamview/>
     <Userview/>
    </div>
  )
}

export default App
