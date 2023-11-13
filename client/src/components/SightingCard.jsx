import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5';
import { format } from 'date-fns';
import './SightingCard.css'; 


const SightingCard = ({sightings, toUpdate, toDelete}) => {

    return (
    
        <div className='sighting-card'>
            <div>
                <p>{sightings.nickname} spotted {sightings.sighttime}</p>
                <p>Species: {sightings.commonname}/{sightings.sciname}</p>
                <p>Location: {sightings.location}</p>
                <p>{sightings.healthstatus ? 'Animal in good health' : 'Animal not in good health'}</p>

            </div>

        </div>
    )

}

export default SightingCard;
