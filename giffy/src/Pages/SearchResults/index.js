import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGif/ListOfGifs.js'
import useGifs from '../../Hooks/useGifs.js'

export default function SearchResults({ params }) {
  const { keyword } = params;
  const {loading, gifs} = useGifs({keyword});

  // console.log({loading,gifs})

  return (
    <>
      {loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}
