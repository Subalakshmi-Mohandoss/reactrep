import React from 'react'

const button = ({label,color}) => {
  return <button className="{`px-4 py-2 bg-${color}-500 rounded-lg `}"></button>
}

export default button