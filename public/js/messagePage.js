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


	// Load the build
	retrieveBuilds();




	/*---------------------------------------------------

		Things that are responses to actions

	----------------------------------------------------*/

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

		$.each(data, function(index, obj){

			obj.message_data = JSON.parse(obj.message_data);
			

			message=message+"<div class='row' style='border-bottom:1px solid #ccc; margin-bottom:10px; padding:10px 5px'>";

				message=message+"<div class='col_two_third'>";
					message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.message_data.subject +"<br>"+ obj.message_data.name +"</div>";
				message=message+"</div>";

				message=message+"<div class='col_one_third col_last'>";
					message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.created_at +"</div>";
				message=message+"</div>";

			message=message+"</div>";


			$("#messageList").append(message);
		});

	});

}








