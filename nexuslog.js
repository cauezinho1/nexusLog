class Empresas {
    constructor (nome, responsavel, email, telefone, ativo ){
        this.nome = nome
        this.responsavel = responsavel
        this.email = email
        this.telefone = telefone
        this.ativo = ativo
    }
    desativar(){
        this.ativo = false 
        console.log(`Empresa ${this.nome} desativada com sucesso`);
    }
    ativar(){
        this.ativo = true 
        console.log(`Empresa ${this.nome} ativada com sucesso`);
    }
}

const empresa1 = new Empresas ("TechNova", "Marcelo Santos", "marcelo@technova.com.br","(11) 98888-1122", true);
const empresa2 = new Empresas ("Bella store", "Juliana Martins", "juliana@bellastore.com.br", "(11) 97777-2233", true);
const empresa3 = new Empresas ("Construtora Alfa", "Ricardo Oliveira", "ricardo@construtoraalfas.com.br", "(11) 96666-3344", false);
const empresa4 = new Empresas ("Mercado Central", "Fernanda Costa", "fernanda@mercadocentral.com.br", "(11) 95555-4455", false);
const empresa5 = new Empresas ("Auto Prime", "Lucas Ferreira", "lucas@autoprime.com.br", "(11) 94444-5566", true);
const empresa6 = new Empresas ("Café e Cia", "Camila Souza", "camila@cafeecia.com", "(11) 93333-6677", true);

class gerenciarEmpresa {
    constructor(){
        this.empresas = []
    }
    cadastrar(empresa){
        if ((empresa instanceof Empresas)){
            this.empresas.push(empresa)
            console.log("Empresa cadastrada com sucesso")
        }
    }
    listarempresas(){
        this.empresas.forEach((empresa) =>{ 
            let status 
            if (empresa.ativo === true){
                status = "ativo"
            }else {
                status = "inativo"
            }
            console.log(`${empresa.nome} - ${status}`)
        });
    }
    buscarEmpresa(nome){
        const empresaEncontrada = this.empresas.find((empresa) => { return empresa.nome === nome});
        if(!empresaEncontrada){
            throw new Error (`Empresa não encontrada`);
        }else {
            console.log(`Empresa encontrada`);
        }
        return empresaEncontrada
    }
    
    contarEmpresas(){
        return this.empresas.length
    }
    contarEmpresasAtivas(){
        const empresasAtivas = this.empresas.filter((empresa) => {return empresa.ativo === true});
        return empresasAtivas.length
    }
    listarNomes(){
        const nomesEmpresas =this.empresas.map((empresa) => {return empresa.nome});
        return nomesEmpresas
    }
    removerUltimaEmpresa(){
        const ultimaEmpresa = this.empresas.pop();
        console.log(`Ultima empresa ${ultimaEmpresa.nome} removida com sucesso`);
    }
    removerEmpresa(nome){
        const empresaRemovida = this.empresas.find((empresa) => empresa.nome === nome);

        const empresasAtualizadas = this.empresas.filter((empresa)=> empresa.nome !== nome)
       console.log(`Empresa ${empresaRemovida.nome} removida com sucesso`)
        this.empresas = empresasAtualizadas
       return empresaRemovida

    }
    editarTelefone(nome, novoTelefone){
        const empresaEditada = this.empresas.find((empresa) => empresa.nome === nome);
        if(!empresaEditada){
            throw new Error (`Empresa não encontrada`);
        }
        empresaEditada.telefone = novoTelefone
        
        console.log (`Empresa ${empresaEditada.nome} teve o telefone alterado para ${empresaEditada.telefone} com sucesso `);
    }
    editarEmail(nome, novoEmail){
        const emailNovo = this.empresas.find((empresa) => empresa.nome === nome);
         if(!emailNovo){
            throw new Error (`Empresa n~so encontrada`);
        }
        emailNovo.email = novoEmail
       
        console.log(`O email da empresa ${emailNovo.nome} foi atualizado para ${emailNovo.email} com sucesso`);
    }
}

const gerenciador = new gerenciarEmpresa()

gerenciador.cadastrar(empresa1)
gerenciador.cadastrar(empresa2)
gerenciador.cadastrar(empresa3)
gerenciador.cadastrar(empresa4)
gerenciador.cadastrar(empresa5)
gerenciador.cadastrar(empresa6)
console.log(gerenciador.empresas)

gerenciador.listarempresas()


console.log(gerenciador.buscarEmpresa("TechNova"))

empresa2.desativar()
gerenciador.listarempresas()

