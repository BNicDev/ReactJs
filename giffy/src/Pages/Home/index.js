import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGif/ListOfGifs";
import useGifs from "../../Hooks/useGifs";

const POPULAR_GIFS = ['matrix', 'Chile', 'Colombia', 'ecuador'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  const {loading, gifs} = useGifs() 

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        {/* <div className="App-category">
          <Category
            name="Categorias populares"
            options={POPULAR_GIFS}
          />
          <Category
            name="Mascotas"
            options={['Perros', 'Gatos', 'Hamster']}
          />
        </div> */}
      </div>
    </>
  )
}