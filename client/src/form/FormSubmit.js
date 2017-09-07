import React from 'react';

const msg = {};
    msg.success = 'Thank you! Your message has been received and we will get back to you shortly.',
    msg.failure = "We're sorry, we've encountered an error delivering your message. Please try again shortly";

export const SubmitSuccess = ({ submitSuccess }) =>
    <div className='submitSuccess'>
        {Object.keys(submitSuccess).map((key, i) => {
            if (submitSuccess[key]) {
                return (
                    <p key={i} className={`formSubmit ${key}`}>{msg[key]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>