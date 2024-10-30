import React from 'react';

function PersonalStatement({ formData, setFormData }) {
    return (
        <div className='personal-statement'>
            <h1>Step 4</h1>
            <textarea
                placeholder='Personal Statement'
                value={formData.PersonalStatement}
                onChange={(event) => setFormData({ ...formData, PersonalStatement: event.target.value })}
            />
        </div>
    );
}

export default PersonalStatement;
