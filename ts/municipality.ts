interface IMunicipality {
    id: number,
    comune: string,
    regione: string,
    provincia: string,
    sigla: string,
    codice_belfiore: string,
    cap: string
}

class Municipality implements IMunicipality { 
    id: number;
    comune: string;
    regione: string;
    provincia: string;
    sigla: string;
    codice_belfiore: string;
    cap: string

    constructor(IMunicipality:IMunicipality) { 
        this.id = IMunicipality.id
        this.comune = IMunicipality.comune
        this.regione = IMunicipality.regione
        this.provincia = IMunicipality.provincia
        this.sigla = IMunicipality.sigla
        this.codice_belfiore = IMunicipality.codice_belfiore
        this.cap = IMunicipality.cap
    }
}