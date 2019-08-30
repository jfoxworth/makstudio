$(document).ready(function()	{



	// container for the bench viewer
	var _bench_container = document.getElementById('benchDisplay'); 
	// viewer settings 
	var  _bench_viewerSettings = { 
		// container to use 
		container: _bench_container, 
		// when creating the viewer, we want to get back an API v2 object 
		api: {version: 2}, 
		// level of log messages which will be sent to the browser console
		loggingLevel: SDVApp.constants.loggingLevels.NONE, 
		// instantly show the 3D scene 
		showSceneMode: SDVApp.constants.showSceneModes.INSTANT, 
		// ticket for a ShapeDiver model 
		ticket: '4a0592f5cc546eb466ff9edb9d19b5b5d73602211efc55c4db9c040a3f7a343f37f7fd25a30c376ffc67bb9494b5776db2ebe599bd7e8611e12f89074d712135fdfa9cd8d48610f30cc8199e39dc0d576d7a123bc39d16553d42b9a2a04365c0cf875efb5587a3e8b9ca1fa7794ec6940d8e376ed290-052484b3075f24e3a7a0fd885fafb80b', 
		modelViewUrl : 'eu-central-1'
	}; 


	// create the viewer, get back an API v2 object 
	var bench_api = new SDVApp.ParametricViewer(_bench_viewerSettings);






	// container for the fin wall viewer
	var _fin_wall_container = document.getElementById('slatWallDisplay'); 
	// viewer settings 
	var  _fin_wall_viewerSettings = { 
		// container to use 
		container: _fin_wall_container, 
		// when creating the viewer, we want to get back an API v2 object 
		api: {version: 2}, 
		// level of log messages which will be sent to the browser console
		loggingLevel: SDVApp.constants.loggingLevels.NONE, 
		// instantly show the 3D scene 
		showSceneMode: SDVApp.constants.showSceneModes.INSTANT, 
		// ticket for a ShapeDiver model 
		ticket: '7cdc64cb2f68a52b77f0b1b14985e7679f11c08cb1653c5fd5492f14f46ed1cd5273531cbaff8b006a9ed039bbfbff6c59945500d7546b51e1eeaff87561b105d18fc30395aad0c7e827d763bfa9705da0ee337a4b4b729324ca67764ad30f2140ab8b701115e3f88d4dc2f120b1903d34b48ec50820-27dc55c7419201c14a944b5f738e9cc4', 
		modelViewUrl : 'eu-central-1'
	}; 

	// create the viewer, get back an API v2 object 
	var fin_wall_api = new SDVApp.ParametricViewer(_fin_wall_viewerSettings);








	$('#benchCameraCenter').click(function(event)	
	{	
		bench_api.scene.camera.zoomAsync();

	});

	$('#slatCameraCenter').click(function(event)	
	{	
		fin_wall_api.scene.camera.zoomAsync();

	});



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
	$("#slatWallSection").hide();
	$("#benchSection").show();


	$("#slatDimensions").show();
	$("#slatStyle").hide();
	$("#slatFin").hide();
	$("#slatRipple").hide();
	$("#slatMaterial").hide();
	$("#slatLogo").hide();


	// Hide all of the display areas
	$("#benchDisplay").show();
	$("#backlitWallDisplay").hide();
	$("#planterWallDisplay").hide();
	$("#deskDisplay").hide();
	$("#facetedWallDisplay").hide();
	$("#panelWallDisplay").hide();
	$("#genslerWallDisplay").hide();
	$("#slatWallDisplay").hide();


	// Hide all of the display areas
	$("#backlitDimensions").show();
	$("#backlitLogo").hide();
	$("#backlitHeaders").hide();



	// Initial variables for selections
	var designType = "bench";					// The item currently being designed in the studio window





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


	$(".benchDepthSlider").ionRangeSlider({
		grid: false,
		min: 24,
		max: 48,
		step: 1
	});

	$(".benchHeightSlider").ionRangeSlider({
		grid: false,
		min: 24,
		max: 48,
		step: 1
	});

	$(".benchTwistSlider").ionRangeSlider({
		grid: false,
		min: 1,
		max: 8,
		step: 1
	});

	$(".benchLeftSeatSlider").ionRangeSlider({
		grid: false,
		min: 1,
		max: 6,
		step: 1
	});

	$(".benchRightSeatSlider").ionRangeSlider({
		grid: false,
		min: 1,
		max: 6,
		step: 1
	});





	// When the user clicks on one of the design type boxes
	$('.designType').click(function(event)	
	{	

		// Set the value
		var designType = event.target.id;
		console.log('The value is '+designType);
	

		// Hide all of the options
		$("#slatWallSection").hide();
		$("#backlitSection").hide();
		$("#planterSection").hide();
		$("#deskSection").hide();
		$("#facetedSection").hide();
		$("#panelSection").hide();
		$("#genslerSection").hide();
		$("#benchSection").hide();


		// Hide all of the display areas
		$("#slatWallDisplay").hide();
		$("#backlitWallDisplay").hide();
		$("#planterWallDisplay").hide();
		$("#deskDisplay").hide();
		$("#facetedWallDisplay").hide();
		$("#panelWallDisplay").hide();
		$("#genslerWallDisplay").hide();
		$("#benchDisplay").hide();


		// Display the appropriate options
		if ( designType == "slatWall" ){ 	$("#slatWallSection").show(); }
		if ( designType == "backlitWall" ){ $("#backlitSection").show(); }
		if ( designType == "planterWall" ){ $("#planterSection").show(); }
		if ( designType == "desk" ){ 		$("#deskSection").show(); }
		if ( designType == "facetedWall" ){ $("#facetedSection").show(); }
		if ( designType == "wallPanel" ){ 	$("#panelSection").show(); }
		if ( designType == "genslerWall" ){ $("#genslerSection").show(); }
		if ( designType == "bench" ){ 		$("#benchSection").show(); }


		// Display the appropriate title in the design show section
		if ( designType == "slatWall" ){ 	$("#designShow").text('Slat Wall'); }
		if ( designType == "backlitWall" ){ $("#designShow").text('Backlit Wall'); }
		if ( designType == "planterWall" ){ $("#designShow").text('Planter Wall'); }
		if ( designType == "desk" ){ 		$("#designShow").text('Custom Desk'); }
		if ( designType == "facetedWall" ){ $("#designShow").text('Faceted Wall'); }
		if ( designType == "wallPanel" ){ 	$("#designShow").text('Wall Panel'); }
		if ( designType == "genslerWall" ){ $("#designShow").text('Gensler Wall'); }
		if ( designType == "bench" ){ 		$("#designShow").text('Planter bench'); }



		// Display the appropriate editing section
		if ( designType == "slatWall" ){ 	$("#slatWallDisplay").show(); }
		if ( designType == "backlitWall" ){ $("#backlitWallDisplay").show(); }
		if ( designType == "planterWall" ){ $("#planterWallDisplay").show(); }
		if ( designType == "desk" ){ 		$("#deskDisplay").show(); }
		if ( designType == "facetedWall" ){ $("#facetedWallDisplay").show(); }
		if ( designType == "wallPanel" ){ 	$("#panelWallDisplay").show(); }
		if ( designType == "genslerWall" ){ $("#genslerWallDisplay").show(); }
		if ( designType == "bench" ){ 		$("#benchDisplay").show(); }




		if ( designType == "slatWall" )
		{

			fin_wall_api.scene.camera.zoomAsync();
		}


		if ( designType == "bench" )
		{

			bench_api.scene.camera.zoomAsync();

		}



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












	/* -------------------------------------- *

	          API Calls for the Bench

	/* ---------------------------------------*/
	$('#benchDepthSlider').change(function()	
	{	
		bench_api.parameters.updateAsync({name: "Bench Depth", value: $('#benchDepthSlider').val() });	
	});


	$('#benchHeightSlider').change(function()	
	{			
		bench_api.parameters.updateAsync({name: "Bench Height", value: $('#benchHeightSlider').val() });
	});


	$('#benchTwistSlider').change(function()	
	{			
		bench_api.parameters.updateAsync({name: "Twist Length", value: $('#benchTwistSlider').val() });
	});

	$('#benchLeftSeatSlider').change(function()	
	{			
		bench_api.parameters.updateAsync({name: "Left Seating Length", value: $('#benchLeftSeatSlider').val() });
	});

	$('#benchRightSeatSlider').change(function()	
	{			
		bench_api.parameters.updateAsync({name: "Right Seating Length", value: $('#benchRightSeatSlider').val() });
	});

	$('#leftPlanterLength').change(function()	
	{	
		console.log('Here1');		
		bench_api.parameters.updateAsync({name: "Left Planter", value: $('#leftPlanterLength').val() });
	});

	$('#rightPlanterLength').change(function()	
	{			
		console.log('Here2');		
		bench_api.parameters.updateAsync({name: "Right Planter", value: $('#rightPlanterLength').val() });
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