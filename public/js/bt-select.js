/*!
* Bootstrap-select v1.13.5 (https://developer.snapappointments.com/bootstrap-select)
*
* Copyright 2012-2018 SnapAppointments, LLC
* Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
*/
!function(e, t) {
    void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    !function(G) {
        "use strict";
        "classList"in document.createElement("_") || function(e) {
            if ("Element"in e) {
                var t = "classList"
                  , i = "prototype"
                  , n = e.Element[i]
                  , s = Object
                  , o = function() {
                    var i = G(this);
                    return {
                        add: function(e) {
                            return i.addClass(e)
                        },
                        remove: function(e) {
                            return i.removeClass(e)
                        },
                        toggle: function(e, t) {
                            return i.toggleClass(e, t)
                        },
                        contains: function(e) {
                            return i.hasClass(e)
                        }
                    }
                };
                if (s.defineProperty) {
                    var l = {
                        get: o,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        s.defineProperty(n, t, l)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (l.enumerable = !1,
                        s.defineProperty(n, t, l))
                    }
                } else
                    s[i].__defineGetter__ && n.__defineGetter__(t, o)
            }
        }(window);
        var e, c, t, i = document.createElement("_");
        if (i.classList.toggle("c3", !1),
        i.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
            }
        }
        function S(e) {
            var t, i = [], n = e && e.options;
            if (e.multiple)
                for (var s = 0, o = n.length; s < o; s++)
                    (t = n[s]).selected && i.push(t.value || t.text);
            else
                i = e.value;
            return i
        }
        i = null,
        String.prototype.startsWith || (e = function() {
            try {
                var e = {}
                  , t = Object.defineProperty
                  , i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(),
        c = {}.toString,
        t = function(e) {
            if (null == this)
                throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == c.call(e))
                throw new TypeError;
            var i = t.length
              , n = String(e)
              , s = n.length
              , o = 1 < arguments.length ? arguments[1] : void 0
              , l = o ? Number(o) : 0;
            l != l && (l = 0);
            var r = Math.min(Math.max(l, 0), i);
            if (i < s + r)
                return !1;
            for (var a = -1; ++a < s; )
                if (t.charCodeAt(r + a) != n.charCodeAt(a))
                    return !1;
            return !0
        }
        ,
        e ? e(String.prototype, "startsWith", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = t),
        Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [],
            e)
                i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }
        );
        var s = {
            useDefault: !1,
            _set: G.valHooks.select.set
        };
        G.valHooks.select.set = function(e, t) {
            return t && !s.useDefault && G(e).data("selected", !0),
            s._set.apply(this, arguments)
        }
        ;
        var y = null
          , o = function() {
            try {
                return new Event("change"),
                !0
            } catch (e) {
                return !1
            }
        }();
        function $(e, t, i, n) {
            for (var s = ["content", "subtext", "tokens"], o = !1, l = 0; l < s.length; l++) {
                var r = s[l]
                  , a = e[r];
                if (a && (a = a.toString(),
                "content" === r && (a = a.replace(/<[^>]+>/g, "")),
                n && (a = m(a)),
                a = a.toUpperCase(),
                o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))
                    break
            }
            return o
        }
        function z(e) {
            return parseInt(e, 10) || 0
        }
        G.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (o ? t = new Event(e,{
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1),
            i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e,
            i.fireEvent("on" + e, t)) : this.trigger(e)
        }
        ;
        var l = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss",
            "\u0100": "A",
            "\u0102": "A",
            "\u0104": "A",
            "\u0101": "a",
            "\u0103": "a",
            "\u0105": "a",
            "\u0106": "C",
            "\u0108": "C",
            "\u010a": "C",
            "\u010c": "C",
            "\u0107": "c",
            "\u0109": "c",
            "\u010b": "c",
            "\u010d": "c",
            "\u010e": "D",
            "\u0110": "D",
            "\u010f": "d",
            "\u0111": "d",
            "\u0112": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u0118": "E",
            "\u011a": "E",
            "\u0113": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u0119": "e",
            "\u011b": "e",
            "\u011c": "G",
            "\u011e": "G",
            "\u0120": "G",
            "\u0122": "G",
            "\u011d": "g",
            "\u011f": "g",
            "\u0121": "g",
            "\u0123": "g",
            "\u0124": "H",
            "\u0126": "H",
            "\u0125": "h",
            "\u0127": "h",
            "\u0128": "I",
            "\u012a": "I",
            "\u012c": "I",
            "\u012e": "I",
            "\u0130": "I",
            "\u0129": "i",
            "\u012b": "i",
            "\u012d": "i",
            "\u012f": "i",
            "\u0131": "i",
            "\u0134": "J",
            "\u0135": "j",
            "\u0136": "K",
            "\u0137": "k",
            "\u0138": "k",
            "\u0139": "L",
            "\u013b": "L",
            "\u013d": "L",
            "\u013f": "L",
            "\u0141": "L",
            "\u013a": "l",
            "\u013c": "l",
            "\u013e": "l",
            "\u0140": "l",
            "\u0142": "l",
            "\u0143": "N",
            "\u0145": "N",
            "\u0147": "N",
            "\u014a": "N",
            "\u0144": "n",
            "\u0146": "n",
            "\u0148": "n",
            "\u014b": "n",
            "\u014c": "O",
            "\u014e": "O",
            "\u0150": "O",
            "\u014d": "o",
            "\u014f": "o",
            "\u0151": "o",
            "\u0154": "R",
            "\u0156": "R",
            "\u0158": "R",
            "\u0155": "r",
            "\u0157": "r",
            "\u0159": "r",
            "\u015a": "S",
            "\u015c": "S",
            "\u015e": "S",
            "\u0160": "S",
            "\u015b": "s",
            "\u015d": "s",
            "\u015f": "s",
            "\u0161": "s",
            "\u0162": "T",
            "\u0164": "T",
            "\u0166": "T",
            "\u0163": "t",
            "\u0165": "t",
            "\u0167": "t",
            "\u0168": "U",
            "\u016a": "U",
            "\u016c": "U",
            "\u016e": "U",
            "\u0170": "U",
            "\u0172": "U",
            "\u0169": "u",
            "\u016b": "u",
            "\u016d": "u",
            "\u016f": "u",
            "\u0171": "u",
            "\u0173": "u",
            "\u0174": "W",
            "\u0175": "w",
            "\u0176": "Y",
            "\u0177": "y",
            "\u0178": "Y",
            "\u0179": "Z",
            "\u017b": "Z",
            "\u017d": "Z",
            "\u017a": "z",
            "\u017c": "z",
            "\u017e": "z",
            "\u0132": "IJ",
            "\u0133": "ij",
            "\u0152": "Oe",
            "\u0153": "oe",
            "\u0149": "'n",
            "\u017f": "s"
        }
          , r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
          , a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");
        function d(e) {
            return l[e]
        }
        function m(e) {
            return (e = e.toString()) && e.replace(r, d).replace(a, "")
        }
        var h = function(t) {
            var i = function(e) {
                return t[e]
            }
              , e = "(?:" + Object.keys(t).join("|") + ")"
              , n = RegExp(e)
              , s = RegExp(e, "g");
            return function(e) {
                return e = null == e ? "" : "" + e,
                n.test(e) ? e.replace(s, i) : e
            }
        }
          , q = h({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        })
          , v = h({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#x60;": "`"
        })
          , E = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
        }
          , C = 27
          , O = 13
          , T = 32
          , H = 9
          , D = 38
          , L = 40
          , K = {
            success: !1,
            major: "3"
        };
        try {
            K.full = (G.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."),
            K.major = K.full[0],
            K.success = !0
        } catch (e) {
            console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)
        }
        var p = 0
          , A = ".bs.select"
          , Y = {
            DISABLED: "disabled",
            DIVIDER: "divider",
            SHOW: "open",
            DROPUP: "dropup",
            MENU: "dropdown-menu",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            BUTTONCLASS: "btn-default",
            POPOVERHEADER: "popover-title"
        }
          , N = {
            MENU: "." + Y.MENU
        };
        "4" === K.major && (Y.DIVIDER = "dropdown-divider",
        Y.SHOW = "show",
        Y.BUTTONCLASS = "btn-light",
        Y.POPOVERHEADER = "popover-header");
        var P = new RegExp(D + "|" + L)
          , R = new RegExp("^" + H + "$|" + C)
          , u = function(e, t) {
            var i = this;
            s.useDefault || (G.valHooks.select.set = s._set,
            s.useDefault = !0),
            this.$element = G(e),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.options = t,
            this.selectpicker = {
                main: {
                    map: {
                        newIndex: {},
                        originalIndex: {}
                    }
                },
                current: {
                    map: {}
                },
                search: {
                    map: {}
                },
                view: {},
                keydown: {
                    keyHistory: "",
                    resetKeyHistory: {
                        start: function() {
                            return setTimeout(function() {
                                i.selectpicker.keydown.keyHistory = ""
                            }, 800)
                        }
                    }
                }
            },
            null === this.options.title && (this.options.title = this.$element.attr("title"));
            var n = this.options.windowPadding;
            "number" == typeof n && (this.options.windowPadding = [n, n, n, n]),
            this.val = u.prototype.val,
            this.render = u.prototype.render,
            this.refresh = u.prototype.refresh,
            this.setStyle = u.prototype.setStyle,
            this.selectAll = u.prototype.selectAll,
            this.deselectAll = u.prototype.deselectAll,
            this.destroy = u.prototype.destroy,
            this.remove = u.prototype.remove,
            this.show = u.prototype.show,
            this.hide = u.prototype.hide,
            this.init()
        };
        function f(e) {
            var o, l = arguments, r = e;
            if ([].shift.apply(l),
            !K.success) {
                try {
                    K.full = (G.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (e) {
                    K.full = u.BootstrapVersion.split(" ")[0].split(".")
                }
                K.major = K.full[0],
                K.success = !0,
                "4" === K.major && (Y.DIVIDER = "dropdown-divider",
                Y.SHOW = "show",
                Y.BUTTONCLASS = "btn-light",
                u.DEFAULTS.style = Y.BUTTONCLASS = "btn-light",
                Y.POPOVERHEADER = "popover-header")
            }
            var t = this.each(function() {
                var e = G(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker")
                      , i = "object" == typeof r && r;
                    if (t) {
                        if (i)
                            for (var n in i)
                                i.hasOwnProperty(n) && (t.options[n] = i[n])
                    } else {
                        var s = G.extend({}, u.DEFAULTS, G.fn.selectpicker.defaults || {}, e.data(), i);
                        s.template = G.extend({}, u.DEFAULTS.template, G.fn.selectpicker.defaults ? G.fn.selectpicker.defaults.template : {}, e.data().template, i.template),
                        e.data("selectpicker", t = new u(this,s))
                    }
                    "string" == typeof r && (o = t[r]instanceof Function ? t[r].apply(t, l) : t.options[r])
                }
            });
            return void 0 !== o ? o : t
        }
        u.VERSION = "1.13.5",
        u.BootstrapVersion = K.major,
        u.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: Y.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1
        },
        "4" === K.major && (u.DEFAULTS.style = "btn-light",
        u.DEFAULTS.iconBase = "",
        u.DEFAULTS.tickIcon = "bs-ok-default"),
        u.prototype = {
            constructor: u,
            init: function() {
                var i = this
                  , e = this.$element.attr("id");
                this.selectId = p++,
                this.$element.addClass("bs-select-hidden"),
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                this.$newElement = this.createDropdown(),
                this.createLi(),
                this.$element.after(this.$newElement).prependTo(this.$newElement),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(N.MENU),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                this.$element.removeClass("bs-select-hidden"),
                !0 === this.options.dropdownAlignRight && this.$menu.addClass(Y.MENURIGHT),
                void 0 !== e && this.$button.attr("data-id", e),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch && this.liveSearchListener(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.options.container ? this.selectPosition() : this.$element.on("hide" + A, function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0]
                          , t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild),
                        e.scrollTop = 0
                    }
                }),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !1),
                        i.$element.trigger("hide" + A, e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden" + A, e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !0),
                        i.$element.trigger("show" + A, e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown" + A, e)
                    }
                }),
                i.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    i.$button.addClass("bs-invalid"),
                    i.$element.on("shown" + A + ".invalid", function() {
                        i.$element.val(i.$element.val()).off("shown" + A + ".invalid")
                    }).on("rendered" + A, function() {
                        this.validity.valid && i.$button.removeClass("bs-invalid"),
                        i.$element.off("rendered" + A)
                    }),
                    i.$button.on("blur" + A, function() {
                        i.$element.focus().blur(),
                        i.$button.off("blur" + A)
                    })
                }),
                setTimeout(function() {
                    i.$element.trigger("loaded" + A)
                })
            },
            createDropdown: function() {
                var e, t = this.multiple || this.options.showTick ? " show-tick" : "", i = this.autofocus ? " autofocus" : "", n = "", s = "", o = "", l = "";
                return this.options.header && (n = '<div class="' + Y.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"),
                this.options.liveSearch && (s = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + q(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>'),
                this.multiple && this.options.actionsBox && (o = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + Y.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + Y.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"),
                this.multiple && this.options.doneButton && (l = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + Y.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"),
                e = '<div class="dropdown bootstrap-select' + t + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + i + ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === K.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + Y.MENU + " " + ("4" === K.major ? "" : Y.SHOW) + '" role="combobox">' + n + s + o + '<div class="inner ' + Y.SHOW + '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' + Y.MENU + " inner " + ("4" === K.major ? Y.SHOW : "") + '"></ul></div>' + l + "</div></div>",
                G(e)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e]
                      , i = !0;
                    "divider" === t.type ? (i = !1,
                    t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1,
                    t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight,
                    t.disabled && (i = !1),
                    this.selectpicker.view.canHighlight.push(i),
                    t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(C, e) {
                e = e || 0;
                var O = this;
                this.selectpicker.current = C ? this.selectpicker.search : this.selectpicker.main;
                var z, T, H = [];
                function i(e, t) {
                    var i, n, s, o, l, r, a, c, d, h, p = O.selectpicker.current.elements.length, u = [], f = !0, m = O.isVirtual();
                    O.selectpicker.view.scrollTop = e,
                    !0 === m && O.sizeInfo.hasScrollBar && O.$menu[0].offsetWidth > O.sizeInfo.totalMenuWidth && (O.sizeInfo.menuWidth = O.$menu[0].offsetWidth,
                    O.sizeInfo.totalMenuWidth = O.sizeInfo.menuWidth + O.sizeInfo.scrollBarWidth,
                    O.$menu.css("min-width", O.sizeInfo.menuWidth)),
                    i = Math.ceil(O.sizeInfo.menuInnerHeight / O.sizeInfo.liHeight * 1.5),
                    n = Math.round(p / i) || 1;
                    for (var v = 0; v < n; v++) {
                        var g = (v + 1) * i;
                        if (v === n - 1 && (g = p),
                        u[v] = [v * i + (v ? 1 : 0), g],
                        !p)
                            break;
                        void 0 === l && e <= O.selectpicker.current.data[g - 1].position - O.sizeInfo.menuInnerHeight && (l = v)
                    }
                    if (void 0 === l && (l = 0),
                    r = [O.selectpicker.view.position0, O.selectpicker.view.position1],
                    s = Math.max(0, l - 1),
                    o = Math.min(n - 1, l + 1),
                    O.selectpicker.view.position0 = Math.max(0, u[s][0]) || 0,
                    O.selectpicker.view.position1 = Math.min(p, u[o][1]) || 0,
                    a = r[0] !== O.selectpicker.view.position0 || r[1] !== O.selectpicker.view.position1,
                    void 0 !== O.activeIndex && (T = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.prevActiveIndex]],
                    H = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.activeIndex]],
                    z = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.selectedIndex]],
                    t && (O.activeIndex !== O.selectedIndex && (H.classList.remove("active"),
                    H.firstChild && H.firstChild.classList.remove("active")),
                    O.activeIndex = void 0),
                    O.activeIndex && O.activeIndex !== O.selectedIndex && z && z.length && (z.classList.remove("active"),
                    z.firstChild && z.firstChild.classList.remove("active"))),
                    void 0 !== O.prevActiveIndex && O.prevActiveIndex !== O.activeIndex && O.prevActiveIndex !== O.selectedIndex && T && T.length && (T.classList.remove("active"),
                    T.firstChild && T.firstChild.classList.remove("active")),
                    (t || a) && (c = O.selectpicker.view.visibleElements ? O.selectpicker.view.visibleElements.slice() : [],
                    O.selectpicker.view.visibleElements = O.selectpicker.current.elements.slice(O.selectpicker.view.position0, O.selectpicker.view.position1),
                    O.setOptionStatus(),
                    (C || !1 === m && t) && (d = c,
                    h = O.selectpicker.view.visibleElements,
                    f = !(d.length === h.length && d.every(function(e, t) {
                        return e === h[t]
                    }))),
                    (t || !0 === m) && f)) {
                        var b, w, I = O.$menuInner[0], x = document.createDocumentFragment(), k = I.firstChild.cloneNode(!1), $ = !0 === m ? O.selectpicker.view.visibleElements : O.selectpicker.current.elements;
                        I.replaceChild(k, I.firstChild);
                        v = 0;
                        for (var E = $.length; v < E; v++)
                            x.appendChild($[v]);
                        !0 === m && (b = 0 === O.selectpicker.view.position0 ? 0 : O.selectpicker.current.data[O.selectpicker.view.position0 - 1].position,
                        w = O.selectpicker.view.position1 > p - 1 ? 0 : O.selectpicker.current.data[p - 1].position - O.selectpicker.current.data[O.selectpicker.view.position1 - 1].position,
                        I.firstChild.style.marginTop = b + "px",
                        I.firstChild.style.marginBottom = w + "px"),
                        I.firstChild.appendChild(x)
                    }
                    if (O.prevActiveIndex = O.activeIndex,
                    O.options.liveSearch) {
                        if (C && t) {
                            var S, y = 0;
                            O.selectpicker.view.canHighlight[y] || (y = 1 + O.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                            S = O.selectpicker.view.visibleElements[y],
                            O.selectpicker.view.currentActive && (O.selectpicker.view.currentActive.classList.remove("active"),
                            O.selectpicker.view.currentActive.firstChild && O.selectpicker.view.currentActive.firstChild.classList.remove("active")),
                            S && (S.classList.add("active"),
                            S.firstChild && S.firstChild.classList.add("active")),
                            O.activeIndex = O.selectpicker.current.map.originalIndex[y]
                        }
                    } else
                        O.$menuInner.focus()
                }
                this.setPositionData(),
                i(e, !0),
                this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, t) {
                    O.noScroll || i(this.scrollTop, t),
                    O.noScroll = !1
                }),
                G(window).off("resize" + A + "." + this.selectId + ".createView").on("resize" + A + "." + this.selectId + ".createView", function() {
                    O.$newElement.hasClass(Y.SHOW) && i(O.$menuInner[0].scrollTop)
                })
            },
            createLi: function() {
                var T, H = this, D = [], L = {}, A = 0, N = 0, P = [], R = 0, W = 0, B = -1;
                this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option"));
                var e, M = {
                    span: document.createElement("span"),
                    subtext: document.createElement("small"),
                    a: document.createElement("a"),
                    li: document.createElement("li"),
                    whitespace: document.createTextNode("\xa0")
                }, U = document.createDocumentFragment();
                (H.options.showTick || H.multiple) && ((e = M.span.cloneNode(!1)).className = H.options.iconBase + " " + H.options.tickIcon + " check-mark",
                M.a.appendChild(e)),
                M.a.setAttribute("role", "option"),
                M.subtext.className = "text-muted",
                M.text = M.span.cloneNode(!1),
                M.text.className = "text";
                var V = function(e, t, i) {
                    var n = M.li.cloneNode(!1);
                    return e && (1 === e.nodeType || 11 === e.nodeType ? n.appendChild(e) : n.innerHTML = e),
                    void 0 !== t && "" !== t && (n.className = t),
                    null != i && n.classList.add("optgroup-" + i),
                    n
                }
                  , j = function(e, t, i) {
                    var n = M.a.cloneNode(!0);
                    return e && (11 === e.nodeType ? n.appendChild(e) : n.insertAdjacentHTML("beforeend", e)),
                    void 0 !== t && "" !== t && (n.className = t),
                    "4" === K.major && n.classList.add("dropdown-item"),
                    i && n.setAttribute("style", i),
                    n
                }
                  , _ = function(e) {
                    var t, i, n = M.text.cloneNode(!1);
                    if (e.optionContent)
                        n.innerHTML = e.optionContent;
                    else {
                        if (n.textContent = e.text,
                        e.optionIcon) {
                            var s = M.whitespace.cloneNode(!1);
                            (i = M.span.cloneNode(!1)).className = H.options.iconBase + " " + e.optionIcon,
                            U.appendChild(i),
                            U.appendChild(s)
                        }
                        e.optionSubtext && ((t = M.subtext.cloneNode(!1)).innerHTML = e.optionSubtext,
                        n.appendChild(t))
                    }
                    return U.appendChild(n),
                    U
                };
                if (this.options.title && !this.multiple) {
                    B--;
                    var t = this.$element[0]
                      , i = !1
                      , n = !this.selectpicker.view.titleOption.parentNode;
                    if (n)
                        this.selectpicker.view.titleOption.className = "bs-title-option",
                        this.selectpicker.view.titleOption.value = "",
                        i = void 0 === G(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected");
                    (n || 0 !== this.selectpicker.view.titleOption.index) && t.insertBefore(this.selectpicker.view.titleOption, t.firstChild),
                    i && (t.selectedIndex = 0)
                }
                var F = this.$element.find("option");
                F.each(function(e) {
                    var t = G(this);
                    if (B++,
                    !t.hasClass("bs-title-option")) {
                        var i, n, s, o, l = t.data(), r = this.className || "", a = q(this.style.cssText), c = l.content, d = this.textContent, h = l.tokens, p = l.subtext, u = l.icon, f = t.parent(), m = f[0], v = "OPTGROUP" === m.tagName, g = v && m.disabled, b = this.disabled || g, w = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName, I = f.data();
                        if (!0 === l.hidden || this.hidden || H.options.hideDisabled && (b || g))
                            return i = l.prevHiddenIndex,
                            t.next().data("prevHiddenIndex", void 0 !== i ? i : e),
                            B--,
                            L[e] = {
                                type: "hidden",
                                data: l
                            },
                            w || void 0 !== i && (o = F[i].previousElementSibling) && "OPTGROUP" === o.tagName && !o.disabled && (w = !0),
                            void (w && "divider" !== P[P.length - 1].type && (B++,
                            D.push(V(!1, Y.DIVIDER, R + "div")),
                            P.push({
                                type: "divider",
                                optID: R
                            })));
                        if (v && !0 !== l.divider) {
                            if (H.options.hideDisabled && b) {
                                if (void 0 === I.allOptionsDisabled) {
                                    var x = f.children();
                                    f.data("allOptionsDisabled", x.filter(":disabled").length === x.length)
                                }
                                if (f.data("allOptionsDisabled"))
                                    return void B--
                            }
                            var k = " " + m.className || ""
                              , $ = this.previousElementSibling;
                            if (void 0 !== (i = l.prevHiddenIndex) && ($ = F[i].previousElementSibling),
                            !$) {
                                R += 1;
                                var E = m.label
                                  , S = q(E)
                                  , y = I.subtext
                                  , C = I.icon;
                                0 !== e && 0 < D.length && (B++,
                                D.push(V(!1, Y.DIVIDER, R + "div")),
                                P.push({
                                    type: "divider",
                                    optID: R
                                })),
                                B++,
                                s = function(e) {
                                    var t, i, n = M.text.cloneNode(!1);
                                    if (n.innerHTML = e.labelEscaped,
                                    e.labelIcon) {
                                        var s = M.whitespace.cloneNode(!1);
                                        (i = M.span.cloneNode(!1)).className = H.options.iconBase + " " + e.labelIcon,
                                        U.appendChild(i),
                                        U.appendChild(s)
                                    }
                                    return e.labelSubtext && ((t = M.subtext.cloneNode(!1)).textContent = e.labelSubtext,
                                    n.appendChild(t)),
                                    U.appendChild(n),
                                    U
                                }({
                                    labelEscaped: S,
                                    labelSubtext: y,
                                    labelIcon: C
                                }),
                                D.push(V(s, "dropdown-header" + k, R)),
                                P.push({
                                    content: S,
                                    subtext: y,
                                    type: "optgroup-label",
                                    optID: R
                                }),
                                W = B - 1
                            }
                            n = _({
                                text: d,
                                optionContent: c,
                                optionSubtext: p,
                                optionIcon: u
                            }),
                            D.push(V(j(n, "opt " + r + k, a), "", R)),
                            P.push({
                                content: c || d,
                                subtext: p,
                                tokens: h,
                                type: "option",
                                optID: R,
                                headerIndex: W,
                                lastIndex: W + m.childElementCount,
                                originalIndex: e,
                                data: l
                            }),
                            A++
                        } else
                            !0 === l.divider ? (D.push(V(!1, Y.DIVIDER)),
                            P.push({
                                type: "divider",
                                originalIndex: e,
                                data: l
                            })) : (!w && H.options.hideDisabled && void 0 !== (i = l.prevHiddenIndex) && (o = F[i].previousElementSibling) && "OPTGROUP" === o.tagName && !o.disabled && (w = !0),
                            w && "divider" !== P[P.length - 1].type && (B++,
                            D.push(V(!1, Y.DIVIDER, R + "div")),
                            P.push({
                                type: "divider",
                                optID: R
                            })),
                            n = _({
                                text: d,
                                optionContent: c,
                                optionSubtext: p,
                                optionIcon: u
                            }),
                            D.push(V(j(n, r, a))),
                            P.push({
                                content: c || d,
                                subtext: p,
                                tokens: h,
                                type: "option",
                                originalIndex: e,
                                data: l
                            }),
                            A++);
                        H.selectpicker.main.map.newIndex[e] = B,
                        H.selectpicker.main.map.originalIndex[B] = e;
                        var O = P[P.length - 1];
                        O.disabled = b;
                        var z = 0;
                        O.content && (z += O.content.length),
                        O.subtext && (z += O.subtext.length),
                        u && (z += 1),
                        N < z && (N = z,
                        T = D[D.length - 1])
                    }
                }),
                this.selectpicker.main.elements = D,
                this.selectpicker.main.data = P,
                this.selectpicker.main.hidden = L,
                this.selectpicker.current = this.selectpicker.main,
                this.selectpicker.view.widestOption = T,
                this.selectpicker.view.availableOptionsCount = A
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                var e = this
                  , t = this.$element.find("option")
                  , i = []
                  , n = [];
                this.togglePlaceholder(),
                this.tabIndex();
                for (var s = 0, o = t.length; s < o; s++) {
                    var l = e.selectpicker.main.map.newIndex[s]
                      , r = t[s]
                      , a = e.selectpicker.main.data[l] || e.selectpicker.main.hidden[s];
                    if (r && r.selected && a && (i.push(r),
                    n.length < 100 && "count" !== e.options.selectedTextFormat || 1 === i.length)) {
                        var c, d, h = a.data, p = h.icon && e.options.showIcon ? '<i class="' + e.options.iconBase + " " + h.icon + '"></i> ' : "";
                        c = e.options.showSubtext && h.subtext && !e.multiple ? ' <small class="text-muted">' + h.subtext + "</small>" : "",
                        d = r.title ? r.title : h.content && e.options.showContent ? h.content.toString() : p + r.innerHTML.trim() + c,
                        n.push(d)
                    }
                }
                var u = this.multiple ? n.join(this.options.multipleSeparator) : n[0];
                if (50 < i.length && (u += "..."),
                this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count")) {
                    var f = this.options.selectedTextFormat.split(">");
                    if (1 < f.length && i.length > f[1] || 1 === f.length && 2 <= i.length) {
                        var m = this.selectpicker.view.availableOptionsCount;
                        u = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(i.length, m) : this.options.countSelectedText).replace("{0}", i.length.toString()).replace("{1}", m.toString())
                    }
                }
                null == this.options.title && (this.options.title = this.$element.attr("title")),
                "static" == this.options.selectedTextFormat && (u = this.options.title),
                u || (u = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText),
                this.$button[0].title = v(u.replace(/<[^>]*>?/g, "").trim()),
                this.$button.find(".filter-option-inner-inner")[0].innerHTML = u,
                this.$element.trigger("rendered" + A)
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = e || this.options.style;
                "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style),
                this.$button.addClass(i))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var t = document.createElement("div")
                      , i = document.createElement("div")
                      , n = document.createElement("div")
                      , s = document.createElement("ul")
                      , o = document.createElement("li")
                      , l = document.createElement("li")
                      , r = document.createElement("li")
                      , a = document.createElement("a")
                      , c = document.createElement("span")
                      , d = this.options.header && 0 < this.$menu.find("." + Y.POPOVERHEADER).length ? this.$menu.find("." + Y.POPOVERHEADER)[0].cloneNode(!0) : null
                      , h = this.options.liveSearch ? document.createElement("div") : null
                      , p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null
                      , u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null
                      , f = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth,
                    c.className = "text",
                    a.className = "dropdown-item " + (f ? f.className : ""),
                    t.className = this.$menu[0].parentNode.className + " " + Y.SHOW,
                    t.style.width = this.sizeInfo.selectWidth + "px",
                    "auto" === this.options.width && (i.style.minWidth = 0),
                    i.className = Y.MENU + " " + Y.SHOW,
                    n.className = "inner " + Y.SHOW,
                    s.className = Y.MENU + " inner " + ("4" === K.major ? Y.SHOW : ""),
                    o.className = Y.DIVIDER,
                    l.className = "dropdown-header",
                    c.appendChild(document.createTextNode("\u200b")),
                    a.appendChild(c),
                    r.appendChild(a),
                    l.appendChild(c.cloneNode(!0)),
                    this.selectpicker.view.widestOption && s.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),
                    s.appendChild(r),
                    s.appendChild(o),
                    s.appendChild(l),
                    d && i.appendChild(d),
                    h) {
                        var m = document.createElement("input");
                        h.className = "bs-searchbox",
                        m.className = "form-control",
                        h.appendChild(m),
                        i.appendChild(h)
                    }
                    p && i.appendChild(p),
                    n.appendChild(s),
                    i.appendChild(n),
                    u && i.appendChild(u),
                    t.appendChild(i),
                    document.body.appendChild(t);
                    var v, g = a.offsetHeight, b = l ? l.offsetHeight : 0, w = d ? d.offsetHeight : 0, I = h ? h.offsetHeight : 0, x = p ? p.offsetHeight : 0, k = u ? u.offsetHeight : 0, $ = G(o).outerHeight(!0), E = !!window.getComputedStyle && window.getComputedStyle(i), S = i.offsetWidth, y = E ? null : G(i), C = {
                        vert: z(E ? E.paddingTop : y.css("paddingTop")) + z(E ? E.paddingBottom : y.css("paddingBottom")) + z(E ? E.borderTopWidth : y.css("borderTopWidth")) + z(E ? E.borderBottomWidth : y.css("borderBottomWidth")),
                        horiz: z(E ? E.paddingLeft : y.css("paddingLeft")) + z(E ? E.paddingRight : y.css("paddingRight")) + z(E ? E.borderLeftWidth : y.css("borderLeftWidth")) + z(E ? E.borderRightWidth : y.css("borderRightWidth"))
                    }, O = {
                        vert: C.vert + z(E ? E.marginTop : y.css("marginTop")) + z(E ? E.marginBottom : y.css("marginBottom")) + 2,
                        horiz: C.horiz + z(E ? E.marginLeft : y.css("marginLeft")) + z(E ? E.marginRight : y.css("marginRight")) + 2
                    };
                    n.style.overflowY = "scroll",
                    v = i.offsetWidth - S,
                    document.body.removeChild(t),
                    this.sizeInfo.liHeight = g,
                    this.sizeInfo.dropdownHeaderHeight = b,
                    this.sizeInfo.headerHeight = w,
                    this.sizeInfo.searchHeight = I,
                    this.sizeInfo.actionsHeight = x,
                    this.sizeInfo.doneButtonHeight = k,
                    this.sizeInfo.dividerHeight = $,
                    this.sizeInfo.menuPadding = C,
                    this.sizeInfo.menuExtras = O,
                    this.sizeInfo.menuWidth = S,
                    this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth,
                    this.sizeInfo.scrollBarWidth = v,
                    this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight,
                    this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = G(window), i = this.$newElement.offset(), n = G(this.options.container);
                this.options.container && !n.is("body") ? ((e = n.offset()).top += parseInt(n.css("borderTopWidth")),
                e.left += parseInt(n.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var s = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(),
                this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - s[2],
                this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(),
                this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - s[1],
                this.sizeInfo.selectOffsetTop -= s[0],
                this.sizeInfo.selectOffsetLeft -= s[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, n, s, o, l, r, a = this.sizeInfo.selectWidth, c = this.sizeInfo.liHeight, d = this.sizeInfo.headerHeight, h = this.sizeInfo.searchHeight, p = this.sizeInfo.actionsHeight, u = this.sizeInfo.doneButtonHeight, f = this.sizeInfo.dividerHeight, m = this.sizeInfo.menuPadding, v = 0;
                if (this.options.dropupAuto && (r = c * this.selectpicker.current.elements.length + m.vert,
                this.$newElement.toggleClass(Y.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)),
                "auto" === this.options.size)
                    s = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0,
                    i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert,
                    n = s + d + h + p + u,
                    l = Math.max(s - m.vert, 0),
                    this.$newElement.hasClass(Y.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert),
                    t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++)
                        "divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = c * this.options.size + v * f + m.vert) - m.vert,
                    o = i + d + h + p + u,
                    n = l = ""
                }
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(Y.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a),
                this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": n + "px"
                }),
                this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": l + "px"
                }),
                this.sizeInfo.menuInnerHeight = t,
                this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0,
                this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth,
                this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)),
                this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e),
                this.options.header && this.$menu.css("padding-top", 0),
                !1 !== this.options.size) {
                    var t, i = this, n = G(window), s = 0;
                    this.setMenuSize(),
                    "auto" === this.options.size ? (this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                        return i.setMenuSize()
                    }),
                    n.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize").on("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize", function() {
                        return i.setMenuSize()
                    })) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && (this.$searchbox.off("input.setMenuSize propertychange.setMenuSize"),
                    n.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize")),
                    e ? s = this.$menuInner[0].scrollTop : i.multiple || "number" == typeof (t = i.selectpicker.main.map.newIndex[i.$element[0].selectedIndex]) && !1 !== i.options.size && (s = (s = i.sizeInfo.liHeight * t) - i.sizeInfo.menuInnerHeight / 2 + i.sizeInfo.liHeight / 2),
                    i.createView(!1, s)
                }
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"),
                    i.liHeight(),
                    i.setMenuSize();
                    var e = i.$newElement.clone().appendTo("body")
                      , t = e.css("width", "auto").children("button").outerWidth();
                    e.remove(),
                    i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t),
                    i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "")),
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = G('<div class="bs-container" />');
                var n, s, o, l = this, r = G(this.options.container), e = function(e) {
                    var t = {}
                      , i = l.options.display || !!G.fn.dropdown.Constructor.Default && G.fn.dropdown.Constructor.Default.display;
                    l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(Y.DROPUP, e.hasClass(Y.DROPUP)),
                    n = e.offset(),
                    r.is("body") ? s = {
                        top: 0,
                        left: 0
                    } : ((s = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(),
                    s.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()),
                    o = e.hasClass(Y.DROPUP) ? 0 : e[0].offsetHeight,
                    (K.major < 4 || "static" === i) && (t.top = n.top - s.top + o,
                    t.left = n.left - s.left),
                    t.width = e[0].offsetWidth,
                    l.$bsContainer.css(t)
                };
                this.$button.on("click.bs.dropdown.data-api", function() {
                    l.isDisabled() || (e(l.$newElement),
                    l.$bsContainer.appendTo(l.options.container).toggleClass(Y.SHOW, !l.$button.hasClass(Y.SHOW)).append(l.$menu))
                }),
                G(window).off("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId).on("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId, function() {
                    l.$newElement.hasClass(Y.SHOW) && e(l.$newElement)
                }),
                this.$element.on("hide" + A, function() {
                    l.$menu.data("height", l.$menu.height()),
                    l.$bsContainer.detach()
                })
            },
            setOptionStatus: function() {
                var e = this
                  , t = this.$element.find("option");
                if (e.noScroll = !1,
                e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length)
                    for (var i = 0; i < e.selectpicker.view.visibleElements.length; i++) {
                        var n = e.selectpicker.current.map.originalIndex[i + e.selectpicker.view.position0]
                          , s = t[n];
                        if (s) {
                            var o = this.selectpicker.main.map.newIndex[n]
                              , l = this.selectpicker.main.elements[o];
                            e.setDisabled(n, s.disabled || "OPTGROUP" === s.parentNode.tagName && s.parentNode.disabled, o, l),
                            e.setSelected(n, s.selected, o, l)
                        }
                    }
            },
            setSelected: function(e, t, i, n) {
                var s, o, l, r = void 0 !== this.activeIndex, a = this.activeIndex === e || t && !this.multiple && !r;
                i || (i = this.selectpicker.main.map.newIndex[e]),
                n || (n = this.selectpicker.main.elements[i]),
                l = n.firstChild,
                t && (this.selectedIndex = e),
                n.classList.toggle("selected", t),
                n.classList.toggle("active", a),
                a && (this.selectpicker.view.currentActive = n,
                this.activeIndex = e),
                l && (l.classList.toggle("selected", t),
                l.classList.toggle("active", a),
                l.setAttribute("aria-selected", t)),
                a || !r && t && void 0 !== this.prevActiveIndex && (s = this.selectpicker.main.map.newIndex[this.prevActiveIndex],
                (o = this.selectpicker.main.elements[s]).classList.remove("active"),
                o.firstChild && o.firstChild.classList.remove("active"))
            },
            setDisabled: function(e, t, i, n) {
                var s;
                i || (i = this.selectpicker.main.map.newIndex[e]),
                n || (n = this.selectpicker.main.elements[i]),
                s = n.firstChild,
                n.classList.toggle(Y.DISABLED, t),
                s && ("4" === K.major && s.classList.toggle(Y.DISABLED, t),
                s.setAttribute("aria-disabled", t),
                t ? s.setAttribute("tabindex", -1) : s.setAttribute("tabindex", 0))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass(Y.DISABLED),
                this.$button.addClass(Y.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass(Y.DISABLED) && (this.$newElement.removeClass(Y.DISABLED),
                this.$button.removeClass(Y.DISABLED).attr("aria-disabled", !1)),
                -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                this.$button.click(function() {
                    return !e.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var e = this.$element[0]
                  , t = e.selectedIndex
                  , i = -1 === t;
                i || e.options[t].value || (i = !0),
                this.$button.toggleClass("bs-placeholder", i)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")),
                this.$button.attr("tabindex", this.$element.data("tabindex"))),
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var E = this
                  , t = G(document);
                function e() {
                    E.options.liveSearch ? E.$searchbox.focus() : E.$menuInner.focus()
                }
                function i() {
                    E.dropdown && E.dropdown._popper && E.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1),
                this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(),
                    t.data("spaceSelect", !1))
                }),
                this.$newElement.on("show.bs.dropdown", function() {
                    3 < K.major && !E.dropdown && (E.dropdown = E.$button.data("bs.dropdown"),
                    E.dropdown._menu = E.$menu[0])
                }),
                this.$button.on("click.bs.dropdown.data-api", function() {
                    E.$newElement.hasClass(Y.SHOW) || E.setSize()
                }),
                this.$element.on("shown" + A, function() {
                    E.$menuInner[0].scrollTop !== E.selectpicker.view.scrollTop && (E.$menuInner[0].scrollTop = E.selectpicker.view.scrollTop),
                    3 < K.major ? requestAnimationFrame(i) : e()
                }),
                this.$menuInner.on("click", "li a", function(e, t) {
                    var i = G(this)
                      , n = E.isVirtual() ? E.selectpicker.view.position0 : 0
                      , s = E.selectpicker.current.map.originalIndex[i.parent().index() + n]
                      , o = S(E.$element[0])
                      , l = E.$element.prop("selectedIndex")
                      , r = !0;
                    if (E.multiple && 1 !== E.options.maxOptions && e.stopPropagation(),
                    e.preventDefault(),
                    !E.isDisabled() && !i.parent().hasClass(Y.DISABLED)) {
                        var a = E.$element.find("option")
                          , c = a.eq(s)
                          , d = c.prop("selected")
                          , h = c.parent("optgroup")
                          , p = h.find("option")
                          , u = E.options.maxOptions
                          , f = h.data("maxOptions") || !1;
                        if (s === E.activeIndex && (t = !0),
                        t || (E.prevActiveIndex = E.activeIndex,
                        E.activeIndex = void 0),
                        E.multiple) {
                            if (c.prop("selected", !d),
                            E.setSelected(s, !d),
                            i.blur(),
                            !1 !== u || !1 !== f) {
                                var m = u < a.filter(":selected").length
                                  , v = f < h.find("option:selected").length;
                                if (u && m || f && v)
                                    if (u && 1 == u) {
                                        a.prop("selected", !1),
                                        c.prop("selected", !0);
                                        for (var g = 0; g < a.length; g++)
                                            E.setSelected(g, !1);
                                        E.setSelected(s, !0)
                                    } else if (f && 1 == f) {
                                        h.find("option:selected").prop("selected", !1),
                                        c.prop("selected", !0);
                                        for (g = 0; g < p.length; g++) {
                                            var b = p[g];
                                            E.setSelected(a.index(b), !1)
                                        }
                                        E.setSelected(s, !0)
                                    } else {
                                        var w = "string" == typeof E.options.maxOptionsText ? [E.options.maxOptionsText, E.options.maxOptionsText] : E.options.maxOptionsText
                                          , I = "function" == typeof w ? w(u, f) : w
                                          , x = I[0].replace("{n}", u)
                                          , k = I[1].replace("{n}", f)
                                          , $ = G('<div class="notify"></div>');
                                        I[2] && (x = x.replace("{var}", I[2][1 < u ? 0 : 1]),
                                        k = k.replace("{var}", I[2][1 < f ? 0 : 1])),
                                        c.prop("selected", !1),
                                        E.$menu.append($),
                                        u && m && ($.append(G("<div>" + x + "</div>")),
                                        r = !1,
                                        E.$element.trigger("maxReached" + A)),
                                        f && v && ($.append(G("<div>" + k + "</div>")),
                                        r = !1,
                                        E.$element.trigger("maxReachedGrp" + A)),
                                        setTimeout(function() {
                                            E.setSelected(s, !1)
                                        }, 10),
                                        $.delay(750).fadeOut(300, function() {
                                            G(this).remove()
                                        })
                                    }
                            }
                        } else
                            a.prop("selected", !1),
                            c.prop("selected", !0),
                            E.setSelected(s, !0);
                        !E.multiple || E.multiple && 1 === E.options.maxOptions ? E.$button.focus() : E.options.liveSearch && E.$searchbox.focus(),
                        r && (o != S(E.$element[0]) && E.multiple || l != E.$element.prop("selectedIndex") && !E.multiple) && (y = [s, c.prop("selected"), o],
                        E.$element.triggerNative("change"))
                    }
                }),
                this.$menu.on("click", "li." + Y.DISABLED + " a, ." + Y.POPOVERHEADER + ", ." + Y.POPOVERHEADER + " :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(),
                    e.stopPropagation(),
                    E.options.liveSearch && !G(e.target).hasClass("close") ? E.$searchbox.focus() : E.$button.focus())
                }),
                this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    E.options.liveSearch ? E.$searchbox.focus() : E.$button.focus()
                }),
                this.$menu.on("click", "." + Y.POPOVERHEADER + " .close", function() {
                    E.$button.click()
                }),
                this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }),
                this.$menu.on("click", ".actions-btn", function(e) {
                    E.options.liveSearch ? E.$searchbox.focus() : E.$button.focus(),
                    e.preventDefault(),
                    e.stopPropagation(),
                    G(this).hasClass("bs-select-all") ? E.selectAll() : E.deselectAll()
                }),
                this.$element.on({
                    change: function() {
                        E.render(),
                        E.$element.trigger("changed" + A, y),
                        y = null
                    },
                    focus: function() {
                        E.options.mobile || E.$button.focus()
                    }
                })
            },
            liveSearchListener: function() {
                var u = this
                  , f = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api", function() {
                    u.$searchbox.val() && u.$searchbox.val("")
                }),
                this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }),
                this.$searchbox.on("input propertychange", function() {
                    var e = u.$searchbox.val();
                    if (u.selectpicker.search.map.newIndex = {},
                    u.selectpicker.search.map.originalIndex = {},
                    u.selectpicker.search.elements = [],
                    u.selectpicker.search.data = [],
                    e) {
                        var t = []
                          , i = e.toUpperCase()
                          , n = {}
                          , s = []
                          , o = u._searchStyle()
                          , l = u.options.liveSearchNormalize;
                        l && (i = m(i)),
                        u._$lisSelected = u.$menuInner.find(".selected");
                        for (var r = 0; r < u.selectpicker.main.data.length; r++) {
                            var a = u.selectpicker.main.data[r];
                            n[r] || (n[r] = $(a, i, o, l)),
                            n[r] && void 0 !== a.headerIndex && -1 === s.indexOf(a.headerIndex) && (0 < a.headerIndex && (n[a.headerIndex - 1] = !0,
                            s.push(a.headerIndex - 1)),
                            n[a.headerIndex] = !0,
                            s.push(a.headerIndex),
                            n[a.lastIndex + 1] = !0),
                            n[r] && "optgroup-label" !== a.type && s.push(r)
                        }
                        r = 0;
                        for (var c = s.length; r < c; r++) {
                            var d = s[r]
                              , h = s[r - 1]
                              , p = (a = u.selectpicker.main.data[d],
                            u.selectpicker.main.data[h]);
                            ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== r) && (u.selectpicker.search.data.push(a),
                            t.push(u.selectpicker.main.elements[d]),
                            a.hasOwnProperty("originalIndex") && (u.selectpicker.search.map.newIndex[a.originalIndex] = t.length - 1,
                            u.selectpicker.search.map.originalIndex[t.length - 1] = a.originalIndex))
                        }
                        u.activeIndex = void 0,
                        u.noScroll = !0,
                        u.$menuInner.scrollTop(0),
                        u.selectpicker.search.elements = t,
                        u.createView(!0),
                        t.length || (f.className = "no-results",
                        f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + q(e) + '"'),
                        u.$menuInner[0].firstChild.appendChild(f))
                    } else
                        u.$menuInner.scrollTop(0),
                        u.createView(!1)
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e).triggerNative("change"),
                this.$element) : this.$element.val()
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element.find("option")
                      , i = 0
                      , n = 0
                      , s = S(this.$element[0]);
                    this.$element.addClass("bs-select-hidden");
                    for (var o = 0; o < this.selectpicker.current.elements.length; o++) {
                        var l = this.selectpicker.current.data[o]
                          , r = t[this.selectpicker.current.map.originalIndex[o]];
                        r && !r.disabled && "divider" !== l.type && (r.selected && i++,
                        r.selected = e,
                        r.selected && n++)
                    }
                    this.$element.removeClass("bs-select-hidden"),
                    i !== n && (this.setOptionStatus(),
                    this.togglePlaceholder(),
                    y = [null, null, s],
                    this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(),
                this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(e) {
                var t, i, n, s, o, l = G(this), r = l.hasClass("dropdown-toggle"), a = (r ? l.closest(".dropdown") : l.closest(N.MENU)).data("this"), c = a.findLis(), d = !1, h = e.which === H && !r && !a.options.selectOnTab, p = P.test(e.which) || h, u = a.$menuInner[0].scrollTop, f = a.isVirtual(), m = !0 === f ? a.selectpicker.view.position0 : 0;
                if (!(i = a.$newElement.hasClass(Y.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && a.$button.trigger("click.bs.dropdown.data-api"),
                e.which === C && i && (e.preventDefault(),
                a.$button.trigger("click.bs.dropdown.data-api").focus()),
                p) {
                    if (!c.length)
                        return;
                    void 0 === (t = !0 === f ? c.index(c.filter(".active")) : a.selectpicker.current.map.newIndex[a.activeIndex]) && (t = -1),
                    -1 !== t && ((n = a.selectpicker.current.elements[t + m]).classList.remove("active"),
                    n.firstChild && n.firstChild.classList.remove("active")),
                    e.which === D ? (-1 !== t && t--,
                    t + m < 0 && (t += c.length),
                    a.selectpicker.view.canHighlight[t + m] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + m).lastIndexOf(!0) - m) && (t = c.length - 1)) : (e.which === L || h) && (++t + m >= a.selectpicker.view.canHighlight.length && (t = 0),
                    a.selectpicker.view.canHighlight[t + m] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + m + 1).indexOf(!0))),
                    e.preventDefault();
                    var v = m + t;
                    e.which === D ? 0 === m && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight,
                    v = a.selectpicker.current.elements.length - 1) : d = (o = (s = a.selectpicker.current.data[v]).position - s.height) < u : (e.which === L || h) && (0 === t ? v = a.$menuInner[0].scrollTop = 0 : d = u < (o = (s = a.selectpicker.current.data[v]).position - a.sizeInfo.menuInnerHeight)),
                    (n = a.selectpicker.current.elements[v]) && (n.classList.add("active"),
                    n.firstChild && n.firstChild.classList.add("active")),
                    a.activeIndex = a.selectpicker.current.map.originalIndex[v],
                    a.selectpicker.view.currentActive = n,
                    d && (a.$menuInner[0].scrollTop = o),
                    a.options.liveSearch ? a.$searchbox.focus() : l.focus()
                } else if (!l.is("input") && !R.test(e.which) || e.which === T && a.selectpicker.keydown.keyHistory) {
                    var g, b, w = [];
                    e.preventDefault(),
                    a.selectpicker.keydown.keyHistory += E[e.which],
                    a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),
                    a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(),
                    b = a.selectpicker.keydown.keyHistory,
                    /^(.)\1+$/.test(b) && (b = b.charAt(0));
                    for (var I = 0; I < a.selectpicker.current.data.length; I++) {
                        var x = a.selectpicker.current.data[I];
                        $(x, b, "startsWith", !0) && a.selectpicker.view.canHighlight[I] && (x.index = I,
                        w.push(x.originalIndex))
                    }
                    if (w.length) {
                        var k = 0;
                        c.removeClass("active").find("a").removeClass("active"),
                        1 === b.length && (-1 === (k = w.indexOf(a.activeIndex)) || k === w.length - 1 ? k = 0 : k++),
                        g = a.selectpicker.current.map.newIndex[w[k]],
                        0 < u - (s = a.selectpicker.current.data[g]).position ? (o = s.position - s.height,
                        d = !0) : (o = s.position - a.sizeInfo.menuInnerHeight,
                        d = s.position > u + a.sizeInfo.menuInnerHeight),
                        (n = a.selectpicker.current.elements[g]).classList.add("active"),
                        n.firstChild && n.firstChild.classList.add("active"),
                        a.activeIndex = w[k],
                        n.firstChild.focus(),
                        d && (a.$menuInner[0].scrollTop = o),
                        l.focus()
                    }
                }
                i && (e.which === T && !a.selectpicker.keydown.keyHistory || e.which === O || e.which === H && a.options.selectOnTab) && (e.which !== T && e.preventDefault(),
                a.options.liveSearch && e.which === T || (a.$menuInner.find(".active a").trigger("click", !0),
                l.focus(),
                a.options.liveSearch || (e.preventDefault(),
                G(document).data("spaceSelect", !0))))
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                var e = G.extend({}, this.options, this.$element.data());
                this.options = e,
                this.selectpicker.main.map.newIndex = {},
                this.selectpicker.main.map.originalIndex = {},
                this.createLi(),
                this.checkDisabled(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.setSize(!0),
                this.$element.trigger("refreshed" + A)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.$element.off(A).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),
                G(window).off(A + "." + this.selectId)
            }
        };
        var g = G.fn.selectpicker;
        G.fn.selectpicker = f,
        G.fn.selectpicker.Constructor = u,
        G.fn.selectpicker.noConflict = function() {
            return G.fn.selectpicker = g,
            this
        }
        ,
        G(document).off("keydown.bs.dropdown.data-api").on("keydown" + A, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', u.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function(e) {
            e.stopPropagation()
        }),
        G(window).on("load" + A + ".data-api", function() {
            G(".selectpicker").each(function() {
                var e = G(this);
                f.call(e, e.data())
            })
        })
    }(e)
});



