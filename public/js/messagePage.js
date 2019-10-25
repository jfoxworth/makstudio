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


		// Show the text for the message selected
		var thisID = $("#"+event.target.id).closest('.messageBlock').attr('id');
		$("#text"+thisID).show();


		// Remove the current item class from all items
		$(".messageBlock").removeClass('currentItem');

		// Add the current item class to selected item
		$("#"+thisID).addClass('currentItem');

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
			
			message=message+"<div id='"+obj.id+"' class='row messageBlock hoverMe greyHover nomargin' style='border-bottom:1px solid #ccc; margin:0px; padding:10px 5px'>";

				message=message+"<div id='name"+obj.id+"' class='col_two_third'>";
					message=message+""+obj.message_data.subject +"<br>"+ obj.message_data.name;
				message=message+"</div>";

				message=message+"<div id='date"+obj.id+"' class='col_one_third col_last'>"+ obj.created_at +"</div>";

			message=message+"</div>";


			messageText = messageText+"<div class='row messageText nomargin' id='text"+obj.id+"'>";
				messageText = messageText+"<h4>"+obj.message_data.subject+"</h4>";
				messageText = messageText+"<div>From : "+obj.message_data.name+"</div>";
				messageText = messageText+"<div>Date : "+obj.created_at+"</div>";
				if (obj.status == 0 ) { messageText = messageText+"<div>Status : Unread</div>"; }
				if (obj.status == 1 ) { messageText = messageText+"<div>Status : Read</div>"; }
				messageText = messageText+"<div style='margin-top:20px'>"+obj.message_data.message+"</div>";
			messageText = messageText+"</div>";

		});

		$("#messageList").append(message);
		$("#messageText").append(messageText);

		$('.messageText').hide();

	});

}








