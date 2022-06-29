import React from 'react'
import { Divider, Input } from 'antd';


function Searchbar({SearchPets, onSearch}) {
    const handleChange = (e) => {
        onSearch(e.target.value);
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={SearchPets} type="text" onChange={handleChange} />
    </>
  )
}

export default Searchbar