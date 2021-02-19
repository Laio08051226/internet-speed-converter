import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UnitConverter(props) {
  console.log(props)
  const { value, handleInputChange } = props
  return (
    <div className="converter">
      <div className="flex-1">
        <div className="conver-title">Set</div>
        <input
          type="number"
          onChange={handleInputChange}
          value={value}
          className="input-number"
          min="0"
        />
      </div>

      <span className="angle-icon fa-2x" style={{ marginTop: "30px" }}>
        <FontAwesomeIcon icon={['fas', 'angle-right']} className="fas fa-angle-right" />
      </span>
      <div className="text-right flex-1">
        <div className="converter-title">Show</div>
        <input
          type="text"
          className="input-number text-right"
          value="125"
          disabled
          value={value / 8}
        />
      </div>
    </div>
  )
}

export default UnitConverter