import React from 'react';

function Password({ formData, setFormData }) { 
    return (
        <div className='password'>
            <h1>Step 3</h1>
            <input
                type='text' 
                placeholder='Password'
                value={formData.Password}
                onChange={(event) => setFormData({ ...formData, Password: event.target.value })}
            />
        </div>
    );
}

export default Password;
