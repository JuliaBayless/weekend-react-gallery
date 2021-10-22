
function GalleryItem({ photo, fetchPhotos }) {

    //create a onClick
const showScript = () => {

    
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