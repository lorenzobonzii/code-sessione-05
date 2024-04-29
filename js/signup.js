function verificaUser(){
    var user = document.form.user.value;
    if ((user == "") || (user == "undefined")){
        var p = document.getElementById('user-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'user-errore';
            p.classList.add('testo-errore');
            document.form.user.after(p);
        }
        p.textContent = 'Inserisci lo username';
        document.form.user.classList.add('errore');
        document.querySelectorAll('label[for="user"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('user-errore');
        if (p){
            p.remove();
            document.form.user.classList.remove('errore');
            document.querySelectorAll('label[for="user"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaNome(){
    var nome = document.form.nome.value;
    if ((nome == "") || (nome == "undefined")){
        var p = document.getElementById('nome-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'nome-errore';
            p.classList.add('testo-errore');
            document.form.nome.after(p);
        }
        p.textContent = 'Inserisci il nome';
        document.form.nome.classList.add('errore');
        document.querySelectorAll('label[for="nome"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('nome-errore');
        if (p){
            p.remove();
            document.form.nome.classList.remove('errore');
            document.querySelectorAll('label[for="nome"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaCognome(){
    var cognome = document.form.cognome.value;
    if ((cognome == "") || (cognome == "undefined")){
        var p = document.getElementById('cognome-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'cognome-errore';
            p.classList.add('testo-errore');
            document.form.cognome.after(p);
        }
        p.textContent = 'Inserisci il cognome';
        document.form.cognome.classList.add('errore');
        document.querySelectorAll('label[for="cognome"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('cognome-errore');
        if (p){
            p.remove();
            document.form.cognome.classList.remove('errore');
            document.querySelectorAll('label[for="cognome"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaDataNascita(){
    var datanascita = document.form.datanascita.value;
    if ((datanascita == "") || (datanascita == "undefined")){
        var p = document.getElementById('datanascita-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'datanascita-errore';
            p.classList.add('testo-errore');
            document.form.datanascita.after(p);
        }
        p.textContent = 'Inserisci la data di nascita';
        document.form.datanascita.classList.add('errore');
        document.querySelectorAll('label[for="datanascita"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('datanascita-errore');
        if (p){
            p.remove();
            document.form.datanascita.classList.remove('errore');
            document.querySelectorAll('label[for="datanascita"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaIndirizzo(){
    var indirizzo = document.form.indirizzo.value;
    if ((indirizzo == "") || (indirizzo == "undefined")){
        var p = document.getElementById('indirizzo-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'indirizzo-errore';
            p.classList.add('testo-errore');
            document.form.indirizzo.after(p);
        }
        p.textContent = 'Inserisci l\'indirizzo';
        document.form.indirizzo.classList.add('errore');
        document.querySelectorAll('label[for="indirizzo"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('indirizzo-errore');
        if (p){
            p.remove();
            document.form.indirizzo.classList.remove('errore');
            document.querySelectorAll('label[for="indirizzo"]')[0].classList.remove('errore');
        }
        return true;
    }
}   
function verificaCF(){
    var cf = document.form.cf.value;
    var cf_reg_exp = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/;
    if ((cf == "") || (cf == "undefined")){
        var p = document.getElementById('cf-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'cf-errore';
            p.classList.add('testo-errore');
            document.form.cf.after(p);
        }
        p.textContent = 'Inserisci il codice fiscale';
        document.form.cf.classList.add('errore');
        document.querySelectorAll('label[for="cf"]')[0].classList.add('errore');
    } else if (!cf_reg_exp.test(cf)){
        var p = document.getElementById('cf-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'cf-errore';
            p.classList.add('testo-errore');
            document.form.cf.after(p);
        }
        p.textContent = 'Il codice fiscale inserito non è valido';
        document.form.cf.classList.add('errore');
        document.querySelectorAll('label[for="cf"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('cf-errore');
        if (p){
            p.remove();
            document.form.cf.classList.remove('errore');
            document.querySelectorAll('label[for="cf"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaTelefono(){
    var telefono = document.form.telefono.value;
    if ((telefono == "") || (telefono == "undefined")){
        var p = document.getElementById('telefono-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'telefono-errore';
            p.classList.add('testo-errore');
            document.form.telefono.after(p);
        }
        p.textContent = 'Inserisci il numero di telefono';
        document.form.telefono.classList.add('errore');
        document.querySelectorAll('label[for="telefono"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('telefono-errore');
        if (p){
            p.remove();
            document.form.telefono.classList.remove('errore');
            document.querySelectorAll('label[for="telefono"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaEmail(){
    var email = document.form.email.value;
    var email_reg_exp = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
    if ((email == "") || (email == "undefined")){
        var p = document.getElementById('email-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'email-errore';
            p.classList.add('testo-errore');
            document.form.email.after(p);
        }
        p.textContent = 'Inserisci la mail';
        document.form.email.classList.add('errore');
        document.querySelectorAll('label[for="email"]')[0].classList.add('errore');
    } else if (!email_reg_exp.test(email)){
        var p = document.getElementById('email-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'email-errore';
            p.classList.add('testo-errore');
            document.form.email.after(p);
        }
        p.textContent = 'La mail inserita non è valida';
        document.form.email.classList.add('errore');
        document.querySelectorAll('label[for="email"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('email-errore');
        if (p){
            p.remove();
            document.form.email.classList.remove('errore');
            document.querySelectorAll('label[for="email"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaPassword(){
    var password = document.form.password.value;
    if ((password == "") || (password == "undefined")){
        var p = document.getElementById('password-errore');
        if (!p){
            var p = document.createElement('p');
            p.id = 'password-errore';
            p.classList.add('testo-errore');
            document.form.password.after(p);
        }
        p.textContent = 'Inserisci il password';
        document.form.password.classList.add('errore');
        document.querySelectorAll('label[for="password"]')[0].classList.add('errore');
    } else {
        var p = document.getElementById('password-errore');
        if (p){
            p.remove();
            document.form.password.classList.remove('errore');
            document.querySelectorAll('label[for="password"]')[0].classList.remove('errore');
        }
        return true;
    }
}
function verificaContatto(){
    var verUser = verificaUser();
    var verNome = verificaNome();
    var verCognome = verificaCognome();
    var verDataNascta = verificaDataNascita();
    var verIndirizzo = verificaIndirizzo();
    var verCF = verificaCF();
    var verTelefono = verificaTelefono();
    var verEmail = verificaEmail();
    var verPassword = verificaPassword();
    if (verUser && verNome && verCognome && verDataNascta && verIndirizzo && verCF && verTelefono && verEmail && verPassword){
        return true;
    } else {
        return false;
    }
}

window.onload = function (){

    var email = new URL(document.location.toString()).searchParams.get("email");
    document.form.email.value=email;
    document.form.onsubmit = function (e){
        e.preventDefault();
        if (verificaContatto()){
            document.form.submit();
        }
    }
    document.form.user.oninput = function (){
        verificaUser();
    }
    document.form.nome.oninput = function (){
        verificaNome();
    }
    document.form.cognome.oninput = function (){
        verificaCognome();
    }
    document.form.datanascita.oninput = function (){
        verificaDataNascita();
    }
    document.form.indirizzo.oninput = function (){
        verificaIndirizzo();
    }
    document.form.cf.oninput = function (){
        verificaCF();
    }
    document.form.telefono.oninput = function (){
        verificaTelefono();
    }
    document.form.email.oninput = function (){
        verificaEmail();
    }
    document.form.password.oninput = function (){
        verificaPassword();
    }
}