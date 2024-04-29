function verificaEmail(){
    var email = document.form.email.value;
    var email_reg_exp = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
    if ((email == "") || (email == "undefined")){
        var p = document.getElementById('email-errore');
        if (!p){
            var p = document.createElement('span');
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
            var p = document.createElement('span');
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
window.onload = function (){
    document.form.onsubmit = function (e){
        e.preventDefault();
        if (verificaEmail()){
            document.form.submit();
        }
    }
    document.form.email.oninput = function (){
        verificaEmail();
    }
}