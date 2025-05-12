import {useState, useEffect} from "react"
import getGifts from "../services"
export default function useGifs({keyword} = {keyword:null}){

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
    useEffect(() => {
      setLoading(true)
      //recuperamos la keyword del localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

      getGifts({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        //guardamos la keyword en el localstorage
        if (keyword) localStorage.setItem('lastKeyword', keyword)
      })
    }, [keyword])

    return {loading, gifs}
}