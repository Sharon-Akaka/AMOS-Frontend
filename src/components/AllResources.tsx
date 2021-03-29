import './components.css';
import ResourceCard, { IData } from './ResourceCard';

export default function AllResources(props: { allResources: IData[] }) {

    return (
        <div className='all-resources-container'>
            <input type="text" placeholder="Search Bar" className="search-bar" />
            {props.allResources.map((item) => <ResourceCard data={item}/>)}

        </div>
    )
}