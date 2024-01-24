
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import Inputs from "./Inputs";

export type DataFormat = {
   id : number
     name :  string 
     type : [ string ]
     hp : number
     attack : number
     defense : number
     special_attack : number
     special_defense : number
     speed : number
     power: number
    }


function Demo()  {
  const [data, setData] = useState< [DataFormat]>();
  const [filteredData, setFilteredData] = useState< [DataFormat]>();  

  const [search, setSearchChanged] = useState<string>("");  
  const [threshold, setThresholdChanged] = useState<number>(0); 


function setNewSearchResult(): void{
    const newResult = data?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    //new RegExp(search).test(keyword.name))
    console.log("newResult")
console.log(newResult)
    setFilteredData(newResult)
}

function setNewThresholdResult(): void{
    // console.log(data?.filter((item)=> item.power  > threshold))
    setFilteredData(data?.filter((item)=> item.power  > threshold))
}

useEffect(()=>{
    if(search != ""){
        setNewSearchResult()
    }
    if(threshold!= 0){
        setNewThresholdResult()
    }

}, [search , threshold])

    useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get('/pokemon.json');
        const editedResponse = response.data.map((i: DataFormat)=> {return {...i , power: i.hp + i.attack + i.defense + i.special_attack + i.special_defense + i.speed}})
        setData(editedResponse);
        setFilteredData(editedResponse)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

 

  return (
    <div className='demo'>
<Inputs setNewSearchResult= {setNewSearchResult} setNewThresholdResult = {setNewThresholdResult} setSearchChanged={setSearchChanged} setThresholdChanged={setThresholdChanged} />

    { data   && <DataTable payload = {filteredData} /> } 
    </div>
    //    <div>
    //   {data ? (
    //     <pre>{JSON.stringify(data, null, 2)}</pre>
    //   ) : (
    //     <p>Loading data...</p>
    //   )}
    // </div>
   
  )
}
export default Demo