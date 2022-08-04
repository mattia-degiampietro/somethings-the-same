<script>
    import { attivo, nome, risultatoFinale } from "../stores/stores.js";

    let risultati = $risultatoFinale;

    let nCorretti = 0;

    let percentuale = 0;

    for(let risultato of risultati){
        if(risultato){
            nCorretti++;
        }
    }

    percentuale = Math.round((nCorretti / risultati.length) * 100) ;

</script>



<div class="text-center">

    <h2 class="text-center">Something's the same</h2>
    <h4 class="text-center">Qualcosa in comune</h4>

    <br><br>
    
    <p class="fs-4">Complimenti {$nome}!</p>
    <p class="fs-4">Risultato:</p>

    <div class="row">
        <div class="col">
            <br>
            {#each risultati as item, i}

                {#if item }
                    <p>{i+1} - Corretto</p>
                {:else}
                    <p>{i+1} - Errato</p>
                {/if}

            {/each}
        </div>
        <div class="col">
            <div class="row p-3">
                <div class="col">
                    Risposte corrette: <br>
                    {nCorretti} / {risultati.length}
                </div>
            </div>
            <div class="row p-3">
                <div class="col">
                    Percentuale risposte corrette: <br>
                    {percentuale}%
                </div>
            </div>
        </div>   
    </div>
    <br><br>
</div>



<style>

</style>