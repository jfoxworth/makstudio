
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studio - Daikin</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('newSections.header')

        <!-- Content
        ============================================= -->
        <section id="content">


                @include('newSections.daikin.topImage')
                @include('newSections.daikin.brandSection')
                @include('newSections.daikin.brandImage')
                @include('newSections.daikin.descriptionSection')
                @include('newSections.daikin.brandImage2')
                @include('newSections.daikin.followUpSection')
                @include('newSections.daikin.relatedBreaks')



        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

</body>
</html>