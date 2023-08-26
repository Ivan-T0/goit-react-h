import React, { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

const App = ()=>{
  const [query, setQuery] = useState('');
  // const [images, setImages] = useState('')


//  const handleInput = (e) => {
//     e.preventDefault();
//     const { value } = e.target;
   
//        setQuery(value);
    
//   };

  const handleSubmit = (query) => {
    setQuery(query);
  };

 
    return (
      <div>
        <Searchbar onSubmit={handleSubmit} value={query} />
        <ImageGallery query={query}  />
      </div>
    );
  
}
export default App;