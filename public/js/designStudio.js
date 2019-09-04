$(document).ready(function()	{


	/*------------------------------------------------------------------------------
								Code Organization

		The code is broken down into three sections. The first handles the items
		that have to be addressed when the page is first loaded.

		The second section of code containes the jquery reactions to items that
		are clicked, moved, etc. This is when the user is clicking on icons or
		moving sliders in the design studio. Much of this results in API calls 
		to shape diver.

		The third section is the functions called throughout the code in response
		to these actions. These functions load data, display the proper content,
		and ensure that the proper mode is loaded and saved.

	/*-----------------------------------------------------------------------------*/



	/*------------------------------------------------------------------------------
									Code Overview

		At any point in time, a single model is loaded into the memory using the 
		global variable "modelData". This variable controls what the user sees 
		in terms of what model is shown and the parameters of that model. The user
		can interact with the model and save it. If they choose to reopen the file,
		that model is simply loaded into the variable holding the current model.

		There is a bank of arrays that hold all of the relevant data that is 
		initialized when the page loads. When the user opens a new model, that
		default data is what is used for the parameters.

		Updating a model is therefore simple as the array with the new values is
		simply stored over the old one. The shape diver ticket is one of the 
		parameters held in this array.

	/*-----------------------------------------------------------------------------*/






	/*------------------------------------------------------------------------------

								On Page Load Code

		This section calls the initial functions that need to be done when the 
		page loads. The data for the models is loaded, bootstrap components are 
		initilized, views are hidden, and the default model is created from 
		shapediver.

	/*-----------------------------------------------------------------------------*/



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


	// Set CSRF Token
	$.ajaxSetup({
	    headers: {
	        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	    }
	});


	// Set the overall variable for the model type
	window['designType'] = 'bench';







	/*------------------------------------------------------------------------------

								Response to user actions
		
		This code handles the responses to users clicking on or changing things on 
		the front end. This could be sliders, buttons, etc. Very little logic is
		contained in these responses, just calls to functions.

		The order of the functions here mirrors their order on the front end. This
		is done for organizational purposes only.

	/*-----------------------------------------------------------------------------*/


	// TOP ROW OF BUTTONS

	// When the user wants to see the list of models that they have saved
	$('#designViewModels').click(function(event)	
	{	
		// Hide and display the appropriate items
		$("#currentModelDisplay, #benchDisplay, #finWallDisplay, #backlitDisplay, #planterWallDisplay, #deskDisplay, #facetedWallDisplay, #panelWallDisplay, #genslerWallDisplay").hide();
		$("#modelDisplay").show();


		// Retrieve the model data for the user
		retrieveModels();

	});


	// When the user clicks on the save icon in the 
	// top line to save a model design
	$('#designSave').click(function(event)	
	{	
		$('#modelNameModal').modal('show');
	});


	// When the user has given that model to be
	// saved a name in the modal window and
	// then proceeds to save it
	$('#saveModelButton').click(function(event)	
	{	
		$('#modelNameModal').modal('hide');

		if ( makModel['id'] =='' )
		{
			saveModel($('#modalModelName').val() );
		}else
		{
			updateModel($('#modalModelName').val() );			
		}
	});



	// When the user clicks on the camera icon in the top
	// menu to recenter the view
	$('#recenterCamera').click(function(event)	
	{	
		model_api.scene.camera.zoomAsync();
	});

	// END OF TOP ROW OF BUTTONS



	// SECOND ROW OF BUTTONS


	// When the user clicks on one of the design type boxes to change the model type
	$('.designType').click(function(event)	
	{	
		designType = event.target.id;

		console.log('The design type is '+designType);

		document.getElementById( 'currentModelDisplay' ).innerHTML='';

		initializeModel( event.target.id )  

		setModelView(event.target.id);

		$('.designType').removeClass('currentItem');

		$('#'+event.target.id).parent().addClass('currentItem');

	});

	// END OF SECOND ROW OF BUTTONS



	// THIRD ROW OF BUTTONS - PARAMETERS DISPLAYED

	// When the user clicks on a set of parameters to show
	$('.parameterSelect').click(function(event)	
	{	
		// Hide all of the options
		$(".parameterSet").hide();

		// Display the appropriate options
		var elementToShow = event.target.id.replace('Button','');
		$("#"+elementToShow).show(); 

	});

	// END OF THIRD ROW OF BUTTONS









	/* -------------------------------------- *

	          API Calls

	    User interacting with the sliders, 
	    buttons, etc

	/* ---------------------------------------*/

	$('#finStyleCurved').click(function()	
	{			
		model_api.parameters.updateAsync({name: "Panels Type", value: 0 });
	});

	$('#finStyleAngled').click(function()
	{			
		model_api.parameters.updateAsync({name: "Panels Type", value: 1 });
	});


	$('#finMaterialBirch').click(function()
	{			
		model_api.parameters.updateAsync({name: "Material", value: 0 });
	});

	$('#finMaterialLamBirch').click(function()
	{			
		model_api.parameters.updateAsync({name: "Material", value: 1 });
	});


	$('#finMaterialMDF').click(function()
	{			
		model_api.parameters.updateAsync({name: "Material", value: 2 });
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

		model_api.parameters.updateAsync({name: paramName, value: $('#'+event.target.id).val() });

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

		model_api.parameters.updateAsync({name: paramName, value: e.target.checked });


	});



	// WHen the user clicks on a displayed model
	// that they have saved adn they want to 
	// view it
	$(document).on('click', '.potenModel', function(event)
	{	
		console.log('click');
		reloadModel( event.target.id );
	});








	// When the user clicks on a displayed model
	// with the intent to delete it
	$(document).on('click', '.deleteModel', function(event)
	{	
		console.log(event);
		$.ajax({
			url : "/deleteModel/"+event.target.id,
			method :"DELETE"

		}).done(function() 
		{
			retrieveModels();

			$( '#deleteMessageAlert' ).show( );
			setTimeout(
				function() 
				{
	    			$( '#deleteMessageAlert' ).hide( );
				}, 3000);
		});
		
	});



});











