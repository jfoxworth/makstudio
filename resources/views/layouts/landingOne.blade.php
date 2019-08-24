
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

        @include('sections.landing.option1.slider')

        @include('sections.header')

        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="">

                @include('sections.landing.option1.introText')
                @include('sections.landing.option1.demoBreak')
                @include('sections.landing.option1.productVert')
                @include('sections.landing.option1.sloganBreak')
                @include('sections.landing.option1.founders')
                @include('sections.landing.option1.workofartBreak')
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