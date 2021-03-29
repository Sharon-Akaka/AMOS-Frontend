import './components.css';
import ResourceCard from './ResourceCard';

export default function AllResources() {
    return (
        <div className='all-resources-container'>
            <input type="text" placeholder="Searchbar" className="search-bar"/>
            <ResourceCard />
        </div>
    )
}