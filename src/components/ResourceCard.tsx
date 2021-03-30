import React from "react";
import './components.css';

interface IResourceCard {
    data: IData,
}

export interface IData {
    id: number,
    title: string,
    author: string,
    url: string,
    description: string,
    cat_tags?: string[],
    content_type?: string,
    recommender?: string,
    is_faculty: boolean,
    mark_stage?: string,
    was_used: boolean
}

export default function ResourceCard(props: IResourceCard) {
    const { data } = props
    return (
        <div className='resource-card-container'>
            <div className='card-title'>
                <h2>{data.title}</h2>
                <p className='author-txt'>{data.author}</p>
            </div>
            <p>{data.description}</p>
            <p className='categories-txt'>Categories: {data.cat_tags}</p>
        </div>
    )
}