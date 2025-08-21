



Swal.fire({
	// title:'Reserva el Día',
	//text: '',
	html:'<p class="textos-alert-inicio">Axel Hernández Vázquez y Daniela Ortega Avila</p><br><p class="textos-alert-inicio-T3">Tenemos el honor de invitar a usted y a su apreciable familia al Bautizo y 1° Aniversario de nuestra hija:</p><br><p class="textos-alert-inicio-T2">Romina Hernández Ortega</p></div>',
	//icon:'success'
	confirmButtonText:'Abrir Invitación',
	confirmButtonColor: "#F893FF",
	footer:'Te Esperamos, No Faltes!',
	width:'100%',
	allowOutsideClick: false,
	background: 'url(img/inicio.jpg)',
	
	// background:'rgba(0,0,123,0.4)'
	// imageUrl: 'https://unsplash.it/400/200',

	
}).then((result)=>{
	if(result.isConfirmed){
		
		musica=true;
		audio.play();
		$('.volumen').attr("src","img/no-sound.png");
		$('div').removeClass('visible')
		
		$( "#onload" ).fadeOut(2000);
		$("body").removeClass("hidden");


	}

});



$('#ceremonia').click(function () {
	Swal.fire({
		title:'Ubicación de la Ceremonia Religiosa ',
		//text: '',
	
		html:'<p>Calle Corregidora S/N Barrio Santa Bárbara Atlatlahuacan Morelos</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8892833166683!2d-98.90060997479812!3d18.936294182239724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6b0de9bdd429%3A0xbe8e5fd6570834af!2sSede%20Parroquial%20San%20Mateo!5e0!3m2!1ses-419!2smx!4v1755625965487!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
	});
	


$('#recepcion').click(function () {
	Swal.fire({
		title:'Ubicación de la Recepción ',
		//text: '',
	
		html:'<p>Calle Galeana S/N Barrio Santo Tomas, Atlatlahuacan Morelos</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.798688264861!2d-98.90176922479799!3d18.940302782236483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6b125a3416d5%3A0xa4ec79737b308fd7!2sSalon%20%22El%20Mega%22!5e0!3m2!1ses-419!2smx!4v1755625760746!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
	});
	
	$('#liverpool').click(function () {
		Swal.fire({
			title:'Mesa de regalos Liverpool',
			//text: '',
		
			html:'<p>Número de Evento: 12345678<p/><br> <a href="https://mesaderegalos.liverpool.com.mx/eventodebusqueda" target="_blank"> Ir a Liverpool</a>',
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
			
				html:'<p>Cuenta BBVA<p/><p>Nombre: Nombre de Cuenta<p/><br>Clabe: 0101234567891011',
				//icon:'success'
				confirmButtonText:'Cerrar',
				confirmButtonColor: "#917c07f1",
				//footer:'Parroquia de Dulce Nombre de Jesus ',
			
			});
	});
		
	
