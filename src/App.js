import React from 'react';

import Jsonplaceholder from './apis/Jsonplaceholder';
import CardList from './components/cardview/CardList';
import SearchBox from './components/searchbox/SearchBox';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  state = {
    monsters: [],
    searchField: '',
  }

  componentDidMount() {
    Jsonplaceholder.get('/users')
    .then( response => {
      this.setState( { monsters: response.data });
    });
  }

  onSearchChangeHandler = event => {
    this.setState({ searchField: event.target.value });
  };
  // setState can take time, need to be carful for future

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <Header />
        <SearchBox onSearchChange={this.onSearchChangeHandler} />
        <CardList monsters={filteredMonsters} />
        <Footer />
      </div>
    );
  }
}

export default App;
