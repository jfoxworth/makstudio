
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

	@include('sections.head')

	<!-- Document Title
	============================================= -->
	<title>Mak Studios - Build Studio</title>

</head>

<body class="stretched">

    @include('gtag')

	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">

		@include('sections.thirdHeader')


		<!-- Content
		============================================= -->
		<section id="content" style="margin-bottom:0px;">

			<div class="content-wrap" style="padding-top:20px">

				@include("sections.buildStudio.buildBody")

			</div>

		</section><!-- #content end -->

		@include('sections.footer')

	</div><!-- #wrapper end -->

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-angle-up"></div>

	@include('sections.javasfiles')

    <script type="text/javascript" src="/js/buildStudio.js"></script>

	<script src="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js"></script>




</body>
</html>



