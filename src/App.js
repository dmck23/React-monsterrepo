import './App.css';
import { useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  useEffect(() => {
    const filteredMonsterList = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonsters(filteredMonsterList);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        handleChange={(e) => setSearchField(e.target.value)}
        placeholder={'Search Monsters...'}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
