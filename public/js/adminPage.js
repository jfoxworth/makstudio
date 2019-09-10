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

			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Name : </div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.message_data.name +"</div>";
			message=message+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Date : </div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.created_at +"</div>";
			message=message+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Phone : </div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.message_data.phone +"</div>";
			message=message+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Email : </div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.message_data.email +"</div>";
			message=message+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Subject : </div>";
			message=message+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.message_data.subject +"</div>";
			message=message+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";

			message=message+"<div class='col_one_fourth' style='margin-bottom:10px; margin-top:20px'></div>";
			message=message+"<div class='col_two_fourth' style='border-bottom:1px solid #ccc'>"+obj.message_data.message+"</div>";
			message=message+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


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


		$.each(data, function(index, obj){

			obj.build_data = JSON.parse(obj.build_data);
			
			var builds = '';

			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Build Type : </div>";
			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.build_id +"</div>";
			builds=builds+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px'></div>";
			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Name : </div>";
			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.created_at +"</div>";
			builds=builds+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";


			builds=builds+"<div class='col_one_fourth' style='margin-bottom:40px'></div>";
			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px; font-weight:bold;'>Name : </div>";
			builds=builds+"<div class='col_one_fourth' style='margin-bottom:10px'>"+ obj.build_data.name +"</div>";
			builds=builds+"<div class='col_one_fourth col_last' style='margin-bottom:10px'></div>";



			$("#buildList").append(builds);
		});



	});

}




