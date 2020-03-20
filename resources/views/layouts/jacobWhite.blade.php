
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studio - Jacob White</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('newSections.header')

        <!-- Content
        ============================================= -->
        <section id="content">


                @include('newSections.jacobWhite.topImage')
                @include('newSections.jacobWhite.brandSection')
                @include('newSections.jacobWhite.brandImage')
                @include('newSections.jacobWhite.descriptionSection')
                @include('newSections.jacobWhite.followUpSection')
                @include('newSections.jacobWhite.relatedBreaks')



        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

</body>
</html>