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
            <h2>Some Title</h2>
            <p>Author</p>
            <p>Description</p>
        </div>
    )
}