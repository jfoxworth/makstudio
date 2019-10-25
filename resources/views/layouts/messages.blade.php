
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('sections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios - Messages Page</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('sections.thirdHeader')


        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="content-wrap">

                @include("sections.messages.mainMessage")

            </div>

        </section><!-- #content end -->

        @include('sections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('sections.javasfiles')

    <script type="text/javascript" src="/js/messagePage.js"></script>

</body>
</html>



