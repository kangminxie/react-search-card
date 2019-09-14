import React from 'react';

import CardList from './components/cardview/CardList';
import SearchBox from './components/searchbox/SearchBox';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// index.html use semantic ui instead of bootstrap4
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <Header />
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
        <Footer />
      </div>
    );
  }
}

export default App;
