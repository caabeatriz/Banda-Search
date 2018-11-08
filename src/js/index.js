// aqui.
import '../styles/main.scss'
import credentials from './credentials'
import google_search_image from './resources/google'
import musicbrainz_artista_search from './resources/musicbrainz'

// puxando a função la do documento dela
musicbrainz_artista_search()
google_search_image ()


const input = document.getElementById("input")
const img_bg = document.getElementById("body")

input.addEventListener("blur", function(event){
    
    alert("tapegando")
    musicbrainz_artista_search()
    
})

// para pegar bacground


