
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

        @include('sections.header3')
        @include('sections.landing.option3.slider')

        <!-- Content
        ============================================= -->
        <section id="content">

            <div class="">

                @include('sections.landing.option3.introText')
                @include('sections.landing.option3.workofartBreak2')
                @include('sections.landing.option3.productVert')
                @include('sections.landing.option3.sloganBreak')
                @include('sections.landing.option3.processSteps')
                @include('sections.landing.option3.uniqueBreak')
                @include('sections.landing.option3.founders')
                @include('sections.landing.option3.workofartBreak')
                @include('sections.landing.option3.customerGrey')
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