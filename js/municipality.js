var Municipality = /** @class */ (function () {
    function Municipality(IMunicipality) {
        this.id = IMunicipality.id;
        this.comune = IMunicipality.comune;
        this.regione = IMunicipality.regione;
        this.provincia = IMunicipality.provincia;
        this.sigla = IMunicipality.sigla;
        this.codice_belfiore = IMunicipality.codice_belfiore;
        this.cap = IMunicipality.cap;
    }
    return Municipality;
}());
