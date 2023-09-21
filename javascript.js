function hacerPeticion () {
	let input = document.getElementById("input");
	let nombrePelicula = input.textContent;

	let espacioDirector = document.getElementById("espacioDirector");
	let espacioAnio = document.getElementById("espacioAnio");

	fetch('https://www.omdbapi.com/?apikey=8441a313&s=' + nombrePelicula + '&plot=full')
		.then(response => {
			return response.json();
				  })
		.then(respuesta => {
			espacioDirector.innerHTML = respuesta['Director'];
			espacioAnio.innerHTML = respuesta['Year'];
		});

	// let respuesta = await fetch('http://www.omdbapi.com/?apikey=8441a313&s=' + nombrePelicula + '&plot=full');
	// let respuestaJson = await respuesta.json();

	// espacioDirector.innerHTML = respuestaJson['Director'];
	// espacioAnio.innerHTML = respuestaJson['Year'];
}

let boton = document.getElementById("boton");
boton.addEventListener('click', hacerPeticion);
