import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListSightings from './components/ListSightings'
import SpeciesButton from './components/SpeciesButton';


function App() {

  return (
    <div className="App">
      <h2>Ζώα υπό εξαφάνιση</h2>
      <button>See all INDIVIDUAL ANIMALS</button>
      <button>ADD A SIGHTING</button>
      <ListSightings />

    </div>
  )
}

export default App

{/* <MyNavBar /> */}

