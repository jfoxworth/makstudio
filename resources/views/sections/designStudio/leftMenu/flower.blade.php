<!-- All options for the coucb -->
<div id="flowerSection" class="optionSection">

	<h4 class="center notopmargin" style="margin-bottom:5px">Select Parameter Set</h4>

	<div class="row divcenter bottommargin-sm">

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="bottom" title="Wall Dimensions">
			<i id="flowerDimensionsButton" class="icon-measure h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth col_last center nobottommargin"
			 data-toggle="tooltip" data-placement="bottom" title="Flower Settings">
			<i id="flowerSettingsButton" class="icon-sun h3 parameterSelect"></i>
		</div>

	</div>

	<div id="flowerDimensions" class="parameterSet">

		<div class="white-section" style="margin:10px 0px" id="benchDepth">
			<label>Wall Height (in)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="flowerWallHeightSlider modelSlider" id="flowerWallHeightSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="flowerWallHeightInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section" style="margin:10px 0px" id="benchDepth">
			<label>Wall Width (in)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="flowerWallWidthSlider modelSlider" id="flowerWallWidthSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="flowerWallWidthInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


	</div>


	<div id="flowerSettings" class="parameterSet">


	</div>



	<!-- Price box for bench -->
	<div class="white-section divcenter" style="margin:20px 0px">
		<label>Estimated Cost (US)</label>

		<div class="divcenter priceBox">
			$ <span id="flowerPrice"></span>
		</div>

	</div>


</div>

