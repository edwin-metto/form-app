import React, { useState } from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';
import SchoolName from './SchoolName';
import PersonalStatement from './PersonalStatement';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        SchoolName: "",
        PersonalStatement: ""
    });

    const titles = ["First Name", "Last Name", "Email", "School Name", "Personal Statement"];
    const totalSteps = titles.length;

    const Display = () => {
        switch (page) {
            case 0:
                return <FirstName formData={formData} setFormData={setFormData} />;
            case 1:
                return <LastName formData={formData} setFormData={setFormData} />;
            case 2:
                return <Email formData={formData} setFormData={setFormData} />;
            case 3:
                return <SchoolName formData={formData} setFormData={setFormData} />;
            case 4:
                return <PersonalStatement formData={formData} setFormData={setFormData} />;
            default:
                return null;
        }
    };

    return (
        <div className='form'>
            <div className="form-container">
                <div className="header">
                    <h1>{titles[page]}</h1>
                </div>
                <div className="body">{Display()}</div>
                <div className="footer">
                    <button
                        disabled={page === 0}
                        onClick={() => setPage(currPage => currPage - 1)}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === titles.length - 1) {
                                alert("Successfully submitted");
                            } else {
                                setPage(currPage => currPage + 1);
                            }
                        }}
                    >
                        {page === titles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
