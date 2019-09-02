$(document).ready(function()	{



	/*-----------------------------------------------------

		This section calls the initial functions that
		need to be done when the page loads. The data
		for the models is loaded, bootstrap components
		are initilized, views are hidden, and the
		default model is created from shapediver

	/*----------------------------------------------------*/



	// Initialize all of the tool tips
	$('[data-toggle="tooltip"]').tooltip();
	$(".bt-switch").bootstrapSwitch();
	$('.selectsplitter').selectsplitter();


	// Initialize data to global variable
	makStudio = initializeData();
	

	// Setup the initial model that the viewer will see
	initializeModel('bench');


	// Set the page to display the default model
	setModelView('bench');


	window['designType'] = 'bench';







	/*-------------------------------------------------------------

		This is the bulk of the code. It handles the responses
		to users clicking on or changing things on the front
		end. This could be sliders, buttons, etc

	/*-------------------------------------------------------------*/


	$('#benchCameraCenter').click(function(event)	
	{	
		_bench_api.scene.camera.zoomAsync();

	});

	$('#slatCameraCenter').click(function(event)	
	{	
		_fin_wall_api.scene.camera.zoomAsync();

	});














	// When the user clicks on one of the design type boxes
	$('.designType').click(function(event)	
	{	
		designType = event.target.id;

		// Delete old models
		for (thisComponent in makStudio.containerNames )
		{
			document.getElementById(makStudio.containerNames[thisComponent] ).innerHTML='';
		}

		initializeModel( event.target.id )  

		setModelView(event.target.id);

		$('.designType').removeClass('currentItem');

		$('#'+event.target.id).parent().addClass('currentItem');

	});





	// Slat Wall - When the user changes the type of design they are working on
	$('.parameterSelect').click(function(event)	
	{	
		// Hide all of the options
		$(".parameterSet").hide();

		// Display the appropriate options
		var elementToShow = event.target.id.replace('Button','');
		$("#"+elementToShow).show(); 


	});















	/* -------------------------------------- *

	          API Calls

	/* ---------------------------------------*/

	$('#finStyleCurved').click(function()	
	{			
		_fin_wall_api.parameters.updateAsync({name: "Panels Type", value: 0 });
	});

	$('#finStyleAngled').click(function()
	{			
		_fin_wall_api.parameters.updateAsync({name: "Panels Type", value: 1 });
	});


	$('#finMaterialBirch').click(function()
	{			
		_fin_wall_api.parameters.updateAsync({name: "Material", value: 0 });
	});

	$('#finMaterialLamBirch').click(function()
	{			
		_fin_wall_api.parameters.updateAsync({name: "Material", value: 1 });
	});


	$('#finMaterialMDF').click(function()
	{			
		_fin_wall_api.parameters.updateAsync({name: "Material", value: 2 });
	});






	$('.modelSlider, .modelDropdown').change(function(event)	
	{	

		for (thisComponent in makStudio.componentNames[designType])
		{
			if ( event.target.id == makStudio.componentNames[designType][thisComponent] )
			{
				var paramName = thisComponent;
			}
		}


		if ( designType == 'bench' )
		{
			_bench_api.parameters.updateAsync({name: paramName, value: $('#'+event.target.id).val() });
		}

		if ( designType == 'finWall' )
		{
			_fin_wall_api.parameters.updateAsync({name: paramName, value: $('#'+event.target.id).val() });
		}

		if ( designType == 'backlit' )
		{
			_backlit_api.parameters.updateAsync({name: paramName, value: $('#'+event.target.id).val() });
		}

	});








	$('.modelSwitch').on('switchChange.bootstrapSwitch', function(e) 
	{


		for (thisComponent in makStudio.componentNames[designType])
		{
			if ( e.target.id == makStudio.componentNames[designType][thisComponent] )
			{
				var paramName = thisComponent;
			}
		}


		if ( designType == 'bench' )
		{
			_bench_api.parameters.updateAsync({name: paramName, value: e.target.checked });
		}

		if ( designType == 'finWall' )
		{
			_fin_wall_api.parameters.updateAsync({name: paramName, value: e.target.checked });
		}

		if ( designType == 'backlit' )
		{
			_backlit_api.parameters.updateAsync({name: paramName, value: e.target.checked });
		}

	});




});




