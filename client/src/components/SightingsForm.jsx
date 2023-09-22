import React, { useState, useRef } from 'react';

function SightingsForm () {
//INSERT INTO sightings (sightTime, location, healthStatus, email, recCreatedAt, individual) VALUES ('2023-02-14', 'South Africa', false, 'vchambers@gmail.com', current_timestamp, (SELECT id from indivAnimals WHERE nickname = '???'));

    const userSighttime = useRef();
    const userLocation = useRef();
    const userHealthstatus = useRef();
    const userEmail = useRef();
    const userNickname = useRef();

const handleSubmit = (e) => {
    // "INSERT INTO sightings (sighttime, location, healthstatus, email, individual) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    //[sighttime, location, healthstatus, email, /*??*/]
    e.preventDefault();
    const userSighting = {sighttime: userSighttime.current?.value, location: userLocation?.current.value, healthstatus: userHealthstatus.current?.value, email: userEmail.current?.value, individual: userNickname.current?.value};

    console.log(userSighting);

    userSighttime.current.value='';
    userLocation.current.value='';
    userHealthstatus.current.value='';
    userEmail.current.value='';
    userNickname.current.value='';

}

    return (
        <>
        <form className='form' onSubmit={handleSubmit}>
        
        <h2>Create a Sighting:</h2>
            {/* user chooses */}
            <label>Date of Sighting:</label>
            <input type="text" name="sighttime" required placeholder="YYYY-MM-DD" ref={userSighttime}/>

            <label>Location of Sighting:</label>
            <input type="text" name="location" required placeholder="Country" ref={userLocation}/>

            <label>Health Status of Animals: "t" for good health OR "f" for bad health</label>
            <input type="text" name="healthstatus" required placeholder="t or f" ref={userHealthstatus}/>

            <label>What is your email?</label>
            <input type="text" name="email" required placeholder="email?" ref={userEmail}/>

            <label>Nickname of Animals</label>
            <select name="nickname" required ref={userNickname}>

                <option value="">Select a nickname</option>
                <option value="Lilato AE">Lilato AE</option>
                <option value="Tumelo AE">Tumelo AE</option>
                <option value="Sepo AE">Sepo AE</option>
                <option value="Amusaa ST">Amusaa ST</option>
                <option value="Kato ST">Kato ST</option>
                <option value="Imbuwa sGP">Imbuwa sGP</option>

            </select>
            <div>
            <button className='createEvButt' type="submit">Submit</button> 
            </div>
            
        </form>
        </>
    )
}

export default SightingsForm