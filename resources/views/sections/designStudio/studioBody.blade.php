<div class="container clearfix">


	<!-- Sidebar
	============================================= -->
	<div class="col_one_fifth clearfix" style="height:800px;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:100%">


				<h4 class="center" style="margin-bottom:5px; margin-top:10px">Design Center</h4>

				<div class="row divcenter">

					@guest
						<div class="hoverMe col_one_fifth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Login to save models">
							<i id="designLogin" class="icon-user h3"></i>
						</div>
					@else
						<div class="hoverMe col_one_fifth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="View my saved models">
							<i id="designViewModels" class="icon-user h3"></i>
						</div>

						<div class="hoverMe col_one_fifth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Save Current Model">
							<i id="designSave" class="icon-save h3"></i>
						</div>
					@endguest

					<div class="hoverMe col_one_fifth center nobottommargin"
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

						<div class="hoverMe col_one_fifth center nobottommargin"
							 data-toggle="tooltip" data-placement="bottom" title="Bench Dimensions">
							<i id="benchDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fifth center nobottommargin" style="margin-top:7px"
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
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="benchDepthInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="benchHeight">
							<label>Bench Height (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchHeightSlider modelSlider"  id="benchHeightSlider"/>
								</div>
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="benchHeightInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
						</div>

						<div class="white-section center" style="margin:20px 0px" id="benchTwist">
							<label>Twist Length (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchTwistSlider modelSlider"  id="benchTwistSlider"/>
								</div>
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="benchTwistInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
						</div>

					</div>


					<div id="benchSeat" class="parameterSet">

						<div class="white-section center" style="margin:20px 0px" id="benchLeftSeat">
							<label>Left Seat Length (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchLeftSeatSlider modelSlider"  id="benchLeftSeatSlider"/>
								</div>
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="benchLeftSeatInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
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

						<div class="white-section center" style="margin:20px 0px" id="benchRightSeat">
							<label>Right Seat Length (ft)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="benchRightSeatSlider modelSlider"  id="benchRightSeatSlider"/>
								</div>
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="benchRightSeatInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
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

								<div class="center hoverMe hoverMeGrey col_one_third" id="finMaterialBirch">
									<img id="slatMaterialBirch" 
										 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirch.jpg" 
										 width="100px"
										 class="divcenter">

									<div class="divcenter" style="margin-top:10px"><span>Baltic Birch</span></div>
								</div>

								<div class="center hoverMe hoverMeGrey col_one_third"  id="finMaterialLamBirch">
									<img id="slatMaterialBirchLaminate" 
										 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirchLaminate.jpg" 
										 width="100px"
										 class="divcenter">	

									<div class="divcenter" style="margin-top:10px"><span>Baltic Birch Laminate</span></div>
								</div>

								<div class="center hoverMe hoverMeGrey col_one_third col_last" id="finMaterialMDF">
									<img id="slatMaterialMDF" 
										 src="https://makstudio.s3.us-east-2.amazonaws.com/coloredMDF.jpg" 
										 width="100px"
										 class="divcenter">

									<div class="divcenter" style="margin-top:10px"><span>Colored MDF</span></div>
								</div>

							</div>

						</div>

						<div class="white-section center" style="margin:20px 0px">
								<label>Color</label>
								<div class="row divcenter" style="width:100%">
									<input type="text" class="pickr" id="colorPicker">
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






				<!-- All options for the backlit walls -->
				<div id="backlitSection">


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


						<div class="white-section center" style="margin:10px 0px" id="backlitLogoX">
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

						<div class="white-section center" style="margin:10px 0px" id="backlitLogoY">
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
							<label>Logo Y (inches)</label>
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

					</div>


				</div>









				<!-- All options for the backlit walls -->
				<div id="facetedSection" style="overflow:scroll; height:500px">

					<div class="white-section center" style="margin:20px 0px" id="facetedSpacing">
						<label>Facet Spacing</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedSpacingSlider modelSlider" id="facetedSpacing"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedSpacingInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedA">
						<label>Panel A Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedASlider modelSlider" id="facetedASlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedAInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedB">
						<label>Panel B Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedBSlider modelSlider" id="facetedBSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedBInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedC">
						<label>Panel C Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedCSlider modelSlider" id="facetedCSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedCInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedD">
						<label>Panel D Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedDSlider modelSlider" id="facetedDSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedDInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedE">
						<label>Panel E Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedESlider modelSlider" id="facetedESlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedEInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedF">
						<label>Panel F Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedFSlider modelSlider" id="facetedFSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedFInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>

					<div class="white-section center" style="margin:20px 0px" id="facetedG">
						<label>Panel G Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedGSlider modelSlider" id="facetedGSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedGInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>

					<div class="white-section center" style="margin:20px 0px" id="facetedH">
						<label>Panel H Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedHSlider modelSlider" id="facetedHSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedHInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>

					<div class="white-section center" style="margin:20px 0px" id="facetedI">
						<label>Panel I Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedISlider modelSlider" id="facetedISlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedIInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>

					<div class="white-section center" style="margin:20px 0px" id="facetedJ">
						<label>Panel J Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedJSlider modelSlider" id="facetedJSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedJInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>

					<div class="white-section center" style="margin:20px 0px" id="facetedK">
						<label>Panel K Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedKSlider modelSlider" id="facetedKSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedKInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


					<div class="white-section center" style="margin:20px 0px" id="facetedL">
						<label>Panel L Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedLSlider modelSlider" id="facetedLSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedLInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>



					<div class="white-section center" style="margin:20px 0px" id="facetedM">
						<label>Panel M Rotation</label>
						<div class="row" style="width:100%">
							<div style="width:70%">
								<input class="facetedMSlider modelSlider" id="facetedMSlider"/>
							</div>
							<div style="width:20%; margin:0px 0px 0px 10%">
								<input id="facetedMInput" class="textParameterInput" style="width:100%; text-align:center"/>
							</div>
						</div>
					</div>


				</div>











				<!-- All options for the backlit walls -->
				<div id="lightSection">


					<!-- Options for a slat wall -->
					<h4 class="center topmargin-sm" style="margin-bottom:5px">Select Parameter Set</h4>

					<div class="row divcenter">

						<div class="hoverMe col_one_fifth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Wall Dimensions">
							<i id="lightDimensionsButton" class="icon-measure h3 parameterSelect"></i>
						</div>

						<div class="hoverMe col_one_fifth center nobottommargin"
							 data-toggle="tooltip" data-placement="top" title="Light Settings">
							<i id="lightSettingsButton" class="icon-bulb h3 parameterSelect"></i>
						</div>

					</div>



					<!-- Specifics for backlit walls dimensions -->
					<div id="lightDimensions" class="parameterSet">

						<div class="white-section center" style="margin:10px 0px" id="lightWidth">
							<label>Wall Width (inches)</label>
							<input class="lightWidthSlider modelSlider" id="lightWidthSlider"/>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="lightWidthSlider  modelSlider" id="lightWidthSlider "/>
								</div>
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="lightWidthInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
						</div>


						<div class="white-section center" style="margin:20px 0px" id="lightLength">
							<label>Wall Length (inches)</label>
							<div class="row" style="width:100%">
								<div style="width:70%">
									<input class="lightLengthSlider  modelSlider" id="lightLengthSlider "/>
								</div>
								<div style="width:20%; margin:0px 0px 0px 10%">
									<input id="lightLengthInput" class="textParameterInput" style="width:100%; text-align:center"/>
								</div>
							</div>
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
