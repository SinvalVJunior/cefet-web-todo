let tarefas = [
    {
        nome: "Comprar Leite",
        categoria: "compras",
        realizada: false
    },
    {
        nome: "Escutar Chimbinha",
        categoria: "lazer",
        realizada: true
    }
]




const insereTarefaNaPagina = (tarefa) => {

    const li = document.createElement("li");
    li.classList = ["item-tarefa"];
    li.innerHTML = tarefa.nome;

    li.classList.add(`categoria-${tarefa.categoria}`);
    if(tarefa.realizada)
        li.classList.add("marcado");
    
    li.addEventListener('click', (e) => {
        e.target.classList.toggle("marcado");
        const nomeSelecionado = e.target.innerHTML;

        tarefas.map(tarefa => {if(tarefa.nome === nomeSelecionado) tarefa.realizada = !tarefa.realizada});

    });

    document.querySelector("#lista-tarefas").appendChild(li);
};


const start = () => {
    document.querySelector("#lista-tarefas").innerHTML = '';
    for(i=0; i<tarefas.length; i++) {
     insereTarefaNaPagina(tarefas[i]);       
    }   
}

const adicionarTarefa = () => {
    
    const nome = document.getElementById("nova-tarefa-nome").value;
    const categoria = document.getElementById("nova-tarefa-categoria").value;

    const tarefa = {
        nome,
        categoria,
        realizada: false
    }
    tarefas.push(tarefa);
    insereTarefaNaPagina(tarefa);

    document.getElementById("nova-tarefa-nome").focus();
};

document.getElementById("incluir-nova-tarefa").addEventListener('click', adicionarTarefa);

document.getElementById("filtros").addEventListener("change", (event) => {
    const selected = event.target.value;
    
    document.querySelector("#lista-tarefas").innerHTML = '';
    
    for(i=0; i<tarefas.length; i++) {
        if(tarefas[i].categoria === selected || selected === "")
            insereTarefaNaPagina(tarefas[i]);       
    }  
});

document.getElementById("nova-tarefa-nome").addEventListener('keyup', (e) => { if(e.key === 'Enter') adicionarTarefa(); });



start();

