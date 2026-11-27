/*VISUALIZAR*/

const modal = document.querySelector(".modal-visualizar"); //modal: seleciona a janela que criamos.
const botoesVisualizar = document.querySelectorAll(".btn-visualizar");//botoesVisualizar: seleciona todos os botões com a classe .btn-visualizar.

/*EDITAR*/
const botaoFechar = document.querySelector(".fechar-modal");//botaoFechar: seleciona o botão responsável por fechar a janela.
const modalEditar = document.querySelector(".modal-editar");
const botoesEditar = document.querySelectorAll(".btn-editar");

/*Excluir*/
const botoesExcluir = document.querySelectorAll(".btn-excluir");

/*Cadastrar empresa*/
const botaoCadastro = document.querySelectorAll(".botao-cadastro")
const modalCadastro = document.querySelector(".modal-cadastro");
const fecharModalCadastro = document.querySelector(".fechar-modal-cadastro"); 
const botaoSalvarCadastro = document.querySelector(".salvar-cadastro");
const corpoTabela = document.querySelector(".tabela-empresa tbody");

const nomeCadastro = document.querySelector("#cadastrar-nome");
const responsavelCadastro = document.querySelector("#cadastrar-responsavel");
const emailCadastro = document.querySelector("#cadastrar-email");
const telefoneCadastro = document.querySelector("#cadastrar-telefone");
const statusCadastro = document.querySelector("#cadastrar-status");

const totalEmpresas = document.querySelector("#totalEmpresas");
const empresasAtivas = document.querySelector("#empresasAtivas");
const empresasInativas = document.querySelector("#empresasInativas");

botoesVisualizar.forEach((botao) => { //forEach(): percorre todos os botões de visualizar.
    botao.addEventListener("click", () => { //fica aguardando o clique

        const linha = botao.parentElement.parentElement.parentElement; //linha: seleciona a linha da tabela que contém o botão clicado.
        const colunas = linha.querySelectorAll("td"); //colunas: seleciona todas as colunas da linha.
        
        const nome = colunas[0].textContent;
        const responsavel = colunas[1].textContent;
        const email = colunas[2].textContent;
        const telefone = colunas[3].textContent;
        const status = colunas[4].textContent;
        

        document.querySelector("#visualizar-nome").textContent = nome;
        document.querySelector("#visualizar-responsavel").textContent = responsavel;
        document.querySelector("#visualizar-email").textContent = email;
        document.querySelector("#visualizar-telefone").textContent = telefone;
        document.querySelector("#visualizar-status").textContent = status;

        modal.style.display = "flex"; //Quando o botão for clicado, a janela será exibida.
    });
});

botaoFechar.addEventListener("click", () => {
    modal.style.display = "none";
});

let linhaSelecionada;

corpoTabela.addEventListener("click", (evento) => {

    const botaoEditar = evento.target.closest(".btn-editar");

    if (botaoEditar) {

        linhaSelecionada = botaoEditar.closest("tr");
        const colunas = linhaSelecionada.querySelectorAll("td");

        const nome = colunas[0].textContent;
        const responsavel = colunas[1].textContent;
        const email = colunas[2].textContent;
        const telefone = colunas[3].textContent;
        const status = colunas[4].textContent;

        document.querySelector("#editar-nome").value = nome;
        document.querySelector("#editar-responsavel").value = responsavel;
        document.querySelector("#editar-email").value = email;
        document.querySelector("#editar-telefone").value = telefone;
        document.querySelector("#editar-status").value = status;

        modalEditar.style.display = "flex";
    }

    const botaoExcluir = evento.target.closest(".btn-excluir");

    if (botaoExcluir) {
        const linha = botaoExcluir.closest("tr");

        const confirmar = confirm("Tem certeza que deseja excluir essa empresa?");

        if (confirmar) {
            linha.remove();
        }
    }
    const botaoVisualizar = evento.target.closest(".btn-visualizar");

if (botaoVisualizar) {
    const linha = botaoVisualizar.closest("tr");
    const colunas = linha.querySelectorAll("td");

    const nome = colunas[0].textContent;
    const responsavel = colunas[1].textContent;
    const email = colunas[2].textContent;
    const telefone = colunas[3].textContent;
    const status = colunas[4].textContent;

    document.querySelector("#visualizar-nome").textContent = nome;
    document.querySelector("#visualizar-responsavel").textContent = responsavel;
    document.querySelector("#visualizar-email").textContent = email;
    document.querySelector("#visualizar-telefone").textContent = telefone;
    document.querySelector("#visualizar-status").textContent = status;

    modal.style.display = "flex";
}

atualizarResumo();
 
});


