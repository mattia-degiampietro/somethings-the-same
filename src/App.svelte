<script>
	import { attivo } from "./stores/stores.js";

	import InizioProva from "./components/InizioProva.svelte";
	import Prova from "./components/Prova.svelte";
	import Invalido from "./components/Invalido.svelte";
	import InizioTest from "./components/InizioTest.svelte";
	import Test from "./components/Test.svelte";
	import Risultato from "./components/Risultato.svelte";
	import Trials from "./components/Trials.svelte";

</script>

<main>

	{#if $attivo === 'InizioProva'}

		<InizioProva  />

	{:else if $attivo === 'Prova'}

		<Prova />

	{:else if $attivo === 'Invalido'}

		<Invalido />

	{:else if $attivo === 'InizioTest'}

		<InizioTest />

	{:else if $attivo === 'Test'}

		<Test />

	{:else if $attivo === 'Risultato'}

		<Risultato />

	{/if}

	<!-- <p style="color: gray">(i bordi dei componenti sono temporaneamente grigi per comodità nel controllo della correttezza del codice)</p> -->
</main>

<style>
	
</style>