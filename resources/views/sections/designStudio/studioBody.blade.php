<div class="container clearfix">


	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:600px; border-right: 1px solid #ccc;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:80%">


				<!-- Select the type of wall to be built -->
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







				<!-- All options for the slat walls -->
				<div id="slatSection">

					<!-- Options for a slat wall -->
					<select id="slatOptions"
							class="selectpicker btn-info" 
							style="width:100%; height:35px; margin:20px 0px">
						<option value="slatDimensions">Wall Dimensions</option>
						<option value="slatStyle">Wall Style</option>
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





					<!-- Options for a slat Style -->
					<select id="slatStyle"
							class="selectpicker btn-success" 
							style="width:100%; height:35px; margin:20px 0px">
						<option value="rippled">Rippled</option>
						<option value="angled">Angled</option>
						<option value="artistic">Artistic</option>
					</select>






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

						<select id="finProfile"
								class="selectpicker btn-success" 
								style="width:100%; height:35px; margin:20px 0px">
							<option value="curved">Curved</option>
							<option value="angled">Angled</option>
						</select>

					</div>



					<!-- Specifics for slat wall materials and colors -->
					<div id="slatMaterial">

						<div class="row hoverMe">
							<img id="slatMaterialBirch" src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirch.jpg">	
						</div>

						<div class="row hoverMe">
							<img id="slatMaterialBirchLaminate" src="https://makstudio.s3.us-east-2.amazonaws.com/balticBirchLaminate.jpg">	
						</div>

						<div class="row hoverMe">
							<img id="slatMaterialMDF" src="https://makstudio.s3.us-east-2.amazonaws.com/coloredMDF.jpg">
						</div>

					</div>


				</div>






				<!-- All options for the backlit walls -->
				<div id="backlitSection">


					<!-- Options for a backlit wall -->
					<select id="backlitOptions"
							class="selectpicker btn-info" 
							style="width:100%; height:35px; margin:10px 0px;">
						<option>Wall Dimensions</option>
						<option>Logo</option>
						<option>Headers</option>
					</select>


				</div>


			</div>

		</div>

	</div>


	<div class="col_last col_three_fourth">
		<p>Here</p>
	</div>

</div>
