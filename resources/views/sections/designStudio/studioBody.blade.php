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
							style="width:100%; height:35px; margin:10px 0px">
						<option>Wall Dimensions</option>
						<option>Wall Style</option>
						<option>Fin Options</option>
						<option>Ripple Style</option>
						<option>Materials & Color</option>
						<option>Logo Options</option>
					</select>


					<!-- Specifics for slat wall dimensions -->
					<div id="slatDimensions" style="display:none">

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

				</div>






				<!-- All options for the backlit walls -->
				<div id="backlitSection">


					<!-- Options for a backlit wall -->
					<select id="backlitOptions"
							class="selectpicker btn-info" 
							style="width:100%; height:35px; margin:10px 0px; display:none">
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
