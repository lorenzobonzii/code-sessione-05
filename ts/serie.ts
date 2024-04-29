interface ISerie {
    id: number,
    titolo: string,
    regia: string,
    anno: number,
    lingua: string,
    copertina: string,
    anteprima: string,
    trama: string,
    nation_id: number
}

class Serie implements ISerie { 
    id: number;
    titolo: string;
    regia: string;
    anno: number;
    lingua: string;
    copertina: string;
    anteprima: string;
    trama: string;
    nation_id: number

    constructor(ISerie:ISerie) { 
        this.id = ISerie.id
        this.titolo = ISerie.titolo
        this.regia = ISerie.regia
        this.anno = ISerie.anno
        this.lingua = ISerie.lingua
        this.copertina = ISerie.copertina
        this.anteprima = ISerie.anteprima
        this.trama = ISerie.trama
        this.nation_id = ISerie.nation_id
    }
}