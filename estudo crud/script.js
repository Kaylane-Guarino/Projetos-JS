'use strict'
const openModal = () => document.querySelector('#modal').classList.add('active')
const closeModal = () => document.querySelector('#modal').classList.remove('active')
const clearInput = () => {​
    const inputs = Array.from(document.querySelectorAll('.modal input'))
    inputs.forEach(input => input.value = '')
}​
const readDb = () => JSON.parse(localStorage.getItem('db')) ?? [];
const createRow = (client) => {​
    const tabelaClientes =     document.querySelector('#tabelaClientes tbody')
    const newTr  = document.querySelector('tr');
    newTr.innerHTML = `<td>${​client.nome}​</td>
    <td>${​client.email}​</td>
    <td>${​cliente.celular}​</td>
    <td>${​cliente.cidade}​</td>
    <td>
        <button class="btn blue">Editar</button>
        <button class="btn red">Excluir</button>
    </td>`
    tabelaClientes.appendChild(newTr);
}​
const clearTable =  () => {​
    const tabelaClientes =     document.querySelector('#tabelaClientes tbody')
    while(tabelaClientes.firstChild){​
        tabelaClientes.removeChild(tabelaClientes.lastChild)
    }​
}​
const loadTable = () => {​
    const  db = readDb();
    clearTable();
    db.forEach(client => createRow);
}​
const saveClient = () => {​
    const db = JSON.parse(localStorage.getItem('db')) ?? []
    const newClient = {​
        nome: document.querySelector('#nome').value,
        email : document.querySelector('#email').value,
        celular : document.querySelector('#celular').value,
        cidade : document.querySelector('#cidade').value,
    }​
        db.push(newClient) 
        localStorage.setItem('db', JSON.stringify(newClient))
        closeModal()
        clearInput()
        loadTable()
}​
document.querySelector('#cadastrarCliente')
.addEventListener('click',openModal)
document.querySelector('#close')
.addEventListener('click',() => {​closeModal(); clearInput()}​)
document.querySelector('#cancelar')
.addEventListener('click',() => {​closeModal(); clearInput()}​)
document.querySelector('#salvar')
.addEventListener('click',saveClient)
    
    
  
  

