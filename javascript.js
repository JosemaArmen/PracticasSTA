async function hacerPeticion () {
	let input = document.getElementById("input");
	let nombrePelicula = input.textContent;

	let respuesta = await fetch('http://www.omdbapi.com/?apikey=8441a313&s=' + nombrePelicula + '&plot=full');
	let respuestaJson = await respuesta.json();

	let espacioDirector = document.getElementById("espacioDirector");
	let espacioAnio = document.getElementById("espacioAnio");

	espacioDirector.innerHTML = await respuestaJson['Director'];
	espacioAnio.innerHTML = await respuestaJson['Year'];
}

let boton = document.getElementById("boton");
boton.addEventListener('click', hacerPeticion);
