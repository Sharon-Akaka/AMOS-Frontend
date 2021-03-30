import React, { useState } from 'react';
import './components.css';

export default function InputForm() {
    const [titleInput, setTitleInput] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("");
    const [recommendedInput, setRecommendedInput] = useState("");
    const [isFaculty, setIsFaculty] = useState(false);
    const [usedResource, setUsedResource] = useState(false);

    // console.log(recommendedInput, isFaculty, usedResource)

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
                cat_tags: categoryToArray(categoryInput),
                recommeded: recommendedInput,
                is_faculty: isFaculty,
                was_used:usedResource
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
            setRecommendedInput("");
            setIsFaculty(false);
            setUsedResource(false);



        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className='input-container'>
            <label>Title</label>
            <input value={titleInput} onChange={e => setTitleInput(e.target.value)} type="text" placeholder='e.g. TypeScript tutorial' />
            <label>Author</label>
            <input value={authorInput} onChange={e => setAuthorInput(e.target.value)} type="text" placeholder='e.g Codecademy' />
            <label>URL</label>
            <input value={urlInput} onChange={e => setUrlInput(e.target.value)} type="text" placeholder='URL' />
            <label>Description</label>
            <textarea value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)} className='textarea-input' rows={5} placeholder='Type here ...(max 400 characters)'></textarea>
            <label>Categories</label>
            <input type="text" placeholder="Category - e.g. cat1, cat2, cat3..." value={categoryInput} onChange={e => setCategoryInput(e.target.value)} />
            <hr />
            <label>Recommended by</label>
            <input type='text' placeholder='Your name' value={recommendedInput} onChange={e => setRecommendedInput(e.target.value)} />
            <label>Are you faculty? <input type='checkbox' checked={isFaculty} onChange={() => setIsFaculty(!isFaculty)}/></label>
            <label>Have you used this resource?<input type='checkbox' checked={usedResource} onChange={() => setUsedResource(!usedResource)}/></label>

            <button onClick={() => handleSubmit()} className='submit-btn'>Submit</button>
        </div>
    )
}