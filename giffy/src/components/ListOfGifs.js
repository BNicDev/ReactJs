import React, {useState, useEffect} from "react"
import  getGifs  from '../services/getGifs';
import Gif from "./Gif"

export default function ListOfGifs({params}){
    const {keyword} = params;

    const [loading, setLoading] = useState(false);

    const [gifs, setGifts] = useState([]);
    useEffect(function(){
        setLoading(true)
        getGifs({keyword})
        .then(gifs => setGifts(gifs))
        setLoading(false)
      },[keyword])

      if(loading) return <i>Loading...</i>

    return gifs.map(({id,title,url}) =>
               <Gif 
               key={id}
               id={id}
               title={title}
               url={url} 
               />
               )
    
}