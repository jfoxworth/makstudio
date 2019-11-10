


<!-- All options for the backlit walls -->
<div id="backlitSection" class="optionSection">


	<!-- Options for a slat wall -->
	<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

	<div class="row divcenter">

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
			<i id="backlitDimensionsButton" class="icon-measure h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Pattern Settings">
			<i id="backlitRippleButton" class="icon-line-target h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Logo Settings">
			<i id="backlitLogoButton" class="icon-line-upload h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth col_last center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Headers">
			<i id="backlitHeadersButton" class="icon-font h3 parameterSelect"></i>
		</div>


	</div>



	<!-- Specifics for backlit walls dimensions -->
	<div id="backlitDimensions" class="parameterSet">

		<div class="white-section center" style="margin:10px 0px" id="backlitLength">
			<label>Wall Length (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitLengthSlider modelSlider" id="backlitLengthSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitLengthInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="white-section center" style="margin:20px 0px" id="backlitHeight">
			<label>Wall Height (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitHeightSlider modelSlider" id="backlitHeightSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitHeightInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Show Dimensions</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitShowDimensions">
		</div>

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Show Panel Divisions</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitShowPanels">
		</div>

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Show Human Scale</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitHumanScale">
		</div>

	</div>



	<!-- Specifics for backlit walls dimensions -->
	<div id="backlitLogo" class="parameterSet">

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Logo On" data-off-text="Logo Off" id="backlitLogoOnOff">
		</div>

		<div class="bottommargin" style="margin:20px 0px;">
			<label>Upload Logo: 
				<i class="icon-info" data-toggle="tooltip" data-placement="top" title="Black and white image less than 150 KB"></i>
			</label><br>
			<input name="logoUpload" type="file" multiple class="file-loading" data-show-preview="false" id="backlitLogoUpload">
		</div>


		<div class="white-section center" style="margin:10px 0px" id="backlitLogoScale">
			<label>Logo Scale (%)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitLogoScaleSlider modelSlider" id="backlitLogoScaleSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitLogoScaleInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:10px 0px" id="backlitLogoX">
			<label>Logo X (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitLogoXSlider modelSlider" id="backlitLogoXSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitLogoXInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:10px 0px" id="backlitLogoZ">
			<label>Logo Z (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitLogoZSlider modelSlider" id="backlitLogoZSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitLogoZInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>



	</div>




	<!-- Specifics for backlit walls ripples -->
	<div id="backlitRipple" class="parameterSet">

		<div class="white-section center" style="margin:10px 0px" id="backlitWaveAmp">
			<label>Wave Amplitude</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitWaveAmpSlider modelSlider" id="backlitWaveAmpSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitWaveAmpInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<!--
		<div class="white-section center" style="margin:10px 0px" >
			<label>Wave Depth</label>
			<input class="backlitWaveDepthSlider modelSlider" id="backlitWaveDepthSlider"/>
		</div>

		<div class="white-section center" style="margin:10px 0px" >
			<label>Wall Metalness</label>
			<input class="backlitMetalSlider modelSlider" id="backlitMetalSlider"/>
		</div>

		<div class="white-section center" style="margin:10px 0px" >
			<label>Wall Roughness</label>
			<input class="backlitRoughSlider modelSlider" id="backlitRoughSlider"/>
		</div>
		-->

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Create Flat Area</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitFlatOnOff">
		</div>


		<div class="white-section center" style="margin:20px 0px" id="backlitPattern">
			<label>Choose Pattern Variation</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitPatternSlider modelSlider" id="backlitPatternSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitPatternInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Pattern After Logo</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitPatternOnOff">
		</div>


	</div>



	<!-- Specifics for backlit walls headers -->
	<div id="backlitHeaders" class="parameterSet">

		<div class="row divcenter" style="margin:20px 0px;">
			<label for="backlitHeader">Header</label>
			<input type="text" class="form-control" id="backlitHeader" placeholder="Header (15 char)">
		</div>

		<div class="white-section center" style="margin:10px 0px" id="backlitHeader">
			<label>Header Height</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitHeaderSlider modelSlider" id="backlitHeaderSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitHeaderInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="row divcenter" style="margin:20px 0px">
			<label for="backlitSubheader">Subheader</label>
			<input type="text" class="form-control" id="backlitsubHeader" placeholder="Sub Header (30 char)">
		</div>

		<div class="white-section center" style="margin:10px 0px" id="backlitSubheader">
			<label>Subheader Height</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="backlitSubheaderSlider modelSlider" id="backlitSubheaderSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="backlitSubheaderInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

	</div>


	<!-- Price box for bench -->
	<div class="white-section center divcenter" style="margin:20px 0px">
		<label>Estimated Cost (US)</label>


		<div class="divcenter priceBox">
			$ <span id="backlitPrice"></span>
		</div>

		<div class="divcenter button topmargin-sm"
			 id="backlitModalCall"
			 class=""
			 style="background-color:#ccc; border:#1px solid #000; color:#000">
			Get Price Quote
		</div>

	</div>


</div>



