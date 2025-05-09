import React from 'react';
import {Link, Route } from 'wouter';
import './App.css';
import Detail from './Pages/Detail';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>GIFFY</h1>
        <Route
        component={Home}
        path="/"
        />
        {/* <Route
        component={SearchResults}
        path="/search/:keyword"
        /> */}
        <Route
        component={Detail}
        path="/gif/:id"
        />
        </section>
    </div>
  );
}

export default App;
