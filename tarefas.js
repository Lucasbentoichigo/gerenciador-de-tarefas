let tarefas = ['Estudar JavaScript',
     'Fazer exercícios de matemática',
      'Lavar a louça', 
      'Comprar mercado',
       'Ir à academia',
        'Ler um livro',
         'Fazer revisão para o teste',
          'Limpar o quarto',
           'Estudar para concurso',
            'Organizar o computador'];

            //Adicione ao menos 2 novas tarefas à lista de tarefas.
console.log(`Antes do push:${tarefas}`);

tarefas.push("Cozinhar");
tarefas.push("Ir a igreja");

console.log(`Depois do push: ${tarefas}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Remova a última tarefa da lista.
let tarefaRemovida = tarefas.pop()
console.log(`Depois do pop:${tarefas}`);
console.log(`Tarefa removida:${tarefaRemovida}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Adicione uma tarefa no início da lista.
tarefas.unshift("Assistir filme");
console.log(`Depois do unshifted:${tarefas}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Remova a primeira tarefa da lista.
let tarefaRemovida2 = tarefas.shift();
console.log(`Depois do shift:${tarefas}`);
console.log(`tarefa removida:${tarefaRemovida2}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Verifique “SE” a tarefa 'Ir à academia' está na lista. Se ela não estiver, adicione-a.
console.log("A tarefa inclui 'Ir à academia?'?",tarefas.includes('Ir à academia'));
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Transforme a lista de tarefas em uma string separada por vírgulas.
console.log(`Tarefas como string:${tarefas.join(',')}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Extraia as tarefas do índice 2 ao 4.
console.log(`Parte das tarefas (índices 2 a 4): ${tarefas.slice(2, 5)}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");