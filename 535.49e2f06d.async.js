;(self.webpackChunkgrace_design = self.webpackChunkgrace_design || []).push([
  [535],
  {
    14457: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return T
        },
      })
      var e = n(67294),
        g = Object.defineProperty,
        m = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        E = (i, t, r) =>
          t in i
            ? g(i, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (i[t] = r),
        S = (i, t) => {
          for (var r in t || (t = {})) p.call(t, r) && E(i, r, t[r])
          if (m) for (var r of m(t)) d.call(t, r) && E(i, r, t[r])
          return i
        }
      const z = (i) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          })
        )
      var O =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        w = function (i, t, r, l) {
          function x(y) {
            return y instanceof r
              ? y
              : new r(function (Q) {
                  Q(y)
                })
          }
          return new (r || (r = Promise))(function (y, Q) {
            function V(b) {
              try {
                $(l.next(b))
              } catch (B) {
                Q(B)
              }
            }
            function ee(b) {
              try {
                $(l.throw(b))
              } catch (B) {
                Q(B)
              }
            }
            function $(b) {
              b.done ? y(b.value) : x(b.value).then(V, ee)
            }
            $((l = l.apply(i, t || [])).next())
          })
        }
      function C(i) {
        let t = 0,
          r = 0,
          l = i
        do
          (t += l.offsetTop || 0),
            (r += l.offsetLeft || 0),
            (l = l.offsetParent)
        while (l)
        return { top: t, left: r }
      }
      class X {
        constructor(t) {
          this.element = t
        }
        getHorizontalScroll() {
          return this.element.scrollLeft
        }
        getVerticalScroll() {
          return this.element.scrollTop
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight
        }
        getHorizontalElementScrollOffset(t, r) {
          return C(t).left - C(r).left
        }
        getVerticalElementScrollOffset(t, r) {
          return C(t).top - C(r).top
        }
        scrollTo(t, r) {
          ;(this.element.scrollLeft = t), (this.element.scrollTop = r)
        }
      }
      class W {
        constructor() {
          this.element = window
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth
            ) - window.innerWidth
          )
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight
            ) - window.innerHeight
          )
        }
        getHorizontalElementScrollOffset(t) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) +
            t.getBoundingClientRect().left
          )
        }
        getVerticalElementScrollOffset(t) {
          return (
            (window.scrollY || document.documentElement.scrollTop) +
            t.getBoundingClientRect().top
          )
        }
        scrollTo(t, r) {
          window.scrollTo(t, r)
        }
      }
      const j = {
          elements: [],
          cancelMethods: [],
          add: (i, t) => {
            j.elements.push(i), j.cancelMethods.push(t)
          },
          remove: (i, t) => {
            const r = j.elements.indexOf(i)
            r > -1 &&
              (t && j.cancelMethods[r](),
              j.elements.splice(r, 1),
              j.cancelMethods.splice(r, 1))
          },
        },
        v = typeof window != 'undefined',
        h = {
          cancelOnUserAction: !0,
          easing: (i) => --i * i * i + 1,
          elementToScroll: v ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        }
      function D(i, t = {}) {
        return w(this, void 0, void 0, function* () {
          if (v) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."
          } else
            return new Promise((me) => {
              me(!1)
            })
          let r,
            l,
            x,
            y = Object.assign(Object.assign({}, h), t)
          const Q = y.elementToScroll === window,
            V = !!y.elementToScroll.nodeName
          if (!Q && !V)
            throw 'Element to scroll needs to be either window or DOM element.'
          const ee = Q ? document.documentElement : y.elementToScroll
          getComputedStyle(ee).getPropertyValue('scroll-behavior') ===
            'smooth' &&
            console.warn(
              `${ee.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`
            )
          const b = Q ? new W() : new X(y.elementToScroll)
          if (i instanceof Element) {
            if (
              ((x = i),
              V &&
                (!y.elementToScroll.contains(x) ||
                  y.elementToScroll.isSameNode(x)))
            )
              throw 'options.elementToScroll has to be a parent of scrollToElement'
            ;(r = b.getHorizontalElementScrollOffset(x, y.elementToScroll)),
              (l = b.getVerticalElementScrollOffset(x, y.elementToScroll))
          } else if (typeof i == 'number')
            (r = b.getHorizontalScroll()), (l = i)
          else if (Array.isArray(i) && i.length === 2)
            (r = i[0] === null ? b.getHorizontalScroll() : i[0]),
              (l = i[1] === null ? b.getVerticalScroll() : i[1])
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`
          ;(r += y.horizontalOffset), (l += y.verticalOffset)
          const B = b.getMaxHorizontalScroll(),
            le = b.getHorizontalScroll()
          r > B && (r = B)
          const U = r - le,
            te = b.getMaxVerticalScroll(),
            P = b.getVerticalScroll()
          l > te && (l = te)
          const G = l - P,
            ie = Math.abs(Math.round((U / 1e3) * y.speed)),
            ce = Math.abs(Math.round((G / 1e3) * y.speed))
          let se = ie > ce ? ie : ce
          return (
            se < y.minDuration
              ? (se = y.minDuration)
              : se > y.maxDuration && (se = y.maxDuration),
            new Promise((me, Le) => {
              U === 0 && G === 0 && me(!0), j.remove(b.element, !0)
              let je
              const he = () => {
                u(), cancelAnimationFrame(je), me(!1)
              }
              j.add(b.element, he)
              const Ie = (Y) => Y.preventDefault(),
                Se = y.cancelOnUserAction ? he : Ie,
                Ee = y.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                pe = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                u = () => {
                  pe.forEach((Y) => {
                    b.element.removeEventListener(Y, Se, Ee)
                  })
                }
              pe.forEach((Y) => {
                b.element.addEventListener(Y, Se, Ee)
              })
              const o = Date.now(),
                c = () => {
                  var Y = Date.now() - o,
                    R = Y / se
                  const K = Math.round(le + U * y.easing(R)),
                    _ = Math.round(P + G * y.easing(R))
                  Y < se && (K !== r || _ !== l)
                    ? (b.scrollTo(K, _), (je = requestAnimationFrame(c)))
                    : (b.scrollTo(r, l),
                      cancelAnimationFrame(je),
                      u(),
                      j.remove(b.element, !1),
                      me(!0))
                }
              je = requestAnimationFrame(c)
            })
          )
        })
      }
      var Z = D,
        H = n(19393),
        q = n(21266),
        A = n(95044),
        I = n(23240),
        N = n(45898),
        k = n(86225),
        F = n(38569),
        J = n(26687)
      function re(i, t) {
        return Ae(i) || ge(i, t) || oe(i, t) || ae()
      }
      function ae() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function oe(i, t) {
        if (i) {
          if (typeof i == 'string') return ue(i, t)
          var r = Object.prototype.toString.call(i).slice(8, -1)
          if (
            (r === 'Object' && i.constructor && (r = i.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(i)
          if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return ue(i, t)
        }
      }
      function ue(i, t) {
        ;(t == null || t > i.length) && (t = i.length)
        for (var r = 0, l = new Array(t); r < t; r++) l[r] = i[r]
        return l
      }
      function ge(i, t) {
        var r =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) ||
              i['@@iterator']
        if (r != null) {
          var l = [],
            x = !0,
            y = !1,
            Q,
            V
          try {
            for (
              r = r.call(i);
              !(x = (Q = r.next()).done) &&
              (l.push(Q.value), !(t && l.length === t));
              x = !0
            );
          } catch (ee) {
            ;(y = !0), (V = ee)
          } finally {
            try {
              !x && r.return != null && r.return()
            } finally {
              if (y) throw V
            }
          }
          return l
        }
      }
      function Ae(i) {
        if (Array.isArray(i)) return i
      }
      var ve = function () {
          var t = (0, H.YB)(),
            r = (0, H.pC)(),
            l = (0, H.tx)(),
            x = (0, H.TH)(),
            y = x.hash,
            Q = (0, H.WF)(),
            V = Q.loading,
            ee = (0, e.useState)(!1),
            $ = re(ee, 2),
            b = $[0],
            B = $[1],
            le = (0, H.eL)(),
            U = le.frontmatter,
            te = U.sidebar !== !1 && (l == null ? void 0 : l.length) > 0
          return (
            (0, e.useEffect)(
              function () {
                var P = y.replace('#', '')
                P &&
                  setTimeout(function () {
                    var G = document.getElementById(decodeURIComponent(P))
                    G && Z(G.offsetTop - 80, { maxDuration: 300 })
                  }, 1)
              },
              [V, y]
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': b || void 0,
                onClick: function () {
                  return B(!1)
                },
              },
              e.createElement(
                H.ql,
                null,
                e.createElement('html', { lang: t.locale.replace(/-.+$/, '') }),
                U.title && e.createElement('title', null, U.title),
                U.title &&
                  e.createElement('meta', {
                    property: 'og:title',
                    content: U.title,
                  }),
                U.description &&
                  e.createElement('meta', {
                    name: 'description',
                    content: U.description,
                  }),
                U.description &&
                  e.createElement('meta', {
                    property: 'og:description',
                    content: U.description,
                  }),
                U.keywords &&
                  e.createElement('meta', {
                    name: 'keywords',
                    content: U.keywords.join(','),
                  }),
                U.keywords &&
                  e.createElement('meta', {
                    property: 'og:keywords',
                    content: U.keywords.join(','),
                  })
              ),
              e.createElement(N.Z, null),
              e.createElement(k.Z, null),
              e.createElement(A.Z, null),
              te &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (G) {
                        G.stopPropagation(),
                          B(function (ie) {
                            return !ie
                          })
                      },
                    },
                    e.createElement(z, null),
                    t.formatMessage({ id: 'layout.sidebar.btn' })
                  )
                ),
              e.createElement(
                'main',
                null,
                te && e.createElement(F.Z, null),
                e.createElement(q.Z, null, r, e.createElement(I.Z, null)),
                U.toc === 'content' &&
                  e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(J.Z, null)
                  )
              )
            )
          )
        },
        T = ve
    },
    76012: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return j
        },
      })
      var e = n(19393),
        g = n(67294)
      function m(v, h) {
        return z(v) || S(v, h) || d(v, h) || p()
      }
      function p() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function d(v, h) {
        if (v) {
          if (typeof v == 'string') return E(v, h)
          var D = Object.prototype.toString.call(v).slice(8, -1)
          if (
            (D === 'Object' && v.constructor && (D = v.constructor.name),
            D === 'Map' || D === 'Set')
          )
            return Array.from(v)
          if (
            D === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)
          )
            return E(v, h)
        }
      }
      function E(v, h) {
        ;(h == null || h > v.length) && (h = v.length)
        for (var D = 0, Z = new Array(h); D < h; D++) Z[D] = v[D]
        return Z
      }
      function S(v, h) {
        var D =
          v == null
            ? null
            : (typeof Symbol != 'undefined' && v[Symbol.iterator]) ||
              v['@@iterator']
        if (D != null) {
          var Z = [],
            H = !0,
            q = !1,
            A,
            I
          try {
            for (
              D = D.call(v);
              !(H = (A = D.next()).done) &&
              (Z.push(A.value), !(h && Z.length === h));
              H = !0
            );
          } catch (N) {
            ;(q = !0), (I = N)
          } finally {
            try {
              !H && D.return != null && D.return()
            } finally {
              if (q) throw I
            }
          }
          return Z
        }
      }
      function z(v) {
        if (Array.isArray(v)) return v
      }
      var O = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            g.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            })
          )
        },
        w = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            g.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            })
          )
        },
        C = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            g.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            })
          )
        },
        X = { light: w, dark: O, auto: C },
        W = function () {
          var h = (0, e.WF)(),
            D = h.themeConfig.prefersColor.default,
            Z = (0, e.YB)(),
            H = (0, e.OI)(),
            q = m(H, 3),
            A = q[1],
            I = A === void 0 ? D : A,
            N = q[2],
            k = X[I]
          return g.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': Z.formatMessage({
                id: 'header.color.mode.'.concat(I),
              }),
              'data-dumi-tooltip-bottom': !0,
            },
            k && g.createElement(k, null),
            g.createElement(
              'select',
              {
                onChange: function (J) {
                  return N(J.target.value)
                },
                value: I,
              },
              ['light', 'dark', 'auto'].map(function (F) {
                return g.createElement(
                  'option',
                  { value: F, key: F },
                  Z.formatMessage({ id: 'header.color.mode.'.concat(F) })
                )
              })
            )
          )
        },
        j = W
    },
    76772: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return p
        },
      })
      var e = n(19393),
        g = n(67294),
        m = function (E) {
          var S = (0, e.tx)(),
            z = (0, e.WF)(),
            O = z.themeConfig
          return g.createElement(
            'div',
            {
              className: 'dumi-default-content',
              'data-no-sidebar': !S || void 0,
              'data-no-footer': O.footer === !1 || void 0,
            },
            E.children
          )
        },
        p = m
    },
    3933: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return p
        },
      })
      var e = n(19393),
        g = n(67294),
        m = function () {
          var E,
            S = (0, e.eL)(),
            z = S.frontmatter
          return Boolean(
            (E = z.features) === null || E === void 0 ? void 0 : E.length
          )
            ? g.createElement(
                'div',
                {
                  className: 'dumi-default-features',
                  'data-cols':
                    [3, 2].find(function (O) {
                      return z.features.length % O === 0
                    }) || 3,
                },
                z.features.map(function (O) {
                  var w = O.title,
                    C = O.description,
                    X = O.emoji,
                    W = O.link,
                    j
                  return (
                    W &&
                      (j = /^(\w+:)\/\/|^(mailto|tel):/.test(W)
                        ? g.createElement(
                            'a',
                            { href: W, target: '_blank', rel: 'noreferrer' },
                            w
                          )
                        : g.createElement(e.rU, { to: W }, w)),
                    g.createElement(
                      'div',
                      { key: w, className: 'dumi-default-features-item' },
                      X && g.createElement('i', null, X),
                      w && g.createElement('h3', null, j || w),
                      C &&
                        g.createElement('p', {
                          dangerouslySetInnerHTML: { __html: C },
                        })
                    )
                  )
                })
              )
            : null
        },
        p = m
    },
    51969: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return p
        },
      })
      var e = n(19393),
        g = n(67294),
        m = function () {
          var E = (0, e.WF)(),
            S = E.themeConfig
          return S.footer
            ? g.createElement('div', {
                className: 'dumi-default-footer',
                dangerouslySetInnerHTML: { __html: S.footer },
              })
            : null
        },
        p = m
    },
    88363: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return i
        },
      })
      var e = n(67294),
        g = function () {
          return e.createElement(e.Fragment, null)
        },
        m = g,
        p = Object.defineProperty,
        d = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        S = Object.prototype.propertyIsEnumerable,
        z = (t, r, l) =>
          r in t
            ? p(t, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (t[r] = l),
        O = (t, r) => {
          for (var l in r || (r = {})) E.call(r, l) && z(t, l, r[l])
          if (d) for (var l of d(r)) S.call(r, l) && z(t, l, r[l])
          return t
        }
      const w = (t) =>
        e.createElement(
          'svg',
          O({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'm563.8 512 262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          })
        )
      var C =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNTYzLjggNTEyIDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyeiIvPjwvc3ZnPg==',
        X = Object.defineProperty,
        W = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        h = (t, r, l) =>
          r in t
            ? X(t, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (t[r] = l),
        D = (t, r) => {
          for (var l in r || (r = {})) j.call(r, l) && h(t, l, r[l])
          if (W) for (var l of W(r)) v.call(r, l) && h(t, l, r[l])
          return t
        }
      const Z = (t) =>
        e.createElement(
          'svg',
          D({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          })
        )
      var H =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        q = n(19393),
        A = n(87171),
        I = n(26871),
        N = n(63721),
        k = n(78406),
        F = n(983),
        J = n(96157),
        re = n(24733)
      function ae(t, r) {
        return ve(t) || Ae(t, r) || ue(t, r) || oe()
      }
      function oe() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function ue(t, r) {
        if (t) {
          if (typeof t == 'string') return ge(t, r)
          var l = Object.prototype.toString.call(t).slice(8, -1)
          if (
            (l === 'Object' && t.constructor && (l = t.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(t)
          if (
            l === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return ge(t, r)
        }
      }
      function ge(t, r) {
        ;(r == null || r > t.length) && (r = t.length)
        for (var l = 0, x = new Array(r); l < r; l++) x[l] = t[l]
        return x
      }
      function Ae(t, r) {
        var l =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) ||
              t['@@iterator']
        if (l != null) {
          var x = [],
            y = !0,
            Q = !1,
            V,
            ee
          try {
            for (
              l = l.call(t);
              !(y = (V = l.next()).done) &&
              (x.push(V.value), !(r && x.length === r));
              y = !0
            );
          } catch ($) {
            ;(Q = !0), (ee = $)
          } finally {
            try {
              !y && l.return != null && l.return()
            } finally {
              if (Q) throw ee
            }
          }
          return x
        }
      }
      function ve(t) {
        if (Array.isArray(t)) return t
      }
      var T = function () {
          var r = (0, q.eL)(),
            l = r.frontmatter,
            x = (0, e.useState)(!1),
            y = ae(x, 2),
            Q = y[0],
            V = y[1],
            ee = (0, q.WF)(),
            $ = ee.themeConfig,
            b = (0, e.useMemo)(
              function () {
                return $.socialLinks
                  ? Object.keys($.socialLinks)
                      .slice(0, 5)
                      .map(function (B) {
                        return { icon: B, link: $.socialLinks[B] }
                      })
                  : []
              },
              [$.socialLinks]
            )
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': Boolean(l.hero) || void 0,
              'data-mobile-active': Q || void 0,
              onClick: function () {
                return V(!1)
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement(
                'section',
                { className: 'dumi-default-header-left' },
                e.createElement(N.Z, null)
              ),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(k.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(J.ZP, null),
                  e.createElement(I.Z, null),
                  e.createElement(F.Z, null),
                  $.prefersColor.switch && e.createElement(A.Z, null),
                  b.map(function (B) {
                    return e.createElement(re.Z, {
                      icon: B.icon,
                      link: B.link,
                      key: B.link,
                    })
                  }),
                  e.createElement(m, null)
                )
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (le) {
                    le.stopPropagation(),
                      V(function (U) {
                        return !U
                      })
                  },
                },
                Q ? e.createElement(w, null) : e.createElement(Z, null)
              )
            )
          )
        },
        i = T
    },
    10339: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return m
        },
      })
      var e = n(67294),
        g = function (d) {
          return e.createElement(
            'h1',
            { className: 'dumi-default-hero-title' },
            e.createElement('span', null, d.children)
          )
        },
        m = g
    },
    25272: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return d
        },
      })
      var e = n(19393),
        g = n(21521),
        m = n(67294),
        p = function () {
          var S,
            z = (0, e.eL)(),
            O = z.frontmatter
          return 'hero' in O
            ? m.createElement(
                'div',
                { className: 'dumi-default-hero' },
                O.hero.title && m.createElement(g.Z, null, O.hero.title),
                O.hero.description &&
                  m.createElement('p', {
                    dangerouslySetInnerHTML: { __html: O.hero.description },
                  }),
                Boolean(
                  (S = O.hero.actions) === null || S === void 0
                    ? void 0
                    : S.length
                ) &&
                  m.createElement(
                    'div',
                    { className: 'dumi-default-hero-actions' },
                    O.hero.actions.map(function (w) {
                      var C = w.text,
                        X = w.link
                      return /^(\w+:)\/\/|^(mailto|tel):/.test(X)
                        ? m.createElement(
                            'a',
                            {
                              href: X,
                              target: '_blank',
                              rel: 'noreferrer',
                              key: C,
                            },
                            C
                          )
                        : m.createElement(e.rU, { key: C, to: X }, C)
                    })
                  )
              )
            : null
        },
        d = p
    },
    66943: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return q
        },
      })
      var e = n(67294),
        g = Object.defineProperty,
        m = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        E = (A, I, N) =>
          I in A
            ? g(A, I, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: N,
              })
            : (A[I] = N),
        S = (A, I) => {
          for (var N in I || (I = {})) p.call(I, N) && E(A, N, I[N])
          if (m) for (var N of m(I)) d.call(I, N) && E(A, N, I[N])
          return A
        }
      const z = (A) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, A),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          })
        )
      var O =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==',
        w = n(19393)
      function C(A, I) {
        return h(A) || v(A, I) || W(A, I) || X()
      }
      function X() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function W(A, I) {
        if (A) {
          if (typeof A == 'string') return j(A, I)
          var N = Object.prototype.toString.call(A).slice(8, -1)
          if (
            (N === 'Object' && A.constructor && (N = A.constructor.name),
            N === 'Map' || N === 'Set')
          )
            return Array.from(A)
          if (
            N === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)
          )
            return j(A, I)
        }
      }
      function j(A, I) {
        ;(I == null || I > A.length) && (I = A.length)
        for (var N = 0, k = new Array(I); N < I; N++) k[N] = A[N]
        return k
      }
      function v(A, I) {
        var N =
          A == null
            ? null
            : (typeof Symbol != 'undefined' && A[Symbol.iterator]) ||
              A['@@iterator']
        if (N != null) {
          var k = [],
            F = !0,
            J = !1,
            re,
            ae
          try {
            for (
              N = N.call(A);
              !(F = (re = N.next()).done) &&
              (k.push(re.value), !(I && k.length === I));
              F = !0
            );
          } catch (oe) {
            ;(J = !0), (ae = oe)
          } finally {
            try {
              !F && N.return != null && N.return()
            } finally {
              if (J) throw ae
            }
          }
          return k
        }
      }
      function h(A) {
        if (Array.isArray(A)) return A
      }
      function D(A) {
        var I = A.pathname,
          N = A.current,
          k = A.target,
          F =
            'base' in N
              ? I.replace(N.base.replace(/\/$/, ''), '') || '/'
              : I.replace(new RegExp(''.concat(N.suffix, '$')), '')
        return 'base' in k
          ? ''
              .concat(k.base.replace(/\/$/, ''))
              .concat(F)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(F).concat(k.suffix)
      }
      var Z = function (I) {
          var N = I.locale,
            k = I.current,
            F = (0, w.TH)(),
            J = F.pathname,
            re = (0, e.useState)(function () {
              return D({ pathname: J, current: k, target: N })
            }),
            ae = C(re, 2),
            oe = ae[0],
            ue = ae[1]
          return (
            (0, e.useEffect)(
              function () {
                ue(D({ pathname: J, current: k, target: N }))
              },
              [J, k.id, N.id]
            ),
            e.createElement(
              w.rU,
              { className: 'dumi-default-lang-switch', to: oe },
              N.name
            )
          )
        },
        H = function () {
          var I = (0, w.WF)(),
            N = I.locales,
            k = (0, w.YB)(),
            F = k.locale,
            J = (0, w.bU)()
          return N.length <= 1
            ? null
            : N.length > 2
            ? e.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                e.createElement(
                  'select',
                  {
                    defaultValue: F,
                    onChange: function (ae) {
                      w.m8.push(
                        D({
                          pathname: w.m8.location.pathname,
                          current: J,
                          target: N.find(function (oe) {
                            var ue = oe.id
                            return ue === ae.target.value
                          }),
                        })
                      )
                    },
                  },
                  N.map(function (re) {
                    return e.createElement(
                      'option',
                      { key: re.id, value: re.id },
                      re.name
                    )
                  })
                ),
                e.createElement(z, null)
              )
            : e.createElement(Z, {
                locale: N.find(function (re) {
                  var ae = re.id
                  return ae !== F
                }),
                current: J,
              })
        },
        q = H
    },
    55212: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return p
        },
      })
      var e = n(19393),
        g = n(67294),
        m = function () {
          var E = (0, e.WF)(),
            S = E.themeConfig,
            z = (0, e.bU)()
          return g.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in z ? z.base : '/' },
            S.logo !== !1 &&
              g.createElement('img', {
                src:
                  S.logo ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: S.name,
              }),
            S.name
          )
        },
        p = m
    },
    40123: function (f, L, n) {
      'use strict'
      var e = n(67294),
        g = function () {
          return e.createElement(e.Fragment, null)
        }
      L.Z = g
    },
    71482: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return E
        },
      })
      var e = n(19393),
        g = n(42515),
        m = n(67294)
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (S) {
                for (var z = 1; z < arguments.length; z++) {
                  var O = arguments[z]
                  for (var w in O)
                    Object.prototype.hasOwnProperty.call(O, w) && (S[w] = O[w])
                }
                return S
              }),
          p.apply(this, arguments)
        )
      }
      var d = function () {
          var z = (0, e.OK)(),
            O = (0, e.TH)(),
            w = O.pathname
          return m.createElement(
            'ul',
            { className: 'dumi-default-navbar' },
            z.map(function (C) {
              return m.createElement(
                'li',
                { key: C.link },
                /^(\w+:)\/\/|^(mailto|tel):/.test(C.link)
                  ? m.createElement(
                      'a',
                      { href: C.link, target: '_blank', rel: 'noreferrer' },
                      C.title
                    )
                  : m.createElement(
                      e.rU,
                      p(
                        { to: C.link },
                        w.startsWith(C.activePath || C.link)
                          ? { className: 'active' }
                          : {}
                      ),
                      C.title
                    )
              )
            }),
            m.createElement(g.Z, null)
          )
        },
        E = d
    },
    47332: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return W
        },
      })
      var e = n(19393),
        g = n(67294)
      function m(j, v) {
        return z(j) || S(j, v) || d(j, v) || p()
      }
      function p() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function d(j, v) {
        if (j) {
          if (typeof j == 'string') return E(j, v)
          var h = Object.prototype.toString.call(j).slice(8, -1)
          if (
            (h === 'Object' && j.constructor && (h = j.constructor.name),
            h === 'Map' || h === 'Set')
          )
            return Array.from(j)
          if (
            h === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)
          )
            return E(j, v)
        }
      }
      function E(j, v) {
        ;(v == null || v > j.length) && (v = j.length)
        for (var h = 0, D = new Array(v); h < v; h++) D[h] = j[h]
        return D
      }
      function S(j, v) {
        var h =
          j == null
            ? null
            : (typeof Symbol != 'undefined' && j[Symbol.iterator]) ||
              j['@@iterator']
        if (h != null) {
          var D = [],
            Z = !0,
            H = !1,
            q,
            A
          try {
            for (
              h = h.call(j);
              !(Z = (q = h.next()).done) &&
              (D.push(q.value), !(v && D.length === v));
              Z = !0
            );
          } catch (I) {
            ;(H = !0), (A = I)
          } finally {
            try {
              !Z && h.return != null && h.return()
            } finally {
              if (H) throw A
            }
          }
          return D
        }
      }
      function z(j) {
        if (Array.isArray(j)) return j
      }
      var O = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            g.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            })
          )
        },
        w = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            g.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            })
          )
        },
        C = 'dumi:rtl',
        X = function () {
          var v = (0, g.useState)(!1),
            h = m(v, 2),
            D = h[0],
            Z = h[1],
            H = (0, e.WF)(),
            q = H.themeConfig
          return (
            (0, g.useEffect)(function () {
              localStorage.getItem(C) &&
                (Z(!0),
                document.documentElement.setAttribute('data-direction', 'rtl'))
            }, []),
            q.rtl
              ? g.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      D
                        ? (document.documentElement.removeAttribute(
                            'data-direction'
                          ),
                          localStorage.removeItem(C))
                        : (document.documentElement.setAttribute(
                            'data-direction',
                            'rtl'
                          ),
                          localStorage.setItem(C, '1')),
                        Z(!D)
                    },
                    'data-dumi-tooltip': D ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  D ? g.createElement(O, null) : g.createElement(w, null)
                )
              : null
          )
        },
        W = X
    },
    58960: function (f, L, n) {
      'use strict'
      n.d(L, {
        ZP: function () {
          return pe
        },
      })
      var e = n(67294),
        g = Object.defineProperty,
        m = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        E = (u, o, c) =>
          o in u
            ? g(u, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (u[o] = c),
        S = (u, o) => {
          for (var c in o || (o = {})) p.call(o, c) && E(u, c, o[c])
          if (m) for (var c of m(o)) d.call(o, c) && E(u, c, o[c])
          return u
        }
      const z = (u) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, u),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          })
        )
      var O =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        w = Object.defineProperty,
        C = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        W = Object.prototype.propertyIsEnumerable,
        j = (u, o, c) =>
          o in u
            ? w(u, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (u[o] = c),
        v = (u, o) => {
          for (var c in o || (o = {})) X.call(o, c) && j(u, c, o[c])
          if (C) for (var c of C(o)) W.call(o, c) && j(u, c, o[c])
          return u
        }
      const h = (u) =>
        e.createElement(
          'svg',
          v({ viewBox: '64 64 896 896' }, u),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          })
        )
      var D =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        Z = Object.defineProperty,
        H = Object.getOwnPropertySymbols,
        q = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        I = (u, o, c) =>
          o in u
            ? Z(u, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (u[o] = c),
        N = (u, o) => {
          for (var c in o || (o = {})) q.call(o, c) && I(u, c, o[c])
          if (H) for (var c of H(o)) A.call(o, c) && I(u, c, o[c])
          return u
        }
      const k = (u) =>
        e.createElement(
          'svg',
          N({ viewBox: '64 64 896 896' }, u),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          })
        )
      var F =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        J = n(19393),
        re = Object.defineProperty,
        ae = Object.getOwnPropertySymbols,
        oe = Object.prototype.hasOwnProperty,
        ue = Object.prototype.propertyIsEnumerable,
        ge = (u, o, c) =>
          o in u
            ? re(u, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (u[o] = c),
        Ae = (u, o) => {
          for (var c in o || (o = {})) oe.call(o, c) && ge(u, c, o[c])
          if (ae) for (var c of ae(o)) ue.call(o, c) && ge(u, c, o[c])
          return u
        }
      const ve = (u) =>
        e.createElement(
          'svg',
          Ae({ viewBox: '0 0 1024 1024' }, u),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          })
        )
      var T =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4='
      function i(u, o) {
        return y(u) || x(u, o) || r(u, o) || t()
      }
      function t() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function r(u, o) {
        if (u) {
          if (typeof u == 'string') return l(u, o)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return l(u, o)
        }
      }
      function l(u, o) {
        ;(o == null || o > u.length) && (o = u.length)
        for (var c = 0, Y = new Array(o); c < o; c++) Y[c] = u[c]
        return Y
      }
      function x(u, o) {
        var c =
          u == null
            ? null
            : (typeof Symbol != 'undefined' && u[Symbol.iterator]) ||
              u['@@iterator']
        if (c != null) {
          var Y = [],
            R = !0,
            K = !1,
            _,
            M
          try {
            for (
              c = c.call(u);
              !(R = (_ = c.next()).done) &&
              (Y.push(_.value), !(o && Y.length === o));
              R = !0
            );
          } catch (a) {
            ;(K = !0), (M = a)
          } finally {
            try {
              !R && c.return != null && c.return()
            } finally {
              if (K) throw M
            }
          }
          return Y
        }
      }
      function y(u) {
        if (Array.isArray(u)) return u
      }
      var Q = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            })
          )
        },
        V = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            })
          )
        },
        ee = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            })
          )
        },
        $ = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            })
          )
        },
        b = { title: Q, page: V, content: ee, demo: $ },
        B = function (o) {
          return e.createElement(
            e.Fragment,
            null,
            o.texts.map(function (c, Y) {
              return e.createElement(
                e.Fragment,
                { key: Y },
                c.highlighted ? e.createElement('mark', null, c.text) : c.text
              )
            })
          )
        },
        le = function (o) {
          var c = (0, e.useCallback)(
              function () {
                var M = 0,
                  a = []
                return (
                  o.forEach(function (s) {
                    s.title &&
                      a.push({ type: 'title', value: { title: s.title } }),
                      s.hints.forEach(function (ne) {
                        a.push({ type: 'hint', activeIndex: M++, value: ne })
                      })
                  }),
                  [a, M]
                )
              },
              [o]
            ),
            Y = (0, e.useState)(c),
            R = i(Y, 2),
            K = R[0],
            _ = R[1]
          return (
            (0, e.useEffect)(
              function () {
                _(c)
              },
              [o]
            ),
            K
          )
        },
        U = function (o) {
          var c = le(o.data),
            Y = i(c, 2),
            R = Y[0],
            K = Y[1],
            _ = (0, e.useState)(-1),
            M = i(_, 2),
            a = M[0],
            s = M[1]
          return (
            (0, e.useEffect)(function () {
              var ne = function (de) {
                if (de.key === 'ArrowDown') s((a + 1) % K)
                else if (de.key === 'ArrowUp') s((a + K - 1) % K)
                else if (de.key === 'Enter' && a >= 0) {
                  var fe,
                    Te = R.find(function (De) {
                      return De.type === 'hint' && De.activeIndex === a
                    }).value
                  J.m8.push(Te.link),
                    (fe = o.onItemSelect) === null ||
                      fe === void 0 ||
                      fe.call(o, Te),
                    document.activeElement.blur()
                }
                ;['Escape', 'Enter'].includes(de.key) && s(-1)
              }
              return (
                document.addEventListener('keydown', ne),
                function () {
                  return document.removeEventListener('keydown', ne)
                }
              )
            }),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return s(-1)
                },
                onMouseDownCapture: function (Me) {
                  return Me.preventDefault()
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur()
                },
              },
              Boolean(o.data.length || o.loading)
                ? e.createElement(
                    'dl',
                    null,
                    R.map(function (ne, Me) {
                      return ne.type === 'title'
                        ? e.createElement(
                            'dt',
                            { key: String(Me) },
                            ne.value.title
                          )
                        : e.createElement(
                            'dd',
                            { key: String(Me) },
                            e.createElement(
                              J.rU,
                              {
                                to: ne.value.link,
                                'data-active': a === ne.activeIndex || void 0,
                                onClick: function () {
                                  var fe
                                  return (fe = o.onItemSelect) === null ||
                                    fe === void 0
                                    ? void 0
                                    : fe.call(o, ne.value)
                                },
                              },
                              e.createElement(b[ne.value.type]),
                              e.createElement(
                                'h4',
                                null,
                                e.createElement(B, {
                                  texts: ne.value.highlightTitleTexts,
                                })
                              ),
                              e.createElement(
                                'p',
                                null,
                                e.createElement(B, {
                                  texts: ne.value.highlightTexts,
                                })
                              )
                            )
                          )
                    })
                  )
                : e.createElement(
                    'div',
                    { className: 'dumi-default-search-empty' },
                    e.createElement(ve, null),
                    e.createElement(J._H, { id: 'search.not.found' })
                  )
            )
          )
        },
        te = U,
        P = (0, e.forwardRef)(function (u, o) {
          var c = (0, J.YB)(),
            Y = (0, e.useRef)(!1),
            R = (0, e.useRef)(null)
          return (
            (0, e.useImperativeHandle)(o, function () {
              return R.current
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (Y.current = !0)
              },
              onCompositionEnd: function (_) {
                ;(Y.current = !1), u.onChange(_.currentTarget.value)
              },
              onFocus: u.onFocus,
              onBlur: u.onBlur,
              onKeyDown: function (_) {
                ;['ArrowDown', 'ArrowUp'].includes(_.key) && _.preventDefault(),
                  _.key === 'Escape' && !Y.current && _.currentTarget.blur()
              },
              onChange: function (_) {
                setTimeout(function () {
                  Y.current || u.onChange(_.target.value)
                }, 1)
              },
              placeholder: c.formatMessage({ id: 'header.search.placeholder' }),
              ref: R,
            })
          )
        }),
        G = function (o) {
          return (
            (0, e.useEffect)(
              function () {
                if (o.visible) document.body.style.overflow = 'hidden'
                else {
                  var c
                  ;(document.body.style.overflow = ''),
                    (c = o.onClose) === null || c === void 0 || c.call(o)
                }
              },
              [o.visible]
            ),
            o.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', {
                    className: 'dumi-default-search-modal-mask',
                    onClick: o.onMaskClick,
                  }),
                  e.createElement(
                    'div',
                    { className: 'dumi-default-search-modal-content' },
                    o.children
                  )
                )
              : null
          )
        },
        ie
      function ce(u, o) {
        return he(u) || je(u, o) || me(u, o) || se()
      }
      function se() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function me(u, o) {
        if (u) {
          if (typeof u == 'string') return Le(u, o)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return Le(u, o)
        }
      }
      function Le(u, o) {
        ;(o == null || o > u.length) && (o = u.length)
        for (var c = 0, Y = new Array(o); c < o; c++) Y[c] = u[c]
        return Y
      }
      function je(u, o) {
        var c =
          u == null
            ? null
            : (typeof Symbol != 'undefined' && u[Symbol.iterator]) ||
              u['@@iterator']
        if (c != null) {
          var Y = [],
            R = !0,
            K = !1,
            _,
            M
          try {
            for (
              c = c.call(u);
              !(R = (_ = c.next()).done) &&
              (Y.push(_.value), !(o && Y.length === o));
              R = !0
            );
          } catch (a) {
            ;(K = !0), (M = a)
          } finally {
            try {
              !R && c.return != null && c.return()
            } finally {
              if (K) throw M
            }
          }
          return Y
        }
      }
      function he(u) {
        if (Array.isArray(u)) return u
      }
      var Ie = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (ie = navigator) === null || ie === void 0
              ? void 0
              : ie.platform
            : ''
        ),
        Se = function (o) {
          return (
            ['TEXTAREA', 'INPUT'].includes(o.tagName) ||
            o.contentEditable === 'true'
          )
        },
        Ee = function () {
          var o = (0, e.useState)(!1),
            c = ce(o, 2),
            Y = c[0],
            R = c[1],
            K = (0, e.useRef)(null),
            _ = (0, e.useRef)(null),
            M = (0, e.useState)('\u2318'),
            a = ce(M, 2),
            s = a[0],
            ne = a[1],
            Me = (0, J.OO)(),
            de = Me.keywords,
            fe = Me.setKeywords,
            Te = Me.result,
            De = Me.loading,
            Ye = (0, e.useState)(!1),
            ze = ce(Ye, 2),
            be = ze[0],
            Oe = ze[1]
          return (
            (0, e.useEffect)(function () {
              Ie || ne('Ctrl')
              var ye = function (Ne) {
                if (
                  (((Ie ? Ne.metaKey : Ne.ctrlKey) && Ne.key === 'k') ||
                    (Ne.key === '/' && !Se(Ne.target))) &&
                  (Ne.preventDefault(), K.current)
                ) {
                  var xe = K.current.getBoundingClientRect(),
                    ke = xe.top,
                    Pe = xe.bottom,
                    Qe = xe.left,
                    Ue = xe.right,
                    He =
                      ke >= 0 &&
                      Qe >= 0 &&
                      Pe <= window.innerHeight &&
                      Ue <= window.innerWidth
                  He
                    ? K.current.focus()
                    : (fe(''),
                      Oe(!0),
                      setTimeout(function () {
                        var we
                        ;(we = _.current) === null ||
                          we === void 0 ||
                          we.focus()
                      }))
                }
                Ne.key === 'Escape' && (Ne.preventDefault(), Oe(!1))
              }
              return (
                document.addEventListener('keydown', ye),
                function () {
                  return document.removeEventListener('keydown', ye)
                }
              )
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(k, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(P, {
                onFocus: function () {
                  return R(!0)
                },
                onBlur: function () {
                  setTimeout(function () {
                    R(!1)
                  }, 1)
                },
                onChange: function (Ce) {
                  return fe(Ce)
                },
                ref: K,
              }),
              e.createElement(
                'span',
                { className: 'dumi-default-search-shortcut' },
                s,
                ' K'
              ),
              de.trim() &&
                Y &&
                (Te.length || !De) &&
                !be &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement(
                    'section',
                    null,
                    e.createElement(te, { data: Te, loading: De })
                  )
                ),
              e.createElement(
                G,
                {
                  visible: be,
                  onMaskClick: function () {
                    Oe(!1)
                  },
                  onClose: function () {
                    return fe('')
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(k, {
                    className: 'dumi-default-search-bar-svg',
                  }),
                  e.createElement(P, {
                    onFocus: function () {
                      return R(!0)
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        R(!1)
                      }, 1)
                    },
                    onChange: function (Ce) {
                      return fe(Ce)
                    },
                    ref: _,
                  })
                ),
                e.createElement(te, {
                  data: Te,
                  loading: De,
                  onItemSelect: function () {
                    Oe(!1)
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(h, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        })
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(z, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        })
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to navigate'
                      )
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        'esc'
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to close'
                      )
                    )
                  )
                )
              )
            )
          )
        },
        pe = Ee
    },
    11136: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return d
        },
      })
      var e = n(19393),
        g = n(26687),
        m = n(67294),
        p = function () {
          var S = (0, e.TH)(),
            z = S.pathname,
            O = (0, e.eL)(),
            w = (0, e.tx)()
          return w
            ? m.createElement(
                'div',
                { className: 'dumi-default-sidebar' },
                w.map(function (C, X) {
                  return m.createElement(
                    'dl',
                    { className: 'dumi-default-sidebar-group', key: String(X) },
                    C.title && m.createElement('dt', null, C.title),
                    C.children.map(function (W) {
                      return m.createElement(
                        'dd',
                        { key: W.link },
                        m.createElement(
                          e.OL,
                          { to: W.link, title: W.title, end: !0 },
                          W.title
                        ),
                        W.link === z &&
                          O.frontmatter.toc === 'menu' &&
                          m.createElement(g.Z, null)
                      )
                    })
                  )
                })
              )
            : null
        },
        d = p
    },
    5876: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return _
        },
      })
      var e = n(67294),
        g = Object.defineProperty,
        m = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        E = (M, a, s) =>
          a in M
            ? g(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        S = (M, a) => {
          for (var s in a || (a = {})) p.call(a, s) && E(M, s, a[s])
          if (m) for (var s of m(a)) d.call(a, s) && E(M, s, a[s])
          return M
        }
      const z = (M) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          })
        )
      var O =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        w = Object.defineProperty,
        C = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        W = Object.prototype.propertyIsEnumerable,
        j = (M, a, s) =>
          a in M
            ? w(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        v = (M, a) => {
          for (var s in a || (a = {})) X.call(a, s) && j(M, s, a[s])
          if (C) for (var s of C(a)) W.call(a, s) && j(M, s, a[s])
          return M
        }
      const h = (M) =>
        e.createElement(
          'svg',
          v({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          })
        )
      var D =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+',
        Z = Object.defineProperty,
        H = Object.getOwnPropertySymbols,
        q = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        I = (M, a, s) =>
          a in M
            ? Z(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        N = (M, a) => {
          for (var s in a || (a = {})) q.call(a, s) && I(M, s, a[s])
          if (H) for (var s of H(a)) A.call(a, s) && I(M, s, a[s])
          return M
        }
      const k = (M) =>
        e.createElement(
          'svg',
          N({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          })
        )
      var F =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        J = Object.defineProperty,
        re = Object.getOwnPropertySymbols,
        ae = Object.prototype.hasOwnProperty,
        oe = Object.prototype.propertyIsEnumerable,
        ue = (M, a, s) =>
          a in M
            ? J(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        ge = (M, a) => {
          for (var s in a || (a = {})) ae.call(a, s) && ue(M, s, a[s])
          if (re) for (var s of re(a)) oe.call(a, s) && ue(M, s, a[s])
          return M
        }
      const Ae = (M) =>
        e.createElement(
          'svg',
          ge({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          })
        )
      var ve =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        T = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable,
        l = (M, a, s) =>
          a in M
            ? T(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        x = (M, a) => {
          for (var s in a || (a = {})) t.call(a, s) && l(M, s, a[s])
          if (i) for (var s of i(a)) r.call(a, s) && l(M, s, a[s])
          return M
        }
      const y = (M) =>
        e.createElement(
          'svg',
          x({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
          })
        )
      var Q =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=',
        V = Object.defineProperty,
        ee = Object.getOwnPropertySymbols,
        $ = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        B = (M, a, s) =>
          a in M
            ? V(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        le = (M, a) => {
          for (var s in a || (a = {})) $.call(a, s) && B(M, s, a[s])
          if (ee) for (var s of ee(a)) b.call(a, s) && B(M, s, a[s])
          return M
        }
      const U = (M) =>
        e.createElement(
          'svg',
          le({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          })
        )
      var te =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        P = Object.defineProperty,
        G = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        ce = Object.prototype.propertyIsEnumerable,
        se = (M, a, s) =>
          a in M
            ? P(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        me = (M, a) => {
          for (var s in a || (a = {})) ie.call(a, s) && se(M, s, a[s])
          if (G) for (var s of G(a)) ce.call(a, s) && se(M, s, a[s])
          return M
        }
      const Le = (M) =>
        e.createElement(
          'svg',
          me({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          })
        )
      var je =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        he = Object.defineProperty,
        Ie = Object.getOwnPropertySymbols,
        Se = Object.prototype.hasOwnProperty,
        Ee = Object.prototype.propertyIsEnumerable,
        pe = (M, a, s) =>
          a in M
            ? he(M, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (M[a] = s),
        u = (M, a) => {
          for (var s in a || (a = {})) Se.call(a, s) && pe(M, s, a[s])
          if (Ie) for (var s of Ie(a)) Ee.call(a, s) && pe(M, s, a[s])
          return M
        }
      const o = (M) =>
        e.createElement(
          'svg',
          u({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          })
        )
      var c =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        Y = n(86896),
        R = {
          github: h,
          weibo: U,
          twitter: y,
          gitlab: k,
          facebook: z,
          zhihu: o,
          yuque: Le,
          linkedin: Ae,
        },
        K = function (a) {
          var s = a.icon,
            ne = a.link,
            Me = (0, Y.Z)(),
            de = (0, e.useMemo)(
              function () {
                return { Icon: R[s], link: ne }
              },
              [s, ne]
            )
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': Me.formatMessage({
                id: 'header.social.'.concat(s),
              }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: de.link,
              rel: 'noreferrer',
            },
            e.createElement(de.Icon, null)
          )
        },
        _ = K
    },
    28737: function (f, L, n) {
      'use strict'
      n.d(L, {
        Z: function () {
          return ve
        },
      })
      var e = n(19632),
        g = n.n(e),
        m = n(5574),
        p = n.n(m),
        d = n(67294),
        E = n(12444),
        S = n.n(E),
        z = n(72004),
        O = n.n(z),
        w = n(25098),
        C = n.n(w),
        X = n(31996),
        W = n.n(X),
        j = n(26037),
        v = n.n(j),
        h = n(9783),
        D = n.n(h),
        Z = O()(function T() {
          S()(this, T)
        }),
        H = (function (T) {
          W()(t, T)
          var i = v()(t)
          function t(r) {
            var l
            return (
              S()(this, t),
              (l = i.call(this)),
              D()(C()(l), 'el', void 0),
              (l.el = r),
              l
            )
          }
          return (
            O()(
              t,
              [
                {
                  key: 'top',
                  get: function () {
                    return this.el.getBoundingClientRect().top
                  },
                },
                {
                  key: 'outerHeight',
                  get: function () {
                    return this.el.getBoundingClientRect().height
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return this.el.scrollTop
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return this.el.scrollHeight
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return (
                      this.scrollTop + this.outerHeight >= this.scrollHeight
                    )
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (l) {
                    this.el.addEventListener('scroll', l)
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (l) {
                    this.el.removeEventListener('scroll', l)
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (l) {
                    var x = document.querySelector(l)
                    if (!x) throw new Error('element is not found.')
                    return new t(x)
                  },
                },
              ]
            ),
            t
          )
        })(Z),
        q = (function (T) {
          W()(t, T)
          var i = v()(t)
          function t() {
            return S()(this, t), i.apply(this, arguments)
          }
          return (
            O()(
              t,
              [
                {
                  key: 'outerHeight',
                  get: function () {
                    return window.innerHeight
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return document.documentElement.scrollTop
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return document.documentElement.scrollHeight
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return (
                      this.scrollTop + this.outerHeight >= this.scrollHeight
                    )
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (l) {
                    document.addEventListener('scroll', l)
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (l) {
                    document.removeEventListener('scroll', l)
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return new t()
                  },
                },
              ]
            ),
            t
          )
        })(Z),
        A = (function () {
          function T() {
            S()(this, T)
          }
          return (
            O()(T, null, [
              {
                key: 'create',
                value: function (t) {
                  return t ? H.create(t) : q.create()
                },
              },
            ]),
            T
          )
        })(),
        I = function (i) {
          var t = i.sectionRefs,
            r = i.rootSelector,
            l = i.offset,
            x = l === void 0 ? 0 : l,
            y = (0, d.useRef)(null)
          ;(0, d.useEffect)(
            function () {
              y.current = A.create(r)
            },
            [r]
          )
          var Q = (0, d.useCallback)(
              function () {
                return y.current ? y.current.isScrolledToBottom() : !1
              },
              [y]
            ),
            V = (0, d.useCallback)(
              function (P) {
                if (!y.current) return !1
                var G = y.current.scrollTop,
                  ie = G + y.current.outerHeight,
                  ce = P.getBoundingClientRect(),
                  se =
                    y.current instanceof H
                      ? G + ce.top - y.current.top + x
                      : G + ce.top + x,
                  me = se + ce.height
                return [se < ie, me > G].every(function (Le) {
                  return Le
                })
              },
              [y, x]
            ),
            ee = (0, d.useCallback)(
              function () {
                return t.map(function (P) {
                  return P.current ? V(P.current) : !1
                })
              },
              [V, t]
            ),
            $ = (0, d.useState)([]),
            b = p()($, 2),
            B = b[0],
            le = b[1],
            U = (0, d.useMemo)(
              function () {
                return B.findIndex(function (P) {
                  return P
                })
              },
              [B]
            ),
            te = (0, d.useCallback)(
              function () {
                var P = Q()
                  ? [].concat(
                      g()(
                        new Array(t.length - 1).fill(!1).map(function (G) {
                          return G
                        })
                      ),
                      [!0]
                    )
                  : ee()
                le(P)
              },
              [ee, Q, t]
            )
          return (
            (0, d.useEffect)(
              function () {
                return (
                  te(),
                  y.current && y.current.registerScrollEvent(te),
                  function () {
                    y.current && y.current.unregisterScrollEvent(te)
                  }
                )
              },
              [te]
            ),
            { elementsStatusInViewport: B, currentElementIndexInViewport: U }
          )
        },
        N = function (i) {
          var t = i.children,
            r = i.sectionRefs,
            l = i.rootSelector,
            x = i.offset,
            y = I({ sectionRefs: r, rootSelector: l, offset: x }),
            Q = y.elementsStatusInViewport,
            V = y.currentElementIndexInViewport
          return t({
            elementsStatusInViewport: Q,
            currentElementIndexInViewport: V,
          })
        },
        k = n(19393)
      function F() {
        return (
          (F = Object.assign
            ? Object.assign.bind()
            : function (T) {
                for (var i = 1; i < arguments.length; i++) {
                  var t = arguments[i]
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (T[r] = t[r])
                }
                return T
              }),
          F.apply(this, arguments)
        )
      }
      function J(T, i) {
        return ge(T) || ue(T, i) || ae(T, i) || re()
      }
      function re() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function ae(T, i) {
        if (T) {
          if (typeof T == 'string') return oe(T, i)
          var t = Object.prototype.toString.call(T).slice(8, -1)
          if (
            (t === 'Object' && T.constructor && (t = T.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(T)
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return oe(T, i)
        }
      }
      function oe(T, i) {
        ;(i == null || i > T.length) && (i = T.length)
        for (var t = 0, r = new Array(i); t < i; t++) r[t] = T[t]
        return r
      }
      function ue(T, i) {
        var t =
          T == null
            ? null
            : (typeof Symbol != 'undefined' && T[Symbol.iterator]) ||
              T['@@iterator']
        if (t != null) {
          var r = [],
            l = !0,
            x = !1,
            y,
            Q
          try {
            for (
              t = t.call(T);
              !(l = (y = t.next()).done) &&
              (r.push(y.value), !(i && r.length === i));
              l = !0
            );
          } catch (V) {
            ;(x = !0), (Q = V)
          } finally {
            try {
              !l && t.return != null && t.return()
            } finally {
              if (x) throw Q
            }
          }
          return r
        }
      }
      function ge(T) {
        if (Array.isArray(T)) return T
      }
      var Ae = function () {
          var i = (0, k.TH)(),
            t = i.pathname,
            r = i.search,
            l = (0, k.eL)(),
            x = (0, k.zh)(),
            y = (0, k.WF)(),
            Q = y.loading,
            V = (0, d.useRef)(0),
            ee = (0, d.useState)([]),
            $ = J(ee, 2),
            b = $[0],
            B = $[1],
            le = d.useMemo(
              function () {
                var U = l.toc
                return (
                  x && (U = x.toc),
                  U.filter(function (te) {
                    var P = te.depth
                    return P > 1 && P < 4
                  })
                )
              },
              [l, x]
            )
          return (
            (0, d.useEffect)(
              function () {
                if (!Q) {
                  var U = le.map(function (te) {
                    var P = te.id
                    return { current: document.getElementById(P) }
                  })
                  B(U)
                }
              },
              [t, r, Q]
            ),
            b.length
              ? d.createElement(N, { sectionRefs: b }, function (U) {
                  var te = U.currentElementIndexInViewport
                  return (
                    te > -1 && (V.current = te),
                    d.createElement(
                      'ul',
                      { className: 'dumi-default-toc' },
                      le
                        .filter(function (P) {
                          var G = P.depth
                          return G > 1 && G < 4
                        })
                        .map(function (P, G) {
                          var ie = ''
                              .concat(r, '#')
                              .concat(encodeURIComponent(P.id)),
                            ce = te > -1 ? te : V.current
                          return d.createElement(
                            'li',
                            { key: P.id, 'data-depth': P.depth },
                            d.createElement(
                              k.rU,
                              F(
                                { to: ie, title: P.title },
                                ce === G ? { className: 'active' } : {}
                              ),
                              P.title
                            )
                          )
                        })
                    )
                  )
                })
              : null
          )
        },
        ve = Ae
    },
    96446: function (f, L, n) {
      var e = n(37923)
      function g(m) {
        if (Array.isArray(m)) return e(m)
      }
      ;(f.exports = g),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    25098: function (f) {
      function L(n) {
        if (n === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return n
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    12444: function (f) {
      function L(n, e) {
        if (!(n instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    72004: function (f, L, n) {
      var e = n(51883)
      function g(p, d) {
        for (var E = 0; E < d.length; E++) {
          var S = d[E]
          ;(S.enumerable = S.enumerable || !1),
            (S.configurable = !0),
            'value' in S && (S.writable = !0),
            Object.defineProperty(p, e(S.key), S)
        }
      }
      function m(p, d, E) {
        return (
          d && g(p.prototype, d),
          E && g(p, E),
          Object.defineProperty(p, 'prototype', { writable: !1 }),
          p
        )
      }
      ;(f.exports = m),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    26037: function (f, L, n) {
      var e = n(48374),
        g = n(21771),
        m = n(73408)
      function p(d) {
        var E = g()
        return function () {
          var z = e(d),
            O
          if (E) {
            var w = e(this).constructor
            O = Reflect.construct(z, arguments, w)
          } else O = z.apply(this, arguments)
          return m(this, O)
        }
      }
      ;(f.exports = p),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    48374: function (f) {
      function L(n) {
        return (
          (f.exports = L =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (g) {
                  return g.__proto__ || Object.getPrototypeOf(g)
                }),
          (f.exports.__esModule = !0),
          (f.exports.default = f.exports),
          L(n)
        )
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    31996: function (f, L, n) {
      var e = n(21314)
      function g(m, p) {
        if (typeof p != 'function' && p !== null)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(m.prototype = Object.create(p && p.prototype, {
          constructor: { value: m, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(m, 'prototype', { writable: !1 }),
          p && e(m, p)
      }
      ;(f.exports = g),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    21771: function (f) {
      function L() {
        if (
          typeof Reflect == 'undefined' ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1
        if (typeof Proxy == 'function') return !0
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          )
        } catch (n) {
          return !1
        }
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    96936: function (f) {
      function L(n) {
        if (
          (typeof Symbol != 'undefined' && n[Symbol.iterator] != null) ||
          n['@@iterator'] != null
        )
          return Array.from(n)
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    88619: function (f) {
      function L() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    73408: function (f, L, n) {
      var e = n(52677).default,
        g = n(25098)
      function m(p, d) {
        if (d && (e(d) === 'object' || typeof d == 'function')) return d
        if (d !== void 0)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return g(p)
      }
      ;(f.exports = m),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    21314: function (f) {
      function L(n, e) {
        return (
          (f.exports = L =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (m, p) {
                  return (m.__proto__ = p), m
                }),
          (f.exports.__esModule = !0),
          (f.exports.default = f.exports),
          L(n, e)
        )
      }
      ;(f.exports = L),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
    19632: function (f, L, n) {
      var e = n(96446),
        g = n(96936),
        m = n(96263),
        p = n(88619)
      function d(E) {
        return e(E) || g(E) || m(E) || p()
      }
      ;(f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports)
    },
  },
])
