
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./style.css";

function Inputs({setNewSearchResult  , setNewThresholdResult , setSearchChanged, setThresholdChanged} ) {

    const [search , setSearch] = useState("")
    const [threshold , setThreshold] = useState <number | null>(0)

      const handleInputChange = (event) => {
    const inputValue : string = event.target.value;

    // Check if the input is a valid number or empty
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      // Update the state with the numeric value or 0 if empty

      setThreshold( inputValue === '' ? 0 : parseInt(inputValue) )
    }
    // If the input is not a valid number, ignore it
  };


  return (
<div className='input-box'>
      <div className='inputs'>  <TextField id="name" label="Search by name" variant="outlined" type="text"
        value={search}
        onChange={(e)=>setSearch( e.target.value)} 
        />
        <Button className='btn' variant="outlined" onClick={()=>setSearchChanged(search)}>Search</Button></div>


<div className='inputs'><TextField id="threshold" label="Search by threshold" variant="outlined" type="text"
        value={threshold}
        onChange={(e)=>{ handleInputChange(e)  }} 
        />
<Button className='btn' variant="outlined" onClick={()=>setThresholdChanged(threshold)}>Filter threshold</Button></div>


</div>
  )
}

export default Inputs