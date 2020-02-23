	<!-- Primary Navigation
	============================================= -->
	<nav id="primary-menu" class="dark">

		<ul>
			<li><a href="/ourWorkNew"><div>OUR WORK</div></a></li>

			<li><a href="/productsNew"><div>PRODUCTS</div></a></li>

			<li><a href="/servicesNew"><div>SERVICES</div></a></li>

			<li><a href="/aboutUsNew"><div>ABOUT</div></a></li>

			<li><a href="/contactNew"><div>CONTACT</div></a></li>



			
			<!-- Right Side Of Navbar -->
	            <!-- Authentication Links --
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

	        -->

		</ul>


	</nav><!-- #primary-menu end -->
