import React from 'react';

import './validMessage.css';

export const ValidError = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName] === true) {
                return (
                    <span className="error" key={i}>Error: {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</span>
                )
            } else {
                return '';
            }
        })}
    </div>