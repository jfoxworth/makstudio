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


	// Load the build
	retrieveBuild();




	/*---------------------------------------------------

		Things that are responses to actions

	----------------------------------------------------*/

});






/*---------------------------------------------------

	Functions called from main builds page

----------------------------------------------------*/


/*-------------------------------------------*

	Function to retrieve all of the messages

/*-------------------------------------------*/
function retrieveBuild( )
{

	console.log('I am in the retrieve build function');

	var buildNumber = window.location.href.replace("http://www.makstudio.us/buildInfo/","");

	$.ajax({
		url : "/buildData/"+buildNumber,
		method :"GET"

	}).done(function(data) 
	{
		console.log('Build Data is ...');
		console.log(data);

		var buildData = data;
		buildData.build_data = JSON.parse( buildData.build_data );

	});



}