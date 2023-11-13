import React, { useRef } from 'react';

function SightingsForm ({post, loadSightings}) {

    const userSighttime = useRef();
    const userLocation = useRef();
    const userHealthstatus = useRef();
    const userEmail = useRef();
    const userNickname = useRef();

const handleSubmit = (e) => {

    e.preventDefault();
    const userSighting = {sighttime: userSighttime.current?.value, location: userLocation?.current.value, healthstatus: userHealthstatus.current?.value, email: userEmail.current?.value, nickname: userNickname.current?.value};

    console.log(userSighting);
    post(userSighting);

    userSighttime.current.value='';
    userLocation.current.value='';
    userHealthstatus.current.value='';
    userEmail.current.value='';
    userNickname.current.value='';

    window.location = "/";

}

    return (
        <>
        <form className='form' onSubmit={handleSubmit}>
        
        <h2>Create a Sighting:</h2>
            {/* user chooses */}
            <label>Date of Sighting:</label>
            <input type="date" name="sighttime" required placeholder="YYYY-MM-DD" ref={userSighttime}/>

            <label>Location of Sighting:</label>
            <input type="text" name="location" required placeholder="Country" ref={userLocation}/>

            <label>Health Status of Animals: "true" for good health OR "false" for bad health</label>
            <input type="text" name="healthstatus" required placeholder="true or false" ref={userHealthstatus}/>

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
