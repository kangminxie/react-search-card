import React from 'react';

import MainPage from './containers/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// index.heml use semantic ui instead of bootstrap4
const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
