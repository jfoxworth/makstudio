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

								Handling Models

		When the page loads, the code looks to see if the user is wanting to
		load an existing model or to create one from scratch. If one is created
		from scratch, the model desired is loaded with the generic data.
		

	/*-----------------------------------------------------------------------------*/




	/*------------------------------------------------------------------------------

								On Page Load Code

		This section calls the initial functions that need to be done when the 
		page loads. The data for the models is loaded, bootstrap components are 
		initilized, views are hidden, and the default model is created from 
		shapediver.

	/*-----------------------------------------------------------------------------*/





	// Set CSRF Token
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});


	// Initialize all of the tool tips
	$('[data-toggle="tooltip"]').tooltip();
	$(".bt-switch").bootstrapSwitch();
	$('.selectsplitter').selectsplitter();


	// Set the environment variables that depend upon the URL
	setEnvironment();


	// Initialize data to global variable
	makStudio = initializeData( );


	makBuildNums = {'bench':2, 'finWall':3, 'backlit':4, 'faceted':5, 'light':6, 'desk':7, 'planter':8, 'panel':9, 'flower':12, 'fossil':13 }
	

	// Initialize the new or old model
	if ( MakViewType == 0 )
	{
		initializeNewModel( MakDesignType );
		
		// Set the page to display the default model
		setModelView( MakDesignType );
	
	}else
	{
		setTimeout(
			function() 
			{
				reloadModel( );
			}, 2000);
	}




	// Initialize Amplitude
	if ( $('#navbarDropdown').text().replace(/\r?\n|\r/g,'').trim() != '' )
	{
		amplitude.getInstance().setUserId($('#navbarDropdown').text().replace(/\r?\n|\r/g,'').trim());
	}
	amplitude.getInstance().logEvent('Design Studio');









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
		amplitude.getInstance().logEvent('DS Save Design');

		$.ajax({
			url : "/newInstance",
			method :"PUT",
			data : { 'model' : makModel }

		}).done(function(data) 
		{
			console.log(data);
			window.location.href = "/designStudio/"+data;

		});
		

	});







	// Creating a new build on an existing
	$('#newBuild').click(function(event)	
	{	
		amplitude.getInstance().logEvent('New Build');

		$.ajax({
			url : "/newBuild",
			method :"PUT",
			data : { 'model' : makModel }

		}).done(function(data) 
		{
			console.log(data);
			buildData = data;
			reloadModel( buildData[buildData.length-1] );
		});
		

	});





	// Clicking on the login
	$('#designLogin').click(function(event)	
	{	
		window.location.href="http://www.makstudio.us/login";
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

		amplitude.getInstance().logEvent('DS Save Model');
	});



	// When the user clicks on the camera icon in the top
	// menu to recenter the view
	$('#recenterCamera').click(function(event)	
	{	
		model_api.scene.camera.zoomAsync();

		amplitude.getInstance().logEvent('DS Recenter Camera');
	});

	// END OF TOP ROW OF BUTTONS



	// SECOND ROW OF BUTTONS


	// When the user clicks on one of the design type boxes to change the model type
	$('.designType').click(function(event)	
	{	
		MakDesignType = event.target.id;

		$( '#currentModelDisplay' ).html('');

		initializeNewModel( event.target.id );

		setModelView(event.target.id);

		// Shade the current item
		$('.designType').removeClass('currentItem');
		$('#'+event.target.id).parent().addClass('currentItem');

		if ( ( MakDesignType == "finWall" ) || ( MakDesignType == "backlit" ) || ( MakDesignType == "faceted" ) ||
			 ( MakDesignType == "bench") || (MakDesignType == "light") || (MakDesignType == "flower") || (MakDesignType == "fossil") )
		{
			$('#modelNameContainer').show();
			$('#currentModelDisplay').show();
		
		}else
		{
			$('#currentModelDisplay').hide();
			$('#modelNameContainer').hide();
		}


		amplitude.getInstance().logEvent('DS Model Type - '+MakDesignType);

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

		amplitude.getInstance().logEvent('DS Parameters - '+elementToShow);

	});

	// END OF THIRD ROW OF BUTTONS












	/* -------------------------------------- *

			  Edit Model Name

	/* ---------------------------------------*/

	$('#editModelName').click(function()	
	{			
		$('#editModelName').hide();
		$('#modelDisplayName').hide();
		$('#modelNameInput').show();
		$('#modelNameInput').val(instanceData.name);

	});


	$('#modelNameInput').on('keypress',function(e) {
		if(e.which == 13) {

			instanceData.name = $('#modelNameInput').val();
			$('#modelNameInput').hide();
			$('#editModelName').show();
			$('#modelDisplayName').text(instanceData.name);
			$('#modelDisplayName').show();

			updateInstance();
		}
	});







	/* -------------------------------------- *

			  Edit Build Name

	/* ---------------------------------------*/

	$('#editBuildName').click(function()	
	{			
		$('#editBuildName').hide();
		$('#buildDisplayName').hide();
		$('#buildNameInput').show();
		$('#buildNameInput').val(makModel.build_data.name);

	});


	$('#buildNameInput').on('keypress',function(e) {
		
		if(e.which == 13) 
		{

			// Show / hide the appropriate things
			makModel.build_data.name = $('#buildNameInput').val();
			$('#buildNameInput').hide();
			$('#editBuildName').show();
			$('#buildDisplayName').text(makModel.build_data.name);
			$('#buildDisplayName').show();


			// Update the build data
			buildData.forEach(function(obj) 
			{
				if ( obj.id == makModel.id )
				{
					obj.build_data.name = JSON.parse(JSON.stringify(makModel.build_data.name));
				}
			});


			// Reset the name of the dropdowns
			var newOptions = {};
			buildData.forEach(function(obj) 
			{
				newOptions[obj.id] = obj.build_data.name;
			});

			var $el = $("#buildID");
			$el.empty(); // remove old options
			$.each(newOptions, function(key,value) {
			  $el.append($("<option></option>")
			     .attr("value", key).text(value));
			});


			updateModel( );			

		}
	});














	/* -------------------------------------- *

			  Lock the Build

	/* ---------------------------------------*/

	$('#lockBuild').click(function()	
	{			

		instanceData['locked'] = true;
		updateInstance();


		// Hide the design and build options and show the locked option
		$('.buildOption').hide();
		$('.designOption').hide();
		$('.lockedOption').show();

	});















	/* -------------------------------------- *

			  API Calls

		User interacting with the sliders, 
		buttons, etc

	/* ---------------------------------------*/

	$('#finStyleCurved').click(function()	
	{			
		model_api.parameters.updateAsync({name: "Panels Type", value: 0 });
		amplitude.getInstance().logEvent('DS Fin Wall Curved');
	});

	$('#finStyleAngled').click(function()
	{			
		model_api.parameters.updateAsync({name: "Panels Type", value: 1 });
		amplitude.getInstance().logEvent('DS Fin Wall Angled');
	});


	$('#finMaterialBirch').click(function()
	{			
		model_api.parameters.updateAsync({name: "Material", value: 0 });
		$('#finMaterialBirch').addClass('currentItem');
		$('#finMaterialLamBirch').removeClass('currentItem');
		$('#finMaterialMDF').removeClass('currentItem');
		amplitude.getInstance().logEvent('DS Fin Wall Birch');
	});

	$('#finMaterialLamBirch').click(function()
	{			
		model_api.parameters.updateAsync({name: "Material", value: 1 });
		$('#finMaterialLamBirch').addClass('currentItem');
		$('#finMaterialBirch').removeClass('currentItem');
		$('#finMaterialMDF').removeClass('currentItem');
		amplitude.getInstance().logEvent('DS Fin Wall Laminated Birch');
	});


	$('#finMaterialMDF').click(function()
	{			
		model_api.parameters.updateAsync({name: "Material", value: 2 });
		$('#finMaterialMDF').addClass('currentItem');
		$('#finMaterialBirch').removeClass('currentItem');
		$('#finMaterialLamBirch').removeClass('currentItem');
		amplitude.getInstance().logEvent('DS Fin Wall MDF');
	});




	$('#backlitHeader').on('keypress',function(e) {
		if(e.which == 13) {
			model_api.parameters.updateAsync({name: "Header", value: $('#backlitHeader').val() });
			amplitude.getInstance().logEvent('Backlit Header');
		}
	});


	$('#backlitSubheader').on('keypress',function(e) {
		if(e.which == 13) {
			model_api.parameters.updateAsync({name: "Subheader", value: $('#backlitSubHeader').val() });
			amplitude.getInstance().logEvent('Backlit Subheader');
		}
	});





	// When enter is hit on one of the text inputs
	$('.textParameterInput').on('keypress',function(event) {
		if(event.which == 13) {

			var paramName = event.target.id.replace("Input", "Slider");
			makModel['build_data']['componentValues'][paramName] = $('#'+event.target.id).val();
			$('#'+paramName).val( $('#'+event.target.id).val() );

			for (thisComponent in makStudio.componentNames[MakDesignType])
			{
				if ( paramName == makStudio.componentNames[MakDesignType][thisComponent] )
				{
					model_api.parameters.updateAsync({name: thisComponent, value: $('#'+paramName).val() });
				}
			}

			$('.'+paramName).data("ionRangeSlider").update({'from':$('#'+event.target.id).val()})

			setPrice( MakDesignType );

			amplitude.getInstance().logEvent('DS - '+paramName);
		}

	});


	$('.modelSlider, .modelDropdown').change(function(event)	
	{	

		for (thisComponent in makStudio.componentNames[MakDesignType])
		{
			//console.log('Comparing '+event.target.id+' to '+makStudio.componentNames[MakDesignType][thisComponent]);

			if ( event.target.id == makStudio.componentNames[MakDesignType][thisComponent] )
			{
				//console.log('Should be updating model parameter '+thisComponent+' with '+$('#'+event.target.id).val());
				model_api.parameters.updateAsync({name: thisComponent, value: $('#'+event.target.id).val() });
				makModel['build_data']['componentValues'][thisComponent] = $('#'+event.target.id).val();
			}
		}

		setPrice( MakDesignType);

		var paramName = event.target.id.replace("Slider", "Input");
		$('#'+paramName).val($('#'+event.target.id).val());
		amplitude.getInstance().logEvent(paramName);

	});




	$('.modelSwitch').on('switchChange.bootstrapSwitch', function(e) 
	{


		for (thisComponent in makStudio.componentNames[MakDesignType])
		{
			if ( e.target.id == makStudio.componentNames[MakDesignType][thisComponent] )
			{
				model_api.parameters.updateAsync({name: thisComponent, value: e.target.checked });
				makModel['build_data']['componentValues'][thisComponent] = e.target.checked;
				amplitude.getInstance().logEvent(thisComponent);
			}
		}

		setPrice( MakDesignType );

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
				amplitude.getInstance().logEvent('Backlit Logo Upload');
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
				amplitude.getInstance().logEvent('Finwall Logo Upload');
			}
	  	);
	});




	// When the user selects one of the lights
	$(document).on('change', '.blockDropdown', function(event)
	{	
		$('.blockDetails').hide();
		$('#lightGroup'+event.target.value).show();
		amplitude.getInstance().logEvent('Lightgroup Select');

	});

	// When the user hits enter on a light property
	$(document).on('keypress', '.groupInput', function(e)
	{	
		if(e.which == 13) 
		{
			bundleBlock( e.target.id );
			amplitude.getInstance().logEvent('Light Property - '+e.target.id);
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
				amplitude.getInstance().logEvent('Delete Light');

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
				amplitude.getInstance().logEvent('Add Light Group');

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
				amplitude.getInstance().logEvent('Add Light');

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
				amplitude.getInstance().logEvent('Delete Light');

			}

		}
	});






	// Pick a flower
	$(document).on('change', '#flowerPicker', function(e)
	{	
		window['currentFlowerIndex'] = $('#flowerPicker').val();
		if ( window['currentFlowerIndex'] === undefined ) { window['currentFlowerIndex'] = 0; }

		$('#flowerXLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['position'][0] );
		$('#flowerYLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['position'][1] );
		$('#flowerSize').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['size'] );
		$('#flowerRot').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['rotation'] );
		amplitude.getInstance().logEvent('Change Flower');

	});


	// Add a flower
	$(document).on('click', '#addFlower', function(e)
	{	
		var newFlower = {'size':10, 'rotation':90, 'position':[10, 10] };
		var thisLength = makModel['build_data']['componentValues']['flowersJSON']['flowers'].length;
		makModel['build_data']['componentValues']['flowersJSON']['flowers'].splice( thisLength, 1, newFlower);
		window['currentFlowerIndex'] = thisLength;
		$('#flowerXLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][thisLength]['position'][0] );
		$('#flowerYLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][thisLength]['position'][1] );
		$('#flowerSize').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][thisLength]['size'] );
		$('#flowerRot').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][thisLength]['rotation'] );
		model_api.parameters.updateAsync({name: 'flowersJSON', value: JSON.stringify(makModel['build_data']['componentValues']['flowersJSON']) });
		amplitude.getInstance().logEvent('Add Flower');
		var flowerOptions = {};
		for (thisGroup in makModel['build_data']['componentValues']['flowersJSON']['flowers'])
		{
			flowerOptions[thisGroup] = 'Flower - '+thisGroup;
		}

		var $el = $("#flowerPicker");
		$el.empty(); // remove old options
		$.each(flowerOptions, function(key,value) {
		  $el.append($("<option></option>")
			 .attr("value", key).text(value));
		});
	});



	// Delete a flower
	$(document).on('click', '#deleteFlower', function(e)
	{	
		makModel['build_data']['componentValues']['flowersJSON']['flowers'].splice( currentFlowerIndex, 1);
		amplitude.getInstance().logEvent('Delete Flower');
		model_api.parameters.updateAsync({name: 'flowersJSON', value: JSON.stringify(makModel['build_data']['componentValues']['flowersJSON']) });
		currentFlowerIndex = currentFlowerIndex - 1;
		var flowerOptions = {};
		for (thisGroup in makModel['build_data']['componentValues']['flowersJSON']['flowers'])
		{
			flowerOptions[thisGroup] = 'Flower - '+thisGroup;
		}

		var $el = $("#flowerPicker");
		$el.empty(); // remove old options
		$.each(flowerOptions, function(key,value) {
		  $el.append($("<option></option>")
			 .attr("value", key).text(value));
		});
	});


	// Change the X Location
	$(document).on('keypress', '#flowerXLoc', function(e)
	{	
		if(e.which == 13) 
		{
			makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['position'][0] = $('#flowerXLoc').val();
			amplitude.getInstance().logEvent('Flower X');
			model_api.parameters.updateAsync({name: 'flowersJSON', value: JSON.stringify(makModel['build_data']['componentValues']['flowersJSON']) });
		}
	});

	// Change the Y Location
	$(document).on('keypress', '#flowerYLoc', function(e)
	{	
		if(e.which == 13) 
		{
			makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['position'][1] = $('#flowerYLoc').val();
			amplitude.getInstance().logEvent('Flower Y');
			model_api.parameters.updateAsync({name: 'flowersJSON', value: JSON.stringify(makModel['build_data']['componentValues']['flowersJSON']) });
		}
	});


	// Change the size
	$(document).on('keypress', '#flowerSize', function(e)
	{	
		if(e.which == 13) 
		{
			makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['size'] = $('#flowerSize').val();
			amplitude.getInstance().logEvent('Flower Size');
			model_api.parameters.updateAsync({name: 'flowersJSON', value: JSON.stringify(makModel['build_data']['componentValues']['flowersJSON']) });
		}
	});


	// Change the rotation
	$(document).on('keypress', '#flowerRot', function(e)
	{	
		if(e.which == 13) 
		{
			makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['rotation'] = $('#flowerRot').val();
			amplitude.getInstance().logEvent('Flower Rotation');
			model_api.parameters.updateAsync({name: 'flowersJSON', value: JSON.stringify(makModel['build_data']['componentValues']['flowersJSON']) });
		}
	});




	// WHen the user clicks on a displayed model
	// that they have saved adn they want to 
	// view it
	$(document).on('click', '.potenModel', function(event)
	{	
		reloadModel( event.target.id );
		amplitude.getInstance().logEvent('Load Model - '+event.target.id);
	});








	// When the user clicks on a displayed model
	// with the intent to delete it
	$(document).on('click', '.deleteModel', function(event)
	{	
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

			amplitude.getInstance().logEvent('Delete Model - '+event.target.id);

		});
		
	});




	$(document).on('click', '.modelDetailsShow', function(event)
	{	
		$('.modelDetails').hide();
		$('#'+event.target.id+'Details').show();
		amplitude.getInstance().logEvent('Model Details - '+event.target.id);


	});


	const inputElement = document.querySelector('.pickr');

	const pickr = new Pickr({
	  el: inputElement,
	  useAsButton: true,
	  default: '#42445A',
	  theme: 'classic',

	  swatches: [
		'rgba(244, 67, 54, 1)',
		'rgba(233, 30, 99, 0.95)',
		'rgba(156, 39, 176, 0.9)',
		'rgba(103, 58, 183, 0.85)',
		'rgba(63, 81, 181, 0.8)',
		'rgba(33, 150, 243, 0.75)',
		'rgba(3, 169, 244, 0.7)',
		'rgba(0, 188, 212, 0.7)',
		'rgba(0, 150, 136, 0.75)',
		'rgba(76, 175, 80, 0.8)',
		'rgba(139, 195, 74, 0.85)',
		'rgba(205, 220, 57, 0.9)',
		'rgba(255, 235, 59, 0.95)',
		'rgba(255, 193, 7, 1)'
	  ],

	  components: {
		preview: true,
		opacity: true,
		hue: true,

		interaction: {
		  hex: true,
		  rgba: true,
		  hsva: true,
		  input: true,
		  save: true
		}
	  }
	}).on('init', pickr => {
		inputElement.value = pickr.getSelectedColor().toRGBA().toString(0);
	}).on('save', color => {
		console.log('I should be saving the color - '+inputElement.value);
		console.log(pickr);
		inputElement.value = color.toRGBA().toString(0);
		pickr.hide();
		model_api.parameters.updateAsync({name: 'Colored MDF', value: inputElement.value });
		makModel['build_data']['componentValues']['Colored MDF'] = inputElement.value;

	})




	const inputBackElement = document.querySelector('.backpickr');

	const backPickr = new Pickr({
	  el: inputBackElement,
	  useAsButton: true,
	  default: '#42445A',
	  theme: 'classic',

	  swatches: [
		'rgba(244, 67, 54, 1)',
		'rgba(233, 30, 99, 0.95)',
		'rgba(156, 39, 176, 0.9)',
		'rgba(103, 58, 183, 0.85)',
		'rgba(63, 81, 181, 0.8)',
		'rgba(33, 150, 243, 0.75)',
		'rgba(3, 169, 244, 0.7)',
		'rgba(0, 188, 212, 0.7)',
		'rgba(0, 150, 136, 0.75)',
		'rgba(76, 175, 80, 0.8)',
		'rgba(139, 195, 74, 0.85)',
		'rgba(205, 220, 57, 0.9)',
		'rgba(255, 235, 59, 0.95)',
		'rgba(255, 193, 7, 1)'
	  ],

	  components: {
		preview: true,
		opacity: true,
		hue: true,

		interaction: {
		  hex: true,
		  rgba: true,
		  hsva: true,
		  input: true,
		  save: true
		}
	  }
	}).on('init', pickr => {
	  inputBackElement.value = backPickr.getSelectedColor().toRGBA().toString(0);
	}).on('save', color => {
		inputBackElement.value = color.toRGBA().toString(0);
		console.log('I should be saving the back color - '+inputBackElement.value);
		console.log(backPickr);
		backPickr.hide();
		model_api.parameters.updateAsync({name: 'Back Panel Color', value: inputBackElement.value });
		makModel['build_data']['componentValues']['Back Panel Color'] = inputBackElement.value;

	})









	/*------------------------------------------------------------------------------------------------------------*

		Modal Calls

	/*------------------------------------------------------------------------------------------------------------*/


	// Bench Modal
	$(document).on('click', '#benchModalCall', function(e)
	{	

		var planterValues = {
			0 : 'No Planter',
			1 : 'Quarter Planter',
			2 : 'Half Planter',
			3 : 'Three Quarter Planter',
			4 : 'Full Planter'
		};


		$('#benchQuoteModal').modal('show');
		$('#leftBenchLengthQuote').text(makModel.build_data.componentValues['Left Seating Length']);
		$('#rightBenchLengthQuote').text(makModel.build_data.componentValues['Right Seating Length']);
		$('#benchDepthQuote').text(makModel.build_data.componentValues['Bench Depth']);
		$('#benchHeightQuote').text(makModel.build_data.componentValues['Bench Height']);
		$('#benchTwistLengthQuote').text(makModel.build_data.componentValues['Twist Length']);
		$('#benchRightPlanterQuote').text(planterValues[makModel.build_data.componentValues['Right Planter']]);
		$('#benchLeftPlanterQuote').text(planterValues[makModel.build_data.componentValues['Left Planter']]);
		$('#benchModalPriceQuote').text('$ '+makModel.build_data['price']);
	});





	// Flower Wall Modal
	$(document).on('click', '#flowerModalCall', function(e)
	{	

		$('#flowerQuoteModal').modal('show');
		$('#flowerWallHeightQuote').text(makModel.build_data.componentValues['Wall Height']);
		$('#flowerWallWidthQuote').text(makModel.build_data.componentValues['Wall Width']);
		$('#flowerWallNumbersQuote').text(makModel.build_data.componentValues['flowersJSON']['flowers'].length);

		$('#flowerWallModalPriceQuote').text('$ '+makModel.build_data['price']);

	});



	// Fin Wall Modal
	$(document).on('click', '#finWallModalCall', function(e)
	{	
		var materialTypes = {
			0 : 'Baltic Birch',
			1 : 'Baltic Birch Laminate',
			2 : 'Colored MDF'
		};

		var panelTypes = {
			0 : 'Curved',
			1 : 'Angled'
		};


		$('#finWallQuoteModal').modal('show');
		$('#finWallHeightQuote').text(makModel.build_data.componentValues['Height of Wall']);
		$('#finWallLengthQuote').text(makModel.build_data.componentValues['Lenght of Wall']);
		$('#finWallShowLogoQuote').text(makModel.build_data.componentValues['Logo?']);
		$('#finWallMaterialQuote').text(materialTypes[makModel.build_data.componentValues['Material']]);
		$('#finWallXQuote').text(makModel.build_data.componentValues['Position X Logo (%)']);
		$('#finWallYQuote').text(makModel.build_data.componentValues['Position Z Logo (%)']);
		$('#finWallDepthQuote').text(makModel.build_data.componentValues['Wall Depth']);
		$('#finWallSpacingQuote').text(makModel.build_data.componentValues['Spacing of Fins']);
		$('#finWallRippleXQuote').text(makModel.build_data.componentValues['Ripple Center Location (Down - Up) (%)']);
		$('#finWallRippleYQuote').text(makModel.build_data.componentValues['Ripple Center Location (Left-Right) (%)']);
		$('#finWallPanelTypeQuote').text(panelTypes[makModel.build_data.componentValues['Panels Type']]);

		$('#finWallModalPriceQuote').text('$ '+makModel.build_data['price']);
	});





	// Backlit Modal
	$(document).on('click', '#backlitModalCall', function(e)
	{	

		$('#backlitQuoteModal').modal('show');
		$('#backlitLengthQuote').text(makModel.build_data.componentValues['LENGTH OF WALL']);
		$('#backlitWidthQuote').text(makModel.build_data.componentValues['Height of Wall']);
		$('#backlitLogoQuote').text(makModel.build_data.componentValues['Logo?']);
		$('#backlitFlatAreaQuote').text(makModel.build_data.componentValues['Create Flat Area?']);
		$('#backlitLogoScaleQuote').text(makModel.build_data.componentValues['Logo Scale']);
		$('#backlitLogoZQuote').text(makModel.build_data.componentValues['Logo Z Location']);
		$('#backlitLogoXQuote').text(makModel.build_data.componentValues['Logo X Location']);
		$('#backlitWallRoughQuote').text(makModel.build_data.componentValues['Wall Roughness']);
		$('#backlitWaveAmpQuote').text(makModel.build_data.componentValues['Wave Amplitude']);
		$('#backlitWaveDepthQuote').text(makModel.build_data.componentValues['Waves Depth']);
		$('#backlitQuote').text(makModel.build_data.componentValues['']);

		$('#backlitModalPriceQuote').text('$ '+makModel.build_data['price']);
	});





	// Faceted Modal
	$(document).on('click', '#facetedModalCall', function(e)
	{	

		$('#facetedQuoteModal').modal('show');
		$('#facetedARotQuote').text(makModel.build_data.componentValues['Panel A Rotation']);
		$('#facetedBRotQuote').text(makModel.build_data.componentValues['Panel B Rotation']);
		$('#facetedCRotQuote').text(makModel.build_data.componentValues['Panel C Rotation']);
		$('#facetedDRotQuote').text(makModel.build_data.componentValues['Panel D Rotation']);
		$('#facetedERotQuote').text(makModel.build_data.componentValues['Panel E Rotation']);
		$('#facetedFRotQuote').text(makModel.build_data.componentValues['Panel F Rotation']);
		$('#facetedGRotQuote').text(makModel.build_data.componentValues['Panel G Rotation']);
		$('#facetedHRotQuote').text(makModel.build_data.componentValues['Panel H Rotation']);
		$('#facetedIRotQuote').text(makModel.build_data.componentValues['Panel I Rotation']);
		$('#facetedJRotQuote').text(makModel.build_data.componentValues['Panel J Rotation']);
		$('#facetedKRotQuote').text(makModel.build_data.componentValues['Panel K Rotation']);
		$('#facetedLRotQuote').text(makModel.build_data.componentValues['Panel L Rotation']);
		$('#facetedMRotQuote').text(makModel.build_data.componentValues['Panel M Rotation']);

		$('#facetedModalPriceQuote').text('$ '+makModel.build_data['price']);
	});




	// Fossil Modal
	$(document).on('click', '#fossilModalCall', function(e)
	{	

		$('#fossilQuoteModal').modal('show');
		$('#fossilWidthQuote').text(makModel.build_data.componentValues['Wall Width']);
		$('#fossilHeightQuote').text(makModel.build_data.componentValues['Wall Height']);
		$('#fossilShapeCountQuote').text(makModel.build_data.componentValues['Shape Count']);
		$('#fossilFactorQuote').text(makModel.build_data.componentValues['Factor']);

		$('#fossilModalPriceQuote').text('$ '+makModel.build_data['price']);
	});







	// Panel Modal
	$(document).on('click', '#panelModalCall', function(e)
	{	

		$('#panelQuoteModal').modal('show');
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);
		$('#panelQuote').text(makModel.build_data.componentValues['']);

		$('#panelModalPriceQuote').text('$ '+makModel.build_data['price']);
	});








	// Request quote
	$(document).on('click', '.getQuote', function(e)
	{	

		console.log('Getting a quote');

		amplitude.getInstance().logEvent('Quote Requested - '+makModel['build_id']);


		// Set CSRF Token
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});


		if ( $('#'+makModel['build_id']+'GuestEmail').val() === undefined )
		{
			var userEmail = '';
		}else
		{
			userEmail = $('#'+makModel['build_id']+'GuestEmail').val();
		}

		$.ajax({
			url : "/getQuote",
			method :"POST",
			data :  { 'model' : makModel, 'email' : userEmail }

		}).done(function() 
		{
			console.log('I sent a quote email');
			$('#backlitQuoteModal').modal('hide');
			$('#fossilQuoteModal').modal('hide');
			$('#facetedQuoteModal').modal('hide');
			$('#finWallQuoteModal').modal('hide');
			$('#flowerQuoteModal').modal('hide');
			$('#benchQuoteModal').modal('hide');

		});

	});





});
















