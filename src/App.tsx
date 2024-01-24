
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Demo from "./demo/Demo";


function App() {
  const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-file-path.json' with the actual path to your file
        const response = await axios.get('/pokemon.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts



  return (
   <Demo />
  )
}

export default App
