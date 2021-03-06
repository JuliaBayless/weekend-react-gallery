const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GET Route
router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "gallery" ORDER BY "id";
    `;
    pool.query(sqlText)
        .then((result) => {
            console.log('The GET is operational', result)
            res.send(result.rows);
        }).catch((error) => {
            console.log('error in the GET', error)
            res.send(500);
        }); // END GET Route
});

//POST for incoming info
router.post('/', (req, res) => {
    const newPhoto = req.body;
    console.log('this is req.body', req.body);

    //text telling data base to insert new photo
    const sqlText = `
    INSERT INTO "gallery" ("path", "description", "likes") 
    VALUES ($1, $2, 0);`;

    let values = [newPhoto.path, newPhoto.description]
    pool.query(sqlText, values)
        .then((result) => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log(`ERROR database POST`, error);
            res.sendStatus(500);
        })
});//end POST route


// PUT Route for updating LIKES
router.put('/like/:id', (req, res) => {
    console.log('THESE ARE PARAMS', req.params);

    // grab that ID
    const galleryId = req.params.id;

    // Add sql text with a +1 to "likes"
    let queryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;    
  `;

    //making the id look nice with variables 
    values = [galleryId]
    pool
        .query(queryText, values)
        .then((response) => {
            res.sendStatus(200); // let the client know the request succeeded
        })
        .catch((err) => {
            console.log(`ERROR in PUT with PostgreSQL`, err);
            res.sendStatus(500); // let the client know the request failed
        });
}); // END PUT Route


//delete photos from the DOM
router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    console.log('Item to Delete', idToDelete);
    

    //text telling data base to delete item
    const queryText = `
    DELETE from "gallery"
    WHERE "id" = $1;
    `

    let value = [idToDelete]
    pool
        .query(queryText, value)
        .then((response) => {
            res.sendStatus(204); // let the client know the request succeeded
        })
        .catch((err) => {
            console.log(`ERROR in DELETE`, err);
            res.sendStatus(500); // let the client know the request failed
        });

}) //end DELETE


module.exports = router;