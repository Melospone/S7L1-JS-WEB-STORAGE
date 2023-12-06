//salva e rimuovi nome in local storage

function salvaNome(){
    let nome = document.getElementById('nome').value;
    localStorage.setItem('Nome Utente', nome);
    mostraNomeSalvato();
}


function rimuoviNome() {
    localStorage.removeItem('nomeUtente');
    mostraNomeSalvato();
}

function mostraNomeSalvato() {
    let nomeSalvato = localStorage.getItem('nomeUtente');
    let nomeSalvatoElemento = document.getElementById('nomeSalvato');

    if (nomeSalvato) {
        nomeSalvatoElemento.innerHTML = nomeSalvato;
    } else {
        nomeSalvatoElemento.textContent = "NESSUN NOME SALVATO";
    }
}

mostraNomeSalvato();