
let tarefas = [];


function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    console.log(" Tarefa sucesso!");
}


function listarTarefas() {
    console.log("\n=============LISTA DE TAREFAS =============");

    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    tarefas.forEach((tarefa, indice) => {
        console.log(`${indice} - ${tarefa}`);
    });
}

function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
        console.log("Tarefa removida");
    } else {
        console.log("Indice invalido!");
    }
}

function menu() {
    console.log("\n ============= MENU =============");
    console.log(" [1] Adicionar tarefa");
    console.log(" [2] Listar tarefas");
    console.log(" [3] Remover Tarefa");
    console.log(" [4] Sair");

    releaseEvents.question("Escolha uma opção: ", (tarefa) => {
        switch (opcao) {

            case '1':
                rl.question("Digite a tarefa: ", (tarefa) => {
                    adicionarTarefa(tarefa);
                    menu();
                });
                break;

            case '2':
                listarTarefas();
                menu();
                break;

            case '3':
                listarTarefas();
                rl.question("Digite o índide da tarefa que deseja remover: ", (indice) => {
                    removerTarefa(parseInt(indice));
                    menu();
                });
                break;
            
            case '4':
                console.log("Saindo...");
                rl.close();
                break;

            default:
                console.log("Opção inválida!");
                menu();
        }
    })
    
}