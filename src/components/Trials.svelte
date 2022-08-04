<script>

    // per importare Trials in un componente utilizzare:
    // <Trials {n} bind:trials />
    // inserire anche le variabili n e trials,
    // trials andrà lasciato vuoto metre n determinerà il numero di trial nel componente

    //variabili collegate
    export let n;

    export let trials = [];




    //inserimento di grandezze, forme, colori e combinazioni
    //(modificare questa sezione in caso si vogliano aggiungere grandezze, forme, colori o combinazioni)
    let gr = ['7vw' , '11vw' , '17vw']; 
    let forme = ['bi-circle-fill', 'bi-star-fill', 'bi-square-fill', 'bi-triangle-fill'];
    let colori = ['yellow', 'blue', 'orange', 'red'];
    let combinazioni = [
        {imm1_2: 'C', imm3: 'F'},
        {imm1_2: 'G', imm3: 'C'},
        {imm1_2: 'F', imm3: 'G'},
        {imm1_2: 'G', imm3: 'F'},
        {imm1_2: 'C', imm3: 'G'},
        {imm1_2: 'F', imm3: 'C'}
    ];





    //inizializzazione altre variabili
    
    let precCombinazione;
        
    //FUNZIONI

    //restituisce un elemento dell array dato come parametro in modo casuale
    function randomItem(items){
        return items[Math.floor(Math.random()*items.length)];
    }

    //restituisce un elemento dell array dato come parametro in modo casuale ma diverso dal parametro d
    function randomItemDif(items, d){
        let x;

        do{
            x = randomItem(items);
        }while(d===x);

        return x;
    }

    //restituisce un elemento dell array dato come parametro in modo casuale ma diverso dai parametri d ed e
    function randomItemDifDif(items, d, e){
        let x;

        do{
            x = randomItem(items);
        }while(d===x || e===x);

        return x;
    }

    
    //Genera un trial randomizzato composto da un oggetto con i parametri di 3 immagini + unavariabile che determina l'immagine corretta
    function generazioneTrial(){

        let combinazione = randomItemDif(combinazioni, precCombinazione);

        precCombinazione = combinazione;

        console.log(combinazione);

        let trial = {
            gr1: '',
            colore1: '',
            forma1: '',
            gr2: '',
            colore2: '',
            forma2: '',
            gr3: '',
            colore3: '',
            forma3: '',
            corretto: '',
            combinazione: {},
            frase: ''
        };


        trial.corretto = randomItem(['a', 'b']);

        trial.gr1 = randomItem(gr);
        trial.colore1 = randomItem(colori);
        trial.forma1 = randomItem(forme);

        switch(combinazione.imm1_2){
            case 'C':
                trial.gr2 = randomItemDif(gr, trial.gr1);
                trial.colore2 = trial.colore1;
                trial.forma2 = randomItemDif(forme, trial.forma1);

                if(trial.colore1 == 'yellow'){
                    trial.frase = 'cg';
                }else if(trial.colore1 == 'red'){
                    trial.frase = 'cr';
                }else if(trial.colore1 == 'orange'){
                    trial.frase = 'ca';
                }else if(trial.colore1 == 'blue'){
                    trial.frase = 'cb';
                }
            break;

            case 'F':
                trial.gr2 = randomItemDif(gr, trial.gr1);
                trial.colore2 = randomItemDif(colori, trial.colore1);
                trial.forma2 = trial.forma1;

                if(trial.forma1 == 'bi-circle-fill'){
                    trial.frase = 'fc';
                }else if(trial.forma1 == 'bi-star-fill'){
                    trial.frase = 'fs';
                }else if(trial.forma1 == 'bi-square-fill'){
                    trial.frase = 'fq';
                }else if(trial.forma1 == 'bi-triangle-fill'){
                    trial.frase = 'ft';
                }
            break;

            case 'G':
                trial.gr2 = trial.gr1;
                trial.colore2 = randomItemDif(colori, trial.colore1);
                trial.forma2 = randomItemDif(forme, trial.forma1);

                trial.frase = 'g';
            break;
        }

        switch(combinazione.imm3){
            case 'C':
                trial.gr3 = randomItemDifDif(gr, trial.gr1, trial.gr2);
                trial.forma3 = randomItemDifDif(forme, trial.forma1, trial.forma2);

                if(trial.corretto == 'a'){
                    trial.colore3 = trial.colore1;
                }else if(trial.corretto == 'b'){
                    trial.colore3 = trial.colore2;
                }
                
            break;

            case 'F':
                trial.gr3 = randomItemDifDif(gr, trial.gr1, trial.gr2);
                trial.colore3 = randomItemDifDif(colori, trial.colore1, trial.colore2);

                if(trial.corretto == 'a'){
                    trial.forma3 = trial.forma1;
                } else if(trial.corretto == 'b'){
                    trial.forma3 = trial.forma2;
                }
                
            break;

            case 'G':
                trial.colore3 = randomItemDifDif(colori, trial.colore1, trial.colore2);
                trial.forma3 = randomItemDifDif(forme, trial.forma1, trial.forma2);

                if(trial.corretto == 'a'){
                    trial.gr3 = trial.gr1;
                } else if(trial.corretto == 'b'){
                    trial.gr3 = trial.gr2;
                }
                
            break;
        }

        trial.combinazione = combinazione

        return trial;
    }

    //riempie l'array trials con n oggetti randomizzati creati con la funzione generazioneTrial
    function riempimentoTrials (n) {
        trials = [];

        for(let i = 0; i < n; i++){
            trials.push(generazioneTrial());
        };

        trials.push({
            gr1: '',
            colore1: '',
            forma1: '',
            gr2: '',
            colore2: '',
            forma2: '',
            gr3: '',
            colore3: '',
            forma3: '',
            corretto: ''
        });

        console.log(trials);
    }

    riempimentoTrials(n);
</script>


<div>

</div>


<style>

</style>