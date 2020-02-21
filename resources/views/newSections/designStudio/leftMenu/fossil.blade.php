


<!-- All options for the fossil walls -->
<div id="fossilSection" class="optionSection">


	<!-- Options for a slat wall -->
	<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

	<div class="row divcenter">

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
			<i id="fossilDimensionsButton" class="icon-measure h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth col_last center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Fossil Pattern Settings">
			<i id="fossilFactorButton" class="icon-leaf h3 parameterSelect"></i>
		</div>

	</div>



	<!-- Specifics for fossil walls dimensions -->
	<div id="fossilDimensions" class="parameterSet">

		<div class="white-section center" style="margin:10px 0px" id="fossilWidth">
			<label>Wall Width (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="fossilWidthSlider modelSlider" id="fossilWidthSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="fossilWidthInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="white-section center" style="margin:10px 0px" id="fossilHeight">
			<label>Wall Height (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="fossilHeightSlider modelSlider" id="fossilHeightSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="fossilHeightInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

	</div>



	<!-- Specifics for fossil wall fossil pattern -->
	<div id="fossilFactor" class="parameterSet">


		<div class="white-section center" style="margin:10px 0px" id="fossilShapeCount">
			<label>Fossil Shape Count</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="fossilShapeCountSlider modelSlider" id="fossilShapeCountSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="fossilShapeCountInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:10px 0px" id="fossilFactor">
			<label>Fossil Factor</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="fossilFactorSlider modelSlider" id="fossilFactorSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="fossilFactorInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

	</div>




	<!-- Price box for bench -->
	<div class="white-section center divcenter" style="margin:20px 0px">
		<label>Estimated Cost (US)</label>


		<div class="divcenter priceBox">
			$ <span id="fossilPrice"></span>
		</div>

		<div class="divcenter button topmargin-sm"
			 id="fossilModalCall"
			 class=""
			 style="background-color:#ccc; border:#1px solid #000; color:#000">
			Finish Quote
		</div>


	</div>


</div>



