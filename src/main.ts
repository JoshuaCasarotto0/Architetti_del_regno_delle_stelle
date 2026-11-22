function creaTabella(): void {
    let numero: number = Number((document.getElementById("numero") as HTMLInputElement).value);
    let tab: HTMLDivElement = document.getElementById("tabella") as HTMLDivElement;
    let messaggio: HTMLElement | null = document.getElementById("messaggio");
    let disegno: string = (document.getElementById("figura") as HTMLSelectElement).value;
    tab.innerHTML = "";

    if(messaggio === null){
        console.error("Valore messaggio non trovato");
        return;
    }

    if (numero < 1 || numero > 10 || !Number.isInteger(numero)) {
        messaggio.innerHTML = "<b>Inserisci un numero da 1 a 10</b>";
        return;
    }

    messaggio.innerHTML = " ";
    let tabella: HTMLTableElement = document.createElement("table");

    switch(disegno){
        
        // Stella del Quadrato Pieno
        case("a"):
            for (let riga: number = 1; riga <= numero; riga++) {
                let tr: HTMLTableRowElement = document.createElement("tr");

                for (let colonna: number = 1; colonna <= numero; colonna++) {
                    let td: HTMLTableCellElement = document.createElement("td");
                    td.innerHTML = "*";
                    tr.appendChild(td);
                }

            tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;


        // Contorno del Quadrato
        case("b"):
            for (let riga: number = 1; riga <= numero; riga++) {
                let tr: HTMLTableRowElement = document.createElement("tr");
                
                if(riga == 1 || riga == numero){
                    for (let colonna: number = 1; colonna <= numero; colonna++) {
                        let td: HTMLTableCellElement = document.createElement("td");
                        td.innerHTML = "*";
                        tr.appendChild(td);
                    }
                }
                else{
                    
                    for (let colonna: number = 1; colonna < numero; colonna++) {
                        if(colonna == 1){
                            let td: HTMLTableCellElement = document.createElement("td");
                            td.innerHTML = "*";
                            tr.appendChild(td);
                        }
                        if(colonna == numero -1){
                            let td: HTMLTableCellElement = document.createElement("td");
                            td.innerHTML = "*";
                            tr.appendChild(td);
                            break;
                        }
                        let td: HTMLTableCellElement = document.createElement("td");
                        td.innerHTML = "";
                        tr.appendChild(td);
                    }
                }
            tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;


        // Triangolo del Coraggio
        case("c"):
            for (let riga: number = 1; riga <= numero; riga++) {
                let tr: HTMLTableRowElement = document.createElement("tr");

                for (let colonna: number = 1; colonna <= riga; colonna++) {
                    
                    let td: HTMLTableCellElement = document.createElement("td");
                    td.innerHTML = "*";
                    tr.appendChild(td);
                }

            tabella.appendChild(tr);
            }
            tab.appendChild(tabella);
            break;


        // Stella del labirinto 
        case("d"):
            for (let riga: number = 1; riga <= numero; riga++) {
                let tr: HTMLTableRowElement = document.createElement("tr");

                for (let colonna: number = 1; colonna <= numero; colonna++) {
                    let td: HTMLTableCellElement = document.createElement("td");

                    if((riga + colonna) % 2){
                        td.innerHTML = "*";
                    }else{
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