interface INation {
    id: number,
    nome: string,
    continente: string,
    iso: string,
    iso3: string,
    prefisso_telefonico: string
}

class Nation implements INation { 
    id: number;
    nome: string;
    continente: string;
    iso: string;
    iso3: string;
    prefisso_telefonico: string

    constructor(INation:INation) { 
        this.id = INation.id
        this.nome = INation.nome
        this.continente = INation.continente
        this.iso = INation.iso
        this.iso3 = INation.iso3
        this.prefisso_telefonico = INation.prefisso_telefonico
    }
}