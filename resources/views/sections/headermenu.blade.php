	<!-- Primary Navigation
	============================================= -->
	<nav id="primary-menu" class="dark">

		<ul>
			<li><a href="/products"><div>Products</div></a>
			</li>

			<li><a href="/ourWork"><div>Our Work</div></a></li>

			<li><a href="/aboutUs"><div>About Us</div></a></li>

			@guest
				<li data-toggle="tooltip" data-placement="bottom" title="Create Account / Login">
					<i class="icon-user21"><a href="/register"></a></i>
				</li>
			@else
				<li data-toggle="tooltip" data-placement="bottom" title="See My Models">
					<i class="icon-user21"><a href="/home"></a></i>
				</li>
			@endguest

		</ul>


	</nav><!-- #primary-menu end -->
