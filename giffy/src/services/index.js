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

// const fromApiResponseToGifs = apiResponse => {
//   const {data = []} = apiResponse
//   if (Array.isArray(data)) {
//     const gifs = data.map(image => {
//       const {images, title, id} = image
//       const { url } = images.downsized_medium
//       return { title, id, url }
//     })
//     return gifs
//   }
//   return []
// }

// export default function getGifs ({limit = 25, keyword = 'morty'} = {}) {
//   const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`

//   return fetch(apiURL)
//     .then(res => res.json())
//     .then(fromApiResponseToGifs)
// }