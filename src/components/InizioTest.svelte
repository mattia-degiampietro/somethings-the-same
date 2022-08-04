<script>
    import { attivo } from "../stores/stores";
</script>

<div class="text-center">
    <h2 class="text-center">Something's the same</h2>
    <h4 class="text-center">Qualcosa in comune</h4>

    <br><br><br><br>

    <p class="fs-4 p-5">
        Il tutorial è stato compoletato con successo!
    </p>

    <button class="bottone" on:click={() => { $attivo = 'Test' }}>Inizia il test con punteggio</button>

    <br><br>
</div>

<style>
    .bottone{
        height: 100px;
        width: 200px;
        color: white;
        background-color: green;
        font-size: 20px;
        border-radius: 6px;
    }
</style>