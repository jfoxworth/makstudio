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

			message=message+"<div class='col_one_fourth'></div>";
			message=message+"<div class='col_one_fourth' style='font-weight:bold;'>Name : </div>";
			message=message+"<div class='col_one_fourth'>"+ obj.message_data.name +"</div>";
			message=message+"<div class='col_one_fourth col_last'></div>";


			message=message+"<div class='col_one_fourth'></div>";
			message=message+"<div class='col_one_fourth' style='font-weight:bold;'>Date : </div>";
			message=message+"<div class='col_one_fourth'>"+ obj.created_at +"</div></div>";
			message=message+"<div class='col_one_fourth col_last'></div>";


			message=message+"<div class='col_one_fourth'></div>";
			message=message+"<div class='col_one_fourth' style='font-weight:bold;'>Phone : </div>";
			message=message+"<div class='col_one_fourth'>"+ obj.message_data.phone +"</div></div>";
			message=message+"<div class='col_one_fourth col_last'></div>";


			message=message+"<div class='col_one_fourth'></div>";
			message=message+"<div class='col_one_fourth' style='font-weight:bold;'>Email : </div>";
			message=message+"<div class='col_two_fourth'>"+ obj.message_data.email +"</div></div>";
			message=message+"<div class='col_one_fourth col_last'></div>";


			message=message+"<div class='col_one_fourth'></div>";
			message=message+"<div class='col_one_fourth' style='font-weight:bold;'>Subject : </div>";
			message=message+"<div class='col_two_fourth'>"+ obj.message_data.subject +"</div></div>";
			message=message+"<div class='col_one_fourth col_last'></div>";

			message=message+"<div class='col_full' style='border-bottom:1px solid #ccc'>"+obj.message_data.message+"</div></div>";


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

			builds=builds+"<div class='col_one_fourth'></div>";
			builds=builds+"<div class='col_one_fourth' style='font-weight:bold;'>Build Type : </div>";
			builds=builds+"<div class='col_two_fourth'>"+ obj.build_id +"</div></div>";
			builds=builds+"<div class='col_one_fourth col_last'></div>";


			builds=builds+"<div class='col_one_fourth'></div>";
			builds=builds+"<div class='col_one_fourth' style='font-weight:bold;'>Name : </div>";
			builds=builds+"<div class='col_one_fourth'>"+ obj.created_at +"</div></div>";
			builds=builds+"<div class='col_one_fourth col_last'></div>";


			builds=builds+"<div class='col_one_fourth'></div>";
			builds=builds+"<div class='col_one_fourth' style='font-weight:bold;'>Name : </div>";
			builds=builds+"<div class='col_two_fourth'>"+ obj.build_data.name +"</div></div>";
			builds=builds+"<div class='col_one_fourth col_last'></div>";



			$("#buildList").append(builds);
		});



	});

}




