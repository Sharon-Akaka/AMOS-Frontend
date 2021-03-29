import React from 'react';
import './components.css';

export default function InputForm() {
    return(
        <div className='input-container'>
            <input type="text" placeholder='Title'/>
            <input type="text" placeholder='Author'/>
            <input type="text" placeholder='URL'/>
            <textarea className='textarea-input' placeholder='Description'></textarea>
            <button className='submit-btn'>Submit</button>
        </div>
    )
}