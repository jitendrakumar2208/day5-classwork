import { useState } from 'react';
import './App.css';

function App() {
  const[input,setInput] = useState({
    subject:"",
    hours :""
  })

  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setInput((prev)=>{
      return {...prev,[name]:value};
    })
  }
  const handleSubmit = ()=>{
    
  }
  return (
  <>
   <div>
    <h3>Geekster Education Planner</h3>
    <input type="text" placeholder='Subject' name='subject' onChange={handleChange}/>
    <input type="number"  name='hours' onChange={handleChange}/>
    <button onClick={handleSubmit}>Add</button>
   </div>

   <div >
    <h3>subject</h3>
    <p></p>
    <button ></button>
    <button>-</button>
   </div>
   </>
  )
}

export default App;
