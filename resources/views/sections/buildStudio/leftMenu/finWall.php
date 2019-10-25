

<!-- All options for the slat walls -->
<div id="finWallSection">

	<!-- Options for a slat wall -->
	<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

	<div class="row divcenter">

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
			<i id="finWallDimensionsButton" class="icon-measure h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Fin Settings">
			<i id="finFinButton" class="icon-line-disc h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Ripple Settings">
			<i id="finRippleButton" class="icon-line-target h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Material Settings">
			<i id="finMaterialButton" class="icon-line-layers h3 parameterSelect"></i>
		</div>

		<div class="hoverMe col_one_fifth col_last center nobottommargin"
			 data-toggle="tooltip" data-placement="top" title="Logo Settings">
			<i id="finLogoButton" class="icon-line-upload h3 parameterSelect"></i>
		</div>

	</div>


	<!-- Specifics for slat wall dimensions -->
	<div id="finWallDimensions" class="parameterSet">

		<div class="white-section center" style="margin:10px 0px" id="finWallHeight">
			<label>Wall Height (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finWallHeightSlider modelSlider" id="finWallHeightSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finWallHeightInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:20px 0px" id="finWallWidth">
			<label>Wall Width (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finWallWidthSlider modelSlider"  id="finWallWidthSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finWallWidthInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:20px 0px" id="finWallDepth">
			<label>Wall Depth (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finWallDepthSlider modelSlider"  id="finWallDepthSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finWallDepthInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Show Dimensions</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="finWallShowDimensions">
		</div>

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Show Human Scale</label><br>
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="finWallHumanScale">
		</div>

	</div>



	<!-- Specifics for slat wall ripple -->
	<div id="finRipple" class="parameterSet">

		<div class="white-section center" style="margin:10px 0px" id="rippleX">
			<label>Ripple X Location (%)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="rippleXSlider modelSlider" id="rippleXSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="rippleXInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="white-section center" style="margin:20px 0px" id="rippleY">
			<label>Ripple Y Location (%)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="rippleYSlider modelSlider" id="rippleYSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="rippleYInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="white-section center" style="margin:20px 0px" id="rippleIntensity">
			<label>Ripple Intensity</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="rippleIntensitySlider modelSlider" id="rippleIntensitySlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="rippleIntensityInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="white-section center" style="margin:20px 0px" id="rippleRoughness">
			<label>Ripple Roughness</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="rippleRoughnessSlider modelSlider" id="rippleRoughnessSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="rippleRoughnessInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


	</div>






	<!-- Specifics for slat wall fins -->
	<div id="finFin" class="parameterSet">

		<div class="white-section center" style="margin:10px 0px" id="finThickness">
			<label>Fin Thickness (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finThicknessSlider modelSlider" id="finThicknessSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finThicknessInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:10px 0px" id="finSpacing">
			<label>Fin Spacing (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finSpacingSlider modelSlider" id="finSpacingSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finSpacingInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="white-section center" style="margin:20px 0px" id="finRotation">
			<label>Fin Rotation (degrees)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finRotationSlider modelSlider" id="finRotationSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finRotationInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>


		<div class="row">

			<div class="col_half divcenter hoverMe" id="finStyleCurved">
				<img src="https://makstudio.s3.us-east-2.amazonaws.com/finStyleCurved.jpg" width="100px">
				<div class="center">Curved</div>
			</div>

			<div class="col_half divcenter col_last hoverMe" id="finStyleAngled">
				<img src="https://makstudio.s3.us-east-2.amazonaws.com/finStyleAngled.jpg" width="100px">
				<div class="center">Angled</div>
			</div>

		</div>

	</div>



	<!-- Specifics for slat wall materials and colors -->
	<div id="finMaterial" class="parameterSet">


		<div class="white-section center" style="margin:10px 0px">
			<label>Material</label>

			<div class="row">

				<div class="center hoverMe hoverMeGrey col_one_third nobottommargin" id="finMaterialBirch">
					<img id="slatMaterialBirch" 
						 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirch.jpg" 
						 width="100px"
						 class="divcenter">

					<div class="divcenter" style="margin-top:10px"><span>Baltic Birch</span></div>
				</div>

				<div class="center hoverMe hoverMeGrey col_one_third nobottommargin"  id="finMaterialLamBirch">
					<img id="slatMaterialBirchLaminate" 
						 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirchLaminate.jpg" 
						 width="100px"
						 class="divcenter">	

					<div class="divcenter" style="margin-top:10px"><span>Baltic Birch Laminate</span></div>
				</div>

				<div class="center hoverMe hoverMeGrey col_one_third nobottommargin col_last" id="finMaterialMDF">
					<img id="slatMaterialMDF" 
						 src="https://makstudio.s3.us-east-2.amazonaws.com/coloredMDF.jpg" 
						 width="100px"
						 class="divcenter">

					<div class="divcenter" style="margin-top:10px"><span>Colored MDF</span></div>
				</div>

			</div>

		</div>

		<div class="white-section center" style="margin:10px 0px">
				<label>Color</label>
				<div class="row divcenter nomargin" style="width:100%">
					<input type="text" class="pickr center divcenter" id="MDFColorPicker">
				</div>
		</div>

		<div class="white-section center" style="margin:10px 0px">
				<label>Background Color</label>
				<div class="row divcenter nomargin" style="width:100%">
					<input type="text" class="backpickr center divcenter" id="MDFBackColorPicker">
				</div>
		</div>

	</div>



	<!-- Specifics for fin wall logo -->
	<div id="finLogo" class="parameterSet">

		<div class="white-section center modelBoolean" style="margin:20px 0px;">
			<label>Logo On/Off</label> 
			<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Logo On" data-off-text="Logo Off" id="finLogoOnOff">
		</div>


		<div class="bottommargin" style="margin:20px 0px;">
			<label>Upload Logo: 
				<i class="icon-info" data-toggle="tooltip" data-placement="top" title="Black and white image less than 150 KB"></i>
			</label><br>
			<input name="logoUpload" type="file" multiple class="file-loading" data-show-preview="false" id="finLogoUpload">
		</div>


		<div class="white-section center" style="margin:10px 0px" id="finLogoScale">
			<label>Logo Scale (%)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finLogoScaleSlider modelSlider" id="finLogoScaleSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finLogoScaleInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>

		</div>

		<div class="white-section center" style="margin:10px 0px" id="finLogoX">
			<label>Logo X (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finLogoXSlider modelSlider" id="finLogoXSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finLogoXInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

		<div class="white-section center" style="margin:10px 0px" id="finLogoZ">
			<label>Logo Y (inches)</label>
			<div class="row" style="width:100%">
				<div style="width:70%">
					<input class="finLogoZSlider modelSlider" id="finLogoZSlider"/>
				</div>
				<div style="width:20%; margin:0px 0px 0px 10%">
					<input id="finLogoZInput" class="textParameterInput" style="width:100%; text-align:center"/>
				</div>
			</div>
		</div>

	</div>


	<!-- Price box for bench -->
	<div class="white-section center divcenter" style="margin:20px 0px">
		<label>Estimated Cost (US)</label>

		<div class="divcenter priceBox">
			$ <span id="finWallPrice"></span>
		</div>

	</div>


</div>

