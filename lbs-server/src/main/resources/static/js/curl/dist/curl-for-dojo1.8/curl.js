(function () {/*
 MIT License (c) copyright 2010-2013 B Cavalier & J Hann  MIT (c) copyright 2010-2013 B Cavalier & J Hann */
    (function (q) {
        function n() {
        }

        function l(a, b) {
            return 0 == V.call(a).indexOf("[object " + b)
        }

        function v(a) {
            return a && "/" == a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a
        }

        function E(a, b) {
            var d, c, e, f;
            d = 1;
            c = a;
            "." == c.charAt(0) && (e = !0, c = c.replace(W, function (a, b, c, e) {
                c && d++;
                return e || ""
            }));
            if (e) {
                e = b.split("/");
                f = e.length - d;
                if (0 > f)return a;
                e.splice(f, d);
                return e.concat(c || []).join("/")
            }
            return c
        }

        function z(a) {
            var b = a.indexOf("!");
            return{g: a.substr(b + 1), d: 0 <= b && a.substr(0, b)}
        }

        function C() {
        }

        function s(a, b) {
            C.prototype =
                a || N;
            var d = new C;
            C.prototype = N;
            for (var c in b)d[c] = b[c];
            return d
        }

        function A() {
            function a(a, b, d) {
                c.push([a, b, d])
            }

            function b(a, b) {
                for (var d, e = 0; d = c[e++];)(d = d[a]) && d(b)
            }

            var d, c, e;
            d = this;
            c = [];
            e = function (d, h) {
                a = d ? function (a) {
                    a && a(h)
                } : function (a, b) {
                    b && b(h)
                };
                e = n;
                b(d ? 0 : 1, h);
                b = n;
                c = r
            };
            this.A = function (b, c, e) {
                a(b, c, e);
                return d
            };
            this.h = function (a) {
                d.pa = a;
                e(!0, a)
            };
            this.e = function (a) {
                d.oa = a;
                e(!1, a)
            };
            this.v = function (a) {
                b(2, a)
            }
        }

        function y(a) {
            return a instanceof A || a instanceof B
        }

        function u(a, b, d, c) {
            y(a) ? a.A(b, d,
                c) : b(a)
        }

        function x(a, b, d) {
            var c;
            return function () {
                0 <= --a && b && (c = b.apply(r, arguments));
                0 == a && d && d(c);
                return c
            }
        }

        function w() {
            var a, b;
            a = [].slice.call(arguments);
            l(a[0], "Object") && (b = a.shift(), b = g(b));
            return new B(a[0], a[1], a[2], b)
        }

        function g(a, b, d) {
            var c, e, f;
            if (a && (k.O(a), p = k.a(a), "preloads"in a && (c = new B(a.preloads, r, d, G, !0), k.K(function () {
                G = c
            })), f = (f = a.main) && String(f).split(X)))return e = new A, e.A(b, d), a = f[1] ? function () {
                new B([f[1]], e.h, e.e)
            } : e.e, new B([f[0]], e.h, a), e
        }

        function B(a, b, d, c, e) {
            var f;
            f =
                k.i(p, r, [].concat(a), e);
            this.then = this.A = a = function (a, b) {
                u(f, function (b) {
                    a && a.apply(r, b)
                }, function (a) {
                    if (b)b(a); else throw a;
                });
                return this
            };
            this.next = function (a, b, c) {
                return new B(a, b, c, f)
            };
            this.config = g;
            (b || d) && a(b, d);
            k.K(function () {
                u(e || G, function () {
                    u(c, function () {
                        k.r(f)
                    }, d)
                })
            })
        }

        function K(a) {
            var b, d;
            b = a.id;
            b == r && (H !== r ? H = {G: "Multiple anonymous defines encountered"} : (b = k.$()) || (H = a));
            if (b != r) {
                d = t[b];
                b in t || (d = k.j(b, p), d = k.C(d.a, b), t[b] = d);
                if (!y(d))throw Error("duplicate define: " + b);
                d.ca = !1;
                k.D(d,
                    a)
            }
        }

        function D() {
            var a = k.X(arguments);
            K(a)
        }

        var p, m, I, F = q.document, O = F && (F.head || F.getElementsByTagName("head")[0]), Y = O && O.getElementsByTagName("base")[0] || null, R = {}, S = {}, L = {}, Z = "addEventListener"in q ? {} : {loaded: 1, complete: 1}, N = {}, V = N.toString, r, t = {}, M = {}, G = !1, H, T = /^\/|^[^:]+:\/\//, W = /(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g, $ = /\/\*[\s\S]*?\*\/|\/\/.*?[\n\r]/g, aa = /require\s*\(\s*(["'])(.*?[^\\])\1\s*\)|[^\\]?(["'])/g, X = /\s*,\s*/, P, k;
        k = {n: function (a, b, d) {
            var c;
            a = E(a, b);
            if ("." == a.charAt(0))return a;
            c = z(a);
            a =
                (b = c.d) || c.g;
            a in d.c && (a = d.c[a].l || a);
            b && (0 > b.indexOf("/") && !(b in d.c) && (a = v(d.M) + "/" + b), a = a + "!" + c.g);
            return a
        }, i: function (a, b, d, c) {
            function e(b, c) {
                var d, f;
                d = k.n(b, h.id, a);
                if (!c)return d;
                f = z(d);
                if (!f.d)return d;
                d = t[f.d];
                f.g = "normalize"in d ? d.normalize(f.g, e, h.a) || "" : e(f.g);
                return f.d + "!" + f.g
            }

            function f(b, d, f) {
                var Q;
                Q = d && function (a) {
                    d.apply(r, a)
                };
                if (l(b, "String")) {
                    if (Q)throw Error("require(id, callback) not allowed");
                    f = e(b, !0);
                    b = t[f];
                    if (!(f in t))throw Error("Module not resolved: " + f);
                    return(f = y(b) &&
                        b.b) || b
                }
                u(k.r(k.i(a, h.id, b, c)), Q, f)
            }

            var h;
            h = new A;
            h.id = b || "";
            h.aa = c;
            h.F = d;
            h.a = a;
            h.m = f;
            f.toUrl = function (b) {
                return k.j(e(b, !0), a).url
            };
            h.n = e;
            return h
        }, C: function (a, b, d) {
            var c, e, f;
            c = k.i(a, b, r, d);
            e = c.h;
            f = x(1, function (a) {
                c.q = a;
                try {
                    return k.R(c)
                } catch (b) {
                    c.e(b)
                }
            });
            c.h = function (a) {
                u(d || G, function () {
                    e(t[c.id] = M[c.url] = f(a))
                })
            };
            c.H = function (a) {
                u(d || G, function () {
                    c.b && (f(a), c.v(S))
                })
            };
            return c
        }, Q: function (a, b, d, c) {
            return k.i(a, d, r, c)
        }, Z: function (a) {
            return a.m
        }, I: function (a) {
            return a.b || (a.b = {})
        }, Y: function (a) {
            var b =
                a.s;
            b || (b = a.s = {id: a.id, uri: k.J(a), exports: k.I(a), config: function () {
                return a.a
            }}, b.b = b.exports);
            return b
        }, J: function (a) {
            return a.url || (a.url = k.B(a.m.toUrl(a.id), a.a))
        }, O: function (a) {
            var b, d, c, e, f;
            b = "curl";
            d = "define";
            c = e = q;
            if (a && (f = a.overwriteApi || a.ma, b = a.apiName || a.ea || b, c = a.apiContext || a.da || c, d = a.defineName || a.ga || d, e = a.defineContext || a.fa || e, m && l(m, "Function") && (q.curl = m), m = null, I && l(I, "Function") && (q.define = I), I = null, !f)) {
                if (c[b] && c[b] != w)throw Error(b + " already exists");
                if (e[d] && e[d] != D)throw Error(d +
                    " already exists");
            }
            c[b] = w;
            e[d] = D
        }, a: function (a) {
            function b(a, b) {
                var d, c, h, g, p;
                for (p in a) {
                    h = a[p];
                    l(h, "String") && (h = {path: a[p]});
                    h.name = h.name || p;
                    g = e;
                    c = z(v(h.name));
                    d = c.g;
                    if (c = c.d)g = f[c], g || (g = f[c] = s(e), g.c = s(e.c), g.f = []), delete a[p];
                    c = h;
                    var u = b, J = void 0;
                    c.path = v(c.path || c.location || "");
                    u && (J = c.main || "./main", "." == J.charAt(0) || (J = "./" + J), c.l = E(J, c.name + "/"));
                    c.a = c.config;
                    c.a && (c.a = s(e, c.a));
                    c.P = d.split("/").length;
                    d ? (g.c[d] = c, g.f.push(d)) : g.o = k.N(h.path, e)
                }
            }

            function d(a) {
                var b = a.c;
                a.L = RegExp("^(" +
                    a.f.sort(function (a, c) {
                        return b[c].P - b[a].P
                    }).join("|").replace(/\/|\./g, "\\$&") + ")(?=\\/|$)");
                delete a.f
            }

            var c, e, f, h;
            "baseUrl"in a && (a.o = a.baseUrl);
            "main"in a && (a.l = a.main);
            "preloads"in a && (a.na = a.preloads);
            "pluginPath"in a && (a.M = a.pluginPath);
            if ("dontAddFileExt"in a || a.k)a.k = RegExp(a.dontAddFileExt || a.k);
            c = p;
            e = s(c, a);
            e.c = s(c.c);
            f = a.plugins || {};
            e.plugins = s(c.plugins);
            e.u = s(c.u, a.u);
            e.t = s(c.t, a.t);
            e.f = [];
            b(a.packages, !0);
            b(a.paths, !1);
            for (h in f)a = k.n(h + "!", "", e), e.plugins[a.substr(0, a.length - 1)] =
                f[h];
            f = e.plugins;
            for (h in f)if (f[h] = s(e, f[h]), a = f[h].f)f[h].f = a.concat(e.f), d(f[h]);
            for (h in c.c)e.c.hasOwnProperty(h) || e.f.push(h);
            d(e);
            return e
        }, j: function (a, b) {
            var d, c, e, f;
            d = b.c;
            e = T.test(a) ? a : a.replace(b.L, function (a) {
                c = d[a] || {};
                f = c.a;
                return c.path || ""
            });
            return{a: f || p, url: k.N(e, b)}
        }, N: function (a, b) {
            var d = b.o;
            return d && !T.test(a) ? v(d) + "/" + a : a
        }, B: function (a, b) {
            return a + ((b || p).k.test(a) ? "" : ".js")
        }, ba: function (a, b, d) {
            var c = F.createElement("script");
            c.onload = c.onreadystatechange = function (d) {
                d = d || q.event;
                if ("load" == d.type || Z[c.readyState])delete L[a.id], c.onload = c.onreadystatechange = c.onerror = "", b()
            };
            c.onerror = function () {
                d(Error("Syntax or http error: " + a.url))
            };
            c.type = a.ja || "text/javascript";
            c.charset = "utf-8";
            c.async = !a.la;
            c.src = a.url;
            L[a.id] = c;
            O.insertBefore(c, Y);
            return c
        }, S: function (a) {
            var b = [], d;
            ("string" == typeof a ? a : a.toSource ? a.toSource() : a.toString()).replace($, "").replace(aa, function (a, e, f, h) {
                h ? d = d == h ? r : d : d || b.push(f);
                return""
            });
            return b
        }, X: function (a) {
            var b, d, c, e, f, h;
            f = a.length;
            c = a[f - 1];
            e = l(c, "Function") ? c.length : -1;
            2 == f ? l(a[0], "Array") ? d = a[0] : b = a[0] : 3 == f && (b = a[0], d = a[1]);
            !d && 0 < e && (h = !0, d = ["require", "exports", "module"].slice(0, e).concat(k.S(c)));
            return{id: b, q: d || [], w: 0 <= e ? c : function () {
                return c
            }, p: h}
        }, R: function (a) {
            var b;
            b = a.w.apply(a.p ? a.b : r, a.q);
            b === r && a.b && (b = a.s ? a.b = a.s.b : a.b);
            return b
        }, D: function (a, b) {
            a.w = b.w;
            a.p = b.p;
            a.F = b.q;
            k.r(a)
        }, r: function (a) {
            function b(a, b, c) {
                h[b] = a;
                c && t(a, b)
            }

            function d(b, c) {
                var d, e, f, h;
                d = x(1, function (a) {
                    e(a);
                    m(a, c)
                });
                e = x(1, function (a) {
                    t(a, c)
                });
                f = k.U(b,
                    a);
                (h = y(f) && f.b) && e(h);
                u(f, d, a.e, a.b && function (a) {
                    f.b && (a == R ? e(f.b) : a == S && d(f.b))
                })
            }

            function c() {
                a.h(h)
            }

            var e, f, h, g, p, t, m;
            h = [];
            f = a.F;
            g = f.length;
            0 == f.length && c();
            t = x(g, b, function () {
                a.H && a.H(h)
            });
            m = x(g, b, c);
            for (e = 0; e < g; e++)p = f[e], p in P ? (m(P[p](a), e, !0), a.b && a.v(R)) : p ? d(p, e) : m(r, e, !0);
            return a
        }, V: function (a) {
            k.J(a);
            k.ba(a, function () {
                var b = H;
                H = r;
                !1 !== a.ca && (!b || b.G ? a.e(Error(b && b.G || "define() missing or duplicated: " + a.url)) : k.D(a, b))
            }, a.e);
            return a
        }, U: function (a, b) {
            var d, c, e, f, h, g, m, l, q, n, s, r;
            d = b.n;
            c = b.aa;
            e = b.a || p;
            h = d(a);
            h in t ? g = h : (f = z(h), l = f.g, g = f.d || l, q = k.j(g, e));
            if (!(h in t))if (r = k.j(l, e).a, f.d)m = g; else if (m = r.moduleLoader || r.ka || r.loader || r.ia)l = g, g = m, q = k.j(m, e);
            g in t ? n = t[g] : q.url in M ? n = t[g] = M[q.url] : (n = k.C(r, g, c), n.url = k.B(q.url, q.a), t[g] = M[q.url] = n, k.V(n));
            g == m && (f.d && e.plugins[f.d] && (r = e.plugins[f.d]), s = new A, u(n, function (a) {
                var b, e, f;
                f = a.dynamic;
                l = "normalize"in a ? a.normalize(l, d, n.a) || "" : d(l);
                e = m + "!" + l;
                b = t[e];
                if (!(e in t)) {
                    b = k.Q(r, e, l, c);
                    f || (t[e] = b);
                    var h = function (a) {
                        f || (t[e] = a);
                        b.h(a)
                    };
                    h.resolve = h;
                    h.reject = h.error = b.e;
                    a.load(l, b.m, h, r)
                }
                s != b && u(b, s.h, s.e, s.v)
            }, s.e));
            return s || n
        }, $: function () {
            var a;
            if (!l(q.opera, "Opera"))for (var b in L)if ("interactive" == L[b].readyState) {
                a = b;
                break
            }
            return a
        }, W: function (a) {
            var b = 0, d, c;
            for (d = F && (F.scripts || F.getElementsByTagName("script")); d && (c = d[b++]);)if (a(c))return c
        }, T: function (a) {
            var b;
            (b = k.W(function (b) {
                if (b = b.getAttribute("data-curl-run"))a.l = b;
                return b
            })) && b.setAttribute("data-curl-run", "");
            return a
        }, K: function (a) {
            setTimeout(a, 0)
        }};
        P =
        {require: k.Z, exports: k.I, module: k.Y};
        w.version = "0.8.1";
        w.config = g;
        D.amd = {plugins: !0, jQuery: !0, curl: "0.8.1"};
        p = {o: "", M: "curl/plugin", k: /\?|\.js\b/, u: {}, t: {}, plugins: {}, c: {}, L: /$^/};
        p = k.T(p);
        m = q.curl;
        I = q.define;
        m && l(m, "Object") || p.l ? (q.curl = r, g(m || p)) : k.O();
        t.curl = w;
        t["curl/_privileged"] = {core: k, cache: t, config: function () {
            return p
        }, _define: K, _curl: w, Promise: A}
    })(this.window || "undefined" != typeof global && global || this);
    (function (q, n) {
        function l() {
            if (!n.body)return!1;
            D || (D = n.createTextNode(""));
            try {
                return n.body.removeChild(n.body.appendChild(D)), D = K, !0
            } catch (g) {
                return!1
            }
        }

        function v() {
            var p;
            p = C[n[z]] && l();
            if (!y && p) {
                y = !0;
                for (clearTimeout(B); w = g.pop();)w();
                A && (n[z] = "complete");
                for (var m; m = s.shift();)m()
            }
            return p
        }

        function E() {
            v();
            y || (B = setTimeout(E, u))
        }

        var z = "readyState", C = {loaded: 1, interactive: 1, complete: 1}, s = [], A = n && "string" != typeof n[z], y = !1, u = 10, x, w, g = [], B, K, D;
        x = "addEventListener"in q ? function (g, m) {
            g.addEventListener(m,
                v, !1);
            return function () {
                g.removeEventListener(m, v, !1)
            }
        } : function (g, m) {
            g.attachEvent("on" + m, v);
            return function () {
                g.detachEvent(m, v)
            }
        };
        n && !v() && (g = [x(q, "load"), x(n, "readystatechange"), x(q, "DOMContentLoaded")], B = setTimeout(E, u));
        define("curl/domReady", function () {
            function g(m) {
                y ? m() : s.push(m)
            }

            g.then = g;
            g.amd = !0;
            return g
        })
    })(this, this.document);
    var U;
    (function (q, n) {
        define("curl/shim/dojo18", ["curl/_privileged"], function (l) {
            function v(g) {
                g.has || (g.has = w);
                g.on || (g.on = z);
                g.idle || (g.idle = E);
                g.async = !0
            }

            function E() {
                for (var g in s)if (s[g]instanceof A)return!1;
                return!0
            }

            function z() {
            }

            var C, s, A, y;
            C = l._curl;
            s = l.cache;
            A = l.Promise;
            y = l.core.i;
            var u, x, w;
            u = l.a().ha || {};
            x = n && n.createElement("div");
            w = function (g) {
                return"function" == typeof u[g] ? u[g] = u[g](q, n, x) : u[g]
            };
            w.add = function (g, l, n, q) {
                if (void 0 === u[g] || q)u[g] = l;
                if (n)return w(g)
            };
            u["dojo-loader"] = !1;
            s["dojo/_base/loader"] =
                0;
            "undefined" == typeof U && (v(C), U = C);
            l.core.i = function () {
                var g = y.apply(this, arguments);
                v(g.m);
                return g
            };
            return!0
        })
    })("object" == typeof global ? global : this.window || this.global, "object" == typeof document && document);
    define("curl/plugin/domReady", ["../domReady"], function (q) {
        return{load: function (n, l, v) {
            q(v)
        }}
    });
}).call(this);
