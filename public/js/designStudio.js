$(document).ready(function()	{



	// container for the viewer, typically this is a div
	var _container = document.getElementById('slatWallDisplay'); 
	// viewer settings 
	var  _viewerSettings = { 
		// container to use 
		container: _container, 
		// when creating the viewer, we want to get back an API v2 object 
		api: {version: 2}, 
		// level of log messages which will be sent to the browser console
		loggingLevel: SDVApp.constants.loggingLevels.NONE, 
		// instantly show the 3D scene 
		showSceneMode: SDVApp.constants.showSceneModes.INSTANT, 
		// ticket for a ShapeDiver model 
		ticket: 'f148e1699c609b5fb5852b525235d90a54ffaee5c33a506eb45ed2410475c4c4326c618596aef96cdfd4491434ba1783e0861ca4313e4c78d863831da3194dd13308fbed42064277669c51d5c003ee6bc730bca1dca566d72e023da6e361a7b6886b1a95354c047ca77b7e2902652441aac304-30663162633333332d343531352d3433', 
		modelViewUrl : 'eu-central-1'
	}; 

	// create the viewer, get back an API v2 object 
	var api = new SDVApp.ParametricViewer(_viewerSettings);




	// Initialize all of the tool tips
	$('[data-toggle="tooltip"]').tooltip();
	$(".bt-switch").bootstrapSwitch();
	$('.selectsplitter').selectsplitter();


	// Hide the initial items that need to be hidden
	$("#backlitSection").hide();
	$("#planterSection").hide();
	$("#deskSection").hide(); 
	$("#facetedSection").hide();
	$("#genslerSection").hide();
	$("#panelSection").hide();


	$("#slatDimensions").show();
	$("#slatStyle").hide();
	$("#slatFin").hide();
	$("#slatRipple").hide();
	$("#slatMaterial").hide();
	$("#slatLogo").hide();


	// Hide all of the display areas
	$("#slatWallDisplay").show();
	$("#backlitWallDisplay").hide();
	$("#planterWallDisplay").hide();
	$("#deskDisplay").hide();
	$("#facetedWallDisplay").hide();
	$("#panelWallDisplay").hide();
	$("#genslerWallDisplay").hide();


	// Hide all of the display areas
	$("#backlitDimensions").show();
	$("#backlitLogo").hide();
	$("#backlitHeaders").hide();



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

	$(".finRotationSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 180,
		step: 5
	});

	$(".backlitLengthSlider").ionRangeSlider({
		grid: false,
		min: 72,
		max: 144,
		step: 1
	});

	$(".backlitHeightSlider").ionRangeSlider({
		grid: false,
		min: 72,
		max: 144,
		step: 1
	});

	$(".backlitLogoSlider").ionRangeSlider({
		grid: false,
		min: 7,
		max: 20,
		step: 1
	});

	$(".facetedSpacingSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 10,
		step: 1
	});

	$(".facetedARotSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 360,
		step: 1
	});

	$(".facetedBRotSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 360,
		step: 1
	});

	$(".facetedCRotSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 360,
		step: 1
	});

	$(".facetedDRotSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 360,
		step: 1
	});

	$(".facetedERotSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 360,
		step: 1
	});

	$(".facetedFRotSlider").ionRangeSlider({
		grid: false,
		min: 0,
		max: 360,
		step: 1
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
		$("#planterSection").hide();
		$("#deskSection").hide();
		$("#facetedSection").hide();
		$("#panelSection").hide();
		$("#genslerSection").hide();


		// Hide all of the display areas
		$("#slatWallDisplay").hide();
		$("#backlitWallDisplay").hide();
		$("#planterWallDisplay").hide();
		$("#deskDisplay").hide();
		$("#facetedWallDisplay").hide();
		$("#panelWallDisplay").hide();
		$("#genslerWallDisplay").hide();


		// Display the appropriate options
		if ( designType == "slatWall" ){ 	$("#slatSection").show(); }
		if ( designType == "backlitWall" ){ $("#backlitSection").show(); }
		if ( designType == "planterWall" ){ $("#planterSection").show(); }
		if ( designType == "desk" ){ 		$("#deskSection").show(); }
		if ( designType == "facetedWall" ){ $("#facetedSection").show(); }
		if ( designType == "wallPanel" ){ 	$("#panelSection").show(); }
		if ( designType == "genslerWall" ){ $("#genslerSection").show(); }


		// Display the appropriate title in the design show section
		if ( designType == "slatWall" ){ 	$("#designShow").text('Slat Wall'); }
		if ( designType == "backlitWall" ){ $("#designShow").text('Backlit Wall'); }
		if ( designType == "planterWall" ){ $("#designShow").text('Planter Wall'); }
		if ( designType == "desk" ){ 		$("#designShow").text('Custom Desk'); }
		if ( designType == "facetedWall" ){ $("#designShow").text('Faceted Wall'); }
		if ( designType == "wallPanel" ){ 	$("#designShow").text('Wall Panel'); }
		if ( designType == "genslerWall" ){ $("#designShow").text('Gensler Wall'); }



		// Display the appropriate editing section
		if ( designType == "slatWall" ){ 	$("#slatWallDisplay").show(); }
		if ( designType == "backlitWall" ){ $("#backlitWallDisplay").show(); }
		if ( designType == "planterWall" ){ $("#planterWallDisplay").show(); }
		if ( designType == "desk" ){ 		$("#deskDisplay").show(); }
		if ( designType == "facetedWall" ){ $("#facetedWallDisplay").show(); }
		if ( designType == "wallPanel" ){ 	$("#panelWallDisplay").show(); }
		if ( designType == "genslerWall" ){ $("#genslerWallDisplay").show(); }

	});





	// Slat Wall - When the user changes the type of design they are working on
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







	// Backlit Wall - When the user changes the type of design they are working on
	$('#backlitOptions').change(function()	
	{	

		// Set the value
		var backlitOption = $( "#backlitOptions" ).val();
		console.log('The backlit option is '+backlitOption);
	

		// Hide all of the options
		$("#backlitDimensions").hide();
		$("#backlitLogo").hide();
		$("#backlitHeaders").hide();

		// Display the appropriate options
		$("#"+backlitOption).show(); 


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