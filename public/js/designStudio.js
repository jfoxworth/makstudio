$(document).ready(function()	{


	// Initial variables for selections
	var designType = "slatWall";					// The item currently being designed in the studio window





	// Set up the sliders to be formatted
	$(".slatWallHeightSlider").ionRangeSlider({
		grid: false,
		min: 48,
		max: 320,
		step: 1
	});

	$(".slatWallWidthSlider").ionRangeSlider({
		grid: false,
		min: 30,
		max: 540,
		step: 1
	});

	$(".slatWallDepthSlider").ionRangeSlider({
		grid: false,
		min: 3,
		max: 8,
		step: 1
	});







	// When the user changes the type of design they are working on
	$('#designType').change(function()	
	{	

		// Set the value
		var designType = $( "#designType" ).val();
		console.log('The value is '+designType);
	

		// Hide all of the options
		$("#slatOptions").hide();
		$("#backlitOptions").hide();



		// Display the appropriate options
		if ( designType == "slatWall" ){ $("#slatSection").show(); }
		if ( designType == "backlitWall" ){ $("#backlitSection").show(); }
		if ( designType == "planterWall" ){ $("#planterSection").show(); }
		if ( designType == "desk" ){ $("#deskSection").show(); }
		if ( designType == "facetedWall" ){ $("#facetedSection").show(); }
		if ( designType == "gensler" ){ $("#genslerSection").show(); }



	});


});



function transferEmp(postData)  {
	$.ajax({
		url: url,
		type: 'POST',
		data: postData,
		success: function(msg){
			   //alert(msg);
		}
	});

}