<div class="container clearfix">


						<div class="tabs clearfix">

							<ul class="tab-nav clearfix">
								<li><a href="#tabs-1"><i class="icon-home2"></i> Messages</a></li>
								<li><a href="#tabs-1"><i class="icon-home2"></i> Builds</a></li>
							</ul>

							<div class="tab-container">

								<div class="tab-content clearfix" id="tabs-1">
									@yield('messagesContent')
								</div>

								<div class="tab-content clearfix" id="tabs-2">
									@yield('buildsContent')
								</div>

							</div>

						</div>
