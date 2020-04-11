
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios - Who we are</title>

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

            <div class="content-wrap nomargin nopadding">

                @include("newSections.aboutUs.topImage")
                @include("newSections.aboutUs.cultureBreak")
                @include("newSections.aboutUs.clientBreak")
                @include("newSections.aboutUs.relatedBreaks")

            </div>

        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('sections.javasfiles')

</body>
</html>



