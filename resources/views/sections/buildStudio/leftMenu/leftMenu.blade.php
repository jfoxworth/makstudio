
	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:800px;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:100%">


				<div class="row">Model Name : <div id="modelName"></div></div>

				<h4 class="center" style="margin-bottom:5px; margin-top:10px">Select Build</h4>

				<div class="row divcenter" style="width:75%">
					<select id="buildID"
							style="width:100%; height:35px; margin:20px 0px">
					</select>
				</div>


				@include('sections.buildStudio.leftMenu.bench')
				@include('sections.buildStudio.leftMenu.finWall')
				@include('sections.buildStudio.leftMenu.backlit')
				@include('sections.buildStudio.leftMenu.faceted')

			</div>

		</div>

	</div>