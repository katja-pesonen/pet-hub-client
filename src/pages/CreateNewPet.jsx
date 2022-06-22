import React from 'react'
import { useState } from "react";

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
        e.preventDefault();
        props.addNewPet({ name, type, age, description, image });
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
      <input value={description} type="text" onChange={handleDescriptionInput} />

      <label>Image</label>
      <input value={image} type="text" onChange={handleImageInput} />

      <button type="submit">Create</button>
    </form>

    </div>
  )
}

export default CreateNewPet