function hacerPeticion2 () {
	$.ajax({	
		headers:{  
			"key":"8441a313",
			"Accept":"application/json",
			"Content-type":"application/x-www-form-urlencoded"
		},
		url:'http://www.omdbapi.com/?apikey=8441a313&s=' + nombrePelicula + '&plot=full',
		success:function(response){
			var r=JSON.parse(response);
		}
	});

	return var;
}

function hacerPeticion () {
	let input = document.getElementById("input");
	let nombrePelicula = input.textContent;

	// let respuesta = await fetch('http://www.omdbapi.com/?apikey=8441a313&s=' + nombrePelicula + '&plot=full');
	// let respuestaJson = await respuesta.json();

	respuestaJson = hacerPeticion2();

	let espacioDirector = document.getElementById("espacioDirector");
	let espacioAnio = document.getElementById("espacioAnio");

	espacioDirector.innerHTML = respuestaJson['Director'];
	espacioAnio.innerHTML = respuestaJson['Year'];
}

let boton = document.getElementById("boton");
boton.addEventListener('click', hacerPeticion);