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
        console.log(`Empresa ${this.nome} desativada com sucesso`)
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
        })
    }
    buscarEmpresa(nome){
        const empresaEncontrada = this.empresas.find((empresa) => { return empresa.nome === nome})
        if(!empresaEncontrada){
            throw new Error (`Empresa não encontrada`)
        }else {
            console.log(`Empresa encontrada`)
        }
        return empresaEncontrada
    }
    
    contarEmpresas(){
        return this.empresas.length
    }
    contarEmpresasAtivas(){
        const empresasAtivas = this.empresas.filter((empresa) => {return empresa.ativo === true})
        return empresasAtivas.length
    }
    listarNomes(){
        const nomesEmpresas =this.empresas.map((empresa) => {return empresa.nome})
        return nomesEmpresas
    }
    removerUltimaEmpresa(){
        const ultimaEmpresa = this.empresas.pop()
        console.log(`Ultima empresa ${ultimaEmpresa.nome} removida com sucesso`)
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

console.log(gerenciador.contarEmpresas())

try {
     gerenciador.buscarEmpresa("Construtora Alfa")
}catch (error){
    console.log(error.message)
}