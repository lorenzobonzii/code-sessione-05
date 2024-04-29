interface IFilm {
    id: number,
    titolo: string,
    regia: string,
    anno: number,
    durata: number,
    lingua: string,
    copertina: string,
    anteprima: string,
    trama: string,
    nation_id: number
}

class Film implements IFilm { 
    id: number;
    titolo: string;
    regia: string;
    anno: number;
    durata: number;
    lingua: string;
    copertina: string;
    anteprima: string;
    trama: string;
    nation_id: number

    constructor(IFilm:IFilm) { 
        this.id = IFilm.id
        this.titolo = IFilm.titolo
        this.regia = IFilm.regia
        this.anno = IFilm.anno
        this.durata = IFilm.durata
        this.lingua = IFilm.lingua
        this.copertina = IFilm.copertina
        this.anteprima = IFilm.anteprima
        this.trama = IFilm.trama
        this.nation_id = IFilm.nation_id
    }
}