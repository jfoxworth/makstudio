<!-- All options for the coucb -->
<div id="benchSection" class="optionSection">

	<h4 class="center notopmargin" style="margin-bottom:5px">Select Parameter Set</h4>

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

		<div class="white-section" style="margin:10px 0px" id="benchDepth">
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

		<div class="white-section" style="margin:20px 0px" id="benchHeight">
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

		<div class="white-section" style="margin:20px 0px" id="benchTwist">
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

		<div class="white-section" style="margin:20px 0px" id="benchLeftSeat">
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

		<div class="white-section" style="margin:20px 0px">
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

		<div class="white-section" style="margin:20px 0px" id="benchRightSeat">
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

		<div class="white-section" style="margin:20px 0px">
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

		<div class="divcenter button topmargin-sm"
			 id="benchModalCall"
			 class=""
			 style="background-color:#ccc; border:#1px solid #000; color:#000">
			Get Price Quote
		</div>

	</div>


</div>

