'use strict'
;(self.webpackChunkgrace_design = self.webpackChunkgrace_design || []).push([
  [458],
  {
    34576: function (D, o, e) {
      e.r(o),
        e.d(o, {
          default: function () {
            return E
          },
        })
      var l = e(5574),
        c = e.n(l),
        t = e(67294),
        n = e(19393),
        d = e(64236),
        s = e(92205),
        u = e(90482),
        m = e(85893),
        g = {}
      function E() {
        var h = (0, n.pC)(),
          p = (0, t.useState)(!0),
          i = c()(p, 2),
          v = i[0],
          r = i[1],
          a = (0, t.useRef)(n.m8.location.pathname)
        return (
          (0, t.useEffect)(function () {
            return n.m8.listen(function (_) {
              _.location.pathname !== a.current &&
                ((a.current = _.location.pathname),
                r(!0),
                document.documentElement.scrollTo(0, 0))
            })
          }, []),
          (0, m.jsx)(d.D.Provider, {
            value: {
              pkg: {
                name: 'grace-design',
                description: 'grace-design with react',
                version: '1.0.0',
                license: 'MIT',
                author: 'Grace',
                authors: ['Grace'],
              },
              historyType: 'browser',
              entryExports: g,
              demos: s.DE,
              components: s.wx,
              locales: u.k,
              loading: v,
              setLoading: r,
              themeConfig: {
                title: 'Grace Design',
                footer: 'Copyright \xA9 2023-present Grace',
                prefersColor: { default: 'light', switch: !0 },
                name: 'Grace Design',
                logo: '/grace-design/componentlogo.svg',
                nav: [
                  { title: '\u7EC4\u4EF6', link: '/components/button' },
                  { title: '\u8D21\u732E\u8005', link: '/resources' },
                  {
                    title: '\u53D1\u5E03\u65E5\u5FD7',
                    link: 'https://github.com/',
                  },
                ],
                sidebar: {
                  '/components': [
                    {
                      title: '\u57FA\u7840\u7EC4\u4EF6',
                      children: [
                        {
                          title: 'Button \u6309\u94AE',
                          link: '/components/button',
                        },
                        {
                          title: 'Space \u95F4\u8DDD',
                          link: '/components/space',
                        },
                      ],
                    },
                    {
                      title: '\u89C6\u56FE\u7EC4\u4EF6',
                      children: [
                        {
                          title: 'Avatar \u5934\u50CF',
                          link: '/components/avatar',
                        },
                      ],
                    },
                  ],
                },
                socialLinks: { github: 'https://github.com/' },
                hd: {
                  rules: [
                    { maxWidth: 375, mode: 'vw', options: [100, 750] },
                    {
                      minWidth: 376,
                      maxWidth: 750,
                      mode: 'vw',
                      options: [100, 1500],
                    },
                  ],
                },
                deviceWidth: 375,
              },
            },
            children: h,
          })
        )
      }
    },
  },
])
