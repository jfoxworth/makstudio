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
	$('#bench').parent().addClass('currentItem');
	$('#benchDimensionsButton').parent().addClass('currentParameter');


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
		$("#currentModelDisplay, #planterWallDisplay, #deskDisplay, #panelWallDisplay").hide();
		$("#modelDisplay").show();
		$( '#currentModelDisplay' ).html('');
		$('.parameterSet').hide();
		$('#modelNameContainer').hide();


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

		$( '#currentModelDisplay' ).html('');

		initializeModel( event.target.id );

		setModelView(event.target.id);

		// Shade the current item
		$('.designType').removeClass('currentItem');
		$('#'+event.target.id).parent().addClass('currentItem');

		if ( ( designType == "finWall" ) || ( designType == "backlit" ) || ( designType == "faceted" ) ||
			 ( designType == "bench") || (designType == "light") )
		{
			$('#modelNameContainer').show();
		
		}else
		{
			$('#modelNameContainer').hide();
		}

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


		// Shade the current parameter selector
		$('.parameterSelect').parent().removeClass('currentParameter');
		$('#'+event.target.id).parent().addClass('currentParameter');

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




	$('#backlitHeader').on('keypress',function(e) {
		if(e.which == 13) {
			model_api.parameters.updateAsync({name: "Header", value: $('#backlitHeader').val() });
		}
	});


	$('#backlitSubheader').on('keypress',function(e) {
		if(e.which == 13) {
			model_api.parameters.updateAsync({name: "Subheader", value: $('#backlitSubHeader').val() });
		}
	});





	// When enter is hit on one of the text inputs
	$('.textParameterInput').on('keypress',function(event) {
		if(event.which == 13) {

			console.log('Here 1');

			var paramName = event.target.id.replace("Input", "Slider");
			makModel['build_data']['componentValues'][thisComponent] = $('#'+event.target.id).val();
			$('#'+paramName).val( $('#'+event.target.id).val() );

			console.log('Here 2');

			console.log(paramName);

			for (thisComponent in makStudio.componentNames[designType])
			{
				if ( paramName == makStudio.componentNames[designType][thisComponent] )
				{
					model_api.parameters.updateAsync({name: thisComponent, value: $('#'+paramName).val() });
				}
			}

			console.log('Here 3');

			setPrice( designType );

		}
	});


	$('.modelSlider, .modelDropdown').change(function(event)	
	{	

		for (thisComponent in makStudio.componentNames[designType])
		{
			if ( event.target.id == makStudio.componentNames[designType][thisComponent] )
			{
				model_api.parameters.updateAsync({name: thisComponent, value: $('#'+event.target.id).val() });
				makModel['build_data']['componentValues'][thisComponent] = $('#'+event.target.id).val();
			}
		}

		setPrice( designType );

	});


	$('.modelSwitch').on('switchChange.bootstrapSwitch', function(e) 
	{


		for (thisComponent in makStudio.componentNames[designType])
		{
			if ( e.target.id == makStudio.componentNames[designType][thisComponent] )
			{
				model_api.parameters.updateAsync({name: thisComponent, value: e.target.checked });
				makModel['build_data']['componentValues'][thisComponent] = e.target.checked;
			}
		}

		setPrice( designType );

	});



	// Upload the logo for the backlit wall
	$("#backlitLogoUpload").on('change', function(res)
	{	
		console.log('Got here for the change event');

		let file = $("#backlitLogoUpload")[0]['files'][0]
		model_api.parameters.updateAsync({
			name: "Upload Logo",
			value: file
		}).then(
			function(response) {

				alert("File successfully uploaded", response);
			}
	  	);
	});


	// Upload the logo for the fin wall
	$("#finLogoUpload").on('change', function(res)
	{	
		console.log('Got here for the change event');

		let file = $("#finLogoUpload")[0]['files'][0]
		model_api.parameters.updateAsync({
			name: "Upload Logo",
			value: file
		}).then(
			function(response) {

				alert("File successfully uploaded", response);
			}
	  	);
	});




	// When the user selects one of the lights
	$(document).on('change', '.blockDropdown', function(event)
	{	
		console.log('changed');
		console.log(event.target.value);
		$('.blockDetails').hide();
		$('#lightGroup'+event.target.value).show();

	});

	// When the user hits enter on a light property
	$(document).on('keypress', '.groupInput', function(e)
	{	
		if(e.which == 13) 
		{
			bundleBlock( e.target.id );
		}
	});


	// Delete a light group
	$(document).on('click', '.deleteLightGroup', function(e)
	{	

		for (thisItem in makModel['build_data']['componentTypes'])
		{
			if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
			{

				thisGroup in makModel['build_data']['componentValues'][thisItem]['groups'].splice( $('#lightPicker').val(), 1 );

			}

		}
	});


	// Add a light group
	$(document).on('click', '.addLightGroup', function(e)
	{	

		for (thisItem in makModel['build_data']['componentTypes'])
		{
			if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
			{
				thisLength = makModel['build_data']['componentValues'][thisItem]['groups'].length;
				var newLight = {
					'angle' : "0",
					'heights' : ["10"],
					'loc' : ['10', '10'],
					'xforms' : [1]
				};
				makModel['build_data']['componentValues'][thisItem]['groups'].splice( thisLength, 1, newLight);

			}

		}
	});



	// Add a single light
	$(document).on('click', '.addLight', function(e)
	{	

		for (thisItem in makModel['build_data']['componentTypes'])
		{
			if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
			{
				var thisLength = makModel['build_data']['componentValues'][thisItem]['groups'][e.target.id]['heights'].length;
				makModel['build_data']['componentValues'][thisItem]['groups'][e.target.id]['heights'].splice( thisLength, 1, '10');
				makModel['build_data']['componentValues'][thisItem]['groups'][e.target.id]['xforms'].splice( thisLength, 1, thisLength);

			}

		}
	});


	// Delete a single light
	$(document).on('click', '.deleteLight', function(e)
	{	
		var splitKeys = e.target.id.split('-');
		for (thisItem in makModel['build_data']['componentTypes'])
		{
			if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
			{
				makModel['build_data']['componentValues'][thisItem]['groups'][splitKeys[0]]['heights'].splice( splitKeys[1], 1);

			}

		}
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




	$(document).on('click', '.modelDetailsShow', function(event)
	{	
		$('.modelDetails').hide();
		$('#'+event.target.id+'Details').show();


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
		setPrice(modelName);
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


	// Name of the file
	$('#modelName').parent().hide();
	if ( ( modelName == 'bench' ) || ( modelName == 'finWall' ) || ( modelName == 'backlit' ) || ( modelName == 'faceted' ) )
	{
		$('#modelName').parent().show();
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
	$('#'+modelName+'DimensionsButton').parent().addClass('currentParameter');


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
	console.log(thisData);


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

		for (componentName in makStudio.componentNames[modelName])
		{
			console.log('Comparing '+componentName+' to '+element.name);
			if ( componentName == element.name )
			{
				console.log('The type is '+makStudio.componentTypes[modelName][componentName]);
				if ( makStudio.componentTypes[modelName][componentName] == 'slider' )
				{
					$( "#"+makStudio.componentNames[modelName][componentName] ).val(element.value);
					$( "#"+makStudio.componentNames[modelName][componentName].replace("Slider", "Input") ).val(element.value);
					makModel.build_data.componentValues[componentName]=element.value;
				}

				if ( makStudio.componentTypes[modelName][componentName] == 'dropdown' )
				{
					$( "#"+makStudio.componentNames[modelName][componentName] ).val(element.value);
					makModel.build_data.componentValues[componentName]=element.value;
				}

				if ( makStudio.componentTypes[modelName][componentName] == 'boolean' )
				{
					if ( element.value )
					{
						$( "#"+makStudio.componentNames[modelName][componentName] ).prop('checked', true);
						$( "#"+makStudio.componentNames[modelName][componentName] ).attr('checked', true);
					}else
					{
						$( "#"+makStudio.componentNames[modelName][componentName] ).prop('checked', false);						
						$( "#"+makStudio.componentNames[modelName][componentName] ).attr('checked', false);						
					}
					makModel.build_data.componentValues[componentName]=element.value;
				}



				if ( makStudio.componentTypes[modelName][componentName] == 'dataPack' )
				{
					if ( typeof( element.value ) == "string" )
					{
						makModel.build_data.componentValues[componentName]=JSON.parse(element.value);
					}else
					{
						makModel.build_data.componentValues[componentName]=element.value;
					}
				}


			}

		}


	});


	initializeComponents( modelName );
	setPrice( modelName );
	setModelGroups();




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

				console.log('The name is '+nameComponent);
				if ( ( makModel.build_data.componentTypes[typeComponent] == "slider" ) ||
					 ( makModel.build_data.componentTypes[typeComponent] == "dropdown" ) )
				{
					makModel.build_data.componentValues[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).val();
				}

				if ( makModel.build_data.componentTypes[typeComponent] == "boolean" )
				{
					makModel.build_data.componentValues[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).prop('checked');
				}

				if ( makModel.build_data.componentTypes[typeComponent] == "text" )
				{
					makModel.build_data.componentValues[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).text();
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
					makModel.build_data.componentValues[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).val();
				}

				if ( makModel.build_data.componentTypes[typeComponent] == "boolean" )
				{
					makModel.build_data.componentValues[nameComponent] = $('#'+makModel.build_data.componentNames[nameComponent]).prop('checked');
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


		var monthNames = [ "January", "February", "March", "April", "May", "June",
		    "July", "August", "September", "October", "November", "December" ];


		console.log(data);

		window['userModelData'] = data;
		$.each(userModelData, function(index, obj){
			userModelData[index]['build_data'] = JSON.parse(obj.build_data);
		});

		$("#userModelList").html('');

		var tr="<div class='row center' style='line-height:30px; border-bottom:2px solid #ccc; margin:0px 20px;'>";
		tr=tr+"<div class='col_one_third' style='margin-bottom:0px; font-weight:bold;'>Model Name</div>";
		tr=tr+"<div class='col_one_third' style='margin-bottom:0px; font-weight:bold;'>Date Created</div>";
		tr=tr+"<div class='col_one_third col_last' style='margin-bottom:0px; font-weight:bold;'>Actions</div>";
		tr=tr+"</div>"
		$("#userModelList").append(tr);

		$.each(userModelData, function(index, obj){
			
			var newDate = new Date(obj.created_at);
			var formattedDate = monthNames[newDate.getMonth()] +' '+newDate.getDay()+','+newDate.getFullYear();

			var tr = "<div class='row center' style='height:50px; padding:10px 0px 10px 10px; margin:0px 20px; border-bottom:2px solid #ccc;'>";
			tr=tr+"<div class='col_one_third' style='margin-bottom:0px'>"+ obj.build_data.name +"</div>";
			tr=tr+"<div class='col_one_third' style='margin-bottom:0px'>"+ formattedDate +"</div>";
			tr=tr+"<div class='col_one_third col_last' style='margin-bottom:0px'>";
			tr=tr+"<i id='"+obj.id+"' class='rightmargin-sm icon-list2 h5 modelDetailsShow hoverMe' data-toggle='tooltip' data-placement='top' title='Model Details'></i>";
			tr=tr+"<i id='"+obj.id+"' class='rightmargin-sm icon-resize-full h5 potenModel hoverMe' data-toggle='tooltip' data-placement='top' title='Open Model'></i>";
			tr=tr+"<i id='"+obj.id+"' class='rightmargin-sm icon-remove-circle h5 deleteModel hoverMe' data-toggle='tooltip' data-placement='top' title='Delete Model'></i>";
			tr=tr+"</div></div>";

			$("#userModelList").append(tr);
			$('[data-toggle="tooltip"]').tooltip();



			if ( obj.build_id == "bench" )
			{
				var det = '';

				det=det+'<div id="'+obj.id+'Details" class="topmargin center modelDetails" style="margin:0px 40px;">';

					det=det+'<div class="nobottommargin row center" style="background-color:#888888; color:#ccc; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Description</div>';
						det=det+'<div class="col_one_fifth nobottommargin">Value</div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin">Cost</div>';
					det=det+'</div>';

					det=det+'<div class="row center nobottommargin" style="border-bottom:1px solid #888; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Bench Height (in)</div>';
						det=det+'<div class="col_one_fifth nobottommargin">'+obj.build_data.componentValues['Bench Height']+'</div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin"></div>';
					det=det+'</div>';

					det=det+'<div class="row center nobottommargin" style="border-bottom:1px solid #888; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Bench Depth (in)</div>';
						det=det+'<div class="col_one_fifth nobottommargin">'+obj.build_data.componentValues['Bench Depth']+'</div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin"></div>';
					det=det+'</div>';

					det=det+'<div class="row center nobottommargin" style="border-bottom:1px solid #888; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Twist Length (ft)</div>';
						det=det+'<div class="col_one_fifth nobottommargin">'+obj.build_data.componentValues['Twist Length']+'</div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin"></div>';
					det=det+'</div>';

					det=det+'<div class="row center nobottommargin" style="border-bottom:1px solid #888; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Left Seating Length (ft)</div>';
						det=det+'<div class="col_one_fifth nobottommargin">'+obj.build_data.componentValues['Left Seating Length']+'</div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin"></div>';
					det=det+'</div>';

					det=det+'<div class="row center nobottommargin" style="border-bottom:1px solid #888; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Right Seating Length (ft)</div>';
						det=det+'<div class="col_one_fifth nobottommargin">'+obj.build_data.componentValues['Right Seating Length']+'</div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin"></div>';
					det=det+'</div>';


					det=det+'<div class="bottommargin row" style="background-color:#888888; color:#ccc; padding:5px 0px;">';
						det=det+'<div class="col_three_fifth nobottommargin">Subtotal</div>';
						det=det+'<div class="col_one_fifth nobottommargin"></div>';
						det=det+'<div class="col_one_fifth col_last nobottommargin">'+obj.build_data['price']+'</div>';
					det=det+'</div>';

				det=det+'</div>';


				$("#userModelList").append(det);
			}


			$('.modelDetails').hide();


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

	$("#modelName").text( makModel.build_data.name );


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
	model_api = new SDVApp.ParametricViewer(api_viewerSettings);



	$('#currentModelDisplay').show();
	$("#modelDisplay").hide();


	setTimeout(function () 
	{

		for (nameComponent in makModel.build_data.componentNames )
		{
			if ( makModel['build_data']['componentValues'][nameComponent] !== undefined )
			{	
				console.log('Setting '+nameComponent+' to '+makModel.build_data.componentValues[nameComponent]);
				model_api.parameters.updateAsync({name: nameComponent, value: makModel.build_data.componentValues[nameComponent] });
			}
		}
	}, 500);




	for (nameComponent in makModel.build_data.componentNames )
	{
		console.log('Setting '+nameComponent+' - '+makModel.build_data.componentTypes[nameComponent]+' to '+makModel.build_data.componentValues[nameComponent]);
		if ( makModel.build_data.componentTypes[nameComponent] == 'slider' )
		{
			$( "#"+makModel.build_data.componentNames[nameComponent] ).val(makModel.build_data.componentValues[nameComponent]);
			$( "#"+makModel.build_data.componentNames[nameComponent] ).change();
		}

		if ( makModel.build_data.componentTypes[nameComponent] == 'dropdown' )
		{
			$( "#"+makModel.build_data.componentNames[nameComponent] ).val(makModel.build_data.componentValues[nameComponent]);
			$( "#"+makModel.build_data.componentNames[nameComponent] ).change();
		}

		if ( makModel.build_data.componentTypes[nameComponent] == 'boolean' )
		{
			if ( makModel.build_data.componentValues[nameComponent] )
			{
				$( "#"+makModel.build_data.componentNames[nameComponent] ).prop('checked', true);
				$( "#"+makModel.build_data.componentNames[nameComponent] ).attr('checked', true);
			}else
			{
				$( "#"+makModel.build_data.componentNames[nameComponent] ).prop('checked', false);						
				$( "#"+makModel.build_data.componentNames[nameComponent] ).attr('checked', false);						
			}
			$( "#"+makModel.build_data.componentNames[nameComponent] ).change();
		}
	}

	initializeComponents( makModel['build_id'] );
	setPrice( modelID);


}














/*-------------------------------------------*

	This function sets the prices for the
	3D model items based upon square feet
	and linear feet.

/*-------------------------------------------*/
function setPrice( modelName )
{

	var modelPrice = 0;
	var linFootBench = 1250;
	var sqFootFin = 85;
	var sqFootBacklit = 125;

	if ( modelName == 'bench' )
	{
		var totalLength = parseInt( makModel['build_data']['componentValues']['Twist Length'] ) + 
						  parseInt( makModel['build_data']['componentValues']['Right Seating Length'] ) + 
						  parseInt( makModel['build_data']['componentValues']['Left Seating Length'] );
		modelPrice = Math.round(makStudio['modelPrices'][modelName] * totalLength);
		$('#benchPrice').html( modelPrice );
	}

	if ( modelName == 'finWall' )
	{
		var totalSpace = parseInt( makModel['build_data']['componentValues']['Height of Wall'] ) * 
						parseInt( makModel['build_data']['componentValues']['Lenght of Wall'] );
		modelPrice = Math.round(makStudio['modelPrices'][modelName] * totalSpace / 144);
		$('#finWallPrice').html( modelPrice );
	}


	if ( modelName == 'backlit' )
	{
		var totalSpace = parseInt( makModel['build_data']['componentValues']['Height of Wall'] ) * 
						 parseInt( makModel['build_data']['componentValues']['LENGTH OF WALL'] );
		modelPrice = Math.round(makStudio['modelPrices'][modelName] * totalSpace / 144);
		$('#backlitPrice').html( modelPrice );
	}


	if ( modelName == 'light' )
	{
		var totalSpace = parseInt( makModel['build_data']['componentValues']['Height of Wall'] ) * 
						 parseInt( makModel['build_data']['componentValues']['Lenght of Wall'] );
		modelPrice = Math.round(makStudio['modelPrices'][modelName] * totalSpace / 144);
		$('#backlitPrice').html( modelPrice );
	}


	makModel['build_data']['price'] = modelPrice;

}











/*-------------------------------------------*

	This Function sets the parameters 
	of the light wall fixtures. It needs
	to be broadened for other groups.

/*-------------------------------------------*/
function setModelGroups( )
{

	var det = '';
	var lightNum = 1;

	for (thisItem in makModel['build_data']['componentTypes'])
	{
		if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
		{


			det = det+'<div class="white-section center" style="margin:20px 0px 0px">';
				det = det+'<button type="button" class="btn btn-secondary" id="addLightGroup">Add Light Group</button>';
			det = det+'</div>';

			det = det+'<div class="white-section center" style="margin:20px 0px 0px">';
				det = det+'<button type="button" class="btn btn-danger" id="deleteLightGroup">Delete Light Group</button>';
			det = det+'</div>';



			det = det+'<div class="white-section center" style="margin:20px 0px 0px">';
				det = det+'<label>Select Light</label>';
				det = det+'<select id="lightPicker" class="btn-primary blockDropdown" style="width:100%; height:35px; margin:5px 0px">';
					for (thisGroup in makModel['build_data']['componentValues'][thisItem]['groups'])
					{
						det = det+'<option value="'+thisGroup+'">Light Block'+thisGroup+'</option>';
					}
				det = det+'</select>';
			det = det+'</div>';


			for (thisGroup in makModel['build_data']['componentValues'][thisItem]['groups'])
			{

				det = det+'<div id="lightGroup'+thisGroup+'" class="white-section topmargin center blockDetails">';

					det = det+'<label style="margin-top:10px;">Angle</label>';
					det = det+'<div><input id="'+thisItem+''+thisGroup+'angle" class="groupInput" value="'+makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['angle']+'"></div>';

					det = det+'<label style="margin-top:10px;">X Loc</label>';
					det = det+'<div><input id="'+thisItem+''+thisGroup+'X" class="groupInput" value="'+makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['loc'][0]+'"></div>';

					det = det+'<label style="margin-top:10px;">Y Loc</label>';
					det = det+'<div><input id="'+thisItem+''+thisGroup+'Y" class="groupInput" value="'+makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['loc'][1]+'"></div>';

					var heightNum = 0;
					for ( thisHeight in makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['heights'] )
					{
						det = det+'<div class="row" style="margin-top:40px;">';
							det = det+'<div>Height '+heightNum+'</div>';
							det = det+'<div><input id="'+thisItem+''+thisGroup+'Heights'+heightNum+'" class="groupInput" value="'+makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['heights'][heightNum]+'"></div>';
							det = det+'<i id="'+thisGroup+'-'+heightNum+'" class="icon-remove h3 deleteLight"></i>';
						det = det+'</div>';
						heightNum = heightNum+1;
					}


				det = det+'</div>';
				lightNum = lightNum + 1;
	
			}
				det = det+'<i id="'+thisGroup+'" class="icon-plus h3 addLight"></i>';
	
		}
	
	}

	$("#lightSettings").append(det);

	$('.blockDetails').hide();

}


/*-------------------------------------------*

	When a bundled property is hit entered

/*-------------------------------------------*/
function bundleBlock( bundleName )
{

	console.log('In bundle block');

	for (thisItem in makModel['build_data']['componentTypes'])
	{
		if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
		{

			for (thisGroup in makModel['build_data']['componentValues'][thisItem]['groups'])
			{
				console.log('The item and group are ...');
				console.log(thisItem);
				console.log(thisGroup);
				console.log($( "#"+thisItem+''+thisGroup+'angle' ).val( ));
				makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['angle'] = $( "#"+thisItem+''+thisGroup+'angle' ).val( );
				makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['loc'][0] = $( "#"+thisItem+''+thisGroup+'X' ).val( );
				makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['loc'][1] = $( "#"+thisItem+''+thisGroup+'Y' ).val( );

				var heightNum = 0;
				for ( thisHeight in makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['heights'] )
				{
					makModel['build_data']['componentValues'][thisItem]['groups'][thisGroup]['heights'][heightNum] = $( "#"+thisItem+''+thisGroup+'Heights'+heightNum ).val( );
					heightNum = heightNum+1;
				}

			
			}

			model_api.parameters.updateAsync({name: thisItem, value: JSON.stringify(makModel['build_data']['componentValues'][thisItem]) });

		}

	}

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
			max: 12,
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


		$(".finLogoXSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 200,
			step: 1
		});


		$(".finLogoZSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 200,
			step: 1
		});


		$(".finLogoScaleSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 100,
			step: 1
		});




	}


	if ( modelName == "backlit" )
	{
		$(".backlitLengthSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 240,
			step: 1
		});

		$(".backlitHeightSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 240,
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




	if ( modelName == 'light' )
	{

		$(".lightWidthSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 500,
			step: 1
		});


		$(".lightLengthSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 500,
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
			'bench' 	: 'ccf330f694285fa526a47387edbd0a89e09146369e7b730dbf57fa6354146b1df5390f267e9fe942b42e7571084e91c912c272ff2b7609aed88e123dfd2718afeb773039caed2580fc03c3d0d629a26da06f34f54bc0b3731a19d16c790bd4656b5dad94fd5572642398bc694aaf42b03957e44bbb44-9bc6005b71d9578337b4509851c32a30',
			'finWall' 	: 'f1832e3ad0bcab4aa8d08f894889044419a2570f638a7f334b048c76c7b5c17a90b3f4502981d3bdee2321dcad99ec6d97c6c4d6e4356cb1dd06a9b93b103be1faeb0c1532047b7dc98a74f4fbb16cb861609a7fae45c95d0b03ab311414be24ce6a7ef35142bc04fe359091612e4ba6cc83feb14347-254bf0a71357b2c9f983746bf3867934',
			'backlit' 	: 'b377b948d7f72cee5db1184551e10c1e9f8a34cae0323283b7f5f8831cedc2e26986531436453d00bbce7556061713170f148b9d879fc7e6b2454fce26e030c1c8fb9782aeaaa1fa73ed74ce6059e6daba4a3b682e769ebfe82ee516dfc6b2a0fe3fc30c2fab53476e8f1f82c895f1781fa1746ebd15-b63fe0ed951441432130ea48fe327cf7',
			'faceted' 	: '6a4bbceb3a6a94c8d65543ebfa9d3d5fea7e02d3947dd4d34c6ff5eac325b91da4dcbf461588290b2867aedf44bc773a1b4d0d6f966dd2c8aa83d7a7a0caf6e1c2a2874c6d1ca9c45e245360bb14be9666bf0aad53f1758cf24a5fe9fa880416c71a33f184b47fef9295faa30e99ae1bb05a70f67352-2801291baf32cfcf605d4d7b00d78132',
			'light'		: '3c0d469228cf4904f47b4487932978fd1e9438f83df58a8cd7b7381aaca3472a8d58ca75f16450b90ee4d234b383c365389b9655cd5960ec0aedf3369a4cced2702642506c9c9660e66fcee31493cd15c591b4fa98eaa39c68385fafaf3bd5d2e1abc03562e26930bfa8dd6887b7057de7dad4a704be-6991cd00af723d0ec78fdad4cc0404de'
		},


		'modelPrices' : {
			'bench' : 1250,
			'finWall' : 85,
			'backlit' : 125,
			'light' : 125
		},

		'priceType' : {
			'bench' : 'linear',
			'finWall' : 'square',
			'backlit' : 'square',
			'light' : 'square'
		},

		'containerNames' :{
			'planter' : 'planterWallDisplay',
			'desk' : 'deskDisplay',
			'panel' : 'panelWallDisplay',
			'faceted' : 'currentModelDisplay',
			'bench' : 'currentModelDisplay',
			'backlit' : 'currentModelDisplay',
			'finWall' : 'currentModelDisplay',
			'light' : 'currentModelDisplay'
		},

		'sideMenus' :{
			'bench' : 'benchSection',
			'finWall' : 'finWallSection',
			'backlit' : 'backlitSection',
			'planter' : 'planterSection',
			'desk' : 'deskSection',
			'faceted' : 'facetedSection',
			'panel' : 'panelSection',
			'light' : 'lightSection'
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
				'Position X Logo' : 'finLogoXSlider',
				'Position Z Logo' : 'finLogoZSlider',
				'Logo Intensity (%)' : 'finLogoScaleSlider',
				'Show Original Logo' : '',
				'Show Human Scale' : 'finWallHumanScale',
				'Show Dimensions' : 'finWallShowDimensions',

				'Straight Panels Tolerance' : '',
				'Back Panel Color' : '',
				'Panels Type' : '',
				'Material' : '',
				'Logo?' : 'finLogoOnOff',
				'Colored MDF' : '',
				'Upload Logo' : 'finLogoUpload'

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
				'Header Height' : 'backlitHeaderSlider',
				'Subheader Height' : 'backlitSubheaderSlider',

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
				'Upload Logo' : 'backlitLogoUpload'
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
			},


			'light' : {
				'Ceiling Width' : 'lightWidthSlider',
				'Ceiling Length' : 'lightLengthSlider',
				'GroupsJSON' : 'GroupsJSON'
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
				'Header Height' : 'slider',
				'Subheader Height' : 'slider',

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
				'Upload Logo' : 'file'
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
			},

			'light' : {
				'Ceiling Width' : 'slider',
				'Ceiling Length' : 'slider',
				'GroupsJSON' : 'dataPack'
			}


		}



	}

}
