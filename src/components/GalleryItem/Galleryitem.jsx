import axios from "axios";
import { useState } from "react";


function GalleryItem({ photo, fetchPhotos }) {
const [togglePhoto, setTogglePhoto] = useState(false);

const toggle = () => {
    setTogglePhoto(!togglePhoto);
}

    //create a onClick
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


console.log('photo likes before render', photo.likes);
    //print stuff to DOM and create a onclick handle
    return (
        <div className="photoItem" onClick={toggle}>
            <img className="photo" src={photo.path} />

            <div>
                {/* button like magic with ternary value to add likes*/}
                <button onClick={showScript}>Like</button>
                {photo.likes > 0 ? <p>Likes: {photo.likes} </p> :
                <p>No Likes yet :( </p>}
            </div>
        </div>


    ) //end PhotoItem return
} //end PhotoItem

export default GalleryItem;