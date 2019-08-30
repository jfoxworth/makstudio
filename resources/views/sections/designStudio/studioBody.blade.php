<div class="container clearfix">


	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:800px; border-right: 1px solid #ccc;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:80%">


				<!-- Select the type of wall to be built 
				<select class="selectpicker btn-primary" 
						id="designType" 
						style="width:100%; height:35px">
					<option value="slatWall">Architectural Slat Wall</option>
					<option value="planterWall">Planter Wall</option>
					<option value="backlitWall">Back-lit Branding Wall</option>
					<option value="desk">Reception Desk</option>
					<option value="facetedWall">Faceted Wall</option>
					<option value="genslerWall">Gensler Custom Wall</option>
				</select>

			-->


				<h4 class="center">Select Design Type</h4>

				<div class="row divcenter">

					<div class="hoverMe col_one_fourth center designType nobottommargin">
						<i id="slatWall" class="icon-line-bar-graph-2 h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin">
						<i id="backlitWall" class="icon-bulb h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin">
						<i id="facetedWall" class="icon-realestate-fence h3" style="margin-top:5px;"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last">
						<i id="bench" class="icon-line-toggle h3" ></i>
					</div>

				</div>

				<div class="row divcenter">

					<div class="hoverMe col_one_fourth center designType nobottommargin">
						<i id="desk" class="icon-study h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin">
						<i id="planterWall" class="icon-line-sun h3"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin">
						<i id="wallPanel" class="icon-realestate-bricks h3" style="margin-top:6px"></i>
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last">
						<i id="genslerWall" class="icon-line-share h3"></i>
					</div>

				</div>

				<h5 class="center" id="designShow">bench</h5>













				<!-- All options for the coucb -->
				<div id="benchSection">

					<!-- Specifics for slat wall dimensions -->
					<div class="white-section" style="margin:10px 0px" id="benchDepth">
						<label>Bench Depth (ft)</label>
						<input class="benchDepthSlider" id="benchDepthSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" id="benchHeight">
						<label>Bench Height (ft)</label>
						<input class="benchHeightSlider"  id="benchHeightSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" id="benchTwistLength">
						<label>Twist Length (ft)</label>
						<input class="benchTwistSlider"  id="benchTwistSlider"/>
					</div>

					<div class="white-section" style="margin:20px 0px" id="benchLeftSeatLength">
						<label>Left Seat Length (ft)</label>
						<input class="benchLeftSeatSlider"  id="benchLeftSeatSlider"/>
					</div>

					<div>
						<label>Left Planter Length</label>
						<select id="leftPlanterLength"
								class="selectpicker btn-primary" 
								style="width:100%; height:35px; margin:20px 0px">
							<option value="0">No Planter</option>
							<option value="1">Quarter Planter</option>
							<option value="2">Half Planter</option>
							<option value="3">Full Planter</option>
						</select>
					</div>

					<div class="white-section" style="margin:20px 0px" id="benchRightSeatLength">
						<label>Right Seat Length (ft)</label>
						<input class="benchRightSeatSlider"  id="benchRightSeatSlider"/>
					</div>

					<div>
						<label>Right Planter Length</label>
						<select id="rightPlanterLength"
								class="selectpicker btn-primary" 
								style="width:100%; height:35px; margin:20px 0px">
							<option value="0">No Planter</option>
							<option value="1">Quarter Planter</option>
							<option value="2">Half Planter</option>
							<option value="3">Full Planter</option>
						</select>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<button id="benchCameraCenter">Recenter Camera</button>
					</div>

				</div>








				<!-- All options for the slat walls -->
				<div id="slatWallSection">

					<!-- Options for a slat wall -->
					<select id="slatOptions"
							class="selectpicker btn-primary" 
							style="width:100%; height:35px; margin:20px 0px">
						<option value="slatDimensions">Wall Dimensions</option>
						<option value="slatFin">Fin Options</option>
						<option value="slatRipple">Ripple Style</option>
						<option value="slatMaterial">Materials & Color</option>
						<option value="slatLogo">Logo Options</option>
					</select>


					<!-- Specifics for slat wall dimensions -->
					<div id="slatDimensions">

						<div class="white-section" style="margin:10px 0px" id="slatWallHeight">
							<label>Wall Height (inches)</label>
							<input class="slatWallHeightSlider" id="slatWallHeightSlider"/>
						</div>

						<div class="white-section" style="margin:20px 0px" id="slatWallWidth">
							<label>Wall Width (inches)</label>
							<input class="slatWallWidthSlider"  id="slatWallWidthSlider"/>
						</div>

						<div class="white-section" style="margin:20px 0px" id="slatWallDepth">
							<label>Wall Depth (inches)</label>
							<input class="slatWallDepthSlider"  id="slatWallDepthSlider"/>
						</div>

					</div>



					<!-- Specifics for slat wall ripple -->
					<div id="slatRipple">

						<div class="white-section" style="margin:10px 0px" >
							<label>Ripple X Location (%)</label>
							<input class="rippleXSlider" id="rippleX"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Ripple Y Location (%)</label>
							<input class="rippleYSlider" id="rippleY"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Ripple Intensity</label>
							<input class="rippleIntensitySlider" id="rippleIntensity"/>
						</div>


						<div class="white-section" style="margin:20px 0px">
							<label>Ripple Roughness</label>
							<input class="rippleRoughnessSlider" id="rippleRoughness"/>
						</div>


					</div>






					<!-- Specifics for slat wall fins -->
					<div id="slatFin">

						<div class="white-section" style="margin:10px 0px" >
							<label>Fin Spacing (inches)</label>
							<input class="finSpacingSlider" id="finSpacing"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Fin Rotation (degrees)</label>
							<input class="finRotationSlider" id="finRotation"/>
						</div>


						<div class="row">

							<div class="col_half divcenter hoverMe">
								<img src="https://makstudio.s3.us-east-2.amazonaws.com/finStyleCurved.jpg" width="100px">
								<div class="center">Curved</div>
							</div>

							<div class="col_half divcenter col_last hoverMe">
								<img src="https://makstudio.s3.us-east-2.amazonaws.com/finStyleAngled.jpg" width="100px">
								<div class="center">Angled</div>
							</div>

						</div>

					</div>



					<!-- Specifics for slat wall materials and colors -->
					<div id="slatMaterial">

						<div class="row hoverMe hoverMeGrey divcenter">
							<img id="slatMaterialBirch" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirch.jpg" 
								 width="100px"
								 class="divcenter">

							<div class="divcenter" style="margin-top:10px"><h4>Baltic Birch</h4></div>
						</div>

						<div class="row hoverMe hoverMeGrey divcenter">
							<img id="slatMaterialBirchLaminate" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirchLaminate.jpg" 
								 width="100px"
								 class="divcenter">	

							<div class="divcenter" style="margin-top:10px"><h4>Baltic Birch Laminate</h4></div>
						</div>

						<div class="row hoverMe hoverMeGrey divcenter">
							<img id="slatMaterialMDF" 
								 src="https://makstudio.s3.us-east-2.amazonaws.com/coloredMDF.jpg" 
								 width="100px"
								 class="divcenter">

							<div class="divcenter" style="margin-top:10px"><h4>Colored MDF</h4></div>
						</div>

					</div>

					<div class="white-section" style="margin:20px 0px" >
						<button id="slatCameraCenter">Recenter Camera</button>
					</div>


				</div>






				<!-- All options for the backlit walls -->
				<div id="backlitSection">


					<!-- Options for a backlit wall -->
					<select id="backlitOptions"
							class="selectpicker btn-primary" 
							style="width:100%; height:35px; margin:10px 0px;">
						<option value="backlitDimensions">Wall Dimensions</option>
						<option value="backlitLogo">Logo</option>
						<option value="backlitHeaders">Headers</option>
					</select>



					<!-- Specifics for backlit walls dimensions -->
					<div id="backlitDimensions">

						<div class="white-section" style="margin:10px 0px" >
							<label>Wall Length (inches)</label>
							<input class="backlitLengthSlider" id="backlitLength"/>
						</div>


						<div class="white-section" style="margin:20px 0px" >
							<label>Wall Height (inches)</label>
							<input class="backlitHeightSlider" id="backlitHeight"/>
						</div>


					</div>



					<!-- Specifics for backlit walls dimensions -->
					<div id="backlitLogo">

						<div class="bottommargin" style="margin:20px 0px;">
							<label>Upload Logo:</label><br>
							<input id="logoUpload" name="logoUpload" type="file" multiple class="file-loading" data-show-preview="false">
						</div>


						<div class="white-section" style="margin:10px 0px" >
							<label>Logo Height (inches)</label>
							<input class="backlitLogoSlider" id="backlitLogoHeight"/>
						</div>

						<div class="white-section" style="margin:20px 0px;">
							<label>Create Flat Area</label>
							<input class="bt-switch" type="checkbox" checked data-on-text="Yes" data-off-text="No">
						</div>

						<div class="white-section" style="margin:20px 0px;">
							<label>Pattern After Logo</label>
							<input class="bt-switch" type="checkbox" checked data-on-text="Yes" data-off-text="No">
						</div>


					</div>



					<!-- Specifics for backlit walls headers -->
					<div id="backlitHeaders">

						<div class="row divcenter" style="margin:20px 0px;">
							<label for="backlitHeader">Header</label>
    						<input type="text" class="form-control" id="backlitHeader" placeholder="Header (15 char)">
    					</div>

						<div class="row divcenter" style="margin:20px 0px">
							<label for="backlitSubheader">Subheader</label>
    						<input type="text" class="form-control" id="backlitsubHeader" placeholder="Sub Header (30 char)">
    					</div>

					</div>

					<div class="white-section" style="margin:20px 0px" >
						<button id="backlitCameraCenter">Recenter Camera</button>
					</div>

				</div>









				<!-- All options for the backlit walls -->
				<div id="facetedSection">

					<div class="white-section" style="margin:20px 0px" >
						<label>Facet Spacing</label>
						<input class="facetedSpacingSlider" id="facetedSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel A Rotation</label>
						<input class="facetedARotSlider" id="facetedARotSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel B Rotation</label>
						<input class="facetedBRotSlider" id="facetedBRotSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel C Rotation</label>
						<input class="facetedCRotSlider" id="facetedCRotSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel D Rotation</label>
						<input class="facetedDRotSlider" id="facetedDRotSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel E Rotation</label>
						<input class="facetedERotSlider" id="facetedERotSpacing"/>
					</div>


					<div class="white-section" style="margin:20px 0px" >
						<label>Panel F Rotation</label>
						<input class="facetedFRotSlider" id="facetedFRotSpacing"/>
					</div>

					<div class="white-section" style="margin:20px 0px" >
						<button id="facetedCameraCenter">Recenter Camera</button>
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




	<div class="col_last col_three_fourth">
		<div id="benchDisplay" style="width:900px; height:600px;"></div>
	</div>



	<div class="col_last col_three_fourth">
		<div id="slatWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth">
		<div id="backlitWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth">
		<div id="planterWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth">
		<div id="deskDisplay" style="width:900px; height:600px;"></div>
	</div>



	<div class="col_last col_three_fourth">
		<div id="facetedWallDisplay" style="width:900px; height:600px;"></div>
	</div>


	<div class="col_last col_three_fourth"
		 id="panelWallDisplay">
		 @include('sections.designStudio.areaDisplays.wallPanels')
	</div>



	<div class="col_last col_three_fourth">
		<div id="genslerWallDisplay" style="width:900px; height:600px;"></div>
	</div>





</div>
