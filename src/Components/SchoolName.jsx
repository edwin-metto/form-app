import React from 'react';

function SchoolName({ formData, setFormData }) {
    return (
        <div className='school-name'>
            <h1>Step 3</h1>
            <input
                type='text'
                placeholder='School Name'
                value={formData.SchoolName}
                onChange={(event) => setFormData({ ...formData, SchoolName: event.target.value })}
            />
        </div>
    );
}

export default SchoolName;
