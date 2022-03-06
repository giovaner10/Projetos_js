let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let musica = document.querySelector('#musica')
let progress = document.querySelector('#progress')
let inicio = document.querySelector('#incio')
let fim = document.querySelector('#fim')

let musicas = [
    {titulo: 'go0d rock', artista: 'giovane', src:'audio/rock.mp3' , imag: 'images/rock.jpg'},
    {titulo: 'go0d country', artista: 'duplas sertanejas', src:'audio/balao.mp3' , imag: 'images/balao.jpg'},
    {titulo: 'go0d rock', artista: 'radio da manha', src:'audio/manha.mp3' , imag: 'images/manha.jpg'}
]

let indexMusica = 0
renderMusic(indexMusica)
let img = document.querySelector('#img')
let nameMsc = document.querySelector('#nameMsc')
let artista = document.querySelector('#artista')

let voltar = document.querySelector('#voltar')
let pular = document.querySelector('#pular')

voltar.addEventListener('click', ()=>{
    indexMusica--
    if(indexMusica  < 0){
        indexMusica = 2
    }
    renderMusic(indexMusica)
    playMusic()
})

pular.addEventListener('click', ()=>{
    indexMusica++
    if(indexMusica > 2){
        indexMusica = 0
    }
    renderMusic(indexMusica)
    playMusic()
})

function renderMusic(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', ()=>{
        nameMsc.textContent = musicas[index].titulo
        artista.textContent = musicas[index].artista
        img.setAttribute('src' , musicas[index].imag)
        inicio.innerHTML = segPMin(Math.round(musica.currentTime))
        fim.innerHTML = segPMin(Math.round(musica.duration))

    })
}
















//barra de progresso e atualizacao de numeros da musica
musica.addEventListener('timeupdate', musicProgress)
function musicProgress(){

    progress.style.width = (musica.currentTime / musica.duration) *100 + '%'
    //tempo no player
    inicio.innerHTML = segPMin(Math.round(musica.currentTime))
    fim.innerHTML = segPMin(Math.round(musica.duration))
    if( Number(musica.currentTime) == Number(musica.duration) -100){
        ()=>{
            indexMusica++
            if(indexMusica > 2){
                indexMusica = 0
            }
            renderMusic(indexMusica)
            playMusic()
    }
}
}
//funcao que calcula o tempo no player
function segPMin(segundos){
    let campMinutos = Math.floor( segundos / 60)
    let campSegundos = segundos % 60

    if(campSegundos < 10){
        campSegundos = '0' + campSegundos
    }

    return campMinutos + ':' + campSegundos

}



// tocar musica
play.addEventListener('click', playMusic )
function playMusic(){
    musica.play()
    pause.style.display = 'block'
    play.style.display = 'none'

}


//pausar musica
pause.addEventListener('click', pauseMusic)
function pauseMusic(){
    musica.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}