function atualizarHora() {
    let hora = new Date()

    let display = document.querySelector('#display')

        display.innerHTML = `${corrigirHora(hora.getHours())}:${corrigirHora(hora.getMinutes())}:${corrigirHora(hora.getSeconds())}:${hora.getMilliseconds()}`



}

setInterval(atualizarHora, 8)


function corrigirHora(horario){
        if(horario < 10){
            horario = '0' + horario
        }
        return horario

}