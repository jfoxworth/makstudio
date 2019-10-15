
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
    <script type="text/javascript" src="/js/colorPickerSliders.min.js"></script>

    <script>	// Set the color picker 
    $("input#finWallColor").ColorPickerSliders({
    	placement:'right',
        color: "rgb(36, 170, 242)",
        flat: true,
        sliders: false,
        swatches: false,
        hsvpanel: true
    });
</script>


</body>
</html>



