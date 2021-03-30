import { isError } from 'node:util';
import { useState } from 'react';
import './components.css';

export default function InputForm({fetchAllResources}: {fetchAllResources: () => Promise<void>}) {
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


    function isRequiredFilled() {
        const isTitleValid = titleInput.trim() !== "" ? true : false
        const isUrlValid = urlInput.trim() !== "" ? true : false
        const isRecommendedValid = recommendedInput.trim() !== "" ? true : false
        return isTitleValid && isUrlValid && isRecommendedValid
    }


    //Taken from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    function isUrl(str: string) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }


    async function handleSubmit() {
        if (isRequiredFilled() && isUrl(urlInput)) {
            try {
                const body = {
                    title: titleInput, //Required
                    author: authorInput,
                    url: urlInput, //Required
                    description: descriptionInput,
                    cat_tags: categoryToArray(categoryInput),
                    content_type: null,
                    recommender: recommendedInput, //Required
                    is_faculty: isFaculty ? "True" : "False", //Required
                    mark_stage: null,
                    was_used: usedResource ? "True" : "False" //Required
                }
                console.log(body)
                await fetch("https://study-resources-app.herokuapp.com/", {
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
                setCategoryInput("");
                setRecommendedInput("");
                setIsFaculty(false);
                setUsedResource(false);
                fetchAllResources();
            } catch (error) {
                console.error(error.message)
            }
        } else {
            alert("Please make sure you've filled in all required inputs (*) and that your url is valid :)")
        }
    }

    return (
        <div className='input-container'>
            <label>Title *</label>
            <input value={titleInput} onChange={e => setTitleInput(e.target.value)} type="text" placeholder='e.g. TypeScript tutorial' />
            <label>Author</label>
            <input value={authorInput} onChange={e => setAuthorInput(e.target.value)} type="text" placeholder='e.g Codecademy' />
            <label>URL *</label>
            <input value={urlInput} onChange={e => setUrlInput(e.target.value)} type="text" placeholder='URL' />
            <label>Description</label>
            <textarea value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)} className='textarea-input' rows={5} placeholder='Type here ...(max 400 characters)'></textarea>
            <label>Categories</label>
            <input type="text" placeholder="Seperate using commas - e.g. cat1, cat2, cat3..." value={categoryInput} onChange={e => setCategoryInput(e.target.value)} />
            <hr />
            <label>Recommended by *</label>
            <input type='text' placeholder='Your name' value={recommendedInput} onChange={e => setRecommendedInput(e.target.value)} />
            <label>Are you faculty? <input type='checkbox' checked={isFaculty} onChange={() => setIsFaculty(!isFaculty)} /></label>
            <label>Have you used this resource?<input type='checkbox' checked={usedResource} onChange={() => setUsedResource(!usedResource)} /></label>

            <button onClick={() => handleSubmit()} className='submit-btn'>Submit</button>
        </div>
    )
}