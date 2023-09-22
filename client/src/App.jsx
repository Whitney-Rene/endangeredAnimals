import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListSightings from './components/ListSightings'
import SightingsForm from './components/SightingsForm';


function App() {

  return (
    <div className="App">

      <div className='photo'>
        <img src="https://www.iucn.org/sites/default/files/content/images/2021/african_savanna_elephant_annabel_wynyard.jpeg"></img>
      </div>

      <h2>endangeredAnimals</h2>

      <div className='sightings'>
        <ListSightings />
      </div>

      {/* <div className='submit-sighting'>
        <SightingsForm />
      </div> */}

    </div>
  )
}

export default App

{/* <MyNavBar /> */}

