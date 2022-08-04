<script>
    import { attivo } from "../stores/stores";
</script>

<div class="text-center">
    <h2 class="text-center">Something's the same</h2>
    <h4 class="text-center">Qualcosa in comune</h4>

    <br><br><br><br>

    <p class="fs-4 p-5">
        Il test è invalido in quanto è stato selezionata la risposta errata alla seconda domanda,
         pertanto non è possibile procedere con il test con punteggio.
    </p>

    <button class="bottone" on:click={() => { $attivo = 'InizioProva' }}>Ripeti la prova</button>

    <br><br>
</div>

<style>
    .bottone{
        height: 50px;
        width: 200px;
        color: white;
        background-color: blue;
        font-size: 20px;
        border-radius: 6px;
    }
</style>