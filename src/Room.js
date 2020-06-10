import React, { useState } from 'react';
import './Room.css'

function Room() {
    
  
    //const [isLit, setLit] = useState(true);
    let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(24);
    let [temp, setTemp] = useState(72);
    

    return (
    <div className={`room ${isLit?"lit":"dark"}`}>
         This Room is {isLit? "lit": "dark"}
         <br/>
         <button onClick={()=> setLit(!isLit) } >Toggle Light</button>
         <br/>
         <button onClick={() => setLit(isLit = true)}>ON</button>
         <br/>
         <button onClick={() => setLit(isLit = false )}>OFF</button>
         <br/>
         Age: {age}
         <br/>
         <button onClick={()=> {
                         console.log("Increase age arrow function");
                         setAge(++age);
                         }}>
              Increase Age
         </button>
         <br/>
         Temp: {temp}
         <br/>
         <button onClick={() => setTemp(++temp)}>
            Increase Temperature
         </button>
         <br />
        <button onClick={() => setTemp(--temp)}>
            Decrease Temperature
         </button>
    </div>
  );
}

export default Room;
