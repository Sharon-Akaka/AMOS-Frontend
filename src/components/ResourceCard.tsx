import React from "react";
import './components.css';

interface IResourceCard {
    data: IData,
    fetchAllResources:()=> Promise<void>
}

export interface IData {
    id: number,
    title: string,
    author: string,
    url: string,
    description: string,
    cat_tags?: string,
    content_type?: string,
    recommender?: string,
    is_faculty: boolean,
    mark_stage?: string,
    was_used: boolean,
    vote: number
}

export default function ResourceCard(props: IResourceCard) {
    // const [] = useState()
    const { data, fetchAllResources } = props

    async function handleUpVote() {
        await fetch(`https://study-resources-app.herokuapp.com/upvote/${data.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetchAllResources()
    }
    async function handleDownVote() {
        await fetch(`https://study-resources-app.herokuapp.com/downvote/${data.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetchAllResources()
    }
    console.log(data.url);
    return (
        <div className='resource-card-container'>
            <div className='voting-container'>
                <li><button onClick={handleUpVote}>⬆️</button></li>
                <li>{data.vote}</li>
                <li><button onClick={handleDownVote}>⬇️</button></li>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    {/* Find long term fix to the http issue */}
                    <h2><a href={"https://" + data.url} target="_blank" rel="noopener noreferrer">{data.title}</a></h2>
                    <p className='author-txt'>{data.author}</p>
                </div>
                <p>{data.description}</p>
                <p className='categories-txt'>Categories: {data.cat_tags}</p>
            </div>

        </div>
    )
}