/*-------------------------------------------------------------------------*

	This section now holds the functions that are called from the above
	responses to actions and initial page load.

/*-------------------------------------------------------------------------*/





/*-------------------------------------------*

	This function is called at the start of
	the page load and initializes the main
	variable holding all of the data.

/*-------------------------------------------*/
function initializeData()  
{
	return {

		'modelTickets' : {
			'bench' : '4a0592f5cc546eb466ff9edb9d19b5b5d73602211efc55c4db9c040a3f7a343f37f7fd25a30c376ffc67bb9494b5776db2ebe599bd7e8611e12f89074d712135fdfa9cd8d48610f30cc8199e39dc0d576d7a123bc39d16553d42b9a2a04365c0cf875efb5587a3e8b9ca1fa7794ec6940d8e376ed290-052484b3075f24e3a7a0fd885fafb80b',
			'finWall' : 'f1832e3ad0bcab4aa8d08f894889044419a2570f638a7f334b048c76c7b5c17a90b3f4502981d3bdee2321dcad99ec6d97c6c4d6e4356cb1dd06a9b93b103be1faeb0c1532047b7dc98a74f4fbb16cb861609a7fae45c95d0b03ab311414be24ce6a7ef35142bc04fe359091612e4ba6cc83feb14347-254bf0a71357b2c9f983746bf3867934',
			'backlit' : 'b377b948d7f72cee5db1184551e10c1e9f8a34cae0323283b7f5f8831cedc2e26986531436453d00bbce7556061713170f148b9d879fc7e6b2454fce26e030c1c8fb9782aeaaa1fa73ed74ce6059e6daba4a3b682e769ebfe82ee516dfc6b2a0fe3fc30c2fab53476e8f1f82c895f1781fa1746ebd15-b63fe0ed951441432130ea48fe327cf7'
		},

		'apiNames' :{
			'bench' : 'bench',
			'finWall' : 'finWall',
			'backlit' : 'backlit'
		},


		'variableNames' :{
			'bench' : '_bench_api',
			'finWall' : '_fin_wall_api',
			'backlit' : '_backlit_api'
		},


		'containerNames' :{
			'bench' : 'benchDisplay',
			'finWall' : 'finWallDisplay',
			'backlit' : 'backlitWallDisplay',
			'planter' : 'planterWallDisplay',
			'desk' : 'deskDisplay',
			'faceted' : 'facetedWallDisplay',
			'panel' : 'panelWallDisplay',
			'gensler' : 'genslerWallDisplay'
		},

		'sideMenus' :{
			'bench' : 'benchSection',
			'finWall' : 'finWallSection',
			'backlit' : 'backlitSection',
			'planter' : 'planterSection',
			'desk' : 'deskSection',
			'faceted' : 'facetedSection',
			'panel' : 'panelSection',
			'gensler' : 'genslerSection'
		},

		'displayText' : {
			'bench' : 'Planter Bench',
			'finWall' : 'Fin Wall',
			'backlit' : 'Backlit Wall',
			'planter' : 'Planter Wall',
			'desk' : 'Custom Desk',
			'faceted' : 'Faceted Wall',
			'panel' : 'Wall Panels',
			'gensler' : 'Gensler Wall'
		},

		'componentNames' : {

			'finWall' : {
				'Height of Wall' : 'finWallHeightSlider',
				'Lenght of Wall' : 'finWallWidthSlider',
				'Wall Depth' : 'finWallDepthSlider',
				'Ripple Center Location (Down - Up) (%)' : 'rippleYSlider',
				'Ripple Center Location (Left-Right) (%)' : 'rippleXSlider',
				'Ripple Intensity' : 'rippleIntensitySlider',
				'Roughness' : 'rippleRoughnessSlider',
				'Fins Thickness' : 'finThicknessSlider',
				'Spacing of Fins' : 'finSpacingSlider',
				'Rotate Panels' : 'finRotationSlider',
				'Position X Logo' : '',
				'Position Z Logo' : '',
				'Logo Intensity (%)' : '',
				'Show Original Logo' : '',
				'Show Human Scale' : 'finWallHumanScale',
				'Show Dimensions' : 'finWallShowDimensions',

				'Straight Panels Tolerance' : '',
				'Back Panel Color' : '',
				'Panels Type' : '',
				'Material' : '',
				'Logo?' : '',
				'Colored MDF' : ''

			},


			'bench' : {
				'Bench Depth' : 'benchDepthSlider',
				'Bench Height' : 'benchHeightSlider',
				'Twist Length' : 'benchTwistSlider',
				'Right Seating Length' : 'benchRightSeatSlider',
				'Left Seating Length' : 'benchLeftSeatSlider',
				'Right Planter' : 'rightPlanterLength',
				'Left Planter' : 'leftPlanterLength',
				'Swatch' : 'benchSwatch'
			},


			'backlit' : {
				'LENGTH OF WALL' : 'backlitLengthSlider',
				'Height of Wall' : 'backlitHeightSlider',
				'Show Dimensions?' : 'backlitShowDimensions',
				'Ground Offset' : 'backlitOffsetSlider',

				'Choose Pattern Variation' : 'backlitPatternSlider',
				'Wave Amplitude' : 'backlitWaveAmpSlider',
				'Waves Depth' : 'backlitWaveDepthSlider',
				'Wall Roughness' : 'backlitRoughSlider',
				'Wall Metalness' : 'backlitMetalSlider',
				'Display Panel Divisions?' : 'backlitShowPanels',
				'Show Human Scale?' : 'backlitHumanScale',

				'Header Font' : '',
				'Subheader' : '',
				'Subheader Font' : '',
				'Header - Subheader Scale' : '',
				'Header-Subheader Relation' : '',
				'Header' : '',

				'Logo?' : 'backlitLogoOnOff',
				'Logo X Location' : 'backlitLogoXSlider',
				'Logo Z Location' : 'backlitLogoZSlider',
				'Mak Logo Scale' : '',
				'Logo Scale' : 'backlitLogoScaleSlider',
				'MakLogo' : '',
				'Create Flat Area?' : 'backlitFlatOnOff',
				'Pattern After Logo?' : 'backlitPatternOnOff',

				'Wall Color' : '',
				'Logo and Text Color' : '',
				'Upload Logo' : ''
			}



		},

		'componentTypes' : {

			'finWall' : {
				'Position X Logo' : 'slider',
				'Height of Wall' : 'slider',
				'Lenght of Wall' : 'slider',
				'Straight Panels Tolerance' : 'slider',
				'Back Panel Color' : 'swatch',
				'Panels Type' : 'dropdown',
				'Ripple Center Location (Down - Up) (%)' : 'slider',
				'Rotate Panels' : 'slider',
				'Fins Thickness' : 'slider',
				'Spacing of Fins' : 'slider',
				'Fin Rotation (deg)' : 'slider',
				'Roughness' : 'slider',
				'Show Dimensions' : 'boolean',
				'Show Original Logo' : 'boolean',
				'Wall Depth' : 'slider',
				'Logo Intensity (%)' : 'slider',
				'Material' : 'dropdown',
				'Logo?' : 'boolean',
				'Ripple Center Location (Left-Right) (%)' : 'slider',
				'Spacing of Fins' : 'slider',
				'Position Z Logo' : 'slider',
				'Colored MDF' : 'swatch',
				'Ripple Intensity' : 'slider',
				'Show Human Scale' : 'boolean',
				'Show Dimensions' : 'boolean',
				'Ground Offset' : 'slider',

			},

			'bench' : {
				'Bench Depth' : 'slider',
				'Bench Height' : 'slider',
				'Twist Length' : 'slider',
				'Right Seating Length' : 'slider',
				'Left Seating Length' : 'slider',
				'Right Planter' : 'dropdown',
				'Left Planter' : 'dropdown',
				'Swatch' : ''				
			},


			'backlit' : {
				'LENGTH OF WALL' : 'slider',
				'Height of Wall' : 'slider',
				'Show Dimensions?' : 'boolean',
				'Show Human Scale?' : 'boolean',
				'Ground Offset' : 'slider',

				'Choose Pattern Variation' : 'slider',
				'Wave Amplitude' : 'slider',
				'Waves Depth' : 'slider',
				'Wall Roughness' : 'slider',
				'Wall Metalness' : 'slider',
				'Display Panel Divisions?' : 'boolean',

				'Header Font' : '',
				'Subheader' : 'text',
				'Subheader Font' : '',
				'Header - Subheader Scale' : '',
				'Header-Subheader Relation' : '',
				'Header' : 'text',

				'Logo?' : 'boolean',
				'Logo X Location' : 'slider',
				'Logo Z Location' : 'slider',
				'Mak Logo Scale' : 'slider',
				'Logo Scale' : 'slider',
				'MakLogo' : '',
				'Create Flat Area?' : 'boolean',
				'Pattern After Logo?' : 'boolean',

				'Wall Color' : '',
				'Logo and Text Color' : '',
				'Upload Logo' : ''
			}


		},



		'componentValues' : {

			'bench' : {},
			'finWall' : {},
			'backlit' : {},
			'planter' : {},
			'desk' : {},
			'faceted' : {},
			'panel' : {},
			'gensler' : {}

		}


	};

}







