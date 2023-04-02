import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {
  return (
    <div className="App">
      <Navbar/>
    <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1>
    <PriceList/>
    <Dashboard/>
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
