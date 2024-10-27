import React from 'react'

function Email({formData, setFormData}) {
  return (
    <div className='email'>
        <h1>step1</h1>
        <input type='text' placeholder='email' value={formData.email} 
        onChange={(event) =>setFormData({...formData, email:event.target.value})}></input>
    </div>
  )
}

export default Email;