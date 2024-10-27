import React, { useState } from 'react';
import Email from './Email';
import Username from './Username';
import Password from './Password';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        Email: "",
        Username: "",
        Password: ""
    });

    const titles = ["Email", "Username", "Password"];
    const totalSteps = titles.length;

    const Display = () => {
        switch (page) {
            case 0:
                return <Email formData={formData} setFormData={setFormData} />;
            case 1:
                return <Username formData={formData} setFormData={setFormData} />;
            case 2:
                return <Password formData={formData} setFormData={setFormData} />;
            default:
                return null;
        }
    };

    const progressPercentage = ((page + 1) / totalSteps) * 100;

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
