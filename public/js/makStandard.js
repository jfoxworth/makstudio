$(document).ready(function()	{


	// Set the current menu item
	setMenu();



	// Set CSRF Token
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});




	// Log an amplitude hit on this page
	amplitude.getInstance().logEvent(  );





	/*---------------------------------------------------

		Things that are responses to actions

	----------------------------------------------------*/


	// When the user sends a message
	$('#contactSubmit').click(function(event)
	{	

		console.log('Contact button clicked');

		makContact = {
			'name' : $('#contactName').val(),
			'email' : $('#contactEmail').val(),
			'phone' : $('#contactPhone').val(),
			'message' : $('#contactMessage').val()
		};

		$('#contactName').val('');
		$('#contactEmail').val('');
		$('#contactPhone').val('');
		$('#contactMessage').val('');

		$.ajax({
			url : "/messages",
			method :"POST",
			data :  { 'message' : makContact }

		}).done(function() 
		{
			/*
			$( '#messageContact' ).show( );
			setTimeout(
				function() 
				{
	    			$( '#messageContact' ).hide( );
				}, 3000);
			*/

		});

	});






});

function setMenu( )  
{

	$('.navOption').removeClass('currentNav');

	if ( window.location.pathname == "/ourWork" ){ $('#workOption').addClass('currentNav'); }
	if ( window.location.pathname == "/products" ){ $('#productOption').addClass('currentNav'); }
	if ( window.location.pathname == "/services" ){ $('#servicesOption').addClass('currentNav'); }
	if ( window.location.pathname == "/aboutUs" ){ $('#aboutOption').addClass('currentNav'); }
	if ( window.location.pathname == "/contact" ){ $('#contactOption').addClass('currentNav'); }

}