/*------------------------------------------------------------------------------------------------------------*

	This function initializes a model. This is done using the global variable holding all of the data for
	the mak studio system instead of entering each model name and ticket separately. It deletes all of the
	other models before creating the new one.

/*-----------------------------------------------------------------------------------------------------------*/
function initializeModel( modelName )  
{

	// delete any existing models
	for (x in makStudio.variableNames)
	{
		delete window[makStudio['variableNames'][x]];
	}

	// viewer settings 
	var  api_viewerSettings = { 
		// container to use 
		container: document.getElementById(makStudio['containerNames'][modelName]), 
		// when creating the viewer, we want to get back an API v2 object 
		api: {version: 2}, 
		// level of log messages which will be sent to the browser console
		loggingLevel: SDVApp.constants.loggingLevels.NONE, 
		// instantly show the 3D scene 
		showSceneMode: SDVApp.constants.showSceneModes.INSTANT, 
		// ticket for a ShapeDiver model 
		ticket: makStudio['modelTickets'][modelName], 
		modelViewUrl : 'eu-central-1'
	}; 


	// create the viewer, get back an API v2 object 
	//eval(makStudio['variableNames'][modelName] = new SDVApp.ParametricViewer(api_viewerSettings));


	// create the viewer, get back an API v2 object 
	if ( modelName == 'bench' )
	{
		_bench_api = new SDVApp.ParametricViewer(api_viewerSettings);
	}

	if ( modelName == 'finWall' )
	{
		_fin_wall_api = new SDVApp.ParametricViewer(api_viewerSettings)
	}

	if ( modelName == 'backlit' )
	{
		_backlit_api = new SDVApp.ParametricViewer(api_viewerSettings)
	}


	setTimeout(function () {
		setModelData(modelName);
    }, 1000);

}








