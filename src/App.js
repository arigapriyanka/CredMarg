import React, {useState} from 'react'
import './App.css';

function App() {
  const [state, setState] = useState("");
  const isNumber = parseInt(state)
  
  
  const textColor = isNaN(state) ? "Green":"Red"
  return (
    <div className="App" style={{ color: textColor}}>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder='enter a number' className='input-box'/> <br/>
      <p>{state}</p>
    </div>

  );
}

export default App;
