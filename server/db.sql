
--endAnimals

CREATE DATABASE endAminals;

\c endAminals;

--create species table
CREATE TABLE species (id SERIAL PRIMARY KEY, commonName TEXT NOT NULL, sciName TEXT NOT NULL, estNumLiv integer CHECK (estNumLiv >= 0), conStatCode TEXT, recCreatedAt timestamptz);

--insert species
INSERT INTO species (commonName, sciName, estNumLiv, conStatCode, recCreatedAt) VALUES ('Giant Panda', 'Ailuropoda melanoleuca', 1864, 'V', current_timestamp);

--create indivAnimals table
CREATE TABLE indivAnimals (id SERIAL PRIMARY KEY, nickname TEXT NOT NULL, species TEXT NOT NULL, recCreatedAt timestamptz);

--insert indivAnimals
INSERT INTO indivAnimals (nickname, recCreatedAt, species) VALUES ('Hope Elephant', current_timestamp, (SELECT id FROM species WHERE commonname = 'Elephant'));

INSERT INTO indivAnimals (nickname, recCreatedAt, species) VALUES ('Amusaa Tiger', current_timestamp, (SELECT id FROM species WHERE commonname = 'Tiger'));

--create sightings table
CREATE TABLE sightings (id SERIAL PRIMARY KEY, sightTime DATE, individual TEXT, location TEXT, healthStatus boolean, email TEXT, recCreatedAt timestamptz);

--insert sighting
INSERT INTO sightings (sightTime, location, healthStatus, email, recCreatedAt, individual) VALUES ('2023-02-14', 'South Africa', false, 'vchambers@gmail.com', current_timestamp, (SELECT id from indivAnimals WHERE nickname = 'Sepo AE'));

INSERT INTO sightings (sightTime, location, healthStatus, email, recCreatedAt, individual) VALUES ('2023-02-14', 'South Africa', false, 'vchambers@gmail.com', current_timestamp, (SELECT id from indivAnimals WHERE nickname = 'Tumelo AE'));

--join tables
SELECT * FROM individuals INNER JOIN species ON individuals.species = species.commonName; 

SELECT sightings.sighttime, individuals.nickname, sightings.location, sightings.healthStatus FROM sightings INNER JOIN individuals ON sightings.individual = individuals.nickname; 

--MENTOR SESSION
SELECT individuals.nickname FROM individuals INNER JOIN sightings ON individuals.id = sightings.individual;
