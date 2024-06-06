



Swal.fire({
	// title:'Reserva el Día',
	//text: '',
	html:'<p class="textos-alert-inicio">Claudia Ventura Reyes <br> y<br> J. Alejandro Ensástigue Velazquez</p><br><p class="textos-alert-inicio-T3">Tenemos el honor de invitar a usted y a su apreciable familia a la presentación de nuestra hija:</p><br><p class="textos-alert-inicio-T2">Camila Alejandra Ensástigue Ventura</p></div>',
	//icon:'success'
	confirmButtonText:'Abrir Invitación',
	confirmButtonColor: "#917c07f1",
	footer:'Te Esperamos, No Faltes!',
	width:'100%',
	allowOutsideClick: false,
	// background: '#fff url(img/indx.jpg)',
	
	// background:'rgba(0,0,123,0.4)'
	// imageUrl: 'https://unsplash.it/400/200',

	
}).then((result)=>{
	if(result.isConfirmed){
		
		musica=true;
		audio.play();
		$('.volumen').attr("src","img/no-sound.png");
		$('div').removeClass('visible')
	


	}

});



$('#ceremonia').click(function () {
Swal.fire({
	title:'Ubicación de la Ceremonía ',
	//text: '',
	html:'<p>Parroquia de Santiago Apóstol<br></p><div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.1941640015138!2d-98.80220109683962!3d19.12724234856114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3d0595581a85%3A0xcf1880778e1751fb!2sParroquia%20de%20Santiago%20Ap%C3%B3stol!5e0!3m2!1ses!2smx!4v1717546539082!5m2!1ses!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
	//icon:'success'
	confirmButtonText:'Cerrar',
	confirmButtonColor: "#917c07f1",
	//footer:'Parroquia de Dulce Nombre de Jesus ',

});
});

$('#recepcion').click(function () {
	Swal.fire({
		title:'Ubicación de la Recepción ',
		//text: '',
	
		html:'<p>Calle El arenal sin número, barrio La Capilla, Ayapango Estado de México </p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.1966075558137!2d-98.79471324825357!3d19.126385591001803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1717548108899!5m2!1ses!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		confirmButtonColor: "#917c07f1",
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
});
	

$('#transferencia').click(function () {
		Swal.fire({
			title:'Datos para Transferencia',
			//text: '',
		
			html:'<p>Cuenta BBVA<p/><br>Clabe: 9999999999',
			//icon:'success'
			confirmButtonText:'Cerrar',
			confirmButtonColor: "#e74bb8",
			//footer:'Parroquia de Dulce Nombre de Jesus ',
		
		});
});
	







