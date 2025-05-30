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

console.log(`Antes do push:${tarefas}`);

tarefas.push("Cozinhar");
tarefas.push("Ir a igreja");

console.log(`Depois do push: ${tarefas}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

let tarefaRemovida = tarefas.pop()
console.log(`Depois do pop:${tarefas}`);
console.log(`Tarefa removida:${tarefaRemovida}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");

tarefas.unshift("Assistir filme");

console.log(`Depois do unshifted:${tarefas}`);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");
