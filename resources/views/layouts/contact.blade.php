
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios</title>

</head>

<body class="stretched">

    @include('newSections.gtag')

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('newSections.header')

        <!-- Content
        ============================================= -->
        <section id="content">


                @include('newSections.contactUs.topImage')
                @include('newSections.contactUs.contactForm')
                @include('newSections.contactUs.relatedBreaks')



        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

</body>
</html>