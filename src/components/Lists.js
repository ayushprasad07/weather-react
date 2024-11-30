import React from 'react'

export default function Lists(props) {
  return (
      <option className="dropdown-item" value={`${props.count}`}>{props.count}</option>
  )
}
