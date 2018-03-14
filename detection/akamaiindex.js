! function() {
    var n, t = 333,
        r = "isg",
        e = self,
        i = !!e.addEventListener,
        o = document.getElementsByTagName("head")[0],
        u = navigator.userAgent,
        c = {
            "alicdn.com": 1,
            "aliimg.com": 1,
            "alimama.cn": 1,
            "alimmdn.com": 1,
            "alipay.com": 1,
            "alivecdn.com": 1,
            "aliyun.com": 1,
            "aliyuncs.com": 1,
            "amap.com": 1,
            "autonavi.com": 1,
            "cnzz.com": 1,
            "greencompute.org": 1,
            "linezing.com": 1,
            "mmcdn.cn": 1,
            "mmstat.com": 1,
            "sm.cn": 1,
            "soku.com": 1,
            "tanx.com": 1,
            "taobaocdn.com": 1,
            "tbcache.com": 1,
            "tbcdn.cn": 1,
            "tudou.com": 1,
            "uczzd.cn": 1,
            "umeng.com": 1,
            "wrating.com": 1,
            "xiami.net": 1,
            "xiaoshuo1-sm.com": 1,
            "ykimg.com": 1,
            "youku.com": 1,
            "zimgs.cn": 1
        },
        a = {
            "afptrack.alimama.com": 1,
            "ynuf.aliapp.org": 1,
            "sec.taobao.com": 1,
            "localhost.wwbizsrv.alibaba.com": 1,
            "127.0.0.1": 1,
            "local.alipcsec.com": 1,
            "aldcdn.tmall.com": 1,
            "un.alibaba-inc.com": 1
        };
    ! function(n) {
        function t() {
            return 4294967295 * Math.random() >>> 0
        }

        function r(n) {
            return /native code/.test(n + "")
        }

        function e(n) {
            for (var t = 0, r = 0, e = n.length; r < e; r++) t = (t << 5) - t + n.charCodeAt(r), t >>>= 0;
            return t
        }

        function o(n, t) {
            var r = n.indexOf(t);
            return -1 === r ? n : n.substr(0, r)
        }

        function u(n, t) {
            var r = n.indexOf(t);
            return -1 === r ? n : n.substr(r + t.length)
        }

        function c(n) {
            var t = n.match(s);
            if (!t) return null;
            var r = t[1];
            return l.test(r) && (r = u(r, "@"), r = o(r, ":")), r
        }

        function a(n) {
            for (var t = 0, r = n.length - 1; r >= 0; r--) t = t << 1 | 0 | +n[r];
            return t
        }

        function f(n, t, r, e) {
            i ? n.addEventListener(t, r, e) : n.attachEvent && n.attachEvent("on" + t, function() {
                r(event)
            })
        }
        n.a = t, n.b = r, n.c = e, n.d = Date.now || function() {
            return +new Date
        }, n.e = o, n.f = u;
        var s = /^(?:https?:)?\/{2,}([^\/?#\\]+)/i,
            l = /[@:]/;
        n.g = c, n.h = a, n.i = f
    }(n || (n = {}));
    var f;
    ! function(t) {
        function r(n) {
            C++, B = n.isTrusted == undefined || n.isTrusted, P = n.clientX, z = n.clientY
        }

        function e(n) {
            k++
        }

        function i(n) {
            E++
        }

        function u(n) {
            O++
        }

        function c() {
            var n = screen.availWidth,
                t = window.outerWidth;
            null == t && (t = document.documentElement.clientWidth || document.body.clientWidth), T = n - t < 20
        }

        function a(n) {
            x = !0, L = !0
        }

        function f(n) {
            L = !1
        }

        function s() {
            n.i(document, "mousemove", e, !0), n.i(document, "touchmove", e, !0), n.i(document, "click", r, !0), n.i(document, "keydown", u, !0);
            var t = "onwheel" in o ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
            n.i(document, t, i, {
                capture: !0,
                passive: !0
            }), n.i(window, "focus", a), n.i(window, "blur", f), n.i(window, "resize", c), c(), navigator.getBattery && (R = !0, navigator.getBattery().then(function(n) {
                W = n
            })["catch"](function(n) {})), n.i(window, "deviceorientation", function(n) {
                D = n.gamma
            })
        }

        function l() {
            return k
        }

        function v() {
            return E
        }

        function d() {
            return C
        }

        function m() {
            return O
        }

        function h() {
            return {
                o: P,
                p: z,
                q: B
            }
        }

        function g() {
            var n = document.hidden;
            return null == n && (n = document.mozHidden), !n
        }

        function p() {
            return L
        }

        function w() {
            return x
        }

        function _() {
            return T
        }

        function b() {
            return R
        }

        function y() {
            return !W || W.charging
        }

        function M() {
            return W ? 100 * W.level : 127
        }

        function A() {
            return null != D
        }

        function j() {
            return A() ? D + 90 : 255
        }
        var T, x, W, k = 0,
            C = 0,
            E = 0,
            O = 0,
            P = 0,
            z = 0,
            B = !0,
            L = !0,
            R = !1,
            D = null;
        t.j = s, t.k = l, t.l = v, t.m = d, t.n = m, t.r = h, t.s = g, t.t = p, t.u = w, t.v = _, t.w = b, t.x = y, t.y = M, t.z = A, t.A = j
    }(f || (f = {}));
    var s;
    ! function(t) {
        function r() {
            return "$cdc_asdjflasutopfhvcZLmcfl_" in document || navigator.webdriver
        }

        function c() {
            if (a()) return !1;
            try {
                return !!document.createElement("canvas").getContext("webgl")
            } catch (n) {
                return !0
            }
        }

        function a() {
            return "ontouchstart" in document
        }

        function s() {
            return /zh-cn/i.test(navigator.language || navigator.systemLanguage)
        }

        function l() {
            return -480 === (new Date).getTimezoneOffset()
        }

        function v() {
            return !0
        }

        function d() {
            return f.z()
        }

        function m() {
            return f.w()
        }

        function h() {
            return f.x()
        }

        function g() {
            for (var t = 0; t < 4; t++) y[5 + t] = A[t]();
            return n.h(y)
        }

        function p() {
            for (var n in C)
                if (C.hasOwnProperty(n)) {
                    var t = C[n];
                    if (t()) return +n.substr(1)
                }
            return 0
        }

        function w(n) {
            var t = e.RTCPeerConnection || e.mozRTCPeerConnection || e.webkitRTCPeerConnection;
            if (!t) return void n(0);
            var r = {
                    optional: [{
                        D: !0
                    }]
                },
                i = {
                    iceServers: [{
                        urls: "stun:x"
                    }]
                },
                o = new t(i, r);
            setTimeout(function(n) {
                try {
                    o.close()
                } catch (t) {}
            }, 5e3), o.onicecandidate = function(t) {
                var r = t.candidate;
                if (!r) return void n(0);
                var e = _(r.candidate);
                null != e && (n(e), o.onicecandidate = null)
            }, o.createDataChannel(""), o.createOffer().then(function(n) {
                o.setLocalDescription(n)
            })["catch"](function(t) {
                n(0)
            })
        }

        function _(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null
        }

        function b() {
            for (var n = 0; n < 5; n++) y[n] = M[n]()
        }
        var y = Array(16),
            M = [r, c, a, s, l],
            A = [v, d, m, h];
        t.B = g;
        var j = navigator.vendor,
            T = o.style,
            x = "chrome" in window,
            W = "ActiveXObject" in window,
            k = n.b(e.WeakMap),
            C = {
                _13: function() {
                    return "callPhantom" in e || /PhantomJS/i.test(u)
                },
                _14: function() {
                    return /python/i.test(navigator.appVersion)
                },
                _15: function() {
                    return "sgAppName" in navigator
                },
                _16: function() {
                    return /Maxthon/i.test(j)
                },
                _17: function() {
                    return "opr" in e
                },
                _18: function() {
                    return x && /BIDUBrowser/i.test(u)
                },
                _19: function() {
                    return x && /LBBROWSER/i.test(u)
                },
                _20: function() {
                    return x && /QQBrowser/.test(u)
                },
                _21: function() {
                    return x && /UBrowser/i.test(u)
                },
                _22: function() {
                    return x && /2345Explorer/.test(u)
                },
                _23: function() {
                    return x && /TheWorld/.test(u)
                },
                _24: function() {
                    return x && "MSGesture" in e
                },
                _26: function() {
                    return "aef" in e && /WW_IMSDK/.test(u)
                },
                _25: function() {
                    return "aef" in e
                },
                _1: function() {
                    return x
                },
                _2: function() {
                    return "mozRTCIceCandidate" in e || "mozInnerScreenY" in e
                },
                _3: function() {
                    return "safari" in e
                },
                _4: function() {
                    return W && !("maxHeight" in T)
                },
                _5: function() {
                    return W && !n.b(e.postMessage)
                },
                _6: function() {
                    return W && !i
                },
                _7: function() {
                    return W && !n.b(e.Uint8Array)
                },
                _8: function() {
                    return W && !k
                },
                _9: function() {
                    return W && k
                },
                _10: function() {
                    return "Google Inc." === navigator.vendor
                },
                _11: function() {
                    return "Apple Computer, Inc." === navigator.vendor
                },
                _12: function() {
                    return W
                }
            };
        t.C = p, t.F = w, t.j = b
    }(s || (s = {}));
    var l;
    ! function(n) {
        function t(n) {
            var t;
            try {
                t = document.cookie
            } catch (u) {
                return null
            }
            var r = "; " + n + "=",
                e = t.indexOf(r);
            if (-1 === e) {
                if (r = n + "=", t.substr(0, r.length) !== r) return null;
                e = 0
            }
            var i = e + r.length,
                o = t.indexOf("; ", i);
            return -1 === o && (o = t.length), t.substring(i, o)
        }

        function r(n, t, r, e, i) {
            var o = n + "=" + t;
            e && (o += "; domain=" + e), i && (o += "; path=" + i), r && (o += "; expires=" + r);
            try {
                document.cookie = o
            } catch (u) {}
        }

        function e(n, t, e) {
            r(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e)
        }
        n.G = t, n.H = r, n.I = e
    }(l || (l = {}));
    var v;
    ! function(n) {
        function r(n) {
            var r = document._sufei_log;
            null == r && (r = .001), Math.random() > r || i({
                code: 1,
                msg: ((n.stack || n.message) + "").substr(0, 1e3),
                pid: "sufeidata",
                page: location.href.split(/[#?]/)[0],
                query: location.search.substr(1),
                hash: location.hash,
                referrer: document.referrer,
                title: document.title,
                ua: navigator.userAgent,
                rel: t
            }, "//gm.mmstat.com/fsp.1.1?")
        }

        function e(n, t, r) {
            i({
                url: (n || "").substr(0, 2e3),
                token: t,
                cna: r
            }, "https://fourier.alibaba.com/ts?")
        }

        function i(n, t) {
            var r = [];
            for (var e in n) r.push(e + "=" + encodeURIComponent(n[e]));
            (new Image).src = t + r.join("&")
        }
        n.J = r, n.K = e
    }(v || (v = {}));
    var d;
    ! function(n) {
        function t(n, t, r) {
            switch (r.length) {
                case 0:
                    return t();
                case 1:
                    return t(r[0]);
                case 2:
                    return t(r[0], r[1]);
                default:
                    return t(r[0], r[2], r[3])
            }
        }

        function r(n, t) {
            switch (t.length) {
                case 0:
                    return new n;
                case 1:
                    return new n(t[0]);
                case 2:
                    return new n(t[0], t[1]);
                default:
                    return new n(t[0], t[2], t[3])
            }
        }

        function e(e, i, o) {
            return function() {
                var u, c = arguments;
                try {
                    u = i(c, this, e)
                } catch (a) {
                    u = c, v.J(a)
                }
                if (u) {
                    if (u === n.L) return;
                    c = u
                }
                return o ? r(e, c) : "apply" in e ? e.apply(this, c) : t(this, e, c)
            }
        }

        function o(n, t, r) {
            if (!n) return !1;
            var i = n[t];
            return !!i && (n[t] = e(i, r, !1), !0)
        }

        function u(n, t, r) {
            if (!n) return !1;
            var i = n[t];
            return !!i && (n[t] = e(i, r, !0), !0)
        }

        function c(n, t, r) {
            if (!a) return !1;
            var o = a(n, t);
            return !(!o || !o.set || (o.set = e(o.set, r, !1), i || (o.get = function(n) {
                return function() {
                    return n.call(this)
                }
            }(o.get)), Object.defineProperty(n, t, o), 0))
        }
        n.L = -1;
        var a = Object.getOwnPropertyDescriptor;
        n.M = o, n.N = u, n.O = c
    }(d || (d = {}));
    var m, h = function() {
        function n(n) {
            this._fields = n;
            for (var t = 0, r = n.length; t < r; t++) this[t] = 0
        }
        return n.prototype.P = function() {
            for (var n = this._fields, t = [], r = -1, e = 0, i = n.length; e < i; e++)
                for (var o = this[e], u = n[e], c = r += u; t[c] = 255 & o, 0 != --u;) --c, o >>= 8;
            return t
        }, n.prototype.Q = function(n) {
            for (var t = this._fields, r = 0, e = 0, i = t.length; e < i; e++) {
                var o = t[e],
                    u = 0;
                do {
                    u = u << 8 | n[r++]
                } while (--o > 0);
                this[e] = u >>> 0
            }
        }, n
    }();
    ! function(n) {
        function t(n) {
            for (var t = 0, r = 0, e = n.length; r < e; r++) t = (t << 5) - t + n[r];
            return 255 & t
        }

        function r(n, t, r, e, i) {
            for (var o = n.length; t < o;) r[e++] = n[t++] ^ 255 & i, i = ~(131 * i)
        }

        function e(n) {
            for (var t = [], r = n.length, e = 0; e < r;) {
                var i = n[e++] << 16 | n[e++] << 8 | n[e++];
                t.push(f.charAt(i >> 18), f.charAt(i >> 12 & 63), f.charAt(i >> 6 & 63), f.charAt(63 & i))
            }
            return t.join("")
        }

        function i(n) {
            for (var t = [], r = 0; r < n.length; r += 4) {
                var e = s[n.charAt(r)] << 18 | s[n.charAt(r + 1)] << 12 | s[n.charAt(r + 2)] << 6 | s[n.charAt(r + 3)];
                t.push(e >> 16, e >> 8 & 255, 255 & e)
            }
            return t
        }

        function o() {
            for (var n = 0; n < 64; n++) {
                var t = f.charAt(n);
                s[t] = n
            }
        }

        function u(n) {
            var i = t(n),
                o = [a, i];
            return r(n, 0, o, 2, i), e(o)
        }

        function c(n) {
            var e = i(n),
                o = e[1],
                u = [];
            if (r(e, 2, u, 0, o), t(u) == o) return u
        }
        var a = 4,
            f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            s = {};
        n.j = o, n.R = u, n.S = c
    }(m || (m = {}));
    var g;
    ! function(n) {
        function t() {
            for (var n = navigator.platform, t = 0; t < r.length; t++)
                if (r[t].test(n)) return t + 1;
            return 0
        }
        var r = [/^Win32/, /^Win64/, /^Linux armv|Android/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
        n.T = t
    }(g || (g = {}));
    var p;
    ! function(t) {
        function r() {
            return n.d() / 1e3 >>> 0
        }

        function e(t) {
            if (f.j(), s.j(), t) {
                var r = m.S(t);
                r && o.Q(r)
            }
            o[1] = n.a(), o[5] = s.C(), o[6] = g.T(), o[8] = n.c(navigator.userAgent);
            try {
                s.F(function(n) {
                    o[7] = n
                })
            } catch (e) {
                o[7] = 0
            }
        }

        function i(t, e) {
            0 == o[4] && (o[4] = n.a(), o[3] = r()), o[2] = r(), o[16] = s.B(), o[9] = f.k(), o[10] = f.l(), o[11] = f.m(), o[12] = f.n(), o[17] = f.A(), o[18] = f.y();
            var i = f.r();
            o[13] = i.o, o[14] = i.p;
            var c = f.t(),
                a = f.v(),
                l = f.u(),
                v = [e, f.s(), t, c, i.q, history.length > 1, l, a];
            t && u++, o[15] = n.h(v), o[0] = u;
            var d = o.P();
            return m.R(d)
        }
        var o = new h([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1]),
            u = 0;
        t.j = e, t.U = i
    }(p || (p = {}));
    var w;
    ! function(t) {
        function i(n, t) {
            if (y.test(n)) return n in t;
            var r = n.split("."),
                e = r.length - 1,
                i = r[e];
            if (i in t) return !0;
            for (var o = e - 1; o >= 0; o--)
                if ((i = r[o] + "." + i) in t) return !0;
            return !1
        }

        function o(t) {
            _ || (_ = new Date(n.d() + 15552e6).toUTCString()), l.H(r, t, _, g, "/")
        }

        function u(n) {
            if (g = location.hostname, !y.test(g)) {
                var t = g.split("."),
                    e = t.length;
                if (1 !== e) {
                    e > 5 && (e = 5), g = t.pop();
                    for (var i = 2; i <= e && (g = t.pop() + "." + g, o(n), l.G(r) !== n); i++);
                    var u = "(^|\\.)" + g.replace(/\./g, "\\.") + "$";
                    w = new RegExp(u, "i")
                }
            }
        }

        function f() {
            o(p.U(!0)), b || (b = setTimeout(function(n) {
                b = 0, o(p.U(!1, null))
            }, 0))
        }

        function s(n) {
            /^\/\//.test(n) && (n = location.protocol + n);
            var t = p.U(!0),
                r = l.G("cna");
            v.K(n, t, r)
        }

        function d(n, t) {
            if (t)
                for (var r = 0; r < t.length; r++)
                    if (t[r].test(n)) return !0;
            return !1
        }

        function m(t) {
            var r;
            if (null != t && (t += "", r = n.g(t)), !r) return f(), !0;
            if (w) {
                if (w.test(r)) return f(), !0
            } else if (g === r) return f(), !0;
            var o = n.e(t, "?");
            return d(o, e.__sufei_point_list) ? (s(t), !1) : !(i(r, c) || r in a || /\/gw-open\/|\/gw\//.test(o) || d(o, e.__sufei_ignore_list) || (s(t), 1))
        }

        function h() {
            var t = l.G(r);
            p.j(t), t = p.U(!1, null), u(t), n.i(window, "unload", function(n) {
                o(p.U(!1, !0))
            })
        }
        var g, w, _, b, y = /^(\d+\.)*\d+$/;
        t.V = f, t.W = m, t.j = h
    }(w || (w = {}));
    var _;
    ! function(n) {
        function t() {
            r() || (i("insertBefore"), i("appendChild"))
        }

        function r() {
            var n = e.HTMLScriptElement;
            if (!n) return !1;
            var t = n.prototype;
            return d.M(t, "setAttribute", function(n) {
                var t = n[0],
                    r = n[1];
                /^src$/i.test(t) && c(r)
            }), d.O(t, "src", function(n) {
                c(n[0])
            })
        }

        function i(n) {
            var t = e.Element;
            t ? d.M(t.prototype, n, u) : (d.M(o, n, u), d.M(document.body, n, u))
        }

        function u(n) {
            var t = n[0];
            t && "SCRIPT" === t.tagName && c(t.src)
        }

        function c(n) {
            n += "", /callback=/.test(n) && w.W(n)
        }
        n.j = t
    }(_ || (_ = {}));
    var b;
    ! function(t) {
        function r(t) {
            return n.e(t.href, "#")
        }

        function i(n) {
            var t = n.target;
            if (!t) {
                var r = s[0];
                r && (t = r.target)
            }
            return t
        }

        function o(n) {
            if (/^https?\:/.test(n.protocol)) {
                var t = i(n);
                if ((!t || /^_self$/i.test(t)) && r(n) === f && n.hash) return;
                w.W(n.href)
            }
        }

        function u(n) {
            if (!n.defaultPrevented)
                for (var t = n.target || n.srcElement; t;) {
                    var r = t.tagName;
                    if ("A" === r || "AREA" === r) {
                        o(t);
                        break
                    }
                    t = t.parentNode
                }
        }

        function c(n) {
            var t = n.target || n.srcElement;
            t[l] !== v && w.W(t.action)
        }

        function a() {
            s = document.getElementsByTagName("base"), f = r(location), n.i(document, "click", u), n.i(document, "submit", c);
            var t = e.HTMLFormElement;
            t && d.M(t.prototype, "submit", function(n, t) {
                var r = t;
                w.W(r.action), r[l] = ++v
            })
        }
        var f, s, l = "__sufei_id",
            v = 0;
        t.j = a
    }(b || (b = {}));
    var y;
    ! function(t) {
        function r() {
            i(), /Mobile/.test(u) && (o(), c() || n.i(document, "DOMContentLoaded", c))
        }

        function i() {
            d.M(e, "fetch", function(n) {
                var t = n[0],
                    r = n[1];
                "string" == typeof t && w.W(t) && (r = r || {}, r.credentials && "omit" !== r.credentials || (r.credentials = "same-origin"), n[1] = r)
            })
        }

        function o() {
            var n = e.lib;
            if (n) {
                var t = !/taobao.com$/.test(location.hostname);
                d.M(n.windvane, "call", function(n) {
                    if ("MtopWVPlugin" === n[0] && "send" === n[1]) {
                        var r = n[2];
                        t ? (r.ext_headers || {})["X-Sufei-Token"] = p.U(!0) : w.V()
                    }
                })
            }
        }

        function c() {
            var n = e.jsbridge;
            if (n && (n = n["default"])) return d.M(n, "pushBack", function(n) {
                "native:" === n[0] && w.V()
            }), !0
        }
        t.j = r
    }(y || (y = {}));
    var M;
    ! function(n) {
        function t() {
            var n = e.XMLHttpRequest;
            if (n) {
                var t = n.prototype;
                t ? r(t) : i()
            }
            o()
        }

        function r(n) {
            d.M(n, "open", function(n, t) {
                var r = n[1];
                t[u] = r
            }), d.M(n, "send", function(n, t) {
                var r = t[u];
                w.W(r)
            })
        }

        function i() {
            d.N(e, "XMLHttpRequest", function() {
                w.W()
            })
        }

        function o() {
            var n = /XMLHTTP/i;
            d.N(e, "ActiveXObject", function(t) {
                var r = t[0];
                r && n.test(r) && w.W()
            })
        }
        var u = "__sufei_url";
        n.j = t
    }(M || (M = {}));
    var A;
    ! function(n) {
        function r() {
            m.j(), w.j(), b.j(), M.j(), y.j(), _.j()
        }
        var e = "_sufei_data2";
        ! function() {
            if (!document[e]) {
                document[e] = t;
                try {
                    r()
                } catch (n) {
                    v.J(n)
                }
            }
        }()
    }(A || (A = {}))
}();