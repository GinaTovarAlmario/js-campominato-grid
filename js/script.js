// controllo che veda il mio script.js
console.log('Js ok');
// ho fatto un file a parte per le mie funzioni faccio il controllo
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/
// FASE DI PREPARAZIONE
// vado a recuperarmi la griglia del DOM
const grid = document.getElementById('grid');
// so che ho bisogno di una griglia 10x10
// FASE DI RACCOLTA DATI
const rows = 10;
const cols = 10;
const totalCells = rows * cols;
// FASE DI ELABORAZIONE DATI
// ora devo generare la mia griglia
for(let i = 0; i < totalCells; i++){
    // mi serve andare a creare una funzione che mi crei le celle
    // invoco la funzione creata
    const cell = createCell(i + 1);
    // devo inserire la cella in pagina
    grid.appendChild(cell);
    // ora devo inserire i numeri da 1 a 100 nelle mie celle. Devo andare a modificare la mia funzione e passargli un contenuto
}
// FASE DI OUTPUT