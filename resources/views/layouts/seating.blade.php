
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    @include('newSections.head')

    <!-- Document Title
    ============================================= -->
    <title>Mak Studios</title>

</head>

<body class="stretched">

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

        @include('newSections.header')

        <!-- Content
        ============================================= -->
        <section id="content">


                @include('newSections.seating.topImage')
                @include('newSections.seating.numberList')
                @include('newSections.seating.relatedBreaks')



        </section><!-- #content end -->

        @include('newSections.footer')

    </div><!-- #wrapper end -->

    <!-- Go To Top
    ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    @include('newSections.javasfiles')

</body>
</html>