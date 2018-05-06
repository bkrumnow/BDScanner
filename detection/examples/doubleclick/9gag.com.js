(function() {
    try {
        var q, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
                a != Array.prototype && a != Object.prototype && (a[b] = c.value)
            },
            ca = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

        function da() {
            da = function() {};
            ca.Symbol || (ca.Symbol = ea)
        }
        var ga = 0;

        function ea(a) {
            return "jscomp_symbol_" + (a || "") + ga++
        }

        function ha() {
            da();
            var a = ca.Symbol.iterator;
            a || (a = ca.Symbol.iterator = ca.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(this)
                }
            });
            ha = function() {}
        }

        function ia(a) {
            var b = 0;
            return ja(function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            })
        }

        function ja(a) {
            ha();
            a = {
                next: a
            };
            a[ca.Symbol.iterator] = function() {
                return this
            };
            return a
        }

        function r(a) {
            ha();
            var b = a[Symbol.iterator];
            return b ? b.call(a) : ia(a)
        }

        function ka(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            for (var d in b)
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, d);
                    e && Object.defineProperty(a, d, e)
                } else a[d] = b[d]
        }
        var la = this;

        function ma() {}

        function na(a) {
            a.Qb = void 0;
            a.U = function() {
                return a.Qb ? a.Qb : a.Qb = new a
            }
        }

        function oa(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }

        function pa(a) {
            var b = oa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }

        function t(a) {
            return "string" == typeof a
        }

        function qa(a) {
            return "number" == typeof a
        }

        function ra(a) {
            return "function" == oa(a)
        }

        function sa(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }

        function ta(a) {
            return a[ua] || (a[ua] = ++va)
        }
        var ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
            va = 0;

        function wa(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function xa(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }

        function u(a, b, c) {
            u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
            return u.apply(null, arguments)
        }

        function ya(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }

        function za(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.gc = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Wc = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };

        function v(a, b, c, d) {
            this.id = a;
            this.name = b;
            this.size = c;
            this.g = d
        };

        function Aa(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, Aa);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        }
        za(Aa, Error);
        Aa.prototype.name = "CustomError";

        function Ba(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }
        var Ca = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };

        function Da(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        }

        function Ea(a) {
            var b = Number(a);
            return !b && /^[\s\xa0]*$/.test(a) ? NaN : b
        }

        function Fa(a) {
            isFinite(a) && (a = String(a));
            return t(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
        };
        var Ga = Array.prototype.indexOf ? function(a, b, c) {
                return Array.prototype.indexOf.call(a, b, c)
            } : function(a, b, c) {
                c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
                if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
                for (; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            w = Array.prototype.forEach ? function(a, b, c) {
                Array.prototype.forEach.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
            },
            Ha = Array.prototype.filter ? function(a, b, c) {
                return Array.prototype.filter.call(a,
                    b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = [], f = 0, g = t(a) ? a.split("") : a, h = 0; h < d; h++)
                    if (h in g) {
                        var l = g[h];
                        b.call(c, l, h, a) && (e[f++] = l)
                    }
                return e
            },
            y = Array.prototype.map ? function(a, b, c) {
                return Array.prototype.map.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
                return e
            },
            Ia = Array.prototype.reduce ? function(a, b, c, d) {
                d && (b = u(b, d));
                return Array.prototype.reduce.call(a, b, c)
            } : function(a, b, c, d) {
                var e = c;
                w(a, function(c, g) {
                    e = b.call(d, e,
                        c, g, a)
                });
                return e
            },
            Ja = Array.prototype.some ? function(a, b, c) {
                return Array.prototype.some.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
                    if (f in e && b.call(c, e[f], f, a)) return !0;
                return !1
            },
            Ka = Array.prototype.every ? function(a, b, c) {
                return Array.prototype.every.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
                    if (f in e && !b.call(c, e[f], f, a)) return !1;
                return !0
            };

        function La(a, b) {
            b = Ma(a, b, void 0);
            return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
        }

        function Ma(a, b, c) {
            for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        }

        function Na(a, b) {
            a: {
                for (var c = a.length, d = t(a) ? a.split("") : a, c = c - 1; 0 <= c; c--)
                    if (c in d && b.call(void 0, d[c], c, a)) {
                        b = c;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
        }

        function z(a, b) {
            return 0 <= Ga(a, b)
        }

        function Oa(a, b) {
            b = Ga(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        }

        function Pa(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        }

        function Qa(a, b, c) {
            function d(a) {
                return sa(a) ? "o" + ta(a) : (typeof a).charAt(0) + a
            }
            b = b || a;
            c = c || d;
            for (var e = {}, f = 0, g = 0; g < a.length;) {
                var h = a[g++],
                    l = c(h);
                Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0, b[f++] = h)
            }
            b.length = f
        }

        function Ra(a, b) {
            a.sort(b || Sa)
        }

        function Sa(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }

        function Ta(a) {
            for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
                var d = Math.floor(b() * (c + 1)),
                    e = a[c];
                a[c] = a[d];
                a[d] = e
            }
        };
        var Ua = "300x250 336x280 728x90 160x600 970x250 970x66 320x50 468x60 300x1050 300x50 300x100 234x60 120x600 120x240 970x90 960x90 300x600 320x100 300x31 292x30 250x250 240x133 220x90 200x446 200x200 180x150 125x125 120x60 88x31 1280x100 240x400 980x120 980x90 250x360 750x100 750x200 750x300 930x180 950x90 580x400".split(" ");

        function Va(a) {
            return a ? y(a.split(","), Wa) : null
        }

        function Xa(a) {
            return !a || 0 >= a.length ? null : y(a, Ya).join(",")
        }

        function $a(a) {
            if (!a) return null;
            if (1 == a.length) return a[0];
            for (var b = 0, c = 0, d = 0; d < a.length; d++) {
                var e = a[d];
                b < e[0] && (b = e[0]);
                c < e[1] && (c = e[1])
            }
            return [b, c]
        }
        var ab = /^([1-9]\d*)x([1-9]\d*)$/;

        function Wa(a) {
            var b = bb(a);
            if (!b) throw Error("An invalid size string was parsed: " + a);
            return b
        }

        function bb(a) {
            return (a = ab.exec(a)) ? [parseInt(a[1], 10), parseInt(a[2], 10)] : null
        }

        function cb(a) {
            t(a) && (a = a.length ? a.split(",") : []);
            return y(a, Wa)
        }

        function Ya(a) {
            return a[0] + "x" + a[1]
        };

        function db(a) {
            a = Error(a);
            a.logPct = .01;
            return a
        }
        var eb = [],
            fb = [],
            gb = [];

        function C(a, b, c) {
            100 > eb.length && eb.push({
                errorCode: a,
                message: b,
                Ob: c
            })
        }

        function G(a, b, c) {
            100 > gb.length && gb.push({
                Uc: a,
                message: b,
                Ob: c
            })
        }

        function hb(a, b) {
            100 > fb.length && fb.push({
                message: a,
                ob: b
            })
        }

        function ib(a, b) {
            1 >= 100 * Math.random() && hb(a + " (1%)", b)
        };

        function jb(a) {
            return "T" === a || "S" === a
        }

        function kb() {
            var a = H().navigator.userAgent;
            return a ? /Mobi|Opera Mini|BlackBerry/i.test(a) ? /Tablet|iPad/i.test(a) ? "T" : "S" : /Tablet|Android|Silk/i.test(a) ? "T" : "D" : "U"
        };
        var lb = {
            zc: {
                "bdl": "2097",
                "hv": {
                    "desktop billboard": 31,
                    "Sticky_Bottom_5_300x250": 19,
                    "Semi_Sticky_Mid_4_300x250": 68,
                    "Semi_Sticky_Mid_3_300x250": 70,
                    "Semi_Sticky_Mid_2_300x250": 46,
                    "Semi_Sticky_Mid_1": 79,
                    "Mobile_Sticky_6_320x50": 68,
                    "Mobile_Only_7": 35
                },
                "lo": null,
                "x": {
                    "CAD": 1.29017,
                    "GBP": 0.7191,
                    "EUR": 0.80596,
                    "SEK": 8.20827,
                    "HKD": 7.83353
                },
                "c": "NL",
                "dt": "D",
                "qp": null,
                "p": 4200,
                "tas": 1521102406784
            }
        };

        function mb(a, b) {
            var c = !1,
                d = null;
            return function() {
                c || (c = !0, d = lb.zc[a] || b);
                return d
            }
        }
        var nb = mb("x", function(a) {
            return a || {
                CAD: 1.25,
                EUR: .85,
                GBP: .75,
                SEK: 8,
                HKD: 7.75
            }
        });

        function pb(a, b, c) {
            if (a === b) return c;
            if ("USD" === a) {
                var d = nb()[b];
                if (null != d) return d * c
            } else if ("USD" === b) {
                if (d = nb()[a], null != d) return c / d
            } else {
                var d = nb()[a],
                    e = nb()[b];
                if (null != d && null != e) return e / d * c
            }
            C("no currency", null, Error("from: " + a + ", to: " + b));
            return c
        }
        var qb = mb("hv", function(a) {
            return a || {}
        });

        function rb(a) {
            return a && (a = qb()[a], void 0 != a) ? a : 0
        }
        var sb = mb("c", "Unknown"),
            tb = mb("dt", "U"),
            ub = mb("p", 4200),
            vb = mb("tas", null),
            wb = mb("bdl", null);

        function xb(a) {
            try {
                return null != a.location.href
            } catch (b) {}
            return !1
        }
        var yb = null;

        function H() {
            if (yb) return yb;
            for (var a = window, b = 0; xb(a) && 10 > b && xb(a.parent);) b++, a = a.parent;
            return yb = a
        }

        function zb() {
            function a(b, d) {
                var c = d.document.documentElement,
                    f = (d.pageYOffset || c.scrollTop) - (c.clientTop || 0);
                b.left += (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0);
                b.top += f;
                d != d.parent && xb(d.parent) && a(b, d.parent)
            }
            var b = {
                left: 0,
                top: 0
            };
            a(b, window);
            return b
        }

        function Ab(a) {
            function b(a, c) {
                if (xb(a.parent) && a.frameElement) {
                    var d = a.frameElement.getBoundingClientRect();
                    c.left += d.left;
                    c.top += d.top;
                    b(a.parent, c)
                }
            }
            var c = {
                left: 0,
                top: 0
            };
            b(a, c);
            return c
        };

        function Bb() {
            var a = this;
            this.T = "unknown";
            this.ra = [];
            this.O = {};
            this.pa = [];
            this.j = "unknown.com";
            this.V = -1;
            this.g = [];
            this.Ub = null;
            this.S = 10;
            this.o = void 0;
            this.P = {};
            this.wa = [];
            this.C = [];
            this.ga = this.$ = !0;
            this.da = null;
            this.ca = this.F = !1;
            this.ma = "120x600 160x600 300x250 300x50 300x600 320x100 320x50 336x280 468x60 728x90".split(" ");
            this.ia = !1;
            this.sa = [
                [300, 1050],
                [970, 250],
                [300, 600],
                [160, 600],
                [336, 280],
                [970, 90],
                [300, 250],
                [120, 600],
                [728, 90],
                [970, 66],
                [250, 250],
                [200, 200],
                [320, 100],
                [300, 100],
                [120, 240],
                [468,
                    60
                ],
                [180, 150],
                [320, 50],
                [125, 125],
                [300, 50],
                [234, 60]
            ];
            this.fa = this.A = !1;
            this.R = this.W = "CAD";
            this.ua = function(b) {
                return La(a.g, function(a) {
                    var c = b.getAdUnitPath();
                    return a.g.toLowerCase() == c.toLowerCase()
                })
            };
            this.la = 0;
            this.B = null;
            this.ja = !1;
            this.ta = this.X = this.na = "";
            this.Y = 0;
            this.ha = !1;
            this.J = 0
        }
        na(Bb);

        function Cb() {
            return 1 <= H().document.querySelectorAll("meta[name\x3dviewport]").length
        }

        function Db(a) {
            if (!a.ca) {
                a.ca = !0;
                var b = Eb(a, "default");
                if (b)
                    for (var c = {}, d = 0; d < a.ma.length; c = {
                            size: c.size
                        }, d++) c.size = a.ma[d], Ja(a.g, function(a) {
                        return function(b) {
                            return "default" === b.name && b.size === a.size
                        }
                    }(c)) || a.g.push(new v(b.id, b.name, c.size, b.g))
            }
        }

        function Eb(a, b) {
            if (!a.g) return null;
            for (var c = 0; c < a.g.length; c++) {
                var d = a.g[c];
                if (b == d.name) return d
            }
            return null
        }

        function Fb(a, b, c) {
            return a.g ? La(a.g, function(a) {
                return a.name === b && a.size === c
            }) : null
        }

        function Gb(a, b) {
            return a.g ? La(a.g, function(a) {
                return a.name === b
            }) : null
        }

        function Hb(a, b, c) {
            if (!a.g) return null;
            b = b || "";
            for (var d = 0, e = null, f = 0; f < a.g.length; f++) {
                var g = a.g[f];
                if ("default" !== g.name && b == g.size && (e = g, d++ == c)) return g
            }
            return e
        }

        function Ib(a, b, c, d) {
            if (!a.g) return null;
            for (var e = 0, f = 0, g = null, h = 0, l = null, m = 0; m < a.g.length; m++) {
                var n = a.g[m];
                if (n.name == b) {
                    var k = $a(Va(n.size));
                    if (k) {
                        var p = k[0],
                            k = k[1],
                            x = (!c || p <= c) && (!d || k <= d),
                            E;
                        E = d ? c ? (p > e || k > f) && k >= f && p >= e : k > f && p >= e : p > e && k >= f;
                        x && E && (g = n, f = k, e = p);
                        x = 0;
                        0 < c && p > c && (x += (p - c) * k);
                        0 < d && k > d && (x += (k - d) * p);
                        0 < d && k > d && 0 < c && p > c && (x -= (k - d) * (p - c));
                        if (!l || x < h) l = n, h = x
                    }
                }
            }
            g || (g = l);
            return g
        }

        function Jb(a, b, c, d) {
            if (!c && !d && jb(tb())) {
                var e = H().screen;
                e && e.width && e.height && (c = e.width, d = e.height)
            }
            return Ib(a, b, c, d)
        };

        function Kb(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        }

        function Lb(a, b) {
            for (var c in a)
                if (!b.call(void 0, a[c], c, a)) return !1;
            return !0
        }

        function Mb(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }

        function Nb(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }

        function Ob(a) {
            for (var b in a) return !1;
            return !0
        }

        function Pb(a, b) {
            for (var c in a)
                if (!(c in b) || a[c] !== b[c]) return !1;
            for (c in b)
                if (!(c in a)) return !1;
            return !0
        }

        function Qb(a) {
            var b = oa(a);
            if ("object" == b || "array" == b) {
                if (ra(a.clone)) return a.clone();
                var b = "array" == b ? [] : {},
                    c;
                for (c in a) b[c] = Qb(a[c]);
                return b
            }
            return a
        }
        var Rb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function Sb(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Rb.length; f++) c = Rb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };

        function Tb(a) {
            if (a.hb && "function" == typeof a.hb) a = a.hb();
            else if (pa(a) || t(a)) a = a.length;
            else {
                var b = 0,
                    c;
                for (c in a) b++;
                a = b
            }
            return a
        }

        function Ub(a) {
            if (a.Xa && "function" == typeof a.Xa) return a.Xa();
            if (t(a)) return a.split("");
            if (pa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Mb(a)
        }

        function Vb(a, b) {
            if ("function" == typeof a.every) return a.every(b, void 0);
            if (pa(a) || t(a)) return Ka(a, b, void 0);
            var c;
            if (a.xb && "function" == typeof a.xb) c = a.xb();
            else if (a.Xa && "function" == typeof a.Xa) c = void 0;
            else if (pa(a) || t(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = Nb(a);
            for (var d = Ub(a), e = d.length, f = 0; f < e; f++)
                if (!b.call(void 0, d[f], c && c[f], a)) return !1;
            return !0
        };

        function Wb(a, b) {
            this.j = {};
            this.g = [];
            this.o = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof Wb ? (c = a.xb(), d = a.Xa()) : (c = Nb(a), d = Mb(a));
                for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
            }
        }
        q = Wb.prototype;
        q.hb = function() {
            return this.o
        };
        q.Xa = function() {
            Xb(this);
            for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
            return a
        };
        q.xb = function() {
            Xb(this);
            return this.g.concat()
        };
        q.Nb = function(a) {
            for (var b = 0; b < this.g.length; b++) {
                var c = this.g[b];
                if (Yb(this.j, c) && this.j[c] == a) return !0
            }
            return !1
        };

        function Xb(a) {
            if (a.o != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    Yb(a.j, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.o != a.g.length) {
                for (var e = {}, c = b = 0; b < a.g.length;) d = a.g[b], Yb(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        }
        q.get = function(a, b) {
            return Yb(this.j, a) ? this.j[a] : b
        };
        q.set = function(a, b) {
            Yb(this.j, a) || (this.o++, this.g.push(a));
            this.j[a] = b
        };
        q.clone = function() {
            return new Wb(this)
        };

        function Yb(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };

        function Zb(a) {
            this.g = new Wb;
            if (a) {
                a = Ub(a);
                for (var b = a.length, c = 0; c < b; c++) {
                    var d = a[c];
                    this.g.set($b(d), d)
                }
            }
        }

        function $b(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + ta(a) : b.charAt(0) + a
        }
        Zb.prototype.hb = function() {
            return this.g.hb()
        };
        Zb.prototype.contains = function(a) {
            a = $b(a);
            return Yb(this.g.j, a)
        };
        Zb.prototype.Xa = function() {
            return this.g.Xa()
        };
        Zb.prototype.clone = function() {
            return new Zb(this)
        };

        function ac(a) {
            var b = bc,
                c = Tb(b);
            if (a.hb() > c) return !1;
            !(b instanceof Zb) && 5 < c && (b = new Zb(b));
            return Vb(a, function(a) {
                var c = b;
                if (c.contains && "function" == typeof c.contains) a = c.contains(a);
                else if (c.Nb && "function" == typeof c.Nb) a = c.Nb(a);
                else if (pa(c) || t(c)) a = z(c, a);
                else a: {
                    for (var d in c)
                        if (c[d] == a) {
                            a = !0;
                            break a
                        }
                    a = !1
                }
                return a
            })
        };
        var bc = new Zb(["native"]),
            cc = new Zb(["banner"]);
        new Zb(["video"]);
        new Zb(["instream"]);

        function I() {
            return (new Date).getTime()
        }

        function dc() {
            for (var a = I().toString(36), b = 0; 6 > b; ++b) a += (36 * Math.random() | 0).toString(36);
            return a
        };

        function ec(a, b, c, d, e, f, g, h, l, m, n, k, p, x, E) {
            this.o = dc();
            this.F = a;
            this.id = b;
            this.name = c;
            this.j = d;
            this.W = e;
            this.g = f;
            this.C = g;
            this.S = h;
            this.O = l;
            this.B = m;
            this.J = n;
            this.A = k;
            this.V = p;
            this.X = x;
            this.P = E ? E : null
        }

        function fc(a) {
            var b = new ec(a.F, a.id, a.name, a.j, a.W, a.g, a.C, a.S, a.O, a.B, a.J, a.A, a.V, a.X);
            b.o = a.o;
            return b
        }
        ec.prototype.getName = function() {
            return this.name
        };

        function gc(a) {
            return a.replace(/^\/?[0-9]+\//, "")
        };

        function J(a, b) {
            this.width = a;
            this.height = b
        }
        J.prototype.g = function(a) {
            return a.width === this.width && a.height === this.height
        };

        function hc(a) {
            this.value = a
        }
        hc.prototype.g = function(a) {
            return this.value === a.value
        };

        function ic(a) {
            this.value = a
        }
        ic.prototype.g = function(a) {
            var b = this;
            return Lb(a.value, function(a, d) {
                return b.value[d] ? Ka(a, function(a) {
                    return z(b.value[d], a)
                }) : !1
            })
        };

        function K(a, b) {
            return b ? Ja(b, function(b) {
                return a.g(b)
            }) : !1
        }

        function jc(a, b, c) {
            var d = a[b].H;
            return d(new hc(c), a[b].value)
        }
        var kc = {},
            lc = (kc.size = function(a, b) {
                    return Ja(a.g, function(a) {
                        var c = b.size.H;
                        return c(new J(a[0], a[1]), b.size.value)
                    })
                }, kc.adUnitName = function(a, b) {
                    return jc(b, "adUnitName", gc(a.j))
                }, kc.divId = function(a, b) {
                    return jc(b, "divId", a.id)
                }, kc.deviceType = function(a, b) {
                    return jc(b, "deviceType", tb())
                }, kc.geo = function(a, b) {
                    return jc(b, "geo", sb())
                }, kc.testSegment = function(a, b) {
                    a = "";
                    null != window.deployads && null != window.deployads.pageSegment && (a = window.deployads.pageSegment);
                    return jc(b, "testSegment", a)
                }, kc.adPlacement =
                function(a, b) {
                    return jc(b, "adPlacement", a.C ? "ATF" : "BTF")
                }, kc.dfpKeyValues = function(a, b) {
                    var c = b.dfpKeyValues.H;
                    b = b.dfpKeyValues.value;
                    var d = {};
                    if (a.P)
                        for (var e = r(a.P.getTargetingKeys()), f = e.next(); !f.done; f = e.next()) f = f.value, d[f] = a.P.getTargeting(f);
                    return c(new ic(d), b)
                }, kc);

        function mc(a, b) {
            return Ka(Nb(b), function(c) {
                return lc[c](a, b)
            })
        }

        function nc(a, b, c, d) {
            var e;
            e = e || {};
            return {
                D: {
                    I: a,
                    N: e,
                    M: d,
                    G: !1
                },
                L: b,
                K: c,
                id: 1
            }
        }

        function oc(a, b) {
            var c = [];
            w(b, function(b) {
                for (var d = null, f = 0, g = r(a), h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    if (d && f != h.K) break;
                    var l = h.D;
                    if (!l.M && l.G ? 0 : mc(b, h.L))
                        if (d = h, f = h.K, !h.D.G) break
                }
                if (d) {
                    f = r(a);
                    for (h = f.next(); !h.done; h = f.next()) g = h.value, Pb(d.D.I, g.D.I) && (g.D.G = !0);
                    c.push({
                        request: b,
                        $a: d
                    })
                }
            });
            w(a, function(a) {
                return a.D.G = !1
            });
            return c
        };
        var L = Bb.U();
        L.j = "9gag.com";
        L.V = 1828;
        L.g = [new v(0, "default", "728x90", "/16921351/Pub_test.9gag.com_default"), new v(1, "Semi_Sticky_Mid_1", "125x125", "/16921351/9GAG/Unit1"), new v(2, "Semi_Sticky_Mid_2_300x250", "300x250", "/16921351/9GAG/Unit2"), new v(3, "Semi_Sticky_Mid_3_300x250", "300x250", "/16921351/9GAG/Unit3"), new v(4, "Semi_Sticky_Mid_4_300x250", "300x250", "/16921351/9GAG/Unit4"), new v(5, "Sticky_Bottom_5_300x250", "300x250", "/16921351/9GAG/Unit5"), new v(6, "Mobile_Sticky_6_320x50", "320x50", "/16921351/9GAG/Unit6"), new v(7, "Mobile_Only_7",
            "125x125", "/16921351/9GAG/Unit7"), new v(8, "SortTest_SidebarBottom_PostPage", "300x600", "/16921351/Pub_9gag.com_300x600_2"), new v(9, "SortTest_SidebarBottom_PostList", "300x600", "/16921351/Pub_9gag.com_300x600_3"), new v(10, "SortTest_IdlePopup", "300x250", "/16921351/Pub_9gag.com_300x250_4"), new v(11, "SortTest_PostList_Mobile", "300x250", "/16921351/Pub_9gag.com_300x250_5"), new v(12, "SortTest_BelowComment_Mobile", "300x250", "/16921351/Pub_9gag.com_300x250_6"), new v(13, "SortTest_AboveComment_Mobile", "320x50",
            "/16921351/Pub_9gag.com_320x50"), new v(14, "SortableTest_HalfPage", "300x600", "/16921351/Pub_9gag.com_300x600"), new v(15, "SortTest_SidebarTop", "300x250", "/16921351/Pub_9gag.com_300x250"), new v(16, "SortTest_SidebarRep", "300x250", "/16921351/Pub_9gag.com_300x250_2"), new v(17, "SortTest_SidebarBottom", "300x250", "/16921351/Pub_9gag.com_300x250_3"), new v(18, "SortTest_PostBottom", "728x90", "/16921351/Pub_9gag.com_728x90"), new v(19, "SortTest_ContainerBottom", "728x90", "/16921351/Pub_9gag.com_728x90_2"), new v(20,
            "desktop billboard", "125x125", "/16921351/9GAG/Unit8")];
        L.T = "9gag.com";
        L.A = !0;
        L.fa = !0;
        L.la = 100;
        L.W = "USD";
        L.R = "HKD";
        L.$ = !1;
        L.ga = !1;
        L.ja = !1;
        L.na = "";
        L.X = "";
        L.ta = "";
        L.Y = 0;
        L.ra = [];
        L.O = {};
        var M = {
                48219: {
                    I: {
                        placementId: "11339111"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48206: {
                    I: {
                        placementId: "11338468"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48216: {
                    I: {
                        placementId: "11339103"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48212: {
                    I: {
                        placementId: "11338473"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48217: {
                    I: {
                        placementId: "11339105"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48222: {
                    I: {
                        placementId: "11339118"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48211: {
                    I: {
                        placementId: "11338476"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48207: {
                    I: {
                        placementId: "11338467"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48215: {
                    I: {
                        placementId: "11339102"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48208: {
                    I: {
                        placementId: "11338462"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48203: {
                    I: {
                        placementId: "11339125"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48213: {
                    I: {
                        placementId: "11338469"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48221: {
                    I: {
                        placementId: "11339117"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48218: {
                    I: {
                        placementId: "11339108"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48209: {
                    I: {
                        placementId: "11338461"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48205: {
                    I: {
                        placementId: "11339120"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48220: {
                    I: {
                        placementId: "11339114"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48210: {
                    I: {
                        placementId: "11338459"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48214: {
                    I: {
                        placementId: "11339121"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48204: {
                    I: {
                        placementId: "11339119"
                    },
                    N: {},
                    M: !1,
                    G: !1
                }
            },
            pc = {},
            qc = {},
            rc = {},
            sc = {},
            tc = {},
            uc = {},
            vc = {},
            wc = {},
            xc = {},
            yc = {},
            zc = {},
            Ac = {},
            Bc = {},
            Cc = {},
            Dc = {},
            Ec = {},
            Fc = {},
            Gc = {},
            Hc = {},
            Ic = {},
            Jc = [{
                D: M[48203],
                L: (pc.size = {
                    H: K,
                    value: [new J(970, 250)]
                }, pc),
                K: 1,
                id: 792258
            }, {
                D: M[48204],
                L: (qc.size = {
                    H: K,
                    value: [new J(300, 600)]
                }, qc),
                K: 1,
                id: 792259
            }, {
                D: M[48205],
                L: (rc.size = {
                    H: K,
                    value: [new J(300, 600)]
                }, rc),
                K: 1,
                id: 792260
            }, {
                D: M[48206],
                L: (sc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, sc),
                K: 1,
                id: 792261
            }, {
                D: M[48207],
                L: (tc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, tc),
                K: 1,
                id: 792262
            }, {
                D: M[48208],
                L: (uc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, uc),
                K: 1,
                id: 792263
            }, {
                D: M[48209],
                L: (vc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, vc),
                K: 1,
                id: 792264
            }, {
                D: M[48210],
                L: (wc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, wc),
                K: 1,
                id: 792265
            }, {
                D: M[48211],
                L: (xc.size = {
                    H: K,
                    value: [new J(160, 600)]
                }, xc),
                K: 1,
                id: 792266
            }, {
                D: M[48212],
                L: (yc.size = {
                    H: K,
                    value: [new J(160, 600)]
                }, yc),
                K: 1,
                id: 792267
            }, {
                D: M[48213],
                L: (zc.size = {
                    H: K,
                    value: [new J(160, 600)]
                }, zc),
                K: 1,
                id: 792268
            }, {
                D: M[48214],
                L: (Ac.size = {
                    H: K,
                    value: [new J(970, 90)]
                }, Ac),
                K: 1,
                id: 792269
            }, {
                D: M[48215],
                L: (Bc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Bc),
                K: 1,
                id: 792270
            }, {
                D: M[48216],
                L: (Cc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Cc),
                K: 1,
                id: 792271
            }, {
                D: M[48217],
                L: (Dc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Dc),
                K: 1,
                id: 792272
            }, {
                D: M[48218],
                L: (Ec.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Ec),
                K: 1,
                id: 792273
            }, {
                D: M[48219],
                L: (Fc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Fc),
                K: 1,
                id: 792274
            }, {
                D: M[48220],
                L: (Gc.size = {
                    H: K,
                    value: [new J(320, 50)]
                }, Gc),
                K: 1,
                id: 792275
            }, {
                D: M[48221],
                L: (Hc.size = {
                    H: K,
                    value: [new J(320, 50)]
                }, Hc),
                K: 1,
                id: 792276
            }, {
                D: M[48222],
                L: (Ic.size = {
                    H: K,
                    value: [new J(320,
                        50)]
                }, Ic),
                K: 1,
                id: 792277
            }],
            Kc = {
                "320x50": ["11339118", "11339117", "11339114"],
                "728x90": ["11339111", "11339108", "11339105", "11339103", "11339102"],
                "970x90": ["11339121"],
                "160x600": ["11338469", "11338473", "11338476"],
                "300x250": ["11338459", "11338461", "11338462", "11338467", "11338468"],
                "300x600": ["11339120", "11339119"],
                "970x250": ["11339125"]
            },
            N = {
                52038: {
                    I: {
                        tagid: "505652"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52032: {
                    I: {
                        tagid: "505644"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52025: {
                    I: {
                        tagid: "541034"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52028: {
                    I: {
                        tagid: "505648"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52033: {
                    I: {
                        tagid: "505656"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52043: {
                    I: {
                        tagid: "505658"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52040: {
                    I: {
                        tagid: "505650"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52031: {
                    I: {
                        tagid: "505645"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52027: {
                    I: {
                        tagid: "505660"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52034: {
                    I: {
                        tagid: "505655"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52039: {
                    I: {
                        tagid: "505651"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52030: {
                    I: {
                        tagid: "505646"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52026: {
                    I: {
                        tagid: "505661"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52042: {
                    I: {
                        tagid: "505659"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52036: {
                    I: {
                        tagid: "505663"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52029: {
                    I: {
                        tagid: "505647"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52035: {
                    I: {
                        tagid: "505654"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52044: {
                    I: {
                        tagid: "505657"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52041: {
                    I: {
                        tagid: "505649"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                52037: {
                    I: {
                        tagid: "505653"
                    },
                    N: {},
                    M: !1,
                    G: !1
                }
            },
            Lc = {},
            Mc = {},
            Nc = {},
            Oc = {},
            Pc = {},
            Qc = {},
            Rc = {},
            Sc = {},
            Tc = {},
            Uc = {},
            Vc = {},
            Wc = {},
            Xc = {},
            Yc = {},
            Zc = {},
            $c = {},
            ad = {},
            bd = {},
            cd = {},
            dd = {},
            ed = [{
                D: N[52025],
                L: (Lc.size = {
                    H: K,
                    value: [new J(970, 250)]
                }, Lc),
                K: 4,
                id: 1114268
            }, {
                D: N[52026],
                L: (Mc.size = {
                    H: K,
                    value: [new J(300, 600)]
                }, Mc),
                K: 4,
                id: 1114269
            }, {
                D: N[52027],
                L: (Nc.size = {
                    H: K,
                    value: [new J(300, 600)]
                }, Nc),
                K: 4,
                id: 1114270
            }, {
                D: N[52028],
                L: (Oc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, Oc),
                K: 4,
                id: 1114271
            }, {
                D: N[52029],
                L: (Pc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, Pc),
                K: 4,
                id: 1114272
            }, {
                D: N[52030],
                L: (Qc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, Qc),
                K: 4,
                id: 1114273
            }, {
                D: N[52031],
                L: (Rc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, Rc),
                K: 4,
                id: 1114274
            }, {
                D: N[52032],
                L: (Sc.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, Sc),
                K: 4,
                id: 1114275
            }, {
                D: N[52033],
                L: (Tc.size = {
                    H: K,
                    value: [new J(160, 600)]
                }, Tc),
                K: 4,
                id: 1114276
            }, {
                D: N[52034],
                L: (Uc.size = {
                    H: K,
                    value: [new J(160, 600)]
                }, Uc),
                K: 4,
                id: 1114277
            }, {
                D: N[52035],
                L: (Vc.size = {
                    H: K,
                    value: [new J(160, 600)]
                }, Vc),
                K: 4,
                id: 1114278
            }, {
                D: N[52036],
                L: (Wc.size = {
                    H: K,
                    value: [new J(970, 90)]
                }, Wc),
                K: 4,
                id: 1114279
            }, {
                D: N[52037],
                L: (Xc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Xc),
                K: 4,
                id: 1114280
            }, {
                D: N[52038],
                L: (Yc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Yc),
                K: 4,
                id: 1114281
            }, {
                D: N[52039],
                L: (Zc.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, Zc),
                K: 4,
                id: 1114282
            }, {
                D: N[52040],
                L: ($c.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, $c),
                K: 4,
                id: 1114283
            }, {
                D: N[52041],
                L: (ad.size = {
                    H: K,
                    value: [new J(728, 90)]
                }, ad),
                K: 4,
                id: 1114284
            }, {
                D: N[52042],
                L: (bd.size = {
                    H: K,
                    value: [new J(320, 50)]
                }, bd),
                K: 4,
                id: 1114285
            }, {
                D: N[52043],
                L: (cd.size = {
                    H: K,
                    value: [new J(320, 50)]
                }, cd),
                K: 4,
                id: 1114286
            }, {
                D: N[52044],
                L: (dd.size = {
                    H: K,
                    value: [new J(320, 50)]
                }, dd),
                K: 4,
                id: 1114287
            }],
            fd = {
                "320x50": ["505657", "505658", "505659"],
                "728x90": ["505649", "505650", "505651", "505652", "505653"],
                "970x90": ["505663"],
                "160x600": ["505654", "505655", "505656"],
                "300x250": ["505644", "505645", "505646", "505647", "505648"],
                "300x600": ["505660", "505661"],
                "970x250": ["541034"]
            },
            gd = {
                51981: {
                    I: {
                        placement: "4783753"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51982: {
                    I: {
                        placement: "4783759"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51983: {
                    I: {
                        placement: "4783760"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51984: {
                    I: {
                        placement: "4783757"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51985: {
                    I: {
                        placement: "4783758"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51986: {
                    I: {
                        placement: "4783755"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51987: {
                    I: {
                        placement: "4783754"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                },
                51988: {
                    I: {
                        placement: "4783756"
                    },
                    N: {
                        network: "10250.1"
                    },
                    M: !1,
                    G: !1
                }
            },
            hd = {},
            id = {},
            jd = {},
            kd = {},
            ld = {},
            md = {},
            nd = {},
            od = {},
            pd = [{
                D: gd[51981],
                L: (hd.size = {
                    H: K,
                    value: [new J(970, 250)]
                }, hd.adUnitName = {
                    H: K,
                    value: [new hc("desktop billboard")]
                }, hd),
                K: 4,
                id: 1113583
            }, {
                D: gd[51982],
                L: (id.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, id.adUnitName = {
                    H: K,
                    value: [new hc("Mobile_Only_7")]
                }, id),
                K: 4,
                id: 1113584
            }, {
                D: gd[51983],
                L: (jd.size = {
                    H: K,
                    value: [new J(320, 50)]
                }, jd.adUnitName = {
                    H: K,
                    value: [new hc("Mobile_Sticky_6_320x50")]
                }, jd),
                K: 4,
                id: 1113585
            }, {
                D: gd[51984],
                L: (kd.size = {
                        H: K,
                        value: [new J(300, 600)]
                    }, kd.adUnitName = {
                        H: K,
                        value: [new hc("Sticky_Bottom_5_300x250")]
                    },
                    kd),
                K: 4,
                id: 1113586
            }, {
                D: gd[51985],
                L: (ld.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, ld.adUnitName = {
                    H: K,
                    value: [new hc("Semi_Sticky_Mid_4_300x250")]
                }, ld),
                K: 4,
                id: 1113587
            }, {
                D: gd[51986],
                L: (md.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, md.adUnitName = {
                    H: K,
                    value: [new hc("Semi_Sticky_Mid_3_300x250")]
                }, md),
                K: 4,
                id: 1113588
            }, {
                D: gd[51987],
                L: (nd.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, nd.adUnitName = {
                    H: K,
                    value: [new hc("Semi_Sticky_Mid_2_300x250")]
                }, nd),
                K: 4,
                id: 1113589
            }, {
                D: gd[51988],
                L: (od.size = {
                    H: K,
                    value: [new J(300, 250)]
                }, od.adUnitName = {
                    H: K,
                    value: [new hc("Semi_Sticky_Mid_1")]
                }, od),
                K: 4,
                id: 1113590
            }],
            qd = {},
            rd = [{
                id: "4783756",
                name: "Semi_Sticky_Mid_1",
                size: "300x250"
            }, {
                id: "4783754",
                name: "Semi_Sticky_Mid_2_300x250",
                size: "300x250"
            }, {
                id: "4783755",
                name: "Semi_Sticky_Mid_3_300x250",
                size: "300x250"
            }, {
                id: "4783758",
                name: "Semi_Sticky_Mid_4_300x250",
                size: "300x250"
            }, {
                id: "4783757",
                name: "Sticky_Bottom_5_300x250",
                size: "300x600"
            }, {
                id: "4783760",
                name: "Mobile_Sticky_6_320x50",
                size: "320x50"
            }, {
                id: "4783759",
                name: "Mobile_Only_7",
                size: "300x250"
            }, {
                id: "4783753",
                name: "desktop billboard",
                size: "970x250"
            }],
            sd = {
                48199: {
                    I: {
                        id: "189932"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48196: {
                    I: {
                        id: "190789"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48194: {
                    I: {
                        id: "190791"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48195: {
                    I: {
                        id: "190790"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48193: {
                    I: {
                        id: "190792"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48198: {
                    I: {
                        id: "189933"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48200: {
                    I: {
                        id: "189931"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48197: {
                    I: {
                        id: "190788"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48201: {
                    I: {
                        id: "189930"
                    },
                    N: {},
                    M: !1,
                    G: !1
                },
                48202: {
                    I: {
                        id: "189929"
                    },
                    N: {},
                    M: !1,
                    G: !1
                }
            },
            td = [{
                D: sd[48193],
                L: {},
                K: 1,
                id: 792248
            }, {
                D: sd[48194],
                L: {},
                K: 1,
                id: 792249
            }, {
                D: sd[48195],
                L: {},
                K: 1,
                id: 792250
            }, {
                D: sd[48196],
                L: {},
                K: 1,
                id: 792251
            }, {
                D: sd[48197],
                L: {},
                K: 1,
                id: 792252
            }, {
                D: sd[48198],
                L: {},
                K: 1,
                id: 792253
            }, {
                D: sd[48199],
                L: {},
                K: 1,
                id: 792254
            }, {
                D: sd[48200],
                L: {},
                K: 1,
                id: 792255
            }, {
                D: sd[48201],
                L: {},
                K: 1,
                id: 792256
            }, {
                D: sd[48202],
                L: {},
                K: 1,
                id: 792257
            }],
            ud = {
                sizeless: "189929 189930 189931 189932 189933 190788 190789 190790 190791 190792".split(" ")
            },
            vd = {
                "9GAG/Unit5": 11750723,
                "9GAG/Unit1  63435": 11750685,
                "9GAG/Unit2": 11750691,
                "9GAG/Unit6": 11750758,
                "9GAG/Unit3": 11750699,
                "9GAG/Unit4": 11750703,
                "9GAG/Unit7  63442": 11750775,
                "9GAG/Unit8 removed": 11750879,
                "9GAG/Unit1  63436": 11750689,
                "9GAG/Unit7  63561": 11750862,
                "Pub_test.9gag.com_default": 11751411
            },
            wd = {
                49414: {
                    I: {
                        siteId: "16872",
                        zoneId: "651706"
                    },
                    N: {
                        accountId: "9472"
                    },
                    M: !0,
                    G: !1
                },
                49415: {
                    I: {
                        siteId: "49760",
                        zoneId: "651708"
                    },
                    N: {
                        accountId: "9472"
                    },
                    M: !0,
                    G: !1
                }
            },
            xd = {},
            yd = {},
            zd = [{
                D: wd[49414],
                L: (xd.adUnitName = {
                    H: function(a, b) {
                        return !K(a, b)
                    },
                    value: [new hc("9GAG/Unit6")]
                }, xd),
                K: 1,
                id: 1008126
            }, {
                D: wd[49415],
                L: (yd.adUnitName = {
                    H: K,
                    value: [new hc("9GAG/Unit6")]
                }, yd),
                K: 1,
                id: 1008127
            }],
            Ad = {
                "Mobile_Only_7_300x250_300,250": "49760",
                "Mobile_Only_7_300x600_300,600": "49760",
                "Mobile_Sticky_6_320x50_320,50": "49760"
            },
            Bd = {
                "Mobile_Only_7_300x250_300,250": "651708",
                "Mobile_Only_7_300x600_300,600": "651708",
                "Mobile_Sticky_6_320x50_320,50": "651708"
            },
            Cd = {
                zoneId: "651706",
                siteId: "16872"
            },
            Dd = {
                7: 1.9,
                1: 1.4,
                4: 1.7,
                6: 1.9,
                3: 1.4,
                2: 1.4,
                9: 1.7,
                5: 1.7,
                8: 1.7
            },
            Ed = {
                dm: .86
            },
            Fd = [2110661901];
        L.C = [];
        L.pa = "9gag.com 9cache.com 9jokes.com 9gag.vm 9gag.com localhost deployads.com ampproject.net sortable.com".split(" ");

        function Gd(a, b, c) {
            this.A = c;
            this.o = a;
            this.B = b;
            this.j = 0;
            this.g = null
        }
        Gd.prototype.get = function() {
            var a;
            0 < this.j ? (this.j--, a = this.g, this.g = a.next, a.next = null) : a = this.o();
            return a
        };

        function Hd(a, b) {
            a.B(b);
            a.j < a.A && (a.j++, b.next = a.g, a.g = b)
        };
        var Jd = new Gd(function() {
            return new Id
        }, function(a) {
            a.reset()
        }, 100);

        function Kd() {
            var a = Ld,
                b = null;
            a.g && (b = a.g, a.g = a.g.next, a.g || (a.j = null), b.next = null);
            return b
        }

        function Id() {
            this.next = this.j = this.g = null
        }
        Id.prototype.set = function(a, b) {
            this.g = a;
            this.j = b;
            this.next = null
        };
        Id.prototype.reset = function() {
            this.next = this.j = this.g = null
        };
        var Md;
        a: {
            var Nd = la.navigator;
            if (Nd) {
                var Od = Nd.userAgent;
                if (Od) {
                    Md = Od;
                    break a
                }
            }
            Md = ""
        }

        function O(a) {
            return -1 != Md.indexOf(a)
        };

        function Pd() {
            return (O("Chrome") || O("CriOS")) && !O("Edge")
        };

        function Qd(a) {
            la.setTimeout(function() {
                throw a;
            }, 0)
        }
        var Rd;

        function Sd() {
            var a = la.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !O("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = u(function(a) {
                        if (("*" == d || a.origin == d) && a.data ==
                            c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !O("Trident") && !O("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var a = c.wb;
                        c.wb = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        wb: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function(a) {
                la.setTimeout(a, 0)
            }
        };

        function Td(a, b) {
            Ud || Vd();
            Wd || (Ud(), Wd = !0);
            var c = Ld,
                d = Jd.get();
            d.set(a, b);
            c.j ? c.j.next = d : c.g = d;
            c.j = d
        }
        var Ud;

        function Vd() {
            if (-1 != String(la.Promise).indexOf("[native code]")) {
                var a = la.Promise.resolve(void 0);
                Ud = function() {
                    a.then(Xd)
                }
            } else Ud = function() {
                var a = Xd;
                !ra(la.setImmediate) || la.Window && la.Window.prototype && !O("Edge") && la.Window.prototype.setImmediate == la.setImmediate ? (Rd || (Rd = Sd()), Rd(a)) : la.setImmediate(a)
            }
        }
        var Wd = !1,
            Ld = new function() {
                this.j = this.g = null
            };

        function Xd() {
            for (var a; a = Kd();) {
                try {
                    a.g.call(a.j)
                } catch (b) {
                    Qd(b)
                }
                Hd(Jd, a)
            }
            Wd = !1
        };

        function R(a, b) {
            this.g = Yd;
            this.F = void 0;
            this.A = this.j = this.o = null;
            this.B = this.C = !1;
            if (a != ma) try {
                var c = this;
                a.call(b, function(a) {
                    Zd(c, $d, a)
                }, function(a) {
                    if (!(a instanceof ae)) try {
                        if (a instanceof Error) throw a;
                        throw Error("Promise rejected.");
                    } catch (e) {}
                    Zd(c, be, a)
                })
            } catch (d) {
                Zd(this, be, d)
            }
        }
        var Yd = 0,
            $d = 2,
            be = 3;

        function ce() {
            this.next = this.A = this.j = this.B = this.g = null;
            this.o = !1
        }
        ce.prototype.reset = function() {
            this.A = this.j = this.B = this.g = null;
            this.o = !1
        };
        var de = new Gd(function() {
            return new ce
        }, function(a) {
            a.reset()
        }, 100);

        function ee(a, b, c) {
            var d = de.get();
            d.B = a;
            d.j = b;
            d.A = c;
            return d
        }

        function fe(a) {
            if (a instanceof R) return a;
            var b = new R(ma);
            Zd(b, $d, a);
            return b
        }

        function ge(a, b, c) {
            he(a, b, c, null) || Td(ya(b, a))
        }

        function ie(a) {
            return new R(function(b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function(a, c) {
                            d--;
                            e[a] = c;
                            d || b(e)
                        }, g = function(a) {
                            c(a)
                        }, h = 0, l; h < a.length; h++) l = a[h], ge(l, ya(f, h), g);
                else b(e)
            })
        }

        function je(a) {
            return new R(function(b) {
                var c = a.length,
                    d = [];
                if (c)
                    for (var e = function(a, e, f) {
                            c--;
                            d[a] = e ? {
                                Yb: !0,
                                value: f
                            } : {
                                Yb: !1,
                                reason: f
                            };
                            c || b(d)
                        }, f = 0, g; f < a.length; f++) g = a[f], ge(g, ya(e, f, !0), ya(e, f, !1));
                else b(d)
            })
        }

        function ke() {
            var a, b = new R(function(b) {
                a = b
            });
            return new le(b, a)
        }
        R.prototype.then = function(a, b, c) {
            return me(this, ra(a) ? a : null, ra(b) ? b : null, c)
        };
        R.prototype.then = R.prototype.then;
        R.prototype.$goog_Thenable = !0;

        function ne(a, b) {
            b = ee(b, b, void 0);
            b.o = !0;
            oe(a, b)
        }

        function pe(a, b) {
            return me(a, null, b, void 0)
        }
        R.prototype.cancel = function(a) {
            this.g == Yd && Td(function() {
                var b = new ae(a);
                qe(this, b)
            }, this)
        };

        function qe(a, b) {
            if (a.g == Yd)
                if (a.o) {
                    var c = a.o;
                    if (c.j) {
                        for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (c.g == Yd && 1 == d ? qe(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : re(c), se(c, e, be, b)))
                    }
                    a.o = null
                } else Zd(a, be, b)
        }

        function oe(a, b) {
            a.j || a.g != $d && a.g != be || te(a);
            a.A ? a.A.next = b : a.j = b;
            a.A = b
        }

        function me(a, b, c, d) {
            var e = ee(null, null, null);
            e.g = new R(function(a, g) {
                e.B = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (m) {
                        g(m)
                    }
                } : a;
                e.j = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        void 0 === e && b instanceof ae ? g(b) : a(e)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.g.o = a;
            oe(a, e);
            return e.g
        }
        R.prototype.O = function(a) {
            this.g = Yd;
            Zd(this, $d, a)
        };
        R.prototype.P = function(a) {
            this.g = Yd;
            Zd(this, be, a)
        };

        function Zd(a, b, c) {
            a.g == Yd && (a === c && (b = be, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, he(c, a.O, a.P, a) || (a.F = c, a.g = b, a.o = null, te(a), b != be || c instanceof ae || ue(a, c)))
        }

        function he(a, b, c, d) {
            if (a instanceof R) return oe(a, ee(b || ma, c || null, d)), !0;
            var e;
            if (a) try {
                e = !!a.$goog_Thenable
            } catch (g) {
                e = !1
            } else e = !1;
            if (e) return a.then(b, c, d), !0;
            if (sa(a)) try {
                var f = a.then;
                if (ra(f)) return ve(a, f, b, c, d), !0
            } catch (g) {
                return c.call(d, g), !0
            }
            return !1
        }

        function ve(a, b, c, d, e) {
            function f(a) {
                h || (h = !0, d.call(e, a))
            }

            function g(a) {
                h || (h = !0, c.call(e, a))
            }
            var h = !1;
            try {
                b.call(a, g, f)
            } catch (l) {
                f(l)
            }
        }

        function te(a) {
            a.C || (a.C = !0, Td(a.J, a))
        }

        function re(a) {
            var b = null;
            a.j && (b = a.j, a.j = b.next, b.next = null);
            a.j || (a.A = null);
            return b
        }
        R.prototype.J = function() {
            for (var a; a = re(this);) se(this, a, this.g, this.F);
            this.C = !1
        };

        function se(a, b, c, d) {
            if (c == be && b.j && !b.o)
                for (; a && a.B; a = a.o) a.B = !1;
            if (b.g) b.g.o = null, we(b, c, d);
            else try {
                b.o ? b.B.call(b.A) : we(b, c, d)
            } catch (e) {
                xe.call(null, e)
            }
            Hd(de, b)
        }

        function we(a, b, c) {
            b == $d ? a.B.call(a.A, c) : a.j && a.j.call(a.A, c)
        }

        function ue(a, b) {
            a.B = !0;
            Td(function() {
                a.B && xe.call(null, b)
            })
        }
        var xe = Qd;

        function ae(a) {
            Aa.call(this, a)
        }
        za(ae, Aa);
        ae.prototype.name = "cancel";

        function le(a, b) {
            this.j = a;
            this.g = b
        };

        function ye(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return t(a) && a.match(/\S+/g) || []
        }

        function ze(a, b) {
            return a.classList ? a.classList.contains(b) : z(ye(a), b)
        }

        function Ae(a, b) {
            a.classList ? a.classList.add(b) : ze(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        }

        function Ce(a) {
            a.classList ? a.classList.remove("ad-tag") : ze(a, "ad-tag") && (a.className = Ha(ye(a), function(a) {
                return "ad-tag" != a
            }).join(" "))
        };

        function De(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        }

        function Ee(a) {
            a = String(a);
            if (De(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        }

        function Fe(a) {
            var b = [];
            Ge(new He, a, b);
            return b.join("")
        }

        function He() {}

        function Ge(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if ("array" == oa(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), Ge(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Ie(d, c), c.push(":"), Ge(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Ie(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) &&
                            !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        }
        var Je = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\x0B": "\\u000b"
            },
            Ke = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

        function Ie(a, b) {
            b.push('"', a.replace(Ke, function(a) {
                var b = Je[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Je[a] = b);
                return b
            }), '"')
        };

        function Le(a) {
            try {
                return JSON.parse(a)
            } catch (b) {
                return Ee(a)
            }
        }

        function S(a) {
            if (Me) return Fe(a);
            try {
                return JSON.stringify(a)
            } catch (b) {
                return Fe(a)
            }
        }
        var Ne;
        try {
            Ne = '{"a":[]}' !== JSON.stringify({
                a: []
            })
        } catch (a) {
            Ne = !0
        }
        var Me = Ne;

        function Oe() {
            var a = H();
            return !!a.AMP_MODE && !!a.context && a.context.hasOwnProperty("ampcontextVersion")
        }

        function Pe(a) {
            return Oe() && a === H() ? a.context.location : a.location
        }
        var Qe = Pe(window).href && 0 < Pe(window).href.indexOf("_adLog") ? 1 : 0,
            xe = function(a) {
                C("unhandled promise rejection", null, a)
            };

        function Re(a, b, c) {
            function d() {
                try {
                    a()
                } catch (e) {
                    throw C("util.setTimeout", a.name || "", e), e;
                }
            }
            .99 < Math.random() && null === window && C("window is null in setTimeout", null, Error());
            return (c = c || window) ? c.setTimeout(d, b) : setTimeout(d, b)
        }

        function Se(a) {
            var b;
            try {
                (b = b || window) ? b.clearTimeout(a): clearTimeout(a)
            } catch (c) {
                C("util.clearTimeout", String(a) || "", c)
            }
        }

        function Te(a, b, c, d) {
            function e(c) {
                try {
                    b.call(f, c)
                } catch (F) {
                    throw C("util.contentLoaded", a, F), F;
                }
            }
            var f = d || window;
            if (0 === c) e("karma");
            else {
                var g = !1;
                d = !0;
                var h = f.document,
                    l = h.documentElement,
                    m = h.addEventListener ? "addEventListener" : "attachEvent",
                    n = h.addEventListener ? "removeEventListener" : "detachEvent",
                    k = h.addEventListener ? "" : "on",
                    p = function(a) {
                        !a || "readystatechange" == a.type && "complete" != h.readyState || (("load" == a.type ? f : h)[n](k + a.type, p, !1), !g && (g = !0) && e(a.type || a))
                    },
                    x = function() {
                        try {
                            l.doScroll("left")
                        } catch (E) {
                            Re(x,
                                50, f);
                            return
                        }
                        p("poll")
                    };
                if ("complete" == h.readyState) e("lazy");
                else {
                    if (h.createEventObject && l.doScroll) {
                        try {
                            d = !f.frameElement
                        } catch (E) {}
                        d && x()
                    }
                    h[m](k + "DOMContentLoaded", p, !1);
                    h[m](k + "readystatechange", p, !1);
                    f[m](k + "load", p, !1);
                    c && Re(function() {
                        p("timeout")
                    }, c, f)
                }
            }
        }

        function Ue() {
            Ve();
            return Ue()
        }

        function Ve() {
            function a(a) {
                var c = f;
                a.type in e ? f = !e[a.type] : f = b.document[d];
                if (c !== f)
                    for (a = Ue(), c = 0; c < g.length; c++) g[c](a)
            }
            var b = H(),
                c = "hidden";
            c in b.document ? document.addEventListener("visibilitychange", a, !1) : (c = "mozHidden") in b.document ? document.addEventListener("mozvisibilitychange", a, !1) : (c = "webkitHidden") in b.document ? document.addEventListener("webkitvisibilitychange", a, !1) : (c = "msHidden") in b.document ? document.addEventListener("msvisibilitychange", a, !1) : c = null;
            "onfocusin" in b.document ? (document.onfocusin =
                function(b) {
                    return a(b || {
                        type: "focusin"
                    })
                }, document.onfocusout = function(b) {
                    return a(b || {
                        type: "focusout"
                    })
                }) : (b.j = function(b) {
                return a(b || {
                    type: "pageshow"
                })
            }, b.g = function(b) {
                return a(b || {
                    type: "pagehide"
                })
            }, b.onfocus = function(b) {
                return a(b || {
                    type: "focus"
                })
            }, b.onblur = function(b) {
                return a(b || {
                    type: "blur"
                })
            });
            var d = c || "hidden",
                e = {
                    focus: !0,
                    focusin: !0,
                    pageshow: !0,
                    blur: !1,
                    focusout: !1,
                    pagehide: !1
                },
                f, g = [];
            Ve = function() {};
            Ue = function() {
                return !f
            };
            a({
                type: "pageshow"
            })
        }

        function We(a, b, c) {
            a && a.addEventListener ? (a.addEventListener(b, c, !1), "click" === b && ("ontouchstart" in window || "msmaxtouchpoints" in window.navigator) && a.addEventListener("touchend", c, !1)) : a && a.attachEvent && a.attachEvent("on" + b, c)
        }

        function Xe(a, b, c) {
            a && a.removeEventListener ? a.removeEventListener(b, c, !1) : a && a.detachEvent && a.detachEvent("on" + b, c)
        }

        function Ye(a) {
            var b = Ze(a),
                c = 0,
                d = 0;
            b && (d = Ab(b), c = d.top, d = d.left);
            a = a.getBoundingClientRect();
            return {
                left: d + a.left,
                top: c + a.top
            }
        }

        function $e(a, b) {
            this.ea = a;
            this.Za = b
        }

        function af(a) {
            a = a || H();
            var b = a.document,
                c = b.documentElement,
                b = b.getElementsByTagName("body")[0];
            return new $e(a.innerWidth || c.clientWidth || b.clientWidth, a.innerHeight || c.clientHeight || b.clientHeight)
        }

        function bf() {
            var a = H().location.pathname;
            0 < a.length && "/" == a.charAt(0) && (a = a.substring(1));
            0 < a.indexOf("/") && (a = a.substring(0, a.indexOf("/")));
            return "" == a ? "home" : a.toLowerCase()
        }

        function T(a) {
            Qe && window.console && window.console.log && ("function" === typeof window.console.log.apply ? window.console.log.apply(window.console, arguments) : Function.prototype.bind ? Function.prototype.bind.call(window.console.log, window.console).apply(window.console, arguments) : Function.prototype.call.call(window.console.log, window.console, Array.prototype.slice.call(arguments)))
        }

        function cf(a) {
            a || (a = window);
            var b = a.document.head;
            b || (b = a.document.getElementsByTagName("head")[0]);
            return b || null
        }

        function df(a, b, c) {
            return new R(function(d, e) {
                function f(a) {
                    var b = g.document.head;
                    if (!b) {
                        var c = g.document.getElementsByTagName("script")[0];
                        c && (b = c.parentNode)
                    }
                    b || (b = g.document.getElementsByTagName("head")[0]);
                    if (b)(c = b.firstChild) ? b.insertBefore(a, c) : b.appendChild(a);
                    else if (g.document.body) g.document.body.appendChild(a);
                    else throw Error("cannot get head or body");
                }
                var g = b || window,
                    h = g.document.createElement("script");
                h.async = !0;
                h.type = "text/javascript";
                void 0 !== c && null !== c && (h.id = c);
                var l = null,
                    l =
                    a.lastIndexOf("http:", 0) && a.lastIndexOf("https:", 0) ? "https:" == g.document.location.protocol ? "https:" + a : "http:" + a : a;
                h.onload = h.onreadystatechange = function() {
                    h.readyState && "loaded" != h.readyState && "complete" != h.readyState || (h.onload = h.onreadystatechange = null, d())
                };
                h.onerror = function() {
                    h.onerror = null;
                    e(db('fail to util.loadAsync: "' + a + '"'))
                };
                try {
                    h.src = l
                } catch (m) {
                    return e(db("fail to util.loadAsync: " + (m && m.message)))
                }
                try {
                    f(h)
                } catch (m) {
                    Te("loadAsync", function() {
                        try {
                            f(h)
                        } catch (n) {
                            e(n)
                        }
                    }, void 0, g)
                }
            })
        }

        function ef(a, b, c) {
            return new R(function(d, e) {
                b || (b = window);
                c && Re(function() {
                    e(db("Timeout loading " + a))
                }, c);
                var f = b.document.createElement("img");
                f.width = 1;
                f.height = 1;
                var g = null,
                    g = a.lastIndexOf("http:", 0) && a.lastIndexOf("https:", 0) ? "https:" == b.document.location.protocol ? "https:" + a : "http:" + a : a;
                f.onload = f.onreadystatechange = function() {
                    f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (f.onload = f.onreadystatechange = null, d())
                };
                f.onerror = function() {
                    f.onerror = null;
                    e(db('fail to util.loadPixel: "' +
                        a + '"'))
                };
                f.src = g
            })
        }
        var ff = !1;

        function gf(a, b, c) {
            try {
                var d = new Date;
                d.setTime(d.getTime() + 6E4 * c);
                window.document.cookie = a + "\x3d" + (escape(b) + (null == c ? "" : "; expires\x3d" + d.toUTCString()) + "; path\x3d/")
            } catch (e) {
                ff || (ff = !0, C("cookie", "set", e))
            }
        }

        function hf(a, b) {
            try {
                var c = window.document.cookie,
                    d = c.indexOf(" " + a + "\x3d"); - 1 == d && (d = c.indexOf(a + "\x3d"));
                if (-1 == d) c = null;
                else {
                    var d = c.indexOf("\x3d", d) + 1,
                        e = c.indexOf(";", d); - 1 == e && (e = c.length);
                    c = unescape(c.substring(d, e));
                    b && gf(a, c, b)
                }
                return c
            } catch (f) {
                return ff || (ff = !0, C("cookie", "get", f)), null
            }
        }

        function jf(a, b, c) {
            var d = {
                    sid: "__rtgt_sid",
                    uid: "d7s_uid"
                },
                e;
            (e = hf(d[a], c)) || (gf(d[a], b, c), e = b);
            return e
        }

        function kf(a, b) {
            var c = null;
            return function() {
                if (!c) {
                    var d = this,
                        e = arguments;
                    c = Re(function() {
                        c = null;
                        a.apply(d, e)
                    }, b)
                }
            }
        }

        function Ze(a) {
            if (!a.ownerDocument) throw Error("no body pw");
            a = a.ownerDocument;
            return a.defaultView || a.parentWindow
        }

        function lf(a) {
            return (a = mf(Ze(a), a, null, null)) ? a.hidden ? -9999 : a.Bb && a.Cb ? a.Bb * a.Cb / (a.maxHeight * a.maxWidth) : 0 - (a.gb || 0) : null
        }

        function nf(a) {
            var b = Ze(a);
            if ("hidden" == a.style.visibility || "none" == a.style.display || 0 === a.style.opacity) return !0;
            if (b.getComputedStyle || a.currentStyle)
                for (var c; a && a != b.document;) {
                    if (!a.parentNode || (c = window.getComputedStyle ? window.getComputedStyle(a, null) : a.currentStyle) && ("hidden" == c.visibility || "none" == c.display || "undefined" !== typeof c.opacity && 1 != c.opacity)) return !0;
                    a = a.parentNode
                }
            return !1
        }

        function of (a, b) {
            var c = {},
                d = [],
                e = [];
            c["class"] = b.className;
            c.id = b.getAttribute("id");
            var f = b.style.visibility;
            "hidden" == f && e.push("self.visibility \x3d\x3d 'hidden'");
            c.visibility = f;
            f = b.style.display;
            "none" == f && e.push("self.display \x3d\x3d 'none'");
            c.display = f;
            f = b.style.opacity;
            0 === f && e.push("self.opacity \x3d\x3d\x3d 0");
            c.opacity = f;
            if (a.getComputedStyle || b.currentStyle) {
                var g = function(b, c) {
                    if (b && b !== a.document) {
                        var f = a.getComputedStyle ? a.getComputedStyle(b, null) : b.currentStyle,
                            h = {};
                        h["class"] =
                            b.className;
                        h.id = b.getAttribute("id");
                        if (f) {
                            var k = f.visibility;
                            "hidden" == k && e.push("parent[" + c + "].visibility \x3d\x3d 'hidden'");
                            h.visibility = k;
                            k = f.display;
                            "none" == k && e.push("parent[" + c + "].display \x3d\x3d 'none'");
                            h.display = k;
                            f = f.opacity;
                            "undefined" !== typeof f && 1 != f && e.push("parent[" + c + "].opacity !\x3d 1");
                            h.opacity = f
                        }
                        d.push(h);
                        return g(b.parentNode, c + 1)
                    }
                };
                g(b.parentNode, 0)
            }
            return {
                self: c,
                parents: d,
                problems: e
            }
        }

        function mf(a, b, c, d) {
            if (pf()) return null;
            var e = b.getBoundingClientRect();
            c || (c = {}, c.maxWidth = e.width, c.maxHeight = e.height, c.depth = 0, c.gb = null);
            c.depth++;
            var f = af(a),
                g = f.ea,
                h = f.Za;
            if (d) {
                var l = d.top + e.top,
                    m = d.left + e.left,
                    n = l + c.maxHeight,
                    k = m + c.maxWidth;
                d = Math.max(0, Math.min(n, h) - Math.max(l, 0));
                f = Math.max(0, Math.min(k, g) - Math.max(m, 0));
                g = [l - h, m - g, 0 - n, 0 - k];
                c.hidden || (c.hidden = nf(b));
                for (b = 0; b < g.length; b++) 0 < g[b] && (null == c.gb || g[b] < c.gb) && (c.gb = g[b]);
                c.Bb > d && (c.Bb = d);
                c.Cb > f && (c.Cb = f)
            } else
                for (c.Bb = Math.max(0,
                        Math.min(e.bottom, h) - Math.max(e.top, 0)), c.Cb = Math.max(0, Math.min(e.right, g) - Math.max(e.left, 0)), g = [e.top - h, e.left - g, 0 - e.bottom, 0 - e.right], c.hidden = nf(b), b = 0; b < g.length; b++) 0 < g[b] && (null == c.gb || g[b] < c.gb) && (c.gb = g[b]);
            return a != a.parent && xb(a.parent) && a.frameElement ? mf(a.parent, a.frameElement, c, e) : c
        }

        function pf() {
            var a = xb(window.top);
            pf = function() {
                return !a
            };
            return pf()
        }

        function qf(a, b) {
            for (var c = 0, d = 0; d < a; d++) c += b ? b[d] : 1;
            for (var c = Math.random() * c, e = d = 0; e < a; e++)
                if (d += b ? b[e] : 1, c <= d) return e;
            return a - 1
        }

        function rf(a) {
            try {
                return window[a ? "sessionStorage" : "localStorage"]
            } catch (b) {
                return null
            }
        }

        function sf(a, b) {
            try {
                var c = rf(b);
                if (!c) return null;
                var d = c.getItem(a);
                return null === d ? null : Le(d)
            } catch (e) {
                return null
            }
        }

        function tf(a, b, c) {
            try {
                var d = rf(c);
                d && (null === b ? d.removeItem(a) : d.setItem(a, S(b)))
            } catch (e) {}
        }

        function uf(a, b, c) {
            a = U(a.ownerDocument).createElement("iframe");
            a.style.width = "string" === typeof b ? b : b + "px";
            a.style.height = "string" === typeof c ? c : c + "px";
            a.style.border = "0";
            a.style["vertical-align"] = "bottom";
            a.scrolling = "no";
            a.marginWidth = "0";
            a.marginHeight = "0";
            a.frameBorder = "0";
            return a
        }

        function vf(a, b, c, d) {
            b = uf(a, b, c);
            a.appendChild(b);
            d && (a = U(b.contentWindow).document, a.open(), a.write(d), a.close())
        }

        function wf(a, b, c) {
            return new R(function(d, e) {
                function f(c) {
                    e(db("CORS request " + c + ": " + a + ' "' + b + '"'))
                }
                var g = new XMLHttpRequest,
                    h = !1;
                if ("withCredentials" in g) h = !1;
                else if ("undefined" != typeof XDomainRequest) h = !0, g = new XDomainRequest;
                else return f("unsupported");
                g.ontimeout = function() {
                    return f("timeout")
                };
                g.onerror = function() {
                    return f("failed")
                };
                g.onload = function() {
                    g.status && 400 <= g.status && 511 >= g.status ? f("bad status " + g.status) : d(g.responseText)
                };
                h ? g.open(a, b) : g.open(a, b, !0);
                c && null != c.timeout && (g.timeout =
                    c.timeout, Re(function() {
                        return f("timeout")
                    }, xf(c.timeout)));
                c && null != c.type && g.setRequestHeader && g.setRequestHeader("Content-Type", c.type);
                c && null != c.withCredentials && (g.withCredentials = c.withCredentials);
                c && null != c.body ? g.send(c.body) : g.send()
            })
        }

        function yf(a) {
            var b = window.deployads = window.deployads || [];
            b.pushFuncs || (b.pushFuncs = []);
            b.pushFuncs.push(a);
            b.push = function(a) {
                for (var c = b.pushFuncs, e = 0; e < c.length; e++) c[e]();
                "function" === typeof a && (b.apiReady ? zf("deployads.push", a) : Array.prototype.push.call(b, a))
            }
        }

        function Af() {
            function a(b) {
                return b && b !== window.document ? ze(b, "ad-tag") ? !0 : a(b.parentNode) : !1
            }
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(window.navigator.userAgent)) {
                var b = Bf();
                Node.prototype.appendChild = function(c) {
                    c && "IFRAME" === c.nodeName && /safeframe/.test(c.src) && a(this) && (c.sandbox = "allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox");
                    return b.apply(this, arguments)
                }
            }
        }

        function Cf() {
            var a = navigator.userAgent || navigator.vendor || window.opera;
            return /FBAV/i.test(a) ? parseInt(a.replace(/.*FBAV\//, "").replace(/\..*/, ""), 10) : 0
        }

        function Df(a, b) {
            C("type assert", a, Error("type is " + Object.prototype.toString.call(b)))
        }

        function Ef(a) {
            !0 !== a && !1 !== a && Df("boolean", a);
            return a
        }

        function Ff(a) {
            t(a) || Df("string", a);
            return a
        }

        function xf(a) {
            qa(a) || Df("number", a);
            return a
        }

        function Gf(a) {
            sa(a) || Df("Object: deployads", a);
            return a
        }

        function Bf() {
            var a = Node.prototype.appendChild;
            ra(a) || Df("Function", a);
            return a
        }

        function U(a) {
            if (null === a || void 0 === a) throw Df("not null", a), new TypeError;
            return a
        }

        function Hf(a, b) {
            return a ? Object.prototype.hasOwnProperty.call(a, b) : !1
        }
        var If = .9 < Math.random();

        function zf(a, b) {
            try {
                b()
            } catch (c) {
                C("try-catch", a, c)
            }
        }

        function Jf(a, b) {
            this.g = a;
            this.j = b
        }

        function Kf() {
            var a;
            a = a || H();
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.getElementsByTagName("body")[0];
            return new $e(a.clientWidth, a.clientHeight)
        }

        function Lf(a) {
            var b = H(),
                c = null;
            b.top == b ? (b = {}, b = Kf(), c = a.getSizes(b.ea, b.Za)) : G("slot not in top window", "", null);
            null == c && (c = a.getSizes());
            return null == c ? null : y(c, function(a) {
                if ("fluid" == a) return a;
                try {
                    return a.getWidth() + "x" + a.getHeight()
                } catch (e) {
                    G("slot size not supported: " + a)
                }
            }).join(",")
        }

        function Mf(a) {
            try {
                for (var b = {}, c = r(a.getTargetingKeys()), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    b[e] = a.getTargeting(e)
                }
                var f = a.getSlotElementId(),
                    g = document.getElementById(f),
                    h = g ? g.getAttribute("data-google-query-id") : null;
                return {
                    adUnitPath: a.getAdUnitPath(),
                    slotElementId: f,
                    googleQueryId: h,
                    size: Lf(a),
                    kv: b
                }
            } catch (l) {
                return {}
            }
        }

        function Nf(a) {
            if (!a) return !1;
            var b = zb();
            a = Ye(a);
            var c = af(),
                d = "D" === tb(),
                c = d ? Math.max(c.Za, 800) : c.Za;
            d || (c -= 50);
            return a && b.top + a.top < c
        }

        function Of() {
            var a = window.googletag = window.googletag || {};
            a.cmd = a.cmd || [];
            return a
        }

        function Pf(a) {
            var b = "",
                c = 0;
            if ("function" !== typeof a.getTargetingKeys) {
                var d = "";
                try {
                    d = window.googletag.getVersion()
                } catch (f) {}
                C("adunit.setCommonTargeting", "v\x3d" + d, Error("slot.getTargetingKeys is not a function"));
                var d = a.getTargetingMap(),
                    e;
                for (e in d) d.hasOwnProperty(e) && (c++ && (b += "\x26"), b += e + "\x3d" + d[e]);
                return b
            }
            w(a.getTargetingKeys(), function(d) {
                c++ && (b += "\x26");
                b += d + "\x3d" + a.getTargeting(d)
            });
            return b
        }

        function Qf(a) {
            return !!(a && a.getAdUnitPath && a.defineSizeMapping)
        }

        function Rf(a, b) {
            a.__ssrt_original_display ? a.__ssrt_original_display(b) : a.display(b)
        }

        function Sf(a, b) {
            return a.__ssrt_original_destroySlots ? a.__ssrt_original_destroySlots(b) : a.destroySlots(b)
        }

        function Tf(a, b, c) {
            a.__ssrt_original_refresh ? a.__ssrt_original_refresh(b, c) : a.refresh(b, c)
        }

        function Uf() {
            try {
                var a = Of().pubads(),
                    b = Object.getPrototypeOf(a);
                if (b) return b.refresh === a.refresh
            } catch (c) {}
            return null
        }
        var Vf = {};

        function Wf(a) {
            Vf["gpt-target"] || (Vf["gpt-target"] = !0, zf("callOnce-gpt-target", a))
        };

        function Xf(a, b) {
            var c = [],
                d;
            for (d in b) b.hasOwnProperty(d) && c.push(encodeURIComponent(d) + "\x3d" + encodeURIComponent(b[d]));
            return a + "?" + c.join("\x26")
        }

        function Yf(a) {
            var b = [];
            a = a.split("\x26");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].split("\x3d", 2);
                b.push([decodeURIComponent(d[0]), decodeURIComponent(d[1] || "")])
            }
            return b
        }

        function Zf(a) {
            for (var b = {}, c = 0; c < a.length; c++) b[a[c][0]] = a[c][1];
            return b
        }

        function $f() {
            return Zf(Yf(H().location.search.replace(/^\?/, "")))
        };

        function ag() {
            this.j = "m"
        }
        ag.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                m: this.message,
                u: this.C,
                p: this.ob,
                pv: this.O,
                b: this.W,
                sid: this.B,
                fu: this.o,
                r: this.A,
                i: this.X,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V
            }
        };

        function bg() {
            this.j = "abe"
        }
        bg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.rb,
                sy: this.Fa,
                u: this.C,
                ab: this.ja,
                t: this.Ua,
                wv: this.sb,
                bz: this.ta,
                g2: this.za,
                ps: this.Ca,
                pv: this.O,
                g1: this.wa,
                b: this.W,
                sg: this.Ga,
                ig: this.T,
                p: this.ya,
                bo: this.ha,
                sk: this.oa,
                ay: this.sa,
                ax: this.ra,
                sid: this.B,
                re: this.ka,
                fu: this.o,
                r: this.A,
                v: this.bb,
                brt: this.ga,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                bri: this.$,
                uo: this.Oa,
                us: this.Ra,
                ai: this.Y,
                s: this.g,
                spa: this.Ma,
                sw: this.xa,
                uid: this.V,
                um: this.Qa,
                ww: this.tb,
                imrt: this.ia,
                hr: this.Aa,
                uc: this.Na,
                im: this.Ba,
                sd: this.Ka,
                si: this.Ja,
                bi: this.R,
                sm: this.Ia,
                sx: this.Ea,
                aly: this.na,
                se: this.Ha,
                sh: this.va,
                gn: this.Sa,
                cr: this.ua,
                sn: this.da,
                ut: this.Va,
                an: this.la,
                bs: this.fa,
                at: this.pa
            }
        };

        function cg() {
            this.j = "ap"
        }
        cg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.ka,
                g2: this.Ga,
                ps: this.sa,
                pv: this.O,
                g1: this.Fa,
                b: this.W,
                sg: this.xa,
                p: this.ta,
                sk: this.Ha,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Oa,
                us: this.Ra,
                ai: this.Y,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Qa,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Na,
                im: this.T,
                sd: this.Ma,
                si: this.Ka,
                bi: this.R,
                sm: this.Ja,
                sx: this.za,
                aly: this.na,
                se: this.Ia,
                sh: this.ua,
                gn: this.Sa,
                cr: this.Ea,
                sn: this.da,
                ut: this.Va,
                pb: this.va,
                an: this.ga,
                bs: this.oa,
                at: this.la
            }
        };

        function dg() {
            this.j = "w"
        }
        dg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                m: this.message,
                u: this.C,
                pv: this.O,
                b: this.W,
                em: this.T,
                sid: this.B,
                fu: this.o,
                r: this.A,
                i: this.X,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V,
                sv: this.Y,
                c: this.R,
                st: this.stack
            }
        };

        function eg() {
            this.j = "abr"
        }
        eg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.Qa,
                sy: this.oa,
                u: this.C,
                ab: this.$,
                t: this.Ua,
                wv: this.Ra,
                bz: this.na,
                g2: this.sa,
                ps: this.wa,
                pv: this.O,
                g1: this.ra,
                b: this.W,
                sg: this.va,
                p: this.za,
                sk: this.Ba,
                ay: this.ja,
                ax: this.ia,
                sid: this.B,
                re: this.Aa,
                fu: this.o,
                r: this.A,
                v: this.Oa,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                bri: this.T,
                uo: this.Ja,
                us: this.Ma,
                ai: this.Y,
                s: this.g,
                spa: this.Ha,
                sw: this.ya,
                uid: this.V,
                um: this.Ka,
                ww: this.Va,
                hr: this.ta,
                uc: this.Ia,
                im: this.ua,
                sd: this.Ga,
                si: this.Fa,
                bi: this.R,
                sm: this.Ea,
                sx: this.ka,
                aly: this.ga,
                se: this.xa,
                sh: this.Ca,
                gn: this.Sa,
                cr: this.pa,
                sn: this.da,
                ut: this.Na,
                an: this.fa,
                bs: this.la,
                at: this.ha
            }
        };

        function fg() {
            this.j = "abn"
        }
        fg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.Ra,
                sy: this.va,
                u: this.C,
                ab: this.ha,
                t: this.Ua,
                wv: this.Va,
                bz: this.ra,
                g2: this.ua,
                ps: this.za,
                pv: this.O,
                g1: this.ta,
                b: this.W,
                sg: this.xa,
                p: this.Aa,
                sk: this.Ca,
                ay: this.pa,
                ax: this.la,
                sid: this.B,
                re: this.Ba,
                fu: this.o,
                r: this.A,
                v: this.Qa,
                brt: this.$,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                bri: this.T,
                uo: this.Ka,
                us: this.Na,
                ai: this.Y,
                s: this.g,
                spa: this.Ia,
                sw: this.ka,
                uid: this.V,
                um: this.Ma,
                ww: this.bb,
                hr: this.wa,
                uc: this.Ja,
                im: this.fa,
                sd: this.Ha,
                si: this.Ga,
                bi: this.R,
                sm: this.Fa,
                sx: this.oa,
                aly: this.ia,
                se: this.Ea,
                sh: this.ya,
                gn: this.Sa,
                cr: this.sa,
                sn: this.da,
                ut: this.Oa,
                an: this.ja,
                bs: this.ga,
                at: this.na
            }
        };

        function gg() {
            this.j = "ak"
        }
        gg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                u: this.C,
                pv: this.O,
                b: this.W,
                pz: this.ga,
                pl: this.Y,
                sid: this.B,
                fu: this.o,
                r: this.A,
                i: this.X,
                cs: this.$,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V,
                im: this.T,
                as: this.R
            }
        };

        function hg() {
            this.j = "ai"
        }
        hg.prototype.S = function() {
            return {
                li: this.Fa,
                bdl: this.J,
                eb: this.ca,
                adi: this.rb,
                wh: this.ja,
                rt1: this.Zc,
                rt2: this.$c,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                rr: this.Na,
                wv: this.Ba,
                chc: this.Va,
                bz: this.Ka,
                g2: this.Ma,
                tl: this.Ha,
                ps: this.sa,
                bdf: this.Ia,
                pv: this.O,
                g1: this.va,
                b: this.W,
                sg: this.Qa,
                "if": this.Ga,
                p: this.ta,
                psp: this.Fb,
                cz: this.Ea,
                gs: this.Eb,
                sk: this.Oa,
                ay: this.fa,
                ci: this.tb,
                qs: this.Ib,
                fls: this.wc,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                ipa: this.xa,
                fu: this.o,
                r: this.A,
                ts: this.Ra,
                fsr: this.Xc,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                di: this.Db,
                bri: this.Ja,
                uo: this.oc,
                rai: this.Hb,
                us: this.tc,
                ai: this.Y,
                s: this.g,
                d7w: this.bb,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.qc,
                ww: this.Ca,
                fsp: this.Vc,
                hr: this.ra,
                uc: this.nc,
                gt: this.Yc,
                im: this.T,
                sd: this.mc,
                si: this.kc,
                bw: this.ka,
                bi: this.R,
                sm: this.jc,
                qq: this.Gb,
                sx: this.za,
                aly: this.na,
                se: this.Tb,
                sh: this.ua,
                tf: this.Jb,
                fr: this.Kb,
                gn: this.Sa,
                cr: this.Sb,
                sn: this.da,
                ali: this.sb,
                ut: this.vc,
                an: this.ga,
                bs: this.oa,
                at: this.la
            }
        };

        function ig() {
            this.j = "e"
        }
        ig.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                m: this.message,
                u: this.C,
                pv: this.O,
                b: this.W,
                em: this.T,
                sid: this.B,
                fu: this.o,
                r: this.A,
                i: this.X,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V,
                sv: this.Y,
                c: this.R,
                st: this.stack
            }
        };

        function jg() {
            this.j = "ati"
        }
        jg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                u: this.C,
                v: this.Y,
                pv: this.O,
                b: this.W,
                sid: this.B,
                fu: this.o,
                r: this.A,
                ts: this.T,
                ti: this.$,
                i: this.X,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V,
                an: this.R
            }
        };

        function kg() {
            this.j = "ac"
        }
        kg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.xa,
                g2: this.Ha,
                ps: this.sa,
                pv: this.O,
                g1: this.Ga,
                b: this.W,
                sg: this.ka,
                p: this.ta,
                sk: this.Ia,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Qa,
                us: this.Va,
                ai: this.Y,
                vn: this.va,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                ei: this.oa,
                um: this.Ra,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Oa,
                im: this.T,
                sd: this.Na,
                si: this.Ma,
                bi: this.R,
                sm: this.Ka,
                sx: this.za,
                aly: this.na,
                se: this.Ja,
                sh: this.ua,
                gn: this.Sa,
                cr: this.Fa,
                sn: this.da,
                ut: this.bb,
                an: this.ga,
                bs: this.Ea,
                at: this.la
            }
        };

        function lg() {
            this.j = "jsr"
        }
        lg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                msg: this.message,
                u: this.C,
                pv: this.O,
                b: this.W,
                sid: this.B,
                fu: this.o,
                r: this.A,
                i: this.X,
                sta: this.status,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V,
                typ: this.type,
                rt: this.fb
            }
        };

        function mg() {
            this.j = "avs"
        }
        mg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.va,
                g2: this.Ga,
                ps: this.sa,
                pv: this.O,
                g1: this.Fa,
                b: this.W,
                sg: this.Ia,
                p: this.ta,
                sk: this.Ha,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Qa,
                us: this.Va,
                ai: this.Y,
                s: this.g,
                vt: this.ka,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Ra,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Oa,
                im: this.T,
                sd: this.Na,
                si: this.Ma,
                bi: this.R,
                sm: this.Ka,
                sx: this.za,
                aly: this.na,
                se: this.Ja,
                sh: this.ua,
                gn: this.Sa,
                cr: this.Ea,
                sn: this.da,
                tsl: this.oa,
                ut: this.bb,
                an: this.ga,
                bs: this.xa,
                at: this.la
            }
        };

        function ng() {
            this.j = "auun"
        }
        ng.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.ka,
                g2: this.Ea,
                ps: this.sa,
                pv: this.O,
                g1: this.xa,
                b: this.W,
                sg: this.Ga,
                p: this.ta,
                sk: this.Fa,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Na,
                us: this.Qa,
                ai: this.Y,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Oa,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Ma,
                im: this.T,
                sd: this.Ka,
                si: this.Ja,
                bi: this.R,
                sm: this.Ia,
                sx: this.za,
                aly: this.na,
                se: this.Ha,
                sh: this.ua,
                gn: this.Sa,
                cr: this.va,
                sn: this.da,
                ut: this.Ra,
                an: this.ga,
                bs: this.oa,
                at: this.la
            }
        };

        function og() {
            this.j = "adf"
        }
        og.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.ka,
                g2: this.Ea,
                ps: this.sa,
                pv: this.O,
                g1: this.xa,
                b: this.W,
                sg: this.Ga,
                p: this.ta,
                sk: this.Fa,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Na,
                us: this.Qa,
                ai: this.Y,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Oa,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Ma,
                im: this.T,
                sd: this.Ka,
                si: this.Ja,
                bi: this.R,
                sm: this.Ia,
                sx: this.za,
                aly: this.na,
                se: this.Ha,
                sh: this.ua,
                gn: this.Sa,
                cr: this.va,
                sn: this.da,
                ut: this.Ra,
                an: this.ga,
                bs: this.oa,
                at: this.la
            }
        };

        function pg() {
            this.j = "pt"
        }
        pg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                cs: this.ia,
                al: this.T,
                u: this.C,
                ab: this.fa,
                res: this.ra,
                rc: this.redirectCount,
                fp: this.$,
                ue: this.oa,
                nt: this.ya,
                de: this.ua,
                ls: this.Ca,
                pv: this.O,
                b: this.W,
                sid: this.B,
                us: this.va,
                fu: this.o,
                sl: this.ga,
                r: this.A,
                fs: this.fetchStart,
                dls: this.Aa,
                sc: this.ka,
                i: this.X,
                di: this.na,
                rss: this.ta,
                tas: this.P,
                iml: this.xa,
                bld: this.F,
                s: this.g,
                dc: this.ja,
                uid: this.V,
                rqs: this.sa,
                ad: this.R,
                ds: this.wa,
                dd: this.la,
                ar: this.Y,
                le: this.Ba,
                ree: this.pa,
                ce: this.ha,
                rse: this.responseEnd,
                dle: this.za
            }
        };

        function qg() {
            this.j = "cba"
        }
        qg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.ka,
                g2: this.Ea,
                ps: this.sa,
                pv: this.O,
                g1: this.xa,
                b: this.W,
                sg: this.Ga,
                p: this.ta,
                sk: this.Fa,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Na,
                us: this.Qa,
                ai: this.Y,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Oa,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Ma,
                im: this.T,
                sd: this.Ka,
                si: this.Ja,
                bi: this.R,
                sm: this.Ia,
                sx: this.za,
                aly: this.na,
                se: this.Ha,
                sh: this.ua,
                gn: this.Sa,
                cr: this.va,
                sn: this.da,
                ut: this.Ra,
                an: this.ga,
                bs: this.oa,
                at: this.la
            }
        };

        function rg() {
            this.j = "p"
        }
        rg.prototype.S = function() {
            return {
                bdl: this.J,
                f: this.floor,
                eb: this.ca,
                pp: this.Sb,
                af: this.ya,
                st: this.mc,
                sy: this.wa,
                u: this.C,
                ab: this.fa,
                idx: this.ga,
                ct: this.Ka,
                wiv: this.Aa,
                upcid: this.oc,
                upaid: this.nc,
                pv: this.O,
                b: this.W,
                av: this.$,
                al: this.Y,
                p: this.la,
                pl: this.pa,
                cid: this.Ba,
                ay: this.ia,
                d: this.Oa,
                ax: this.ha,
                um: this.Eb,
                aa: this.T,
                sid: this.B,
                ld: this.Db,
                pc: this.Ib,
                rf: this.ra,
                acp: this.Ca,
                fu: this.o,
                cn: this.Ma,
                r: this.A,
                lp: this.tb,
                nas: this.Fb,
                sp: this.kc,
                as: this.va,
                upnm: this.qc,
                i: this.X,
                uc: this.Ea,
                pi: this.Gb,
                tas: this.P,
                bld: this.F,
                kw: this.Va,
                ak: this.R,
                ane: this.oa,
                s: this.g,
                ana: this.ka,
                un: this.xa,
                sw: this.ta,
                uid: this.V,
                ut: this.jc,
                wiw: this.wc,
                cap: this.Ha,
                cac: this.Ga,
                us: this.za,
                t: this.type,
                lc: this.sb,
                l: this.rb,
                ie: this.ja,
                cl: this.Fa,
                im: this.Ra,
                wih: this.vc,
                ks: this.bb,
                sx: this.ua,
                ls: this.Tb,
                pb: this.Hb,
                sh: this.sa,
                li: this.na,
                lf: this.Qa,
                cc: this.Ia,
                pt: this.Kb,
                cp: this.Ja,
                cv: this.Na,
                pn: this.Jb,
                upuid: this.tc
            }
        };

        function sg() {
            this.j = "ar"
        }
        sg.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                wh: this.ja,
                sy: this.Aa,
                u: this.C,
                ab: this.ya,
                t: this.Ua,
                wv: this.Ba,
                bz: this.ka,
                g2: this.Ga,
                ps: this.sa,
                pv: this.O,
                g1: this.Fa,
                b: this.W,
                sg: this.xa,
                p: this.ta,
                sk: this.va,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                fu: this.o,
                r: this.A,
                v: this.ia,
                i: this.X,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                uo: this.Na,
                us: this.Qa,
                ai: this.Y,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Oa,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Ma,
                im: this.T,
                sd: this.Ka,
                si: this.Ja,
                bi: this.R,
                sm: this.Ia,
                sx: this.za,
                aly: this.na,
                se: this.Ha,
                sh: this.ua,
                gn: this.Sa,
                cr: this.Ea,
                sn: this.da,
                ut: this.Ra,
                an: this.ga,
                bs: this.oa,
                at: this.la
            }
        };

        function tg() {
            this.j = "ab"
        }
        tg.prototype.S = function() {
            return {
                bdl: this.J,
                sf: this.Qa,
                eb: this.ca,
                wh: this.ja,
                bt: this.Ra,
                bc: this.Va,
                sy: this.Aa,
                u: this.C,
                ab: this.rb,
                t: this.Ua,
                bw: this.Ha,
                wv: this.Ba,
                bz: this.Ea,
                g2: this.tb,
                ps: this.sa,
                bdf: this.ka,
                pv: this.O,
                g1: this.Ia,
                b: this.W,
                sg: this.Ka,
                ig: this.oa,
                p: this.ta,
                bo: this.Ga,
                sk: this.Db,
                ay: this.fa,
                ax: this.pa,
                sid: this.B,
                re: this.$,
                ipa: this.Ja,
                fu: this.o,
                r: this.A,
                bd: this.Oa,
                v: this.ia,
                br: this.xa,
                i: this.X,
                pi: this.D,
                tas: this.P,
                bld: this.F,
                ss: this.ma,
                bp: this.bb,
                bri: this.va,
                uo: this.Jb,
                us: this.Sb,
                ai: this.Y,
                s: this.g,
                spa: this.ha,
                sw: this.wa,
                uid: this.V,
                um: this.Kb,
                ww: this.Ca,
                hr: this.ra,
                uc: this.Ib,
                di: this.ya,
                im: this.T,
                sd: this.Hb,
                si: this.Gb,
                bi: this.R,
                sm: this.Fb,
                sx: this.za,
                aly: this.na,
                se: this.Eb,
                sh: this.ua,
                hf: this.Na,
                gn: this.Sa,
                cr: this.sb,
                sn: this.da,
                ci: this.Ma,
                ut: this.Tb,
                an: this.ga,
                bs: this.Fa,
                at: this.la
            }
        };

        function ug() {
            this.j = "tq"
        }
        ug.prototype.S = function() {
            return {
                bdl: this.J,
                eb: this.ca,
                u: this.C,
                prm: this.ob,
                pv: this.O,
                b: this.W,
                sid: this.B,
                fu: this.o,
                r: this.A,
                i: this.X,
                tas: this.P,
                bld: this.F,
                s: this.g,
                uid: this.V,
                att: this.R
            }
        };
        var vg = null;

        function V() {
            null === vg && (vg = new wg);
            return vg
        }

        function wg() {
            var a = this,
                b = H();
            this.V = this.j = null;
            this.F = 0;
            this.J = this.A = this.O = this.g = null;
            this.j = b.__at_pvid || window.__at_pvid || dc();
            xg(this, this.j);
            this.R = "e.deployads.com";
            this.S = "tags-cdn.deployads.com";
            ub();
            this.o = this.R;
            this.ca = this.S;
            this.X = ("https:" == window.location.protocol ? "https://" : "http://") + this.o;
            this.B = [];
            this.W = kf(function() {
                try {
                    var b = a.B;
                    a.B = [];
                    for (var d = {}, e = 0; e < b.length; e++) {
                        var f = b[e];
                        d[f._type] ? d[f._type].push(f) : d[f._type] = [f]
                    }
                    var b = {},
                        g;
                    for (g in d)
                        if (d.hasOwnProperty(g)) {
                            var e =
                                g,
                                h;
                            var f = void 0,
                                l = d[g];
                            if (1 > l.length) h = l[0];
                            else {
                                var m = {
                                    _count: l.length
                                };
                                for (f in l[0])
                                    if (l[0].hasOwnProperty(f)) {
                                        for (var n = [], k = !0, p = 0; p < l.length; p++) n.push(l[p][f]), 0 < p && l[p][f] !== l[p - 1][f] && (k = !1);
                                        k ? null !== n[0] && (m[f] = n[0]) : m[f] = n
                                    }
                                h = m
                            }
                            b[e] = h
                        }
                    yg(a, b)
                } catch (x) {
                    a.P || (a.P = !0, a.Da("adtracker.flushNow", "", x))
                }
            }, 200);
            this.P = !1
        }

        function xg(a, b) {
            var c = H();
            a.j = c.__at_pvid = window.__at_pvid = b;
            a.V = jf("sid", a.j, 30);
            a.g = jf("uid", a.j, 1051200);
            b = hf("d7s_spc", 30) || "0";
            a.F = parseInt(b, 10);
            gf("d7s_spc", a.F + 1 + "", 30);
            a.O = Pe(c).href;
            a.J = c.document.referrer;
            window !== window.top && (Pe(c).href != window.location.href ? a.A = window.location.href : a.A = "inner")
        }
        wg.prototype.sendMessage = function(a, b) {
            var c = new ag;
            c.message = a;
            c.ob = b;
            c.g = "9gag.com";
            this.send(c);
            T("message:", a, b)
        };
        wg.prototype.C = function(a, b, c) {
            t(b) && 2E3 < b.length && (a += " (message too big)", b = b.slice(0, 2E3));
            "string" === typeof c && (c = Error('throw string: "' + c + '"'));
            if (c && null != c.logPct) {
                if (Math.random() > c.logPct) return;
                a += " (" + 100 * c.logPct + "%)"
            }
            var d = c ? c.stack ? ("" + c.stack).split("\n").slice(0, 4).join("\n").replace(/\n\s*/gm, "\n") : "" + c : null,
                e = new dg;
            e.R = a;
            e.message = b;
            e.T = String(c && c.message) || "";
            e.stack = d;
            this.send(e);
            T(e.Y + ": " + e.R, e.message, e.T, e.stack)
        };
        wg.prototype.Da = function(a, b, c) {
            t(b) && 2E3 < b.length && (a += " (message too big)", b = b.slice(0, 2E3));
            "string" === typeof c && (c = Error('throw string: "' + c + '"'));
            if (c && null != c.logPct) {
                if (Math.random() > c.logPct) return;
                a += " (" + 100 * c.logPct + "%)"
            }
            var d = c ? c.stack ? ("" + c.stack).split("\n").slice(0, 4).join("\n").replace(/\n\s*/gm, "\n") : "" + c : null,
                e = new ig;
            e.Y = "ERROR";
            e.R = a;
            e.message = b;
            e.T = String(c && c.message) || "";
            e.stack = d;
            e.g = "9gag.com";
            this.send(e);
            T(e.Y + ": " + e.R, e.message, e.T, e.stack)
        };

        function zg(a, b) {
            b.g || (b.g = "9gag.com");
            b.O || (b.O = a.j);
            b.C || (b.C = a.O);
            b.A || (b.A = a.J);
            b.o || (b.o = a.A);
            b.B || (b.B = a.V);
            b.V || (b.V = a.g);
            b.P || (b.P = vb());
            b.F || (b.F = 14388);
            b.J || (b.J = wb())
        }
        wg.prototype.send = function(a) {
            if (a.ma && "1x1" === a.ma) .99 <= Math.random() && this.C("AdTracker.send (1%)", "1x1 ad unit related event: " + (a.da ? a.da : "unknown"));
            else {
                zg(this, a);
                var b = a.S();
                b._type = a.j;
                this.B.push(b);
                this.W()
            }
        };

        function yg(a, b) {
            pe(wf("POST", a.X + "/e/9gag.com", {
                type: "text/plain",
                body: S(b)
            }), function() {})
        }

        function Ag(a) {
            var b = H();
            b.__at_beacon || (b.__at_beacon = !0, b = "//ib.adnxs.com/getuid?http://" + a.o + "/e/um.js?apn\x3d$UID\x26uid\x3d" + a.g, "https:" == window.document.location.protocol && (b = "//secure.adnxs.com/getuid?https://" + a.o + "/e/um.js?apn\x3d$UID\x26uid\x3d" + a.g), pe(df(b), function(a) {
                G("apn sync", null, a)
            }))
        }

        function Bg(a, b, c) {
            b._ = dc();
            b = Xf("//" + a.S + "/im/9gag.com.js", b);
            var d = new lg;
            d.type = "im";
            d.g = "9gag.com";
            var e = I();
            return wf("GET", b, {
                timeout: 1500,
                withCredentials: c
            }).then(function(a) {
                return Le(a)
            }).then(function(b) {
                d.fb = I() - e;
                d.status = 200;
                d.message = "Okay";
                a.send(d);
                return b
            }, function(b) {
                d.fb = I() - e;
                d.status = 500;
                d.message = b ? b.message : "";
                a.send(d);
                a.Da("adtracker.getJs", null, b);
                return {}
            })
        }
        (function() {
            var a = V();
            w(eb, function(b) {
                a.Da(b.errorCode, b.message, b.Ob)
            });
            eb = [];
            C = u(a.Da, a);
            w(gb, function(b) {
                a.C(b.Uc, b.message, b.Ob)
            });
            gb = [];
            G = u(a.C, a);
            w(fb, function(b) {
                a.sendMessage(b.message, b.ob)
            });
            fb = [];
            hb = u(a.sendMessage, a)
        })();
        var Cg = null,
            Dg = null,
            Eg = null;

        function Fg(a) {
            if (null === Cg) {
                if ("string" === typeof a) try {
                    a = Le(a)
                } catch (b) {
                    C("imjs", "failed to parse: " + a, b), a = {}
                }
                null == a && (C("imjs", "data is " + a), a = {});
                Cg = a
            }
        }

        function Gg(a, b) {
            var c = !1,
                d = null;
            return function() {
                if (!c) {
                    c = !0;
                    null === Cg && (C("imjs wrap", a, Error("imjs not ready")), Fg({}));
                    var e = Cg;
                    e && (d = e[a]);
                    b && (d = b(d))
                }
                return d
            }
        }

        function Hg() {
            var a = Bb.U().j,
                b = "ssrt_utm_" + a,
                c = null;
            window.deployads.disablePageSegmentSessionTracking || (c = sf(b, !0));
            if (!c) {
                var c = {},
                    d = Zf(Yf(window.location.search.replace(/^\?/, "").replace(/\+/g, " "))),
                    e = d.ssrt_ps;
                e || (e = window.deployads.pageSegment);
                e && (c.page_segment = e);
                d.utm_campaign && (c.utm_campaign = d.utm_campaign);
                d.utm_source && (c.utm_source = d.utm_source);
                d.utm_medium && (c.utm_medium = d.utm_medium);
                d.utm_content && (c.utm_content = d.utm_content);
                d.utm_term && (c.utm_term = d.utm_term);
                if (!window.deployads.disablePageSegmentSessionTracking)
                    for (var f in c)
                        if (c.hasOwnProperty(f)) {
                            tf(b,
                                c, !0);
                            break
                        }
            }
            c.s = a;
            c.c = sb();
            c.u = window.location;
            c.cu = V().g;
            return c
        }

        function Ig() {
            null === Dg && (Dg = pe(new R(function(a, b) {
                var c = H(),
                    d = c.deployads = Gf(c.deployads || []),
                    c = Hg();
                if ("string" === typeof d.__imjs__) return Fg(d.__imjs__), a();
                null == d.__imjs__ && (Eg = I(), d.__imjs__ = Bg(V(), c, void 0 != c.cu).then(function(a) {
                    return S(a)
                }));
                d.__imjs__ && "function" === typeof d.__imjs__.then ? a(d.__imjs__.then(function(a) {
                    Fg(a);
                    d.__imjs__ = a
                })) : b(Error("unknown im cache " + d.__imjs__))
            }), function(a) {
                C("imjs", "unexpected error", a);
                Fg({})
            }), Dg.then(function() {
                var a = Jg();
                a && (gf("d7s_uid", a, 1051200),
                    V().g = a)
            }));
            return Dg
        }
        var Jg = Gg("uid"),
            Kg = Gg("d"),
            Lg = Gg("c"),
            Mg = Gg("ps"),
            Ng = Gg("ts");

        function Og(a) {
            var b = Ng();
            a = "ssrt_ps_v2_" + Bb.U().j + "_" + a;
            var b = {
                    ps: Mg(),
                    ts: b
                },
                c = Le(sf(a, !0));
            !c && b.ps && tf(a, S(b), !0);
            return c && !window.deployads.disablePageSegmentSessionTracking ? c : b
        }
        var Pg = Gg("kv", function(a) {
                return a || {}
            }),
            Qg = Gg("ts", function(a) {
                return null == a ? 0 : a - Eg
            });

        function Rg() {
            this.g = null;
            this.j = {};
            this.A = ["snapsort.com", "cpuboss.com"];
            this.o = {}
        }
        na(Rg);

        function Sg(a, b, c) {
            a.o[b] = c
        }
        Rg.prototype.C = function(a, b) {
            b && b.stopPropagation();
            this.g || (this.g = H());
            this.j.injectModal ? this.j.injectModal(a, this.o) : (b = V(), df("//" + b.ca + "/a/report-ad.js", this.g).then(u(function() {
                this.j = new this.g.ReportAdTemplate("9gag.com");
                this.j.injectModal(a, this.o)
            }, this)))
        };
        Rg.prototype.B = function(a) {
            var b = a.Z;
            this.g || (this.g = H());
            !z(this.A, this.g.location.hostname) || "lead_2" !== b.getName() && "lead_3" !== b.getName() || (b.Ca = "bottom right");
            if (null !== b.Ca && "1x1" !== b.size && (a = W(b)) && !Ja(a.childNodes, function(a) {
                    return a && a.getAttribute && "reportButton" === a.getAttribute("id")
                })) {
                var c = b.Ca.split(" "),
                    d = !c[0] || "top" !== c[0] && "bottom" !== c[1] ? "bottom" : c[0],
                    e = c[1] && z(["right", "left", "center"], c[1]) ? c[1] : "right",
                    c = document.createElement("div");
                c.style[e] = "0";
                "center" !== e && (c.style["float"] =
                    e);
                c.style["min-height"] = "10px";
                c.style["font-size"] = "10px";
                c.style["margin-left"] = "auto";
                c.style["margin-right"] = "auto";
                c.style.color = "#767676";
                c.style.cursor = "pointer";
                c.style.padding = "3px";
                c.innerHTML = "Report Ad";
                b.F && (c.addEventListener("click", u(this.C, this, b.F)), c.setAttribute("id", "reportButton"), "bottom" === d ? (c.style["padding-top"] = "5px", a.appendChild(c)) : (c.style["margin-top"] = "-17px", (b = a.childNodes[0]) ? a.insertBefore(c, b) : a.appendChild(c)))
            }
        };

        function Tg() {
            0 != Ug && (Vg[ta(this)] = this);
            this.ga = this.ga;
            this.wa = this.wa
        }
        var Ug = 0,
            Vg = {};
        Tg.prototype.ga = !1;
        Tg.prototype.ib = function() {
            if (!this.ga && (this.ga = !0, this.mb(), 0 != Ug)) {
                var a = ta(this);
                delete Vg[a]
            }
        };
        Tg.prototype.mb = function() {
            if (this.wa)
                for (; this.wa.length;) this.wa.shift()()
        };

        function Wg() {
            return O("iPhone") && !O("iPod") && !O("iPad")
        };
        var Xg = O("Opera"),
            Yg = O("Trident") || O("MSIE"),
            Zg = O("Edge"),
            $g = O("Gecko") && !(-1 != Md.toLowerCase().indexOf("webkit") && !O("Edge")) && !(O("Trident") || O("MSIE")) && !O("Edge"),
            ah = -1 != Md.toLowerCase().indexOf("webkit") && !O("Edge"),
            bh = ah && O("Mobile"),
            ch;
        a: {
            var dh = "",
                eh = function() {
                    var a = Md;
                    if ($g) return /rv\:([^\);]+)(\)|;)/.exec(a);
                    if (Zg) return /Edge\/([\d\.]+)/.exec(a);
                    if (Yg) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (ah) return /WebKit\/(\S+)/.exec(a);
                    if (Xg) return /(?:Version)[ \/]?(\S+)/.exec(a)
                }();eh && (dh = eh ? eh[1] : "");
            if (Yg) {
                var fh, gh = la.document;
                fh = gh ? gh.documentMode : void 0;
                if (null != fh && fh > parseFloat(dh)) {
                    ch = String(fh);
                    break a
                }
            }
            ch = dh
        };

        function hh(a) {
            this.id = a
        }
        hh.prototype.toString = function() {
            return this.id
        };

        function ih(a, b) {
            this.type = a instanceof hh ? String(a) : a;
            this.j = this.target = b;
            this.fc = !0
        }
        ih.prototype.preventDefault = function() {
            this.fc = !1
        };
        var jh = "closure_listenable_" + (1E6 * Math.random() | 0),
            kh = 0;

        function lh(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Pb = e;
            this.key = ++kh;
            this.Ab = this.Mb = !1
        }

        function mh(a) {
            a.Ab = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Pb = null
        };

        function nh(a) {
            this.src = a;
            this.g = {};
            this.j = 0
        }

        function oh(a, b, c, d, e, f) {
            var g = b.toString();
            b = a.g[g];
            b || (b = a.g[g] = [], a.j++);
            var h = ph(b, c, e, f); - 1 < h ? (a = b[h], d || (a.Mb = !1)) : (a = new lh(c, a.src, g, !!e, f), a.Mb = d, b.push(a))
        }

        function qh(a, b) {
            var c = b.type;
            c in a.g && Oa(a.g[c], b) && (mh(b), a.g[c].length || (delete a.g[c], a.j--))
        }

        function ph(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.Ab && f.listener == b && f.capture == !!c && f.Pb == d) return e
            }
            return -1
        };
        var rh = "closure_lm_" + (1E6 * Math.random() | 0),
            sh = {},
            th = 0;

        function uh(a, b, c, d, e) {
            if ("array" == oa(b))
                for (var f = 0; f < b.length; f++) uh(a, b[f], c, d, e);
            else(c = vh(c), a && a[jh]) ? (a = a.V, b = String(b).toString(), b in a.g && (f = a.g[b], c = ph(f, c, d, e), -1 < c && (mh(f[c]), Array.prototype.splice.call(f, c, 1), f.length || (delete a.g[b], a.j--)))) : a && (a = wh(a)) && (b = a.g[b.toString()], a = -1, b && (a = ph(b, c, !!d, e)), c = -1 < a ? b[a] : null) && (qa(c) || !c || c.Ab || ((d = c.src) && d[jh] ? qh(d.V, c) : (e = c.type, b = c.g, d.removeEventListener ? d.removeEventListener(e, b, c.capture) : d.detachEvent && d.detachEvent(e in sh ? sh[e] :
                sh[e] = "on" + e, b), th--, (e = wh(d)) ? (qh(e, c), e.j || (e.src = null, d[rh] = null)) : mh(c))))
        }

        function wh(a) {
            a = a[rh];
            return a instanceof nh ? a : null
        }
        var xh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

        function vh(a) {
            if (ra(a)) return a;
            a[xh] || (a[xh] = function(b) {
                return a.handleEvent(b)
            });
            return a[xh]
        };

        function yh() {
            Tg.call(this);
            this.V = new nh(this);
            this.Ma = this;
            this.za = null
        }
        za(yh, Tg);
        yh.prototype[jh] = !0;
        yh.prototype.removeEventListener = function(a, b, c, d) {
            uh(this, a, b, c, d)
        };

        function zh(a, b) {
            var c, d = a.za;
            if (d)
                for (c = []; d; d = d.za) c.push(d);
            a = a.Ma;
            d = b.type || b;
            if (t(b)) b = new ih(b, a);
            else if (b instanceof ih) b.target = b.target || a;
            else {
                var e = b;
                b = new ih(d, a);
                Sb(b, e)
            }
            var e = !0,
                f;
            if (c)
                for (var g = c.length - 1; 0 <= g; g--) f = b.j = c[g], e = Ah(f, d, !0, b) && e;
            f = b.j = a;
            e = Ah(f, d, !0, b) && e;
            e = Ah(f, d, !1, b) && e;
            if (c)
                for (g = 0; g < c.length; g++) f = b.j = c[g], e = Ah(f, d, !1, b) && e
        }
        yh.prototype.mb = function() {
            yh.gc.mb.call(this);
            if (this.V) {
                var a = this.V,
                    b = 0,
                    c;
                for (c in a.g) {
                    for (var d = a.g[c], e = 0; e < d.length; e++) ++b, mh(d[e]);
                    delete a.g[c];
                    a.j--
                }
            }
            this.za = null
        };

        function Bh(a, b, c, d, e) {
            oh(a.V, String(b), c, !1, d, e)
        }

        function Ch(a, b, c) {
            oh(a.V, String(Dh), b, !0, !1, c)
        }

        function Ah(a, b, c, d) {
            b = a.V.g[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.Ab && g.capture == c) {
                    var h = g.listener,
                        l = g.Pb || g.src;
                    g.Mb && qh(a.V, g);
                    e = !1 !== h.call(l, d) && e
                }
            }
            return e && 0 != d.fc
        };

        function Eh(a, b) {
            this.g = [];
            this.timeout = a;
            this.o = !0;
            this.j = null;
            this.A = b
        }
        Eh.prototype.enqueue = function(a) {
            this.g.push(a);
            Fh(this)
        };

        function Fh(a) {
            a.j && la.clearTimeout(a.j);
            if (a.o) {
                var b;
                b = a.B;
                var c = a.timeout;
                if (ra(b)) a && (b = u(b, a));
                else if (b && "function" == typeof b.handleEvent) b = u(b.handleEvent, b);
                else throw Error("Invalid listener argument");
                b = 2147483647 < Number(c) ? -1 : la.setTimeout(b, c || 0);
                a.j = b
            }
        }
        Eh.prototype.B = function() {
            this.j = null;
            if (0 < this.g.length) {
                var a = this.g;
                this.g = [];
                this.A(a)
            }
        };

        function Gh(a) {
            a.j && la.clearTimeout(a.j);
            a.o = !1
        };

        function Hh(a, b) {
            this.g = null;
            this.done = !1;
            this.time = a;
            this.wb = b
        }

        function Ih(a, b) {
            Se(a.g);
            a.g = Re(function() {
                a.done || (a.done = !0, zf("exeCb", a.wb))
            }, Math.max(200, a.time - b))
        }

        function Jh() {
            this.o = this.g = 0;
            this.A = I();
            this.j = []
        }

        function Kh(a, b) {
            var c = I(),
                d = .5 <= a.o,
                e = .5 <= b;
            d && (a.g += c - a.A);
            a.o = b;
            a.A = c;
            if (0 < a.j.length && (a.j = Ha(a.j, function(a) {
                    return !a.done
                }), d && !e && w(a.j, function(a) {
                    Se(a.g)
                }), !d && e)) {
                var f = .5 <= a.o ? a.g + I() - a.A : a.g;
                w(a.j, function(a) {
                    Ih(a, f)
                })
            }
        }

        function Lh(a, b) {
            return new R(function(c) {
                var d = .5 <= a.o ? a.g + I() - a.A : a.g;
                c = new Hh(d + b, c);
                .5 <= a.o && Ih(c, d);
                a.j.push(c)
            })
        };

        function Mh(a) {
            var b = {};
            if (!a) return b;
            for (var c = 0; c < a.attributes.length; ++c) {
                var d = a.attributes[c],
                    e = d.name.match(/data-ad-(.*)/);
                e && 2 === e.length && (b[e[1]] = d.value)
            }
            return b
        }

        function Nh(a, b) {
            a = (a || window.document).querySelectorAll(b || "div.ad-tag");
            b = [];
            for (var c = 0; c < a.length; c++) b.push(a[c]);
            return b
        }

        function Oh(a, b, c) {
            var d = [];
            b = Nh(b, c);
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                if (!f.hasAttribute("data-ad-processed")) {
                    f.setAttribute("data-ad-processed", "1");
                    var g = Mh(f);
                    f.id || (f.id = dc());
                    g.id = f.id;
                    try {
                        d.push(a(f, g))
                    } catch (h) {
                        V().Da("error processing tag", c, h)
                    }
                }
            }
        }

        function Ph(a, b) {
            var c = null;
            b && (1 == b.length ? 1 == b[0][0] && 1 == b[0][1] ? (a.style.width = "0px", a.style.height = "0px") : (a.style.width = b[0][0] + "px", a.style.height = b[0][1] + "px", c = b[0]) : (b = U($a(b)), a.style.minWidth = b[0] + "px", a.style.minHeight = b[1] + "px", a.style.width = "", a.style.height = "", c = b));
            a.style["margin-left"] = "auto";
            a.style["margin-right"] = "auto";
            a.style.textAlign = "center";
            return c
        }
        var Qh = "camerarocket.com carsort.com compare-cellphones.org cpuboss.com geekaphone.com gpuboss.com lenshero.com phonerocket.com readerrocket.com snapsort.com ssdboss.com tabletrocket.com twinrev.com ironrank.com".split(" ");

        function Rh(a, b) {
            function c(a) {
                return null == a ? "" : a.replace(/\./g, "_").replace(/ /g, "_")
            }
            if (a) {
                var d = z(Qh, a),
                    e = H();
                Te("pixel", function() {
                    var f = e._qevents = e._qevents || [];
                    df(("https:" == e.document.location.protocol ? "https://secure" : "http://edge") + ".quantserve.com/quant.js", e);
                    var g;
                    g = c(a).toLowerCase();
                    var h = c(b).toLowerCase();
                    g = d ? "owned." + g : "represented." + h + "." + g;
                    try {
                        f.push({
                            qacct: "p-N04C2m09Yy8f8",
                            labels: g
                        })
                    } catch (l) {
                        l && (l.logPct = .01), G("pixel failure 2", "", l)
                    }
                }, void 0, e)
            }
        }

        function Sh(a) {
            function b(a) {
                return e[a] ? e[a] - f : null
            }
            var c = H(),
                d = c.performance || c.msPerformance || c.webkitPerformance || c.mozPerformance;
            d && d.getEntriesByType && w(d.getEntriesByType("resource"), function(a, b) {
                /deployads.com\/(im.js|a\/)|doubleclick.net\/gampad|google.*gpt|c.deployads.com/.test(a.name) && T("Perf summary: resource " + a.name, b, a.startTime | 0, a.fetchStart | 0, a.responseEnd | 0)
            });
            if (!d || !d.timing) return 0;
            var e = d.timing,
                d = d.navigation,
                f = e.navigationStart || 0;
            a.redirectCount = d && d.redirectCount;
            a.ya =
                d && d.type;
            a.ra = b("redirectStart");
            a.pa = b("redirectEnd");
            a.va = b("unloadEventStart");
            a.oa = b("unloadEventEnd");
            a.wa = b("domainLookupStart");
            a.ua = b("domainLookupEnd");
            a.ia = b("connectStart");
            a.ka = b("connectStart");
            a.ha = b("connectEnd");
            a.sa = b("requestStart");
            a.ta = b("responseStart");
            a.responseEnd = b("responseEnd");
            a.la = b("domLoading");
            a.na = b("domInteractive");
            a.Aa = b("domContentLoadedEventStart");
            a.za = b("domContentLoadedEventEnd");
            a.ja = b("domComplete");
            a.Ca = b("loadEventStart");
            a.Ba = b("loadEventEnd");
            a.$ = b("msFirstPaint");
            c.chrome && c.chrome.loadTimes && (c = c.chrome.loadTimes(), a.$ = 1E3 * c.firstPaintTime - f | 0);
            return f
        }

        function Th() {
            var a = kb();
            Th = function() {
                return a
            };
            return a
        };

        function Uh(a, b, c) {
            this.g = {};
            a ? c && (this.g["336x280"] = Vh, this.g["300x600"] = Vh, b || (this.g["728x90"] = Vh, this.g["160x600"] = Vh)) : (this.g["300x50"] = Wh, this.g["320x50"] = Wh, this.g["468x60"] = Wh)
        }
        var Wh = 1,
            Vh = 2;

        function Xh(a, b, c) {
            this.name = a;
            this.type = b;
            this.g = c
        }
        var Yh = new Xh("adx", 0, "0"),
            Zh = new Xh("adxns", 0, "3"),
            $h = new Xh("ads", 1, "1"),
            ai = new Xh("adsx", 1, "5");

        function bi(a, b) {
            this.g = a;
            this.j = b
        }
        bi.prototype.getTargeting = function(a, b) {
            var c = {};
            this.g && (c[this.g.name] = {
                ea: a || 0,
                qa: this.g
            });
            this.j && (c[this.j.name] = {
                ea: b || 0,
                qa: this.j
            });
            return c
        };

        function ei(a, b) {
            b = U(b.frameElement);
            (a = fi(a, b)) ? (b = new qg, gi(a, b), a.g.o.send(b)) : V().Da("adtags.ads.confiant.bidBlocked", "Can't find ad unit when logging bid blocked by Confiant", null)
        }

        function hi(a, b, c, d, e, f) {
            function g(a) {
                return (n(a) || "")[E]("/", "_")[E]("+", "-")
            }

            function h(b, c, d) {
                b = P + k(b) + "\x26d\x3d" + c;
                c = "err__" + Date.now();
                l[c] = d;
                a[D]("\x3c" + p + " on" + F + '\x3d"void(' + c + '())" ' + x + '\x3d"' + b + '" type\x3d"text/java' + p + '" \x3e\x3c/' + p + "\x3e")
            }
            var l = a.parentWindow || a.defaultView,
                m = l.JSON,
                n = l.btoa,
                k = l.encodeURIComponent;
            if (!m || !n) return !1;
            var p = "script",
                x = "src",
                E = "replace",
                F = "error",
                D = "write",
                P = "https://" + e + "/?wrapper\x3d" + k(f) + "\x26tpid\x3d",
                Q = {
                    k: {
                        hb_bidder: [c],
                        hb_size: [d]
                    }
                };
            return function() {
                var c =
                    g(f + "/" + Q.k.hb_bidder[0] + ":" + Q.k.hb_size[0]),
                    d = {
                        wh: c,
                        wd: m.parse(m.stringify(Q)),
                        wr: 0
                    };
                h(c, g(m.stringify(d)), function() {
                    a[D](b)
                });
                d = {
                    d: d,
                    t: b
                };
                l[f] = {};
                l[f][c] = d
            }(), a.close(), !0
        }

        function ii(a, b, c) {
            var d = (Bb.U(), null),
                e = (Bb.U(), null);
            if (d && e) {
                var f = ji(c),
                    g = "\n  bidder shortcode: " + f + "\n  iframe id: " + (a.frameElement && a.frameElement.id);
                T("Confiant running:" + g);
                if (hi(a.document, b, f, c.size, d, e)) return !0;
                T("Confiant failed:" + g)
            }
            return !1
        };

        function ki(a, b, c, d, e) {
            this.G = !1;
            this.Wa = a;
            this.g = b;
            this.Pa = c;
            this.size = d;
            this.j = e || {}
        }

        function li(a) {
            return S({
                code: a.Wa.getName(),
                store: a.j,
                used: a.G,
                cpm: a.g,
                discrepancyFactor: a.Pa,
                size: a.size
            })
        }

        function ji(a) {
            return a.Wa.getName()
        }

        function mi(a, b) {
            a.g = (b || 0) * a.Pa
        }
        ki.prototype.has = function(a) {
            return this.j.hasOwnProperty(a)
        };
        ki.prototype.get = function(a) {
            return this.j[a]
        };
        ki.prototype.set = function(a, b) {
            this.j[a] = b
        };

        function ni(a, b) {
            return (a * b % 1E4).toString(36)
        };

        function oi(a, b) {
            this.A = a;
            this.o = b;
            this.j = {};
            this.g = {}
        }

        function pi(a, b, c) {
            this.j = a;
            this.name = b;
            this.g = c || []
        }
        pi.prototype.select = function(a) {
            var b = Ma(this.g, function(b) {
                return b == a
            }); - 1 == b && (b = this.g.length, this.g.push(a));
            return new qi(this, b)
        };

        function ri(a, b) {
            this.g = a;
            this.j = b
        }
        ri.prototype.select = function() {
            return this.g[qf(this.g.length, this.j)]
        };

        function qi(a, b) {
            this.g = a;
            this.j = b
        }

        function si(a) {
            return a.g.g[a.j]
        }

        function ti(a) {
            var b = [],
                c;
            for (c in a) Hf(a, c) && b.push(a[c].g);
            Ra(b, function(a, b) {
                return Sa(a.name, b.name)
            });
            return b
        }

        function ui() {
            this.o = [];
            this.A = {};
            this.g = new oi("*", -1);
            this.j = sf("com.snapsort.segment", !0) || {};
            T("segment init", this.o)
        }
        na(ui);

        function vi(a) {
            var b = tb(),
                c = a.g;
            a = wi(a, c.A + "," + c.o, "dt", void 0);
            null !== a && (b = a);
            c.j.dt = b
        }

        function xi(a, b, c) {
            return a.select(a.g, b, c, !0)
        }

        function yi(a, b, c) {
            c = "undefined" === typeof c ? 50 : c;
            return "t" === xi(a, b, {
                t: c,
                f: 100 - c
            })
        }

        function zi(a, b) {
            return "t" === Ai(a, b, {
                t: 50,
                f: 50
            })
        }

        function Ai(a, b, c) {
            return a.select(a.g, b, c)
        }

        function Bi(a, b) {
            var c = b.j || "";
            if (b.j) {
                for (var d = 0, e = 0; e < b.g.j.length && b.g.j[e] !== b; e++) b.g.j[e].j == b.j && d++;
                b = d
            } else b = -1;
            4 < b && (b = 4);
            d = c + "," + b;
            e = a.A[d];
            e || (e = new oi(c, b), a.A[d] = e);
            return e
        }

        function Ci(a, b) {
            var c = La(a.o, function(a) {
                return a.name == b
            });
            c || (c = new pi(a.o.length, b), a.o.push(c));
            return c
        }

        function wi(a, b, c, d) {
            var e;
            e = ("ssrt-" + c).replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            e = (e = (new RegExp("[\\?\x26]" + e + "\x3d([^\x26#]*)")).exec(location.search)) ? decodeURIComponent(e[1].replace(/\+/g, " ")) : "";
            return "" != e ? e : d && (b = b + "," + c, a.j.hasOwnProperty(b)) ? a.j[b] : null
        }
        ui.prototype.select = function(a, b, c, d) {
            var e = Ci(this, b),
                f = a.g[e.j],
                g = a.A + "," + a.o;
            if (!f) {
                var h = null,
                    l = null,
                    m = "";
                if (null !== c) {
                    var n;
                    if ("function" == typeof c.select) n = c;
                    else {
                        var l = [],
                            k = [];
                        for (n in c)
                            if (c.hasOwnProperty(n)) {
                                var p = c[n];
                                qa(p) ? 0 < p && (l.push(n), k.push(p)) : qa(p.ea) ? 0 < p.ea && (l.push(n), k.push(p.ea)) : (l.push(n), k.push(1))
                            }
                        n = new ri(l, k)
                    }
                    l = n
                }
                n = wi(this, g, b, d);
                if (!l || null !== n && z(l.g, n)) h = n, m = "loaded";
                null === h && l && (h = l.select(), m = "select");
                null !== h && (f = e.select(h), a.g[e.j] = f, T("segment select", g, b, si(f),
                    m), d && (this.j[g + "," + b] = h, tf("com.snapsort.segment", this.j, !0)))
            }
            a = f ? si(f) : null;
            return c && a in c && "undefined" !== typeof c[a].qa ? c[a].qa : a
        };

        function Di(a, b) {
            function c(a) {
                for (var b in a.g) a.g.hasOwnProperty(b) && (d[b] = a.g[b])
            }
            var d = {};
            c(a.g);
            b && c(b);
            return d
        }

        function Ei(a, b) {
            function c(a) {
                for (var b in a.j) a.j.hasOwnProperty(b) && (d[b] = a.j[b])
            }
            var d = {};
            c(a.g);
            b && c(b);
            return d
        }

        function Fi() {
            this.o = this.g = this.A = this.j = null
        }

        function Gi(a, b) {
            var c = new Fi,
                d = b ? Bi(a, b) : null;
            b = Di(a, d);
            a = Ei(a, d);
            var d = [],
                e;
            for (e in a) a.hasOwnProperty(e) && d.push(e);
            Ra(d);
            c.j = d;
            e = [];
            for (var f = 0; f < d.length; f++) e.push(a[d[f]]);
            c.A = e;
            e = ti(b);
            a = [];
            for (d = 0; d < e.length; d++) a.push(e[d].name);
            c.g = a;
            e = ti(b);
            a = [];
            for (d = 0; d < e.length; d++) a.push(si(b[e[d].j]));
            c.o = a;
            return c
        }

        function Hi(a, b) {
            var c = "";
            if ((a = Gi(a, b)) && (a.j && 0 < a.j.length || a.g && 0 < a.g.length)) {
                if (a.j)
                    for (b = 0; b < a.j.length; b++) b && (c += "\x26"), c += a.j[b] + "\x3d" + a.A[b];
                c += "|";
                if (a.g)
                    for (b = 0; b < a.g.length; b++) b && (c += "\x26"), c += a.g[b] + "\x3d" + a.o[b]
            }
            return c
        };
        var Ii = [];

        function Ji(a, b, c) {
            b = b || {};
            this.name = a;
            this.V = void 0 == c ? !1 : c;
            this.S = xf(null == b.Pa ? 1 : b.Pa);
            this.zb = Ef(null == b.zb ? !1 : b.zb);
            this.Vb = b.Vb ? b.Vb : null;
            this.Ta = Ef(null == b.Ta ? !1 : b.Ta)
        }

        function Ki(a, b) {
            try {
                var c = xi(ui.U(), "predo", {
                    none: 1,
                    prefetch: 1,
                    preconnect: 1,
                    both: 1
                });
                if (!z(Ii, a)) {
                    Ii.push(a);
                    var d = function() {
                            var c = b.document.createElement("link");
                            c.rel = "dns-prefetch";
                            c.href = a;
                            var d = cf(b);
                            d && d.appendChild(c)
                        },
                        e = function() {
                            var c = b.document.createElement("link");
                            c.rel = "preconnect";
                            c.href = a;
                            c.setAttribute("crossorigin", "");
                            var d = cf(b);
                            d && d.appendChild(c)
                        };
                    switch (c) {
                        case "prefetch":
                            d();
                            break;
                        case "preconnect":
                            e();
                            break;
                        case "both":
                            d(), e()
                    }
                }
            } catch (f) {
                C("prepare domain", a, f)
            }
        }
        q = Ji.prototype;
        q.lb = function() {
            var a = (Ed || {})[this.name];
            return null === a || void 0 === a ? this.S : a
        };
        q.jb = function() {
            throw Error(this.name + ".fetchBids not implemented");
        };
        q.ub = function() {
            throw Error(this.name + ".renderAd not implemented");
        };

        function Li(a, b) {
            try {
                for (var c = 0, d = 0; d < b.length; ++d) c = 31 * c + b.charCodeAt(d) >>> 0;
                a.set("creativeHashCode", String(c))
            } catch (e) {
                C("hash creative", String(b), e)
            }
        }
        q.ic = function() {
            return null
        };

        function Mi(a, b, c, d) {
            return new ki(a, (b || 0) * a.lb(), a.lb(), c, d)
        }

        function Ni(a) {
            return new ki(a, 0, a.lb(), null, {})
        }
        q.getName = function() {
            return this.name
        };

        function Oi(a, b, c) {
            .99 < Math.random() && V().sendMessage("lack ids", S({
                bidder: a.name,
                size: b,
                site: "9gag.com",
                message: c || ""
            }))
        }

        function Pi(a) {
            try {
                return a ? a.document.documentElement : null
            } catch (b) {
                return null
            }
        }

        function Qi(a) {
            return pb("CAD", "USD", a)
        };
        var Ri = ["ox", "sv", "ix"];

        function Si() {
            if (z(Qh, "9gag.com")) {
                var a = ui.U();
                return Ha(Ri, function(b) {
                    return zi(a, "eb-" + b)
                })
            }
            return []
        }

        function Ti() {
            this.g = Si()
        }
        na(Ti);

        function Ui() {
            this.j = null;
            this.g = {};
            ui.U();
            var a = {
                updated: 0,
                slots: {}
            };
            this.j = (this.j = sf("com.snapsort.bidmodel")) || a;
            72E5 < (new Date).getTime() - this.j.updated && (this.j.slots = {})
        }
        na(Ui);

        function Vi(a, b) {
            var c = 5,
                d = Lg();
            (d = (d = d && d[a.getName()]) && d[Yh.g]) && (c = (2 < d.length ? d[b] : c) || c);
            return c
        };

        function Wi(a, b) {
            this.g = b;
            ih.call(this, a, b)
        }
        za(Wi, ih);
        var Xi = new hh("a"),
            Yi = new hh("b"),
            Zi = new hh("c");

        function $i(a, b) {
            this.Z = b;
            ih.call(this, a, b)
        }
        za($i, ih);

        function aj(a, b, c) {
            this.Z = b;
            this.g = c;
            ih.call(this, a, b)
        }
        za(aj, ih);

        function bj(a, b, c) {
            this.Z = b;
            this.g = c;
            ih.call(this, a, b)
        }
        za(bj, ih);
        var cj = new hh("d"),
            dj = new hh("e"),
            Dh = new hh("f"),
            ej = new hh("g"),
            fj = new hh("h");

        function gj() {
            this.g = {};
            this.j = new Zb
        }
        gj.prototype.has = function(a) {
            return !!this.g[a]
        };
        gj.prototype.get = function(a) {
            return this.has(a) ? this.g[a] : []
        };

        function hj(a, b) {
            return a.has(b) ? a.get(b).join(",") : null
        }

        function ij(a, b) {
            delete a.g[b]
        }
        gj.prototype.set = function(a, b) {
            null === b || void 0 === b ? ij(this, a) : this.g[a] = t(b) ? [b] : b
        };

        function jj(a, b) {
            var c = tb(),
                d = new Date(Date.now() + Qg());
            a.set("r", "" + (Math.floor((d.getTime() - Date.UTC(d.getUTCFullYear(), 0)) / 864E5) % 2 << 10 | Math.floor((60 * d.getUTCHours() + d.getUTCMinutes()) / 15) << 3 | (b ? 1 : 0) << 2 | ("D" == c ? 1 : "S" == c ? 2 : "T" == c ? 3 : 0)))
        }

        function kj() {
            var a = lj,
                b = Kg();
            if (b) {
                var c = Og(b).ps;
                c && a.set("ps", c);
                b = Og(b);
                if (b.ps && b.ts) {
                    var c = (new Date(b.ts)).getUTCHours(),
                        d = "ps1";
                    12 <= c && (d = "ps2");
                    b = {
                        k: d,
                        v: b.ps + "_" + c
                    }
                } else b = null;
                b && a.set(b.k, b.v)
            }
        }

        function mj(a, b) {
            for (var c in a.g)
                if (a.g.hasOwnProperty(c)) {
                    b.setTargeting(c, a.g[c]);
                    var d = c;
                    a.j.g.set($b(d), d)
                }
        }

        function nj(a, b) {
            w(a.j.Xa(), function(a) {
                b.clearTargeting(a)
            })
        }
        var lj = new gj;

        function oj(a) {
            switch (a) {
                case 0:
                    return "top";
                case 1:
                    return "bottom";
                case 2:
                    return "left";
                case 3:
                    return "right"
            }
            return null
        }

        function pj() {
            this.j = [0];
            this.La = null;
            this.g = !1;
            this.o = null
        }

        function qj() {
            var a = new pj;
            a.j = [1];
            a.g = !0;
            a.o = ["ad-sticky-anchor"];
            var b = H();
            a.La = function() {
                var a = af(b),
                    d = zb();
                return {
                    top: (1.3 * a.Za | 0) - d.top,
                    bottom: 2 * a.Za,
                    left: 0,
                    right: a.ea
                }
            };
            return a
        };
        var rj = O("Firefox"),
            sj = Wg() || O("iPod"),
            tj = O("iPad"),
            uj = O("Android") && !(Pd() || O("Firefox") || O("Opera") || O("Silk")),
            vj = Pd(),
            wj = O("Safari") && !(Pd() || O("Coast") || O("Opera") || O("Edge") || O("Silk") || O("Android")) && !(Wg() || O("iPad") || O("iPod"));

        function xj(a) {
            return (a = a.exec(Md)) ? a[1] : ""
        }
        var yj = function() {
            if (rj) return xj(/Firefox\/([0-9.]+)/);
            if (Yg || Zg || Xg) return ch;
            if (vj) return xj(/Chrome\/([0-9.]+)/);
            if (wj && !(Wg() || O("iPad") || O("iPod"))) return xj(/Version\/([0-9.]+)/);
            if (sj || tj) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Md);
                if (a) return a[1] + "." + a[2]
            } else if (uj) return (a = xj(/Android\s+([0-9.]+)/)) ? a : xj(/Version\/([0-9.]+)/);
            return ""
        }();

        function zj() {
            this.g = H();
            var a = {};
            this.A = (a.ClckArtfcl = 10, a["Click on invisible element"] = 10, a);
            a = {};
            this.j = (a.ClckArtfcl = u(this.B, this), a["Click on invisible element"] = u(this.C, this), a.NoWhl = u(this.F, this), a);
            We(this.g, "click", this.j["Click on invisible element"]);
            Xe(this.g, "touchend", this.j["Click on invisible element"]);
            We(this.g, "click", this.j.ClckArtfcl);
            Xe(this.g, "touchend", this.j.ClckArtfcl);
            var b = H();
            if (-1 != b.navigator.userAgent.toLowerCase().indexOf("phantom")) a = [];
            else {
                a = [];
                try {
                    b.navigator.plugins instanceof
                    PluginArray && b.navigator.plugins.length || a.push("np");
                    (b.callPhantom || b._phantom || b.__phantomas || b.Buffer || b.emit || b.spawn || b.webdriver || b.domAutomation || b.domAutomationController) && a.push("tgv");
                    qa(b.outerWidth) && qa(b.outerHeight) && (b.outerWidth || b.outerHeight) || a.push("nwdz");
                    var c = !1;
                    try {
                        new Function("() \x3d\x3e{}")
                    } catch (d) {
                        c = !0
                    }(!"foo".includes || c) && (c = (c = !1, Y(Zg, 14)) || Y(Xg, 36) || Y(vj, 49) || Y(wj, 10) || Y(rj, 53) || Y(uj, 49, !0) || Y(vj, 49, !0) || Y(rj, 53, !0) || Y(Xg, 36, !0) || Y(wj, 10, !0)) && a.push("es6ns");
                    Function.prototype.bind ||
                        (c = (c = !1, Y(Yg, 10)) || Y(Zg, 12) || Y(Xg, 15) || Y(vj, 23) || Y(wj, 6) || Y(rj, 21) || Y(uj, 56, !0) || Y(vj, 57, !0) || Y(rj, 52, !0) || Y(Xg, 37, !0) || Y(wj, 6, !0)) && a.push("efnp");
                    b.AudioContext || b.webkitAudioContext || (b = (b = !1, Y(Zg, 0)) || Y(Xg, 22) || Y(vj, 35) || Y(wj, 6) || Y(rj, 25) || Y(uj, 42, !0) || Y(vj, 42, !0) || Y(rj, 37, !0) || Y(Xg, 0, !0) || Y(wj, 9, !0)) && a.push("ac");
                    try {
                        throw Error("My personal error because something happened");
                    } catch (d) {
                        d.stack && -1 != d.stack.toLowerCase().indexOf("phantom") && a.push("st")
                    }
                } catch (d) {
                    a.push("edt")
                }
            }
            this.o = a;
            0 < this.o.length &&
                Aj(this, "HB Indications Present", this.o.join("\x26"));
            if (a = !!rf(!1)) a = (a = this.g) || H(), a = !1 !== (a.document.body ? qa(a.document.body.scrollHeight) && 0 < a.document.body.scrollHeight ? a.document.body.scrollHeight > a.document.body.clientHeight : qa(a.document.body.scrollWidth) && 0 < a.document.body.scrollWidth ? a.document.body.scrollWidth > a.document.body.clientWidth : null : null);
            if (a) {
                a = sf("uscr-p");
                b = sf("uscr-p-last-reported");
                if (void 0 === a || null === a || void 0 === b || null === b) Bj(), a = sf("uscr-p"), b = sf("uscr-p-last-reported");
                a = Ea(a);
                b = Ea(b);
                500 >= a && 10 <= a - b && (b = a, tf("uscr-p-last-reported", b), Aj(this, "NoWhl", b.toString()));
                tf("uscr-p", a + 1);
                this.g && We(this.g, "scroll", this.j.NoWhl)
            }
        }
        na(zj);
        zj.prototype.C = function(a) {
            0 >= this.A["Click on invisible element"] ? Xe(this.g, "click", this.j["Click on invisible element"]) : (a = a || this.g.event, a = lf(a.target || a.srcElement), null !== a && 0 >= a && Aj(this, "Click on invisible element"))
        };
        zj.prototype.B = function(a) {
            if (0 >= this.A.ClckArtfcl) Xe(this.g, "click", this.j.ClckArtfcl);
            else try {
                !a || a.clientX || a.clientY || Aj(this, "ClckArtfcl")
            } catch (b) {}
        };

        function Aj(a, b, c) {
            b in a.A && 0 >= a.A[b] || (b in a.A && a.A[b]--, a = new ug, a.R = b, t(c) && (a.ob = c), V().send(a))
        }

        function Cj() {
            var a = zj.U();
            return z(a.o, "tgv") || z(a.o, "es6ns") || z(a.o, "ac") || z(a.o, "st") || z(a.o, "efnp")
        }

        function Y(a, b, c) {
            if ((c || !1) === bh && a) {
                a = 0;
                c = Ca(String(yj)).split(".");
                b = Ca(String(b)).split(".");
                for (var d = Math.max(c.length, b.length), e = 0; !a && e < d; e++) {
                    var f = c[e] || "",
                        g = b[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length) break;
                        a = Da(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Da(0 == f[2].length, 0 == g[2].length) || Da(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (!a)
                }
                a = 0 <= a
            } else a = !1;
            return a
        }

        function Bj() {
            tf("uscr-p", 0);
            tf("uscr-p-last-reported", 0)
        }
        zj.prototype.F = function() {
            Xe(this.g, "scroll", this.j.NoWhl);
            var a = sf("uscr-p-last-reported");
            Bj();
            0 < a && Aj(this, "NoWhl", "0")
        };
        var Dj = y(["u", "u2", "u3", "u4", "u5"], function(a) {
            return "" + a
        });

        function Ej(a, b) {
            this.key = a;
            this.value = b
        }

        function Fj() {
            this.g = {}
        }

        function Gj(a, b) {
            if (b) {
                var c = a.g[b];
                c || (c = new Ej(Dj[Math.floor(Math.random() * Dj.length)], Math.floor(1E5 * Math.random()).toString(36)), a.g[b] = c);
                a = c
            } else a = new Ej(null, null);
            return a
        }

        function Hj(a, b) {
            a = Gj(a, b);
            return a.key && a.value ? a.key + "\x3d" + a.value : null
        }
        na(Fj);

        function Ij() {
            yh.call(this);
            this.za = this.g = Jj.U();
            this.$ = dc();
            this.id = null;
            this.ka = -1;
            this.Ha = this.size = this.name = this.Hc = null;
            this.ya = !1;
            this.Ca = null;
            this.va = !1;
            var a = Bb.U();
            this.ja = a.S;
            this.Ea = !1;
            this.X = 0;
            this.Wb = !1;
            this.ua = 0;
            this.xa = this.Ba = null;
            this.fa = 0;
            var a = a.wa,
                b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                a = c
            } else a = [];
            this.Ja = a;
            this.Ka = this.Oa = this.floor = this.P = null;
            this.B = new gj;
            this.pa = [];
            this.oa = this.O = this.j = null;
            this.W = this.na = Kj;
            this.J = this.sa = null;
            this.Ia = this.Fa = !0;
            this.o = {
                kb: null,
                event: null,
                time: null,
                yb: null
            };
            this.ma = this.A = this.R = null;
            this.T = this.Y = !1;
            this.ca = this.ta = this.da = 0;
            this.F = null;
            this.S = !1;
            this.ia = null;
            this.C = [];
            this.ra = new Zb;
            this.visibility = new Jh;
            this.la = this.ha = null;
            this.Ga = !1;
            this.Na = I();
            this.Aa = []
        }
        za(Ij, yh);
        var Kj = -1;

        function Lj(a) {
            switch (a) {
                case "width":
                    return 0;
                case "height":
                    return 1;
                case "both":
                    return 2
            }
            return Kj
        }

        function Mj(a, b, c) {
            a.Aa.push({
                e: b,
                t: I() - a.Na,
                i: c
            });
            20 < a.Aa.length && a.Aa.shift()
        }

        function Nj(a, b) {
            return {
                au_name: a.name,
                au_id: a.id,
                au_size: a.size,
                au_slot_name: a.j,
                au_imp_id: a.F,
                au_passbackSource: a.P,
                au_passbackCount: a.fa,
                au_slotDisplayed: a.Y,
                au_fetchInProgress: a.T,
                au_isLoadComplete: a.S,
                au_recordedEvents: a.Aa,
                au_slot: a.A ? Mf(a.A) : null,
                extra: b ? b : null
            }
        }

        function Oj(a, b) {
            return S(Nj(a, b))
        }

        function Pj(a, b, c) {
            if (a.J) {
                var d = a.sa && Wa(a.sa),
                    e = a.sa = null,
                    f = null;
                0 === a.na || 0 === a.W || 2 === a.na || 2 === a.W ? e = d ? d[0] : c ? c[0] : null : d && d[0] > a.J[0] && (e = d[0]);
                1 === a.na || 1 === a.W || 2 === a.na || 2 === a.W ? f = d ? d[1] : c ? c[1] : null : d && d[1] > a.J[1] && (f = d[1]);
                c = (c = W(a)) && c.querySelector && c.querySelector("div\x3ediv\x3eiframe");
                null != e && (b.style.width = e + "px", b.style.minWidth = "0", c && c.setAttribute && c.setAttribute("width", e));
                null != f && (b.style.height = f + "px", b.style.minHeight = "0", c && c.setAttribute && c.setAttribute("height", f));
                a.J = null
            }
        }

        function Qj(a, b) {
            if (b && (b = Ca(b)))
                if ("1x1" === b) a.size = "1x1", a.C = [];
                else if ("auto" === b) a.size = null, a.C = [], a.ya = !0;
            else {
                for (var c = [], d = r(y(b.split(","), function(a) {
                        return Ca(a)
                    })), e = d.next(); !e.done; e = d.next()) {
                    e = bb(e.value);
                    if (!e || 1 >= e[0] || 1 >= e[1]) {
                        C("invalid size", 'Invalid ad size "' + b + '".', Error("Invalid ad size: " + b));
                        return
                    }
                    c.push(e)
                }
                a.size = Xa(c);
                a.C = c
            } else a.size = null, a.C = []
        }

        function Rj(a, b) {
            a.ka = b.id;
            a.name = b.name;
            a.size !== b.size && (a.size = b.size, a.C = [], Qj(a, b.size));
            a.j = b.g
        }

        function W(a) {
            try {
                if (a.id) {
                    var b = window.document.getElementById(a.id);
                    if (b) return b
                }
                return null
            } catch (c) {
                return V().Da("getElement", Object.prototype.toString.call(window), c), null
            }
        }
        q = Ij.prototype;
        q.mb = function() {
            zh(this, new $i(fj, this));
            Ij.gc.mb.call(this)
        };

        function Sj(a, b) {
            Ja(a.pa, function(a) {
                return a === b
            }) || (a.pa.push(b), a.pa.sort())
        }

        function Tj(a) {
            if (!a.size) return -1;
            for (var b = 0, c = 0; c < a.g.j.length && a.g.j[c] !== a; c++) a.g.j[c].size == a.size && b++;
            return b
        }
        q.getName = function() {
            return this.name || ""
        };

        function Uj(a) {
            return (a = W(a)) ? !0 === nf(a) : !1
        }

        function Vj(a) {
            var b = a.A;
            if (null === b) C("null _slot", Oj(a));
            else {
                nj(a.B, b);
                jj(a.B, 0 < a.X);
                var c = Gj(Fj.U(), a.F);
                c.key && (c.value ? a.B.set(c.key, c.value) : ij(a.B, c.key));
                c = [];
                Qa(a.Ja, c, function(a) {
                    return a
                });
                0 < c.length ? a.B.set("skip", c) : ij(a.B, "skip");
                0 < a.pa.length ? a.B.set("st", a.pa) : ij(a.B, "st");
                mj(a.B, b);
                null !== a.oa && b.setCollapseEmptyDiv(a.oa)
            }
        }
        q.reload = function(a) {
            Mj(this, "reload", {
                type: a
            });
            if (this.A)
                if (Uj(this)) G("ad unit hidden in DOM; did not reload", Oj(this));
                else if (W(this))
                if (this.ga) G("reload disposed ad", Oj(this));
                else {
                    var b = Wj(this, a);
                    T("reload called", this.getName(), a, b);
                    b && (this.Ba = null, clearTimeout(this.xa), this.Ea ? (this.Ea = !1, a = new og, gi(this, a), T("defined ad unit after newPage call in single page app: " + this.name), V().send(a)) : this.X++, T("reloading ad unit ", this.name), Xj(this, !0))
                }
            else G("ad unit not found in DOM; did not reload",
                Oj(this));
            else hb("reload without slot", Oj(this))
        };

        function Wj(a, b) {
            if (!a.S || a.T) {
                var c = I() - Math.max(a.da, a.ta, a.ca),
                    d = Oj(a, {
                        interval: c,
                        isLoadComplete: a.S,
                        fetchInProgress: a.T,
                        loadStartTimestamp: a.da,
                        fetchStartTimestamp: a.ta,
                        loadEndTimestamp: a.da
                    });
                if (1E4 >= c) return Yj(a, "reload before finish", d), !1;
                hb("reload before finish after 10s", d)
            }
            if ("f" === b) return !0;
            if (a.Ia) return Yj(a, "no refresh declaration"), !1;
            if (a.X >= a.ja) return Yj(a, "Attempt to exceed max reload"), !1;
            var c = a.ca,
                d = I(),
                e = [];
            if (null !== a.o.kb && ("u" === b || "ue" === b)) {
                if (c + a.o.kb < d) return !0;
                e.push(a.o.kb)
            }
            if (null !==
                a.o.event && ("e" === b || "ue" === b)) {
                if (c + a.o.event < d) return !0;
                e.push(a.o.event)
            }
            if (null !== a.o.time && "t" === b) {
                if (!a.o.yb || c + a.o.time / 1 < d) return !0;
                e.push(a.o.time)
            }
            0 < e.length && (e = Math.min.apply(Math, e), null === a.Ba || e < a.Ba) && (clearTimeout(a.xa), a.Ba = e, a.xa = Re(function() {
                return a.reload(b)
            }, c + e - d));
            return !1
        }

        function Zj(a, b) {
            a.Ia = !1;
            a.o.yb = -1 != b.indexOf("manual-time");
            var c = b.match(/user[^\d]*(0s|30s|60s)/i),
                d = b.match(/event[^\d]*(30s|60s|90s)/i);
            b = b.match(/time[^\d]*(\d*)s/i);
            c && (a.o.kb = 1E3 * parseInt(c[1], 10));
            d && (a.o.event = 1E3 * parseInt(d[1], 10));
            if (b) {
                var e = parseInt(b[1], 10),
                    f = 30;
                Ja([360, 300, 240, 180, 120, 90, 60, 30], function(a) {
                    f = a;
                    return e >= a
                });
                a.o.time = 1E3 * f
            }
            switch (a.o.kb) {
                case 0:
                    Sj(a, "2");
                    break;
                case 3E4:
                    Sj(a, "3");
                    break;
                case 6E4:
                    Sj(a, "4")
            }
            switch (a.o.event) {
                case 3E4:
                    Sj(a, "5");
                    break;
                case 6E4:
                    Sj(a, "6");
                    break;
                case 9E4:
                    Sj(a, "7")
            }
            switch (a.o.time) {
                case 3E4:
                    Sj(a, "8");
                    break;
                case 6E4:
                    Sj(a, "9");
                    break;
                case 9E4:
                    Sj(a, "a");
                    break;
                case 12E4:
                    Sj(a, "b");
                    break;
                case 18E4:
                    Sj(a, "c");
                    break;
                case 24E4:
                    Sj(a, "d");
                    break;
                case 3E5:
                    Sj(a, "e");
                    break;
                case 36E4:
                    Sj(a, "f")
            }
        }
        q.Jc = function(a) {
            8 < this.fa ? T("too many passbacks ", this.id) : (this.fa++, "t1" == a ? C("t1 passback", Oj(this)) : (this.P = a || "unknown", a && this.Ja.push(a), T("passback ad unit ", this.P, this.id, this.fa, this.ia), this.S && Xj(this, !1)))
        };

        function Yj(a, b, c) {
            var d = new kg;
            gi(a, d);
            d.ka = Hi(ui.U(), a);
            d.va = b;
            d.oa = c || "";
            a.g.o.send(d);
            b = "compliance: " + b + ("; name\x3d" + a.name);
            b += ", id\x3d" + a.id;
            b += ", size\x3d" + a.size;
            c && (b += ', info\x3d"' + c + '"');
            T(b)
        }

        function ak(a, b) {
            var c = new ng;
            gi(a, c);
            c.ga = b;
            a.g.o.send(c);
            T("unknown unit name: " + b + "; id\x3d" + a.id + ", size\x3d" + a.size)
        }

        function gi(a, b) {
            var c = zb(),
                d = W(a),
                e = d ? Ye(d) : null,
                f = af(),
                g = H().screen,
                h = !H().orientation || 180 == H().orientation;
            b.g = a.g.ba.j;
            b.T = a.F;
            b.ta = hj(lj, "pt");
            b.ga = a.name;
            b.Y = a.ka;
            b.na = hj(lj, "al");
            b.la = hj(lj, "at");
            b.sa = hj(lj, "ps");
            b.da = a.j;
            b.ma = a.size;
            b.$ = a.X;
            b.ha = a.g.ba.J;
            d ? (d = lf(d), d = null == d ? !0 : 0 < d) : d = !1;
            b.ia = d;
            b.Ba = Ue();
            b.ja = f.Za;
            b.Ca = f.ea;
            b.za = c.left;
            b.Aa = c.top;
            b.ua = g ? (h ? g.height : g.width) || -1 : -1;
            b.wa = g ? (h ? g.width : g.height) || -1 : -1;
            b.pa = e ? c.left + e.left : -1;
            b.fa = e ? c.top + e.top : -1;
            b.ya = a.g.P;
            b.ra = Cj()
        }

        function bk(a, b) {
            b.Sa = hj(a.B, "s");
            a.A && (b.Ua = Pf(a.A))
        }

        function ck(a) {
            try {
                T("onLoadStart  " + a.id);
                a.da = I();
                0 == a.g.X && (a.g.X = a.da);
                a.F = dc();
                a.S = !1;
                a.fa = 0;
                var b = new sg;
                gi(a, b);
                var c = dk(a.g.A.o, a.$);
                if (c) {
                    var d = Ui.U(),
                        e = c.result.g || 0,
                        f = a && (a.j || "");
                    if (f && e) {
                        var g = d.g[f];
                        if (!g || e > g) d.g[f] = e
                    }
                    b.R = Math.floor(c.result.g || 0);
                    b.oa = ji(c.result);
                    b.ka = c.result.size
                }
                b.va = Hj(Fj.U(), a.F);
                a.O && a.O.g ? a.B.set("s", a.O.g.g) : ij(a.B, "s");
                var h;
                var l = Ui.U(),
                    d = 0,
                    m = a && (a.j || "");
                m ? (l.g && l.g[m] && (d = l.g[m]), h = d) : h = d;
                var n = Lg(),
                    k = n && n[a.getName()],
                    n = 0;
                if (a.O) {
                    if (k) var p = k[Yh.g],
                        n =
                        p && 2 < p.length ? p[1] : 0;
                    else n = "US" == sb() ? "D" === tb() ? 80 : 45 : "D" === tb() ? 35 : 20;
                    a.Ka = n;
                    if (h) {
                        var x;
                        var E = ui.U(),
                            F = Gi(E, a),
                            D = Ga(F.g, "bff");
                        if (0 <= D) x = Number(F.o[D]);
                        else {
                            var P = V().F + 1,
                                Q = Math.max((Dd || {})[P] || 2, 1.1),
                                k = {},
                                X = (k["1"] = 1, k[(.9 * Q).toFixed(1)] = 1, k[Q.toFixed(1)] = 7, k[(1.1 * Q).toFixed(1)] = 1, k);
                            x = Number(E.select(Bi(E, a), "bff", X))
                        }
                        h > .9 * n && (n = h * x)
                    }
                }
                var Z = Bb.U().R,
                    fa = ek(pb("CAD", Z, n));
                a.floor = pb(Z, "CAD", fa);
                a.B.set("bf", ni(6691, fa));
                a: {
                    var A = a.B;b: {
                        if (c && c.result.has("dealId")) {
                            var B = c.result.get("dealId");
                            if (null !== B && "undefined" !== typeof B) {
                                A.set("bd", B);
                                ij(A, "bf");
                                ij(A, "s");
                                break b
                            }
                        }
                        ij(A, "bd")
                    }
                    if (c) {
                        var Za = c.result.size;
                        if (null !== Za) {
                            var aa = c.result.g || 0,
                                ob = Bb.U().W,
                                aa = pb("CAD", ob, aa || 0),
                                Be = ni(1089, null == aa || 1 > aa ? 1 : 100 > aa ? Math.floor(aa) : 500 > aa ? 2 * Math.floor(aa / 2) : 1E3 > aa ? 10 * Math.floor(aa / 10) : 1E4 > aa ? 120 * Math.floor((aa - 1E3) / 120) + 1E3 : 9880);
                            A.set("bs", Za);
                            A.set("b", Be);
                            break a
                        }
                        C("null bid size")
                    }
                    ij(A, "bs");ij(A, "b")
                }
                zh(a, new aj(dj, a, b));
                var ci = b.ia,
                    di = b.fa < 1.2 * (b.ja || 0),
                    c = [];
                ci && di ? c.push("1") : ci ? c.push("2") :
                    di ? c.push("3") : c.push("0");
                70 <= rb(a.getName()) && c.push("4");
                a.B.set("v", c);
                Vj(a);
                bk(a, b);
                b.xa = Hi(a.g.B, a);
                a.g.o.send(b)
            } catch (Xk) {
                a.g.o.Da("onLoadStart", null, Xk)
            }
        }

        function fk(a, b, c) {
            w([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], function(d) {
                var e = 1E3 * d;
                Lh(a.visibility, e).then(function() {
                    if (!a.ga && b === a.ua) {
                        var d = I() - c,
                            g = new mg;
                        gi(a, g);
                        g.ka = e / 1E3;
                        d = Math.floor(d / 1E3);
                        g.oa = d;
                        V().send(g);
                        T("Visible for " + e / 1E3 + "s; Time since loaded: " + d + "s; name\x3d" + a.getName() + ", id\x3d" + (a.id ? a.id : ""))
                    }
                })
            })
        }

        function gk(a, b, c, d, e, f, g, h) {
            try {
                var l = I();
                a.ca = l;
                a.ua += 1;
                fk(a, a.ua, a.ca);
                0 == a.g.W && (a.g.W = l, hk(a.g));
                if (b) c = null;
                else if (null == c) {
                    c = 98;
                    var m = hj(a.B, "s");
                    null != m && (c = 99, m = parseFloat(m), isFinite(m) && (c = m))
                }
                var n = W(a),
                    k = new hg;
                gi(a, k);
                k.sb = d;
                k.Db = f;
                k.tb = g;
                k.rb = h;
                k.Ha = a.ca - a.da;
                k.Jb = a.ca - a.ta;
                k.Ib = Xa(a.C);
                k.Ea = e ? Ya(e) : null;
                var p = a.ha ? {
                    isEmpty: a.ha.isEmpty,
                    lineItemId: a.ha.lineItemId,
                    size: a.ha.size,
                    hij: Uf()
                } : {};
                zf("qqid", function() {
                    k.Gb = a.A ? a.A.getEscapedQemQueryId() : null
                });
                p.hidden = Uj(a);
                k.Hb = S(p);
                a.ia =
                    k.Fa = c;
                bk(a, k);
                k.Qa = Hi(a.g.B, a);
                a.g.g.pubads().clearTargeting("amznslots");
                U(a.A).clearTargeting("amznslots");
                var x = Hg();
                if (x) {
                    var E = Ia("utm_medium utm_term utm_content utm_source utm_campaign page_segment".split(" "), function(a, b) {
                        x[b] && (a[b] = x[b]);
                        return a
                    }, {});
                    k.Fb = S(E)
                }
                a.X || (k.Ga = a.ca - a.g.C, k.Kb = a.da - a.g.C, k.Ra = a.g.R);
                k.Na = S({
                    e: a.o.event,
                    u: a.o.kb,
                    t: a.o.time,
                    m: a.o.yb
                });
                n && (n.setAttribute("data-ad-imp", "" + a.F), Pj(a, n, e));
                k.Eb = a.floor;
                k.va = a.Oa;
                k.Ma = a.Ka;
                k.Oa = Hj(Fj.U(), a.F);
                a.O && null != c && 99 >= c &&
                    (k.ka = "goog", k.xa = a.g.ba.ha);
                var F = a.g.A.o,
                    D = ik(F, a.F);
                if (D) {
                    k.ka = ji(D.result);
                    k.Ia = D.result.Pa;
                    k.xa = D.result.Wa.Ta;
                    D.result.has("creativeHashCode") && (k.Va = D.result.get("creativeHashCode"));
                    Sg(Rg.U(), k.T, li(D.result));
                    var P = D.result.Wa.ic(a);
                    P && jk(a, P);
                    "d7s" === k.ka && (k.bb = D.result.get("d7sBidder"))
                } else z(Fd || [], f) && G("HB won without rendering", Oj(a));
                var Q = D ? D : dk(F, a.$);
                Q && (Sg(Rg.U(), k.T, li(Q.result)), k.R = Math.floor(Q.result.g || 0), k.oa = ji(Q.result), k.Ka = Q.result.size, k.Ja = Q.request.o);
                ij(a.B, "b");
                ij(a.B, "bs");
                ij(a.B, "bd");
                for (var X = r(a.g.A.g), Z = X.next(); !Z.done; Z = X.next()) {
                    var fa = Z.value,
                        A = D && D.result.Wa === fa ? D : kk(F, a.$, fa.getName());
                    b = A && A === Q;
                    if (A) {
                        var B = new tg;
                        B.g = k.g;
                        B.T = k.T;
                        B.da = k.da;
                        B.va = A.request.o;
                        B.Fa = fa.getName();
                        B.Ea = A.result.size;
                        B.R = Math.floor(A.result.g || 0);
                        B.Ra = b;
                        B.Ha = A.result.G;
                        B.ha = a.g.ba.J;
                        B.$ = a.X;
                        Q && (B.Va = Math.floor(Q.result.g || 0), B.bb = ji(Q.result));
                        B.Ia = Math.floor(a.floor);
                        B.xa = A.fb;
                        B.Ga = A.j;
                        B.oa = A.g;
                        B.ka = A.result.Pa;
                        B.Ja = fa.Ta;
                        B.Na = Math.floor(A.request.O);
                        B.Qa = Math.floor(A.request.B);
                        A.result.has("bidId") && (B.Oa = A.result.get("bidId"));
                        A.result.has("creativeId") && (B.Ma = A.result.get("creativeId"));
                        A.result.has("dealId") && (B.ya = A.result.get("dealId"));
                        A.result.has("placementInfo") && (B.D = A.result.get("placementInfo"));
                        B.Ka = Hi(ui.U(), a);
                        V().send(B)
                    }
                }
                zh(a, new aj(Dh, a, k));
                k.oa && !k.ka && null == c && hb("bidSrc bid yet unfilled", Oj(a, {
                    bidSrc: k.oa,
                    bid: k.R
                }));
                T("onLoadComplete  " + a.id + "/" + a.name + "\n Rendered size: " + e + "\n gT1Floor: " + k.va + "\n bid(cents): " + k.R + "\n bid source: " + k.oa + "\n bid winner: " +
                    k.ka + "\n refresh: " + k.$ + "\n lineItemId: " + (null == c ? "(empty)" : c) + "\n load time: " + k.Ha + " ms\n initial load time: " + k.Ga + " ms");
                a.g.o.send(k);
                var Za = H(),
                    aa = n && n.getAttribute("data-ad-onload"),
                    ob = aa && Za[aa];
                n && "function" === typeof ob && ob(n, {
                    unfilled: null == c
                })
            } catch (Be) {
                a.g.o.Da("onLoadComplete", null, Be)
            }
        }

        function jk(a, b) {
            var c = 0,
                d = null;
            a.reload = function(a) {
                c++;
                d = a
            };
            b.then(function() {
                a.reload = Ij.prototype.reload;
                0 < c && a.reload(d)
            })
        }

        function lk(a) {
            if (a.id && a.j && a.size) {
                if (!a.A) return !0;
                if (a.g.$) {
                    var b = a.A.getAdUnitPath();
                    return a.j.toLowerCase() != b.toLowerCase()
                }
            }
            return !1
        }

        function mk(a) {
            if (lk(a)) {
                var b = !a.A;
                0 == a.g.S && (a.g.S = I());
                if (a.A) {
                    var c = W(a),
                        d = a.id = "ad-" + dc();
                    if (c) {
                        var e = c.cloneNode(!1);
                        e.id = d;
                        U(c.parentElement).insertBefore(e, c);
                        U(c.parentElement).removeChild(c)
                    }
                }
                c = a.g.g;
                null == a.j && V().sendMessage("null slotName", S({
                    slotName: a.j,
                    name: a.name
                }));
                (d = La(a.g.g.pubads().getSlots(), function(b) {
                    return b.getSlotElementId() === a.id
                })) ? a.A = d: (a.Y = !1, a.A = c.defineSlot(a.j || "", a.C, a.id || void 0), U(a.A).addService(c.pubads()));
                b ? (b = new og, gi(a, b), a.g.o.send(b), T("defined ad unit ",
                    a.name), zh(a, new $i(cj, a))) : T("redefined ad unit ", a.name)
            }
        }

        function nk(a, b) {
            try {
                Mj(a, "slotRenderEnded");
                a.Ga || C("complete before start", Oj(a));
                var c = b.isEmpty,
                    d = b.lineItemId,
                    e = b.sourceAgnosticLineItemId,
                    f = b.size,
                    g = b.campaignId,
                    h = b.creativeId,
                    l = b.advertiserId;
                Oe() && b && window.context.reportRenderedEntityIdentifier("" + b.creativeId);
                a.P ? Xj(a, !1) : a.S ? Yj(a, "extra-complete", Oj(a, {
                    isEmpty: c,
                    lineItemId: d,
                    orderId: g,
                    size: f
                })) : (a.S = !0, a.ha = b, gk(a, c, d, e, f, g, h, l))
            } catch (m) {
                C("renderEndedImpl", "", m)
            }
        }

        function Xj(a, b) {
            a.T || !b && null === a.P && !lk(a) || (a.T = !0, Mj(a, "fetchAd"), a.g.da.enqueue(a))
        }
        q.display = function() {
            this.Wb = !0;
            Xj(this, !1)
        };

        function ok(a) {
            var b = U(W(a)),
                c = ["ad-title", "ad-body", "ad-media", "ad-call-to-action"];
            a = [];
            for (var d = 0; d < c.length; d++) {
                var e = b.getElementsByClassName(c[d]);
                if (1 != e.length || z(a, e[0])) return !1;
                a.push(e[0])
            }
            c = b.getElementsByTagName("style")[0];
            if (!c || c && z(a, c)) return !1;
            a.push(c);
            b = b.getElementsByTagName("a")[0];
            return !b || b && z(a, b) ? !1 : !0
        };

        function ek(a) {
            return 5E3 <= a ? 5E3 : 4E3 <= a ? 200 * Math.floor(a / 200) : 3E3 <= a ? 100 * Math.floor(a / 100) : 2E3 <= a ? 50 * Math.floor(a / 50) : 1E3 <= a ? 25 * Math.floor(a / 25) : 100 <= a ? 10 * Math.floor(a / 10) : 50 <= a ? 5 * Math.floor(a / 5) : 5 <= a ? Math.floor(a) : 5
        }

        function pk() {
            var a = Bb.U();
            return a.A ? a.fa : !!a && "undefined" != typeof a.o && a.o !== Yh && a.o !== Zh && a.o !== $h && a.o !== ai
        };

        function qk(a, b, c, d) {
            Ji.call(this, a, c);
            var e = this;
            this.g = {};
            Kb(b, function(a, b) {
                e.g[rk(b)] = a
            });
            this.j = "https:" === document.location.protocol ? "//secure.adnxs.com" : "//ib.adnxs.com";
            Ki(this.j, H());
            this.o = d
        }
        ka(qk, Ji);

        function rk(a) {
            return gc(a).replace(/[^A-Za-z0-9_\.\%\-\"]/g, "")
        }
        qk.prototype.jb = function(a, b) {
            var c = this,
                d = H(),
                e = jb(tb());
            b(y(a, function(a) {
                return new R(function(b) {
                    var f = Ya(a.g[0]),
                        g = a.g.slice(1),
                        m = c.g[f],
                        n = null,
                        k = !1;
                    c.g.sizeless && (m = c.g.sizeless);
                    e && "br" === c.name && (m = c.g["mobile_" + f]);
                    var p = rk(a.j);
                    c.g[p] && (n = c.g[p], m = null, k = !0);
                    if (!n)
                        for (; !m && g.length;) f = Ya(g.shift()), g = g.slice(1), m = e && "br" === c.name ? c.g["mobile_" + f] : c.g[f];
                    if (n || m && (n = m.shift())) {
                        m && 0 == m.length && m.push(n);
                        var p = "psa\x3d0\x26id\x3d" + n + ("\x26size\x3d" + f),
                            x = Bb.U();
                        x.B && (p += "\x26pmp\x3d" + x.B);
                        g.length && (p += "\x26promo_sizes\x3d" + Xa(g), p += "\x26promo_alignment\x3dcenter");
                        p += "\x26referrer\x3d" + encodeURIComponent(Pe(d).href);
                        if (g = a.B) g = Math.floor(Qi(g)), p += "\x26reserve\x3d" + (g / 100).toFixed(2);
                        if (k) {
                            if (k = a.J) k = Math.floor(Qi(k)), k = ek(k), p += "\x26sr\x3d" + k;
                            k = Ai(ui.U(), "brf", {
                                0: {
                                    ea: 50,
                                    qa: "0"
                                },
                                1: {
                                    ea: 1,
                                    qa: "1"
                                },
                                2: {
                                    ea: 1,
                                    qa: "2"
                                },
                                3: {
                                    ea: 24,
                                    qa: "3"
                                },
                                4: {
                                    ea: 24,
                                    qa: "4"
                                }
                            });
                            "0" != k && (p += "\x26br\x3d" + k)
                        }
                        c.o && (p += "\x26ext_inv_code\x3d" + c.o);
                        var E = c.name + "_cb_" + dc(),
                            p = c.j + "/jpt?" + p + "\x26callback\x3d" + E;
                        d[E] = function(a) {
                            try {
                                try {
                                    delete d[E]
                                } catch (B) {
                                    d[E] =
                                        void 0
                                }
                                var e;
                                a: {
                                    var g = f,
                                        h = '{"tagId":"' + n + '"}';h || (h = "no placement info");
                                    try {
                                        var k = a && a.result;
                                        if (!k) {
                                            e = null;
                                            break a
                                        }
                                        var l = k.width,
                                            p = k.height;
                                        l && p && (g = l + "x" + p);
                                        var x = Math.floor(pb("USD", "CAD", k.cpm / 100));
                                        a = {};
                                        e = Mi(c, x, g, (a.creative = k.ad, a.creativeId = k.creative_id, a.dealId = k.deal_id, a.placementInfo = h, a));
                                        break a
                                    } catch (B) {
                                        V().Da("appnexusbase.handleResponse", null, B)
                                    }
                                    e = null
                                }
                                b(e);
                                m && m.push(n)
                            } catch (B) {
                                C("appbase callback", "", B)
                            }
                        };
                        pe(df(p, d), function(a) {
                            C("appnexus requests", "", a);
                            b(null)
                        })
                    } else Oi(c,
                        Xa(a.g), a.name + "," + a.j), b(null)
                })
            }))
        };
        qk.prototype.ub = function(a, b) {
            var c = Pi(a);
            if (c && b) {
                var d = b.size;
                if (null === d) throw Error("app null size");
                var e = Wa(d),
                    d = Ff(b.get("creative"));
                if (!d) throw Error("app invalid creative: " + d);
                var f = e[0],
                    g = e[1];
                ii(a, '\n      \x3ciframe\n      src\x3d"' + d + '"\n      style\x3d"border: 0;width: ' + ("string" === typeof f ? f : f + "px") + ";height: " + ("string" === typeof g ? g : g + "px") + ';"\n      marginwidth\x3d"0"\n      marginheight\x3d"0"\n      frameBorder\x3d"0"\n      scrolling\x3d"no"\x3e\n      \x3c/iframe\x3e\n    ', b) ||
                    (T("confiant: wrapper did not run, rendering ourselves"), a = uf(c, e[0], e[1]), /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(window.navigator.userAgent) && (a.sandbox = "allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox"), a.setAttribute("src", d), c = U(c.ownerDocument), U(c.body).appendChild(a));
                b.G = !0;
                Li(b, d)
            }
        };
        qk.prototype.ic = function(a) {
            return this.Ta ? null : Lh(a.visibility, 6E4)
        };

        function sk(a, b) {
            try {
                (new Function(b))()
            } catch (c) {
                C("fail to load prebid.js module", a, c)
            }
        }
        var tk = !1;

        function uk(a, b) {
            tk || (tk = !0, sk("prebidCore", '/* prebid.js v0.31.0\nUpdated : 2017-11-13 */\n!(function(e){function t(r){if(n[r])return n[r].exports;var i\x3dn[r]\x3d{i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l\x3d!0,i.exports}var r\x3dwindow.pbjsChunkSortable;window.pbjsChunkSortable\x3dfunction(n,o,a){for(var s,d,u,c\x3d0,l\x3d[];c\x3cn.length;c++)d\x3dn[c],i[d]\x26\x26l.push(i[d][0]),i[d]\x3d0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)\x26\x26(e[s]\x3do[s]);for(r\x26\x26r(n,o,a);l.length;)l.shift()();if(a)for(c\x3d0;c\x3ca.length;c++)u\x3dt(t.s\x3da[c]);return u};var n\x3d{},i\x3d{107:0};t.e\x3dfunction(e){if(0\x3d\x3d\x3di[e])return callback.call(null,t);console.error("webpack chunk not found and jsonp disabled")},t.m\x3de,t.c\x3dn,t.d\x3dfunction(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n\x3dfunction(e){var r\x3de\x26\x26e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o\x3dfunction(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p\x3d"",t.oe\x3dfunction(e){throw console.error(e),e},t(t.s\x3d264)})([(function(e,t,r){"use strict";function n(){return h()+Math.random().toString(16).substr(2)}function i(e){if(t.isArray(e)\x26\x262\x3d\x3d\x3de.length\x26\x26!isNaN(e[0])\x26\x26!isNaN(e[1]))return e[0]+"x"+e[1]}function o(){return window.console\x26\x26window.console.log}function a(e,t,r){return r.indexOf(e)\x3d\x3d\x3dt}function s(e,t){return e.concat(t)}function d(e){return Object.keys(e)}function u(e,t){return e[t]}function c(e,t){return t.filter((function(t){return e[t]})).reduce((function(t,r){return l(t,(function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]\x3dr,e})({},r,e[r]))}),{})}Object.defineProperty(t,"__esModule",{value:!0});var l\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},f\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e};t.parseSizesInput\x3dfunction(e){var t\x3d[];if("string"\x3d\x3dtypeof e){var r\x3de.split(","),n\x3d/^(\\d)+x(\\d)+$/i;if(r)for(var o in r)T(r,o)\x26\x26r[o].match(n)\x26\x26t.push(r[o])}else if("object"\x3d\x3d\x3d(void 0\x3d\x3d\x3de?"undefined":f(e))){var a\x3de.length;if(a\x3e0)if(2\x3d\x3d\x3da\x26\x26"number"\x3d\x3dtypeof e[0]\x26\x26"number"\x3d\x3dtypeof e[1])t.push(i(e));else for(var s\x3d0;s\x3ca;s++)t.push(i(e[s]))}return t},t.parseGPTSingleSizeArray\x3di,t.uniques\x3da,t.flatten\x3ds,t.getBidRequest\x3dfunction(e){return pbjsSortable._bidsRequested.map((function(t){return t.bids.find((function(t){return t.bidId\x3d\x3d\x3de}))})).find((function(e){return e}))},t.getKeys\x3dd,t.getValue\x3du,t.getBidderCodes\x3dfunction(){return(arguments.length\x3e0\x26\x26void 0!\x3d\x3darguments[0]?arguments[0]:pbjsSortable.adUnits).map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(s,[])})).reduce(s).filter(a)},t.isGptPubadsDefined\x3dfunction(){if(window.googletag\x26\x26t.isFn(window.googletag.pubads)\x26\x26t.isFn(window.googletag.pubads().getSlots))return!0},t.getHighestCpm\x3dfunction(e,t){return e.cpm\x3d\x3d\x3dt.cpm?e.timeToRespond\x3et.timeToRespond?t:e:e.cpm\x3ct.cpm?t:e},t.shuffle\x3dfunction(e){for(var t\x3de.length;t\x3e0;){var r\x3dMath.floor(Math.random()*t),n\x3de[--t];e[t]\x3de[r],e[r]\x3dn}return e},t.adUnitsFilter\x3dfunction(e,t){return e.includes(t\x26\x26t.placementCode||t\x26\x26t.adUnitCode)},t.isSrcdocSupported\x3dfunction(e){return e.defaultView\x26\x26e.defaultView.frameElement\x26\x26"srcdoc"in e.defaultView.frameElement\x26\x26!/firefox/i.test(navigator.userAgent)},t.cloneJson\x3dfunction(e){return JSON.parse(JSON.stringify(e))},t.inIframe\x3dfunction(){try{return window.self!\x3d\x3dwindow.top}catch(e){return!0}},t.isSafariBrowser\x3dfunction(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},t.replaceAuctionPrice\x3dfunction(e,t){if(e)return e.replace(/\\$\\{AUCTION_PRICE\\}/g,t)},t.getBidderRequestAllAdUnits\x3dfunction(e){return pbjsSortable._bidsRequested.find((function(t){return t.bidderCode\x3d\x3d\x3de}))},t.getBidderRequest\x3dfunction(e,t){return pbjsSortable._bidsRequested.find((function(r){return r.bids.filter((function(r){return r.bidder\x3d\x3d\x3de\x26\x26r.placementCode\x3d\x3d\x3dt})).length\x3e0}))||{start:null,requestId:null}},t.cookiesAreEnabled\x3dfunction(){return!(!window.navigator.cookieEnabled\x26\x26!document.cookie.length)||(window.document.cookie\x3d"prebid.cookieTest",-1!\x3dwindow.document.cookie.indexOf("prebid.cookieTest"))},t.delayExecution\x3dfunction(e,t){if(t\x3c1)throw new Error("numRequiredCalls must be a positive number. Got "+t);var r\x3d0;return function(){++r\x3d\x3d\x3dt\x26\x26e.apply(null,arguments)}},t.groupBy\x3dfunction(e,t){return e.reduce((function(e,r){return(e[r[t]]\x3de[r[t]]||[]).push(r),e}),{})},t.deepAccess\x3dfunction(e,t){t\x3dString(t).split(".");for(var r\x3d0;r\x3ct.length;r++)if(void 0\x3d\x3d\x3d(e\x3de[t[r]]))return;return e},t.getDefinedParams\x3dc,t.isValidMediaTypes\x3dfunction(e){var t\x3d["banner","native","video"];return!!Object.keys(e).every((function(e){return t.includes(e)}))\x26\x26(!e.video||!e.video.context||["instream","outstream"].includes(e.video.context))};var p\x3dr(9),g\x3dr(4),b\x3d!1,v\x3dObject.prototype.toString,m\x3dnull;try{m\x3dconsole.info.bind(window.console)}catch(e){}t.replaceTokenInString\x3dfunction(e,t,r){return this._each(t,(function(t,n){t\x3dvoid 0\x3d\x3d\x3dt?"":t;var i\x3dr+n.toUpperCase()+r,o\x3dnew RegExp(i,"g");e\x3de.replace(o,t)})),e};var h\x3d(function(){var e\x3d0;return function(){return++e}})();t.getUniqueIdentifierStr\x3dn,t.generateUUID\x3dfunction e(t){return t?(t^16*Math.random()\x3e\x3et/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},t.getBidIdParameter\x3dfunction(e,t){return t\x26\x26t[e]?t[e]:""},t.tryAppendQueryString\x3dfunction(e,t,r){return r?e+\x3dt+"\x3d"+encodeURIComponent(r)+"\x26":e},t.parseQueryStringParameters\x3dfunction(e){var t\x3d"";for(var r in e)e.hasOwnProperty(r)\x26\x26(t+\x3dr+"\x3d"+encodeURIComponent(e[r])+"\x26");return t},t.transformAdServerTargetingObj\x3dfunction(e){return e\x26\x26Object.getOwnPropertyNames(e).length\x3e0?d(e).map((function(t){return t+"\x3d"+encodeURIComponent(u(e,t))})).join("\x26"):""},t.getTopWindowLocation\x3dfunction(){var e\x3dvoid 0;try{window.top.location.toString(),e\x3dwindow.top.location}catch(t){e\x3dwindow.location}return e},t.getTopWindowUrl\x3dfunction(){var e\x3dvoid 0;try{e\x3dthis.getTopWindowLocation().href}catch(t){e\x3d""}return e},t.logWarn\x3dfunction(e){S()\x26\x26console.warn\x26\x26console.warn("WARNING: "+e)},t.logInfo\x3dfunction(e,t){S()\x26\x26o()\x26\x26m\x26\x26(t\x26\x260!\x3d\x3dt.length||(t\x3d""),m("INFO: "+e+(""\x3d\x3d\x3dt?"":" : params : "),t))},t.logMessage\x3dfunction(e){S()\x26\x26o()\x26\x26console.log("MESSAGE: "+e)},t.hasConsoleLogger\x3do;var y\x3do()?window.console.error?"error":"log":"",S\x3dfunction(){if(!1\x3d\x3d\x3dp.config.getConfig("debug")\x26\x26!1\x3d\x3d\x3db){var e\x3d"TRUE"\x3d\x3d\x3dE(g.DEBUG_MODE).toUpperCase();p.config.setConfig({debug:e}),b\x3d!0}return!!p.config.getConfig("debug")};t.debugTurnedOn\x3dS,t.logError\x3dfunction(e,t,r){var n\x3dt||"ERROR";S()\x26\x26o()\x26\x26console[y](console,n+": "+e,r||"")},t.createInvisibleIframe\x3dfunction(){var e\x3ddocument.createElement("iframe");return e.id\x3dn(),e.height\x3d0,e.width\x3d0,e.border\x3d"0px",e.hspace\x3d"0",e.vspace\x3d"0",e.marginWidth\x3d"0",e.marginHeight\x3d"0",e.style.border\x3d"0",e.scrolling\x3d"no",e.frameBorder\x3d"0",e.src\x3d"about:blank",e.style.display\x3d"none",e};var E\x3dfunction(e){var t\x3d"[\\\\?\x26]"+e+"\x3d([^\x26#]*)",r\x3dnew RegExp(t).exec(window.location.search);return null\x3d\x3d\x3dr?"":decodeURIComponent(r[1].replace(/\\+/g," "))};t.getParameterByName\x3dE,t.hasValidBidRequest\x3dfunction(e,t,r){function n(e,r){r\x3d\x3d\x3dt[o]\x26\x26(i\x3d!0)}for(var i\x3d!1,o\x3d0;o\x3ct.length;o++)if(i\x3d!1,this._each(e,n),!i)return this.logError("Params are missing for bid request. One of these required paramaters are missing: "+t,r),!1;return!0},t.addEventHandler\x3dfunction(e,t,r){e.addEventListener?e.addEventListener(t,r,!0):e.attachEvent\x26\x26e.attachEvent("on"+t,r)},t.isA\x3dfunction(e,t){return v.call(e)\x3d\x3d\x3d"[object "+t+"]"},t.isFn\x3dfunction(e){return this.isA(e,"Function")},t.isStr\x3dfunction(e){return this.isA(e,"String")},t.isArray\x3dfunction(e){return this.isA(e,"Array")},t.isNumber\x3dfunction(e){return this.isA(e,"Number")},t.isEmpty\x3dfunction(e){if(!e)return!0;if(this.isArray(e)||this.isStr(e))return!(e.length\x3e0);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0},t.isEmptyStr\x3dfunction(e){return this.isStr(e)\x26\x26(!e||0\x3d\x3d\x3de.length)},t._each\x3dfunction(e,t){if(!this.isEmpty(e)){if(this.isFn(e.forEach))return e.forEach(t,this);var r\x3d0,n\x3de.length;if(n\x3e0)for(;r\x3cn;r++)t(e[r],r,e);else for(r in e)hasOwnProperty.call(e,r)\x26\x26t.call(this,e[r],r)}},t.contains\x3dfunction(e,t){if(this.isEmpty(e))return!1;if(this.isFn(e.indexOf))return-1!\x3d\x3de.indexOf(t);for(var r\x3de.length;r--;)if(e[r]\x3d\x3d\x3dt)return!0;return!1},t.indexOf\x3d(function(){if(Array.prototype.indexOf)return Array.prototype.indexOf})(),t._map\x3dfunction(e,t){if(this.isEmpty(e))return[];if(this.isFn(e.map))return e.map(t);var r\x3d[];return this._each(e,(function(n,i){r.push(t(n,i,e))})),r};var T\x3dfunction(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!\x3d\x3de[t]\x26\x26e.constructor.prototype[t]!\x3d\x3de[t]};t.insertElement\x3dfunction(e,t,r){t\x3dt||document;var n\x3dvoid 0;n\x3dr?t.getElementsByTagName(r):t.getElementsByTagName("head");try{(n\x3dn.length?n:t.getElementsByTagName("body")).length\x26\x26(n\x3dn[0]).insertBefore(e,n.firstChild)}catch(e){}},t.triggerPixel\x3dfunction(e){(new Image).src\x3de},t.insertUserSyncIframe\x3dfunction(e){var r\x3dthis.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),n\x3ddocument.createElement("div");n.innerHTML\x3dr;var i\x3dn.firstChild;t.insertElement(i)},t.createTrackPixelHtml\x3dfunction(e){if(!e)return"";var t\x3d\'\x3cdiv style\x3d"position:absolute;left:0px;top:0px;visibility:hidden;"\x3e\';return t+\x3d\'\x3cimg src\x3d"\'+encodeURI(e)+\'"\x3e\x3c/div\x3e\'},t.createTrackPixelIframeHtml\x3dfunction(e){var r\x3d!(arguments.length\x3e1\x26\x26void 0!\x3d\x3darguments[1])||arguments[1],n\x3darguments.length\x3e2\x26\x26void 0!\x3d\x3darguments[2]?arguments[2]:"";return e?(r\x26\x26(e\x3dencodeURI(e)),n\x26\x26(n\x3d\'sandbox\x3d"\'+n+\'"\'),"\x3ciframe "+n+\' id\x3d"\'+t.getUniqueIdentifierStr()+\'"\\n      frameborder\x3d"0"\\n      allowtransparency\x3d"true"\\n      marginheight\x3d"0" marginwidth\x3d"0"\\n      width\x3d"0" hspace\x3d"0" vspace\x3d"0" height\x3d"0"\\n      style\x3d"height:0p;width:0p;display:none;"\\n      scrolling\x3d"no"\\n      src\x3d"\'+e+\'"\x3e\\n    \x3c/iframe\x3e\'):""},t.getIframeDocument\x3dfunction(e){if(e){var t\x3dvoid 0;try{t\x3de.contentWindow?e.contentWindow.document:e.contentDocument.document?e.contentDocument.document:e.contentDocument}catch(e){this.logError("Cannot get iframe document",e)}return t}},t.getValueString\x3dfunction(e,t,r){return void 0\x3d\x3d\x3dt||null\x3d\x3d\x3dt?r:this.isStr(t)?t:this.isNumber(t)?t.toString():void this.logWarn("Unsuported type for param: "+e+" required type: String")}}),(function(e,t,r){"use strict";function n(e){var t\x3de.bidderCode,r\x3de.requestId,n\x3de.bidderRequestId;return e.adUnits.map((function(e){return e.bids.filter((function(e){return e.bidder\x3d\x3d\x3dt})).map((function(t){var d\x3de.sizes;if(e.sizeMapping){var c\x3d(0,a.mapSizes)(e);if(""\x3d\x3d\x3dc)return"";d\x3dc}e.mediaTypes\x26\x26(u.isValidMediaTypes(e.mediaTypes)?t\x3di({},t,{mediaTypes:e.mediaTypes}):u.logError("mediaTypes is not correctly configured for adunit "+e.code));var l\x3de.nativeParams||u.deepAccess(e,"mediaTypes.native");return l\x26\x26(t\x3di({},t,{nativeParams:(0,s.processNativeAdUnitParams)(l)})),t\x3di({},t,(0,o.getDefinedParams)(e,["mediaType","renderer"])),i({},t,{placementCode:e.code,transactionId:e.transactionId,sizes:d,bidId:t.bid_id||u.getUniqueIdentifierStr(),bidderRequestId:n,requestId:r})}))})).reduce(o.flatten,[]).filter((function(e){return""!\x3d\x3de}))}var i\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},o\x3dr(0),a\x3dr(45),s\x3dr(13),d\x3dr(15),u\x3dr(0),c\x3dr(4),l\x3dr(10),f\x3dvoid 0,p\x3d{};t.bidderRegistry\x3dp;var g\x3d{endpoint:c.S2S.DEFAULT_ENDPOINT,adapter:c.S2S.ADAPTER,syncEndpoint:c.S2S.SYNC_ENDPOINT},b\x3d{};b.random\x3d!0,b.fixed\x3d!0;var v\x3d{},m\x3d"random";t.callBids\x3dfunction(e){var t\x3de.adUnits,r\x3de.cbTimeout,i\x3du.generateUUID(),s\x3dDate.now(),d\x3d{timestamp:s,requestId:i,timeout:r};l.emit(c.EVENTS.AUCTION_INIT,d);var b\x3d(0,o.getBidderCodes)(t);"random"\x3d\x3d\x3dm\x26\x26(b\x3d(0,o.shuffle)(b));var v\x3dp[g.adapter];v\x26\x26(v.setConfig(g),v.queueSync({bidderCodes:b}));var h\x3d[],y\x3d!1;if(g.enabled){(y\x3dg.testing\x26\x26void 0!\x3d\x3df)\x26\x26(h\x3df.getSourceBidderMap(t)[f.CLIENT]);var S\x3dg.bidders;b\x3db.filter((function(e){return!S.includes(e)||h.includes(e)}));var E\x3du.cloneJson(t);E.forEach((function(e){e.sizeMapping\x26\x26(e.sizes\x3d(0,a.mapSizes)(e),delete e.sizeMapping),e.sizes\x3d(function(e){var t\x3d[];return u.parseSizesInput(e.sizes).forEach((function(e){var r\x3de.split("x"),n\x3d{w:parseInt(r[0]),h:parseInt(r[1])};t.push(n)})),t})(e),e.bids\x3de.bids.filter((function(e){return S.includes(e.bidder)\x26\x26(!y||e.finalSource!\x3d\x3df.CLIENT)})).map((function(e){return e.bid_id\x3du.getUniqueIdentifierStr(),e}))})),E\x3dE.filter((function(e){return 0!\x3d\x3de.bids.length}));var T\x3du.generateUUID();S.forEach((function(e){var t\x3du.getUniqueIdentifierStr(),r\x3d{bidderCode:e,requestId:i,bidderRequestId:t,tid:T,bids:n({bidderCode:e,requestId:i,bidderRequestId:t,adUnits:E}),start:(new Date).getTime(),auctionStart:s,timeout:g.timeout,src:c.S2S.SRC};0!\x3d\x3dr.bids.length\x26\x26pbjsSortable._bidsRequested.push(r)}));var A\x3d{tid:T,ad_units:E};u.logMessage("CALLING S2S HEADER BIDDERS \x3d\x3d\x3d\x3d "+S.join(",")),A.ad_units.length\x26\x26v.callBids(A)}var _\x3d[],I\x3du.cloneJson(t);I.forEach((function(e){e.bids\x3de.bids.filter((function(e){return!y||e.finalSource!\x3d\x3df.SERVER}))})),I\x3dI.filter((function(e){return 0!\x3d\x3de.bids.length})),b.forEach((function(e){if(p[e]){var t\x3du.getUniqueIdentifierStr(),o\x3d{bidderCode:e,requestId:i,bidderRequestId:t,bids:n({bidderCode:e,requestId:i,bidderRequestId:t,adUnits:I}),auctionStart:s,timeout:r};o.bids\x26\x260!\x3d\x3do.bids.length\x26\x26(pbjsSortable._bidsRequested.push(o),_.push(o))}})),_.forEach((function(e){e.start\x3d(new Date).getTime();var t\x3dp[e.bidderCode];t?e.bids\x26\x260!\x3d\x3de.bids.length\x26\x26(u.logMessage("CALLING BIDDER \x3d\x3d\x3d\x3d\x3d\x3d\x3d "+e.bidderCode),l.emit(c.EVENTS.BID_REQUESTED,e),t.callBids(e)):u.logError("Adapter trying to be called which does not exist: "+e.bidderCode+" adaptermanager.callBids")}))},t.videoAdapters\x3d[],t.registerBidAdapter\x3dfunction(e,r){var n\x3d(arguments.length\x3e2\x26\x26void 0!\x3d\x3darguments[2]?arguments[2]:{}).supportedMediaTypes,i\x3dvoid 0\x3d\x3d\x3dn?[]:n;e\x26\x26r?"function"\x3d\x3dtypeof e.callBids?(p[r]\x3de,i.includes("video")\x26\x26t.videoAdapters.push(r),i.includes("native")\x26\x26s.nativeAdapters.push(r)):u.logError("Bidder adaptor error for bidder code: "+r+"bidder must implement a callBids() function"):u.logError("bidAdaptor or bidderCode not specified")},t.aliasBidAdapter\x3dfunction(e,r){if(void 0\x3d\x3d\x3dp[r]){var n\x3dp[e];if(void 0\x3d\x3d\x3dn)u.logError(\'bidderCode "\'+e+\'" is not an existing bidder.\',"adaptermanager.aliasBidAdapter");else try{var o\x3dvoid 0,a\x3d(function(e){var r\x3d[];return t.videoAdapters.includes(e)\x26\x26r.push("video"),s.nativeAdapters.includes(e)\x26\x26r.push("native"),r})(e);if(n.constructor.prototype!\x3dObject.prototype)(o\x3dnew n.constructor).setBidderCode(r);else{var c\x3dn.getSpec();o\x3d(0,d.newBidder)(i({},c,{code:r}))}this.registerBidAdapter(o,r,{supportedMediaTypes:a})}catch(t){u.logError(e+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter")}}else u.logMessage(\'alias name "\'+r+\'" has been already specified.\')},t.registerAnalyticsAdapter\x3dfunction(e){var t\x3de.adapter,r\x3de.code;t\x26\x26r?"function"\x3d\x3dtypeof t.enableAnalytics?(t.code\x3dr,v[r]\x3dt):u.logError(\'Prebid Error: Analytics adaptor error for analytics "\'+r+\'"\\n        analytics adapter must implement an enableAnalytics() function\'):u.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},t.enableAnalytics\x3dfunction(e){u.isArray(e)||(e\x3d[e]),u._each(e,(function(e){var t\x3dv[e.provider];t?t.enableAnalytics(e):u.logError("Prebid Error: no analytics adapter found in registry for\\n        "+e.provider+".")}))},t.setBidderSequence\x3dfunction(e){b[e]?m\x3de:u.logWarn("Invalid order: "+e+". Bidder Sequence was not set.")},t.setS2SConfig\x3dfunction(e){g\x3de},t.setS2STestingModule\x3dfunction(e){f\x3de}}),(function(e,t,r){"use strict";function n(e){return e.bidderCode}function i(e){return e.bidder}function o(e,t){return e+t}function a(){return pbjsSortable._bidsRequested.map((function(e){return e.bids})).reduce(b.flatten,[]).filter(b.adUnitsFilter.bind(this,pbjsSortable._adUnitCodes)).map((function(e){return"indexExchange"\x3d\x3d\x3de.bidder?e.sizes.length:1})).reduce((function(e,t){return e+t}),0)\x3d\x3d\x3dpbjsSortable._bidsReceived.filter(b.adUnitsFilter.bind(this,pbjsSortable._adUnitCodes)).length}function s(e,t){var r\x3d{},n\x3dpbjsSortable.bidderSettings;if(t\x26\x26n){d(r,f(),t)}return e\x26\x26t\x26\x26n\x26\x26n[e]\x26\x26n[e][T.JSON_MAPPING.ADSERVER_TARGETING]?(d(r,n[e],t),t.alwaysUseBid\x3dn[e].alwaysUseBid,t.sendStandardTargeting\x3dn[e].sendStandardTargeting):C[e]\x26\x26(d(r,C[e],t),t.alwaysUseBid\x3dC[e].alwaysUseBid,t.sendStandardTargeting\x3dC[e].sendStandardTargeting),t.native\x26\x26(r\x3dp({},r,(0,m.getNativeTargeting)(t))),r}function d(e,t,r){var n\x3dt[T.JSON_MAPPING.ADSERVER_TARGETING];return r.size\x3dr.getSize(),_._each(n,(function(n){var i\x3dn.key,o\x3dn.val;if(e[i]\x26\x26_.logWarn("The key: "+i+" is getting ovewritten"),_.isFn(o))try{o\x3do(r)}catch(e){_.logError("bidmanager","ERROR",e)}(void 0\x3d\x3d\x3dt.suppressEmptyKeys||!0!\x3d\x3dt.suppressEmptyKeys)\x26\x26"hb_deal"!\x3d\x3di||!_.isEmptyStr(o)\x26\x26null!\x3d\x3do\x26\x26void 0!\x3d\x3do?e[i]\x3do:_.logInfo("suppressing empty key \'"+i+"\' from adserver targeting")})),e}function u(e,t){var r\x3dthis;_.isArray(e)\x26\x26e.forEach((function(e){var n\x3dt||pbjsSortable._adUnitCodes,i\x3d[pbjsSortable._bidsReceived.filter(b.adUnitsFilter.bind(r,n)).reduce(c,{})];e.apply(pbjsSortable,i)}))}function c(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]\x3d{bids:[]}),e[t.adUnitCode].bids.push(t),e}function l(e){var t\x3de.bidderCode,r\x3de.cpm,n\x3dvoid 0;if(pbjsSortable.bidderSettings\x26\x26(t\x26\x26pbjsSortable.bidderSettings[t]\x26\x26"function"\x3d\x3dtypeof pbjsSortable.bidderSettings[t].bidCpmAdjustment?n\x3dpbjsSortable.bidderSettings[t].bidCpmAdjustment:pbjsSortable.bidderSettings[T.JSON_MAPPING.BD_SETTING_STANDARD]\x26\x26"function"\x3d\x3dtypeof pbjsSortable.bidderSettings[T.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment\x26\x26(n\x3dpbjsSortable.bidderSettings[T.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),n))try{r\x3dn(e.cpm,p({},e))}catch(e){_.logError("Error during bid adjustment","bidmanager.js",e)}r\x3e\x3d0\x26\x26(e.cpm\x3dr)}function f(){var e\x3dE.config.getConfig("priceGranularity"),t\x3dpbjsSortable.bidderSettings;return t[T.JSON_MAPPING.BD_SETTING_STANDARD]||(t[T.JSON_MAPPING.BD_SETTING_STANDARD]\x3d{}),t[T.JSON_MAPPING.BD_SETTING_STANDARD][T.JSON_MAPPING.ADSERVER_TARGETING]||(t[T.JSON_MAPPING.BD_SETTING_STANDARD][T.JSON_MAPPING.ADSERVER_TARGETING]\x3d[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(t){return e\x3d\x3d\x3dT.GRANULARITY_OPTIONS.AUTO?t.pbAg:e\x3d\x3d\x3dT.GRANULARITY_OPTIONS.DENSE?t.pbDg:e\x3d\x3d\x3dT.GRANULARITY_OPTIONS.LOW?t.pbLg:e\x3d\x3d\x3dT.GRANULARITY_OPTIONS.MEDIUM?t.pbMg:e\x3d\x3d\x3dT.GRANULARITY_OPTIONS.HIGH?t.pbHg:e\x3d\x3d\x3dT.GRANULARITY_OPTIONS.CUSTOM?t.pbCg:void 0}},{key:"hb_size",val:function(e){return e.size}},{key:"hb_deal",val:function(e){return e.dealId}}]),t[T.JSON_MAPPING.BD_SETTING_STANDARD]}var p\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},g\x3d(function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var r\x3d[],n\x3d!0,i\x3d!1,o\x3dvoid 0;try{for(var a,s\x3de[Symbol.iterator]();!(n\x3d(a\x3ds.next()).done)\x26\x26(r.push(a.value),!t||r.length!\x3d\x3dt);n\x3d!0);}catch(e){i\x3d!0,o\x3de}finally{try{!n\x26\x26s.return\x26\x26s.return()}finally{if(i)throw o}}return r})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),b\x3dr(0),v\x3dr(26),m\x3dr(13),h\x3dr(27),y\x3dr(46),S\x3dr(18),E\x3dr(9),T\x3dr(4),A\x3dT.EVENTS.AUCTION_END,_\x3dr(0),I\x3dr(10),w\x3d{byAdUnit:[],all:[],oneTime:null,timer:!1},C\x3d{};t.getTimedOutBidders\x3dfunction(){return pbjsSortable._bidsRequested.map(n).filter(b.uniques).filter((function(e){return pbjsSortable._bidsReceived.map(i).filter(b.uniques).indexOf(e)\x3c0}))},t.bidsBackAll\x3dfunction(){return a()},t.addBidResponse\x3dfunction(e,r){function n(){function t(e){return"Invalid bid from "+r.bidderCode+". Ignoring bid: "+e}if(!r)return _.logError("Some adapter tried to add an undefined bid for "+e+"."),!1;if(!e)return _.logError(t("No adUnitCode was supplied to addBidResponse.")),!1;return(0,b.getBidderRequest)(r.bidderCode,e).start?"native"!\x3d\x3dr.mediaType||(0,m.nativeBidIsValid)(r)?"video"!\x3d\x3dr.mediaType||(0,h.isValidVideoBid)(r)?!("banner"\x3d\x3d\x3dr.mediaType\x26\x26!(function(t){if((t.width||0\x3d\x3d\x3dt.width)\x26\x26(t.height||0\x3d\x3d\x3dt.height))return!0;var r\x3d(0,b.getBidderRequest)(t.bidderCode,e),n\x3dr\x26\x26r.bids\x26\x26r.bids[0]\x26\x26r.bids[0].sizes,i\x3d_.parseSizesInput(n);if(1\x3d\x3d\x3di.length){var o\x3di[0].split("x"),a\x3dg(o,2),s\x3da[0],d\x3da[1];return t.width\x3ds,t.height\x3dd,!0}return!1})(r))||(_.logError(t("Banner bids require a width and height")),!1):(_.logError(t("Video bid does not have required vastUrl or renderer property")),!1):(_.logError(t("Native bid missing some required properties.")),!1):(_.logError(t("Cannot find valid matching bid request.")),!1)}function i(){var t\x3d(0,b.getBidderRequest)(r.bidderCode,e);p(r,{requestId:t.requestId,responseTimestamp:(new Date).getTime(),requestTimestamp:t.start,cpm:parseFloat(r.cpm)||0,bidder:r.bidderCode,adUnitCode:e}),r.timeToRespond\x3dr.responseTimestamp-r.requestTimestamp,I.emit(T.EVENTS.BID_ADJUSTMENT,r);var n\x3dt.bids\x26\x26t.bids[0]\x26\x26t.bids[0].renderer;n\x26\x26(r.renderer\x3dS.Renderer.install({url:n.url}),r.renderer.setRender(n.render));var i\x3d(0,v.getPriceBucketString)(r.cpm,E.config.getConfig("customPriceBucket"),E.config.getConfig("currency.granularityMultiplier"));r.pbLg\x3di.low,r.pbMg\x3di.med,r.pbHg\x3di.high,r.pbAg\x3di.auto,r.pbDg\x3di.dense,r.pbCg\x3di.custom;var o;r.bidderCode\x26\x26(r.cpm\x3e0||r.dealId)\x26\x26(o\x3ds(r.bidderCode,r)),r.adserverTargeting\x3dp(r.adserverTargeting||{},o)}function d(){if(r.timeToRespond\x3epbjsSortable.cbTimeout+pbjsSortable.timeoutBuffer){t.executeCallback(!0)}}function c(){I.emit(T.EVENTS.BID_RESPONSE,r),pbjsSortable._bidsReceived.push(r),r.adUnitCode\x26\x26(function(e){var t\x3dthis;return pbjsSortable._bidsRequested.map((function(r){return r.bids.filter(b.adUnitsFilter.bind(t,pbjsSortable._adUnitCodes)).filter((function(t){return t.placementCode\x3d\x3d\x3de}))})).reduce(b.flatten,[]).map((function(e){return"indexExchange"\x3d\x3d\x3de.bidder?e.sizes.length:1})).reduce(o,0)\x3d\x3d\x3dpbjsSortable._bidsReceived.filter((function(t){return t.adUnitCode\x3d\x3d\x3de})).length})(r.adUnitCode)\x26\x26(function(e){var t\x3d[e];u(w.byAdUnit,t)})(r.adUnitCode),a()\x26\x26t.executeCallback()}n()\x26\x26(i(),"video"\x3d\x3d\x3dr.mediaType?(function(e){E.config.getConfig("usePrebidCache")?(0,y.store)([e],(function(t,r){t?_.logWarn("Failed to save to the video cache: "+t+". Video bid must be discarded."):(e.videoCacheKey\x3dr[0].uuid,e.vastUrl||(e.vastUrl\x3d(0,y.getCacheUrl)(e.videoCacheKey)),c()),d()})):(c(),d())})(r):(c(),d()))},t.getKeyValueTargetingPairs\x3dfunction(){return s.apply(void 0,arguments)},t.registerDefaultBidderSetting\x3dfunction(e,t){C[e]\x3dt},t.executeCallback\x3dfunction(e){if(!e\x26\x26w.timer\x26\x26clearTimeout(w.timer),!0!\x3d\x3dw.all.called\x26\x26(u(w.all),w.all.called\x3d!0,e)){var r\x3dt.getTimedOutBidders();r.length\x26\x26I.emit(T.EVENTS.BID_TIMEOUT,r)}if(w.oneTime){I.emit(A);try{u([w.oneTime])}catch(e){_.logError("Error executing bidsBackHandler",null,e)}finally{w.oneTime\x3dnull,w.timer\x3d!1,pbjsSortable.clearAuction()}}},t.externalCallbackReset\x3dfunction(){w.all.called\x3d!1},t.addOneTimeCallback\x3dfunction(e,t){w.oneTime\x3de,w.timer\x3dt},t.addCallback\x3dfunction(e,t,r){t.id\x3de,T.CB.TYPE.ALL_BIDS_BACK\x3d\x3d\x3dr?w.all.push(t):T.CB.TYPE.AD_UNIT_BIDS_BACK\x3d\x3d\x3dr\x26\x26w.byAdUnit.push(t)},I.on(T.EVENTS.BID_ADJUSTMENT,(function(e){l(e)})),t.adjustBids\x3dfunction(){return l.apply(void 0,arguments)},t.getStandardBidderAdServerTargeting\x3dfunction(){return f()[T.JSON_MAPPING.ADSERVER_TARGETING]}}),(function(e,t,r){"use strict";var n\x3dr(0);t.createBid\x3dfunction(e,t){return new function(e,t){var r\x3dt\x26\x26t.bidId||n.getUniqueIdentifierStr(),i\x3de||0;this.bidderCode\x3dt\x26\x26t.bidder||"",this.width\x3d0,this.height\x3d0,this.statusMessage\x3d(function(){switch(i){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}})(),this.adId\x3dr,this.mediaType\x3d"banner",this.getStatusCode\x3dfunction(){return i},this.getSize\x3dfunction(){return this.width+"x"+this.height}}(e,t)}}),(function(e,t){e.exports\x3d{JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},REPO_AND_VERSION:"prebid_prebid_0.31.0",DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_WON:"bidWon",SET_TARGETING:"setTargeting",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:["hb_bidder","hb_adid","hb_pb","hb_size","hb_deal"],S2S:{DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/auction",SRC:"s2s",ADAPTER:"prebidServer",SYNC_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/cookie_sync",SYNCED_BIDDERS_KEY:"pbjsSyncs"}}}),(function(e,t,r){"use strict";function n(e,t){var r\x3ddocument.createElement("script");r.type\x3d"text/javascript",r.async\x3d!0,t\x26\x26"function"\x3d\x3dtypeof t\x26\x26(r.readyState?r.onreadystatechange\x3dfunction(){"loaded"!\x3d\x3dr.readyState\x26\x26"complete"!\x3d\x3dr.readyState||(r.onreadystatechange\x3dnull,t())}:r.onload\x3dfunction(){t()}),r.src\x3de;var n\x3ddocument.getElementsByTagName("head");(n\x3dn.length?n:document.getElementsByTagName("body")).length\x26\x26(n\x3dn[0]).insertBefore(r,n.firstChild)}var i\x3dr(0),o\x3d{};t.loadScript\x3dfunction(e,t,r){e?r?o[e]?t\x26\x26"function"\x3d\x3dtypeof t\x26\x26(o[e].loaded?t():o[e].callbacks.push(t)):(o[e]\x3d{loaded:!1,callbacks:[]},t\x26\x26"function"\x3d\x3dtypeof t\x26\x26o[e].callbacks.push(t),n(e,(function(){o[e].loaded\x3d!0;try{for(var t\x3d0;t\x3co[e].callbacks.length;t++)o[e].callbacks[t]()}catch(e){i.logError("Error executing callback","adloader.js:loadScript",e)}}))):n(e,t):i.logError("Error attempting to request empty URL","adloader.js:loadScript")}}),(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},i\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e};t.setAjaxTimeout\x3dfunction(e){d\x3de},t.ajax\x3dfunction(e,t,r){var u\x3darguments.length\x3e3\x26\x26void 0!\x3d\x3darguments[3]?arguments[3]:{};try{var c\x3dvoid 0,l\x3d!1,f\x3du.method||(r?"POST":"GET"),p\x3d"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3dt?"undefined":i(t))?t:{success:function(){a.logMessage("xhr success")},error:function(e){a.logError("xhr error",null,e)}};if("function"\x3d\x3dtypeof t\x26\x26(p.success\x3dt),window.XMLHttpRequest?void 0\x3d\x3d\x3d(c\x3dnew window.XMLHttpRequest).responseType\x26\x26(l\x3d!0):l\x3d!0,l?((c\x3dnew window.XDomainRequest).onload\x3dfunction(){p.success(c.responseText,c)},c.onerror\x3dfunction(){p.error("error",c)},c.ontimeout\x3dfunction(){p.error("timeout",c)},c.onprogress\x3dfunction(){a.logMessage("xhr onprogress")}):c.onreadystatechange\x3dfunction(){if(c.readyState\x3d\x3d\x3ds){var e\x3dc.status;e\x3e\x3d200\x26\x26e\x3c300||304\x3d\x3d\x3de?p.success(c.responseText,c):p.error(c.statusText,c)}},"GET"\x3d\x3d\x3df\x26\x26r){var g\x3d(0,o.parse)(e,u);n(g.search,r),e\x3d(0,o.format)(g)}c.open(f,e),c.timeout\x3dd,l||(u.withCredentials\x26\x26(c.withCredentials\x3d!0),a._each(u.customHeaders,(function(e,t){c.setRequestHeader(t,e)})),u.preflight\x26\x26c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("Content-Type",u.contentType||"text/plain")),c.send("POST"\x3d\x3d\x3df\x26\x26r)}catch(e){a.logError("xhr construction",e)}};var o\x3dr(11),a\x3dr(0),s\x3d4,d\x3d3e3}),(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default\x3dfunction(e){var t\x3de;return{callBids:function(){},setBidderCode:function(e){t\x3de},getBidderCode:function(){return t}}}}),,(function(e,t,r){"use strict";function n(){function e(e){return Object.keys(g).find((function(t){return e\x3d\x3d\x3dg[t]}))}function t(){if(arguments.length\x3c\x3d1\x26\x26"function"!\x3dtypeof(arguments.length\x3c\x3d0?void 0:arguments[0])){var e\x3darguments.length\x3c\x3d0?void 0:arguments[0];return e?s.deepAccess(v,e):v}return function(e,t){var r\x3dt;"string"!\x3dtypeof e\x26\x26(r\x3de,e\x3db);if("function"!\x3dtypeof r)return void s.logError("listener must be a function");return n.push({topic:e,callback:r}),function(){n.splice(n.indexOf(t),1)}}.apply(void 0,arguments)}function r(e){"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3de?"undefined":o(e))?(i(v,e),(function(e){var t\x3dObject.keys(e);n.filter((function(e){return t.includes(e.topic)})).forEach((function(t){t.callback(function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]\x3dr,e}({},t.topic,e[t.topic]))})),n.filter((function(e){return e.topic\x3d\x3d\x3db})).forEach((function(t){return t.callback(e)}))})(e)):s.logError("setConfig options must be an object")}var n\x3d[],v\x3d{_debug:d,get debug(){return pbjsSortable.logging||!1\x3d\x3d\x3dpbjsSortable.logging?pbjsSortable.logging:this._debug},set debug(e){this._debug\x3de},_bidderTimeout:u,get bidderTimeout(){return pbjsSortable.bidderTimeout||this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout\x3de},_publisherDomain:c,get publisherDomain(){return pbjsSortable.publisherDomain||this._publisherDomain},set publisherDomain(e){this._publisherDomain\x3de},_cookieSyncDelay:l,get cookieSyncDelay(){return pbjsSortable.cookieSyncDelay||this._cookieSyncDelay},set cookieSyncDelay(e){this._cookieSyncDelay\x3de},_priceGranularity:g.MEDIUM,set priceGranularity(t){(function(t){if(!t)return s.logError("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"\x3d\x3dtypeof t)e(t)||s.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if("object"\x3d\x3d\x3d(void 0\x3d\x3d\x3dt?"undefined":o(t))\x26\x26!(0,a.isValidPriceConfig)(t))return s.logError("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0})(t)\x26\x26("string"\x3d\x3dtypeof t?this._priceGranularity\x3de(t)?t:g.MEDIUM:"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3dt?"undefined":o(t))\x26\x26(this._customPriceBucket\x3dt,this._priceGranularity\x3dg.CUSTOM,s.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_sendAllBids:f,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids\x3de},set bidderSequence(e){pbjsSortable.setBidderSequence(e)},set s2sConfig(e){pbjsSortable.setS2SConfig(e)},userSync:p};return{getConfig:t,setConfig:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.config\x3dvoid 0;var i\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},o\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e};t.newConfig\x3dn;var a\x3dr(26),s\x3dr(0),d\x3d!1,u\x3d3e3,c\x3dwindow.location.origin,l\x3d100,f\x3d!1,p\x3d{syncEnabled:!0,pixelEnabled:!0,syncsPerBidder:5,syncDelay:3e3},g\x3d{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},b\x3d"*";t.config\x3dn()}),(function(e,t,r){"use strict";var n\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},i\x3dr(0),o\x3dr(4),a\x3dArray.prototype.slice,s\x3dArray.prototype.push,d\x3di._map(o.EVENTS,(function(e){return e})),u\x3do.EVENT_ID_PATHS,c\x3d[];e.exports\x3d(function(){var e\x3d{},t\x3d{};return t.on\x3dfunction(t,r,n){if(function(e){return i.contains(d,e)}(t)){var o\x3de[t]||{que:[]};n?(o[n]\x3do[n]||{que:[]},o[n].que.push(r)):o.que.push(r),e[t]\x3do}else i.logError("Wrong event name : "+t+" Valid event names :"+d)},t.emit\x3dfunction(t){!(function(t,r){i.logMessage("Emitting event for: "+t);var n\x3dr[0]||{},o\x3dn[u[t]],a\x3de[t]||{que:[]},d\x3di._map(a,(function(e,t){return t})),l\x3d[];c.push({eventType:t,args:n,id:o}),o\x26\x26i.contains(d,o)\x26\x26s.apply(l,a[o].que),s.apply(l,a.que),i._each(l,(function(e){if(e)try{e.apply(null,r)}catch(e){i.logError("Error executing handler:","events.js",e)}}))})(t,a.call(arguments,1))},t.off\x3dfunction(t,r,n){var o\x3de[t];i.isEmpty(o)||i.isEmpty(o.que)\x26\x26i.isEmpty(o[n])||n\x26\x26(i.isEmpty(o[n])||i.isEmpty(o[n].que))||(n?i._each(o[n].que,(function(e){var t\x3do[n].que;e\x3d\x3d\x3dr\x26\x26t.splice(i.indexOf.call(t,e),1)})):i._each(o.que,(function(e){var t\x3do.que;e\x3d\x3d\x3dr\x26\x26t.splice(i.indexOf.call(t,e),1)})),e[t]\x3do)},t.get\x3dfunction(){return e},t.getEvents\x3dfunction(){var e\x3d[];return i._each(c,(function(t){var r\x3dn({},t);e.push(r)})),e},t})()}),(function(e,t,r){"use strict";function n(e){return e?e.replace(/^\\?/,"").split("\x26").reduce((function(e,t){var r\x3dt.split("\x3d"),n\x3do(r,2),i\x3dn[0],a\x3dn[1];return/\\[\\]$/.test(i)?(e[i\x3di.replace("[]","")]\x3de[i]||[],e[i].push(a)):e[i]\x3da||"",e}),{}):{}}function i(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return t+"[]\x3d"+e})).join("\x26"):t+"\x3d"+e[t]})).join("\x26")}Object.defineProperty(t,"__esModule",{value:!0});var o\x3d(function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var r\x3d[],n\x3d!0,i\x3d!1,o\x3dvoid 0;try{for(var a,s\x3de[Symbol.iterator]();!(n\x3d(a\x3ds.next()).done)\x26\x26(r.push(a.value),!t||r.length!\x3d\x3dt);n\x3d!0);}catch(e){i\x3d!0,o\x3de}finally{try{!n\x26\x26s.return\x26\x26s.return()}finally{if(i)throw o}}return r})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})();t.parseQS\x3dn,t.formatQS\x3di,t.parse\x3dfunction(e,t){var r\x3ddocument.createElement("a");return t\x26\x26"noDecodeWholeURL"in t\x26\x26t.noDecodeWholeURL?r.href\x3de:r.href\x3ddecodeURIComponent(e),{protocol:(r.protocol||"").replace(/:$/,""),hostname:r.hostname,port:+r.port,pathname:r.pathname.replace(/^(?!\\/)/,"/"),search:n(r.search||""),hash:(r.hash||"").replace(/^#/,""),host:r.host||window.location.host}},t.format\x3dfunction(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":"+e.port:""))+(e.pathname||"")+(e.search?"?"+i(e.search||""):"")+(e.hash?"#"+e.hash:"")}}),(function(e,t){var r\x3de.exports\x3d{version:"2.5.1"};"number"\x3d\x3dtypeof __e\x26\x26(__e\x3dr)}),(function(e,t,r){"use strict";function n(e){return e\x26\x26e.type\x26\x26(function(e){if(!e||!Object.keys(s).includes(e))return(0,i.logError)(e+" nativeParam is not supported"),!1;return!0})(e.type)?s[e.type]:e}Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonNativeBidder\x3dt.nativeBidder\x3dt.nativeAdUnit\x3dt.NATIVE_TARGETING_KEYS\x3dt.NATIVE_KEYS\x3dt.nativeAdapters\x3dvoid 0,t.processNativeAdUnitParams\x3dn,t.nativeBidIsValid\x3dfunction(e){var t\x3d(0,i.getBidRequest)(e.adId);if(!t)return!1;if(!(0,i.deepAccess)(e,"native.clickUrl"))return!1;var r\x3dt.nativeParams;if(!r)return!0;var n\x3dObject.keys(r).filter((function(e){return r[e].required})),o\x3dObject.keys(e.native).filter((function(t){return e.native[t]}));return n.every((function(e){return o.includes(e)}))},t.fireNativeTrackers\x3dfunction(e,t){(("click"\x3d\x3d\x3de.action?t.native\x26\x26t.native.clickTrackers:t.native\x26\x26t.native.impressionTrackers)||[]).forEach(i.triggerPixel)},t.getNativeTargeting\x3dfunction(e){var t\x3d{};return Object.keys(e.native).forEach((function(r){var n\x3da[r],i\x3de.native[r];n\x26\x26(t[n]\x3di)})),t};var i\x3dr(0),o\x3dt.nativeAdapters\x3d[],a\x3dt.NATIVE_KEYS\x3d{title:"hb_native_title",body:"hb_native_body",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",cta:"hb_native_cta"},s\x3d(t.NATIVE_TARGETING_KEYS\x3dObject.keys(a).map((function(e){return a[e]})),{image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}}),d\x3d(t.nativeAdUnit\x3dfunction(e){var t\x3d"native"\x3d\x3d\x3de.mediaType,r\x3d(0,i.deepAccess)(e,"mediaTypes.native");return t||r},t.nativeBidder\x3dfunction(e){return o.includes(e.bidder)});t.hasNonNativeBidder\x3dfunction(e){return e.bids.filter((function(e){return!d(e)})).length}}),(function(e,t){var r\x3de.exports\x3d"undefined"!\x3dtypeof window\x26\x26window.Math\x3d\x3dMath?window:"undefined"!\x3dtypeof self\x26\x26self.Math\x3d\x3dMath?self:Function("return this")();"number"\x3d\x3dtypeof __g\x26\x26(__g\x3dr)}),(function(e,t,r){"use strict";function n(e){return e\x26\x26e.__esModule?e:{default:e}}function i(e){function t(t){return!!e.isBidRequestValid(t)||((0,b.logWarn)("Invalid bid sent to bidder "+e.code+": "+JSON.stringify(t)),!1)}return a(new s.default(e.code),{getSpec:function(){return Object.freeze(e)},callBids:function(r){function n(){r.bids.map((function(e){return e.placementCode})).forEach((function(t){t\x26\x26!v[t]\x26\x26i(t,(function(){var t\x3df.default.createBid(p.STATUS.NO_BID);return t.code\x3de.code,t.bidderCode\x3de.code,t})())}))}function i(e,t){try{l.default.addBidResponse(e,t)}catch(t){(0,b.logError)("Error adding bid",e,t)}}function s(){if(n(),e.getUserSyncs){var t\x3de.getUserSyncs({iframeEnabled:u.config.getConfig("userSync.iframeEnabled"),pixelEnabled:u.config.getConfig("userSync.pixelEnabled")},m);t\x26\x26(Array.isArray(t)||(t\x3d[t]),t.forEach((function(t){g.userSync.registerSync(t.type,e.code,t.url)})))}}function d(t){function r(r){function n(t){var r\x3dy[t.requestId];if(r){var n\x3da(f.default.createBid(p.STATUS.GOOD,r),t);!(function(e,t){v[e]\x3d!0,i(e,t)})(r.placementCode,n)}else(0,b.logWarn)("Bidder "+e.code+" made bid for unknown request ID: "+t.requestId+". Ignoring.")}try{r\x3dJSON.parse(r)}catch(e){}m.push(r);var o\x3dvoid 0;try{o\x3de.interpretResponse(r,t)}catch(t){return(0,b.logError)("Bidder "+e.code+" failed to interpret the server\'s response. Continuing without bids",null,t),void E()}o\x26\x26(o.forEach?o.forEach(n):n(o)),E()}function n(t){(0,b.logError)("Server call for "+e.code+" failed: "+t+". Continuing without bids."),E()}switch(t.method){case"GET":(0,c.ajax)(t.url+"?"+("object"\x3d\x3d\x3do(t.data)?(0,b.parseQueryStringParameters)(t.data):t.data),{success:r,error:n},void 0,a({method:"GET",withCredentials:!0},t.options));break;case"POST":(0,c.ajax)(t.url,{success:r,error:n},"string"\x3d\x3dtypeof t.data?t.data:JSON.stringify(t.data),a({method:"POST",contentType:"text/plain",withCredentials:!0},t.options));break;default:(0,b.logWarn)("Skipping invalid request from "+e.code+". Request type "+t.type+" must be GET or POST"),E()}}if(Array.isArray(r.bids)){var v\x3d{},m\x3d[],h\x3dr.bids.filter(t);if(0!\x3d\x3dh.length){var y\x3d{};h.forEach((function(e){y[e.bidId]\x3de}));var S\x3de.buildRequests(h,r);if(S\x26\x260!\x3d\x3dS.length){Array.isArray(S)||(S\x3d[S]);var E\x3d(0,b.delayExecution)(s,S.length);S.forEach(d)}else s()}else s()}}})}Object.defineProperty(t,"__esModule",{value:!0});var o\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e},a\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e};t.registerBidder\x3dfunction(e){function t(e){var t\x3di(e);d.default.registerBidAdapter(t,e.code,r)}var r\x3dArray.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;t(e),Array.isArray(e.aliases)\x26\x26e.aliases.forEach((function(r){t(a({},e,{code:r}))}))},t.newBidder\x3di;var s\x3dn(r(7)),d\x3dn(r(1)),u\x3dr(9),c\x3dr(6),l\x3dn(r(2)),f\x3dn(r(3)),p\x3dr(4),g\x3dr(28),b\x3dr(0)}),(function(e,t,r){var n\x3dr(14),i\x3dr(12),o\x3dr(20),a\x3dr(275),s\x3dr(32),d\x3dfunction(e,t,r){var u,c,l,f,p\x3de\x26d.F,g\x3de\x26d.G,b\x3de\x26d.S,v\x3de\x26d.P,m\x3de\x26d.B,h\x3dg?n:b?n[t]||(n[t]\x3d{}):(n[t]||{}).prototype,y\x3dg?i:i[t]||(i[t]\x3d{}),S\x3dy.prototype||(y.prototype\x3d{});g\x26\x26(r\x3dt);for(u in r)l\x3d((c\x3d!p\x26\x26h\x26\x26void 0!\x3d\x3dh[u])?h:r)[u],f\x3dm\x26\x26c?s(l,n):v\x26\x26"function"\x3d\x3dtypeof l?s(Function.call,l):l,h\x26\x26a(h,u,l,e\x26d.U),y[u]!\x3dl\x26\x26o(y,u,f),v\x26\x26S[u]!\x3dl\x26\x26(S[u]\x3dl)};n.core\x3di,d.F\x3d1,d.G\x3d2,d.S\x3d4,d.P\x3d8,d.B\x3d16,d.W\x3d32,d.U\x3d64,d.R\x3d128,e.exports\x3dd}),(function(e,t){e.exports\x3dfunction(e){return"object"\x3d\x3dtypeof e?null!\x3d\x3de:"function"\x3d\x3dtypeof e}}),(function(e,t,r){"use strict";function n(e){var t\x3dthis,r\x3de.url,n\x3de.config,a\x3de.id,s\x3de.callback,d\x3de.loaded;this.url\x3dr,this.config\x3dn,this.handlers\x3d{},this.id\x3da,this.loaded\x3dd,this.cmd\x3d[],this.push\x3dfunction(e){"function"\x3d\x3dtypeof e?t.loaded?e.call():t.cmd.push(e):o.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback\x3ds||function(){t.loaded\x3d!0,t.process()},(0,i.loadScript)(r,this.callback,!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer\x3dn;var i\x3dr(5),o\x3d(function(e){if(e\x26\x26e.__esModule)return e;var t\x3d{};if(null!\x3de)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)\x26\x26(t[r]\x3de[r]);return t.default\x3de,t})(r(0));n.install\x3dfunction(e){return new n({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded})},n.prototype.getConfig\x3dfunction(){return this.config},n.prototype.setRender\x3dfunction(e){this.render\x3de},n.prototype.setEventHandlers\x3dfunction(e){this.handlers\x3de},n.prototype.handleVideoEvent\x3dfunction(e){var t\x3de.id,r\x3de.eventName;"function"\x3d\x3dtypeof this.handlers[r]\x26\x26this.handlers[r](),o.logMessage("Prebid Renderer event for id "+t+" type "+r)},n.prototype.process\x3dfunction(){for(;this.cmd.length\x3e0;)try{this.cmd.shift().call()}catch(e){o.logError("Error processing Renderer command: ",e)}}}),(function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]\x3dr,e}function i(e){return"string"\x3d\x3dtypeof e?[e]:p.isArray(e)?e:pbjsSortable._adUnitCodes||[]}function o(e){var t\x3db.getWinningBids(e),r\x3da();return t\x3dt.map((function(e){return n({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(t){return void 0\x3d\x3d\x3de.sendStandardTargeting||e.sendStandardTargeting||-1\x3d\x3d\x3dr.indexOf(t)})).map((function(t){return n({},t.substring(0,20),[e.adserverTargeting[t]])})))}))}function a(){return f.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(g.TARGETING_KEYS).filter(u.uniques)}function s(e){var t\x3dg.TARGETING_KEYS.concat(l.NATIVE_TARGETING_KEYS),r\x3d[],i\x3d(0,u.groupBy)(pbjsSortable._bidsReceived,"adUnitCode");return Object.keys(i).forEach((function(e){var t\x3d(0,u.groupBy)(i[e],"bidderCode");Object.keys(t).forEach((function(e){return r.push(t[e].reduce(u.getHighestCpm,d()))}))})),r.map((function(e){if(e.adserverTargeting)return n({},e.adUnitCode,(function(e,t){return t.map((function(t){return n({},(t+"_"+e.bidderCode).substring(0,20),[e.adserverTargeting[t]])}))})(e,t.filter((function(t){return void 0!\x3d\x3de.adserverTargeting[t]}))))})).filter((function(e){return e}))}function d(e){return{adUnitCode:e,cpm:0,adserverTargeting:{},timeToRespond:0}}var u\x3dr(0),c\x3dr(9),l\x3dr(13),f\x3dr(2),p\x3dr(0),g\x3dr(4),b\x3dt,v\x3d[];b.resetPresetTargeting\x3dfunction(e){if((0,u.isGptPubadsDefined)()){var t\x3di(e),r\x3dpbjsSortable.adUnits.filter((function(e){return t.includes(e.code)}));window.googletag.pubads().getSlots().forEach((function(e){v.forEach((function(t){r.forEach((function(r){r.code!\x3d\x3de.getAdUnitPath()\x26\x26r.code!\x3d\x3de.getSlotElementId()||e.setTargeting(t,null)}))}))}))}},b.getAllTargeting\x3dfunction(e){var t\x3di(e),r\x3do(t).concat(function(e){var t\x3da();return pbjsSortable._bidsReceived.filter(u.adUnitsFilter.bind(this,e)).map((function(e){if(e.alwaysUseBid)return n({},e.adUnitCode,Object.keys(e.adserverTargeting).map((function(r){if(!(t.indexOf(r)\x3e-1))return n({},r.substring(0,20),[e.adserverTargeting[r]])})).filter((function(e){return e})))})).filter((function(e){return e}))}(t)).concat(c.config.getConfig("enableSendAllBids")?s():[]);return r.map((function(e){Object.keys(e).map((function(t){e[t].map((function(e){-1\x3d\x3d\x3dv.indexOf(Object.keys(e)[0])\x26\x26(v\x3dObject.keys(e).concat(v))}))}))})),r},b.setTargeting\x3dfunction(e){window.googletag.pubads().getSlots().forEach((function(t){e.filter((function(e){return Object.keys(e)[0]\x3d\x3d\x3dt.getAdUnitPath()||Object.keys(e)[0]\x3d\x3d\x3dt.getSlotElementId()})).forEach((function(e){return e[Object.keys(e)[0]].forEach((function(e){e[Object.keys(e)[0]].map((function(r){return p.logMessage("Attempting to set key value for slot: "+t.getSlotElementId()+" key: "+Object.keys(e)[0]+" value: "+r),r})).forEach((function(r){t.setTargeting(Object.keys(e)[0],r)}))}))}))}))},b.getWinningBids\x3dfunction(e){var t\x3di(e);return pbjsSortable._bidsReceived.filter((function(e){return t.includes(e.adUnitCode)})).filter((function(e){return e.cpm\x3e0})).map((function(e){return e.adUnitCode})).filter(u.uniques).map((function(e){return pbjsSortable._bidsReceived.filter((function(t){return t.adUnitCode\x3d\x3d\x3de?t:null})).reduce(u.getHighestCpm,d(e))}))},b.setTargetingForAst\x3dfunction(){var e\x3dpbjsSortable.getAdserverTargeting();Object.keys(e).forEach((function(t){return Object.keys(e[t]).forEach((function(r){if(p.logMessage("Attempting to set targeting for targetId: "+t+" key: "+r+" value: "+e[t][r]),p.isStr(e[t][r])||p.isArray(e[t][r])){var n\x3d{};n["hb_adid"\x3d\x3d\x3dr.substring(0,"hb_adid".length)?r.toUpperCase():r]\x3de[t][r],window.apntag.setKeywords(t,n)}}))}))},b.isApntagDefined\x3dfunction(){if(window.apntag\x26\x26p.isFn(window.apntag.setKeywords))return!0}}),(function(e,t,r){var n\x3dr(269),i\x3dr(274);e.exports\x3dr(21)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]\x3dr,e}}),(function(e,t,r){e.exports\x3d!r(22)((function(){return 7!\x3dObject.defineProperty({},"a",{get:function(){return 7}}).a}))}),(function(e,t){e.exports\x3dfunction(e){try{return!!e()}catch(e){return!0}}}),(function(e,t){var r\x3d0,n\x3dMath.random();e.exports\x3dfunction(e){return"Symbol(".concat(void 0\x3d\x3d\x3de?"":e,")_",(++r+n).toString(36))}}),(function(e,t,r){var n\x3dr(34);e.exports\x3dObject("z").propertyIsEnumerable(0)?Object:function(e){return"String"\x3d\x3dn(e)?e.split(""):Object(e)}}),(function(e,t,r){var n\x3dr(39)("unscopables"),i\x3dArray.prototype;void 0\x3d\x3di[n]\x26\x26r(20)(i,n,{}),e.exports\x3dfunction(e){i[n][e]\x3d!0}}),(function(e,t,r){"use strict";function n(e,t,r){var n\x3d"";if(!i(t))return n;var o\x3dt.buckets.reduce((function(e,t){return e.max\x3et.max?e:t}),{max:0}),s\x3dt.buckets.find((function(t){if(e\x3eo.max*r){var i\x3dt.precision;void 0\x3d\x3d\x3di\x26\x26(i\x3da),n\x3d(t.max*r).toFixed(i)}else if(e\x3c\x3dt.max*r\x26\x26e\x3e\x3dt.min*r)return t}));return s\x26\x26(n\x3d(function(e,t,r,n){void 0\x3d\x3d\x3dr\x26\x26(r\x3da);var i\x3d1/(t*n);return(Math.floor(e*i)/i).toFixed(r)})(e,s.increment,s.precision,r)),n}function i(e){if(o.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t\x3d!0;return e.buckets.forEach((function(e){void 0!\x3d\x3de.min\x26\x26e.max\x26\x26e.increment||(t\x3d!1)})),t}Object.defineProperty(t,"__esModule",{value:!0});var o\x3dr(0),a\x3d2,s\x3d{buckets:[{min:0,max:5,increment:.5}]},d\x3d{buckets:[{min:0,max:20,increment:.1}]},u\x3d{buckets:[{min:0,max:20,increment:.01}]},c\x3d{buckets:[{min:0,max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}]},l\x3d{buckets:[{min:0,max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}]};t.getPriceBucketString\x3dfunction(e,t){var r\x3darguments.length\x3e2\x26\x26void 0!\x3d\x3darguments[2]?arguments[2]:1,i\x3dparseFloat(e);return isNaN(i)\x26\x26(i\x3d""),{low:""\x3d\x3d\x3di?"":n(e,s,r),med:""\x3d\x3d\x3di?"":n(e,d,r),high:""\x3d\x3d\x3di?"":n(e,u,r),auto:""\x3d\x3d\x3di?"":n(e,l,r),dense:""\x3d\x3d\x3di?"":n(e,c,r),custom:""\x3d\x3d\x3di?"":n(e,t,r)}},t.isValidPriceConfig\x3di}),(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonVideoBidder\x3dt.videoAdUnit\x3dvoid 0,t.isValidVideoBid\x3dfunction(e){var t\x3d(0,i.getBidRequest)(e.adId),r\x3dt\x26\x26(0,i.deepAccess)(t,"mediaTypes.video"),n\x3dr\x26\x26(0,i.deepAccess)(r,"context");return!t||r\x26\x26n!\x3d\x3do?!(!e.vastUrl\x26\x26!e.vastXml):n!\x3d\x3do||!(!e.renderer\x26\x26!t.renderer)};var n\x3dr(1),i\x3dr(0),o\x3d"outstream",a\x3d(t.videoAdUnit\x3dfunction(e){return"video"\x3d\x3d\x3de.mediaType},function(e){return!n.videoAdapters.includes(e.bidder)});t.hasNonVideoBidder\x3dfunction(e){return e.bids.filter(a).length}}),(function(e,t,r){"use strict";function n(e){function t(){if(c.syncEnabled\x26\x26e.browserSupportsCookies\x26\x26!d){try{!(function(){if(!c.pixelEnabled)return;a.shuffle(n.image).forEach((function(e){var t\x3di(e,2),r\x3dt[0],n\x3dt[1];a.logMessage("Invoking image pixel user sync for bidder: "+r),a.triggerPixel(n)}))})(),(function(){if(!c.iframeEnabled)return;a.shuffle(n.iframe).forEach((function(e){var t\x3di(e,2),r\x3dt[0],n\x3dt[1];a.logMessage("Invoking iframe user sync for bidder: "+r),a.insertUserSyncIframe(n)}))})()}catch(e){return a.logError("Error firing user syncs",e)}n\x3d{image:[],iframe:[]},d\x3d!0}}var r\x3d{},n\x3d{image:[],iframe:[]},d\x3d!1,u\x3d{},c\x3de.config;return s.config.getConfig("userSync",(function(e){c\x3do(c,e.userSync)})),r.registerSync\x3dfunction(e,t,r){if(!c.syncEnabled||!a.isArray(n[e]))return a.logWarn(\'User sync type "\'+e+\'" not supported\');if(!t)return a.logWarn("Bidder is required for registering sync");if(Number(u[t])\x3e\x3dc.syncsPerBidder)return a.logWarn(\'Number of user syncs exceeded for "{$bidder}"\');if(c.enabledBidders\x26\x26c.enabledBidders.length\x26\x26c.enabledBidders.indexOf(t)\x3c0)return a.logWarn(\'Bidder "\'+t+\'" not supported\');n[e].push([t,r]),u\x3d(function(e,t){return e[t]?e[t]+\x3d1:e[t]\x3d1,e})(u,t)},r.syncUsers\x3dfunction(){var e\x3darguments.length\x3e0\x26\x26void 0!\x3d\x3darguments[0]?arguments[0]:0;if(e)return window.setTimeout(t,Number(e));t()},r.triggerUserSyncs\x3dfunction(){c.enableOverride\x26\x26r.syncUsers()},r}Object.defineProperty(t,"__esModule",{value:!0}),t.userSync\x3dvoid 0;var i\x3d(function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var r\x3d[],n\x3d!0,i\x3d!1,o\x3dvoid 0;try{for(var a,s\x3de[Symbol.iterator]();!(n\x3d(a\x3ds.next()).done)\x26\x26(r.push(a.value),!t||r.length!\x3d\x3dt);n\x3d!0);}catch(e){i\x3d!0,o\x3de}finally{try{!n\x26\x26s.return\x26\x26s.return()}finally{if(i)throw o}}return r})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),o\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e};t.newUserSync\x3dn;var a\x3d(function(e){if(e\x26\x26e.__esModule)return e;var t\x3d{};if(null!\x3de)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)\x26\x26(t[r]\x3de[r]);return t.default\x3de,t})(r(0)),s\x3dr(9),d\x3d!a.isSafariBrowser()\x26\x26a.cookiesAreEnabled();t.userSync\x3dn({config:s.config.getConfig("userSync"),browserSupportsCookies:d})}),(function(e,t){var r;r\x3d(function(){return this})();try{r\x3dr||Function("return this")()||(0,eval)("this")}catch(e){"object"\x3d\x3dtypeof window\x26\x26(r\x3dwindow)}e.exports\x3dr}),(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobal\x3dfunction(){return window.pbjsSortable},window.pbjsSortable\x3dwindow.pbjsSortable||{},window.pbjsSortable.cmd\x3dwindow.pbjsSortable.cmd||[],window.pbjsSortable.que\x3dwindow.pbjsSortable.que||[]}),(function(e,t){var r\x3d{}.hasOwnProperty;e.exports\x3dfunction(e,t){return r.call(e,t)}}),(function(e,t,r){var n\x3dr(276);e.exports\x3dfunction(e,t,r){if(n(e),void 0\x3d\x3d\x3dt)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}}),(function(e,t,r){var n\x3dr(32),i\x3dr(24),o\x3dr(35),a\x3dr(37),s\x3dr(277);e.exports\x3dfunction(e,t){var r\x3d1\x3d\x3de,d\x3d2\x3d\x3de,u\x3d3\x3d\x3de,c\x3d4\x3d\x3de,l\x3d6\x3d\x3de,f\x3d5\x3d\x3de||l,p\x3dt||s;return function(t,s,g){for(var b,v,m\x3do(t),h\x3di(m),y\x3dn(s,g,3),S\x3da(h.length),E\x3d0,T\x3dr?p(t,S):d?p(t,0):void 0;S\x3eE;E++)if((f||E in h)\x26\x26(b\x3dh[E],v\x3dy(b,E,m),e))if(r)T[E]\x3dv;else if(v)switch(e){case 3:return!0;case 5:return b;case 6:return E;case 2:T.push(b)}else if(c)return!1;return l?-1:u||c?c:T}}}),(function(e,t){var r\x3d{}.toString;e.exports\x3dfunction(e){return r.call(e).slice(8,-1)}}),(function(e,t,r){var n\x3dr(36);e.exports\x3dfunction(e){return Object(n(e))}}),(function(e,t){e.exports\x3dfunction(e){if(void 0\x3d\x3de)throw TypeError("Can\'t call method on  "+e);return e}}),(function(e,t,r){var n\x3dr(38),i\x3dMath.min;e.exports\x3dfunction(e){return e\x3e0?i(n(e),9007199254740991):0}}),(function(e,t){var r\x3dMath.ceil,n\x3dMath.floor;e.exports\x3dfunction(e){return isNaN(e\x3d+e)?0:(e\x3e0?n:r)(e)}}),(function(e,t,r){var n\x3dr(40)("wks"),i\x3dr(23),o\x3dr(14).Symbol,a\x3d"function"\x3d\x3dtypeof o;(e.exports\x3dfunction(e){return n[e]||(n[e]\x3da\x26\x26o[e]||(a?o:i)("Symbol."+e))}).store\x3dn}),(function(e,t,r){var n\x3dr(14),i\x3dn["__core-js_shared__"]||(n["__core-js_shared__"]\x3d{});e.exports\x3dfunction(e){return i[e]||(i[e]\x3d{})}}),(function(e,t,r){var n\x3dr(42),i\x3dr(37),o\x3dr(284);e.exports\x3dfunction(e){return function(t,r,a){var s,d\x3dn(t),u\x3di(d.length),c\x3do(a,u);if(e\x26\x26r!\x3dr){for(;u\x3ec;)if((s\x3dd[c++])!\x3ds)return!0}else for(;u\x3ec;c++)if((e||c in d)\x26\x26d[c]\x3d\x3d\x3dr)return e||c||0;return!e\x26\x26-1}}}),(function(e,t,r){var n\x3dr(24),i\x3dr(36);e.exports\x3dfunction(e){return n(i(e))}}),,,(function(e,t,r){"use strict";function n(e){if(!(function(e){if(o.isArray(e)\x26\x26e.length\x3e0)return!0;return o.logInfo("No size mapping defined"),!1})(e.sizeMapping))return e.sizes;var t\x3di();if(!t){var r\x3de.sizeMapping.reduce((function(e,t){return e.minWidth\x3ct.minWidth?t:e}));return r.sizes\x26\x26r.sizes.length?r.sizes:e.sizes}var n\x3d"",a\x3de.sizeMapping.find((function(e){return t\x3e\x3de.minWidth}));return a\x26\x26a.sizes\x26\x26a.sizes.length?(n\x3da.sizes,o.logMessage("AdUnit : "+e.code+" resized based on device width to : "+n)):o.logMessage("AdUnit : "+e.code+" not mapped to any sizes for device width. This request will be suppressed."),n}function i(e){var t\x3de||a||window,r\x3dt.document;return t.innerWidth?t.innerWidth:r.body.clientWidth?r.body.clientWidth:r.documentElement.clientWidth?r.documentElement.clientWidth:0}Object.defineProperty(t,"__esModule",{value:!0}),t.setWindow\x3dt.getScreenWidth\x3dt.mapSizes\x3dvoid 0;var o\x3d(function(e){if(e\x26\x26e.__esModule)return e;var t\x3d{};if(null!\x3de)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)\x26\x26(t[r]\x3de[r]);return t.default\x3de,t})(r(0)),a\x3dvoid 0;t.mapSizes\x3dn,t.getScreenWidth\x3di,t.setWindow\x3dfunction(e){a\x3de}}),(function(e,t,r){"use strict";function n(e){return{type:"xml",value:e.vastXml?e.vastXml:(function(e){return\'\x3cVAST version\x3d"3.0"\x3e\\n    \x3cAd\x3e\\n      \x3cWrapper\x3e\\n        \x3cAdSystem\x3eprebid.org wrapper\x3c/AdSystem\x3e\\n        \x3cVASTAdTagURI\x3e\x3c![CDATA[\'+e+"]]\x3e\x3c/VASTAdTagURI\x3e\\n        \x3cImpression\x3e\x3c/Impression\x3e\\n        \x3cCreatives\x3e\x3c/Creatives\x3e\\n      \x3c/Wrapper\x3e\\n    \x3c/Ad\x3e\\n  \x3c/VAST\x3e"})(e.vastUrl)}}function i(e,t){var r\x3d{puts:e.map(n)};(0,o.ajax)(a,(function(e){return{success:function(t){var r\x3dvoid 0;try{r\x3dJSON.parse(t).responses}catch(t){return void e(t,[])}r?e(null,r):e(new Error("The cache server didn\'t respond with a responses property."),[])},error:function(t,r){e(new Error("Error storing video ad in the cache: "+t+": "+JSON.stringify(r)),[])}}})(t),JSON.stringify(r),{contentType:"text/plain",withCredentials:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t.store\x3di,t.getCacheUrl\x3dfunction(e){return a+"?uuid\x3d"+e};var o\x3dr(6),a\x3d"https://prebid.adnxs.com/pbc/v1/cache"}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,r){e.exports\x3dr(265)}),(function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]\x3dr,e}function i(e,t,r){e.defaultView\x26\x26e.defaultView.frameElement\x26\x26(e.defaultView.frameElement.width\x3dt,e.defaultView.frameElement.height\x3dr)}function o(e){e.forEach((function(e){if(void 0\x3d\x3d\x3de.called)try{e.call(),e.called\x3d!0}catch(e){S.logError("Error processing command :","prebid.js",e)}}))}var a\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e},s\x3dObject.assign||function(e){for(var t\x3d1;t\x3carguments.length;t++){var r\x3darguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)\x26\x26(e[n]\x3dr[n])}return e},d\x3dr(30),u\x3dr(0),c\x3dr(27),l\x3dr(13);r(266);var f\x3dr(11),p\x3dr(294),g\x3dr(28),b\x3dr(5),v\x3dr(6),m\x3dr(9),h\x3d(0,d.getGlobal)(),y\x3dr(4),S\x3dr(0),E\x3dr(2),T\x3dr(1),A\x3dr(3),_\x3dr(10),I\x3dr(295),w\x3dr(19),C\x3dg.userSync.syncUsers,j\x3dg.userSync.triggerUserSyncs,O\x3dy.EVENTS.BID_WON,B\x3dy.EVENTS.SET_TARGETING,U\x3dy.EVENTS.ADD_AD_UNITS,N\x3d!1,P\x3d[],R\x3d{bidWon:function(e){var t\x3dh._bidsRequested.map((function(e){return e.bids.map((function(e){return e.placementCode}))})).reduce(u.flatten).filter(u.uniques);if(S.contains(t,e))return!0;S.logError(\'The "\'+e+\'" placement is not defined.\')}};h._bidsRequested\x3d[],h._bidsReceived\x3d[],h._adUnitCodes\x3d[],h._winningBids\x3d[],h._adsReceived\x3d[],h.bidderSettings\x3dh.bidderSettings||{},h.bidderTimeout\x3dh.bidderTimeout,h.cbTimeout\x3dh.cbTimeout||200,h.timeoutBuffer\x3d200,h.logging\x3dh.logging,h.publisherDomain\x3dh.publisherDomain,h.libLoaded\x3d!0,h.version\x3d"v0.31.0",S.logInfo("Prebid.js v0.31.0 loaded"),h.adUnits\x3dh.adUnits||[],h.triggerUserSyncs\x3dj,h.getAdserverTargetingForAdUnitCodeStr\x3dfunction(e){if(S.logInfo("Invoking pbjsSortable.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t\x3dh.getAdserverTargetingForAdUnitCode(e);return S.transformAdServerTargetingObj(t)}S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},h.getAdserverTargetingForAdUnitCode\x3dfunction(e){return h.getAdserverTargeting(e)[e]},h.getAdserverTargeting\x3dfunction(e){return S.logInfo("Invoking pbjsSortable.getAdserverTargeting",arguments),w.getAllTargeting(e).map((function(e){return n({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return n({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,t){return s(t,e)}),{}))})).reduce((function(e,t){var r\x3dObject.keys(t)[0];return e[r]\x3ds({},e[r],t[r]),e}),{})},h.getBidResponses\x3dfunction(){S.logInfo("Invoking pbjsSortable.getBidResponses",arguments);var e\x3dh._bidsReceived.filter(u.adUnitsFilter.bind(this,h._adUnitCodes)),t\x3de\x26\x26e.length\x26\x26e[e.length-1].requestId;return e.map((function(e){return e.adUnitCode})).filter(u.uniques).map((function(r){return e.filter((function(e){return e.requestId\x3d\x3d\x3dt\x26\x26e.adUnitCode\x3d\x3d\x3dr}))})).filter((function(e){return e\x26\x26e[0]\x26\x26e[0].adUnitCode})).map((function(e){return n({},e[0].adUnitCode,{bids:e})})).reduce((function(e,t){return s(e,t)}),{})},h.getBidResponsesForAdUnitCode\x3dfunction(e){return{bids:h._bidsReceived.filter((function(t){return t.adUnitCode\x3d\x3d\x3de}))}},h.setTargetingForGPTAsync\x3dfunction(e){if(S.logInfo("Invoking pbjsSortable.setTargetingForGPTAsync",arguments),(0,u.isGptPubadsDefined)()){var t\x3dw.getAllTargeting(e);w.resetPresetTargeting(e),w.setTargeting(t),_.emit(B)}else S.logError("window.googletag is not defined on the page")},h.setTargetingForAst\x3dfunction(){S.logInfo("Invoking pbjsSortable.setTargetingForAn",arguments),w.isApntagDefined()?(w.setTargetingForAst(),_.emit(B)):S.logError("window.apntag is not defined on the page")},h.allBidsAvailable\x3dfunction(){return S.logWarn("pbjsSortable.allBidsAvailable will be removed in Prebid 1.0. Alternative solution is in progress. See https://github.com/prebid/Prebid.js/issues/1087 for more details."),S.logInfo("Invoking pbjsSortable.allBidsAvailable",arguments),E.bidsBackAll()},h.renderAd\x3dfunction(e,t){if(S.logInfo("Invoking pbjsSortable.renderAd",arguments),S.logMessage("Calling renderAd with adId :"+t),e\x26\x26t)try{var r\x3dh._bidsReceived.find((function(e){return e.adId\x3d\x3d\x3dt}));if(r){r.ad\x3dS.replaceAuctionPrice(r.ad,r.cpm),r.url\x3dS.replaceAuctionPrice(r.url,r.cpm),h._winningBids.push(r),_.emit(O,r);var n\x3dr.height,o\x3dr.width,a\x3dr.ad,s\x3dr.mediaType,d\x3dr.adUrl,u\x3dr.renderer;if(u\x26\x26u.url)u.render(r);else if(e\x3d\x3d\x3ddocument\x26\x26!S.inIframe()||"video"\x3d\x3d\x3ds)S.logError("Error trying to write ad. Ad render call ad id "+t+" was prevented from writing to the main document.");else if(a)e.write(a),e.close(),i(e,o,n);else if(d){var c\x3dS.createInvisibleIframe();c.height\x3dn,c.width\x3do,c.style.display\x3d"inline",c.style.overflow\x3d"hidden",c.src\x3dd,S.insertElement(c,e,"body"),i(e,o,n)}else S.logError("Error trying to write ad. No ad for bid response id: "+t)}else S.logError("Error trying to write ad. Cannot find ad by given id : "+t)}catch(e){S.logError("Error trying to write ad Id :"+t+" to the page:"+e.message)}else S.logError("Error trying to write ad Id :"+t+" to the page. Missing document or adId")},h.renderConfiantAd\x3dfunction(e,t){if(S.logInfo("Invoking pbjsSortable.renderConfiantAd",arguments),S.logMessage("Calling renderConfiantAd with adId :"+t),e\x26\x26t)try{var r\x3dh._bidsReceived.find((function(e){return e.adId\x3d\x3d\x3dt}));if(r){r.ad\x3dS.replaceAuctionPrice(r.ad,r.cpm),r.url\x3dS.replaceAuctionPrice(r.url,r.cpm),h._winningBids.push(r),_.emit(O,r);var n\x3dr.height,o\x3dr.width,a\x3dr.ad,s\x3dr.mediaType,d\x3dr.adUrl,u\x3dr.renderer;if(u\x26\x26u.url)u.render(r);else if(e\x3d\x3d\x3ddocument\x26\x26!S.inIframe()||"video"\x3d\x3d\x3ds)S.logError("Error trying to write ad. Ad render call ad id "+t+" was prevented from writing to the main document.");else{if(a){return (function(e,t,r,n,i,o){function a(e){return(c(e)||"")[g]("/","_")[g]("+","-")}function s(){var r\x3da(o+"/"+y.k.hb_bidder[0]+":"+y.k.hb_size[0]),n\x3d{wh:r,wd:u.parse(u[v](y)),wr:0};!(function(t,r,n){var i\x3dh+l(t)+"\x26d\x3d"+r,o\x3d"err__"+Date.now();d[o]\x3dn;var a\x3d"\x3c"+f+" on"+b+\'\x3d"void(\'+o+\'())" \'+p+\'\x3d"\'+i+\'" type\x3d"text/java\'+f+\'" \x3e\x3c/\'+f+"\x3e";e[m](a)})(r,a(u[v](n)),(function(){e[m](t)}));var i\x3d{d:n,t:t};d[o]\x3d{},d[o][r]\x3di}var d\x3de.parentWindow||e.defaultView,u\x3dd.JSON,c\x3dd.btoa,l\x3dd.encodeURIComponent;if(!u||!c)return!1;var f\x3d"script",p\x3d"src",g\x3d"replace",b\x3d"error",v\x3d"stringify",m\x3d"write",h\x3d"https://"+i+"/?wrapper\x3d"+l(o)+"\x26tpid\x3d",y\x3d{k:{hb_bidder:[r],hb_size:[n]}};return s(),e.close(),!0})(e,a,r.bidder,o+"x"+n,"clarium.global.ssl.fastly.net","trB5nelTxsjRl85E7hL4Y1GisKY")?(i(e,o,n),!0):(e.write(a),e.close(),i(e,o,n),!1)}if(d){var c\x3dS.createInvisibleIframe();c.height\x3dn,c.width\x3do,c.style.display\x3d"inline",c.style.overflow\x3d"hidden",c.src\x3dd,S.insertElement(c,e,"body"),i(e,o,n)}else S.logError("Error trying to write ad. No ad for bid response id: "+t)}}else S.logError("Error trying to write ad. Cannot find ad by given id : "+t)}catch(e){S.logError("Error trying to write ad Id :"+t+" to the page:"+e.message)}else S.logError("Error trying to write ad Id :"+t+" to the page. Missing document or adId")},h.removeAdUnit\x3dfunction(e){if(S.logInfo("Invoking pbjsSortable.removeAdUnit",arguments),e)for(var t\x3d0;t\x3ch.adUnits.length;t++)h.adUnits[t].code\x3d\x3d\x3de\x26\x26h.adUnits.splice(t,1)},h.clearAuction\x3dfunction(){N\x3d!1;var e\x3dm.config.getConfig("userSync")||{};e.enableOverride||C(e.syncDelay),S.logMessage("Prebid auction cleared"),P.length\x26\x26P.shift()()},h.requestBids\x3dfunction(){var e\x3darguments.length\x3e0\x26\x26void 0!\x3d\x3darguments[0]?arguments[0]:{},t\x3de.bidsBackHandler,r\x3de.timeout,n\x3de.adUnits,i\x3de.adUnitCodes;_.emit("requestBids");var o\x3dh.cbTimeout\x3dr||m.config.getConfig("bidderTimeout");n\x3dn||h.adUnits,S.logInfo("Invoking pbjsSortable.requestBids",arguments),i\x26\x26i.length?n\x3dn.filter((function(e){return i.includes(e.code)})):i\x3dn\x26\x26n.map((function(e){return e.code}));if(n.filter(c.videoAdUnit).filter(c.hasNonVideoBidder).forEach((function(e){S.logError("adUnit "+e.code+" has \'mediaType\' set to \'video\' but contains a bidder that doesn\'t support video. No Prebid demand requests will be triggered for this adUnit.");for(var t\x3d0;t\x3cn.length;t++)n[t].code\x3d\x3d\x3de.code\x26\x26n.splice(t,1)})),n.filter(l.nativeAdUnit).filter(l.hasNonNativeBidder).forEach((function(e){var t\x3de.bids.filter((function(e){return!(0,l.nativeBidder)(e)})).map((function(e){return e.bidder})).join(", ");S.logError("adUnit "+e.code+" has \'mediaType\' set to \'native\' but contains non-native bidder(s) "+t+". No Prebid demand requests will be triggered for those bidders."),e.bids\x3de.bids.filter(l.nativeBidder)})),N)P.push((function(){h.requestBids({bidsBackHandler:t,timeout:o,adUnits:n,adUnitCodes:i})}));else{if(N\x3d!0,h._adUnitCodes\x3di,E.externalCallbackReset(),h._bidsRequested\x3d[],h._bidsReceived\x3dh._bidsReceived.filter((function(e){return!h._adUnitCodes.includes(e.adUnitCode)})),!n||0\x3d\x3d\x3dn.length)return S.logMessage("No adUnits configured. No bids requested."),"function"\x3d\x3dtypeof t\x26\x26E.addOneTimeCallback(t,!1),void E.executeCallback();var a\x3dE.executeCallback.bind(E,!0),s\x3dsetTimeout(a,o);(0,v.setAjaxTimeout)(o),"function"\x3d\x3dtypeof t\x26\x26E.addOneTimeCallback(t,s),T.callBids({adUnits:n,adUnitCodes:i,cbTimeout:o}),0\x3d\x3d\x3dh._bidsRequested.length\x26\x26E.executeCallback()}},h.addAdUnits\x3dfunction(e){S.logInfo("Invoking pbjsSortable.addAdUnits",arguments),S.isArray(e)?(e.forEach((function(e){return e.transactionId\x3dS.generateUUID()})),h.adUnits.push.apply(h.adUnits,e)):"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3de?"undefined":a(e))\x26\x26(e.transactionId\x3dS.generateUUID(),h.adUnits.push(e)),_.emit(U)},h.onEvent\x3dfunction(e,t,r){S.logInfo("Invoking pbjsSortable.onEvent",arguments),S.isFn(t)?!r||R[e].call(null,r)?_.on(e,t,r):S.logError(\'The id provided is not valid for event "\'+e+\'" and no handler was set.\'):S.logError(\'The event handler provided is not a function and was not set on event "\'+e+\'".\')},h.offEvent\x3dfunction(e,t,r){S.logInfo("Invoking pbjsSortable.offEvent",arguments),r\x26\x26!R[e].call(null,r)||_.off(e,t,r)},h.addCallback\x3dfunction(e,t){S.logWarn("pbjsSortable.addCallback will be removed in Prebid 1.0. Please use onEvent instead"),S.logInfo("Invoking pbjsSortable.addCallback",arguments);var r\x3dnull;return e\x26\x26t\x26\x26"function"\x3d\x3dtypeof t?(r\x3dS.getUniqueIdentifierStr,E.addCallback(r,t,e),r):(S.logError("error registering callback. Check method signature"),r)},h.removeCallback\x3dfunction(){return S.logWarn("pbjsSortable.removeCallback will be removed in Prebid 1.0. Please use offEvent instead."),null},h.registerBidAdapter\x3dfunction(e,t){S.logInfo("Invoking pbjsSortable.registerBidAdapter",arguments);try{T.registerBidAdapter(e(),t)}catch(e){S.logError("Error registering bidder adapter : "+e.message)}},h.registerAnalyticsAdapter\x3dfunction(e){S.logInfo("Invoking pbjsSortable.registerAnalyticsAdapter",arguments);try{T.registerAnalyticsAdapter(e)}catch(e){S.logError("Error registering analytics adapter : "+e.message)}},h.bidsAvailableForAdapter\x3dfunction(e){S.logInfo("Invoking pbjsSortable.bidsAvailableForAdapter",arguments),h._bidsRequested.find((function(t){return t.bidderCode\x3d\x3d\x3de})).bids.map((function(t){return s(t,A.createBid(1),{bidderCode:e,adUnitCode:t.placementCode})})).map((function(e){return h._bidsReceived.push(e)}))},h.createBid\x3dfunction(e){return S.logInfo("Invoking pbjsSortable.createBid",arguments),A.createBid(e)},h.addBidResponse\x3dfunction(e,t){S.logWarn("pbjsSortable.addBidResponse will be removed in Prebid 1.0. Each bidder will be passed a reference to addBidResponse function in callBids as an argument. See https://github.com/prebid/Prebid.js/issues/1087 for more details."),S.logInfo("Invoking pbjsSortable.addBidResponse",arguments),E.addBidResponse(e,t)},h.loadScript\x3dfunction(e,t,r){S.logInfo("Invoking pbjsSortable.loadScript",arguments),(0,b.loadScript)(e,t,r)},h.enableAnalytics\x3dfunction(e){e\x26\x26!S.isEmpty(e)?(S.logInfo("Invoking pbjsSortable.enableAnalytics for: ",e),T.enableAnalytics(e)):S.logError("pbjsSortable.enableAnalytics should be called with option {}")},h.aliasBidder\x3dfunction(e,t){S.logInfo("Invoking pbjsSortable.aliasBidder",arguments),e\x26\x26t?T.aliasBidAdapter(e,t):S.logError("bidderCode and alias must be passed as arguments","pbjsSortable.aliasBidder")},h.setPriceGranularity\x3dfunction(e){S.logWarn("pbjsSortable.setPriceGranularity will be removed in Prebid 1.0. Use pbjsSortable.setConfig({ priceGranularity: \x3cgranularity\x3e }) instead."),S.logInfo("Invoking pbjsSortable.setPriceGranularity",arguments),m.config.setConfig({priceGranularity:e})},h.enableSendAllBids\x3dfunction(){m.config.setConfig({enableSendAllBids:!0})},h.getAllWinningBids\x3dfunction(){return h._winningBids},h.buildMasterVideoTagFromAdserverTag\x3dfunction(e,t){S.logWarn("pbjsSortable.buildMasterVideoTagFromAdserverTag will be removed in Prebid 1.0. Include the dfpVideoSupport module in your build, and use the pbjsSortable.adservers.dfp.buildVideoAdUrl function instead"),S.logInfo("Invoking pbjsSortable.buildMasterVideoTagFromAdserverTag",arguments);var r\x3d(0,f.parse)(e);if(0\x3d\x3d\x3dh._bidsReceived.length)return e;if("dfp"\x3d\x3d\x3dt.adserver.toLowerCase()){var n\x3dI.dfpAdserver(t,r);return n.verifyAdserverTag()||S.logError("Invalid adserverTag, required google params are missing in query string"),n.appendQueryParams(),(0,f.format)(n.urlComponents)}S.logError("Only DFP adserver is supported")},h.setBidderSequence\x3dT.setBidderSequence,h.getHighestCpmBids\x3dfunction(e){return w.getWinningBids(e)},h.setS2SConfig\x3dfunction(e){if(S.contains(Object.keys(e),"accountId"))if(S.contains(Object.keys(e),"bidders")){var t\x3ds({enabled:!1,endpoint:y.S2S.DEFAULT_ENDPOINT,timeout:1e3,maxBids:1,adapter:y.S2S.ADAPTER,syncEndpoint:y.S2S.SYNC_ENDPOINT,cookieSet:!0,bidders:[]},e);T.setS2SConfig(t)}else S.logError("bidders missing in Server to Server config");else S.logError("accountId missing in Server to Server config")},h.getConfig\x3dm.config.getConfig,h.setConfig\x3dm.config.setConfig,h.que.push((function(){return(0,p.listenMessagesFromCreative)()})),h.cmd.push\x3dfunction(e){if("function"\x3d\x3dtypeof e)try{e.call()}catch(e){S.logError("Error processing command :"+e.message)}else S.logError("Commands written into pbjsSortable.cmd.push must be wrapped in a function")},h.que.push\x3dh.cmd.push,h.processQueue\x3dfunction(){o(h.que),o(h.cmd)}}),(function(e,t,r){"use strict";r(267),r(280),r(282),r(285),Number.isInteger\x3dNumber.isInteger||function(e){return"number"\x3d\x3dtypeof e\x26\x26isFinite(e)\x26\x26Math.floor(e)\x3d\x3d\x3de}}),(function(e,t,r){r(268),e.exports\x3dr(12).Array.find}),(function(e,t,r){"use strict";var n\x3dr(16),i\x3dr(33)(5),o\x3d!0;"find"in[]\x26\x26Array(1).find((function(){o\x3d!1})),n(n.P+n.F*o,"Array",{find:function(e){return i(this,e,arguments.length\x3e1?arguments[1]:void 0)}}),r(25)("find")}),(function(e,t,r){var n\x3dr(270),i\x3dr(271),o\x3dr(273),a\x3dObject.defineProperty;t.f\x3dr(21)?Object.defineProperty:function(e,t,r){if(n(e),t\x3do(t,!0),n(r),i)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r\x26\x26(e[t]\x3dr.value),e}}),(function(e,t,r){var n\x3dr(17);e.exports\x3dfunction(e){if(!n(e))throw TypeError(e+" is not an object!");return e}}),(function(e,t,r){e.exports\x3d!r(21)\x26\x26!r(22)((function(){return 7!\x3dObject.defineProperty(r(272)("div"),"a",{get:function(){return 7}}).a}))}),(function(e,t,r){var n\x3dr(17),i\x3dr(14).document,o\x3dn(i)\x26\x26n(i.createElement);e.exports\x3dfunction(e){return o?i.createElement(e):{}}}),(function(e,t,r){var n\x3dr(17);e.exports\x3dfunction(e,t){if(!n(e))return e;var r,i;if(t\x26\x26"function"\x3d\x3dtypeof(r\x3de.toString)\x26\x26!n(i\x3dr.call(e)))return i;if("function"\x3d\x3dtypeof(r\x3de.valueOf)\x26\x26!n(i\x3dr.call(e)))return i;if(!t\x26\x26"function"\x3d\x3dtypeof(r\x3de.toString)\x26\x26!n(i\x3dr.call(e)))return i;throw TypeError("Can\'t convert object to primitive value")}}),(function(e,t){e.exports\x3dfunction(e,t){return{enumerable:!(1\x26e),configurable:!(2\x26e),writable:!(4\x26e),value:t}}}),(function(e,t,r){var n\x3dr(14),i\x3dr(20),o\x3dr(31),a\x3dr(23)("src"),s\x3dFunction.toString,d\x3d(""+s).split("toString");r(12).inspectSource\x3dfunction(e){return s.call(e)},(e.exports\x3dfunction(e,t,r,s){var u\x3d"function"\x3d\x3dtypeof r;u\x26\x26(o(r,"name")||i(r,"name",t)),e[t]!\x3d\x3dr\x26\x26(u\x26\x26(o(r,a)||i(r,a,e[t]?""+e[t]:d.join(String(t)))),e\x3d\x3d\x3dn?e[t]\x3dr:s?e[t]?e[t]\x3dr:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",(function(){return"function"\x3d\x3dtypeof this\x26\x26this[a]||s.call(this)}))}),(function(e,t){e.exports\x3dfunction(e){if("function"!\x3dtypeof e)throw TypeError(e+" is not a function!");return e}}),(function(e,t,r){var n\x3dr(278);e.exports\x3dfunction(e,t){return new(n(e))(t)}}),(function(e,t,r){var n\x3dr(17),i\x3dr(279),o\x3dr(39)("species");e.exports\x3dfunction(e){var t;return i(e)\x26\x26("function"!\x3dtypeof(t\x3de.constructor)||t!\x3d\x3dArray\x26\x26!i(t.prototype)||(t\x3dvoid 0),n(t)\x26\x26null\x3d\x3d\x3d(t\x3dt[o])\x26\x26(t\x3dvoid 0)),void 0\x3d\x3d\x3dt?Array:t}}),(function(e,t,r){var n\x3dr(34);e.exports\x3dArray.isArray||function(e){return"Array"\x3d\x3dn(e)}}),(function(e,t,r){r(281),e.exports\x3dr(12).Array.findIndex}),(function(e,t,r){"use strict";var n\x3dr(16),i\x3dr(33)(6),o\x3d"findIndex",a\x3d!0;o in[]\x26\x26Array(1)[o]((function(){a\x3d!1})),n(n.P+n.F*a,"Array",{findIndex:function(e){return i(this,e,arguments.length\x3e1?arguments[1]:void 0)}}),r(25)(o)}),(function(e,t,r){r(283),e.exports\x3dr(12).Array.includes}),(function(e,t,r){"use strict";var n\x3dr(16),i\x3dr(41)(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length\x3e1?arguments[1]:void 0)}}),r(25)("includes")}),(function(e,t,r){var n\x3dr(38),i\x3dMath.max,o\x3dMath.min;e.exports\x3dfunction(e,t){return(e\x3dn(e))\x3c0?i(e+t,0):o(e,t)}}),(function(e,t,r){r(286),e.exports\x3dr(12).Object.assign}),(function(e,t,r){var n\x3dr(16);n(n.S+n.F,"Object",{assign:r(287)})}),(function(e,t,r){"use strict";var n\x3dr(288),i\x3dr(292),o\x3dr(293),a\x3dr(35),s\x3dr(24),d\x3dObject.assign;e.exports\x3d!d||r(22)((function(){var e\x3d{},t\x3d{},r\x3dSymbol(),n\x3d"abcdefghijklmnopqrst";return e[r]\x3d7,n.split("").forEach((function(e){t[e]\x3de})),7!\x3dd({},e)[r]||Object.keys(d({},t)).join("")!\x3dn}))?function(e,t){for(var r\x3da(e),d\x3darguments.length,u\x3d1,c\x3di.f,l\x3do.f;d\x3eu;)for(var f,p\x3ds(arguments[u++]),g\x3dc?n(p).concat(c(p)):n(p),b\x3dg.length,v\x3d0;b\x3ev;)l.call(p,f\x3dg[v++])\x26\x26(r[f]\x3dp[f]);return r}:d}),(function(e,t,r){var n\x3dr(289),i\x3dr(291);e.exports\x3dObject.keys||function(e){return n(e,i)}}),(function(e,t,r){var n\x3dr(31),i\x3dr(42),o\x3dr(41)(!1),a\x3dr(290)("IE_PROTO");e.exports\x3dfunction(e,t){var r,s\x3di(e),d\x3d0,u\x3d[];for(r in s)r!\x3da\x26\x26n(s,r)\x26\x26u.push(r);for(;t.length\x3ed;)n(s,r\x3dt[d++])\x26\x26(~o(u,r)||u.push(r));return u}}),(function(e,t,r){var n\x3dr(40)("keys"),i\x3dr(23);e.exports\x3dfunction(e){return n[e]||(n[e]\x3di(e))}}),(function(e,t){e.exports\x3d"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),(function(e,t){t.f\x3dObject.getOwnPropertySymbols}),(function(e,t){t.f\x3d{}.propertyIsEnumerable}),(function(e,t,r){"use strict";function n(e){var t\x3de.message?"message":"data",r\x3d{};try{r\x3dJSON.parse(e[t])}catch(e){return}if(r.adId){var n\x3dpbjsSortable._bidsReceived.find((function(e){return e.adId\x3d\x3d\x3dr.adId}));"Prebid Request"\x3d\x3d\x3dr.message\x26\x26(!(function(e,t,r){var n\x3de.adId,i\x3de.ad,o\x3de.adUrl,a\x3de.width,s\x3de.height;n\x26\x26(!(function(e){var t\x3de.adUnitCode,r\x3de.width,n\x3de.height,i\x3ddocument.getElementById(window.googletag.pubads().getSlots().find((function(e){return e.getAdUnitPath()\x3d\x3d\x3dt||e.getSlotElementId()\x3d\x3d\x3dt})).getSlotElementId()).querySelector("iframe");i.width\x3d""+r,i.height\x3d""+n})(e),r.postMessage(JSON.stringify({message:"Prebid Response",ad:i,adUrl:o,adId:n,width:a,height:s}),t))})(n,r.adServerDomain,e.source),pbjsSortable._winningBids.push(n),i.default.emit(a,n)),"Prebid Native"\x3d\x3d\x3dr.message\x26\x26((0,o.fireNativeTrackers)(r,n),pbjsSortable._winningBids.push(n),i.default.emit(a,n))}}Object.defineProperty(t,"__esModule",{value:!0}),t.listenMessagesFromCreative\x3dfunction(){addEventListener("message",n,!1)};var i\x3d(function(e){return e\x26\x26e.__esModule?e:{default:e}})(r(10)),o\x3dr(13),a\x3dr(4).EVENTS.BID_WON}),(function(e,t,r){"use strict";var n\x3dr(11),i\x3dr(19);t.dfpAdserver\x3dfunction(e,t){var r\x3dnew function(e){this.name\x3de.adserver,this.code\x3de.code,this.getWinningBidByCode\x3dfunction(){return(0,i.getWinningBids)(this.code)[0]}}(e);r.urlComponents\x3dt;var o\x3d{env:"vp",gdfp_req:"1",impl:"s",unviewed_position_start:"1"},a\x3d["output","iu","sz","url","correlator","description_url","hl"];return r.appendQueryParams\x3dfunction(){var e\x3dr.getWinningBidByCode();e\x26\x26(this.urlComponents.search.description_url\x3dencodeURIComponent(e.descriptionUrl),this.urlComponents.search.cust_params\x3d(function(e){return encodeURIComponent((0,n.formatQS)(e))})(e.adserverTargeting),this.urlComponents.search.correlator\x3dDate.now())},r.verifyAdserverTag\x3dfunction(){for(var e in o)if(!this.urlComponents.search.hasOwnProperty(e)||this.urlComponents.search[e]!\x3d\x3do[e])return!1;for(var t in a)if(!this.urlComponents.search.hasOwnProperty(a[t]))return!1;return!0},r}})]);'));
            sk(a,
                b)
        };

        function vk() {
            var a = window.pbjsSortable = window.pbjsSortable || {};
            a.que = a.que || [];
            return a
        }

        function wk(a) {
            var b = y(a.g, function(a) {
                return a.join("x")
            }).join("s");
            return a.id + "s" + b
        }

        function xk(a, b) {
            this.type = a;
            this.g = b;
            this.j = []
        }

        function yk(a, b, c) {
            return new R(function(d, e) {
                if (a.length) {
                    var f = [],
                        g = {};
                    w(b, function(a) {
                        1 >= a.g.length ? f.push(new xk(0, a)) : (f.push(new xk(1, a)), w(a.g, function(b) {
                            fc(a).g = [b];
                            f.push(new xk(2, a))
                        }))
                    });
                    var h = Ha(f, function(a) {
                            return 0 === a.type || 1 === a.type
                        }),
                        l = y(h, function(a) {
                            return a.g
                        }),
                        m = Ha(f, function(a) {
                            return 0 === a.type || 2 === a.type
                        }),
                        n = y(m, function(a) {
                            return a.g
                        });
                    w(a, function(a) {
                        try {
                            var b = a.J ? l : n,
                                c = a.J ? h : m,
                                d = a.C(b);
                            if (d.length != b.length) {
                                var e = Ha(b, function(a) {
                                    return !La(d, function(b) {
                                        return b.request ===
                                            a
                                    })
                                });
                                w(e, function(b) {
                                    return Oi(a, null, "Bid request for name\x3d" + b.getName() + ", slot\x3d" + b.j + ", id\x3d" + b.id + " failed to match a rule.")
                                })
                            }
                            w(d, function(b, d) {
                                var e = b.$a.D.I,
                                    f = {},
                                    h;
                                for (h in e) f[h] = e[h];
                                Sb(f, b.$a.D.N);
                                null !== b && (c[d].j.push({
                                    bidder: a.B,
                                    params: f
                                }), d = wk(b.request), g[d] || (g[d] = []), g[d].push({
                                    bidder: a.B,
                                    ruleId: b.$a.id
                                }))
                            })
                        } catch (Z) {
                            C("failed to get params from " + a.name, null, Z)
                        }
                    });
                    var k = vk(),
                        p = I(),
                        x = function(c) {
                            try {
                                var h = [];
                                w(b, function(b) {
                                    var d = c[wk(b)];
                                    w(a, function(a) {
                                        if (d) {
                                            var c = d.bids;
                                            if (c) {
                                                var e = Ha(c, function(b) {
                                                    return a.B === b.bidder
                                                });
                                                if (0 < e.length) {
                                                    for (var c = e[0], k = c.cpm, l = 1; l < e.length; l++) e[l].cpm > k && (c = e[l], k = c.cpm);
                                                    e = c.width + "x" + c.height;
                                                    k = pb(a.P, "CAD", 100 * c.cpm);
                                                    l = {};
                                                    e = Mi(a, k, e, (l.pbid = c.adId, l.placementInfo = zk(a, f, c.adUnitCode, g), l.dealId = c.dealId, l));
                                                    h.push({
                                                        Wa: a,
                                                        request: b,
                                                        fb: c.timeToRespond,
                                                        result: e
                                                    });
                                                    return
                                                }
                                            }
                                        }
                                        h.push({
                                            Wa: a,
                                            request: b,
                                            fb: I() - p,
                                            result: Ni(a)
                                        })
                                    })
                                });
                                d(h)
                            } catch (P) {
                                e(P)
                            }
                        },
                        E = Ha(f, function(a) {
                            return 0 < a.j.length
                        });
                    k.que.push(function() {
                        try {
                            k.requestBids({
                                adUnits: y(E,
                                    function(a) {
                                        return {
                                            code: wk(a.g),
                                            sizes: a.g.g,
                                            bids: a.j
                                        }
                                    }),
                                timeout: c,
                                bidsBackHandler: x
                            })
                        } catch (F) {
                            e(F)
                        }
                    })
                } else d([])
            })
        }

        function Ak(a, b, c, d, e, f) {
            Ji.call(this, b, d, !0);
            this.B = a;
            this.A = c;
            Ra(this.A, function(a, b) {
                return Sa(a.K, b.K)
            });
            this.P = e || "USD";
            this.J = !f
        }
        ka(Ak, Ji);
        Ak.prototype.C = function(a) {
            return oc(this.A, a)
        };
        Ak.prototype.ub = function(a, b) {
            vk().renderAd(a.document, b.get("pbid"));
            b.G = !0;
            a = vk();
            var c = Ff(b.get("pbid"));
            a = (a = La(a._bidsReceived, function(a) {
                return a.adId === c
            })) && (a.ad || a.adUrl);
            t(a) && Li(b, a)
        };

        function zk(a, b, c, d) {
            if ((b = La(b, function(a) {
                    return wk(a.g) === c
                })) && b.j && (b = La(b.j, function(b) {
                    return b.bidder === a.B
                }), d = La(d[c], function(b) {
                    return b.bidder === a.B
                }), b && d)) {
                var e = {};
                Sb(e, b.params);
                Sb(e, {
                    _ruleId: d.ruleId
                });
                return S(e)
            }
            return null
        }
        var Bk = function() {
            var a = !1;
            return function() {
                a || (uk("appnexusAstBidAdapter", 'pbjsChunkSortable([0],{79:function(e,r,a){a(80),e.exports\x3da(82)},80:function(e,r,a){"use strict";function t(e,r){var a\x3d{requestId:e.uuid,cpm:r.cpm,creative_id:r.creative_id,dealId:r.deal_id};if(r.rtb.video)u(a,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastUrl:r.rtb.video.asset_url,descriptionUrl:r.rtb.video.asset_url}),r.renderer_url\x26\x26(u(a,{adResponse:e,renderer:(function(e,r){var a\x3dp.Renderer.install({id:r.renderer_id,url:r.renderer_url,config:{adText:"AppNexus Outstream Video Ad via Prebid.js"},loaded:!1});try{a.setRender(o)}catch(e){c.logWarn("Prebid Error calling setRender on renderer",e)}return a.setEventHandlers({impression:function(){return c.logMessage("AppNexus outstream video impression event")},loaded:function(){return c.logMessage("AppNexus outstream video loaded event")},ended:function(){c.logMessage("AppNexus outstream renderer video event"),document.querySelector("#"+e).style.display\x3d"none"}}),a})(a.adUnitCode,r)}),a.adResponse.ad\x3da.adResponse.ads[0],a.adResponse.ad.video\x3da.adResponse.ad.rtb.video);else if(r.rtb.native){var t\x3dr.rtb.native;a.native\x3d{title:t.title,body:t.desc,cta:t.ctatext,sponsoredBy:t.sponsored,image:t.main_img\x26\x26t.main_img.url,icon:t.icon\x26\x26t.icon.url,clickUrl:t.link.url,clickTrackers:t.link.click_trackers,impressionTrackers:t.impression_trackers}}else{u(a,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{var n\x3dr.rtb.trackers[0].impression_urls[0],i\x3dc.createTrackPixelHtml(n);a.ad+\x3di}catch(e){c.logError("Error appending tracking pixel",e)}}return a}function n(e){var r\x3d{};if(r.sizes\x3d(function(e){var r\x3d[],a\x3d{};if(c.isArray(e)\x26\x262\x3d\x3d\x3de.length\x26\x26!c.isArray(e[0]))a.width\x3dparseInt(e[0],10),a.height\x3dparseInt(e[1],10),r.push(a);else if("object"\x3d\x3d\x3d(void 0\x3d\x3d\x3de?"undefined":d(e)))for(var t\x3d0;t\x3ce.length;t++){var n\x3de[t];(a\x3d{}).width\x3dparseInt(n[0],10),a.height\x3dparseInt(n[1],10),r.push(a)}return r})(e.sizes),r.primary_size\x3dr.sizes[0],r.uuid\x3de.bidId,e.params.placementId?r.id\x3dparseInt(e.params.placementId,10):r.code\x3de.params.invCode,r.allow_smaller_sizes\x3de.params.allowSmallerSizes||!1,r.prebid\x3d!0,r.disable_psa\x3d!0,e.params.reserve\x26\x26(r.reserve\x3de.params.reserve),e.params.position\x26\x26(r.position\x3d{above:1,below:2}[e.params.position]||0),e.params.trafficSourceCode\x26\x26(r.traffic_source_code\x3de.params.trafficSourceCode),e.params.privateSizes\x26\x26(r.private_sizes\x3dgetSizes(e.params.privateSizes)),e.params.supplyType\x26\x26(r.supply_type\x3de.params.supplyType),e.params.pubClick\x26\x26(r.pubclick\x3de.params.pubClick),e.params.extInvCode\x26\x26(r.ext_inv_code\x3de.params.extInvCode),e.params.externalImpId\x26\x26(r.external_imp_id\x3de.params.externalImpId),c.isEmpty(e.params.keywords)||(r.keywords\x3d(function(e){var r\x3d[];return c._each(e,(function(e,a){if(c.isArray(e)){var t\x3d[];c._each(e,(function(e){(e\x3dc.getValueString("keywords."+a,e))\x26\x26t.push(e)})),e\x3dt}else{if(e\x3dc.getValueString("keywords."+a,e),!c.isStr(e))return;e\x3d[e]}r.push({key:a,value:e})})),r})(e.params.keywords)),("native"\x3d\x3d\x3de.mediaType||c.deepAccess(e,"mediaTypes.native"))\x26\x26(r.ad_types\x3d["native"],e.nativeParams)){var a\x3d(function(e){var r\x3d{};return Object.keys(e).forEach((function(a){var t\x3db[a]\x26\x26b[a].serverName||b[a]||a,n\x3db[a]\x26\x26b[a].requiredParams;r[t]\x3du({},n,e[a]);var i\x3db[a]\x26\x26b[a].minimumParams;if(n\x26\x26i){var s\x3dObject.keys(e[a]),o\x3dObject.keys(n);0\x3d\x3d\x3ds.filter((function(e){return!o.includes(e)})).length\x26\x26(r[t]\x3du({},r[t],i))}})),r})(e.nativeParams);r.native\x3d{layouts:[a]}}var t\x3dc.deepAccess(e,"mediaTypes.video"),n\x3dc.deepAccess(e,"mediaTypes.video.context");return("video"\x3d\x3d\x3de.mediaType||t\x26\x26"outstream"!\x3d\x3dn)\x26\x26(r.require_asset_url\x3d!0),e.params.video\x26\x26(r.video\x3d{},Object.keys(e.params.video).filter((function(e){return f.includes(e)})).forEach((function(a){return r.video[a]\x3de.params.video[a]}))),r}function i(e){return!!e.params.user}function s(e){return!!parseInt(e.params.member,10)}function o(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},function(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}.bind(null,e))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.spec\x3dvoid 0;var d\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e},u\x3dObject.assign||function(e){for(var r\x3d1;r\x3carguments.length;r++){var a\x3darguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)\x26\x26(e[t]\x3da[t])}return e},p\x3da(18),c\x3d(function(e){if(e\x26\x26e.__esModule)return e;var r\x3d{};if(null!\x3de)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)\x26\x26(r[a]\x3de[a]);return r.default\x3de,r})(a(0)),m\x3da(15),l\x3da(81),v\x3d["banner","video","native"],f\x3d["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],y\x3d["age","external_uid","segments","gender","dnt","language"],b\x3d{body:"description",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0},minimumParams:{sizes:[{}]}},icon:{serverName:"icon",requiredParams:{required:!0},minimumParams:{sizes:[{}]}},sponsoredBy:"sponsored_by"},g\x3dr.spec\x3d{code:"appnexusAst",supportedMediaTypes:[l.VIDEO,l.NATIVE],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member\x26\x26e.params.invCode)},buildRequests:function(e,r){var a\x3de.map(n),t\x3de.find(i),o\x3dvoid 0;t\x26\x26(o\x3d{},Object.keys(t.params.user).filter((function(e){return y.includes(e)})).forEach((function(e){return o[e]\x3dt.params.user[e]})));var d\x3de.find(s),u\x3dd?parseInt(d.params.member,10):0,p\x3d{tags:[].concat(function(e){if(Array.isArray(e)){for(var r\x3d0,a\x3dArray(e.length);r\x3ce.length;r++)a[r]\x3de[r];return a}return Array.from(e)}(a)),user:o,sdk:{source:"pbjs",version:"0.31.0"}};u\x3e0\x26\x26(p.member_id\x3du);return{method:"POST",url:"//ib.adnxs.com/ut/v3/prebid",data:JSON.stringify(p),bidderRequest:r}},interpretResponse:function(e,r){var a\x3dr.bidderRequest,n\x3d[];if(!e||e.error){var i\x3d"in response for "+a.bidderCode+" adapter";return e\x26\x26e.error\x26\x26(i+\x3d": "+e.error),c.logError(i),n}return e.tags\x26\x26e.tags.forEach((function(e){var r\x3d(function(e){return e\x26\x26e.ads\x26\x26e.ads.length\x26\x26e.ads.find((function(e){return e.rtb}))})(e);if(r\x26\x260!\x3d\x3dr.cpm\x26\x26v.includes(r.ad_type)){var a\x3dt(e,r);a.mediaType\x3d(function(e){var r\x3de.ad_type;return"video"\x3d\x3d\x3dr?"video":"native"\x3d\x3d\x3dr?"native":"banner"})(r),n.push(a)}})),n},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"}]}};(0,m.registerBidder)(g)},81:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.NATIVE\x3d"native",r.VIDEO\x3d"video",r.BANNER\x3d"banner"},82:function(e,r){}},[79]);'),
                    a = !0)
            }
        }();

        function Ck(a, b, c, d, e, f, g, h) {
            Ak.call(this, "rubicon", "fl", [], {
                Ta: f,
                Pa: e
            });
            this.O = a;
            this.o = b;
            this.g = c;
            this.j = d;
            this.F = g;
            yi(ui.U(), "pbflrl", 50) ? this.A = h : Dk(this);
            uk("rubiconBidAdapter", 'pbjsChunkSortable([40],{204:function(e,r,t){e.exports\x3dt(205)},205:function(e,r,t){"use strict";function i(){return"pbjs_lite_"+pbjsSortable.version}function n(e,r){return(r.cpm||0)-(e.cpm||0)}function o(){return[window.screen.width,window.screen.height].join("x")}function a(e){var r\x3de.params;if("video"\x3d\x3d\x3de.mediaType){var t\x3d[];return r.video.playerWidth\x26\x26r.video.playerHeight?t\x3d[r.video.playerWidth,r.video.playerHeight]:Array.isArray(e.sizes)\x26\x26e.sizes.length\x3e0\x26\x26Array.isArray(e.sizes[0])\x26\x26e.sizes[0].length\x3e1\x26\x26(t\x3de.sizes[0]),t}return s(Array.isArray(r.sizes)?r.sizes.map((function(e){return(l[e]||"").split("x")})):e.sizes)}function s(e){var r\x3d[15,2,9];return c.parseSizesInput(e).reduce((function(e,r){var t\x3dparseInt(l[r],10);return t\x26\x26e.push(t),e}),[]).sort((function(e,t){var i\x3dr.indexOf(e),n\x3dr.indexOf(t);return i\x3e-1||n\x3e-1?-1\x3d\x3d\x3di?1:-1\x3d\x3d\x3dn?-1:i-n:e-t}))}Object.defineProperty(r,"__esModule",{value:!0}),r.spec\x3dvoid 0;var d\x3d(function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,r){var t\x3d[],i\x3d!0,n\x3d!1,o\x3dvoid 0;try{for(var a,s\x3de[Symbol.iterator]();!(i\x3d(a\x3ds.next()).done)\x26\x26(t.push(a.value),!r||t.length!\x3d\x3dr);i\x3d!0);}catch(e){n\x3d!0,o\x3de}finally{try{!i\x26\x26s.return\x26\x26s.return()}finally{if(n)throw o}}return t})(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),u\x3d"function"\x3d\x3dtypeof Symbol\x26\x26"symbol"\x3d\x3dtypeof Symbol.iterator?function(e){return typeof e}:function(e){return e\x26\x26"function"\x3d\x3dtypeof Symbol\x26\x26e.constructor\x3d\x3d\x3dSymbol\x26\x26e!\x3d\x3dSymbol.prototype?"symbol":typeof e};r.masSizeOrdering\x3ds,r.resetUserSync\x3dfunction(){v\x3d!1};var c\x3d(function(e){if(e\x26\x26e.__esModule)return e;var r\x3d{};if(null!\x3de)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)\x26\x26(r[t]\x3de[t]);return r.default\x3de,r})(t(0)),p\x3dt(15),l\x3d{1:"468x60",2:"728x90",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",43:"320x50",44:"300x50",48:"300x300",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",65:"640x480",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",94:"970x310",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",195:"600x300"};c._each(l,(function(e,r){return l[e]\x3dr}));var f\x3dr.spec\x3d{code:"rubicon",aliases:["rubiconLite"],supportedMediaTypes:["video"],isBidRequestValid:function(e){if("object"!\x3d\x3du(e.params))return!1;var r\x3de.params;if(!/^\\d+$/.test(r.accountId))return!1;return!(a(e).length\x3c1)\x26\x26!!("video"!\x3d\x3de.mediaType||"object"\x3d\x3d\x3du(r.video)\x26\x26r.video.size_id)},buildRequests:function(e,r){return e.map((function(e){if(e.startTime\x3d(new Date).getTime(),"video"\x3d\x3d\x3de.mediaType){var t\x3de.params,n\x3da(e),s\x3d{page_url:t.referrer?t.referrer:c.getTopWindowUrl(),resolution:o(),account_id:t.accountId,integration:i(),timeout:r.timeout-(Date.now()-r.auctionStart+500),stash_creatives:!0,ae_pass_through_parameters:t.video.aeParams,slots:[]},d\x3d{site_id:t.siteId,zone_id:t.zoneId,position:t.position||"btf",floor:parseFloat(t.floor)\x3e.01?t.floor:.01,element_id:e.placementCode,name:e.placementCode,language:t.video.language,width:n[0],height:n[1],size_id:t.video.size_id};return t.inventory\x26\x26"object"\x3d\x3d\x3du(t.inventory)\x26\x26(d.inventory\x3dt.inventory),t.keywords\x26\x26Array.isArray(t.keywords)\x26\x26(d.keywords\x3dt.keywords),t.visitor\x26\x26"object"\x3d\x3d\x3du(t.visitor)\x26\x26(d.visitor\x3dt.visitor),s.slots.push(d),{method:"POST",url:"//fastlane-adv.rubiconproject.com/v1/auction/video",data:s,bidRequest:e}}var p\x3de.params,l\x3dp.accountId,f\x3dp.siteId,v\x3dp.zoneId,y\x3dp.position,m\x3dp.floor,x\x3dp.keywords,h\x3dp.visitor,b\x3dp.inventory,_\x3dp.userId,g\x3dp.referrer;m\x3d(m\x3dparseFloat(m))\x3e.01?m:.01,y\x3dy||"btf";var w\x3da(e),j\x3d["account_id",l,"site_id",f,"zone_id",v,"size_id",w[0],"alt_size_ids",w.slice(1).join(",")||void 0,"p_pos",y,"rp_floor",m,"rp_secure","https:"\x3d\x3d\x3dlocation.protocol?"1":"0","tk_flint",i(),"tid",e.transactionId,"p_screen_res",o(),"kw",x,"tk_user_key",_];return null!\x3d\x3dh\x26\x26"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3dh?"undefined":u(h))\x26\x26c._each(h,(function(e,r){return j.push("tg_v."+r,e)})),null!\x3d\x3db\x26\x26"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3db?"undefined":u(b))\x26\x26c._each(b,(function(e,r){return j.push("tg_i."+r,e)})),j.push("rand",Math.random(),"rf",g||c.getTopWindowUrl()),j\x3dj.concat(function(){var e\x3d(function(){var e\x3dwindow.DigiTrust\x26\x26(pbjsSortable.getConfig("digiTrustId")||window.DigiTrust.getUser({member:"T9QSFKPDN9"}));return e\x26\x26e.success\x26\x26e.identity||null})();return!e||e.privacy\x26\x26e.privacy.optout?[]:["dt.id",e.id,"dt.keyv",e.keyv,"dt.pref",0]}()),j\x3dj.reduce((function(e,r,t){return t%2\x3d\x3d0\x26\x26void 0!\x3d\x3dj[t+1]?e+r+"\x3d"+encodeURIComponent(j[t+1])+"\x26":e}),"").slice(0,-1),{method:"GET",url:"//fastlane.rubiconproject.com/a/api/fastlane.json",data:j,bidRequest:e}}))},interpretResponse:function(e,r){var t\x3dr.bidRequest,i\x3de.ads;return"object"!\x3d\x3d(void 0\x3d\x3d\x3de?"undefined":u(e))||"ok"!\x3d\x3de.status?[]:("object"\x3d\x3d\x3d(void 0\x3d\x3d\x3dt?"undefined":u(t))\x26\x26"video"\x3d\x3d\x3dt.mediaType\x26\x26"object"\x3d\x3d\x3d(void 0\x3d\x3d\x3di?"undefined":u(i))\x26\x26(i\x3di[t.placementCode]),!Array.isArray(i)||i.length\x3c1?[]:(i\x3di.sort(n)).reduce((function(e,r){if("ok"!\x3d\x3dr.status)return[];var i\x3d{requestId:t.bidId,currency:"USD",creative_id:r.creative_id,bidderCode:f.code,cpm:r.cpm||0,dealId:r.deal};if("video"\x3d\x3d\x3dt.mediaType)i.width\x3dt.params.video.playerWidth,i.height\x3dt.params.video.playerHeight,i.vastUrl\x3dr.creative_depot_url,i.descriptionUrl\x3dr.impression_id,i.impression_id\x3dr.impression_id;else{i.ad\x3d(function(e,r){return"\x3chtml\x3e\\n\x3chead\x3e\x3cscript type\x3d\'text/javascript\'\x3einDapIF\x3dtrue;\x3c\\/script\x3e\x3c/head\x3e\\n\x3cbody style\x3d\'margin : 0; padding: 0;\'\x3e\\n\\x3c!-- Rubicon Project Ad Tag --\\x3e\\n\x3cdiv data-rp-impression-id\x3d\'"+r+"\'\x3e\\n\x3cscript type\x3d\'text/javascript\'\x3e"+e+"\x3c\\/script\x3e\\n\x3c/div\x3e\\n\x3c/body\x3e\\n\x3c/html\x3e"})(r.script,r.impression_id);var n\x3dl[r.size_id].split("x").map((function(e){return Number(e)})),o\x3dd(n,2);i.width\x3do[0],i.height\x3do[1]}return i.rubiconTargeting\x3d(Array.isArray(r.targeting)?r.targeting:[]).reduce((function(e,r){return e[r.key]\x3dr.values[0],e}),{rpfl_elemid:t.placementCode}),e.push(i),e}),[]))},getUserSyncs:function(){if(!v)return v\x3d!0,{type:"iframe",url:"https://tap-secure.rubiconproject.com/partner/scripts/rubicon/emily.html?rtb_ext\x3d1"}}},v\x3d!1;(0,p.registerBidder)(f)}},[204]);')
        }
        ka(Ck, Ak);

        function Dk(a) {
            function b(b, d, e, f, g) {
                b = {
                    accountId: a.O,
                    siteId: b,
                    zoneId: d
                };
                d = {};
                null != e && f && (d.adUnitName = {
                    H: K,
                    value: a.F[e]
                }, d.size = {
                    H: K,
                    value: [f]
                });
                return nc(b, d, g, !0)
            }
            Ob(a.g) || w(Nb(a.g), function(c) {
                var d = c.match(/\d+,\d+$/);
                if (d && a.o) {
                    var e = d[0],
                        d = c.substring(0, c.length - e.length - 1);
                    if (a.F[d]) {
                        var e = e.split(","),
                            f = a.j && null != a.j[c] && "" != a.j[c];
                        (a.g && null != a.g[c] && "" != a.g[c] || f) && a.A.push(b(a.g && null != a.g[c] && "" != a.g[c] ? a.g[c] : a.o.siteId, a.j && null != a.j[c] && "" != a.j[c] ? a.j[c] : a.o.zoneId, d, new J(Fa(e[0]), Fa(e[1])),
                            1))
                    }
                }
            });
            a.o && a.A.push(b(a.o.siteId, a.o.zoneId, null, null, 2))
        }
        Ck.prototype.C = function(a) {
            a = Ak.prototype.C.call(this, a);
            w(a, function(a) {
                a.$a = Qb(a.$a);
                var b = a.$a;
                a = a.request;
                var d = a.B;
                d && (b.D.I.floor = (d / 100).toFixed(2));
                b.D.I.position = a.C ? "atf" : "btf"
            });
            return a
        };

        function Ek() {
            function a(a, b) {
                var d = {};
                a = nc({
                    placementId: b
                }, (d.adUnitName = {
                    H: K,
                    value: [new hc(a)]
                }, d), 1, !1);
                /^[\s\xa0]*$/.test("") || (a.D.I.extInvCode = "");
                null !== c && b in c ? a.D = c[b] : c[b] = a.D;
                return a
            }
            var b = [],
                c = {};
            Kb(vd, function(c, e, f) {
                Hf(f, e) && b.push(a(e, c))
            });
            Bk();
            return new Ak("appnexusAst", "an", b, {
                Pa: .99,
                Ta: !0
            }, "USD", !1)
        }

        function Fk(a, b, c) {
            b = {
                Pa: .99,
                Ta: b
            };
            /^[\s\xa0]*$/.test(c) ? qk.call(this, "an", a, b) : qk.call(this, "an", a, b, c)
        }
        ka(Fk, qk);

        function Gk(a, b, c, d, e) {
            this.request = a;
            this.result = b;
            this.fb = c;
            this.j = d;
            this.g = e
        };

        function Hk(a) {
            this.g = {};
            this.j = {};
            this.o = a
        }

        function Ik(a, b) {
            var c = null,
                d = 0;
            b = r(b);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, !e.g && (a.o || !e.j)) {
                    var f = e.result.g || 0;
                    f > d && (d = f, c = e)
                }
            return c
        }

        function dk(a, b) {
            return (b = a.g[b]) ? Ik(a, b) : null
        }

        function kk(a, b, c) {
            return (a = a.g[b]) ? Na(a, function(a) {
                return ji(a.result) === c
            }) : null
        }

        function ik(a, b) {
            return b && (a = a.j[b]) ? a : null
        };

        function Jk() {
            df("//ap.lijit.com/www/sovrn_beacon_standalone/sovrn_standalone_beacon.js?iid\x3d11460374\x26uid\x3dsortable", window, "sBeacon")
        };
        var Kk = void 0;
        zf("flashver", function() {
            for (var a = navigator.plugins, b = 0; a && b < a.length; b++) {
                var c = a[b];
                if (c && "Shockwave Flash" === c.name) {
                    Kk = c.description;
                    break
                }
            }
        });

        function Lk(a, b, c, d, e, f, g, h, l) {
            this.id = a;
            this.A = b;
            this.B = c;
            this.size = d;
            this.name = e;
            this.g = f;
            this.j = g;
            this.C = h;
            this.o = l
        }

        function Mk(a) {
            return {
                id: a.id,
                fnum: a.A,
                hfnum: a.B,
                size: a.size,
                name: a.name,
                pos: {
                    x: a.g.g,
                    y: a.g.j
                },
                atf: a.j,
                formats: a.C,
                view: a.o
            }
        }

        function Nk(a, b, c) {
            Ji.call(this, "d7s", {
                zb: !0
            });
            this.g = a;
            this.A = b;
            this.B = c;
            this.j = tb();
            T("d7s sync");
            var d = H();
            a = Xf("//c.deployads.com/sync", {
                i: V().g,
                u: Pe(d).href,
                s: this.g,
                d: this.j,
                client_build: 14388
            });
            this.C = pe(wf("GET", a, {
                withCredentials: !0
            }).then(function(a) {
                a = Le(a);
                a = y(a, function(a) {
                    return ef(a, d, 500)
                });
                return je(a)
            }), function(a) {
                -1 === navigator.userAgent.indexOf("PhantomJS") && G("d7s.Bidder.constructor", "loadPixel failed", a);
                return null
            });
            this.B ? this.o = pe(wf("GET", "//ap.lijit.com/readerinfo?loc\x3d" +
                window.document.location.hostname, {
                    withCredentials: !0,
                    timeout: 500
                }).then(function(a) {
                Jk();
                return Le(a)
            }), function(a) {
                C("d7s.Bidder.constructor", "", a);
                return null
            }) : this.o = fe(null)
        }
        ka(Nk, Ji);

        function Ok(a, b, c) {
            var d = Eb(Bb.U(), c.name),
                e = d && !1,
                f = d && !1,
                d = d && 1 === c.g.length && "300x250" === Ya(c.g[0]),
                g = c.o,
                h = {};
            a = Mi(a, 0, Ya(c.g[0]), (h.slotName = c.j, h.bidId = g, h));
            b.push(a);
            b = ni(1089, Math.floor(Qi(c.B)));
            a = (a = c.J) ? ni(1089, Math.floor(Qi(a))) : null;
            h = c.A.Xa();
            d && -1 == h.indexOf("native") && h.push("native");
            f && -1 == h.indexOf("video") && h.push("video");
            e && -1 == h.indexOf("instream") && (h = ["instream"]);
            return new Lk(g, b, a, c.g, c.name, c.S, c.C, h, c.V)
        }

        function Pk(a, b) {
            var c = H(),
                d = af(c),
                e = c.document.referrer,
                f = a.g,
                g = a.A,
                c = Pe(c).href,
                d = {
                    w: d.ea,
                    h: d.Za
                },
                h = V().g,
                l = Kk;
            a = a.j;
            for (var m = [], n = Yf(H().location.search.replace(/^\?/, "")), k = 0; k < n.length; k++) "ssrt-d7s-sf" === n[k][0] && (m.push(n[k][1]), T("d7s special features being applied: ", n[k][1]));
            return {
                requests: [],
                referrer: e,
                site: f,
                openx_ssp_enabled: g,
                href: c,
                dims: d,
                uid: h,
                flashver: l,
                device_type: a,
                ljt: b,
                sf: m,
                client_build: 14388,
                segment: {}
            }
        }
        Nk.prototype.jb = function(a, b) {
            var c = this;
            b(je([this.C, this.o]).then(function(b) {
                var d;
                b[1] && b[1].Yb ? d = b[1].value : d = null;
                var f = Pk(c, d),
                    g = [];
                w(a, function(a) {
                    f.requests.push(Mk(Ok(c, g, a)))
                });
                return wf("POST", "//c.deployads.com/start", {
                    type: "text/plain",
                    withCredentials: !0,
                    body: S(f)
                }).then(function(a) {
                    var b;
                    try {
                        var c = Le(a);
                        T("d7s response: ", c);
                        Qk(a, g);
                        b = g
                    } catch (n) {
                        V().Da("d7s.handleResponse", null, n), b = null
                    }
                    return b
                }, function(a) {
                    a && a instanceof Error && /^CORS request bad status 4/.test(a.message) && C("cactus rejected us",
                        "d7s.fetchBids", a);
                    return null
                })
            }))
        };
        Nk.prototype.ub = function(a, b) {
            if (b.get("isExpandable")) {
                var c = b.get("creative"),
                    d = Pi(a);
                if (d)
                    if (d = U(d.ownerDocument).body) {
                        b.G = !0;
                        var e = U($a(Va(b.size)));
                        ii(a, c, b) || (T("confiant: wrapper did not run, rendering ourselves"), vf(d, e[0], e[1], b.get("creative")))
                    } else C("no body")
            } else if (c = b.get("creative"), d = Pi(a))(d = U(d.ownerDocument).body) ? (b.G = !0, e = U($a(Va(b.size))), ii(a, c, b) || (T("confiant: wrapper did not run, rendering ourselves"), a = uf(d, e[0], e[1]), b = encodeURIComponent(window.location.href), /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(window.navigator.userAgent) &&
                a.setAttribute("sandbox", "allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox"), a.name = "1-0-2;" + c.length + ";" + c, a.src = "//tpc.googlesyndication.com/safeframe/1-0-2/html/container.html#p\x3d" + b, d.appendChild(a))) : C("no body")
        };
        Nk.prototype.lb = function() {
            return Ji.prototype.lb.call(this) / .85
        };

        function Rk(a) {
            switch (a) {
                case "RTHM":
                    return .97;
                case "CENT":
                    return .95;
                case "BSWT":
                    return .98;
                case "SEK":
                    return .98;
                default:
                    return 1
            }
        }

        function Qk(a, b) {
            a = Le(a);
            (a = y(a.bids, function(a) {
                var b = a.cnum;
                a.cnum = b ? 1809 * parseInt(b, 36) % 1E4 : 0;
                return a
            })) && y(a, function(a) {
                var c = a.imp_id,
                    e = La(b, function(a) {
                        return null !== a && a.get("bidId") === c
                    });
                if (!e) throw Error("d7s bid on nonexistent imp " + c);
                var f = a.bidder;
                e.Pa = e.Pa * Rk(f);
                mi(e, Math.floor(pb("USD", "CAD", a.cnum)));
                e.set("creative", a.creative);
                e.set("isExpandable", !!a.is_expandable);
                e.size = Ya(a.size);
                e.set("d7sBidder", f);
                T("d7s bid: ", e.get("slotName"), e.size, e.g || 0)
            })
        };

        function Sk() {
            function a(a, b) {
                var d = {};
                b = nc({
                    placementId: a
                }, (d.size = {
                    H: K,
                    value: [b]
                }, d), 1, !1);
                null !== c && a in c ? b.D = c[a] : c[a] = b.D;
                return b
            }
            var b = [],
                c = {};
            Kb(Kc, function(c, d, g) {
                if (Hf(g, d))
                    if (g = bb(d), null === g) G("df bad size", d);
                    else
                        for (c = r(c), d = c.next(); !d.done; d = c.next()) b.push(a(d.value, new J(g[0], g[1])))
            });
            Bk();
            var d = vk();
            d && d.aliasBidder ? d.aliasBidder("appnexusAst", "defy") : C("no aliasBidder for defy");
            return new Ak("defy", "df", yi(ui.U(), "pbdfrl", 5) ? Jc : b, {
                Pa: .83
            }, "USD", !0)
        };

        function Tk() {
            this.C = Bb.U();
            var a = $f()["ssrt-bid-test"];
            this.B = a ? a.split(",") : [];
            a = zi(ui.U(), "bat");
            this.o = new Hk(a);
            Ui.U();
            this.g = [];
            this.A = {};
            this.P = new Eh(50, u(this.V, this));
            this.O = this.j = null;
            this.J = Ia(this.C.g, function(a, c) {
                var b = new hc(gc(c.g));
                null !== a && c.name in a ? a[c.name].push(b) : a[c.name] = [b];
                return a
            }, {});
            Uk(this);
            this.F = []
        }
        na(Tk);

        function Uk(a) {
            var b = ui.U(),
                c = z(["snapsort.com", "cpuboss.com", "gpuboss.com"], "9gag.com") && yi(b, "sspopenx", 50),
                d = !1,
                e = !1,
                e = !1,
                d = !0,
                f = Bb.U(),
                g = Ti.U().g,
                h = null;
            0 < g.length && (h = Ai(b, "eb", {
                both: {
                    ea: 1,
                    qa: "both"
                },
                eb: {
                    ea: 1,
                    qa: "eb"
                }
            }));
            d && (h && z(g, "sv") ? z(g, "sv") && Jk() : Vk(a, "sv", function() {
                var a = [],
                    c = {};
                Kb(fd, function(b, d, e) {
                    if (Hf(e, d)) {
                        var f = bb(d);
                        w(b, function(b) {
                            if (f) {
                                var d = {},
                                    d = nc({
                                        tagid: b
                                    }, (d.size = {
                                        H: K,
                                        value: [new J(f[0], f[1])]
                                    }, d), 1, !1);
                                null !== c && b in c ? d.D = c[b] : c[b] = d.D;
                                a.push(d)
                            }
                        })
                    }
                });
                uk("sovrnBidAdapter",
                    'pbjsChunkSortable([32],{222:function(e,i,a){e.exports\x3da(223)},223:function(e,i,a){"use strict";var t\x3da(4),d\x3da(0),r\x3da(3),n\x3da(2),o\x3da(5),s\x3dfunction(){function e(e){!(function(e){var a\x3dwindow.location.host,r\x3dwindow.location.pathname+location.search+location.hash,n\x3d[];d._each(e,(function(e){var i\x3dd.getBidIdParameter("tagid",e.params),a\x3dd.getBidIdParameter("bidfloor",e.params),t\x3d0,r\x3d0,o\x3dArray.isArray(e.params.sizes)?e.params.sizes:e.sizes;2\x3d\x3d\x3do.length\x26\x26"number"\x3d\x3dtypeof o[0]\x26\x26"number"\x3d\x3dtypeof o[1]?(t\x3do[0],r\x3do[1]):(t\x3do[0][0],r\x3do[0][1]);var s\x3d{id:e.bidId,banner:{w:t,h:r},tagid:i,bidfloor:a};n.push(s)}));var s\x3d{id:d.getUniqueIdentifierStr(),imp:n,site:{domain:a,page:r}},c\x3d"//"+i+"?callback\x3dwindow.pbjsSortable.sovrnResponse\x26src\x3d"+t.REPO_AND_VERSION+"\x26br\x3d"+encodeURIComponent(JSON.stringify(s));o.loadScript(c)})(e.bids||[])}var i\x3d"ap.lijit.com/rtb/bid";return pbjsSortable.sovrnResponse\x3dfunction(e){var i\x3d[];e\x26\x26e.id\x26\x26e.seatbid\x26\x260!\x3d\x3de.seatbid.length\x26\x26e.seatbid[0].bid\x26\x260!\x3d\x3de.seatbid[0].bid.length\x26\x26e.seatbid[0].bid.forEach((function(e){var a,o\x3d"",s\x3de.impid,c\x3d{},p\x3dd.getBidRequest(s);if(p\x26\x26(o\x3dp.placementCode,p.status\x3dt.STATUS.GOOD,0!\x3d\x3d(a\x3dparseFloat(e.price)))){e.placementCode\x3do,e.size\x3dp.sizes;var b\x3de.adm,l\x3d\'\x3cimg src\x3d"\'+e.nurl+\'"\x3e\';(c\x3dr.createBid(1,p)).creative_id\x3de.id,c.bidderCode\x3d"sovrn",c.cpm\x3da,c.ad\x3ddecodeURIComponent(b+l),c.width\x3dparseInt(e.w),c.height\x3dparseInt(e.h),e.dealid\x26\x26(c.dealId\x3de.dealid),n.addBidResponse(o,c),i.push(s)}})),(function(e){var i\x3dd.getBidderRequestAllAdUnits("sovrn");(i\x3di?i.bids.filter((function(i){return e.indexOf(i.bidId)\x3c0})):[]).forEach((function(e){var i\x3d{};(i\x3dr.createBid(2,e)).bidderCode\x3d"sovrn",n.addBidResponse(e.placementCode,i)}))})(i)},{callBids:e}};a(1).registerBidAdapter(new s,"sovrn"),e.exports\x3ds}},[222]);');
                return new Ak("sovrn", "sv", yi(b, "pbsvrl", 5) ? ed : a, {
                    Pa: .955,
                    Ta: !1
                }, "USD", !0)
            }));
            null !== f.V && Vk(a, "d7s", function() {
                return new Nk(f.V, c, e)
            });
            Vk(a, "aol", function() {
                function c(b, c, d) {
                    var f = {};
                    c = nc({
                        placement: String(b),
                        network: "10250.1",
                        server: "adserver.adtechus.com"
                    }, (f.size = {
                        H: K,
                        value: [c]
                    }, f), 1, !1);
                    d && (c.L.adUnitName = {
                        H: K,
                        value: a.J[d]
                    });
                    null !== e && b in e ? c.D = e[b] : e[b] = c.D;
                    return c
                }
                var d = [],
                    e = {};
                w(rd, function(a) {
                    var b = a.name,
                        e = bb(a.size);
                    null === e ? G("aol bad size 1", a.size) : d.push(c(a.id, new J(e[0], e[1]),
                        b))
                });
                Kb(qd, function(a, b, e) {
                    if (Hf(e, b))
                        if (e = bb(b), null === e) G("aol bad size 2", b);
                        else
                            for (a = r(a), b = a.next(); !b.done; b = a.next()) d.push(c(b.value, new J(e[0], e[1])))
                });
                uk("aolBidAdapter", 'pbjsChunkSortable([93],{75:function(e,r,t){e.exports\x3dt(76)},76:function(e,r,t){"use strict";function a(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var o\x3dObject.assign||function(e){for(var r\x3d1;r\x3carguments.length;r++){var t\x3darguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)\x26\x26(e[a]\x3dt[a])}return e},n\x3da(["","://","/pubapi/3.0/","/","/","/","/ADTECH;v\x3d2;cmd\x3dbid;cors\x3dyes;alias\x3d","",";misc\x3d",""],["","://","/pubapi/3.0/","/","/","/","/ADTECH;v\x3d2;cmd\x3dbid;cors\x3dyes;alias\x3d","",";misc\x3d",""]),i\x3da(["","://","/bidRequest?"],["","://","/bidRequest?"]),d\x3da(["dcn\x3d","\x26pos\x3d","\x26cmd\x3dbid",""],["dcn\x3d","\x26pos\x3d","\x26cmd\x3dbid",""]),s\x3dt(0),c\x3dt(6).ajax,p\x3dt(3),l\x3dt(2),u\x3dt(4),m\x3dt(1),b\x3dt(7).default,f\x3d{aol:"aol",onemobile:"onemobile",onedisplay:"onedisplay"};pbjsSortable.aolGlobals\x3d{pixelsDropped:!1};var v\x3dfunction(){function e(e){if(!pbjsSortable.aolGlobals.pixelsDropped){!(function(e){e.forEach((function(e){switch(e.tagName){case j.img:return (function(e){(new Image).src\x3de.src})(e);case j.iframe:return (function(e){var r\x3ddocument.createElement("iframe");r.width\x3d1,r.height\x3d1,r.style.display\x3d"none",r.src\x3de.src,"interactive"\x3d\x3d\x3ddocument.readyState||"complete"\x3d\x3d\x3ddocument.readyState?document.body.appendChild(r):E((function(){document.body.appendChild(r)}))})(e)}}))})(function(e){var r\x3d/\\w*(?\x3d\\s)/,t\x3d/src\x3d("|\')(.*?)\\1/,a\x3d[];if(e){var o\x3de.match(/(img|iframe)[\\s\\S]*?src\\s*\x3d\\s*("|\')(.*?)\\2/gi);o\x26\x26o.forEach((function(e){var o\x3de.match(r),n\x3de.match(t);o\x26\x26n\x26\x26a.push({tagName:o[0].toUpperCase(),src:n[2]})}))}return a}(e)),pbjsSortable.aolGlobals.pixelsDropped\x3d!0}}function r(e){for(var r\x3darguments.length,t\x3dArray(r\x3e1?r-1:0),a\x3d1;a\x3cr;a++)t[a-1]\x3darguments[a];return function(){for(var r\x3darguments.length,a\x3dArray(r),o\x3d0;o\x3cr;o++)a[o]\x3darguments[o];var n\x3da[a.length-1]||{},i\x3d[e[0]];return t.forEach((function(r,t){var o\x3dNumber.isInteger(r)?a[r]:n[r];i.push(o,e[t+1])})),i.join("")}}function t(e){var r\x3darguments.length\x3e1\x26\x26void 0!\x3d\x3darguments[1]?arguments[1]:{},t\x3dp.createBid(2,e);t.bidderCode\x3de.bidder,t.reason\x3dr.nbr,t.raw\x3dr,l.addBidResponse(e.placementCode,t)}function a(e){return e\x3d\x3d\x3df.aol||e\x3d\x3d\x3df.onemobile}function m(e){return (function(e){return e\x3d\x3d\x3df.aol||e\x3d\x3d\x3df.onedisplay})(e.bidder)\x26\x26e.params.placement\x26\x26e.params.network}function v(r){s._each(r.bids,(function(r){var o\x3dvoid 0,n\x3dnull,i\x3d{withCredentials:!0},d\x3d(function(e){if(a(e.bidder)\x26\x26e.params.id\x26\x26e.params.imp\x26\x26e.params.imp[0]){var r\x3de.params.imp[0];return r.id\x26\x26r.tagid\x26\x26(r.banner\x26\x26r.banner.w\x26\x26r.banner.h||r.video\x26\x26r.video.mimes\x26\x26r.video.minduration\x26\x26r.video.maxduration)}})(r),b\x3d(function(e){return a(e.bidder)\x26\x26e.params.dcn\x26\x26e.params.pos})(r),v\x3dm(r);b||d?(o\x3d(function(e){var r\x3de.params,t\x3dr.dcn,a\x3dr.pos,o\x3d"https:"\x3d\x3d\x3ddocument.location.protocol,n\x3dx({protocol:o?"https":"http",host:e.params.host||w});if(t\x26\x26a){var i\x3d"";o\x26\x26(e.params.ext\x3de.params.ext||{},e.params.ext.secure\x3d1),s._each(e.params.ext,(function(e,r){i+\x3d"\x26"+r+"\x3d"+encodeURIComponent(e)})),n+\x3dy({dcn:t,pos:a,ext:i})}return n})(r),d\x26\x26(n\x3dr.params,i.customHeaders\x3d{"x-openrtb-version":"2.2"},i.method\x3d"POST",i.contentType\x3d"application/json")):v\x26\x26(o\x3d(function(e){var r\x3de.params,t\x3dr.server,a\x3dr.region||"us",o\x3dvoid 0;return S.hasOwnProperty(a)||(s.logWarn("Unknown region \'"+a+"\' for AOL bidder."),a\x3d"us"),o\x3dt||S[a],r.region\x3da,g({protocol:"https:"\x3d\x3d\x3ddocument.location.protocol?"https":"http",host:o,network:r.network,placement:parseInt(r.placement),pageid:r.pageId||0,sizeid:r.sizeId||0,alias:r.alias||s.getUniqueIdentifierStr(),bidfloor:void 0!\x3d\x3dr.bidFloor?";bidfloor\x3d"+r.bidFloor.toString():"",misc:(new Date).getTime()})})(r)),o\x26\x26c(o,(function(a){if(h\x26\x26pbjsSortable.bidderSettings\x26\x26pbjsSortable.bidderSettings.aol\x26\x26"function"\x3d\x3dtypeof pbjsSortable.bidderSettings.aol.bidCpmAdjustment\x26\x26s.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net \u2013 please contact your accounts team to enable."),h\x3d!1,!a\x26\x26a.length\x3c\x3d0)return s.logError("Empty bid response",f.aol,r),void t(r,a);try{a\x3dJSON.parse(a)}catch(e){return s.logError("Invalid JSON in bid response",f.aol,r),void t(r,a)}!(function(r,a){var o\x3dvoid 0;try{o\x3da.seatbid[0].bid[0]}catch(e){return void t(r,a)}var n\x3dvoid 0;if(o.ext\x26\x26o.ext.encp)n\x3do.ext.encp;else if(null\x3d\x3d\x3d(n\x3do.price)||isNaN(n))return s.logError("Invalid price in bid response",f.aol,r),void t(r,a);var i\x3do.adm;a.ext\x26\x26a.ext.pixels\x26\x26(r.params.userSyncOn\x3d\x3d\x3du.EVENTS.BID_RESPONSE?e(a.ext.pixels):i+\x3d"\x3cscript\x3eif(!parent.pbjsSortable.aolGlobals.pixelsDropped){parent.pbjsSortable.aolGlobals.pixelsDropped\x3dtrue;"+a.ext.pixels.replace(/\x3c\\/?script( type\x3d(\'|")text\\/javascript(\'|")|)?\x3e/g,"")+"}\x3c\\/script\x3e");var d\x3dp.createBid(1,r);d.bidderCode\x3dr.bidder,d.ad\x3di,d.cpm\x3dn,d.width\x3do.w,d.height\x3do.h,d.creativeId\x3do.crid,d.pubapiId\x3da.id,d.currencyCode\x3da.cur,o.dealid\x26\x26(d.dealId\x3do.dealid),l.addBidResponse(r.placementCode,d)})(r,a)}),n,i)}))}var h\x3d!0,g\x3dr(n,"protocol","host","network","placement","pageid","sizeid","alias","bidfloor","misc"),x\x3dr(i,"protocol","host"),y\x3dr(d,"dcn","pos","ext"),S\x3d{us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"},w\x3d"hb.nexage.com",j\x3d{iframe:"IFRAME",img:"IMG"},E\x3d(function(){var e\x3d!1;return function(r){var t\x3dfunction(){if(!e)return e\x3d!0,r()};if("complete"\x3d\x3d\x3ddocument.readyState)return t();document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)}})();return o(this,new b(f.aol),{callBids:v})};m.registerBidAdapter(new v,f.aol),m.aliasBidAdapter(f.aol,f.onedisplay),m.aliasBidAdapter(f.aol,f.onemobile),e.exports\x3dv}},[75]);');
                var f = new Ak("aol", "aol", yi(b, "pbaolrl", 5) ? pd : d, {
                    Pa: 1,
                    Ta: !0
                }, "USD", !0);
                Ki("//adserver.adtechus.com", window);
                f.C = function(a) {
                    a = oc(f.A, a);
                    w(a, function(a) {
                        a.$a = Qb(a.$a);
                        var c = a.$a;
                        a = a.request.B;
                        var d = yi(b, "aolfloor");
                        a && d && (c.D.I.bidFloor = (pb("CAD", "USD", a) / 100).toFixed(2))
                    });
                    return a
                };
                return f
            });
            Vk(a, "df", function() {
                return Sk()
            });
            Vk(a, "dm", function() {
                function a(a, b) {
                    var c = nc({
                        id: a
                    }, {}, 1, !1);
                    b && (c.L.size = {
                        H: K,
                        value: b
                    });
                    null !== d && a in d ? c.D = d[a] : d[a] = c.D;
                    return c
                }
                var c = [],
                    d = {};
                Kb(ud, function(b, d, e) {
                    if (Hf(e,
                            d))
                        if ("sizeless" === d) w(b, function(b) {
                            c.push(a(b))
                        });
                        else if (e = bb(d), null === e) G("bad dm size config", d);
                    else
                        for (b = r(b), d = b.next(); !d.done; d = b.next()) c.push(a(d.value, [new J(e[0], e[1])]))
                });
                uk("districtmDMXBidAdapter", 'pbjsChunkSortable([78],{114:function(e,i,d){e.exports\x3dd(115)},115:function(e,i,d){"use strict";var s\x3dd(3),t\x3dd(2),r\x3dd(5),n\x3dfunction(){var e\x3dthis,i\x3dwindow.location.protocol+"//prebid.districtm.ca/lib.js";return this.callBids\x3dfunction(d){return window.hb_dmx_res?e.sendBids(d):r.loadScript(i,(function(){e.sendBids(d)})),d},this.handlerRes\x3dfunction(e,i){var d\x3dvoid 0;return parseFloat(e.result.cpm)\x3e0?((d\x3ds.createBid(1,i)).bidderCode\x3di.bidder,d.cpm\x3de.result.cpm,d.width\x3de.result.width,d.height\x3de.result.height,d.ad\x3de.result.banner,t.addBidResponse(i.placementCode,d)):((d\x3ds.createBid(2,i)).bidderCode\x3di.bidder,t.addBidResponse(i.placementCode,d)),d},this.sendBids\x3dfunction(e){for(var i\x3de.bids,d\x3d0;d\x3ci.length;d++)i[d].params.sizes\x3dwindow.hb_dmx_res.auction.fixSize(i[d].sizes);return window.hb_dmx_res.auction.run(window.hb_dmx_res.ssp,i,this.handlerRes),i},{callBids:this.callBids,sendBids:this.sendBids,handlerRes:this.handlerRes}};d(1).registerBidAdapter(new n,"districtmDMX"),e.exports\x3dn}},[114]);');
                var e = new Ak("districtmDMX", "dm", yi(b, "pbdmrl", 50) ? td : c, {
                    Pa: .85,
                    Ta: !0
                }, "USD", !1);
                Ki("//rtb.districtm.io", window);
                return e
            });
            Vk(a, "an", function() {
                return yi(b, "pban3", 10) ? Ek() : new Fk(vd, !0, "")
            });
            Vk(a, "fl", function() {
                return new Ck("9472", Cd, Ad, Bd, .9, !0, a.J, zd)
            })
        }

        function Vk(a, b, c) {
            a.A[b] = c
        }

        function Wk(a) {
            function b() {
                return {
                    t: 19,
                    f: 1
                }
            }
            a.C.da && (b = a.C.da);
            var c = 0 < a.B.length,
                d;
            for (d in a.A)
                if (Hf(a.A, d)) {
                    var e = a.A[d],
                        f = !1,
                        f = 0 <= Ga(a.B, d),
                        f = c ? f ? {
                            t: 1,
                            f: 0
                        } : {
                            t: 0,
                            f: 1
                        } : Yk(b, d);
                    if (f = "t" == Ai(ui.U(), "bid-" + d, f)) try {
                        var g = e(),
                            h = g.getName();
                        if (h !== d) throw Error("Registered with wrong name: " + h + " !\x3d " + d);
                        a.g.push(g)
                    } catch (l) {
                        V().Da("fail to init bidder", "site: 9gag.com, name: " + d + ", index: " + a.g.length, l)
                    }
                }
            a.A = {};
            a.g = Ha(a.g, function(b) {
                if (Cj() && !b.Ta) {
                    var c = a.F;
                    b = b.getName();
                    z(c, b) || c.push(b);
                    return !1
                }
                return !0
            });
            Ta(a.g)
        }

        function Yk(a, b) {
            var c;
            return a && (c = a(b)) ? c : {
                t: 19,
                f: 1
            }
        }

        function Zk(a) {
            var b = {
                    500: {
                        ea: 2,
                        qa: 500
                    },
                    750: {
                        ea: 2,
                        qa: 750
                    },
                    1E3: {
                        ea: 2,
                        qa: 1E3
                    },
                    1250: {
                        ea: 2,
                        qa: 1250
                    },
                    1500: {
                        ea: 2,
                        qa: 1500
                    },
                    1750: {
                        ea: 2,
                        qa: 1750
                    },
                    2E3: {
                        ea: 2,
                        qa: 2E3
                    },
                    2250: {
                        ea: 2,
                        qa: 2250
                    },
                    2500: {
                        ea: 2,
                        qa: 2500
                    },
                    2750: {
                        ea: 2,
                        qa: 2750
                    },
                    2100: {
                        ea: 75,
                        qa: 2100
                    },
                    x3: {
                        ea: 1,
                        qa: 3 * a.j
                    },
                    x5: {
                        ea: 1,
                        qa: 5 * a.j
                    },
                    x10: {
                        ea: 1,
                        qa: 10 * a.j
                    },
                    x15: {
                        ea: 1,
                        qa: 15 * a.j
                    },
                    x20: {
                        ea: 1,
                        qa: 20 * a.j
                    }
                },
                b = 0 < a.B.length ? 5E3 : Ai(ui.U(), "bto2", b);
            5E3 < b && (b = 5E3);
            500 > b && (b = 500);
            null !== a.O && (b = a.O);
            return b
        }

        function $k(a, b) {
            return new R(function(c) {
                var d = a.g;
                if (!d.length || !b.length || a.C.F) return c();
                T("fetching bids", b);
                w(b, function(b) {
                    var c = a.o;
                    b = b.F;
                    c.g[b] && (c.g[b] = [])
                });
                var e = I(),
                    f = !1,
                    g = Zk(a);
                Re(function() {
                    f = !0;
                    c()
                }, g);
                w(b, function(a) {
                    var b = new eg;
                    b.T = a.o;
                    b.da = a.j;
                    If && V().send(b)
                });
                var h = [],
                    l = [];
                w(d, function(a) {
                    a.V ? a instanceof Ak ? h.push(a) : C("not prebid", a.name) : l.push(a)
                });
                var d = pe(yk(h, b, g - 100).then(function(b) {
                        w(b, function(b) {
                            al(a, b.Wa, b.request, b.result, f, b.fb)
                        })
                    }), function(a) {
                        C("fail to fetch prebid bids",
                            null, a)
                    }),
                    m = y(l, function(c) {
                        var d = c.zb ? b : y(Ha(b, function(a) {
                            a = a.A;
                            return !(a.hb() == Tb(bc) && ac(a))
                        }), function(a) {
                            var b = fc(a);
                            b.A = new Zb(a.A);
                            a = b.A.g;
                            var c = $b("native");
                            Yb(a.j, c) && (delete a.j[c], a.o--, a.g.length > 2 * a.o && Xb(a));
                            return b
                        });
                        return d.length ? pe(new R(function(a) {
                            return c.jb(d, a, g)
                        }), function(a) {
                            C(c.getName() + ".fetchBids", "", a);
                            return null
                        }).then(function(b) {
                            b && b.length !== d.length && (C("bidmanager._fetchBids", "", Error('bid results for bidder "' + c.getName() + '" # of requests ' + d.length + " !\x3d # of results " +
                                b.length)), b = null);
                            null == b && (b = y(d, function() {
                                return Ni(c)
                            }));
                            for (var g = 0; g < b.length; g++) b[g] = b[g] || null;
                            return ie(y(b, function(b, g) {
                                return pe(fe(b), function(a) {
                                    C("bidmanager._fetchBids for " + c.getName(), "error to fetchBid " + g, a);
                                    return null
                                }).then(function(b) {
                                    al(a, c, d[g], b, f, I() - e)
                                })
                            }))
                        }) : fe()
                    });
                ne(ie([d].concat(m)), c)
            })
        }

        function al(a, b, c, d, e, f) {
            d || (d = Ni(b));
            e && T("bidder timed out " + b.getName() + ": " + f);
            var g;
            if (d && c)
                if (g = d.g || 0, !g || 0 >= g || 1E8 <= g) g = !0;
                else {
                    var h = c.O;
                    g = !!h && g < h
                }
            else g = !0;
            if (-1 === Ga(a.g, b)) C("bidder not found", b.getName());
            else {
                var h = a.o,
                    l = c.F,
                    m = new Gk(c, d, f, e, g);
                h.g[l] || (h.g[l] = []);
                h.g[l].push(m);
                h = new bg;
                h.$ = c.o;
                h.da = c.j;
                h.ga = f;
                h.ia = a.j;
                h.ha = e;
                h.T = g;
                h.R = d.g || 0;
                h.fa = ji(d);
                If && V().send(h);
                T(b.getName() + " bid: " + c.j + " " + (d && d.size) + " " + (d && (d.g || 0)))
            }
        }
        Tk.prototype.S = function(a) {
            if (!a.size) return null;
            var b, c;
            b = 2;
            c = Vi(a, 1);
            c > b && (b = c);
            c = Vi(a, 2);
            for (var d = rb(a.getName()), e = a.$, f = a.id ? a.id : "", g = a.getName(), h = a.j || "", l = a.ka, m = a.C, n = Nf(W(a)), k = W(a), p = 0, x = 0; k;) p += k.offsetLeft - k.scrollLeft + k.clientLeft, x += k.offsetTop - k.scrollTop + k.clientTop, k = k.offsetParent;
            return new ec(e, f, g, h, l, m, n, new Jf(p, x), 2, b, c, a.ra, d, null !== a.R, a.ma)
        };
        Tk.prototype.jb = function(a) {
            a = (a = a ? Ha(a, function(a) {
                return null != (a.size || "") && "1x1" !== (a.size || "")
            }) : a) ? y(a, this.S, this) : [];
            return $k(this, a)
        };
        Tk.prototype.V = function(a) {
            var b = this;
            Gh(b.P);
            ne(this.jb(y(a, function(a) {
                return a.g
            })), function() {
                for (var c = 0; c < a.length; c++) a[c].j();
                c = b.P;
                c.o = !0;
                0 < c.g.length && Fh(c)
            })
        };

        function bl(a) {
            w(a.g, function() {})
        };

        function cl(a, b) {
            return b ? W(a).parentElement : W(a)
        }

        function dl(a, b, c) {
            this.Z = b;
            this.F = c.g;
            this.B = [!1, !1, !1, !1];
            for (var d = 0; d < c.j.length; d++) this.B[c.j[d]] = !0;
            this.o = cl(b, this.F);
            this.A = el(this.o);
            this.j = c.o;
            this.g = !1;
            this.C = 0;
            this.F && We(this.o, "click", function(c) {
                for (var d = 0; d < a.g.length; d++)
                    for (var e = a.g[d], h = 0; h < e.g.length; h++) {
                        var l = e.g[d];
                        if (l.Z === b) {
                            e.g.splice(h, 1);
                            e.g.length || a.g.splice(d, 1);
                            fl(l);
                            break
                        }
                    }
                b.name && tf(gl + "close." + b.name, !0, !0);
                c.preventDefault()
            })
        }
        var gl = "com.snapsort.sticky.";

        function el(a) {
            var b = a.parentElement;
            ze(b, "ad-sticky-wrapper") || (b = document.createElement("div"), Ae(b, "ad-sticky-wrapper"), a.parentNode.insertBefore(b, a), b.appendChild(a), b.style["margin-right"] = a.style["margin-right"], b.style["margin-left"] = a.style["margin-left"], b.style.width = a.style.width, b.style.height = a.style.height, a.style.margin = "");
            return b
        }

        function hl(a, b, c) {
            var d = ye(b),
                d = Ha(d, function(a) {
                    return "ad-sticky" !== a && !(this.j && z(this.j, a))
                }, a);
            if (0 == c || 1 == c || 2 == c || 3 == c) d.push("ad-sticky"), a.j && (d = d.concat(a.j));
            b.className = d.join(" ")
        }

        function fl(a) {
            if (a.g) {
                a.g = !1;
                a.C = 0;
                var b = a.o;
                b.style.top = "";
                b.style.bottom = "";
                b.style.left = "";
                b.style.right = "";
                hl(a, b, null)
            }
        }

        function il(a, b, c) {
            var d = a.o,
                e = oj(b);
            if (a.g) {
                if (c == a.C) {
                    var f = a.A.getBoundingClientRect();
                    1 != b && (d.style.top = f.top + "px");
                    3 != b && (d.style.left = f.left + "px")
                }
                d.style[e] = c + "px"
            } else f = d.getBoundingClientRect(), a.A.style.height = f.height + "px", a.A.style.width = f.width + "px", d.style.height = d.clientHeight + "px", d.style.width = d.clientWidth + "px", 1 != b && (d.style.top = f.top + "px"), 3 != b && (d.style.left = f.left + "px"), a.g = !0, d.style[e] = c + "px";
            hl(a, d, b);
            a.C = c
        }

        function jl(a) {
            this.La = a.La;
            this.j = null;
            "parent" != a.La && a.La && ("string" === typeof a.La ? this.j = function() {
                var b = window.document.getElementById(a.La);
                return b && b.getBoundingClientRect()
            } : a.La instanceof HTMLElement ? this.j = function() {
                return a.La && a.La.getBoundingClientRect()
            } : "function" === typeof a.La && (this.j = a.La));
            this.g = [];
            this.o = [null, null, null, null]
        }

        function kl(a) {
            function b(a) {
                return a ? [a.top, a.bottom, a.left, a.right] : null
            }

            function c(a, b, c) {
                a = a[c];
                b = b[c];
                return 0 == c || 2 == c ? a < b : a > b
            }

            function d(a, b, c) {
                a = a[c];
                b = b[c % 2 ? c - 1 : c + 1];
                return 0 == c || 2 == c ? a < b : a > b
            }
            var e = function(a) {
                return [0, a.Za, 0, a.ea]
            }(af(window));
            e[0] += ll;
            for (var f = a.j ? b(a.j()) : null, g = [-1, -1, -1, -1], h = [-1, -1, -1, -1], l = [], m, n = 0; n < a.g.length; n++) m = a.g[n], l.push(b(m.A.getBoundingClientRect()));
            for (n = 0; 2 > n; n++) {
                var k = 2 * n,
                    p = k + 1,
                    x = e[k],
                    E = e[p],
                    F = f ? c(f, e, k) : !0,
                    D = f ? c(f, e, p) : !0,
                    P = f ? d(f, e, k) : !0,
                    Q = f ? d(f,
                        e, p) : !0,
                    X = E,
                    Z = x;
                f && (X = Math.min(E, f[p]), Z = Math.max(x, f[k]));
                for (var fa = 0; fa < a.g.length; fa++) {
                    var A = l[fa],
                        B = A[k],
                        Za = A[p],
                        aa = Za - B,
                        ob = c(A, e, k),
                        A = c(A, e, p);
                    ob || (X = Math.min(X, B));
                    A || (Z = Math.max(Z, Za));
                    m.B[k] && ob && F && Q && (-1 == g[k] || B > l[g[k]][k]) && (g[k] = fa, h[k] = aa);
                    m.B[p] && A && D && P && (-1 == g[p] || Za < l[g[p]][p]) && (g[p] = fa, h[p] = aa)
                }
                h[k] = Math.min(x, X - h[k]);
                h[p] = Math.min(0, E - Z - h[p])
            }
            for (e = 0; 3 >= e; e++) f = g[e], f = -1 != f ? a.g[f] : null, a.o[e] && f != a.o[e] && fl(a.o[e]), f && il(f, e, h[e]), a.o[e] = f
        }
        var ll = 0;

        function ml(a) {
            this.g = [];
            this.j = !1;
            Bh(a, dj, function(a) {
                try {
                    a.Z.R && nl(this, a.Z, a.Z.R)
                } catch (c) {
                    C("sticky adunit load start", "", c)
                }
            }, !1, this)
        }

        function ol(a) {
            var b;
            b = b || H();
            b = U(b.document || b.contentDocument || b.contentWindow && b.contentWindow.document);
            var c = b.createElement("style");
            c.type = "text/css";
            c.styleSheet ? c.styleSheet.cssText = '.ad-sticky {position: fixed !important; z-index: 100000;} .ad-sticky-bump {box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.0980392) 0px 1px 2px -1px; background-color: #FFF;} .ad-sticky-anchor:before{content: "\u2261"; display: block; text-align: center; margin: -10px auto -15px auto; height: 25px; width: 50px; font-size:25px; line-height: 25px; border-radius: 25px 25px 0 0; background-color: #D9D9D9; box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.0980392) 0px 1px 2px -1px; color: #7E7E7E; font-weight: 800;}' : c.innerHTML =
                '.ad-sticky {position: fixed !important; z-index: 100000;} .ad-sticky-bump {box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.0980392) 0px 1px 2px -1px; background-color: #FFF;} .ad-sticky-anchor:before{content: "\u2261"; display: block; text-align: center; margin: -10px auto -15px auto; height: 25px; width: 50px; font-size:25px; line-height: 25px; border-radius: 25px 25px 0 0; background-color: #D9D9D9; box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.0980392) 0px 1px 2px -1px; color: #7E7E7E; font-weight: 800;}';
            b.getElementsByTagName("head")[0].appendChild(c);
            a = u(a.o, a);
            b = H();
            We(b, "scroll", a);
            We(b, "resize", a)
        }
        ml.prototype.o = function() {
            for (var a = 0; a < this.g.length; a++) kl(this.g[a])
        };

        function pl(a) {
            return a ? sf(gl + "close." + a, !0) : !1
        }

        function nl(a, b, c) {
            pl(b.name) || (el(cl(b, c.g)), b.S ? null != b.ia && ql(a, b, c) : Ch(b, function(a) {
                null != a.Z.ia && ql(this, a.Z, c)
            }, a))
        }

        function ql(a, b, c) {
            a.j || (ol(a), a.j = !0);
            var d = new dl(a, b, c),
                e = La(a.g, function(a) {
                    return a.La === c.La
                });
            e || (e = new jl(c), a.g.push(e));
            La(e.g, function(a) {
                return a.Z === b
            }) || e.g.push(d);
            a.o()
        };

        function Jj() {
            var a = this;
            this.C = I();
            this.R = 0;
            this.o = V();
            this.g = Of();
            df("//www.googletagservices.com/tag/js/gpt.js");
            this.Y = ke();
            rl(this, "pubadsReady", function() {
                if (a.g.pubadsReady) a.Y.g();
                else var b = setInterval(function() {
                    a.g.pubadsReady && (clearInterval(b), a.Y.g())
                }, 100)
            });
            this.ba = Bb.U();
            this.j = [];
            this.$ = this.ua = !1;
            this.sa = !0;
            this.ra = !1;
            this.F = sl(this.ba.la);
            this.ia = new Eh(100, u(this.Rc, this));
            this.B = ui.U();
            this.A = Tk.U();
            this.P = null;
            this.da = new Eh(50, u(this.Ac, this));
            this.ma = this.W = this.X = this.S =
                0;
            this.na = !1;
            this.J = [];
            this.fa = !1;
            this.ha = [];
            this.la = this.pa = !1;
            Oe() && rl(this, "amp", function() {
                var b = a.g.pubads(),
                    c = H();
                b.markAsAmp();
                b.set("page_url", c.context.canonicalUrl);
                b.setCorrelator(dc());
                b.addEventListener("slotOnload", function() {
                    c.context.renderStart()
                })
            });
            rl(this, "dfp events", function() {
                a.g.pubads().addEventListener("slotRenderEnded", function(b) {
                    try {
                        if (!b) throw Error("null slot render ended event");
                        for (var c = r(a.j), d = c.next(); !d.done; d = c.next()) {
                            var e = d.value;
                            if (e.A === b.slot) {
                                nk(e, b);
                                return
                            }
                        }
                        var f = Mf(b.slot);
                        /1966186/.test(f.adUnitPath) && (f.adunits = y(a.j, function(a) {
                            return Nj(a)
                        }), f.slots = y(a.g.pubads().getSlots(), function(a) {
                            return Mf(a)
                        }), f.deployadsPub = window.deployads_pub, f.deployadsPush = String(window.deployads && window.deployads.push));
                        "1x1" !== f.size && ib("unit not found for slot.", S(f))
                    } catch (g) {
                        C("error in slot render ended", "", g)
                    }
                });
                a.g.pubads().addEventListener("slotVisibilityChanged", function(b) {
                    zf("slotVisibilityChangedEvent", function() {
                        var c = b.inViewPercentage / 100,
                            d =
                            La(a.j, function(a) {
                                return a.A === b.slot
                            });
                        d && (Kh(d.visibility, c), zh(d, new bj(ej, d, c)))
                    })
                })
            });
            this.T = ke();
            this.ta = !0;
            this.O = [];
            this.ja = null;
            this.ca = !1;
            yh.call(this)
        }
        za(Jj, yh);
        na(Jj);

        function tl(a) {
            try {
                var b = H();
                a.R = b.performance && b.performance.timing && b.performance.timing.domLoading ? a.C - b.performance.timing.domLoading : -1;
                T("Pubtags init (" + a.R + ")");
                if (window == window.top) Te("init", function() {
                    var b = new rg;
                    b.g = a.ba.j;
                    a.o.send(b);
                    Ag(a.o)
                }, void 0, b);
                else {
                    pf() && (a.ba.S = 0);
                    var c = b.location.hostname;
                    a.na = "translate.googleusercontent.com" !== c && !Ba(c, ".ampproject.net") && !Ba(c, ".ampproject.org") && (window.top !== b || b.location.host != window.location.host)
                }
                var d = (new Number(qf(100))).toString(36);
                a.P = 1 < d.length ? d : d.toUpperCase();
                a.ba.B = 0 < qf(10) ? "1" : "0";
                zh(a, new Wi(Xi, a));
                ul(a)
            } catch (e) {
                a.o.Da("init", null, e)
            }
        }

        function sl(a) {
            var b = $f()["ssrt-pub-dfp"];
            return "on" === b ? !0 : "off" === b ? !1 : yi(ui.U(), "epd", a)
        }

        function vl(a, b, c) {
            T("timing: " + c + " (" + b + "): " + (I() - a.C))
        }

        function wl(a, b, c) {
            "D" === tb() && (b && (ll = b), 0 === c && (a.R = new pj), Sj(a, "1"))
        }

        function xl(a, b, c) {
            var d = Pe(H()),
                e = Ff(d.hostname),
                f = Ff(d.hostname);
            if ("codebeautify.org" == e && window !== window.top) b.j = null;
            else {
                var d = a.ba,
                    g = b.name,
                    h = Uj(b);
                if ("auto" === b.size || b.ya) {
                    b.ya = !0;
                    b.size = null;
                    b.C = [];
                    var l = W(b);
                    if (l) {
                        var m = l.offsetWidth,
                            l = l.offsetHeight;
                        b.name && d.g ? (m = Jb(d, b.name, m, l)) && Rj(b, m) : 0 < m && 0 < l ? b.size = m + "x" + l : m || l || (h = !0);
                        Oe() && (m = U(b.size).split("x"), window.context.requestResize(m[0], m[1]))
                    }
                }
                if (b.va)
                    if (b.ra = bc, ok(b)) {
                        if (m = Gb(d, b.name)) Rj(b, m), l = U(W(b)), m = l.offsetWidth, l = l.offsetHeight,
                            b.size = "1x1", b.C = [], b.Ha = m + "x" + l
                    } else b.j = null, Yj(b, "Invalid format for Native Ad Unit");
                !b.j && b.name && b.size && (m = Fb(d, b.name, b.size)) && Rj(b, m);
                b.j || !b.name || b.size || ((m = Eb(d, b.name)) ? Rj(b, m) : T("No ad unit in config with name", b.name));
                b.j || !b.size || b.name || (m = Hb(d, b.size, Tj(b))) && Rj(b, m);
                b.j || (T("No ad unit found:", b.name, b.size), !h && Eb(d, "default") && (Db(d), m = null, b.size && ((m = $a(Va(b.size))) || C("invalid size", "", Error("unknown size: " + b.size))), m || (m = U(W(b)), m = [m.offsetWidth, m.offsetHeight]), (m =
                    Ib(d, "default", m[0], m[1])) && Rj(b, m)));
                "default" === b.name && ak(b, g);
                g = "undefined" == typeof d.o ? Yh : d.o;
                if (null !== g) {
                    m = !1;
                    0 < a.A.B.length && !z(a.A.B, "goog") && (m = !0);
                    if (Ba(e, "d7s.co") || d.F) m = !0;
                    Cj() && !pk() && (m = !0);
                    m || null === g || "" == e || "localhost" == e || "127.0.0.1" == e || Ba(e, "tumblr.com") || Ba(e, "typepad.com") || -1 != e.indexOf(".blogspot.") || (b.O = new bi(g, null))
                }
                c && c.sticky && (g = /^sidebar( [0-9]+px)?$/.exec(c.sticky), m = "manual" === c.sticky ? 1 : 0, g || 1 === m) && (wl(b, g ? parseInt(g[1], 10) : 0, m), c["sticky-container"] && b.R && (b.R.La =
                    window.document.querySelector(c["sticky-container"]), b.R.La || T("Can't find container " + c["sticky-container"] + " for sticky " + b.name + ", will be ignored")));
                b.ra.g.o || (b.ra = cc);
                g = !0;
                "!g" === c.demand && (g = !1, b.O = new bi(null, null));
                if ((l = (m = d.$) && d.ga) && h) {
                    T("ad is hidden, ignoring it: name\x3d" + b.name + ", id\x3d" + b.id + ", size\x3d" + b.size);
                    var n = W(b);
                    n && (n = of (Ze(n), n), T("report for hidden unit:", n));
                    b.j = null
                }
                b.j ? b.size && !b.C.length && (b.C = cb(b.size)) : (b.size = null, b.C = []);
                var k = {};
                w(b.C, function(a) {
                    return k[Ya(a)] =
                        a
                });
                var p = {},
                    n = Th(),
                    x = jb(n) && Cb(),
                    E = "T" === n,
                    n = !h && Nf(W(b));
                if (!h && b.j && b.size && "1x1" !== b.size) {
                    var F = g ? new Uh(x, E, n) : null;
                    if (n && F) {
                        for (var D in k) k.hasOwnProperty(D) && F.g[D] === Vh && (Yj(b, "illegal size ATF: " + D + (l ? "" : " (not enforced)")), l && delete k[D]);
                        Ob(k) && (E ? k["300x250"] = [300, 250] : k["320x50"] = [320, 50])
                    }
                    if (d.ia) {
                        D = r(b.C);
                        for (var P = D.next(); !P.done; P = D.next())
                            for (var P = P.value, Q = r(d.sa), X = Q.next(); !X.done; X = Q.next()) {
                                var X = X.value,
                                    Z = Ya(X);
                                Z in k || Z in p || F && Z in F.g || X[0] <= P[0] && X[1] <= P[1] && X[0] >=
                                    .35 * P[0] && X[1] >= .35 * P[1] && (p[Z] = X)
                            }
                    }
                }
                D = function(a, b) {
                    return b[0] * b[1] - a[0] * a[1]
                };
                F = Mb(k);
                F.sort(D);
                p = Mb(p);
                p.sort(D);
                b.C = Pa(F, p);
                D = 0;
                (p = W(b)) && (D = Ye(p).top + zb().top);
                p = !0;
                if (5 <= a.J.length)
                    for (F = a.J.slice(), F.push(D), F.sort(function(a, b) {
                            return a - b
                        }), P = 5; P < F.length; P++)
                        if (800 > F[P] - F[P - 1]) {
                            p = !1;
                            break
                        }
                x = x ? E ? 2 : 1 : 0;
                F = E = !0;
                !h && g && 0 < x && n && a.ma >= x && (Yj(b, "too many units ATF" + (l ? "" : " (not enforced)")), l && (b.O = new bi(null, null), E = !1));
                h || !g || p || !b.size || "1x1" === b.size || b.la || (Yj(b, "too many units" + (m ? "" : " (not enforced)"),
                    "yPos exist: [" + String(a.J) + "] new: " + D), m && (b.O = new bi(null, null), F = !1));
                a.na && !Oe() && (Yj(b, "ad served in iframe" + (m ? "" : " (not enforced)")), m && (b.O = new bi(null, null), F = !1));
                b.j && b.size && "1x1" !== b.size && (F && !b.la && a.J.push(D), n && E && a.ma++);
                Ja(a.ba.pa, function(a) {
                    return Ba(e, "." + a) || e == a
                }) || (a = Cf(), a = 92 <= a || 84 >= a || 88 == a, !a || d.F || "partner.googleadservices.com" == e || "translate.googleusercontent.com" == e || "webcache.googleusercontent.com" == e || Ba(e, ".ampproject.org") || Yj(b, "unapproved domain"), a && (b.O = new bi(null,
                    null), b.j = null));
                /[^\s@/=?&]+@[^\s@/=?&]+\.[^\s@/=?&]+/.test(decodeURIComponent(decodeURIComponent(f))) && (Yj(b, "url contains email"), b.j = null);
                if (c.hasOwnProperty("targeting"))
                    if (c = Ha(y(c.targeting.split(";"), function(a) {
                            if (a) {
                                var b = a.split("\x3d");
                                if (2 === b.length && b[0] && b[1]) return b;
                                T("Invalid targeting:", a)
                            }
                            return null
                        }), function(a) {
                            return null != a
                        }), d.A) w(c, function(a) {
                        var c = r(a);
                        a = c.next().value;
                        c = c.next().value;
                        b.B.set(a, c)
                    });
                    else {
                        var fa = Pg(),
                            A = [];
                        w(c, function(a) {
                            var b = r(a);
                            a = b.next().value;
                            var b = b.next().value,
                                c = fa[a] && fa[a][b];
                            void 0 != c ? A.push(c) : T("Unknown key value pair:", a + "\x3d" + b)
                        });
                        A.length && b.B.set("tg", A)
                    }
                b.j || (b.size = null, b.C = []);
                return b
            }
        }

        function rl(a, b, c) {
            var d = a.g;
            d.cmd.push(function() {
                try {
                    c.call(a, d)
                } catch (f) {
                    var e = 0;
                    try {
                        e = d.getVersion()
                    } catch (g) {}
                    a.o.Da("withGPT", "apiReady\x3d" + d.apiReady + ",pubadsReady\x3d" + d.pubadsReady + ",v\x3d" + e + "," + b, f)
                }
            })
        }

        function yl(a, b, c, d) {
            var e = new Ij;
            d && Rj(e, d);
            d = a.ba;
            var f = "undefined" !== typeof c["default-anchor"];
            e.la = "string" === typeof c.anchor || f;
            var g = e.la && "S" === tb() && Cb(),
                h = pl(c.name),
                l;
            a.na || a.pa || !(g && !h || f && !h && g) || (f = b.parentNode, c.size = "320x50", l = window.document.createElement("DIV"), l.style.width = "100%", l.style["background-color"] = "#000", U(f).insertBefore(l, b), f = window.document.createElement("DIV"), f.style.height = "15px", f.style["background-color"] = "#D9D9D9", l.appendChild(f), l.appendChild(b), l = a.pa = !0);
            e.id = c.id || "ad-" + dc();
            b.id = Ff(e.id);
            Ae(b, "ad-tag");
            b.setAttribute("data-ad-processed", "1");
            e.name = c.name;
            Qj(e, c.size);
            Hf(c, "report") && (e.Ca = c.report);
            Hf(c, "native") && (e.va = !0);
            Hf(c, "responsive") && (e.ya = !0);
            Hf(c, "collapse") && (e.oa = !0);
            e.na = Lj(c["collapse-size"]);
            e.W = Lj(c["expand-size"]);
            Hf(c, "refresh") ? Zj(e, c.refresh) : window.deployads && window.deployads["5w-refresh"] && (f = Hg().page_segment, (f = /refresh-(\d+)/.exec(f)) && f[1] && (f = parseInt(f[1], 10), 0 < f && Zj(e, "time " + f + "s")));
            l && (e.R = qj());
            if (l || !e.la) e =
                xl(a, e, c), a.j.push(e);
            else return null;
            a.ba.A || (a = e, a.va ? a.J = Ph(b, Va(a.Ha)) : a.size && (a.J = Ph(b, a.C), a.J && (0 === a.W ? (b.style.minWidth = "0", b.style.width = "0", a.J[0] = 0) : 1 === a.W ? (b.style.minHeight = "0", b.style.height = "0", a.J[1] = 0) : 2 === a.W && (b.style.minWidth = "0", b.style.width = "0", b.style.minHeight = "0", b.style.height = "0", a.J[0] = 0, a.J[1] = 0))));
            d.O[e.name] && (e.Hc = d.O[e.name]);
            return e
        }
        q = Jj.prototype;
        q.Ac = function(a) {
            var b = this;
            Gh(this.da);
            rl(this, "define au now", function() {
                vl(b, "gd", "google tags define");
                ne(b.A.jb(a), function() {
                    for (var c = 0; c < a.length; c++) {
                        mk(a[c]);
                        var d = a[c];
                        Mj(d, "start");
                        d.Ga = !0;
                        d.T = !1;
                        if (null !== d.P) {
                            var e = d;
                            try {
                                Mj(e, "passbackStart");
                                T("onPassbackStart  " + e.id);
                                var f = new cg;
                                gi(e, f);
                                var g = dk(e.g.A.o, e.$);
                                g && (f.R = Math.floor(g.result.g || 0), f.oa = ji(g.result), f.ka = g.result.size);
                                ij(e.B, "bf");
                                ij(e.B, "s");
                                Vj(e);
                                bk(e, f);
                                f.xa = Hi(e.g.B, e);
                                f.va = e.P;
                                e.g.o.send(f)
                            } catch (h) {
                                e.g.o.Da("onPassbackStart",
                                    null, h)
                            }
                            d.S && (d.P = null, ck(d))
                        } else ck(d);
                        d.P = null
                    }
                    zl(b, a);
                    c = b.da;
                    c.o = !0;
                    0 < c.g.length && Fh(c)
                })
            })
        };

        function zl(a, b) {
            rl(a, "d or r now", function(c) {
                if (!a.$) {
                    a.$ = !0;
                    c.pubads().enableAsyncRendering();
                    c.pubads().enableSingleRequest();
                    for (var d in a.ba.P) Hf(a.ba.P, d) && c.pubads().set(d, a.ba.P[d]);
                    a.$b();
                    vl(a, "gl", "google tags loaded");
                    T("GPT loaded", window.name, window.document.title);
                    !window.google_DisableInitialLoad && a.g.pubads() && a.ba.A && "function" == typeof a.g.pubads().isSRA && a.g.pubads().isSRA() && G("no disableInitialLoad; is SRA", "use deployads.gpt.enableServices", null)
                }
                d = [];
                for (var e = [], f = I(), g = 0; g <
                    b.length; g++) {
                    var h = b[g];
                    h.ta = f;
                    h.Y ? h.Fa ? d.push(h.A) : e.push(h.A) : window.google_DisableInitialLoad ? (h.Y = !0, h.id && Rf(c, h.id), h.Fa ? d.push(h.A) : e.push(h.A)) : (h.id && Rf(c, h.id), h.Y = !0)
                }
                0 < e.length && Tf(c.pubads(), e, {
                    changeCorrelator: !1
                });
                0 < d.length && Tf(c.pubads(), d)
            })
        }

        function Al(a) {
            var b = Pe(H()).href,
                c = a.ba;
            if (c.C && 0 < c.C.length && b)
                for (var d = 0; d < c.C.length; d++)
                    if ((new RegExp(c.C[d])).test(b)) {
                        c.F = !0;
                        break
                    }
            Oh(function(b, c) {
                if ("react" !== c.type || z(a.O, b)) {
                    if (nf(b)) {
                        var d = parseInt(b.getAttribute("data-ad-hidden") || "0", 10) + 1;
                        b.setAttribute("data-ad-hidden", "" + d);
                        if (1E3 >= d) {
                            a.ha.push(b);
                            Bl(a);
                            return
                        }
                    }
                    yl(a, b, c)
                } else b.removeAttribute("data-ad-processed")
            })
        }

        function Bl(a) {
            a.fa || (a.fa = !0, Re(function() {
                a.fa = !1;
                w(a.ha, function(a) {
                    a.removeAttribute("data-ad-processed")
                });
                a.ha = [];
                a.nb()
            }, 3E3))
        }

        function Cl(a) {
            rl(a, "display", function() {
                for (var b = r(a.j), c = b.next(); !c.done; c = b.next()) c = c.value, null === c.ma && c.display()
            })
        }

        function Dl(a) {
            vl(a, "sp", "synchronous process");
            El(a);
            a.ua || (a.ua = !0, Te("cl", function() {
                vl(a, "cl", "content loaded");
                El(a)
            }))
        }

        function ul(a) {
            var b = I();
            Ig().then(function() {
                a.A.j = I() - b;
                Ai(a.B, "aa", {
                    a: 50,
                    b: 50
                });
                kj();
                Wk(a.A);
                vl(a, "cb", "bid callbacks complete");
                a.ra = !0;
                Dl(a);
                if (0 < a.A.F.length) {
                    var c = "rmbidders\x3d" + a.A.F.join(",");
                    w(a.j, function(a) {
                        Yj(a, "TQ: Bidders removed", c)
                    })
                }
                a.T.g()
            })
        }
        q.nb = function() {
            this.ra && Dl(this)
        };

        function El(a) {
            try {
                lj.has("pt") || lj.set("pt", bf());
                vi(a.B);
                if (a.sa) {
                    a.sa = !1;
                    if (a.ba.B) {
                        var b = {};
                        b[a.ba.B] = 1;
                        Ai(a.B, "pmp", b)
                    }
                    zf("onInitialized", function() {
                        a.ba.ja && yi(a.B, "pax", a.ba.Y) && (a.ba.ha = !0, a.ba.o = new Xh(a.ba.na, 0, a.ba.X));
                        yi(a.B, "sgpt", 1) && rl(a, "s gpt", function() {
                            var b = a.g.pubads().refresh;
                            a.g.pubads().refresh = function(a, c) {
                                null !== a && void 0 !== a || G("refresh all called", S({
                                    stack: Error().stack
                                }));
                                b.apply(this, arguments)
                            }
                        })
                    });
                    a.ba.ia = yi(a.B, "msb", 0);
                    zh(a, new Wi(Yi, a));
                    vl(a, "oi", "onInitialized");
                    zf("beforeLoad", function() {})
                }
                zf("onProcessTags", function() {});
                zh(a, new Wi(Zi, a));
                vl(a, "op", "onProcessTags");
                Al(a);
                vl(a, "pt", "process tags");
                0 < a.j.length && (Wf(function() {
                    rl(a, "target", function(a) {
                        var b = this.ba;
                        a = a.pubads();
                        if ("function" !== typeof a.setTargeting) throw Error("setTargeting is not a function of pubads: " + S({
                            setTargeting: typeof a.setTargeting,
                            getTargetingKeys: typeof a.getTargetingKeys,
                            getTargeting: typeof a.getTargetingKeys
                        }));
                        this.P && lj.set("ab", this.P);
                        b.B && lj.set("pm", b.B);
                        b = Ti.U().g;
                        0 < b.length && lj.set("eb", b);
                        mj(lj, a)
                    })
                }), Cl(a));
                vl(a, "pd", "process and display ads")
            } catch (c) {
                a.o.Da("processAndDisplayAds", null, c)
            }
        }

        function Fl(a, b) {
            for (var c = 0; c < a.j.length; c++)
                if (a.j[c].id == b) return a.j[c];
            return null
        }

        function fi(a, b) {
            for (var c = b; c && !ze(c, "ad-tag");) {
                if (b = Na(a.j, function(a) {
                        return (a.id ? a.id : "") === c.id
                    })) return b;
                c = c.parentElement
            }
            return c ? Fl(a, c.id) : null
        }
        q.Ic = function() {
            var a = this;
            T("sortable new page");
            rl(this, "new page", function(a) {
                a = a.pubads();
                a.updateCorrelator();
                a.clearCategoryExclusions()
            });
            xg(this.o, dc());
            this.ma = 0;
            this.J = [];
            bl(this.A);
            w(this.j, function(b) {
                b.X = 0;
                b.fa = 0;
                b.Ea = !0;
                b.reload = Ij.prototype.reload;
                Mj(b, "newPage", {
                    count: a.ba.J
                })
            });
            this.ba.J++
        };
        q.Qc = function(a, b) {
            if (a) {
                var c = [];
                a = Nh(a);
                for (var d = 0; d < a.length; d++) {
                    var e = Fl(this, a[d].id);
                    e && c.push(e)
                }
                for (a = 0; a < c.length; a++) "user" === b ? c[a].reload("u") : "new-page" === b ? c[a].reload("f") : "event" === b ? c[a].reload("e") : "time" === b || "manual-time" === b ? c[a].reload("t") : c[a].reload("ue")
            }
        };
        q.ac = function(a, b) {
            var c = fi(this, a);
            c && (a = b ? b.source : null, (b = b ? b.targeting : null) && "" == b.bp && (delete b.bp, delete b.pk), Ja(Object.keys(c.o), function(a) {
                return null !== c.o[a]
            }) && (c.ja = this.ba.S), c.Jc(a, b))
        };
        q.Rb = function(a) {
            if (a = fi(this, a)) a.ja = 0
        };
        q.Xb = function(a, b) {
            if (a = fi(this, a)) a.sa = b
        };
        q.Gc = function(a) {
            if (a = fi(this, a)) {
                var b = W(a);
                b && b.style ? (a.ja = 0, b.style.display = "none") : T("Couldn't find AdUnitElement for iFrame")
            }
        };

        function hk(a) {
            var b = new pg;
            b.g = a.ba.j;
            var c = Sh(b);
            b.ga = a.C - c;
            a.S && (b.R = a.S - c);
            a.X && (b.Y = a.X - c);
            a.W && (b.T = a.W - c);
            T("Perf summary: script load: " + b.ga + "; first def " + b.R + "; first req: " + b.Y + "; first load: " + b.T);
            var d;
            a: {
                try {
                    d = !!H().document.querySelector("meta[name^\x3dX-DA]");
                    break a
                } catch (e) {
                    V().Da("da-check", "", e)
                }
                d = !1
            }
            b.fa = d ? "da" : null;
            a.o.send(b)
        }
        q.Tc = function(a, b, c) {
            c && c.stopRld && this.Rb(a);
            c && c.excl && c.excl.length && rl(this, "exclusion", function(a) {
                for (var b = U(c).excl, d = 0; d < b.length; d++) a.pubads().setCategoryExclusion(b[d])
            })
        };
        q.yc = function(a, b, c, d, e) {
            var f = new gg;
            f.Y = b;
            f.ga = c;
            f.T = d;
            f.$ = e;
            f.R = a;
            f.g = this.ba.j;
            a = V();
            zg(a, f);
            b = f.j;
            f = f.S();
            f._type = b;
            f._count = 1;
            c = {};
            c[b] = f;
            yg(a, c)
        };
        q.Sc = function(a) {
            try {
                if (a) {
                    var b = fi(this, a.frameElement);
                    if (b) try {
                        Mj(b, "renderAd");
                        if (!a) throw Error("no frame");
                        var c = b.g.A.o,
                            d;
                        a: {
                            var e = c.g[b.$];
                            if (e) {
                                var f = Ik(c, e);
                                if (f) {
                                    Oa(e, f);
                                    d = f;
                                    break a
                                }
                            }
                            d = null
                        }
                        if (null === d) throw Error("no bid");
                        if (d.result.G) throw Error("used bid");
                        d.result.Wa.ub(a, d.result);
                        if (!d.result.G) throw Error("fail to use bid " + li(d.result));
                        if (null === b.F) throw Error("null imp id");
                        var g = b.F;
                        c.j[g] ? C("rendered bid exists") : c.j[g] = d;
                        T(d.result.Wa.getName() + " render: " + b.getName() + " " +
                            d.result.size + " " + (d.result.g || 0) + " " + d.result.G);
                        var h = new fg;
                        h.T = U(d.request).o;
                        h.fa = b.F;
                        h.da = b.j || "";
                        h.ga = ji(d.result);
                        h.R = d.result.g || 0;
                        h.$ = d.fb;
                        b.g.o.send(h)
                    } catch (l) {
                        V().Da("render partner", Oj(b), l)
                    } else C("no matching adUnit")
                } else C("no frame")
            } catch (l) {
                V().Da("renderAd", null, l)
            }
        };

        function Gl(a, b) {
            var c = La(a.j, function(a) {
                return a.ma === b
            });
            if (c) return c;
            var d = b.getSlotElementId(),
                c = document.getElementById(d);
            if (!c) return G("no element", S(Mf(b))), null;
            var e = Lf(b);
            if (null === e) return G("no size", S(Mf(b))), null;
            if ("" === e) return G("specified no ad", S(Mf(b))), null;
            if ("1x1" === e) return null;
            e = e.split(",");
            e = Ha(e, function(a) {
                return z(Ua, a)
            });
            if (!e.length) return G("invalid size", S(Mf(b))), null;
            var e = e.join(","),
                f = a.ba.ua(b);
            if (!f) return G("no slot mapping", S(Mf(b))), null;
            if (a = yl(a, c, {
                    id: d,
                    name: f.name,
                    size: e,
                    "collapse-size": "both"
                }, f)) a.ma = b;
            Ce(c);
            return a
        }
        q.Zb = function(a) {
            var b = this;
            rl(this, "gpt-di", function() {
                var c = t(a) ? a : a.id,
                    d = La(b.g.pubads().getSlots(), function(a) {
                        return a.getSlotElementId() === c
                    });
                if (d) {
                    var e = Bb.U().A,
                        f = Mf(d);
                    f.enabled = b.F;
                    f.isPubDfp = e;
                    ib("gptDisplay", S(f));
                    if (b.F) {
                        var g = Gl(b, d);
                        g ? !window.google_DisableInitialLoad && !b.ca || b.la ? b.T.j.then(function() {
                            g && g.display()
                        }) : (g.Y = !0, Rf(b.g, c)) : b.Y.j.then(function() {
                            Rf(b.g, c);
                            b.la && b.ia.enqueue({
                                qb: [d],
                                options: {
                                    changeCorrelator: !1
                                }
                            })
                        })
                    } else Rf(b.g, c)
                } else G("no div for gptDisplay", c), Rf(b.g,
                    c)
            })
        };
        q.Rc = function(a) {
            try {
                for (var b = [], c = [], d = {}, e = r(a), f = e.next(); !f.done; d = {
                        cb: d.cb
                    }, f = e.next()) {
                    d.cb = f.value;
                    if (null == d.cb.qb) {
                        Tf(this.g.pubads(), d.cb.qb, d.cb.options);
                        return
                    }
                    w(d.cb.qb, function(a) {
                        return function(d) {
                            a.cb.options && !1 === a.cb.options.changeCorrelator ? c.push(d) : b.push(d)
                        }
                    }(d))
                }
                var g = c.concat(b),
                    h = y(g, function(a) {
                        return a.getSlotElementId()
                    });
                for (a = []; 0 < h.length;) {
                    var l = h.pop(); - 1 < h.indexOf(l) && a.push(l)
                }
                if (0 < a.length) {
                    var m = y(g, function(a) {
                        return Mf(a)
                    });
                    G("duplicate refresh", S({
                        all_slots: m,
                        duplicated_divs: a
                    }))
                }
                0 <
                    b.length && Tf(this.g.pubads(), b);
                0 < c.length && Tf(this.g.pubads(), c, {
                    changeCorrelator: !1
                })
            } catch (n) {
                C("refreshPubDfp error", null, n)
            }
        };
        q.Ec = function(a, b) {
            var c = this;
            rl(this, "gpt-pa-re", function() {
                a && Ja(a, function(a) {
                    return !Qf(a)
                }) && (G("bad slot"), a = Ha(a, function(a) {
                    return Qf(a)
                }));
                var d = null !== a && a ? a : c.g.pubads().getSlots();
                if (d.length) {
                    var e = Bb.U().A;
                    ib("gptPubAdsRefresh", S({
                        all: null === a || !a,
                        enabled: c.F,
                        options: b,
                        isPubDfp: e,
                        slots: y(d, function(a) {
                            return Mf(a)
                        })
                    }));
                    if (c.F) {
                        var f = [],
                            g = [];
                        w(d, function(a) {
                            var d = Gl(c, a);
                            d ? (d.Fa = b && !1 === b.changeCorrelator ? !1 : !0, g.push(d)) : f.push(a)
                        });
                        0 < f.length && c.ia.enqueue({
                            qb: f,
                            options: b
                        });
                        c.T.j.then(function() {
                            w(g,
                                function(a) {
                                    a.Wb ? a.reload("f") : a.display()
                                })
                        })
                    } else c.ia.enqueue({
                        qb: a,
                        options: b
                    })
                } else G("no slots for pubadsRefresh")
            })
        };
        q.Dc = function(a, b, c, d) {
            var e = this;
            G("gptPubAdsDisplay was called", a);
            rl(this, "gpt-pa-di", function() {
                var f = t(c) ? c : c && c.id,
                    g = e.g.defineSlot(a, b, f);
                g && f ? (d && g.setClickUrl(d), g.addService(e.g.pubads()), e.Zb(f)) : (g = e.g.pubads(), g.__ssrt_original_display ? g.__ssrt_original_display(a, b, c, d) : g.display(a, b, c, d), C("gptPubAdsDisplay error", S({
                    aup: a,
                    size: b,
                    divId: f
                })))
            })
        };
        q.Fc = function() {
            var a = this;
            rl(this, "gpt-p-d-i", function() {
                a.ca = !0;
                a.g.pubads().disableInitialLoad()
            })
        };
        q.$b = function() {
            var a = this;
            rl(this, "gpt-e-s", function() {
                window.google_DisableInitialLoad || a.ca || !a.F || (a.la = !0, a.g.pubads().disableInitialLoad());
                var b = a.g;
                b.__ssrt_original_enableServices ? b.__ssrt_original_enableServices() : b.enableServices()
            })
        };
        q.Cc = function(a) {
            var b = this;
            try {
                ib("gptDestroySlots", S({
                    all: null === a || !a,
                    enabled: this.F
                }));
                if (this.ta) {
                    if (yi(this.B, "sqd3", 99) || yi(this.B, "sqd", 10)) return !1;
                    G("destroySlots is queued")
                }
                this.g.apiReady && (a ? w(a, function(a) {
                    var c = La(b.j, function(b) {
                        return b.ma === a
                    });
                    c && c.ib()
                }) : w(this.j, function(a) {
                    (a.ma || a.A) && a.ib()
                }))
            } catch (c) {
                C("gds", null, c)
            }
            return this.g.apiReady ? Sf(this.g, a) : !1
        };
        q.Bc = function() {};
        q.Oc = function(a) {
            (a = a && a.ReactDOM) && ra(a.findDOMNode) && (this.ja = a)
        };
        q.Lc = function(a) {
            (a = Hl(this, a)) && this.O.push(a);
            this.nb()
        };
        q.Pc = function(a, b) {
            try {
                if (a.props["data-ad-name"] !== b["data-ad-name"]) {
                    var c = Il(this, a);
                    if (c) {
                        var d = Hl(this, a);
                        if (d) {
                            for (var e = r(["data-ad-processed", "id", "data-google-query-id", "data-ad-imp", "data-ad-hidden"]), f = e.next(); !f.done; f = e.next()) d.removeAttribute(f.value);
                            d.innerHTML = ""
                        }
                        c.ib();
                        return !0
                    }
                }
            } catch (g) {
                C("reactShouldComponentUpdate", "", g)
            }
            return !1
        };
        q.Mc = function(a) {
            (a = Hl(this, a)) && !z(this.O, a) && this.O.push(a);
            this.nb()
        };
        q.Nc = function(a) {
            var b = Il(this, a);
            b && ((a = Hl(this, a)) && Oa(this.O, a), b.ib())
        };

        function Hl(a, b) {
            if (a.ja) try {
                var c = a.ja.findDOMNode(b);
                if (c) return c
            } catch (d) {
                C("div react", "", d)
            }
            return null
        }

        function Il(a, b) {
            return (b = Hl(a, b)) && b.id ? Fl(a, b.id) : null
        };

        function Jl(a) {
            this.J = a;
            this.j = H();
            this.Ya = [];
            this.o = null;
            this.g = [];
            this.A = this.C = this.B = null;
            this.F = !1;
            return this
        }

        function Kl(a) {
            a.style.boxShadow = "0 0 17px 10px rgba(255,0,0,0.75)";
            a.style.background = "rgba(255, 211, 211, 0.9)";
            a.style.font = "14px sans-serif";
            a.style.color = "black"
        }

        function Ll(a, b) {
            Ml(a);
            Nl(a);
            4 > b && Re(function() {
                Ll(a, ++b)
            }, 5E3)
        }

        function Nl(a) {
            var b = a.j.document,
                c = b.createElement("UL");
            c.style.listStylePosition = "inside";
            for (var d = 0; d < a.Ya.length; d++) {
                var e = b.createElement("LI");
                e.innerHTML = a.Ya[d];
                c.appendChild(e)
            }
            a.o ? b = a.o : (d = a.j.document, b = d.querySelector("body"), d = d.createElement("DIV"), b && (d.id = "notes", d.style.position = "fixed", d.style.right = "0", d.style.zIndex = "100000", d.style.padding = "10px", Kl(d), b.insertBefore(d, b.childNodes[0])), a.o = d, b = a.o);
            b && (b.innerHTML = "", b.appendChild(c));
            for (c = 0; c < a.g.length; c++) Kl(a.g[c].Lb)
        }
        Jl.prototype.O = function() {
            if (!this.F) {
                this.B = this.j.document.querySelector('head script[src*\x3d"deployads.com/a/"]');
                var a;
                a: {
                    a = this.j.document.querySelectorAll("script");
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (-1 < c.innerHTML.indexOf("text/x-ab-test")) {
                            a = c;
                            break a
                        }
                    }
                    a = null
                }
                this.C = a;
                this.A = this.j.document.querySelector('head script[src*\x3d"/a/detector.js?site"]');
                a = [];
                for (var b = Nh() || [], c = this.j.document, d = 0; d < b.length; d++) {
                    var e = b[d],
                        f = c.createElement("DIV");
                    Kl(f);
                    var g = f.style;
                    g.textAlign = "left";
                    g.position = "absolute";
                    g.zIndex = "99999";
                    g.padding = "5px";
                    g.marginTop = "7px";
                    g = {};
                    g.Lb = e;
                    g.Ya = f;
                    e.parentElement && e.parentElement.insertBefore(f, e.nextSibling);
                    a.push(g)
                }
                this.g = a;
                this.F = !0;
                Ll(this, 0)
            }
        };

        function Ol(a) {
            return '\x3ca href\x3d"' + a + '"\x3e' + a + "\x3c/a\x3e"
        }

        function Ml(a) {
            for (var b = 0; b < a.g.length; b++) {
                var c = a.g[b],
                    d = c.Lb,
                    e = d.getAttribute("id");
                !c.Z && e && (c.Z = Fl(a.J, e));
                e = [];
                e.push("name: " + (d.getAttribute("data-ad-name") || "(not set)"));
                e.push("declared size: " + (d.getAttribute("data-ad-size") || "(not set)"));
                for (var f, g = d; null !== (f = g.firstElementChild);) g = f;
                f = g;
                g = null;
                f && f.clientHeight && f.clientWidth && (g = f.clientWidth + "x" + f.clientHeight);
                g && e.push("actual size: " + g);
                if (c.Z) {
                    f = c.Z.ia;
                    g = "(empty)";
                    if (null != f) switch (f) {
                        case 0:
                            g = "adx branded";
                            break;
                        case 1:
                            g =
                                "ads";
                            break;
                        case 2:
                            g = "adx unbranded";
                            break;
                        case 3:
                            g = "adx-no-ads branded";
                            break;
                        case 4:
                            g = "adx-no-ads unbranded";
                            break;
                        case 5:
                            g = "ads-via-adx";
                            break;
                        case 98:
                            g = "(unknown)";
                            break;
                        case 99:
                            g = "pub adx";
                            break;
                        default:
                            g = f.toString()
                    }
                    e.push("line item: " + g)
                } else e.push("no AdUnit instance yet");
                d.getAttribute("data-ad-imp") && e.push("imp id: " + d.getAttribute("data-ad-imp"));
                c.Ya.innerHTML = e.join(", ")
            }
            a.Ya = [];
            a.B && a.Ya.push("Found our tag in the head: " + Ol(a.B.src));
            a.A && a.Ya.push("Found our adblock detector: " +
                Ol(a.A.src));
            b = [];
            c = [];
            for (d = 0; d < a.g.length; d++) e = a.g[d].Lb, f = e.getAttribute("data-ad-name") || "(not set)", b.push(f), nf(e) && c.push(f);
            a.Ya.push("Found " + b.length + " of our tags in total: " + b.join(", "));
            0 < c.length && a.Ya.push(c.length + " of our tags are hidden:  " + c.join(", "));
            a.C && a.Ya.push("Found our header AB snippet in head")
        };

        function Pl(a) {
            this.Z = a;
            this.timeout = xf(a.o.time);
            this.j = null;
            this.J = kf(u(this.vb, this), 500);
            this.B = this.A = !1;
            this.o = this.start = 0;
            this.C = !1;
            this.F = null;
            this.g = {}
        }
        q = Pl.prototype;
        q.Kc = function(a) {
            try {
                a.Z === this.Z && (this.A = !1, this.vb())
            } catch (b) {
                C("refreshAdUnit.pauseReload", "", b)
            }
        };
        q.hc = function(a) {
            a && a.Z === this.Z && (this.C = .5 <= a.g, this.J())
        };

        function Ql(a) {
            var b = W(a.Z);
            b && (a.g.mouseOverListener && b.removeEventListener("mouseover", a.g.mouseOverListener), a.g.mouseOverListener = u(function() {
                this.B = !0;
                this.vb()
            }, a), We(b, "mouseover", a.g.mouseOverListener), a.g.mouseOutListener && b.removeEventListener("mouseout", a.g.mouseOutListener), a.g.mouseOutListener = u(function() {
                this.B = !1;
                this.vb()
            }, a), We(b, "mouseout", a.g.mouseOutListener))
        }
        q.ib = function(a) {
            a && a.Z === this.Z && (this.j && (window.clearTimeout(this.j), this.j = null), a = W(this.Z)) && (this.g.mouseOverListener && (a.removeEventListener("mouseover", this.g.mouseOverListener), delete this.g.mouseOverListener), this.g.mouseOutListener && (a.removeEventListener("mouseout", this.g.mouseOutListener), delete this.g.mouseOutListener))
        };

        function Rl(a) {
            var b = I();
            a.start && (a.o += b - a.start);
            a.start = b
        }
        q.ec = function() {
            this.j = null;
            this.A = !1;
            this.F = null;
            this.o = this.start = 0;
            this.Z.reload("t")
        };
        q.vb = function() {
            var a = this.F || this.timeout;
            this.A && !this.B && this.C ? this.j || (Rl(this), a -= this.o, 0 < a && null != a ? this.j = Re(u(this.ec, this), a) : this.ec()) : (this.j && (window.clearTimeout(this.j), this.j = null), this.A ? this.B ? (Rl(this), this.start = 0, 1E3 > a - this.o && (this.o = a - 1E3)) : (Rl(this), this.start = 0) : this.o = this.start = 0)
        };
        q.xc = function(a) {
            a.Z === this.Z && (Ql(this), this.A = !0, this.J())
        };

        function Sl(a) {
            Bh(a, cj, function(a) {
                if (a && a.Z && a.Z.X < a.Z.ja && null !== a.Z.o.time && !a.Z.o.yb) {
                    var b = new Pl(a.Z);
                    b.hc(new bj(ej, a.Z, 0));
                    Bh(b.Z, ej, u(b.hc, b));
                    Bh(b.Z, dj, u(b.Kc, b));
                    Bh(b.Z, Dh, u(b.xc, b));
                    Bh(b.Z, fj, u(b.ib, b))
                }
            })
        };

        function Tl(a, b, c, d) {
            return function(e) {
                var f = "https:" == document.location.protocol,
                    g;
                g = '\x3cscript id\x3d"mNCC"\x3e ' + ("medianet_width\x3d'" + a + "'; ");
                g += "medianet_height\x3d'" + b + "'; ";
                g = g + "medianet_versionId\x3d'111299';" + ("medianet_crid\x3d'" + c + "';  \x3c/script\x3e");
                g += '\x3cscript id\x3d"mNSC" src\x3d"' + (f ? "https:" : "http:") + "//contextual.media.net/nmedianet.js?cid\x3d" + d + (f ? "\x26https\x3d1" : "") + '"\x3e\x3c/script\x3e';
                vf(e, "100%", b, g)
            }
        };

        function Ul(a) {
            Bh(a, Zi, function() {
                var b = {
                    btf: {
                        w: 690,
                        h: 250,
                        crid: 585941461,
                        cid: "8CUT466EY"
                    },
                    between: {
                        w: 728,
                        h: 90,
                        crid: 436192737,
                        cid: "8CUT466EY"
                    },
                    rrail: {
                        w: 300,
                        h: 250,
                        crid: 865612951,
                        cid: "8CUT466EY"
                    }
                };
                z(Qh, a.ba.j) || (b.btf = {
                    w: 690,
                    h: 250,
                    crid: 839734314,
                    cid: "8CUT466EY"
                });
                Oh(function(c, d) {
                    var e = b[d.name];
                    b[d.name] = null;
                    e && (Tl(e.w, e.h, e.crid, e.cid)(c), c = d.name, d = new jg, e = V(), d.g = a.ba.j, d.Y = "mnet", d.R = c, d.$ = I() - a.C, d.T = a.R, e.send(d))
                }, window.document, "div.mn-ad-tag")
            })
        };

        function Vl(a) {
            var b = a.ba.Ub,
                c = window.document.createElement("DIV");
            window.document.body.appendChild(c);
            (a = yl(a, c, {
                name: b || "",
                size: "320x50",
                "default-anchor": "1"
            })) && a.display()
        };
        (function(a) {
            var b = H();
            if (!b.__ssrt_ab_is_them && !b.deployads_disabled)
                if ($f()._adDbg) df("//localhost:4200/a/9gag.com.js");
                else {
                    var c = window.deployads = window.deployads || [];
                    if (c.impl) T("already init"), c.push({});
                    else {
                        !0 === window.deployads_loaded && C("load more than once", S({
                            deployads_ab_pct: window.deployads_ab_pct,
                            deployads_pub: window.deployads_pub,
                            deployads_disabled: window.deployads_disabled,
                            __ssrt_ab_is_them: window.__ssrt_ab_is_them
                        }));
                        window.deployads_loaded = !0;
                        b = V();
                        try {
                            var d = Jj.U();
                            zj.U();
                            new Sl(d);
                            var e = new Jl(d);
                            Ul(d);
                            new ml(d);
                            yf(function() {
                                d.nb()
                            });
                            c.refreshAds = u(d.Qc, d);
                            c.newPage = u(d.Ic, d);
                            c.impl = {
                                loadAds: u(d.nb, d),
                                renderAd: u(d.Sc, d),
                                renderSelfServe: u(d.Tc, d),
                                passback: u(d.ac, d),
                                stopRld: u(d.Rb, d),
                                expandAd: u(d.Xb, d),
                                hideAd: u(d.Gc, d),
                                debug: u(e.O, e),
                                adClick: u(d.yc, d),
                                confiantPassback: ya(ei, d)
                            };
                            a.A && (c.gpt = {
                                display: u(d.Zb, d),
                                pubadsRefresh: u(d.Ec, d),
                                pubadsDisplay: u(d.Dc, d),
                                addService: u(d.Bc, d),
                                destroySlots: u(d.Cc, d),
                                enableServices: u(d.$b, d),
                                pubadsDisableInitialLoad: u(d.Fc, d)
                            });
                            c.react = {
                                setup: u(d.Oc,
                                    d),
                                componentDidMount: u(d.Lc, d),
                                shouldComponentUpdate: u(d.Pc, d),
                                componentDidUpdate: u(d.Mc, d),
                                componentWillUnmount: u(d.Nc, d)
                            };
                            d.g.__ad_passback = u(d.ac, d);
                            d.g.__ad_stopreld = u(d.Rb, d);
                            d.g.__ad_expand = u(d.Xb, d);
                            Bh(d, Yi, function(b) {
                                jb(tb()) && Af();
                                b = b.g;
                                var c = b.ba.Ub;
                                c && Eb(b.ba, c) && (b = u(Vl, null, b), Te("anchor", b));
                                Rh(a.j, a.T)
                            });
                            var f = Rg.U();
                            Bh(d, Dh, f.B, !1, f);
                            Bh(d, Dh, function(a) {
                                var b = Mh(W(a.Z)),
                                    c = 0 < Pe(H()).href.indexOf("_SrtblGdg") ? 1 : 0;
                                if (b.scan || c) a = {
                                    "impression-id": a.g.T,
                                    "dfp-line-item": a.g.Fa,
                                    "bid-winner": a.g.ka,
                                    "bid-src": a.g.oa,
                                    "creative-size": a.g.Ea,
                                    bid: a.g.R
                                }, a = Xf("//" + V().o + "/e/scan.gif", a), ef(a)
                            });
                            tl(d);
                            (function() {
                                c.apiReady = !0;
                                for (var a = 0; a < c.length; a++) "function" === typeof c[a] && zf("deployads.push", c[a]);
                                d.ta = !1
                            })()
                        } catch (g) {
                            b.Da("adtags.dfp.ads", null, g)
                        }
                    }
                }
        })(L);
    } catch (a) {
        a = a instanceof Error ? a : Error();
        var b = new XMLHttpRequest;
        b.open('POST', '//e.deployads.com/e/9gag.com', !0);
        b.setRequestHeader('Content-Type', 'text/plain');
        b.send(JSON.stringify({
            e: {
                _count: 1,
                bld: 14388,
                u: location.href,
                s: '9gag.com',
                c: 'global error',
                em: a.message,
                st: a.stack,
                _type: 'e'
            }
        }));
        throw a;
    };
})();