/*------------------------------------------------------------------------------------------------------------*

	This function is the first one called when the page loads. It takes a look at the URL to determine
	what the user wants to do. If the URL has a model phrase at the end, that model is loaded and it 
	is assumed that the user wants to build a model of that type. If nothing is after "design studio"
	then it defaults to "bench".

	If the last item is a number, it is assumed that this is the ID of an existing model and the user
	is presented with the info for that model (if it is theirs). On this page, they are allowed to 
	add builds and see the other info in it.

	variables set - window level
	MakViewType
	MakDesignType

/*-----------------------------------------------------------------------------------------------------------*/
function setEnvironment( )  
{

	// Hide the inputs
	$('#modelNameInput').hide();
	$('#buildNameInput').hide();


	// Set the overall variable for the model type
	var designType = window.location.href.replace('http://www.makstudio.us/designStudio/','').replace('http://www.makstudio.us/designStudio','').replace(/\/$/, "");

	// If the parameter is a number, this is an existing model
	if ( $.isNumeric( designType ) )
	{
		window['MakViewType'] = 1;

		// Get the build and instance for the model
		getBuilds( window.location.href.replace('http://www.makstudio.us/designStudio/', '') );
		getInstance( window.location.href.replace('http://www.makstudio.us/designStudio/', '') );

	
	// If not a number, continue investigating type but set view to new
	}else
	{
		
		// This is a blank design, so hide the name editors
		$('#modelNameRow').hide();
		$('#buildNameRow').hide();

		window['MakViewType'] = 0;

		// If no model is indicated, set default to bench
		if ( designType == '' )
		{
			window['MakDesignType'] = 'bench';		 
		
		// Set design type to entered model
		}else 
		{
			if ( (designType == 'bench') || (designType == 'finWall') || (designType == 'backlit') ||
				 (designType == 'faceted') || (designType == 'light') || (designType == 'planter') ||
				 (designType == 'desk') || (designType == 'panel') || (designType == 'flower') ||
				 (designType == 'fossil') )
			{
				window['MakDesignType'] = designType; 
			}else
			{
				window['MakDesignType'] = 0; // An error occured somewhere 
			}
		}

	}


}









