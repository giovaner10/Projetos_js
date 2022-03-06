let soma = document.querySelector('#soma')


let resultado = document.querySelector('#resultado')
let igual = document.querySelector('#igual')






function insert(num){
    var resultado = document.querySelector('#resultado')


    resultado.innerHTML += num


}


function clean(){

    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = ''

}


function del(){

    let resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)

}


function result(){
    let resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML =    `${resultado} = ${eval(resultado)}`
}