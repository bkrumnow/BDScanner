/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-filereader-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var c in x)
            if (x.hasOwnProperty(c)) {
                if (e = [], t = x[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), b.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = E.className,
            n = Modernizr._config.classPrefix || "";
        if (k && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), k ? E.className.baseVal = t : E.className = t)
    }

    function i(e, t) {
        if ("object" == typeof e)
            for (var n in e) N(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function d() {
        var e = t.body;
        return e || (e = s(k ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, a) {
        var o, i, c, l, u = "modernizr",
            f = s("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) c = s("div"), c.id = a ? a[r] : u + (r + 1), f.appendChild(c);
        return o = s("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = l, E.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? f(a, n || t) : a);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function g(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(m(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + m(t[a]) + ":" + r + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function h(e, t, a, o) {
        function i() {
            u && (delete H.style, delete H.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var d = g(e, a);
            if (!r(d, "undefined")) return d
        }
        for (var u, f, p, m, h, v = ["modernizr", "tspan", "samp"]; !H.style && v.length;) u = !0, H.modElem = s(v.shift()), H.style = H.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (m = e[f], h = H.style[m], l(m, "-") && (m = c(m)), H.style[m] !== n) {
                if (o || r(a, "undefined")) return i(), "pfx" == t ? m : !0;
                try {
                    H.style[m] = a
                } catch (y) {}
                if (H.style[m] != h) return i(), "pfx" == t ? m : !0
            }
        return i(), !1
    }

    function v(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + W.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, a, o) : (s = (e + " " + P.join(i + " ") + i).split(" "), p(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var b = [],
        x = [],
        T = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                x.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                x.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = T, Modernizr = new Modernizr, Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var w = !1;
    try {
        w = "WebSocket" in e && 2 === e.WebSocket.CLOSING
    } catch (S) {}
    Modernizr.addTest("websockets", w), Modernizr.addTest("filereader", !!(e.File && e.FileList && e.FileReader)), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("websqldatabase", "openDatabase" in e), Modernizr.addTest("webworkers", "Worker" in e);
    var C = T._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    T._prefixes = C;
    var E = t.documentElement,
        k = "svg" === E.nodeName.toLowerCase();
    k || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, l(t)
        }

        function o(e) {
            var t = y[e[h]];
            return t || (t = {}, v++, e[h] = v, y[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = o(e);
            return !b.shivCSS || d || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
        }
        var d, u, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", d = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                d = !0, u = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = b, l(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t);
    var _ = "Moz O ms Webkit",
        P = T._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    T._domPrefixes = P;
    var N;
    ! function() {
        var e = {}.hasOwnProperty;
        N = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), T._l = {}, T.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, T._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        T.addTest = i
    });
    var R = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    T.hasEvent = R, Modernizr.addTest("hashchange", function() {
        return R("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }), Modernizr.addTest("audio", function() {
        var e = s("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof s("canvas").getContext("2d").fillText
    }), Modernizr.addTest("video", function() {
        var e = s("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("webgl", function() {
        var t = s("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = C.length - 1; o > a; a++) e = 0 === a ? "to " : "", r += t + C[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var i = s("a"),
            c = i.style;
        return c.cssText = r, ("" + c.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = s("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = s("a").style;
        return e.cssText = C.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var z = s("input"),
        $ = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        A = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) A[t[n]] = !!(t[n] in z);
        return A.list && (A.list = !(!s("datalist") || !e.HTMLDataListElement)), A
    }($);
    var L = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        O = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++) z.setAttribute("type", r = e[c]), o = "text" !== z.type && "style" in z, o && (z.value = s, z.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && z.style.WebkitAppearance !== n ? (E.appendChild(z), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(z, null).WebkitAppearance && 0 !== z.offsetHeight, E.removeChild(z)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? z.checkValidity && z.checkValidity() === !1 : z.value != s)), O[e[c]] = !!o;
        return O
    }(L), Modernizr.addTest("hsla", function() {
        var e = s("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", l(e.backgroundColor, "rgba") || l(e.backgroundColor, "hsla")
    });
    var F = "CSS" in e && "supports" in e.CSS,
        M = "supportsCSS" in e;
    Modernizr.addTest("supports", F || M);
    var B = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var j = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    T.mq = j;
    var I = T.testStyles = u,
        D = function() {
            var e = navigator.userAgent,
                t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
                n = e.match(/w(eb)?osbrowser/gi),
                r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
                a = 533 > t && e.match(/android/gi);
            return n || a || r
        }();
    D ? Modernizr.addTest("fontface", !1) : I('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            a = r.sheet || r.styleSheet,
            o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), I('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    });
    var W = T._config.usePrefixes ? _.split(" ") : [];
    T._cssomPrefixes = W;
    var q = function(t) {
        var r, a = C.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = C[i],
                c = s.toUpperCase() + "_" + r;
            if (c in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    T.atRule = q;
    var V = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete V.elem
    });
    var H = {
        style: V.elem.style
    };
    Modernizr._q.unshift(function() {
        delete H.style
    });
    var U = T.testProp = function(e, t, r) {
        return h([e], n, t, r)
    };
    Modernizr.addTest("textshadow", U("textShadow", "1px 1px")), T.testAllProps = v;
    var G, J = T.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? q(e) : (-1 != e.indexOf("-") && (e = c(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    try {
        G = J("indexedDB", e)
    } catch (S) {}
    Modernizr.addTest("indexeddb", !!G), G && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in G), T.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", y("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = y("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!y("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in E.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", I(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), a(), o(b), delete T.addTest, delete T.addAsyncTest;
    for (var Z = 0; Z < Modernizr._q.length; Z++) Modernizr._q[Z]();
    e.Modernizr = Modernizr
}(window, document);
if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
var ua = {
    toString: function() {
        return navigator.userAgent;
    },
    test: function(s) {
        return this.toString().toLowerCase().indexOf(s.toLowerCase()) > -1;
    }
};
ua.version = (ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];
ua.webkit = ua.test('webkit');
ua.gecko = ua.test('gecko') && !ua.webkit;
ua.opera = ua.test('opera');
ua.ie = ua.test('msie') && !ua.opera;
ua.ie6 = ua.ie && document.compatMode && typeof document.documentElement.style.maxHeight === 'undefined';
ua.ie7 = ua.ie && document.documentElement && typeof document.documentElement.style.maxHeight !== 'undefined' && typeof XDomainRequest === 'undefined';
ua.ie8 = ua.ie && typeof XDomainRequest !== 'undefined';
var domReady = function() {
    var fns = [];
    var init = function() {
        if (!arguments.callee.done) {
            arguments.callee.done = true;
            for (var i = 0; i < fns.length; i++) {
                fns[i]();
            }
        }
    };
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', init, false);
    }
    if (ua.ie) {
        (function() {
            try {
                document.documentElement.doScroll('left');
                document.body.length;
            } catch (e) {
                setTimeout(arguments.callee, 50);
                return;
            }
            init();
        })();
        document.onreadystatechange = function() {
            if (document.readyState === 'complete') {
                document.onreadystatechange = null;
                init();
            }
        };
    }
    if (ua.webkit && document.readyState) {
        (function() {
            if (document.readyState !== 'loading') {
                init();
            } else {
                setTimeout(arguments.callee, 10);
            }
        })();
    }
    window.onload = init;
    return function(fn) {
        if (typeof fn === 'function') {
            if (init.done) {
                fn();
            } else {
                fns[fns.length] = fn;
            }
        }
        return fn;
    };
}();
var cssHelper = function() {
    var regExp = {
        BLOCKS: /[^\s{;][^{;]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,
        BLOCKS_INSIDE: /[^\s{][^{]*\{[^{}]*\}/g,
        DECLARATIONS: /[a-zA-Z\-]+[^;]*:[^;]+;/g,
        RELATIVE_URLS: /url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,
        REDUNDANT_COMPONENTS: /(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;|@-moz-document\s*url-prefix\(\)\s*{(([^{}])+{([^{}])+}([^{}])+)+})/g,
        REDUNDANT_WHITESPACE: /\s*(,|:|;|\{|\})\s*/g,
        WHITESPACE_IN_PARENTHESES: /\(\s*(\S*)\s*\)/g,
        MORE_WHITESPACE: /\s{2,}/g,
        FINAL_SEMICOLONS: /;\}/g,
        NOT_WHITESPACE: /\S+/g
    };
    var parsed, parsing = false;
    var waiting = [];
    var wait = function(fn) {
        if (typeof fn === 'function') {
            waiting[waiting.length] = fn;
        }
    };
    var ready = function() {
        for (var i = 0; i < waiting.length; i++) {
            waiting[i](parsed);
        }
    };
    var events = {};
    var broadcast = function(n, v) {
        if (events[n]) {
            var listeners = events[n].listeners;
            if (listeners) {
                for (var i = 0; i < listeners.length; i++) {
                    listeners[i](v);
                }
            }
        }
    };
    var requestText = function(url, fnSuccess, fnFailure) {
        if (ua.ie && !window.XMLHttpRequest) {
            window.XMLHttpRequest = function() {
                return new ActiveXObject('Microsoft.XMLHTTP');
            };
        }
        if (!XMLHttpRequest) {
            return '';
        }
        var r = new XMLHttpRequest();
        try {
            r.open('get', url, true);
            r.setRequestHeader('X_REQUESTED_WITH', 'XMLHttpRequest');
        } catch (e) {
            fnFailure();
            return;
        }
        var done = false;
        setTimeout(function() {
            done = true;
        }, 5000);
        document.documentElement.style.cursor = 'progress';
        r.onreadystatechange = function() {
            if (r.readyState === 4 && !done) {
                if (!r.status && location.protocol === 'file:' || (r.status >= 200 && r.status < 300) || r.status === 304 || navigator.userAgent.indexOf('Safari') > -1 && typeof r.status === 'undefined') {
                    fnSuccess(r.responseText);
                } else {
                    fnFailure();
                }
                document.documentElement.style.cursor = '';
                r = null;
            }
        };
        r.send('');
    };
    var sanitize = function(text) {
        text = text.replace(regExp.REDUNDANT_COMPONENTS, '');
        text = text.replace(regExp.REDUNDANT_WHITESPACE, '$1');
        text = text.replace(regExp.WHITESPACE_IN_PARENTHESES, '($1)');
        text = text.replace(regExp.MORE_WHITESPACE, ' ');
        text = text.replace(regExp.FINAL_SEMICOLONS, '}');
        return text;
    };
    var objects = {
        stylesheet: function(el) {
            var o = {};
            var amqs = [],
                mqls = [],
                rs = [],
                rsw = [];
            var s = el.cssHelperText;
            var attr = el.getAttribute('media');
            if (attr) {
                var qts = attr.toLowerCase().split(',')
            } else {
                var qts = ['all']
            }
            for (var i = 0; i < qts.length; i++) {
                amqs[amqs.length] = objects.mediaQuery(qts[i], o);
            }
            var blocks = s.match(regExp.BLOCKS);
            if (blocks !== null) {
                for (var i = 0; i < blocks.length; i++) {
                    if (blocks[i].substring(0, 7) === '@media ') {
                        var mql = objects.mediaQueryList(blocks[i], o);
                        rs = rs.concat(mql.getRules());
                        mqls[mqls.length] = mql;
                    } else {
                        rs[rs.length] = rsw[rsw.length] = objects.rule(blocks[i], o, null);
                    }
                }
            }
            o.element = el;
            o.getCssText = function() {
                return s;
            };
            o.getAttrMediaQueries = function() {
                return amqs;
            };
            o.getMediaQueryLists = function() {
                return mqls;
            };
            o.getRules = function() {
                return rs;
            };
            o.getRulesWithoutMQ = function() {
                return rsw;
            };
            return o;
        },
        mediaQueryList: function(s, stsh) {
            var o = {};
            var idx = s.indexOf('{');
            var lt = s.substring(0, idx);
            s = s.substring(idx + 1, s.length - 1);
            var mqs = [],
                rs = [];
            var qts = lt.toLowerCase().substring(7).split(',');
            for (var i = 0; i < qts.length; i++) {
                mqs[mqs.length] = objects.mediaQuery(qts[i], o);
            }
            var rts = s.match(regExp.BLOCKS_INSIDE);
            if (rts !== null) {
                for (i = 0; i < rts.length; i++) {
                    rs[rs.length] = objects.rule(rts[i], stsh, o);
                }
            }
            o.type = 'mediaQueryList';
            o.getMediaQueries = function() {
                return mqs;
            };
            o.getRules = function() {
                return rs;
            };
            o.getListText = function() {
                return lt;
            };
            o.getCssText = function() {
                return s;
            };
            return o;
        },
        mediaQuery: function(s, listOrSheet) {
            s = s || '';
            var mql, stsh;
            if (listOrSheet.type === 'mediaQueryList') {
                mql = listOrSheet;
            } else {
                stsh = listOrSheet;
            }
            var not = false,
                type;
            var expr = [];
            var valid = true;
            var tokens = s.match(regExp.NOT_WHITESPACE);
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (!type && (token === 'not' || token === 'only')) {
                    if (token === 'not') {
                        not = true;
                    }
                } else if (!type) {
                    type = token;
                } else if (token.charAt(0) === '(') {
                    var pair = token.substring(1, token.length - 1).split(':');
                    expr[expr.length] = {
                        mediaFeature: pair[0],
                        value: pair[1] || null
                    };
                }
            }
            return {
                getQueryText: function() {
                    return s;
                },
                getAttrStyleSheet: function() {
                    return stsh || null;
                },
                getList: function() {
                    return mql || null;
                },
                getValid: function() {
                    return valid;
                },
                getNot: function() {
                    return not;
                },
                getMediaType: function() {
                    return type;
                },
                getExpressions: function() {
                    return expr;
                }
            };
        },
        rule: function(s, stsh, mql) {
            var o = {};
            var idx = s.indexOf('{');
            var st = s.substring(0, idx);
            var ss = st.split(',');
            var ds = [];
            var dts = s.substring(idx + 1, s.length - 1).split(';');
            for (var i = 0; i < dts.length; i++) {
                ds[ds.length] = objects.declaration(dts[i], o);
            }
            o.getStylesheet = function() {
                return stsh || null;
            };
            o.getMediaQueryList = function() {
                return mql || null;
            };
            o.getSelectors = function() {
                return ss;
            };
            o.getSelectorText = function() {
                return st;
            };
            o.getDeclarations = function() {
                return ds;
            };
            o.getPropertyValue = function(n) {
                for (var i = 0; i < ds.length; i++) {
                    if (ds[i].getProperty() === n) {
                        return ds[i].getValue();
                    }
                }
                return null;
            };
            return o;
        },
        declaration: function(s, r) {
            var idx = s.indexOf(':');
            var p = s.substring(0, idx);
            var v = s.substring(idx + 1);
            return {
                getRule: function() {
                    return r || null;
                },
                getProperty: function() {
                    return p;
                },
                getValue: function() {
                    return v;
                }
            };
        }
    };
    var parseText = function(el) {
        if (typeof el.cssHelperText !== 'string') {
            return;
        }
        var o = {
            stylesheet: null,
            mediaQueryLists: [],
            rules: [],
            selectors: {},
            declarations: [],
            properties: {}
        };
        var stsh = o.stylesheet = objects.stylesheet(el);
        var mqls = o.mediaQueryLists = stsh.getMediaQueryLists();
        var ors = o.rules = stsh.getRules();
        var oss = o.selectors;
        var collectSelectors = function(r) {
            var ss = r.getSelectors();
            for (var i = 0; i < ss.length; i++) {
                var n = ss[i];
                if (!oss[n]) {
                    oss[n] = [];
                }
                oss[n][oss[n].length] = r;
            }
        };
        for (i = 0; i < ors.length; i++) {
            collectSelectors(ors[i]);
        }
        var ods = o.declarations;
        for (i = 0; i < ors.length; i++) {
            ods = o.declarations = ods.concat(ors[i].getDeclarations());
        }
        var ops = o.properties;
        for (i = 0; i < ods.length; i++) {
            var n = ods[i].getProperty();
            if (!ops[n]) {
                ops[n] = [];
            }
            ops[n][ops[n].length] = ods[i];
        }
        el.cssHelperParsed = o;
        parsed[parsed.length] = el;
        return o;
    };
    var parseEmbedded = function(el, s) {
        return;
        el.cssHelperText = sanitize(s || el.innerHTML);
        return parseText(el);
    };
    var parse = function() {
        parsing = true;
        parsed = [];
        var linked = [];
        var finish = function() {
            for (var i = 0; i < linked.length; i++) {
                parseText(linked[i]);
            }
            var styles = document.getElementsByTagName('style');
            for (i = 0; i < styles.length; i++) {
                parseEmbedded(styles[i]);
            }
            parsing = false;
            ready();
        };
        var links = document.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.getAttribute('rel').indexOf('style') > -1 && link.href && link.href.length !== 0 && !link.disabled) {
                linked[linked.length] = link;
            }
        }
        if (linked.length > 0) {
            var c = 0;
            var checkForFinish = function() {
                c++;
                if (c === linked.length) {
                    finish();
                }
            };
            var processLink = function(link) {
                var href = link.href;
                requestText(href, function(text) {
                    text = sanitize(text).replace(regExp.RELATIVE_URLS, 'url(' + href.substring(0, href.lastIndexOf('/')) + '/$1)');
                    link.cssHelperText = text;
                    checkForFinish();
                }, checkForFinish);
            };
            for (i = 0; i < linked.length; i++) {
                processLink(linked[i]);
            }
        } else {
            finish();
        }
    };
    var types = {
        stylesheets: 'array',
        mediaQueryLists: 'array',
        rules: 'array',
        selectors: 'object',
        declarations: 'array',
        properties: 'object'
    };
    var collections = {
        stylesheets: null,
        mediaQueryLists: null,
        rules: null,
        selectors: null,
        declarations: null,
        properties: null
    };
    var addToCollection = function(name, v) {
        if (collections[name] !== null) {
            if (types[name] === 'array') {
                return (collections[name] = collections[name].concat(v));
            } else {
                var c = collections[name];
                for (var n in v) {
                    if (v.hasOwnProperty(n)) {
                        if (!c[n]) {
                            c[n] = v[n];
                        } else {
                            c[n] = c[n].concat(v[n]);
                        }
                    }
                }
                return c;
            }
        }
    };
    var collect = function(name) {
        collections[name] = (types[name] === 'array') ? [] : {};
        for (var i = 0; i < parsed.length; i++) {
            var pname = name === 'stylesheets' ? 'stylesheet' : name;
            addToCollection(name, parsed[i].cssHelperParsed[pname]);
        }
        return collections[name];
    };
    var getViewportSize = function(d) {
        if (typeof window.innerWidth != 'undefined') {
            return window['inner' + d];
        } else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth != 0) {
            return document.documentElement['client' + d];
        }
    };
    return {
        addStyle: function(s, mediaTypes, process) {
            var el;
            var styleElId = 'css-mediaqueries-js';
            var styleMedia = '';
            var styleEl = document.getElementById(styleElId);
            if (mediaTypes && mediaTypes.length > 0) {
                styleMedia = mediaTypes.join(',');
                styleElId += styleMedia;
            }
            if (null !== styleEl) {
                el = styleEl;
            } else {
                el = document.createElement('style');
                el.setAttribute('type', 'text/css');
                el.setAttribute('id', styleElId);
                el.setAttribute('media', styleMedia);
                document.getElementsByTagName('head')[0].appendChild(el);
            }
            if (el.styleSheet) {
                el.styleSheet.cssText += s;
            } else {
                el.appendChild(document.createTextNode(s));
            }
            el.addedWithCssHelper = true;
            if (typeof process === 'undefined' || process === true) {
                cssHelper.parsed(function(parsed) {
                    var o = parseEmbedded(el, s);
                    for (var n in o) {
                        if (o.hasOwnProperty(n)) {
                            addToCollection(n, o[n]);
                        }
                    }
                    broadcast('newStyleParsed', el);
                });
            } else {
                el.parsingDisallowed = true;
            }
            return el;
        },
        removeStyle: function(el) {
            if (el.parentNode)
                return el.parentNode.removeChild(el);
        },
        parsed: function(fn) {
            if (parsing) {
                wait(fn);
            } else {
                if (typeof parsed !== 'undefined') {
                    if (typeof fn === 'function') {
                        fn(parsed);
                    }
                } else {
                    wait(fn);
                    parse();
                }
            }
        },
        stylesheets: function(fn) {
            cssHelper.parsed(function(parsed) {
                fn(collections.stylesheets || collect('stylesheets'));
            });
        },
        mediaQueryLists: function(fn) {
            cssHelper.parsed(function(parsed) {
                fn(collections.mediaQueryLists || collect('mediaQueryLists'));
            });
        },
        rules: function(fn) {
            cssHelper.parsed(function(parsed) {
                fn(collections.rules || collect('rules'));
            });
        },
        selectors: function(fn) {
            cssHelper.parsed(function(parsed) {
                fn(collections.selectors || collect('selectors'));
            });
        },
        declarations: function(fn) {
            cssHelper.parsed(function(parsed) {
                fn(collections.declarations || collect('declarations'));
            });
        },
        properties: function(fn) {
            cssHelper.parsed(function(parsed) {
                fn(collections.properties || collect('properties'));
            });
        },
        broadcast: broadcast,
        addListener: function(n, fn) {
            if (typeof fn === 'function') {
                if (!events[n]) {
                    events[n] = {
                        listeners: []
                    };
                }
                events[n].listeners[events[n].listeners.length] = fn;
            }
        },
        removeListener: function(n, fn) {
            if (typeof fn === 'function' && events[n]) {
                var ls = events[n].listeners;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i] === fn) {
                        ls.splice(i, 1);
                        i -= 1;
                    }
                }
            }
        },
        getViewportWidth: function() {
            return getViewportSize('Width');
        },
        getViewportHeight: function() {
            return getViewportSize('Height');
        }
    };
}();
domReady(function enableCssMediaQueries() {
    var meter;
    var regExp = {
        LENGTH_UNIT: /[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,
        RESOLUTION_UNIT: /[0-9]+(dpi|dpcm)$/,
        ASPECT_RATIO: /^[0-9]+\/[0-9]+$/,
        ABSOLUTE_VALUE: /^[0-9]*(\.[0-9]+)*$/
    };
    var styles = [];
    var nativeSupport = function() {
        var id = 'css3-mediaqueries-test';
        var el = document.createElement('div');
        el.id = id;
        var style = cssHelper.addStyle('@media all and (width) { #' + id + ' { width: 1px !important; } }', [], false);
        document.body.appendChild(el);
        var ret = el.offsetWidth === 1;
        style.parentNode.removeChild(style);
        el.parentNode.removeChild(el);
        nativeSupport = function() {
            return ret;
        };
        return ret;
    };
    var createMeter = function() {
        meter = document.createElement('div');
        meter.style.cssText = 'position:absolute;top:-9999em;left:-9999em;' + 'margin:0;border:none;padding:0;width:1em;font-size:1em;';
        document.body.appendChild(meter);
        if (meter.offsetWidth !== 16) {
            meter.style.fontSize = 16 / meter.offsetWidth + 'em';
        }
        meter.style.width = '';
    };
    var measure = function(value) {
        meter.style.width = value;
        var amount = meter.offsetWidth;
        meter.style.width = '';
        return amount;
    };
    var testMediaFeature = function(feature, value) {
        var l = feature.length;
        var min = (feature.substring(0, 4) === 'min-');
        var max = (!min && feature.substring(0, 4) === 'max-');
        if (value !== null) {
            var valueType;
            var amount;
            if (regExp.LENGTH_UNIT.exec(value)) {
                valueType = 'length';
                amount = measure(value);
            } else if (regExp.RESOLUTION_UNIT.exec(value)) {
                valueType = 'resolution';
                amount = parseInt(value, 10);
                var unit = value.substring((amount + '').length);
            } else if (regExp.ASPECT_RATIO.exec(value)) {
                valueType = 'aspect-ratio';
                amount = value.split('/');
            } else if (regExp.ABSOLUTE_VALUE) {
                valueType = 'absolute';
                amount = value;
            } else {
                valueType = 'unknown';
            }
        }
        var width, height;
        if ('device-width' === feature.substring(l - 12, l)) {
            width = screen.width;
            if (value !== null) {
                if (valueType === 'length') {
                    return ((min && width >= amount) || (max && width < amount) || (!min && !max && width === amount));
                } else {
                    return false;
                }
            } else {
                return width > 0;
            }
        } else if ('device-height' === feature.substring(l - 13, l)) {
            height = screen.height;
            if (value !== null) {
                if (valueType === 'length') {
                    return ((min && height >= amount) || (max && height < amount) || (!min && !max && height === amount));
                } else {
                    return false;
                }
            } else {
                return height > 0;
            }
        } else if ('width' === feature.substring(l - 5, l)) {
            width = document.documentElement.clientWidth || document.body.clientWidth;
            if (value !== null) {
                if (valueType === 'length') {
                    return ((min && width >= amount) || (max && width < amount) || (!min && !max && width === amount));
                } else {
                    return false;
                }
            } else {
                return width > 0;
            }
        } else if ('height' === feature.substring(l - 6, l)) {
            height = document.documentElement.clientHeight || document.body.clientHeight;
            if (value !== null) {
                if (valueType === 'length') {
                    return ((min && height >= amount) || (max && height < amount) || (!min && !max && height === amount));
                } else {
                    return false;
                }
            } else {
                return height > 0;
            }
        } else if ('orientation' === feature.substring(l - 11, l)) {
            width = document.documentElement.clientWidth || document.body.clientWidth;
            height = document.documentElement.clientHeight || document.body.clientHeight;
            if (valueType === 'absolute') {
                return (amount === 'portrait') ? (width <= height) : (width > height);
            } else {
                return false;
            }
        } else if ('aspect-ratio' === feature.substring(l - 12, l)) {
            width = document.documentElement.clientWidth || document.body.clientWidth;
            height = document.documentElement.clientHeight || document.body.clientHeight;
            var curRatio = width / height;
            var ratio = amount[1] / amount[0];
            if (valueType === 'aspect-ratio') {
                return ((min && curRatio >= ratio) || (max && curRatio < ratio) || (!min && !max && curRatio === ratio));
            } else {
                return false;
            }
        } else if ('device-aspect-ratio' === feature.substring(l - 19, l)) {
            return valueType === 'aspect-ratio' && screen.width * amount[1] === screen.height * amount[0];
        } else if ('color-index' === feature.substring(l - 11, l)) {
            var colors = Math.pow(2, screen.colorDepth);
            if (value !== null) {
                if (valueType === 'absolute') {
                    return ((min && colors >= amount) || (max && colors < amount) || (!min && !max && colors === amount));
                } else {
                    return false;
                }
            } else {
                return colors > 0;
            }
        } else if ('color' === feature.substring(l - 5, l)) {
            var color = screen.colorDepth;
            if (value !== null) {
                if (valueType === 'absolute') {
                    return ((min && color >= amount) || (max && color < amount) || (!min && !max && color === amount));
                } else {
                    return false;
                }
            } else {
                return color > 0;
            }
        } else if ('resolution' === feature.substring(l - 10, l)) {
            var res;
            if (unit === 'dpcm') {
                res = measure('1cm');
            } else {
                res = measure('1in');
            }
            if (value !== null) {
                if (valueType === 'resolution') {
                    return ((min && res >= amount) || (max && res < amount) || (!min && !max && res === amount));
                } else {
                    return false;
                }
            } else {
                return res > 0;
            }
        } else {
            return false;
        }
    };
    var testMediaQuery = function(mq) {
        var test = mq.getValid();
        var expressions = mq.getExpressions();
        var l = expressions.length;
        if (l > 0) {
            for (var i = 0; i < l && test; i++) {
                test = testMediaFeature(expressions[i].mediaFeature, expressions[i].value);
            }
            var not = mq.getNot();
            return (test && !not || not && !test);
        }
        return test;
    };
    var testMediaQueryList = function(mql, ts) {
        var mqs = mql.getMediaQueries();
        var t = {};
        for (var i = 0; i < mqs.length; i++) {
            var type = mqs[i].getMediaType();
            if (mqs[i].getExpressions().length === 0) {
                continue;
            }
            var typeAllowed = true;
            if (type !== 'all' && ts && ts.length > 0) {
                typeAllowed = false;
                for (var j = 0; j < ts.length; j++) {
                    if (ts[j] === type) {
                        typeAllowed = true;
                    }
                }
            }
            if (typeAllowed && testMediaQuery(mqs[i])) {
                t[type] = true;
            }
        }
        var s = [],
            c = 0;
        for (var n in t) {
            if (t.hasOwnProperty(n)) {
                if (c > 0) {
                    s[c++] = ',';
                }
                s[c++] = n;
            }
        }
        if (s.length > 0) {
            styles[styles.length] = cssHelper.addStyle('@media ' + s.join('') + '{' + mql.getCssText() + '}', ts, false);
        }
    };
    var testMediaQueryLists = function(mqls, ts) {
        for (var i = 0; i < mqls.length; i++) {
            testMediaQueryList(mqls[i], ts);
        }
    };
    var testStylesheet = function(stsh) {
        var amqs = stsh.getAttrMediaQueries();
        var allPassed = false;
        var t = {};
        for (var i = 0; i < amqs.length; i++) {
            if (testMediaQuery(amqs[i])) {
                t[amqs[i].getMediaType()] = amqs[i].getExpressions().length > 0;
            }
        }
        var ts = [],
            tswe = [];
        for (var n in t) {
            if (t.hasOwnProperty(n)) {
                ts[ts.length] = n;
                if (t[n]) {
                    tswe[tswe.length] = n
                }
                if (n === 'all') {
                    allPassed = true;
                }
            }
        }
        if (tswe.length > 0) {
            styles[styles.length] = cssHelper.addStyle(stsh.getCssText(), tswe, false);
        }
        var mqls = stsh.getMediaQueryLists();
        if (allPassed) {
            testMediaQueryLists(mqls);
        } else {
            testMediaQueryLists(mqls, ts);
        }
    };
    var testStylesheets = function(stshs) {
        for (var i = 0; i < stshs.length; i++) {
            testStylesheet(stshs[i]);
        }
        if (ua.ie) {
            document.documentElement.style.display = 'block';
            setTimeout(function() {
                document.documentElement.style.display = '';
            }, 0);
            setTimeout(function() {
                cssHelper.broadcast('cssMediaQueriesTested');
            }, 100);
        } else {
            cssHelper.broadcast('cssMediaQueriesTested');
        }
    };
    var test = function() {
        for (var i = 0; i < styles.length; i++) {
            cssHelper.removeStyle(styles[i]);
        }
        styles = [];
        cssHelper.stylesheets(testStylesheets);
    };
    var scrollbarWidth = 0;
    var checkForResize = function() {
        var cvpw = cssHelper.getViewportWidth();
        var cvph = cssHelper.getViewportHeight();
        if (ua.ie) {
            var el = document.createElement('div');
            el.style.position = 'absolute';
            el.style.top = '-9999em';
            el.style.overflow = 'scroll';
            document.body.appendChild(el);
            scrollbarWidth = el.offsetWidth - el.clientWidth;
            document.body.removeChild(el);
        }
        var timer;
        var resizeHandler = function() {
            var vpw = cssHelper.getViewportWidth();
            var vph = cssHelper.getViewportHeight();
            if (Math.abs(vpw - cvpw) > scrollbarWidth || Math.abs(vph - cvph) > scrollbarWidth) {
                cvpw = vpw;
                cvph = vph;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    if (!nativeSupport()) {
                        test();
                    } else {
                        cssHelper.broadcast('cssMediaQueriesTested');
                    }
                }, 500);
            }
        };
        window.onresize = function() {
            var x = window.onresize || function() {};
            return function() {
                x();
                resizeHandler();
            };
        }();
    };
    var docEl = document.documentElement;
    docEl.style.marginLeft = '-32767px';
    setTimeout(function() {
        docEl.style.marginLeft = '';
    }, 5000);
    return function() {
        if (!nativeSupport()) {
            cssHelper.addListener('newStyleParsed', function(el) {
                testStylesheet(el.cssHelperParsed.stylesheet);
            });
            cssHelper.addListener('cssMediaQueriesTested', function() {
                if (ua.ie) {
                    docEl.style.width = '1px';
                }
                setTimeout(function() {
                    docEl.style.width = '';
                    docEl.style.marginLeft = '';
                }, 0);
                cssHelper.removeListener('cssMediaQueriesTested', arguments.callee);
            });
            createMeter();
            test();
        } else {
            docEl.style.marginLeft = '';
        }
        checkForResize();
    };
}());
try {
    document.execCommand('BackgroundImageCache', false, true);
} catch (e) {}
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var deletedIds = [];
    var document = window.document;
    var slice = deletedIds.slice;
    var concat = deletedIds.concat;
    var push = deletedIds.push;
    var indexOf = deletedIds.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var
        version = "1.12.4",
        jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
        },
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase();
        };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: push,
        sort: deletedIds.sort,
        splice: deletedIds.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array";
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window;
        },
        isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        isPlainObject: function(obj) {
            var key;
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            if (!support.ownFirst) {
                for (key in obj) {
                    return hasOwn.call(obj, key);
                }
            }
            for (key in obj) {}
            return key === undefined || hasOwn.call(obj, key);
        },
        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(data) {
            if (data && jQuery.trim(data)) {
                (window.execScript || function(data) {
                    window["eval"].call(window, data);
                })(data);
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }
            return obj;
        },
        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (indexOf) {
                    return indexOf.call(arr, elem, i);
                }
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (; i < len; i++) {
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }
            return -1;
        },
        merge: function(first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;
            while (j < len) {
                first[i++] = second[j++];
            }
            if (len !== len) {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        },
        map: function(elems, callback, arg) {
            var length, value, i = 0,
                ret = [];
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            }
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var args, proxy, tmp;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        now: function() {
            return +(new Date());
        },
        support: support
    });
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
    }
    var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        (function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                    }
                    return 0;
                },
                MAX_NEGATIVE = 1 << 31,
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
                indexOf = function(list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                whitespace = "[\\x20\\t\\r\\n\\f]",
                identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rnative = /^[^{]+\{\s*\[native \w/,
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rsibling = /[+~]/,
                rescape = /'|\\/g,
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function(_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000;
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                },
                unloadHandler = function() {
                    setDocument();
                };
            try {
                push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els));
                    } : function(target, els) {
                        var j = target.length,
                            i = 0;
                        while ((target[j++] = els[i++])) {}
                        target.length = j - 1;
                    }
                };
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument,
                    nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results;
                }
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if ((m = match[1])) {
                                if (nodeType === 9) {
                                    if ((elem = context.getElementById(m))) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector;
                            } else if (context.nodeName.toLowerCase() !== "object") {
                                if ((nid = context.getAttribute("id"))) {
                                    nid = nid.replace(rescape, "\\$&");
                                } else {
                                    context.setAttribute("id", (nid = expando));
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                while (i--) {
                                    groups[i] = nidselect + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }

            function createCache() {
                var keys = [];

                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                }
                return cache;
            }

            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }

            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div);
                } catch (e) {
                    return false;
                } finally {
                    if (div.parentNode) {
                        div.parentNode.removeChild(div);
                    }
                    div = null;
                }
            }

            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }

            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) -
                    (~a.sourceIndex || MAX_NEGATIVE);
                if (diff) {
                    return diff;
                }
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }

            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length;
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }

            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function(elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if ((parent = document.defaultView) && parent.top !== parent) {
                    if (parent.addEventListener) {
                        parent.addEventListener("unload", unloadHandler, false);
                    } else if (parent.attachEvent) {
                        parent.attachEvent("onunload", unloadHandler);
                    }
                }
                support.attributes = assert(function(div) {
                    div.className = "i";
                    return !div.getAttribute("className");
                });
                support.getElementsByTagName = assert(function(div) {
                    div.appendChild(document.createComment(""));
                    return !div.getElementsByTagName("*").length;
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function(div) {
                    docElem.appendChild(div).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });
                if (support.getById) {
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m ? [m] : [];
                        }
                    };
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                } else {
                    delete Expr.find["ID"];
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                }
                Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag);
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                } : function(tag, context) {
                    var elem, tmp = [],
                        i = 0,
                        results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while ((elem = results[i++])) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                };
                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };
                rbuggyMatches = [];
                rbuggyQSA = [];
                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    assert(function(div) {
                        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (div.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }
                        if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }
                        if (!div.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });
                    assert(function(div) {
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        div.appendChild(input).setAttribute("name", "D");
                        if (div.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
                    assert(function(div) {
                        support.disconnectedMatch = matches.call(div, "div");
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function(a, b) {
                    if (b) {
                        while ((b = b.parentNode)) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                sortOrder = hasCompare ? function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare;
                    }
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1;
                        }
                        return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                } : function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var cur, i = 0,
                        aup = a.parentNode,
                        bup = b.parentNode,
                        ap = [a],
                        bp = [b];
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    }
                    cur = a;
                    while ((cur = cur.parentNode)) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while ((cur = cur.parentNode)) {
                        bp.unshift(cur);
                    }
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                };
                return document;
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            };
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0;
            };
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };
            Sizzle.attr = function(elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                var fn = Expr.attrHandle[name.toLowerCase()],
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [],
                    j = 0,
                    i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while ((elem = results[i++])) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }
                sortInput = null;
                return results;
            };
            getText = Sizzle.getText = function(elem) {
                var node, ret = "",
                    i = 0,
                    nodeType = elem.nodeType;
                if (!nodeType) {
                    while ((node = elem[i++])) {
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                return ret;
            };
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    "ATTR": function(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    "CHILD": function(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd");
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    "PSEUDO": function(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    "TAG": function(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return true;
                        } : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                    },
                    "CLASS": function(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                        });
                    },
                    "ATTR": function(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        };
                    },
                    "CHILD": function(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode;
                        } : function(elem, context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                parent = elem.parentNode,
                                name = ofType && elem.nodeName.toLowerCase(),
                                useCache = !xml && !ofType,
                                diff = false;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while ((node = node[dir])) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling";
                                    }
                                    return true;
                                }
                                start = [forward ? parent.firstChild : parent.lastChild];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                                            break;
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex;
                                    }
                                    if (diff === false) {
                                        while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [dirruns, diff];
                                                }
                                                if (node === elem) {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || (diff % first === 0 && diff / first >= 0);
                            }
                        };
                    },
                    "PSEUDO": function(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument);
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument),
                                    i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            };
                        }
                        return fn;
                    }
                },
                pseudos: {
                    "not": markFunction(function(selector) {
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []),
                                i = seed.length;
                            while (i--) {
                                if ((elem = unmatched[i])) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop();
                        };
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }),
                    "lang": markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),
                    "target": function(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    "root": function(elem) {
                        return elem === docElem;
                    },
                    "focus": function(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },
                    "enabled": function(elem) {
                        return elem.disabled === false;
                    },
                    "disabled": function(elem) {
                        return elem.disabled === true;
                    },
                    "checked": function(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },
                    "selected": function(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    },
                    "empty": function(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    "parent": function(elem) {
                        return !Expr.pseudos["empty"](elem);
                    },
                    "header": function(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    "input": function(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    "button": function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    "text": function(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },
                    "first": createPositionalPseudo(function() {
                        return [0];
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1];
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                    submit: true,
                    reset: true
                }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }

            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push((tokens = []));
                    }
                    matched = false;
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml);
                        }
                    }
                } : function(elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                    if (xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return (newCache[2] = oldCache[2]);
                                } else {
                                    uniqueCache[dir] = newCache;
                                    if ((newCache[2] = matcher(elem, context, xml))) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                } : matchers[0];
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;
                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [],
                        postMap = [],
                        preexisting = results.length,
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                        matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        temp.push((matcherIn[i] = elem));
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml);
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,
                    matchContext = addCombinator(function(elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function(elem, context, xml) {
                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                        checkContext = null;
                        return ret;
                    }];
                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;
                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        }
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            }
                            if (bySet) {
                                if ((elem = !matcher && elem)) {
                                    matchedCount--;
                                }
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        }
                        matchedCount += i;
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while ((matcher = setMatchers[j++])) {
                                matcher(unmatched, setMatched, context, xml);
                            }
                            if (seed) {
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                }
                                setMatched = condense(setMatched);
                            }
                            push.apply(results, setMatched);
                            if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                                Sizzle.uniqueSort(results);
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }
                        return unmatched;
                    };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, match) {
                var i, setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector;
                }
                return cached;
            };
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize((selector = compiled.selector || selector));
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;
                        } else if (compiled) {
                            context = context.parentNode;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[(type = token.type)]) {
                            break;
                        }
                        if ((find = Expr.find[type])) {
                            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results;
            };
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function(div1) {
                return div1.compareDocumentPosition(document.createElement("div")) & 1;
            });
            if (!assert(function(div) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild.getAttribute("href") === "#";
                })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }
            if (!support.attributes || !assert(function(div) {
                    div.innerHTML = "<input/>";
                    div.firstChild.setAttribute("value", "");
                    return div.firstChild.getAttribute("value") === "";
                })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }
            if (!assert(function(div) {
                    return div.getAttribute("disabled") == null;
                })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }
                });
            }
            return Sizzle;
        })(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var dir = function(elem, dir, until) {
        var matched = [],
            truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
    var risSimple = /^.[^:#\[\.,]*$/;

    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return (elem === qualifier) !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return (jQuery.inArray(elem, qualifier) > -1) !== not;
        });
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret = [],
                self = this,
                len = self.length;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) {
                return this;
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    match = [null, selector, null];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector);
                            }
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            } else if (jQuery.isFunction(selector)) {
                return typeof root.ready !== "undefined" ? root.ready(selector) : selector(jQuery);
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    jQuery.fn.extend({
        has: function(target) {
            var i, targets = jQuery(target, this),
                len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0,
                l = this.length,
                matched = [],
                pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
            if (!elem) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem));
            }
            return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });

    function sibling(cur, dir) {
        do {
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    ret = jQuery.uniqueSort(ret);
                }
                if (rparentsprev.test(name)) {
                    ret = ret.reverse();
                }
            }
            return this.pushStack(ret);
        };
    });
    var rnotwhite = (/\S+/g);

    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var
            firing, memory, fired, locked, list = [],
            queue = [],
            firingIndex = -1,
            fire = function() {
                locked = options.once;
                fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {
                        if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }
                if (!options.memory) {
                    memory = false;
                }
                firing = false;
                if (locked) {
                    if (memory) {
                        list = [];
                    } else {
                        list = "";
                    }
                }
            },
            self = {
                add: function() {
                    if (list) {
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }
                        (function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (jQuery.isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                                    add(arg);
                                }
                            });
                        })(arguments);
                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },
                remove: function() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },
                has: function(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                },
                empty: function() {
                    if (list) {
                        list = [];
                    }
                    return this;
                },
                disable: function() {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function() {
                    return !list;
                },
                lock: function() {
                    locked = true;
                    if (!memory) {
                        self.disable();
                    }
                    return this;
                },
                locked: function() {
                    return !!locked;
                },
                fireWith: function(context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },
                fire: function() {
                    self.fireWith(this, arguments);
                    return this;
                },
                fired: function() {
                    return !!fired;
                }
            };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                    ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", jQuery.Callbacks("memory")]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    then: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = jQuery.isFunction(fns[i]) && fns[i];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    promise: function(obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                },
                deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2],
                    stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0,
                resolveValues = slice.call(arguments),
                length = resolveValues.length,
                remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
                updateFunc = function(i, contexts, values) {
                    return function(value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values);
                        } else if (!(--remaining)) {
                            deferred.resolveWith(contexts, values);
                        }
                    };
                },
                progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        jQuery.ready.promise().done(fn);
        return this;
    };
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [jQuery]);
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });

    function detach() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
        } else {
            document.detachEvent("onreadystatechange", completed);
            window.detachEvent("onload", completed);
        }
    }

    function completed() {
        if (document.addEventListener || window.event.type === "load" || document.readyState === "complete") {
            detach();
            jQuery.ready();
        }
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                window.setTimeout(jQuery.ready);
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed);
                window.addEventListener("load", completed);
            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);
                var top = false;
                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}
                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return window.setTimeout(doScrollCheck, 50);
                            }
                            detach();
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise(obj);
    };
    jQuery.ready.promise();
    var i;
    for (i in jQuery(support)) {
        break;
    }
    support.ownFirst = i === "0";
    support.inlineBlockNeedsLayout = false;
    jQuery(function() {
        var val, div, body, container;
        body = document.getElementsByTagName("body")[0];
        if (!body || !body.style) {
            return;
        }
        div = document.createElement("div");
        container = document.createElement("div");
        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        body.appendChild(container).appendChild(div);
        if (typeof div.style.zoom !== "undefined") {
            div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
            if (val) {
                body.style.zoom = 1;
            }
        }
        body.removeChild(container);
    });
    (function() {
        var div = document.createElement("div");
        support.deleteExpando = true;
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }
        div = null;
    })();
    var acceptData = function(elem) {
        var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
            nodeType = +elem.nodeType || 1;
        return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute("classid") === noData;
    };
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /([A-Z])/g;

    function dataAttr(elem, key, data) {
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                jQuery.data(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }

    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue;
            }
            if (name !== "toJSON") {
                return false;
            }
        }
        return true;
    }

    function internalData(elem, name, data, pvt) {
        if (!acceptData(elem)) {
            return;
        }
        var ret, thisCache, internalKey = jQuery.expando,
            isNode = elem.nodeType,
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if ((!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string") {
            return;
        }
        if (!id) {
            if (isNode) {
                id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }
        if (!cache[id]) {
            cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            };
        }
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        thisCache = cache[id];
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {};
            }
            thisCache = thisCache.data;
        }
        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data;
        }
        if (typeof name === "string") {
            ret = thisCache[name];
            if (ret == null) {
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            ret = thisCache;
        }
        return ret;
    }

    function internalRemoveData(elem, name, pvt) {
        if (!acceptData(elem)) {
            return;
        }
        var thisCache, i, isNode = elem.nodeType,
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (!cache[id]) {
            return;
        }
        if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                if (!jQuery.isArray(name)) {
                    if (name in thisCache) {
                        name = [name];
                    } else {
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [name];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }
                i = name.length;
                while (i--) {
                    delete thisCache[name[i]];
                }
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    return;
                }
            }
        }
        if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
                return;
            }
        }
        if (isNode) {
            jQuery.cleanData([elem], true);
        } else if (support.deleteExpando || cache != cache.window) {
            delete cache[id];
        } else {
            cache[id] = undefined;
        }
    }
    jQuery.extend({
        cache: {},
        noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },
        data: function(elem, name, data) {
            return internalData(elem, name, data);
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name);
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0],
                attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key);
                });
            }
            return arguments.length > 1 ? this.each(function() {
                jQuery.data(this, key, value);
            }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function() {
                    jQuery.dequeue(elem, type);
                };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if (!(--count)) {
                        defer.resolveWith(elements, [elements]);
                    }
                };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    (function() {
        var shrinkWrapBlocksVal;
        support.shrinkWrapBlocks = function() {
            if (shrinkWrapBlocksVal != null) {
                return shrinkWrapBlocksVal;
            }
            shrinkWrapBlocksVal = false;
            var div, body, container;
            body = document.getElementsByTagName("body")[0];
            if (!body || !body.style) {
                return;
            }
            div = document.createElement("div");
            container = document.createElement("div");
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild(container).appendChild(div);
            if (typeof div.style.zoom !== "undefined") {
                div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
                div.appendChild(document.createElement("div")).style.width = "5px";
                shrinkWrapBlocksVal = div.offsetWidth !== 3;
            }
            body.removeChild(container);
            return shrinkWrapBlocksVal;
        };
    })();
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var isHidden = function(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };

    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale = 1,
            maxIterations = 20,
            currentValue = tween ? function() {
                return tween.cur();
            } : function() {
                return jQuery.css(elem, prop, "");
            },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3];
            valueParts = valueParts || [];
            initialInUnit = +initial || 1;
            do {
                scale = scale || ".5";
                initialInUnit = initialInUnit / scale;
                jQuery.style(elem, prop, initialInUnit + unit);
            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            length = elems.length,
            bulk = key == null;
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            }
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                } else {
                    bulk = fn;
                    fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (; i < length; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    };
    var rcheckableType = (/^(?:checkbox|radio)$/i);
    var rtagName = (/<([\w:-]+)/);
    var rscriptType = (/^$|\/(?:java|ecma)script/i);
    var rleadingWhitespace = (/^\s+/);
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" + "details|dialog|figcaption|figure|footer|header|hgroup|main|" + "mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function createSafeFragment(document) {
        var list = nodeNames.split("|"),
            safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(list.pop());
            }
        }
        return safeFrag;
    }
    (function() {
        var div = document.createElement("div"),
            fragment = document.createDocumentFragment(),
            input = document.createElement("input");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        support.leadingWhitespace = div.firstChild.nodeType === 3;
        support.tbody = !div.getElementsByTagName("tbody").length;
        support.htmlSerialize = !!div.getElementsByTagName("link").length;
        support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        input.type = "checkbox";
        input.checked = true;
        fragment.appendChild(input);
        support.appendChecked = input.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        fragment.appendChild(div);
        input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        support.noCloneEvent = !!div.addEventListener;
        div[jQuery.expando] = 1;
        support.attributes = !div.getAttribute(jQuery.expando);
    })();
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    function getAll(context, tag) {
        var elems, elem, i = 0,
            found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : undefined;
        if (!found) {
            for (found = [], elems = context.childNodes || context;
                (elem = elems[i]) != null; i++) {
                if (!tag || jQuery.nodeName(elem, tag)) {
                    found.push(elem);
                } else {
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
    }

    function setGlobalEval(elems, refElements) {
        var elem, i = 0;
        for (;
            (elem = elems[i]) != null; i++) {
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
        }
    }
    var rhtml = /<|&#?\w+;/,
        rtbody = /<tbody/i;

    function fixDefaultChecked(elem) {
        if (rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
        }
    }

    function buildFragment(elems, context, scripts, selection, ignored) {
        var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length,
            safe = createSafeFragment(context),
            nodes = [],
            i = 0;
        for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
                if (jQuery.type(elem) === "object") {
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem));
                } else {
                    tmp = tmp || safe.appendChild(context.createElement("div"));
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    }
                    if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                        nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                    }
                    if (!support.tbody) {
                        elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                        j = elem && elem.childNodes.length;
                        while (j--) {
                            if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
                                elem.removeChild(tbody);
                            }
                        }
                    }
                    jQuery.merge(nodes, tmp.childNodes);
                    tmp.textContent = "";
                    while (tmp.firstChild) {
                        tmp.removeChild(tmp.firstChild);
                    }
                    tmp = safe.lastChild;
                }
            }
        }
        if (tmp) {
            safe.removeChild(tmp);
        }
        if (!support.appendChecked) {
            jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
        }
        i = 0;
        while ((elem = nodes[i++])) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }
                continue;
            }
            contains = jQuery.contains(elem.ownerDocument, elem);
            tmp = getAll(safe.appendChild(elem), "script");
            if (contains) {
                setGlobalEval(tmp);
            }
            if (scripts) {
                j = 0;
                while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }
        tmp = null;
        return safe;
    }
    (function() {
        var i, eventName, div = document.createElement("div");
        for (i in {
                submit: true,
                change: true,
                focusin: true
            }) {
            eventName = "on" + i;
            if (!(support[i] = eventName in window)) {
                div.setAttribute(eventName, "t");
                support[i] = div.attributes[eventName].expando === false;
            }
        }
        div = null;
    })();
    var rformElems = /^(?:input|select|textarea)$/i,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }

    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
            if (typeof selector !== "string") {
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one);
            }
            return elem;
        }
        if (data == null && fn == null) {
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                fn = data;
                data = undefined;
            } else {
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                };
                eventHandle.elem = elem;
            }
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
            elem = null;
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                jQuery._removeData(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") > -1) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [],
                args = slice.call(arguments),
                handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;
            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                for (; cur != this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = originalEvent.srcElement || document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY " + "pageX pageY screenX screenY toElement").split(" "),
            filter: function(event, original) {
                var body, eventDoc, doc, button = original.button,
                    fromElement = original.fromElement;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX +
                        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                        (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY +
                        (doc && doc.scrollTop || body && body.scrollTop || 0) -
                        (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                if (!event.which && button !== undefined) {
                    event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                }
                return event;
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    } : function(elem, type, handle) {
        var name = "on" + type;
        if (elem.detachEvent) {
            if (typeof elem[name] === "undefined") {
                elem[name] = null;
            }
            elem.detachEvent(name, handle);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e || this.isSimulated) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!support.submit) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target,
                        form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? jQuery.prop(elem, "form") : undefined;
                    if (form && !jQuery._data(form, "submit")) {
                        jQuery.event.add(form, "submit._submit", function(event) {
                            event._submitBubble = true;
                        });
                        jQuery._data(form, "submit", true);
                    }
                });
            },
            postDispatch: function(event) {
                if (event._submitBubble) {
                    delete event._submitBubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event);
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    if (!support.change) {
        jQuery.event.special.change = {
            setup: function() {
                if (rformElems.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._justChanged = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            if (this._justChanged && !event.isTrigger) {
                                this._justChanged = false;
                            }
                            jQuery.event.simulate("change", this, event);
                        });
                    }
                    return false;
                }
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "change")) {
                        jQuery.event.add(elem, "change._change", function(event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event);
                            }
                        });
                        jQuery._data(elem, "change", true);
                    }
                });
            },
            handle: function(event) {
                var elem = event.target;
                if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName);
            }
        };
    }
    if (!support.focusin) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    jQuery._data(doc, fix, (attaches || 0) + 1);
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        jQuery._removeData(doc, fix);
                    } else {
                        jQuery._data(doc, fix, attaches);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        rnoInnerhtml = /<script|<style|<link/i,
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        safeFragment = createSafeFragment(document),
        fragmentDiv = safeFragment.appendChild(document.createElement("div"));

    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }

    function disableScript(elem) {
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }

    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }
        var type, i, l, oldData = jQuery._data(src),
            curData = jQuery._data(dest, oldData),
            events = oldData.events;
        if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data);
        }
    }

    function fixCloneNodeIssues(src, dest) {
        var nodeName, e, data;
        if (dest.nodeType !== 1) {
            return;
        }
        nodeName = dest.nodeName.toLowerCase();
        if (!support.noCloneEvent && dest[jQuery.expando]) {
            data = jQuery._data(dest);
            for (e in data.events) {
                jQuery.removeEvent(dest, e, data.handle);
            }
            dest.removeAttribute(jQuery.expando);
        }
        if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);
        } else if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML;
            }
            if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
                dest.innerHTML = src.innerHTML;
            }
        } else if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
                dest.value = src.value;
            }
        } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var first, node, hasScripts, scripts, doc, fragment, i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            isFunction = jQuery.isFunction(value);
        if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
            return collection.each(function(index) {
                var self = collection.eq(index);
                if (isFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
                fragment = first;
            }
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                for (; i < l; i++) {
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        if (hasScripts) {
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    jQuery.map(scripts, restoreScript);
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src) {
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src);
                                }
                            } else {
                                jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                            }
                        }
                    }
                }
                fragment = first = null;
            }
        }
        return collection;
    }

    function remove(elem, selector, keepData) {
        var node, elems = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;
        for (;
            (node = elems[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                clone = elem.cloneNode(true);
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0;
                    (node = srcElements[i]) != null; ++i) {
                    if (destElements[i]) {
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0;
                        (node = srcElements[i]) != null; i++) {
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            return clone;
        },
        cleanData: function(elems, forceAcceptData) {
            var elem, type, id, data, i = 0,
                internalKey = jQuery.expando,
                cache = jQuery.cache,
                attributes = support.attributes,
                special = jQuery.event.special;
            for (;
                (elem = elems[i]) != null; i++) {
                if (forceAcceptData || acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (cache[id]) {
                            delete cache[id];
                            if (!attributes && typeof elem.removeAttribute !== "undefined") {
                                elem.removeAttribute(internalKey);
                            } else {
                                elem[internalKey] = undefined;
                            }
                            deletedIds.push(id);
                        }
                    }
                }
            }
        }
    });
    jQuery.fn.extend({
        domManip: domManip,
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        empty: function() {
            var elem, i = 0;
            for (;
                (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                }
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    elem.options.length = 0;
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;
                if (value === undefined) {
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                }
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, i = 0,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1;
            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {
        HTML: "block",
        BODY: "block"
    };

    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
            display = jQuery.css(elem[0], "display");
        elem.detach();
        return display;
    }

    function defaultDisplay(nodeName) {
        var doc = document,
            display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    var rmargin = (/^margin/);
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var documentElement = document.documentElement;
    (function() {
        var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
            div = document.createElement("div");
        if (!div.style) {
            return;
        }
        div.style.cssText = "float:left;opacity:.5";
        support.opacity = div.style.opacity === "0.5";
        support.cssFloat = !!div.style.cssFloat;
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container = document.createElement("div");
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        div.innerHTML = "";
        container.appendChild(div);
        support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" || div.style.WebkitBoxSizing === "";
        jQuery.extend(support, {
            reliableHiddenOffsets: function() {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return reliableHiddenOffsetsVal;
            },
            boxSizingReliable: function() {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return boxSizingReliableVal;
            },
            pixelMarginRight: function() {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return pixelMarginRightVal;
            },
            pixelPosition: function() {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return pixelPositionVal;
            },
            reliableMarginRight: function() {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return reliableMarginRightVal;
            },
            reliableMarginLeft: function() {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return reliableMarginLeftVal;
            }
        });

        function computeStyleTests() {
            var contents, divStyle, documentElement = document.documentElement;
            documentElement.appendChild(container);
            div.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
            pixelMarginRightVal = reliableMarginRightVal = true;
            if (window.getComputedStyle) {
                divStyle = window.getComputedStyle(div);
                pixelPositionVal = (divStyle || {}).top !== "1%";
                reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
                boxSizingReliableVal = (divStyle || {
                    width: "4px"
                }).width === "4px";
                div.style.marginRight = "50%";
                pixelMarginRightVal = (divStyle || {
                    marginRight: "4px"
                }).marginRight === "4px";
                contents = div.appendChild(document.createElement("div"));
                contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                contents.style.marginRight = contents.style.width = "0";
                div.style.width = "1px";
                reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents) || {}).marginRight);
                div.removeChild(contents);
            }
            div.style.display = "none";
            reliableHiddenOffsetsVal = div.getClientRects().length === 0;
            if (reliableHiddenOffsetsVal) {
                div.style.display = "";
                div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                div.childNodes[0].style.borderCollapse = "separate";
                contents = div.getElementsByTagName("td");
                contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
                if (reliableHiddenOffsetsVal) {
                    contents[0].style.display = "";
                    contents[1].style.display = "none";
                    reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
                }
            }
            documentElement.removeChild(container);
        }
    })();
    var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
    if (window.getComputedStyle) {
        getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = window;
            }
            return view.getComputedStyle(elem);
        };
        curCSS = function(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
            if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }
            if (computed) {
                if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret === undefined ? ret : ret + "";
        };
    } else if (documentElement.currentStyle) {
        getStyles = function(elem) {
            return elem.currentStyle;
        };
        curCSS = function(elem, name, computed) {
            var left, rs, rsLeft, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed[name] : undefined;
            if (ret == null && style && style[name]) {
                ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;
                if (rsLeft) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";
                style.left = left;
                if (rsLeft) {
                    rs.left = rsLeft;
                }
            }
            return ret === undefined ? ret : ret + "" || "auto";
        };
    }

    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (conditionFn()) {
                    delete this.get;
                    return;
                }
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var
        ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/i,
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cssPrefixes = ["Webkit", "O", "Moz", "ms"],
        emptyStyle = document.createElement("div").style;

    function vendorPropName(name) {
        if (name in emptyStyle) {
            return name;
        }
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    }

    function showHide(elements, show) {
        var display, elem, hidden, values = [],
            index = 0,
            length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = jQuery._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);
                if (display && display !== "none" || !hidden) {
                    jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }

    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
            val = 0;
        for (; i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }

    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles(elem),
            isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return (val +
            augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        cssProps: {
            "float": support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name),
                style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    type = "number";
                }
                if (value == null || value !== value) {
                    return;
                }
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    try {
                        style[name] = value;
                    } catch (e) {}
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    if (!support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1;
                if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    style.removeAttribute("filter");
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        return;
                    }
                }
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
        };
    }
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return swap(elem, {
                "display": "inline-block"
            }, curCSS, [elem, "marginRight"]);
        }
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || (jQuery.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left -
                swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left;
                }) : 0)) + "px";
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0,
                    expanded = {},
                    parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {},
                    i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var
        fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function createFxNow() {
        window.setTimeout(function() {
            fxNow = undefined;
        });
        return (fxNow = jQuery.now());
    }

    function genFx(type, includeWidth) {
        var which, attrs = {
                height: type
            },
            i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden(elem),
            dataShow = jQuery._data(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            display = jQuery.css(elem, "display");
            checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            if (!support.shrinkWrapBlocks()) {
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            } else {
                display = undefined;
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = jQuery._data(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function() {
                delete tick.elem;
            }),
            tick = function() {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining;
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function(gotoEnd) {
                    var index = 0,
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    }
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (jQuery.isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
                }
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function(prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            }]
        },
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.match(rnotwhite);
            }
            var prop, index = 0,
                length = props.length;
            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || jQuery._data(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = jQuery._data(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers,
            i = 0;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        window.clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var a, input = document.createElement("input"),
            div = document.createElement("div"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = div.getElementsByTagName("a")[0];
        input.setAttribute("type", "checkbox");
        div.appendChild(input);
        a = div.getElementsByTagName("a")[0];
        a.style.cssText = "top:1px";
        support.getSetAttribute = div.className !== "t";
        support.style = /top/.test(a.getAttribute("style"));
        support.hrefNormalized = a.getAttribute("href") === "/a";
        support.checkOn = !!input.value;
        support.optSelected = opt.selected;
        support.enctype = !!document.createElement("form").enctype;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
    })();
    var rreturn = /\r/g,
        rspaces = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ? max : one ? index : 0;
                    for (; i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;
                    while (i--) {
                        option = options[i];
                        if (jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                            try {
                                option.selected = optionSet = true;
                            } catch (_) {
                                option.scrollHeight;
                            }
                        } else {
                            option.selected = false;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return options;
                }
            }
        }
    });
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle,
        ruseDefault = /^(?:checked|selected)$/i,
        getSetAttribute = support.getSetAttribute,
        getSetInput = support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0,
                attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            elem[propName] = false;
                        } else {
                            elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
                        }
                    } else {
                        jQuery.attr(elem, name, "");
                    }
                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
            } else {
                elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle;
                if (!isXML) {
                    handle = attrHandle[name];
                    attrHandle[name] = ret;
                    ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                    attrHandle[name] = handle;
                }
                return ret;
            };
        } else {
            attrHandle[name] = function(elem, name, isXML) {
                if (!isXML) {
                    return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
                }
            };
        }
    });
    if (!getSetInput || !getSetAttribute) {
        jQuery.attrHooks.value = {
            set: function(elem, value, name) {
                if (jQuery.nodeName(elem, "input")) {
                    elem.defaultValue = value;
                } else {
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }
    if (!getSetAttribute) {
        nodeHook = {
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    elem.setAttributeNode((ret = elem.ownerDocument.createAttribute(name)));
                }
                ret.value = value += "";
                if (name === "value" || value === elem.getAttribute(name)) {
                    return value;
                }
            }
        };
        attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
            var ret;
            if (!isXML) {
                return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
            }
        };
        jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                if (ret && ret.specified) {
                    return ret.value;
                }
            },
            set: nodeHook.set
        };
        jQuery.attrHooks.contenteditable = {
            set: function(elem, value, name) {
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };
        jQuery.each(["width", "height"], function(i, name) {
            jQuery.attrHooks[name] = {
                set: function(elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            };
        });
    }
    if (!support.style) {
        jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText || undefined;
            },
            set: function(elem, value) {
                return (elem.style.cssText = value + "");
            }
        };
    }
    var rfocusable = /^(?:input|select|textarea|button|object)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {}
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                return (elem[name] = value);
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!support.hrefNormalized) {
        jQuery.each(["href", "src"], function(i, name) {
            jQuery.propHooks[name] = {
                get: function(elem) {
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            },
            set: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    if (!support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }
    var rclass = /[\t\r\n\f]/g;

    function getClass(elem) {
        return jQuery.attr(elem, "class") || "";
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            jQuery.attr(elem, "class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            jQuery.attr(elem, "class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                });
            }
            return this.each(function() {
                var className, i, self, classNames;
                if (type === "string") {
                    i = 0;
                    self = jQuery(this);
                    classNames = value.match(rnotwhite) || [];
                    while ((className = classNames[i++])) {
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {
                        jQuery._data(this, "__className__", className);
                    }
                    jQuery.attr(this, "class", className || value === false ? "" : jQuery._data(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while ((elem = this[i++])) {
                if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    var location = window.location;
    var nonce = jQuery.now();
    var rquery = (/\?/);
    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    jQuery.parseJSON = function(data) {
        if (window.JSON && window.JSON.parse) {
            return window.JSON.parse(data + "");
        }
        var requireNonComma, depth = null,
            str = jQuery.trim(data + "");
        return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
            if (requireNonComma && comma) {
                depth = 0;
            }
            if (depth === 0) {
                return token;
            }
            requireNonComma = open || comma;
            depth += !close - !open;
            return "";
        })) ? (Function("return " + str))() : jQuery.error("Invalid JSON: " + data);
    };
    jQuery.parseXML = function(data) {
        var xml, tmp;
        if (!data || typeof data !== "string") {
            return null;
        }
        try {
            if (window.DOMParser) {
                tmp = new window.DOMParser();
                xml = tmp.parseFromString(data, "text/xml");
            } else {
                xml = new window.ActiveXObject("Microsoft.XMLDOM");
                xml.async = "false";
                xml.loadXML(data);
            }
        } catch (e) {
            xml = undefined;
        }
        if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var
        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        prefilters = {},
        transports = {},
        allTypes = "*/".concat("*"),
        ajaxLocation = location.href,
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while ((dataType = dataTypes[i++])) {
                    if (dataType.charAt(0) === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = (structure === transports);

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }

    function ajaxExtend(target, src) {
        var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }

    function ajaxHandleResponses(s, jqXHR, responses) {
        var firstDataType, ct, finalDataType, type, contents = s.contents,
            dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {},
            dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var
                parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                callbackContext = s.context || s,
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
                statusCode = s.statusCode || {},
                requestHeaders = {},
                requestHeadersNames = {},
                state = 0,
                strAbort = "canceled",
                jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    },
                    getAllResponseHeaders: function() {
                        return state === 2 ? responseHeadersString : null;
                    },
                    setRequestHeader: function(name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },
                    overrideMimeType: function(type) {
                        if (!state) {
                            s.mimeType = type;
                        }
                        return this;
                    },
                    statusCode: function(map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]];
                                }
                            } else {
                                jqXHR.always(map[jqXHR.status]);
                            }
                        }
                        return this;
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] +
                (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                }
                if (state === 2) {
                    return jqXHR;
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }

            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                }
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this),
                    contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });

    function getDisplay(elem) {
        return elem.style && elem.style.display || jQuery.css(elem, "display");
    }

    function filterHidden(elem) {
        if (!jQuery.contains(elem.ownerDocument || document, elem)) {
            return true;
        }
        while (elem && elem.nodeType === 1) {
            if (getDisplay(elem) === "none" || elem.type === "hidden") {
                return true;
            }
            elem = elem.parentNode;
        }
        return false;
    }
    jQuery.expr.filters.hidden = function(elem) {
        return support.reliableHiddenOffsets() ? (elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length) : filterHidden(elem);
    };
    jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem);
    };
    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.param = function(a, traditional) {
        var prefix, s = [],
            add = function(key, value) {
                value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ? function() {
        if (this.isLocal) {
            return createActiveXHR();
        }
        if (document.documentMode > 8) {
            return createStandardXHR();
        }
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
    } : createStandardXHR;
    var xhrId = 0,
        xhrCallbacks = {},
        xhrSupported = jQuery.ajaxSettings.xhr();
    if (window.attachEvent) {
        window.attachEvent("onunload", function() {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key](undefined, true);
            }
        });
    }
    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    xhrSupported = support.ajax = !!xhrSupported;
    if (xhrSupported) {
        jQuery.ajaxTransport(function(options) {
            if (!options.crossDomain || support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr(),
                            id = ++xhrId;
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i];
                            }
                        }
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        for (i in headers) {
                            if (headers[i] !== undefined) {
                                xhr.setRequestHeader(i, headers[i] + "");
                            }
                        }
                        xhr.send((options.hasContent && options.data) || null);
                        callback = function(_, isAbort) {
                            var status, statusText, responses;
                            if (callback && (isAbort || xhr.readyState === 4)) {
                                delete xhrCallbacks[id];
                                callback = undefined;
                                xhr.onreadystatechange = jQuery.noop;
                                if (isAbort) {
                                    if (xhr.readyState !== 4) {
                                        xhr.abort();
                                    }
                                } else {
                                    responses = {};
                                    status = xhr.status;
                                    if (typeof xhr.responseText === "string") {
                                        responses.text = xhr.responseText;
                                    }
                                    try {
                                        statusText = xhr.statusText;
                                    } catch (e) {
                                        statusText = "";
                                    }
                                    if (!status && options.isLocal && !options.crossDomain) {
                                        status = responses.text ? 200 : 404;
                                    } else if (status === 1223) {
                                        status = 204;
                                    }
                                }
                            }
                            if (responses) {
                                complete(status, statusText, responses, xhr.getAllResponseHeaders());
                            }
                        };
                        if (!options.async) {
                            callback();
                        } else if (xhr.readyState === 4) {
                            window.setTimeout(callback);
                        } else {
                            xhr.onreadystatechange = xhrCallbacks[id] = callback;
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }

    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    script = document.createElement("script");
                    script.async = true;
                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }
                    script.src = s.url;
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (script.parentNode) {
                                script.parentNode.removeChild(script);
                            }
                            script = null;
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };
                    head.insertBefore(script, head.firstChild);
                },
                abort: function() {
                    if (script) {
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName);
                } else {
                    window[callbackName] = overwritten;
                }
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data),
            scripts = !keepScripts && [];
        if (parsed) {
            return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this,
            off = url.indexOf(" ");
        if (off > -1) {
            selector = jQuery.trim(url.slice(off, url.length));
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
            });
        }
        return this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };

    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {};
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, box = {
                    top: 0,
                    left: 0
                },
                elem = this[0],
                doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            if (typeof elem.getBoundingClientRect !== "undefined") {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, parentOffset = {
                    top: 0,
                    left: 0
                },
                elem = this[0];
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || documentElement;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? (prop in win) ? win[prop] : win.document.documentElement[method] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var
        _jQuery = window.jQuery,
        _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
}));;
(function($) {
    $.fn.unveil = function(threshold, callback) {
        var $w = $(window),
            th = threshold || 0,
            retina = window.devicePixelRatio > 1,
            attrib = retina ? "data-src-retina" : "data-src",
            images = this,
            loaded;
        this.one("unveil", function() {
            var source = this.getAttribute(attrib);
            source = source || this.getAttribute("data-src");
            if (source) {
                this.setAttribute("src", source);
                if (typeof callback === "function") callback.call(this);
            }
        });

        function unveil() {
            var inview = images.filter(function() {
                var $e = $(this);
                if ($e.is(":hidden")) return;
                var wt = $w.scrollTop(),
                    wb = wt + $w.height(),
                    et = $e.offset().top,
                    eb = et + $e.height();
                return eb >= wt - th && et <= wb + th;
            });
            loaded = inview.trigger("unveil");
            images = images.not(loaded);
        }
        $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);
        unveil();
        return this;
    };
})(window.jQuery || window.Zepto);
var defineResolutionVariables = function() {
    var width = jQuery(window).width();
    var sizes = [280, 320, 480, 600, 768, 992];
    for (var i in sizes) {
        var size = String(sizes[i]);
        window['min' + size] = !!(width >= size);
        window['max' + size] = !!(width < size);
    }
};
var getOrientation = function() {
    if (typeof window.orientation != 'undefined') {
        if (window.orientation == 90 || window.orientation == 270) {
            return 'landscape';
        } else {
            return 'portrait';
        }
    } else {
        return '';
    }
};
defineResolutionVariables();
var NU = NU || {};
NU.helpers = NU.helpers || {};

