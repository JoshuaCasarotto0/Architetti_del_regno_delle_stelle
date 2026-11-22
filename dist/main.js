"use strict";
function creaTabella() {
    let numero = Number(document.getElementById("numero").value);
    let tab = document.getElementById("tabella");
    let messaggio = document.getElementById("messaggio");
    let disegno = document.getElementById("figura").value;
    tab.innerHTML = "";
    if (messaggio === null) {
        console.error("Valore messaggio non trovato");
        return;
    }
    if (numero < 1 || numero > 10 || !Number.isInteger(numero)) {
        messaggio.innerHTML = "<b>Inserisci un numero da 1 a 10</b>";
        return;
    }
    messaggio.innerHTML = " ";
    let tabella = document.createElement("table");
    switch (disegno) {
        // Stella del Quadrato Pieno
        case ("a"):
            for (let riga = 1; riga <= numero; riga++) {
                let tr = document.createElement("tr");
                for (let colonna = 1; colonna <= numero; colonna++) {
                    let td = document.createElement("td");
                    td.innerHTML = "*";
                    tr.appendChild(td);
                }
                tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;
        // Contorno del Quadrato
        case ("b"):
            for (let riga = 1; riga <= numero; riga++) {
                let tr = document.createElement("tr");
                if (riga == 1 || riga == numero) {
                    for (let colonna = 1; colonna <= numero; colonna++) {
                        let td = document.createElement("td");
                        td.innerHTML = "*";
                        tr.appendChild(td);
                    }
                }
                else {
                    for (let colonna = 1; colonna < numero; colonna++) {
                        if (colonna == 1) {
                            let td = document.createElement("td");
                            td.innerHTML = "*";
                            tr.appendChild(td);
                        }
                        if (colonna == numero - 1) {
                            let td = document.createElement("td");
                            td.innerHTML = "*";
                            tr.appendChild(td);
                            break;
                        }
                        let td = document.createElement("td");
                        td.innerHTML = "";
                        tr.appendChild(td);
                    }
                }
                tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;
        // Triangolo del Coraggio
        case ("c"):
            for (let riga = 1; riga <= numero; riga++) {
                let tr = document.createElement("tr");
                for (let colonna = 1; colonna <= riga; colonna++) {
                    let td = document.createElement("td");
                    td.innerHTML = "*";
                    tr.appendChild(td);
                }
                tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;
        // Stella del labirinto 
        case ("d"):
            for (let riga = 1; riga <= numero; riga++) {
                let tr = document.createElement("tr");
                for (let colonna = 1; colonna <= numero; colonna++) {
                    let td = document.createElement("td");
                    if ((riga + colonna) % 2) {
                        td.innerHTML = "*";
                    }
                    else {
                        td.innerHTML = " ";
                    }
                    tr.appendChild(td);
                }
                tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;
    }
}
//# sourceMappingURL=main.js.map