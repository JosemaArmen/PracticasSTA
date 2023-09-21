function hacerPeticion () {
	let input = document.getElementById("input");
	let nombrePelicula = input.value;

	console.log(nombrePelicula);

	let espacioDirector = document.getElementById("espacioDirector");
	let espacioAnio = document.getElementById("espacioAnio");

	fetch('https://www.omdbapi.com/?apikey=8441a313&t=' + nombrePelicula + '&plot=full')
		.then(response => {
			return response.json();
				  })
		.then(respuesta => {
			espacioDirector.innerHTML = respuesta['Director'];
			espacioAnio.innerHTML = respuesta['Year'];
		});
}

let boton = document.getElementById("boton");
boton.addEventListener('click', hacerPeticion);