const botaoFecharEditar = document.querySelector(".fechar-modal-editar");
 const botaoSalvarEdicao = document.querySelector(".salvar-edicao");

 botaoFecharEditar.addEventListener("click", () => {
    modalEditar.style.display = "none";
});

    botaoSalvarEdicao.addEventListener("click", () => {
        const nome = document.querySelector("#editar-nome").value;
        const responsavel = document.querySelector("#editar-responsavel").value;
        const email = document.querySelector("#editar-email").value;
        const telefone = document.querySelector("#editar-telefone").value;
        const status = document.querySelector("#editar-status").value;

        linhaSelecionada.querySelectorAll("td")[0].textContent = nome;
        linhaSelecionada.querySelectorAll("td")[1].textContent = responsavel;
        linhaSelecionada.querySelectorAll("td")[2].textContent = email;
        linhaSelecionada.querySelectorAll("td")[3].textContent = telefone;
        linhaSelecionada.querySelectorAll("td")[4].textContent = status;
        
        atualizarResumo();

        modalEditar.style.display = "none";

});

botoesExcluir.forEach((botao) => {
    botao.addEventListener("click", () => {
        const linha = botao.parentElement.parentElement.parentElement;
        const confirmar = confirm("Tem certeza que deseja excluir essa empresa?");
        
        if(confirmar){
            linha.remove();
        }else{
            return;
        }
    });
   
});
 
botaoCadastro.forEach((botao) => {
    botao.addEventListener("click", () => {
        modalCadastro.style.display = "flex";
    });
});

fecharModalCadastro.addEventListener("click", () => {
    modalCadastro.style.display = "none";
});

botaoSalvarCadastro.addEventListener("click", () => {
    
    const nome = nomeCadastro.value;
    const responsavel = responsavelCadastro.value;
    const email = emailCadastro.value;
    const telefone = telefoneCadastro.value;
    const status = statusCadastro.value;

    if(nome === "" || responsavel === "" || email === "" || telefone === "" || status === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }
    /*=== "": verifica se o campo está vazio.*/
    /*||: significa OU. Basta uma das condições ser verdadeira para entrar no if.*/

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${responsavel}</td>
    <td>${email}</td>
    <td>${telefone}</td>
    <td>${status}</td>

    <td>
        <div class="acoes-empresa">

            <button class="btn-editar" aria-label="editar-empresa">
                <i data-lucide="pencil"></i>
            </button>

            <button class="btn-visualizar" aria-label="Visualizar empresa">
                <i data-lucide="eye"></i>
            </button>

            <button class="btn-excluir" aria-label="Excluir empresa">
                <i data-lucide="trash-2"></i>
            </button>

        </div>
    </td>
`;
/*innerHTML: permite inserir conteúdo HTML dentro de um elemento.
<td>: representa uma célula da tabela.
${nome}: insere o valor da variável dentro do HTML.
As crases (`) permitem utilizar várias linhas e interpolar variáveis.*/

corpoTabela.appendChild(novaLinha); /*O appendChild() adiciona a nova linha como último elemento do tbody.*/
atualizarResumo();
lucide.createIcons();
modalCadastro.style.display = "none";
});

/*Atualizar contadores de Empresas*/

function atualizarResumo(){ /*function atualizarResumo() cria uma função chamada atualizarResumo.
                             corpoTabela.querySelectorAll("tr") procura todas as linhas (tr) que estão dentro do nosso <tbody>.
                             const linhas armazena todas essas linhas.   */

    const linhas = corpoTabela.querySelectorAll("tr")
    
    let quantidadeAtivas = 0;
    let quantidadeInativas =0;

    linhas.forEach((linha) => {

         const colunas = linha.querySelectorAll("td");
         const status = colunas[4].textContent.trim().toLowerCase();
         console.log("Status encontrado:", status);

        /* querySelectorAll("td"): seleciona todas as células daquela linha.
            colunas[4]: acessa a quinta coluna, onde está o status.
            textContent: captura o texto da célula.
            trim(): remove espaços desnecessários no início e no final.
            toLowerCase(): transforma o texto em letras minúsculas.*/ 

            if(status === "ativo"){
                quantidadeAtivas++;
            } else if (status === "inativo"){
                quantidadeInativas++;
            }
    });

    totalEmpresas.textContent = linhas.length; /*textContent: altera o conteúdo de texto de um elemento HTML.*/ 
    empresasAtivas.textContent = quantidadeAtivas;
    empresasInativas.textContent = quantidadeInativas;
}
atualizarResumo() /*Chama a função atualizarResumo() para que os contadores sejam atualizados assim que a página for carregada.*/




