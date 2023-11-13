import React, { useState, useEffect } from 'react'
// import * as ioicons from 'react-icons/io5'
import SightingCard from './SightingCard';
import SightingsForm from './SightingsForm';
import './ListSightings.css'

const ListSightings = () => {

    // state
    const [sightings, setSightings] = useState([]);
    const [species, setSpecies] = useState([]);
    const [individuals, setIndividuals] = useState([]);

    // this function calls an api a bring the info from the database here, save the data (in an array of objects) as state
    const loadSightings = () => {
        fetch("http://localhost:8080/api/sightingsJoin")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch sightings');
                }
                return response.json();
            })
            .then((sightings) => {
                console.log("SightingtfromJoin", sightings);
                setSightings(sightings);
            })
            .catch((error) => {
                console.error('Error fetching sightings:', error);
                // You can show an error message to the user or handle it as needed
            });
    };
    

    // this function calls an api and brings info from species table, save data (an array of objects) as state
    const loadSpecies = () => {
        fetch("http://localhost:8080/api/species")
            .then((response) => response.json())
            .then((species) => {
                // console.log("frontendSpecies", species);
                setSpecies(species);
            });
    }

    //single endpoint that optionally supports specific query
    const loadIndividualAnimals = (speciesId) => {
        fetch(`http://localhost:8080/api/individuals?species=${speciesId}`)
        .then((response) => response.json())
        .then((indivAnimals) => {
            console.log("loadIndividualsAminals", indivAnimals);
            setIndividuals(indivAnimals)
        });
    }

    const handlePostRequest = (data) => {

        fetch("http://localhost:8080/api/sightings", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then((reponse) => reponse.json())
          .then((data) => {
            console.log("Inside the post line 28", data)
            setSightings([...sightings, data])
          })
    
      };

    useEffect(() => {
        loadSightings();
        loadSpecies();
    }, []);

    return (
        <div className="mybody">

            <div className="list-sightings">
                {sightings.map((sightingItem) => {
                    return <SightingCard key={sightingItem.id} sightings={sightingItem}/>
                })}
            </div>

            <div className='list-species'>

                {species.map((speciesItem, index) => (
                    <li>
                        <button onClick={() => loadIndividualAnimals(speciesItem.id)} key={index}>{speciesItem.commonname}</button>

                    </li>
                ))}
                {
                    individuals.length > 0 ? 
                    individuals.map((individualsItem, indexOne) => <div key={indexOne}>{individualsItem.nickname}</div>)
                    : null
                }
                {/* <button className='sightings-button'>ADD A SIGHTING</button> */}
                <SightingsForm post={handlePostRequest} loadSightings={loadSightings}/>

            </div>

        </div>
    );
}


export default ListSightings
