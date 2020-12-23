(this.webpackJsonp = this.webpackJsonp || []).push(
  [[3], {
    151: function (t, e, n) {
      "use strict";
      n.d(
        e,
        "a",
        (function () {
          return ur;
        }),
      );
      n(6);
      var r = n(152),
        o = n(77),
        i = n(174),
        a = n(78),
        s = n(83),
        u = n(0),
        c = n.n(u),
        l = function (t) {
          return "object" == typeof t && t.hasOwnProperty("current");
        },
        f = function () {
          function t() {
            this.subscriptions = new Set();
          }
          return t.prototype.add = function (t) {
            var e = this;
            return this.subscriptions.add(t), function () {
              e.subscriptions.delete(t);
            };
          },
            t.prototype.notify = function (t, e, n) {
              var o, i;
              if (this.subscriptions.size) {
                try {
                  for (
                    var a = Object(r.f)(this.subscriptions), s = a.next();
                    !s.done;
                    s = a.next()
                  ) {
                    (0, s.value)(t, e, n);
                  }
                } catch (u) {
                  o = { error: u };
                } finally {
                  try {
                    s && !s.done && (i = a.return) && i.call(a);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }
            },
            t.prototype.clear = function () {
              this.subscriptions.clear();
            },
            t;
        }(),
        d = function () {
          function t(t) {
            var e, n = this;
            this.timeDelta = 0,
              this.lastUpdated = 0,
              this.updateSubscribers = new f(),
              this.renderSubscribers = new f(),
              this.canTrackVelocity = !1,
              this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0),
                  n.prev = n.current,
                  n.current = t,
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  e && n.renderSubscribers.notify(n.current);
                var r = Object(o.c)(), i = r.delta, a = r.timestamp;
                n.lastUpdated !== a &&
                  (n.timeDelta = i,
                    n.lastUpdated = a,
                    o.b.postRender(n.scheduleVelocityCheck));
              },
              this.scheduleVelocityCheck = function () {
                return o.b.postRender(n.velocityCheck);
              },
              this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated && (n.prev = n.current);
              },
              this.current = t,
              this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)));
          }
          return t.prototype.onChange = function (t) {
            return this.updateSubscribers.add(t);
          },
            t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            },
            t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            },
            t.prototype.attach = function (t) {
              this.passiveEffect = t;
            },
            t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            },
            t.prototype.get = function () {
              return this.current;
            },
            t.prototype.getPrevious = function () {
              return this.prev;
            },
            t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Object(i.x)(
                  parseFloat(this.current) - parseFloat(this.prev),
                  this.timeDelta,
                )
                : 0;
            },
            t.prototype.start = function (t) {
              var e = this;
              return this.stop(),
                new Promise(
                  (function (n) {
                    e.stopAnimation = t(n);
                  }),
                ).then(
                  (function () {
                    return e.clearAnimation();
                  }),
                );
            },
            t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            },
            t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            },
            t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            },
            t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            },
            t;
        }();
      function p(t) {
        return new d(t);
      }
      var h = function () {
        function t(t, e) {
          var n = this;
          this.children = new Set(),
            this.baseTarget = {},
            this.latest = {},
            this.values = new Map(),
            this.valueSubscriptions = new Map(),
            this.config = {},
            this.isMounted = !1,
            this.update = function () {
              return n.config.onUpdate(n.latest);
            },
            this.triggerRender = function () {
              return n.render();
            },
            this.ref = function (t) {
              t ? n.mount(t) : n.unmount(),
                n.externalRef &&
                ("function" == typeof n.externalRef
                  ? n.externalRef(t)
                  : l(n.externalRef) && (n.externalRef.current = t));
            },
            this.parent = t,
            this.rootParent = t ? t.rootParent : this,
            this.treePath = t ? Object(r.e)(t.treePath, [t]) : [],
            this.depth = t ? t.depth + 1 : 0,
            this.externalRef = e;
        }
        return t.prototype.getVariantPayload = function () {
          return this.config.custom;
        },
          t.prototype.getVariant = function (t) {
            var e;
            return null === (e = this.config.variants) || void 0 === e
              ? void 0
              : e[t];
          },
          t.prototype.addVariantChild = function (t) {
            var e = this;
            return this.variantChildren || (this.variantChildren = new Set()),
              this.variantChildren.add(t),
              function () {
                return e.variantChildren.delete(t);
              };
          },
          t.prototype.addVariantChildOrder = function (t) {
            this.variantChildrenOrder ||
            (this.variantChildrenOrder = new Set()),
              this.variantChildrenOrder.add(t);
          },
          t.prototype.onAnimationStart = function () {
            var t, e;
            null === (e = (t = this.config).onAnimationStart) || void 0 === e ||
              e.call(t);
          },
          t.prototype.onAnimationComplete = function () {
            var t, e;
            this.isMounted &&
              (null === (e = (t = this.config).onAnimationComplete) ||
                void 0 === e || e.call(t));
          },
          t.prototype.getDefaultTransition = function () {
            return this.config.transition;
          },
          t.prototype.subscribe = function (t) {
            var e = this;
            return this.children.add(t), function () {
              return e.children.delete(t);
            };
          },
          t.prototype.hasValue = function (t) {
            return this.values.has(t);
          },
          t.prototype.addValue = function (t, e) {
            this.hasValue(t) && this.removeValue(t),
              this.values.set(t, e),
              this.setSingleStaticValue(t, e.get()),
              this.subscribeToValue(t, e);
          },
          t.prototype.removeValue = function (t) {
            var e;
            null === (e = this.valueSubscriptions.get(t)) || void 0 === e ||
            e(),
              this.valueSubscriptions.delete(t),
              this.values.delete(t),
              delete this.latest[t];
          },
          t.prototype.getValue = function (t, e) {
            var n = this.values.get(t);
            return void 0 === n && void 0 !== e &&
              (n = new d(e), this.addValue(t, n)),
              n;
          },
          t.prototype.forEachValue = function (t) {
            this.values.forEach(t);
          },
          t.prototype.getInstance = function () {
            return this.element;
          },
          t.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}), this.config = Object(r.a)({}, t);
          },
          t.prototype.getBaseValue = function (t, e) {
            return this.baseTarget[t];
          },
          t.prototype.setSingleStaticValue = function (t, e) {
            this.latest[t] = e;
          },
          t.prototype.setStaticValues = function (t, e) {
            if ("string" == typeof t)this.setSingleStaticValue(t, e);
            elsefor (var n in t)this.setSingleStaticValue(n, t[n]);
          },
          t.prototype.scheduleRender = function () {
            o.b.render(this.triggerRender, !1, !0);
          },
          t.prototype.scheduleUpdateLayoutDelta = function () {
            o.b.preRender(this.rootParent.updateLayoutDelta, !1, !0);
          },
          t.prototype.subscribeToValue = function (t, e) {
            var n = this,
              r = e.onChange(
                (function (e) {
                  n.setSingleStaticValue(t, e),
                    n.element && n.config.onUpdate &&
                    o.b.update(n.update, !1, !0);
                }),
              ),
              i = e.onRenderRequest(
                (function () {
                  n.element && n.scheduleRender();
                }),
              );
            this.valueSubscriptions.set(
              t,
              (function () {
                r(), i();
              }),
            );
          },
          t.prototype.mount = function (t) {
            Object(a.a)(
              !!t,
              "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef",
            ),
              this.parent &&
              (this.removeFromParent = this.parent.subscribe(this)),
              this.element = this.current = t;
          },
          t.prototype.unmount = function () {
            var t = this;
            this.forEachValue(
              (function (e, n) {
                return t.removeValue(n);
              }),
            ),
              o.a.update(this.update),
              o.a.render(this.render),
              this.removeFromParent && this.removeFromParent();
          },
          t;
      }();
      function v(t) {
        return t;
      }
      function m(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function g(t) {
        return { x: Object(r.a)({}, t.x), y: Object(r.a)({}, t.y) };
      }
      var y = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function b() {
        return { x: Object(r.a)({}, y), y: Object(r.a)({}, y) };
      }
      var x = Object(r.a)(Object(r.a)({}, s.g), { transform: Math.round }),
        j = {
          color: s.b,
          backgroundColor: s.b,
          outlineColor: s.b,
          fill: s.b,
          stroke: s.b,
          borderColor: s.b,
          borderTopColor: s.b,
          borderRightColor: s.b,
          borderBottomColor: s.b,
          borderLeftColor: s.b,
          borderWidth: s.j,
          borderTopWidth: s.j,
          borderRightWidth: s.j,
          borderBottomWidth: s.j,
          borderLeftWidth: s.j,
          borderRadius: s.j,
          radius: s.j,
          borderTopLeftRadius: s.j,
          borderTopRightRadius: s.j,
          borderBottomRightRadius: s.j,
          borderBottomLeftRadius: s.j,
          width: s.j,
          maxWidth: s.j,
          height: s.j,
          maxHeight: s.j,
          size: s.j,
          top: s.j,
          right: s.j,
          bottom: s.j,
          left: s.j,
          padding: s.j,
          paddingTop: s.j,
          paddingRight: s.j,
          paddingBottom: s.j,
          paddingLeft: s.j,
          margin: s.j,
          marginTop: s.j,
          marginRight: s.j,
          marginBottom: s.j,
          marginLeft: s.j,
          rotate: s.d,
          rotateX: s.d,
          rotateY: s.d,
          rotateZ: s.d,
          scale: s.l,
          scaleX: s.l,
          scaleY: s.l,
          scaleZ: s.l,
          skew: s.d,
          skewX: s.d,
          skewY: s.d,
          distance: s.j,
          translateX: s.j,
          translateY: s.j,
          translateZ: s.j,
          x: s.j,
          y: s.j,
          z: s.j,
          perspective: s.j,
          transformPerspective: s.j,
          opacity: s.a,
          originX: s.i,
          originY: s.i,
          originZ: s.j,
          zIndex: x,
          fillOpacity: s.a,
          strokeOpacity: s.a,
          numOctaves: x,
        },
        O = [s.g, s.j, s.h, s.d, s.n, s.m, {
          test: function (t) {
            return "auto" === t;
          },
          parse: function (t) {
            return t;
          },
        }],
        E = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        w = function (t) {
          return O.find(E(t));
        },
        C = Object(r.e)(O, [s.b, s.c]),
        P = function (t) {
          return C.find(E(t));
        },
        A = function (t) {
          return j[t];
        },
        S = function (t, e) {
          return e && "number" == typeof t ? e.transform(t) : t;
        },
        V = ["", "X", "Y", "Z"],
        T = ["transformPerspective", "x", "y", "z"];
      function B(t, e) {
        return T.indexOf(t) - T.indexOf(e);
      }
      ["perspective", "translate", "scale", "rotate", "skew"].forEach(
        (function (t) {
          V.forEach(
            (function (e) {
              var n = t + e;
              T.push(n);
            }),
          );
        }),
      );
      var L = new Set(T);
      function k(t) {
        return L.has(t);
      }
      var D = new Set(["originX", "originY", "originZ"]);
      function R(t) {
        return D.has(t);
      }
      var M = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function F(t, e, n) {
        var r = t.x,
          o = t.y,
          i = "translate3d(" + r.translate / e.x + "px, " + o.translate / e.y +
            "px, 0) ";
        if (n) {
          var a = n.rotate, s = n.rotateX, u = n.rotateY;
          a && (i += "rotate(" + a + ") "),
            s && (i += "rotateX(" + s + ") "),
            u && (i += "rotateY(" + u + ") ");
        }
        return i += "scale(" + r.scale + ", " + o.scale + ")",
          n || i !== U ? i : "";
      }
      var U = F(b(), { x: 1, y: 1 });
      function I(t) {
        return t.startsWith("--");
      }
      function H(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var Y = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function X(t, e, n) {
        void 0 === n && (n = 1),
          Object(a.a)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "' + t +
              '". This may indicate a circular fallback dependency.',
          );
        var o = Object(r.c)(
            function (t) {
              var e = Y.exec(t);
              if (!e) return [];
              var n = Object(r.c)(e, 3);
              return [n[1], n[2]];
            }(t),
            2,
          ),
          i = o[0],
          s = o[1];
        if (i) {
          var u = window.getComputedStyle(e).getPropertyValue(i);
          return u ? u.trim() : H(s) ? X(s, e, n + 1) : s;
        }
      }
      function W(t, e) {
        return t / (e.max - e.min) * 100;
      }
      var z = {
          process: function (t, e) {
            if ("string" == typeof t) {
              if (!s.j.test(t)) return t;
              t = parseFloat(t);
            }
            return W(t, e.x) + "% " + W(t, e.y) + "%";
          },
        },
        N = {
          borderRadius: Object(r.a)(
            Object(r.a)({}, z),
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            },
          ),
          borderTopLeftRadius: z,
          borderTopRightRadius: z,
          borderBottomLeftRadius: z,
          borderBottomRightRadius: z,
          boxShadow: {
            process: function (t, e, n, r) {
              var o = t, a = t.includes("var("), u = [];
              a && (t = t.replace(
                Y,
                (function (t) {
                  return u.push(t), "_$css";
                }),
              ));
              var c = s.c.parse(t);
              if (c.length > 5) return o;
              var l = s.c.createTransformer(t),
                f = "number" != typeof c[0]
                  ? 1
                  : 0,
                d = n.x.scale * r.x,
                p = n.y.scale * r.y;
              c[0 + f] /= d, c[1 + f] /= p;
              var h = Object(i.u)(d, p, .5);
              "number" == typeof c[2 + f] && (c[2 + f] /= h),
                "number" == typeof c[3 + f] && (c[3 + f] /= h);
              var v = l(c);
              if (a) {
                var m = 0;
                v = v.replace(
                  "_$css",
                  (function () {
                    var t = u[m];
                    return m++, t;
                  }),
                );
              }
              return v;
            },
          },
        };
      function G(t, e, n, r, o, i, a, s, u, c, l, f) {
        var d = a.enableHardwareAcceleration,
          p = a.transformTemplate,
          h = a.allowTransformNone;
        i.length = 0;
        var v = !1, m = !1, g = !0;
        for (var y in t) {
          var b = t[y], x = A(y), j = S(b, x);
          if (k(y)) {
            if (v = !0, r[y] = j, i.push(y), !g) continue;
            b !== (void 0 !== x.default ? x.default : 0) && (g = !1);
          } else if (R(y)) o[y] = j, m = !0;
          else if ("transform" !== y || "function" != typeof b) {
            var O = I(y) ? n : e;
            if (s && N[y]) {
              var E = N[y].process(b, f, u, l), w = N[y].applyTo;
              if (w) for (var C = w.length, P = 0; P < C; P++) O[w[P]] = E;
              else O[y] = E;
            } else O[y] = j;
          }
        }
        s
          ? (e.transform = F(c, l, v ? r : void 0),
            p && (e.transform = p(r, e.transform)),
            e.transformOrigin = function (t) {
              var e = t.x, n = t.y;
              return 100 * e.origin + "% " + 100 * n.origin + "% 0";
            }(c))
          : (v && (e.transform = function (t, e, n, r, o, i) {
            void 0 === o && (o = !0), void 0 === i && (i = !0);
            var a = "";
            e.sort(B);
            for (var s = !1, u = e.length, c = 0; c < u; c++) {
              var l = e[c];
              a += (M[l] || l) + "(" + t[l] + ") ", "z" === l && (s = !0);
            }
            return !s && o ? a += "translateZ(0)" : a = a.trim(),
              n ? a = n(t, r ? "" : a) : i && r && (a = "none"),
              a;
          }(r, i, p, g, d, h)),
            m && (e.transformOrigin = function (t) {
              var e = t.originX,
                n = void 0 === e
                  ? "50%"
                  : e,
                r = t.originY,
                o = void 0 === r ? "50%" : r,
                i = t.originZ;
              return n + " " + o + " " + (void 0 === i ? 0 : i);
            }(o)));
      }
      function Z(t, e) {
        t.min = e.min, t.max = e.max;
      }
      function K(t, e, n) {
        return n + e * (t - n);
      }
      function $(t, e, n, r, o) {
        return void 0 !== o && (t = K(t, o, r)), K(t, n, r) + e;
      }
      function _(t, e, n, r, o) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          t.min = $(t.min, e, n, r, o),
          t.max = $(t.max, e, n, r, o);
      }
      function q(t, e) {
        var n = e.x, r = e.y;
        _(t.x, n.translate, n.scale, n.originPoint),
          _(t.y, r.translate, r.scale, r.originPoint);
      }
      function J(t, e, n, o) {
        var a = Object(r.c)(o, 3), s = a[0], u = a[1], c = a[2];
        t.min = e.min, t.max = e.max;
        var l = void 0 !== n[c] ? n[c] : .5, f = Object(i.u)(e.min, e.max, l);
        _(t, n[s], n[u], f, n.scale);
      }
      var Q = ["x", "scaleX", "originX"], tt = ["y", "scaleY", "originY"];
      function et(t, e, n, r, o) {
        return t = K(t -= e, 1 / n, r), void 0 !== o && (t = K(t, 1 / o, r)), t;
      }
      function nt(t, e, n) {
        var o = Object(r.c)(n, 3), a = o[0], s = o[1], u = o[2];
        !function (t, e, n, r, o) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = .5);
          var a = Object(i.u)(t.min, t.max, r) - e;
          t.min = et(t.min, e, n, a, o), t.max = et(t.max, e, n, a, o);
        }(t, e[a], e[s], e[u], e.scale);
      }
      function rt(t, e, n) {
        return void 0 === e && (e = 0),
          void 0 === n && (n = .01),
          Object(i.n)(t, e) < n;
      }
      function ot(t) {
        return t.max - t.min;
      }
      function it(t, e) {
        var n, r = .5, o = ot(t), a = ot(e);
        return a > o
          ? r = Object(i.w)(e.min, e.max - o, t.min)
          : o > a && (r = Object(i.w)(t.min, t.max - a, e.min)),
          n = r,
          Object(i.l)(0, 1, n);
      }
      function at(t, e, n, r) {
        t.origin = void 0 === r ? it(e, n) : r,
          t.originPoint = Object(i.u)(e.min, e.max, t.origin),
          t.scale = ot(n) / ot(e),
          rt(t.scale, 1, 1e-4) && (t.scale = 1),
          t.translate = Object(i.u)(n.min, n.max, t.origin) - t.originPoint,
          rt(t.translate) && (t.translate = 0);
      }
      function st(t, e, n, r) {
        at(t.x, e.x, n.x, r), at(t.y, e.y, n.y, r);
      }
      function ut(t) {
        return [t("x"), t("y")];
      }
      function ct(t, e) {
        return m(function (t, e) {
          var n = t.top, r = t.left, o = t.bottom, i = t.right;
          void 0 === e && (e = v);
          var a = e({ x: r, y: n }), s = e({ x: i, y: o });
          return { top: a.y, left: a.x, bottom: s.y, right: s.x };
        }(t.getBoundingClientRect(), e));
      }
      var lt,
        ft = function (t) {
          return Array.isArray(t);
        },
        dt = new Set(
          ["width", "height", "top", "left", "right", "bottom", "x", "y"],
        ),
        pt = function (t) {
          return dt.has(t);
        },
        ht = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        vt = function (t) {
          return t === s.g || t === s.j;
        };
      !function (t) {
        t.width = "width",
          t.height = "height",
          t.left = "left",
          t.right = "right",
          t.top = "top",
          t.bottom = "bottom";
      }(lt || (lt = {}));
      var mt = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        gt = function (t, e) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return mt(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? mt(a[1], t) : 0;
          };
        },
        yt = new Set(["x", "y", "z"]),
        bt = T.filter(
          (function (t) {
            return !yt.has(t);
          }),
        );
      var xt = {
          width: function (t) {
            var e = t.x;
            return e.max - e.min;
          },
          height: function (t) {
            var e = t.y;
            return e.max - e.min;
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y, r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x, r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: gt(4, 13),
          y: gt(5, 14),
        },
        jt = function (t, e, n, o) {
          void 0 === n && (n = {}),
            void 0 === o && (o = {}),
            e = Object(r.a)({}, e),
            o = Object(r.a)({}, o);
          var i = Object.keys(e).filter(pt), u = [], c = !1, l = [];
          if (
            i.forEach(
              (function (r) {
                var i = t.getValue(r);
                if (t.hasValue(r)) {
                  var f, d = n[r], p = e[r], h = w(d);
                  if (ft(p)) {
                    for (
                      var v = p.length,
                        m = null === p[0]
                          ? 1
                          : 0;
                      m < v;
                      m++
                    ) {
                      f
                        ? Object(a.a)(
                          w(p[m]) === f,
                          "All keyframes must be of the same type",
                        )
                        : (f = w(p[m]),
                          Object(a.a)(
                            f === h || vt(h) && vt(f),
                            "Keyframes must be of the same dimension as the current value",
                          ));
                    }
                  } else f = w(p);
                  if (h !== f) {
                    if (vt(h) && vt(f)) {
                      var g = i.get();
                      "string" == typeof g && i.set(parseFloat(g)),
                        "string" == typeof p
                          ? e[r] = parseFloat(p)
                          : Array.isArray(p) && f === s.j &&
                            (e[r] = p.map(parseFloat));
                    } else {
                      (null == h
                          ? void 0
                          : h.transform) && (null == f
                            ? void 0
                            : f.transform) && (0 === d || 0 === p)
                        ? 0 === d
                          ? i.set(f.transform(d))
                          : e[r] = h.transform(p)
                        : (c || (u = function (t) {
                          var e = [];
                          return bt.forEach(
                            (function (n) {
                              var r = t.getValue(n);
                              void 0 !== r &&
                                (e.push([n, r.get()]),
                                  r.set(
                                    n.startsWith("scale")
                                      ? 1
                                      : 0,
                                  ));
                            }),
                          ),
                            e.length && t.render(),
                            e;
                        }(t),
                          c = !0),
                          l.push(r),
                          o[r] = void 0 !== o[r] ? o[r] : e[r],
                          ht(i, p));
                    }
                  }
                }
              }),
            ), l.length
          ) {
            var f = function (t, e, n) {
              var r = e.getBoundingBox(),
                o = e.getComputedStyle(),
                i = o.display,
                a = {
                  top: o.top,
                  left: o.left,
                  bottom: o.bottom,
                  right: o.right,
                  transform: o.transform,
                };
              "none" === i &&
              e.setStaticValues("display", t.display || "block"), e.render();
              var s = e.getBoundingBox();
              return n.forEach(
                (function (n) {
                  var i = e.getValue(n);
                  ht(i, xt[n](r, a)), t[n] = xt[n](s, o);
                }),
              ),
                t;
            }(e, t, l);
            return u.length && u.forEach(
              (function (e) {
                var n = Object(r.c)(e, 2), o = n[0], i = n[1];
                t.getValue(o).set(i);
              }),
            ),
              t.render(),
              { target: f, transitionEnd: o };
          }
          return { target: e, transitionEnd: o };
        };
      function Ot(t, e, n, r) {
        return function (t) {
            return Object.keys(t).some(pt);
          }(e)
          ? jt(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var Et = function (t, e, n, o) {
        var i = function (t, e, n) {
          var o, i = Object(r.d)(e, []), a = t.getInstance();
          if (!(a instanceof HTMLElement)) {
            return { target: i, transitionEnd: n };
          }
          for (
            var s in n && (n = Object(r.a)({}, n)),
              t.forEachValue(
                (function (t) {
                  var e = t.get();
                  if (H(e)) {
                    var n = X(e, a);
                    n && t.set(n);
                  }
                }),
              ),
              i
          ) {
            var u = i[s];
            if (H(u)) {
              var c = X(u, a);
              c &&
                (i[s] = c,
                  n && (null !== (o = n[s]) && void 0 !== o || (n[s] = u)));
            }
          }
          return { target: i, transitionEnd: n };
        }(t, e, o);
        return Ot(t, e = i.target, n, o = i.transitionEnd);
      };
      function wt(t) {
        return Array.isArray(t);
      }
      function Ct(t, e, n) {
        return "string" == typeof e && (e = t.getVariant(e)),
          "function" == typeof e
            ? e(
              null != n ? n : t.getVariantPayload(),
              function (t) {
                var e = {};
                return t.forEachValue(
                  (function (t, n) {
                    return e[n] = t.get();
                  }),
                ),
                  e;
              }(t),
              function (t) {
                var e = {};
                return t.forEachValue(
                  (function (t, n) {
                    return e[n] = t.getVelocity();
                  }),
                ),
                  e;
              }(t),
            )
            : e;
      }
      function Pt(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, p(n));
      }
      function At(t, e) {
        var n,
          o = Ct(t, e),
          i = o ? t.makeTargetAnimatable(o, !1) : {},
          a = i.transitionEnd,
          s = void 0 === a ? {} : a,
          u = (i.transition, Object(r.d)(i, ["transitionEnd", "transition"]));
        for (var c in u = Object(r.a)(Object(r.a)({}, u), s)) {
          Pt(
            t,
            c,
            (n = u[c], ft(n) ? n[n.length - 1] || 0 : n),
          );
        }
      }
      function St(t, e) {
        Object(r.e)(e).reverse().forEach(
          (function (n) {
            var r;
            At(t, t.getVariant(n)),
              null === (r = t.variantChildren) || void 0 === r ||
              r.forEach(
                (function (t) {
                  St(t, e);
                }),
              );
          }),
        );
      }
      function Vt(t, e) {
        return Array.isArray(e) ? St(t, e)
        : "string" == typeof e ? St(t, [e]) : void At(t, e);
      }
      function Tt(t, e, n) {
        var r,
          o,
          i,
          u = Object.keys(e).filter(
            (function (e) {
              return !t.hasValue(e);
            }),
          ),
          c = u.length;
        if (c) {
          for (var l = 0; l < c; l++) {
            var f = u[l], d = e[f], h = null;
            if (Array.isArray(d) && (h = d[0]), null === h) {
              var v = null !== (r = n[f]) && void 0 !== r ? r
              : t.readNativeValue(f);
              h = void 0 !== v ? v : e[f],
                Object(a.a)(
                  null !== h,
                  'No initial value for "' + f +
                    '" can be inferred. Ensure an initial value for "' + f +
                    '" is defined on the component.',
                );
            }
            "string" == typeof h && /^\-?\d*\.?\d+$/.test(h)
              ? h = parseFloat(h)
              : !P(h) && s.c.test(d) && (h = s.c.getAnimatableNone(d)),
              t.addValue(f, p(h)),
              null !== (o = (i = n)[f]) && void 0 !== o || (i[f] = h),
              t.baseTarget[f] = h;
          }
        }
      }
      function Bt(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Lt(t, e, n) {
        var r, o, i = {};
        for (var a in t) {
          i[a] = null !== (r = Bt(a, e)) && void 0 !== r ? r
          : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
        }
        return i;
      }
      var kt = function (t) {
          return t instanceof d;
        },
        Dt = function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.defaultConfig = {
              enableHardwareAcceleration: !0,
              allowTransformNone: !0,
            },
              e.style = {},
              e.reactStyle = {},
              e.vars = {},
              e.transform = {},
              e.transformOrigin = {},
              e.transformKeys = [],
              e.config = e.defaultConfig,
              e.isLayoutProjectionEnabled = !1,
              e.layoutUpdateListeners = new f(),
              e.layoutMeasureListeners = new f(),
              e.viewportBoxUpdateListeners = new f(),
              e.hasViewportBoxUpdated = !1,
              e.targetBoxFinal = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              },
              e.treeScale = { x: 1, y: 1 },
              e.delta = b(),
              e.deltaFinal = b(),
              e.deltaTransform = U,
              e.stopLayoutAxisAnimation = {
                x: function () {},
                y: function () {},
              },
              e.isTargetBoxLocked = !1,
              e.updateLayoutDelta = function () {
                e.isLayoutProjectionEnabled && e.box && e.updateLayoutDeltas(),
                  e.children.forEach(Rt);
              },
              e;
          }
          return Object(r.b)(e, t),
            e.prototype.removeValue = function (e) {
              t.prototype.removeValue.call(this, e),
                delete this.vars[e],
                delete this.style[e];
            },
            e.prototype.clean = function () {
              this.style = {}, this.vars = {}, this.transform = {};
            },
            e.prototype.updateConfig = function (t) {
              void 0 === t && (t = {}),
                this.config = Object(r.a)(
                  Object(r.a)({}, this.defaultConfig),
                  t,
                );
            },
            e.prototype.read = function (t) {
              var e = this.getComputedStyle();
              return (I(t) ? e.getPropertyValue(t) : e[t]) || 0;
            },
            e.prototype.addValue = function (e, n) {
              t.prototype.addValue.call(this, e, n),
                e.startsWith("rotate") && (this.layoutOrigin = .5);
            },
            e.prototype.readNativeValue = function (t) {
              if (k(t)) {
                var e = A(t);
                return e && e.default || 0;
              }
              return this.read(t);
            },
            e.prototype.getBaseValue = function (e, n) {
              var r, o = null === (r = n.style) || void 0 === r ? void 0 : r[e];
              return void 0 === o || kt(o)
                ? t.prototype.getBaseValue.call(this, e, n) : o;
            },
            e.prototype.makeTargetAnimatable = function (t, e) {
              void 0 === e && (e = !0);
              var n = t.transition,
                o = t.transitionEnd,
                i = Object(r.d)(t, ["transition", "transitionEnd"]),
                a = this.config.transformValues,
                s = Lt(i, n || {}, this);
              if (a && (o && (o = a(o)), i && (i = a(i)), s && (s = a(s))), e) {
                Tt(this, i, s);
                var u = Et(this, i, s, o);
                o = u.transitionEnd, i = u.target;
              }
              return Object(r.a)({ transition: n, transitionEnd: o }, i);
            },
            e.prototype.enableLayoutProjection = function () {
              this.isLayoutProjectionEnabled = !0;
            },
            e.prototype.hide = function () {
              !1 !== this.isVisible &&
                (this.isVisible = !1, this.scheduleRender());
            },
            e.prototype.show = function () {
              !0 !== this.isVisible &&
                (this.isVisible = !0, this.scheduleRender());
            },
            e.prototype.onLayoutUpdate = function (t) {
              return this.layoutUpdateListeners.add(t);
            },
            e.prototype.onLayoutMeasure = function (t) {
              return this.layoutMeasureListeners.add(t);
            },
            e.prototype.onViewportBoxUpdate = function (t) {
              return this.viewportBoxUpdateListeners.add(t);
            },
            e.prototype.layoutReady = function (t) {
              this.layoutUpdateListeners.notify(
                this.box,
                this.prevViewportBox || this.box,
                t,
              );
            },
            e.prototype.getBoundingBox = function () {
              var t = this.config.transformPagePoint;
              return ct(this.element, t);
            },
            e.prototype.getBoundingBoxWithoutTransforms = function () {
              var t, e, n = this.getBoundingBox();
              return t = n, e = this.latest, nt(t.x, e, Q), nt(t.y, e, tt), n;
            },
            e.prototype.getComputedStyle = function () {
              return window.getComputedStyle(this.element);
            },
            e.prototype.snapshotBoundingBox = function () {
              this.prevViewportBox = this.getBoundingBoxWithoutTransforms(),
                this.rebaseTargetBox(!1, this.prevViewportBox);
            },
            e.prototype.rebaseTargetBox = function (t, e) {
              var n = this;
              void 0 === t && (t = !1), void 0 === e && (e = this.box);
              var r = this.getAxisProgress(),
                o = r.x,
                i = r.y,
                a = this.box && !this.isTargetBoxLocked && !o.isAnimating() &&
                  !i.isAnimating();
              (t || a) && ut(
                (function (t) {
                  var r = e[t], o = r.min, i = r.max;
                  n.setAxisTarget(t, o, i);
                }),
              );
            },
            e.prototype.measureLayout = function () {
              var t = this;
              this.box = this.getBoundingBox(),
                this.boxCorrected = g(this.box),
                this.targetBox || (this.targetBox = g(this.box)),
                this.layoutMeasureListeners.notify(
                  this.box,
                  this.prevViewportBox || this.box,
                ),
                o.b.update(
                  (function () {
                    return t.rebaseTargetBox();
                  }),
                );
            },
            e.prototype.lockTargetBox = function () {
              this.isTargetBoxLocked = !0;
            },
            e.prototype.unlockTargetBox = function () {
              this.stopLayoutAnimation(), this.isTargetBoxLocked = !1;
            },
            e.prototype.resetTransform = function () {
              var t = this.config.transformTemplate;
              this.element.style.transform = t ? t({}, "") : "none",
                this.scheduleRender();
            },
            e.prototype.setAxisTarget = function (t, e, n) {
              var r = this.targetBox[t];
              r.min = e,
                r.max = n,
                this.hasViewportBoxUpdated = !0,
                this.rootParent.scheduleUpdateLayoutDelta();
            },
            e.prototype.getAxisProgress = function () {
              return this.axisProgress ||
                (this.axisProgress = { x: p(0), y: p(0) }),
                this.axisProgress;
            },
            e.prototype.startLayoutAxisAnimation = function (t, e) {
              var n,
                r = this,
                o = this.getAxisProgress()[t],
                i = this.targetBox[t],
                a = i.min,
                s = i.max - a;
              return o.clearListeners(),
                o.set(a),
                o.set(a),
                o.onChange(
                  (function (e) {
                    return r.setAxisTarget(t, e, e + s);
                  }),
                ),
                null === (n = this.animateMotionValue) || void 0 === n ? void 0
                : n.call(this, t, o, 0, e);
            },
            e.prototype.stopLayoutAnimation = function () {
              var t = this;
              ut(
                (function (e) {
                  return t.getAxisProgress()[e].stop();
                }),
              );
            },
            e.prototype.withoutTransform = function (t) {
              this.isLayoutProjectionEnabled && this.resetTransform(),
                this.parent ? this.parent.withoutTransform(t) : t(),
                this.isLayoutProjectionEnabled &&
                (this.element.style.transform = this.style.transform);
            },
            e.prototype.updateLayoutDeltas = function () {
              var t, e;
              t = this.boxCorrected, e = this.box, Z(t.x, e.x), Z(t.y, e.y);
              var n = this.treeScale.x, r = this.treeScale.y;
              !function (t, e, n) {
                var r = n.length;
                if (r) {
                  e.x = e.y = 1;
                  for (var o = 0; o < r; o++) {
                    var i = n[o].delta;
                    e.x *= i.x.scale, e.y *= i.y.scale, q(t, i);
                  }
                }
              }(this.boxCorrected, this.treeScale, this.treePath),
                st(
                  this.delta,
                  this.boxCorrected,
                  this.targetBox,
                  this.layoutOrigin,
                ),
                this.hasViewportBoxUpdated &&
                this.viewportBoxUpdateListeners.notify(
                  this.targetBox,
                  this.delta,
                ),
                this.hasViewportBoxUpdated = !1;
              var o = F(this.delta, this.treeScale);
              o === this.deltaTransform && n === this.treeScale.x &&
                r === this.treeScale.y || this.scheduleRender(),
                this.deltaTransform = o;
            },
            e.prototype.updateTransformDeltas = function () {
              var t, e, n;
              this.isLayoutProjectionEnabled && this.box &&
                (t = this.targetBoxFinal,
                  e = this.targetBox,
                  n = this.latest,
                  J(t.x, e.x, n, Q),
                  J(t.y, e.y, n, tt),
                  st(
                    this.deltaFinal,
                    this.boxCorrected,
                    this.targetBoxFinal,
                    this.layoutOrigin,
                  ));
            },
            e.prototype.build = function () {
              this.updateTransformDeltas(),
                void 0 !== this.isVisible &&
                (this.style.visibility = this.isVisible
                  ? "visible"
                  : "hidden"),
                G(
                  this.latest,
                  this.style,
                  this.vars,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal,
                );
            },
            e.prototype.render = function () {
              for (
                var t in this.build(),
                  Object.assign(this.element.style, this.style),
                  this.vars
              ) {
                this.element.style.setProperty(t, this.vars[t]);
              }
            },
            e;
        }(h),
        Rt = function (t) {
          return t.updateLayoutDelta();
        };
      function Mt(t) {
        var e = Object(u.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      function Ft(t, e, n) {
        return "string" == typeof t ? t : s.j.transform(e + n * t);
      }
      var Ut = function (t, e) {
          return s.j.transform(t * e);
        },
        It = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Ht = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var Yt = { x: 0, y: 0, width: 0, height: 0 };
      function Xt(t, e, n, o, i, a, s, u, c, l, f, d, p, h, v) {
        var m = t.attrX,
          g = t.attrY,
          y = t.originX,
          b = t.originY,
          x = t.pathLength,
          j = t.pathSpacing,
          O = void 0 === j ? 1 : j,
          E = t.pathOffset,
          w = void 0 === E ? 0 : E;
        return G(
          Object(r.d)(
            t,
            [
              "attrX",
              "attrY",
              "originX",
              "originY",
              "pathLength",
              "pathSpacing",
              "pathOffset",
            ],
          ),
          o,
          n,
          i,
          a,
          s,
          u,
          f,
          d,
          p,
          h,
          v,
        ),
          o.transform && (e.transform = o.transform, delete o.transform),
          (void 0 !== y || void 0 !== b || e.transform) &&
          (e.transformOrigin = function (t, e, n) {
            return Ft(e, t.x, t.width) + " " + Ft(n, t.y, t.height);
          }(c || Yt, void 0 !== y ? y : .5, void 0 !== b ? b : .5)),
          void 0 !== m && (o.x = m),
          void 0 !== g && (o.y = g),
          void 0 !== l && void 0 !== x && function (t, e, n, r, o, i) {
            void 0 === r && (r = 1),
              void 0 === o && (o = 0),
              void 0 === i && (i = !0);
            var a = i ? It : Ht;
            t[a.offset] = Ut(-o, e);
            var s = Ut(n, e), u = Ut(r, e);
            t[a.array] = s + " " + u;
          }(o, l, x, O, w, !1),
          o;
      }
      var Wt = new Set(
          [
            "baseFrequency",
            "diffuseConstant",
            "kernelMatrix",
            "kernelUnitLength",
            "keySplines",
            "keyTimes",
            "limitingConeAngle",
            "markerHeight",
            "markerWidth",
            "numOctaves",
            "targetX",
            "targetY",
            "surfaceScale",
            "specularConstant",
            "specularExponent",
            "stdDeviation",
            "tableValues",
            "viewBox",
          ],
        ),
        zt = /([a-z])([A-Z])/g,
        Nt = function (t) {
          return t.replace(zt, "$1-$2").toLowerCase();
        },
        Gt = function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.attrs = {},
              e.defaultConfig = { enableHardwareAcceleration: !1 },
              e.config = e.defaultConfig,
              e;
          }
          return Object(r.b)(e, t),
            e.prototype.mount = function (e) {
              t.prototype.mount.call(this, e), this.measure();
            },
            e.prototype.measure = function () {
              var t = this;
              try {
                this.dimensions = "function" == typeof this.element.getBBox
                  ? this.element.getBBox()
                  : this.element.getBoundingClientRect();
              } catch (e) {
                this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              "path" === this.element.tagName &&
              (this.totalPathLength = this.element.getTotalLength()),
                o.b.render(
                  (function () {
                    return t.render();
                  }),
                );
            },
            e.prototype.getBaseValue = function (e, n) {
              var r = n[e];
              return void 0 === r || kt(r)
                ? t.prototype.getBaseValue.call(this, e, n) : r;
            },
            e.prototype.clean = function () {
              t.prototype.clean.call(this), this.attrs = {};
            },
            e.prototype.read = function (t) {
              return t = Wt.has(t) ? t : Nt(t), this.element.getAttribute(t);
            },
            e.prototype.build = function () {
              this.updateTransformDeltas(),
                Xt(
                  this.latest,
                  this.style,
                  this.vars,
                  this.attrs,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.dimensions,
                  this.totalPathLength,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal,
                );
            },
            e.prototype.render = function () {
              for (var e in t.prototype.render.call(this), this.attrs) {
                this.element.setAttribute(Wt.has(e) ? e : Nt(e), this.attrs[e]);
              }
            },
            e;
        }(Dt);
      var Zt = new Set(
        [
          "animate",
          "circle",
          "clipPath",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "tspan",
          "use",
          "view",
        ],
      );
      function Kt(t) {
        return "string" == typeof t && Zt.has(t);
      }
      var $t = Object(u.createContext)(null),
        _t = Object(u.createContext)({ variantContext: {} });
      function qt() {
        return Object(u.useContext)(_t).variantContext;
      }
      function Jt() {
        return Object(u.useContext)(_t).visualElement;
      }
      var Qt = Object(u.createContext)(null),
        te = Object(u.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          features: [],
          isStatic: !1,
        });
      function ee(t) {
        return Object(u.useEffect)(
          (function () {
            return function () {
              return t();
            };
          }),
          [],
        );
      }
      function ne(t, e, n, r) {
        return t.addEventListener(e, n, r), function () {
          return t.removeEventListener(e, n, r);
        };
      }
      function re(t, e, n, r) {
        Object(u.useEffect)(
          (function () {
            var o = t.current;
            if (n && o) return ne(o, e, n, r);
          }),
          [t, e, n, r],
        );
      }
      function oe(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType) : t instanceof MouseEvent;
      }
      function ie(t) {
        return !!t.touches;
      }
      var ae = { pageX: 0, pageY: 0 };
      function se(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || ae;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function ue(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ce(t, e) {
        return void 0 === e && (e = "page"),
          { point: ie(t) ? se(t, e) : ue(t, e) };
      }
      function le(t) {
        return ce(t, "client");
      }
      var fe = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ce(e));
            };
          return e
            ? (n = r, function (t) {
              var e = t instanceof MouseEvent;
              (!e || e && 0 === t.button) && n(t);
            })
            : r;
        },
        de = "undefined" != typeof window,
        pe = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        he = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ve(t) {
        return de && null === window.onpointerdown ? t
        : de && null === window.ontouchstart ? he[t]
        : de && null === window.onmousedown ? pe[t] : t;
      }
      function me(t, e, n, r) {
        return ne(t, ve(e), fe(n, "pointerdown" === e), r);
      }
      function ge(t, e, n, r) {
        return re(t, ve(e), n && fe(n, "pointerdown" === e), r);
      }
      var ye = function (t) {
          return 1e3 * t;
        },
        be = function () {
          function t(t, e, n) {
            var a = this, s = (void 0 === n ? {} : n).transformPagePoint;
            if (
              this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = function () {
                  if (a.lastMoveEvent && a.lastMoveEventInfo) {
                    var t = Oe(a.lastMoveEventInfo, a.history),
                      e = null !== a.startEvent,
                      n = Object(i.n)(t.offset, { x: 0, y: 0 }) >= 3;
                    if (e || n) {
                      var s = t.point, u = Object(o.c)().timestamp;
                      a.history.push(
                        Object(r.a)(Object(r.a)({}, s), { timestamp: u }),
                      );
                      var c = a.handlers, l = c.onStart, f = c.onMove;
                      e ||
                      (l && l(a.lastMoveEvent, t),
                        a.startEvent = a.lastMoveEvent),
                        f && f(a.lastMoveEvent, t);
                    }
                  }
                },
                this.handlePointerMove = function (t, e) {
                  a.lastMoveEvent = t,
                    a.lastMoveEventInfo = xe(e, a.transformPagePoint),
                    oe(t) && 0 === t.buttons
                      ? a.handlePointerUp(t, e)
                      : o.b.update(a.updatePoint, !0);
                },
                this.handlePointerUp = function (t, e) {
                  a.end();
                  var n = a.handlers.onEnd;
                  if (n) {
                    var r = Oe(xe(e, a.transformPagePoint), a.history);
                    n && n(t, r);
                  }
                },
                !(ie(t) && t.touches.length > 1)
            ) {
              this.handlers = e, this.transformPagePoint = s;
              var u = xe(ce(t), this.transformPagePoint),
                c = u.point,
                l = Object(o.c)().timestamp;
              this.history = [
                Object(r.a)(Object(r.a)({}, c), { timestamp: l }),
              ];
              var f = e.onSessionStart;
              f && f(t, Oe(u, this.history)),
                this.removeListeners = Object(i.v)(
                  me(window, "pointermove", this.handlePointerMove),
                  me(window, "pointerup", this.handlePointerUp),
                  me(window, "pointercancel", this.handlePointerUp),
                );
            }
          }
          return t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          },
            t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                o.a.update(this.updatePoint);
            },
            t;
        }();
      function xe(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function je(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function Oe(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: je(n, we(e)),
          offset: je(n, Ee(e)),
          velocity: Ce(e, .1),
        };
      }
      function Ee(t) {
        return t[0];
      }
      function we(t) {
        return t[t.length - 1];
      }
      function Ce(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, o = we(t);
          n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > ye(e)));
        ) {
          n--;
        }
        if (!r) return { x: 0, y: 0 };
        var i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function Pe(t) {
        var e = null;
        return function () {
          return null === e && (e = t, function () {
            e = null;
          });
        };
      }
      var Ae = Pe("dragHorizontal"), Se = Pe("dragVertical");
      function Ve(t) {
        var e = !1;
        if ("y" === t) e = Se();
        else if ("x" === t) e = Ae();
        else {
          var n = Ae(), r = Se();
          n && r ? e = function () {
            n(), r();
          } : (n && n(), r && r());
        }
        return e;
      }
      var Te = {
          linear: i.t,
          easeIn: i.o,
          easeInOut: i.p,
          easeOut: i.q,
          circIn: i.i,
          circInOut: i.j,
          circOut: i.k,
          backIn: i.c,
          backInOut: i.d,
          backOut: i.e,
          anticipate: i.b,
          bounceIn: i.f,
          bounceInOut: i.g,
          bounceOut: i.h,
        },
        Be = function (t) {
          if (Array.isArray(t)) {
            Object(a.a)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            var e = Object(r.c)(t, 4), n = e[0], o = e[1], s = e[2], u = e[3];
            return Object(i.m)(n, o, s, u);
          }
          return "string" == typeof t
            ? (Object(a.a)(void 0 !== Te[t], "Invalid easing type '" + t + "'"),
              Te[t])
            : t;
        },
        Le = function (t, e) {
          return "zIndex" !== t &&
            (!("number" != typeof e && !Array.isArray(e)) ||
              !("string" != typeof e || !s.c.test(e) || e.startsWith("url(")));
        },
        ke = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: .5,
            restSpeed: 10,
          };
        },
        De = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 100 : 30,
            restDelta: .01,
            restSpeed: 10,
          };
        },
        Re = function () {
          return { type: "keyframes", ease: "linear", duration: .3 };
        },
        Me = function (t) {
          return { type: "keyframes", duration: .8, values: t };
        },
        Fe = {
          x: ke,
          y: ke,
          z: ke,
          rotate: ke,
          rotateX: ke,
          rotateY: ke,
          rotateZ: ke,
          scaleX: De,
          scaleY: De,
          scale: De,
          opacity: Re,
          backgroundColor: Re,
          color: Re,
          default: De,
        };
      var Ue = !1;
      function Ie(t) {
        var e = t.ease,
          n = t.times,
          o = t.yoyo,
          i = t.flip,
          s = t.loop,
          u = Object(r.d)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          c = Object(r.a)({}, u);
        return n && (c.offset = n),
          u.duration && (c.duration = ye(u.duration)),
          u.repeatDelay && (c.repeatDelay = ye(u.repeatDelay)),
          e && (c.ease = function (t) {
              return Array.isArray(t) && "number" != typeof t[0];
            }(e)
            ? e.map(Be)
            : Be(e)),
          "tween" === u.type && (c.type = "keyframes"),
          (o || s || i) &&
          (Object(a.b)(
            !Ue,
            "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.",
          ),
            Ue = !0,
            o ? c.repeatType = "reverse" : s
              ? c.repeatType = "loop"
              : i && (c.repeatType = "mirror"),
            c.repeat = s || o || i || u.repeat),
          "spring" !== u.type && (c.type = "keyframes"),
          c;
      }
      function He(t, e, n) {
        var o, i, a, s;
        return Array.isArray(e.to) &&
          (null !== (o = t.duration) && void 0 !== o || (t.duration = .8)),
          function (t) {
            Array.isArray(t.to) && null === t.to[0] &&
              (t.to = Object(r.e)(t.to), t.to[0] = t.from);
          }(e),
          function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = Object(r.d)(
              t,
              [
                "when",
                "delay",
                "delayChildren",
                "staggerChildren",
                "staggerDirection",
                "repeat",
                "repeatType",
                "repeatDelay",
                "from",
              ],
            );
            return !!Object.keys(e).length;
          }(t) ||
          (t = Object(r.a)(
            Object(r.a)({}, t),
            (i = n,
              a = e.to,
              s = ft(a) ? Me : Fe[i] || Fe.default,
              Object(r.a)({ to: a }, s(a))),
          )),
          Object(r.a)(Object(r.a)({}, e), Ie(t));
      }
      function Ye(t, e, n, o) {
        return void 0 === o && (o = {}),
          e.start(
            (function (u) {
              var c,
                l,
                f = function (t, e, n, o, u) {
                  var c,
                    l = function (t, e) {
                      return t[e] || t.default || t;
                    }(o, t),
                    f = null !== (c = l.from) && void 0 !== c ? c : e.get(),
                    d = Le(t, n);
                  "none" === f && d && "string" == typeof n &&
                    (f = s.c.getAnimatableNone(n));
                  var p = Le(t, f);
                  return Object(a.b)(
                    p === d,
                    "You are trying to animate " + t + ' from "' + f +
                      '" to "' + n + '". ' + f +
                      " is not an animatable value - to enable this animation set " +
                      f + " to a value animatable to " + n +
                      " via the `style` property.",
                  ),
                    p && d && !1 !== l.type
                      ? function () {
                        var o = {
                          from: f,
                          to: n,
                          velocity: e.getVelocity(),
                          onComplete: u,
                          onUpdate: function (t) {
                            return e.set(t);
                          },
                        };
                        return "inertia" === l.type || "decay" === l.type
                          ? Object(i.r)(Object(r.a)(Object(r.a)({}, o), l))
                          : Object(i.a)(
                            Object(r.a)(
                              Object(r.a)({}, He(l, o, t)),
                              {
                                onUpdate: function (t) {
                                  var e;
                                  o.onUpdate(t),
                                    null === (e = l.onUpdate) || void 0 === e ||
                                    e.call(l, t);
                                },
                                onComplete: function () {
                                  var t;
                                  o.onComplete(),
                                    null === (t = l.onComplete) ||
                                    void 0 === t || t.call(l);
                                },
                              },
                            ),
                          );
                      }
                      : function () {
                        var t;
                        return e.set(n),
                          u(),
                          null === (t = null == l ? void 0 : l.onComplete) ||
                          void 0 === t || t.call(l),
                          { stop: function () {} };
                      };
                }(t, e, n, o, u),
                d = function (t, e) {
                  var n, r, o, i, a;
                  return null !==
                        (a =
                          null !==
                              (i =
                                null !==
                                    (r = null === (n = t[e]) || void 0 === n
                                      ? void 0
                                      : n.delay) && void 0 !== r
                                  ? r
                                  : null === (o = t.default) || void 0 === o
                                  ? void 0
                                  : o.delay) && void 0 !== i
                            ? i
                            : t.delay) && void 0 !== a
                    ? a
                    : 0;
                }(o, t),
                p = function () {
                  return l = f();
                };
              return d ? c = setTimeout(p, ye(d)) : p(), function () {
                clearTimeout(c), null == l || l.stop();
              };
            }),
          );
      }
      function Xe(t, e, n) {
        var r;
        if (t.onAnimationStart(), Array.isArray(e)) {
          var o = e.map(
            (function (e) {
              return We(t, e, n);
            }),
          );
          r = Promise.all(o);
        } else r = "string" == typeof e ? We(t, e, n) : ze(t, e, n);
        return r.then(
          (function () {
            return t.onAnimationComplete();
          }),
        );
      }
      function We(t, e, n) {
        var o;
        void 0 === n && (n = {});
        var i = Ct(t, e, n.custom),
          a = (i || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = i
            ? function () {
              return ze(t, i, n);
            }
            : function () {
              return Promise.resolve();
            },
          c = (null === (o = t.variantChildrenOrder) || void 0 === o
              ? void 0
              : o.size)
            ? function (o) {
              void 0 === o && (o = 0);
              var i = s.delayChildren,
                a = void 0 === i ? 0 : i,
                u = s.staggerChildren,
                c = s.staggerDirection;
              return function (t, e, n, o, i, a) {
                void 0 === n && (n = 0);
                void 0 === o && (o = 0);
                void 0 === i && (i = 1);
                var s = [],
                  u = (t.variantChildrenOrder.size - 1) * o,
                  c = 1 === i
                    ? function (t) {
                      return void 0 === t && (t = 0), t * o;
                    }
                    : function (t) {
                      return void 0 === t && (t = 0), u - t * o;
                    };
                return Array.from(t.variantChildrenOrder).forEach(
                  (function (t, o) {
                    var i = We(
                      t,
                      e,
                      Object(r.a)(Object(r.a)({}, a), { delay: n + c(o) }),
                    );
                    s.push(i);
                  }),
                ),
                  Promise.all(s);
              }(t, e, a + o, u, c, n);
            }
            : function () {
              return Promise.resolve();
            },
          l = s.when;
        if (l) {
          var f = Object(r.c)("beforeChildren" === l ? [u, c] : [c, u], 2),
            d = f[0],
            p = f[1];
          return d().then(p);
        }
        return Promise.all([u(), c(n.delay)]);
      }
      function ze(t, e, n) {
        var o,
          i = void 0 === n ? {} : n,
          a = i.delay,
          s = void 0 === a ? 0 : a,
          u = i.transitionOverride,
          c = i.type,
          l = t.makeTargetAnimatable(e),
          f = l.transition,
          d = void 0 === f ? t.getDefaultTransition() : f,
          p = l.transitionEnd,
          h = Object(r.d)(l, ["transition", "transitionEnd"]);
        u && (d = u);
        var v = [],
          m = c && (null === (o = t.animationState) || void 0 === o
            ? void 0
            : o.getProtectedKeys(c));
        for (var g in h) {
          var y = t.getValue(g), b = h[g];
          if (y && void 0 !== b && void 0 === (null == m ? void 0 : m[g])) {
            var x = Ye(g, y, b, Object(r.a)({ delay: s }, d));
            v.push(x);
          }
        }
        return Promise.all(v).then(
          (function () {
            p && At(t, p);
          }),
        );
      }
      var Ne,
        Ge = function () {
          function t() {
            this.hasMounted = !1,
              this.pendingAnimations = [],
              this.subscribers = new Set();
          }
          return t.prototype.subscribe = function (t) {
            var e = this;
            return this.subscribers.add(t), function () {
              return e.subscribers.delete(t);
            };
          },
            t.prototype.start = function (t, e) {
              var n = this;
              if (this.hasMounted) {
                var r = [];
                return this.subscribers.forEach(
                  (function (n) {
                    r.push(Xe(n, t, { transitionOverride: e }));
                  }),
                ),
                  Promise.all(r);
              }
              return new Promise(
                (function (r) {
                  n.pendingAnimations.push({ animation: [t, e], resolve: r });
                }),
              );
            },
            t.prototype.set = function (t) {
              return Object(a.a)(
                this.hasMounted,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              ),
                this.subscribers.forEach(
                  (function (e) {
                    Vt(e, t);
                  }),
                );
            },
            t.prototype.stop = function () {
              this.subscribers.forEach(
                (function (t) {
                  !function (t) {
                    t.forEachValue(
                      (function (t) {
                        return t.stop();
                      }),
                    );
                  }(t);
                }),
              );
            },
            t.prototype.mount = function () {
              var t = this;
              this.hasMounted = !0,
                this.pendingAnimations.forEach(
                  (function (e) {
                    var n = e.animation, o = e.resolve;
                    t.start.apply(t, Object(r.e)(n)).then(o);
                  }),
                );
            },
            t.prototype.unmount = function () {
              this.hasMounted = !1, this.stop();
            },
            t;
        }();
      !function (t) {
        t.Animate = "animate",
          t.Hover = "whileHover",
          t.Tap = "whileTap",
          t.Drag = "whileDrag",
          t.Focus = "whileFocus",
          t.Exit = "exit";
      }(Ne || (Ne = {}));
      var Ze = [Ne.Animate, Ne.Hover, Ne.Tap, Ne.Drag, Ne.Focus, Ne.Exit],
        Ke = Object(r.e)(Ze).reverse(),
        $e = Ze.length;
      function _e(t) {
        var e,
          n,
          o,
          i = function (t) {
            return function (e) {
              return Promise.all(e.map(
                (function (e) {
                  var n = e.animation, r = e.options;
                  return Xe(t, n, r);
                }),
              ));
            };
          }(t),
          a =
            ((e = {})[Ne.Animate] = qe(!0),
              e[Ne.Hover] = qe(),
              e[Ne.Tap] = qe(),
              e[Ne.Drag] = qe(),
              e[Ne.Focus] = qe(),
              e[Ne.Exit] = qe(),
              e),
          s = !0,
          u = function (e, n) {
            var o = Ct(t, n);
            if (o) {
              o.transition;
              var i = o.transitionEnd,
                a = Object(r.d)(o, ["transition", "transitionEnd"]);
              e = Object(r.a)(Object(r.a)(Object(r.a)({}, e), a), i);
            }
            return e;
          };
        function c(e, c, l, f) {
          void 0 === c && (c = {}), n = e, o = c;
          var d = [], p = new Set(), h = {};
          e.variants &&
            t.updateConfig(
              Object(r.a)(Object(r.a)({}, t.config), { variants: e.variants }),
            );
          for (
            var v = 1 / 0,
              m = function (n) {
                var o,
                  i = Ke[n],
                  m = a[i],
                  g = null !== (w = e[i]) && void 0 !== w ? w : c[i],
                  y = "string" == typeof (o = g) || wt(o),
                  b = i === f ? m.isActive : null;
                !1 === b && (v = n);
                var x = g === c[i] && y;
                if (
                  x && s && t.manuallyAnimateOnMount && (x = !1),
                    s && i === Ne.Animate && t.prevSnapshot &&
                    (s = !1, m.prevResolvedValues = t.prevSnapshot),
                    m.protectedKeys = Object(r.a)({}, h),
                    !m.isActive && null === b || !g && !m.prevProp ||
                    g instanceof Ge || "boolean" == typeof g
                ) {
                  return "continue";
                }
                var j = function (t, e) {
                    if ("string" == typeof e) return e !== t;
                    if (wt(e)) {
                      return !function (t, e) {
                        if (!Array.isArray(e)) return !1;
                        var n = e.length;
                        if (n !== t.length) {
                          return !1;
                        }
                        for (var r = 0; r < n; r++) {
                          if (e[r] !== t[r]) return !1;
                        }
                        return !0;
                      }(e, t);
                    }
                    return !1;
                  }(m.prevProp, g) ||
                    i === f && m.isActive && !x && y || n > v && y,
                  O = Array.isArray(g) ? g : [g],
                  E = O.reduce(u, {});
                !1 === b && (E = {});
                var w = m.prevResolvedValues,
                  C = void 0 === w ? {} : w,
                  P = Object(r.a)(Object(r.a)({}, C), E);
                for (var A in P) {
                  var S = E[A], V = C[A];
                  h.hasOwnProperty(A) || (S !== V
                    ? void 0 !== S ? (j = !0, p.delete(A)) : p.add(A)
                    : void 0 !== S && p.has(A)
                    ? (j = !0, p.delete(A))
                    : m.protectedKeys[A] = !0);
                }
                m.prevProp = g,
                  m.prevResolvedValues = E,
                  m.isActive && (h = Object(r.a)(Object(r.a)({}, h), E)),
                  j && !x && d.push.apply(
                    d,
                    Object(r.e)(O.map(
                      (function (t) {
                        return {
                          animation: t,
                          options: Object(r.a)({ type: i }, l),
                        };
                      }),
                    )),
                  );
              },
              g = 0;
            g < $e;
            g++
          ) {
            m(g);
          }
          if (p.size) {
            var y = {};
            p.forEach(
              (function (n) {
                var r = t.getBaseValue(n, e);
                void 0 !== r && (y[n] = r);
              }),
            ), d.push({ animation: y });
          }
          var b = Boolean(d.length);
          return s && !1 === e.initial && !t.manuallyAnimateOnMount && (b = !1),
            s = !1,
            b ? i(d) : Promise.resolve();
        }
        return {
          getProtectedKeys: function (t) {
            return a[t].protectedKeys;
          },
          setProps: c,
          setActive: function (e, r, i) {
            var s;
            return a[e].isActive === r ? Promise.resolve()
            : (null === (s = t.variantChildrenOrder) || void 0 === s ||
              s.forEach(
                (function (t) {
                  var n;
                  return null === (n = t.animationState) || void 0 === n
                    ? void 0
                    : n.setActive(e, r);
                }),
              ),
              a[e].isActive = r,
              c(n, o, i, e));
          },
          setAnimateFunction: function (e) {
            i = e(t);
          },
        };
      }
      function qe(t) {
        return void 0 === t && (t = !1),
          { isActive: t, protectedKeys: {}, prevResolvedValues: {} };
      }
      var Je = function (t) {
        return function (e, n) {
          oe(e) && t(e, n);
        };
      };
      function Qe(t, e) {
        var n, r, o, a, s, c, l, f, d, p;
        r = e,
          o = (n = t).onPan,
          a = n.onPanStart,
          s = n.onPanEnd,
          c = n.onPanSessionStart,
          l = o || a || s || c,
          f = Object(u.useRef)(null),
          d = Object(u.useContext)(te).transformPagePoint,
          p = {
            onSessionStart: c,
            onStart: a,
            onMove: o,
            onEnd: function (t, e) {
              f.current = null, s && s(t, e);
            },
          },
          Object(u.useEffect)(
            (function () {
              null !== f.current && f.current.updateHandlers(p);
            }),
          ),
          ge(
            r,
            "pointerdown",
            l && function (t) {
              f.current = new be(t, p, { transformPagePoint: d });
            },
          ),
          ee(
            (function () {
              return f.current && f.current.end();
            }),
          ),
          function (t, e) {
            var n = t.onTap,
              r = t.onTapStart,
              o = t.onTapCancel,
              a = t.whileTap,
              s = n || r || o || a,
              c = Object(u.useRef)(!1),
              l = Object(u.useRef)(null);
            function f() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                l.current = null;
            }
            var d = Object(u.useRef)(null);
            d.current = function (t, r) {
              var i, a = e.getInstance();
              if (f(), c.current && a) {
                c.current = !1,
                  null === (i = e.animationState) || void 0 === i ||
                  i.setActive(Ne.Tap, !1);
                var s = Ve(!0);
                s && (s(),
                  !function t(e, n) {
                      return !!n && (e === n || t(e, n.parentElement));
                    }(a, t.target)
                    ? null == o || o(t, r)
                    : null == n || n(t, r));
              }
            },
              ge(
                e,
                "pointerdown",
                s
                  ? function (t, n) {
                    var o;
                    f(),
                      l.current = Object(i.v)(
                        me(
                          window,
                          "pointerup",
                          (function (t, e) {
                            var n;
                            return null === (n = d.current) || void 0 === n
                              ? void 0
                              : n.call(d, t, e);
                          }),
                        ),
                        me(
                          window,
                          "pointercancel",
                          (function (t, e) {
                            var n;
                            return null === (n = d.current) || void 0 === n
                              ? void 0 : n.call(d, t, e);
                          }),
                        ),
                      ),
                      e.getInstance() && !c.current &&
                      (c.current = !0,
                        null == r || r(t, n),
                        null === (o = e.animationState) || void 0 === o ||
                        o.setActive(Ne.Tap, !0));
                  }
                  : void 0,
              ),
              ee(f);
          }(t, e),
          function (t, e) {
            var n = t.onHoverStart,
              r = t.onHoverEnd,
              o = t.whileHover,
              i = Je(
                (function (t, r) {
                  var o;
                  null == n || n(t, r),
                    null === (o = e.animationState) || void 0 === o ||
                    o.setActive(Ne.Hover, !0);
                }),
              ),
              a = Je(
                (function (t, n) {
                  var o;
                  null == r || r(t, n),
                    null === (o = e.animationState) || void 0 === o ||
                    o.setActive(Ne.Hover, !1);
                }),
              );
            ge(e, "pointerenter", n || o ? i : void 0),
              ge(e, "pointerleave", r || o ? a : void 0);
          }(t, e),
          function (t, e) {
            var n = t.whileFocus;
            re(
              e,
              "focus",
              n
                ? function () {
                  var t;
                  null === (t = e.animationState) || void 0 === t ||
                    t.setActive(Ne.Focus, !0);
                }
                : void 0,
            ),
              re(
                e,
                "blur",
                n
                  ? function () {
                    var t;
                    null === (t = e.animationState) || void 0 === t ||
                      t.setActive(Ne.Focus, !1);
                  }
                  : void 0,
              );
          }(t, e);
      }
      var tn = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        en = [
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onPanSessionStart",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "onHoverStart",
          "onHoverEnd",
          "whileFocus",
          "whileTap",
          "whileHover",
        ],
        nn = tn(
          (function (t) {
            var e = t.visualElement;
            Qe(Object(r.d)(t, ["visualElement"]), e);
          }),
        ),
        rn = {
          key: "gestures",
          shouldRender: function (t) {
            return en.some(
              (function (e) {
                return t.hasOwnProperty(e);
              }),
            );
          },
          getComponent: function () {
            return nn;
          },
        },
        on = new Set(
          Object(r.e)(
            [
              "initial",
              "animate",
              "exit",
              "style",
              "variants",
              "transition",
              "transformTemplate",
              "transformValues",
              "custom",
              "inherit",
              "layout",
              "layoutId",
              "onLayoutAnimationComplete",
              "onViewportBoxUpdate",
              "onAnimationStart",
              "onAnimationComplete",
              "onUpdate",
              "onDragStart",
              "onDrag",
              "onDragEnd",
              "onMeasureDragConstraints",
              "onDirectionLock",
              "onDragTransitionEnd",
              "drag",
              "dragControls",
              "dragListener",
              "dragConstraints",
              "dragDirectionLock",
              "_dragX",
              "_dragY",
              "dragElastic",
              "dragMomentum",
              "dragPropagation",
              "dragTransition",
              "whileDrag",
            ],
            en,
          ),
        );
      function an(t) {
        return on.has(t);
      }
      var sn = function (t) {
        return !an(t);
      };
      try {
        var un = n(175).default;
        sn = function (t) {
          return t.startsWith("on") ? !an(t) : un(t);
        };
      } catch (dr) {}
      function cn(t, e) {
        var n = e.layout, r = e.layoutId;
        return k(t) || R(t) || (n || void 0 !== r) && !!N[t];
      }
      function ln(t, e, n, r, o) {
        for (var i in void 0 === r && (r = !1), r && (t.reactStyle = {}), n) {
          var a = n[i], s = !1;
          if (kt(a)) pn.has(i) || (t.addValue(i, a), s = !0);
          else if (cn(i, o)) {
            if (t.hasValue(i)) {
              if (a !== e[i]) {if (kt(e[i])) t.addValue(i, p(a));
                else t.getValue(i).set(a);}
            } else t.addValue(i, p(a));
            s = !0;
          } else r && (t.reactStyle[i] = a);
          s && (e[i] = a);
        }
      }
      var fn,
        dn,
        pn = new Set([]),
        hn = function () {
          return {};
        };
      !function (t) {
        t[t.Entering = 0] = "Entering",
          t[t.Present = 1] = "Present",
          t[t.Exiting = 2] = "Exiting";
      }(fn || (fn = {})),
        function (t) {
          t[t.Hide = 0] = "Hide", t[t.Show = 1] = "Show";
        }(dn || (dn = {}));
      var vn = {
          measureLayout: function (t) {
            return t.measureLayout();
          },
          layoutReady: function (t) {
            return t.layoutReady();
          },
        },
        mn = function (t, e) {
          return t.depth - e.depth;
        };
      function gn() {
        var t = new Set();
        return {
          add: function (e) {
            return t.add(e);
          },
          flush: function (e) {
            var n = void 0 === e ? vn : e,
              r = n.measureLayout,
              o = n.layoutReady,
              i = n.parent,
              a = Array.from(t).sort(mn),
              s = function () {
                a.forEach(
                  (function (t) {
                    return t.resetTransform();
                  }),
                ), a.forEach(r);
              };
            i ? i.withoutTransform(s) : s(),
              a.forEach(o),
              a.forEach(
                (function (t) {
                  t.isPresent && (t.presence = fn.Present);
                }),
              ),
              t.clear();
          },
        };
      }
      function yn(t) {
        return !!t.forceUpdate;
      }
      var bn = Object(u.createContext)(gn()),
        xn = Object(u.createContext)(gn()),
        jn = "undefined" != typeof window ? u.useLayoutEffect : u.useEffect;
      function On() {
        var t = Object(u.useContext)($t);
        if (null === t) return [!0, null];
        var e = t.isPresent, n = t.onExitComplete, r = t.register, o = Pn();
        Object(u.useEffect)(
          (function () {
            return r(o);
          }),
          [],
        );
        return !e && n
          ? [!1, function () {
            return null == n ? void 0 : n(o);
          }]
          : [!0];
      }
      function En(t) {
        return null === t || t.isPresent;
      }
      var wn = 0,
        Cn = function () {
          return wn++;
        },
        Pn = function () {
          return Mt(Cn);
        };
      function An(t, e) {
        void 0 === e && (e = !1);
        var n = Object(u.useRef)(!0);
        (!e || e && n.current) && t(), n.current = !1;
      }
      function Sn(t) {
        var e = t.animate, n = t.variants, r = t.inherit;
        return null != r ? r : !!n && !e;
      }
      function Vn(t, e, n) {
        var r,
          o,
          i,
          a = qt(),
          s = Object(u.useContext)($t),
          c = Sn(e),
          l = [],
          f = {},
          d = !1;
        (function (t) {
          var e;
          return "function" == typeof (null === (e = t.animate) || void 0 === e
                ? void 0
                : e.start) ||
            Ln(t.animate) || Ln(t.whileHover) || Ln(t.whileDrag) ||
            Ln(t.whileTap) || Ln(t.whileFocus) || Ln(t.exit);
        })(e) && (d = !0, a = {});
        for (var p = d || e.variants, h = 0; h < Bn; h++) {
          var v = Tn[h], m = e[v], g = a[v];
          Ln(m) || !1 === m
            ? (f[v] = m, l.push(m))
            : ((Ln(g) || !1 === g) && (f[v] = g), l.push(null)),
            l.push(Ln(g) ? g : null);
        }
        var y = null !== (r = e.animate) && void 0 !== r ? r : f.animate,
          b = e.initial;
        void 0 !== b || !Ln(y) && !1 === f.initial || (b = f.initial),
          !1 === (null == s ? void 0 : s.initial) && (b = f.initial = !1),
          f.parent = p ? t : a.parent,
          An(
            (function () {
              var e,
                n = !1 === b
                  ? y
                  : b;
              n && "boolean" != typeof n &&
                ("object" != typeof (e = n) || "function" != typeof e.start) &&
                Vt(t, n);
            }),
            !n,
          ),
          An(
            (function () {
              t.forEachValue(
                (function (e, n) {
                  t.baseTarget[n] = e.get();
                }),
              );
            }),
            !0,
          );
        var x,
          j = Object(u.useMemo)(
            (function () {
              return f;
            }),
            l,
          );
        return p && c && !d &&
          (x = null === (o = a.parent) || void 0 === o
            ? void 0
            : o.addVariantChild(t),
            t.inheritsVariants = !0),
          !d && c && (null === (i = t.parent) || void 0 === i
            ? void 0
            : i.isMounted) &&
          !1 !== b && y && (t.manuallyAnimateOnMount = !0),
          Object(u.useEffect)(
            (function () {
              return t.isMounted = !0, function () {
                t.isMounted = !1, null == x || x();
              };
            }),
            [],
          ),
          jn(
            (function () {
              var e;
              En(s) &&
                (null === (e = t.variantChildrenOrder) || void 0 === e ||
                  e.clear());
            }),
          ),
          Object(u.useEffect)(
            (function () {
              var e;
              p &&
                (null === (e = a.parent) || void 0 === e ||
                  e.addVariantChildOrder(t));
            }),
          ),
          j;
      }
      var Tn = Object(r.e)(["initial"], Ze), Bn = Tn.length;
      function Ln(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function kn(t, e) {
        var n = e.defaultFeatures, o = e.useVisualElement, i = e.useRender;
        return Object(u.forwardRef)(
          (function (e, a) {
            var s = Object(u.useContext)(te).isStatic, c = o(t, e, s, a);
            !function (t, e) {
              var n = Mt(hn);
              for (var r in n) {
                var o = cn(r, e),
                  i = void 0 !== e[r],
                  a = e.style && void 0 !== e.style[r],
                  s = i && kt(e[r]),
                  u = a && kt(e.style[r]);
                (o && !i && !a || !o && !s && !u) &&
                  (t.removeValue(r), delete n[r]);
              }
              ln(t, n, e, !1, e),
                e.style && ln(t, n, e.style, !0, e),
                e.transformValues &&
                (t.reactStyle = e.transformValues(t.reactStyle));
            }(c, e);
            var l = Vn(c, e, s),
              f = function (t, e, n, o) {
                var i = Object(u.useContext)(te);
                if (e || "undefined" == typeof window) return null;
                for (
                  var a = Object(r.e)(t, i.features),
                    s = a.length,
                    c = [],
                    l = 0;
                  l < s;
                  l++
                ) {
                  var f = a[l],
                    d = f.shouldRender,
                    p = f.key,
                    h = f.getComponent;
                  if (d(o)) {
                    var v = h(o);
                    v &&
                      c.push(
                        Object(u.createElement)(
                          v,
                          Object(r.a)({ key: p }, o, { visualElement: n }),
                        ),
                      );
                  }
                }
                return c;
              }(n, s, c, e),
              d = Object(u.useMemo)(
                (function () {
                  return { visualElement: c, variantContext: l };
                }),
                [c, l],
              ),
              p = i(t, e, c);
            return function (t) {
              var e = Object(u.useContext)(bn), n = Object(u.useContext)(xn);
              jn(
                (function () {
                  return function () {
                    yn(e) && e.remove(t), yn(n) && n.remove(t);
                  };
                }),
                [],
              );
            }(c),
              Object(u.createElement)(
                u.Fragment,
                null,
                Object(u.createElement)(_t.Provider, { value: d }, p),
                f,
              );
          }),
        );
      }
      function Dn(t, e, n) {
        var r = e.min, o = e.max;
        return void 0 !== r && t < r
          ? t = n ? Object(i.u)(r, t, n) : Math.max(t, r)
          : void 0 !== o && t > o &&
            (t = n ? Object(i.u)(o, t, n) : Math.min(t, o)),
          t;
      }
      function Rn(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function Mn(t, e) {
        var n, o = e.min - t.min, i = e.max - t.max;
        return e.max - e.min < t.max - t.min &&
          (o = (n = Object(r.c)([i, o], 2))[0], i = n[1]),
          { min: t.min + o, max: t.min + i };
      }
      var Fn,
        Un = new WeakMap(),
        In = function () {
          function t(t) {
            var e = t.visualElement;
            this.isDragging = !1,
              this.currentDirection = null,
              this.constraints = !1,
              this.props = {},
              this.hasMutatedConstraints = !1,
              this.cursorProgress = { x: .5, y: .5 },
              this.originPoint = {},
              this.openGlobalLock = null,
              this.panSession = null,
              this.visualElement = e,
              this.visualElement.enableLayoutProjection(),
              Un.set(e, this);
          }
          return t.prototype.start = function (t, e) {
            var n = this,
              r = void 0 === e ? {} : e,
              o = r.snapToCursor,
              a = void 0 !== o && o,
              s = r.cursorProgress;
            a && this.snapToCursor(t);
            var u = this.props.transformPagePoint;
            this.panSession = new be(t, {
              onSessionStart: function () {
                n.stopMotion();
              },
              onStart: function (t, e) {
                var r, o, a, u = n.props, c = u.drag, l = u.dragPropagation;
                if (
                  !c || l ||
                  (n.openGlobalLock && n.openGlobalLock(),
                    n.openGlobalLock = Ve(c),
                    n.openGlobalLock)
                ) {
                  n.prepareBoundingBox(),
                    n.visualElement.lockTargetBox(),
                    n.resolveDragConstraints();
                  var f = le(t).point;
                  ut(
                    (function (t) {
                      var e = n.visualElement.targetBox[t],
                        r = e.min,
                        o = e.max;
                      n.cursorProgress[t] = s ? s[t] : Object(i.w)(r, o, f[t]);
                      var a = n.getAxisMotionValue(t);
                      a && (n.originPoint[t] = a.get());
                    }),
                  ),
                    n.isDragging = !0,
                    n.currentDirection = null,
                    null === (o = (r = n.props).onDragStart) || void 0 === o ||
                    o.call(r, t, e),
                    null === (a = n.visualElement.animationState) ||
                    void 0 === a || a.setActive(Ne.Drag, !0);
                }
              },
              onMove: function (t, e) {
                var r,
                  o,
                  i,
                  a,
                  s = n.props,
                  u = s.dragPropagation,
                  c = s.dragDirectionLock;
                if (u || n.openGlobalLock) {
                  var l = e.offset;
                  if (c && null === n.currentDirection) {
                    return n.currentDirection = function (t, e) {
                      void 0 === e && (e = 10);
                      var n = null;
                      Math.abs(t.y) > e
                        ? n = "y"
                        : Math.abs(t.x) > e && (n = "x");
                      return n;
                    }(l),
                      void (null !== n.currentDirection &&
                        (null === (o = (r = n.props).onDirectionLock) ||
                          void 0 === o || o.call(r, n.currentDirection)));
                  }
                  n.updateAxis("x", t, l),
                    n.updateAxis("y", t, l),
                    null === (a = (i = n.props).onDrag) || void 0 === a ||
                    a.call(i, t, e),
                    Fn = t;
                }
              },
              onEnd: function (t, e) {
                return n.stop(t, e);
              },
            }, { transformPagePoint: u });
          },
            t.prototype.prepareBoundingBox = function () {
              var t = this.visualElement;
              t.withoutTransform(
                (function () {
                  t.measureLayout();
                }),
              ), t.rebaseTargetBox(!0, t.getBoundingBoxWithoutTransforms());
            },
            t.prototype.resolveDragConstraints = function () {
              var t, e, n, r, o, i, a = this, s = this.props.dragConstraints;
              this.constraints = !!s && (l(s)
                ? this.resolveRefConstraints(this.visualElement.box, s)
                : (t = this.visualElement.box,
                  n = (e = s).top,
                  r = e.left,
                  o = e.bottom,
                  i = e.right,
                  { x: Rn(t.x, r, i), y: Rn(t.y, n, o) })),
                this.constraints && !this.hasMutatedConstraints &&
                ut(
                  (function (t) {
                    var e, n, r;
                    a.getAxisMotionValue(t) &&
                      (a.constraints[t] =
                        (e = a.visualElement.box[t],
                          n = a.constraints[t],
                          r = {},
                          void 0 !== n.min && (r.min = n.min - e.min),
                          void 0 !== n.max && (r.max = n.max - e.min),
                          r));
                  }),
                );
            },
            t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                o = n.transformPagePoint,
                i = e.current;
              Object(a.a)(
                null !== i,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
              ), this.constraintsBox = ct(i, o);
              var s = function (t, e) {
                return { x: Mn(t.x, e.x), y: Mn(t.y, e.y) };
              }(t, this.constraintsBox);
              if (r) {
                var u = r(function (t) {
                  var e = t.x, n = t.y;
                  return {
                    top: n.min,
                    bottom: n.max,
                    left: e.min,
                    right: e.max,
                  };
                }(s));
                this.hasMutatedConstraints = !!u, u && (s = m(u));
              }
              return s;
            },
            t.prototype.cancelDrag = function () {
              var t;
              this.isDragging = !1,
                this.panSession && this.panSession.end(),
                this.panSession = null,
                !this.props.dragPropagation && this.openGlobalLock &&
                (this.openGlobalLock(), this.openGlobalLock = null),
                null === (t = this.visualElement.animationState) ||
                void 0 === t || t.setActive(Ne.Drag, !1);
            },
            t.prototype.stop = function (t, e) {
              var n;
              this.visualElement.unlockTargetBox(),
                null === (n = this.panSession) || void 0 === n || n.end(),
                this.panSession = null;
              var r = this.isDragging;
              if (this.cancelDrag(), r) {
                var o = this.props,
                  i = o.dragMomentum,
                  a = o.dragElastic,
                  s = o.onDragEnd;
                if (i || a) {
                  var u = e.velocity;
                  this.animateDragEnd(u);
                }
                null == s || s(t, e);
              }
            },
            t.prototype.snapToCursor = function (t) {
              var e = this;
              this.prepareBoundingBox(),
                ut(
                  (function (n) {
                    var r = e.getAxisMotionValue(n);
                    if (r) {
                      var o = le(t).point,
                        i = e.visualElement.box,
                        a = i[n].max - i[n].min,
                        s = i[n].min + a / 2,
                        u = o[n] - s;
                      e.originPoint[n] = o[n], r.set(u);
                    } else {e.cursorProgress[n] = .5,
                        e.updateVisualElementAxis(n, t);}
                  }),
                );
            },
            t.prototype.updateAxis = function (t, e, n) {
              if (
                Hn(t, this.props.drag, this.currentDirection)
              ) {
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e);
              }
            },
            t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (e && n) {
                var r = this.props.dragElastic,
                  o = this.originPoint[t] + e[t],
                  i = this.constraints ? Dn(o, this.constraints[t], r) : o;
                n.set(i);
              }
            },
            t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                r = this.props.dragElastic,
                o = this.visualElement.box[t],
                i = o.max - o.min,
                a = this.cursorProgress[t],
                s = function (t, e, n, r, o) {
                  var i = t - e * n;
                  return r ? Dn(i, r, o) : i;
                }(
                  le(e).point[t],
                  i,
                  a,
                  null === (n = this.constraints) || void 0 === n ? void 0
                  : n[t],
                  r,
                );
              this.visualElement.setAxisTarget(t, s, s + i);
            },
            t.prototype.updateProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                o = t.dragDirectionLock,
                i = void 0 !== o && o,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                c = void 0 !== u && u,
                l = t.dragElastic,
                f = void 0 === l ? .35 : l,
                d = t.dragMomentum,
                p = void 0 === d || d,
                h = Object(r.d)(
                  t,
                  [
                    "drag",
                    "dragDirectionLock",
                    "dragPropagation",
                    "dragConstraints",
                    "dragElastic",
                    "dragMomentum",
                  ],
                );
              this.props = Object(r.a)(
                {
                  drag: n,
                  dragDirectionLock: i,
                  dragPropagation: s,
                  dragConstraints: c,
                  dragElastic: f,
                  dragMomentum: p,
                },
                h,
              );
            },
            t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                r = e.layoutId,
                o = "_drag" + t.toUpperCase();
              return this.props[o] ? this.props[o]
              : n || void 0 !== r ? void 0 : this.visualElement.getValue(t, 0);
            },
            t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                o = n.drag,
                i = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = ut(
                  (function (n) {
                    if (Hn(n, o, e.currentDirection)) {
                      var u = e.constraints ? e.constraints[n] : {},
                        c = a ? 200 : 1e6,
                        l = a ? 40 : 1e7,
                        f = Object(r.a)(
                          Object(r.a)({
                            type: "inertia",
                            velocity: i ? t[n] : 0,
                            bounceStiffness: c,
                            bounceDamping: l,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          }, s),
                          u,
                        );
                      return e.getAxisMotionValue(n)
                        ? e.startAxisValueAnimation(n, f)
                        : e.visualElement.startLayoutAxisAnimation(n, f);
                    }
                  }),
                );
              return Promise.all(u).then(
                (function () {
                  var t, n;
                  null === (n = (t = e.props).onDragTransitionEnd) ||
                    void 0 === n || n.call(t);
                }),
              );
            },
            t.prototype.stopMotion = function () {
              var t = this;
              ut(
                (function (e) {
                  var n = t.getAxisMotionValue(e);
                  n ? n.stop() : t.visualElement.stopLayoutAnimation();
                }),
              );
            },
            t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (n) {
                var r = n.get();
                return n.set(r), n.set(r), Ye(t, n, 0, e);
              }
            },
            t.prototype.scalePoint = function () {
              var t = this, e = this.props, n = e.drag, r = e.dragConstraints;
              if (l(r) && this.constraintsBox) {
                this.stopMotion();
                var o = { x: 0, y: 0 };
                ut(
                  (function (e) {
                    o[e] = it(
                      t.visualElement.targetBox[e],
                      t.constraintsBox[e],
                    );
                  }),
                ),
                  this.prepareBoundingBox(),
                  this.resolveDragConstraints(),
                  ut(
                    (function (e) {
                      if (Hn(e, n, null)) {
                        var r = function (t, e, n) {
                            var r = t.max - t.min,
                              o = Object(i.u)(e.min, e.max - r, n);
                            return { min: o, max: o + r };
                          }(
                            t.visualElement.targetBox[e],
                            t.constraintsBox[e],
                            o[e],
                          ),
                          a = r.min,
                          s = r.max;
                        t.visualElement.setAxisTarget(e, a, s);
                      }
                    }),
                  );
              }
            },
            t.prototype.mount = function (t) {
              var e = this,
                n = me(
                  t.getInstance(),
                  "pointerdown",
                  (function (t) {
                    var n = e.props, r = n.drag, o = n.dragListener;
                    r && (void 0 === o || o) && e.start(t);
                  }),
                ),
                r = ne(
                  window,
                  "resize",
                  (function () {
                    e.scalePoint();
                  }),
                ),
                o = t.onLayoutUpdate(
                  (function () {
                    e.isDragging && e.resolveDragConstraints();
                  }),
                ),
                i = t.prevSnapshot;
              return (null == i ? void 0 : i.isDragging) &&
                this.start(Fn, { cursorProgress: i.cursorProgress }),
                function () {
                  null == n || n(),
                    null == r || r(),
                    null == o || o(),
                    e.cancelDrag();
                };
            },
            t;
        }();
      function Hn(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t);
      }
      var Yn = tn(
          (function (t) {
            var e = t.visualElement;
            return function (t, e) {
              var n = t.dragControls,
                o = Object(u.useContext)(te).transformPagePoint,
                i = Mt(
                  (function () {
                    return new In({ visualElement: e });
                  }),
                );
              i.updateProps(
                Object(r.a)(Object(r.a)({}, t), { transformPagePoint: o }),
              ),
                Object(u.useEffect)(
                  (function () {
                    return n && n.subscribe(i);
                  }),
                  [i],
                ),
                Object(u.useEffect)(
                  (function () {
                    return i.mount(e);
                  }),
                  [],
                );
            }(Object(r.d)(t, ["visualElement"]), e);
          }),
        ),
        Xn = {
          key: "drag",
          shouldRender: function (t) {
            return !!t.drag || !!t.dragControls;
          },
          getComponent: function () {
            return Yn;
          },
        },
        Wn = tn(
          (function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = Object(r.c)(On(), 2),
              i = o[0],
              a = o[1],
              s = Object(u.useContext)($t);
            Object(u.useEffect)(
              (function () {
                var t,
                  r,
                  o = null === (t = n.animationState) || void 0 === t ? void 0
                  : t.setActive(Ne.Exit, !i, {
                    custom: null !== (r = null == s
                            ? void 0
                            : s.custom) && void 0 !== r
                      ? r
                      : e,
                  });
                !i && (null == o || o.then(a));
              }),
              [i],
            );
          }),
        ),
        zn = {
          key: "exit",
          shouldRender: function (t) {
            return !!t.exit && !Sn(t);
          },
          getComponent: function () {
            return Wn;
          },
        };
      var Nn = tn(
          (function (t) {
            var e = t.visualElement, n = t.animate;
            e.animationState || (e.animationState = _e(e));
            var r = qt();
            Object(u.useEffect)(
              (function () {
                e.animationState.setProps(t, e.inheritsVariants ? r : void 0);
              }),
            ),
              n instanceof Ge && function (t, e) {
                var n = Object(u.useMemo)(
                  (function () {
                    return e.subscribe(t);
                  }),
                  [e],
                );
                ee(
                  (function () {
                    return null == n ? void 0 : n();
                  }),
                );
              }(e, n);
          }),
        ),
        Gn = {
          key: "animation",
          shouldRender: function () {
            return !0;
          },
          getComponent: function (t) {
            var e = t.animate,
              n = t.whileHover,
              r = t.whileFocus,
              o = t.whileTap,
              i = t.whileDrag,
              a = t.exit,
              s = t.variants;
            return e || n || r || o || i || a || s ? Nn : void 0;
          },
        };
      var Zn = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.frameTarget = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
          },
            e.stopAxisAnimation = { x: void 0, y: void 0 },
            e.animate = function (t, n, o) {
              void 0 === o && (o = {});
              var i = o.originBox,
                a = o.targetBox,
                s = o.visibilityAction,
                u = o.shouldStackAnimate,
                c = Object(r.d)(
                  o,
                  [
                    "originBox",
                    "targetBox",
                    "visibilityAction",
                    "shouldStackAnimate",
                  ],
                ),
                l = e.props,
                f = l.visualElement,
                d = l.layout;
              if (!1 === u) return e.safeToRemove();
              var p = $n(n = i || n, t = a || t),
                h = ut(
                  (function (r) {
                    if ("position" === d) {
                      var o = t[r].max - t[r].min;
                      n[r].max = n[r].min + o;
                    }
                    if (!f.isTargetBoxLocked) {
                      return void 0 === s
                        ? p
                          ? e.animateAxis(r, t[r], n[r], c)
                          : f.setAxisTarget(r, t[r].min, t[r].max)
                        : void (s === dn.Hide
                          ? f.hide()
                          : f.show());
                    }
                  }),
                );
              return f.render(),
                Promise.all(h).then(
                  (function () {
                    var t, n;
                    null === (n = (t = e.props).onLayoutAnimationComplete) ||
                    void 0 === n || n.call(t),
                      f.isPresent
                        ? f.presence = fn.Present
                        : e.safeToRemove();
                  }),
                );
            },
            e;
        }
        return Object(r.b)(e, t),
          e.prototype.componentDidMount = function () {
            var t = this, e = this.props.visualElement;
            e.animateMotionValue = Ye,
              e.enableLayoutProjection(),
              this.unsubLayoutReady = e.onLayoutUpdate(this.animate),
              e.updateConfig(
                Object(r.a)(
                  Object(r.a)({}, e.config),
                  {
                    safeToRemove: function () {
                      return t.safeToRemove();
                    },
                  },
                ),
              );
          },
          e.prototype.componentWillUnmount = function () {
            var t = this;
            this.unsubLayoutReady(),
              ut(
                (function (e) {
                  var n, r;
                  return null === (r = (n = t.stopAxisAnimation)[e]) ||
                      void 0 === r
                    ? void 0
                    : r.call(n);
                }),
              );
          },
          e.prototype.animateAxis = function (t, e, n, r) {
            var o,
              a,
              s = void 0 === r ? {} : r,
              u = s.transition,
              c = s.crossfadeOpacity;
            null === (a = (o = this.stopAxisAnimation)[t]) || void 0 === a ||
              a.call(o);
            var l,
              f = this.props.visualElement,
              d = this.frameTarget[t],
              p = f.getAxisProgress()[t];
            p.clearListeners(),
              p.set(0),
              p.set(0),
              c && (l = this.createCrossfadeAnimation(c), f.show());
            var h = function () {
              var r = p.get() / 1e3;
              !function (t, e, n, r) {
                t.min = Object(i.u)(e.min, n.min, r),
                  t.max = Object(i.u)(e.max, n.max, r);
              }(d, n, e, r),
                f.setAxisTarget(t, d.min, d.max),
                null == l || l(r);
            };
            h(), f.updateLayoutDelta();
            var v = p.onChange(h),
              m = Ye(
                "x" === t ? "layoutX" : "layoutY",
                p,
                1e3,
                u || this.props.transition || qn,
              ).then(v);
            return this.stopAxisAnimation[t] = function () {
              p.stop(), v();
            },
              m;
          },
          e.prototype.createCrossfadeAnimation = function (t) {
            var e = this.props.visualElement.getValue("opacity", 0);
            return function (n) {
              e.set(Qn(Object(i.u)(0, 1, n))), t.set(tr(Object(i.u)(1, 0, n)));
            };
          },
          e.prototype.safeToRemove = function () {
            var t, e;
            null === (e = (t = this.props).safeToRemove) || void 0 === e ||
              e.call(t);
          },
          e.prototype.render = function () {
            return null;
          },
          e;
      }(u.Component);
      function Kn(t) {
        var e = Object(r.c)(On(), 2)[1];
        return Object(u.createElement)(
          Zn,
          Object(r.a)({}, t, { safeToRemove: e }),
        );
      }
      function $n(t, e) {
        return _n(t.x, e.x) || _n(t.y, e.y);
      }
      function _n(t, e) {
        return t.min !== e.min || t.max !== e.max;
      }
      var qn = { duration: .45, ease: [.4, 0, .1, 1] };
      function Jn(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Object(i.w)(t, e, r));
        };
      }
      var Qn = Jn(0, .5, i.k),
        tr = Jn(.5, .95, i.t),
        er = {
          key: "animate-layout",
          shouldRender: function (t) {
            return !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return Kn;
          },
        },
        nr = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }
          return Object(r.b)(e, t),
            e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.framerSyncLayout,
                r = t.visualElement;
              yn(e) && e.register(r), yn(n) && n.register(r);
            },
            e.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props, e = t.syncLayout, n = t.visualElement;
              return yn(e)
                ? e.syncUpdate()
                : (n.snapshotBoundingBox(), e.add(n)),
                null;
            },
            e.prototype.componentDidUpdate = function () {
              var t = this.props, e = t.syncLayout, n = t.visualElement;
              yn(e) || e.flush(), n.rebaseTargetBox();
            },
            e.prototype.render = function () {
              return null;
            },
            e;
        }(c.a.Component);
      function rr(t) {
        var e = Object(u.useContext)(bn), n = Object(u.useContext)(xn);
        return c.a.createElement(
          nr,
          Object(r.a)({}, t, { syncLayout: e, framerSyncLayout: n }),
        );
      }
      var or = {
          key: "measure-layout",
          shouldRender: function (t) {
            return !!t.drag || !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return rr;
          },
        },
        ir = [or, Gn, Xn, rn, zn, er],
        ar = {
          useVisualElement: function (t, e, n, o) {
            var i = Jt(),
              a = Mt(
                (function () {
                  return new (Kt(t)
                    ? Gt
                    : Dt)(i, o);
                }),
              );
            n && (a.values.clear(), a.latest = {}),
              a.updateConfig(
                Object(r.a)(
                  Object(r.a)(
                    Object(r.a)({}, a.config),
                    { enableHardwareAcceleration: !n },
                  ),
                  e,
                ),
              );
            var s = Object(u.useContext)(Qt);
            a.layoutId = s && e.layoutId ? s + "-" + e.layoutId : e.layoutId;
            var c = Object(u.useContext)($t), l = null === c || c.isPresent;
            a.isPresent = void 0 !== e.isPresent ? e.isPresent : l;
            var f = null == c ? void 0 : c.id;
            return a.isPresenceRoot = !i || i.presenceId !== f,
              Object(u.useEffect)(
                (function () {
                  if (e.onViewportBoxUpdate) {
                    return a.onViewportBoxUpdate(e.onViewportBoxUpdate);
                  }
                }),
                [e.onViewportBoxUpdate],
              ),
              a;
          },
          useRender: function (t, e, n) {
            var o = "string" == typeof t
              ? function (t) {
                var e = {};
                for (var n in t)sn(n) && (e[n] = t[n]);
                return e;
              }(e)
              : e;
            n.clean(), n.build();
            var i = Kt(t)
              ? function (t) {
                return Object(r.a)(
                  Object(r.a)({}, t.attrs),
                  { style: Object(r.a)({}, t.reactStyle) },
                );
              }(n)
              : function (t, e) {
                var n = e.drag,
                  o = {},
                  i = Object(r.a)(
                    Object(r.a)(Object(r.a)({}, t.reactStyle), t.style),
                    t.vars,
                  );
                return n &&
                  (o.draggable = !1,
                    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout =
                      "none",
                    i.touchAction = !0 === n
                      ? "none"
                      : "pan-" + ("x" === n
                        ? "y"
                        : "x")),
                  o.style = i,
                  o;
              }(n, e);
            return Object(u.createElement)(
              t,
              Object(r.a)(Object(r.a)(Object(r.a)({}, o), { ref: n.ref }), i),
            );
          },
        };
      function sr(t) {
        var e = Object(r.a)(Object(r.a)({}, ar), { defaultFeatures: t });
        var n = new Map();
        return new Proxy({
          custom: function (t) {
            return kn(t, e);
          },
        }, {
          get: function (t, r) {
            return "custom" === r
              ? t.custom
              : (n.has(r) || n.set(r, kn(r, e)), n.get(r));
          },
        });
      }
      var ur = sr(ir);
      function cr(t, e) {
        return e && t !== e.lead ? { visibilityAction: dn.Hide }
        : e && t.presence !== fn.Entering && t === e.lead &&
            e.lead !== e.prevLead ? { visibilityAction: dn.Show }
        : (t.presence === fn.Entering
          ? n = null == e ? void 0 : e.getFollowOrigin()
          : t.presence === fn.Exiting &&
            (r = null == e ? void 0 : e.getFollowTarget()),
          { originBox: n, targetBox: r });
        var n, r;
      }
      function lr(t, e) {
        var n,
          r,
          o,
          i = {},
          a = e && e.lead,
          s = null == a ? void 0 : a.presence;
        return e && t === a
          ? t.presence === fn.Entering
            ? i.originBox = e.getFollowOrigin()
            : t.presence === fn.Exiting && (i.targetBox = e.getFollowTarget())
          : e && t === e.follow &&
            (i.transition = e.getLeadTransition(),
              s === fn.Entering
                ? i.targetBox = e.getLeadTarget()
                : s === fn.Exiting && (i.originBox = e.getLeadOrigin())),
          (null === (n = null == e ? void 0 : e.follow) || void 0 === n
              ? void 0
              : n.isPresenceRoot) || (null == a ? void 0 : a.isPresenceRoot)
            ? (e && t !== a
              ? e && t === e.follow
                ? a && s !== fn.Entering && s === fn.Exiting &&
                  (i.crossfadeOpacity = null === (o = null == e
                          ? void 0
                          : e.lead) || void 0 === o
                    ? void 0
                    : o.getValue("opacity", 1))
                : i.visibilityAction = dn.Hide
              : t.presence === fn.Entering &&
                (i.crossfadeOpacity = null === (r = null == e
                        ? void 0
                        : e.follow) || void 0 === r
                  ? void 0
                  : r.getValue("opacity", 0)),
              i)
            : i;
      }
      var fr = function () {
        function t() {
          this.order = [], this.hasChildren = !1;
        }
        return t.prototype.add = function (t) {
          var e;
          if (this.order.push(t), this.snapshot) {
            t.prevSnapshot = this.snapshot,
              t.prevViewportBox = this.snapshot.boundingBox;
            var n = this.snapshot.latestMotionValues;
            for (var r in n) {
              t.hasValue(r)
                ? null === (e = t.getValue(r)) || void 0 === e || e.set(n[r])
                : t.addValue(r, p(n[r]));
            }
          }
          this.hasChildren = !0;
        },
          t.prototype.remove = function (t) {
            var e = this.order.findIndex(
              (function (e) {
                return t === e;
              }),
            );
            -1 !== e && this.order.splice(e, 1);
          },
          t.prototype.updateLeadAndFollow = function () {
            this.prevLead = this.lead, this.prevFollow = this.follow;
            var t = Object(r.c)(
                function (t, e) {
                  for (
                    var n = Object(r.c)(e, 2),
                      o = n[0],
                      i = n[1],
                      a = void 0,
                      s = 0,
                      u = void 0,
                      c = t.length,
                      l = !1,
                      f = c - 1;
                    f >= 0;
                    f--
                  ) {
                    var d = t[f];
                    if (f === c - 1 && (l = d.isPresent), l) a = d;
                    else {
                      var p = t[f - 1];
                      p && p.isPresent && (a = d);
                    }
                    if (a) {
                      s = f;
                      break;
                    }
                  }
                  if (a || (a = t[0]), u = t[s - 1], a) {
                    for (f = s - 1; f >= 0; f--) {
                      if ((d = t[f]).isPresent) {
                        u = d;
                        break;
                      }
                    }
                  }
                  return a !== o && !l && u === i && t.find(
                    (function (t) {
                      return t === o;
                    }),
                  ) && (a = o),
                    [a, u];
                }(this.order, [this.lead, this.follow]),
                2,
              ),
              e = t[0],
              n = t[1];
            this.lead = e, this.follow = n;
          },
          t.prototype.updateSnapshot = function () {
            if (this.lead) {
              var t = {
                boundingBox: this.lead.prevViewportBox,
                latestMotionValues: {},
              };
              this.lead.forEachValue(
                (function (e, n) {
                  var r = e.get();
                  k(r) || (t.latestMotionValues[n] = r);
                }),
              );
              var e = Un.get(this.lead);
              e && e.isDragging &&
              (t.isDragging = !0, t.cursorProgress = e.cursorProgress),
                this.snapshot = t;
            }
          },
          t.prototype.isLeadPresent = function () {
            var t;
            return this.lead &&
              (null === (t = this.lead) || void 0 === t
                  ? void 0
                  : t.presence) !== fn.Exiting;
          },
          t.prototype.getFollowOrigin = function () {
            var t;
            return this.follow ? this.follow.prevViewportBox
            : null === (t = this.snapshot) || void 0 === t ? void 0
            : t.boundingBox;
          },
          t.prototype.getFollowTarget = function () {
            var t;
            return null === (t = this.follow) || void 0 === t ? void 0 : t.box;
          },
          t.prototype.getLeadOrigin = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0
            : t.prevViewportBox;
          },
          t.prototype.getLeadTarget = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0 : t.box;
          },
          t.prototype.getLeadTransition = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0
            : t.config.transition;
          },
          t;
      }();
      !function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.children = new Set(),
            e.stacks = new Map(),
            e.hasMounted = !1,
            e.updateScheduled = !1,
            e.renderScheduled = !1,
            e.syncContext = Object(r.a)(
              Object(r.a)({}, gn()),
              {
                syncUpdate: function (t) {
                  return e.scheduleUpdate(t);
                },
                forceUpdate: function () {
                  e.syncContext = Object(r.a)({}, e.syncContext),
                    e.scheduleUpdate(!0);
                },
                register: function (t) {
                  return e.addChild(t);
                },
                remove: function (t) {
                  return e.removeChild(t);
                },
              },
            ),
            e;
        }
        Object(r.b)(e, t),
          e.prototype.componentDidMount = function () {
            this.hasMounted = !0, this.updateStacks();
          },
          e.prototype.componentDidUpdate = function () {
            this.startLayoutAnimation();
          },
          e.prototype.shouldComponentUpdate = function () {
            return this.renderScheduled = !0, !0;
          },
          e.prototype.startLayoutAnimation = function () {
            var t = this;
            this.renderScheduled = this.updateScheduled = !1;
            var e = this.props.type;
            this.children.forEach(
              (function (t) {
                t.isPresent
                  ? t.presence !== fn.Entering &&
                    (t.presence = t.presence === fn.Exiting
                      ? fn.Entering
                      : fn.Present)
                  : t.presence = fn.Exiting;
              }),
            ), this.updateStacks();
            var n = "crossfade" === e ? lr : cr,
              r = {
                measureLayout: function (t) {
                  return t.measureLayout();
                },
                layoutReady: function (e) {
                  var r = e.layoutId;
                  e.layoutReady(n(e, t.getStack(r)));
                },
                parent: this.context.visualElement,
              };
            this.children.forEach(
              (function (e) {
                return t.syncContext.add(e);
              }),
            ),
              this.syncContext.flush(r),
              this.stacks.forEach(
                (function (t) {
                  return t.snapshot = void 0;
                }),
              );
          },
          e.prototype.updateStacks = function () {
            this.stacks.forEach(
              (function (t) {
                return t.updateLeadAndFollow();
              }),
            );
          },
          e.prototype.scheduleUpdate = function (t) {
            void 0 === t && (t = !1),
              !t && this.updateScheduled ||
              (this.updateScheduled = !0,
                this.children.forEach(
                  (function (t) {
                    return function (t) {
                      for (var e = !1, n = {}, r = 0; r < V.length; r++) {
                        var o = "rotate" + V[r];
                        t.hasValue(o) && 0 !== t.latest[o] &&
                          (e = !0, n[o] = t.latest[o], t.latest[o] = 0);
                      }
                      if (e) {
                        for (var o in t.render(), n) t.latest[o] = n[o];
                        t.scheduleRender();
                      }
                    }(t);
                  }),
                ),
                this.children.forEach(
                  (function (t) {
                    return t.snapshotBoundingBox();
                  }),
                ),
                this.stacks.forEach(
                  (function (t) {
                    return t.updateSnapshot();
                  }),
                ),
                !t && this.renderScheduled ||
                (this.renderScheduled = !0, this.forceUpdate()));
          },
          e.prototype.addChild = function (t) {
            this.children.add(t),
              this.addToStack(t),
              t.presence = this.hasMounted ? fn.Entering : fn.Present;
          },
          e.prototype.removeChild = function (t) {
            this.scheduleUpdate(),
              this.children.delete(t),
              this.removeFromStack(t);
          },
          e.prototype.addToStack = function (t) {
            var e = this.getStack(t.layoutId);
            null == e || e.add(t);
          },
          e.prototype.removeFromStack = function (t) {
            var e = this.getStack(t.layoutId);
            null == e || e.remove(t);
          },
          e.prototype.getStack = function (t) {
            if (
              void 0 !== t
            ) {
              return !this.stacks.has(t) && this.stacks.set(t, new fr()),
                this.stacks.get(t);
            }
          },
          e.prototype.render = function () {
            return Object(u.createElement)(
              bn.Provider,
              { value: this.syncContext },
              this.props.children,
            );
          },
          e.contextType = _t;
      }(u.Component);
      !function () {
        function t() {
          this.componentControls = new Set();
        }
        t.prototype.subscribe = function (t) {
          var e = this;
          return this.componentControls.add(t), function () {
            return e.componentControls.delete(t);
          };
        },
          t.prototype.start = function (t, e) {
            this.componentControls.forEach(
              (function (n) {
                n.start(t.nativeEvent || t, e);
              }),
            );
          },
          t.prototype.updateConstraints = function () {
            this.componentControls.forEach(
              (function (t) {
                t.prepareBoundingBox(), t.resolveDragConstraints();
              }),
            );
          };
      }();
      !function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.initialState = {}, e;
        }
        Object(r.b)(e, t),
          e.prototype.updateLayoutDelta = function () {},
          e.prototype.build = function () {},
          e.prototype.clean = function () {},
          e.prototype.makeTargetAnimatable = function (t) {
            var e = t.transition,
              n = t.transitionEnd,
              o = Object(r.d)(t, ["transition", "transitionEnd"]);
            return Tt(this, o, Lt(o, e || {}, this)),
              Object(r.a)({ transition: e, transitionEnd: n }, o);
          },
          e.prototype.getBoundingBox = function () {
            return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          },
          e.prototype.readNativeValue = function (t) {
            return this.initialState[t] || 0;
          },
          e.prototype.render = function () {
            this.build();
          };
      }(h);
    },
  }],
);
