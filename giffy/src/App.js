import React from 'react';
import {Link,Route } from 'wouter';
import './App.css';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import SearchResults from './Pages/SearchResults';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'><h1>GIFFY</h1></Link>
        <Route
        component={Home}
        path="/"
        />
        <Route
        component={SearchResults}
        path="/search/:keyword"
        />
        <Route
        component={Detail}
        path="/gif/:id"
        />
        </section>
    </div>
  );
}

export default App;
