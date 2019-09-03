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
					<a href="/register"><i class="icon-user"></i></a>
				</li>
			@else
				<li data-toggle="tooltip" data-placement="bottom" title="See My Models">
					<a href="/home"><i class="icon-user"></i></a>
				</li>
			@endguest

		</ul>


	</nav><!-- #primary-menu end -->
