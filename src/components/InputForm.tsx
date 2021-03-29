import React from 'react';
import './components.css';

export default function InputForm() {
    return(
        <div>
            <input placeholder='Title'></input>
            <input placeholder='Author'></input>
            <input placeholder='URL'></input>
            <textarea placeholder='Description'></textarea>
        </div>
    )
}