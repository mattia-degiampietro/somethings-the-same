<script>
import { attivo, nome } from "../stores/stores";

</script>

<div class="text-center">
    <h2 class="text-center">Something's the same</h2>
    <h4 class="text-center">Qualcosa in comune</h4>

    <br><br><br><br>
    <div class="d-flex justify-content-center align-items-center flex-column">
        <label for="nome" class="fs-4">Qual'è il tuo nome?</label><br>
        <input bind:value={$nome} type="text" id="nome" name="nome" class="text-center" autocomplete="off">
        <br>
        <button class="bottone" on:click={() => { $attivo = 'Prova' }}>Inizia la prova</button>
    </div>
    
    
    <br><br><br><br>
</div>

<style>
    .bottone{
        height: 80px;
        width: 300px;
        color: white;
        background-color: green;
        font-size: 30px;
        border-radius: 10px;
    }

    #nome{
        width: 300px;
        height: 45px;
        border-radius: 15px;
        margin-bottom: 20px;
    }
</style>