/*------------------------------------------------*

	This is the function called whenever the user
	changes the side menu by selecting a new
	model.

/*------------------------------------------------*/
function setModelView( modelName )
{

	// Hide all models
	for (thisContainer in makStudio.containerNames)
	{
		$('#'+makStudio['containerNames'][thisContainer]).hide();
	}


	// Hide all side menus
	for (thisMenu in makStudio.sideMenus)
	{
		$('#'+makStudio['sideMenus'][thisMenu]).hide();
	}


	// Show the container holding the view
	$('#'+makStudio['containerNames'][modelName]).show();


	// Show the side menu window
	$('#'+makStudio['sideMenus'][modelName]).show();



	// Show the dimensions submenu as the default
	$('.parameterSet').hide();
	$("#"+modelName+"Dimensions").show();


	// Hide the cameras and show the relevant one
	$('.cameraCenter').hide();
	$('#'+modelName+'CameraCenter').parent().show();

}








/*------------------------------------------------*

	This function ties the data from a model to
	the inital values of the sliders and other
	items

/*------------------------------------------------*/
function setModelData( modelName )
{

	console.log('The model name is '+modelName);


	// Tie the variable for the data to the proper data set
	if ( modelName == 'bench' )
	{
		thisData = _bench_api.parameters.get();
	}

	if ( modelName == 'finWall' )
	{
		thisData = _fin_wall_api.parameters.get();
	}

	if ( modelName == 'backlit' )
	{
		thisData = _backlit_api.parameters.get();
	}



	// Loop through the data and set the parameters to the
	// proper values. Elements on front end were already
	// named the necessary value to make this work
	thisData.data.forEach(function(element) {

		for (thisVar in makStudio.componentNames[modelName])
		{
			//console.log('comparing '+thisVar+' to '+element.name);
			if ( thisVar == element.name )
			{
				//console.log('Matched Name');
				if ( makStudio.componentTypes[modelName][thisVar] == 'slider' )
				{
					//console.log('Setting value of '+makStudio.componentNames[modelName][thisVar]+' to '+element.value);
					$( "#"+makStudio.componentNames[modelName][thisVar] ).val(element.value);
					makStudio.componentValues[modelName][camelize(makStudio.componentNames[modelName][thisVar])]=element.value;
				}

				if ( makStudio.componentTypes[modelName][thisVar] == 'dropdown' )
				{
					//console.log('Setting value of '+makStudio.componentNames[modelName][thisVar]+' to '+element.value);
					$( "#"+makStudio.componentNames[modelName][thisVar] ).val(element.value);
				}

				if ( makStudio.componentTypes[modelName][thisVar] == 'boolean' )
				{
					console.log('Setting value of '+makStudio.componentNames[modelName][thisVar]+' to '+element.value);
					if ( element.value )
					{
						$( "#"+makStudio.componentNames[modelName][thisVar] ).prop('checked', true);
						$( "#"+makStudio.componentNames[modelName][thisVar] ).attr('checked', true);
					}else
					{
						$( "#"+makStudio.componentNames[modelName][thisVar] ).prop('checked', false);						
						$( "#"+makStudio.componentNames[modelName][thisVar] ).attr('checked', false);						
					}
				}

			}

		}


	});


	initializeComponents( modelName );


}














