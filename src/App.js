import React, { useState } from 'react'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

//元件
import CardFooter from './components/CardFooter'
import UnitControl from './components/UnitControl'
import UnitConverter from './components/UnitConverter'

library.add(fab, fas, far)

function App() {
  const [inputValue, setInputValue] = useState(0)
  const handleInputChange = (e) => {
    // const { value } = e.target
    setInputValue(e.target.value)
    console.log("handleInputChange -> e.target.value", e.target.value)
  }

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          value={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardFooter value={inputValue} />
    </div >
  );
}

export default App;
