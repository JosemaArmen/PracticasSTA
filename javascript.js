async function hacerPeticion () {
	let input = document.getElementById("input");
	let nombrePelicula = input.textContent;

	let respuesta = await fetch('http://www.omdbapi.com/?apikey=8441a313&s=' + nombrePelicula + '&plot=full');
	let respuestaJson = await respuesta.json();

	let espacioDirector = document.getElementById("espacioDirector");
	let espacioAnio = document.getElementById("espacioAnio");

	await espacioDirector.innerHTML = respuestaJson['Director'];
	await espacioAnio.innerHTML = respuestaJson['Year'];
}

let boton = document.getElementById("boton");
boton.addEventListener('click', hacerPeticion);
