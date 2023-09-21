const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create the get request for students in the endpoint '/api/species'
app.get('/api/species', async (req, res) => {
    try {
        const { rows: species } = await db.query("SELECT species.commonname, species.sciname FROM species");
        console.log('inside server', species);
        res.send(species);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the get request for students in the endpoint '/api/individuals'
app.get('/api/individuals', async (req, res) => {
    try {
        const { rows: individuals } = await db.query("SELECT * FROM indivanimals");
        res.send(individuals);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the get request for students in the endpoint '/api/sightings'
//update
//SELECT * FROM individuals INNER JOIN sightings ON individuals.id = sightings.individual
//SELECT * FROM individuals INNER JOIN sightings ON individuals.id = sightings.individual INNER JOIN species ON individuals.species = species.id;
//SELECT individuals.nickname, species.commonname, sightings.sighttime, sightings.location, sightings.healthstatus FROM individuals INNER JOIN sightings ON individuals.id = sightings.individual INNER JOIN species ON individuals.species = species.id;
app.get('/api/sightings', async (req, res) => {
    try {
        const { rows: sightings } = await db.query("SELECT indivAnimals.nickname, species.commonname, species.sciname, sightings.sighttime, sightings.location, sightings.healthstatus FROM indivAnimals INNER JOIN sightings ON indivAnimals.id = sightings.individual INNER JOIN species ON indivAnimals.species = species.id;");
        console.log('inside server', sightings);
        res.send(sightings);
    } catch (e) {
        return res.status(400).json({ e });
    }
});


app.get('/api/nickname-join', async (req, res) => {
    try {
        const { rows: sightings } = await db.query("SELECT * FROM sightings");
        res.send(sightings);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// // create the POST request
// app.post('/api/students', async (req, res) => {
//     try {
//         const newStudent = {
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             iscurrent: req.body.iscurrent
//         };
//         //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
//         const result = await db.query(
//             'INSERT INTO students(firstname, lastname, is_current) VALUES($1, $2, $3) RETURNING *',
//             [newStudent.firstname, newStudent.lastname, newStudent.iscurrent],
//         );
//         console.log(result.rows[0]);
//         res.json(result.rows[0]);

//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });
//     }

// });

// // delete request for students
// app.delete('/api/students/:studentId', async (req, res) => {
//     try {
//         const studentId = req.params.studentId;
//         await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//         console.log("From the delete request-url", studentId);
//         res.status(200).end();
//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });

//     }
// });

// //A put request - Update a student 
// app.put('/api/students/:studentId', async (req, res) =>{
//     //console.log(req.params);
//     //This will be the id that I want to find in the DB - the student to be updated
//     const studentId = req.params.studentId
//     const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
//     console.log("In the server from the url - the student id", studentId);
//     console.log("In the server, from the react - the student to be edited", updatedStudent);
//     // UPDATE students SET lastname = "something" WHERE id="16";
//     const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
//     const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
//     try {
//       const updated = await db.query(query, values);
//       console.log(updated.rows[0]);
//       res.send(updated.rows[0]);
  
//     }catch(e){
//       console.log(e);
//       return res.status(400).json({e})
//     }
//   })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});