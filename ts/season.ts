interface ISeason {
    id: number,
    titolo: string,
    ordine: number,
    anno: number,
    trama: string,
    serie_id: number
}

class Season implements ISeason { 
    id: number;
    titolo: string;
    ordine: number;
    anno: number;
    trama: string;
    serie_id: number

    constructor(ISeason:ISeason) { 
        this.id = ISeason.id
        this.titolo = ISeason.titolo
        this.ordine = ISeason.ordine
        this.anno = ISeason.anno
        this.trama = ISeason.trama
        this.serie_id = ISeason.serie_id
    }
}