document.addEventListener("DOMContentLoaded", function() {

	var selectComunas = document.getElementById("selectComunas");

	selectComunas.addEventListener("change", function() {

		listarFarmaciasTurno(selectComunas.value);

	});

	poblarSelectComunas();

});

function listarFarmaciasTurno(comunaSeleccionada) {

	$.ajax({
		type : "GET",
		url : "http://localhost:8080/listarfarmaciasturno/"
				+ comunaSeleccionada,
		contentType : "text/html",
		dataType : "json",
		success : function(data) {

			agregarComunasAVista(data);

		},
		error : function(xhr, textStatus, errorThrown) {

			console.log("status: " + xhr.status + ", textStatus:" + textStatus
					+ " responseText: " + xhr.responseText);

		}
	});

}

function poblarSelectComunas() {

	$.ajax({
		type : "GET",
		url : "http://localhost:8080/listarcomunasporregion/7",
		contentType : "text/html",
		success : function(data) {

			document.getElementById("selectComunas").innerHTML = data;

		},
		error : function(xhr, textStatus, errorThrown) {

			console.log("status: " + xhr.status + ", textStatus:" + textStatus
					+ " responseText: " + xhr.responseText);

		}
	});

}

function agregarComunasAVista(data) {

	var htmlFarmaciasTurno = "";

	var htmlNombreAtributoInicio = "<div class='col-sm-12 col-md-3'><b>";

	var htmlNombreAtributoFin = "</b></div>";

	var htmlValorAtributoInicio = "<div class='col-sm-12 col-md-8'>";

	var htmlValorAtributoFin = "</div>";

	for (var i = 0; i < data.length; i++) {

		htmlFarmaciasTurno += "<br>";

		htmlFarmaciasTurno += "<div class='row'>";

		htmlFarmaciasTurno += "<div class='col-md-12 col-lg-6'><b><u>"
				+ data[i].local_nombre + "</u></b></div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<br>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Fecha: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].fecha
				+ htmlValorAtributoFin;

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Comuna: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].comuna_nombre
				+ "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Localidad: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio
				+ data[i].localidad_nombre + "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Direcion: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].local_direccion
				+ "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Hora apertura: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio
				+ data[i].funcionamiento_hora_apertura + "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Hora cierre: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio
				+ data[i].funcionamiento_hora_cierre + "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Teléfono: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].local_telefono
				+ "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Latitud: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].local_lat
				+ "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Longitud: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].local_lng
				+ "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<div class='row atrubuto'>";

		htmlFarmaciasTurno += htmlNombreAtributoInicio + "Longitud: "
				+ htmlNombreAtributoFin;

		htmlFarmaciasTurno += htmlValorAtributoInicio + data[i].local_lng
				+ "</div>";

		htmlFarmaciasTurno += "</div>";

		htmlFarmaciasTurno += "<br>";

	}

	document.getElementById("divFarmacias").innerHTML = htmlFarmaciasTurno;

}