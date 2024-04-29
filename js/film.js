var Film = /** @class */ (function () {
    function Film(IFilm) {
        this.id = IFilm.id;
        this.titolo = IFilm.titolo;
        this.regia = IFilm.regia;
        this.anno = IFilm.anno;
        this.durata = IFilm.durata;
        this.lingua = IFilm.lingua;
        this.copertina = IFilm.copertina;
        this.anteprima = IFilm.anteprima;
        this.trama = IFilm.trama;
        this.nation_id = IFilm.nation_id;
    }
    return Film;
}());
