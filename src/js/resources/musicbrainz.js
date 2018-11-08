import axios from 'axios'

const results = document.getElementById("content")
function musicbrainz_artista_Search() {

   
   
    axios.get('http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json')
        .then(function (response) {   
             // criando objeto no html
             results.innerHTML=""          
             
            //  console.log(response.data.artists)
            const images = response.data.artists
            results.innerHTML = `
          
                    
             <h1> ${images.name}</h1> `
                
                    
            alert("AAAAAAAAAAAA")
                    console.log(results.innerHTML)
                   
                   

                
            
        
        })
        .catch(function (error) {

            console.log(error);
        })

}

export default musicbrainz_artista_Search