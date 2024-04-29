interface IRole {
    id: number,
    nome: string
}

class Role implements IRole { 
    id: number;
    nome: string

    constructor(IRole:IRole) { 
        this.id = IRole.id
        this.nome = IRole.nome
    }
}