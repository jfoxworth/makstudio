
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studio - ARM</title>

</head>

<body class="stretched">

    @include('gtag')

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('newSections.header')

        <!-- Content
        ============================================= -->
        <section id="content">


                @include('newSections.arm.topImage')
                @include('newSections.arm.brandSection')
                @include('newSections.arm.brandImage')
                @include('newSections.arm.descriptionSection')
                @include('newSections.arm.brandImage2')
                @include('newSections.arm.followUpSection')
                @include('newSections.arm.relatedBreaks')



        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

</body>
</html>