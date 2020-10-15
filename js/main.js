// SEZIONE EMAIL
// var users = ['matteo@gmail', 'alessandro@gmail', 'manuel@gmail', 'livia@gmail'];

// var email = prompt('Inserisci la tua email');

// console.log(email);

// email = email.toLowerCase();

// var userFalse = false;

// for (var i = 0; i < users.length; i++) {
//     var data = users[i];

//     if (email == data ) {
//     userFalse = true;
//     }
// }

// if (userFalse == true) {
//     document.getElementById('autenticato').innerHTML = 'Utente trovato procedi con l\'autenticazione';
// } else {
//     document.getElementById('autenticato').innerHTML = 'Utente non trovato errore di autenticazione';
// }


// SEIONE DEI DADI
// PLAYER
var player = Math.round(Math.random()*5+1);

document.getElementById('getnumberuser').innerHTML = 'User: ' + player;

if ( player > pc) {
    document.getElementById('player').innerHTML = 'player ha vinto';
}

// PC
var pc =  Math.round(Math.random()*5+1);

document.getElementById('getnumberpc').innerHTML = 'pc: ' + pc;

if ( pc > player) {
    document.getElementById('pc').innerHTML = 'pc ha vinto';
}
