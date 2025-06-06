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

            //Etapa 1:
            // Adicione ao menos 2 novas tarefas à lista de tarefas.
console.log(`Antes do push:${tarefas}`);

tarefas.push("Cozinhar");
tarefas.push("Ir a igreja");

console.log(`Depois do push: ${tarefas}`);


//Etapa 2:
// Remova a última tarefa da lista.
let tarefaRemovida = tarefas.pop()
console.log(`Depois do pop:${tarefas}`);
console.log(`Tarefa removida:${tarefaRemovida}`);


//Etapa 3:
// Adicione uma tarefa no início da lista.
tarefas.unshift("Assistir filme");
console.log(`Depois do unshifted:${tarefas}`);


//Etapa 4:
// Remova a primeira tarefa da lista.
let tarefaRemovida2 = tarefas.shift();
console.log(`Depois do shift:${tarefas}`);
console.log(`tarefa removida:${tarefaRemovida2}`);


//Etapa 5:
// Verifique “SE” a tarefa 'Ir à academia' está na lista. Se ela não estiver, adicione-a.
console.log("A tarefa inclui 'Ir à academia?'?",tarefas.includes('Ir à academia'));


//Etapa 6:
// Transforme a lista de tarefas em uma string separada por vírgulas.
console.log(`Tarefas como string:${tarefas.join(',')}`);


//Etapa 7:
// Extraia as tarefas do índice 2 ao 4.
console.log(`Parte das tarefas (índices 2 a 4): ${tarefas.slice(2, 5)}`);

//Etapa 8:
//Remova a tarefa no índice 3 e substitua por uma nova tarefa.
let tarefaRemovida3 = tarefas.splice(3,1)
console.log(`Depois do splice: ${tarefas}`);
console.log(`Elementos removidos: ${tarefaRemovida3}`);
tarefas[3] = "Lavar roupas";
console.log(`Nova lista de tarefas: ${tarefas}`);
console.log(`Elemento adicionado: ${tarefas[3]}`);

//Etapa 9:
//Crie uma nova lista com tarefas adicionais e junte com a lista original.
let tarefasAdicionais = ['Jogar videogame', 'Ir a piscina', 'Ouvir músicas', 'Almoçar', 'ler a bíblia', 'jogar futebol', 'tocar piano', 'lutar', 'ler mangás', 'jantar'];
console.log(`tarefas combinadas: ${tarefas.concat(tarefasAdicionais)}`);
console.log(`Playlist combinada: ${tarefas.concat(tarefasAdicionais).join(', ')}`);


//Etapa 10:
//Adicione a palavra "Fazer:" no início de cada tarefa.
let comoTexto = tarefas.map(tarefa => `Fazer: ${tarefa}`);
console.log(`tarefas: ${comoTexto.join(', ')}`);

//Etapa 11: 
//Filtre as tarefas que têm mais de 15 caracteres
let tarefasFiltrada = tarefas.filter(tarefas => tarefas.length > 15);
console.log(`Playlist filtrada (músicas com mais de 15 caracteres): ${tarefasFiltrada}`);

//Etapa 12:
//Organize as tarefas em ordem alfabética.
let tarefasOrdenada = tarefas.sort();
console.log(`Tarefas ordenadas: ${tarefasOrdenada}`);

//Etapa 13:
//Inverta a ordem das tarefas.
let tarefasInvertidas = tarefas.reverse();
console.log(`Tarefas invertidas: ${tarefasInvertidas}`);

