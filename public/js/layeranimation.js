/************************************************
 * REVOLUTION 5.4.8 EXTENSION - LAYER ANIMATION
 * @version: 3.6.5 (10.06.2018)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(e) {
    "use strict";
    var A = jQuery.fn.revolution
      , l = (A.is_mobile(),
    A.is_android(),
    {
        alias: "LayerAnimation Min JS",
        name: "revolution.extensions.layeranimation.min.js",
        min_core: "5.4.6.4",
        version: "3.6.5"
    });
    jQuery.extend(!0, A, {
        updateMarkup: function(e, t) {
            var i = jQuery(e).data();
            if (void 0 !== i.start && !i.frames_added && void 0 === i.frames) {
                var a = new Array
                  , n = F(B(), i.transform_in, void 0, !1)
                  , r = F(B(), i.transform_out, void 0, !1)
                  , o = F(B(), i.transform_hover, void 0, !1);
                jQuery.isNumeric(i.end) && jQuery.isNumeric(i.start) && jQuery.isNumeric(n.speed) && (i.end = parseInt(i.end, 0) - (parseInt(i.start, 0) + parseFloat(n.speed, 0))),
                a.push({
                    frame: "0",
                    delay: i.start,
                    from: i.transform_in,
                    to: i.transform_idle,
                    split: i.splitin,
                    speed: n.speed,
                    ease: n.anim.ease,
                    mask: i.mask_in,
                    splitdelay: i.elementdelay
                }),
                a.push({
                    frame: "5",
                    delay: i.end,
                    to: i.transform_out,
                    split: i.splitout,
                    speed: r.speed,
                    ease: r.anim.ease,
                    mask: i.mask_out,
                    splitdelay: i.elementdelay
                }),
                i.transform_hover && a.push({
                    frame: "hover",
                    to: i.transform_hover,
                    style: i.style_hover,
                    speed: o.speed,
                    ease: o.anim.ease,
                    splitdelay: i.elementdelay
                }),
                i.frames = a
            }
            if (!i.frames_added) {
                if (i.inframeindex = 0,
                i.outframeindex = -1,
                i.hoverframeindex = -1,
                void 0 !== i.frames)
                    for (var s = 0; s < i.frames.length; s++)
                        void 0 !== i.frames[s].sfx_effect && 0 <= i.frames[s].sfx_effect.indexOf("block") && (0 === s ? (i.frames[s].from = "o:0",
                        i.frames[s].to = "o:1") : i.frames[s].to = "o:0",
                        i._sfx = "block"),
                        void 0 === i.frames[0].from && (i.frames[0].from = "o:inherit"),
                        0 === i.frames[0].delay && (i.frames[0].delay = 20),
                        "hover" === i.frames[s].frame ? i.hoverframeindex = s : "frame_999" !== i.frames[s].frame && "frame_out" !== i.frames[s].frame && "last" !== i.frames[s].frame && "end" !== i.frames[s].frame || (i.outframeindex = s),
                        void 0 !== i.frames[s].split && i.frames[s].split.match(/chars|words|lines/g) && (i.splittext = !0);
                i.outframeindex = -1 === i.outframeindex ? -1 === i.hoverframeindex ? i.frames.length - 1 : i.frames.length - 2 : i.outframeindex,
                i.frames_added = !0
            }
        },
        animcompleted: function(e, t) {
            var i = e.data()
              , a = i.videotype
              , n = i.autoplay
              , r = i.autoplayonlyfirsttime;
            null != a && "none" != a && (1 == n || "true" == n || "on" == n || "1sttime" == n || r ? (("carousel" !== t.sliderType || "carousel" === t.sliderType && "on" === t.carousel.showLayersAllTime && e.closest("li").hasClass("active-revslide") || "carousel" === t.sliderType && "on" !== t.carousel.showLayersAllTime && e.closest("li").hasClass("active-revslide")) && A.playVideo(e, t),
            A.toggleState(e.data("videotoggledby")),
            (r || "1sttime" == n) && (i.autoplayonlyfirsttime = !1,
            i.autoplay = "off")) : ("no1sttime" == n && (i.datasetautoplay = "on"),
            A.unToggleState(e.data("videotoggledby"))))
        },
        handleStaticLayers: function(e, t) {
            var i = parseInt(e.data("startslide"), 0)
              , a = parseInt(e.data("endslide"), 0);
            i < 0 && (i = 0),
            a < 0 && (a = t.realslideamount),
            0 === i && a === t.realslideamount - 1 && (a = t.realslideamount + 1),
            e.data("startslide", i),
            e.data("endslide", a)
        },
        animateTheCaptions: function(e) {
            if ("stop" === A.compare_version(l).check)
                return !1;
            var p = e.opt
              , t = e.slide
              , n = e.recall
              , i = e.maintimeline
              , r = e.preset
              , o = e.startslideanimat
              , s = "carousel" === p.sliderType ? 0 : p.width / 2 - p.gridwidth[p.curWinRange] * p.bw / 2
              , a = t.data("index");
            if (p.layers = p.layers || new Object,
            p.layers[a] = p.layers[a] || t.find(".tp-caption"),
            p.layers.static = p.layers.static || p.c.find(".tp-static-layers").find(".tp-caption"),
            void 0 === p.timelines && A.createTimelineStructure(p),
            p.conh = p.c.height(),
            p.conw = p.c.width(),
            p.ulw = p.ul.width(),
            p.ulh = p.ul.height(),
            p.debugMode) {
                t.addClass("indebugmode"),
                t.find(".helpgrid").remove(),
                p.c.find(".hglayerinfo").remove(),
                t.append('<div class="helpgrid" style="width:' + p.gridwidth[p.curWinRange] * p.bw + "px;height:" + p.gridheight[p.curWinRange] * p.bw + 'px;"></div>');
                var d = t.find(".helpgrid");
                d.append('<div class="hginfo">Zoom:' + Math.round(100 * p.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + p.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + p.gridwidth[p.curWinRange] + "x" + p.gridheight[p.curWinRange] + "</div>"),
                p.c.append('<div class="hglayerinfo"></div>'),
                d.append('<div class="tlhg"></div>')
            }
            void 0 !== a && p.layers[a] && jQuery.each(p.layers[a], function(e, t) {
                var i = jQuery(this);
                A.updateMarkup(this, p),
                A.prepareSingleCaption({
                    caption: i,
                    opt: p,
                    offsetx: s,
                    offsety: 0,
                    index: e,
                    recall: n,
                    preset: r
                }),
                r && 0 !== o || A.buildFullTimeLine({
                    caption: i,
                    opt: p,
                    offsetx: s,
                    offsety: 0,
                    index: e,
                    recall: n,
                    preset: r,
                    regenerate: 0 === o
                }),
                n && "carousel" === p.sliderType && "on" === p.carousel.showLayersAllTime && A.animcompleted(i, p)
            }),
            p.layers.static && jQuery.each(p.layers.static, function(e, t) {
                var i = jQuery(this)
                  , a = i.data();
                !0 !== a.hoveredstatus && !0 !== a.inhoveroutanimation ? (A.updateMarkup(this, p),
                A.prepareSingleCaption({
                    caption: i,
                    opt: p,
                    offsetx: s,
                    offsety: 0,
                    index: e,
                    recall: n,
                    preset: r
                }),
                r && 0 !== o || !0 === a.veryfirstststic || (A.buildFullTimeLine({
                    caption: i,
                    opt: p,
                    offsetx: s,
                    offsety: 0,
                    index: e,
                    recall: n,
                    preset: r,
                    regenerate: 0 === o
                }),
                a.veryfirstststic = !0),
                n && "carousel" === p.sliderType && "on" === p.carousel.showLayersAllTime && A.animcompleted(i, p)) : A.prepareSingleCaption({
                    caption: i,
                    opt: p,
                    offsetx: s,
                    offsety: 0,
                    index: e,
                    recall: n,
                    preset: r
                })
            });
            var g = -1 === p.nextSlide || void 0 === p.nextSlide ? 0 : p.nextSlide;
            void 0 !== p.rowzones && (g = g > p.rowzones.length ? p.rowzones.length : g),
            null != p.rowzones && 0 < p.rowzones.length && null != p.rowzones[g] && 0 <= g && g <= p.rowzones.length && 0 < p.rowzones[g].length && A.setSize(p),
            r || void 0 !== o && (void 0 !== a && jQuery.each(p.timelines[a].layers, function(e, t) {
                var i = t.layer.data();
                "none" !== t.wrapper && void 0 !== t.wrapper || ("keep" == t.triggerstate && "on" === i.triggerstate ? A.playAnimationFrame({
                    caption: t.layer,
                    opt: p,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }) : t.timeline.restart())
            }),
            p.timelines.staticlayers && jQuery.each(p.timelines.staticlayers.layers, function(e, t) {
                var i = t.layer.data()
                  , a = g >= t.firstslide && g <= t.lastslide
                  , n = g < t.firstslide || g > t.lastslide
                  , r = t.timeline.getLabelTime("slide_" + t.firstslide)
                  , o = t.timeline.getLabelTime("slide_" + t.lastslide)
                  , s = i.static_layer_timeline_time
                  , d = "in" === i.animdirection || "out" !== i.animdirection && void 0
                  , l = "bytrigger" === i.frames[0].delay
                  , m = (i.frames[i.frames.length - 1].delay,
                i.triggered_startstatus)
                  , c = i.lasttriggerstate;
                !0 !== i.hoveredstatus && 1 != i.inhoveroutanimation && (void 0 !== s && d && ("keep" == c ? (A.playAnimationFrame({
                    caption: t.layer,
                    opt: p,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }),
                i.triggeredtimeline.time(s)) : !0 !== i.hoveredstatus && t.timeline.time(s)),
                "reset" === c && "hidden" === m && (t.timeline.time(0),
                i.animdirection = "out"),
                a ? d ? g === t.lastslide && (t.timeline.play(o),
                i.animdirection = "in") : (l || "in" === i.animdirection || t.timeline.play(r),
                ("visible" == m && "keep" !== c || "keep" === c && !0 === d || "visible" == m && void 0 === d) && (t.timeline.play(r + .01),
                i.animdirection = "in")) : n && d && t.timeline.play("frame_999"))
            })),
            null != i && setTimeout(function() {
                i.resume()
            }, 30)
        },
        prepareSingleCaption: function(e) {
            var t = e.caption
              , i = t.data()
              , a = e.opt
              , n = e.recall
              , r = e.recall
              , o = (e.preset,
            jQuery("body").hasClass("rtl"));
            if (i._pw = void 0 === i._pw ? t.closest(".tp-parallax-wrap") : i._pw,
            i._lw = void 0 === i._lw ? t.closest(".tp-loop-wrap") : i._lw,
            i._mw = void 0 === i._mw ? t.closest(".tp-mask-wrap") : i._mw,
            i._responsive = i.responsive || "on",
            i._respoffset = i.responsive_offset || "on",
            i._ba = i.basealign || "grid",
            i._gw = "grid" === i._ba ? a.width : a.ulw,
            i._gh = "grid" === i._ba ? a.height : a.ulh,
            i._lig = void 0 === i._lig ? t.hasClass("rev_layer_in_group") ? t.closest(".rev_group") : t.hasClass("rev_layer_in_column") ? t.closest(".rev_column_inner") : t.hasClass("rev_column_inner") ? t.closest(".rev_row") : "none" : i._lig,
            i._column = void 0 === i._column ? t.hasClass("rev_column_inner") ? t.closest(".rev_column") : "none" : i._column,
            i._row = void 0 === i._row ? t.hasClass("rev_column_inner") ? t.closest(".rev_row") : "none" : i._row,
            i._ingroup = void 0 === i._ingroup ? !(t.hasClass("rev_group") || !t.closest(".rev_group")) : i._ingroup,
            i._isgroup = void 0 === i._isgroup ? !!t.hasClass("rev_group") : i._isgroup,
            i._nctype = i.type || "none",
            i._cbgc_auto = void 0 === i._cbgc_auto ? "column" === i._nctype && i._pw.find(".rev_column_bg_auto_sized") : i._cbgc_auto,
            i._cbgc_man = void 0 === i._cbgc_man ? "column" === i._nctype && i._pw.find(".rev_column_bg_man_sized") : i._cbgc_man,
            i._slideid = i._slideid || t.closest(".tp-revslider-slidesli").data("index"),
            i._id = void 0 === i._id ? t.data("id") || t.attr("id") : i._id,
            i._slidelink = void 0 === i._slidelink ? void 0 !== t.hasClass("slidelink") && t.hasClass("slidelink") : i._slidelink,
            void 0 === i._li && (t.hasClass("tp-static-layer") ? (i._isstatic = !0,
            i._li = t.closest(".tp-static-layers"),
            i._slideid = "staticlayers") : i._li = t.closest(".tp-revslider-slidesli")),
            i._row = void 0 === i._row ? "column" === i._nctype && i._pw.closest(".rev_row") : i._row,
            void 0 === i._togglelisteners && t.find(".rs-toggled-content") ? (i._togglelisteners = !0,
            void 0 === i.actions && t.click(function() {
                A.swaptoggleState(t)
            })) : i._togglelisteners = !1,
            "fullscreen" == a.sliderLayout && (e.offsety = i._gh / 2 - a.gridheight[a.curWinRange] * a.bh / 2),
            ("on" == a.autoHeight || null != a.minHeight && 0 < a.minHeight) && (e.offsety = a.conh / 2 - a.gridheight[a.curWinRange] * a.bh / 2),
            e.offsety < 0 && (e.offsety = 0),
            a.debugMode) {
                t.closest("li").find(".helpgrid").css({
                    top: e.offsety + "px",
                    left: e.offsetx + "px"
                });
                var s = a.c.find(".hglayerinfo");
                t.on("hover, mouseenter", function() {
                    var i = "";
                    t.data() && jQuery.each(t.data(), function(e, t) {
                        "object" != typeof t && (i = i + '<span style="white-space:nowrap"><span style="color:#27ae60">' + e + ":</span>" + t + "</span>&nbsp; &nbsp; ")
                    }),
                    s.html(i)
                })
            }
            if ("off" === (void 0 === i.visibility ? "oon" : N(i.visibility, a)[a.forcedWinRange] || N(i.visibility, a) || "ooon") || i._gw < a.hideCaptionAtLimit && "on" == i.captionhidden || i._gw < a.hideAllCaptionAtLimit ? i._pw.addClass("tp-hidden-caption") : i._pw.removeClass("tp-hidden-caption"),
            i.layertype = "html",
            e.offsetx < 0 && (e.offsetx = 0),
            null != i.thumbimage && null == i.videoposter && (i.videoposter = i.thumbimage),
            0 < t.find("img").length) {
                var d = t.find("img");
                i.layertype = "image",
                0 == d.width() && d.css({
                    width: "auto"
                }),
                0 == d.height() && d.css({
                    height: "auto"
                }),
                null == d.data("ww") && 0 < d.width() && d.data("ww", d.width()),
                null == d.data("hh") && 0 < d.height() && d.data("hh", d.height());
                var l = d.data("ww")
                  , m = d.data("hh")
                  , c = "slide" == i._ba ? a.ulw : a.gridwidth[a.curWinRange]
                  , p = "slide" == i._ba ? a.ulh : a.gridheight[a.curWinRange]
                  , g = "full" === (l = N(d.data("ww"), a)[a.curWinRange] || N(d.data("ww"), a) || "auto") || "full-proportional" === l
                  , u = "full" === (m = N(d.data("hh"), a)[a.curWinRange] || N(d.data("hh"), a) || "auto") || "full-proportional" === m;
                if ("full-proportional" === l) {
                    var f = d.data("owidth")
                      , h = d.data("oheight");
                    f / c < h / p ? m = h * ((l = c) / f) : l = f * ((m = p) / h)
                } else
                    l = g ? c : !jQuery.isNumeric(l) && 0 < l.indexOf("%") ? l : parseFloat(l),
                    m = u ? p : !jQuery.isNumeric(m) && 0 < m.indexOf("%") ? m : parseFloat(m);
                l = void 0 === l ? 0 : l,
                m = void 0 === m ? 0 : m,
                "off" !== i._responsive ? ("grid" != i._ba && g ? jQuery.isNumeric(l) ? d.css({
                    width: l + "px"
                }) : d.css({
                    width: l
                }) : jQuery.isNumeric(l) ? d.css({
                    width: l * a.bw + "px"
                }) : d.css({
                    width: l
                }),
                "grid" != i._ba && u ? jQuery.isNumeric(m) ? d.css({
                    height: m + "px"
                }) : d.css({
                    height: m
                }) : jQuery.isNumeric(m) ? d.css({
                    height: m * a.bh + "px"
                }) : d.css({
                    height: m
                })) : d.css({
                    width: l,
                    height: m
                }),
                i._ingroup && "row" !== i._nctype && (void 0 !== l && !jQuery.isNumeric(l) && "string" === jQuery.type(l) && 0 < l.indexOf("%") && punchgs.TweenLite.set([i._lw, i._pw, i._mw], {
                    minWidth: l
                }),
                void 0 !== m && !jQuery.isNumeric(m) && "string" === jQuery.type(m) && 0 < m.indexOf("%") && punchgs.TweenLite.set([i._lw, i._pw, i._mw], {
                    minHeight: m
                }))
            }
            if ("slide" === i._ba)
                e.offsetx = 0,
                e.offsety = 0;
            else if (i._isstatic && void 0 !== a.carousel && void 0 !== a.carousel.horizontal_align && "carousel" === a.sliderType) {
                switch (a.carousel.horizontal_align) {
                case "center":
                    e.offsetx = 0 + (a.ulw - a.gridwidth[a.curWinRange] * a.bw) / 2;
                    break;
                case "left":
                    break;
                case "right":
                    e.offsetx = a.ulw - a.gridwidth[a.curWinRange] * a.bw
                }
                e.offsetx = e.offsetx < 0 ? 0 : e.offsetx
            }
            var v = "html5" == i.audio ? "audio" : "video";
            if (t.hasClass("tp-videolayer") || t.hasClass("tp-audiolayer") || 0 < t.find("iframe").length || 0 < t.find(v).length) {
                if (i.layertype = "video",
                A.manageVideoLayer && A.manageVideoLayer(t, a, n, r),
                !n && !r) {
                    i.videotype;
                    A.resetVideo && A.resetVideo(t, a, e.preset)
                }
                var _ = i.aspectratio;
                null != _ && 1 < _.split(":").length && A.prepareCoveredVideo(a, t);
                d = t.find("iframe") ? t.find("iframe") : d = t.find(v);
                var b = !t.find("iframe")
                  , y = t.hasClass("coverscreenvideo");
                d.css({
                    display: "block"
                }),
                null == t.data("videowidth") && (t.data("videowidth", d.width()),
                t.data("videoheight", d.height()));
                l = N(t.data("videowidth"), a)[a.curWinRange] || N(t.data("videowidth"), a) || "auto",
                m = N(t.data("videoheight"), a)[a.curWinRange] || N(t.data("videoheight"), a) || "auto";
                l = "auto" === l || !jQuery.isNumeric(l) && 0 < l.indexOf("%") ? "auto" === l ? "auto" : "grid" === i._ba ? a.gridwidth[a.curWinRange] * a.bw : i._gw : parseFloat(l) * a.bw + "px",
                m = "auto" === m || !jQuery.isNumeric(m) && 0 < m.indexOf("%") ? "auto" === m ? "auto" : "grid" === i._ba ? a.gridheight[a.curWinRange] * a.bw : i._gh : parseFloat(m) * a.bh + "px",
                i.cssobj = void 0 === i.cssobj ? V(t, 0) : i.cssobj;
                var w = Z(i.cssobj, a);
                if ("auto" == w.lineHeight && (w.lineHeight = w.fontSize + 4),
                t.hasClass("fullscreenvideo") || y) {
                    e.offsetx = 0,
                    e.offsety = 0,
                    t.data("x", 0),
                    t.data("y", 0);
                    var x = i._gh;
                    "on" == a.autoHeight && (x = a.conh),
                    t.css({
                        width: i._gw,
                        height: x
                    })
                } else
                    punchgs.TweenLite.set(t, {
                        paddingTop: Math.round(w.paddingTop * a.bh) + "px",
                        paddingBottom: Math.round(w.paddingBottom * a.bh) + "px",
                        paddingLeft: Math.round(w.paddingLeft * a.bw) + "px",
                        paddingRight: Math.round(w.paddingRight * a.bw) + "px",
                        marginTop: w.marginTop * a.bh + "px",
                        marginBottom: w.marginBottom * a.bh + "px",
                        marginLeft: w.marginLeft * a.bw + "px",
                        marginRight: w.marginRight * a.bw + "px",
                        borderTopWidth: Math.round(w.borderTopWidth * a.bh) + "px",
                        borderBottomWidth: Math.round(w.borderBottomWidth * a.bh) + "px",
                        borderLeftWidth: Math.round(w.borderLeftWidth * a.bw) + "px",
                        borderRightWidth: Math.round(w.borderRightWidth * a.bw) + "px",
                        width: l,
                        height: m
                    });
                (0 == b && !y || 1 != i.forcecover && !t.hasClass("fullscreenvideo") && !y) && (d.width(l),
                d.height(m)),
                i._ingroup && null !== i.videowidth && void 0 !== i.videowidth && !jQuery.isNumeric(i.videowidth) && 0 < i.videowidth.indexOf("%") && punchgs.TweenLite.set([i._lw, i._pw, i._mw], {
                    minWidth: i.videowidth
                })
            }
            E(t, a, 0, i._responsive),
            t.hasClass("tp-resizeme") && t.find("*").each(function() {
                E(jQuery(this), a, "rekursive", i._responsive)
            });
            var T = t.outerHeight()
              , k = t.css("backgroundColor");
            D(t, ".frontcorner", "left", "borderRight", "borderTopColor", T, k),
            D(t, ".frontcornertop", "left", "borderRight", "borderBottomColor", T, k),
            D(t, ".backcorner", "right", "borderLeft", "borderBottomColor", T, k),
            D(t, ".backcornertop", "right", "borderLeft", "borderTopColor", T, k),
            "on" == a.fullScreenAlignForce && (e.offsetx = 0,
            e.offsety = 0),
            "block" === i._sfx && void 0 === i._bmask && (i._bmask = jQuery('<div class="tp-blockmask"></div>'),
            i._mw.append(i._bmask)),
            i.arrobj = new Object,
            i.arrobj.voa = N(i.voffset, a)[a.curWinRange] || N(i.voffset, a)[0],
            i.arrobj.hoa = N(i.hoffset, a)[a.curWinRange] || N(i.hoffset, a)[0],
            i.arrobj.elx = N(i.x, a)[a.curWinRange] || N(i.x, a)[0],
            i.arrobj.ely = N(i.y, a)[a.curWinRange] || N(i.y, a)[0];
            var j = 0 == i.arrobj.voa.length ? 0 : i.arrobj.voa
              , L = 0 == i.arrobj.hoa.length ? 0 : i.arrobj.hoa
              , I = 0 == i.arrobj.elx.length ? 0 : i.arrobj.elx
              , W = 0 == i.arrobj.ely.length ? 0 : i.arrobj.ely;
            i.eow = t.outerWidth(!0),
            i.eoh = t.outerHeight(!0),
            0 == i.eow && 0 == i.eoh && (i.eow = a.ulw,
            i.eoh = a.ulh);
            var R = "off" !== i._respoffset ? parseInt(j, 0) * a.bw : parseInt(j, 0)
              , C = "off" !== i._respoffset ? parseInt(L, 0) * a.bw : parseInt(L, 0)
              , z = "grid" === i._ba ? a.gridwidth[a.curWinRange] * a.bw : i._gw
              , O = "grid" === i._ba ? a.gridheight[a.curWinRange] * a.bw : i._gh;
            "on" == a.fullScreenAlignForce && (z = a.ulw,
            O = a.ulh),
            "none" !== i._lig && null != i._lig && (z = i._lig.width(),
            O = i._lig.height(),
            e.offsetx = 0,
            e.offsety = 0),
            I = "center" === I || "middle" === I ? z / 2 - i.eow / 2 + C : "left" === I ? C : "right" === I ? z - i.eow - C : "off" !== i._respoffset ? I * a.bw : I,
            W = "center" == W || "middle" == W ? O / 2 - i.eoh / 2 + R : "top" == W ? R : "bottom" == W ? O - i.eoh - R : "off" !== i._respoffset ? W * a.bw : W,
            o && !i._slidelink && (I += i.eow),
            i._slidelink && (I = 0),
            i.calcx = parseInt(I, 0) + e.offsetx,
            i.calcy = parseInt(W, 0) + e.offsety;
            var Q = t.css("z-Index");
            if ("row" !== i._nctype && "column" !== i._nctype)
                punchgs.TweenLite.set(i._pw, {
                    zIndex: Q,
                    top: i.calcy,
                    left: i.calcx,
                    overwrite: "auto"
                });
            else if ("row" !== i._nctype)
                punchgs.TweenLite.set(i._pw, {
                    zIndex: Q,
                    width: i.columnwidth,
                    top: 0,
                    left: 0,
                    overwrite: "auto"
                });
            else if ("row" === i._nctype) {
                var S = "grid" === i._ba ? z + "px" : "100%";
                punchgs.TweenLite.set(i._pw, {
                    zIndex: Q,
                    width: S,
                    top: 0,
                    left: e.offsetx,
                    overwrite: "auto"
                })
            }
            if (void 0 !== i.blendmode && punchgs.TweenLite.set(i._pw, {
                mixBlendMode: i.blendmode
            }),
            "row" === i._nctype && (i.columnbreak <= a.curWinRange ? t.addClass("rev_break_columns") : t.removeClass("rev_break_columns")),
            "on" == i.loopanimation && punchgs.TweenLite.set(i._lw, {
                minWidth: i.eow,
                minHeight: i.eoh
            }),
            "column" === i._nctype) {
                var M = void 0 !== t[0]._gsTransform ? t[0]._gsTransform.y : 0
                  , P = parseInt(i._column[0].style.paddingTop, 0);
                punchgs.TweenLite.set(t, {
                    y: 0
                }),
                punchgs.TweenLite.set(i._cbgc_man, {
                    y: parseInt(P + i._column.offset().top - t.offset().top, 0)
                }),
                punchgs.TweenLite.set(t, {
                    y: M
                })
            }
            i._ingroup && "row" !== i._nctype && (void 0 !== i._groupw && !jQuery.isNumeric(i._groupw) && 0 < i._groupw.indexOf("%") && punchgs.TweenLite.set([i._lw, i._pw, i._mw], {
                minWidth: i._groupw
            }),
            void 0 !== i._grouph && !jQuery.isNumeric(i._grouph) && 0 < i._grouph.indexOf("%") && punchgs.TweenLite.set([i._lw, i._pw, i._mw], {
                minHeight: i._grouph
            }))
        },
        createTimelineStructure: function(s) {
            s.timelines = s.timelines || new Object,
            s.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function() {
                var e = jQuery(this)
                  , o = e.data("index");
                s.timelines[o] = s.timelines[o] || {},
                s.timelines[o].layers = s.timelines[o].layers || new Object,
                e.find(".tp-caption").each(function(e) {
                    var t, i, a, n, r;
                    t = jQuery(this),
                    i = s.timelines[o].layers,
                    a = o,
                    r = new punchgs.TimelineLite({
                        paused: !0
                    }),
                    (i = i || new Object)[t.attr("id")] = i[t.attr("id")] || new Object,
                    "staticlayers" === a && (i[t.attr("id")].firstslide = t.data("startslide"),
                    i[t.attr("id")].lastslide = t.data("endslide")),
                    t.data("slideid", a),
                    i[t.attr("id")].defclasses = n = t[0].className,
                    i[t.attr("id")].wrapper = 0 <= n.indexOf("rev_layer_in_column") ? t.closest(".rev_column_inner") : 0 <= n.indexOf("rev_column_inner") ? t.closest(".rev_row") : 0 <= n.indexOf("rev_layer_in_group") ? t.closest(".rev_group") : "none",
                    i[t.attr("id")].timeline = r,
                    i[t.attr("id")].layer = t,
                    i[t.attr("id")].triggerstate = t.data("lasttriggerstate"),
                    i[t.attr("id")].dchildren = 0 <= n.indexOf("rev_row") ? t[0].getElementsByClassName("rev_column_inner") : 0 <= n.indexOf("rev_column_inner") ? t[0].getElementsByClassName("tp-caption") : 0 <= n.indexOf("rev_group") ? t[0].getElementsByClassName("rev_layer_in_group") : "none",
                    t.data("timeline", r)
                })
            })
        },
        buildFullTimeLine: function(e) {
            var t, i, a = e.caption, n = a.data(), r = e.opt, o = {}, s = h();
            if (!(t = r.timelines[n._slideid].layers[n._id]).generated || !0 === e.regenerate) {
                if (i = t.timeline,
                t.generated = !0,
                void 0 !== n.current_timeline && !0 !== e.regenerate ? (n.current_timeline_pause = n.current_timeline.paused(),
                n.current_timeline_time = n.current_timeline.time(),
                n.current_is_nc_timeline = i === n.current_timeline,
                n.static_layer_timeline_time = n.current_timeline_time) : (n.static_layer_timeline_time = n.current_timeline_time,
                n.current_timeline_time = 0,
                n.current_timeline && n.current_timeline.clear()),
                i.clear(),
                o.svg = null != n.svg_src && a.find("svg"),
                o.svg && (n.idlesvg = f(n.svg_idle, u()),
                punchgs.TweenLite.set(o.svg, n.idlesvg.anim)),
                -1 !== n.hoverframeindex && void 0 !== n.hoverframeindex && !a.hasClass("rs-hover-ready")) {
                    if (a.addClass("rs-hover-ready"),
                    n.hovertimelines = {},
                    n.hoveranim = F(s, n.frames[n.hoverframeindex].to),
                    n.hoveranim = v(n.hoveranim, n.frames[n.hoverframeindex].style),
                    o.svg) {
                        var d = f(n.svg_hover, u());
                        null != n.hoveranim.anim.color && (d.anim.fill = n.hoveranim.anim.color,
                        n.idlesvg.anim.css.fill = o.svg.css("fill")),
                        n.hoversvg = d
                    }
                    a.hover(function(e) {
                        var t = {
                            caption: jQuery(e.currentTarget),
                            opt: r,
                            firstframe: "frame_0",
                            lastframe: "frame_999"
                        }
                          , i = (g(t),
                        t.caption)
                          , a = i.data()
                          , n = a.frames[a.hoverframeindex];
                        a.forcehover = n.force,
                        a.hovertimelines.item = punchgs.TweenLite.to(i, n.speed / 1e3, a.hoveranim.anim),
                        (a.hoverzIndex || a.hoveranim.anim && a.hoveranim.anim.zIndex) && (a.basiczindex = void 0 === a.basiczindex ? a.cssobj.zIndex : a.basiczindex,
                        a.hoverzIndex = void 0 === a.hoverzIndex ? a.hoveranim.anim.zIndex : a.hoverzIndex,
                        a.inhoverinanimation = !0,
                        0 === n.speed && (a.inhoverinanimation = !1),
                        a.hovertimelines.pwhoveranim = punchgs.TweenLite.to(a._pw, n.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: a.hoverzIndex
                        }),
                        a.hovertimelines.pwhoveranim.eventCallback("onComplete", function(e) {
                            e.inhoverinanimation = !1
                        }, [a])),
                        o.svg && (a.hovertimelines.svghoveranim = punchgs.TweenLite.to([o.svg, o.svg.find("path")], n.speed / 1e3, a.hoversvg.anim)),
                        a.hoveredstatus = !0
                    }, function(e) {
                        var t = {
                            caption: jQuery(e.currentTarget),
                            opt: r,
                            firstframe: "frame_0",
                            lastframe: "frame_999"
                        }
                          , i = (g(t),
                        t.caption)
                          , a = i.data()
                          , n = a.frames[a.hoverframeindex];
                        a.hoveredstatus = !1,
                        a.inhoveroutanimation = !0,
                        a.hovertimelines.item.pause(),
                        a.hovertimelines.item = punchgs.TweenLite.to(i, n.speed / 1e3, jQuery.extend(!0, {}, a._gsTransformTo)),
                        0 == n.speed && (a.inhoveroutanimation = !1),
                        a.hovertimelines.item.eventCallback("onComplete", function(e) {
                            e.inhoveroutanimation = !1
                        }, [a]),
                        void 0 !== a.hovertimelines.pwhoveranim && (a.hovertimelines.pwhoveranim = punchgs.TweenLite.to(a._pw, n.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: a.basiczindex
                        })),
                        o.svg && punchgs.TweenLite.to([o.svg, o.svg.find("path")], n.speed / 1e3, a.idlesvg.anim)
                    })
                }
                for (var l = 0; l < n.frames.length; l++)
                    if (l !== n.hoverframeindex) {
                        var m = l === n.inframeindex ? "frame_0" : l === n.outframeindex || "frame_999" === n.frames[l].frame ? "frame_999" : "frame_" + l;
                        t[n.frames[l].framename = m] = {},
                        t[m].timeline = new punchgs.TimelineLite({
                            align: "normal"
                        });
                        var c = n.frames[l].delay
                          , p = (n.triggered_startstatus,
                        void 0 !== c ? 0 <= jQuery.inArray(c, ["slideenter", "bytrigger", "wait"]) ? c : parseInt(c, 0) / 1e3 : "wait");
                        void 0 !== t.firstslide && "frame_0" === m && (i.addLabel("slide_" + t.firstslide + "_pause", 0),
                        i.addPause("slide_" + t.firstslide + "_pause"),
                        i.addLabel("slide_" + t.firstslide, "+=0.005")),
                        void 0 !== t.lastslide && "frame_999" === m && (i.addLabel("slide_" + t.lastslide + "_pause", "+=0.01"),
                        i.addPause("slide_" + t.lastslide + "_pause"),
                        i.addLabel("slide_" + t.lastslide, "+=0.005")),
                        jQuery.isNumeric(p) ? i.addLabel(m, "+=" + p) : (i.addLabel("pause_" + l, "+=0.01"),
                        i.addPause("pause_" + l),
                        i.addLabel(m, "+=0.01")),
                        i = A.createFrameOnTimeline({
                            caption: e.caption,
                            timeline: i,
                            label: m,
                            frameindex: l,
                            opt: r
                        })
                    }
                e.regenerate || (n.current_is_nc_timeline && (n.current_timeline = i),
                n.current_timeline_pause ? i.pause(n.current_timeline_time) : i.time(n.current_timeline_time))
            }
        },
        createFrameOnTimeline: function(e) {
            var t = e.caption
              , i = t.data()
              , a = e.label
              , n = e.timeline
              , r = e.frameindex
              , o = e.opt
              , s = t
              , d = {}
              , l = o.timelines[i._slideid].layers[i._id]
              , m = i.frames.length - 1
              , c = i.frames[r].split
              , p = i.frames[r].split_direction
              , g = i.frames[r].sfx_effect
              , u = !1;
            if (p = void 0 === p ? "forward" : p,
            -1 !== i.hoverframeindex && i.hoverframeindex == m && (m -= 1),
            d.content = new punchgs.TimelineLite({
                align: "normal"
            }),
            d.mask = new punchgs.TimelineLite({
                align: "normal"
            }),
            void 0 === n.vars.id && (n.vars.id = Math.round(1e5 * Math.random())),
            "column" === i._nctype && (n.add(punchgs.TweenLite.set(i._cbgc_man, {
                visibility: "visible"
            }), a),
            n.add(punchgs.TweenLite.set(i._cbgc_auto, {
                visibility: "hidden"
            }), a)),
            i.splittext && 0 === r) {
                void 0 !== i.mySplitText && i.mySplitText.revert();
                var f = 0 < t.find("a").length ? t.find("a") : t;
                i.mySplitText = new punchgs.SplitText(f,{
                    type: "chars,words,lines",
                    charsClass: "tp-splitted tp-charsplit",
                    wordsClass: "tp-splitted tp-wordsplit",
                    linesClass: "tp-splitted tp-linesplit"
                }),
                t.addClass("splitted")
            }
            void 0 !== i.mySplitText && c && c.match(/chars|words|lines/g) && (s = i.mySplitText[c],
            u = !0);
            var h, v, _ = r !== i.outframeindex ? F(B(), i.frames[r].to, void 0, u, s.length - 1) : void 0 !== i.frames[r].to && null === i.frames[r].to.match(/auto:auto/g) ? F(X(), i.frames[r].to, 1 == o.sdir, u, s.length - 1) : F(X(), i.frames[i.inframeindex].from, 0 == o.sdir, u, s.length - 1), b = void 0 !== i.frames[r].from ? F(_, i.frames[i.inframeindex].from, 1 == o.sdir, u, s.length - 1) : void 0, y = i.frames[r].splitdelay;
            if (0 !== r || e.fromcurrentstate ? v = H(i.frames[r].mask) : h = H(i.frames[r].mask),
            _.anim.ease = void 0 === i.frames[r].ease ? punchgs.Power1.easeInOut : i.frames[r].ease,
            void 0 !== b && (b.anim.ease = void 0 === i.frames[r].ease ? punchgs.Power1.easeInOut : i.frames[r].ease,
            b.speed = void 0 === i.frames[r].speed ? b.speed : i.frames[r].speed,
            b.anim.x = b.anim.x * o.bw || Y(b.anim.x, o, i.eow, i.eoh, i.calcy, i.calcx, "horizontal"),
            b.anim.y = b.anim.y * o.bw || Y(b.anim.y, o, i.eow, i.eoh, i.calcy, i.calcx, "vertical")),
            void 0 !== _ && (_.anim.ease = void 0 === i.frames[r].ease ? punchgs.Power1.easeInOut : i.frames[r].ease,
            _.speed = void 0 === i.frames[r].speed ? _.speed : i.frames[r].speed,
            _.anim.x = _.anim.x * o.bw || Y(_.anim.x, o, i.eow, i.eoh, i.calcy, i.calcx, "horizontal"),
            _.anim.y = _.anim.y * o.bw || Y(_.anim.y, o, i.eow, i.eoh, i.calcy, i.calcx, "vertical")),
            t.data("iframes") && n.add(punchgs.TweenLite.set(t.find("iframe"), {
                autoAlpha: 1
            }), a + "+=0.001"),
            r === i.outframeindex && (i.frames[r].to && i.frames[r].to.match(/auto:auto/g),
            _.speed = void 0 === i.frames[r].speed || "inherit" === i.frames[r].speed ? i.frames[i.inframeindex].speed : i.frames[r].speed,
            _.anim.ease = void 0 === i.frames[r].ease || "inherit" === i.frames[r].ease ? i.frames[i.inframeindex].ease : i.frames[r].ease,
            _.anim.overwrite = "auto"),
            0 !== r || e.fromcurrentstate)
                0 === r && e.fromcurrentstate && (_.speed = b.speed);
            else {
                if (s != t) {
                    var w = jQuery.extend({}, _.anim, !0);
                    n.add(punchgs.TweenLite.set(t, _.anim), a),
                    (_ = B()).ease = w.ease,
                    void 0 !== w.filter && (_.anim.filter = w.filter),
                    void 0 !== w["-webkit-filter"] && (_.anim["-webkit-filter"] = w["-webkit-filter"])
                }
                b.anim.visibility = "hidden",
                b.anim.immediateRender = !0,
                _.anim.visibility = "visible"
            }
            e.fromcurrentstate && (_.anim.immediateRender = !0);
            var x = -1;
            if (0 === r && !e.fromcurrentstate && void 0 !== i._bmask && void 0 !== g && 0 <= g.indexOf("block") || r === i.outframeindex && !e.fromcurrentstate && void 0 !== i._bmask && void 0 !== g && 0 <= g.indexOf("block")) {
                var T = 0 === r ? b.speed / 1e3 / 2 : _.speed / 1e3 / 2
                  , k = [{
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "0% 50%"
                }, {
                    scaleY: 1,
                    scaleX: 1,
                    ease: _.anim.ease
                }]
                  , j = {
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "100% 50%",
                    ease: _.anim.ease
                };
                switch (x = void 0 === y ? T : y + T,
                g) {
                case "blocktoleft":
                case "blockfromright":
                    k[0].transformOrigin = "100% 50%",
                    j.transformOrigin = "0% 50%";
                    break;
                case "blockfromtop":
                case "blocktobottom":
                    k = [{
                        scaleX: 1,
                        scaleY: 0,
                        transformOrigin: "50% 0%"
                    }, {
                        scaleX: 1,
                        scaleY: 1,
                        ease: _.anim.ease
                    }],
                    j = {
                        scaleX: 1,
                        scaleY: 0,
                        transformOrigin: "50% 100%",
                        ease: _.anim.ease
                    };
                    break;
                case "blocktotop":
                case "blockfrombottom":
                    k = [{
                        scaleX: 1,
                        scaleY: 0,
                        transformOrigin: "50% 100%"
                    }, {
                        scaleX: 1,
                        scaleY: 1,
                        ease: _.anim.ease
                    }],
                    j = {
                        scaleX: 1,
                        scaleY: 0,
                        transformOrigin: "50% 0%",
                        ease: _.anim.ease
                    }
                }
                k[0].background = i.frames[r].sfxcolor,
                n.add(d.mask.fromTo(i._bmask, T, k[0], k[1], y), a),
                n.add(d.mask.to(i._bmask, T, j, x), a)
            }
            if (u)
                var L = M(s.length - 1, p);
            if (0 !== r || e.fromcurrentstate)
                if ("block" === i._sfx_out && r === i.outframeindex)
                    n.add(d.content.staggerTo(s, .001, {
                        autoAlpha: 0,
                        delay: x
                    }), a),
                    n.add(d.content.staggerTo(s, _.speed / 1e3 / 2 - .001, {
                        x: 0,
                        delay: x
                    }), a + "+=0.001");
                else if (u && void 0 !== L) {
                    R = {
                        to: P(_.anim)
                    };
                    for (var I in s) {
                        z = jQuery.extend({}, _.anim);
                        for (var W in R.to)
                            z[W] = parseInt(R.to[W].values[R.to[W].index], 0),
                            R.to[W].index = R.to[W].index < R.to[W].len ? R.to[W].index + 1 : 0;
                        void 0 !== i.frames[r].color && (z.color = i.frames[r].color),
                        void 0 !== i.frames[r].bgcolor && (z.backgroundColor = i.frames[r].bgcolor),
                        n.add(d.content.to(s[L[I]], _.speed / 1e3, z, y * I), a)
                    }
                } else
                    void 0 !== i.frames[r].color && (_.anim.color = i.frames[r].color),
                    void 0 !== i.frames[r].bgcolor && (_.anim.backgroundColor = i.frames[r].bgcolor),
                    n.add(d.content.staggerTo(s, _.speed / 1e3, _.anim, y), a);
            else if ("block" === i._sfx_in)
                n.add(d.content.staggerFromTo(s, .05, {
                    x: 0,
                    y: 0,
                    autoAlpha: 0
                }, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    delay: x
                }), a);
            else if (u && void 0 !== L) {
                var R = {
                    from: P(b.anim),
                    to: P(_.anim)
                };
                for (var I in s) {
                    var C = jQuery.extend({}, b.anim)
                      , z = jQuery.extend({}, _.anim);
                    for (var W in R.from)
                        C[W] = parseInt(R.from[W].values[R.from[W].index], 0),
                        R.from[W].index = R.from[W].index < R.from[W].len ? R.from[W].index + 1 : 0;
                    z.ease = C.ease,
                    void 0 !== i.frames[r].color && (C.color = i.frames[r].color,
                    z.color = i.cssobj.styleProps.color),
                    void 0 !== i.frames[r].bgcolor && (C.backgroundColor = i.frames[r].bgcolor,
                    z.backgroundColor = i.cssobj.styleProps["background-color"]),
                    n.add(d.content.fromTo(s[L[I]], b.speed / 1e3, C, z, y * I), a)
                }
            } else
                void 0 !== i.frames[r].color && (b.anim.color = i.frames[r].color,
                _.anim.color = i.cssobj.styleProps.color),
                void 0 !== i.frames[r].bgcolor && (b.anim.backgroundColor = i.frames[r].bgcolor,
                _.anim.backgroundColor = i.cssobj.styleProps["background-color"]),
                n.add(d.content.staggerFromTo(s, b.speed / 1e3, b.anim, _.anim, y), a);
            return void 0 === v || !1 === v || 0 === r && e.ignorefirstframe || (v.anim.ease = void 0 === v.anim.ease || "inherit" === v.anim.ease ? i.frames[0].ease : v.anim.ease,
            v.anim.overflow = "hidden",
            v.anim.x = v.anim.x * o.bw || Y(v.anim.x, o, i.eow, i.eoh, i.calcy, i.calcx, "horizontal"),
            v.anim.y = v.anim.y * o.bw || Y(v.anim.y, o, i.eow, i.eoh, i.calcy, i.calcx, "vertical")),
            0 === r && h && !1 !== h && !e.fromcurrentstate || 0 === r && e.ignorefirstframe ? ((v = new Object).anim = new Object,
            v.anim.overwrite = "auto",
            v.anim.ease = _.anim.ease,
            v.anim.x = v.anim.y = 0,
            h && !1 !== h && (h.anim.x = h.anim.x * o.bw || Y(h.anim.x, o, i.eow, i.eoh, i.calcy, i.calcx, "horizontal"),
            h.anim.y = h.anim.y * o.bw || Y(h.anim.y, o, i.eow, i.eoh, i.calcy, i.calcx, "vertical"),
            h.anim.overflow = "hidden")) : 0 === r && n.add(d.mask.set(i._mw, {
                overflow: "visible"
            }), a),
            void 0 !== h && void 0 !== v && !1 !== h && !1 !== v ? n.add(d.mask.fromTo(i._mw, b.speed / 1e3, h.anim, v.anim, y), a) : void 0 !== v && !1 !== v && n.add(d.mask.to(i._mw, _.speed / 1e3, v.anim, y), a),
            n.addLabel(a + "_end"),
            i._gsTransformTo && r === m && i.hoveredstatus && (i.hovertimelines.item = punchgs.TweenLite.to(t, 0, i._gsTransformTo)),
            i._gsTransformTo = !1,
            d.content.eventCallback("onStart", O, [r, l, i._pw, i, n, _.anim, t, e.updateStaticTimeline, o]),
            d.content.eventCallback("onUpdate", Q, [a, i._id, i._pw, i, n, r, jQuery.extend(!0, {}, _.anim), e.updateStaticTimeline, t, o]),
            d.content.eventCallback("onComplete", S, [r, i.frames.length, m, i._pw, i, n, e.updateStaticTimeline, t, o]),
            n
        },
        endMoveCaption: function(e) {
            e.firstframe = "frame_0",
            e.lastframe = "frame_999";
            var t = g(e)
              , i = e.caption.data();
            if (void 0 !== e.frame ? t.timeline.play(e.frame) : (!t.static || e.currentslide >= t.removeonslide || e.currentslide < t.showonslide) && (t.outnow = new punchgs.TimelineLite,
            t.timeline.pause(),
            !0 === i.visibleelement && A.createFrameOnTimeline({
                caption: e.caption,
                timeline: t.outnow,
                label: "outnow",
                frameindex: e.caption.data("outframeindex"),
                opt: e.opt,
                fromcurrentstate: !0
            }).play()),
            e.checkchildrens && t.timeline_obj && t.timeline_obj.dchildren && "none" !== t.timeline_obj.dchildren && 0 < t.timeline_obj.dchildren.length)
                for (var a = 0; a < t.timeline_obj.dchildren.length; a++)
                    A.endMoveCaption({
                        caption: jQuery(t.timeline_obj.dchildren[a]),
                        opt: e.opt
                    })
        },
        playAnimationFrame: function(e) {
            e.firstframe = e.triggerframein,
            e.lastframe = e.triggerframeout;
            var t, i = g(e), a = e.caption.data(), n = 0;
            for (var r in a.frames)
                a.frames[r].framename === e.frame && (t = n),
                n++;
            void 0 !== a.triggeredtimeline && a.triggeredtimeline.pause(),
            a.triggeredtimeline = new punchgs.TimelineLite,
            i.timeline.pause();
            var o = !0 === a.visibleelement;
            a.triggeredtimeline = A.createFrameOnTimeline({
                caption: e.caption,
                timeline: a.triggeredtimeline,
                label: "triggered",
                frameindex: t,
                updateStaticTimeline: !0,
                opt: e.opt,
                ignorefirstframe: !0,
                fromcurrentstate: o
            }).play()
        },
        removeTheCaptions: function(e, i) {
            if ("stop" === A.compare_version(l).check)
                return !1;
            var t = e.data("index")
              , a = new Array;
            i.layers[t] && jQuery.each(i.layers[t], function(e, t) {
                a.push(t)
            });
            var n = A.currentSlideIndex(i);
            a && jQuery.each(a, function(e) {
                var t = jQuery(this);
                "carousel" === i.sliderType && "on" === i.carousel.showLayersAllTime ? (clearTimeout(t.data("videoplaywait")),
                A.stopVideo && A.stopVideo(t, i)) : (r(t),
                clearTimeout(t.data("videoplaywait")),
                A.endMoveCaption({
                    caption: t,
                    opt: i,
                    currentslide: n
                })),
                A.removeMediaFromList && A.removeMediaFromList(t, i),
                i.lastplayedvideos = []
            })
        }
    });
    var O = function(e, t, i, a, n, r, o, s, d) {
        var l = {};
        if (l.layer = o,
        l.eventtype = 0 === e ? "enterstage" : e === a.outframeindex ? "leavestage" : "framestarted",
        l.layertype = o.data("layertype"),
        a.active = !0,
        l.frame_index = e,
        l.layersettings = o.data(),
        d.c.trigger("revolution.layeraction", [l]),
        "on" == a.loopanimation && c(a._lw, d.bw),
        "enterstage" === l.eventtype && (a.animdirection = "in",
        a.visibleelement = !0,
        A.toggleState(a.layertoggledby)),
        "none" !== t.dchildren && void 0 !== t.dchildren && 0 < t.dchildren.length)
            if (0 === e)
                for (var m = 0; m < t.dchildren.length; m++)
                    jQuery(t.dchildren[m]).data("timeline").play(0);
            else if (e === a.outframeindex)
                for (m = 0; m < t.dchildren.length; m++)
                    A.endMoveCaption({
                        caption: jQuery(t.dchildren[m]),
                        opt: d,
                        checkchildrens: !0
                    });
        punchgs.TweenLite.set(i, {
            visibility: "visible"
        }),
        a.current_frame = e,
        a.current_timeline = n,
        a.current_timeline_time = n.time(),
        s && (a.static_layer_timeline_time = a.current_timeline_time),
        a.last_frame_started = e
    }
      , Q = function(e, t, i, a, n, r, o, s, d, l) {
        "column" === a._nctype && b(d, l),
        punchgs.TweenLite.set(i, {
            visibility: "visible"
        }),
        a.current_frame = r,
        a.current_timeline = n,
        a.current_timeline_time = n.time(),
        s && (a.static_layer_timeline_time = a.current_timeline_time),
        void 0 !== a.hoveranim && !1 === a._gsTransformTo && (a._gsTransformTo = o,
        a._gsTransformTo && a._gsTransformTo.startAt && delete a._gsTransformTo.startAt,
        void 0 === a.cssobj.styleProps.css ? a._gsTransformTo = jQuery.extend(!0, {}, a.cssobj.styleProps, a._gsTransformTo) : a._gsTransformTo = jQuery.extend(!0, {}, a.cssobj.styleProps.css, a._gsTransformTo)),
        a.visibleelement = !0
    }
      , S = function(e, t, i, a, n, r, o, s, d) {
        var l = {};
        l.layer = s,
        l.eventtype = 0 === e ? "enteredstage" : e === t - 1 || e === i ? "leftstage" : "frameended",
        l.layertype = s.data("layertype"),
        l.layersettings = s.data(),
        d.c.trigger("revolution.layeraction", [l]),
        "leftstage" !== l.eventtype && A.animcompleted(s, d),
        "leftstage" === l.eventtype && A.stopVideo && A.stopVideo(s, d),
        "column" === n._nctype && (punchgs.TweenLite.to(n._cbgc_man, .01, {
            visibility: "hidden"
        }),
        punchgs.TweenLite.to(n._cbgc_auto, .01, {
            visibility: "visible"
        })),
        "leftstage" === l.eventtype && (n.active = !1,
        punchgs.TweenLite.set(a, {
            visibility: "hidden",
            overwrite: "auto"
        }),
        n.animdirection = "out",
        n.visibleelement = !1,
        A.unToggleState(n.layertoggledby),
        "video" === n._nctype && A.resetVideo && setTimeout(function() {
            A.resetVideo(s, d)
        }, 100)),
        n.current_frame = e,
        n.current_timeline = r,
        n.current_timeline_time = r.time(),
        o && (n.static_layer_timeline_time = n.current_timeline_time)
    }
      , g = function(e) {
        var t = {};
        return e.firstframe = void 0 === e.firstframe ? "frame_0" : e.firstframe,
        e.lastframe = void 0 === e.lastframe ? "frame_999" : e.lastframe,
        t.id = e.caption.data("id") || e.caption.attr("id"),
        t.slideid = e.caption.data("slideid") || e.caption.closest(".tp-revslider-slidesli").data("index"),
        t.timeline_obj = e.opt.timelines[t.slideid].layers[t.id],
        t.timeline = t.timeline_obj.timeline,
        t.ffs = t.timeline.getLabelTime(e.firstframe),
        t.ffe = t.timeline.getLabelTime(e.firstframe + "_end"),
        t.lfs = t.timeline.getLabelTime(e.lastframe),
        t.lfe = t.timeline.getLabelTime(e.lastframe + "_end"),
        t.ct = t.timeline.time(),
        t.static = null != t.timeline_obj.firstslide || null != t.timeline_obj.lastslide,
        t.static && (t.showonslide = t.timeline_obj.firstslide,
        t.removeonslide = t.timeline_obj.lastslide),
        t
    }
      , M = function(e, t) {
        var i = new Array;
        switch (t) {
        case "forward":
        case "random":
            for (var a = 0; a <= e; a++)
                i.push(a);
            "random" === t && (i = function(e) {
                for (var t, i, a = e.length; 0 !== a; )
                    i = Math.floor(Math.random() * a),
                    t = e[a -= 1],
                    e[a] = e[i],
                    e[i] = t;
                return e
            }(i));
            break;
        case "backward":
            for (a = 0; a <= e; a++)
                i.push(e - a);
            break;
        case "middletoedge":
            var n = Math.ceil(e / 2)
              , r = n - 1
              , o = n + 1;
            i.push(n);
            for (a = 0; a < n; a++)
                0 <= r && i.push(r),
                o <= e && i.push(o),
                r--,
                o++;
            break;
        case "edgetomiddle":
            for (r = e,
            o = 0,
            a = 0; a <= Math.floor(e / 2); a++)
                i.push(r),
                o < r && i.push(o),
                r--,
                o++
        }
        return i
    }
      , P = function(e) {
        var t = {};
        for (var i in e)
            "string" == typeof e[i] && 0 <= e[i].indexOf("|") && (void 0 === t[i] && (t[i] = {
                index: 0
            }),
            t[i].values = e[i].replace("[", "").replace("]", "").split("|"),
            t[i].len = t[i].values.length - 1);
        return t
    }
      , B = function(e) {
        return (e = void 0 === e ? new Object : e).anim = void 0 === e.anim ? new Object : e.anim,
        e.anim.x = void 0 === e.anim.x ? 0 : e.anim.x,
        e.anim.y = void 0 === e.anim.y ? 0 : e.anim.y,
        e.anim.z = void 0 === e.anim.z ? 0 : e.anim.z,
        e.anim.rotationX = void 0 === e.anim.rotationX ? 0 : e.anim.rotationX,
        e.anim.rotationY = void 0 === e.anim.rotationY ? 0 : e.anim.rotationY,
        e.anim.rotationZ = void 0 === e.anim.rotationZ ? 0 : e.anim.rotationZ,
        e.anim.scaleX = void 0 === e.anim.scaleX ? 1 : e.anim.scaleX,
        e.anim.scaleY = void 0 === e.anim.scaleY ? 1 : e.anim.scaleY,
        e.anim.skewX = void 0 === e.anim.skewX ? 0 : e.anim.skewX,
        e.anim.skewY = void 0 === e.anim.skewY ? 0 : e.anim.skewY,
        e.anim.opacity = void 0 === e.anim.opacity ? 1 : e.anim.opacity,
        e.anim.transformOrigin = void 0 === e.anim.transformOrigin ? "50% 50%" : e.anim.transformOrigin,
        e.anim.transformPerspective = void 0 === e.anim.transformPerspective ? 600 : e.anim.transformPerspective,
        e.anim.rotation = void 0 === e.anim.rotation ? 0 : e.anim.rotation,
        e.anim.force3D = void 0 === e.anim.force3D ? "auto" : e.anim.force3D,
        e.anim.autoAlpha = void 0 === e.anim.autoAlpha ? 1 : e.anim.autoAlpha,
        e.anim.visibility = void 0 === e.anim.visibility ? "visible" : e.anim.visibility,
        e.anim.overwrite = void 0 === e.anim.overwrite ? "auto" : e.anim.overwrite,
        e.speed = void 0 === e.speed ? .3 : e.speed,
        e.filter = void 0 === e.filter ? "blur(0px) grayscale(0%) brightness(100%)" : e.filter,
        e["-webkit-filter"] = void 0 === e["-webkit-filter"] ? "blur(0px) grayscale(0%) brightness(100%)" : e["-webkit-filter"],
        e
    }
      , u = function() {
        var e = new Object;
        return e.anim = new Object,
        e.anim.stroke = "none",
        e.anim.strokeWidth = 0,
        e.anim.strokeDasharray = "none",
        e.anim.strokeDashoffset = "0",
        e
    }
      , f = function(e, r) {
        var t = e.split(";");
        return t && jQuery.each(t, function(e, t) {
            var i = t.split(":")
              , a = i[0]
              , n = i[1];
            "sc" == a && (r.anim.stroke = n),
            "sw" == a && (r.anim.strokeWidth = n),
            "sda" == a && (r.anim.strokeDasharray = n),
            "sdo" == a && (r.anim.strokeDashoffset = n)
        }),
        r
    }
      , X = function() {
        var e = new Object;
        return e.anim = new Object,
        e.anim.x = 0,
        e.anim.y = 0,
        e.anim.z = 0,
        e
    }
      , h = function() {
        var e = new Object;
        return e.anim = new Object,
        e.speed = .2,
        e
    }
      , m = function(e, t, i, a, n) {
        if (n = void 0 === n ? "" : n,
        jQuery.isNumeric(parseFloat(e)))
            return parseFloat(e) + n;
        if (void 0 === e || "inherit" === e)
            return t + "ext";
        if (1 < e.split("{").length) {
            var r = e.split(",")
              , o = parseFloat(r[1].split("}")[0]);
            if (r = parseFloat(r[0].split("{")[1]),
            void 0 !== i && void 0 !== a) {
                parseInt(Math.random() * (o - r), 0),
                parseInt(r, 0);
                for (var s = 0; s < a; s++)
                    e = e + "|" + (parseInt(Math.random() * (o - r), 0) + parseInt(r, 0)) + n;
                e += "]"
            } else
                e = Math.random() * (o - r) + r
        }
        return e
    }
      , Y = function(e, t, i, a, n, r, o) {
        return !jQuery.isNumeric(e) && e.match(/%]/g) ? (e = e.split("[")[1].split("]")[0],
        "horizontal" == o ? e = (i + 2) * parseInt(e, 0) / 100 : "vertical" == o && (e = (a + 2) * parseInt(e, 0) / 100)) : e = "top" === (e = "left" === (e = "layer_top" === (e = "layer_left" === e ? 0 - i : "layer_right" === e ? i : e) ? 0 - a : "layer_bottom" === e ? a : e) || "stage_left" === e ? 0 - i - r : "right" === e || "stage_right" === e ? t.conw - r : "center" === e || "stage_center" === e ? t.conw / 2 - i / 2 - r : e) || "stage_top" === e ? 0 - a - n : "bottom" === e || "stage_bottom" === e ? t.conh - n : "middle" === e || "stage_middle" === e ? t.conh / 2 - a / 2 - n : e,
        e
    }
      , F = function(e, t, r, o, s) {
        var d = new Object;
        if (d = jQuery.extend(!0, {}, d, e),
        void 0 === t)
            return d;
        var i = t.split(";")
          , l = "";
        return i && jQuery.each(i, function(e, t) {
            var i = t.split(":")
              , a = i[0]
              , n = i[1];
            r && "none" !== r && null != n && 0 < n.length && n.match(/\(R\)/) && ("[" === (n = "right" === (n = n.replace("(R)", "")) ? "left" : "left" === n ? "right" : "top" === n ? "bottom" : "bottom" === n ? "top" : n)[0] && "-" === n[1] ? n = n.replace("[-", "[") : "[" === n[0] && "-" !== n[1] ? n = n.replace("[", "[-") : "-" === n[0] ? n = n.replace("-", "") : n[0].match(/[1-9]/) && (n = "-" + n)),
            null != n && (n = n.replace(/\(R\)/, ""),
            "rotationX" != a && "rX" != a || (d.anim.rotationX = m(n, d.anim.rotationX, o, s, "deg")),
            "rotationY" != a && "rY" != a || (d.anim.rotationY = m(n, d.anim.rotationY, o, s, "deg")),
            "rotationZ" != a && "rZ" != a || (d.anim.rotation = m(n, d.anim.rotationZ, o, s, "deg")),
            "scaleX" != a && "sX" != a || (d.anim.scaleX = m(n, d.anim.scaleX, o, s)),
            "scaleY" != a && "sY" != a || (d.anim.scaleY = m(n, d.anim.scaleY, o, s)),
            "opacity" != a && "o" != a || (d.anim.opacity = m(n, d.anim.opacity, o, s)),
            "fb" == a && (l = "" === l ? "blur(" + parseInt(n, 0) + "px)" : l + " blur(" + parseInt(n, 0) + "px)"),
            "fg" == a && (l = "" === l ? "grayscale(" + parseInt(n, 0) + "%)" : l + " grayscale(" + parseInt(n, 0) + "%)"),
            "fbr" == a && (l = "" === l ? "brightness(" + parseInt(n, 0) + "%)" : l + " brightness(" + parseInt(n, 0) + "%)"),
            0 === d.anim.opacity && (d.anim.autoAlpha = 0),
            d.anim.opacity = 0 == d.anim.opacity ? 1e-4 : d.anim.opacity,
            "skewX" != a && "skX" != a || (d.anim.skewX = m(n, d.anim.skewX, o, s)),
            "skewY" != a && "skY" != a || (d.anim.skewY = m(n, d.anim.skewY, o, s)),
            "x" == a && (d.anim.x = m(n, d.anim.x, o, s)),
            "y" == a && (d.anim.y = m(n, d.anim.y, o, s)),
            "z" == a && (d.anim.z = m(n, d.anim.z, o, s)),
            "transformOrigin" != a && "tO" != a || (d.anim.transformOrigin = n.toString()),
            "transformPerspective" != a && "tP" != a || (d.anim.transformPerspective = parseInt(n, 0)),
            "speed" != a && "s" != a || (d.speed = parseFloat(n)))
        }),
        "" !== l && (d.anim["-webkit-filter"] = l,
        d.anim.filter = l),
        d
    }
      , H = function(e) {
        if (void 0 === e)
            return !1;
        var n = new Object;
        n.anim = new Object;
        var t = e.split(";");
        return t && jQuery.each(t, function(e, t) {
            var i = (t = t.split(":"))[0]
              , a = t[1];
            "x" == i && (n.anim.x = a),
            "y" == i && (n.anim.y = a),
            "s" == i && (n.speed = parseFloat(a)),
            "e" != i && "ease" != i || (n.anim.ease = a)
        }),
        n
    }
      , N = function(i, e, t) {
        if (null == i && (i = 0),
        !jQuery.isArray(i) && "string" === jQuery.type(i) && (1 < i.split(",").length || 1 < i.split("[").length)) {
            var a = (i = (i = i.replace("[", "")).replace("]", "")).match(/'/g) ? i.split("',") : i.split(",");
            i = new Array,
            a && jQuery.each(a, function(e, t) {
                t = (t = t.replace("'", "")).replace("'", ""),
                i.push(t)
            })
        } else {
            var n = i;
            jQuery.isArray(i) || (i = new Array).push(n)
        }
        n = i[i.length - 1];
        if (i.length < e.rle)
            for (var r = 1; r <= e.curWinRange; r++)
                i.push(n);
        return i
    };
    function D(e, t, i, a, n, r, o) {
        var s = e.find(t);
        s.css("borderWidth", r + "px"),
        s.css(i, 0 - r + "px"),
        s.css(a, "0px solid transparent"),
        s.css(n, o)
    }
    var v = function(a, e) {
        if (void 0 === e)
            return a;
        var t = (e = (e = (e = (e = (e = (e = (e = (e = e.replace("c:", "color:")).replace("bg:", "background-color:")).replace("bw:", "border-width:")).replace("bc:", "border-color:")).replace("br:", "borderRadius:")).replace("bs:", "border-style:")).replace("td:", "text-decoration:")).replace("zi:", "zIndex:")).split(";");
        return t && jQuery.each(t, function(e, t) {
            var i = t.split(":");
            0 < i[0].length && ("background-color" === i[0] && 0 <= i[1].indexOf("gradient") && (i[0] = "background"),
            a.anim[i[0]] = i[1])
        }),
        a
    }
      , V = function(e, t) {
        var i, a = new Object, n = !1;
        if ("rekursive" == t && (i = e.closest(".tp-caption")) && e.css("fontSize") === i.css("fontSize") && e.css("fontWeight") === i.css("fontWeight") && e.css("lineHeight") === i.css("lineHeight") && (n = !0),
        a.basealign = e.data("basealign") || "grid",
        a.fontSize = n ? void 0 === i.data("fontsize") ? parseInt(i.css("fontSize"), 0) || 0 : i.data("fontsize") : void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize"),
        a.fontWeight = n ? void 0 === i.data("fontweight") ? parseInt(i.css("fontWeight"), 0) || 0 : i.data("fontweight") : void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight"),
        a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whitespace") || "normal" : i.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace"),
        a.textAlign = n ? void 0 === i.data("textalign") ? i.css("textalign") || "inherit" : i.data("textalign") : void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign"),
        a.zIndex = n ? void 0 === i.data("zIndex") ? i.css("zIndex") || "inherit" : i.data("zIndex") : void 0 === e.data("zIndex") ? e.css("zIndex") || "inherit" : e.data("zIndex"),
        -1 !== jQuery.inArray(e.data("layertype"), ["video", "image", "audio"]) || e.is("img") ? a.lineHeight = 0 : a.lineHeight = n ? void 0 === i.data("lineheight") ? parseInt(i.css("lineHeight"), 0) || 0 : i.data("lineheight") : void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight"),
        a.letterSpacing = n ? void 0 === i.data("letterspacing") ? parseFloat(i.css("letterSpacing"), 0) || 0 : i.data("letterspacing") : void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing")) || 0 : e.data("letterspacing"),
        a.paddingTop = void 0 === e.data("paddingtop") ? parseInt(e.css("paddingTop"), 0) || 0 : e.data("paddingtop"),
        a.paddingBottom = void 0 === e.data("paddingbottom") ? parseInt(e.css("paddingBottom"), 0) || 0 : e.data("paddingbottom"),
        a.paddingLeft = void 0 === e.data("paddingleft") ? parseInt(e.css("paddingLeft"), 0) || 0 : e.data("paddingleft"),
        a.paddingRight = void 0 === e.data("paddingright") ? parseInt(e.css("paddingRight"), 0) || 0 : e.data("paddingright"),
        a.marginTop = void 0 === e.data("margintop") ? parseInt(e.css("marginTop"), 0) || 0 : e.data("margintop"),
        a.marginBottom = void 0 === e.data("marginbottom") ? parseInt(e.css("marginBottom"), 0) || 0 : e.data("marginbottom"),
        a.marginLeft = void 0 === e.data("marginleft") ? parseInt(e.css("marginLeft"), 0) || 0 : e.data("marginleft"),
        a.marginRight = void 0 === e.data("marginright") ? parseInt(e.css("marginRight"), 0) || 0 : e.data("marginright"),
        a.borderTopWidth = void 0 === e.data("bordertopwidth") ? parseInt(e.css("borderTopWidth"), 0) || 0 : e.data("bordertopwidth"),
        a.borderBottomWidth = void 0 === e.data("borderbottomwidth") ? parseInt(e.css("borderBottomWidth"), 0) || 0 : e.data("borderbottomwidth"),
        a.borderLeftWidth = void 0 === e.data("borderleftwidth") ? parseInt(e.css("borderLeftWidth"), 0) || 0 : e.data("borderleftwidth"),
        a.borderRightWidth = void 0 === e.data("borderrightwidth") ? parseInt(e.css("borderRightWidth"), 0) || 0 : e.data("borderrightwidth"),
        "rekursive" != t) {
            if (a.color = void 0 === e.data("color") ? "nopredefinedcolor" : e.data("color"),
            a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whiteSpace") || "nowrap" : i.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace"),
            a.textAlign = n ? void 0 === i.data("textalign") ? i.css("textalign") || "inherit" : i.data("textalign") : void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign"),
            a.fontWeight = n ? void 0 === i.data("fontweight") ? parseInt(i.css("fontWeight"), 0) || 0 : i.data("fontweight") : void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight"),
            a.minWidth = void 0 === e.data("width") ? parseInt(e.css("minWidth"), 0) || 0 : e.data("width"),
            a.minHeight = void 0 === e.data("height") ? parseInt(e.css("minHeight"), 0) || 0 : e.data("height"),
            null != e.data("videowidth") && null != e.data("videoheight")) {
                var r = e.data("videowidth")
                  , o = e.data("videoheight");
                r = "100%" === r ? "none" : r,
                o = "100%" === o ? "none" : o,
                e.data("width", r),
                e.data("height", o)
            }
            a.maxWidth = void 0 === e.data("width") ? parseInt(e.css("maxWidth"), 0) || "none" : e.data("width"),
            a.maxHeight = -1 !== jQuery.inArray(e.data("type"), ["column", "row"]) ? "none" : void 0 === e.data("height") ? parseInt(e.css("maxHeight"), 0) || "none" : e.data("height"),
            a.wan = void 0 === e.data("wan") ? parseInt(e.css("-webkit-transition"), 0) || "none" : e.data("wan"),
            a.moan = void 0 === e.data("moan") ? parseInt(e.css("-moz-animation-transition"), 0) || "none" : e.data("moan"),
            a.man = void 0 === e.data("man") ? parseInt(e.css("-ms-animation-transition"), 0) || "none" : e.data("man"),
            a.ani = void 0 === e.data("ani") ? parseInt(e.css("transition"), 0) || "none" : e.data("ani")
        }
        return a.styleProps = {
            borderTopLeftRadius: e[0].style.borderTopLeftRadius,
            borderTopRightRadius: e[0].style.borderTopRightRadius,
            borderBottomRightRadius: e[0].style.borderBottomRightRadius,
            borderBottomLeftRadius: e[0].style.borderBottomLeftRadius,
            background: e[0].style.background,
            boxShadow: e[0].style.boxShadow,
            "background-color": e[0].style["background-color"],
            "border-top-color": e[0].style["border-top-color"],
            "border-bottom-color": e[0].style["border-bottom-color"],
            "border-right-color": e[0].style["border-right-color"],
            "border-left-color": e[0].style["border-left-color"],
            "border-top-style": e[0].style["border-top-style"],
            "border-bottom-style": e[0].style["border-bottom-style"],
            "border-left-style": e[0].style["border-left-style"],
            "border-right-style": e[0].style["border-right-style"],
            "border-left-width": e[0].style["border-left-width"],
            "border-right-width": e[0].style["border-right-width"],
            "border-bottom-width": e[0].style["border-bottom-width"],
            "border-top-width": e[0].style["border-top-width"],
            color: e[0].style.color,
            "text-decoration": e[0].style["text-decoration"],
            "font-style": e[0].style["font-style"]
        },
        "" !== a.styleProps.background && void 0 !== a.styleProps.background && a.styleProps.background !== a.styleProps["background-color"] || delete a.styleProps.background,
        "" == a.styleProps.color && (a.styleProps.color = e.css("color")),
        a
    }
      , Z = function(a, n) {
        var r = new Object;
        return a && jQuery.each(a, function(e, t) {
            var i = N(t, n)[n.curWinRange];
            r[e] = void 0 !== i ? i : a[e]
        }),
        r
    }
      , _ = function(e, t, i, a) {
        return e = "full" === (e = jQuery.isNumeric(e) ? e * t + "px" : e) ? a : "auto" === e || "none" === e ? i : e
    }
      , E = function(e, t, i, a) {
        var n = e.data();
        n = void 0 === n ? {} : n;
        try {
            if ("BR" == e[0].nodeName || "br" == e[0].tagName)
                return !1
        } catch (e) {}
        n.cssobj = void 0 === n.cssobj ? V(e, i) : n.cssobj;
        var r = Z(n.cssobj, t)
          , o = t.bw
          , s = t.bh;
        "off" === a && (s = o = 1),
        "auto" == r.lineHeight && (r.lineHeight = r.fontSize + 4);
        var d = {
            Top: r.marginTop,
            Bottom: r.marginBottom,
            Left: r.marginLeft,
            Right: r.marginRight
        };
        if ("column" === n._nctype && (punchgs.TweenLite.set(n._column, {
            paddingTop: Math.round(r.marginTop * s) + "px",
            paddingBottom: Math.round(r.marginBottom * s) + "px",
            paddingLeft: Math.round(r.marginLeft * o) + "px",
            paddingRight: Math.round(r.marginRight * o) + "px"
        }),
        d = {
            Top: 0,
            Bottom: 0,
            Left: 0,
            Right: 0
        }),
        !e.hasClass("tp-splitted")) {
            if (e.css("-webkit-transition", "none"),
            e.css("-moz-transition", "none"),
            e.css("-ms-transition", "none"),
            e.css("transition", "none"),
            (void 0 !== e.data("transform_hover") || void 0 !== e.data("style_hover")) && punchgs.TweenLite.set(e, r.styleProps),
            punchgs.TweenLite.set(e, {
                fontSize: Math.round(r.fontSize * o) + "px",
                fontWeight: r.fontWeight,
                letterSpacing: Math.floor(r.letterSpacing * o) + "px",
                paddingTop: Math.round(r.paddingTop * s) + "px",
                paddingBottom: Math.round(r.paddingBottom * s) + "px",
                paddingLeft: Math.round(r.paddingLeft * o) + "px",
                paddingRight: Math.round(r.paddingRight * o) + "px",
                marginTop: d.Top * s + "px",
                marginBottom: d.Bottom * s + "px",
                marginLeft: d.Left * o + "px",
                marginRight: d.Right * o + "px",
                borderTopWidth: Math.round(r.borderTopWidth * s) + "px",
                borderBottomWidth: Math.round(r.borderBottomWidth * s) + "px",
                borderLeftWidth: Math.round(r.borderLeftWidth * o) + "px",
                borderRightWidth: Math.round(r.borderRightWidth * o) + "px",
                lineHeight: Math.round(r.lineHeight * s) + "px",
                textAlign: r.textAlign,
                overwrite: "auto"
            }),
            "rekursive" != i) {
                var l = "slide" == r.basealign ? t.ulw : t.gridwidth[t.curWinRange]
                  , m = "slide" == r.basealign ? t.ulh : t.gridheight[t.curWinRange]
                  , c = _(r.maxWidth, o, "none", l)
                  , p = _(r.maxHeight, s, "none", m)
                  , g = _(r.minWidth, o, "0px", l)
                  , u = _(r.minHeight, s, "0px", m);
                if (g = void 0 === g ? 0 : g,
                u = void 0 === u ? 0 : u,
                c = void 0 === c ? "none" : c,
                p = void 0 === p ? "none" : p,
                n._isgroup && ("#1/1#" === g && (g = c = l),
                "#1/2#" === g && (g = c = l / 2),
                "#1/3#" === g && (g = c = l / 3),
                "#1/4#" === g && (g = c = l / 4),
                "#1/5#" === g && (g = c = l / 5),
                "#1/6#" === g && (g = c = l / 6),
                "#2/3#" === g && (g = c = l / 3 * 2),
                "#3/4#" === g && (g = c = l / 4 * 3),
                "#2/5#" === g && (g = c = l / 5 * 2),
                "#3/5#" === g && (g = c = l / 5 * 3),
                "#4/5#" === g && (g = c = l / 5 * 4),
                "#3/6#" === g && (g = c = l / 6 * 3),
                "#4/6#" === g && (g = c = l / 6 * 4),
                "#5/6#" === g && (g = c = l / 6 * 5)),
                n._ingroup && (n._groupw = g,
                n._grouph = u),
                punchgs.TweenLite.set(e, {
                    maxWidth: c,
                    maxHeight: p,
                    minWidth: g,
                    minHeight: u,
                    whiteSpace: r.whiteSpace,
                    textAlign: r.textAlign,
                    overwrite: "auto"
                }),
                "nopredefinedcolor" != r.color && punchgs.TweenLite.set(e, {
                    color: r.color,
                    overwrite: "auto"
                }),
                null != n.svg_src) {
                    var f = "nopredefinedcolor" != r.color && null != r.color ? r.color : null != r.css && "nopredefinedcolor" != r.css.color && null != r.css.color ? r.css.color : null != r.styleProps.color ? r.styleProps.color : null != r.styleProps.css && null != r.styleProps.css.color && r.styleProps.css.color;
                    0 != f && (punchgs.TweenLite.set(e.find("svg"), {
                        fill: f,
                        overwrite: "auto"
                    }),
                    punchgs.TweenLite.set(e.find("svg path"), {
                        fill: f,
                        overwrite: "auto"
                    }))
                }
            }
            "column" === n._nctype && (void 0 === n._column_bg_set && (n._column_bg_set = e.css("backgroundColor"),
            n._column_bg_image = e.css("backgroundImage"),
            n._column_bg_image_repeat = e.css("backgroundRepeat"),
            n._column_bg_image_position = e.css("backgroundPosition"),
            n._column_bg_image_size = e.css("backgroundSize"),
            n._column_bg_opacity = e.data("bgopacity"),
            n._column_bg_opacity = void 0 === n._column_bg_opacity ? 1 : n._column_bg_opacity,
            punchgs.TweenLite.set(e, {
                backgroundColor: "transparent",
                backgroundImage: ""
            })),
            setTimeout(function() {
                b(e, t)
            }, 1),
            n._cbgc_auto && 0 < n._cbgc_auto.length && (n._cbgc_auto[0].style.backgroundSize = n._column_bg_image_size,
            jQuery.isArray(r.marginLeft) ? punchgs.TweenLite.set(n._cbgc_auto, {
                borderTopWidth: r.marginTop[t.curWinRange] * s + "px",
                borderLeftWidth: r.marginLeft[t.curWinRange] * o + "px",
                borderRightWidth: r.marginRight[t.curWinRange] * o + "px",
                borderBottomWidth: r.marginBottom[t.curWinRange] * s + "px",
                backgroundColor: n._column_bg_set,
                backgroundImage: n._column_bg_image,
                backgroundRepeat: n._column_bg_image_repeat,
                backgroundPosition: n._column_bg_image_position,
                opacity: n._column_bg_opacity
            }) : punchgs.TweenLite.set(n._cbgc_auto, {
                borderTopWidth: r.marginTop * s + "px",
                borderLeftWidth: r.marginLeft * o + "px",
                borderRightWidth: r.marginRight * o + "px",
                borderBottomWidth: r.marginBottom * s + "px",
                backgroundColor: n._column_bg_set,
                backgroundImage: n._column_bg_image,
                backgroundRepeat: n._column_bg_image_repeat,
                backgroundPosition: n._column_bg_image_position,
                opacity: n._column_bg_opacity
            }))),
            setTimeout(function() {
                e.css("-webkit-transition", e.data("wan")),
                e.css("-moz-transition", e.data("moan")),
                e.css("-ms-transition", e.data("man")),
                e.css("transition", e.data("ani"))
            }, 30)
        }
    }
      , b = function(e, t) {
        var i, a, n, r = e.data();
        r._cbgc_man && 0 < r._cbgc_man.length && (jQuery.isArray(r.cssobj.marginLeft) ? (r.cssobj.marginLeft[t.curWinRange] * t.bw,
        i = r.cssobj.marginTop[t.curWinRange] * t.bh,
        a = r.cssobj.marginBottom[t.curWinRange] * t.bh,
        r.cssobj.marginRight[t.curWinRange],
        t.bw) : (r.cssobj.marginLeft * t.bw,
        i = r.cssobj.marginTop * t.bh,
        a = r.cssobj.marginBottom * t.bh,
        r.cssobj.marginRight,
        t.bw),
        n = r._row.hasClass("rev_break_columns") ? "100%" : r._row.height() - (i + a) + "px",
        r._cbgc_man[0].style.backgroundSize = r._column_bg_image_size,
        punchgs.TweenLite.set(r._cbgc_man, {
            width: "100%",
            height: n,
            backgroundColor: r._column_bg_set,
            backgroundImage: r._column_bg_image,
            backgroundRepeat: r._column_bg_image_repeat,
            backgroundPosition: r._column_bg_image_position,
            overwrite: "auto",
            opacity: r._column_bg_opacity
        }))
    }
      , c = function(e, t) {
        var i = e.data();
        if (e.hasClass("rs-pendulum") && null == i._loop_timeline) {
            i._loop_timeline = new punchgs.TimelineLite;
            var a = null == e.data("startdeg") ? -20 : e.data("startdeg")
              , n = null == e.data("enddeg") ? 20 : e.data("enddeg")
              , r = null == e.data("speed") ? 2 : e.data("speed")
              , o = null == e.data("origin") ? "50% 50%" : e.data("origin")
              , s = null == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
            a *= t,
            n *= t,
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                rotation: a,
                transformOrigin: o
            },{
                rotation: n,
                ease: s
            })),
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                rotation: n,
                transformOrigin: o
            },{
                rotation: a,
                ease: s,
                onComplete: function() {
                    i._loop_timeline.restart()
                }
            }))
        }
        if (e.hasClass("rs-rotate") && null == i._loop_timeline) {
            i._loop_timeline = new punchgs.TimelineLite;
            a = null == e.data("startdeg") ? 0 : e.data("startdeg"),
            n = null == e.data("enddeg") ? 360 : e.data("enddeg"),
            r = null == e.data("speed") ? 2 : e.data("speed"),
            o = null == e.data("origin") ? "50% 50%" : e.data("origin"),
            s = null == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
            a *= t,
            n *= t,
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                rotation: a,
                transformOrigin: o
            },{
                rotation: n,
                ease: s,
                onComplete: function() {
                    i._loop_timeline.restart()
                }
            }))
        }
        if (e.hasClass("rs-slideloop") && null == i._loop_timeline) {
            i._loop_timeline = new punchgs.TimelineLite;
            var d = null == e.data("xs") ? 0 : e.data("xs")
              , l = null == e.data("ys") ? 0 : e.data("ys")
              , m = null == e.data("xe") ? 0 : e.data("xe")
              , c = null == e.data("ye") ? 0 : e.data("ye");
            r = null == e.data("speed") ? 2 : e.data("speed"),
            s = null == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
            d *= t,
            l *= t,
            m *= t,
            c *= t,
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                x: d,
                y: l
            },{
                x: m,
                y: c,
                ease: s
            })),
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                x: m,
                y: c
            },{
                x: d,
                y: l,
                onComplete: function() {
                    i._loop_timeline.restart()
                }
            }))
        }
        if (e.hasClass("rs-pulse") && null == i._loop_timeline) {
            i._loop_timeline = new punchgs.TimelineLite;
            var p = null == e.data("zoomstart") ? 0 : e.data("zoomstart")
              , g = null == e.data("zoomend") ? 0 : e.data("zoomend");
            r = null == e.data("speed") ? 2 : e.data("speed"),
            s = null == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                scale: p
            },{
                scale: g,
                ease: s
            })),
            i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{
                force3D: "auto",
                scale: g
            },{
                scale: p,
                onComplete: function() {
                    i._loop_timeline.restart()
                }
            }))
        }
        if (e.hasClass("rs-wave") && null == i._loop_timeline) {
            i._loop_timeline = new punchgs.TimelineLite;
            var u = null == e.data("angle") ? 10 : parseInt(e.data("angle"), 0)
              , f = null == e.data("radius") ? 10 : parseInt(e.data("radius"), 0)
              , h = (r = null == e.data("speed") ? -20 : e.data("speed"),
            (o = null == e.data("origin") ? "50% 50%" : e.data("origin")).split(" "))
              , v = new Object;
            1 <= h.length ? (v.x = h[0],
            v.y = h[1]) : (v.x = "50%",
            v.y = "50%"),
            f *= t;
            var _ = (parseInt(v.x, 0) / 100 - .5) * e.width()
              , b = (parseInt(v.y, 0) / 100 - .5) * e.height()
              , y = {
                a: 0,
                ang: u,
                element: e,
                unit: f,
                xoffset: 0 + _,
                yoffset: -1 * f + b
            }
              , w = parseInt(u, 0)
              , x = new punchgs.TweenLite.fromTo(y,r,{
                a: 0 + w
            },{
                a: 360 + w,
                force3D: "auto",
                ease: punchgs.Linear.easeNone
            });
            x.eventCallback("onUpdate", function(e) {
                var t = e.a * (Math.PI / 180)
                  , i = e.yoffset + e.unit * (1 - Math.sin(t))
                  , a = e.xoffset + Math.cos(t) * e.unit;
                punchgs.TweenLite.to(e.element, .1, {
                    force3D: "auto",
                    x: a,
                    y: i
                })
            }, [y]),
            x.eventCallback("onComplete", function(e) {
                e._loop_timeline.restart()
            }, [i]),
            i._loop_timeline.append(x)
        }
    }
      , r = function(e) {
        e.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
            null != this._loop_timeline && (this._loop_timeline.pause(),
            this._loop_timeline = null)
        })
    }
}(jQuery);
