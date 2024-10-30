import React from 'react';

function FirstName({ formData, setFormData }) {
    return (
        <div className='input-field'>
            <h1>Step 1</h1>
            <input
                type='text'
                placeholder='First Name'
                value={formData.FirstName}
                onChange={(event) => setFormData({ ...formData, FirstName: event.target.value })}
            />
        </div>
    );
}

export default FirstName;
