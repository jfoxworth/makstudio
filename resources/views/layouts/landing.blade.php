
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('sections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('sections.header')

        @include('sections.landing.slider')


        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="">

                @include('sections.landing.callToAction')
                @include('sections.landing.productVert')
                @include('sections.landing.workofartBreak2')
                @include('sections.landing.processVideo')
                @include('sections.landing.sloganBreak')
                @include('sections.landing.founders')
                @include('sections.landing.workofartBreak')
                @include('sections.landing.customerGrey')
                @include('sections.contactUs.contactForm')
                @include('sections.contactUs.contactInfo')


            </div>

        </section><!-- #content end -->

        @include('sections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('sections.javasfiles')

</body>
</html>