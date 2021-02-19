import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UnitControl() {
  return (
    <div className="unit-control">
      <div className="unit">Mbps</div>
      <span className="exchange-icon fa-fw fa-stack">
        <FontAwesomeIcon icon={['far', 'circle']} className="fa-stack-2x" />
        <FontAwesomeIcon icon={['fas', 'exchange-alt']} className="far fa-exchange-alt fa-stack-1x" />
      </span>
      <div className="unit">MB/s</div>
    </div>
  )
}

export default UnitControl