import React from 'react'

export default function FormInput  ({label, ...OtherProps}) {
  return (
    <div>
      <label>{label}</label>
      <input {...OtherProps}/>
    </div>
  )
}
