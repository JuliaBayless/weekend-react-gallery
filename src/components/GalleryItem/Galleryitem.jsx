import axios from "axios";
import { useState } from "react";


function GalleryItem({ photo, fetchPhotos }) {
    const [togglePhoto, setTogglePhoto] = useState(true);

    //photo toggle function
    const toggle = () => {
        setTogglePhoto(!togglePhoto);
    }

    const deletePhoto = () => {
        console.log('In deletePhoto', photo.id);
        axios
            .delete(`/gallery/${photo.id}`)
            .then((response) => {
                // refresh the DOM
                fetchPhotos();
            })
            .catch((err) => {
                console.log(
                    `ERROR in DELETE`,
                    err
                );
            });
    }

    //create a onClick for like button
    const showScript = () => {
        console.log('in ShowScript', photo.id);
        let id = photo.id
        axios({
            method: 'PUT',
            url: `/gallery/like/${id}`
        })
            .then((response) => {
                fetchPhotos();
                console.log('in the UPDATE', response)
            }).catch((error) => {
                console.log('Error in UPDATE', error)
            })
    }


    //test for togglePhoto value
    console.log('togglePhoto value', togglePhoto);
    //test for photo.likes
    console.log('photo likes before render', photo.likes);


    //print stuff to DOM and create a onclick handle
    return (
        // photo and description toggle
        <div>
            <div className="photoItem" onClick={toggle}>
                {togglePhoto ? <img className="photo" src={photo.path} /> : <>
                <img className="photoFlip" src={photo.path} />
                    <p className="wordFlip">{photo.description}</p></>}
            </div>

            <div>
                {/* button like magic with ternary value to add likes*/}
                <button className="likeBtn"onClick={showScript}>Like</button>
                <button className="deleteBtn"onClick={deletePhoto}>Remove</button>
                {photo.likes ? <p className="likes">Likes: {photo.likes} </p> :
                    <p className="likes">No Likes yet :( </p>}
            </div>
        </div>

    ) //end PhotoItem return
} //end PhotoItem

export default GalleryItem;