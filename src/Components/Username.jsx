import React from 'react';

function Username({ formData, setFormData }) { // Corrected prop destructuring
    return (
        <div className='username'>
            <h1>Step 2</h1>
            <input
                type='text'
                placeholder='Username'
                value={formData.Username}
                onChange={(event) => setFormData({ ...formData, Username: event.target.value })}
            />
        </div>
    );
}

export default Username;
