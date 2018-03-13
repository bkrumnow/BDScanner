try {
    (function(a, A) {
        function v(a, d) {
            var b = null;
            if ("undefined" !== typeof d || !0 === d || "true" === d) {
                D = A.cookie.split(";");
                var n = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$")
            } else if ("undefined" === typeof d || 0 == d || "false" == d || 0 == d || null == d) n = new RegExp("^\\s*" + a + c + "=\\s*(.*?)\\s*$");
            for (var g = 0; g < D.length && (b = D[g].match(n), null === b); g++);
            return b
        }

        function G(a, d, c) {
            try {
                A.cookie = a + "=" + d + "; expires=" + I + "; path=/; domain=" + c + ";";
                var b = v(a, !0);
                if ("undefined" !== typeof b && null !== b && !1 !== b) b = b[1];
                else return !1;
                return b
            } catch (g) {
                return !1
            }
        }

        function E() {
            var b = a.location.hostname.split("."),
                d = [],
                c = "_" + Math.floor(1E10 * Math.random());
            if (0 < b.length)
                if ("www" == b[0] && b.splice(0, 1), 1 < b.length) {
                    for (var n = b.length - 2; 0 <= n; n--) d.push(b.slice(n).join("."));
                    for (n = 0; n < d.length; n++) {
                        b = G("__sstester", c, d[n]);
                        try {
                            A.cookie = "__sstester= 0; expires= Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=" + d[n] + ";"
                        } catch (g) {}
                        if ("undefined" !== typeof b && !1 !== b && null !== b && b == c) return G("__ssds", n + 2, d[n]), n + 2
                    }
                } else return !1;
            else return !1
        }
        var e = {
                "84aa": !0,
                testaefd: !0,
                "955f": !0,
                bfbe: !0,
                9916: !0,
                c8c2: !0,
                "90dd": !0,
                a2c8: !0,
                8083: !0,
                "8ebc": !0,
                b7aa: !0,
                "8d39": !0,
                bbb8: !0,
                a5df: !0,
                "8aae": !0,
                b0ca: !0,
                a6a2: !0,
                "9b87": !0,
                ba23: !0,
                "9afb": !0,
                a26d: !0,
                "9c61": !0,
                8570: !0,
                b9cf: !0,
                8415: !0,
                be8f: !0,
                ad73: !0,
                ae9d: !1,
                b7a9: !1,
                ab9d: !1,
                "89b9": !1,
                "9de8": !1,
                ad08: !1,
                acd3: !1,
                "8e82": !1,
                "8be3": !1,
                af39: !1
            },
            D = A.cookie.split(";"),
            I = (new Date((new Date).setFullYear((new Date).getFullYear() + 10))).toUTCString(),
            x = !0,
            f = !1,
            w = null;
        if ("undefined" !== typeof __uzdbm_a) {
            x = !1;
            var p = __uzdbm_a.split("-");
            5 == p.length && (p = p[1].toLowerCase(),
                p in e && (f = !0, w = p, x = e[p]))
        } else "undefined" !== typeof a.SSJSConnectorObj.ss_cid && (f = !0, w = a.SSJSConnectorObj.ss_cid);
        a.ssTimeLogs = {};
        a.ssTimeLogs.initialCookie = null;
        a.ssTimeLogs.scriptStartTime = (new Date).getTime();
        e = Math.floor(100 * Math.random());
        if (0 == e % 2) {
            var B = "https://cas.avalon.perfdrive.com/jsdata";
            a.ssTimeLogs.ssAnalyticsFlag = 1
        } else B = "https://cas.avalon.perfdrive.com/jsdata", a.ssTimeLogs.ssAnalyticsFlag = 0;
        0 >= e && 0 < e && (a.ssPerformanceMetricSent = !1, a.ssLatencyTester = function(a, d, c) {
            var b = 0,
                g = 0,
                e = 0,
                C = 0,
                h = 0,
                m = 0,
                q = 0,
                l = 0,
                r = 0,
                f = 0,
                z = 0,
                k = -1,
                p = 0,
                t = 0,
                u = 0;
            if ("undefined" !== typeof window.ssPerformanceMetricSent && 0 == window.ssPerformanceMetricSent) {
                window.ssPerformanceMetricSent = !0;
                try {
                    "undefined" !== typeof window.ssTimeLogs ? (b = "undefined" !== typeof window.ssTimeLogs.scriptStartTime ? window.ssTimeLogs.scriptStartTime : "NA", g = "undefined" !== typeof window.ssTimeLogs.domainDotStartTime ? window.ssTimeLogs.domainDotStartTime : "NA", e = "undefined" !== typeof window.ssTimeLogs.domainDotEndTime ? window.ssTimeLogs.domainDotEndTime :
                        "NA", C = "undefined" !== typeof window.ssTimeLogs.readCookiesStartTime ? window.ssTimeLogs.readCookiesStartTime : "NA", h = "undefined" !== typeof window.ssTimeLogs.readCookiesEndTime ? window.ssTimeLogs.readCookiesEndTime : "NA", m = "undefined" !== typeof window.ssTimeLogs.generateJSInfoPayloadStartTime ? window.ssTimeLogs.generateJSInfoPayloadStartTime : "NA", q = "undefined" !== typeof window.ssTimeLogs.generateJSInfoPayloadEndTime ? window.ssTimeLogs.generateJSInfoPayloadEndTime : "NA", l = "undefined" !== typeof window.ssTimeLogs.postDataStartTime ?
                        window.ssTimeLogs.postDataStartTime : "NA", r = "undefined" !== typeof window.ssTimeLogs.responseStartTime ? window.ssTimeLogs.responseStartTime : "NA") : r = l = q = m = h = C = e = g = b = "und";
                    "undefined" !== typeof a && "undefined" !== typeof d ? (f = a, z = d) : z = f = "und";
                    a = null;
                    var v = A.cookie.split(";"),
                        x = new RegExp("^\\s*__ssuzjsr" + window.SSJSConnectorObj.domain_info + "=\\s*(.*?)\\s*$");
                    for (d = 0; d < v.length; d++)
                        if (a = v[d].match(x), null !== a) {
                            k = a[1].substr(4, 1);
                            break
                        }
                    p = "undefined" !== typeof c ? c : "und";
                    t = window.ssTimeLogs.initialCookie;
                    u = window.ssTimeLogs.ssAnalyticsFlag
                } catch (K) {
                    u =
                        t = p = k = z = f = r = l = q = m = h = C = e = g = b = "e"
                }
                try {
                    c = '{"j47":"' + b + '","j48":"' + g + '","j49":"' + e + '","j50":"' + C + '","j51":"' + h + '","j52":"' + m + '","j53":"' + q + '","j54":"' + l + '","j55":"' + r + '","j56":"' + f + '","j57":"' + z + '","j58":"' + k + '","j59":"' + p + '","j60":"' + t + '","j46":"' + u + '"}';
                    var y = "cid=testaefd&__uzmaj=fcfe6d19-c314-4059-bbc8-fc22d0aa5757&__uzmbj=1501850736&__uzmcj=198922858788&__uzmdj=1502100333&url=" + window.encodeURIComponent(window.location.href) + "&JSinfo=" + window.encodeURIComponent(c),
                        w = function(a) {
                            if ("undefined" ===
                                typeof XMLHttpRequest) return null;
                            var b = new XMLHttpRequest;
                            "withCredentials" in b ? b.open("GET", a, !0) : b = null;
                            return b
                        }(B + y);
                    w && (w.onreadystatechange = function() {}, w.send())
                } catch (K) {}
            }
        });
        a.ssTimeLogs.domainDotStartTime = (new Date).getTime();
        if (x)
            if (/^[0-9.]+$/.test(a.location.hostname))
                if ("undefined" === typeof a.SSJSConnectorObj || null == a.SSJSConnectorObj || 0 == a.SSJSConnectorObj || 0 == a.SSJSConnectorObj) {
                    var c = 2;
                    a.SSJSConnectorObj = {};
                    a.SSJSConnectorObj.domain_info = 2
                } else "undefined" !== typeof a.SSJSConnectorObj.domain_info &&
                    "auto" == a.SSJSConnectorObj.domain_info ? (c = 2, a.SSJSConnectorObj.domain_info = 2) : "undefined" !== typeof a.SSJSConnectorObj.domain_info && (c = a.SSJSConnectorObj.domain_info ? parseInt(a.SSJSConnectorObj.domain_info) : 2);
        else "undefined" !== typeof a.SSJSConnectorObj ? "undefined" !== typeof a.SSJSConnectorObj.domain_info ? "auto" == a.SSJSConnectorObj.domain_info ? (c = v("__ssds", !0), c = "undefined" !== typeof c && null !== c && !1 !== c ? parseInt(c[1]) : E(), a.SSJSConnectorObj.domain_info = c) : c = a.SSJSConnectorObj.domain_info ? parseInt(a.SSJSConnectorObj.domain_info) :
            2 : (c = E(), a.SSJSConnectorObj.domain_info = c) : (a.SSJSConnectorObj = {}, c = v("__ssds", !0), c = "undefined" !== typeof c && null !== c && !1 !== c ? parseInt(c[1]) : E(), a.SSJSConnectorObj.domain_info = c);
        else "undefined" === typeof a.SSJSConnectorObj && (a.SSJSConnectorObj = {});
        if ("undefined" === typeof c || 0 == c || null == c || 0 == c) e = a.location.hostname.split("."), 0 < e.length && "www" == e[0] && e.splice(0, 1), c = e.length, a.SSJSConnectorObj.domain_info = c;
        "undefined" === typeof a.SSJSConnectorObj && (a.SSJSConnectorObj = {});
        a.SSJSConnectorObj.cookie_setting =
            x;
        a.ssTimeLogs.domainDotEndTime = (new Date).getTime();
        a.ssJSActionTaker = function(a) {
            var b = !1;
            try {
                "undefined" !== typeof window.ss_uzjs_datasent && !1 === window.ss_uzjs_datasent && (window.ss_uzjs_ssresp = parseInt(a), window.ss_uzjs_datasent = !0, "function" === typeof ssJSCodeWrapper && ssJSCodeWrapper())
            } catch (z) {
                window.ss_uzjs_datasent = !0, window.ss_uzjs_ssresp = 0, b = !0
            }
            try {
                b && ssJSCodeWrapper()
            } catch (z) {}
        };
        e = v("__ssuzjsr");
        null !== e && (window.ssTimeLogs.initialCookie = e[1], window.ssJSActionTaker(e[1][4]));
        var F = ["__uzmaj",
                "__uzmbj", "__uzmcj", "__uzmdj"
            ],
            k = !1;
        k = !0;
        B += "?";
        e = function(a) {
            if ("undefined" === typeof XMLHttpRequest) return null;
            var b = new XMLHttpRequest;
            "withCredentials" in b ? b.open("GET", a, !0) : b = null;
            return b
        };
        p = function(a) {
            var b = null;
            "undefined" !== typeof XDomainRequest && (b = new XDomainRequest, b.open("get", a));
            return b
        };
        var t = function(b) {
                return "function" === typeof a.encodeURIComponent ? a.encodeURIComponent(b) : b
            },
            L = function() {
                for (var a = "", d = 0; d < F.length; d++) {
                    var c = v(F[d]);
                    null != c && (a += t(F[d]) + "=" + t(c[1]) + "&")
                }
                return a
            },
            M = function() {
                var b = '{"j0":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.userAgent ? a.navigator.userAgent : "" : "") + '","j1":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.appCodeName ? a.navigator.appCodeName : "" : "") + '","j2":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.cookieEnabled ? a.navigator.cookieEnabled : "" : "") + '","j3":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.platform ? a.navigator.platform : "" : "") + '","j4":"' +
                    ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.language ? a.navigator.language : "" : "") + '","j5":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.webdriver ? a.navigator.webdriver : "" : "") + '","j6":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.maxTouchPoints ? a.navigator.maxTouchPoints : "" : "") + '","j7":"' + ("undefined" !== typeof a.screen ? "undefined" !== typeof a.screen.colorDepth ? a.screen.colorDepth : "" : "") + '","j8":"' + ("undefined" !== typeof a.screen ? "undefined" !==
                        typeof a.screen.width ? a.screen.width : "" : "") + '","j9":"' + ("undefined" !== typeof a.screen ? "undefined" !== typeof a.screen.height ? a.screen.height : "" : "") + '","j10":"' + ("undefined" !== typeof a.screen ? "undefined" !== typeof a.screen.availHeight ? a.screen.availHeight : "" : "") + '","j11":"' + ("undefined" !== typeof a.screen ? "undefined" !== typeof a.screen.availWidth ? a.screen.availWidth : "" : "") + '","j12":"' + ("undefined" !== typeof a.innerHeight ? a.innerHeight : "") + '","j13":"' + ("undefined" !== typeof a.innerWidth ? a.innerWidth : "") + '","j14":"' +
                    ("undefined" !== typeof a.seleniumKey ? a.seleniumKey : "") + '","j15":"' + ("function" === typeof a.seleniumAlert ? "t" : "f") + '","j16":"' + ("undefined" !== typeof a.history ? "undefined" !== typeof a.history.length ? a.history.length : "" : "") + '","j17":"' + ("object" === typeof a.document.documentElement ? null !== a.document.documentElement.getAttribute("webdriver") ? "t" : "f" : "f") + '","j18":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.onLine ? a.navigator.onLine : "" : "") + '","j19":"' + ("undefined" !== typeof a.navigator ?
                        "undefined" !== typeof a.navigator.buildID ? a.navigator.buildID : "" : "") + '","j20":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.msMaxTouchPoints ? a.navigator.msMaxTouchPoints : "" : "") + '","j21":"' + ("undefined" !== typeof a.callPhantom ? "t" : "f") + '","j22":"' + ("undefined" !== typeof a._phantom ? "t" : "f") + '","j23":"' + ("undefined" !== typeof a.outerWidth ? a.outerWidth : "") + '","j24":"' + ("undefined" !== typeof a.outerHeight ? a.outerHeight : "") + '","j25":"' + ("undefined" !== typeof a.__phantomas ? "t" : "f") + '","j26":"' +
                    ("undefined" !== typeof a.ActiveXObject ? "t" : "f") + '","j27":"' + ("undefined" !== typeof a.domAutomation ? "t" : "f") + '","j28":"' + ("undefined" !== typeof a.domAutomationController ? "t" : "f") + '","j29":"' + ("undefined" !== typeof a.Buffer ? "t" : "f") + '","j30":"' + ("undefined" !== typeof a.emit ? "t" : "f") + '","j31":"' + ("undefined" !== typeof a.spawn ? "t" : "f") + '","j32":"' + ("undefined" !== typeof a._Selenium_IDE_Recorder ? "t" : "f") + '","j33":"' + ("undefined" !== typeof a.__webdriver_script_fn ? "t" : "f") + '","j34":"' + ("undefined" !== typeof a.navigator ?
                        "undefined" !== typeof a.navigator.plugins ? "undefined" !== typeof a.navigator.plugins.length ? a.navigator.plugins.length : "" : "" : "") + '","j35":"' + ("undefined" !== typeof a.doNotTrack ? a.doNotTrack : "") + '","j36":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.msDoNotTrack ? a.navigator.msDoNotTrack : "" : "") + '","j37":"' + ("undefined" !== typeof a.navigator ? "undefined" !== typeof a.navigator.doNotTrack ? a.navigator.doNotTrack : "" : "") + '","j38":"' + ("undefined" !== typeof a.performance ? "undefined" !== typeof a.performance.navigation ?
                        "undefined" !== typeof a.performance.navigation.redirectCount ? a.performance.navigation.redirectCount : "" : "" : "") + '","j39":"' + ("undefined" !== typeof a.performance ? "undefined" !== typeof a.performance.navigation ? "undefined" !== typeof a.performance.navigation.type ? a.performance.navigation.type : "" : "" : "") + '","j40":"',
                    d = "f";
                try {
                    var e = Error.toString().replace(/\s/g, ""),
                        n = setTimeout.toString().replace(/setTimeout/g, "Error").replace(/\s/g, "");
                    e === n && (d = "t")
                } catch (r) {
                    d = "E"
                }
                b = b + d + '","j41":"';
                d = "f";
                try {
                    var g = Error.toString().replace(/\s/g,
                            ""),
                        f = setInterval.toString().replace(/setInterval/g, "Error").replace(/\s/g, "");
                    g === f && (d = "t")
                } catch (r) {
                    d = "E"
                }
                g = b + d + '","j42":"';
                f = "f";
                try {
                    var k = Error.toString().replace(/\s/g, ""),
                        h = Function.prototype.bind.toString().replace(/bind/g, "Error").replace(/\s/g, "");
                    k === h && (f = "t")
                } catch (r) {
                    f = "E"
                }
                k = g + f + '","j43":"';
                h = "f";
                try {
                    var m = Error.toString().replace(/\s/g, ""),
                        q = Function.prototype.toString.toString().replace(/toString/g, "Error").replace(/\s/g, "");
                    m === q && (h = "t")
                } catch (r) {
                    h = "E"
                }
                m = "f";
                try {
                    "function" === typeof Function.prototype.bind &&
                        (m = "t")
                } catch (r) {
                    m = "E"
                }
                m = k + h + '","j44":"' + m + '","j45":"';
                q = "f";
                try {
                    null[1]()
                } catch (r) {
                    var l = r
                }
                try {
                    l = l.stack, null !== l.match(/phantomjs/g) && (q = "t")
                } catch (r) {
                    q = "E"
                }
                return t(m + q + '","j46":"' + c + '"}')
            },
            H = function(a) {
                return 2047 < a.length ? a.substring(0, 2047) : a
            },
            N = function() {
                var a = "";
                "undefined" !== typeof window.location && "undefined" !== typeof window.location.href && (a = window.location.href);
                "" !== a && (a = t("url") + "=" + t(a) + "&");
                return a
            },
            O = function() {
                var a = "";
                "undefined" !== typeof document.referrer && "" !== document.referrer &&
                    (a = t("js_zpsbd3") + "=" + t(document.referrer) + "&");
                return a
            };
        a.ssJSConnWriteCookies = function(b) {
            try {
                var c = 0,
                    e = 0,
                    f = 0;
                if ("undefined" !== typeof window.ssLatencyTester) {
                    try {
                        c = (new Date).getTime()
                    } catch (J) {
                        c = 0
                    }
                    "undefined" === typeof b && (e = 1)
                }
                var g = null;
                g = "undefined" === typeof b ? {
                    ssresp: 0
                } : b;
                var k = 2,
                    p = !0;
                "undefined" !== typeof a.SSJSConnectorObj && ("undefined" !== typeof a.SSJSConnectorObj.domain_info && (k = a.SSJSConnectorObj.domain_info ? parseInt(a.SSJSConnectorObj.domain_info) : 2), "undefined" !== typeof a.SSJSConnectorObj.cookie_setting &&
                    (p = a.SSJSConnectorObj.cookie_setting));
                "object" !== typeof g && (g = JSON.parse(b));
                window.ssJSActionTaker(g.ssresp);
                var h = window.location.hostname,
                    m = ["__uzmaj", "__uzmbj", "__uzmcj", "__uzmdj"];
                if (!/^[0-9.]+$/.test(h)) {
                    var q = h.split(".");
                    if (1 != q.length) {
                        var l = q.length - k;
                        for (h = ""; l < q.length;) h = h + "." + q[l], l++;
                        h = h.substring(1, h.length)
                    }
                }
                if ("" != h && p) {
                    var r = (new Date((new Date).setFullYear((new Date).getFullYear() + 10))).toUTCString();
                    "undefined" !== typeof g.ssresp && "undefined" !== typeof b && (document.cookie = "__ssuzjsr" +
                        k + "=a9be" + g.ssresp + "cd8e; path=/; domain=" + h + ";expires=" + r + "; ");
                    for (l = 0; l < m.length; l++) "undefined" !== typeof g[m[l]] && (document.cookie = m[l] + k + "=" + g[m[l]] + "; path=/; domain=" + h + ";expires=" + r + "; ")
                }
                "undefined" !== typeof window.ssLatencyTester && (f = (new Date).getTime(), a.ssLatencyTester(c, f, e))
            } catch (J) {
                window.ssJSActionTaker(0)
            }
        };
        "undefined" == typeof JSON ? k = !1 : "function" !== typeof JSON.parse && (k = !1);
        if (f && w && k) {
            k = !1;
            f = "cid=" + w + "&";
            a.ssTimeLogs.readCookiesStartTime = (new Date).getTime();
            x && (f += L());
            a.ssTimeLogs.readCookiesEndTime =
                (new Date).getTime();
            f += N();
            f += O();
            a.ssTimeLogs.generateJSInfoPayloadStartTime = (new Date).getTime();
            f += "JSinfo=" + M();
            a.ssTimeLogs.generateJSInfoPayloadEndTime = (new Date).getTime();
            var u = e(H(B + f));
            u && (u.onreadystatechange = function() {
                    try {
                        4 == u.readyState && (a.ssTimeLogs.responseStartTime = (new Date).getTime(), 200 == u.status ? window.ssJSConnWriteCookies(u.responseText) : window.ssJSConnWriteCookies({
                            ssresp: 0
                        }))
                    } catch (b) {
                        a.ssTimeLogs.responseStartTime = 0, window.ssJSConnWriteCookies({
                            ssresp: 0
                        })
                    }
                }, a.ssTimeLogs.postDataStartTime =
                (new Date).getTime(), u.send(), k = !0);
            if (!k) {
                var y = p(H(B + f));
                y && (y.onload = function() {
                    try {
                        a.ssTimeLogs.responseStartTime = (new Date).getTime(), window.ssJSConnWriteCookies(y.responseText)
                    } catch (b) {
                        a.ssTimeLogs.responseStartTime = 0, window.ssJSConnWriteCookies({
                            ssresp: 0
                        })
                    }
                }, y.onerror = function() {
                    try {
                        window.ssJSConnWriteCookies({
                            ssresp: 0
                        })
                    } catch (b) {}
                }, a.ssTimeLogs.postDataStartTime = (new Date).getTime(), y.send(), k = !0)
            }
            k || window.ssJSConnWriteCookies({
                ssresp: 0
            })
        } else window.ssJSConnWriteCookies({
            ssresp: 0
        })
    })(window,
        document)
} catch (a) {
    window.ssJSConnWriteCookies({
        ssresp: 0
    })
};