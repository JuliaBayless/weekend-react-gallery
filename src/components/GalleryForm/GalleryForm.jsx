import { useState } from "react";
import './GalleryForm.css';

//Intake FORM function
function GalleryForm({ addPhoto }) {
    //variable for input information
    const [photoPath, setPhotoPath] = useState('');
    const [description, setDescription] = useState('');

    //handleSubmit for information in inputs
    const handleSubmit = () => {
        console.log('In Handle submit');
        event.preventDefault();

        //object containing input values
        let newPhoto = {
            path: photoPath,
            description: description
        }

        //run GET from app.jsx
        addPhoto(newPhoto);

        //clear Inputs
        setPhotoPath('')
        setDescription('')

    }//end handleSubmit


    return (
        //start form with buttons and inputs
        <div className="inputContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="Photo: ">Photo Here: </label>
                <input className="photoIn" type="text"
                    value={photoPath}
                    onChange={(event) => setPhotoPath(event.target.value)} />
              
                    <label htmlFor="Description:">Description:</label>
                    <input className="descriptIn"type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)} />
                
                <div>
                <button>Add Photo</button>
                </div>
            </form>
        </div>

    )
} //end GalleryForm

export default GalleryForm;