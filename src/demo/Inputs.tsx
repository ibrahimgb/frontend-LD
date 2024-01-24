
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function Inputs({setNewSearchResult  , setNewThresholdResult , setSearchChanged, setThresholdChanged} ) {

    const [search , setSearch] = useState("")
    const [threshold , setThreshold] = useState <number | null>(0)

  return (
<div>
        <TextField id="name" label="Search by name" variant="outlined" type="text"
        value={search}
        onChange={(e)=>setSearch( e.target.value)} 
        />
        <Button variant="outlined" onClick={()=>setSearchChanged(search)}>Search</Button>
<TextField id="threshold" label="Search by threshold" variant="outlined" type="text"
        value={threshold}
        onChange={(e)=>{ setThreshold( parseInt(e.target.value) ) }} 
        />
<Button variant="outlined" onClick={()=>setThresholdChanged(threshold)}>Filter threshold</Button>
</div>
  )
}

export default Inputs