import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateNewPet(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [age, setAge] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    


    const handleNameInput = e => setName(e.target.value);
    const handleTypeInput = e => setType(e.target.value);
    const handleAgeInput = e => setAge(e.target.value);
    const handleDescriptionInput = e => setDescription(e.target.value);
    const handleImageInput = e => setImage(e.target.value);


    const handleSubmit = (e) => {     
      // Prevent page reload on submit
        e.preventDefault();

        props.addNewPet({ name, type, age, description, image }); // DO I DELETE THIS??
      // Create the body for the POST request
    //     const body = { name, type, age, description, image };   // DO I USE  THIS PART BELOW INSTEAD??

          //  const navigate = useNavigate();
    
    //     axios
    //       .post("https://local...", body) 
    //       .then((response) => {
    //         // Reset the state
    //         setName("");
    //         setImage("");
    //         setAge("");
    //         setType("");
    //         setDescription("");

            // Navigate to the `/user/profile` page
              //  navigate('/user/profile');
    //       });
     }

  return (
    <div>
    <h2>Add New Pet</h2>

    <form onSubmit={handleSubmit}>
      <div></div>

      <label>Name</label>
      <input value={name} type="text" onChange={handleNameInput} />

      <label>Type of animal</label>
      <input value={type} type="text" onChange={handleTypeInput} />

      <label>Age</label>
      <input value={age} type="text" onChange={handleAgeInput} />

      <label>Description</label>
      <textarea name="description" rows="10"cols="50" placeholder="Please write something about your pet :)"
value={description} type="text" onChange={handleDescriptionInput} />

      <label>Image</label>
      <input value={image} type="file" name="receta-img" accept=".jpg, .png" onChange={handleImageInput} />
     {/* <label for="image-upload" class="add-image"> Choose an image to upload: </label>
        <input type="file" name="receta-img" accept=".jpg, .png" style="display:none;">
     */}

      <button type="submit">Create</button>
    </form>

    </div>
  )
}

export default CreateNewPet