/*-------------------------------------------*

	This function initializes the various 
	sliders and other html bootstrap
	components.

/*-------------------------------------------*/
function initializeComponents( modelName )
{


	console.log('The model name is '+modelName);


	if ( modelName == "finWall" )
	{
		$(".finWallHeightSlider").ionRangeSlider({
			grid: false,
			min: 48,
			max: 320,
			step: 1
		});

		$(".finWallWidthSlider").ionRangeSlider({
			grid: false,
			min: 30,
			max: 540,
			step: 1
		});

		$(".finWallDepthSlider").ionRangeSlider({
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

		$(".finThicknessSlider").ionRangeSlider({
			grid: false,
			min: 0.1,
			max: 5,
			step: 0.1
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


	}


	if ( modelName == "backlit" )
	{
		$(".backlitLengthSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 1000,
			step: 1
		});

		$(".backlitHeightSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 1000,
			step: 1
		});

		$(".backlitLogoXSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 1000,
			step: 1
		});

		$(".backlitLogoYSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 1000,
			step: 1
		});

		$(".backlitOffsetSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 1000,
			step: 1
		});


		$(".backlitLogoScaleSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 1,
			step: 0.1
		});


		$(".backlitLogoXSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 1000,
			step: 1
		});


		$(".backlitLogoZSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 1000,
			step: 1
		});


		$(".backlitWaveDepthSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 3,
			step: 0.1
		});

		$(".backlitWaveAmpSlider").ionRangeSlider({
			grid: false,
			min: 0.01,
			max: 0.19,
			step: 0.01
		});

		$(".backlitPatternSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 8,
			step: 1
		});

		$(".backlitHeaderSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 100,
			step: 1
		});

		$(".backlitSubheaderSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 100,
			step: 1
		});

		$(".backlitMetalSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 1,
			step: 0.1
		});

		$(".backlitRoughSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 1,
			step: 0.1
		});



	}




	if ( modelName == "faceted" )
	{
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

	}


	if ( modelName == 'bench' )
	{

		$(".benchDepthSlider").ionRangeSlider({
			grid: false,
			min: 24,
			max: 48,
			step: 1
		});

		$(".benchHeightSlider").ionRangeSlider({
			grid: false,
			min: 16,
			max: 30,
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


	}



}





function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
