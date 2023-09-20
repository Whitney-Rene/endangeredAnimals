import React, { useState, useEffect } from 'react';

function SpeciesButton () {

    // const [species, setSpecies] = useState([]);

    // const loadSpecies = () => {
    //     fetch("http://localhost:8080/api/species")
    //         .then((response) => response.json())
    //         .then((species) => {
    //             console.log("SPECIES", species);
    //             setSpecies(species);
    //         });
    //}
    // useEffect(() => {
    //     loadSpecies();
    // }, []);

    return (
        <>
        

        {/* you cannot render an array directly a react element, you must map of over it */}
        {/* <p>{species}</p> */}
        </>
    )
}

export default SpeciesButton