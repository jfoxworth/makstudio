
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

        @include('sections.header2')

        @include('sections.landing.option2.slider')


        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="">

                @include('sections.landing.option2.introText')
                @include('sections.landing.option2.workofartBreak2')
                @include('sections.landing.option2.productVert')
                @include('sections.landing.option2.sloganBreak')
                @include('sections.landing.option2.processSteps')
                @include('sections.landing.option2.founders')
                @include('sections.landing.option2.workofartBreak')
                @include('sections.landing.option2.customerGrey')
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