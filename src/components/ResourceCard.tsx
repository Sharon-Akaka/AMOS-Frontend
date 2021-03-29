import React from "react";
import './components.css';

interface IResourceCard {
    // data: IData,
}

interface IData {
    title: string
}

export default function ResourceCard(props: IResourceCard) {
    return (
        <div className='resource-card-container'>
            <div className='card-title'>
            <h2>Some Title</h2>
            <p className='author-txt'>Author</p>
            </div>
            
            <p>Description</p>
        </div>
    )
}