function whenAvailable(name, callback) {
    var interval = 10;
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            window.setTimeout(arguments.callee, interval);
        }
    }, interval);
}
NU.helpers.retry = function(callback, delay) {
    if (typeof delay !== 'number') {
        delay = 100;
    }
    try {
        callback();
    } catch (e) {
        window.setTimeout(function() {
            NU.helpers.retry(callback, delay);
        }, delay);
    }
};
NU.helpers.isMobileBrowser = function() {
    if (navigator && navigator.userAgent) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)) {
            return true;
        }
    }
    return false;
};
var ConsentUtility = (function() {
    var OPTIN_TYPES = ['ads', 'stats', 'interests', 'social'];
    ConsentUtility = function() {
        var self = this,
            _consent_fired = false;
        self.post_render_callbacks = [];
        self.post_consent_given_callbacks = [];
        self.consent_given = function(f) {
            if (typeof f === 'function') {
                if (_consent_fired && !!self.has_all_optins()[0] === true) {
                    f();
                } else {
                    self.post_consent_given_callbacks.push(f);
                }
            }
        };
        self.post_consent_denied_callbacks = [];
        self.consent_denied = function(f) {
            if (typeof f === 'function') {
                if (_consent_fired && !!self.has_all_optins()[0] === false) {
                    f();
                } else {
                    self.post_consent_denied_callbacks.push(f);
                }
            }
        };
        self.post_consent_callbacks = [];
        self.consent_ready = function(f) {
            if (typeof f === 'function') {
                if (_consent_fired) {
                    f();
                } else {
                    self.post_consent_callbacks.push(f);
                }
            }
        };
        self.has_optin = function(optin_type) {
            try {
                var optin_active = Consent.has_optin(optin_type);
                return optin_active;
            } catch (err) {
                return !(typeof app_stage != 'undefined' && app_stage === 'production');
            }
        };
        self.has_all_optins = function() {
            var optin_map = {},
                all_consents_given = true;
            for (var i = 0, max = OPTIN_TYPES.length; i < max; i++) {
                optin_map[OPTIN_TYPES[i]] = self.has_optin(OPTIN_TYPES[i]);
                all_consents_given = all_consents_given && self.has_optin(OPTIN_TYPES[i]);
            }
            return [all_consents_given, optin_map];
        };
        self.get_dialog_url = function() {
            try {
                return Consent.get_preferences_url();
            } catch (err) {
                if (typeof Consent.show_settings == 'function') {
                    return 'javascript:Consent.show_settings();';
                }
                return false;
            }
        };
        self.redirect_to_dialog_url = function() {
            if (typeof Consent.get_preferences_url == 'function') {
                location.href = Consent.get_preferences_url();
            } else if (typeof Consent.show_settings == 'function') {
                Consent.show_settings();
            }
        };
        self.apply_consent = function(root_node) {
            self.set_body_classes();
            self.render(root_node);
        };
        self.add_post_render_callback = function(callback) {
            self.post_render_callbacks.push(callback);
        };
        self.set_body_classes = function() {
            var all_optins = self.has_all_optins(),
                optin_map = all_optins[1],
                classnames = [];
            for (var i = 0, max = OPTIN_TYPES.length; i < max; i++) {
                classnames.push((optin_map[OPTIN_TYPES[i]] ? 'is-optin-' : 'is-optout-') + OPTIN_TYPES[i]);
            }
            if (all_optins[0]) {
                classnames.push('is-all-optins');
            }
            document.body.className = document.body.className + ' ' + classnames.join(' ');
        };
        self.render = function(root_node) {
            NU.log('Consent render blocks');
            var optin_map = self.has_all_optins(),
                has_all_optins = optin_map[0],
                callbacks = self.post_render_callbacks,
                reveal_consent_blocks = function(selector) {
                    selector = selector || "*";
                    root_node = root_node || 'html';
                    $(root_node).find('.consent_required').filter(selector).each(function() {
                        var element = $(this),
                            content;
                        try {
                            content = decodeURIComponent(atob(element.data('encoded_content')));
                            element.replaceWith(content);
                        } catch (e) {
                            element.remove();
                        }
                        element.closest('.block').trigger('consent_content_rendered');
                        if (callbacks) {
                            for (var i = 0, m = callbacks.length; i < m; i++) {
                                if (typeof callbacks[i] == 'function') {
                                    callbacks[i](element);
                                }
                            }
                        }
                    });
                };
            optin_map = optin_map[1];
            if (has_all_optins) {
                reveal_consent_blocks();
            } else {
                for (var i = 0, m = optin_map.length; i < m; i++) {
                    reveal_consent_blocks('only_' + optin_map[i]);
                }
            }
        };
        $(document).ready(function() {
            self.apply_consent();
            var callbacks = [],
                has_all_optins = self.has_all_optins()[0];
            if (has_all_optins) {
                callbacks = callbacks.concat(self.post_consent_given_callbacks, self.post_consent_callbacks);
                NU.log('Executing ' + callbacks.length + ' consent callbacks: consent given.');
            } else {
                callbacks = callbacks.concat(self.post_consent_denied_callbacks, self.post_consent_callbacks);
                NU.log('Executing ' + callbacks.length + ' consent callbacks: consent (partially) denied.');
            }
            for (var i = 0, m = callbacks.length; i < m; i++) {
                if (typeof callbacks[i] == 'function') {
                    callbacks[i]();
                }
            }
            _consent_fired = true;
        });
    };
    return new ConsentUtility();
})();
(function() {
    var supports = (function() {
        var supports = {};
        var html;
        var work = this.document.createElement('div');
        html = "<P><I></P></I>";
        work.innerHTML = html;
        supports.tagSoup = work.innerHTML !== html;
        work.innerHTML = "<P><i><P></P></i></P>";
        supports.selfClose = work.childNodes.length === 2;
        return supports;
    })();
    var startTag = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
    var endTag = /^<\/([\-A-Za-z0-9_]+)[^>]*>/;
    var attr = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
    var fillAttr = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
    var DEBUG = false;

    function htmlParser(stream, options) {
        stream = stream || '';
        options = options || {};
        for (var key in supports) {
            if (supports.hasOwnProperty(key)) {
                if (options.autoFix) {
                    options['fix_' + key] = true;
                }
                options.fix = options.fix || options['fix_' + key];
            }
        }
        var stack = [];
        var append = function(str) {
            stream += str;
        };
        var prepend = function(str) {
            stream = str + stream;
        };
        var detect = {
            comment: /^<!--/,
            endTag: /^<\//,
            atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s>]/i,
            startTag: /^</,
            chars: /^[^<]/
        };
        var reader = {
            comment: function() {
                var index = stream.indexOf("-->");
                if (index >= 0) {
                    return {
                        content: stream.substr(4, index),
                        length: index + 3
                    };
                }
            },
            endTag: function() {
                var match = stream.match(endTag);
                if (match) {
                    return {
                        tagName: match[1],
                        length: match[0].length
                    };
                }
            },
            atomicTag: function() {
                var start = reader.startTag();
                if (start) {
                    var rest = stream.slice(start.length);
                    if (rest.match(new RegExp("<\/\\s*" + start.tagName + "\\s*>", "i"))) {
                        var match = rest.match(new RegExp("([\\s\\S]*?)<\/\\s*" + start.tagName + "\\s*>", "i"));
                        if (match) {
                            return {
                                tagName: start.tagName,
                                attrs: start.attrs,
                                content: match[1],
                                length: match[0].length + start.length
                            };
                        }
                    }
                }
            },
            startTag: function() {
                var match = stream.match(startTag);
                if (match) {
                    var attrs = {};
                    match[2].replace(attr, function(match, name) {
                        var value = arguments[2] || arguments[3] || arguments[4] || fillAttr.test(name) && name || null;
                        attrs[name] = value;
                    });
                    return {
                        tagName: match[1],
                        attrs: attrs,
                        unary: !!match[3],
                        length: match[0].length
                    };
                }
            },
            chars: function() {
                var index = stream.indexOf("<");
                return {
                    length: index >= 0 ? index : stream.length
                };
            }
        };

        var readToken = function() {
            for (var type in detect) {
                if (detect[type].test(stream)) {
                    if (DEBUG) {
                        console.log('suspected ' + type);
                    }
                    var token = reader[type]();
                    if (token) {
                        if (DEBUG) {
                            console.log('parsed ' + type, token);
                        }
                        token.type = token.type || type;
                        token.text = stream.substr(0, token.length);
                        stream = stream.slice(token.length);
                        return token;
                    }
                    return null;
                }
            }
        };
        var readTokens = function(handlers) {
            var tok;
            while (tok = readToken()) {
                if (handlers[tok.type] && handlers[tok.type](tok) === false) {
                    return;
                }
            }
        };
        var clear = function() {
            var rest = stream;
            stream = '';
            return rest;
        };
        var rest = function() {
            return stream;
        };
        if (options.fix) {
            (function() {
                var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;
                var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                var stack = [];
                stack.last = function() {
                    return this[this.length - 1];
                };
                stack.lastTagNameEq = function(tagName) {
                    var last = this.last();
                    return last && last.tagName && last.tagName.toUpperCase() === tagName.toUpperCase();
                };
                stack.containsTagName = function(tagName) {
                    for (var i = 0, tok; tok = this[i]; i++) {
                        if (tok.tagName === tagName) {
                            return true;
                        }
                    }
                    return false;
                };
                var correct = function(tok) {
                    if (tok && tok.type === 'startTag') {
                        tok.unary = EMPTY.test(tok.tagName) || tok.unary;
                    }
                    return tok;
                };
                var readTokenImpl = readToken;
                var peekToken = function() {
                    var tmp = stream;
                    var tok = correct(readTokenImpl());
                    stream = tmp;
                    return tok;
                };
                var closeLast = function() {
                    var tok = stack.pop();
                    prepend('</' + tok.tagName + '>');
                };
                var handlers = {
                    startTag: function(tok) {
                        var tagName = tok.tagName;
                        if (tagName.toUpperCase() === 'TR' && stack.lastTagNameEq('TABLE')) {
                            prepend('<TBODY>');
                            prepareNextToken();
                        } else if (options.fix_selfClose && CLOSESELF.test(tagName) && stack.containsTagName(tagName)) {
                            if (stack.lastTagNameEq(tagName)) {
                                closeLast();
                            } else {
                                prepend('</' + tok.tagName + '>');
                                prepareNextToken();
                            }
                        } else if (!tok.unary) {
                            stack.push(tok);
                        }
                    },
                    endTag: function(tok) {
                        var last = stack.last();
                        if (last) {
                            if (options.fix_tagSoup && !stack.lastTagNameEq(tok.tagName)) {
                                closeLast();
                            } else {
                                stack.pop();
                            }
                        } else if (options.fix_tagSoup) {
                            skipToken();
                        }
                    }
                };
                var skipToken = function() {
                    readTokenImpl();
                    prepareNextToken();
                };
                var prepareNextToken = function() {
                    var tok = peekToken();
                    if (tok && handlers[tok.type]) {
                        handlers[tok.type](tok);
                    }
                };
                readToken = function() {
                    prepareNextToken();
                    return correct(readTokenImpl());
                };
            })();
        }
        return {
            append: append,
            readToken: readToken,
            readTokens: readTokens,
            clear: clear,
            rest: rest,
            stack: stack
        };
    }
    htmlParser.supports = supports;
    htmlParser.tokenToString = function(tok) {
        var handler = {
            comment: function(tok) {
                return '<--' + tok.content + '-->';
            },
            endTag: function(tok) {
                return '</' + tok.tagName + '>';
            },
            atomicTag: function(tok) {
                console.log(tok);
                return handler.startTag(tok) +
                    tok.content +
                    handler.endTag(tok);
            },
            startTag: function(tok) {
                var str = '<' + tok.tagName;
                for (var key in tok.attrs) {
                    var val = tok.attrs[key];
                    str += ' ' + key + '="' + (val ? val.replace(/(^|[^\\])"/g, '$1\\\"') : '') + '"';
                }
                return str + (tok.unary ? '/>' : '>');
            },
            chars: function(tok) {
                return tok.text;
            }
        };
        return handler[tok.type](tok);
    };
    htmlParser.escapeAttributes = function(attrs) {
        var escapedAttrs = {};
        for (var name in attrs) {
            var value = attrs[name];
            escapedAttrs[name] = value && value.replace(/(^|[^\\])"/g, '$1\\\"');
        }
        return escapedAttrs;
    };
    for (var key in supports) {
        htmlParser.browserHasFlaw = htmlParser.browserHasFlaw || (!supports[key]) && key;
    }
    this.htmlParser = htmlParser;
})();
(function() {
    var global = this;
    if (global.postscribe) {
        return;
    }
    var DEBUG = true;
    var DEBUG_CHUNK = false;
    var slice = Array.prototype.slice;

    function doNothing() {}

    function isFunction(x) {
        return "function" === typeof x;
    }

    function each(arr, fn, _this) {
        var i, len = (arr && arr.length) || 0;
        for (i = 0; i < len; i++) {
            fn.call(_this, arr[i], i);
        }
    }

    function eachKey(obj, fn, _this) {
        var key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                fn.call(_this, key, obj[key]);
            }
        }
    }

    function set(obj, props) {
        eachKey(props, function(key, value) {
            obj[key] = value;
        });
        return obj;
    }

    function defaults(options, _defaults) {
        options = options || {};
        eachKey(_defaults, function(key, val) {
            if (options[key] == null) {
                options[key] = val;
            }
        });
        return options;
    }

    function toArray(obj) {
        try {
            return slice.call(obj);
        } catch (e) {
            var ret = [];
            each(obj, function(val) {
                ret.push(val);
            });
            return ret;
        }
    }

    function isScript(tok) {
        return (/^script$/i).test(tok.tagName);
    }
    var WriteStream = (function() {
        var BASEATTR = 'data-ps-';

        function data(el, name, value) {
            var attr = BASEATTR + name;
            if (arguments.length === 2) {
                var val = el.getAttribute(attr);
                return val == null ? val : String(val);
            } else if (value != null && value !== '') {
                el.setAttribute(attr, value);
            } else {
                el.removeAttribute(attr);
            }
        }

        function WriteStream(root, options) {
            var doc = root.ownerDocument;
            set(this, {
                root: root,
                options: options,
                win: doc.defaultView || doc.parentWindow,
                doc: doc,
                parser: global.htmlParser('', {
                    autoFix: true
                }),
                actuals: [root],
                proxyHistory: '',
                proxyRoot: doc.createElement(root.nodeName),
                scriptStack: [],
                writeQueue: []
            });
            data(this.proxyRoot, 'proxyof', 0);
        }
        WriteStream.prototype.write = function() {
            [].push.apply(this.writeQueue, arguments);
            var arg;
            while (!this.deferredRemote && this.writeQueue.length) {
                arg = this.writeQueue.shift();
                if (isFunction(arg)) {
                    this.callFunction(arg);
                } else {
                    this.writeImpl(arg);
                }
            }
        };
        WriteStream.prototype.callFunction = function(fn) {
            var tok = {
                type: "function",
                value: fn.name || fn.toString()
            };
            this.onScriptStart(tok);
            fn.call(this.win, this.doc);
            this.onScriptDone(tok);
        };
        WriteStream.prototype.writeImpl = function(html) {
            this.parser.append(html);
            var tok, tokens = [];
            while ((tok = this.parser.readToken()) && !isScript(tok)) {
                tokens.push(tok);
            }
            this.writeStaticTokens(tokens);
            if (tok) {
                this.handleScriptToken(tok);
            }
        };
        WriteStream.prototype.writeStaticTokens = function(tokens) {
            var chunk = this.buildChunk(tokens);
            if (!chunk.actual) {
                return;
            }
            chunk.html = this.proxyHistory + chunk.actual;
            this.proxyHistory += chunk.proxy;
            this.proxyRoot.innerHTML = chunk.html;
            if (DEBUG_CHUNK) {
                chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
            }
            this.walkChunk();
            if (DEBUG_CHUNK) {
                chunk.actualInnerHTML = this.root.innerHTML;
            }
            return chunk;
        };
        WriteStream.prototype.buildChunk = function(tokens) {
            var nextId = this.actuals.length,
                raw = [],
                actual = [],
                proxy = [];
            each(tokens, function(tok) {
                raw.push(tok.text);
                if (tok.attrs) {
                    if (!(/^noscript$/i).test(tok.tagName)) {
                        var id = nextId++;
                        actual.push(tok.text.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1'));
                        if (tok.attrs.id !== "ps-script") {
                            proxy.push(tok.type === 'atomicTag' ? '' : '<' + tok.tagName + ' ' + BASEATTR + 'proxyof=' + id + (tok.unary ? '/>' : '>'));
                        }
                    }
                } else {
                    actual.push(tok.text);
                    proxy.push(tok.type === 'endTag' ? tok.text : '');
                }
            });
            return {
                tokens: tokens,
                raw: raw.join(''),
                actual: actual.join(''),
                proxy: proxy.join('')
            };
        };
        WriteStream.prototype.walkChunk = function() {
            var node, stack = [this.proxyRoot];
            while ((node = stack.shift()) != null) {
                var isElement = node.nodeType === 1;
                var isProxy = isElement && data(node, 'proxyof');
                if (!isProxy) {
                    if (isElement) {
                        this.actuals[data(node, 'id')] = node;
                        data(node, 'id', null);
                    }
                    var parentIsProxyOf = node.parentNode && data(node.parentNode, 'proxyof');
                    if (parentIsProxyOf) {
                        this.actuals[parentIsProxyOf].appendChild(node);
                    }
                }
                stack.unshift.apply(stack, toArray(node.childNodes));
            }
        };
        WriteStream.prototype.handleScriptToken = function(tok) {
            var remainder = this.parser.clear();
            if (remainder) {
                this.writeQueue.unshift(remainder);
            }
            tok.src = tok.attrs.src || tok.attrs.SRC;
            if (tok.src && this.scriptStack.length) {
                this.deferredRemote = tok;
            } else {
                this.onScriptStart(tok);
            }
            var _this = this;
            this.writeScriptToken(tok, function() {
                _this.onScriptDone(tok);
            });
        };
        WriteStream.prototype.onScriptStart = function(tok) {
            tok.outerWrites = this.writeQueue;
            this.writeQueue = [];
            this.scriptStack.unshift(tok);
        };
        WriteStream.prototype.onScriptDone = function(tok) {
            if (tok !== this.scriptStack[0]) {
                this.options.error({
                    message: "Bad script nesting or script finished twice"
                });
                return;
            }
            this.scriptStack.shift();
            this.write.apply(this, tok.outerWrites);
            if (!this.scriptStack.length && this.deferredRemote) {
                this.onScriptStart(this.deferredRemote);
                this.deferredRemote = null;
            }
        };
        WriteStream.prototype.writeScriptToken = function(tok, done) {
            var el = this.buildScript(tok);
            if (tok.src) {
                el.src = tok.src;
                this.scriptLoadHandler(el, done);
            }
            try {
                this.insertScript(el);
                if (!tok.src) {
                    done();
                }
            } catch (e) {
                this.options.error(e);
                done();
            }
        };
        WriteStream.prototype.buildScript = function(tok) {
            var el = this.doc.createElement(tok.tagName);
            eachKey(tok.attrs, function(name, value) {
                el.setAttribute(name, value);
            });
            if (tok.content) {
                el.text = tok.content;
            }
            return el;
        };
        WriteStream.prototype.insertScript = function(el) {
            this.writeImpl('<span id="ps-script"/>');
            var cursor = this.doc.getElementById("ps-script");
            cursor.parentNode.replaceChild(el, cursor);
        };
        WriteStream.prototype.scriptLoadHandler = function(el, done) {
            function cleanup() {
                el = el.onload = el.onreadystatechange = el.onerror = null;
                done();
            }
            var error = this.options.error;
            set(el, {
                onload: function() {
                    cleanup();
                },
                onreadystatechange: function() {
                    if (/^(loaded|complete)$/.test(el.readyState)) {
                        cleanup();
                    }
                },
                onerror: function() {
                    error({
                        message: 'remote script failed ' + el.src
                    });
                    cleanup();
                }
            });
        };
        return WriteStream;
    }());
    var postscribe = (function() {
        var nextId = 0;
        var queue = [];
        var active = null;

        function nextStream() {
            var args = queue.shift();
            if (args) {
                args.stream = runStream.apply(null, args);
            }
        }

        function runStream(el, html, options) {
            active = new WriteStream(el, options);
            active.id = nextId++;
            active.name = options.name || active.id;
            postscribe.streams[active.name] = active;
            var doc = el.ownerDocument;
            var stash = {
                write: doc.write,
                writeln: doc.writeln
            };

            function write(str) {
                str = options.beforeWrite(str);
                active.write(str);
                options.afterWrite(str);
            }
            set(doc, {
                write: write,
                writeln: function(str) {
                    write(str + '\n');
                }
            });
            var oldOnError = active.win.onerror || doNothing;
            active.win.onerror = function(msg, url, line) {
                options.error({
                    msg: msg + ' - ' + url + ':' + line
                });
                oldOnError.apply(active.win, arguments);
            };
            active.write(html, function streamDone() {
                set(doc, stash);
                active.win.onerror = oldOnError;
                options.done();
                active = null;
                nextStream();
            });
            return active;
        }

        function postscribe(el, html, options) {
            if (isFunction(options)) {
                options = {
                    done: options
                };
            }
            options = defaults(options, {
                done: doNothing,
                error: function(e) {
                    throw e;
                },
                beforeWrite: function(str) {
                    return str;
                },
                afterWrite: doNothing
            });
            el = (/^#/).test(el) ? global.document.getElementById(el.substr(1)) : el.jquery ? el[0] : el;
            var args = [el, html, options];
            el.postscribe = {
                cancel: function() {
                    if (args.stream) {
                        args.stream.abort();
                    } else {
                        args[1] = doNothing;
                    }
                }
            };
            queue.push(args);
            if (!active) {
                nextStream();
            }
            return el.postscribe;
        }
        return set(postscribe, {
            streams: {},
            queue: queue,
            WriteStream: WriteStream
        });
    }());
    global.postscribe = postscribe;
}());
if (typeof console == "undefined") {
    var console = {
        log: function(message) {},
        error: function(message) {}
    };
}
if (typeof window.hasOwnProperty == "undefined") {
    window.hasOwnProperty = function(obj) {
        return (this[obj]) ? true : false;
    }
}
var _gaq = _gaq || [],
    NU = NU || {},
    stage_debug = false,
    app_stage = app_stage || "unknown";
switch (app_stage) {
    case 'styleguide':
        stage_debug = true;
        break;
    case 'dev':
        stage_debug = true;
        break;
    case 'production':
    default:
        stage_debug = false;
        break;
}
NU.namespace = function(str, root) {
    var chunks = str.split('.');
    if (!root)
        root = window;
    var current = root;
    for (var i = 0; i < chunks.length; i++) {
        if (!current.hasOwnProperty(chunks[i]))
            current[chunks[i]] = {};
        current = current[chunks[i]];
    }
    return current;
};
NU.logHistory = [];
NU._log = function(type, arguments) {
    var now = new Date();
    var timestamp = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var args = Array.prototype.slice.call(arguments);
    args.unshift(timestamp.toString());
    if (stage_debug && window.console) {
        if (type == 'error') {
            console.error.apply(console, args);
        } else {
            try {
                console[type].call(console, args);
            } catch (e) {
                try {
                    console[type](console, args);
                } catch (f) {}
            }
        }
    }
    args.unshift(type);
    this.logHistory.push(args);
};
NU.log = function() {
    NU._log('log', arguments);
};
NU.error = function() {
    NU._log('error', arguments);
};
NU.replayHistory = function() {
    if (window.console) {
        var log = this.logHistory.splice(0, this.logHistory.length);
        for (var i = 0, m = log.length; i < m; i++) {
            var type = log[i].shift();
            if (type == 'error') {
                console.error.apply(console, log[i]);
            } else {
                try {
                    console[type].call(console, log[i]);
                } catch (e) {
                    try {
                        console[type](console, log[i]);
                    } catch (f) {}
                }
            }
        }
        return m;
    }
};
var NU = NU || {};
$.fn.extend({
    stickyItem: function(scrollToStick, topPositionToStick) {
        if ($("html").hasClass('lt-ie9')) {
            return;
        }
        var el = $(this),
            elSelector = this.selector,
            defaultTopPositionToStick = 25,
            refreshTimeout = 25,
            parentContainer = $('#container'),
            elOriginalTopProp = el.css("top"),
            elOriginalPositionProp = el.css("position"),
            _calculateRequiredMargin = function() {
                var elMarginTop = parseInt(el.css("margin-top").replace('px', ''), 10) || 0,
                    deltaMargin = scrollToStick - el.offset().top,
                    parentElementHeight = parentContainer.outerHeight(),
                    parentElementTopOfset = parentContainer.offset().top,
                    maxDeltaMargin = parentElementHeight + parentElementTopOfset - el.offset().top - el.height();
                if (deltaMargin > maxDeltaMargin) {
                    deltaMargin = maxDeltaMargin;
                }
                if (deltaMargin > 0) {
                    return elMarginTop + deltaMargin;
                } else {
                    return elMarginTop;
                };
            },
            _processScroll = function(minScroll, margin) {
                minScroll = minScroll + $('#header').height();
                var maxScroll = parentContainer.outerHeight() + parentContainer.offset().top - el.height() - topPositionToStick;
                if ($(window).scrollTop() - $("body").offset().top < minScroll) {
                    el.css('position', elOriginalPositionProp);
                    el.css('top', elOriginalTopProp);
                    el.css('margin-top', margin);
                } else if ($(window).scrollTop() < maxScroll) {
                    el.css('position', 'fixed');
                    el.css('top', topPositionToStick);
                    el.css('margin-top', 0);
                } else {
                    el.css('position', 'absolute');
                    el.css('top', maxScroll + topPositionToStick - $("body").offset().top);
                    el.css('margin-top', 0);
                }
            };
        if (el.hasClass('sticky-item')) {
            return;
        }
        el.addClass('sticky-item');
        if (typeof scrollToStick == 'undefined') {
            scrollToStick = el.offset().top;
        }
        if (typeof topPositionToStick == 'undefined') {
            topPositionToStick = defaultTopPositionToStick;
        };
        var elRequiredMargin = _calculateRequiredMargin();
        el.css({
            'margin-top': elRequiredMargin
        });
        var minStickySwitchScroll = el.offset().top - topPositionToStick - $('#header').height();
        var interval = setInterval(function() {
            _processScroll(minStickySwitchScroll, elRequiredMargin);
        }, refreshTimeout);
        NU.StickyItemsIntervals = NU.StickyItemsIntervals || {};
        NU.StickyItemsIntervals[elSelector] = interval;
        return el;
    },
    undoStickyItem: function() {
        var el = $(this),
            elSelector = this.selector;
        if (el.hasClass('sticky-item')) {
            NU.StickyItemsIntervals = NU.StickyItemsIntervals || {};
            if (elSelector in NU.StickyItemsIntervals) {
                var interval = NU.StickyItemsIntervals[elSelector];
                clearInterval(interval);
                delete NU.StickyItemsIntervals[elSelector];
            };
            el.removeAttr('style');
            el.removeClass('sticky-item');
        };
        return el;
    }
});
NU.StickySkyScraper = function(scrollToStick, topPositionToStick) {
    var skyScraperSelector = '.column.first .block.menu + .block.tealium';
    if ($(skyScraperSelector).length > 0) {
        $(skyScraperSelector).undoStickyItem();
        $(skyScraperSelector).stickyItem(scrollToStick, topPositionToStick);
    }
};
NU.UndoStickySkyScraper = function() {
    var skyScraperSelector = '.column.first .block.menu + .block.tealium';
    if ($(skyScraperSelector).length > 0) {
        $(skyScraperSelector).undoStickyItem();
    }
};
NU.VerticalShiftSkyScraper = function(verticalShift) {
    var skyScraperSelector = '.column.first .block.menu + .block.tealium';
    if ($(skyScraperSelector).length > 0) {
        var initialTopOffset = $(skyScraperSelector).offset().top,
            maxTopOffset = $('#container').outerHeight() + $('#container').offset().top - $(skyScraperSelector).height(),
            isScraperSticky = $(skyScraperSelector).hasClass('sticky-item');
        if (typeof verticalShift == 'undefined') {
            verticalShift = initialTopOffset;
        };
        if (isScraperSticky) {
            $(skyScraperSelector).undoStickyItem();
        }
        if (initialTopOffset < verticalShift) {
            $(skyScraperSelector).offset({
                top: Math.min(maxTopOffset, verticalShift)
            });
        }
        if (isScraperSticky) {
            $(skyScraperSelector).stickyItem();
        }
    }
};
$(document).ready(function() {
    var activateStickySkyscraper = NU.ActivateStickySkyscraper;
    if (activateStickySkyscraper) {
        NU.StickySkyScraper();
    }
});
(function() {
    var projectId = 4751656579;
    var protocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = protocol + 'cdn.optimizely.com/js/' +
        projectId + '.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scriptTag, s);
})();

function optimizelyTimeout() {
    window.optimizely = window.optimizely || [];
    if (!window.optimizely.data) {
        window.optimizely.push("timeout");
    }
}
setTimeout(optimizelyTimeout, 1000);
var _vwo_code = (function() {
    var account_id = 323452,
        settings_tolerance = 2000,
        library_tolerance = 2500,
        use_existing_jquery = false,
        f = false,
        d = document;
    return {
        use_existing_jquery: function() {
            return use_existing_jquery;
        },
        library_tolerance: function() {
            return library_tolerance;
        },
        finish: function() {
            if (!f) {
                f = true;
                var a = d.getElementById('_vis_opt_path_hides');
                if (a) a.parentNode.removeChild(a);
            }
        },
        finished: function() {
            return f;
        },
        load: function(a) {
            var b = d.createElement('script');
            b.src = a;
            b.type = 'text/javascript';
            b.innerText;
            b.onerror = function() {
                _vwo_code.finish();
            };
            d.getElementsByTagName('head')[0].appendChild(b);
        },
        init: function() {
            settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
            var a = d.createElement('style'),
                b = 'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
                h = d.getElementsByTagName('head')[0];
            a.setAttribute('id', '_vis_opt_path_hides');
            a.setAttribute('type', 'text/css');
            if (a.styleSheet) a.styleSheet.cssText = b;
            else a.appendChild(d.createTextNode(b));
            h.appendChild(a);
            this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&r=' + Math.random());
            return settings_timer;
        }
    };
}());
_vwo_settings_timer = _vwo_code.init();