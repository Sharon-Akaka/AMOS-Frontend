import React, { useState } from 'react';
import './components.css';

export default function InputForm() {
    const [titleInput, setTitleInput] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("")

    
    function categoryToArray(input: string): string[] {
        const array = input.replace(/\s+/g, "");
        return array.split(",")
    }

    
    async function handleSubmit() {
        try {
            const body = {
                title: titleInput,
                author: authorInput,
                url: urlInput,
                description: descriptionInput,
                cat_tags: categoryToArray(categoryInput)
            }
            console.log(body)
            await fetch("https://study-resources-app.herokuapp.com/", {
                mode: "no-cors",
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setTitleInput("");
            setAuthorInput("");
            setUrlInput("");
            setDescriptionInput("");
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <div className='input-container'>
            <input value={titleInput} onChange={e => setTitleInput(e.target.value)} type="text" placeholder='Title'/>
            <input value={authorInput} onChange={e => setAuthorInput(e.target.value)} type="text" placeholder='Author'/>
            <input value={urlInput} onChange={e => setUrlInput(e.target.value)} type="text" placeholder='URL'/>
            <textarea value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)} className='textarea-input' rows={5} placeholder='Description'></textarea>
            <input type="text" placeholder="Category - e.g. cat1, cat2, cat3..." value={categoryInput} onChange={e => setCategoryInput(e.target.value)}/>
            <button onClick={() => handleSubmit()} className='submit-btn'>Submit</button>
        </div>
    )
}