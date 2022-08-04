<script>
    import { attivo } from "../stores/stores.js";

    import { risultatoFinale } from "../stores/stores.js";

    import Trials from "./Trials.svelte";

    let n = 6;
    let ritardo = 400; //Millisecondi
    let trials = [{forma1: '', forma2: '', forma3: ''}];
    
    let j = 0;
    let scrittaEsatta = "";
    let scritta = "";
    let risposta;
    let risultati = [];
    let visibility1 = 'visible';
    let visibility2 = 'invisible';
    let voceAttiva = new Audio();

    let suonoPositivo = new Audio('/sounds/rinforzi/suono_positivo.mp3');
    let suonoNegativo = new Audio('/sounds/rinforzi/suono_negativo.mp3');

    let voceArancione = new Audio('/sounds/voci/voce_arancione.mp3');
    let voceBlu = new Audio('/sounds/voci/voce_blu.mp3');
    let voceGialla = new Audio('/sounds/voci/voce_gialla.mp3');
    let voceRossa = new Audio('/sounds/voci/voce_rossa.mp3');
    let voceCerchio = new Audio('/sounds/voci/voce_cerchio.mp3');
    let voceQuadrato = new Audio('/sounds/voci/voce_quadrato.mp3');
    let voceStella = new Audio('/sounds/voci/voce_stella.mp3');
    let voceTriangolo = new Audio('/sounds/voci/voce_triangolo.mp3');
    let voceGrandezza = new Audio('/sounds/voci/voce_grandezza.mp3');


    const stampa = () => {
        console.log(trials);
    }

    const transition = (x) => {

        visibility1 = 'invisible';
        visibility2 = 'visible';

        voceAttiva.pause();
        voceAttiva = new Audio();

        if(x){
            document.body.style.backgroundColor = "green";
            suonoPositivo.play();
        }else{
            document.body.style.backgroundColor = "red";
            suonoNegativo.play();
        }

        setTimeout(() => {
            visibility1 = 'visible'; 
            visibility2 = 'invisible';
            document.body.style.backgroundColor = "white";
        }, ritardo);

    }

    const premutoA = () => {
        risposta = 'a';

        if (risposta == trials[j].corretto) {
            console.log("Esatto");
            scrittaEsatta = "Esatto";
            risultati.push(true);
            transition(true);
        }else if (risposta != trials[j].corretto) {
            console.log("Sbagliato");
            scrittaEsatta = "Sbagliato";
            risultati.push(false);
            transition(false);
        }
        
        if (j < trials.length) {
            j++;
        }
    }

    const premutoB = () => {
        risposta = 'b';
        
        if (risposta == trials[j].corretto) {
            console.log("Esatto");
            scrittaEsatta = "Esatto";
            risultati.push(true);
            transition(true);
        }else if (risposta != trials[j].corretto) {
            console.log("Sbagliato");
            scrittaEsatta = "Sbagliato";
            risultati.push(false);
            transition(false);
        }
        
        if(j < trials.length){
            j++;
        }
    }



    $: {       
        if(j == n){
            //Contiene il codice che verrà eseguito alla fine della prova
            console.log(risultati);

            $risultatoFinale = risultati;

            setTimeout(() => {$attivo = 'Risultato'}, ritardo);
        }
    }

    $: scritta = trials[j].frase + ' Tocca la figura che ha qualcosa in comune con questa';

    $: {
        voceAttiva.load();
        voceAttiva.play(); 
     }

    $: {
        j;
        setTimeout(() => {
            if(trials[j].frase == 'cg'){
                voceAttiva = voceGialla;
            }else if(trials[j].frase == 'ca'){
                voceAttiva = voceArancione;
            }else if(trials[j].frase == 'cr'){
                voceAttiva = voceRossa;
            }else if(trials[j].frase == 'cb'){
                voceAttiva = voceBlu;
            }else if(trials[j].frase == 'fc'){
                voceAttiva = voceCerchio;
            }else if(trials[j].frase == 'fq'){
                voceAttiva = voceQuadrato;
            }else if(trials[j].frase == 'ft'){
                voceAttiva = voceTriangolo;
            }else if(trials[j].frase == 'fs'){
                voceAttiva = voceStella;
            }else if(trials[j].frase == 'g'){
                voceAttiva = voceGrandezza;
            }
        }, ritardo);
    }

</script>

<Trials {n} bind:trials />

<div class="text-white position-fixed d-flex h3 justify-content-center align-items-center h-100 w-100 {visibility2}">
    {scrittaEsatta}
</div>

<div class="row bordi altezza h-auto {visibility1}">
    <div class="col bordi h-auto d-flex align-items-center cursore  mx-sm-5" on:click={premutoA}>
        <div class="bordi m-auto" style="--colore: {trials[j].colore1}; --gr: {trials[j].gr1}">
            <i class="bi {trials[j].forma1} coloreAttivo grAttiva bordi"></i>
        </div>
    </div>
    <div class="col bordi h-auto d-flex align-items-center cursore  mx-sm-5" on:click={premutoB}>
        <div class="bordi m-auto" style="--colore: {trials[j].colore2}; --gr: {trials[j].gr2}">
            <i class="bi {trials[j].forma2} coloreAttivo grAttiva bordi"></i>
        </div>
    </div>
</div>

<div class="row bordi altezza h-auto {visibility1}">
    <div class="col bordi h-auto d-flex align-items-center">
        <div class="bordi m-auto" style="--colore: {trials[j].colore3}; --gr: {trials[j].gr3}">
            <i class="bi {trials[j].forma3} coloreAttivo grAttiva bordi"></i>
        </div>
    </div>
</div>

<style>
    .coloreAttivo{
        color: var(--colore);
    }

    .grAttiva{
        font-size: var(--gr);
    }

    /* .bordi{
        border: 1px solid gray;
    } */
    
    .altezza{
        min-height: 220px;
    }

    .cursore{
        cursor: pointer;
        border-radius: 20px;
        border: 3px solid white;
    }
    
    .cursore:hover{
        border: 3px solid gray;
    }

</style>