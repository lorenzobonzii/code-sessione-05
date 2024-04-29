interface ICapability {
    id: number,
    nome: string
}

class Capability implements ICapability { 
    id: number;
    nome: string

    constructor(ICapability:ICapability) { 
        this.id = ICapability.id
        this.nome = ICapability.nome
    }
}