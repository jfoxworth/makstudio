<div class="container clearfix">


	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:800px; border-right: 1px solid #ccc;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:80%">



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
						 data-toggle="tooltip" data-placement="top" title="Fin Ripple Wall">
						<i id="finWall" class="icon-line-bar-graph-2 h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 data-toggle="tooltip" data-placement="top" title="Backlit Wall">
						<i id="backlit" class="icon-bulb h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 data-toggle="tooltip" data-placement="top" title="Faceted Wall">
						<i id="faceted" class="icon-realestate-fence h3" style="margin-top:5px;"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last currentItem"
						 data-toggle="tooltip" data-placement="top" title="Planter Bench">
						<i id="bench" class="icon-line-toggle h3" ></i>
					</div>

				</div>

				<div class="row divcenter">

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 data-toggle="tooltip" data-placement="bottom" title="Custom Desk">
						<i id="desk" class="icon-study h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 data-toggle="tooltip" data-placement="bottom" title="Planter Wall">
						<i id="planter" class="icon-line-sun h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 data-toggle="tooltip" data-placement="bottom" title="Panel Wall">
						<i id="panel" class="icon-realestate-bricks h3" style="margin-top:6px"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last"
						 data-toggle="tooltip" data-placement="bottom" title="Gensler Wall">
						<i id="gensler" class="icon-line-share h3"></i>
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

						<div class="white-section" style="margin:10px 0px" id="benchDepth">
							<label>Bench Depth (ft)</label>
							<input class="benchDepthSlider modelSlider" id="benchDepthSlider"/>
						</div>

						<div class="white-section" style="margin:20px 0px" id="benchHeight">
							<label>Bench Height (ft)</label>
							<input class="benchHeightSlider modelSlider"  id="benchHeightSlider"/>
						</div>

						<div class="white-section" style="margin:20px 0px" id="benchTwistLength">
							<label>Twist Length (ft)</label>
							<input class="benchTwistSlider modelSlider"  id="benchTwistSlider"/>
						</div>

					</div>


					<div id="benchSeat" class="parameterSet">

						<div class="white-section" style="margin:20px 0px" id="benchLeftSeatLength">
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

						<div class="white-section" style="margin:20px 0px" id="benchRightSeatLength">
							<label>Right Seat Length (ft)</label>
							<input class="benchRightSeatSlider modelSlider"  id="benchRightSeatSlider"/>
						</div>

						<div>
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

						<div class="white-section" style="margin:10px 0px" id="finWallHeight">
							<label>Wall Height (inches)</label>
							<input class="finWallHeightSlider modelSlider" id="finWallHeightSlider"/>
						</div>

						<div class="white-section" style="margin:20px 0px" id="finWallWidth">
							<label>Wall Width (inches)</label>
							<input class="finWallWidthSlider modelSlider"  id="finWallWidthSlider"/>
						</div>

						<div class="white-section" style="margin:20px 0px" id="finWallDepth">
							<label>Wall Depth (inches)</label>
							<input class="finWallDepthSlider modelSlider"  id="finWallDepthSlider"/>
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<label>Show Dimensions</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="finWallShowDimensions">
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<label>Show Human Scale</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="finWallHumanScale">
						</div>

					</div>



					<!-- Specifics for slat wall ripple -->
					<div id="finRipple" class="parameterSet">

						<div class="white-section" style="margin:10px 0px" >
							<label>Ripple X Location (%)</label>
							<input class="rippleXSlider modelSlider" id="rippleXSlider"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Ripple Y Location (%)</label>
							<input class="rippleYSlider modelSlider" id="rippleYSlider"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Ripple Intensity</label>
							<input class="rippleIntensitySlider modelSlider" id="rippleIntensitySlider"/>
						</div>


						<div class="white-section" style="margin:20px 0px">
							<label>Ripple Roughness</label>
							<input class="rippleRoughnessSlider modelSlider" id="rippleRoughnessSlider"/>
						</div>


					</div>






					<!-- Specifics for slat wall fins -->
					<div id="finFin" class="parameterSet">

						<div class="white-section" style="margin:10px 0px" >
							<label>Fin Thickness (inches)</label>
							<input class="finThicknessSlider modelSlider" id="finThicknessSlider"/>
						</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Fin Spacing (inches)</label>
							<input class="finSpacingSlider modelSlider" id="finSpacingSlider"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
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

						<div class="row hoverMe hoverMeGrey divcenter" id="finMaterialBirch">
							<img id="slatMaterialBirch" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirch.jpg" 
								 width="100px"
								 class="divcenter">

							<div class="divcenter" style="margin-top:10px"><h4>Baltic Birch</h4></div>
						</div>

						<div class="row hoverMe hoverMeGrey divcenter"  id="finMaterialLamBirch">
							<img id="slatMaterialBirchLaminate" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirchLaminate.jpg" 
								 width="100px"
								 class="divcenter">	

							<div class="divcenter" style="margin-top:10px"><h4>Baltic Birch Laminate</h4></div>
						</div>

						<div class="row hoverMe hoverMeGrey divcenter" id="finMaterialMDF">
							<img id="slatMaterialMDF" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/coloredMDF.jpg" 
								 width="100px"
								 class="divcenter">

							<div class="divcenter" style="margin-top:10px"><h4>Colored MDF</h4></div>
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

						<div class="white-section" style="margin:10px 0px" >
							<label>Wall Length (inches)</label>
							<input class="backlitLengthSlider modelSlider" id="backlitLengthSlider"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Wall Height (inches)</label>
							<input class="backlitHeightSlider modelSlider" id="backlitHeightSlider"/>
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<label>Show Dimensions</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitShowDimensions">
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<label>Show Panel Divisions</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitShowPanels">
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<label>Show Human Scale</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitHumanScale">
						</div>

					</div>



					<!-- Specifics for backlit walls dimensions -->
					<div id="backlitLogo" class="parameterSet">

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Logo On" data-off-text="Logo Off" id="backlitLogoOnOff">
						</div>

						<div class="bottommargin" style="margin:20px 0px;">
							<label>Upload Logo:</label><br>
							<input id="logoUpload" name="logoUpload" type="file" multiple class="file-loading" data-show-preview="false" id="uploadLogo">
						</div>


						<div class="white-section" style="margin:10px 0px" >
							<label>Logo Scale (%)</label>
							<input class="backlitLogoScaleSlider modelSlider" id="backlitLogoScaleSlider"/>
						</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Logo X (inches)</label>
							<input class="backlitLogoXSlider modelSlider" id="backlitLogoXSlider"/>
						</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Logo Y (inches)</label>
							<input class="backlitLogoZSlider modelSlider" id="backlitLogoZSlider"/>
						</div>



					</div>




					<!-- Specifics for backlit walls ripples -->
					<div id="backlitRipple" class="parameterSet">

						<div class="white-section" style="margin:10px 0px" >
							<label>Wave Amplitude</label>
							<input class="backlitWaveAmpSlider modelSlider" id="backlitWaveAmpSlider"/>
						</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Wave Depth</label>
							<input class="backlitWaveDepthSlider modelSlider" id="backlitWaveDepthSlider"/>
						</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Wall Metalness</label>
							<input class="backlitMetalSlider modelSlider" id="backlitMetalSlider"/>
						</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Wall Roughness</label>
							<input class="backlitRoughSlider modelSlider" id="backlitRoughSlider"/>
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
							<label>Create Flat Area</label>
							<input class="bt-switch modelSwitch" type="checkbox" checked data-on-text="Yes" data-off-text="No" id="backlitFlatOnOff">
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Choose Pattern Variation</label>
							<input class="backlitPatternSlider modelSlider" id="backlitPatternSlider"/>
						</div>

						<div class="white-section modelBoolean" style="margin:20px 0px;">
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

						<div class="white-section" style="margin:10px 0px" >
							<label>Header Height</label>
							<input class="backlitHeaderSlider modelSlider" id="backlitHeaderSlider"/>
						</div>

						<div class="row divcenter" style="margin:20px 0px">
							<label for="backlitSubheader">Subheader</label>
    						<input type="text" class="form-control" id="backlitsubHeader" placeholder="Sub Header (30 char)">
    					</div>

						<div class="white-section" style="margin:10px 0px" >
							<label>Subheader Height</label>
							<input class="backlitSubheaderSlider modelSlider" id="backlitSubheaderSlider"/>
						</div>

					</div>

				</div>









				<!-- All options for the backlit walls -->
				<div id="facetedSection" style="overflow:scroll; height:500px">

					<div class="white-section" style="margin:20px 0px" >
						<label>Facet Spacing</label>
						<input class="facetedSpacingSlider modelSlider" id="facetedSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel A Rotation</label>
						<input class="facetedASlider modelSlider" id="facetedASlider"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel B Rotation</label>
						<input class="facetedBSlider modelSlider" id="facetedBSlider"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel C Rotation</label>
						<input class="facetedCSlider modelSlider" id="facetedCSlider"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel D Rotation</label>
						<input class="facetedDSlider modelSlider" id="facetedDSlider"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel E Rotation</label>
						<input class="facetedESlider modelSlider" id="facetedESlider"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel F Rotation</label>
						<input class="facetedFSlider modelSlider" id="facetedFSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<label>Panel G Rotation</label>
						<input class="facetedGSlider modelSlider" id="facetedGSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<label>Panel H Rotation</label>
						<input class="facetedHSlider modelSlider" id="facetedHSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<label>Panel I Rotation</label>
						<input class="facetedISlider modelSlider" id="facetedISlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<label>Panel J Rotation</label>
						<input class="facetedJSlider modelSlider" id="facetedJSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<label>Panel K Rotation</label>
						<input class="facetedKSlider modelSlider" id="facetedKSlider"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel L Rotation</label>
						<input class="facetedLSlider modelSlider" id="facetedLSlider"/>
					</div>



					<div class="white-section" style="margin:20px 0px" >
						<label>Panel M Rotation</label>
						<input class="facetedMSlider modelSlider" id="facetedMSpacing"/>
					</div>


				</div>






				<!-- All options for the desks -->
				<div id="deskSection">

					<div class="white-section" style="margin:20px 0px" >

						<h4 class="center nobottommargin">Select Desk Shape</h4>

						<div>
							<input id="radio-deskLShape" class="radio-style" name="radio-deskShape" type="radio" checked>
							<label for="radio-deskLShape" class="radio-style-3-label">L Shape</label>
						</div>
						<div>
							<input id="radio-deskUShape" class="radio-style" name="radio-deskShape" type="radio">
							<label for="radio-deskUShape" class="radio-style-3-label">U Shape</label>
						</div>
						<div>
							<input id="radio-deskStraight" class="radio-style" name="radio-deskShape" type="radio">
							<label for="radio-deskStraight" class="radio-style-3-label">Straight</label>
						</div>

					</div>


					<div class="white-section" style="margin:20px 0px" >

						<h4 class="center nobottommargin">Select Desk Color</h4>

						<div>
							<input id="radio-deskWhite" class="radio-style" name="radio-deskColor" type="radio" checked>
							<label for="radio-deskWhite" class="radio-style-3-label">White</label>
						</div>
						<div>
							<input id="radio-deskBlack" class="radio-style" name="radio-deskColor" type="radio">
							<label for="radio-deskBlack" class="radio-style-3-label">Black</label>
						</div>
						<div>
							<input id="radio-deskWood" class="radio-style" name="radio-deskColor" type="radio">
							<label for="radio-deskWood" class="radio-style-3-label">Wood Tone</label>
						</div>

					</div>



					<div class="white-section" style="margin:20px 0px" >

						<h4 class="center nobottommargin">Desk Size (People)</h4>

						<div>
							<input id="radio-deskPeople1" class="radio-style" name="radio-deskSize" type="radio" checked>
							<label for="radio-deskPeople1" class="radio-style-3-label">1</label>
						</div>
						<div>
							<input id="radio-deskPeople2" class="radio-style" name="radio-deskSize" type="radio">
							<label for="radio-deskPeople2" class="radio-style-3-label">2</label>
						</div>
						<div>
							<input id="radio-deskPeople3" class="radio-style" name="radio-deskSize" type="radio">
							<label for="radio-deskPeople3" class="radio-style-3-label">3</label>
						</div>

					</div>


					<div class="divcenter">
						<a href="#" class="button button-border button-rounded button-fill button-blue"><span>Submit</span></a>
					</div>


				</div>









				<!-- All options for the Planter Walls -->
				<div id="planterSection">

					<div class="white-section" style="margin:20px 0px" >

						<h4 class="center nobottommargin">Choose Fin Style</h4>

						<div>
							<input id="radio-planterFinTwisted" class="radio-style" name="radio-planterFinStyle" type="radio" checked>
							<label for="radio-planterFinTwisted" class="radio-style-3-label">Twisted</label>
						</div>
						<div>
							<input id="radio-planterFinLogo" class="radio-style" name="radio-planterFinStyle" type="radio">
							<label for="radio-planterFinLogo" class="radio-style-3-label">Logo</label>
						</div>
						<div>
							<input id="radio-planterFinStraight" class="radio-style" name="radio-planterFinStyle" type="radio">
							<label for="radio-planterFinStraight" class="radio-style-3-label">Straight</label>
						</div>

					</div>


					<div class="white-section" style="margin:20px 0px" >

						<h4 class="center nobottommargin">Planter Box Color</h4>

						<div>
							<input id="radio-planterWhite" class="radio-style" name="radio-planterColor" type="radio" checked>
							<label for="radio-planterWhite" class="radio-style-3-label">White</label>
						</div>
						<div>
							<input id="radio-planterBlack" class="radio-style" name="radio-planterColor" type="radio">
							<label for="radio-planterBlack" class="radio-style-3-label">Black</label>
						</div>
						<div>
							<input id="radio-planterBlack" class="radio-style" name="radio-planterColor" type="radio">
							<label for="radio-planterBlack" class="radio-style-3-label">Blue</label>
						</div>
						<div>
							<input id="radio-planterWood" class="radio-style" name="radio-planterColor" type="radio">
							<label for="radio-planterWood" class="radio-style-3-label">Wood Tone</label>
						</div>
						<div>
							<input id="radio-planterWood" class="radio-style" name="radio-planterColor" type="radio">
							<label for="radio-planterWood" class="radio-style-3-label">Other</label>
						</div>

					</div>



					<div class="white-section" style="margin:20px 0px" >

						<h4 class="center nobottommargin">Number Needed</h4>

						<div>
							<input id="radio-planterNumber1" class="radio-style" name="radio-planterNumber" type="radio" checked>
							<label for="radio-planterNumber1" class="radio-style-3-label">1</label>
						</div>
						<div>
							<input id="radio-planterNumber2" class="radio-style" name="radio-planterNumber" type="radio">
							<label for="radio-planterNumber2" class="radio-style-3-label">2</label>
						</div>
						<div>
							<input id="radio-planterNumber3" class="radio-style" name="radio-planterNumber" type="radio">
							<label for="radio-planterNumber3" class="radio-style-3-label">3</label>
						</div>

					</div>


					<div class="divcenter">
						<a href="#" class="button button-border button-rounded button-fill button-blue"><span>Submit</span></a>
					</div>


				</div>













				<!-- All options for the Wall Panles -->
				<div id="panelSection">

					<div class="white-section" style="margin:20px 0px" >

						<label>Select Desired Panels</label>
						<select class="selectpicker" multiple>
							<option value="lily">Lily</option>
							<option value="quilted">Quilted</option>
							<option value="swirl">Swirl</option>
							<option value="tapiz">Tapiz</option>
							<option value="undulado">Undulado</option>
							<option value="axis">Axis</option>
							<option value="penrose">Penrose</option>
							<option value="pointCloud">Point Cloud</option>
							<option value="jaramillo">Jaramillo</option>
						</select>

					</div>



					<div class="white-section" style="margin:20px 0px" >

						<label>What are the application types?</label>
						<select class="selectpicker" multiple>
							<option value="1">Commercial & Dry</option>
							<option value="2">Commercial & Damp</option>
							<option value="3">Commercial & Outdoor</option>
							<option value="4">Residential & Dry</option>
							<option value="5">Residential & Damp</option>
							<option value="6">Residential & Outdoor</option>
						</select>

					</div>


					<div class="row divcenter" style="margin:20px 0px">
						<label for="wallPanelSize">Panel Sizes</label>
						<input type="text" class="form-control" id="wallPanelSize" placeholder="4ft x 4ft, 3ft x 3ft">
					</div>


					<div class="form-group">
						<label for="moreInfoWallPanel">Any additional info</label>
						<textarea class="form-control" id="moreInfoWallPanel" rows="3"></textarea>
					</div>


					<div class="divcenter">
						<a href="#" class="button button-border button-rounded button-fill button-blue"><span>Submit</span></a>
					</div>


				</div>



			</div>

		</div>

	</div>




	<div class="col_last col_three_fourth notopmargin nobottommargin">

		<div id="modelDisplay" style="width:900px; height:600px;">
			
			<div class="row justify-content-center">

				<div class="col-md-10">

					<div class="card">

						<div class="card-header">Saved Models for user {{{ Auth::user()->name }}} - {{{ Auth::user()->email }}}</div> 

						<div class="card-body">
							@include('sections.designStudio.modelList')
						</div>

					</div>

				</div>

			</div>

		</div>

	</div>


	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="benchDisplay" style="width:900px; height:600px;"></div>
	</div>



	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="finWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="backlitWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="planterWallDisplay" style="width:900px; height:600px;"></div>
	</div>




	<!--  The desk section -->
	<div class="col_last col_three_fourth notopmargin nobottommargin">
		
		<div id="deskDisplay" style="width:900px; height:600px;">
			
			<img src="https://makstudio.s3.us-east-2.amazonaws.com/deskDemo.png" width="500px">

		</div>
	</div>
	<!-- // Desk -->


	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="facetedWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth notopmargin nobottommargin"
		 id="panelWallDisplay">
		 @include('sections.designStudio.areaDisplays.wallPanels')
	</div>



	<div class="col_last col_three_fourth notopmargin nobottommargin">
		<div id="genslerWallDisplay" style="width:900px; height:600px;"></div>
	</div>





</div>
