const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// const galleryItems = require('../modules/gallery.data');


// DO NOT MODIFY THIS FILE FOR BASE MODE


// GET Route
router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "gallery";
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


// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route



module.exports = router;