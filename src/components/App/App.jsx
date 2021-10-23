import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PhotoList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  let [photoList, setPhotoList] = useState([]);

  //download this tuff onto DOM first in useEffect 
  useEffect(() => {
    fetchPhotos()
  }, [])


  // grab the photos from the server
  const fetchPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then(response => {
        console.log('IN GET', response.data);
        setPhotoList(response.data)
      })
      .catch(error => {
        console.log('ERROR IN GET', error);
      })
  }; //end fetch photos


  console.log(photoList);
  //append to dom/call other components here
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <PhotoList
        photoList={photoList}
        fetchPhotos={fetchPhotos}
      />
    </div>
  );
}

export default App;
