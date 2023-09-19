import React, { useState, useEffect } from 'react'
// import * as ioicons from 'react-icons/io5'
// import MyForm from './Form';
import SightingCard from './SightingCard';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ListSightings = () => {

    // this is my original state with an array of students 
    const [sightings, setSightings] = useState([]);

    //this is the state needed for the UpdateRequest
    //const [editingStudent, setEditingStudent] = useState(null)

    const loadSightings = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/sightings")
            .then((response) => response.json())
            .then((sightings) => {
                setSightings(sightings);
            });
    }

    useEffect(() => {
        loadSightings();
    }, []);
    //[sightings]

    const onSaveStudent = (newStudent) => {
        //console.log(newStudent, "From the parent - List of Students");
        setStudents((students) => [...students, newStudent]);
    }


    //A function to control the update in the parent (student component)
    const updateStudent = (savedStudent) => {
        // console.log("Line 29 savedStudent", savedStudent);
        // This function should update the whole list of students - 
        loadStudents();
    }

    //A function to handle the Delete funtionality
    const onDelete = (student) => {
        //console.log(student, "delete method")
        return fetch(`http://localhost:8080/api/students/${student.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadStudents();
            }
        })
    }

    //A function to handle the Update functionality
    const onUpdate = (toUpdateStudent) => {
        //console.log(toUpdateStudent);
        setEditingStudent(toUpdateStudent);

    }



    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Endangered Animals</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
            <Masonry>
                {sightings.map((sighting) => {
                    return <SightingCard key={sighting.id} sightings={sighting} toDelete={onDelete} toUpdate={onUpdate} />
                })}
            </Masonry>
            </ResponsiveMasonry>
        </div>
        {/* <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} /> */}
        </div>
    );
}


export default ListSightings