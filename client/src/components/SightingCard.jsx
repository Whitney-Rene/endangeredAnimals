import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5';
import { format } from 'date-fns';


const SightingCard = ({sightings, toUpdate, toDelete}) => {

    const formattedSightTime = format(new Date(sightings.sighttime), 'MMMM dd, yyyy h:mm a');
    const onUpdate = (toUpdateStudent) => {
        toUpdate(toUpdateStudent)
    }

    const onDelete = (toDeleteStudent) => {
        toDelete(toDeleteStudent)
    }

    return (
    
        <div className='sighting-card'>
        <Card>
            <Card.Body>
            <Card.Title>{sightings.individual} {formattedSightTime} {sightings.location} {sightings.healthstatus}</Card.Title>
            <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
        </div>
    )

}

export default SightingCard;