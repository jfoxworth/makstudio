
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

	@include('sections.head')

	<!-- Document Title
	============================================= -->
	<title>Mak Studios - Design Studio</title>

</head>

<body class="stretched">

	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">

		@include('sections.thirdHeader')

		@include("sections.designStudio.pageTitle")


		<!-- Content
		============================================= -->
		<section id="content" style="margin-bottom:0px;">

			<div class="content-wrap">

				@include("sections.designStudio.studioBody")

			</div>

		</section><!-- #content end -->

		@include('sections.footer')

	</div><!-- #wrapper end -->

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-angle-up"></div>

	@include('sections.javasfiles')

	<script>

		$(document).ready(function () {

			$(".slatWallHeightSlider").ionRangeSlider({
				type: "double",
				grid: false,
				min: 48,
				max: 320,
				to:0,
				from:0,
				step: 1
			});

			$(".slatWallWidthSlider").ionRangeSlider({
				type: "double",
				grid: false,
				min: 30,
				max: 540,
				to:0,
				from:0,
				step: 1
			});

			$(".slatWallDepthSlider").ionRangeSlider({
				type: "double",
				grid: true,
				min: 3,
				max: 8,
				to:0,
				from:0,
				step: 1
			});

		});

	</script>

</body>
</html>



