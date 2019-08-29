
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

    <script type="text/javascript" src="/js/designStudio.js"></script>
    <script type="text/javascript" src="/js/popper.min.js"></script>
    <script type="text/javascript" src="/js/bs-switches.js"></script>
    <script type="text/javascript" src="/js/selectsplitter.js"></script>


</body>
</html>



