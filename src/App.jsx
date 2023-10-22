import './App.css'
import Header from './components/Header'
import MemeComponent from './components/MemeComponent'
import memeData from "./memesData"

function App() {


  return (
    <div>
        <Header/>
        <MemeComponent data={memeData.data.memes}/>
    </div>
  )
}

export default App
