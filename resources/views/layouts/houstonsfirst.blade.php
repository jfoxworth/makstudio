
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studio - Houston's First Baptist Church</title>

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


                @include('newSections.houstonfirst.topImage')
                @include('newSections.houstonfirst.brandSection')
                @include('newSections.houstonfirst.brandImage')
                @include('newSections.houstonfirst.descriptionSection')
                @include('newSections.houstonfirst.followUpSection')
                @include('newSections.houstonfirst.relatedBreaks')



        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

</body>
</html>