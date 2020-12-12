/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.21.1(bc95e893efa618c52f821acc3c44aa00bef4a12c)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function () {
  var e,
    t,
    n = [
      "require",
      "exports",
      "vs/base/common/platform",
      "vs/editor/common/core/position",
      "vs/base/common/errors",
      "vs/base/common/strings",
      "vs/editor/common/core/range",
      "vs/base/common/lifecycle",
      "vs/base/common/event",
      "vs/base/common/diff/diff",
      "vs/base/common/types",
      "vs/base/common/uint",
      "vs/base/common/uri",
      "vs/base/common/arrays",
      "vs/base/common/diff/diffChange",
      "vs/base/common/iterator",
      "vs/base/common/keyCodes",
      "vs/base/common/linkedList",
      "vs/base/common/cancellation",
      "vs/base/common/process",
      "vs/base/common/path",
      "vs/base/common/stopwatch",
      "vs/base/common/hash",
      "vs/editor/common/core/characterClassifier",
      "vs/editor/common/core/selection",
      "vs/editor/common/core/token",
      "vs/editor/common/diff/diffComputer",
      "vs/editor/common/model/wordHelper",
      "vs/editor/common/modes/linkComputer",
      "vs/editor/common/modes/supports/inplaceReplaceSupport",
      "vs/editor/common/standalone/standaloneEnums",
      "vs/editor/common/standalone/standaloneBase",
      "vs/editor/common/viewModel/prefixSumComputer",
      "vs/editor/common/model/mirrorTextModel",
      "vs/base/common/worker/simpleWorker",
      "vs/editor/common/services/editorSimpleWorker",
    ],
    r = function (e) {
      for (var t = [], r = 0, i = e.length; r < i; r++) t[r] = n[e[r]];
      return t;
    },
    i = this,
    o = "object" == typeof global ? global : {};
  !function (e) {
    e.global = i;
    var t = function () {
      function t() {
        this._detected = !1,
          this._isWindows = !1,
          this._isNode = !1,
          this._isElectronRenderer = !1,
          this._isWebWorker = !1;
      }
      return Object.defineProperty(
        t.prototype,
        "isWindows",
        {
          get: function () {
            return this._detect(), this._isWindows;
          },
          enumerable: !0,
          configurable: !0,
        },
      ),
        Object.defineProperty(t.prototype, "isNode", {
          get: function () {
            return this._detect(), this._isNode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(
          t.prototype,
          "isElectronRenderer",
          {
            get: function () {
              return this._detect(), this._isElectronRenderer;
            },
            enumerable: !0,
            configurable: !0,
          },
        ),
        Object.defineProperty(t.prototype, "isWebWorker", {
          get: function () {
            return this._detect(), this._isWebWorker;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t.prototype._detect = function () {
          this._detected ||
            (this._detected = !0,
              this._isWindows = t._isWindows(),
              this._isNode = "undefined" != typeof module && !!module.exports,
              this._isElectronRenderer = "undefined" != typeof process &&
                void 0 !== process.versions &&
                void 0 !== process.versions.electron &&
                "renderer" === process.type,
              this._isWebWorker = "function" == typeof e.global.importScripts);
        },
        t._isWindows = function () {
          return !!("undefined" != typeof navigator && navigator.userAgent &&
            navigator.userAgent.indexOf("Windows") >= 0) ||
            "undefined" != typeof process && "win32" === process.platform;
        },
        t;
    }();
    e.Environment = t;
  }(t || (t = {})),
    function (e) {
      var t = function (e, t, n) {
        this.type = e, this.detail = t, this.timestamp = n;
      };
      e.LoaderEvent = t;
      var n = function () {
        function n(e) {
          this._events = [new t(1, "", e)];
        }
        return n.prototype.record = function (n, r) {
          this._events.push(
            new t(n, r, e.Utilities.getHighPerformanceTimestamp()),
          );
        },
          n.prototype.getEvents = function () {
            return this._events;
          },
          n;
      }();
      e.LoaderEventRecorder = n;
      var r = function () {
        function e() {}
        return e.prototype.record = function (e, t) {},
          e.prototype.getEvents = function () {
            return [];
          },
          e.INSTANCE = new e(),
          e;
      }();
      e.NullLoaderEventRecorder = r;
    }(t || (t = {})),
    function (e) {
      var t = function () {
        function t() {}
        return t.fileUriToFilePath = function (e, t) {
          if (t = decodeURI(t).replace(/%23/g, "#"), e) {
            if (/^file:\/\/\//.test(t)) return t.substr(8);
            if (/^file:\/\//.test(t)) return t.substr(5);
          } else if (/^file:\/\//.test(t)) return t.substr(7);
          return t;
        },
          t.startsWith = function (e, t) {
            return e.length >= t.length && e.substr(0, t.length) === t;
          },
          t.endsWith = function (e, t) {
            return e.length >= t.length && e.substr(e.length - t.length) === t;
          },
          t.containsQueryString = function (e) {
            return /^[^\#]*\?/gi.test(e);
          },
          t.isAbsolutePath = function (e) {
            return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e);
          },
          t.forEachProperty = function (e, t) {
            if (e) {
              var n = void 0;
              for (n in e) e.hasOwnProperty(n) && t(n, e[n]);
            }
          },
          t.isEmpty = function (e) {
            var n = !0;
            return t.forEachProperty(
              e,
              (function () {
                n = !1;
              }),
            ),
              n;
          },
          t.recursiveClone = function (e) {
            if (!e || "object" != typeof e || e instanceof RegExp)return e;
            if (
              !Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype
            ) {
              return e;
            }
            var n = Array.isArray(e) ? [] : {};
            return t.forEachProperty(
              e,
              (function (e, r) {
                n[e] = r && "object" == typeof r ? t.recursiveClone(r) : r;
              }),
            ),
              n;
          },
          t.generateAnonymousModule = function () {
            return "===anonymous" + t.NEXT_ANONYMOUS_ID++ + "===";
          },
          t.isAnonymousModule = function (e) {
            return t.startsWith(e, "===anonymous");
          },
          t.getHighPerformanceTimestamp = function () {
            return this.PERFORMANCE_NOW_PROBED ||
              (this.PERFORMANCE_NOW_PROBED = !0,
                this.HAS_PERFORMANCE_NOW = e.global.performance &&
                  "function" == typeof e.global.performance.now),
              this.HAS_PERFORMANCE_NOW ? e.global.performance.now()
              : Date.now();
          },
          t.NEXT_ANONYMOUS_ID = 1,
          t.PERFORMANCE_NOW_PROBED = !1,
          t.HAS_PERFORMANCE_NOW = !1,
          t;
      }();
      e.Utilities = t;
    }(t || (t = {})),
    function (e) {
      function t(e) {
        if (e instanceof Error) return e;
        var t = new Error(e.message || String(e) || "Unknown Error");
        return e.stack && (t.stack = e.stack), t;
      }
      e.ensureError = t;
      var n = function () {
        function n() {}
        return n.validateConfigurationOptions = function (n) {
          if (
            "string" != typeof (n = n || {}).baseUrl && (n.baseUrl = ""),
              "boolean" != typeof n.isBuild && (n.isBuild = !1),
              "object" != typeof n.paths && (n.paths = {}),
              "object" != typeof n.config && (n.config = {}),
              void 0 === n.catchError && (n.catchError = !1),
              void 0 === n.recordStats && (n.recordStats = !1),
              "string" != typeof n.urlArgs && (n.urlArgs = ""),
              "function" != typeof n.onError && (n.onError = function (e) {
                return "loading" === e.phase
                  ? (console.error('Loading "' + e.moduleId + '" failed'),
                    console.error(e),
                    console.error("Here are the modules that depend on it:"),
                    void console.error(e.neededBy))
                  : "factory" === e.phase
                  ? (console.error(
                    'The factory method of "' + e.moduleId +
                      '" has thrown an exception',
                  ),
                    void console.error(e))
                  : void 0;
              }),
              Array.isArray(n.ignoreDuplicateModules) ||
              (n.ignoreDuplicateModules = []),
              n.baseUrl.length > 0 &&
              (e.Utilities.endsWith(n.baseUrl, "/") || (n.baseUrl += "/")),
              "string" != typeof n.cspNonce && (n.cspNonce = ""),
              void 0 === n.preferScriptTags && (n.preferScriptTags = !1),
              Array.isArray(n.nodeModules) || (n.nodeModules = []),
              n.nodeCachedData && "object" == typeof n.nodeCachedData &&
              ("string" != typeof n.nodeCachedData.seed &&
                (n.nodeCachedData.seed = "seed"),
                ("number" != typeof n.nodeCachedData.writeDelay ||
                  n.nodeCachedData.writeDelay < 0) &&
                (n.nodeCachedData.writeDelay = 7e3),
                !n.nodeCachedData.path ||
                "string" != typeof n.nodeCachedData.path)
          ) {
            var r = t(
              new Error(
                "INVALID cached data configuration, 'path' MUST be set",
              ),
            );
            r.phase = "configuration", n.onError(r), n.nodeCachedData = void 0;
          }
          return n;
        },
          n.mergeConfigurationOptions = function (t, r) {
            void 0 === t && (t = null), void 0 === r && (r = null);
            var i = e.Utilities.recursiveClone(r || {});
            return e.Utilities.forEachProperty(
              t,
              (function (t, n) {
                "ignoreDuplicateModules" === t &&
                  void 0 !== i.ignoreDuplicateModules
                  ? i.ignoreDuplicateModules = i.ignoreDuplicateModules.concat(
                    n,
                  )
                  : "paths" === t && void 0 !== i.paths
                  ? e.Utilities.forEachProperty(
                    n,
                    (function (e, t) {
                      return i.paths[e] = t;
                    }),
                  )
                  : "config" === t && void 0 !== i.config
                  ? e.Utilities.forEachProperty(
                    n,
                    (function (e, t) {
                      return i.config[e] = t;
                    }),
                  )
                  : i[t] = e.Utilities.recursiveClone(n);
              }),
            ),
              n.validateConfigurationOptions(i);
          },
          n;
      }();
      e.ConfigurationOptionsUtil = n;
      var r = function () {
        function t(e, t) {
          if (
            this._env = e,
              this.options = n.mergeConfigurationOptions(t),
              this._createIgnoreDuplicateModulesMap(),
              this._createNodeModulesMap(),
              this._createSortedPathsRules(),
              "" === this.options.baseUrl
          ) {
            if (
              this.options.nodeRequire && this.options.nodeRequire.main &&
              this.options.nodeRequire.main.filename && this._env.isNode
            ) {
              var r = this.options.nodeRequire.main.filename,
                i = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
              this.options.baseUrl = r.substring(0, i + 1);
            }
            if (this.options.nodeMain && this._env.isNode) {
              r = this.options.nodeMain,
                i = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
              this.options.baseUrl = r.substring(0, i + 1);
            }
          }
        }
        return t.prototype._createIgnoreDuplicateModulesMap = function () {
          this.ignoreDuplicateModulesMap = {};
          for (
            var e = 0;
            e < this.options.ignoreDuplicateModules.length;
            e++
          ) {
            this
              .ignoreDuplicateModulesMap[
              this.options.ignoreDuplicateModules[e]
            ] = !0;
          }
        },
          t.prototype._createNodeModulesMap = function () {
            this.nodeModulesMap = Object.create(null);
            for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
              var n = t[e];
              this.nodeModulesMap[n] = !0;
            }
          },
          t.prototype._createSortedPathsRules = function () {
            var t = this;
            this.sortedPathsRules = [],
              e.Utilities.forEachProperty(
                this.options.paths,
                (function (e, n) {
                  Array.isArray(n)
                    ? t.sortedPathsRules.push({ from: e, to: n })
                    : t.sortedPathsRules.push({ from: e, to: [n] });
                }),
              ),
              this.sortedPathsRules.sort(
                (function (e, t) {
                  return t.from.length - e.from.length;
                }),
              );
          },
          t.prototype.cloneAndMerge = function (e) {
            return new t(
              this._env,
              n.mergeConfigurationOptions(e, this.options),
            );
          },
          t.prototype.getOptionsLiteral = function () {
            return this.options;
          },
          t.prototype._applyPaths = function (t) {
            for (
              var n, r = 0, i = this.sortedPathsRules.length;
              r < i;
              r++
            ) {
              if (
                n = this.sortedPathsRules[r], e.Utilities.startsWith(t, n.from)
              ) {
                for (var o = [], s = 0, a = n.to.length; s < a; s++) {
                  o.push(n.to[s] + t.substr(n.from.length));
                }
                return o;
              }
            }
            return [t];
          },
          t.prototype._addUrlArgsToUrl = function (t) {
            return e.Utilities.containsQueryString(t)
              ? t + "&" + this.options.urlArgs : t + "?" + this.options.urlArgs;
          },
          t.prototype._addUrlArgsIfNecessaryToUrl = function (e) {
            return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e;
          },
          t.prototype._addUrlArgsIfNecessaryToUrls = function (e) {
            if (this.options.urlArgs) {
              for (var t = 0, n = e.length; t < n; t++) {
                e[t] = this._addUrlArgsToUrl(e[t]);
              }
            }
            return e;
          },
          t.prototype.moduleIdToPaths = function (t) {
            if (
              !0 === this.nodeModulesMap[t] ||
              this.options.amdModulesPattern instanceof RegExp &&
                !this.options.amdModulesPattern.test(t)
            ) {
              return this.isBuild() ? ["empty:"] : ["node|" + t];
            }
            var n, r = t;
            if (
              e.Utilities.endsWith(r, ".js") || e.Utilities.isAbsolutePath(r)
            ) {
              e.Utilities.endsWith(r, ".js") ||
              e.Utilities.containsQueryString(r) || (r += ".js"), n = [r];
            } else {
              for (
                var i = 0, o = (n = this._applyPaths(r)).length;
                i < o;
                i++
              ) {
                this.isBuild() && "empty:" === n[i] ||
                  (e.Utilities.isAbsolutePath(n[i]) ||
                    (n[i] = this.options.baseUrl + n[i]),
                    e.Utilities.endsWith(n[i], ".js") ||
                    e.Utilities.containsQueryString(n[i]) ||
                    (n[i] = n[i] + ".js"));
              }
            }
            return this._addUrlArgsIfNecessaryToUrls(n);
          },
          t.prototype.requireToUrl = function (t) {
            var n = t;
            return e.Utilities.isAbsolutePath(n) ||
              (n = this._applyPaths(n)[0],
                e.Utilities.isAbsolutePath(n) ||
                (n = this.options.baseUrl + n)),
              this._addUrlArgsIfNecessaryToUrl(n);
          },
          t.prototype.isBuild = function () {
            return this.options.isBuild;
          },
          t.prototype.isDuplicateMessageIgnoredFor = function (e) {
            return this.ignoreDuplicateModulesMap.hasOwnProperty(e);
          },
          t.prototype.getConfigForModule = function (e) {
            if (this.options.config)return this.options.config[e];
          },
          t.prototype.shouldCatchError = function () {
            return this.options.catchError;
          },
          t.prototype.shouldRecordStats = function () {
            return this.options.recordStats;
          },
          t.prototype.onError = function (e) {
            this.options.onError(e);
          },
          t;
      }();
      e.Configuration = r;
    }(t || (t = {})),
    function (e) {
      var t = function () {
          function e(e) {
            this._env = e, this._scriptLoader = null, this._callbackMap = {};
          }
          return e.prototype.load = function (e, t, o, s) {
            var a = this;
            if (!this._scriptLoader) {
              if (this._env.isWebWorker) this._scriptLoader = new r();
              else if (this._env.isElectronRenderer) {
                var l = e.getConfig().getOptionsLiteral().preferScriptTags;
                this._scriptLoader = l ? new n() : new i(this._env);
              } else {
                this._env.isNode
                  ? this._scriptLoader = new i(this._env)
                  : this._scriptLoader = new n();
              }
            }
            var u = { callback: o, errorback: s };
            this._callbackMap.hasOwnProperty(t)
              ? this._callbackMap[t].push(u)
              : (this._callbackMap[t] = [u],
                this._scriptLoader.load(
                  e,
                  t,
                  (function () {
                    return a.triggerCallback(t);
                  }),
                  (function (e) {
                    return a.triggerErrorback(t, e);
                  }),
                ));
          },
            e.prototype.triggerCallback = function (e) {
              var t = this._callbackMap[e];
              delete this._callbackMap[e];
              for (var n = 0; n < t.length; n++) t[n].callback();
            },
            e.prototype.triggerErrorback = function (e, t) {
              var n = this._callbackMap[e];
              delete this._callbackMap[e];
              for (var r = 0; r < n.length; r++) n[r].errorback(t);
            },
            e;
        }(),
        n = function () {
          function t() {}
          return t.prototype.attachListeners = function (e, t, n) {
            var r = function () {
                e.removeEventListener("load", i),
                  e.removeEventListener("error", o);
              },
              i = function (e) {
                r(), t();
              },
              o = function (e) {
                r(), n(e);
              };
            e.addEventListener("load", i), e.addEventListener("error", o);
          },
            t.prototype.load = function (t, n, r, i) {
              if (/^node\|/.test(n)) {
                var o = t.getConfig().getOptionsLiteral(),
                  a = s(t.getRecorder(), o.nodeRequire || e.global.nodeRequire),
                  l = n.split("|"),
                  u = null;
                try {
                  u = a(l[1]);
                } catch (e) {
                  return void i(e);
                }
                t.enqueueDefineAnonymousModule(
                  [],
                  (function () {
                    return u;
                  }),
                ), r();
              } else {
                var c = document.createElement("script");
                c.setAttribute("async", "async"),
                  c.setAttribute("type", "text/javascript"),
                  this.attachListeners(c, r, i);
                var d = t.getConfig().getOptionsLiteral().trustedTypesPolicy;
                d && (n = d.createScriptURL(n)), c.setAttribute("src", n);
                var h = t.getConfig().getOptionsLiteral().cspNonce;
                h && c.setAttribute("nonce", h),
                  document.getElementsByTagName("head")[0].appendChild(c);
              }
            },
            t;
        }(),
        r = function () {
          function e() {}
          return e.prototype.load = function (e, t, n, r) {
            var i = e.getConfig().getOptionsLiteral().trustedTypesPolicy;
            i && (t = i.createScriptURL(t));
            try {
              importScripts(t), n();
            } catch (e) {
              r(e);
            }
          },
            e;
        }(),
        i = function () {
          function t(e) {
            this._env = e,
              this._didInitialize = !1,
              this._didPatchNodeRequire = !1;
          }
          return t.prototype._init = function (e) {
            this._didInitialize ||
              (this._didInitialize = !0,
                this._fs = e("fs"),
                this._vm = e("vm"),
                this._path = e("path"),
                this._crypto = e("crypto"));
          },
            t.prototype._initNodeRequire = function (e, t) {
              var n = t.getConfig().getOptionsLiteral().nodeCachedData;
              if (n && !this._didPatchNodeRequire) {
                this._didPatchNodeRequire = !0;
                var r = this, i = e("module");
                i.prototype._compile = function (e, s) {
                  var a,
                    l = i.wrap(e.replace(/^#!.*/, "")),
                    u = t.getRecorder(),
                    c = r._getCachedDataPath(n, s),
                    d = { filename: s };
                  try {
                    var h = r._fs.readFileSync(c);
                    a = h.slice(0, 16),
                      d.cachedData = h.slice(16),
                      u.record(60, c);
                  } catch (e) {
                    u.record(61, c);
                  }
                  var f = new r._vm.Script(l, d),
                    g = f.runInThisContext(d),
                    m = r._path.dirname(s),
                    p = function (e) {
                      var t = e.constructor,
                        n = function (t) {
                          try {
                            return e.require(t);
                          } finally {
                          }
                        };
                      return n.resolve = function (n) {
                        return t._resolveFilename(n, e);
                      },
                        n.main = process.mainModule,
                        n.extensions = t._extensions,
                        n.cache = t._cache,
                        n;
                    }(this),
                    _ = [this.exports, p, this, s, m, process, o, Buffer],
                    C = g.apply(this.exports, _);
                  return r._handleCachedData(f, l, c, !d.cachedData, t),
                    r._verifyCachedData(f, l, c, a, t),
                    C;
                };
              }
            },
            t.prototype.load = function (n, r, i, o) {
              var a = this,
                l = n.getConfig().getOptionsLiteral(),
                u = s(n.getRecorder(), l.nodeRequire || e.global.nodeRequire),
                c = l.nodeInstrumenter || function (e) {
                  return e;
                };
              this._init(u), this._initNodeRequire(u, n);
              var d = n.getRecorder();
              if (/^node\|/.test(r)) {
                var h = r.split("|"), f = null;
                try {
                  f = u(h[1]);
                } catch (e) {
                  return void o(e);
                }
                n.enqueueDefineAnonymousModule(
                  [],
                  (function () {
                    return f;
                  }),
                ), i();
              } else {
                r = e.Utilities.fileUriToFilePath(this._env.isWindows, r);
                var g = this._path.normalize(r),
                  m = this._getElectronRendererScriptPathOrUri(g),
                  p = Boolean(l.nodeCachedData),
                  _ = p ? this._getCachedDataPath(l.nodeCachedData, r) : void 0;
                this._readSourceAndCachedData(
                  g,
                  _,
                  d,
                  (function (e, r, s, l) {
                    if (e) o(e);
                    else {
                      var u;
                      u = r.charCodeAt(0) === t._BOM
                        ? t._PREFIX + r.substring(1) + t._SUFFIX
                        : t._PREFIX + r + t._SUFFIX, u = c(u, g);
                      var d = { filename: m, cachedData: s },
                        h = a._createAndEvalScript(n, u, d, i, o);
                      a._handleCachedData(h, u, _, p && !s, n),
                        a._verifyCachedData(h, u, _, l, n);
                    }
                  }),
                );
              }
            },
            t.prototype._createAndEvalScript = function (t, n, r, i, o) {
              var s = t.getRecorder();
              s.record(31, r.filename);
              var a = new this._vm.Script(n, r),
                l = a.runInThisContext(r),
                u = t.getGlobalAMDDefineFunc(),
                c = !1,
                d = function () {
                  return c = !0, u.apply(null, arguments);
                };
              return d.amd = u.amd,
                l.call(
                  e.global,
                  t.getGlobalAMDRequireFunc(),
                  d,
                  r.filename,
                  this._path.dirname(r.filename),
                ),
                s.record(32, r.filename),
                c ? i() : o(
                  new Error(
                    "Didn't receive define call in " + r.filename + "!",
                  ),
                ),
                a;
            },
            t.prototype._getElectronRendererScriptPathOrUri = function (e) {
              if (!this._env.isElectronRenderer) return e;
              var t = e.match(/^([a-z])\:(.*)/i);
              return t ? "file:///" +
                (t[1].toUpperCase() + ":" + t[2]).replace(/\\/g, "/")
              : "file://" + e;
            },
            t.prototype._getCachedDataPath = function (e, t) {
              var n = this._crypto.createHash("md5").update(t, "utf8").update(
                  e.seed,
                  "utf8",
                ).digest("hex"),
                r = this._path.basename(t).replace(/\.js$/, "");
              return this._path.join(e.path, r + "-" + n + ".code");
            },
            t.prototype._handleCachedData = function (e, t, n, r, i) {
              var o = this;
              e.cachedDataRejected
                ? this._fs.unlink(
                  n,
                  (function (r) {
                    i.getRecorder().record(62, n),
                      o._createAndWriteCachedData(e, t, n, i),
                      r && i.getConfig().onError(r);
                  }),
                )
                : r && this._createAndWriteCachedData(e, t, n, i);
            },
            t.prototype._createAndWriteCachedData = function (e, t, n, r) {
              var i = this,
                o = Math.ceil(
                  r.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
                    (1 + Math.random()),
                ),
                s = -1,
                a = 0,
                l = void 0,
                u = function () {
                  setTimeout(
                    (function () {
                      l ||
                        (l = i._crypto.createHash("md5").update(t, "utf8")
                          .digest());
                      var o = e.createCachedData();
                      0 === o.length || o.length === s || a >= 5 ||
                        (o.length < s ? u() : (s = o.length,
                          i._fs.writeFile(
                            n,
                            Buffer.concat([l, o]),
                            (function (e) {
                              e && r.getConfig().onError(e),
                                r.getRecorder().record(63, n),
                                u();
                            }),
                          )));
                    }),
                    o * Math.pow(4, a++),
                  );
                };
              u();
            },
            t.prototype._readSourceAndCachedData = function (e, t, n, r) {
              if (t) {
                var i = void 0,
                  o = void 0,
                  s = void 0,
                  a = 2,
                  l = function (e) {
                    e ? r(e) : 0 == --a && r(void 0, i, o, s);
                  };
                this._fs.readFile(
                  e,
                  { encoding: "utf8" },
                  (function (e, t) {
                    i = t, l(e);
                  }),
                ),
                  this._fs.readFile(
                    t,
                    (function (e, r) {
                      !e && r && r.length > 0
                        ? (s = r.slice(0, 16), o = r.slice(16), n.record(60, t))
                        : n.record(61, t), l();
                    }),
                  );
              }
              elsethis._fs.readFile(e, { encoding: "utf8" }, r);
            },
            t.prototype._verifyCachedData = function (e, t, n, r, i) {
              var o = this;
              r && (e.cachedDataRejected || setTimeout(
                (function () {
                  var e = o._crypto.createHash("md5").update(t, "utf8")
                    .digest();
                  r.equals(e) ||
                    (i.getConfig().onError(
                      new Error(
                        "FAILED TO VERIFY CACHED DATA, deleting stale '" + n +
                          "' now, but a RESTART IS REQUIRED",
                      ),
                    ),
                      o._fs.unlink(
                        n,
                        (function (e) {
                          e && i.getConfig().onError(e);
                        }),
                      ));
                }),
                Math.ceil(5e3 * (1 + Math.random())),
              ));
            },
            t._BOM = 65279,
            t._PREFIX = "(function (require, define, __filename, __dirname) { ",
            t._SUFFIX = "\n});",
            t;
        }();
      function s(e, t) {
        if (t.__$__isRecorded) return t;
        var n = function (n) {
          e.record(33, n);
          try {
            return t(n);
          } finally {
            e.record(34, n);
          }
        };
        return n.__$__isRecorded = !0, n;
      }
      e.ensureRecordedNodeRequire = s,
        e.createScriptLoader = function (e) {
          return new t(e);
        };
    }(t || (t = {})),
    function (e) {
      var t = function () {
        function t(e) {
          var t = e.lastIndexOf("/");
          this.fromModulePath = -1 !== t ? e.substr(0, t + 1) : "";
        }
        return t._normalizeModuleId = function (e) {
          var t, n = e;
          for (t = /\/\.\//; t.test(n);) n = n.replace(t, "/");
          for (
            n = n.replace(/^\.\//g, ""),
              t =
                /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
            t.test(n);
          ) {
            n = n.replace(t, "/");
          }
          return n = n.replace(
            /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
            "",
          );
        },
          t.prototype.resolveModule = function (n) {
            var r = n;
            return e.Utilities.isAbsolutePath(r) ||
              (e.Utilities.startsWith(r, "./") ||
                  e.Utilities.startsWith(r, "../")) &&
                (r = t._normalizeModuleId(this.fromModulePath + r)),
              r;
          },
          t.ROOT = new t(""),
          t;
      }();
      e.ModuleIdResolver = t;
      var n = function () {
        function t(e, t, n, r, i, o) {
          this.id = e,
            this.strId = t,
            this.dependencies = n,
            this._callback = r,
            this._errorback = i,
            this.moduleIdResolver = o,
            this.exports = {},
            this.error = null,
            this.exportsPassedIn = !1,
            this.unresolvedDependenciesCount = this.dependencies.length,
            this._isComplete = !1;
        }
        return t._safeInvokeFunction = function (t, n) {
          try {
            return { returnedValue: t.apply(e.global, n), producedError: null };
          } catch (e) {
            return { returnedValue: null, producedError: e };
          }
        },
          t._invokeFactory = function (t, n, r, i) {
            return t.isBuild() && !e.Utilities.isAnonymousModule(n)
              ? { returnedValue: null, producedError: null }
              : t.shouldCatchError()
              ? this._safeInvokeFunction(r, i)
              : { returnedValue: r.apply(e.global, i), producedError: null };
          },
          t.prototype.complete = function (n, r, i) {
            this._isComplete = !0;
            var o = null;
            if (this._callback) {
              if ("function" == typeof this._callback) {
                n.record(21, this.strId);
                var s = t._invokeFactory(r, this.strId, this._callback, i);
                o = s.producedError,
                  n.record(22, this.strId),
                  o || void 0 === s.returnedValue ||
                  this.exportsPassedIn && !e.Utilities.isEmpty(this.exports) ||
                  (this.exports = s.returnedValue);
              } else this.exports = this._callback;
            }
            if (o) {
              var a = e.ensureError(o);
              a.phase = "factory",
                a.moduleId = this.strId,
                this.error = a,
                r.onError(a);
            }
            this.dependencies = null,
              this._callback = null,
              this._errorback = null,
              this.moduleIdResolver = null;
          },
          t.prototype.onDependencyError = function (e) {
            return this._isComplete = !0,
              this.error = e,
              !!this._errorback && (this._errorback(e), !0);
          },
          t.prototype.isComplete = function () {
            return this._isComplete;
          },
          t;
      }();
      e.Module = n;
      var r = function () {
          function e() {
            this._nextId = 0,
              this._strModuleIdToIntModuleId = new Map(),
              this._intModuleIdToStrModuleId = [],
              this.getModuleId("exports"),
              this.getModuleId("module"),
              this.getModuleId("require");
          }
          return e.prototype.getMaxModuleId = function () {
            return this._nextId;
          },
            e.prototype.getModuleId = function (e) {
              var t = this._strModuleIdToIntModuleId.get(e);
              return void 0 === t &&
                (t = this._nextId++,
                  this._strModuleIdToIntModuleId.set(e, t),
                  this._intModuleIdToStrModuleId[t] = e),
                t;
            },
            e.prototype.getStrModuleId = function (e) {
              return this._intModuleIdToStrModuleId[e];
            },
            e;
        }(),
        i = function () {
          function e(e) {
            this.id = e;
          }
          return e.EXPORTS = new e(0),
            e.MODULE = new e(1),
            e.REQUIRE = new e(2),
            e;
        }();
      e.RegularDependency = i;
      var o = function (e, t, n) {
        this.id = e, this.pluginId = t, this.pluginParam = n;
      };
      e.PluginDependency = o;
      var s = function () {
        function s(t, n, i, o, s) {
          void 0 === s && (s = 0),
            this._env = t,
            this._scriptLoader = n,
            this._loaderAvailableTimestamp = s,
            this._defineFunc = i,
            this._requireFunc = o,
            this._moduleIdProvider = new r(),
            this._config = new e.Configuration(this._env),
            this._modules2 = [],
            this._knownModules2 = [],
            this._inverseDependencies2 = [],
            this._inversePluginDependencies2 = new Map(),
            this._currentAnnonymousDefineCall = null,
            this._recorder = null,
            this._buildInfoPath = [],
            this._buildInfoDefineStack = [],
            this._buildInfoDependencies = [];
        }
        return s.prototype.reset = function () {
          return new s(
            this._env,
            this._scriptLoader,
            this._defineFunc,
            this._requireFunc,
            this._loaderAvailableTimestamp,
          );
        },
          s.prototype.getGlobalAMDDefineFunc = function () {
            return this._defineFunc;
          },
          s.prototype.getGlobalAMDRequireFunc = function () {
            return this._requireFunc;
          },
          s._findRelevantLocationInStack = function (e, t) {
            for (
              var n = function (e) {
                  return e.replace(/\\/g, "/");
                },
                r = n(e),
                i = t.split(/\n/),
                o = 0;
              o < i.length;
              o++
            ) {
              var s = i[o].match(/(.*):(\d+):(\d+)\)?$/);
              if (s) {
                var a = s[1],
                  l = s[2],
                  u = s[3],
                  c = Math.max(a.lastIndexOf(" ") + 1, a.lastIndexOf("(") + 1);
                if ((a = n(a = a.substr(c))) === r) {
                  var d = { line: parseInt(l, 10), col: parseInt(u, 10) };
                  return 1 === d.line &&
                    (d.col -=
                      "(function (require, define, __filename, __dirname) { "
                        .length),
                    d;
                }
              }
            }
            throw new Error(
              "Could not correlate define call site for needle " + e,
            );
          },
          s.prototype.getBuildInfo = function () {
            if (!this._config.isBuild()) return null;
            for (
              var e = [], t = 0, n = 0, r = this._modules2.length;
              n < r;
              n++
            ) {
              var i = this._modules2[n];
              if (i) {
                var o = this._buildInfoPath[i.id] || null,
                  a = this._buildInfoDefineStack[i.id] || null,
                  l = this._buildInfoDependencies[i.id];
                e[t++] = {
                  id: i.strId,
                  path: o,
                  defineLocation: o && a ? s._findRelevantLocationInStack(o, a)
                  : null,
                  dependencies: l,
                  shim: null,
                  exports: i.exports,
                };
              }
            }
            return e;
          },
          s.prototype.getRecorder = function () {
            return this._recorder ||
              (this._config.shouldRecordStats()
                ? this._recorder = new e.LoaderEventRecorder(
                  this._loaderAvailableTimestamp,
                )
                : this._recorder = e.NullLoaderEventRecorder.INSTANCE),
              this._recorder;
          },
          s.prototype.getLoaderEvents = function () {
            return this.getRecorder().getEvents();
          },
          s.prototype.enqueueDefineAnonymousModule = function (e, t) {
            if (null !== this._currentAnnonymousDefineCall) {
              throw new Error(
                "Can only have one anonymous define call per script file",
              );
            }
            var n = null;
            this._config.isBuild() &&
            (n = new Error("StackLocation").stack || null),
              this._currentAnnonymousDefineCall = {
                stack: n,
                dependencies: e,
                callback: t,
              };
          },
          s.prototype.defineModule = function (e, r, i, o, s, a) {
            var l = this;
            void 0 === a && (a = new t(e));
            var u = this._moduleIdProvider.getModuleId(e);
            if (
              this._modules2[u]
            ) {
              this._config.isDuplicateMessageIgnoredFor(e) ||
                console.warn("Duplicate definition of module '" + e + "'");
            } else {
              var c = new n(u, e, this._normalizeDependencies(r, a), i, o, a);
              this._modules2[u] = c,
                this._config.isBuild() &&
                (this._buildInfoDefineStack[u] = s,
                  this._buildInfoDependencies[u] = (c.dependencies || []).map(
                    (function (e) {
                      return l._moduleIdProvider.getStrModuleId(e.id);
                    }),
                  )),
                this._resolve(c);
            }
          },
          s.prototype._normalizeDependency = function (e, t) {
            if ("exports" === e)return i.EXPORTS;
            if ("module" === e)return i.MODULE;
            if ("require" === e) return i.REQUIRE;
            var n = e.indexOf("!");
            if (n >= 0) {
              var r = t.resolveModule(e.substr(0, n)),
                s = t.resolveModule(e.substr(n + 1)),
                a = this._moduleIdProvider.getModuleId(r + "!" + s),
                l = this._moduleIdProvider.getModuleId(r);
              return new o(a, l, s);
            }
            return new i(
              this._moduleIdProvider.getModuleId(t.resolveModule(e)),
            );
          },
          s.prototype._normalizeDependencies = function (e, t) {
            for (var n = [], r = 0, i = 0, o = e.length; i < o; i++) {
              n[r++] = this._normalizeDependency(e[i], t);
            }
            return n;
          },
          s.prototype._relativeRequire = function (t, n, r, i) {
            if ("string" == typeof n)return this.synchronousRequire(n, t);
            this.defineModule(
              e.Utilities.generateAnonymousModule(),
              n,
              r,
              i,
              null,
              t,
            );
          },
          s.prototype.synchronousRequire = function (e, n) {
            void 0 === n && (n = new t(e));
            var r = this._normalizeDependency(e, n), i = this._modules2[r.id];
            if (!i) {
              throw new Error(
                "Check dependency list! Synchronous require cannot resolve module '" +
                  e + "'. This is the first mention of this module!",
              );
            }
            if (!i.isComplete()) {
              throw new Error(
                "Check dependency list! Synchronous require cannot resolve module '" +
                  e + "'. This module has not been resolved completely yet.",
              );
            }
            if (i.error) throw i.error;
            return i.exports;
          },
          s.prototype.configure = function (t, n) {
            var r = this._config.shouldRecordStats();
            this._config = n
              ? new e.Configuration(this._env, t)
              : this._config.cloneAndMerge(t),
              this._config.shouldRecordStats() && !r && (this._recorder = null);
          },
          s.prototype.getConfig = function () {
            return this._config;
          },
          s.prototype._onLoad = function (e) {
            if (null !== this._currentAnnonymousDefineCall) {
              var t = this._currentAnnonymousDefineCall;
              this._currentAnnonymousDefineCall = null,
                this.defineModule(
                  this._moduleIdProvider.getStrModuleId(e),
                  t.dependencies,
                  t.callback,
                  null,
                  t.stack,
                );
            }
          },
          s.prototype._createLoadError = function (t, n) {
            var r = this,
              i = this._moduleIdProvider.getStrModuleId(t),
              o = (this._inverseDependencies2[t] || []).map(
                (function (e) {
                  return r._moduleIdProvider.getStrModuleId(e);
                }),
              ),
              s = e.ensureError(n);
            return s.phase = "loading", s.moduleId = i, s.neededBy = o, s;
          },
          s.prototype._onLoadError = function (e, t) {
            var r = this._createLoadError(e, t);
            this._modules2[e] ||
              (this._modules2[e] = new n(
                e,
                this._moduleIdProvider.getStrModuleId(e),
                [],
                (function () {}),
                (function () {}),
                null,
              ));
            for (
              var i = [], o = 0, s = this._moduleIdProvider.getMaxModuleId();
              o < s;
              o++
            ) {
              i[o] = !1;
            }
            var a = !1, l = [];
            for (l.push(e), i[e] = !0; l.length > 0;) {
              var u = l.shift(), c = this._modules2[u];
              c && (a = c.onDependencyError(r) || a);
              var d = this._inverseDependencies2[u];
              if (d) {
                for (o = 0, s = d.length; o < s; o++) {
                  var h = d[o];
                  i[h] || (l.push(h), i[h] = !0);
                }
              }
            }
            a || this._config.onError(r);
          },
          s.prototype._hasDependencyPath = function (e, t) {
            var n = this._modules2[e];
            if (!n)return !1;
            for (
              var r = [], i = 0, o = this._moduleIdProvider.getMaxModuleId();
              i < o;
              i++
            ) {
              r[i] = !1;
            }
            var s = [];
            for (s.push(n), r[e] = !0; s.length > 0;) {
              var a = s.shift().dependencies;
              if (a) {
                for (i = 0, o = a.length; i < o; i++) {
                  var l = a[i];
                  if (l.id === t) return !0;
                  var u = this._modules2[l.id];
                  u && !r[l.id] && (r[l.id] = !0, s.push(u));
                }
              }
            }
            return !1;
          },
          s.prototype._findCyclePath = function (e, t, n) {
            if (e === t || 50 === n)return [e];
            var r = this._modules2[e];
            if (!r)return null;
            var i = r.dependencies;
            if (i) {
              for (var o = 0, s = i.length; o < s; o++) {
                var a = this._findCyclePath(i[o].id, t, n + 1);
                if (null !== a) return a.push(e), a;
              }
            }
            return null;
          },
          s.prototype._createRequire = function (t) {
            var n = this,
              r = function (e, r, i) {
                return n._relativeRequire(t, e, r, i);
              };
            return r.toUrl = function (e) {
              return n._config.requireToUrl(t.resolveModule(e));
            },
              r.getStats = function () {
                return n.getLoaderEvents();
              },
              r.config = function (e, t) {
                void 0 === t && (t = !1), n.configure(e, t);
              },
              r.__$__nodeRequire = e.global.nodeRequire,
              r;
          },
          s.prototype._loadModule = function (e) {
            var t = this;
            if (!this._modules2[e] && !this._knownModules2[e]) {
              this._knownModules2[e] = !0;
              var n = this._moduleIdProvider.getStrModuleId(e),
                r = this._config.moduleIdToPaths(n);
              this._env.isNode &&
                (-1 === n.indexOf("/") || /^@[^\/]+\/[^\/]+$/.test(n)) &&
                r.push("node|" + n);
              var i = -1,
                o = function (n) {
                  if (++i >= r.length)t._onLoadError(e, n);
                  else {
                    var s = r[i], a = t.getRecorder();
                    if (t._config.isBuild() && "empty:" === s) {
                      return t._buildInfoPath[e] = s,
                        t.defineModule(
                          t._moduleIdProvider.getStrModuleId(e),
                          [],
                          null,
                          null,
                          null,
                        ),
                        void t._onLoad(e);
                    }
                    a.record(10, s),
                      t._scriptLoader.load(
                        t,
                        s,
                        (function () {
                          t._config.isBuild() && (t._buildInfoPath[e] = s),
                            a.record(11, s),
                            t._onLoad(e);
                        }),
                        (function (e) {
                          a.record(12, s), o(e);
                        }),
                      );
                  }
                };
              o(null);
            }
          },
          s.prototype._loadPluginDependency = function (e, n) {
            var r = this;
            if (!this._modules2[n.id] && !this._knownModules2[n.id]) {
              this._knownModules2[n.id] = !0;
              var i = function (e) {
                r.defineModule(
                  r._moduleIdProvider.getStrModuleId(n.id),
                  [],
                  e,
                  null,
                  null,
                );
              };
              i.error = function (e) {
                r._config.onError(r._createLoadError(n.id, e));
              },
                e.load(
                  n.pluginParam,
                  this._createRequire(t.ROOT),
                  i,
                  this._config.getOptionsLiteral(),
                );
            }
          },
          s.prototype._resolve = function (e) {
            var t = this, n = e.dependencies;
            if (n) {
              for (var r = 0, s = n.length; r < s; r++) {
                var a = n[r];
                if (a !== i.EXPORTS) {
                  if (a !== i.MODULE) {
                    if (a !== i.REQUIRE) {
                      var l = this._modules2[a.id];
                      if (l && l.isComplete()) {
                        if (l.error) return void e.onDependencyError(l.error);
                        e.unresolvedDependenciesCount--;
                      } else if (this._hasDependencyPath(a.id, e.id)) {
                        console.warn(
                          "There is a dependency cycle between '" +
                            this._moduleIdProvider.getStrModuleId(a.id) +
                            "' and '" +
                            this._moduleIdProvider.getStrModuleId(e.id) +
                            "'. The cyclic path follows:",
                        );
                        var u = this._findCyclePath(a.id, e.id, 0) || [];
                        u.reverse(),
                          u.push(a.id),
                          console.warn(
                            u.map(
                              (function (e) {
                                return t._moduleIdProvider.getStrModuleId(e);
                              }),
                            ).join(" => \n"),
                          ),
                          e.unresolvedDependenciesCount--;
                      } else if (
                        this._inverseDependencies2[a.id] =
                          this._inverseDependencies2[a.id] || [],
                          this._inverseDependencies2[a.id].push(e.id),
                          a instanceof o
                      ) {
                        var c = this._modules2[a.pluginId];
                        if (c && c.isComplete()) {
                          this._loadPluginDependency(c.exports, a);
                          continue;
                        }
                        var d = this._inversePluginDependencies2.get(
                          a.pluginId,
                        );
                        d ||
                        (d = [],
                          this._inversePluginDependencies2.set(a.pluginId, d)),
                          d.push(a),
                          this._loadModule(a.pluginId);
                      } else this._loadModule(a.id);
                    } else e.unresolvedDependenciesCount--;
                  } else e.unresolvedDependenciesCount--;
                } else e.exportsPassedIn = !0, e.unresolvedDependenciesCount--;
              }
            }
            0 === e.unresolvedDependenciesCount && this._onModuleComplete(e);
          },
          s.prototype._onModuleComplete = function (e) {
            var t = this, n = this.getRecorder();
            if (!e.isComplete()) {
              var r = e.dependencies, o = [];
              if (r) {
                for (var s = 0, a = r.length; s < a; s++) {
                  var l = r[s];
                  if (l !== i.EXPORTS) {
                    if (l !== i.MODULE) {
                      if (l !== i.REQUIRE) {
                        var u = this._modules2[l.id];
                        o[s] = u ? u.exports : null;
                      } else o[s] = this._createRequire(e.moduleIdResolver);
                    } else {
                      o[s] = {
                        id: e.strId,
                        config: function () {
                          return t._config.getConfigForModule(e.strId);
                        },
                      };
                    }
                  } else o[s] = e.exports;
                }
              }
              e.complete(n, this._config, o);
              var c = this._inverseDependencies2[e.id];
              if (this._inverseDependencies2[e.id] = null, c) {
                for (s = 0, a = c.length; s < a; s++) {
                  var d = c[s], h = this._modules2[d];
                  h.unresolvedDependenciesCount--,
                    0 === h.unresolvedDependenciesCount &&
                    this._onModuleComplete(h);
                }
              }
              var f = this._inversePluginDependencies2.get(e.id);
              if (f) {
                this._inversePluginDependencies2.delete(e.id);
                for (s = 0, a = f.length; s < a; s++) {
                  this._loadPluginDependency(e.exports, f[s]);
                }
              }
            }
          },
          s;
      }();
      e.ModuleManager = s;
    }(t || (t = {})),
    function (t) {
      var n = new t.Environment(),
        r = null,
        i = function (e, t, n) {
          "string" != typeof e && (n = t, t = e, e = null),
            "object" == typeof t && Array.isArray(t) || (n = t, t = null),
            t || (t = ["require", "exports", "module"]),
            e
              ? r.defineModule(e, t, n, null, null)
              : r.enqueueDefineAnonymousModule(t, n);
        };
      i.amd = { jQuery: !0 };
      var o = function (e, t) {
          void 0 === t && (t = !1), r.configure(e, t);
        },
        s = function () {
          if (1 === arguments.length) {
            if (
              arguments[0] instanceof Object && !Array.isArray(arguments[0])
            ) {
              return void o(arguments[0]);
            }
            if ("string" == typeof arguments[0]) {
              return r.synchronousRequire(
                arguments[0],
              );
            }
          }
          if (
            2 !== arguments.length && 3 !== arguments.length ||
            !Array.isArray(arguments[0])
          ) {
            throw new Error("Unrecognized require call");
          }
          r.defineModule(
            t.Utilities.generateAnonymousModule(),
            arguments[0],
            arguments[1],
            arguments[2],
            null,
          );
        };
      function a() {
        if (void 0 !== t.global.require || "undefined" != typeof require) {
          var e = t.global.require || require;
          if ("function" == typeof e && "function" == typeof e.resolve) {
            var o = t.ensureRecordedNodeRequire(r.getRecorder(), e);
            t.global.nodeRequire = o, s.nodeRequire = o, s.__$__nodeRequire = o;
          }
        }
        n.isNode && !n.isElectronRenderer ? (module.exports = s, require = s)
        : (n.isElectronRenderer || (t.global.define = i), t.global.require = s);
      }
      s.config = o,
        s.getConfig = function () {
          return r.getConfig().getOptionsLiteral();
        },
        s.reset = function () {
          r = r.reset();
        },
        s.getBuildInfo = function () {
          return r.getBuildInfo();
        },
        s.getStats = function () {
          return r.getLoaderEvents();
        },
        s.define = function () {
          return i.apply(null, arguments);
        },
        t.init = a,
        "function" == typeof t.global.define && t.global.define.amd ||
        (r = new t.ModuleManager(
          n,
          t.createScriptLoader(n),
          i,
          s,
          t.Utilities.getHighPerformanceTimestamp(),
        ),
          void 0 !== t.global.require &&
          "function" != typeof t.global.require && s.config(t.global.require),
          (e = function () {
            return i.apply(null, arguments);
          }).amd = i.amd,
          "undefined" == typeof doNotInitLoader && a());
    }(t || (t = {})),
    e(
      n[13],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        function n(e, t) {
          return function e(t, n, r, i, o) {
            if (i <= r) return;
            const s = r + (i - r) / 2 | 0;
            e(t, n, r, s, o);
            e(t, n, s + 1, i, o);
            if (n(t[s], t[s + 1]) <= 0) return;
            !function (e, t, n, r, i, o) {
              let s = n, a = r + 1;
              for (let t = n; t <= i; t++) o[t] = e[t];
              for (let l = n; l <= i; l++) {
                s > r
                  ? e[l] = o[a++]
                  : a > i
                  ? e[l] = o[s++]
                  : t(o[a], o[s]) < 0
                  ? e[l] = o[a++]
                  : e[l] = o[s++];
              }
            }(t, n, r, s, i, o);
          }(e, t, 0, e.length - 1, []),
            e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.asArray = t.pushToEnd = t.pushToStart = t.arrayInsert = t.range = t
            .flatten = t.firstOrDefault = t.distinctES6 = t.distinct = t
              .isNonEmptyArray = t.isFalsyOrEmpty = t.coalesce = t.groupBy = t
                .mergeSort = t.quickSelect = t.findFirstInSorted = t
                  .binarySearch = t.equals = t.tail2 = t.tail = void 0,
          t.tail = function (e, t = 0) {
            return e[e.length - (1 + t)];
          },
          t.tail2 = function (e) {
            if (0 === e.length) throw new Error("Invalid tail call");
            return [e.slice(0, e.length - 1), e[e.length - 1]];
          },
          t.equals = function (e, t, n = ((e, t) => e === t)) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            if (e.length !== t.length) return !1;
            for (let r = 0, i = e.length; r < i; r++) {
              if (!n(e[r], t[r])) return !1;
            }
            return !0;
          },
          t.binarySearch = function (e, t, n) {
            let r = 0, i = e.length - 1;
            for (; r <= i;) {
              const o = (r + i) / 2 | 0, s = n(e[o], t);
              if (s < 0) r = o + 1;
              else {
                if (!(s > 0)) return o;
                i = o - 1;
              }
            }
            return -(r + 1);
          },
          t.findFirstInSorted = function (e, t) {
            let n = 0, r = e.length;
            if (0 === r) return 0;
            for (; n < r;) {
              const i = Math.floor((n + r) / 2);
              t(e[i]) ? r = i : n = i + 1;
            }
            return n;
          },
          t.quickSelect = function e(t, n, r) {
            if ((t |= 0) >= n.length) throw new TypeError("invalid index");
            let i = n[Math.floor(n.length * Math.random())],
              o = [],
              s = [],
              a = [];
            for (let e of n) {
              const t = r(e, i);
              t < 0 ? o.push(e) : t > 0 ? s.push(e) : a.push(e);
            }
            return t < o.length ? e(t, o, r)
            : t < o.length + a.length ? a[0]
            : e(t - (o.length + a.length), s, r);
          },
          t.mergeSort = n,
          t.groupBy = function (e, t) {
            const r = [];
            let i = void 0;
            for (const o of n(e.slice(0), t)) {
              i && 0 === t(i[0], o) ? i.push(o) : (i = [o], r.push(i));
            }
            return r;
          },
          t.coalesce = function (e) {
            return e.filter((e) => !!e);
          },
          t.isFalsyOrEmpty = function (e) {
            return !Array.isArray(e) || 0 === e.length;
          },
          t.isNonEmptyArray = function (e) {
            return Array.isArray(e) && e.length > 0;
          },
          t.distinct = function (e, t) {
            if (!t)return e.filter((t, n) => e.indexOf(t) === n);
            const n = Object.create(null);
            return e.filter((e) => {
              const r = t(e);
              return !n[r] && (n[r] = !0, !0);
            });
          },
          t.distinctES6 = function (e) {
            const t = new Set();
            return e.filter((e) => !t.has(e) && (t.add(e), !0));
          },
          t.firstOrDefault = function (e, t) {
            return e.length > 0 ? e[0] : t;
          },
          t.flatten = function (e) {
            return [].concat(...e);
          },
          t.range = function (e, t) {
            let n = "number" == typeof t ? e : 0;
            "number" == typeof t ? n = e : (n = 0, t = e);
            const r = [];
            if (n <= t) for (let e = n; e < t; e++) r.push(e);
            else for (let e = n; e > t; e--) r.push(e);
            return r;
          },
          t.arrayInsert = function (e, t, n) {
            const r = e.slice(0, t), i = e.slice(t);
            return r.concat(n, i);
          },
          t.pushToStart = function (e, t) {
            const n = e.indexOf(t);
            n > -1 && (e.splice(n, 1), e.unshift(t));
          },
          t.pushToEnd = function (e, t) {
            const n = e.indexOf(t);
            n > -1 && (e.splice(n, 1), e.push(t));
          },
          t.asArray = function (e) {
            return Array.isArray(e) ? e : [e];
          };
      }),
    ),
    e(
      n[14],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.DiffChange = void 0;
        t.DiffChange = class {
          constructor(e, t, n, r) {
            this.originalStart = e,
              this.originalLength = t,
              this.modifiedStart = n,
              this.modifiedLength = r;
          }
          getOriginalEnd() {
            return this.originalStart + this.originalLength;
          }
          getModifiedEnd() {
            return this.modifiedStart + this.modifiedLength;
          }
        };
      }),
    ),
    e(
      n[4],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.illegalState = t.illegalArgument = t.canceled = t
            .isPromiseCanceledError = t.transformErrorForSerialization = t
              .onUnexpectedExternalError = t.onUnexpectedError = t
                .errorHandler = t.ErrorHandler = void 0;
        class n {
          constructor() {
            this.listeners = [],
              this.unexpectedErrorHandler = function (e) {
                setTimeout(() => {
                  if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
                  throw e;
                }, 0);
              };
          }
          emit(e) {
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          onUnexpectedError(e) {
            this.unexpectedErrorHandler(e), this.emit(e);
          }
          onUnexpectedExternalError(e) {
            this.unexpectedErrorHandler(e);
          }
        }
        t.ErrorHandler = n,
          t.errorHandler = new n(),
          t.onUnexpectedError = function (e) {
            i(e) || t.errorHandler.onUnexpectedError(e);
          },
          t.onUnexpectedExternalError = function (e) {
            i(e) || t.errorHandler.onUnexpectedExternalError(e);
          },
          t.transformErrorForSerialization = function (e) {
            if (e instanceof Error) {
              let { name: t, message: n } = e;
              return {
                $isError: !0,
                name: t,
                message: n,
                stack: e.stacktrace || e.stack,
              };
            }
            return e;
          };
        const r = "Canceled";
        function i(e) {
          return e instanceof Error && e.name === r && e.message === r;
        }
        t.isPromiseCanceledError = i,
          t.canceled = function () {
            const e = new Error(r);
            return e.name = e.message, e;
          },
          t.illegalArgument = function (e) {
            return e ? new Error(`Illegal argument: ${e}`)
            : new Error("Illegal argument");
          },
          t.illegalState = function (e) {
            return e ? new Error(`Illegal state: ${e}`)
            : new Error("Illegal state");
          };
      }),
    ),
    e(
      n[15],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.Iterable = void 0,
          function (e) {
            e.is = function (e) {
              return e && "object" == typeof e &&
                "function" == typeof e[Symbol.iterator];
            };
            const t = Object.freeze([]);
            e.empty = function () {
              return t;
            },
              e.single = function* (e) {
                yield e;
              },
              e.from = function (e) {
                return e || t;
              },
              e.first = function (e) {
                return e[Symbol.iterator]().next().value;
              },
              e.some = function (e, t) {
                for (const n of e)if (t(n))return !0;
                return !1;
              },
              e.filter = function* (e, t) {
                for (const n of e) t(n) && (yield n);
              },
              e.map = function* (e, t) {
                for (const n of e)yield t(n);
              },
              e.concat = function* (...e) {
                for (const t of e) for (const e of t) yield e;
              },
              e.consume = function (t, n = Number.POSITIVE_INFINITY) {
                const r = [];
                if (0 === n)return [r, t];
                const i = t[Symbol.iterator]();
                for (let t = 0; t < n; t++) {
                  const t = i.next();
                  if (t.done) return [r, e.empty()];
                  r.push(t.value);
                }
                return [r, { [Symbol.iterator]: () => i }];
              };
          }(t.Iterable || (t.Iterable = {}));
      }),
    ),
    e(
      n[16],
      r([0, 1, 4]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.ResolvedKeybinding = t.ResolvedKeybindingPart = t.ChordKeybinding =
            t.SimpleKeybinding = t.createSimpleKeybinding = t.createKeybinding =
              t.KeyChord = t.KeyCodeUtils = void 0;
        class r {
          constructor() {
            this._keyCodeToStr = [], this._strToKeyCode = Object.create(null);
          }
          define(e, t) {
            this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
          }
          keyCodeToStr(e) {
            return this._keyCodeToStr[e];
          }
          strToKeyCode(e) {
            return this._strToKeyCode[e.toLowerCase()] || 0;
          }
        }
        const i = new r(), o = new r(), s = new r();
        function a(e, t) {
          const n = !!(2048 & e), r = !!(256 & e);
          return new l(
            2 === t ? r : n,
            !!(1024 & e),
            !!(512 & e),
            2 === t ? n : r,
            255 & e,
          );
        }
        !function () {
          function e(e, t, n = t, r = n) {
            i.define(e, t), o.define(e, n), s.define(e, r);
          }
          e(0, "unknown"),
            e(1, "Backspace"),
            e(2, "Tab"),
            e(3, "Enter"),
            e(4, "Shift"),
            e(5, "Ctrl"),
            e(6, "Alt"),
            e(7, "PauseBreak"),
            e(8, "CapsLock"),
            e(9, "Escape"),
            e(10, "Space"),
            e(11, "PageUp"),
            e(12, "PageDown"),
            e(13, "End"),
            e(14, "Home"),
            e(15, "LeftArrow", "Left"),
            e(16, "UpArrow", "Up"),
            e(17, "RightArrow", "Right"),
            e(18, "DownArrow", "Down"),
            e(19, "Insert"),
            e(20, "Delete"),
            e(21, "0"),
            e(22, "1"),
            e(23, "2"),
            e(24, "3"),
            e(25, "4"),
            e(26, "5"),
            e(27, "6"),
            e(28, "7"),
            e(29, "8"),
            e(30, "9"),
            e(31, "A"),
            e(32, "B"),
            e(33, "C"),
            e(34, "D"),
            e(35, "E"),
            e(36, "F"),
            e(37, "G"),
            e(38, "H"),
            e(39, "I"),
            e(40, "J"),
            e(41, "K"),
            e(42, "L"),
            e(43, "M"),
            e(44, "N"),
            e(45, "O"),
            e(46, "P"),
            e(47, "Q"),
            e(48, "R"),
            e(49, "S"),
            e(50, "T"),
            e(51, "U"),
            e(52, "V"),
            e(53, "W"),
            e(54, "X"),
            e(55, "Y"),
            e(56, "Z"),
            e(57, "Meta"),
            e(58, "ContextMenu"),
            e(59, "F1"),
            e(60, "F2"),
            e(61, "F3"),
            e(62, "F4"),
            e(63, "F5"),
            e(64, "F6"),
            e(65, "F7"),
            e(66, "F8"),
            e(67, "F9"),
            e(68, "F10"),
            e(69, "F11"),
            e(70, "F12"),
            e(71, "F13"),
            e(72, "F14"),
            e(73, "F15"),
            e(74, "F16"),
            e(75, "F17"),
            e(76, "F18"),
            e(77, "F19"),
            e(78, "NumLock"),
            e(79, "ScrollLock"),
            e(80, ";", ";", "OEM_1"),
            e(81, "=", "=", "OEM_PLUS"),
            e(82, ",", ",", "OEM_COMMA"),
            e(83, "-", "-", "OEM_MINUS"),
            e(84, ".", ".", "OEM_PERIOD"),
            e(85, "/", "/", "OEM_2"),
            e(86, "`", "`", "OEM_3"),
            e(110, "ABNT_C1"),
            e(111, "ABNT_C2"),
            e(87, "[", "[", "OEM_4"),
            e(88, "\\", "\\", "OEM_5"),
            e(89, "]", "]", "OEM_6"),
            e(90, "'", "'", "OEM_7"),
            e(91, "OEM_8"),
            e(92, "OEM_102"),
            e(93, "NumPad0"),
            e(94, "NumPad1"),
            e(95, "NumPad2"),
            e(96, "NumPad3"),
            e(97, "NumPad4"),
            e(98, "NumPad5"),
            e(99, "NumPad6"),
            e(100, "NumPad7"),
            e(101, "NumPad8"),
            e(102, "NumPad9"),
            e(103, "NumPad_Multiply"),
            e(104, "NumPad_Add"),
            e(105, "NumPad_Separator"),
            e(106, "NumPad_Subtract"),
            e(107, "NumPad_Decimal"),
            e(108, "NumPad_Divide");
        }(),
          function (e) {
            e.toString = function (e) {
              return i.keyCodeToStr(e);
            },
              e.fromString = function (e) {
                return i.strToKeyCode(e);
              },
              e.toUserSettingsUS = function (e) {
                return o.keyCodeToStr(e);
              },
              e.toUserSettingsGeneral = function (e) {
                return s.keyCodeToStr(e);
              },
              e.fromUserSettings = function (e) {
                return o.strToKeyCode(e) || s.strToKeyCode(e);
              };
          }(t.KeyCodeUtils || (t.KeyCodeUtils = {})),
          t.KeyChord = function (e, t) {
            return (e | (65535 & t) << 16 >>> 0) >>> 0;
          },
          t.createKeybinding = function (e, t) {
            if (0 === e) return null;
            const n = (65535 & e) >>> 0, r = (4294901760 & e) >>> 16;
            return new u(0 !== r ? [a(n, t), a(r, t)] : [a(n, t)]);
          },
          t.createSimpleKeybinding = a;
        class l {
          constructor(e, t, n, r, i) {
            this.ctrlKey = e,
              this.shiftKey = t,
              this.altKey = n,
              this.metaKey = r,
              this.keyCode = i;
          }
          equals(e) {
            return this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey &&
              this.altKey === e.altKey && this.metaKey === e.metaKey &&
              this.keyCode === e.keyCode;
          }
          isModifierKey() {
            return 0 === this.keyCode || 5 === this.keyCode ||
              57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode;
          }
          toChord() {
            return new u([this]);
          }
          isDuplicateModifierCase() {
            return this.ctrlKey && 5 === this.keyCode ||
              this.shiftKey && 4 === this.keyCode ||
              this.altKey && 6 === this.keyCode ||
              this.metaKey && 57 === this.keyCode;
          }
        }
        t.SimpleKeybinding = l;
        class u {
          constructor(e) {
            if (0 === e.length) throw n.illegalArgument("parts");
            this.parts = e;
          }
        }
        t.ChordKeybinding = u;
        t.ResolvedKeybindingPart = class {
          constructor(e, t, n, r, i, o) {
            this.ctrlKey = e,
              this.shiftKey = t,
              this.altKey = n,
              this.metaKey = r,
              this.keyLabel = i,
              this.keyAriaLabel = o;
          }
        };
        t.ResolvedKeybinding = class {};
      }),
    ),
    e(
      n[7],
      r([0, 1, 15]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.ImmortalReference = t.MutableDisposable = t.Disposable = t
            .DisposableStore = t.toDisposable = t.combinedDisposable = t
              .dispose = t.isDisposable = t.MultiDisposeError = void 0;
        const r = !1, i = "__is_disposable_tracked__";
        function o(e) {
          if (r && e && e !== c.None) {
            try {
              e[i] = !0;
            } catch (e) {}
          }
        }
        function s(e) {
          if (!r) return e;
          const t = new Error("Potentially leaked disposable").stack;
          return setTimeout(() => {
            e[i] || console.log(t);
          }, 3e3),
            e;
        }
        class a extends Error {
          constructor(e) {
            super(
              `Encounter errors while disposing of store. Errors: [${
                e.join(", ")
              }]`,
            ), this.errors = e;
          }
        }
        function l(e) {
          if (n.Iterable.is(e)) {
            let t = [];
            for (const n of e) {
              if (n) {
                o(n);
                try {
                  n.dispose();
                } catch (e) {
                  t.push(e);
                }
              }
            }
            if (1 === t.length) throw t[0];
            if (t.length > 1) throw new a(t);
            return Array.isArray(e) ? [] : e;
          }
          if (e) return o(e), e.dispose(), e;
        }
        t.MultiDisposeError = a,
          t.isDisposable = function (e) {
            return "function" == typeof e.dispose && 0 === e.dispose.length;
          },
          t.dispose = l,
          t.combinedDisposable = function (...e) {
            return e.forEach(o), s({ dispose: () => l(e) });
          },
          t.toDisposable = function (e) {
            const t = s({
              dispose: () => {
                o(t), e();
              },
            });
            return t;
          };
        class u {
          constructor() {
            this._toDispose = new Set(), this._isDisposed = !1;
          }
          dispose() {
            this._isDisposed || (o(this), this._isDisposed = !0, this.clear());
          }
          clear() {
            try {
              l(this._toDispose.values());
            } finally {
              this._toDispose.clear();
            }
          }
          add(e) {
            if (!e) return e;
            if (e === this) {
              throw new Error(
                "Cannot register a disposable on itself!",
              );
            }
            return o(e),
              this._isDisposed
                ? u.DISABLE_DISPOSED_WARNING ||
                  console.warn(
                    new Error(
                      "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!",
                    ).stack,
                  )
                : this._toDispose.add(e),
              e;
          }
        }
        t.DisposableStore = u, u.DISABLE_DISPOSED_WARNING = !1;
        class c {
          constructor() {
            this._store = new u(), s(this);
          }
          dispose() {
            o(this), this._store.dispose();
          }
          _register(e) {
            if (e === this) {
              throw new Error(
                "Cannot register a disposable on itself!",
              );
            }
            return this._store.add(e);
          }
        }
        t.Disposable = c, c.None = Object.freeze({ dispose() {} });
        t.MutableDisposable = class {
          constructor() {
            this._isDisposed = !1, s(this);
          }
          get value() {
            return this._isDisposed ? void 0 : this._value;
          }
          set value(e) {
            this._isDisposed || e === this._value ||
              (this._value && this._value.dispose(),
                e && o(e),
                this._value = e);
          }
          clear() {
            this.value = void 0;
          }
          dispose() {
            this._isDisposed = !0,
              o(this),
              this._value && this._value.dispose(),
              this._value = void 0;
          }
        };
        t.ImmortalReference = class {
          constructor(e) {
            this.object = e;
          }
          dispose() {}
        };
      }),
    ),
    e(
      n[17],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.LinkedList = void 0;
        class n {
          constructor(e) {
            this.element = e, this.next = n.Undefined, this.prev = n.Undefined;
          }
        }
        n.Undefined = new n(void 0);
        t.LinkedList = class {
          constructor() {
            this._first = n.Undefined, this._last = n.Undefined, this._size = 0;
          }
          get size() {
            return this._size;
          }
          isEmpty() {
            return this._first === n.Undefined;
          }
          clear() {
            this._first = n.Undefined, this._last = n.Undefined, this._size = 0;
          }
          unshift(e) {
            return this._insert(e, !1);
          }
          push(e) {
            return this._insert(e, !0);
          }
          _insert(e, t) {
            const r = new n(e);
            if (this._first === n.Undefined) this._first = r, this._last = r;
            else if (t) {
              const e = this._last;
              this._last = r, r.prev = e, e.next = r;
            } else {
              const e = this._first;
              this._first = r, r.next = e, e.prev = r;
            }
            this._size += 1;
            let i = !1;
            return () => {
              i || (i = !0, this._remove(r));
            };
          }
          shift() {
            if (this._first !== n.Undefined) {
              const e = this._first.element;
              return this._remove(this._first), e;
            }
          }
          pop() {
            if (this._last !== n.Undefined) {
              const e = this._last.element;
              return this._remove(this._last), e;
            }
          }
          _remove(e) {
            if (e.prev !== n.Undefined && e.next !== n.Undefined) {
              const t = e.prev;
              t.next = e.next, e.next.prev = t;
            } else {
              e.prev === n.Undefined && e.next === n.Undefined
                ? (this._first = n.Undefined, this._last = n.Undefined)
                : e.next === n.Undefined
                ? (this._last = this._last.prev, this._last.next = n.Undefined)
                : e.prev === n.Undefined &&
                  (this._first = this._first.next,
                    this._first.prev = n.Undefined);
            }
            this._size -= 1;
          }
          *[Symbol.iterator]() {
            let e = this._first;
            for (; e !== n.Undefined;) yield e.element, e = e.next;
          }
        };
      }),
    ),
    e(
      n[8],
      r([0, 1, 4, 7, 17]),
      (function (e, t, n, r, i) {
        "use strict";
        var o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.Relay = t.EventBufferer = t.PauseableEmitter = t.Emitter = t.Event =
            void 0,
          function (e) {
            function t(e) {
              return (t, n = null, r) => {
                let i, o = !1;
                return i = e(
                  (e) => {
                    if (!o) return i ? i.dispose() : o = !0, t.call(n, e);
                  },
                  null,
                  r,
                ),
                  o && i.dispose(),
                  i;
              };
            }
            function n(e, t) {
              return a((n, r = null, i) => e((e) => n.call(r, t(e)), null, i));
            }
            function i(e, t) {
              return a((n, r = null, i) =>
                e(
                  (e) => {
                    t(e), n.call(r, e);
                  },
                  null,
                  i,
                )
              );
            }
            function o(e, t) {
              return a((n, r = null, i) =>
                e((e) => t(e) && n.call(r, e), null, i)
              );
            }
            function s(e, t, r) {
              let i = r;
              return n(e, (e) => i = t(i, e));
            }
            function a(e) {
              let t;
              const n = new l({
                onFirstListenerAdd() {
                  t = e(n.fire, n);
                },
                onLastListenerRemove() {
                  t.dispose();
                },
              });
              return n.event;
            }
            function u(e, t, n = 100, r = !1, i) {
              let o, s = void 0, a = void 0, u = 0;
              const c = new l({
                leakWarningThreshold: i,
                onFirstListenerAdd() {
                  o = e((e) => {
                    u++,
                      s = t(s, e),
                      r && !a && (c.fire(s), s = void 0),
                      clearTimeout(a),
                      a = setTimeout(() => {
                        const e = s;
                        s = void 0,
                          a = void 0,
                          (!r || u > 1) && c.fire(e),
                          u = 0;
                      }, n);
                  });
                },
                onLastListenerRemove() {
                  o.dispose();
                },
              });
              return c.event;
            }
            function c(e) {
              let t, n = !0;
              return o(e, (e) => {
                const r = n || e !== t;
                return n = !1, t = e, r;
              });
            }
            e.None = () => r.Disposable.None,
              e.once = t,
              e.map = n,
              e.forEach = i,
              e.filter = o,
              e.signal = function (e) {
                return e;
              },
              e.any = function (...e) {
                return (t, n = null, i) => r.combinedDisposable(
                  ...e.map((e) => e((e) => t.call(n, e), null, i)),
                );
              },
              e.reduce = s,
              e.snapshot = a,
              e.debounce = u,
              e.stopwatch = function (e) {
                const r = (new Date()).getTime();
                return n(t(e), (e) => (new Date()).getTime() - r);
              },
              e.latch = c,
              e.buffer = function (e, t = !1, n = []) {
                let r = n.slice(),
                  i = e((e) => {
                    r ? r.push(e) : s.fire(e);
                  });
                const o = () => {
                    r && r.forEach((e) => s.fire(e)), r = null;
                  },
                  s = new l({
                    onFirstListenerAdd() {
                      i || (i = e((e) => s.fire(e)));
                    },
                    onFirstListenerDidAdd() {
                      r && (t ? setTimeout(o) : o());
                    },
                    onLastListenerRemove() {
                      i && i.dispose(), i = null;
                    },
                  });
                return s.event;
              };
            class d {
              constructor(e) {
                this.event = e;
              }
              map(e) {
                return new d(n(this.event, e));
              }
              forEach(e) {
                return new d(i(this.event, e));
              }
              filter(e) {
                return new d(o(this.event, e));
              }
              reduce(e, t) {
                return new d(s(this.event, e, t));
              }
              latch() {
                return new d(c(this.event));
              }
              debounce(e, t = 100, n = !1, r) {
                return new d(u(this.event, e, t, n, r));
              }
              on(e, t, n) {
                return this.event(e, t, n);
              }
              once(e, n, r) {
                return t(this.event)(e, n, r);
              }
            }
            e.chain = function (e) {
              return new d(e);
            },
              e.fromNodeEventEmitter = function (e, t, n = ((e) => e)) {
                const r = (...e) => i.fire(n(...e)),
                  i = new l({
                    onFirstListenerAdd: () => e.on(t, r),
                    onLastListenerRemove: () => e.removeListener(t, r),
                  });
                return i.event;
              },
              e.fromDOMEventEmitter = function (e, t, n = ((e) => e)) {
                const r = (...e) => i.fire(n(...e)),
                  i = new l(
                    {
                      onFirstListenerAdd: () => e.addEventListener(t, r),
                      onLastListenerRemove: () => e.removeEventListener(t, r),
                    },
                  );
                return i.event;
              },
              e.fromPromise = function (e) {
                const t = new l();
                let n = !1;
                return e.then(void 0, () => null).then(() => {
                  n ? t.fire(void 0) : setTimeout(() => t.fire(void 0), 0);
                }),
                  n = !0,
                  t.event;
              },
              e.toPromise = function (e) {
                return new Promise((n) => t(e)(n));
              };
          }(o = t.Event || (t.Event = {}));
        let s = -1;
        class a {
          constructor(e, t = Math.random().toString(18).slice(2, 5)) {
            this.customThreshold = e, this.name = t, this._warnCountdown = 0;
          }
          dispose() {
            this._stacks && this._stacks.clear();
          }
          check(e) {
            let t = s;
            if (
              "number" == typeof this.customThreshold &&
              (t = this.customThreshold), t <= 0 || e < t
            ) {
              return;
            }
            this._stacks || (this._stacks = new Map());
            const n = (new Error()).stack.split("\n").slice(3).join("\n"),
              r = this._stacks.get(n) || 0;
            if (
              this._stacks.set(n, r + 1),
                this._warnCountdown -= 1,
                this._warnCountdown <= 0
            ) {
              let n;
              this._warnCountdown = .5 * t;
              let r = 0;
              for (const [e, t] of this._stacks) {
                (!n || r < t) && (n = e, r = t);
              }
              console.warn(
                `[${this.name}] potential listener LEAK detected, having ${e} listeners already. MOST frequent listener (${r}):`,
              ), console.warn(n);
            }
            return () => {
              const e = this._stacks.get(n) || 0;
              this._stacks.set(n, e - 1);
            };
          }
        }
        class l {
          constructor(e) {
            this._disposed = !1,
              this._options = e,
              this._leakageMon = s > 0
                ? new a(this._options && this._options.leakWarningThreshold)
                : void 0;
          }
          get event() {
            return this._event || (this._event = (e, t, n) => {
              this._listeners || (this._listeners = new i.LinkedList());
              const o = this._listeners.isEmpty();
              o && this._options && this._options.onFirstListenerAdd &&
                this._options.onFirstListenerAdd(this);
              const s = this._listeners.push(t ? [e, t] : e);
              let a, u;
              return o && this._options &&
                this._options.onFirstListenerDidAdd &&
                this._options.onFirstListenerDidAdd(this),
                this._options && this._options.onListenerDidAdd &&
                this._options.onListenerDidAdd(this, e, t),
                this._leakageMon &&
                (a = this._leakageMon.check(this._listeners.size)),
                u = {
                  dispose: () => {
                    if (
                      a && a(),
                        u.dispose = l._noop,
                        !this._disposed &&
                        (s(),
                          this._options && this._options.onLastListenerRemove)
                    ) {
                      this._listeners && !this._listeners.isEmpty() ||
                        this._options.onLastListenerRemove(this);
                    }
                  },
                },
                n instanceof r.DisposableStore
                  ? n.add(u)
                  : Array.isArray(n) && n.push(u),
                u;
            }),
              this._event;
          }
          fire(e) {
            if (this._listeners) {
              this._deliveryQueue || (this._deliveryQueue = new i.LinkedList());
              for (let t of this._listeners) this._deliveryQueue.push([t, e]);
              for (; this._deliveryQueue.size > 0;) {
                const [e, t] = this._deliveryQueue.shift();
                try {
                  "function" == typeof e
                    ? e.call(void 0, t)
                    : e[0].call(e[1], t);
                } catch (e) {
                  n.onUnexpectedError(e);
                }
              }
            }
          }
          dispose() {
            this._listeners && this._listeners.clear(),
              this._deliveryQueue && this._deliveryQueue.clear(),
              this._leakageMon && this._leakageMon.dispose(),
              this._disposed = !0;
          }
        }
        t.Emitter = l, l._noop = function () {};
        t.PauseableEmitter = class extends l {
          constructor(e) {
            super(e),
              this._isPaused = 0,
              this._eventQueue = new i.LinkedList(),
              this._mergeFn = e && e.merge;
          }
          pause() {
            this._isPaused++;
          }
          resume() {
            if (0 !== this._isPaused && 0 == --this._isPaused) {
              if (this._mergeFn) {
                const e = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(e));
              } else {
                for (; !this._isPaused && 0 !== this._eventQueue.size;) {
                  super.fire(this._eventQueue.shift());
                }
              }
            }
          }
          fire(e) {
            this._listeners &&
              (0 !== this._isPaused ? this._eventQueue.push(e) : super.fire(e));
          }
        };
        t.EventBufferer = class {
          constructor() {
            this.buffers = [];
          }
          wrapEvent(e) {
            return (t, n, r) => e(
              (e) => {
                const r = this.buffers[this.buffers.length - 1];
                r ? r.push(() => t.call(n, e)) : t.call(n, e);
              },
              void 0,
              r,
            );
          }
          bufferEvents(e) {
            const t = [];
            this.buffers.push(t);
            const n = e();
            return this.buffers.pop(), t.forEach((e) => e()), n;
          }
        };
        t.Relay = class {
          constructor() {
            this.listening = !1,
              this.inputEvent = o.None,
              this.inputEventListener = r.Disposable.None,
              this.emitter = new l({
                onFirstListenerDidAdd: () => {
                  this.listening = !0,
                    this.inputEventListener = this.inputEvent(
                      this.emitter.fire,
                      this.emitter,
                    );
                },
                onLastListenerRemove: () => {
                  this.listening = !1, this.inputEventListener.dispose();
                },
              }),
              this.event = this.emitter.event;
          }
          set input(e) {
            this.inputEvent = e,
              this.listening &&
              (this.inputEventListener.dispose(),
                this.inputEventListener = e(this.emitter.fire, this.emitter));
          }
          dispose() {
            this.inputEventListener.dispose(), this.emitter.dispose();
          }
        };
      }),
    ),
    e(
      n[18],
      r([0, 1, 8]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.CancellationTokenSource = t.CancellationToken = void 0;
        const r = Object.freeze(
          (function (e, t) {
            const n = setTimeout(e.bind(t), 0);
            return {
              dispose() {
                clearTimeout(n);
              },
            };
          }),
        );
        var i;
        !function (e) {
          e.isCancellationToken = function (t) {
            return t === e.None || t === e.Cancelled ||
              (t instanceof o ||
                !(!t || "object" != typeof t) &&
                  ("boolean" == typeof t.isCancellationRequested &&
                    "function" == typeof t.onCancellationRequested));
          },
            e.None = Object.freeze(
              {
                isCancellationRequested: !1,
                onCancellationRequested: n.Event.None,
              },
            ),
            e.Cancelled = Object.freeze(
              { isCancellationRequested: !0, onCancellationRequested: r },
            );
        }(i = t.CancellationToken || (t.CancellationToken = {}));
        class o {
          constructor() {
            this._isCancelled = !1, this._emitter = null;
          }
          cancel() {
            this._isCancelled ||
              (this._isCancelled = !0,
                this._emitter && (this._emitter.fire(void 0), this.dispose()));
          }
          get isCancellationRequested() {
            return this._isCancelled;
          }
          get onCancellationRequested() {
            return this._isCancelled ? r
            : (this._emitter || (this._emitter = new n.Emitter()),
              this._emitter.event);
          }
          dispose() {
            this._emitter && (this._emitter.dispose(), this._emitter = null);
          }
        }
        t.CancellationTokenSource = class {
          constructor(e) {
            this._token = void 0,
              this._parentListener = void 0,
              this._parentListener = e &&
                e.onCancellationRequested(this.cancel, this);
          }
          get token() {
            return this._token || (this._token = new o()), this._token;
          }
          cancel() {
            this._token ? this._token instanceof o && this._token.cancel()
            : this._token = i.Cancelled;
          }
          dispose(e = !1) {
            e && this.cancel(),
              this._parentListener && this._parentListener.dispose(),
              this._token
                ? this._token instanceof o && this._token.dispose()
                : this._token = i.None;
          }
        };
      }),
    ),
    e(
      n[2],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.isLittleEndian = t.OS = t.setImmediate = t.globals = t.userAgent = t
            .isIOS = t.isWeb = t.isNative = t.isLinux = t.isMacintosh = t
              .isWindows = t.isElectronSandboxed = void 0;
        let r = !1,
          i = !1,
          o = !1,
          s = !1,
          a = !1,
          l = !1,
          u = void 0,
          c = "en",
          d = void 0,
          h = void 0;
        const f = "object" == typeof self ? self
        : "object" == typeof global ? global : {};
        let g = void 0;
        "undefined" != typeof process ? g = process
        : void 0 !== f.vscode && (g = f.vscode.process);
        const m = "string" ==
            typeof (null === (n = null == g ? void 0 : g.versions) ||
                void 0 === n
              ? void 0
              : n.electron) && "renderer" === g.type;
        if (
          t.isElectronSandboxed = m && (null == g ? void 0 : g.sandboxed),
            "object" != typeof navigator || m
        ) {
          if ("object" == typeof g) {
            r = "win32" === g.platform,
              i = "darwin" === g.platform,
              o = "linux" === g.platform,
              u = "en",
              c = "en";
            const e = g.env.VSCODE_NLS_CONFIG;
            if (e) {
              try {
                const t = JSON.parse(e), n = t.availableLanguages["*"];
                u = t.locale, c = n || "en", d = t._translationsConfigFile;
              } catch (e) {}
            }
            s = !0;
          } else console.error("Unable to resolve platform.");
        } else {
          r = (h = navigator.userAgent).indexOf("Windows") >= 0,
            i = h.indexOf("Macintosh") >= 0,
            l = (h.indexOf("Macintosh") >= 0 || h.indexOf("iPad") >= 0 ||
              h.indexOf("iPhone") >= 0) &&
              !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0,
            o = h.indexOf("Linux") >= 0,
            a = !0,
            c = u = navigator.language;
        }
        let p = 0;
        i ? p = 1 : r ? p = 3 : o && (p = 2),
          t.isWindows = r,
          t.isMacintosh = i,
          t.isLinux = o,
          t.isNative = s,
          t.isWeb = a,
          t.isIOS = l,
          t.userAgent = h,
          t.globals = f,
          t.setImmediate = function () {
            if (t.globals.setImmediate) {
              return t.globals.setImmediate.bind(t.globals);
            }
            if (
              "function" == typeof t.globals.postMessage &&
              !t.globals.importScripts
            ) {
              let e = [];
              t.globals.addEventListener("message", (t) => {
                if (t.data && t.data.vscodeSetImmediateId) {
                  for (let n = 0, r = e.length; n < r; n++) {
                    const r = e[n];
                    if (r.id === t.data.vscodeSetImmediateId) {
                      return e.splice(n, 1), void r.callback();
                    }
                  }
                }
              });
              let n = 0;
              return (r) => {
                const i = ++n;
                e.push({ id: i, callback: r }),
                  t.globals.postMessage({ vscodeSetImmediateId: i }, "*");
              };
            }
            if (g) return g.nextTick.bind(g);
            const e = Promise.resolve();
            return (t) => e.then(t);
          }(),
          t.OS = i || l ? 2 : r ? 1 : 3;
        let _ = !0, C = !1;
        t.isLittleEndian = function () {
          if (!C) {
            C = !0;
            const e = new Uint8Array(2);
            e[0] = 1, e[1] = 2;
            const t = new Uint16Array(e.buffer);
            _ = 513 === t[0];
          }
          return _;
        };
      }),
    ),
    e(
      n[19],
      r([0, 1, 2]),
      (function (e, t, n) {
        "use strict";
        let r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.platform = t.env = t.cwd = void 0,
          r = "undefined" != typeof process
            ? process
            : void 0 !== n.globals.vscode
            ? {
              get platform() {
                return n.globals.vscode.process.platform;
              },
              get env() {
                return n.globals.vscode.process.env;
              },
              nextTick: (e) => n.setImmediate(e),
              cwd: () =>
                n.globals.vscode.process.env.VSCODE_CWD ||
                n.globals.vscode.process.execPath.substr(
                  0,
                  n.globals.vscode.process.execPath.lastIndexOf(
                    "win32" === n.globals.vscode.process.platform ? "\\" : "/",
                  ),
                ),
            }
            : {
              get platform() {
                return n.isWindows ? "win32"
                : n.isMacintosh ? "darwin" : "linux";
              },
              nextTick: (e) => n.setImmediate(e),
              get env() {
                return Object.create(null);
              },
              cwd: () => "/",
            },
          t.cwd = r.cwd,
          t.env = r.env,
          t.platform = r.platform;
      }),
    ),
    e(
      n[20],
      r([0, 1, 19]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.sep = t.extname = t.basename = t.dirname = t.relative = t.resolve =
            t.normalize = t.posix = t.win32 = void 0;
        const r = 65, i = 97, o = 90, s = 122, a = 46, l = 47, u = 92;
        class c extends Error {
          constructor(e, t, n) {
            let r;
            "string" == typeof t && 0 === t.indexOf("not ")
              ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
            const i = -1 !== e.indexOf(".") ? "property" : "argument";
            let o = `The "${e}" ${i} ${r} of type ${t}`;
            super(o += `. Received type ${typeof n}`),
              this.code = "ERR_INVALID_ARG_TYPE";
          }
        }
        function d(e, t) {
          if ("string" != typeof e) throw new c(t, "string", e);
        }
        function h(e) {
          return e === l || e === u;
        }
        function f(e) {
          return e === l;
        }
        function g(e) {
          return e >= r && e <= o || e >= i && e <= s;
        }
        function m(e, t, n, r) {
          let i = "", o = 0, s = -1, u = 0, c = 0;
          for (let d = 0; d <= e.length; ++d) {
            if (d < e.length) c = e.charCodeAt(d);
            else {
              if (r(c)) break;
              c = l;
            }
            if (r(c)) {
              if (s === d - 1 || 1 === u);
              else if (2 === u) {
                if (
                  i.length < 2 || 2 !== o || i.charCodeAt(i.length - 1) !== a ||
                  i.charCodeAt(i.length - 2) !== a
                ) {
                  if (i.length > 2) {
                    const e = i.lastIndexOf(n);
                    -1 === e
                      ? (i = "", o = 0)
                      : o = (i = i.slice(0, e)).length - 1 - i.lastIndexOf(n),
                      s = d,
                      u = 0;
                    continue;
                  }
                  if (0 !== i.length) {
                    i = "", o = 0, s = d, u = 0;
                    continue;
                  }
                }
                t && (i += i.length > 0 ? `${n}..` : "..", o = 2);
              } else {
                i.length > 0
                  ? i += `${n}${e.slice(s + 1, d)}`
                  : i = e.slice(s + 1, d), o = d - s - 1;
              }
              s = d, u = 0;
            } else c === a && -1 !== u ? ++u : u = -1;
          }
          return i;
        }
        function p(e, t) {
          if (null === t || "object" != typeof t) {
            throw new c("pathObject", "Object", t);
          }
          const n = t.dir || t.root,
            r = t.base || `${t.name || ""}${t.ext || ""}`;
          return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
        }
        t.win32 = {
          resolve(...e) {
            let t = "", r = "", i = !1;
            for (let o = e.length - 1; o >= -1; o--) {
              let s;
              if (o >= 0) {
                if (d(s = e[o], "path"), 0 === s.length) continue;
                else {
                  0 === t.length
                    ? s = n.cwd()
                    : (void 0 === (s = n.env[`=${t}`] || n.cwd()) ||
                      s.slice(0, 2).toLowerCase() !== t.toLowerCase() &&
                        s.charCodeAt(2) === u) && (s = `${t}\\`);
                }
              }
              const a = s.length;
              let l = 0, c = "", f = !1;
              const m = s.charCodeAt(0);
              if (1 === a) h(m) && (l = 1, f = !0);
              else if (h(m)) {
                if (f = !0, h(s.charCodeAt(1))) {
                  let e = 2, t = e;
                  for (; e < a && !h(s.charCodeAt(e));) e++;
                  if (e < a && e !== t) {
                    const n = s.slice(t, e);
                    for (t = e; e < a && h(s.charCodeAt(e));) e++;
                    if (e < a && e !== t) {
                      for (t = e; e < a && !h(s.charCodeAt(e));) e++;
                      e !== a && e === t ||
                        (c = `\\\\${n}\\${s.slice(t, e)}`, l = e);
                    }
                  }
                } else l = 1;
              } else {
                g(m) && 58 === s.charCodeAt(1) &&
                  (c = s.slice(0, 2),
                    l = 2,
                    a > 2 && h(s.charCodeAt(2)) && (f = !0, l = 3));
              }
              if (c.length > 0) {
                if (t.length > 0) {
                  if (c.toLowerCase() !== t.toLowerCase()) continue;
                } else t = c;
              }
              if (i) {
                if (t.length > 0) break;
                else if (r = `${s.slice(l)}\\${r}`, i = f, f && t.length > 0) {
                  break;
                }
              }
            }
            return r = m(r, !i, "\\", h), i ? `${t}\\${r}` : `${t}${r}` || ".";
          },
          normalize(e) {
            d(e, "path");
            const t = e.length;
            if (0 === t) return ".";
            let n, r = 0, i = !1;
            const o = e.charCodeAt(0);
            if (1 === t) return f(o) ? "\\" : e;
            if (h(o)) {
              if (i = !0, h(e.charCodeAt(1))) {
                let i = 2, o = i;
                for (; i < t && !h(e.charCodeAt(i));) i++;
                if (i < t && i !== o) {
                  const s = e.slice(o, i);
                  for (o = i; i < t && h(e.charCodeAt(i));) i++;
                  if (i < t && i !== o) {
                    for (o = i; i < t && !h(e.charCodeAt(i));) i++;
                    if (i === t) return `\\\\${s}\\${e.slice(o)}\\`;
                    i !== o && (n = `\\\\${s}\\${e.slice(o, i)}`, r = i);
                  }
                }
              } else r = 1;
            } else {
              g(o) && 58 === e.charCodeAt(1) &&
                (n = e.slice(0, 2),
                  r = 2,
                  t > 2 && h(e.charCodeAt(2)) && (i = !0, r = 3));
            }
            let s = r < t ? m(e.slice(r), !i, "\\", h) : "";
            return 0 !== s.length || i || (s = "."),
              s.length > 0 && h(e.charCodeAt(t - 1)) && (s += "\\"),
              void 0 === n ? i ? `\\${s}` : s : i ? `${n}\\${s}` : `${n}${s}`;
          },
          isAbsolute(e) {
            d(e, "path");
            const t = e.length;
            if (0 === t) return !1;
            const n = e.charCodeAt(0);
            return h(n) ||
              t > 2 && g(n) && 58 === e.charCodeAt(1) && h(e.charCodeAt(2));
          },
          join(...e) {
            if (0 === e.length) return ".";
            let n, r;
            for (let t = 0; t < e.length; ++t) {
              const i = e[t];
              d(i, "path"),
                i.length > 0 && (void 0 === n ? n = r = i : n += `\\${i}`);
            }
            if (void 0 === n) return ".";
            let i = !0, o = 0;
            if ("string" == typeof r && h(r.charCodeAt(0))) {
              ++o;
              const e = r.length;
              e > 1 && h(r.charCodeAt(1)) &&
                (++o, e > 2 && (h(r.charCodeAt(2)) ? ++o : i = !1));
            }
            if (i) {
              for (; o < n.length && h(n.charCodeAt(o));) o++;
              o >= 2 && (n = `\\${n.slice(o)}`);
            }
            return t.win32.normalize(n);
          },
          relative(e, n) {
            if (d(e, "from"), d(n, "to"), e === n) return "";
            const r = t.win32.resolve(e), i = t.win32.resolve(n);
            if (r === i) return "";
            if ((e = r.toLowerCase()) === (n = i.toLowerCase())) return "";
            let o = 0;
            for (; o < e.length && e.charCodeAt(o) === u;) o++;
            let s = e.length;
            for (; s - 1 > o && e.charCodeAt(s - 1) === u;) s--;
            const a = s - o;
            let l = 0;
            for (; l < n.length && n.charCodeAt(l) === u;) l++;
            let c = n.length;
            for (; c - 1 > l && n.charCodeAt(c - 1) === u;) c--;
            const h = c - l, f = a < h ? a : h;
            let g = -1, m = 0;
            for (; m < f; m++) {
              const t = e.charCodeAt(o + m);
              if (t !== n.charCodeAt(l + m)) break;
              t === u && (g = m);
            }
            if (m !== f) {
              if (-1 === g) return i;
              else {
                if (h > f) {
                  if (n.charCodeAt(l + m) === u) return i.slice(l + m + 1);
                  if (2 === m) return i.slice(l + m);
                }
                a > f &&
                (e.charCodeAt(o + m) === u ? g = m : 2 === m && (g = 3)),
                  -1 === g && (g = 0);
              }
            }
            let p = "";
            for (
              m = o + g + 1;
              m <= s;
              ++m
            ) {
              m !== s && e.charCodeAt(m) !== u ||
                (p += 0 === p.length ? ".." : "\\..");
            }
            return l += g,
              p.length > 0
                ? `${p}${i.slice(l, c)}`
                : (i.charCodeAt(l) === u && ++l, i.slice(l, c));
          },
          toNamespacedPath(e) {
            if ("string" != typeof e) return e;
            if (0 === e.length) return "";
            const n = t.win32.resolve(e);
            if (n.length <= 2) return e;
            if (n.charCodeAt(0) === u) {
              if (n.charCodeAt(1) === u) {
                const e = n.charCodeAt(2);
                if (63 !== e && e !== a) return `\\\\?\\UNC\\${n.slice(2)}`;
              }
            } else if (
              g(n.charCodeAt(0)) && 58 === n.charCodeAt(1) &&
              n.charCodeAt(2) === u
            ) {
              return `\\\\?\\${n}`;
            }
            return e;
          },
          dirname(e) {
            d(e, "path");
            const t = e.length;
            if (0 === t) return ".";
            let n = -1, r = 0;
            const i = e.charCodeAt(0);
            if (1 === t) return h(i) ? e : ".";
            if (h(i)) {
              if (n = r = 1, h(e.charCodeAt(1))) {
                let i = 2, o = i;
                for (; i < t && !h(e.charCodeAt(i));) i++;
                if (i < t && i !== o) {
                  for (o = i; i < t && h(e.charCodeAt(i));) i++;
                  if (i < t && i !== o) {
                    for (o = i; i < t && !h(e.charCodeAt(i));) i++;
                    if (i === t) return e;
                    i !== o && (n = r = i + 1);
                  }
                }
              }
            } else {
              g(i) && 58 === e.charCodeAt(1) &&
                (r = n = t > 2 && h(e.charCodeAt(2)) ? 3 : 2);
            }
            let o = -1, s = !0;
            for (let n = t - 1; n >= r; --n) {
              if (h(e.charCodeAt(n))) {
                if (!s) {
                  o = n;
                  break;
                }
              } else s = !1;
            }
            if (-1 === o) {
              if (-1 === n) return ".";
              o = n;
            }
            return e.slice(0, o);
          },
          basename(e, t) {
            void 0 !== t && d(t, "ext"), d(e, "path");
            let n, r = 0, i = -1, o = !0;
            if (
              e.length >= 2 && g(e.charCodeAt(0)) && 58 === e.charCodeAt(1) &&
              (r = 2), void 0 !== t && t.length > 0 && t.length <= e.length
            ) {
              if (t === e) return "";
              let s = t.length - 1, a = -1;
              for (n = e.length - 1; n >= r; --n) {
                const l = e.charCodeAt(n);
                if (h(l)) {
                  if (!o) {
                    r = n + 1;
                    break;
                  }
                } else {
                  -1 === a && (o = !1, a = n + 1),
                    s >= 0 &&
                    (l === t.charCodeAt(s)
                      ? -1 == --s && (i = n)
                      : (s = -1, i = a));
                }
              }
              return r === i ? i = a : -1 === i && (i = e.length),
                e.slice(r, i);
            }
            for (n = e.length - 1; n >= r; --n) {
              if (h(e.charCodeAt(n))) {
                if (!o) {
                  r = n + 1;
                  break;
                }
              } else -1 === i && (o = !1, i = n + 1);
            }
            return -1 === i ? "" : e.slice(r, i);
          },
          extname(e) {
            d(e, "path");
            let t = 0, n = -1, r = 0, i = -1, o = !0, s = 0;
            e.length >= 2 && 58 === e.charCodeAt(1) && g(e.charCodeAt(0)) &&
              (t = r = 2);
            for (let l = e.length - 1; l >= t; --l) {
              const t = e.charCodeAt(l);
              if (h(t)) {
                if (!o) {
                  r = l + 1;
                  break;
                }
              } else {
                -1 === i && (o = !1, i = l + 1),
                  t === a
                    ? -1 === n ? n = l : 1 !== s && (s = 1)
                    : -1 !== n && (s = -1);
              }
            }
            return -1 === n || -1 === i || 0 === s ||
                1 === s && n === i - 1 && n === r + 1
              ? ""
              : e.slice(n, i);
          },
          format: p.bind(null, "\\"),
          parse(e) {
            d(e, "path");
            const t = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === e.length) return t;
            const n = e.length;
            let r = 0, i = e.charCodeAt(0);
            if (1 === n) {
              return h(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
            }
            if (h(i)) {
              if (r = 1, h(e.charCodeAt(1))) {
                let t = 2, i = t;
                for (; t < n && !h(e.charCodeAt(t));) t++;
                if (t < n && t !== i) {
                  for (i = t; t < n && h(e.charCodeAt(t));) t++;
                  if (t < n && t !== i) {
                    for (i = t; t < n && !h(e.charCodeAt(t));) t++;
                    t === n ? r = t : t !== i && (r = t + 1);
                  }
                }
              }
            } else if (g(i) && 58 === e.charCodeAt(1)) {
              if (n <= 2) return t.root = t.dir = e, t;
              if (r = 2, h(e.charCodeAt(2))) {
                if (3 === n) return t.root = t.dir = e, t;
                r = 3;
              }
            }
            r > 0 && (t.root = e.slice(0, r));
            let o = -1, s = r, l = -1, u = !0, c = e.length - 1, f = 0;
            for (; c >= r; --c) {
              if (h(i = e.charCodeAt(c))) {
                if (!u) {
                  s = c + 1;
                  break;
                }
              } else {
                -1 === l && (u = !1, l = c + 1),
                  i === a
                    ? -1 === o ? o = c : 1 !== f && (f = 1)
                    : -1 !== o && (f = -1);
              }
            }
            return -1 !== l &&
              (-1 === o || 0 === f || 1 === f && o === l - 1 && o === s + 1
                ? t.base = t.name = e.slice(s, l)
                : (t.name = e.slice(s, o),
                  t.base = e.slice(s, l),
                  t.ext = e.slice(o, l))),
              t.dir = s > 0 && s !== r ? e.slice(0, s - 1) : t.root,
              t;
          },
          sep: "\\",
          delimiter: ";",
          win32: null,
          posix: null,
        },
          t.posix = {
            resolve(...e) {
              let t = "", r = !1;
              for (let i = e.length - 1; i >= -1 && !r; i--) {
                const o = i >= 0 ? e[i] : n.cwd();
                d(o, "path"),
                  0 !== o.length &&
                  (t = `${o}/${t}`, r = o.charCodeAt(0) === l);
              }
              return t = m(t, !r, "/", f), r ? `/${t}` : t.length > 0 ? t : ".";
            },
            normalize(e) {
              if (d(e, "path"), 0 === e.length) return ".";
              const t = e.charCodeAt(0) === l,
                n = e.charCodeAt(e.length - 1) === l;
              return 0 === (e = m(e, !t, "/", f)).length
                ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
            },
            isAbsolute: (
              e,
            ) => (d(e, "path"), e.length > 0 && e.charCodeAt(0) === l),
            join(...e) {
              if (0 === e.length) return ".";
              let n;
              for (let t = 0; t < e.length; ++t) {
                const r = e[t];
                d(r, "path"),
                  r.length > 0 && (void 0 === n ? n = r : n += `/${r}`);
              }
              return void 0 === n ? "." : t.posix.normalize(n);
            },
            relative(e, n) {
              if (d(e, "from"), d(n, "to"), e === n) return "";
              if (
                (e = t.posix.resolve(e)) === (n = t.posix.resolve(n))
              ) {
                return "";
              }
              const r = e.length,
                i = r - 1,
                o = n.length - 1,
                s = i < o ? i : o;
              let a = -1, u = 0;
              for (; u < s; u++) {
                const t = e.charCodeAt(1 + u);
                if (t !== n.charCodeAt(1 + u)) break;
                t === l && (a = u);
              }
              if (u === s) {
                if (o > s) {
                  if (n.charCodeAt(1 + u) === l) return n.slice(1 + u + 1);
                  if (0 === u) return n.slice(1 + u);
                } else {
                  i > s &&
                    (e.charCodeAt(1 + u) === l ? a = u : 0 === u && (a = 0));
                }
              }
              let c = "";
              for (
                u = 1 + a + 1;
                u <= r;
                ++u
              ) {
                u !== r && e.charCodeAt(u) !== l ||
                  (c += 0 === c.length ? ".." : "/..");
              }
              return `${c}${n.slice(1 + a)}`;
            },
            toNamespacedPath: (e) => e,
            dirname(e) {
              if (d(e, "path"), 0 === e.length) return ".";
              const t = e.charCodeAt(0) === l;
              let n = -1, r = !0;
              for (let t = e.length - 1; t >= 1; --t) {
                if (e.charCodeAt(t) === l) {
                  if (!r) {
                    n = t;
                    break;
                  }
                } else {
                  r = !1;
                }
              }
              return -1 === n ? t ? "/" : "."
              : t && 1 === n ? "//" : e.slice(0, n);
            },
            basename(e, t) {
              void 0 !== t && d(t, "ext"), d(e, "path");
              let n, r = 0, i = -1, o = !0;
              if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                if (t === e) return "";
                let s = t.length - 1, a = -1;
                for (n = e.length - 1; n >= 0; --n) {
                  const u = e.charCodeAt(n);
                  if (u === l) {
                    if (!o) {
                      r = n + 1;
                      break;
                    }
                  } else {
                    -1 === a && (o = !1, a = n + 1),
                      s >= 0 &&
                      (u === t.charCodeAt(s) ? -1 == --s && (i = n)
                      : (s = -1, i = a));
                  }
                }
                return r === i ? i = a : -1 === i && (i = e.length),
                  e.slice(r, i);
              }
              for (n = e.length - 1; n >= 0; --n) {
                if (e.charCodeAt(n) === l) {
                  if (!o) {
                    r = n + 1;
                    break;
                  }
                } else -1 === i && (o = !1, i = n + 1);
              }
              return -1 === i ? "" : e.slice(r, i);
            },
            extname(e) {
              d(e, "path");
              let t = -1, n = 0, r = -1, i = !0, o = 0;
              for (let s = e.length - 1; s >= 0; --s) {
                const u = e.charCodeAt(s);
                if (u !== l) {
                  -1 === r && (i = !1, r = s + 1),
                    u === a
                      ? -1 === t ? t = s : 1 !== o && (o = 1)
                      : -1 !== t && (o = -1);
                } else if (!i) {
                  n = s + 1;
                  break;
                }
              }
              return -1 === t || -1 === r || 0 === o ||
                  1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
            },
            format: p.bind(null, "/"),
            parse(e) {
              d(e, "path");
              const t = { root: "", dir: "", base: "", ext: "", name: "" };
              if (0 === e.length) return t;
              const n = e.charCodeAt(0) === l;
              let r;
              n ? (t.root = "/", r = 1) : r = 0;
              let i = -1, o = 0, s = -1, u = !0, c = e.length - 1, h = 0;
              for (; c >= r; --c) {
                const t = e.charCodeAt(c);
                if (t !== l) {
                  -1 === s && (u = !1, s = c + 1),
                    t === a
                      ? -1 === i ? i = c : 1 !== h && (h = 1)
                      : -1 !== i && (h = -1);
                } else if (!u) {
                  o = c + 1;
                  break;
                }
              }
              if (-1 !== s) {
                const r = 0 === o && n ? 1 : o;
                -1 === i || 0 === h || 1 === h && i === s - 1 && i === o + 1
                  ? t.base = t.name = e.slice(r, s)
                  : (t.name = e.slice(r, i),
                    t.base = e.slice(r, s),
                    t.ext = e.slice(i, s));
              }
              return o > 0 ? t.dir = e.slice(0, o - 1) : n && (t.dir = "/"), t;
            },
            sep: "/",
            delimiter: ":",
            win32: null,
            posix: null,
          },
          t.posix.win32 = t.win32.win32 = t.win32,
          t.posix.posix = t.win32.posix = t.posix,
          t.normalize = "win32" === n.platform ? t.win32.normalize
          : t.posix.normalize,
          t.resolve = "win32" === n.platform ? t.win32.resolve
          : t.posix.resolve,
          t.relative = "win32" === n.platform ? t.win32.relative
          : t.posix.relative,
          t.dirname = "win32" === n.platform ? t.win32.dirname
          : t.posix.dirname,
          t.basename = "win32" === n.platform ? t.win32.basename
          : t.posix.basename,
          t.extname = "win32" === n.platform ? t.win32.extname
          : t.posix.extname,
          t.sep = "win32" === n.platform ? t.win32.sep : t.posix.sep;
      }),
    ),
    e(
      n[21],
      r([0, 1, 2]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.StopWatch = void 0;
        const r = n.globals.performance &&
          "function" == typeof n.globals.performance.now;
        class i {
          constructor(e) {
            this._highResolution = r && e,
              this._startTime = this._now(),
              this._stopTime = -1;
          }
          static create(e = !0) {
            return new i(e);
          }
          stop() {
            this._stopTime = this._now();
          }
          elapsed() {
            return -1 !== this._stopTime ? this._stopTime - this._startTime
            : this._now() - this._startTime;
          }
          _now() {
            return this._highResolution ? n.globals.performance.now()
            : (new Date()).getTime();
          }
        }
        t.StopWatch = i;
      }),
    ),
    e(
      n[5],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.breakBetweenGraphemeBreakType = t.getGraphemeBreakType = t
            .singleLetterHash = t.containsUppercaseCharacter = t
              .startsWithUTF8BOM = t.UTF8_BOM_CHARACTER = t.isEmojiImprecise = t
                .isFullWidthCharacter = t.containsFullWidthCharacter = t
                  .containsUnusualLineTerminators = t.UNUSUAL_LINE_TERMINATORS =
                    t.isBasicASCII = t.containsEmoji = t.containsRTL = t
                      .decodeUTF8 = t.prevCharLength = t.nextCharLength = t
                        .getNextCodePoint = t.computeCodePoint = t
                          .isLowSurrogate = t.isHighSurrogate = t
                            .commonSuffixLength = t.commonPrefixLength = t
                              .startsWithIgnoreCase = t.equalsIgnoreCase = t
                                .isUpperAsciiLetter = t.isLowerAsciiLetter = t
                                  .compareSubstringIgnoreCase = t
                                    .compareIgnoreCase = t.compareSubstring = t
                                      .compare = t.lastNonWhitespaceIndex = t
                                        .getLeadingWhitespace = t
                                          .firstNonWhitespaceIndex = t
                                            .splitLines = t.regExpFlags = t
                                              .regExpLeadsToEndlessLoop = t
                                                .createRegExp = t
                                                  .stripWildcards = t
                                                    .convertSimple2RegExpPattern =
                                                      t.rtrim = t.ltrim = t
                                                        .trim = t
                                                          .escapeRegExpCharacters =
                                                            t.escape = t
                                                              .format = t
                                                                .isFalsyOrWhitespace =
                                                                  void 0,
          t.isFalsyOrWhitespace = function (e) {
            return !e || "string" != typeof e || 0 === e.trim().length;
          };
        const n = /{(\d+)}/g;
        function r(e) {
          return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
        }
        function i(e, t) {
          if (!e || !t) return e;
          const n = t.length;
          if (0 === n || 0 === e.length) return e;
          let r = 0;
          for (; e.indexOf(t, r) === r;) r += n;
          return e.substring(r);
        }
        function o(e, t) {
          if (!e || !t) return e;
          const n = t.length, r = e.length;
          if (0 === n || 0 === r) return e;
          let i = r, o = -1;
          for (; -1 !== (o = e.lastIndexOf(t, i - 1)) && o + n === i;) {
            if (0 === o) return "";
            i = o;
          }
          return e.substring(0, i);
        }
        function s(e, t, n = 0, r = e.length, i = 0, o = t.length) {
          for (; n < r && i < o; n++, i++) {
            let r = e.charCodeAt(n), o = t.charCodeAt(i);
            if (r < o) return -1;
            if (r > o) return 1;
          }
          const s = r - n, a = o - i;
          return s < a ? -1 : s > a ? 1 : 0;
        }
        function a(e, t, n = 0, r = e.length, i = 0, o = t.length) {
          for (; n < r && i < o; n++, i++) {
            let a = e.charCodeAt(n), c = t.charCodeAt(i);
            if (a === c) continue;
            const d = a - c;
            if ((32 !== d || !u(c)) && (-32 !== d || !u(a))) {
              return l(a) && l(c)
                ? d
                : s(e.toLowerCase(), t.toLowerCase(), n, r, i, o);
            }
          }
          const a = r - n, c = o - i;
          return a < c ? -1 : a > c ? 1 : 0;
        }
        function l(e) {
          return e >= 97 && e <= 122;
        }
        function u(e) {
          return e >= 65 && e <= 90;
        }
        function c(e) {
          return l(e) || u(e);
        }
        function d(e, t, n = e.length) {
          for (let r = 0; r < n; r++) {
            const n = e.charCodeAt(r), i = t.charCodeAt(r);
            if (n !== i) {
              if (c(n) && c(i)) {
                const e = Math.abs(n - i);
                if (0 !== e && 32 !== e) return !1;
              } else if (
                String.fromCharCode(n).toLowerCase() !==
                  String.fromCharCode(i).toLowerCase()
              ) {
                return !1;
              }
            }
          }
          return !0;
        }
        function h(e) {
          return 55296 <= e && e <= 56319;
        }
        function f(e) {
          return 56320 <= e && e <= 57343;
        }
        function g(e, t) {
          return t - 56320 + (e - 55296 << 10) + 65536;
        }
        function m(e, t, n) {
          const r = e.charCodeAt(n);
          if (h(r) && n + 1 < t) {
            const t = e.charCodeAt(n + 1);
            if (f(t)) return g(r, t);
          }
          return r;
        }
        function p(e, t) {
          const n = e.charCodeAt(t - 1);
          if (f(n) && t > 1) {
            const r = e.charCodeAt(t - 2);
            if (h(r)) return g(r, n);
          }
          return n;
        }
        t.format = function (e, ...t) {
          return 0 === t.length ? e : e.replace(
            n,
            (function (e, n) {
              const r = parseInt(n, 10);
              return isNaN(r) || r < 0 || r >= t.length ? e : t[r];
            }),
          );
        },
          t.escape = function (e) {
            return e.replace(
              /[<>&]/g,
              (function (e) {
                switch (e) {
                  case "<":
                    return "&lt;";
                  case ">":
                    return "&gt;";
                  case "&":
                    return "&amp;";
                  default:
                    return e;
                }
              }),
            );
          },
          t.escapeRegExpCharacters = r,
          t.trim = function (e, t = " ") {
            return o(i(e, t), t);
          },
          t.ltrim = i,
          t.rtrim = o,
          t.convertSimple2RegExpPattern = function (e) {
            return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
              .replace(/[\*]/g, ".*");
          },
          t.stripWildcards = function (e) {
            return e.replace(/\*/g, "");
          },
          t.createRegExp = function (e, t, n = {}) {
            if (!e) throw new Error("Cannot create regex from empty string");
            t || (e = r(e)),
              n.wholeWord &&
              (/\B/.test(e.charAt(0)) || (e = "\\b" + e),
                /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
            let i = "";
            return n.global && (i += "g"),
              n.matchCase || (i += "i"),
              n.multiline && (i += "m"),
              n.unicode && (i += "u"),
              new RegExp(e, i);
          },
          t.regExpLeadsToEndlessLoop = function (e) {
            return "^" !== e.source && "^$" !== e.source && "$" !== e.source &&
              "^\\s*$" !== e.source && !(!e.exec("") || 0 !== e.lastIndex);
          },
          t.regExpFlags = function (e) {
            return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") +
              (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
          },
          t.splitLines = function (e) {
            return e.split(/\r\n|\r|\n/);
          },
          t.firstNonWhitespaceIndex = function (e) {
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e.charCodeAt(t);
              if (32 !== n && 9 !== n) return t;
            }
            return -1;
          },
          t.getLeadingWhitespace = function (e, t = 0, n = e.length) {
            for (let r = t; r < n; r++) {
              const n = e.charCodeAt(r);
              if (32 !== n && 9 !== n) return e.substring(t, r);
            }
            return e.substring(t, n);
          },
          t.lastNonWhitespaceIndex = function (e, t = e.length - 1) {
            for (let n = t; n >= 0; n--) {
              const t = e.charCodeAt(n);
              if (32 !== t && 9 !== t) return n;
            }
            return -1;
          },
          t.compare = function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          },
          t.compareSubstring = s,
          t.compareIgnoreCase = function (e, t) {
            return a(e, t, 0, e.length, 0, t.length);
          },
          t.compareSubstringIgnoreCase = a,
          t.isLowerAsciiLetter = l,
          t.isUpperAsciiLetter = u,
          t.equalsIgnoreCase = function (e, t) {
            return e.length === t.length && d(e, t);
          },
          t.startsWithIgnoreCase = function (e, t) {
            const n = t.length;
            return !(t.length > e.length) && d(e, t, n);
          },
          t.commonPrefixLength = function (e, t) {
            let n, r = Math.min(e.length, t.length);
            for (n = 0; n < r; n++) {
              if (e.charCodeAt(n) !== t.charCodeAt(n)) {
                return n;
              }
            }
            return r;
          },
          t.commonSuffixLength = function (e, t) {
            let n, r = Math.min(e.length, t.length);
            const i = e.length - 1, o = t.length - 1;
            for (n = 0; n < r; n++) {
              if (e.charCodeAt(i - n) !== t.charCodeAt(o - n)) {
                return n;
              }
            }
            return r;
          },
          t.isHighSurrogate = h,
          t.isLowSurrogate = f,
          t.computeCodePoint = g,
          t.getNextCodePoint = m,
          t.nextCharLength = function (e, t) {
            const n = E.getInstance(), r = t, i = e.length, o = m(e, i, t);
            t += o >= 65536 ? 2 : 1;
            let s = n.getGraphemeBreakType(o);
            for (; t < i;) {
              const r = m(e, i, t), o = n.getGraphemeBreakType(r);
              if (v(s, o)) break;
              t += r >= 65536 ? 2 : 1, s = o;
            }
            return t - r;
          },
          t.prevCharLength = function (e, t) {
            const n = E.getInstance(), r = t, i = p(e, t);
            t -= i >= 65536 ? 2 : 1;
            let o = n.getGraphemeBreakType(i);
            for (; t > 0;) {
              const r = p(e, t), i = n.getGraphemeBreakType(r);
              if (v(i, o)) break;
              t -= r >= 65536 ? 2 : 1, o = i;
            }
            return r - t;
          },
          t.decodeUTF8 = function (e) {
            const t = e.byteLength, n = [];
            let r = 0;
            for (; r < t;) {
              const i = e[r];
              let o;
              if (
                (o = i >= 240 && r + 3 < t
                        ? (7 & e[r++]) << 18 >>> 0 | (63 & e[r++]) << 12 >>> 0 |
                          (63 & e[r++]) << 6 >>> 0 | (63 & e[r++]) << 0 >>> 0
                        : i >= 224 && r + 2 < t
                        ? (15 & e[r++]) << 12 >>> 0 | (63 & e[r++]) << 6 >>> 0 |
                          (63 & e[r++]) << 0 >>> 0
                        : i >= 192 && r + 1 < t
                        ? (31 & e[r++]) << 6 >>> 0 | (63 & e[r++]) << 0 >>> 0
                        : e[r++]) >= 0 && o <= 55295 || o >= 57344 && o <= 65535
              ) {
                n.push(String.fromCharCode(o));
              } else if (o >= 65536 && o <= 1114111) {
                const e = o - 65536,
                  t = 55296 + ((1047552 & e) >>> 10),
                  r = 56320 + ((1023 & e) >>> 0);
                n.push(String.fromCharCode(t)), n.push(String.fromCharCode(r));
              }
              elsen.push(String.fromCharCode(65533));
            }
            return n.join("");
          };
        const _ =
          /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
        t.containsRTL = function (e) {
          return _.test(e);
        };
        const C =
          /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD00-\uDDFF\uDE70-\uDE73\uDE78-\uDE82\uDE90-\uDE95])/;
        t.containsEmoji = function (e) {
          return C.test(e);
        };
        const b = /^[\t\n\r\x20-\x7E]*$/;
        function y(e) {
          return (e = +e) >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 ||
            e >= 65281 && e <= 65374;
        }
        function v(e, t) {
          return 0 === e ? 5 !== t && 7 !== t : (2 !== e || 3 !== t) &&
            (4 === e || 2 === e || 3 === e ||
              (4 === t || 2 === t || 3 === t ||
                (8 !== e || 8 !== t && 9 !== t && 11 !== t && 12 !== t) &&
                  ((11 !== e && 9 !== e || 9 !== t && 10 !== t) &&
                    ((12 !== e && 10 !== e || 10 !== t) &&
                      (5 !== t && 13 !== t &&
                        (7 !== t &&
                          (1 !== e &&
                            ((13 !== e || 14 !== t) &&
                              (6 !== e || 6 !== t)))))))));
        }
        t.isBasicASCII = function (e) {
          return b.test(e);
        },
          t.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/,
          t.containsUnusualLineTerminators = function (e) {
            return t.UNUSUAL_LINE_TERMINATORS.test(e);
          },
          t.containsFullWidthCharacter = function (e) {
            for (let t = 0, n = e.length; t < n; t++) {
              if (y(e.charCodeAt(t))) return !0;
            }
            return !1;
          },
          t.isFullWidthCharacter = y,
          t.isEmojiImprecise = function (e) {
            return e >= 127462 && e <= 127487 || e >= 9728 && e <= 10175 ||
              e >= 127744 && e <= 128591 || e >= 128640 && e <= 128764 ||
              e >= 128992 && e <= 129003 || e >= 129280 && e <= 129535 ||
              e >= 129648 && e <= 129651 || e >= 129656 && e <= 129666 ||
              e >= 129680 && e <= 129685;
          },
          t.UTF8_BOM_CHARACTER = String.fromCharCode(65279),
          t.startsWithUTF8BOM = function (e) {
            return !!(e && e.length > 0 && 65279 === e.charCodeAt(0));
          },
          t.containsUppercaseCharacter = function (e, t = !1) {
            return !!e &&
              (t && (e = e.replace(/\\./g, "")), e.toLowerCase() !== e);
          },
          t.singleLetterHash = function (e) {
            return (e %= 52) < 26 ? String.fromCharCode(97 + e)
            : String.fromCharCode(65 + e - 26);
          },
          t.getGraphemeBreakType = function (e) {
            return E.getInstance().getGraphemeBreakType(e);
          },
          t.breakBetweenGraphemeBreakType = v;
        class E {
          constructor() {
            this._data = JSON.parse(
              "[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]",
            );
          }
          static getInstance() {
            return E._INSTANCE || (E._INSTANCE = new E()), E._INSTANCE;
          }
          getGraphemeBreakType(e) {
            if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
            if (e < 127) return 0;
            const t = this._data, n = t.length / 3;
            let r = 1;
            for (; r <= n;) {
              if (e < t[3 * r]) r *= 2;
              else {
                if (!(e > t[3 * r + 1])) return t[3 * r + 2];
                r = 2 * r + 1;
              }
            }
            return 0;
          }
        }
        E._INSTANCE = null;
      }),
    ),
    e(
      n[22],
      r([0, 1, 5]),
      (function (e, t, n) {
        "use strict";
        function r(e, t) {
          switch (typeof e) {
            case "object":
              return null === e ? i(349, t)
              : Array.isArray(e)
                ? (n = e, s = i(104579, s = t), n.reduce((e, t) => r(t, e), s))
                : function (e, t) {
                  return t = i(181387, t),
                    Object.keys(e).sort().reduce(
                      (t, n) => (t = o(n, t), r(e[n], t)),
                      t,
                    );
                }(e, t);
            case "string":
              return o(e, t);
            case "boolean":
              return function (e, t) {
                return i(e ? 433 : 863, t);
              }(e, t);
            case "number":
              return i(e, t);
            case "undefined":
              return i(937, t);
            default:
              return i(617, t);
          }
          var n, s;
        }
        function i(e, t) {
          return (t << 5) - t + e | 0;
        }
        function o(e, t) {
          t = i(149417, t);
          for (let n = 0, r = e.length; n < r; n++) t = i(e.charCodeAt(n), t);
          return t;
        }
        function s(e, t, n = 32) {
          const r = n - t;
          return (e << t | (~((1 << r) - 1) & e) >>> r) >>> 0;
        }
        function a(e, t = 0, n = e.byteLength, r = 0) {
          for (let i = 0; i < n; i++) e[t + i] = r;
        }
        function l(e, t = 32) {
          return e instanceof ArrayBuffer
            ? Array.from(new Uint8Array(e)).map((e) =>
              e.toString(16).padStart(2, "0")
            ).join("") : function (e, t, n = "0") {
              for (; e.length < t;) e = n + e;
              return e;
            }((e >>> 0).toString(16), t / 4);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.StringSHA1 = t.toHexString = t.stringHash = t.doHash = t.hash =
            void 0,
          t.hash = function (e) {
            return r(e, 0);
          },
          t.doHash = r,
          t.stringHash = o,
          t.toHexString = l;
        class u {
          constructor() {
            this._h0 = 1732584193,
              this._h1 = 4023233417,
              this._h2 = 2562383102,
              this._h3 = 271733878,
              this._h4 = 3285377520,
              this._buff = new Uint8Array(67),
              this._buffDV = new DataView(this._buff.buffer),
              this._buffLen = 0,
              this._totalLen = 0,
              this._leftoverHighSurrogate = 0,
              this._finished = !1;
          }
          update(e) {
            const t = e.length;
            if (0 === t) return;
            const r = this._buff;
            let i, o, s = this._buffLen, a = this._leftoverHighSurrogate;
            for (
              0 !== a ? (i = a, o = -1, a = 0) : (i = e.charCodeAt(0), o = 0);;
            ) {
              let l = i;
              if (n.isHighSurrogate(i)) {
                if (!(o + 1 < t)) {
                  a = i;
                  break;
                }
                {
                  const t = e.charCodeAt(o + 1);
                  n.isLowSurrogate(t)
                    ? (o++, l = n.computeCodePoint(i, t))
                    : l = 65533;
                }
              } else n.isLowSurrogate(i) && (l = 65533);
              if (s = this._push(r, s, l), !(++o < t)) break;
              i = e.charCodeAt(o);
            }
            this._buffLen = s, this._leftoverHighSurrogate = a;
          }
          _push(e, t, n) {
            return n < 128
              ? e[t++] = n
              : n < 2048
              ? (e[t++] = 192 | (1984 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0)
              : n < 65536
              ? (e[t++] = 224 | (61440 & n) >>> 12,
                e[t++] = 128 | (4032 & n) >>> 6,
                e[t++] = 128 | (63 & n) >>> 0)
              : (e[t++] = 240 | (1835008 & n) >>> 18,
                e[t++] = 128 | (258048 & n) >>> 12,
                e[t++] = 128 | (4032 & n) >>> 6,
                e[t++] = 128 | (63 & n) >>> 0),
              t >= 64 &&
              (this._step(),
                t -= 64,
                this._totalLen += 64,
                e[0] = e[64],
                e[1] = e[65],
                e[2] = e[66]),
              t;
          }
          digest() {
            return this._finished ||
              (this._finished = !0,
                this._leftoverHighSurrogate &&
                (this._leftoverHighSurrogate = 0,
                  this._buffLen = this._push(this._buff, this._buffLen, 65533)),
                this._totalLen += this._buffLen,
                this._wrapUp()),
              l(this._h0) + l(this._h1) + l(this._h2) + l(this._h3) +
              l(this._h4);
          }
          _wrapUp() {
            this._buff[this._buffLen++] = 128,
              a(this._buff, this._buffLen),
              this._buffLen > 56 && (this._step(), a(this._buff));
            const e = 8 * this._totalLen;
            this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
              this._buffDV.setUint32(60, e % 4294967296, !1),
              this._step();
          }
          _step() {
            const e = u._bigBlock32, t = this._buffDV;
            for (let n = 0; n < 64; n += 4) {
              e.setUint32(n, t.getUint32(n, !1), !1);
            }
            for (let t = 64; t < 320; t += 4) {
              e.setUint32(
                t,
                s(
                  e.getUint32(t - 12, !1) ^ e.getUint32(t - 32, !1) ^
                    e.getUint32(t - 56, !1) ^ e.getUint32(t - 64, !1),
                  1,
                ),
                !1,
              );
            }
            let n,
              r,
              i,
              o = this._h0,
              a = this._h1,
              l = this._h2,
              c = this._h3,
              d = this._h4;
            for (let t = 0; t < 80; t++) {
              t < 20
                ? (n = a & l | ~a & c, r = 1518500249)
                : t < 40
                ? (n = a ^ l ^ c, r = 1859775393)
                : t < 60
                ? (n = a & l | a & c | l & c, r = 2400959708)
                : (n = a ^ l ^ c, r = 3395469782),
                i = s(o, 5) + n + d + r + e.getUint32(4 * t, !1) & 4294967295,
                d = c,
                c = l,
                l = s(a, 30),
                a = o,
                o = i;
            }
            this._h0 = this._h0 + o & 4294967295,
              this._h1 = this._h1 + a & 4294967295,
              this._h2 = this._h2 + l & 4294967295,
              this._h3 = this._h3 + c & 4294967295,
              this._h4 = this._h4 + d & 4294967295;
          }
        }
        t.StringSHA1 = u, u._bigBlock32 = new DataView(new ArrayBuffer(320));
      }),
    ),
    e(
      n[9],
      r([0, 1, 14, 22]),
      (function (e, t, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.LcsDiff = t.MyArray = t.Debug = t.stringDiff = t
            .StringDiffSequence = void 0;
        class i {
          constructor(e) {
            this.source = e;
          }
          getElements() {
            const e = this.source, t = new Int32Array(e.length);
            for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
            return t;
          }
        }
        t.StringDiffSequence = i,
          t.stringDiff = function (e, t, n) {
            return new l(new i(e), new i(t)).ComputeDiff(n).changes;
          };
        class o {
          static Assert(e, t) {
            if (!e) throw new Error(t);
          }
        }
        t.Debug = o;
        class s {
          static Copy(e, t, n, r, i) {
            for (let o = 0; o < i; o++) n[r + o] = e[t + o];
          }
          static Copy2(e, t, n, r, i) {
            for (let o = 0; o < i; o++) n[r + o] = e[t + o];
          }
        }
        t.MyArray = s;
        class a {
          constructor() {
            this.m_changes = [],
              this.m_originalStart = 1073741824,
              this.m_modifiedStart = 1073741824,
              this.m_originalCount = 0,
              this.m_modifiedCount = 0;
          }
          MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.m_changes.push(
              new n.DiffChange(
                this.m_originalStart,
                this.m_originalCount,
                this.m_modifiedStart,
                this.m_modifiedCount,
              ),
            ),
              this.m_originalCount = 0,
              this.m_modifiedCount = 0,
              this.m_originalStart = 1073741824,
              this.m_modifiedStart = 1073741824;
          }
          AddOriginalElement(e, t) {
            this.m_originalStart = Math.min(this.m_originalStart, e),
              this.m_modifiedStart = Math.min(this.m_modifiedStart, t),
              this.m_originalCount++;
          }
          AddModifiedElement(e, t) {
            this.m_originalStart = Math.min(this.m_originalStart, e),
              this.m_modifiedStart = Math.min(this.m_modifiedStart, t),
              this.m_modifiedCount++;
          }
          getChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.MarkNextChange(),
              this.m_changes;
          }
          getReverseChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.MarkNextChange(),
              this.m_changes.reverse(),
              this.m_changes;
          }
        }
        class l {
          constructor(e, t, n = null) {
            this.ContinueProcessingPredicate = n;
            const [r, i, o] = l._getElements(e), [s, a, u] = l._getElements(t);
            this._hasStrings = o && u,
              this._originalStringElements = r,
              this._originalElementsOrHash = i,
              this._modifiedStringElements = s,
              this._modifiedElementsOrHash = a,
              this.m_forwardHistory = [],
              this.m_reverseHistory = [];
          }
          static _isStringArray(e) {
            return e.length > 0 && "string" == typeof e[0];
          }
          static _getElements(e) {
            const t = e.getElements();
            if (l._isStringArray(t)) {
              const e = new Int32Array(t.length);
              for (let n = 0, i = t.length; n < i; n++) {
                e[n] = r.stringHash(t[n], 0);
              }
              return [t, e, !0];
            }
            return t instanceof Int32Array ? [[], t, !1]
            : [[], new Int32Array(t), !1];
          }
          ElementsAreEqual(e, t) {
            return this._originalElementsOrHash[e] ===
                this._modifiedElementsOrHash[t] &&
              (!this._hasStrings ||
                this._originalStringElements[e] ===
                  this._modifiedStringElements[t]);
          }
          OriginalElementsAreEqual(e, t) {
            return this._originalElementsOrHash[e] ===
                this._originalElementsOrHash[t] &&
              (!this._hasStrings ||
                this._originalStringElements[e] ===
                  this._originalStringElements[t]);
          }
          ModifiedElementsAreEqual(e, t) {
            return this._modifiedElementsOrHash[e] ===
                this._modifiedElementsOrHash[t] &&
              (!this._hasStrings ||
                this._modifiedStringElements[e] ===
                  this._modifiedStringElements[t]);
          }
          ComputeDiff(e) {
            return this._ComputeDiff(
              0,
              this._originalElementsOrHash.length - 1,
              0,
              this._modifiedElementsOrHash.length - 1,
              e,
            );
          }
          _ComputeDiff(e, t, n, r, i) {
            const o = [!1];
            let s = this.ComputeDiffRecursive(e, t, n, r, o);
            return i && (s = this.PrettifyChanges(s)),
              { quitEarly: o[0], changes: s };
          }
          ComputeDiffRecursive(e, t, r, i, s) {
            for (
              s[0] = !1;
              e <= t && r <= i && this.ElementsAreEqual(e, r);
            ) {
              e++, r++;
            }
            for (; t >= e && i >= r && this.ElementsAreEqual(t, i);) t--, i--;
            if (e > t || r > i) {
              let s;
              return r <= i
                ? (o.Assert(
                  e === t + 1,
                  "originalStart should only be one more than originalEnd",
                ),
                  s = [new n.DiffChange(e, 0, r, i - r + 1)])
                : e <= t
                ? (o.Assert(
                  r === i + 1,
                  "modifiedStart should only be one more than modifiedEnd",
                ),
                  s = [new n.DiffChange(e, t - e + 1, r, 0)])
                : (o.Assert(
                  e === t + 1,
                  "originalStart should only be one more than originalEnd",
                ),
                  o.Assert(
                    r === i + 1,
                    "modifiedStart should only be one more than modifiedEnd",
                  ),
                  s = []),
                s;
            }
            const a = [0],
              l = [0],
              u = this.ComputeRecursionPoint(e, t, r, i, a, l, s),
              c = a[0],
              d = l[0];
            if (null !== u) return u;
            if (!s[0]) {
              const o = this.ComputeDiffRecursive(e, c, r, d, s);
              let a = [];
              return a = s[0]
                ? [
                  new n.DiffChange(
                    c + 1,
                    t - (c + 1) + 1,
                    d + 1,
                    i - (d + 1) + 1,
                  ),
                ]
                : this.ComputeDiffRecursive(c + 1, t, d + 1, i, s),
                this.ConcatenateChanges(o, a);
            }
            return [new n.DiffChange(e, t - e + 1, r, i - r + 1)];
          }
          WALKTRACE(e, t, r, i, o, s, l, u, c, d, h, f, g, m, p, _, C, b) {
            let y = null,
              v = null,
              E = new a(),
              S = t,
              L = r,
              A = g[0] - _[0] - i,
              N = -1073741824,
              w = this.m_forwardHistory.length - 1;
            do {
              const t = A + e;
              t === S || t < L && c[t - 1] < c[t + 1]
                ? (m = (h = c[t + 1]) - A - i,
                  h < N && E.MarkNextChange(),
                  N = h,
                  E.AddModifiedElement(h + 1, m),
                  A = t + 1 - e)
                : (m = (h = c[t - 1] + 1) - A - i,
                  h < N && E.MarkNextChange(),
                  N = h - 1,
                  E.AddOriginalElement(h, m + 1),
                  A = t - 1 - e),
                w >= 0 &&
                (e = (c = this.m_forwardHistory[w])[0],
                  S = 1,
                  L = c.length - 1);
            } while (--w >= -1);
            if (y = E.getReverseChanges(), b[0]) {
              let e = g[0] + 1, t = _[0] + 1;
              if (null !== y && y.length > 0) {
                const n = y[y.length - 1];
                e = Math.max(e, n.getOriginalEnd()),
                  t = Math.max(t, n.getModifiedEnd());
              }
              v = [new n.DiffChange(e, f - e + 1, t, p - t + 1)];
            } else {
              E = new a(),
                S = s,
                L = l,
                A = g[0] - _[0] - u,
                N = 1073741824,
                w = C ? this.m_reverseHistory.length - 1
                : this.m_reverseHistory.length - 2;
              do {
                const e = A + o;
                e === S || e < L && d[e - 1] >= d[e + 1]
                  ? (m = (h = d[e + 1] - 1) - A - u,
                    h > N && E.MarkNextChange(),
                    N = h + 1,
                    E.AddOriginalElement(h + 1, m + 1),
                    A = e + 1 - o)
                  : (m = (h = d[e - 1]) - A - u,
                    h > N && E.MarkNextChange(),
                    N = h,
                    E.AddModifiedElement(h + 1, m + 1),
                    A = e - 1 - o),
                  w >= 0 &&
                  (o = (d = this.m_reverseHistory[w])[0],
                    S = 1,
                    L = d.length - 1);
              } while (--w >= -1);
              v = E.getChanges();
            }
            return this.ConcatenateChanges(y, v);
          }
          ComputeRecursionPoint(e, t, r, i, o, a, l) {
            let u = 0, c = 0, d = 0, h = 0, f = 0, g = 0;
            e--,
              r--,
              o[0] = 0,
              a[0] = 0,
              this.m_forwardHistory = [],
              this.m_reverseHistory = [];
            const m = t - e + (i - r),
              p = m + 1,
              _ = new Int32Array(p),
              C = new Int32Array(p),
              b = i - r,
              y = t - e,
              v = e - r,
              E = t - i,
              S = (y - b) % 2 == 0;
            _[b] = e, C[y] = t, l[0] = !1;
            for (let L = 1; L <= m / 2 + 1; L++) {
              let m = 0, A = 0;
              d = this.ClipDiagonalBound(b - L, L, b, p),
                h = this.ClipDiagonalBound(b + L, L, b, p);
              for (let e = d; e <= h; e += 2) {
                c =
                  (u = e === d || e < h && _[e - 1] < _[e + 1]
                    ? _[e + 1]
                    : _[e - 1] + 1) - (e - b) - v;
                const n = u;
                for (
                  ;
                  u < t && c < i && this.ElementsAreEqual(u + 1, c + 1);
                ) {
                  u++, c++;
                }
                if (
                  _[e] = u,
                    u + c > m + A && (m = u, A = c),
                    !S && Math.abs(e - y) <= L - 1 && u >= C[e]
                ) {
                  return o[0] = u,
                    a[0] = c,
                    n <= C[e] && L <= 1448
                      ? this.WALKTRACE(
                        b,
                        d,
                        h,
                        v,
                        y,
                        f,
                        g,
                        E,
                        _,
                        C,
                        u,
                        t,
                        o,
                        c,
                        i,
                        a,
                        S,
                        l,
                      )
                      : null;
                }
              }
              const N = (m - e + (A - r) - L) / 2;
              if (
                null !== this.ContinueProcessingPredicate &&
                !this.ContinueProcessingPredicate(m, N)
              ) {
                return l[0] = !0,
                  o[0] = m,
                  a[0] = A,
                  N > 0 && L <= 1448
                    ? this.WALKTRACE(
                      b,
                      d,
                      h,
                      v,
                      y,
                      f,
                      g,
                      E,
                      _,
                      C,
                      u,
                      t,
                      o,
                      c,
                      i,
                      a,
                      S,
                      l,
                    )
                    : (e++,
                      r++,
                      [new n.DiffChange(e, t - e + 1, r, i - r + 1)]);
              }
              f = this.ClipDiagonalBound(y - L, L, y, p),
                g = this.ClipDiagonalBound(y + L, L, y, p);
              for (let n = f; n <= g; n += 2) {
                c =
                  (u = n === f || n < g && C[n - 1] >= C[n + 1]
                    ? C[n + 1] - 1
                    : C[n - 1]) - (n - y) - E;
                const s = u;
                for (; u > e && c > r && this.ElementsAreEqual(u, c);)u--, c--;
                if (C[n] = u, S && Math.abs(n - b) <= L && u <= _[n]) {
                  return o[0] = u,
                    a[0] = c,
                    s >= _[n] && L <= 1448
                      ? this.WALKTRACE(
                        b,
                        d,
                        h,
                        v,
                        y,
                        f,
                        g,
                        E,
                        _,
                        C,
                        u,
                        t,
                        o,
                        c,
                        i,
                        a,
                        S,
                        l,
                      )
                      : null;
                }
              }
              if (L <= 1447) {
                let e = new Int32Array(h - d + 2);
                e[0] = b - d + 1,
                  s.Copy2(_, d, e, 1, h - d + 1),
                  this.m_forwardHistory.push(e),
                  (e = new Int32Array(g - f + 2))[0] = y - f + 1,
                  s.Copy2(C, f, e, 1, g - f + 1),
                  this.m_reverseHistory.push(e);
              }
            }
            return this.WALKTRACE(
              b,
              d,
              h,
              v,
              y,
              f,
              g,
              E,
              _,
              C,
              u,
              t,
              o,
              c,
              i,
              a,
              S,
              l,
            );
          }
          PrettifyChanges(e) {
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                r = t < e.length - 1 ? e[t + 1].originalStart
                : this._originalElementsOrHash.length,
                i = t < e.length - 1 ? e[t + 1].modifiedStart
                : this._modifiedElementsOrHash.length,
                o = n.originalLength > 0,
                s = n.modifiedLength > 0;
              for (
                ;
                n.originalStart + n.originalLength < r &&
                n.modifiedStart + n.modifiedLength < i &&
                (!o ||
                  this.OriginalElementsAreEqual(
                    n.originalStart,
                    n.originalStart + n.originalLength,
                  )) &&
                (!s ||
                  this.ModifiedElementsAreEqual(
                    n.modifiedStart,
                    n.modifiedStart + n.modifiedLength,
                  ));
              ) {
                n.originalStart++, n.modifiedStart++;
              }
              let a = [null];
              t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], a) &&
                (e[t] = a[0], e.splice(t + 1, 1), t--);
            }
            for (let t = e.length - 1; t >= 0; t--) {
              const n = e[t];
              let r = 0, i = 0;
              if (t > 0) {
                const n = e[t - 1];
                n.originalLength > 0 &&
                (r = n.originalStart + n.originalLength),
                  n.modifiedLength > 0 &&
                  (i = n.modifiedStart + n.modifiedLength);
              }
              const o = n.originalLength > 0, s = n.modifiedLength > 0;
              let a = 0,
                l = this._boundaryScore(
                  n.originalStart,
                  n.originalLength,
                  n.modifiedStart,
                  n.modifiedLength,
                );
              for (let e = 1;; e++) {
                const t = n.originalStart - e, u = n.modifiedStart - e;
                if (t < r || u < i) break;
                if (
                  o && !this.OriginalElementsAreEqual(t, t + n.originalLength)
                ) {
                  break;
                }
                if (
                  s && !this.ModifiedElementsAreEqual(u, u + n.modifiedLength)
                ) {
                  break;
                }
                const c = this._boundaryScore(
                  t,
                  n.originalLength,
                  u,
                  n.modifiedLength,
                );
                c > l && (l = c, a = e);
              }
              n.originalStart -= a, n.modifiedStart -= a;
            }
            if (this._hasStrings) {
              for (let t = 1, n = e.length; t < n; t++) {
                const n = e[t - 1],
                  r = e[t],
                  i = r.originalStart - n.originalStart - n.originalLength,
                  o = n.originalStart,
                  s = r.originalStart + r.originalLength,
                  a = s - o,
                  l = n.modifiedStart,
                  u = r.modifiedStart + r.modifiedLength,
                  c = u - l;
                if (i < 5 && a < 20 && c < 20) {
                  const e = this._findBetterContiguousSequence(o, a, l, c, i);
                  if (e) {
                    const [t, o] = e;
                    t === n.originalStart + n.originalLength &&
                        o === n.modifiedStart + n.modifiedLength ||
                      (n.originalLength = t - n.originalStart,
                        n.modifiedLength = o - n.modifiedStart,
                        r.originalStart = t + i,
                        r.modifiedStart = o + i,
                        r.originalLength = s - r.originalStart,
                        r.modifiedLength = u - r.modifiedStart);
                  }
                }
              }
            }
            return e;
          }
          _findBetterContiguousSequence(e, t, n, r, i) {
            if (t < i || r < i) return null;
            const o = e + t - i + 1, s = n + r - i + 1;
            let a = 0, l = 0, u = 0;
            for (let t = e; t < o; t++) {
              for (let e = n; e < s; e++) {
                const n = this._contiguousSequenceScore(t, e, i);
                n > 0 && n > a && (a = n, l = t, u = e);
              }
            }
            return a > 0 ? [l, u] : null;
          }
          _contiguousSequenceScore(e, t, n) {
            let r = 0;
            for (let i = 0; i < n; i++) {
              if (!this.ElementsAreEqual(e + i, t + i)) return 0;
              r += this._originalStringElements[e + i].length;
            }
            return r;
          }
          _OriginalIsBoundary(e) {
            return e <= 0 || e >= this._originalElementsOrHash.length - 1 ||
              this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
          }
          _OriginalRegionIsBoundary(e, t) {
            if (
              this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)
            ) {
              return !0;
            }
            if (t > 0) {
              const n = e + t;
              if (
                this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)
              ) {
                return !0;
              }
            }
            return !1;
          }
          _ModifiedIsBoundary(e) {
            return e <= 0 || e >= this._modifiedElementsOrHash.length - 1 ||
              this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
          }
          _ModifiedRegionIsBoundary(e, t) {
            if (
              this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)
            ) {
              return !0;
            }
            if (t > 0) {
              const n = e + t;
              if (
                this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)
              ) {
                return !0;
              }
            }
            return !1;
          }
          _boundaryScore(e, t, n, r) {
            return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) +
              (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0);
          }
          ConcatenateChanges(e, t) {
            let n = [];
            if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
            if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
              const r = new Array(e.length + t.length - 1);
              return s.Copy(e, 0, r, 0, e.length - 1),
                r[e.length - 1] = n[0],
                s.Copy(t, 1, r, e.length, t.length - 1),
                r;
            }
            {
              const n = new Array(e.length + t.length);
              return s.Copy(e, 0, n, 0, e.length),
                s.Copy(t, 0, n, e.length, t.length),
                n;
            }
          }
          ChangesOverlap(e, t, r) {
            if (
              o.Assert(
                e.originalStart <= t.originalStart,
                "Left change is not less than or equal to right change",
              ),
                o.Assert(
                  e.modifiedStart <= t.modifiedStart,
                  "Left change is not less than or equal to right change",
                ),
                e.originalStart + e.originalLength >= t.originalStart ||
                e.modifiedStart + e.modifiedLength >= t.modifiedStart
            ) {
              const i = e.originalStart;
              let o = e.originalLength;
              const s = e.modifiedStart;
              let a = e.modifiedLength;
              return e.originalStart + e.originalLength >= t.originalStart &&
                (o = t.originalStart + t.originalLength - e.originalStart),
                e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                (a = t.modifiedStart + t.modifiedLength - e.modifiedStart),
                r[0] = new n.DiffChange(i, o, s, a),
                !0;
            }
            return r[0] = null, !1;
          }
          ClipDiagonalBound(e, t, n, r) {
            if (e >= 0 && e < r) return e;
            const i = t % 2 == 0;
            if (e < 0) return i === (n % 2 == 0) ? 0 : 1;
            return i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2;
          }
        }
        t.LcsDiff = l;
      }),
    ),
    e(
      n[10],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        function n(e) {
          return "string" == typeof e;
        }
        function r(e) {
          return void 0 === e;
        }
        function i(e) {
          return r(e) || null === e;
        }
        function o(e) {
          return "function" == typeof e;
        }
        function s(e, t) {
          if (n(t)) {
            if (typeof e !== t) {
              throw new Error(
                `argument does not match constraint: typeof ${t}`,
              );
            }
          } else if (o(t)) {
            try {
              if (e instanceof t) return;
            } catch (e) {}
            if (!i(e) && e.constructor === t) return;
            if (1 === t.length && !0 === t.call(void 0, e)) return;
            throw new Error(
              "argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true",
            );
          }
        }
        function a(e) {
          let t = [], n = Object.getPrototypeOf(e);
          for (; Object.prototype !== n;) {
            t = t.concat(Object.getOwnPropertyNames(n)),
              n = Object.getPrototypeOf(n);
          }
          return t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.withNullAsUndefined = t.createProxyObject = t.getAllMethodNames = t
            .getAllPropertyNames = t.validateConstraint = t
              .validateConstraints = t.isFunction = t.assertIsDefined = t
                .assertType = t.isUndefinedOrNull = t.isUndefined = t
                  .isBoolean = t.isNumber = t.isObject = t.isString = t
                    .isArray = void 0,
          t.isArray = function (e) {
            return Array.isArray(e);
          },
          t.isString = n,
          t.isObject = function (e) {
            return !("object" != typeof e || null === e || Array.isArray(e) ||
              e instanceof RegExp || e instanceof Date);
          },
          t.isNumber = function (e) {
            return "number" == typeof e && !isNaN(e);
          },
          t.isBoolean = function (e) {
            return !0 === e || !1 === e;
          },
          t.isUndefined = r,
          t.isUndefinedOrNull = i,
          t.assertType = function (e, t) {
            if (!e) {
              throw new Error(
                t ? `Unexpected type, expected '${t}'` : "Unexpected type",
              );
            }
          },
          t.assertIsDefined = function (e) {
            if (i(e)) {
              throw new Error(
                "Assertion Failed: argument is undefined or null",
              );
            }
            return e;
          },
          t.isFunction = o,
          t.validateConstraints = function (e, t) {
            const n = Math.min(e.length, t.length);
            for (let r = 0; r < n; r++) s(e[r], t[r]);
          },
          t.validateConstraint = s,
          t.getAllPropertyNames = a,
          t.getAllMethodNames = function (e) {
            const t = [];
            for (const n of a(e)) "function" == typeof e[n] && t.push(n);
            return t;
          },
          t.createProxyObject = function (e, t) {
            const n = (e) => (function () {
              const n = Array.prototype.slice.call(arguments, 0);
              return t(e, n);
            });
            let r = {};
            for (const t of e) r[t] = n(t);
            return r;
          },
          t.withNullAsUndefined = function (e) {
            return null === e ? void 0 : e;
          };
      }),
    ),
    e(
      n[11],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.toUint32 = t.toUint8 = void 0,
          t.toUint8 = function (e) {
            return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
          },
          t.toUint32 = function (e) {
            return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
          };
      }),
    ),
    e(
      n[12],
      r([0, 1, 2, 20]),
      (function (e, t, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.uriToFsPath = t.URI = void 0;
        const i = /^\w[\w\d+.-]*$/, o = /^\//, s = /^\/\//;
        const a = "",
          l = "/",
          u = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        class c {
          constructor(e, t, n, r, u, c = !1) {
            "object" == typeof e
              ? (this.scheme = e.scheme || a,
                this.authority = e.authority || a,
                this.path = e.path || a,
                this.query = e.query || a,
                this.fragment = e.fragment || a)
              : (this.scheme = function (e, t) {
                return e || t ? e : "file";
              }(e, c),
                this.authority = t || a,
                this.path = function (e, t) {
                  switch (e) {
                    case "https":
                    case "http":
                    case "file":
                      t ? t[0] !== l && (t = l + t) : t = l;
                  }
                  return t;
                }(this.scheme, n || a),
                this.query = r || a,
                this.fragment = u || a,
                function (e, t) {
                  if (!e.scheme && t) {
                    throw new Error(
                      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`,
                    );
                  }
                  if (e.scheme && !i.test(e.scheme)) {
                    throw new Error(
                      "[UriError]: Scheme contains illegal characters.",
                    );
                  }
                  if (e.path) {
                    if (e.authority) {
                      if (!o.test(e.path)) {
                        throw new Error(
                          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                        );
                      }
                    } else if (s.test(e.path)) {
                      throw new Error(
                        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
                      );
                    }
                  }
                }(this, c));
          }
          static isUri(e) {
            return e instanceof c ||
              !!e &&
                ("string" == typeof e.authority &&
                  "string" == typeof e.fragment && "string" == typeof e.path &&
                  "string" == typeof e.query && "string" == typeof e.scheme &&
                  "function" == typeof e.fsPath &&
                  "function" == typeof e.with &&
                  "function" == typeof e.toString);
          }
          get fsPath() {
            return p(this, !1);
          }
          with(e) {
            if (!e) return this;
            let { scheme: t, authority: n, path: r, query: i, fragment: o } = e;
            return void 0 === t ? t = this.scheme : null === t && (t = a),
              void 0 === n ? n = this.authority : null === n && (n = a),
              void 0 === r ? r = this.path : null === r && (r = a),
              void 0 === i ? i = this.query : null === i && (i = a),
              void 0 === o ? o = this.fragment : null === o && (o = a),
              t === this.scheme && n === this.authority && r === this.path &&
                i === this.query && o === this.fragment
                ? this
                : new h(t, n, r, i, o);
          }
          static parse(e, t = !1) {
            const n = u.exec(e);
            return n ? new h(
              n[2] || a,
              b(n[4] || a),
              b(n[5] || a),
              b(n[7] || a),
              b(n[9] || a),
              t,
            ) : new h(a, a, a, a, a);
          }
          static file(e) {
            let t = a;
            if (
              n.isWindows && (e = e.replace(/\\/g, l)), e[0] === l && e[1] === l
            ) {
              const n = e.indexOf(l, 2);
              -1 === n
                ? (t = e.substring(2), e = l)
                : (t = e.substring(2, n), e = e.substring(n) || l);
            }
            return new h("file", t, e, a, a);
          }
          static from(e) {
            return new h(e.scheme, e.authority, e.path, e.query, e.fragment);
          }
          static joinPath(e, ...t) {
            if (!e.path) {
              throw new Error(
                "[UriError]: cannot call joinPath on URI without path",
              );
            }
            let i;
            return i = n.isWindows && "file" === e.scheme
              ? c.file(r.win32.join(p(e, !0), ...t)).path
              : r.posix.join(e.path, ...t),
              e.with({ path: i });
          }
          toString(e = !1) {
            return _(this, e);
          }
          toJSON() {
            return this;
          }
          static revive(e) {
            if (e) {
              if (e instanceof c) return e;
              {
                const t = new h(e);
                return t._formatted = e.external,
                  t._fsPath = e._sep === d ? e.fsPath : null,
                  t;
              }
            }
            return e;
          }
        }
        t.URI = c;
        const d = n.isWindows ? 1 : void 0;
        class h extends c {
          constructor() {
            super(...arguments), this._formatted = null, this._fsPath = null;
          }
          get fsPath() {
            return this._fsPath || (this._fsPath = p(this, !1)), this._fsPath;
          }
          toString(e = !1) {
            return e ? _(this, !0)
            : (this._formatted || (this._formatted = _(this, !1)),
              this._formatted);
          }
          toJSON() {
            const e = { $mid: 1 };
            return this._fsPath && (e.fsPath = this._fsPath, e._sep = d),
              this._formatted && (e.external = this._formatted),
              this.path && (e.path = this.path),
              this.scheme && (e.scheme = this.scheme),
              this.authority && (e.authority = this.authority),
              this.query && (e.query = this.query),
              this.fragment && (e.fragment = this.fragment),
              e;
          }
        }
        const f = {
          58: "%3A",
          47: "%2F",
          63: "%3F",
          35: "%23",
          91: "%5B",
          93: "%5D",
          64: "%40",
          33: "%21",
          36: "%24",
          38: "%26",
          39: "%27",
          40: "%28",
          41: "%29",
          42: "%2A",
          43: "%2B",
          44: "%2C",
          59: "%3B",
          61: "%3D",
          32: "%20",
        };
        function g(e, t) {
          let n = void 0, r = -1;
          for (let i = 0; i < e.length; i++) {
            const o = e.charCodeAt(i);
            if (
              o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 ||
              45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o
            ) {
              -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1),
                void 0 !== n && (n += e.charAt(i));
            } else {
              void 0 === n && (n = e.substr(0, i));
              const t = f[o];
              void 0 !== t
                ? (-1 !== r &&
                  (n += encodeURIComponent(e.substring(r, i)), r = -1),
                  n += t)
                : -1 === r && (r = i);
            }
          }
          return -1 !== r && (n += encodeURIComponent(e.substring(r))),
            void 0 !== n ? n : e;
        }
        function m(e) {
          let t = void 0;
          for (let n = 0; n < e.length; n++) {
            const r = e.charCodeAt(n);
            35 === r || 63 === r
              ? (void 0 === t && (t = e.substr(0, n)), t += f[r])
              : void 0 !== t && (t += e[n]);
          }
          return void 0 !== t ? t : e;
        }
        function p(e, t) {
          let r;
          return r = e.authority && e.path.length > 1 && "file" === e.scheme
            ? `//${e.authority}${e.path}`
            : 47 === e.path.charCodeAt(0) &&
                (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 ||
                  e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) &&
                58 === e.path.charCodeAt(2)
            ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2)
            : e.path,
            n.isWindows && (r = r.replace(/\//g, "\\")),
            r;
        }
        function _(e, t) {
          const n = t ? m : g;
          let r = "",
            { scheme: i, authority: o, path: s, query: a, fragment: u } = e;
          if (
            i && (r += i, r += ":"), (o || "file" === i) && (r += l, r += l), o
          ) {
            let e = o.indexOf("@");
            if (-1 !== e) {
              const t = o.substr(0, e);
              o = o.substr(e + 1),
                -1 === (e = t.indexOf(":"))
                  ? r += n(t, !1)
                  : (r += n(t.substr(0, e), !1),
                    r += ":",
                    r += n(t.substr(e + 1), !1)),
                r += "@";
            }
            -1 === (e = (o = o.toLowerCase()).indexOf(":"))
              ? r += n(o, !1)
              : (r += n(o.substr(0, e), !1), r += o.substr(e));
          }
          if (s) {
            if (
              s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2)
            ) {
              const e = s.charCodeAt(1);
              e >= 65 && e <= 90 &&
                (s = `/${String.fromCharCode(e + 32)}:${s.substr(3)}`);
            } else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
              const e = s.charCodeAt(0);
              e >= 65 && e <= 90 &&
                (s = `${String.fromCharCode(e + 32)}:${s.substr(2)}`);
            }
            r += n(s, !0);
          }
          return a && (r += "?", r += n(a, !1)),
            u && (r += "#", r += t ? u : g(u, !1)),
            r;
        }
        t.uriToFsPath = p;
        const C = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
        function b(e) {
          return e.match(C) ? e.replace(C, (e) =>
            (function e(t) {
              try {
                return decodeURIComponent(t);
              } catch (n) {
                return t.length > 3 ? t.substr(0, 3) + e(t.substr(3)) : t;
              }
            })(e)) : e;
        }
      }),
    ),
    e(
      n[34],
      r([0, 1, 4, 7, 2, 10]),
      (function (e, t, n, r, i, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.create = t.SimpleWorkerServer = t.SimpleWorkerClient = t
            .logOnceWebWorkerWarning = void 0;
        const s = "$initialize";
        let a = !1;
        t.logOnceWebWorkerWarning = function (e) {
          i.isWeb &&
            (a ||
              (a = !0,
                console.warn(
                  "Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq",
                )),
              console.warn(e.message));
        };
        class l {
          constructor(e) {
            this._workerId = -1,
              this._handler = e,
              this._lastSentReq = 0,
              this._pendingReplies = Object.create(null);
          }
          setWorkerId(e) {
            this._workerId = e;
          }
          sendMessage(e, t) {
            let n = String(++this._lastSentReq);
            return new Promise((r, i) => {
              this._pendingReplies[n] = { resolve: r, reject: i },
                this._send(
                  { vsWorker: this._workerId, req: n, method: e, args: t },
                );
            });
          }
          handleMessage(e) {
            e && e.vsWorker &&
              (-1 !== this._workerId && e.vsWorker !== this._workerId ||
                this._handleMessage(e));
          }
          _handleMessage(e) {
            if (e.seq) {
              let t = e;
              if (!this._pendingReplies[t.seq]) {
                return void console.warn("Got reply to unknown seq");
              }
              let n = this._pendingReplies[t.seq];
              if (delete this._pendingReplies[t.seq], t.err) {
                let e = t.err;
                return t.err.$isError &&
                  ((e = new Error()).name = t.err.name,
                    e.message = t.err.message,
                    e.stack = t.err.stack),
                  void n.reject(e);
              }
              return void n.resolve(t.res);
            }
            let t = e, r = t.req;
            this._handler.handleMessage(t.method, t.args).then((e) => {
              this._send(
                { vsWorker: this._workerId, seq: r, res: e, err: void 0 },
              );
            }, (e) => {
              e.detail instanceof Error &&
              (e.detail = n.transformErrorForSerialization(e.detail)),
                this._send(
                  {
                    vsWorker: this._workerId,
                    seq: r,
                    res: void 0,
                    err: n.transformErrorForSerialization(e),
                  },
                );
            });
          }
          _send(e) {
            let t = [];
            if (e.req) {
              const n = e;
              for (
                let e = 0;
                e < n.args.length;
                e++
              ) {
                n.args[e] instanceof ArrayBuffer && t.push(n.args[e]);
              }
            } else {
              const n = e;
              n.res instanceof ArrayBuffer && t.push(n.res);
            }
            this._handler.sendMessage(e, t);
          }
        }
        class u extends r.Disposable {
          constructor(e, t, n) {
            super();
            let r = null;
            this._worker = this._register(
              e.create("vs/base/common/worker/simpleWorker", (e) => {
                this._protocol.handleMessage(e);
              }, (e) => {
                r && r(e);
              }),
            ),
              this._protocol = new l({
                sendMessage: (e, t) => {
                  this._worker.postMessage(e, t);
                },
                handleMessage: (e, t) => {
                  if ("function" != typeof n[e]) {
                    return Promise.reject(
                      new Error(
                        "Missing method " + e + " on main thread host.",
                      ),
                    );
                  }
                  try {
                    return Promise.resolve(n[e].apply(n, t));
                  } catch (e) {
                    return Promise.reject(e);
                  }
                },
              }),
              this._protocol.setWorkerId(this._worker.getId());
            let i = null;
            void 0 !== self.require &&
              "function" == typeof self.require.getConfig
              ? i = self.require.getConfig() : void 0 !== self.requirejs &&
                (i = self.requirejs.s.contexts._.config);
            const a = o.getAllMethodNames(n);
            this._onModuleLoaded = this._protocol.sendMessage(
              s,
              [this._worker.getId(), JSON.parse(JSON.stringify(i)), t, a],
            );
            const u = (e, t) => this._request(e, t);
            this._lazyProxy = new Promise((e, n) => {
              r = n,
                this._onModuleLoaded.then((t) => {
                  e(o.createProxyObject(t, u));
                }, (e) => {
                  n(e), this._onError("Worker failed to load " + t, e);
                });
            });
          }
          getProxyObject() {
            return this._lazyProxy;
          }
          _request(e, t) {
            return new Promise((n, r) => {
              this._onModuleLoaded.then(() => {
                this._protocol.sendMessage(e, t).then(n, r);
              }, r);
            });
          }
          _onError(e, t) {
            console.error(e), console.info(t);
          }
        }
        t.SimpleWorkerClient = u;
        class c {
          constructor(e, t) {
            this._requestHandlerFactory = t,
              this._requestHandler = null,
              this._protocol = new l({
                sendMessage: (t, n) => {
                  e(t, n);
                },
                handleMessage: (e, t) => this._handleMessage(e, t),
              });
          }
          onmessage(e) {
            this._protocol.handleMessage(e);
          }
          _handleMessage(e, t) {
            if (e === s) return this.initialize(t[0], t[1], t[2], t[3]);
            if (
              !this._requestHandler ||
              "function" != typeof this._requestHandler[e]
            ) {
              return Promise.reject(
                new Error("Missing requestHandler or method: " + e),
              );
            }
            try {
              return Promise.resolve(
                this._requestHandler[e].apply(this._requestHandler, t),
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
          initialize(e, t, n, r) {
            this._protocol.setWorkerId(e);
            const i = o.createProxyObject(
              r,
              (e, t) => this._protocol.sendMessage(e, t),
            );
            return this._requestHandlerFactory
              ? (this._requestHandler = this._requestHandlerFactory(i),
                Promise.resolve(o.getAllMethodNames(this._requestHandler)))
              : (t &&
                (void 0 !== t.baseUrl && delete t.baseUrl,
                  void 0 !== t.paths && void 0 !== t.paths.vs &&
                  delete t.paths.vs,
                  void 0 !== typeof t.trustedTypesPolicy &&
                  delete t.trustedTypesPolicy,
                  t.catchError = !0,
                  self.require.config(t)),
                new Promise((e, t) => {
                  self.require([n], (n) => {
                    this._requestHandler = n.create(i),
                      this._requestHandler
                        ? e(o.getAllMethodNames(this._requestHandler))
                        : t(new Error("No RequestHandler!"));
                  }, t);
                }));
          }
        }
        t.SimpleWorkerServer = c,
          t.create = function (e) {
            return new c(e, null);
          };
      }),
    ),
    e(
      n[23],
      r([0, 1, 11]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.CharacterSet = t.CharacterClassifier = void 0;
        class r {
          constructor(e) {
            let t = n.toUint8(e);
            this._defaultValue = t,
              this._asciiMap = r._createAsciiMap(t),
              this._map = new Map();
          }
          static _createAsciiMap(e) {
            let t = new Uint8Array(256);
            for (let n = 0; n < 256; n++) t[n] = e;
            return t;
          }
          set(e, t) {
            let r = n.toUint8(t);
            e >= 0 && e < 256 ? this._asciiMap[e] = r : this._map.set(e, r);
          }
          get(e) {
            return e >= 0 && e < 256 ? this._asciiMap[e]
            : this._map.get(e) || this._defaultValue;
          }
        }
        t.CharacterClassifier = r;
        t.CharacterSet = class {
          constructor() {
            this._actual = new r(0);
          }
          add(e) {
            this._actual.set(e, 1);
          }
          has(e) {
            return 1 === this._actual.get(e);
          }
        };
      }),
    ),
    e(
      n[3],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.Position = void 0;
        class n {
          constructor(e, t) {
            this.lineNumber = e, this.column = t;
          }
          with(e = this.lineNumber, t = this.column) {
            return e === this.lineNumber && t === this.column ? this
            : new n(e, t);
          }
          delta(e = 0, t = 0) {
            return this.with(this.lineNumber + e, this.column + t);
          }
          equals(e) {
            return n.equals(this, e);
          }
          static equals(e, t) {
            return !e && !t ||
              !!e && !!t && e.lineNumber === t.lineNumber &&
                e.column === t.column;
          }
          isBefore(e) {
            return n.isBefore(this, e);
          }
          static isBefore(e, t) {
            return e.lineNumber < t.lineNumber ||
              !(t.lineNumber < e.lineNumber) && e.column < t.column;
          }
          isBeforeOrEqual(e) {
            return n.isBeforeOrEqual(this, e);
          }
          static isBeforeOrEqual(e, t) {
            return e.lineNumber < t.lineNumber ||
              !(t.lineNumber < e.lineNumber) && e.column <= t.column;
          }
          static compare(e, t) {
            let n = 0 | e.lineNumber, r = 0 | t.lineNumber;
            if (n === r) return (0 | e.column) - (0 | t.column);
            return n - r;
          }
          clone() {
            return new n(this.lineNumber, this.column);
          }
          toString() {
            return "(" + this.lineNumber + "," + this.column + ")";
          }
          static lift(e) {
            return new n(e.lineNumber, e.column);
          }
          static isIPosition(e) {
            return e && "number" == typeof e.lineNumber &&
              "number" == typeof e.column;
          }
        }
        t.Position = n;
      }),
    ),
    e(
      n[6],
      r([0, 1, 3]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Range = void 0;
        class r {
          constructor(e, t, n, r) {
            e > n || e === n && t > r
              ? (this.startLineNumber = n,
                this.startColumn = r,
                this.endLineNumber = e,
                this.endColumn = t)
              : (this.startLineNumber = e,
                this.startColumn = t,
                this.endLineNumber = n,
                this.endColumn = r);
          }
          isEmpty() {
            return r.isEmpty(this);
          }
          static isEmpty(e) {
            return e.startLineNumber === e.endLineNumber &&
              e.startColumn === e.endColumn;
          }
          containsPosition(e) {
            return r.containsPosition(this, e);
          }
          static containsPosition(e, t) {
            return !(t.lineNumber < e.startLineNumber ||
              t.lineNumber > e.endLineNumber) &&
              (!(t.lineNumber === e.startLineNumber &&
                t.column < e.startColumn) &&
                !(t.lineNumber === e.endLineNumber && t.column > e.endColumn));
          }
          containsRange(e) {
            return r.containsRange(this, e);
          }
          static containsRange(e, t) {
            return !(t.startLineNumber < e.startLineNumber ||
              t.endLineNumber < e.startLineNumber) &&
              (!(t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber) &&
                (!(t.startLineNumber === e.startLineNumber &&
                  t.startColumn < e.startColumn) &&
                  !(t.endLineNumber === e.endLineNumber &&
                    t.endColumn > e.endColumn)));
          }
          strictContainsRange(e) {
            return r.strictContainsRange(this, e);
          }
          static strictContainsRange(e, t) {
            return !(t.startLineNumber < e.startLineNumber ||
              t.endLineNumber < e.startLineNumber) &&
              (!(t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber) &&
                (!(t.startLineNumber === e.startLineNumber &&
                  t.startColumn <= e.startColumn) &&
                  !(t.endLineNumber === e.endLineNumber &&
                    t.endColumn >= e.endColumn)));
          }
          plusRange(e) {
            return r.plusRange(this, e);
          }
          static plusRange(e, t) {
            let n, i, o, s;
            return t.startLineNumber < e.startLineNumber
              ? (n = t.startLineNumber, i = t.startColumn)
              : t.startLineNumber === e.startLineNumber
              ? (n = t.startLineNumber,
                i = Math.min(t.startColumn, e.startColumn))
              : (n = e.startLineNumber, i = e.startColumn),
              t.endLineNumber > e.endLineNumber
                ? (o = t.endLineNumber, s = t.endColumn)
                : t.endLineNumber === e.endLineNumber
                ? (o = t.endLineNumber, s = Math.max(t.endColumn, e.endColumn))
                : (o = e.endLineNumber, s = e.endColumn),
              new r(n, i, o, s);
          }
          intersectRanges(e) {
            return r.intersectRanges(this, e);
          }
          static intersectRanges(e, t) {
            let n = e.startLineNumber,
              i = e.startColumn,
              o = e.endLineNumber,
              s = e.endColumn,
              a = t.startLineNumber,
              l = t.startColumn,
              u = t.endLineNumber,
              c = t.endColumn;
            return n < a ? (n = a, i = l) : n === a && (i = Math.max(i, l)),
              o > u ? (o = u, s = c) : o === u && (s = Math.min(s, c)),
              n > o ? null : n === o && i > s ? null : new r(n, i, o, s);
          }
          equalsRange(e) {
            return r.equalsRange(this, e);
          }
          static equalsRange(e, t) {
            return !!e && !!t && e.startLineNumber === t.startLineNumber &&
              e.startColumn === t.startColumn &&
              e.endLineNumber === t.endLineNumber &&
              e.endColumn === t.endColumn;
          }
          getEndPosition() {
            return r.getEndPosition(this);
          }
          static getEndPosition(e) {
            return new n.Position(e.endLineNumber, e.endColumn);
          }
          getStartPosition() {
            return r.getStartPosition(this);
          }
          static getStartPosition(e) {
            return new n.Position(e.startLineNumber, e.startColumn);
          }
          toString() {
            return "[" + this.startLineNumber + "," + this.startColumn +
              " -> " + this.endLineNumber + "," + this.endColumn + "]";
          }
          setEndPosition(e, t) {
            return new r(this.startLineNumber, this.startColumn, e, t);
          }
          setStartPosition(e, t) {
            return new r(e, t, this.endLineNumber, this.endColumn);
          }
          collapseToStart() {
            return r.collapseToStart(this);
          }
          static collapseToStart(e) {
            return new r(
              e.startLineNumber,
              e.startColumn,
              e.startLineNumber,
              e.startColumn,
            );
          }
          static fromPositions(e, t = e) {
            return new r(e.lineNumber, e.column, t.lineNumber, t.column);
          }
          static lift(e) {
            return e ? new r(
              e.startLineNumber,
              e.startColumn,
              e.endLineNumber,
              e.endColumn,
            ) : null;
          }
          static isIRange(e) {
            return e && "number" == typeof e.startLineNumber &&
              "number" == typeof e.startColumn &&
              "number" == typeof e.endLineNumber &&
              "number" == typeof e.endColumn;
          }
          static areIntersectingOrTouching(e, t) {
            return !(e.endLineNumber < t.startLineNumber ||
              e.endLineNumber === t.startLineNumber &&
                e.endColumn < t.startColumn) &&
              !(t.endLineNumber < e.startLineNumber ||
                t.endLineNumber === e.startLineNumber &&
                  t.endColumn < e.startColumn);
          }
          static areIntersecting(e, t) {
            return !(e.endLineNumber < t.startLineNumber ||
              e.endLineNumber === t.startLineNumber &&
                e.endColumn <= t.startColumn) &&
              !(t.endLineNumber < e.startLineNumber ||
                t.endLineNumber === e.startLineNumber &&
                  t.endColumn <= e.startColumn);
          }
          static compareRangesUsingStarts(e, t) {
            if (e && t) {
              const n = 0 | e.startLineNumber, r = 0 | t.startLineNumber;
              if (n === r) {
                const n = 0 | e.startColumn, r = 0 | t.startColumn;
                if (n === r) {
                  const n = 0 | e.endLineNumber, r = 0 | t.endLineNumber;
                  if (n === r) return (0 | e.endColumn) - (0 | t.endColumn);
                  return n - r;
                }
                return n - r;
              }
              return n - r;
            }
            return (e ? 1 : 0) - (t ? 1 : 0);
          }
          static compareRangesUsingEnds(e, t) {
            return e.endLineNumber === t.endLineNumber
              ? e.endColumn === t.endColumn
                ? e.startLineNumber === t.startLineNumber
                  ? e.startColumn - t.startColumn
                  : e.startLineNumber - t.startLineNumber
                : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
          }
          static spansMultipleLines(e) {
            return e.endLineNumber > e.startLineNumber;
          }
        }
        t.Range = r;
      }),
    ),
    e(
      n[24],
      r([0, 1, 3, 6]),
      (function (e, t, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.Selection = void 0;
        class i extends r.Range {
          constructor(e, t, n, r) {
            super(e, t, n, r),
              this.selectionStartLineNumber = e,
              this.selectionStartColumn = t,
              this.positionLineNumber = n,
              this.positionColumn = r;
          }
          toString() {
            return "[" + this.selectionStartLineNumber + "," +
              this.selectionStartColumn + " -> " + this.positionLineNumber +
              "," + this.positionColumn + "]";
          }
          equalsSelection(e) {
            return i.selectionsEqual(this, e);
          }
          static selectionsEqual(e, t) {
            return e.selectionStartLineNumber === t.selectionStartLineNumber &&
              e.selectionStartColumn === t.selectionStartColumn &&
              e.positionLineNumber === t.positionLineNumber &&
              e.positionColumn === t.positionColumn;
          }
          getDirection() {
            return this.selectionStartLineNumber === this.startLineNumber &&
                this.selectionStartColumn === this.startColumn ? 0 : 1;
          }
          setEndPosition(e, t) {
            return 0 === this.getDirection()
              ? new i(this.startLineNumber, this.startColumn, e, t)
              : new i(e, t, this.startLineNumber, this.startColumn);
          }
          getPosition() {
            return new n.Position(this.positionLineNumber, this.positionColumn);
          }
          setStartPosition(e, t) {
            return 0 === this.getDirection()
              ? new i(e, t, this.endLineNumber, this.endColumn)
              : new i(this.endLineNumber, this.endColumn, e, t);
          }
          static fromPositions(e, t = e) {
            return new i(e.lineNumber, e.column, t.lineNumber, t.column);
          }
          static liftSelection(e) {
            return new i(
              e.selectionStartLineNumber,
              e.selectionStartColumn,
              e.positionLineNumber,
              e.positionColumn,
            );
          }
          static selectionsArrEqual(e, t) {
            if (e && !t || !e && t) return !1;
            if (!e && !t) return !0;
            if (e.length !== t.length) return !1;
            for (let n = 0, r = e.length; n < r; n++) {
              if (
                !this.selectionsEqual(e[n], t[n])
              ) {
                return !1;
              }
            }
            return !0;
          }
          static isISelection(e) {
            return e && "number" == typeof e.selectionStartLineNumber &&
              "number" == typeof e.selectionStartColumn &&
              "number" == typeof e.positionLineNumber &&
              "number" == typeof e.positionColumn;
          }
          static createWithDirection(e, t, n, r, o) {
            return 0 === o ? new i(e, t, n, r) : new i(n, r, e, t);
          }
        }
        t.Selection = i;
      }),
    ),
    e(
      n[25],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.TokenizationResult2 = t.TokenizationResult = t.Token = void 0;
        t.Token = class {
          constructor(e, t, n) {
            this.offset = 0 | e, this.type = t, this.language = n;
          }
          toString() {
            return "(" + this.offset + ", " + this.type + ")";
          }
        };
        t.TokenizationResult = class {
          constructor(e, t) {
            this.tokens = e, this.endState = t;
          }
        };
        t.TokenizationResult2 = class {
          constructor(e, t) {
            this.tokens = e, this.endState = t;
          }
        };
      }),
    ),
    e(
      n[26],
      r([0, 1, 9, 5]),
      (function (e, t, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.DiffComputer = void 0;
        const i = 3;
        function o(e, t, r, i) {
          return new n.LcsDiff(e, t, r).ComputeDiff(i);
        }
        class s {
          constructor(e) {
            const t = [], n = [];
            for (let r = 0, i = e.length; r < i; r++) {
              t[r] = c(e[r], 1), n[r] = d(e[r], 1);
            }
            this.lines = e, this._startColumns = t, this._endColumns = n;
          }
          getElements() {
            const e = [];
            for (let t = 0, n = this.lines.length; t < n; t++) {
              e[t] = this.lines[t].substring(
                this._startColumns[t] - 1,
                this._endColumns[t] - 1,
              );
            }
            return e;
          }
          getStartLineNumber(e) {
            return e + 1;
          }
          getEndLineNumber(e) {
            return e + 1;
          }
          createCharSequence(e, t, n) {
            const r = [], i = [], o = [];
            let s = 0;
            for (let a = t; a <= n; a++) {
              const t = this.lines[a],
                n = e ? this._startColumns[a] : 1,
                l = e ? this._endColumns[a] : t.length + 1;
              for (let e = n; e < l; e++) {
                r[s] = t.charCodeAt(e - 1), i[s] = a + 1, o[s] = e, s++;
              }
            }
            return new a(r, i, o);
          }
        }
        class a {
          constructor(e, t, n) {
            this._charCodes = e, this._lineNumbers = t, this._columns = n;
          }
          getElements() {
            return this._charCodes;
          }
          getStartLineNumber(e) {
            return this._lineNumbers[e];
          }
          getStartColumn(e) {
            return this._columns[e];
          }
          getEndLineNumber(e) {
            return this._lineNumbers[e];
          }
          getEndColumn(e) {
            return this._columns[e] + 1;
          }
        }
        class l {
          constructor(e, t, n, r, i, o, s, a) {
            this.originalStartLineNumber = e,
              this.originalStartColumn = t,
              this.originalEndLineNumber = n,
              this.originalEndColumn = r,
              this.modifiedStartLineNumber = i,
              this.modifiedStartColumn = o,
              this.modifiedEndLineNumber = s,
              this.modifiedEndColumn = a;
          }
          static createFromDiffChange(e, t, n) {
            let r, i, o, s, a, u, c, d;
            return 0 === e.originalLength
              ? (r = 0, i = 0, o = 0, s = 0)
              : (r = t.getStartLineNumber(e.originalStart),
                i = t.getStartColumn(e.originalStart),
                o = t.getEndLineNumber(e.originalStart + e.originalLength - 1),
                s = t.getEndColumn(e.originalStart + e.originalLength - 1)),
              0 === e.modifiedLength ? (a = 0, u = 0, c = 0, d = 0)
              : (a = n.getStartLineNumber(e.modifiedStart),
                u = n.getStartColumn(e.modifiedStart),
                c = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1),
                d = n.getEndColumn(e.modifiedStart + e.modifiedLength - 1)),
              new l(r, i, o, s, a, u, c, d);
          }
        }
        class u {
          constructor(e, t, n, r, i) {
            this.originalStartLineNumber = e,
              this.originalEndLineNumber = t,
              this.modifiedStartLineNumber = n,
              this.modifiedEndLineNumber = r,
              this.charChanges = i;
          }
          static createFromDiffResult(e, t, n, r, s, a, c) {
            let d, h, f, g, m = void 0;
            if (
              0 === t.originalLength
                ? (d = n.getStartLineNumber(t.originalStart) - 1, h = 0)
                : (d = n.getStartLineNumber(t.originalStart),
                  h = n.getEndLineNumber(
                    t.originalStart + t.originalLength - 1,
                  )),
                0 === t.modifiedLength
                  ? (f = r.getStartLineNumber(t.modifiedStart) - 1, g = 0)
                  : (f = r.getStartLineNumber(t.modifiedStart),
                    g = r.getEndLineNumber(
                      t.modifiedStart + t.modifiedLength - 1,
                    )),
                a && t.originalLength > 0 && t.originalLength < 20 &&
                t.modifiedLength > 0 && t.modifiedLength < 20 && s()
            ) {
              const a = n.createCharSequence(
                  e,
                  t.originalStart,
                  t.originalStart + t.originalLength - 1,
                ),
                u = r.createCharSequence(
                  e,
                  t.modifiedStart,
                  t.modifiedStart + t.modifiedLength - 1,
                );
              let d = o(a, u, s, !0).changes;
              c && (d = function (e) {
                if (e.length <= 1) return e;
                const t = [e[0]];
                let n = t[0];
                for (let r = 1, o = e.length; r < o; r++) {
                  const o = e[r],
                    s = o.originalStart - (n.originalStart + n.originalLength),
                    a = o.modifiedStart - (n.modifiedStart + n.modifiedLength);
                  Math.min(s, a) < i
                    ? (n.originalLength = o.originalStart + o.originalLength -
                      n.originalStart,
                      n.modifiedLength = o.modifiedStart + o.modifiedLength -
                        n.modifiedStart)
                    : (t.push(o), n = o);
                }
                return t;
              }(d)), m = [];
              for (let e = 0, t = d.length; e < t; e++) {
                m.push(l.createFromDiffChange(d[e], a, u));
              }
            }
            return new u(d, h, f, g, m);
          }
        }
        function c(e, t) {
          const n = r.firstNonWhitespaceIndex(e);
          return -1 === n ? t : n + 1;
        }
        function d(e, t) {
          const n = r.lastNonWhitespaceIndex(e);
          return -1 === n ? t : n + 2;
        }
        function h(e) {
          if (0 === e) return () => !0;
          const t = Date.now();
          return () => Date.now() - t < e;
        }
        t.DiffComputer = class {
          constructor(e, t, n) {
            this.shouldComputeCharChanges = n.shouldComputeCharChanges,
              this.shouldPostProcessCharChanges =
                n.shouldPostProcessCharChanges,
              this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace,
              this.shouldMakePrettyDiff = n.shouldMakePrettyDiff,
              this.originalLines = e,
              this.modifiedLines = t,
              this.original = new s(e),
              this.modified = new s(t),
              this.continueLineDiff = h(n.maxComputationTime),
              this.continueCharDiff = h(
                0 === n.maxComputationTime ? 0
                : Math.min(n.maxComputationTime, 5e3),
              );
          }
          computeDiff() {
            if (
              1 === this.original.lines.length &&
              0 === this.original.lines[0].length
            ) {
              return {
                quitEarly: !1,
                changes: [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.lines.length,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0,
                      },
                    ],
                  },
                ],
              };
            }
            if (
              1 === this.modified.lines.length &&
              0 === this.modified.lines[0].length
            ) {
              return {
                quitEarly: !1,
                changes: [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.lines.length,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0,
                      },
                    ],
                  },
                ],
              };
            }
            const e = o(
                this.original,
                this.modified,
                this.continueLineDiff,
                this.shouldMakePrettyDiff,
              ),
              t = e.changes,
              n = e.quitEarly;
            if (this.shouldIgnoreTrimWhitespace) {
              const e = [];
              for (let n = 0, r = t.length; n < r; n++) {
                e.push(
                  u.createFromDiffResult(
                    this.shouldIgnoreTrimWhitespace,
                    t[n],
                    this.original,
                    this.modified,
                    this.continueCharDiff,
                    this.shouldComputeCharChanges,
                    this.shouldPostProcessCharChanges,
                  ),
                );
              }
              return { quitEarly: n, changes: e };
            }
            const r = [];
            let i = 0, s = 0;
            for (let e = -1, n = t.length; e < n; e++) {
              const o = e + 1 < n ? t[e + 1] : null,
                a = o ? o.originalStart : this.originalLines.length,
                l = o ? o.modifiedStart : this.modifiedLines.length;
              for (; i < a && s < l;) {
                const e = this.originalLines[i], t = this.modifiedLines[s];
                if (e !== t) {
                  {
                    let n = c(e, 1), o = c(t, 1);
                    for (; n > 1 && o > 1;) {
                      if (e.charCodeAt(n - 2) !== t.charCodeAt(o - 2)) break;
                      n--, o--;
                    }
                    (n > 1 || o > 1) &&
                      this._pushTrimWhitespaceCharChange(
                        r,
                        i + 1,
                        1,
                        n,
                        s + 1,
                        1,
                        o,
                      );
                  }
                  {
                    let n = d(e, 1), o = d(t, 1);
                    const a = e.length + 1, l = t.length + 1;
                    for (; n < a && o < l;) {
                      if (e.charCodeAt(n - 1) !== e.charCodeAt(o - 1)) break;
                      n++, o++;
                    }
                    (n < a || o < l) &&
                      this._pushTrimWhitespaceCharChange(
                        r,
                        i + 1,
                        n,
                        a,
                        s + 1,
                        o,
                        l,
                      );
                  }
                }
                i++, s++;
              }
              o &&
                (r.push(
                  u.createFromDiffResult(
                    this.shouldIgnoreTrimWhitespace,
                    o,
                    this.original,
                    this.modified,
                    this.continueCharDiff,
                    this.shouldComputeCharChanges,
                    this.shouldPostProcessCharChanges,
                  ),
                ),
                  i += o.originalLength,
                  s += o.modifiedLength);
            }
            return { quitEarly: n, changes: r };
          }
          _pushTrimWhitespaceCharChange(e, t, n, r, i, o, s) {
            if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s)) {
              return;
            }
            let a = void 0;
            this.shouldComputeCharChanges &&
            (a = [new l(t, n, t, r, i, o, i, s)]), e.push(new u(t, t, i, i, a));
          }
          _mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s) {
            const a = e.length;
            if (0 === a) return !1;
            const u = e[a - 1];
            return 0 !== u.originalEndLineNumber &&
              0 !== u.modifiedEndLineNumber &&
              (u.originalEndLineNumber + 1 === t &&
                u.modifiedEndLineNumber + 1 === i &&
                (u.originalEndLineNumber = t,
                  u.modifiedEndLineNumber = i,
                  this.shouldComputeCharChanges && u.charChanges &&
                  u.charChanges.push(new l(t, n, t, r, i, o, i, s)),
                  !0));
          }
        };
      }),
    ),
    e(
      n[27],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.getWordAtText = t.ensureValidWordDefinition = t
            .DEFAULT_WORD_REGEXP = t.USUAL_WORD_SEPARATORS = void 0,
          t.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
          t.DEFAULT_WORD_REGEXP = function (e = "") {
            let n = "(-?\\d*\\.\\d\\w*)|([^";
            for (const r of t.USUAL_WORD_SEPARATORS) {
              e.indexOf(r) >= 0 || (n += "\\" + r);
            }
            return n += "\\s]+)", new RegExp(n, "g");
          }(),
          t.ensureValidWordDefinition = function (e) {
            let n = t.DEFAULT_WORD_REGEXP;
            if (e && e instanceof RegExp) {
              if (e.global) n = e;
              else {
                let t = "g";
                e.ignoreCase && (t += "i"),
                  e.multiline && (t += "m"),
                  e.unicode && (t += "u"),
                  n = new RegExp(e.source, t);
              }
            }
            return n.lastIndex = 0, n;
          };
        const n = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
        function r(e, t, n, r) {
          let i;
          for (; i = e.exec(t);) {
            const t = i.index || 0;
            if (t <= n && e.lastIndex >= n) return i;
            if (r > 0 && t > r) return null;
          }
          return null;
        }
        t.getWordAtText = function e(t, i, o, s, a = n) {
          if (o.length > a.maxLen) {
            let n = t - a.maxLen / 2;
            return n < 0 ? n = 0 : s += n,
              e(t, i, o = o.substring(n, t + a.maxLen / 2), s, a);
          }
          const l = Date.now(), u = t - 1 - s;
          let c = -1, d = null;
          for (let e = 1; !(Date.now() - l >= a.timeBudget); e++) {
            const t = u - a.windowSize * e;
            i.lastIndex = Math.max(0, t);
            const n = r(i, o, u, c);
            if (!n && d) break;
            if (d = n, t <= 0) break;
            c = t;
          }
          if (d) {
            let e = {
              word: d[0],
              startColumn: s + 1 + d.index,
              endColumn: s + 1 + d.index + d[0].length,
            };
            return i.lastIndex = 0, e;
          }
          return null;
        };
      }),
    ),
    e(
      n[28],
      r([0, 1, 23]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.computeLinks = t.LinkComputer = t.StateMachine = t.Uint8Matrix =
            void 0;
        class r {
          constructor(e, t, n) {
            const r = new Uint8Array(e * t);
            for (let i = 0, o = e * t; i < o; i++) r[i] = n;
            this._data = r, this.rows = e, this.cols = t;
          }
          get(e, t) {
            return this._data[e * this.cols + t];
          }
          set(e, t, n) {
            this._data[e * this.cols + t] = n;
          }
        }
        t.Uint8Matrix = r;
        class i {
          constructor(e) {
            let t = 0, n = 0;
            for (let r = 0, i = e.length; r < i; r++) {
              let [i, o, s] = e[r];
              o > t && (t = o), i > n && (n = i), s > n && (n = s);
            }
            let i = new r(++n, ++t, 0);
            for (let t = 0, n = e.length; t < n; t++) {
              let [n, r, o] = e[t];
              i.set(n, r, o);
            }
            this._states = i, this._maxCharCode = t;
          }
          nextState(e, t) {
            return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
          }
        }
        t.StateMachine = i;
        let o = null;
        let s = null;
        class a {
          static _createLink(e, t, n, r, i) {
            let o = i - 1;
            do {
              const n = t.charCodeAt(o);
              if (2 !== e.get(n)) break;
              o--;
            } while (o > r);
            if (r > 0) {
              const e = t.charCodeAt(r - 1), n = t.charCodeAt(o);
              (40 === e && 41 === n || 91 === e && 93 === n ||
                123 === e && 125 === n) && o--;
            }
            return {
              range: {
                startLineNumber: n,
                startColumn: r + 1,
                endLineNumber: n,
                endColumn: o + 2,
              },
              url: t.substring(r, o + 1),
            };
          }
          static computeLinks(
            e,
            t = (null === o &&
              (o = new i(
                [
                  [1, 104, 2],
                  [1, 72, 2],
                  [1, 102, 6],
                  [1, 70, 6],
                  [2, 116, 3],
                  [2, 84, 3],
                  [3, 116, 4],
                  [3, 84, 4],
                  [4, 112, 5],
                  [4, 80, 5],
                  [5, 115, 9],
                  [5, 83, 9],
                  [5, 58, 10],
                  [6, 105, 7],
                  [6, 73, 7],
                  [7, 108, 8],
                  [7, 76, 8],
                  [8, 101, 9],
                  [8, 69, 9],
                  [9, 58, 10],
                  [10, 47, 11],
                  [11, 47, 12],
                ],
              )),
              o),
          ) {
            const r = function () {
              if (null === s) {
                s = new n.CharacterClassifier(0);
                const e = " \t<>'\"、。｡､，．：；‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…";
                for (let t = 0; t < e.length; t++) s.set(e.charCodeAt(t), 1);
                const t = ".,;";
                for (let e = 0; e < t.length; e++) s.set(t.charCodeAt(e), 2);
              }
              return s;
            }();
            let l = [];
            for (let n = 1, i = e.getLineCount(); n <= i; n++) {
              const i = e.getLineContent(n), o = i.length;
              let s = 0, u = 0, c = 0, d = 1, h = !1, f = !1, g = !1, m = !1;
              for (; s < o;) {
                let e = !1;
                const o = i.charCodeAt(s);
                if (13 === d) {
                  let t;
                  switch (o) {
                    case 40:
                      h = !0, t = 0;
                      break;
                    case 41:
                      t = h ? 0 : 1;
                      break;
                    case 91:
                      g = !0, f = !0, t = 0;
                      break;
                    case 93:
                      g = !1, t = f ? 0 : 1;
                      break;
                    case 123:
                      m = !0, t = 0;
                      break;
                    case 125:
                      t = m ? 0 : 1;
                      break;
                    case 39:
                      t = 34 === c || 96 === c ? 0 : 1;
                      break;
                    case 34:
                      t = 39 === c || 96 === c ? 0 : 1;
                      break;
                    case 96:
                      t = 39 === c || 34 === c ? 0 : 1;
                      break;
                    case 42:
                      t = 42 === c ? 1 : 0;
                      break;
                    case 124:
                      t = 124 === c ? 1 : 0;
                      break;
                    case 32:
                      t = g ? 0 : 1;
                      break;
                    default:
                      t = r.get(o);
                  }
                  1 === t && (l.push(a._createLink(r, i, n, u, s)), e = !0);
                } else if (12 === d) {
                  let t;
                  91 === o ? (f = !0, t = 0) : t = r.get(o),
                    1 === t ? e = !0 : d = 13;
                } else 0 === (d = t.nextState(d, o)) && (e = !0);
                e && (d = 1, h = !1, f = !1, m = !1, u = s + 1, c = o), s++;
              }
              13 === d && l.push(a._createLink(r, i, n, u, o));
            }
            return l;
          }
        }
        t.LinkComputer = a,
          t.computeLinks = function (e) {
            return e && "function" == typeof e.getLineCount &&
                "function" == typeof e.getLineContent ? a.computeLinks(e) : [];
          };
      }),
    ),
    e(
      n[29],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.BasicInplaceReplace = void 0;
        class n {
          constructor() {
            this._defaultValueSet = [
              ["true", "false"],
              ["True", "False"],
              [
                "Private",
                "Public",
                "Friend",
                "ReadOnly",
                "Partial",
                "Protected",
                "WriteOnly",
              ],
              ["public", "protected", "private"],
            ];
          }
          navigateValueSet(e, t, n, r, i) {
            if (e && t) {
              let n = this.doNavigateValueSet(t, i);
              if (n) return { range: e, value: n };
            }
            if (n && r) {
              let e = this.doNavigateValueSet(r, i);
              if (e) return { range: n, value: e };
            }
            return null;
          }
          doNavigateValueSet(e, t) {
            let n = this.numberReplace(e, t);
            return null !== n ? n : this.textReplace(e, t);
          }
          numberReplace(e, t) {
            let n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)),
              r = Number(e),
              i = parseFloat(e);
            return isNaN(r) || isNaN(i) || r !== i ? null
            : 0 !== r || t
              ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null;
          }
          textReplace(e, t) {
            return this.valueSetsReplace(this._defaultValueSet, e, t);
          }
          valueSetsReplace(e, t, n) {
            let r = null;
            for (let i = 0, o = e.length; null === r && i < o; i++) {
              r = this.valueSetReplace(e[i], t, n);
            }
            return r;
          }
          valueSetReplace(e, t, n) {
            let r = e.indexOf(t);
            return r >= 0
              ? ((r += n ? 1 : -1) < 0 ? r = e.length - 1 : r %= e.length, e[r])
              : null;
          }
        }
        t.BasicInplaceReplace = n, n.INSTANCE = new n();
      }),
    ),
    e(
      n[30],
      r([0, 1]),
      (function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.WrappingIndent = t.TrackedRangeStickiness = t
            .TextEditorCursorStyle = t.TextEditorCursorBlinkingStyle = t
              .SymbolTag = t.SymbolKind = t.SignatureHelpTriggerKind = t
                .SelectionDirection = t.ScrollbarVisibility = t.ScrollType = t
                  .RenderMinimap = t.RenderLineNumbersType = t
                    .OverviewRulerLane = t.OverlayWidgetPositionPreference = t
                      .MouseTargetType = t.MinimapPosition = t.MarkerTag = t
                        .MarkerSeverity = t.KeyCode = t.IndentAction = t
                          .EndOfLineSequence = t.EndOfLinePreference = t
                            .EditorOption = t.EditorAutoIndentStrategy = t
                              .DocumentHighlightKind = t.DefaultEndOfLine = t
                                .CursorChangeReason = t
                                  .ContentWidgetPositionPreference = t
                                    .CompletionTriggerKind = t
                                      .CompletionItemTag = t
                                        .CompletionItemKind = t
                                          .CompletionItemInsertTextRule = t
                                            .AccessibilitySupport = void 0,
          function (e) {
            e[e.Unknown = 0] = "Unknown",
              e[e.Disabled = 1] = "Disabled",
              e[e.Enabled = 2] = "Enabled";
          }(t.AccessibilitySupport || (t.AccessibilitySupport = {})),
          function (e) {
            e[e.KeepWhitespace = 1] = "KeepWhitespace",
              e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
          }(
            t.CompletionItemInsertTextRule ||
              (t.CompletionItemInsertTextRule = {}),
          ),
          function (e) {
            e[e.Method = 0] = "Method",
              e[e.Function = 1] = "Function",
              e[e.Constructor = 2] = "Constructor",
              e[e.Field = 3] = "Field",
              e[e.Variable = 4] = "Variable",
              e[e.Class = 5] = "Class",
              e[e.Struct = 6] = "Struct",
              e[e.Interface = 7] = "Interface",
              e[e.Module = 8] = "Module",
              e[e.Property = 9] = "Property",
              e[e.Event = 10] = "Event",
              e[e.Operator = 11] = "Operator",
              e[e.Unit = 12] = "Unit",
              e[e.Value = 13] = "Value",
              e[e.Constant = 14] = "Constant",
              e[e.Enum = 15] = "Enum",
              e[e.EnumMember = 16] = "EnumMember",
              e[e.Keyword = 17] = "Keyword",
              e[e.Text = 18] = "Text",
              e[e.Color = 19] = "Color",
              e[e.File = 20] = "File",
              e[e.Reference = 21] = "Reference",
              e[e.Customcolor = 22] = "Customcolor",
              e[e.Folder = 23] = "Folder",
              e[e.TypeParameter = 24] = "TypeParameter",
              e[e.User = 25] = "User",
              e[e.Issue = 26] = "Issue",
              e[e.Snippet = 27] = "Snippet";
          }(t.CompletionItemKind || (t.CompletionItemKind = {})),
          function (e) {
            e[e.Deprecated = 1] = "Deprecated";
          }(t.CompletionItemTag || (t.CompletionItemTag = {})),
          function (e) {
            e[e.Invoke = 0] = "Invoke",
              e[e.TriggerCharacter = 1] = "TriggerCharacter",
              e[e.TriggerForIncompleteCompletions = 2] =
                "TriggerForIncompleteCompletions";
          }(t.CompletionTriggerKind || (t.CompletionTriggerKind = {})),
          function (e) {
            e[e.EXACT = 0] = "EXACT",
              e[e.ABOVE = 1] = "ABOVE",
              e[e.BELOW = 2] = "BELOW";
          }(
            t.ContentWidgetPositionPreference ||
              (t.ContentWidgetPositionPreference = {}),
          ),
          function (e) {
            e[e.NotSet = 0] = "NotSet",
              e[e.ContentFlush = 1] = "ContentFlush",
              e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers",
              e[e.Explicit = 3] = "Explicit",
              e[e.Paste = 4] = "Paste",
              e[e.Undo = 5] = "Undo",
              e[e.Redo = 6] = "Redo";
          }(t.CursorChangeReason || (t.CursorChangeReason = {})),
          function (e) {
            e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
          }(t.DefaultEndOfLine || (t.DefaultEndOfLine = {})),
          function (e) {
            e[e.Text = 0] = "Text",
              e[e.Read = 1] = "Read",
              e[e.Write = 2] = "Write";
          }(t.DocumentHighlightKind || (t.DocumentHighlightKind = {})),
          function (e) {
            e[e.None = 0] = "None",
              e[e.Keep = 1] = "Keep",
              e[e.Brackets = 2] = "Brackets",
              e[e.Advanced = 3] = "Advanced",
              e[e.Full = 4] = "Full";
          }(t.EditorAutoIndentStrategy || (t.EditorAutoIndentStrategy = {})),
          function (e) {
            e[e.acceptSuggestionOnCommitCharacter = 0] =
              "acceptSuggestionOnCommitCharacter",
              e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter",
              e[e.accessibilitySupport = 2] = "accessibilitySupport",
              e[e.accessibilityPageSize = 3] = "accessibilityPageSize",
              e[e.ariaLabel = 4] = "ariaLabel",
              e[e.autoClosingBrackets = 5] = "autoClosingBrackets",
              e[e.autoClosingOvertype = 6] = "autoClosingOvertype",
              e[e.autoClosingQuotes = 7] = "autoClosingQuotes",
              e[e.autoIndent = 8] = "autoIndent",
              e[e.automaticLayout = 9] = "automaticLayout",
              e[e.autoSurround = 10] = "autoSurround",
              e[e.codeLens = 11] = "codeLens",
              e[e.codeLensFontFamily = 12] = "codeLensFontFamily",
              e[e.codeLensFontSize = 13] = "codeLensFontSize",
              e[e.colorDecorators = 14] = "colorDecorators",
              e[e.columnSelection = 15] = "columnSelection",
              e[e.comments = 16] = "comments",
              e[e.contextmenu = 17] = "contextmenu",
              e[e.copyWithSyntaxHighlighting = 18] =
                "copyWithSyntaxHighlighting",
              e[e.cursorBlinking = 19] = "cursorBlinking",
              e[e.cursorSmoothCaretAnimation = 20] =
                "cursorSmoothCaretAnimation",
              e[e.cursorStyle = 21] = "cursorStyle",
              e[e.cursorSurroundingLines = 22] = "cursorSurroundingLines",
              e[e.cursorSurroundingLinesStyle = 23] =
                "cursorSurroundingLinesStyle",
              e[e.cursorWidth = 24] = "cursorWidth",
              e[e.disableLayerHinting = 25] = "disableLayerHinting",
              e[e.disableMonospaceOptimizations = 26] =
                "disableMonospaceOptimizations",
              e[e.dragAndDrop = 27] = "dragAndDrop",
              e[e.emptySelectionClipboard = 28] = "emptySelectionClipboard",
              e[e.extraEditorClassName = 29] = "extraEditorClassName",
              e[e.fastScrollSensitivity = 30] = "fastScrollSensitivity",
              e[e.find = 31] = "find",
              e[e.fixedOverflowWidgets = 32] = "fixedOverflowWidgets",
              e[e.folding = 33] = "folding",
              e[e.foldingStrategy = 34] = "foldingStrategy",
              e[e.foldingHighlight = 35] = "foldingHighlight",
              e[e.unfoldOnClickAfterEndOfLine = 36] =
                "unfoldOnClickAfterEndOfLine",
              e[e.fontFamily = 37] = "fontFamily",
              e[e.fontInfo = 38] = "fontInfo",
              e[e.fontLigatures = 39] = "fontLigatures",
              e[e.fontSize = 40] = "fontSize",
              e[e.fontWeight = 41] = "fontWeight",
              e[e.formatOnPaste = 42] = "formatOnPaste",
              e[e.formatOnType = 43] = "formatOnType",
              e[e.glyphMargin = 44] = "glyphMargin",
              e[e.gotoLocation = 45] = "gotoLocation",
              e[e.hideCursorInOverviewRuler = 46] = "hideCursorInOverviewRuler",
              e[e.highlightActiveIndentGuide = 47] =
                "highlightActiveIndentGuide",
              e[e.hover = 48] = "hover",
              e[e.inDiffEditor = 49] = "inDiffEditor",
              e[e.letterSpacing = 50] = "letterSpacing",
              e[e.lightbulb = 51] = "lightbulb",
              e[e.lineDecorationsWidth = 52] = "lineDecorationsWidth",
              e[e.lineHeight = 53] = "lineHeight",
              e[e.lineNumbers = 54] = "lineNumbers",
              e[e.lineNumbersMinChars = 55] = "lineNumbersMinChars",
              e[e.linkedEditing = 56] = "linkedEditing",
              e[e.links = 57] = "links",
              e[e.matchBrackets = 58] = "matchBrackets",
              e[e.minimap = 59] = "minimap",
              e[e.mouseStyle = 60] = "mouseStyle",
              e[e.mouseWheelScrollSensitivity = 61] =
                "mouseWheelScrollSensitivity",
              e[e.mouseWheelZoom = 62] = "mouseWheelZoom",
              e[e.multiCursorMergeOverlapping = 63] =
                "multiCursorMergeOverlapping",
              e[e.multiCursorModifier = 64] = "multiCursorModifier",
              e[e.multiCursorPaste = 65] = "multiCursorPaste",
              e[e.occurrencesHighlight = 66] = "occurrencesHighlight",
              e[e.overviewRulerBorder = 67] = "overviewRulerBorder",
              e[e.overviewRulerLanes = 68] = "overviewRulerLanes",
              e[e.padding = 69] = "padding",
              e[e.parameterHints = 70] = "parameterHints",
              e[e.peekWidgetDefaultFocus = 71] = "peekWidgetDefaultFocus",
              e[e.definitionLinkOpensInPeek = 72] = "definitionLinkOpensInPeek",
              e[e.quickSuggestions = 73] = "quickSuggestions",
              e[e.quickSuggestionsDelay = 74] = "quickSuggestionsDelay",
              e[e.readOnly = 75] = "readOnly",
              e[e.renameOnType = 76] = "renameOnType",
              e[e.renderControlCharacters = 77] = "renderControlCharacters",
              e[e.renderIndentGuides = 78] = "renderIndentGuides",
              e[e.renderFinalNewline = 79] = "renderFinalNewline",
              e[e.renderLineHighlight = 80] = "renderLineHighlight",
              e[e.renderLineHighlightOnlyWhenFocus = 81] =
                "renderLineHighlightOnlyWhenFocus",
              e[e.renderValidationDecorations = 82] =
                "renderValidationDecorations",
              e[e.renderWhitespace = 83] = "renderWhitespace",
              e[e.revealHorizontalRightPadding = 84] =
                "revealHorizontalRightPadding",
              e[e.roundedSelection = 85] = "roundedSelection",
              e[e.rulers = 86] = "rulers",
              e[e.scrollbar = 87] = "scrollbar",
              e[e.scrollBeyondLastColumn = 88] = "scrollBeyondLastColumn",
              e[e.scrollBeyondLastLine = 89] = "scrollBeyondLastLine",
              e[e.scrollPredominantAxis = 90] = "scrollPredominantAxis",
              e[e.selectionClipboard = 91] = "selectionClipboard",
              e[e.selectionHighlight = 92] = "selectionHighlight",
              e[e.selectOnLineNumbers = 93] = "selectOnLineNumbers",
              e[e.showFoldingControls = 94] = "showFoldingControls",
              e[e.showUnused = 95] = "showUnused",
              e[e.snippetSuggestions = 96] = "snippetSuggestions",
              e[e.smartSelect = 97] = "smartSelect",
              e[e.smoothScrolling = 98] = "smoothScrolling",
              e[e.stickyTabStops = 99] = "stickyTabStops",
              e[e.stopRenderingLineAfter = 100] = "stopRenderingLineAfter",
              e[e.suggest = 101] = "suggest",
              e[e.suggestFontSize = 102] = "suggestFontSize",
              e[e.suggestLineHeight = 103] = "suggestLineHeight",
              e[e.suggestOnTriggerCharacters = 104] =
                "suggestOnTriggerCharacters",
              e[e.suggestSelection = 105] = "suggestSelection",
              e[e.tabCompletion = 106] = "tabCompletion",
              e[e.tabIndex = 107] = "tabIndex",
              e[e.unusualLineTerminators = 108] = "unusualLineTerminators",
              e[e.useTabStops = 109] = "useTabStops",
              e[e.wordSeparators = 110] = "wordSeparators",
              e[e.wordWrap = 111] = "wordWrap",
              e[e.wordWrapBreakAfterCharacters = 112] =
                "wordWrapBreakAfterCharacters",
              e[e.wordWrapBreakBeforeCharacters = 113] =
                "wordWrapBreakBeforeCharacters",
              e[e.wordWrapColumn = 114] = "wordWrapColumn",
              e[e.wordWrapOverride1 = 115] = "wordWrapOverride1",
              e[e.wordWrapOverride2 = 116] = "wordWrapOverride2",
              e[e.wrappingIndent = 117] = "wrappingIndent",
              e[e.wrappingStrategy = 118] = "wrappingStrategy",
              e[e.showDeprecated = 119] = "showDeprecated",
              e[e.editorClassName = 120] = "editorClassName",
              e[e.pixelRatio = 121] = "pixelRatio",
              e[e.tabFocusMode = 122] = "tabFocusMode",
              e[e.layoutInfo = 123] = "layoutInfo",
              e[e.wrappingInfo = 124] = "wrappingInfo";
          }(t.EditorOption || (t.EditorOption = {})),
          function (e) {
            e[e.TextDefined = 0] = "TextDefined",
              e[e.LF = 1] = "LF",
              e[e.CRLF = 2] = "CRLF";
          }(t.EndOfLinePreference || (t.EndOfLinePreference = {})),
          function (e) {
            e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
          }(t.EndOfLineSequence || (t.EndOfLineSequence = {})),
          function (e) {
            e[e.None = 0] = "None",
              e[e.Indent = 1] = "Indent",
              e[e.IndentOutdent = 2] = "IndentOutdent",
              e[e.Outdent = 3] = "Outdent";
          }(t.IndentAction || (t.IndentAction = {})),
          function (e) {
            e[e.Unknown = 0] = "Unknown",
              e[e.Backspace = 1] = "Backspace",
              e[e.Tab = 2] = "Tab",
              e[e.Enter = 3] = "Enter",
              e[e.Shift = 4] = "Shift",
              e[e.Ctrl = 5] = "Ctrl",
              e[e.Alt = 6] = "Alt",
              e[e.PauseBreak = 7] = "PauseBreak",
              e[e.CapsLock = 8] = "CapsLock",
              e[e.Escape = 9] = "Escape",
              e[e.Space = 10] = "Space",
              e[e.PageUp = 11] = "PageUp",
              e[e.PageDown = 12] = "PageDown",
              e[e.End = 13] = "End",
              e[e.Home = 14] = "Home",
              e[e.LeftArrow = 15] = "LeftArrow",
              e[e.UpArrow = 16] = "UpArrow",
              e[e.RightArrow = 17] = "RightArrow",
              e[e.DownArrow = 18] = "DownArrow",
              e[e.Insert = 19] = "Insert",
              e[e.Delete = 20] = "Delete",
              e[e.KEY_0 = 21] = "KEY_0",
              e[e.KEY_1 = 22] = "KEY_1",
              e[e.KEY_2 = 23] = "KEY_2",
              e[e.KEY_3 = 24] = "KEY_3",
              e[e.KEY_4 = 25] = "KEY_4",
              e[e.KEY_5 = 26] = "KEY_5",
              e[e.KEY_6 = 27] = "KEY_6",
              e[e.KEY_7 = 28] = "KEY_7",
              e[e.KEY_8 = 29] = "KEY_8",
              e[e.KEY_9 = 30] = "KEY_9",
              e[e.KEY_A = 31] = "KEY_A",
              e[e.KEY_B = 32] = "KEY_B",
              e[e.KEY_C = 33] = "KEY_C",
              e[e.KEY_D = 34] = "KEY_D",
              e[e.KEY_E = 35] = "KEY_E",
              e[e.KEY_F = 36] = "KEY_F",
              e[e.KEY_G = 37] = "KEY_G",
              e[e.KEY_H = 38] = "KEY_H",
              e[e.KEY_I = 39] = "KEY_I",
              e[e.KEY_J = 40] = "KEY_J",
              e[e.KEY_K = 41] = "KEY_K",
              e[e.KEY_L = 42] = "KEY_L",
              e[e.KEY_M = 43] = "KEY_M",
              e[e.KEY_N = 44] = "KEY_N",
              e[e.KEY_O = 45] = "KEY_O",
              e[e.KEY_P = 46] = "KEY_P",
              e[e.KEY_Q = 47] = "KEY_Q",
              e[e.KEY_R = 48] = "KEY_R",
              e[e.KEY_S = 49] = "KEY_S",
              e[e.KEY_T = 50] = "KEY_T",
              e[e.KEY_U = 51] = "KEY_U",
              e[e.KEY_V = 52] = "KEY_V",
              e[e.KEY_W = 53] = "KEY_W",
              e[e.KEY_X = 54] = "KEY_X",
              e[e.KEY_Y = 55] = "KEY_Y",
              e[e.KEY_Z = 56] = "KEY_Z",
              e[e.Meta = 57] = "Meta",
              e[e.ContextMenu = 58] = "ContextMenu",
              e[e.F1 = 59] = "F1",
              e[e.F2 = 60] = "F2",
              e[e.F3 = 61] = "F3",
              e[e.F4 = 62] = "F4",
              e[e.F5 = 63] = "F5",
              e[e.F6 = 64] = "F6",
              e[e.F7 = 65] = "F7",
              e[e.F8 = 66] = "F8",
              e[e.F9 = 67] = "F9",
              e[e.F10 = 68] = "F10",
              e[e.F11 = 69] = "F11",
              e[e.F12 = 70] = "F12",
              e[e.F13 = 71] = "F13",
              e[e.F14 = 72] = "F14",
              e[e.F15 = 73] = "F15",
              e[e.F16 = 74] = "F16",
              e[e.F17 = 75] = "F17",
              e[e.F18 = 76] = "F18",
              e[e.F19 = 77] = "F19",
              e[e.NumLock = 78] = "NumLock",
              e[e.ScrollLock = 79] = "ScrollLock",
              e[e.US_SEMICOLON = 80] = "US_SEMICOLON",
              e[e.US_EQUAL = 81] = "US_EQUAL",
              e[e.US_COMMA = 82] = "US_COMMA",
              e[e.US_MINUS = 83] = "US_MINUS",
              e[e.US_DOT = 84] = "US_DOT",
              e[e.US_SLASH = 85] = "US_SLASH",
              e[e.US_BACKTICK = 86] = "US_BACKTICK",
              e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET",
              e[e.US_BACKSLASH = 88] = "US_BACKSLASH",
              e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET",
              e[e.US_QUOTE = 90] = "US_QUOTE",
              e[e.OEM_8 = 91] = "OEM_8",
              e[e.OEM_102 = 92] = "OEM_102",
              e[e.NUMPAD_0 = 93] = "NUMPAD_0",
              e[e.NUMPAD_1 = 94] = "NUMPAD_1",
              e[e.NUMPAD_2 = 95] = "NUMPAD_2",
              e[e.NUMPAD_3 = 96] = "NUMPAD_3",
              e[e.NUMPAD_4 = 97] = "NUMPAD_4",
              e[e.NUMPAD_5 = 98] = "NUMPAD_5",
              e[e.NUMPAD_6 = 99] = "NUMPAD_6",
              e[e.NUMPAD_7 = 100] = "NUMPAD_7",
              e[e.NUMPAD_8 = 101] = "NUMPAD_8",
              e[e.NUMPAD_9 = 102] = "NUMPAD_9",
              e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY",
              e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD",
              e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR",
              e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT",
              e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL",
              e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE",
              e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION",
              e[e.ABNT_C1 = 110] = "ABNT_C1",
              e[e.ABNT_C2 = 111] = "ABNT_C2",
              e[e.MAX_VALUE = 112] = "MAX_VALUE";
          }(t.KeyCode || (t.KeyCode = {})),
          function (e) {
            e[e.Hint = 1] = "Hint",
              e[e.Info = 2] = "Info",
              e[e.Warning = 4] = "Warning",
              e[e.Error = 8] = "Error";
          }(t.MarkerSeverity || (t.MarkerSeverity = {})),
          function (e) {
            e[e.Unnecessary = 1] = "Unnecessary",
              e[e.Deprecated = 2] = "Deprecated";
          }(t.MarkerTag || (t.MarkerTag = {})),
          function (e) {
            e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
          }(t.MinimapPosition || (t.MinimapPosition = {})),
          function (e) {
            e[e.UNKNOWN = 0] = "UNKNOWN",
              e[e.TEXTAREA = 1] = "TEXTAREA",
              e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN",
              e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS",
              e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS",
              e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE",
              e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT",
              e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY",
              e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE",
              e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET",
              e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER",
              e[e.SCROLLBAR = 11] = "SCROLLBAR",
              e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET",
              e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
          }(t.MouseTargetType || (t.MouseTargetType = {})),
          function (e) {
            e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER",
              e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER",
              e[e.TOP_CENTER = 2] = "TOP_CENTER";
          }(
            t.OverlayWidgetPositionPreference ||
              (t.OverlayWidgetPositionPreference = {}),
          ),
          function (e) {
            e[e.Left = 1] = "Left",
              e[e.Center = 2] = "Center",
              e[e.Right = 4] = "Right",
              e[e.Full = 7] = "Full";
          }(t.OverviewRulerLane || (t.OverviewRulerLane = {})),
          function (e) {
            e[e.Off = 0] = "Off",
              e[e.On = 1] = "On",
              e[e.Relative = 2] = "Relative",
              e[e.Interval = 3] = "Interval",
              e[e.Custom = 4] = "Custom";
          }(t.RenderLineNumbersType || (t.RenderLineNumbersType = {})),
          function (e) {
            e[e.None = 0] = "None",
              e[e.Text = 1] = "Text",
              e[e.Blocks = 2] = "Blocks";
          }(t.RenderMinimap || (t.RenderMinimap = {})),
          function (e) {
            e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
          }(t.ScrollType || (t.ScrollType = {})),
          function (e) {
            e[e.Auto = 1] = "Auto",
              e[e.Hidden = 2] = "Hidden",
              e[e.Visible = 3] = "Visible";
          }(t.ScrollbarVisibility || (t.ScrollbarVisibility = {})),
          function (e) {
            e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
          }(t.SelectionDirection || (t.SelectionDirection = {})),
          function (e) {
            e[e.Invoke = 1] = "Invoke",
              e[e.TriggerCharacter = 2] = "TriggerCharacter",
              e[e.ContentChange = 3] = "ContentChange";
          }(t.SignatureHelpTriggerKind || (t.SignatureHelpTriggerKind = {})),
          function (e) {
            e[e.File = 0] = "File",
              e[e.Module = 1] = "Module",
              e[e.Namespace = 2] = "Namespace",
              e[e.Package = 3] = "Package",
              e[e.Class = 4] = "Class",
              e[e.Method = 5] = "Method",
              e[e.Property = 6] = "Property",
              e[e.Field = 7] = "Field",
              e[e.Constructor = 8] = "Constructor",
              e[e.Enum = 9] = "Enum",
              e[e.Interface = 10] = "Interface",
              e[e.Function = 11] = "Function",
              e[e.Variable = 12] = "Variable",
              e[e.Constant = 13] = "Constant",
              e[e.String = 14] = "String",
              e[e.Number = 15] = "Number",
              e[e.Boolean = 16] = "Boolean",
              e[e.Array = 17] = "Array",
              e[e.Object = 18] = "Object",
              e[e.Key = 19] = "Key",
              e[e.Null = 20] = "Null",
              e[e.EnumMember = 21] = "EnumMember",
              e[e.Struct = 22] = "Struct",
              e[e.Event = 23] = "Event",
              e[e.Operator = 24] = "Operator",
              e[e.TypeParameter = 25] = "TypeParameter";
          }(t.SymbolKind || (t.SymbolKind = {})),
          function (e) {
            e[e.Deprecated = 1] = "Deprecated";
          }(t.SymbolTag || (t.SymbolTag = {})),
          function (e) {
            e[e.Hidden = 0] = "Hidden",
              e[e.Blink = 1] = "Blink",
              e[e.Smooth = 2] = "Smooth",
              e[e.Phase = 3] = "Phase",
              e[e.Expand = 4] = "Expand",
              e[e.Solid = 5] = "Solid";
          }(
            t.TextEditorCursorBlinkingStyle ||
              (t.TextEditorCursorBlinkingStyle = {}),
          ),
          function (e) {
            e[e.Line = 1] = "Line",
              e[e.Block = 2] = "Block",
              e[e.Underline = 3] = "Underline",
              e[e.LineThin = 4] = "LineThin",
              e[e.BlockOutline = 5] = "BlockOutline",
              e[e.UnderlineThin = 6] = "UnderlineThin";
          }(t.TextEditorCursorStyle || (t.TextEditorCursorStyle = {})),
          function (e) {
            e[e.AlwaysGrowsWhenTypingAtEdges = 0] =
              "AlwaysGrowsWhenTypingAtEdges",
              e[e.NeverGrowsWhenTypingAtEdges = 1] =
                "NeverGrowsWhenTypingAtEdges",
              e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore",
              e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
          }(t.TrackedRangeStickiness || (t.TrackedRangeStickiness = {})),
          function (e) {
            e[e.None = 0] = "None",
              e[e.Same = 1] = "Same",
              e[e.Indent = 2] = "Indent",
              e[e.DeepIndent = 3] = "DeepIndent";
          }(t.WrappingIndent || (t.WrappingIndent = {}));
      }),
    ),
    e(
      n[31],
      r([0, 1, 18, 8, 16, 12, 3, 6, 24, 25, 30]),
      (function (e, t, n, r, i, o, s, a, l, u, c) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.createMonacoBaseAPI = t.KeyMod = void 0;
        class d {
          static chord(e, t) {
            return i.KeyChord(e, t);
          }
        }
        t.KeyMod = d,
          d.CtrlCmd = 2048,
          d.Shift = 1024,
          d.Alt = 512,
          d.WinCtrl = 256,
          t.createMonacoBaseAPI = function () {
            return {
              editor: void 0,
              languages: void 0,
              CancellationTokenSource: n.CancellationTokenSource,
              Emitter: r.Emitter,
              KeyCode: c.KeyCode,
              KeyMod: d,
              Position: s.Position,
              Range: a.Range,
              Selection: l.Selection,
              SelectionDirection: c.SelectionDirection,
              MarkerSeverity: c.MarkerSeverity,
              MarkerTag: c.MarkerTag,
              Uri: o.URI,
              Token: u.Token,
            };
          };
      }),
    ),
    e(
      n[32],
      r([0, 1, 11]),
      (function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.PrefixSumComputer = t.PrefixSumIndexOfResult = void 0;
        class r {
          constructor(e, t) {
            this.index = e, this.remainder = t;
          }
        }
        t.PrefixSumIndexOfResult = r;
        t.PrefixSumComputer = class {
          constructor(e) {
            this.values = e,
              this.prefixSum = new Uint32Array(e.length),
              this.prefixSumValidIndex = new Int32Array(1),
              this.prefixSumValidIndex[0] = -1;
          }
          insertValues(e, t) {
            e = n.toUint32(e);
            const r = this.values, i = this.prefixSum, o = t.length;
            return 0 !== o &&
              (this.values = new Uint32Array(r.length + o),
                this.values.set(r.subarray(0, e), 0),
                this.values.set(r.subarray(e), e + o),
                this.values.set(t, e),
                e - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = e - 1),
                this.prefixSum = new Uint32Array(this.values.length),
                this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  i.subarray(0, this.prefixSumValidIndex[0] + 1),
                ),
                !0);
          }
          changeValue(e, t) {
            return e = n.toUint32(e),
              t = n.toUint32(t),
              this.values[e] !== t &&
              (this.values[e] = t,
                e - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = e - 1),
                !0);
          }
          removeValues(e, t) {
            e = n.toUint32(e), t = n.toUint32(t);
            const r = this.values, i = this.prefixSum;
            if (e >= r.length) return !1;
            let o = r.length - e;
            return t >= o && (t = o),
              0 !== t &&
              (this.values = new Uint32Array(r.length - t),
                this.values.set(r.subarray(0, e), 0),
                this.values.set(r.subarray(e + t), e),
                this.prefixSum = new Uint32Array(this.values.length),
                e - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = e - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  i.subarray(0, this.prefixSumValidIndex[0] + 1),
                ),
                !0);
          }
          getTotalValue() {
            return 0 === this.values.length ? 0
            : this._getAccumulatedValue(this.values.length - 1);
          }
          getAccumulatedValue(e) {
            return e < 0 ? 0
            : (e = n.toUint32(e), this._getAccumulatedValue(e));
          }
          _getAccumulatedValue(e) {
            if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
            let t = this.prefixSumValidIndex[0] + 1;
            0 === t && (this.prefixSum[0] = this.values[0], t++),
              e >= this.values.length && (e = this.values.length - 1);
            for (let n = t; n <= e; n++) {
              this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
            }
            return this.prefixSumValidIndex[0] = Math.max(
              this.prefixSumValidIndex[0],
              e,
            ),
              this.prefixSum[e];
          }
          getIndexOf(e) {
            e = Math.floor(e), this.getTotalValue();
            let t = 0, n = this.values.length - 1, i = 0, o = 0, s = 0;
            for (; t <= n;) {
              if (
                i = t + (n - t) / 2 | 0,
                  e < (s = (o = this.prefixSum[i]) - this.values[i])
              ) {
                n = i - 1;
              } else {
                if (!(e >= o)) break;
                t = i + 1;
              }
            }
            return new r(i, e - s);
          }
        };
      }),
    ),
    e(
      n[33],
      r([0, 1, 5, 3, 32]),
      (function (e, t, n, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.MirrorTextModel = void 0;
        t.MirrorTextModel = class {
          constructor(e, t, n, r) {
            this._uri = e,
              this._lines = t,
              this._eol = n,
              this._versionId = r,
              this._lineStarts = null,
              this._cachedTextValue = null;
          }
          dispose() {
            this._lines.length = 0;
          }
          getText() {
            return null === this._cachedTextValue &&
              (this._cachedTextValue = this._lines.join(this._eol)),
              this._cachedTextValue;
          }
          onEvents(e) {
            e.eol && e.eol !== this._eol &&
              (this._eol = e.eol, this._lineStarts = null);
            const t = e.changes;
            for (const e of t) {
              this._acceptDeleteRange(e.range),
                this._acceptInsertText(
                  new r.Position(e.range.startLineNumber, e.range.startColumn),
                  e.text,
                );
            }
            this._versionId = e.versionId, this._cachedTextValue = null;
          }
          _ensureLineStarts() {
            if (!this._lineStarts) {
              const e = this._eol.length,
                t = this._lines.length,
                n = new Uint32Array(t);
              for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e;
              this._lineStarts = new i.PrefixSumComputer(n);
            }
          }
          _setLineText(e, t) {
            this._lines[e] = t,
              this._lineStarts &&
              this._lineStarts.changeValue(
                e,
                this._lines[e].length + this._eol.length,
              );
          }
          _acceptDeleteRange(e) {
            if (e.startLineNumber !== e.endLineNumber) {
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(
                  0,
                  e.startColumn - 1,
                ) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1),
              ),
                this._lines.splice(
                  e.startLineNumber,
                  e.endLineNumber - e.startLineNumber,
                ),
                this._lineStarts &&
                this._lineStarts.removeValues(
                  e.startLineNumber,
                  e.endLineNumber - e.startLineNumber,
                );
            } else {
              if (e.startColumn === e.endColumn) return;
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(
                  0,
                  e.startColumn - 1,
                ) +
                  this._lines[e.startLineNumber - 1].substring(e.endColumn - 1),
              );
            }
          }
          _acceptInsertText(e, t) {
            if (0 === t.length) return;
            let r = n.splitLines(t);
            if (1 === r.length) {
              return void this._setLineText(
                e.lineNumber - 1,
                this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                  r[0] + this._lines[e.lineNumber - 1].substring(e.column - 1),
              );
            }
            r[r.length - 1] += this._lines[e.lineNumber - 1].substring(
              e.column - 1,
            ),
              this._setLineText(
                e.lineNumber - 1,
                this._lines[e.lineNumber - 1].substring(0, e.column - 1) + r[0],
              );
            let i = new Uint32Array(r.length - 1);
            for (let t = 1; t < r.length; t++) {
              this._lines.splice(e.lineNumber + t - 1, 0, r[t]),
                i[t - 1] = r[t].length + this._eol.length;
            }
            this._lineStarts && this._lineStarts.insertValues(e.lineNumber, i);
          }
        };
      }),
    );
  var s = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(
      (function (i, o) {
        function s(e) {
          try {
            l(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            l(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function l(e) {
          var t;
          e.done ? i(e.value) : (t = e.value,
            t instanceof n ? t : new n(
              (function (e) {
                e(t);
              }),
            )).then(s, a);
        }
        l((r = r.apply(e, t || [])).next());
      }),
    );
  };
  e(
    n[35],
    r([0, 1, 13, 9, 2, 12, 3, 6, 26, 33, 27, 28, 29, 31, 10, 21]),
    (function (e, t, n, r, i, o, a, l, u, c, d, h, f, g, m, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.create = t.EditorSimpleWorker = void 0;
      class _ extends c.MirrorTextModel {
        get uri() {
          return this._uri;
        }
        get version() {
          return this._versionId;
        }
        get eol() {
          return this._eol;
        }
        getValue() {
          return this.getText();
        }
        getLinesContent() {
          return this._lines.slice(0);
        }
        getLineCount() {
          return this._lines.length;
        }
        getLineContent(e) {
          return this._lines[e - 1];
        }
        getWordAtPosition(e, t) {
          let n = d.getWordAtText(
            e.column,
            d.ensureValidWordDefinition(t),
            this._lines[e.lineNumber - 1],
            0,
          );
          return n
            ? new l.Range(
              e.lineNumber,
              n.startColumn,
              e.lineNumber,
              n.endColumn,
            )
            : null;
        }
        words(e) {
          const t = this._lines, n = this._wordenize.bind(this);
          let r = 0, i = "", o = 0, s = [];
          return {
            *[Symbol.iterator]() {
              for (;;) {
                if (o < s.length) {
                  const e = i.substring(s[o].start, s[o].end);
                  o += 1, yield e;
                } else {
                  if (!(r < t.length)) break;
                  i = t[r], s = n(i, e), o = 0, r += 1;
                }
              }
            },
          };
        }
        getLineWords(e, t) {
          let n = this._lines[e - 1], r = this._wordenize(n, t), i = [];
          for (const e of r) {
            i.push(
              {
                word: n.substring(e.start, e.end),
                startColumn: e.start + 1,
                endColumn: e.end + 1,
              },
            );
          }
          return i;
        }
        _wordenize(e, t) {
          const n = [];
          let r;
          for (t.lastIndex = 0; (r = t.exec(e)) && 0 !== r[0].length;) {
            n.push({ start: r.index, end: r.index + r[0].length });
          }
          return n;
        }
        getValueInRange(e) {
          if (
            (e = this._validateRange(e)).startLineNumber === e.endLineNumber
          ) {
            return this._lines[e.startLineNumber - 1].substring(
              e.startColumn - 1,
              e.endColumn - 1,
            );
          }
          let t = this._eol,
            n = e.startLineNumber - 1,
            r = e.endLineNumber - 1,
            i = [];
          i.push(this._lines[n].substring(e.startColumn - 1));
          for (let e = n + 1; e < r; e++) i.push(this._lines[e]);
          return i.push(this._lines[r].substring(0, e.endColumn - 1)),
            i.join(t);
        }
        offsetAt(e) {
          return e = this._validatePosition(e),
            this._ensureLineStarts(),
            this._lineStarts.getAccumulatedValue(e.lineNumber - 2) +
            (e.column - 1);
        }
        positionAt(e) {
          e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
          let t = this._lineStarts.getIndexOf(e),
            n = this._lines[t.index].length;
          return {
            lineNumber: 1 + t.index,
            column: 1 + Math.min(t.remainder, n),
          };
        }
        _validateRange(e) {
          const t = this._validatePosition(
              { lineNumber: e.startLineNumber, column: e.startColumn },
            ),
            n = this._validatePosition(
              { lineNumber: e.endLineNumber, column: e.endColumn },
            );
          return t.lineNumber !== e.startLineNumber ||
              t.column !== e.startColumn || n.lineNumber !== e.endLineNumber ||
              n.column !== e.endColumn
            ? {
              startLineNumber: t.lineNumber,
              startColumn: t.column,
              endLineNumber: n.lineNumber,
              endColumn: n.column,
            }
            : e;
        }
        _validatePosition(e) {
          if (!a.Position.isIPosition(e)) throw new Error("bad position");
          let { lineNumber: t, column: n } = e, r = !1;
          if (t < 1) t = 1, n = 1, r = !0;
          else if (t > this._lines.length) {
            t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;
          } else {
            let e = this._lines[t - 1].length + 1;
            n < 1 ? (n = 1, r = !0) : n > e && (n = e, r = !0);
          }
          return r ? { lineNumber: t, column: n } : e;
        }
      }
      class C {
        constructor(e, t) {
          this._host = e,
            this._models = Object.create(null),
            this._foreignModuleFactory = t,
            this._foreignModule = null;
        }
        dispose() {
          this._models = Object.create(null);
        }
        _getModel(e) {
          return this._models[e];
        }
        _getModels() {
          let e = [];
          return Object.keys(this._models).forEach((t) =>
            e.push(this._models[t])
          ),
            e;
        }
        acceptNewModel(e) {
          this._models[e.url] = new _(
            o.URI.parse(e.url),
            e.lines,
            e.EOL,
            e.versionId,
          );
        }
        acceptModelChanged(e, t) {
          if (!this._models[e]) return;
          this._models[e].onEvents(t);
        }
        acceptRemovedModel(e) {
          this._models[e] && delete this._models[e];
        }
        computeDiff(e, t, n, r) {
          return s(
            this,
            void 0,
            void 0,
            (function* () {
              const i = this._getModel(e), o = this._getModel(t);
              if (!i || !o) return null;
              const s = i.getLinesContent(),
                a = o.getLinesContent(),
                l = new u.DiffComputer(
                  s,
                  a,
                  {
                    shouldComputeCharChanges: !0,
                    shouldPostProcessCharChanges: !0,
                    shouldIgnoreTrimWhitespace: n,
                    shouldMakePrettyDiff: !0,
                    maxComputationTime: r,
                  },
                ).computeDiff(),
                c = !(l.changes.length > 0) && this._modelsAreIdentical(i, o);
              return {
                quitEarly: l.quitEarly,
                identical: c,
                changes: l.changes,
              };
            }),
          );
        }
        _modelsAreIdentical(e, t) {
          const n = e.getLineCount();
          if (n !== t.getLineCount()) return !1;
          for (let r = 1; r <= n; r++) {
            if (e.getLineContent(r) !== t.getLineContent(r)) return !1;
          }
          return !0;
        }
        computeMoreMinimalEdits(e, t) {
          return s(
            this,
            void 0,
            void 0,
            (function* () {
              const i = this._getModel(e);
              if (!i) return t;
              const o = [];
              let s = void 0;
              t = n.mergeSort(t, (e, t) => {
                if (e.range && t.range) {
                  return l.Range.compareRangesUsingStarts(e.range, t.range);
                }
                return (e.range ? 0 : 1) - (t.range ? 0 : 1);
              });
              for (let { range: e, text: n, eol: a } of t) {
                if (
                  "number" == typeof a && (s = a), l.Range.isEmpty(e) && !n
                ) {
                  continue;
                }
                const t = i.getValueInRange(e);
                if (t === (n = n.replace(/\r\n|\n|\r/g, i.eol))) continue;
                if (Math.max(n.length, t.length) > C._diffLimit) {
                  o.push({ range: e, text: n });
                  continue;
                }
                const u = r.stringDiff(t, n, !1),
                  c = i.offsetAt(l.Range.lift(e).getStartPosition());
                for (const e of u) {
                  const t = i.positionAt(c + e.originalStart),
                    r = i.positionAt(c + e.originalStart + e.originalLength),
                    s = {
                      text: n.substr(e.modifiedStart, e.modifiedLength),
                      range: {
                        startLineNumber: t.lineNumber,
                        startColumn: t.column,
                        endLineNumber: r.lineNumber,
                        endColumn: r.column,
                      },
                    };
                  i.getValueInRange(s.range) !== s.text && o.push(s);
                }
              }
              return "number" == typeof s &&
                o.push(
                  {
                    eol: s,
                    text: "",
                    range: {
                      startLineNumber: 0,
                      startColumn: 0,
                      endLineNumber: 0,
                      endColumn: 0,
                    },
                  },
                ),
                o;
            }),
          );
        }
        computeLinks(e) {
          return s(
            this,
            void 0,
            void 0,
            (function* () {
              let t = this._getModel(e);
              return t ? h.computeLinks(t) : null;
            }),
          );
        }
        textualSuggest(e, t, n, r) {
          return s(
            this,
            void 0,
            void 0,
            (function* () {
              const i = new p.StopWatch(!0),
                o = new RegExp(n, r),
                s = new Set();
              e:
              for (let n of e) {
                const e = this._getModel(n);
                if (e) {
                  for (let n of e.words(o)) {
                    if (
                      n !== t && isNaN(Number(n)) &&
                      (s.add(n), s.size > C._suggestionsLimit)
                    ) {
                      break e;
                    }
                  }
                }
              }
              return { words: Array.from(s), duration: i.elapsed() };
            }),
          );
        }
        computeWordRanges(e, t, n, r) {
          return s(
            this,
            void 0,
            void 0,
            (function* () {
              let i = this._getModel(e);
              if (!i) return Object.create(null);
              const o = new RegExp(n, r), s = Object.create(null);
              for (let e = t.startLineNumber; e < t.endLineNumber; e++) {
                let t = i.getLineWords(e, o);
                for (const n of t) {
                  if (!isNaN(Number(n.word))) continue;
                  let t = s[n.word];
                  t || (t = [], s[n.word] = t),
                    t.push(
                      {
                        startLineNumber: e,
                        startColumn: n.startColumn,
                        endLineNumber: e,
                        endColumn: n.endColumn,
                      },
                    );
                }
              }
              return s;
            }),
          );
        }
        navigateValueSet(e, t, n, r, i) {
          return s(
            this,
            void 0,
            void 0,
            (function* () {
              let o = this._getModel(e);
              if (!o) return null;
              let s = new RegExp(r, i);
              t.startColumn === t.endColumn &&
                (t = {
                  startLineNumber: t.startLineNumber,
                  startColumn: t.startColumn,
                  endLineNumber: t.endLineNumber,
                  endColumn: t.endColumn + 1,
                });
              let a = o.getValueInRange(t),
                l = o.getWordAtPosition(
                  { lineNumber: t.startLineNumber, column: t.startColumn },
                  s,
                );
              if (!l) return null;
              let u = o.getValueInRange(l);
              return f.BasicInplaceReplace.INSTANCE.navigateValueSet(
                t,
                a,
                l,
                u,
                n,
              );
            }),
          );
        }
        loadForeignModule(t, n, r) {
          let i = {
            host: m.createProxyObject(r, (e, t) => this._host.fhr(e, t)),
            getMirrorModels: () => this._getModels(),
          };
          return this._foreignModuleFactory
            ? (this._foreignModule = this._foreignModuleFactory(i, n),
              Promise.resolve(m.getAllMethodNames(this._foreignModule)))
            : new Promise((r, o) => {
              e([t], (e) => {
                this._foreignModule = e.create(i, n),
                  r(m.getAllMethodNames(this._foreignModule));
              }, o);
            });
        }
        fmr(e, t) {
          if (
            !this._foreignModule || "function" != typeof this._foreignModule[e]
          ) {
            return Promise.reject(
              new Error("Missing requestHandler or method: " + e),
            );
          }
          try {
            return Promise.resolve(
              this._foreignModule[e].apply(this._foreignModule, t),
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }
      }
      t.EditorSimpleWorker = C,
        C._diffLimit = 1e5,
        C._suggestionsLimit = 1e4,
        t.create = function (e) {
          return new C(e, null);
        },
        "function" == typeof importScripts &&
        (i.globals.monaco = g.createMonacoBaseAPI());
    }),
  ),
    function () {
      var e;
      let t = self.MonacoEnvironment,
        n = t && t.baseUrl ? t.baseUrl : "../../../";
      const r = null === (e = self.trustedTypes) || void 0 === e
        ? void 0
        : e.createPolicy("amdLoader", { createScriptURL: (e) => e });
      if ("function" != typeof self.define || !self.define.amd) {
        let e = n + "vs/loader.js";
        r && (e = r.createScriptURL(e)), importScripts(e);
      }
      require.config({ baseUrl: n, catchError: !0, trustedTypesPolicy: r });
      let i = !0, o = [];
      self.onmessage = (e) => {
        i
          ? (i = !1,
            function (e) {
              require(
                [e],
                (function (e) {
                  setTimeout(
                    (function () {
                      let t = e.create((e, t) => {
                        self.postMessage(e, t);
                      }, null);
                      for (
                        self.onmessage = (e) => t.onmessage(e.data);
                        o.length > 0;
                      ) {
                        self.onmessage(o.shift());
                      }
                    }),
                    0,
                  );
                }),
              );
            }(e.data))
          : o.push(e);
      };
    }();
}).call(this);
//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
