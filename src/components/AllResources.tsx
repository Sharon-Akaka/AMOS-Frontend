import { useState } from "react";
import "./components.css";
import ResourceCard, { IData } from "./ResourceCard";

interface IAllResources {
  allResources: IData[];
  setGetAllResources: React.Dispatch<React.SetStateAction<IData[]>>;
  fetchAllResources: () => Promise<void>
}

export default function AllResources(props: IAllResources) {
  const [searchInput, setSearchInput] = useState("");

  function getOccurrence(array: (string | undefined)[], value: string | undefined) {
    return array!.filter((v) => (v === value)).length;
}

let categories: string[] = [];
console.log(props.allResources)
  props.allResources.map(({cat_tags, id}) => {
    if (cat_tags){        
    categories.push(cat_tags)}
            // for (const tag in cat_tags) {categories.push(tag)}
            return null;
    }
    );
    console.log(categories)
  let dropdown = categories.filter((tag) => getOccurrence(categories, tag) === 1)
    console.log(dropdown)

  async function handleSearchSubmit() {
    const res = await fetch(
      `https://study-resources-app.herokuapp.com/search/${searchInput}`
    );
    const resData = await res.json();
    setSearchInput("");
    props.setGetAllResources(resData);
  }

  return (
    <div className="all-resources-container">
      <input
        type="text"
        placeholder="Search Bar"
        className="search-bar"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearchSubmit}>
        Search
      </button>
      <br />
      <select className="dropdown">
        {dropdown.map((tag, idx) => <option key={idx}>{tag}</option>
        )}
      </select>
      {props.allResources.map((item) => (
        <ResourceCard data={item} fetchAllResources={props.fetchAllResources} />
      ))}
    </div>
  );
}
