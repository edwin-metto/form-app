import React from 'react';

function LastName({ formData, setFormData }) {
    return (
        <div className='last-name'>
            <h1>Step 2</h1>
            <input
                type='text'
                placeholder='Last Name'
                value={formData.LastName}
                onChange={(event) => setFormData({ ...formData, LastName: event.target.value })}
            />
        </div>
    );
}

export default LastName;
