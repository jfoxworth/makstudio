$(document).ready(function()	{


	/*---------------------------------------------------

		Things that have to be done on page load

	----------------------------------------------------*/

	// Set CSRF Token
	$.ajaxSetup({
	    headers: {
	        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	    }
	});


	// Hide the success message 
	$('#saveMessageAlert').hide();





	/*---------------------------------------------------

		Amplitude Buttons

	----------------------------------------------------*/


	// When the user sends a message
	$('.designStudioButton').click(function(event)
	{
		amplitude.getInstance().logEvent(event.target.id);
		console.log('Here - '+event.target.id);
		setTimeout(function () 
		{
			window.location.href = "http://www.makstudio.us/designStudio";
		}, 2000);
	});





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
			'subject' : $('#contactSubject').val(),
			'message' : $('#contactMessage').val()
		};

		$('#contactName').val('');
		$('#contactEmail').val('');
		$('#contactPhone').val('');
		$('#contactSubject').val('');
		$('#contactMessage').val('');

		$.ajax({
			url : "/messages",
			method :"POST",
			data :  { 'message' : makContact }

		}).done(function() 
		{
			$( '#messageAlert' ).show( );
			setTimeout(
				function() 
				{
	    			$( '#messageAlert' ).hide( );
				}, 3000);
		});

	});


});
