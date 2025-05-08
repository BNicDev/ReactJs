const apiKey = 'ut0W8qYShKXbOfeNepxkbTyN4V01e9sF'

export default function getGifts({keyword='morty'}={}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = images.original
        return {title, id, url}
      }
    )
      return gifs
    })
}