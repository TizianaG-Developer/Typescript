

// Typescript: stiamo dicendo al pc di impostare la type (tipologia) con questi campi che hanno queste caratteristiche (stringa o numero), poi gli abbiamo detto che le variabili (cioè i dati inseriti) devono avere questa struttura (vedi sotto)

type Car = {
    id: number;
    marca: string;
    modello: string;
}
var auto1: Car = {
    id: 1,
    marca: "Ford",
    modello: "Kuga",

}
var auto2: Car = {
    id: 2,
    marca: "Fiat",
    modello: "panda",

}

var auto3: Car = {
    id: 3,
    marca: "Citroen",
    modello: "c3",
}

// stabilite le variabili (oggetti degli array) abbiamo creato l'erray che le contiene:
var parcoAuto: Car[] = [auto1, auto2, auto3];
console.log(parcoAuto)
// stabiliamo una funzione con un erray di tipo "Car":
funzioneProva(parcoAuto);

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function inizio() {
    console.log("inizio");
}
async function funzioneProva(Alfonso: Car[]) {

    //    poi gli diciamo che per ciascun elemento...
    inizio();
//   INIZIALIZZARE LA VARIABILE
    let index = 0;
    for ( index = 0; index < parcoAuto.length; index++) {
        await delay(5000);
        console.log(parcoAuto[index]);

    }
    console.log("Fine del popolamento") 
}












