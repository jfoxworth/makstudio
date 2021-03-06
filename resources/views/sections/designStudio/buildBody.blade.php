

<div class="container clearfix">

	<div class="tabs clearfix" id="tab-1">

		<ul class="tab-nav clearfix">
			<li><a href="#tabs-1">Build Specifics</a></li>
			<li><a href="#tabs-2">Model Properties</a></li>
			<li><a href="#tabs-3">Timeline for Builds</a></li>
			<li><a href="#tabs-4">Select Another Model</a></li>
		</ul>

		<div class="tab-container">

			<div class="tab-content clearfix" id="tabs-1">

				@include('sections.buildStudio.leftMenu.leftMenu')

				<!-- The main area for the three.js model -->
				<div class="col_last col_three_fourth notopmargin nobottommargin">
					<div id="currentModelDisplay" style="width:900px; height:600px;"></div>
				</div>

			</div>


			<div class="tab-content clearfix" id="tabs-2">

				@include('sections.buildStudio.buildProperties')

			</div>


			<div class="tab-content clearfix" id="tabs-3">

				@include('sections.buildStudio.buildTimeline')

			</div>


			<div class="tab-content clearfix" id="tabs-4">

				@include('sections.buildStudio.selectModel')

			</div>

		</div>

	</div>

</div>


