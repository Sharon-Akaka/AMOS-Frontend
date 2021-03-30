import { useState } from 'react';
import './components.css';
import ResourceCard, { IData } from './ResourceCard';

interface IAllResources {
    allResources: IData[],
    setGetAllResources: React.Dispatch<React.SetStateAction<IData[]>>
}
export default function AllResources(props: IAllResources) {
    const [searchInput, setSearchInput] = useState('');

    async function handleSearchSubmit() {
        const res = await fetch(`https://study-resources-app.herokuapp.com/search/${searchInput}`)
        const resData = await res.json();
        setSearchInput("");
        props.setGetAllResources(resData);
    }
    
    return (
        <div className='all-resources-container'>
            <input type="text" placeholder="Search Bar" className="search-bar" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            <button className="search-btn" onClick={handleSearchSubmit}>
                Search
            </button>
            {props.allResources.map((item) => <ResourceCard data={item} />)}

        </div>
    )
}