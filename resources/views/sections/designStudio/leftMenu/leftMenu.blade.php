
	<!-- Sidebar
	============================================= -->
	<div class="col_one_fourth clearfix" style="height:800px;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:100%">


				<!-- Options for a defined model to make new build and select desired build -->
				<div class="row bottommargin buildOption">
				    <div id="newBuild" class="button divcenter">Create New Build</div>
				</div>

				<h4 class="center buildOption" style="margin-bottom:5px; margin-top:10px">Select Build</h4>

				<div class="row divcenter buildOption" style="width:75%">
					<select id="buildID"
							class="notopmargin"
							style="width:100%; height:35px; margin:20px 0px">
					</select>
				</div>




				<!-- Options for a undefined model for the user to login, view models, save, etc -->
				<h4 class="center designOption" style="margin-bottom:5px; margin-top:10px">Design Center</h4>

				<div class="row divcenter designOption">

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



				<!-- Options for a user to select a new model when one is undefined -->	
				<h4 class="center designOption" style="margin-bottom:5px; margin-top:20px">Select Design</h4>

				<div class="row divcenter designOption">

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="finWallHolder"
						 data-toggle="tooltip" data-placement="top" title="Slat Wall">
						<img id="finWall" src="/images/icons/MAKICONS-07.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="backlitHolder"
						 data-toggle="tooltip" data-placement="top" title="Backlit Wall">
						<img id="backlit" src="/images/icons/MAKICONS-08.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="facetedHolder"
						 data-toggle="tooltip" data-placement="top" title="Faceted Wall">
						<img id="faceted" src="/images/icons/MAKICONS-06.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last currentItem"
						 id="benchHolder"
						 data-toggle="tooltip" data-placement="top" title="Planter Bench">
						<img id="bench" src="/images/icons/MAKICONS-05.png" width="48px">
					</div>

				</div>

				<div class="row divcenter designOption bottommargin-sm">

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="deskHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Custom Desk">
						<img id="desk" src="/images/icons/MAKICONS-09.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="planterHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Planter Wall">
						<img id="planter" src="/images/icons/MAKICONS-04.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin"
						 id="panelHolder"
						 data-toggle="tooltip" data-placement="bottom" title="3D Wall Panels">
						<img id="panel" src="/images/icons/MAKICONS-02.png" width="48px">
					</div>

					<div class="hoverMe col_one_fourth center designType nobottommargin col_last"
						 id="lightHolder"
						 data-toggle="tooltip" data-placement="bottom" title="Light Fixture Wall">
						<img id="light" src="/images/icons/MAKICONS-01.png" width="48px">
					</div>

				</div>


				<!-- Left menu options for the various design types -->
				@include('sections.designStudio.leftMenu.bench')
				@include('sections.designStudio.leftMenu.finWall')
				@include('sections.designStudio.leftMenu.backlit')
				@include('sections.designStudio.leftMenu.faceted')
				@include('sections.designStudio.leftMenu.light')
				@include('sections.designStudio.leftMenu.desk')
				@include('sections.designStudio.leftMenu.panel')
				@include('sections.designStudio.leftMenu.planter')

			</div>

		</div>

	</div>