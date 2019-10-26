
	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:800px;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:100%">



				<h4 class="center" style="margin-bottom:5px; margin-top:10px">Select Model and Build</h4>

				<div class="row divcenter">

					<div>
						<select id="instanceID"
								class="selectpicker btn-primary modelDropdown" 
								style="width:100%; height:35px; margin:20px 0px">
							<option value="0">No Planter</option>
						</select>
					</div>

					<div>
						<select id="buildID"
								class="selectpicker btn-primary modelDropdown" 
								style="width:100%; height:35px; margin:20px 0px">
							<option value="0">No Planter</option>
						</select>
					</div>

				</div>


				@include('sections.buildStudio.leftMenu.bench')
				@include('sections.buildStudio.leftMenu.finWall')
				@include('sections.buildStudio.leftMenu.backlit')
				@include('sections.buildStudio.leftMenu.faceted')

			</div>

		</div>

	</div>