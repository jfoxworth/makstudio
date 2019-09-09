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
		url : "/messages/0",
		method :"GET"

	}).done(function(data) 
	{
		console.log('Messages are ...');
		console.log(data);

		$.each(data, function(index, obj){

			obj.message_data = JSON.parse(obj.message_data);
	        
	        var message = '';

	        message=message+"<div style='width:600px; margin-top:20px;' class='row'><div style='width:150px; font-weight:bold;'>Name : </div>";
	        message=message+"<div style='width:450px'>"+ obj.message_data.name +"</div></div>";

	        message=message+"<div style='width:600px; margin-top:20px;' class='row'><div style='width:150px; font-weight:bold;'>Date Sent : </div>";
	        message=message+"<div style='width:450px'>"+ obj.created_at +"</div></div>";

	        message=message+"<div style='width:600px; margin-top:20px;' class='row'><div style='width:150px; font-weight:bold;'>Phone Number : </div>";
	        message=message+"<div style='width:450px'>"+ obj.message_data.phone +"</div></div>";

	        message=message+"<div style='width:600px; margin-top:20px;' class='row'><div style='width:150px; font-weight:bold;'>email : </div>";
	        message=message+"<div style='width:450px'>"+ obj.message_data.email +"</div></div>";

	        message=message+"<div style='width:600px; margin-top:20px;' class='row'><div style='width:150px; font-weight:bold;'>Subject : </div>";
	        message=message+"<div style='width:450px'>"+ obj.message_data.subject +"</div></div>";

	        message=message+"<div style='width:600px; margin-top:40px; margin-bottom:60px; border-bottom:1px solid #ccc'><td colspan='2' style='width:600px;'>"+obj.message_data.message+"</div></div>";


	        console.log('The message is '+message);


	        $("#messageList").append(message);
	    });

	});

}







function retrieveBuilds( )
{




	$.ajax({
		url : "/allBuilds/0",
		method :"GET"

	}).done(function(data) 
	{
		console.log('Builds are ...');
		console.log(data);

	});

}




