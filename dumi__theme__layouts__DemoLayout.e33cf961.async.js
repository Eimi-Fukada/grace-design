;(self.webpackChunkgrace_design = self.webpackChunkgrace_design || []).push([
  [252],
  {
    52343: function (E, o, e) {
      'use strict'
      e.r(o),
        e.d(o, {
          ROUTE_MSG_TYPE: function () {
            return R
          },
          default: function () {
            return V
          },
        })
      var y = e(19393),
        S = e(27833),
        d = e.n(S),
        b = e(67294),
        u = e(76174),
        f = e.n(u),
        h = e(82737),
        n = e.n(h),
        i = e(10597),
        r = e.n(i),
        s = e(73843),
        a = e.n(s)
      function c(t) {
        return A(t) || v(t) || C(t) || m()
      }
      function m() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function v(t) {
        if (
          (typeof Symbol != 'undefined' && t[Symbol.iterator] != null) ||
          t['@@iterator'] != null
        )
          return Array.from(t)
      }
      function A(t) {
        if (Array.isArray(t)) return I(t)
      }
      function x(t, p) {
        return H(t) || D(t, p) || C(t, p) || g()
      }
      function g() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function C(t, p) {
        if (t) {
          if (typeof t == 'string') return I(t, p)
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
            return I(t, p)
        }
      }
      function I(t, p) {
        ;(p == null || p > t.length) && (p = t.length)
        for (var l = 0, T = new Array(p); l < p; l++) T[l] = t[l]
        return T
      }
      function D(t, p) {
        var l =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) ||
              t['@@iterator']
        if (l != null) {
          var T = [],
            z = !0,
            W = !1,
            L,
            U
          try {
            for (
              l = l.call(t);
              !(z = (L = l.next()).done) &&
              (T.push(L.value), !(p && T.length === p));
              z = !0
            );
          } catch (F) {
            ;(W = !0), (U = F)
          } finally {
            try {
              !z && l.return != null && l.return()
            } finally {
              if (W) throw U
            }
          }
          return T
        }
      }
      function H(t) {
        if (Array.isArray(t)) return t
      }
      function K(t) {
        if (t == null) throw new TypeError('Cannot destructure undefined')
      }
      var R = 'dumi:update-iframe-route',
        N = { vl: f(), flex: n(), vw: a(), vh: r() },
        Y = function (p) {
          K(p)
          var l = (0, b.useRef)(null),
            T = (0, y.WF)(),
            z = T.themeConfig.hd
          z = z === void 0 ? {} : z
          var W = z.rules,
            L = W === void 0 ? [{ mode: 'vw', options: [100, 750] }] : W,
            U = (0, y.pC)(),
            F = (0, y.lr)(),
            $ = x(F, 1),
            P = $[0],
            O = P.get('compact'),
            k = P.get('background')
          return (
            (0, b.useEffect)(function () {
              l.current &&
                !('ontouchstart' in window) &&
                d()(document.documentElement)
            }, []),
            (0, b.useEffect)(
              function () {
                var M = function () {
                  var j = document.documentElement.clientWidth
                  L.filter(function (w) {
                    return N[w.mode]
                  }).some(function (w) {
                    return (
                      ((Number.isNaN(w.minWidth * 1) &&
                        Number.isNaN(w.maxWidth * 1)) ||
                        (Number.isNaN(w.maxWidth * 1) && j > w.minWidth) ||
                        (Number.isNaN(w.minWidth * 1) && j < w.maxWidth) ||
                        (j > w.minWidth && j < w.maxWidth)) &&
                        (N[w.mode].apply(N, c([].concat(w.options))),
                        document.documentElement.setAttribute(
                          'data-scale',
                          'true'
                        )),
                      !0
                    )
                  })
                }
                return (
                  M(),
                  window.addEventListener('resize', M),
                  function () {
                    return window.removeEventListener('resize', M)
                  }
                )
              },
              [L]
            ),
            b.createElement(
              'div',
              {
                className: 'dumi-mobile-demo-layout',
                ref: l,
                style: { padding: O !== null ? 0 : O, background: k },
                'data-html2sketch-container': !0,
              },
              U
            )
          )
        },
        V = Y
    },
    27833: function (E) {
      ;(function (o, e) {
        E.exports = e()
      })(this, function () {
        'use strict'
        var o,
          e = function (i, r, s, a, c) {
            ;(a = a || 0),
              (c = c || 0),
              (this.identifier = r),
              (this.target = i),
              (this.clientX = s.clientX + a),
              (this.clientY = s.clientY + c),
              (this.screenX = s.screenX + a),
              (this.screenY = s.screenY + c),
              (this.pageX = s.pageX + a),
              (this.pageY = s.pageY + c)
          }
        function y() {
          var n = []
          return (
            (n.item = function (r) {
              return this[r] || null
            }),
            (n.identifiedTouch = function (r) {
              return this[r + 1] || null
            }),
            n
          )
        }
        function S() {
          for (
            var n = [window, document.documentElement],
              i = [
                'ontouchstart',
                'ontouchmove',
                'ontouchcancel',
                'ontouchend',
              ],
              r = 0;
            r < n.length;
            r++
          )
            for (var s = 0; s < i.length; s++)
              n[r] && n[r][i[s]] === void 0 && (n[r][i[s]] = null)
        }
        function d(n) {
          return function (i) {
            i.which === 1 &&
              ((i.type === 'mousedown' || !o || (o && !o.dispatchEvent)) &&
                (o = i.target),
              b(n, i),
              i.type === 'mouseup' && (o = null))
          }
        }
        function b(n, i) {
          var r = document.createEvent('Event')
          r.initEvent(n, !0, !0),
            (r.altKey = i.altKey),
            (r.ctrlKey = i.ctrlKey),
            (r.metaKey = i.metaKey),
            (r.shiftKey = i.shiftKey),
            (r.touches = f(i)),
            (r.targetTouches = f(i)),
            (r.changedTouches = u(i)),
            o.dispatchEvent(r)
        }
        function u(n) {
          var i = y()
          return i.push(new e(o, 1, n, 0, 0)), i
        }
        function f(n) {
          return n.type === 'mouseup' ? y() : u(n)
        }
        function h(n) {
          S(),
            n.addEventListener('mousedown', d('touchstart'), !0),
            n.addEventListener('mousemove', d('touchmove'), !0),
            n.addEventListener('mouseup', d('touchend'), !0)
        }
        return (h.multiTouchOffset = 75), h
      })
    },
    82737: function (E, o) {
      'use strict'
      Object.defineProperty(o, '__esModule', { value: !0 })
      var e = window
      ;(o.default = e.flex =
        function (y, S) {
          var d = y || 100,
            b = S || 1,
            u = e.document,
            f = navigator.userAgent,
            h = f.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            n = f.match(/U3\/((\d+|\.){5,})/i),
            i = n && parseInt(n[1].split('.').join(''), 10) >= 80,
            r = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            s = e.devicePixelRatio || 1
          !r && !(h && h[1] > 534) && !i && (s = 1)
          var a = 1 / s,
            c = u.querySelector('meta[name="viewport"]')
          c ||
            ((c = u.createElement('meta')),
            c.setAttribute('name', 'viewport'),
            u.head.appendChild(c)),
            c.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=' +
                a +
                ',maximum-scale=' +
                a +
                ',minimum-scale=' +
                a +
                ',viewport-fit=cover'
            ),
            (u.documentElement.style.fontSize = (d / 2) * s * b + 'px')
        }),
        (E.exports = o.default)
    },
    10597: function (E, o) {
      'use strict'
      Object.defineProperty(o, '__esModule', { value: !0 })
      var e = window
      ;(o.default = e.vh =
        function (y, S) {
          var d = y || 100,
            b = S || 1270,
            u = e.document,
            f = navigator.userAgent,
            h = f.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            n = f.match(/U3\/((\d+|\.){5,})/i),
            i = n && parseInt(n[1].split('.').join(''), 10) >= 80,
            r = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            s = e.devicePixelRatio || 1,
            a = u.documentElement,
            c = 1,
            m = 1 / s
          if (!r)
            if ((h && h[1] > 534) || i) {
              a.style.fontSize = d + 'px'
              var v = u.createElement('div')
              v.setAttribute('style', 'width: 1rem;display:none'),
                a.appendChild(v)
              var A = e.getComputedStyle(v).width
              if ((a.removeChild(v), A !== a.style.fontSize)) {
                var x = parseInt(A, 10)
                ;(c = d / x), (m = m * c)
              }
            } else m = 1
          var g = u.querySelector('meta[name="viewport"]')
          g ||
            ((g = u.createElement('meta')),
            g.setAttribute('name', 'viewport'),
            u.head.appendChild(g)),
            g.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=' +
                m +
                ',maximum-scale=' +
                m +
                ',minimum-scale=' +
                m +
                ',viewport-fit=cover'
            )
          var C = function () {
            a.style.fontSize = (d / b) * a.clientHeight * c + 'px'
          }
          C(), e.addEventListener('resize', C)
        }),
        (E.exports = o.default)
    },
    76174: function (E, o) {
      'use strict'
      Object.defineProperty(o, '__esModule', { value: !0 })
      var e = window
      ;(o.default = e.vl =
        function (y, S) {
          var d = y || 100,
            b = S || 750,
            u = e.document,
            f = navigator.userAgent,
            h = f.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            n = f.match(/U3\/((\d+|\.){5,})/i),
            i = n && parseInt(n[1].split('.').join(''), 10) >= 80,
            r = u.documentElement,
            s = 1
          if ((h && h[1] > 534) || i) {
            r.style.fontSize = d + 'px'
            var a = u.createElement('div')
            a.setAttribute('style', 'width: 1rem;display:none'),
              r.appendChild(a)
            var c = e.getComputedStyle(a).width
            if ((r.removeChild(a), c !== r.style.fontSize)) {
              var m = parseInt(c, 10)
              s = d / m
            }
          }
          var v = u.querySelector('meta[name="viewport"]')
          v ||
            ((v = u.createElement('meta')),
            v.setAttribute('name', 'viewport'),
            u.head.appendChild(v)),
            v.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1'
            )
          var A = function () {
            r.style.fontSize = (d / b) * r.clientWidth * s + 'px'
          }
          A(), e.addEventListener('resize', A)
        }),
        (E.exports = o.default)
    },
    73843: function (E, o) {
      'use strict'
      Object.defineProperty(o, '__esModule', { value: !0 })
      var e = window
      ;(o.default = e.vw =
        function (y, S) {
          var d = y || 100,
            b = S || 750,
            u = e.document,
            f = navigator.userAgent,
            h = f.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            n = f.match(/U3\/((\d+|\.){5,})/i),
            i = n && parseInt(n[1].split('.').join(''), 10) >= 80,
            r = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            s = e.devicePixelRatio || 1,
            a = u.documentElement,
            c = 1,
            m = 1 / s
          if (!r)
            if ((h && h[1] > 534) || i) {
              a.style.fontSize = d + 'px'
              var v = u.createElement('div')
              v.setAttribute('style', 'width: 1rem;display:none'),
                a.appendChild(v)
              var A = e.getComputedStyle(v).width
              if ((a.removeChild(v), A !== a.style.fontSize)) {
                var x = parseInt(A, 10)
                ;(c = d / x), (m = m * c)
              }
            } else m = 1
          var g = u.querySelector('meta[name="viewport"]')
          g ||
            ((g = u.createElement('meta')),
            g.setAttribute('name', 'viewport'),
            u.head.appendChild(g)),
            g.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=' +
                m +
                ',maximum-scale=' +
                m +
                ',minimum-scale=' +
                m +
                ',viewport-fit=cover'
            )
          var C = function () {
            a.style.fontSize = (d / b) * a.clientWidth * c + 'px'
          }
          C(), e.addEventListener('resize', C)
        }),
        (E.exports = o.default)
    },
  },
])
