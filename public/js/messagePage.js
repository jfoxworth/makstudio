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



	// Load the messages
	retrieveMessages();




	/*---------------------------------------------------

		Things that are responses to actions

	----------------------------------------------------*/


	// When the user wants to see the list of models that they have saved
	$(document).on('click', '.messageBlock', function(event)
	{	
		// Hide and display the appropriate items
		$('.messageText').hide();

		var thisID = $("#"+event.target.id).closest('.messageBlock').attr('id');
		console.log('The ID is '+thisID);
		$("#text"+thisID).show();


	});


});






	/*---------------------------------------------------

		Functions called from main admin page

	----------------------------------------------------*/


/*-------------------------------------------*

	Function to retrieve all of the messages

/*-------------------------------------------*/
function retrieveMessages( )
{




	$.ajax({
		url : "/messages/0/0",
		method :"GET"

	}).done(function(data) 
	{
		console.log('Messages are ...');
		console.log(data);

		var message = '';
		var messageText = '';

		$.each(data, function(index, obj){

			obj.message_data = JSON.parse(obj.message_data);
			
			message=message+"<div id='"+obj.id+"' class='row messageBlock hoverMe greyHover' style='border-bottom:1px solid #ccc; margin-bottom:10px; padding:10px 5px'>";

				message=message+"<div id='name"+obj.id+"' class='col_two_third'>";
					message=message+""+obj.message_data.subject +"<br>"+ obj.message_data.name;
				message=message+"</div>";

				message=message+"<div id='date"+obj.id+"' class='col_one_third col_last'>"+ obj.created_at +"</div>";

			message=message+"</div>";


			messageText = messageText+"<div class='row messageText' id='text"+obj.id+"'>";
				messageText = messageText+obj.message_data.message;
			messageText = messageText+"</div>";


			$("#messageList").append(message);
		});

	});

}








