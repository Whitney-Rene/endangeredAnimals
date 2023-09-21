import React, { useState, useEffect } from 'react'
// import * as ioicons from 'react-icons/io5'
// import MyForm from './Form';
import SightingCard from './SightingCard';
import './ListSightings.css'

const ListSightings = () => {

    // state
    const [sightings, setSightings] = useState([]);
    const [species, setSpecies] = useState([]);
    const [individuals, setIndividuals] = useState([]);

    // this function calls an api a bring the info from the database here, save the data (in an array of objects) as state
    const loadSightings = () => {
        fetch("http://localhost:8080/api/sightingsJoin")
            .then((response) => response.json())
            .then((sightings) => {
                setSightings(sightings);
            });
    }

    // this function calls an api and brings info from species table, save data (an array of objects) as state
    const loadSpecies = () => {
        fetch("http://localhost:8080/api/species")
            .then((response) => response.json())
            .then((species) => {
                console.log("frontendSpecies", species);
                setSpecies(species);
            });
    }

    //query param ?key=value
    //url param specific ind  /valueofid
    //single endpoint that optionally supports specific query
    const loadIndividualAnimals = (speciesId) => {
        fetch(`http://localhost:8080/api/individuals?species=${speciesId}`)
        .then((response) => response.json())
        .then((indivAnimals) => {
            console.log("loadIndividualsAminals", indivAnimals);
            setIndividuals(indivAnimals)
        });
    }

    useEffect(() => {
        loadSightings();
        loadSpecies();
    }, []);
    //[sightings]

    //lines 50-51

    return (
        <div className="mybody">

            <div className="list-sightings">
                {sightings.map((sightingItem) => {
                    return <SightingCard key={sightingItem.id} sightings={sightingItem}/>
                })}
            </div>

            <div className='list-species'>

                {/* <h6>Click on a Species Below to view Individual Animals:</h6> */}

                {/* {species.map((speciesItem) => (
  <div key={speciesItem.id}>
    <button onClick={() => setSelectedSpeciesId(speciesItem.id)}>
      {speciesItem.commonname}
    </button>
    
    {individuals
      .filter((individualsItem) => individualsItem.speciesId === speciesItem.id)
      .map((filteredIndividual, index) => (
        <div key={index}>{filteredIndividual.nickname}</div>
      ))}
  </div>
))} */}


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
                <button className='sightings-button'>ADD A SIGHTING</button>

            </div>


        {/* <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} /> */}

        </div>
    );
}


export default ListSightings

// columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
// return <SightingCard key={sighting.id} sightings={sighting} toDelete={onDelete} toUpdate={onUpdate} />

//line 50 - 51
    // const onSaveStudent = (newStudent) => {
    //     //console.log(newStudent, "From the parent - List of Students");
    //     setStudents((students) => [...students, newStudent]);
    // }


    // //A function to control the update in the parent (student component)
    // const updateStudent = (savedStudent) => {
    //     // console.log("Line 29 savedStudent", savedStudent);
    //     // This function should update the whole list of students - 
    //     loadStudents();
    // }

    // //A function to handle the Delete funtionality
    // const onDelete = (student) => {
    //     //console.log(student, "delete method")
    //     return fetch(`http://localhost:8080/api/students/${student.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadStudents();
    //         }
    //     })
    // }

    // //A function to handle the Update functionality
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);

    // }