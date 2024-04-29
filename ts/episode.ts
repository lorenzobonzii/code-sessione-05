interface IEpisode {
    id: number,
    titolo: string,
    ordine: number,
    durata: number,
    copertina: string,
    descrizione: string,
    season_id: number
}

class Episode implements IEpisode { 
    id: number;
    titolo: string;
    ordine: number;
    durata: number;
    copertina: string;
    descrizione: string;
    season_id: number

    constructor(IEpisode:IEpisode) { 
        this.id = IEpisode.id
        this.titolo = IEpisode.titolo
        this.ordine = IEpisode.ordine
        this.durata = IEpisode.durata
        this.copertina = IEpisode.copertina
        this.descrizione = IEpisode.descrizione
        this.season_id = IEpisode.season_id
    }
}