'use strict';

const numeros = [4,9,20,80,51];
const clientes = ["ana","pedro","jose","marta","joao"];
const dados = ["TI",15,450.90,true];



const imagens
   
 //array nomeado ou array associativos
 
    const fornecedores = [];
    fornecedores ['sp'] = "ana","pedro","joao"
    fornecedores ['rj'] = "maria","marta","mariana"
    fornecedores ['es'] = "fernanda","antonio","marilia"
    fornecedores ['mg'] = "fernanda","antonio","joao"


    const estado = 'mg';
    console.log(fornecedores[estado]);


    // if(estado == 'sp'){
    //     console.log( "ana","pedro","joao");
    // }else if(estado == 'rj'){
    //     console.log("maria","marta","mariana");
    // }
//JSON

const funcionario = {
    'nome': 'josé',
    'setor': 'TI',
    'salario': 5000.00,
    'cidade':'Osasco'
}

console.log(funcionario);
//OBJETO
const funcionarios = [
   {
    'nome': 'josé',
    'setor': 'TI',
    'salario': 5000.00,
    'cidade':'Osasco'
   },
   {
    'nome': 'Maria',
    'setor': 'TI',
    'salario': 9000.00,
    'cidade':'Osasco'
   },{
    'nome': 'Antonietta',
    'setor': 'TI',
    'salario': 10000.00,
    'cidade':'Osasco'
   }
]

console.log(funcionarios);





// //Solução interando com for
// let indice =0
// while(indice <=3){
//     console.log(clientes[indice]);
//     indice++
// }

// //Solução interando com while
// for (let indice= 0; indice <= 3 ; indice++){
//     console.log(numeros[indice]);
// }
  



function criarDiv (conteudo){
        // ATRIBUINDO A UMA VARIAVEL A TAG MAIN
   const main = document.querySelector('main');

   //CRIAR UMA NOVA DIV E ARMAZENAR EM UMA VARIAVEL
   const novaDiv = document.createElement('div');

   //Inseri um conteudo a tag DIV
   novaDiv.innerText = conteudo;
   //Inseri a tag DIV na tag MAIN
   main.appendChild(novaDiv);

  

}