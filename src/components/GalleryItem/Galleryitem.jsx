import axios from "axios";


function GalleryItem({ photo, fetchPhotos }) {

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

console.log(photo.likes);
return(
 
    <p>{photo.likes}</p> 

)
}

    //print stuff to DOM and create a onclick handle
    return (
        <div className="photoItem">
            <img className="photo" src={photo.path} />

            <div>
                <button onClick={showScript}>Like</button>
            </div>
        </div>


    ) //end PhotoItem return
} //end PhotoItem

export default GalleryItem;