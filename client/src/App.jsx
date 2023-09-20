import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListSightings from './components/ListSightings'


function App() {

  return (
    <div className="App">
      <h2>Ζώα υπό εξαφάνιση</h2>
      <button>See all our SPECIES</button>
      <button>See all our INDIVIDUAL ANIMALS</button>
      <button>ADD A SIGHTING</button>
      <ListSightings />

    </div>
  )
}

export default App

{/* <MyNavBar /> */}

