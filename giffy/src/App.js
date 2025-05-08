import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route } from 'wouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href='/gif/morty'>Gifs de morty</Link>
        <Link href='/gif/rick'>Gifs de rick</Link>
        <Link href='/gif/argentina'>Gifs de argentina</Link>
        <Route
        component={ListOfGifs}
        path={"/gif/:keyword"}
        />
        {/* <ListOfGifs keyword='panda'/> */}
        </section>
    </div>
  );
}

export default App;
