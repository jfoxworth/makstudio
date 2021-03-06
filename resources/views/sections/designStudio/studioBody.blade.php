
<div class="container clearfix">

	<div class="tabs clearfix" id="tab-1">

		<ul class="tab-nav clearfix">
			<li><a href="#tabs-1">Build Specifics</a></li>
			<li><a href="#tabs-2">Model Properties</a></li>
			<li><a href="#tabs-3">Timeline for Builds</a></li>
		</ul>

		<div class="tab-container">

			<div class="tab-content clearfix" id="tabs-1">

				@include('sections.designStudio.leftMenu.leftMenu')

				<!-- The main area for the three.js model -->
				<div class="col_last col_three_fourth notopmargin nobottommargin">
					<div class="row"
						 id="modelNameRow">
						<h2>Model Name - </h2>
						<h2 id="modelDisplayName"></h2>
						<i class="icon-pencil h4 leftmargin-sm hoverMe" id="editModelName"></i>
				        <input type="text" class="form-control" id="modelNameInput">

					</div>
					<div class="row"
						 id="buildNameRow">
						<h4>Build Name - </h4>
						<h4 id="buildDisplayName"></h4>
						<i class="icon-pencil h4 leftmargin-sm hoverMe" id="editBuildName"></i>
				        <input type="text" class="form-control" id="buildNameInput">

					</div>
					<div id="currentModelDisplay" style="width:900px; height:600px;"></div>
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


			<div class="tab-content clearfix" id="tabs-2">

				@include('sections.designStudio.buildProperties')

			</div>


			<div class="tab-content clearfix" id="tabs-3">

				@include('sections.designStudio.buildTimeline')

			</div>

		</div>

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
        <input type="text" class="form-control" id="modalModelName" placeholder="Enter Name for Model">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveModelButton">Save changes</button>
      </div>
    </div>
  </div>
</div>





@include('sections.designStudio.quoteBlocks.benchQuote')
@include('sections.designStudio.quoteBlocks.flowerQuote')
@include('sections.designStudio.quoteBlocks.finWallQuote')
@include('sections.designStudio.quoteBlocks.backlitQuote')
@include('sections.designStudio.quoteBlocks.facetedQuote')
@include('sections.designStudio.quoteBlocks.fossilQuote')

