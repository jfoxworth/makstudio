$(document).ready(function()	{


	// Initialize all of the tool tips
	$('[data-toggle="tooltip"]').tooltip();



	// Hide the initial items that need to be hidden
	$("#backlitSection").hide();
	$("#planterSection").hide();
	$("#deskSection").hide(); 
	$("#facetedSection").hide();
	$("#genslerSection").hide();


	$("#slatDimensions").show();
	$("#slatStyle").hide();
	$("#slatFin").hide();
	$("#slatRipple").hide();
	$("#slatMaterial").hide();
	$("#slatLogo").hide();



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

	$(".rippleXSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 100,
		step: 1
	});

	$(".rippleYSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 100,
		step: 1
	});

	$(".rippleIntensitySlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 4,
		step: 1
	});

	$(".rippleRoughnessSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 2,
		step: 1
	});

	$(".finSpacingSlider").ionRangeSlider({
		grid: false,
		min: 3,
		max: 10,
		step: 1
	});

	$(".rippleRotationSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 180,
		step: 5
	});




	// When the user clicks on one of the design type boxes
	$('.designType').click(function(event)	
	{	

		// Set the value
		var designType = event.target.id;
		console.log('The value is '+designType);
	

		// Hide all of the options
		$("#slatSection").hide();
		$("#backlitSection").hide();



		// Display the appropriate options
		if ( designType == "slatWall" ){ $("#slatSection").show(); }
		if ( designType == "backlitWall" ){ $("#backlitSection").show(); }
		if ( designType == "planterWall" ){ $("#planterSection").show(); }
		if ( designType == "desk" ){ $("#deskSection").show(); }
		if ( designType == "facetedWall" ){ $("#facetedSection").show(); }
		if ( designType == "gensler" ){ $("#genslerSection").show(); }


		// Display the appropriate title in the design show section
		if ( designType == "slatWall" ){ 	$("#designShow").text('Slat Wall'); }
		if ( designType == "backlitWall" ){ $("#designShow").text('Backlit Wall'); }
		if ( designType == "planterWall" ){ $("#designShow").text('Planter Wall'); }
		if ( designType == "desk" ){ 		$("#designShow").text('Custom Desk'); }
		if ( designType == "facetedWall" ){ $("#designShow").text('Faceted Wall'); }
		if ( designType == "gensler" ){ 	$("#designShow").text('Gensler Wall'); }
	});





	// When the user changes the type of design they are working on
	$('#slatOptions').change(function()	
	{	

		// Set the value
		var slatOption = $( "#slatOptions" ).val();
		console.log('The slat option is '+slatOption);
	

		// Hide all of the options
		$("#slatDimensions").hide();
		$("#slatStyle").hide();
		$("#slatFin").hide();
		$("#slatRipple").hide();
		$("#slatMaterial").hide();
		$("#slatLogo").hide();

		// Display the appropriate options
		$("#"+slatOption).show(); 


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