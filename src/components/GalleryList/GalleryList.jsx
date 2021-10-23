import GalleryItem from "../GalleryItem/Galleryitem";

function GalleryList({ photoList, fetchPhotos }) {
    console.log('inside PhotoList');
    
    //map to loop through photoList objects
    return (
        <div className="photoContainer">
            {photoList.map((photo) => {
                return (
                    <GalleryItem
                        photo={photo}
                        key={photo.id}
                        fetchPhotos={fetchPhotos}
                    />
                )
            })}
        </div>
    )
}//end PhotoList

export default GalleryList;