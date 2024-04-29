var User = /** @class */ (function () {
    function User(IUser) {
        this.id = IUser.id;
        this.role_id = IUser.role_id;
        this.nome = IUser.nome;
        this.cognome = IUser.cognome;
        this.sesso = IUser.sesso;
        this.cf = IUser.cf;
        this.indirizzo = IUser.indirizzo;
        this.nation_id = IUser.nation_id;
        this.municipality_id = IUser.municipality_id;
        this.email = IUser.email;
        this.telefono = IUser.telefono;
        this.user = IUser.user;
        this.password = IUser.password;
        this.stato = IUser.stato;
    }
    User.prototype.preparaForm = function () {
        var params = {
            id: this.id,
            role_id: this.role_id,
            nome: this.nome,
            cognome: this.cognome,
            sesso: this.sesso,
            cf: this.cf,
            indirizzo: this.indirizzo,
            nation_id: this.nation_id,
            municipality_id: this.municipality_id,
            email: this.email,
            telefono: this.telefono,
            user: this.user,
            password: this.password,
            stato: this.stato
        };
        //params è un oggetto con tutti i valori preparati per l'invio al server
    };
    return User;
}());
