'use strict'

const alunos = [
    {
        nome : 'Kaylane',
        nota : '10'
    },
    {
        nome : 'Magali',
        nota : '5'
    }
]
// Responsável por gravar os dados no localstorage
// @param JSON dadps
// @returns void

const gravarDados = (dados) => localStorage.setItem('dbalunos', JSON.stringify(dados))

/* 
Responsavel por ler os dados no localstorage
@param string key
@returns json
*/

const lerDados = (key) => JSON.parse(localStorage.getItem('key'))

const limparStorage = () => localStorage.clear();



document.getElementById('gravar').addEventListener('click', () => gravarDados(alunos) );

document.addEventListener('ler').addEventListener('click', () => lerDados('dbalunos') );

document.addEventListener('limpar').addEventListener('click', limparStorage );


// localStorage.setItem('dbalunos', JSON.stringify(alunos))

// const ListaAlunos = JSON.parse(localStorage.getItem(dbalunos))

// console.log(ListaAlunos)