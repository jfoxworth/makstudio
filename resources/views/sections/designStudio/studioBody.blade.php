<div class="container clearfix">


	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:800px;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:100%">


				<h4 class="center" style="margin-bottom:5px; margin-top:10px">Design Center</h4>

				<div class="row divcenter">

					@guest
						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Login to save models">
							<i id="designLogin" class="icon-user h3"></i>
						</div>
					@else
						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="View my saved models">
							<i id="designViewModels" class="icon-user h3"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Save Current Model">
							<i id="designSave" class="icon-save h3"></i>
						</div>
					@endguest

					<div class="hoverMe col_one_fourth center nobottommargin"
						 data-toggle="tooltip" data-placement="top" title="Recenter Model View">
						<i id="recenterCamera" class="icon-line-camera h3"></i>
					</div>

				</div>



	
				<h4 class="center" style="margin-bottom:5px; margin-top:20px">Select Design</h4>

				<div class="row divcenter">

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="finWallHolder"
						 data-toggle="tooltip" data-placement="top" title="Fin Ripple Wall">
						<img id="finWall" src="images/icons/MAK ICONS-07.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="backlitHolder"
						 data-toggle="tooltip" data-placement="top" title="Backlit Wall">
						<img id="backlit" src="images/icons/MAK ICONS-08.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="facetedHolder"
						 data-toggle="tooltip" data-placement="top" title="Faceted Wall">
						<img id="faceted" src="images/icons/MAK ICONS-06.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last currentItem"
						 id="benchHolder"
						 data-toggle="tooltip" data-placement="top" title="Planter Bench">
						<img id="bench" src="images/icons/MAK ICONS-05.png" width="48px">
					</div>

				</div>

				<div class="row divcenter">

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="deskHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Custom Desk">
						<img id="desk" src="images/icons/MAK ICONS-09.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="planterHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Planter Wall">
						<img id="planter" src="images/icons/MAK ICONS-04.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="panelHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Panel Wall">
						<img id="panel" src="images/icons/MAK ICONS-02.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last"
						 id="lightHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Light Fixture Wall">
						<img id="light" src="images/icons/MAK ICONS-01.png" width="48px">
					</div>

				</div>

				<!--<h5 class="center" id="designShow">bench</h5>-->












				<!-- All options for the coucb -->
				<div id="benchSection">

					<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

					<div class="row divcenter bottommargin-sm">

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="bottom" title="Bench Dimensions">
							<i id="benchDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin" style="margin-top:7px"
							 data-toggle="tooltip" data-placement="bottom" title="Seat Settings">
							<i id="benchSeatButton" class="icon-realestate-chair h3 parameterSelect"></i>
						</div>

					</div>

					<div id="benchDimensions" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" id="benchDepth">
							<label>Bench Depth (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchDepthSlider modelSlider" id="benchDepthSlider"/>
								</div>
								<div style="width:30%">
									<input id="benchDepthInput"/>
								</div>
							</div>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="benchHeight">
							<label>Bench Height (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchHeightSlider modelSlider"  id="benchHeightSlider"/>
								</div>
								<div style="width:30%">
									<input id="benchHeightInput"/>
								</div>
							</div>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="benchTwistLength">
							<label>Twist Length (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchTwistSlider modelSlider"  id="benchTwistSlider"/>
								</div>
								<div style="width:30%">
									<input id="benchTwistLengthInput"/>
								</div>
							</div>
						</div>

					</div>


					<div id="benchSeat" class="parameterSet">

						<div class="white-section center" style="margin:20px 0px" id="benchLeftSeatLength">
							<label>Left Seat Length (ft)</label>
							<input class="benchLeftSeatSlider modelSlider"  id="benchLeftSeatSlider"/>
						</div>

						<div>
							<label>Left Planter Length</label>
							<select id="leftPlanterLength"
									class="selectpicker btn-primary modelDropdown" 
									style="width:100%; height:35px; margin:20px 0px">
								<option value="0">No Planter</option>
								<option value="1">Quarter Planter</option>
								<option value="2">Half Planter</option>
								<option value="3">Full Planter</option>
							</select>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="benchRightSeatLength">
							<label>Right Seat Length (ft)</label>
							<input class="benchRightSeatSlider modelSlider"  id="benchRightSeatSlider"/>
						</div>

						<div class="white-section center" style="margin:20px 0px">
							<label>Right Planter Length</label>
							<select id="rightPlanterLength"
									class="selectpicker btn-primary modelDropdown"
									style="width:100%; height:35px; margin:20px 0px">
								<option value="0">No Planter</option>
								<option value="1">Quarter Planter</option>
								<option value="2">Half Planter</option>
								<option value="3">Full Planter</option>
							</select>
						</div>

					</div>



					<!-- Price box for bench -->
					<div class="white-section center divcenter" style="margin:20px 0px">
						<label>Estimated Cost (US)</label>

						<div class="divcenter priceBox">
							$ <span id="benchPrice"></span>
						</div>

					</div>


				</div>








				<!-- All options for the slat walls -->
				<div id="finWallSection">

					<!-- Options for a slat wall -->
					<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

					<div class="row divcenter">

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
							<i id="finWallDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Fin Settings">
							<i id="finFinButton" class="icon-line-disc h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Ripple Settings">
							<i id="finRippleButton" class="icon-line-target h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth col_last center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Material Settings">
							<i id="finMaterialButton" class="icon-line-layers h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="bottom" title="Logo Settings">
							<i id="finLogoButton" class="icon-line-upload h3 parameterSelect"></i>
						</div>

					</div>


					<!-- Specifics for slat wall dimensions -->
					<div id="finWallDimensions" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" id="finWallHeight">
							<label>Wall Height (inches)</label>
							<input class="finWallHeightSlider modelSlider" id="finWallHeightSlider"/>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="finWallWidth">
							<label>Wall Width (inches)</label>
							<input class="finWallWidthSlider modelSlider"  id="finWallWidthSlider"/>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="finWallDepth">
							<label>Wall Depth (inches)</label>
							<input class="finWallDepthSlider modelSlider"  id="finWallDepthSlider"/>
						</div>

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<label>Show Dimensions</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="finWallShowDimensions">
						</div>

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<label>Show Human Scale</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="finWallHumanScale">
						</div>

					</div>



					<!-- Specifics for slat wall ripple -->
					<div id="finRipple" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" >
							<label>Ripple X Location (%)</label>
							<input class="rippleXSlider modelSlider" id="rippleXSlider"/>
						</div>


						<div class="white-section center" style="margin:20px 0px" >
							<label>Ripple Y Location (%)</label>
							<input class="rippleYSlider modelSlider" id="rippleYSlider"/>
						</div>


						<div class="white-section center" style="margin:20px 0px" >
							<label>Ripple Intensity</label>
							<input class="rippleIntensitySlider modelSlider" id="rippleIntensitySlider"/>
						</div>


						<div class="white-section center" style="margin:20px 0px">
							<label>Ripple Roughness</label>
							<input class="rippleRoughnessSlider modelSlider" id="rippleRoughnessSlider"/>
						</div>


					</div>






					<!-- Specifics for slat wall fins -->
					<div id="finFin" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" >
							<label>Fin Thickness (inches)</label>
							<input class="finThicknessSlider modelSlider" id="finThicknessSlider"/>
						</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Fin Spacing (inches)</label>
							<input class="finSpacingSlider modelSlider" id="finSpacingSlider"/>
						</div>


						<div class="white-section center" style="margin:20px 0px" >
							<label>Fin Rotation (degrees)</label>
							<input class="finRotationSlider modelSlider" id="finRotationSlider"/>
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

						<div class="center hoverMe hoverMeGrey divcenter" id="finMaterialBirch">
							<img id="slatMaterialBirch" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirch.jpg" 
								 width="100px"
								 class="divcenter">

							<div class="divcenter" style="margin-top:10px"><h4>Baltic Birch</h4></div>
						</div>

						<div class="center hoverMe hoverMeGrey divcenter"  id="finMaterialLamBirch">
							<img id="slatMaterialBirchLaminate" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirchLaminate.jpg" 
								 width="100px"
								 class="divcenter">	

							<div class="divcenter" style="margin-top:10px"><h4>Baltic Birch Laminate</h4></div>
						</div>

						<div class="center hoverMe hoverMeGrey divcenter" id="finMaterialMDF">
							<img id="slatMaterialMDF" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/coloredMDF.jpg" 
								 width="100px"
								 class="divcenter">

							<div class="divcenter" style="margin-top:10px"><h4>Colored MDF</h4></div>
						</div>

					</div>



					<!-- Specifics for fin wall logo -->
					<div id="finLogo" class="parameterSet">

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Logo On" data-off-text="Logo Off" id="finLogoOnOff">
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
							<i id="finWallDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>


						<div class="bottommargin" style="margin:20px 0px;">
							<label>Upload Logo: 
								<i class="icon-info" data-toggle="tooltip" data-placement="top" title="Black and white image less than 150 KB"></i>
							</label><br>
							<input name="logoUpload" type="file" multiple class="file-loading" data-show-preview="false" id="finLogoUpload">
						</div>


						<div class="white-section center" style="margin:10px 0px" >
							<label>Logo Scale (%)</label>
							<input class="finLogoScaleSlider modelSlider" id="finLogoScaleSlider"/>
						</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Logo X (inches)</label>
							<input class="finLogoXSlider modelSlider" id="finLogoXSlider"/>
						</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Logo Y (inches)</label>
							<input class="finLogoZSlider modelSlider" id="finLogoZSlider"/>
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






				<!-- All options for the backlit walls -->
				<div id="backlitSection">


					<!-- Options for a slat wall -->
					<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

					<div class="row divcenter">

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
							<i id="backlitDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Pattern Settings">
							<i id="backlitRippleButton" class="icon-line-target h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Logo Settings">
							<i id="backlitLogoButton" class="icon-line-upload h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth col_last center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Headers">
							<i id="backlitHeadersButton" class="icon-font h3 parameterSelect"></i>
						</div>


					</div>



					<!-- Specifics for backlit walls dimensions -->
					<div id="backlitDimensions" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" >
							<label>Wall Length (inches)</label>
							<input class="backlitLengthSlider modelSlider" id="backlitLengthSlider"/>
						</div>


						<div class="white-section center" style="margin:20px 0px" >
							<label>Wall Height (inches)</label>
							<input class="backlitHeightSlider modelSlider" id="backlitHeightSlider"/>
						</div>

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<label>Show Dimensions</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitShowDimensions">
						</div>

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<label>Show Panel Divisions</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitShowPanels">
						</div>

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<label>Show Human Scale</label>
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


						<div class="white-section center" style="margin:10px 0px" >
							<label>Logo Scale (%)</label>
							<input class="backlitLogoScaleSlider modelSlider" id="backlitLogoScaleSlider"/>
						</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Logo X (inches)</label>
							<input class="backlitLogoXSlider modelSlider" id="backlitLogoXSlider"/>
						</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Logo Y (inches)</label>
							<input class="backlitLogoZSlider modelSlider" id="backlitLogoZSlider"/>
						</div>



					</div>




					<!-- Specifics for backlit walls ripples -->
					<div id="backlitRipple" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" >
							<label>Wave Amplitude</label>
							<input class="backlitWaveAmpSlider modelSlider" id="backlitWaveAmpSlider"/>
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
							<label>Create Flat Area</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitFlatOnOff">
						</div>


						<div class="white-section center" style="margin:20px 0px" >
							<label>Choose Pattern Variation</label>
							<input class="backlitPatternSlider modelSlider" id="backlitPatternSlider"/>
						</div>

						<div class="white-section center modelBoolean" style="margin:20px 0px;">
							<label>Pattern After Logo</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitPatternOnOff">
						</div>


					</div>



					<!-- Specifics for backlit walls headers -->
					<div id="backlitHeaders" class="parameterSet">

						<div class="row divcenter" style="margin:20px 0px;">
							<label for="backlitHeader">Header</label>
    						<input type="text" class="form-control" id="backlitHeader" placeholder="Header (15 char)">
    					</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Header Height</label>
							<input class="backlitHeaderSlider modelSlider" id="backlitHeaderSlider"/>
						</div>

						<div class="row divcenter" style="margin:20px 0px">
							<label for="backlitSubheader">Subheader</label>
    						<input type="text" class="form-control" id="backlitsubHeader" placeholder="Sub Header (30 char)">
    					</div>

						<div class="white-section center" style="margin:10px 0px" >
							<label>Subheader Height</label>
							<input class="backlitSubheaderSlider modelSlider" id="backlitSubheaderSlider"/>
						</div>

					</div>


					<!-- Price box for bench -->
					<div class="white-section center divcenter" style="margin:20px 0px">
						<label>Estimated Cost (US)</label>

						<div class="divcenter priceBox">
							$ <span id="backlitPrice"></span>
						</div>

					</div>


				</div>









				<!-- All options for the backlit walls -->
				<div id="facetedSection" style="overflow:scroll; height:500px">

					<div class="white-section center" style="margin:20px 0px" >
						<label>Facet Spacing</label>
						<input class="facetedSpacingSlider modelSlider" id="facetedSpacing"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel A Rotation</label>
						<input class="facetedASlider modelSlider" id="facetedASlider"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel B Rotation</label>
						<input class="facetedBSlider modelSlider" id="facetedBSlider"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel C Rotation</label>
						<input class="facetedCSlider modelSlider" id="facetedCSlider"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel D Rotation</label>
						<input class="facetedDSlider modelSlider" id="facetedDSlider"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel E Rotation</label>
						<input class="facetedESlider modelSlider" id="facetedESlider"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel F Rotation</label>
						<input class="facetedFSlider modelSlider" id="facetedFSlider"/>
					</div>

					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel G Rotation</label>
						<input class="facetedGSlider modelSlider" id="facetedGSlider"/>
					</div>

					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel H Rotation</label>
						<input class="facetedHSlider modelSlider" id="facetedHSlider"/>
					</div>

					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel I Rotation</label>
						<input class="facetedISlider modelSlider" id="facetedISlider"/>
					</div>

					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel J Rotation</label>
						<input class="facetedJSlider modelSlider" id="facetedJSlider"/>
					</div>

					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel K Rotation</label>
						<input class="facetedKSlider modelSlider" id="facetedKSlider"/>
					</div>


					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel L Rotation</label>
						<input class="facetedLSlider modelSlider" id="facetedLSlider"/>
					</div>



					<div class="white-section center" style="margin:20px 0px" >
						<label>Panel M Rotation</label>
						<input class="facetedMSlider modelSlider" id="facetedMSpacing"/>
					</div>


				</div>











				<!-- All options for the backlit walls -->
				<div id="lightSection">


					<!-- Options for a slat wall -->
					<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

					<div class="row divcenter">

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
							<i id="lightDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fourth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Light Settings">
							<i id="lightSettingsButton" class="icon-bulb h3 parameterSelect"></i>
						</div>

					</div>



					<!-- Specifics for backlit walls dimensions -->
					<div id="lightDimensions" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" >
							<label>Wall Width (inches)</label>
							<input class="lightWidthSlider modelSlider" id="lightWidthSlider"/>
						</div>


						<div class="white-section center" style="margin:20px 0px" >
							<label>Wall Length (inches)</label>
							<input class="lightLengthSlider modelSlider" id="lightLengthSlider"/>
						</div>

					</div>





					<!-- Specifics for backlit walls dimensions -->
					<div id="lightSettings" class="parameterSet">


					</div>




				</div>














				<!-- All options for the desks -->
				<div id="deskSection"></div>


				<!-- All options for the Planter Walls -->
				<div id="planterSection"><p class="topmargin">Fill out the form to the right and we will get in touch with you as soon as possible.</p></div>


				<!-- All options for the Wall Panels -->
				<div id="panelSection"><p class="topmargin">Fill out the form to the right and we will get in touch with you as soon as possible.</p></div>



			</div>

		</div>

	</div>




	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div class="style-msg successmsg" id="saveMessageAlert">
			<div class="sb-msg"><i class="icon-thumbs-up"></i><strong>Model Saved!</strong> This model can be accessed from this page in the future.
			<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>
		</div>
	</div>

	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div class="style-msg alert-danger" id="deleteMessageAlert">
			<div class="sb-msg"><i class="icon-thumbs-up"></i><strong>Model Deleted!</strong> A model was successfully deleted from the stored items
			<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>
		</div>
	</div>


	@guest
	@else
	<div class="col_last col_three_fourth topmargin nobottommargin">

		<div id="modelDisplay" style="width:900px; height:600px;">
			
			<div class="row justify-content-center">

				<div class="col-md-10">

					<div class="card">

						<div class="card-header">Saved Models for user {{{ Auth::user()->name }}} - {{{ Auth::user()->email }}}</div> 

						<div class="card-body">
							<div id="userModelList"></div>

						</div>


					</div>

				</div>

			</div>

		</div>

	</div>
	@endguest



	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="currentModelDisplay" style="width:900px; height:600px;"></div>
		<div id="modelNameContainer" class="topmargin row"><i class="h4 icon-file"></i>  <div id="modelName" style="font-size:24px; margin-left:10px">Unsaved Model</div></div>
	</div>


	<div class="col_last col_three_fourth notopmargin nobottommargin"
		 id="planterWallDisplay">
		@include('sections.designStudio.areaDisplays.planterWall')
	</div>




	<!--  The desk section -->
	<div class="col_last col_three_fourth notopmargin nobottommargin"
		 id="deskDisplay">
		@include('sections.designStudio.areaDisplays.desk')
	</div>
	<!-- // Desk -->



	<div class="col_last col_three_fourth notopmargin nobottommargin"
		 id="panelWallDisplay">
		 @include('sections.designStudio.areaDisplays.wallPanels')
	</div>



</div>




<!-- Modal -->
<div class="modal fade" id="modelNameModal" tabindex="-1" role="dialog" aria-labelledby="modelNameLabel" aria-hidden="true">
  <div class="modal-dialog .modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modelNameLabel">Model Name</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      	<h5>Enter a name for the model that will help you identify it later</h5>
        <input type="text" class="form-control" id="modalModelName" placeholder="Enter Name for Model"
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveModelButton">Save changes</button>
      </div>
    </div>
  </div>
</div>
