interface IGenre {
    id: number,
    nome: string
}

class Genre implements IGenre { 
    id: number;
    nome: string

    constructor(IGenre:IGenre) { 
        this.id = IGenre.id
        this.nome = IGenre.nome
    }
}