
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('sections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios - Builds Page</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('sections.thirdHeader')

        @include("sections.builds.title")


        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="content-wrap">

                @include("sections.admin.mainAdmin")

            </div>

        </section><!-- #content end -->

        @include('sections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('sections.javasfiles')

    <script type="text/javascript" src="/js/buildPage.js"></script>

</body>
</html>



