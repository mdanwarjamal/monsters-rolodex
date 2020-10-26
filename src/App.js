import { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const placeholder = "Search Monster...";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const users = await response.json();
        setMonsters(users);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (event) => setSearchText(event.target.value);

  const monstersToBeFiltered = monsters;
  const filteredOutMonsters = monstersToBeFiltered.filter((monster) =>
    monster.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Monsters Rolodex</h1>
      </header>
      <SearchBox placeholder={placeholder} handleChange={handleChange} />
      <CardList monsters={filteredOutMonsters} />
    </div>
  );
};
export default App;