/*------------------------------------------------------------------------------------------------------------*

	This function initializes a model. This is for a new model only. The API is called and
	the default data is placed into the inputs and the model properties

/*-----------------------------------------------------------------------------------------------------------*/
function initializeNewModel( modelName )  
{


	// Reset the main api variable
	model_api = {};

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
	}, 3000);


}












/*----------------------------------------------------------------------------*

	This is the function called whenever the user changes the side menu 
	by selecting a new model.

	It also sets the view for a new model or an old model

/*----------------------------------------------------------------------------*/
function setModelView( modelName )
{

	// Display the tabs for the build scene or the design studio for an undefined model
	if ( MakViewType == 0 )
	{
		$('.buildOption').hide();
		$('.designOption').show();
	}else
	{
		$('.designOption').hide();
		$('.buildOption').show();
	}


	// Handle the locked item 
	$('.lockedOption').hide();
	if ( instanceData !== undefined )
	{
		if ( instanceData.locked !== undefined )
		{
			if ( instanceData.locked )
			{
				$('.buildOption').hide();
				$('.designOption').hide();
				$('.lockedOption').show();

			}
		}

	}


	// Hide all models
	for (thisContainer in makStudio.containerNames)
	{
		$('#'+makStudio['containerNames'][thisContainer]).hide();
	}


	// Name of the file
	$('#modelName').parent().hide();
	if ( ( modelName == 'bench' ) || ( modelName == 'finWall' ) || ( modelName == 'backlit' ) || 
		 ( modelName == 'faceted' ) || ( modelName == 'flower' ) || ( modelName == 'fossil' ) )
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


	// Shade the current item
	$('.designType').removeClass('currentItem');
	$('#'+MakDesignType).parent().addClass('currentItem');


	$( '#saveMessageAlert' ).hide( );
	$( '#deleteMessageAlert' ).hide( );

}








