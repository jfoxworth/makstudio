$(document).ready(function()	{



	// When the user sends a message
	$('#contactSubmit').change(function(event)	
	{	

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
			url : "/messages/",
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
