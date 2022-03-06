let banco = [
    /* {'tarefa': 'Estudar JS', 'status':''},
    {'tarefa': 'netflix JS', 'status':'checked'} */

]

function criarItem(tarefa , status='', indice){
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = 
    `<input type="checkbox" ${status} data-indice =${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice =${indice}>`


    document.getElementById('todoList').appendChild(item)

}
function limparTarefas(){
    const todoList = 0
}

function atualizarTela(){
    document.getElementById('todoList').innerHTML = ''
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice))

}

document.getElementById('newItem').addEventListener('keypress', inserirItem)


function inserirItem(evento){
    const tecla = evento.key
    const texto = document.querySelector('#newItem').value
    if(tecla == 'Enter'){
        banco.push({'tarefa': `${texto}`, 'status':''}
        
        )
        atualizarTela()
        evento.target.value = ''

    }

}


function clickItem(evento){
    const elemento = evento.target
    console.log(elemento)
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice)
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice
        atualizarItem(indice)


    }


}

function removerItem(indice){
    banco.splice(indice, 1)
    atualizarTela()

}

function atualizarItem(indice){
    banco[indice].status = banco[indice].status === '' ? 'checked' : ''
    atualizarTela()
}

document.getElementById('todoList').addEventListener('click', clickItem)


atualizarTela()