/*------------------------------------------------*

	This function populates a new model object 
	with the default options and values

/*------------------------------------------------*/
function setDefaultModelData( modelName )
{


	// Pull the values from the shape diver ticket
	thisData = model_api.parameters.get();

	var tempDate = new Date().toUTCString();

	// Make the global variable holding the model
	window['makModel'] = {
		'id' : '',
		'created_at' : '',
		'modified_at' : '',
		'user_id' : '',
		'instance_id' : '',
		'build_id' : modelName,
		'build_num' : makBuildNums[modelName],
		'build_data' : {
			'name' : 'New '+modelName+' - '+tempDate,
			'componentNames' : makStudio.componentNames[modelName],
			'componentTypes' : makStudio.componentTypes[modelName],
			'ticket' : makStudio.modelTickets[modelName],
			'componentValues' : {}
		}
	};



	// Set the file name to the un named value
	$("#modelName").text( 'New '+modelName+' - '+tempDate );



	// Loop through the data and set the parameters to the
	// proper values. Elements on front end were already
	// named the necessary value to make this work
	thisData.data.forEach(function(element) {

		for (componentName in makStudio.componentNames[modelName])
		{
			//console.log('Comparing '+componentName+' to '+element.name);
			if ( componentName == element.name )
			{
				//console.log('The type is '+makStudio.componentTypes[modelName][componentName]);
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
					//console.log('Setting '+componentName);
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
	setTimeout(function () {
		setDragDrop();
	}, 3000);




}











/*-------------------------------------------*

	This function saves the current mode
	in the database

/*-------------------------------------------*/
function saveModel( modelName )
{
	// Place the name given in the popup in the name
	if ( ( modelName != "" ) && ( modelName !== undefined ) )
	{
		makModel['build_data']['name']=modelName;
		$("#modelName").text( modelName );
	}


	// For every entry saved in the array, get that value
	// and save it into an object
	for (nameComponent in makModel.build_data.componentNames )
	{

		for (typeComponent in makModel.build_data.componentTypes )
		{

			if ( nameComponent == typeComponent )
			{

				//console.log('The name is '+nameComponent);
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

	amplitude.getInstance().logEvent('Save Model - '+makModel.id);

}













/*-------------------------------------------*

	This function updates the current mode
	in the database

/*-------------------------------------------*/
function updateModel( modelName )
{
	// Place the name given in the popup in the name
	if ( ( modelName !== "" ) && ( modelName !== undefined ) )
	{
		makModel['build_data']['name']=modelName;
		$("#modelName").text( modelName );
	}


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

		amplitude.getInstance().logEvent('Update Model - '+makModel.id);

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








/*----------------------------------------------------------------------------*

	This function loads a build based upon an ID given through the input.
	If no build ID was given, the latest one is loaded

/*----------------------------------------------------------------------------*/
function reloadModel( modelID )
{

	if ( modelID === undefined )
	{
		makModel = buildData[buildData.length-1];
	
	}else
	{

		buildData.forEach(function(build) 
		{
			if ( element.id == modelID )
			{
				makModel = build;
			}
		});

	}

	$("#modelName").text( makModel.build_data.name );
	MakDesignType = makModel['build_id'];
	setModelView( MakDesignType );
	$( '#currentModelDisplay' ).html('');


	// Set or reset the main api variable 
	model_api = {};

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
				//console.log('Setting '+nameComponent+' to '+makModel.build_data.componentValues[nameComponent]);
				model_api.parameters.updateAsync({name: nameComponent, value: makModel.build_data.componentValues[nameComponent] });
			}
		}



		for (nameComponent in makModel.build_data.componentNames )
		{
			//console.log('Setting '+nameComponent+' - '+makModel.build_data.componentTypes[nameComponent]+' to '+makModel.build_data.componentValues[nameComponent]);
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
		setTimeout(function () {
			setPrice( modelID);
			setDragDrop();
		}, 3000);


	}, 3000);



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


	if ( modelName == 'flower' )
	{
		var totalSpace = parseInt( makModel['build_data']['componentValues']['Wall Height'] ) * 
						 parseInt( makModel['build_data']['componentValues']['Wall Width'] );
		modelPrice = Math.round(makStudio['modelPrices'][modelName] * totalSpace / 144);
		$('#flowerPrice').html( modelPrice );
	}

	if ( modelName == 'fossil' )
	{
		var totalSpace = parseInt( makModel['build_data']['componentValues']['Wall Height'] ) * 
						 parseInt( makModel['build_data']['componentValues']['Wall Width'] );
		modelPrice = Math.round(makStudio['modelPrices'][modelName] * totalSpace / 144);
		$('#fossilPrice').html( modelPrice );
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



	if ( MakDesignType == 'light' )
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
							det = det+'<option value="'+thisGroup+'">Light Block - '+thisGroup+'</option>';
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


	if ( MakDesignType == 'flower' )
	{
		var flowerOptions = {};
		for (thisGroup in makModel['build_data']['componentValues']['flowersJSON']['flowers'])
		{
			flowerOptions[thisGroup] = 'Flower - '+thisGroup;
		}

		var $el = $("#flowerPicker");
		$el.empty(); // remove old options
		$.each(flowerOptions, function(key,value) {
		  $el.append($("<option></option>")
			 .attr("value", key).text(value));
		});

		window['currentFlowerIndex'] = 0;
		$('#flowerXLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][0]['position'][0] );
		$('#flowerYLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][0]['position'][1] );
		$('#flowerSize').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][0]['size'] );
		$('#flowerRot').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][0]['rotation'] );

	}


}


/*-------------------------------------------*

	When a bundled property is hit entered

/*-------------------------------------------*/
function bundleBlock( bundleName )
{

	for (thisItem in makModel['build_data']['componentTypes'])
	{
		if ( makModel['build_data']['componentTypes'][thisItem] == 'dataPack' )
		{

			for (thisGroup in makModel['build_data']['componentValues'][thisItem]['groups'])
			{
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












/*--------------------------------------------------------*

	This function sets the items to be dragged and
	dropped in the current model.

/*-------------------------------------------------------*/
function setDragDrop( )
{


			if ( MakDesignType == "flower" )
			{

				var flowersID;
				var panelsScenePath;
				var flowersJSON = makModel.build_data.componentValues.flowersJSON;

				//define effects for selectable, hoverable and draggable flowers
				var hoverSelectDragEffect = {
					active: {
						name: 'colorHighlight',
						options: {
							color: [0, 255, 0]
						}
					}
				};

				//flowers in the scene should be hoverable and draggable
				var flowersGroup = {
					id: "flowers_group",
					draggable: true,
					dragEffect: hoverSelectDragEffect,
					hoverable: true,
					hoverEffect: hoverSelectDragEffect,
					selectable: false,
					selectionEffect: hoverSelectDragEffect
				};


				//add interaction group to the scene
				model_api.scene.updateInteractionGroups([flowersGroup]);

				//get 3D assets
				var assets = model_api.scene.get(null, "CommPlugin_1").data;


				//look for flowers and panels assets
				for (var i = 0; i < assets.length; ++i) 
				{
					if (assets[i].material != undefined) 
					{
						if (assets[i].name == "Flowers") 
						{
							flowersID = assets[i].id;
						
						}else if (assets[i].name == "Panels") 
						{
							panelsScenePath = assets[i].scenePath;
						}
					}
				}

				//update flowers 3D asset to make it draggable and hoverable
				model_api.scene.updatePersistentAsync({
					id: flowersID,
					interactionGroup: flowersGroup.id,
					interactionMode: "sub",
					dragPlaneNormal: { x: 0, y: 1, z: 0 }
				}, 'CommPlugin_1');


				//add event listener to detect flower dragging
				model_api.scene.addEventListener(model_api.scene.EVENTTYPE.DRAG_END, function (res) {

					var draggedScenePath = res.scenePath.split(".");

					//check if the dragged element is a flower
					if (draggedScenePath[1] == flowersID) {
						var draggedFlower = draggedScenePath[2].split("_")[1];


						// Mark the selected flower as the current one and update the data
						window['currentFlowerIndex'] = draggedFlower;
						$('#flowerXLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['position'][0] );
						$('#flowerYLoc').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['position'][1] );
						$('#flowerSize').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['size'] );
						$('#flowerRot').val( makModel['build_data']['componentValues']['flowersJSON']['flowers'][currentFlowerIndex]['rotation'] );
						amplitude.getInstance().logEvent('Dragged Flower');


						//store flower original location
						var originalLoc = flowersJSON.flowers[draggedFlower].position;

						//update flower location
						flowersJSON.flowers[draggedFlower].position = [res.dragPosAbs.x, res.dragPosAbs.z];
						model_api.parameters.updateAsync({ name: "flowersJSON", value: JSON.stringify(flowersJSON) }).then(function () {
							//check if there are any collisions with the new flower location
							var checkFlower = model_api.scene.getData({ name: "checkFlowers" }).data[0].data[draggedFlower];
							if (checkFlower.collision) {
								alert("Collision Detected");
								flowersJSON.flowers[draggedFlower].position = originalLoc;
								model_api.parameters.updateAsync({ name: "flowersJSON", value: JSON.stringify(flowersJSON) });
							}
						});
					}
				});


				//add event listener to detect flower selection
				model_api.scene.addEventListener(model_api.scene.EVENTTYPE.SELECT_ON, function (res) {
					var selectedScenePath = res.scenePath.split(".");

					//check if the dragged element is a flower
					if (selectedScenePath[1] == flowersID) {
					}
				});


				//activate random flowers
				//model_api.parameters.updateAsync({ name: "Random Flowers", value: true }).then(function () {
				//	flowersJSON = model_api.scene.getData({ name: "randomFlowersJSON" }).data[0].data;
				//	model_api.parameters.updateAsync([{ name: "Random Flowers", value: false }, { name: "flowersJSON", value: JSON.stringify(flowersJSON) }]);
				//});



		


			}else if ( MakDesignType == "backlit" )
			{


				var logoID;

				//define effects for selectable, hoverable and draggable logo
				var hoverSelectDragEffect = {
					active: {
						name: 'colorHighlight',
						options: {
							color: [0, 255, 0]
						}
					}
				};

				// Logo should be hoverable and draggable
				var logo = {
					id: "MakLogo",
					draggable: true,
					dragEffect: hoverSelectDragEffect,
					hoverable: true,
					hoverEffect: hoverSelectDragEffect,
					selectable: false,
					selectionEffect: hoverSelectDragEffect
				};

				//add interaction group to the scene
				model_api.scene.updateInteractionGroups([logo]);


				//get 3D assets
				var assets = model_api.scene.get(null, "CommPlugin_1").data;


				//look for flowers and panels assets
				for (var i = 0; i < assets.length; ++i) 
				{
					if (assets[i].material != undefined) 
					{
						if (assets[i].name == "LogoAndText") 
						{
							logoID = assets[i].id;
						
						}else if (assets[i].name == "Panels") 
						{
							panelsScenePath = assets[i].scenePath;
						}
					}
				}


				//update logo to make it draggable and hoverable
				model_api.scene.updatePersistentAsync({
					id: logoID,
					interactionGroup: logo.id,
					interactionMode: "sub",
					dragPlaneNormal: { x: 0, y: 1, z: 0 }
				}, 'CommPlugin_1');


				//add event listener to detect logo dragging
				model_api.scene.addEventListener(model_api.scene.EVENTTYPE.DRAG_END, function (res) {
					console.log(res);

					var draggedScenePath = res.scenePath.split(".");
					makModel.build_data.componentValues['Logo X Location'] = res.dragPosAbs.x;
					$('#backlitLogoXInput').val( res.dragPosAbs.x );
					$( "#backlitLogoXSlider" ).val( res.dragPosAbs.x );
					$( '#backlitLogoXSlider').data("ionRangeSlider").update({'from': res.dragPosAbs.x })

					makModel.build_data.componentValues['Logo Z Location'] = res.dragPosAbs.z;
					$('#backlitLogoZInput').val( res.dragPosAbs.z );
					$( "#backlitLogoZSlider" ).val( res.dragPosAbs.z );
					$( '#backlitLogoZSlider').data("ionRangeSlider").update({'from': res.dragPosAbs.z })
					$( "#backlitLogoZSlider" ).change();

					model_api.parameters.updateAsync({ name: "Logo X Location", value: res.dragPosAbs.x})
					model_api.parameters.updateAsync({ name: "Logo Z Location", value: res.dragPosAbs.z})

				});



			}


	

}




/*------------------------------------------------------------*

	This function gets the timeline data for an instance

/*------------------------------------------------------------*/
function setTimeline( )
{

	$.ajax({
		url : "/getActions/"+makModel['instance_id'],
		method :"get"

	}).done(function(data) 
	{

		console.log('The time line data is');
		console.log(data);
		window['timelineData'] = data;


		// Populate the timeline page
		var timeLineNum = 1;
		var td = '';
		timelineData.forEach(function(obj) 
		{
			td=td+'<div class="row divcenter" style="width:600px; margin:5px 0px;">';
				td=td+'<div style="width:100px">'+timeLineNum+'</div>';
				td=td+'<div style="width:300px">'+obj['action']+'</div>';
				td=td+'<div style="width:200px">'+obj['created_at']+'</div>';
			td=td+'</div>';

		});

		$('#timeLineData').html(td);

	});

}


/*------------------------------------------------------------*

	This function gets the instance in question

/*------------------------------------------------------------*/
function getInstance( id )
{


	$.ajax({
		url : "/getInstance/"+id,
		method :"get"

	}).done(function(data) 
	{

		console.log(data);
		window['instanceData'] = data;
		$('#modelName').text(data.name);


		$('.optionSection').hide();
		$('#modelNameInput').hide();
		$('#buildNameInput').hide();

		var designType='';
		if ( data.design_type == 2 ){ $('#benchSection').show(); 		window['MakDesignType']='bench'; }
		if ( data.design_type == 3 ){ $('#finWallSection').show(); 		window['MakDesignType']='finWall'; }
		if ( data.design_type == 4 ){ $('#backlitSection').show(); 		window['MakDesignType']='backlit'; }
		if ( data.design_type == 5 ){ $('#facetedSection').show(); 		window['MakDesignType']='faceted'; }
		if ( data.design_type == 6 ){ $('#lightWallSection').show(); 	window['MakDesignType']='light'; }
		if ( data.design_type == 7 ){ $('#deskSection').show(); 		window['MakDesignType']='desk'; }
		if ( data.design_type == 8 ){ $('#planterWallSection').show(); 	window['MakDesignType']='planter'; }
		if ( data.design_type == 9 ){ $('#panelWallSection').show(); 	window['MakDesignType']='panel'; }
		if ( data.design_type == 12 ){ $('#flowerSection').show(); 		window['MakDesignType']='flower'; }


		// Place this data into the properties page
		$('#instanceName').text(instanceData.name);
		$('#instanceType').text(MakDesignType);
		$('#instanceDate').text(instanceData.created_at);
		$('#instanceStatus').text(instanceData.stage);

		$('#modelDisplayName').text(instanceData.name);

	});

}






/*-------------------------------------------*

	This function updates the instance - this
	is used when the model name is updated

/*-------------------------------------------*/
function updateInstance( )
{


	$.ajax({
		url : "/updateInstance",
		method :"PUT",
		data :  { 'instance' : instanceData }

	}).done(function() 
	{

		amplitude.getInstance().logEvent('Instance Name Update - '+makModel.id);

	});

}






/*------------------------------------------------------------*

	This function gets all of the builds for a given instance

/*------------------------------------------------------------*/
function getBuilds( id )
{


	$.ajax({
		url : "/getBuilds/"+id,
		method :"get"

	}).done(function(data) 
	{

		var newOptions = {};

		data.forEach(function(obj) 
		{
			obj.build_data = JSON.parse(obj.build_data);
			newOptions[obj.id] = obj.build_data.name;
		});

		window['buildData'] = data;
		$('#instanceBuilds').text(buildData.length);
		$('#instancePrice').text('$'+buildData[buildData.length-1]['build_data']['price']);


		var $el = $("#buildID");
		$el.empty(); // remove old options
		$.each(newOptions, function(key,value) {
		  $el.append($("<option></option>")
		     .attr("value", key).text(value));
		});


		// Load the first version if there is only one build
		window['makModel'] = buildData[buildData.length-1];
	
		// Set the overall variable for the model type
		window['MakDesignType'] = makModel.build_id;


		// Set the title
		$('#buildDisplayName').text(makModel.build_data.name);


		// Set the timeline data
		setTimeline();


		reloadModel();
		setTimeout(function () {
			setModelGroups( )
			setPrice( );
			setDragDrop();
		}, 3000);




	});

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


	if ( modelName == "flower" )
	{
		$(".flowerWallWidthSlider").ionRangeSlider({
			grid: false,
			min: 30,
			max: 240,
			step: 2
		});

		$(".flowerWallHeightSlider").ionRangeSlider({
			grid: false,
			min: 96,
			max: 192,
			step: 96
		});

	}


	if ( modelName == "fossil" )
	{
		$(".fossilWidthSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 120,
			step: 1
		});

		$(".fossilHeightSlider").ionRangeSlider({
			grid: false,
			min: 1,
			max: 144,
			step: 1
		});

		$(".fossilShapeCountSlider").ionRangeSlider({
			grid: false,
			min: 5,
			max: 18,
			step: 1
		});

		$(".fossilFactorSlider").ionRangeSlider({
			grid: false,
			min: 0,
			max: 2,
			step: 0.01
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
			'light'		: '3c0d469228cf4904f47b4487932978fd1e9438f83df58a8cd7b7381aaca3472a8d58ca75f16450b90ee4d234b383c365389b9655cd5960ec0aedf3369a4cced2702642506c9c9660e66fcee31493cd15c591b4fa98eaa39c68385fafaf3bd5d2e1abc03562e26930bfa8dd6887b7057de7dad4a704be-6991cd00af723d0ec78fdad4cc0404de',
			'flower' 	: 'fa24b0f9a09bc2d807c18f497c0648139252bafe91f25f34cc6f9ba4803e683b534b8128f20de886175a18a1bda701b8e6a000b355d563384f6ff24540da3acaeb96364ed298426d3aec295df658af80af441819d8d396de29d2c23ae6336df139f7fefcdc65a7d134a11deccd1884c6bdd17e873694-2165b253880c6c6053afe2f457ff3564',
			'fossil'	: '7019da5b0f90ff981a4f31158f569b0610e8830eaff1869d307fe028998872c344dcf40cb02346f3f1c05ccbf8a37ee97c9deaf1dd9f4b8aef78f40d607012084211f315bb0dcc14506a4e7777d9a927df88e8ff3ad7173b4e64f1a419dad8aaf803ca95f126f3acce4ba1d947f8e7733c55a643adb5-3fdabea628a53bf1247d5651fa0ef504',
			'unique' 	: '03aee60cced54eadca82056ee7e7c9ee1c4b468607d59afd1dcd291704db23a1b83341932090c58e240792e0b70578e0da7aad4dde5d46694816903df457c6f693c1c4e55610648ebb2897bfcdbb17c657e150a6992302efcfdeadaac24eeae07bb23aae37c70d6ee428b3ed327ad3601352733b6090763aa074df4b39f35412984a520906a2b7-5b7da6c07148a0d485d633511e54ac6a'
		},


		'modelPrices' : {
			'bench' : 1250,
			'finWall' : 85,
			'backlit' : 125,
			'faceted' : 0,
			'light' : 125,
			'flower' : 115,
			'fossil' : 100
		},

		'priceType' : {
			'bench' : 'linear',
			'finWall' : 'square',
			'backlit' : 'square',
			'faceted' : 'square',
			'light' : 'square',
			'flower' : 'square',
			'fossil' : 'square'
		},

		'containerNames' :{
			'planter' : 'planterWallDisplay',
			'desk' : 'deskDisplay',
			'panel' : 'panelWallDisplay',
			'faceted' : 'currentModelDisplay',
			'bench' : 'currentModelDisplay',
			'backlit' : 'currentModelDisplay',
			'finWall' : 'currentModelDisplay',
			'light' : 'currentModelDisplay',
			'flower' : 'currentModelDisplay',
			'fossil' : 'currentModelDisplay',
			'unique' : 'currentModelDisplay'
		},

		'sideMenus' :{
			'bench' : 'benchSection',
			'finWall' : 'finWallSection',
			'backlit' : 'backlitSection',
			'planter' : 'planterSection',
			'desk' : 'deskSection',
			'faceted' : 'facetedSection',
			'panel' : 'panelSection',
			'light' : 'lightSection',
			'flower' : 'flowerSection',
			'fossil' : 'fossilSection',
			'unique' : 'uniqueSection'
		},

		'componentNames' : {

			'finWall' : {
				'Height of Wall' : 'finWallHeightSlider',
				'Lenght of Wall' : 'finWallWidthSlider',
				'Wall Depth' : 'finWallDepthSlider',
				'Ripple Center Location (Down - Up) (%)' : 'rippleYSlider',
				'Ripple Center Location (Left-Right) (%)' : 'rippleXSlider',
				'Ripple Intensity  ( Straight - Wavy)' : 'rippleIntensitySlider',
				'Roughness' : 'rippleRoughnessSlider',
				'Fins Thickness' : 'finThicknessSlider',
				'Spacing of Fins' : 'finSpacingSlider',
				'Rotate Panels' : 'finRotationSlider',
				'Position X Logo (%)' : 'finLogoXSlider',
				'Position Z Logo (%)' : 'finLogoZSlider',
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
				'Upload Logo' : 'finLogoUpload',
				'Colored MDF' : 'MDFColorPicker',
				'Back Panel Color' : 'MDFBackColorPicker'

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
			},


			'flower' : {
				'Wall Width' : 'flowerWallWidthSlider',
				'Wall Height' : 'flowerWallHeightSlider',
				'flowersJSON' : 'flowersJSON'
			},


			'fossil' : {
				'Wall Width' : 'fossilWidthSlider',
				'Wall Height' : 'fossilHeightSlider',
				'Shape Count' : 'fossilShapeCountSlider',
				'Factor' : 'fossilFactorSlider'
			},


			'unique' : {
				'uniqueChoice' : 'uniqueChoiceDropdown'
			}

		},

		'componentTypes' : {

			'finWall' : {
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
				'Position X Logo (%)' : 'slider',
				'Position Z Logo (%)' : 'slider',
				'Colored MDF' : 'swatch',
				'Ripple Intensity  ( Straight - Wavy)' : 'slider',
				'Show Human Scale' : 'boolean',
				'Show Dimensions' : 'boolean',
				'Ground Offset' : 'slider',
				'Colored MDF' : 'pickr',
				'Back Panel Color' : 'pickr',

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
			},

			'flower' : {
				'Wall Width' : 'slider',
				'Wall Height' : 'slider',
				'flowersJSON' : 'dataPack'
			},



			'fossil' : {
				'Wall Width' : 'slider',
				'Wall Height' : 'slider',
				'Shape Count' : 'slider',
				'Factor' : 'slider'
			},


			'unique' : {
				'uniqueChoice' : 'dropdown'
			}


		}



	}

}
