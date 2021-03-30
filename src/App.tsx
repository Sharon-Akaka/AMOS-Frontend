import React, { useEffect, useState } from 'react';
import './App.css';
import AllResources from './components/AllResources';
import Header from './components/Header';
import InputForm from './components/InputForm';
import { IData } from './components/ResourceCard';

const dummyData = [{
    title: 'Hello',
    author: 'Sharon',
    url: 'http://localhost:3000/',
    description: 'Matt is great'
},
{
    title: 'Hello',
    author: 'Sharon',
    url: 'http://localhost:3000/',
    description: 'Matt is great'
},
{
    title: 'Hello',
    author: 'Sharon',
    url: 'http://localhost:3000/',
    description: 'Matt is great'
}]
function App() {
    const [getAllResources, setGetAllResources] = useState<IData[]>([])


    async function fetchAllResources() {
        const res = await fetch("https://study-resources-app.herokuapp.com/");
        const jsonData = await res.json();
        setGetAllResources(jsonData)
    }
    useEffect(() => { fetchAllResources() }, [])

    return (
        <div className="App">
            <Header />
            <div className="content-container">
                <InputForm />
                <AllResources allResources={getAllResources} setGetAllResources={setGetAllResources}/>
            </div>
        </div>
    );
}

export default App;
