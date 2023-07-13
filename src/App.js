import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchField: ''
    }
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json(res))
  .then(users => this.setState(() => {return  {monsters: users}}, 
  () => console.log(this.state)))
}


 onSearchChange = ($event) => {
  const searchField = $event.target.value.toLowerCase();
  this.setState((() => { return { searchField }; }));
}


  render() {
   const  { monsters, searchField } = this.state;
   const { onSearchChange} = this;

    const filterMonsters =  monsters.filter(value => value.name.match(new RegExp(searchField, "i")))

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters'  onChange={($event) => {
            onSearchChange($event)
        }
          } />
       {filterMonsters.map(monster =>
        <div key={monster.id}><h1>{monster.name}</h1></div>
       )}
      </div>
    );
  }


}

export default App;
