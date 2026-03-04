
let tarefas = [];


function adicionar(tarefas) {
    for (let opt of vetor) {
        if (id < opt.id) {
            id = opt.id;
        }
    }
    vetor.push({id: id + 1, nome: tarefa});
}

function remover (id) {
    const hasId = vetor .some(it => it.id === id);

    if(hasId) {
        vetor = vetor.filter(it => it.id != id);
    } else {
        console.log("Não existe o ID informado.");
    }
}

function listar () {
    for(let opt of vetor) {
        console.log(opt)
    }
}

//Adicionar Tarefas
adicionar("lavar a louça");
adicionar("Lacar o rosto");
listar();