!function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var l = e(this)
              , s = l.data("selectsplitter")
              , o = "object" == typeof t && t;
            (s || "destroy" != t) && (s || l.data("selectsplitter", s = new r(this,o)),
            "string" == typeof t && s[t]())
        })
    }
    var r = function(e, t) {
        this.init("selectsplitter", e, t)
    };
    r.DEFAULTS = {
        template: '<div class="row" data-selectsplitter-wrapper-selector><div class="col-xs-12 col-sm-6"><select class="form-control" data-selectsplitter-firstselect-selector></select></div> <!-- Add the extra clearfix for only the required viewport --><div class="clearfix visible-xs-block"></div><div class="col-xs-12 col-sm-6"><select class="form-control" data-selectsplitter-secondselect-selector></select></div></div>'
    },
    r.prototype.init = function(t, l, s) {
        var o = this;
        o.type = t,
        o.$element = e(l),
        o.$element.hide(),
        o.options = e.extend({}, r.DEFAULTS, s),
        o.fullCategoryList = {};
        var a = 0
          , n = 0;
        o.$element.find("optgroup").each(function() {
            o.fullCategoryList[e(this).attr("label")] = {};
            var t = e(this)
              , r = 0
              , l = {};
            e(this).find("option").each(function() {
                var t = e(this).attr("value")
                  , s = e(this).text();
                l[e(this).index()] = {
                    x: t,
                    y: s
                },
                r++
            }),
            r > n && (n = r),
            o.fullCategoryList[t.attr("label")] = l,
            a++
        });
        var i = "";
        for (var c in o.fullCategoryList)
            o.fullCategoryList.hasOwnProperty(c) && (i = i + "<option>" + c + "</option>");
        o.$element.after(o.options.template),
        o.$wrapper = o.$element.next("div[data-selectsplitter-wrapper-selector]"),
        o.$firstSelect = e("select[data-selectsplitter-firstselect-selector]", o.$wrapper),
        o.$secondSelect = e("select[data-selectsplitter-secondselect-selector]", o.$wrapper);
        var d = Math.max(a, n, 2);
        d = Math.min(d, 10),
        o.$firstSelect.attr("size", d),
        o.$secondSelect.attr("size", d),
        o.$firstSelect.append(i),
        o.$firstSelect.on("change", e.proxy(o.updateParentCategory, o)),
        o.$secondSelect.on("change", e.proxy(o.updateChildCategory, o)),
        o.$selectedOption = "",
        o.currentParentCategory = "",
        o.currentChildCategory = "",
        o.$element.find("option[selected=selected]").length && (o.$selectedOption = o.$element.find("option[selected=selected]"),
        o.currentParentCategory = o.$selectedOption.closest("optgroup").attr("label"),
        o.currentChildCategory = o.$selectedOption.attr("value"),
        o.$firstSelect.find("option:contains(" + o.currentParentCategory + ")").attr("selected", "selected"),
        o.$firstSelect.trigger("change"))
    }
    ,
    r.prototype.updateParentCategory = function() {
        var e = this;
        e.currentParentCategory = e.$firstSelect.val(),
        e.$secondSelect.empty();
        var t = "";
        for (var r in e.fullCategoryList[e.currentParentCategory])
            e.fullCategoryList[e.currentParentCategory].hasOwnProperty(r) && (t = t + '<option value="' + e.fullCategoryList[e.currentParentCategory][r].x + '">' + e.fullCategoryList[e.currentParentCategory][r].y + "</option>");
        e.$secondSelect.append(t),
        e.$selectedOption && e.$secondSelect.find('option[value="' + e.$selectedOption.attr("value") + '"]').attr("selected", "selected")
    }
    ,
    r.prototype.updateChildCategory = function(t) {
        var r = this;
        r.currentChildCategory = e(t.target).val(),
        r.$element.find("option[selected=selected]").removeAttr("selected"),
        r.$element.find('option[value="' + r.currentChildCategory + '"]').attr("selected", "selected"),
        r.$element.trigger("change"),
        r.$selectedOption = r.$element.find("option[selected=selected]")
    }
    ,
    r.prototype.destroy = function() {
        var e = this;
        e.$wrapper.remove(),
        e.$element.removeData(e.type),
        e.$element.show()
    }
    ,
    e.fn.selectsplitter = t,
    e.fn.selectsplitter.Constructor = r
}(jQuery);

