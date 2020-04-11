
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

	@include('sections.head')

	<!-- Document Title
	============================================= -->
	<title>Mak Studios - Design Studio</title>

</head>

<body class="stretched">

    @include('newSections.gtag')


	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">

		@include('sections.thirdHeader')


		<!-- Content
		============================================= -->
		<section id="content" style="margin-bottom:0px;">

			<div class="content-wrap" style="padding-top:20px">

				@include("sections.designStudio.studioBody")

			</div>

		</section><!-- #content end -->

		@include('sections.footer')

	</div><!-- #wrapper end -->

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-angle-up"></div>

	@include('sections.javasfiles')

    <script type="text/javascript" src="/js/designStudio.js"></script>

	<script src="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js"></script>




</body>
</html>



