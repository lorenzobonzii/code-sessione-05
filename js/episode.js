var Episode = /** @class */ (function () {
    function Episode(IEpisode) {
        this.id = IEpisode.id;
        this.titolo = IEpisode.titolo;
        this.ordine = IEpisode.ordine;
        this.durata = IEpisode.durata;
        this.copertina = IEpisode.copertina;
        this.descrizione = IEpisode.descrizione;
        this.season_id = IEpisode.season_id;
    }
    return Episode;
}());
