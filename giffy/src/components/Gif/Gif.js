import React from "react";
import './Gif.css'

export default function Gif({title, id, url}) {
    return(
        <a href={`/gif/${id}`} className="Gif-link">
            <h4>{title}</h4>
            <img alt={title} src={url}/>
          </a>
        
    )
}