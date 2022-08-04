import { writable } from "svelte/store";

export const attivo = writable("InizioProva");

export const risultatoFinale = writable([]);

export const nome = writable("");