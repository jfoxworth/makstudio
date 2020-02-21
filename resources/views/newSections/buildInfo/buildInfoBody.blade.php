<div class="container clearfix">


	<!-- Sidebar
	============================================= -->
	<div class="col_one_fifth clearfix" style="height:800px;">
		
		<div class="sidebar-widgets-wrap" >

			<div class="widget clearfix" style="width:100%">


				<h4 class="center" style="margin-bottom:5px; margin-top:10px">Build Info</h4>

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

			</div>

		</div>

	</div>


</div>


