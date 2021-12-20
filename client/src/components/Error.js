import React from 'react'

export const Error = (error) => {
  return (
    <div>
      <h2 className="text-xl mb-4">{`Error: ${error.message}`}</h2>
    </div>
  )
}