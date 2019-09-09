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

			obj.message_data = json.parse(obj.message_data);
	        
	        var tr = '';

	        tr.append("<tr style='width:600px'><td style='width:150px; font-weight:bold;'>Name : </td>");
	        tr.append("<td style='width:450px'>"+ obj.message_data.name +"</td></tr>");

	        tr.append("<tr style='width:600px'><td style='width:150px; font-weight:bold;'>Date Sent : </td>");
	        tr.append("<td style='width:450px'>"+ obj.created_at +"</td></tr>");

	        tr.append("<tr style='width:600px'><td style='width:150px; font-weight:bold;'>Phone Number : </td>");
	        tr.append("<td style='width:450px'>"+ obj.message_data.phone +"</td></tr>");

	        tr.append("<tr style='width:600px'><td style='width:150px; font-weight:bold;'>email : </td>");
	        tr.append("<td style='width:450px'>"+ obj.message_data.email +"</td></tr>");

	        tr.append("<tr style='width:600px'><td style='width:150px; font-weight:bold;'>Subject : </td>");
	        tr.append("<td style='width:450px'>"+ obj.message_data.subject +"</td></tr>");

	        tr.append("<tr style='width:600px'><td style='width:150px; font-weight:bold;'>Name : </td>");
	        tr.append("<td style='width:450px'>"+ obj.message_data.name +"</td></tr>");

	        tr.append("<tr style='width:600px'><td colspan='2' style='width:600px;'>"+obj.message_data.message+"</td></tr>");


	        $("#messageList").append(tr);
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




