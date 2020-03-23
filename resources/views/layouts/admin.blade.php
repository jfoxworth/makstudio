
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios - Admin Page</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('newSections.thirdHeader')

        @include("newSections.admin.title")


        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="content-wrap">

                @include("newSections.admin.mainAdmin")

            </div>

        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

    <script type="text/javascript" src="/js/adminPage.js"></script>

</body>
</html>