console.log(gerenciador.contarEmpresas())

console.log(gerenciador.contarEmpresasAtivas())

console.log(gerenciador.listarNomes())

gerenciador.removerUltimaEmpresa(`Café e Cia`)

gerenciador.removerEmpresa(`Auto Prime`)

console.log(gerenciador.contarEmpresas())

gerenciador.editarTelefone("Mercado Central", "(11) 99999-0000")

gerenciador.editarEmail("Bella store", "ju@bellastore.com.br")

empresa4.ativar()

gerenciador.listarempresas()

try {
     gerenciador.buscarEmpresa("Construtora Alfa")
}catch (error){
    console.log(error.message)
}

// Menu interatico com o terminal !

const readline = require(`readline`);

const menu = readline.createInterface({
    input: process.stdin,
     output: process.stdout
});

function exibirMenu() {
    console.log("===== NexusLog =====");
console.log("1 - Cadastrar empresa");
console.log("2 - Listar empresas");
console.log("3 - Buscar empresa");
console.log("4 - Editar telefone");
console.log("5 - Editar email");
console.log("6 - Ativar ou desativar empresa");
console.log("7 - Remover empresa");
console.log("0 - Sair");

menu.question("Escolha uma opção:", (opcao) => {
    if (opcao === "0"){
        console.log(`Você encerrou a sessão`)
         menu.close();
   
    } else if(opcao === "1"){
        menu.question("Digite o nome da empresa que deseja cadastrar:\n>", (nome) => {
            menu.question("Digite o nome do responsavel da empresa:\n>", (responsavel) => {
                menu.question("Informe o Email da empresa:\n>", (email) =>{
                    menu.question("Informe o número de telefone da empresa:\n>", (telefone) => {
                
                        const novaEmpresa = new Empresas (
                            nome,
                            responsavel,
                            email,
                            telefone,
                            true
                        );
                        gerenciador.cadastrar(novaEmpresa)
                    

                console.log("Nome cadastrado:", nome)
                console.log("Nome do responsavel:", responsavel)
                console.log("Email cadastrado:", email)
                console.log("telefone cadastrado:", telefone)

               exibirMenu()

                    });
                });
            });
        });

    } else if(opcao === "2"){
        gerenciador.listarempresas()
        exibirMenu();
    

    }else if(opcao === "3") {
        menu.question("Digite o nome da empresa:\n>", (nome) => {
            console.log(`Nome digitado:`, nome)
            try {
                const empresa = gerenciador.buscarEmpresa(nome);
                console.log(empresa)
            }catch (error) {
                console.log(error.message);
            }
            exibirMenu()
           
        });
    }else if(opcao === "4"){
        menu.question("Digite o nome da empresa que deseja edital o telefone:\n>", (nome) => {
            menu.question("Digite o novo número:\n>", (telefone) => {
               
                gerenciador.editarTelefone(nome, telefone)

            console.log("Nome da empresa:", nome)
            console.log("Número novo:", telefone)

            exibirMenu()
            });
        });

    }else if(opcao === "5"){
        menu.question("Digite o nome da empresa que deseja editar o email:\n>", (nome) => {
            menu.question("Digite o novo email:\n>", (email) => {
            
                gerenciador.editarEmail(nome, email)

            console.log("Nome da empresa:", nome)
            console.log("Novo email", email)

            exibirMenu()
            });
        });

    }else if(opcao === "6"){
        menu.question("Digite o nome da empresa:\n>", (nome) => {
            try{
                const empresa = gerenciador.buscarEmpresa(nome)
                menu.question("Digite A para ativar e digite D para desativar:\n>", (acao) =>{
                    if(acao.toUpperCase() === "A"){
                        empresa.ativar
                    }else if(acao.toUpperCase() === "D"){
                        empresa.desativar
                    }else{
                        console.log("Resposta inválida")
                    }
                    exibirMenu()
                })
                if(empresa.ativo === true){
                    console.log("A empresa está ativa")
                }else{
                    console.log("A empresa está inativa")
                }
                console.log(empresa)
            }catch (error) {
                console.log(error.message)
            }
            exibirMenu()
        })
    }else if(opcao === "7"){
        menu.question("Digite o nome da empresa que deseja remover:\n>", (nome) => {

        try{
            gerenciador.removerEmpresa(nome)
        }catch (error){
            console.log(error.message)
        }

        exibirMenu()
        })
    }else{
        console.log(`Opção ainda não implementada`) 
        exibirMenu()  
    }
     
   });
}
 exibirMenu() 

