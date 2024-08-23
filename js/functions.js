// FUNZIONE PER CREARE CELLE
/**
 * 1- COME LA CHIAMO?
 * 2-HO BISOGNO DI UN PARAMETRO?
 * 3-HO BISOGNO DI RESTITUIRE QUALCOSA?
 * 4- SE SI, DI CHE TIPO? 
 */
// DICHIARAZIONE DI FUNZIONE
/**
 * WITH THIS FUNCTION WE CREATE AN ELEMENT TYPE DIV WITH A CLASS NAMED CELL
 *
 * @returns <div class="cell"> </div>
 */
function createCell(content){
    const cell = document.createElement('div');
    cell.className = 'cell';
    // devo aggiungere il contenuto alla mia cella
    cell.append(content);
    return cell;
}