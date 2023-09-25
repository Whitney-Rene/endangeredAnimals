import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5';
import { format } from 'date-fns';
import './SightingCard.css'; 


const SightingCard = ({sightings, toUpdate, toDelete}) => {

    // console.log('SS object', sightings.sighttime);
    //creates a variable and formats the sightings value at sightime to readable date and time
    // const formattedSightTime = format(new Date(sightings.sighttime), 'MMMM dd, yyyy @ h:mm a');
    
    
    // console.log(formattedSightTime);
    // const onUpdate = (toUpdateStudent) => {
    //     toUpdate(toUpdateStudent)
    // }

    // const onDelete = (toDeleteStudent) => {
    //     toDelete(toDeleteStudent)
    // }

    return (
    
        <div className='sighting-card'>
            <div>
                <p>{sightings.nickname} spotted {sightings.sighttime}</p>
                <p>Species: {sightings.commonname}/{sightings.sciname}</p>
                <p>Location: {sightings.location}</p>
                <p>{sightings.healthstatus ? 'Animal in good health' : 'Animal not in good health'}</p>

            </div>

            {/* <div className="sighting-card-buttons">
                <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
                <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </div> */}

        </div>
    )

}

export default SightingCard;