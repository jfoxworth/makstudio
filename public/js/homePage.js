$(document).ready(function()	{


	/*---------------------------------------------------

		Things that have to be done on page load

	----------------------------------------------------*/


	// Hide the success message 
	$('#saveMessageAlert').hide();





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