/*------------------------------------------------------------------------------------------------------------*

	This function initializes a model. This is done using the global variable holding all of the data for
	the mak studio system instead of entering each model name and ticket separately. It deletes all of the
	other models before creating the new one.

/*-----------------------------------------------------------------------------------------------------------*/
function initializeModel( modelName )  
{

	// viewer settings 
	var  api_viewerSettings = { 
		// container to use 
		//container: document.getElementById(makStudio['containerNames'][modelName]), 
		container : document.getElementById('currentModelDisplay'),
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


	model_api = new SDVApp.ParametricViewer(api_viewerSettings)

	setTimeout(function () {
		setDefaultModelData(modelName);
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

	// Hide the list of models in case
	$('#modelDisplay').hide();


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


	$( '#saveMessageAlert' ).hide( );
	$( '#deleteMessageAlert' ).hide( );

}








/*------------------------------------------------*

	This function populates a new model object 
	with the default options and values

/*------------------------------------------------*/
function setDefaultModelData( modelName )
{

	console.log('The model name is '+modelName);


	// Pull the values from the shape diver ticket
	thisData = model_api.parameters.get();


	// Make the global variable holding the model
	makModel = {
		'id' : '',
		'created_at' : '',
		'modified_at' : '',
		'user_id' : '',
		'build_id' : modelName,
		'build_data' : {
			'name' : 'Unsaved Model',
			'componentNames' : makStudio.componentNames[modelName],
			'componentTypes' : makStudio.componentTypes[modelName],
			'ticket' : makStudio.modelTickets[modelName],
			'componentValues' : {}
		}
	};



	// Set the file name to the un named value
	$("#modelName").text( 'Unsaved Model' );



	// Loop through the data and set the parameters to the
	// proper values. Elements on front end were already
	// named the necessary value to make this work
	thisData.data.forEach(function(element) {

		for (thisVar in makStudio.componentNames[modelName])
		{
			if ( thisVar == element.name )
			{
				if ( makStudio.componentTypes[modelName][thisVar] == 'slider' )
				{
					$( "#"+makStudio.componentNames[modelName][thisVar] ).val(element.value);
					makModel.build_data.componentValues[camelize(makStudio.componentNames[modelName][thisVar])]=element.value;
				}

				if ( makStudio.componentTypes[modelName][thisVar] == 'dropdown' )
				{
					$( "#"+makStudio.componentNames[modelName][thisVar] ).val(element.value);
					makModel.build_data.componentValues[camelize(makStudio.componentNames[modelName][thisVar])]=element.value;
				}

				if ( makStudio.componentTypes[modelName][thisVar] == 'boolean' )
				{
					if ( element.value )
					{
						$( "#"+makStudio.componentNames[modelName][thisVar] ).prop('checked', true);
						$( "#"+makStudio.componentNames[modelName][thisVar] ).attr('checked', true);
					}else
					{
						$( "#"+makStudio.componentNames[modelName][thisVar] ).prop('checked', false);						
						$( "#"+makStudio.componentNames[modelName][thisVar] ).attr('checked', false);						
					}
					makModel.build_data.componentValues[camelize(makStudio.componentNames[modelName][thisVar])]=element.value;
				}

			}

		}


	});


	initializeComponents( modelName );


}











/*-------------------------------------------*

	This function saves the current mode
	in the database

/*-------------------------------------------*/
function saveModel( modelName )
{
	// Place the name given in the popup in the name
	makModel['build_data']['name']=modelName;
	$("#modelName").text( modelName );



	// For every entry saved in the array, get that value
	// and save it into an object
	for (nameComponent in makModel.build_data.componentNames )
	{

		for (typeComponent in makModel.build_data.componentTypes )
		{

			if ( nameComponent == typeComponent )
			{
				if ( ( makModel.build_data.componentTypes[typeComponent] == "slider" ) ||
					 ( makModel.build_data.componentTypes[typeComponent] == "dropdown" ) )
				{
					makModel.build_data[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).val();
				}

				if ( makModel.build_data.componentTypes[typeComponent] == "boolean" )
				{
					makModel.build_data[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).prop('checked');
				}

			}
		}
	}


	$.ajax({
		url : "/saveModel",
		method :"POST",
		data :  { 'model' : makModel }

	}).done(function() 
	{
		$( '#saveMessageAlert' ).show( );
		setTimeout(
			function() 
			{
    			$( '#saveMessageAlert' ).hide( );
			}, 3000);
	});

}













/*-------------------------------------------*

	This function updates the current mode
	in the database

/*-------------------------------------------*/
function updateModel( modelName )
{
	// Place the name given in the popup in the name
	makModel['build_data']['name']=modelName;
	$("#modelName").text( modelName );



	// For every entry saved in the array, get that value
	// and save it into an object
	for (nameComponent in makModel.build_data.componentNames )
	{

		for (typeComponent in makModel.build_data.componentTypes )
		{

			if ( nameComponent == typeComponent )
			{
				if ( ( makModel.build_data.componentTypes[typeComponent] == "slider" ) ||
					 ( makModel.build_data.componentTypes[typeComponent] == "dropdown" ) )
				{
					makModel.build_data[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).val();
				}

				if ( makModel.build_data.componentTypes[typeComponent] == "boolean" )
				{
					makModel.build_data[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).prop('checked');
				}

			}
		}
	}


	$.ajax({
		url : "/saveModel",
		method :"PUT",
		data :  { 'model' : makModel }

	}).done(function() 
	{
		$( '#saveMessageAlert' ).show( );
		setTimeout(
			function() 
			{
    			$( '#saveMessageAlert' ).hide( );
			}, 3000);
	});

}





/*-------------------------------------------*

	This function gets the models that a
	user has saved

/*-------------------------------------------*/
function retrieveModels(  )
{


	$.get( "getModels", function( data ) 
	{
		console.log(data);

		window['userModelData'] = data;
		$.each(userModelData, function(index, obj){
			userModelData[index]['build_data'] = JSON.parse(obj.build_data);
		});

        $("#userModelList").html('');

		var tr="<tr style='padding:10px 0px;'><th style='width:300px;'>Model Name</th><th style='width:300px;'>Date Created</th></tr>"
        $("#userModelList").append(tr);

		$.each(userModelData, function(index, obj){
	        
	        var tr = $("<tr></tr>");
	        tr.append("<td class='potenModel hoverMe' id='"+obj.id+"'>"+ obj.build_data.modelName +"</td>");
	        tr.append("<td class='potenModel hoverMe' id='"+obj.id+"'>"+ obj.created_at +"</td>");
	        tr.append("<td id='"+obj.id+"' class='deleteModel hoverMe'><i id='"+obj.id+"' class='icon-remove'></i></td>");

	        $("#userModelList").append(tr);
	    });

	});


}









/*-------------------------------------------*

	This function loads a model that a user
	has selected from the list of existing
	models

/*-------------------------------------------*/
function reloadModel( modelID )
{


	userModelData.forEach(function(element) 
	{
		if ( element.id == modelID )
		{
			makModel = element
		}
	});



	// viewer settings 
	var  api_viewerSettings = { 
		// container to use 
		container : document.getElementById('currentModelDisplay'),
		// when creating the viewer, we want to get back an API v2 object 
		api: {version: 2}, 
		// level of log messages which will be sent to the browser console
		loggingLevel: SDVApp.constants.loggingLevels.NONE, 
		// instantly show the 3D scene 
		showSceneMode: SDVApp.constants.showSceneModes.INSTANT, 
		// ticket for a ShapeDiver model 
		ticket: makModel['build_data']['ticket'], 
		modelViewUrl : 'eu-central-1'
	}; 


	model_api = new SDVApp.ParametricViewer(api_viewerSettings)

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

		$(".facetedASlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedBSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedCSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedDSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedESlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedFSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedGSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedHSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedISlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedJSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedKSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedLSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 360,
			step: 1
		});

		$(".facetedMSlider").ionRangeSlider({
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


















/*-------------------------------------------*

	This function is called at the start of
	the page load and initializes the main
	variable holding all of the data.

/*-------------------------------------------*/
function initializeData()  
{
	return {

		'modelTickets' : {
			'bench' : 'ccf330f694285fa526a47387edbd0a89e09146369e7b730dbf57fa6354146b1df5390f267e9fe942b42e7571084e91c912c272ff2b7609aed88e123dfd2718afeb773039caed2580fc03c3d0d629a26da06f34f54bc0b3731a19d16c790bd4656b5dad94fd5572642398bc694aaf42b03957e44bbb44-9bc6005b71d9578337b4509851c32a30',
			'finWall' : 'f1832e3ad0bcab4aa8d08f894889044419a2570f638a7f334b048c76c7b5c17a90b3f4502981d3bdee2321dcad99ec6d97c6c4d6e4356cb1dd06a9b93b103be1faeb0c1532047b7dc98a74f4fbb16cb861609a7fae45c95d0b03ab311414be24ce6a7ef35142bc04fe359091612e4ba6cc83feb14347-254bf0a71357b2c9f983746bf3867934',
			'backlit' : 'b377b948d7f72cee5db1184551e10c1e9f8a34cae0323283b7f5f8831cedc2e26986531436453d00bbce7556061713170f148b9d879fc7e6b2454fce26e030c1c8fb9782aeaaa1fa73ed74ce6059e6daba4a3b682e769ebfe82ee516dfc6b2a0fe3fc30c2fab53476e8f1f82c895f1781fa1746ebd15-b63fe0ed951441432130ea48fe327cf7',
			'faceted' : '6a4bbceb3a6a94c8d65543ebfa9d3d5fea7e02d3947dd4d34c6ff5eac325b91da4dcbf461588290b2867aedf44bc773a1b4d0d6f966dd2c8aa83d7a7a0caf6e1c2a2874c6d1ca9c45e245360bb14be9666bf0aad53f1758cf24a5fe9fa880416c71a33f184b47fef9295faa30e99ae1bb05a70f67352-2801291baf32cfcf605d4d7b00d78132'
		},

		'containerNames' :{
			'planter' : 'planterWallDisplay',
			'desk' : 'deskDisplay',
			'panel' : 'panelWallDisplay',
			'faceted' : 'currentModelDisplay',
			'bench' : 'currentModelDisplay',
			'backlit' : 'currentModelDisplay',
			'finWall' : 'currentModelDisplay'
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
			},


			'faceted' : {
				'Spacing' : 'facetedSpacingSlider',
				'Panel A Rotation' : 'facetedASlider',
				'Panel B Rotation' : 'facetedBSlider',
				'Panel C Rotation' : 'facetedCSlider',
				'Panel D Rotation' : 'facetedDSlider',
				'Panel E Rotation' : 'facetedESlider',
				'Panel F Rotation' : 'facetedFSlider',
				'Panel G Rotation' : 'facetedGSlider',
				'Panel H Rotation' : 'facetedHSlider',
				'Panel I Rotation' : 'facetedISlider',
				'Panel J Rotation' : 'facetedJSlider',
				'Panel K Rotation' : 'facetedKSlider',
				'Panel L Rotation' : 'facetedLSlider',
				'Panel M Rotation' : 'facetedMSlider'
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
			},


			'faceted' : {
				'Spacing' : 'slider',
				'Panel A Rotation' : 'slider',
				'Panel B Rotation' : 'slider',
				'Panel C Rotation' : 'slider',
				'Panel D Rotation' : 'slider',
				'Panel E Rotation' : 'slider',
				'Panel F Rotation' : 'slider',
				'Panel G Rotation' : 'slider',
				'Panel H Rotation' : 'slider',
				'Panel I Rotation' : 'slider',
				'Panel J Rotation' : 'slider',
				'Panel K Rotation' : 'slider',
				'Panel L Rotation' : 'slider',
				'Panel M Rotation' : 'slider'
			}


		}



	};

}
