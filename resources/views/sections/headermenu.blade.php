	<!-- Primary Navigation
	============================================= -->
	<nav id="primary-menu" class="dark">

		<ul>
			<li><a href="/products"><div>Products</div></a>
			</li>

			<li><a href="/ourWork"><div>Our Work</div></a></li>

			<li><a href="/aboutUs"><div>About Us</div></a></li>

			
<!--
			@guest
				<li data-toggle="tooltip" data-placement="bottom" title="Create Account / Login">
					<a href="/register"><i class="icon-user"></i></a>
				</li>
			@else
				<li data-toggle="tooltip" data-placement="bottom" title="{{{ Auth::user()->name }}}">
					<a href="/home"><i class="icon-user"></i></a>
				</li>
			@endguest
-->

			<!-- Right Side Of Navbar -->
	        <ul class="navbar-nav ml-auto">
	            <!-- Authentication Links -->
	            @guest
	                <li class="nav-item">
	                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
	                </li>
	                @if (Route::has('register'))
	                    <li class="nav-item">
	                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
	                    </li>
	                @endif
	            @else
	                <li class="nav-item dropdown">
	                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
	                        {{ Auth::user()->name }} <span class="caret"></span>
	                    </a>

	                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
	                        <a class="dropdown-item" href="{{ route('logout') }}"
	                           onclick="event.preventDefault();
	                                         document.getElementById('logout-form').submit();">
	                            {{ __('Logout') }}
	                        </a>

	                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
	                            @csrf
	                        </form>
	                    </div>
	                </li>
	            @endguest
	        </ul>

		</ul>


	</nav><!-- #primary-menu end -->
