async function hacerPeticion () {
	let input = document.getElementById("input");
	let nombrePelicula = input.value;

	//let respuesta = await fetch('https://www.omdbapi.com/?apikey=8441a313&t=' + nombrePelicula + '&plot=full');
	
	let respuesta = await fetch(`https://www.omdbapi.com/?apikey=8441a313&t=${nombrePelicula}&plot=full`);
	
	let respuestaJson = respuesta.json();

	let espacioDirector = document.getElementById("espacioDirector");
	let espacioAnio = document.getElementById("espacioAnio");

	espacioDirector.innerHTML = respuestaJson['Director'];
	espacioAnio.innerHTML = respuestaJson['Year'];
}

let boton = document.getElementById("boton");
boton.addEventListener('click', hacerPeticion);
