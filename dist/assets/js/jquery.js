/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? n[i.call(e)] || "object"
        : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                            ? n
                            : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
            ? e.documentElement.textContent
            : 3 === i || 4 === i
              ? e.nodeValue
              : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      },
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                    ? 1
                    : o
                      ? se.call(o, e) - se.call(o, t)
                      : 0
                : 4 & n
                  ? -1
                  : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                        ? t !== i
                        : "^=" === r
                          ? i && 0 === t.indexOf(i)
                          : "*=" === r
                            ? i && -1 < t.indexOf(i)
                            : "$=" === r
                              ? i && t.slice(-i.length) === i
                              : "~=" === r
                                ? -1 <
                                  (" " + t.replace(v, " ") + " ").indexOf(i)
                                : "|=" === r &&
                                  (t === i ||
                                    t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? F(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else
            (s = Z(s === t ? s.splice(c, s.length) : s)),
              y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0,
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0,
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" }),
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e),
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r),
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t,
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? ce.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
          ? ce.grep(e, function (e) {
              return -1 < se.call(n, e) !== r;
            })
          : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1,
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0),
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(ce)
        : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      },
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith),
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock,
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
                ? [t]
                : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                  ? +i
                  : X.test(i)
                    ? JSON.parse(i)
                    : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                      ? t
                      : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = ce.queue(this, t, n);
                  ce._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o,
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp,
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e);
          (n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n);
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      (ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          (e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return He(this, r), !0;
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i));
          },
        });
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      },
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l,
                  )
                : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n,
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      },
    );
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5,
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt);
    }),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t,
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing,
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = ce.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      },
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++)
                    (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
            ? (e = kt(t)).length
              ? this.each(function () {
                  if (
                    ((r = Ct(this)),
                    (n = 1 === this.nodeType && " " + Tt(r) + " "))
                  ) {
                    for (o = 0; o < e.length; o++) {
                      i = e[o];
                      while (-1 < n.indexOf(" " + i + " "))
                        n = n.replace(" " + i + " ", " ");
                    }
                    (a = Tt(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this
            : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
            ? n
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = kt(t)),
              this.each(function () {
                if (s)
                  for (o = ce(this), i = 0; i < e.length; i++)
                    (r = e[i]),
                      o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                  (void 0 !== t && "boolean" !== a) ||
                    ((r = Ct(this)) && _.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || !1 === t ? "" : _.get(this, "__className__") || "",
                      ));
              }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = ce.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
          ? (r =
              ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
              ? e.replace(St, "")
              : null == e
                ? ""
                : e
          : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e),
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i,
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? ce.map(n, function (e) {
                    return { name: t.name, value: e.replace(Lt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//",
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"],
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Yt[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                }),
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length,
          );
        };
      },
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return M(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a],
                      ))
                    : void 0 === n
                      ? ce.css(e, t, i)
                      : ce.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
            );
          };
        },
      );
    }),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      },
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});
/* flatpickr v4.6.13,, @license MIT */
!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
      ? define(n)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).flatpickr =
          n());
})(this, function () {
  "use strict";
  var e = function () {
    return (e =
      Object.assign ||
      function (e) {
        for (var n, t = 1, a = arguments.length; t < a; t++)
          for (var i in (n = arguments[t]))
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
  };
  function n() {
    for (var e = 0, n = 0, t = arguments.length; n < t; n++)
      e += arguments[n].length;
    var a = Array(e),
      i = 0;
    for (n = 0; n < t; n++)
      for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++)
        a[i] = o[r];
    return a;
  }
  var t = [
      "onChange",
      "onClose",
      "onDayCreate",
      "onDestroy",
      "onKeyDown",
      "onMonthChange",
      "onOpen",
      "onParseConfig",
      "onReady",
      "onValueUpdate",
      "onYearChange",
      "onPreCalendarPosition",
    ],
    a = {
      _disable: [],
      allowInput: !1,
      allowInvalidPreload: !1,
      altFormat: "F j, Y",
      altInput: !1,
      altInputClass: "form-control input",
      animate:
        "object" == typeof window &&
        -1 === window.navigator.userAgent.indexOf("MSIE"),
      ariaDateFormat: "F j, Y",
      autoFillDefaultTime: !0,
      clickOpens: !0,
      closeOnSelect: !0,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: !1,
      enableSeconds: !1,
      enableTime: !1,
      errorHandler: function (e) {
        return "undefined" != typeof console && console.warn(e);
      },
      getWeek: function (e) {
        var n = new Date(e.getTime());
        n.setHours(0, 0, 0, 0),
          n.setDate(n.getDate() + 3 - ((n.getDay() + 6) % 7));
        var t = new Date(n.getFullYear(), 0, 4);
        return (
          1 +
          Math.round(
            ((n.getTime() - t.getTime()) / 864e5 - 3 + ((t.getDay() + 6) % 7)) /
              7,
          )
        );
      },
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: !1,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      monthSelectorType: "dropdown",
      nextArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: !1,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: void 0,
      prevArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: !1,
      showMonths: 1,
      static: !1,
      time_24hr: !1,
      weekNumbers: !1,
      wrap: !1,
    },
    i = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function (e) {
        var n = e % 100;
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      monthAriaLabel: "Month",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: !1,
    },
    o = function (e, n) {
      return void 0 === n && (n = 2), ("000" + e).slice(-1 * n);
    },
    r = function (e) {
      return !0 === e ? 1 : 0;
    };
  function l(e, n) {
    var t;
    return function () {
      var a = this,
        i = arguments;
      clearTimeout(t),
        (t = setTimeout(function () {
          return e.apply(a, i);
        }, n));
    };
  }
  var c = function (e) {
    return e instanceof Array ? e : [e];
  };
  function s(e, n, t) {
    if (!0 === t) return e.classList.add(n);
    e.classList.remove(n);
  }
  function d(e, n, t) {
    var a = window.document.createElement(e);
    return (
      (n = n || ""),
      (t = t || ""),
      (a.className = n),
      void 0 !== t && (a.textContent = t),
      a
    );
  }
  function u(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  function f(e, n) {
    return n(e) ? e : e.parentNode ? f(e.parentNode, n) : void 0;
  }
  function m(e, n) {
    var t = d("div", "numInputWrapper"),
      a = d("input", "numInput " + e),
      i = d("span", "arrowUp"),
      o = d("span", "arrowDown");
    if (
      (-1 === navigator.userAgent.indexOf("MSIE 9.0")
        ? (a.type = "number")
        : ((a.type = "text"), (a.pattern = "\\d*")),
      void 0 !== n)
    )
      for (var r in n) a.setAttribute(r, n[r]);
    return t.appendChild(a), t.appendChild(i), t.appendChild(o), t;
  }
  function g(e) {
    try {
      return "function" == typeof e.composedPath
        ? e.composedPath()[0]
        : e.target;
    } catch (n) {
      return e.target;
    }
  }
  var p = function () {},
    h = function (e, n, t) {
      return t.months[n ? "shorthand" : "longhand"][e];
    },
    v = {
      D: p,
      F: function (e, n, t) {
        e.setMonth(t.months.longhand.indexOf(n));
      },
      G: function (e, n) {
        e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
      },
      H: function (e, n) {
        e.setHours(parseFloat(n));
      },
      J: function (e, n) {
        e.setDate(parseFloat(n));
      },
      K: function (e, n, t) {
        e.setHours(
          (e.getHours() % 12) + 12 * r(new RegExp(t.amPM[1], "i").test(n)),
        );
      },
      M: function (e, n, t) {
        e.setMonth(t.months.shorthand.indexOf(n));
      },
      S: function (e, n) {
        e.setSeconds(parseFloat(n));
      },
      U: function (e, n) {
        return new Date(1e3 * parseFloat(n));
      },
      W: function (e, n, t) {
        var a = parseInt(n),
          i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
        return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i;
      },
      Y: function (e, n) {
        e.setFullYear(parseFloat(n));
      },
      Z: function (e, n) {
        return new Date(n);
      },
      d: function (e, n) {
        e.setDate(parseFloat(n));
      },
      h: function (e, n) {
        e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
      },
      i: function (e, n) {
        e.setMinutes(parseFloat(n));
      },
      j: function (e, n) {
        e.setDate(parseFloat(n));
      },
      l: p,
      m: function (e, n) {
        e.setMonth(parseFloat(n) - 1);
      },
      n: function (e, n) {
        e.setMonth(parseFloat(n) - 1);
      },
      s: function (e, n) {
        e.setSeconds(parseFloat(n));
      },
      u: function (e, n) {
        return new Date(parseFloat(n));
      },
      w: p,
      y: function (e, n) {
        e.setFullYear(2e3 + parseFloat(n));
      },
    },
    D = {
      D: "",
      F: "",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      u: "(.+)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})",
    },
    w = {
      Z: function (e) {
        return e.toISOString();
      },
      D: function (e, n, t) {
        return n.weekdays.shorthand[w.w(e, n, t)];
      },
      F: function (e, n, t) {
        return h(w.n(e, n, t) - 1, !1, n);
      },
      G: function (e, n, t) {
        return o(w.h(e, n, t));
      },
      H: function (e) {
        return o(e.getHours());
      },
      J: function (e, n) {
        return void 0 !== n.ordinal
          ? e.getDate() + n.ordinal(e.getDate())
          : e.getDate();
      },
      K: function (e, n) {
        return n.amPM[r(e.getHours() > 11)];
      },
      M: function (e, n) {
        return h(e.getMonth(), !0, n);
      },
      S: function (e) {
        return o(e.getSeconds());
      },
      U: function (e) {
        return e.getTime() / 1e3;
      },
      W: function (e, n, t) {
        return t.getWeek(e);
      },
      Y: function (e) {
        return o(e.getFullYear(), 4);
      },
      d: function (e) {
        return o(e.getDate());
      },
      h: function (e) {
        return e.getHours() % 12 ? e.getHours() % 12 : 12;
      },
      i: function (e) {
        return o(e.getMinutes());
      },
      j: function (e) {
        return e.getDate();
      },
      l: function (e, n) {
        return n.weekdays.longhand[e.getDay()];
      },
      m: function (e) {
        return o(e.getMonth() + 1);
      },
      n: function (e) {
        return e.getMonth() + 1;
      },
      s: function (e) {
        return e.getSeconds();
      },
      u: function (e) {
        return e.getTime();
      },
      w: function (e) {
        return e.getDay();
      },
      y: function (e) {
        return String(e.getFullYear()).substring(2);
      },
    },
    b = function (e) {
      var n = e.config,
        t = void 0 === n ? a : n,
        o = e.l10n,
        r = void 0 === o ? i : o,
        l = e.isMobile,
        c = void 0 !== l && l;
      return function (e, n, a) {
        var i = a || r;
        return void 0 === t.formatDate || c
          ? n
              .split("")
              .map(function (n, a, o) {
                return w[n] && "\\" !== o[a - 1]
                  ? w[n](e, i, t)
                  : "\\" !== n
                    ? n
                    : "";
              })
              .join("")
          : t.formatDate(e, n, i);
      };
    },
    C = function (e) {
      var n = e.config,
        t = void 0 === n ? a : n,
        o = e.l10n,
        r = void 0 === o ? i : o;
      return function (e, n, i, o) {
        if (0 === e || e) {
          var l,
            c = o || r,
            s = e;
          if (e instanceof Date) l = new Date(e.getTime());
          else if ("string" != typeof e && void 0 !== e.toFixed)
            l = new Date(e);
          else if ("string" == typeof e) {
            var d = n || (t || a).dateFormat,
              u = String(e).trim();
            if ("today" === u) (l = new Date()), (i = !0);
            else if (t && t.parseDate) l = t.parseDate(e, d);
            else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
            else {
              for (
                var f = void 0, m = [], g = 0, p = 0, h = "";
                g < d.length;
                g++
              ) {
                var w = d[g],
                  b = "\\" === w,
                  C = "\\" === d[g - 1] || b;
                if (D[w] && !C) {
                  h += D[w];
                  var M = new RegExp(h).exec(e);
                  M &&
                    (f = !0) &&
                    m["Y" !== w ? "push" : "unshift"]({
                      fn: v[w],
                      val: M[++p],
                    });
                } else b || (h += ".");
              }
              (l =
                t && t.noCalendar
                  ? new Date(new Date().setHours(0, 0, 0, 0))
                  : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
                m.forEach(function (e) {
                  var n = e.fn,
                    t = e.val;
                  return (l = n(l, t, c) || l);
                }),
                (l = f ? l : void 0);
            }
          }
          if (l instanceof Date && !isNaN(l.getTime()))
            return !0 === i && l.setHours(0, 0, 0, 0), l;
          t.errorHandler(new Error("Invalid date provided: " + s));
        }
      };
    };
  function M(e, n, t) {
    return (
      void 0 === t && (t = !0),
      !1 !== t
        ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
          new Date(n.getTime()).setHours(0, 0, 0, 0)
        : e.getTime() - n.getTime()
    );
  }
  var y = function (e, n, t) {
      return 3600 * e + 60 * n + t;
    },
    x = 864e5;
  function E(e) {
    var n = e.defaultHour,
      t = e.defaultMinute,
      a = e.defaultSeconds;
    if (void 0 !== e.minDate) {
      var i = e.minDate.getHours(),
        o = e.minDate.getMinutes(),
        r = e.minDate.getSeconds();
      n < i && (n = i),
        n === i && t < o && (t = o),
        n === i && t === o && a < r && (a = e.minDate.getSeconds());
    }
    if (void 0 !== e.maxDate) {
      var l = e.maxDate.getHours(),
        c = e.maxDate.getMinutes();
      (n = Math.min(n, l)) === l && (t = Math.min(c, t)),
        n === l && t === c && (a = e.maxDate.getSeconds());
    }
    return { hours: n, minutes: t, seconds: a };
  }
  "function" != typeof Object.assign &&
    (Object.assign = function (e) {
      for (var n = [], t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
      if (!e) throw TypeError("Cannot convert undefined or null to object");
      for (
        var a = function (n) {
            n &&
              Object.keys(n).forEach(function (t) {
                return (e[t] = n[t]);
              });
          },
          i = 0,
          o = n;
        i < o.length;
        i++
      ) {
        var r = o[i];
        a(r);
      }
      return e;
    });
  function k(p, v) {
    var w = { config: e(e({}, a), I.defaultConfig), l10n: i };
    function k() {
      var e;
      return (
        (null === (e = w.calendarContainer) || void 0 === e
          ? void 0
          : e.getRootNode()
        ).activeElement || document.activeElement
      );
    }
    function T(e) {
      return e.bind(w);
    }
    function S() {
      var e = w.config;
      (!1 === e.weekNumbers && 1 === e.showMonths) ||
        (!0 !== e.noCalendar &&
          window.requestAnimationFrame(function () {
            if (
              (void 0 !== w.calendarContainer &&
                ((w.calendarContainer.style.visibility = "hidden"),
                (w.calendarContainer.style.display = "block")),
              void 0 !== w.daysContainer)
            ) {
              var n = (w.days.offsetWidth + 1) * e.showMonths;
              (w.daysContainer.style.width = n + "px"),
                (w.calendarContainer.style.width =
                  n +
                  (void 0 !== w.weekWrapper ? w.weekWrapper.offsetWidth : 0) +
                  "px"),
                w.calendarContainer.style.removeProperty("visibility"),
                w.calendarContainer.style.removeProperty("display");
            }
          }));
    }
    function _(e) {
      if (0 === w.selectedDates.length) {
        var n =
            void 0 === w.config.minDate || M(new Date(), w.config.minDate) >= 0
              ? new Date()
              : new Date(w.config.minDate.getTime()),
          t = E(w.config);
        n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()),
          (w.selectedDates = [n]),
          (w.latestSelectedDateObj = n);
      }
      void 0 !== e &&
        "blur" !== e.type &&
        (function (e) {
          e.preventDefault();
          var n = "keydown" === e.type,
            t = g(e),
            a = t;
          void 0 !== w.amPM &&
            t === w.amPM &&
            (w.amPM.textContent =
              w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]);
          var i = parseFloat(a.getAttribute("min")),
            l = parseFloat(a.getAttribute("max")),
            c = parseFloat(a.getAttribute("step")),
            s = parseInt(a.value, 10),
            d = e.delta || (n ? (38 === e.which ? 1 : -1) : 0),
            u = s + c * d;
          if (void 0 !== a.value && 2 === a.value.length) {
            var f = a === w.hourElement,
              m = a === w.minuteElement;
            u < i
              ? ((u = l + u + r(!f) + (r(f) && r(!w.amPM))),
                m && L(void 0, -1, w.hourElement))
              : u > l &&
                ((u = a === w.hourElement ? u - l - r(!w.amPM) : i),
                m && L(void 0, 1, w.hourElement)),
              w.amPM &&
                f &&
                (1 === c ? u + s === 23 : Math.abs(u - s) > c) &&
                (w.amPM.textContent =
                  w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]),
              (a.value = o(u));
          }
        })(e);
      var a = w._input.value;
      O(), ye(), w._input.value !== a && w._debouncedChange();
    }
    function O() {
      if (void 0 !== w.hourElement && void 0 !== w.minuteElement) {
        var e,
          n,
          t = (parseInt(w.hourElement.value.slice(-2), 10) || 0) % 24,
          a = (parseInt(w.minuteElement.value, 10) || 0) % 60,
          i =
            void 0 !== w.secondElement
              ? (parseInt(w.secondElement.value, 10) || 0) % 60
              : 0;
        void 0 !== w.amPM &&
          ((e = t),
          (n = w.amPM.textContent),
          (t = (e % 12) + 12 * r(n === w.l10n.amPM[1])));
        var o =
            void 0 !== w.config.minTime ||
            (w.config.minDate &&
              w.minDateHasTime &&
              w.latestSelectedDateObj &&
              0 === M(w.latestSelectedDateObj, w.config.minDate, !0)),
          l =
            void 0 !== w.config.maxTime ||
            (w.config.maxDate &&
              w.maxDateHasTime &&
              w.latestSelectedDateObj &&
              0 === M(w.latestSelectedDateObj, w.config.maxDate, !0));
        if (
          void 0 !== w.config.maxTime &&
          void 0 !== w.config.minTime &&
          w.config.minTime > w.config.maxTime
        ) {
          var c = y(
              w.config.minTime.getHours(),
              w.config.minTime.getMinutes(),
              w.config.minTime.getSeconds(),
            ),
            s = y(
              w.config.maxTime.getHours(),
              w.config.maxTime.getMinutes(),
              w.config.maxTime.getSeconds(),
            ),
            d = y(t, a, i);
          if (d > s && d < c) {
            var u = (function (e) {
              var n = Math.floor(e / 3600),
                t = (e - 3600 * n) / 60;
              return [n, t, e - 3600 * n - 60 * t];
            })(c);
            (t = u[0]), (a = u[1]), (i = u[2]);
          }
        } else {
          if (l) {
            var f =
              void 0 !== w.config.maxTime ? w.config.maxTime : w.config.maxDate;
            (t = Math.min(t, f.getHours())) === f.getHours() &&
              (a = Math.min(a, f.getMinutes())),
              a === f.getMinutes() && (i = Math.min(i, f.getSeconds()));
          }
          if (o) {
            var m =
              void 0 !== w.config.minTime ? w.config.minTime : w.config.minDate;
            (t = Math.max(t, m.getHours())) === m.getHours() &&
              a < m.getMinutes() &&
              (a = m.getMinutes()),
              a === m.getMinutes() && (i = Math.max(i, m.getSeconds()));
          }
        }
        A(t, a, i);
      }
    }
    function F(e) {
      var n = e || w.latestSelectedDateObj;
      n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds());
    }
    function A(e, n, t) {
      void 0 !== w.latestSelectedDateObj &&
        w.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0),
        w.hourElement &&
          w.minuteElement &&
          !w.isMobile &&
          ((w.hourElement.value = o(
            w.config.time_24hr ? e : ((12 + e) % 12) + 12 * r(e % 12 == 0),
          )),
          (w.minuteElement.value = o(n)),
          void 0 !== w.amPM && (w.amPM.textContent = w.l10n.amPM[r(e >= 12)]),
          void 0 !== w.secondElement && (w.secondElement.value = o(t)));
    }
    function N(e) {
      var n = g(e),
        t = parseInt(n.value) + (e.delta || 0);
      (t / 1e3 > 1 || ("Enter" === e.key && !/[^\d]/.test(t.toString()))) &&
        ee(t);
    }
    function P(e, n, t, a) {
      return n instanceof Array
        ? n.forEach(function (n) {
            return P(e, n, t, a);
          })
        : e instanceof Array
          ? e.forEach(function (e) {
              return P(e, n, t, a);
            })
          : (e.addEventListener(n, t, a),
            void w._handlers.push({
              remove: function () {
                return e.removeEventListener(n, t, a);
              },
            }));
    }
    function Y() {
      De("onChange");
    }
    function j(e, n) {
      var t =
          void 0 !== e
            ? w.parseDate(e)
            : w.latestSelectedDateObj ||
              (w.config.minDate && w.config.minDate > w.now
                ? w.config.minDate
                : w.config.maxDate && w.config.maxDate < w.now
                  ? w.config.maxDate
                  : w.now),
        a = w.currentYear,
        i = w.currentMonth;
      try {
        void 0 !== t &&
          ((w.currentYear = t.getFullYear()), (w.currentMonth = t.getMonth()));
      } catch (e) {
        (e.message = "Invalid date supplied: " + t), w.config.errorHandler(e);
      }
      n && w.currentYear !== a && (De("onYearChange"), q()),
        !n ||
          (w.currentYear === a && w.currentMonth === i) ||
          De("onMonthChange"),
        w.redraw();
    }
    function H(e) {
      var n = g(e);
      ~n.className.indexOf("arrow") &&
        L(e, n.classList.contains("arrowUp") ? 1 : -1);
    }
    function L(e, n, t) {
      var a = e && g(e),
        i = t || (a && a.parentNode && a.parentNode.firstChild),
        o = we("increment");
      (o.delta = n), i && i.dispatchEvent(o);
    }
    function R(e, n, t, a) {
      var i = ne(n, !0),
        o = d("span", e, n.getDate().toString());
      return (
        (o.dateObj = n),
        (o.$i = a),
        o.setAttribute("aria-label", w.formatDate(n, w.config.ariaDateFormat)),
        -1 === e.indexOf("hidden") &&
          0 === M(n, w.now) &&
          ((w.todayDateElem = o),
          o.classList.add("today"),
          o.setAttribute("aria-current", "date")),
        i
          ? ((o.tabIndex = -1),
            be(n) &&
              (o.classList.add("selected"),
              (w.selectedDateElem = o),
              "range" === w.config.mode &&
                (s(
                  o,
                  "startRange",
                  w.selectedDates[0] && 0 === M(n, w.selectedDates[0], !0),
                ),
                s(
                  o,
                  "endRange",
                  w.selectedDates[1] && 0 === M(n, w.selectedDates[1], !0),
                ),
                "nextMonthDay" === e && o.classList.add("inRange"))))
          : o.classList.add("flatpickr-disabled"),
        "range" === w.config.mode &&
          (function (e) {
            return (
              !("range" !== w.config.mode || w.selectedDates.length < 2) &&
              M(e, w.selectedDates[0]) >= 0 &&
              M(e, w.selectedDates[1]) <= 0
            );
          })(n) &&
          !be(n) &&
          o.classList.add("inRange"),
        w.weekNumbers &&
          1 === w.config.showMonths &&
          "prevMonthDay" !== e &&
          a % 7 == 6 &&
          w.weekNumbers.insertAdjacentHTML(
            "beforeend",
            "<span class='flatpickr-day'>" + w.config.getWeek(n) + "</span>",
          ),
        De("onDayCreate", o),
        o
      );
    }
    function W(e) {
      e.focus(), "range" === w.config.mode && oe(e);
    }
    function B(e) {
      for (
        var n = e > 0 ? 0 : w.config.showMonths - 1,
          t = e > 0 ? w.config.showMonths : -1,
          a = n;
        a != t;
        a += e
      )
        for (
          var i = w.daysContainer.children[a],
            o = e > 0 ? 0 : i.children.length - 1,
            r = e > 0 ? i.children.length : -1,
            l = o;
          l != r;
          l += e
        ) {
          var c = i.children[l];
          if (-1 === c.className.indexOf("hidden") && ne(c.dateObj)) return c;
        }
    }
    function J(e, n) {
      var t = k(),
        a = te(t || document.body),
        i =
          void 0 !== e
            ? e
            : a
              ? t
              : void 0 !== w.selectedDateElem && te(w.selectedDateElem)
                ? w.selectedDateElem
                : void 0 !== w.todayDateElem && te(w.todayDateElem)
                  ? w.todayDateElem
                  : B(n > 0 ? 1 : -1);
      void 0 === i
        ? w._input.focus()
        : a
          ? (function (e, n) {
              for (
                var t =
                    -1 === e.className.indexOf("Month")
                      ? e.dateObj.getMonth()
                      : w.currentMonth,
                  a = n > 0 ? w.config.showMonths : -1,
                  i = n > 0 ? 1 : -1,
                  o = t - w.currentMonth;
                o != a;
                o += i
              )
                for (
                  var r = w.daysContainer.children[o],
                    l =
                      t - w.currentMonth === o
                        ? e.$i + n
                        : n < 0
                          ? r.children.length - 1
                          : 0,
                    c = r.children.length,
                    s = l;
                  s >= 0 && s < c && s != (n > 0 ? c : -1);
                  s += i
                ) {
                  var d = r.children[s];
                  if (
                    -1 === d.className.indexOf("hidden") &&
                    ne(d.dateObj) &&
                    Math.abs(e.$i - s) >= Math.abs(n)
                  )
                    return W(d);
                }
              w.changeMonth(i), J(B(i), 0);
            })(i, n)
          : W(i);
    }
    function K(e, n) {
      for (
        var t = (new Date(e, n, 1).getDay() - w.l10n.firstDayOfWeek + 7) % 7,
          a = w.utils.getDaysInMonth((n - 1 + 12) % 12, e),
          i = w.utils.getDaysInMonth(n, e),
          o = window.document.createDocumentFragment(),
          r = w.config.showMonths > 1,
          l = r ? "prevMonthDay hidden" : "prevMonthDay",
          c = r ? "nextMonthDay hidden" : "nextMonthDay",
          s = a + 1 - t,
          u = 0;
        s <= a;
        s++, u++
      )
        o.appendChild(R("flatpickr-day " + l, new Date(e, n - 1, s), 0, u));
      for (s = 1; s <= i; s++, u++)
        o.appendChild(R("flatpickr-day", new Date(e, n, s), 0, u));
      for (
        var f = i + 1;
        f <= 42 - t && (1 === w.config.showMonths || u % 7 != 0);
        f++, u++
      )
        o.appendChild(R("flatpickr-day " + c, new Date(e, n + 1, f % i), 0, u));
      var m = d("div", "dayContainer");
      return m.appendChild(o), m;
    }
    function U() {
      if (void 0 !== w.daysContainer) {
        u(w.daysContainer), w.weekNumbers && u(w.weekNumbers);
        for (
          var e = document.createDocumentFragment(), n = 0;
          n < w.config.showMonths;
          n++
        ) {
          var t = new Date(w.currentYear, w.currentMonth, 1);
          t.setMonth(w.currentMonth + n),
            e.appendChild(K(t.getFullYear(), t.getMonth()));
        }
        w.daysContainer.appendChild(e),
          (w.days = w.daysContainer.firstChild),
          "range" === w.config.mode && 1 === w.selectedDates.length && oe();
      }
    }
    function q() {
      if (
        !(w.config.showMonths > 1 || "dropdown" !== w.config.monthSelectorType)
      ) {
        var e = function (e) {
          return (
            !(
              void 0 !== w.config.minDate &&
              w.currentYear === w.config.minDate.getFullYear() &&
              e < w.config.minDate.getMonth()
            ) &&
            !(
              void 0 !== w.config.maxDate &&
              w.currentYear === w.config.maxDate.getFullYear() &&
              e > w.config.maxDate.getMonth()
            )
          );
        };
        (w.monthsDropdownContainer.tabIndex = -1),
          (w.monthsDropdownContainer.innerHTML = "");
        for (var n = 0; n < 12; n++)
          if (e(n)) {
            var t = d("option", "flatpickr-monthDropdown-month");
            (t.value = new Date(w.currentYear, n).getMonth().toString()),
              (t.textContent = h(n, w.config.shorthandCurrentMonth, w.l10n)),
              (t.tabIndex = -1),
              w.currentMonth === n && (t.selected = !0),
              w.monthsDropdownContainer.appendChild(t);
          }
      }
    }
    function $() {
      var e,
        n = d("div", "flatpickr-month"),
        t = window.document.createDocumentFragment();
      w.config.showMonths > 1 || "static" === w.config.monthSelectorType
        ? (e = d("span", "cur-month"))
        : ((w.monthsDropdownContainer = d(
            "select",
            "flatpickr-monthDropdown-months",
          )),
          w.monthsDropdownContainer.setAttribute(
            "aria-label",
            w.l10n.monthAriaLabel,
          ),
          P(w.monthsDropdownContainer, "change", function (e) {
            var n = g(e),
              t = parseInt(n.value, 10);
            w.changeMonth(t - w.currentMonth), De("onMonthChange");
          }),
          q(),
          (e = w.monthsDropdownContainer));
      var a = m("cur-year", { tabindex: "-1" }),
        i = a.getElementsByTagName("input")[0];
      i.setAttribute("aria-label", w.l10n.yearAriaLabel),
        w.config.minDate &&
          i.setAttribute("min", w.config.minDate.getFullYear().toString()),
        w.config.maxDate &&
          (i.setAttribute("max", w.config.maxDate.getFullYear().toString()),
          (i.disabled =
            !!w.config.minDate &&
            w.config.minDate.getFullYear() === w.config.maxDate.getFullYear()));
      var o = d("div", "flatpickr-current-month");
      return (
        o.appendChild(e),
        o.appendChild(a),
        t.appendChild(o),
        n.appendChild(t),
        { container: n, yearElement: i, monthElement: e }
      );
    }
    function V() {
      u(w.monthNav),
        w.monthNav.appendChild(w.prevMonthNav),
        w.config.showMonths && ((w.yearElements = []), (w.monthElements = []));
      for (var e = w.config.showMonths; e--; ) {
        var n = $();
        w.yearElements.push(n.yearElement),
          w.monthElements.push(n.monthElement),
          w.monthNav.appendChild(n.container);
      }
      w.monthNav.appendChild(w.nextMonthNav);
    }
    function z() {
      w.weekdayContainer
        ? u(w.weekdayContainer)
        : (w.weekdayContainer = d("div", "flatpickr-weekdays"));
      for (var e = w.config.showMonths; e--; ) {
        var n = d("div", "flatpickr-weekdaycontainer");
        w.weekdayContainer.appendChild(n);
      }
      return G(), w.weekdayContainer;
    }
    function G() {
      if (w.weekdayContainer) {
        var e = w.l10n.firstDayOfWeek,
          t = n(w.l10n.weekdays.shorthand);
        e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
        for (var a = w.config.showMonths; a--; )
          w.weekdayContainer.children[a].innerHTML =
            "\n      <span class='flatpickr-weekday'>\n        " +
            t.join("</span><span class='flatpickr-weekday'>") +
            "\n      </span>\n      ";
      }
    }
    function Z(e, n) {
      void 0 === n && (n = !0);
      var t = n ? e : e - w.currentMonth;
      (t < 0 && !0 === w._hidePrevMonthArrow) ||
        (t > 0 && !0 === w._hideNextMonthArrow) ||
        ((w.currentMonth += t),
        (w.currentMonth < 0 || w.currentMonth > 11) &&
          ((w.currentYear += w.currentMonth > 11 ? 1 : -1),
          (w.currentMonth = (w.currentMonth + 12) % 12),
          De("onYearChange"),
          q()),
        U(),
        De("onMonthChange"),
        Ce());
    }
    function Q(e) {
      return w.calendarContainer.contains(e);
    }
    function X(e) {
      if (w.isOpen && !w.config.inline) {
        var n = g(e),
          t = Q(n),
          a =
            !(
              n === w.input ||
              n === w.altInput ||
              w.element.contains(n) ||
              (e.path &&
                e.path.indexOf &&
                (~e.path.indexOf(w.input) || ~e.path.indexOf(w.altInput)))
            ) &&
            !t &&
            !Q(e.relatedTarget),
          i = !w.config.ignoredFocusElements.some(function (e) {
            return e.contains(n);
          });
        a &&
          i &&
          (w.config.allowInput &&
            w.setDate(
              w._input.value,
              !1,
              w.config.altInput ? w.config.altFormat : w.config.dateFormat,
            ),
          void 0 !== w.timeContainer &&
            void 0 !== w.minuteElement &&
            void 0 !== w.hourElement &&
            "" !== w.input.value &&
            void 0 !== w.input.value &&
            _(),
          w.close(),
          w.config &&
            "range" === w.config.mode &&
            1 === w.selectedDates.length &&
            w.clear(!1));
      }
    }
    function ee(e) {
      if (
        !(
          !e ||
          (w.config.minDate && e < w.config.minDate.getFullYear()) ||
          (w.config.maxDate && e > w.config.maxDate.getFullYear())
        )
      ) {
        var n = e,
          t = w.currentYear !== n;
        (w.currentYear = n || w.currentYear),
          w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear()
            ? (w.currentMonth = Math.min(
                w.config.maxDate.getMonth(),
                w.currentMonth,
              ))
            : w.config.minDate &&
              w.currentYear === w.config.minDate.getFullYear() &&
              (w.currentMonth = Math.max(
                w.config.minDate.getMonth(),
                w.currentMonth,
              )),
          t && (w.redraw(), De("onYearChange"), q());
      }
    }
    function ne(e, n) {
      var t;
      void 0 === n && (n = !0);
      var a = w.parseDate(e, void 0, n);
      if (
        (w.config.minDate &&
          a &&
          M(a, w.config.minDate, void 0 !== n ? n : !w.minDateHasTime) < 0) ||
        (w.config.maxDate &&
          a &&
          M(a, w.config.maxDate, void 0 !== n ? n : !w.maxDateHasTime) > 0)
      )
        return !1;
      if (!w.config.enable && 0 === w.config.disable.length) return !0;
      if (void 0 === a) return !1;
      for (
        var i = !!w.config.enable,
          o =
            null !== (t = w.config.enable) && void 0 !== t
              ? t
              : w.config.disable,
          r = 0,
          l = void 0;
        r < o.length;
        r++
      ) {
        if ("function" == typeof (l = o[r]) && l(a)) return i;
        if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime())
          return i;
        if ("string" == typeof l) {
          var c = w.parseDate(l, void 0, !0);
          return c && c.getTime() === a.getTime() ? i : !i;
        }
        if (
          "object" == typeof l &&
          void 0 !== a &&
          l.from &&
          l.to &&
          a.getTime() >= l.from.getTime() &&
          a.getTime() <= l.to.getTime()
        )
          return i;
      }
      return !i;
    }
    function te(e) {
      return (
        void 0 !== w.daysContainer &&
        -1 === e.className.indexOf("hidden") &&
        -1 === e.className.indexOf("flatpickr-disabled") &&
        w.daysContainer.contains(e)
      );
    }
    function ae(e) {
      var n = e.target === w._input,
        t = w._input.value.trimEnd() !== Me();
      !n ||
        !t ||
        (e.relatedTarget && Q(e.relatedTarget)) ||
        w.setDate(
          w._input.value,
          !0,
          e.target === w.altInput ? w.config.altFormat : w.config.dateFormat,
        );
    }
    function ie(e) {
      var n = g(e),
        t = w.config.wrap ? p.contains(n) : n === w._input,
        a = w.config.allowInput,
        i = w.isOpen && (!a || !t),
        o = w.config.inline && t && !a;
      if (13 === e.keyCode && t) {
        if (a)
          return (
            w.setDate(
              w._input.value,
              !0,
              n === w.altInput ? w.config.altFormat : w.config.dateFormat,
            ),
            w.close(),
            n.blur()
          );
        w.open();
      } else if (Q(n) || i || o) {
        var r = !!w.timeContainer && w.timeContainer.contains(n);
        switch (e.keyCode) {
          case 13:
            r ? (e.preventDefault(), _(), fe()) : me(e);
            break;
          case 27:
            e.preventDefault(), fe();
            break;
          case 8:
          case 46:
            t && !w.config.allowInput && (e.preventDefault(), w.clear());
            break;
          case 37:
          case 39:
            if (r || t) w.hourElement && w.hourElement.focus();
            else {
              e.preventDefault();
              var l = k();
              if (void 0 !== w.daysContainer && (!1 === a || (l && te(l)))) {
                var c = 39 === e.keyCode ? 1 : -1;
                e.ctrlKey
                  ? (e.stopPropagation(), Z(c), J(B(1), 0))
                  : J(void 0, c);
              }
            }
            break;
          case 38:
          case 40:
            e.preventDefault();
            var s = 40 === e.keyCode ? 1 : -1;
            (w.daysContainer && void 0 !== n.$i) ||
            n === w.input ||
            n === w.altInput
              ? e.ctrlKey
                ? (e.stopPropagation(), ee(w.currentYear - s), J(B(1), 0))
                : r || J(void 0, 7 * s)
              : n === w.currentYearElement
                ? ee(w.currentYear - s)
                : w.config.enableTime &&
                  (!r && w.hourElement && w.hourElement.focus(),
                  _(e),
                  w._debouncedChange());
            break;
          case 9:
            if (r) {
              var d = [w.hourElement, w.minuteElement, w.secondElement, w.amPM]
                  .concat(w.pluginElements)
                  .filter(function (e) {
                    return e;
                  }),
                u = d.indexOf(n);
              if (-1 !== u) {
                var f = d[u + (e.shiftKey ? -1 : 1)];
                e.preventDefault(), (f || w._input).focus();
              }
            } else
              !w.config.noCalendar &&
                w.daysContainer &&
                w.daysContainer.contains(n) &&
                e.shiftKey &&
                (e.preventDefault(), w._input.focus());
        }
      }
      if (void 0 !== w.amPM && n === w.amPM)
        switch (e.key) {
          case w.l10n.amPM[0].charAt(0):
          case w.l10n.amPM[0].charAt(0).toLowerCase():
            (w.amPM.textContent = w.l10n.amPM[0]), O(), ye();
            break;
          case w.l10n.amPM[1].charAt(0):
          case w.l10n.amPM[1].charAt(0).toLowerCase():
            (w.amPM.textContent = w.l10n.amPM[1]), O(), ye();
        }
      (t || Q(n)) && De("onKeyDown", e);
    }
    function oe(e, n) {
      if (
        (void 0 === n && (n = "flatpickr-day"),
        1 === w.selectedDates.length &&
          (!e ||
            (e.classList.contains(n) &&
              !e.classList.contains("flatpickr-disabled"))))
      ) {
        for (
          var t = e
              ? e.dateObj.getTime()
              : w.days.firstElementChild.dateObj.getTime(),
            a = w.parseDate(w.selectedDates[0], void 0, !0).getTime(),
            i = Math.min(t, w.selectedDates[0].getTime()),
            o = Math.max(t, w.selectedDates[0].getTime()),
            r = !1,
            l = 0,
            c = 0,
            s = i;
          s < o;
          s += x
        )
          ne(new Date(s), !0) ||
            ((r = r || (s > i && s < o)),
            s < a && (!l || s > l)
              ? (l = s)
              : s > a && (!c || s < c) && (c = s));
        Array.from(
          w.rContainer.querySelectorAll(
            "*:nth-child(-n+" + w.config.showMonths + ") > ." + n,
          ),
        ).forEach(function (n) {
          var i,
            o,
            s,
            d = n.dateObj.getTime(),
            u = (l > 0 && d < l) || (c > 0 && d > c);
          if (u)
            return (
              n.classList.add("notAllowed"),
              void ["inRange", "startRange", "endRange"].forEach(function (e) {
                n.classList.remove(e);
              })
            );
          (r && !u) ||
            (["startRange", "inRange", "endRange", "notAllowed"].forEach(
              function (e) {
                n.classList.remove(e);
              },
            ),
            void 0 !== e &&
              (e.classList.add(
                t <= w.selectedDates[0].getTime() ? "startRange" : "endRange",
              ),
              a < t && d === a
                ? n.classList.add("startRange")
                : a > t && d === a && n.classList.add("endRange"),
              d >= l &&
                (0 === c || d <= c) &&
                ((o = a),
                (s = t),
                (i = d) > Math.min(o, s) && i < Math.max(o, s)) &&
                n.classList.add("inRange")));
        });
      }
    }
    function re() {
      !w.isOpen || w.config.static || w.config.inline || de();
    }
    function le(e) {
      return function (n) {
        var t = (w.config["_" + e + "Date"] = w.parseDate(
            n,
            w.config.dateFormat,
          )),
          a = w.config["_" + ("min" === e ? "max" : "min") + "Date"];
        void 0 !== t &&
          (w["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
            t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0),
          w.selectedDates &&
            ((w.selectedDates = w.selectedDates.filter(function (e) {
              return ne(e);
            })),
            w.selectedDates.length || "min" !== e || F(t),
            ye()),
          w.daysContainer &&
            (ue(),
            void 0 !== t
              ? (w.currentYearElement[e] = t.getFullYear().toString())
              : w.currentYearElement.removeAttribute(e),
            (w.currentYearElement.disabled =
              !!a && void 0 !== t && a.getFullYear() === t.getFullYear()));
      };
    }
    function ce() {
      return w.config.wrap ? p.querySelector("[data-input]") : p;
    }
    function se() {
      "object" != typeof w.config.locale &&
        void 0 === I.l10ns[w.config.locale] &&
        w.config.errorHandler(
          new Error("flatpickr: invalid locale " + w.config.locale),
        ),
        (w.l10n = e(
          e({}, I.l10ns.default),
          "object" == typeof w.config.locale
            ? w.config.locale
            : "default" !== w.config.locale
              ? I.l10ns[w.config.locale]
              : void 0,
        )),
        (D.D = "(" + w.l10n.weekdays.shorthand.join("|") + ")"),
        (D.l = "(" + w.l10n.weekdays.longhand.join("|") + ")"),
        (D.M = "(" + w.l10n.months.shorthand.join("|") + ")"),
        (D.F = "(" + w.l10n.months.longhand.join("|") + ")"),
        (D.K =
          "(" +
          w.l10n.amPM[0] +
          "|" +
          w.l10n.amPM[1] +
          "|" +
          w.l10n.amPM[0].toLowerCase() +
          "|" +
          w.l10n.amPM[1].toLowerCase() +
          ")"),
        void 0 ===
          e(e({}, v), JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr &&
          void 0 === I.defaultConfig.time_24hr &&
          (w.config.time_24hr = w.l10n.time_24hr),
        (w.formatDate = b(w)),
        (w.parseDate = C({ config: w.config, l10n: w.l10n }));
    }
    function de(e) {
      if ("function" != typeof w.config.position) {
        if (void 0 !== w.calendarContainer) {
          De("onPreCalendarPosition");
          var n = e || w._positionElement,
            t = Array.prototype.reduce.call(
              w.calendarContainer.children,
              function (e, n) {
                return e + n.offsetHeight;
              },
              0,
            ),
            a = w.calendarContainer.offsetWidth,
            i = w.config.position.split(" "),
            o = i[0],
            r = i.length > 1 ? i[1] : null,
            l = n.getBoundingClientRect(),
            c = window.innerHeight - l.bottom,
            d = "above" === o || ("below" !== o && c < t && l.top > t),
            u = window.pageYOffset + l.top + (d ? -t - 2 : n.offsetHeight + 2);
          if (
            (s(w.calendarContainer, "arrowTop", !d),
            s(w.calendarContainer, "arrowBottom", d),
            !w.config.inline)
          ) {
            var f = window.pageXOffset + l.left,
              m = !1,
              g = !1;
            "center" === r
              ? ((f -= (a - l.width) / 2), (m = !0))
              : "right" === r && ((f -= a - l.width), (g = !0)),
              s(w.calendarContainer, "arrowLeft", !m && !g),
              s(w.calendarContainer, "arrowCenter", m),
              s(w.calendarContainer, "arrowRight", g);
            var p =
                window.document.body.offsetWidth -
                (window.pageXOffset + l.right),
              h = f + a > window.document.body.offsetWidth,
              v = p + a > window.document.body.offsetWidth;
            if ((s(w.calendarContainer, "rightMost", h), !w.config.static))
              if (((w.calendarContainer.style.top = u + "px"), h))
                if (v) {
                  var D = (function () {
                    for (
                      var e = null, n = 0;
                      n < document.styleSheets.length;
                      n++
                    ) {
                      var t = document.styleSheets[n];
                      if (t.cssRules) {
                        try {
                          t.cssRules;
                        } catch (e) {
                          continue;
                        }
                        e = t;
                        break;
                      }
                    }
                    return null != e
                      ? e
                      : ((a = document.createElement("style")),
                        document.head.appendChild(a),
                        a.sheet);
                    var a;
                  })();
                  if (void 0 === D) return;
                  var b = window.document.body.offsetWidth,
                    C = Math.max(0, b / 2 - a / 2),
                    M = D.cssRules.length,
                    y = "{left:" + l.left + "px;right:auto;}";
                  s(w.calendarContainer, "rightMost", !1),
                    s(w.calendarContainer, "centerMost", !0),
                    D.insertRule(
                      ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                        y,
                      M,
                    ),
                    (w.calendarContainer.style.left = C + "px"),
                    (w.calendarContainer.style.right = "auto");
                } else
                  (w.calendarContainer.style.left = "auto"),
                    (w.calendarContainer.style.right = p + "px");
              else
                (w.calendarContainer.style.left = f + "px"),
                  (w.calendarContainer.style.right = "auto");
          }
        }
      } else w.config.position(w, e);
    }
    function ue() {
      w.config.noCalendar || w.isMobile || (q(), Ce(), U());
    }
    function fe() {
      w._input.focus(),
        -1 !== window.navigator.userAgent.indexOf("MSIE") ||
        void 0 !== navigator.msMaxTouchPoints
          ? setTimeout(w.close, 0)
          : w.close();
    }
    function me(e) {
      e.preventDefault(), e.stopPropagation();
      var n = f(g(e), function (e) {
        return (
          e.classList &&
          e.classList.contains("flatpickr-day") &&
          !e.classList.contains("flatpickr-disabled") &&
          !e.classList.contains("notAllowed")
        );
      });
      if (void 0 !== n) {
        var t = n,
          a = (w.latestSelectedDateObj = new Date(t.dateObj.getTime())),
          i =
            (a.getMonth() < w.currentMonth ||
              a.getMonth() > w.currentMonth + w.config.showMonths - 1) &&
            "range" !== w.config.mode;
        if (((w.selectedDateElem = t), "single" === w.config.mode))
          w.selectedDates = [a];
        else if ("multiple" === w.config.mode) {
          var o = be(a);
          o ? w.selectedDates.splice(parseInt(o), 1) : w.selectedDates.push(a);
        } else
          "range" === w.config.mode &&
            (2 === w.selectedDates.length && w.clear(!1, !1),
            (w.latestSelectedDateObj = a),
            w.selectedDates.push(a),
            0 !== M(a, w.selectedDates[0], !0) &&
              w.selectedDates.sort(function (e, n) {
                return e.getTime() - n.getTime();
              }));
        if ((O(), i)) {
          var r = w.currentYear !== a.getFullYear();
          (w.currentYear = a.getFullYear()),
            (w.currentMonth = a.getMonth()),
            r && (De("onYearChange"), q()),
            De("onMonthChange");
        }
        if (
          (Ce(),
          U(),
          ye(),
          i || "range" === w.config.mode || 1 !== w.config.showMonths
            ? void 0 !== w.selectedDateElem &&
              void 0 === w.hourElement &&
              w.selectedDateElem &&
              w.selectedDateElem.focus()
            : W(t),
          void 0 !== w.hourElement &&
            void 0 !== w.hourElement &&
            w.hourElement.focus(),
          w.config.closeOnSelect)
        ) {
          var l = "single" === w.config.mode && !w.config.enableTime,
            c =
              "range" === w.config.mode &&
              2 === w.selectedDates.length &&
              !w.config.enableTime;
          (l || c) && fe();
        }
        Y();
      }
    }
    (w.parseDate = C({ config: w.config, l10n: w.l10n })),
      (w._handlers = []),
      (w.pluginElements = []),
      (w.loadedPlugins = []),
      (w._bind = P),
      (w._setHoursFromDate = F),
      (w._positionCalendar = de),
      (w.changeMonth = Z),
      (w.changeYear = ee),
      (w.clear = function (e, n) {
        void 0 === e && (e = !0);
        void 0 === n && (n = !0);
        (w.input.value = ""), void 0 !== w.altInput && (w.altInput.value = "");
        void 0 !== w.mobileInput && (w.mobileInput.value = "");
        (w.selectedDates = []),
          (w.latestSelectedDateObj = void 0),
          !0 === n &&
            ((w.currentYear = w._initialDate.getFullYear()),
            (w.currentMonth = w._initialDate.getMonth()));
        if (!0 === w.config.enableTime) {
          var t = E(w.config),
            a = t.hours,
            i = t.minutes,
            o = t.seconds;
          A(a, i, o);
        }
        w.redraw(), e && De("onChange");
      }),
      (w.close = function () {
        (w.isOpen = !1),
          w.isMobile ||
            (void 0 !== w.calendarContainer &&
              w.calendarContainer.classList.remove("open"),
            void 0 !== w._input && w._input.classList.remove("active"));
        De("onClose");
      }),
      (w.onMouseOver = oe),
      (w._createElement = d),
      (w.createDay = R),
      (w.destroy = function () {
        void 0 !== w.config && De("onDestroy");
        for (var e = w._handlers.length; e--; ) w._handlers[e].remove();
        if (((w._handlers = []), w.mobileInput))
          w.mobileInput.parentNode &&
            w.mobileInput.parentNode.removeChild(w.mobileInput),
            (w.mobileInput = void 0);
        else if (w.calendarContainer && w.calendarContainer.parentNode)
          if (w.config.static && w.calendarContainer.parentNode) {
            var n = w.calendarContainer.parentNode;
            if ((n.lastChild && n.removeChild(n.lastChild), n.parentNode)) {
              for (; n.firstChild; ) n.parentNode.insertBefore(n.firstChild, n);
              n.parentNode.removeChild(n);
            }
          } else
            w.calendarContainer.parentNode.removeChild(w.calendarContainer);
        w.altInput &&
          ((w.input.type = "text"),
          w.altInput.parentNode &&
            w.altInput.parentNode.removeChild(w.altInput),
          delete w.altInput);
        w.input &&
          ((w.input.type = w.input._type),
          w.input.classList.remove("flatpickr-input"),
          w.input.removeAttribute("readonly"));
        [
          "_showTimeInput",
          "latestSelectedDateObj",
          "_hideNextMonthArrow",
          "_hidePrevMonthArrow",
          "__hideNextMonthArrow",
          "__hidePrevMonthArrow",
          "isMobile",
          "isOpen",
          "selectedDateElem",
          "minDateHasTime",
          "maxDateHasTime",
          "days",
          "daysContainer",
          "_input",
          "_positionElement",
          "innerContainer",
          "rContainer",
          "monthNav",
          "todayDateElem",
          "calendarContainer",
          "weekdayContainer",
          "prevMonthNav",
          "nextMonthNav",
          "monthsDropdownContainer",
          "currentMonthElement",
          "currentYearElement",
          "navigationCurrentMonth",
          "selectedDateElem",
          "config",
        ].forEach(function (e) {
          try {
            delete w[e];
          } catch (e) {}
        });
      }),
      (w.isEnabled = ne),
      (w.jumpToDate = j),
      (w.updateValue = ye),
      (w.open = function (e, n) {
        void 0 === n && (n = w._positionElement);
        if (!0 === w.isMobile) {
          if (e) {
            e.preventDefault();
            var t = g(e);
            t && t.blur();
          }
          return (
            void 0 !== w.mobileInput &&
              (w.mobileInput.focus(), w.mobileInput.click()),
            void De("onOpen")
          );
        }
        if (w._input.disabled || w.config.inline) return;
        var a = w.isOpen;
        (w.isOpen = !0),
          a ||
            (w.calendarContainer.classList.add("open"),
            w._input.classList.add("active"),
            De("onOpen"),
            de(n));
        !0 === w.config.enableTime &&
          !0 === w.config.noCalendar &&
          (!1 !== w.config.allowInput ||
            (void 0 !== e && w.timeContainer.contains(e.relatedTarget)) ||
            setTimeout(function () {
              return w.hourElement.select();
            }, 50));
      }),
      (w.redraw = ue),
      (w.set = function (e, n) {
        if (null !== e && "object" == typeof e)
          for (var a in (Object.assign(w.config, e), e))
            void 0 !== ge[a] &&
              ge[a].forEach(function (e) {
                return e();
              });
        else
          (w.config[e] = n),
            void 0 !== ge[e]
              ? ge[e].forEach(function (e) {
                  return e();
                })
              : t.indexOf(e) > -1 && (w.config[e] = c(n));
        w.redraw(), ye(!0);
      }),
      (w.setDate = function (e, n, t) {
        void 0 === n && (n = !1);
        void 0 === t && (t = w.config.dateFormat);
        if ((0 !== e && !e) || (e instanceof Array && 0 === e.length))
          return w.clear(n);
        pe(e, t),
          (w.latestSelectedDateObj =
            w.selectedDates[w.selectedDates.length - 1]),
          w.redraw(),
          j(void 0, n),
          F(),
          0 === w.selectedDates.length && w.clear(!1);
        ye(n), n && De("onChange");
      }),
      (w.toggle = function (e) {
        if (!0 === w.isOpen) return w.close();
        w.open(e);
      });
    var ge = {
      locale: [se, G],
      showMonths: [V, S, z],
      minDate: [j],
      maxDate: [j],
      positionElement: [ve],
      clickOpens: [
        function () {
          !0 === w.config.clickOpens
            ? (P(w._input, "focus", w.open), P(w._input, "click", w.open))
            : (w._input.removeEventListener("focus", w.open),
              w._input.removeEventListener("click", w.open));
        },
      ],
    };
    function pe(e, n) {
      var t = [];
      if (e instanceof Array)
        t = e.map(function (e) {
          return w.parseDate(e, n);
        });
      else if (e instanceof Date || "number" == typeof e)
        t = [w.parseDate(e, n)];
      else if ("string" == typeof e)
        switch (w.config.mode) {
          case "single":
          case "time":
            t = [w.parseDate(e, n)];
            break;
          case "multiple":
            t = e.split(w.config.conjunction).map(function (e) {
              return w.parseDate(e, n);
            });
            break;
          case "range":
            t = e.split(w.l10n.rangeSeparator).map(function (e) {
              return w.parseDate(e, n);
            });
        }
      else
        w.config.errorHandler(
          new Error("Invalid date supplied: " + JSON.stringify(e)),
        );
      (w.selectedDates = w.config.allowInvalidPreload
        ? t
        : t.filter(function (e) {
            return e instanceof Date && ne(e, !1);
          })),
        "range" === w.config.mode &&
          w.selectedDates.sort(function (e, n) {
            return e.getTime() - n.getTime();
          });
    }
    function he(e) {
      return e
        .slice()
        .map(function (e) {
          return "string" == typeof e ||
            "number" == typeof e ||
            e instanceof Date
            ? w.parseDate(e, void 0, !0)
            : e && "object" == typeof e && e.from && e.to
              ? {
                  from: w.parseDate(e.from, void 0),
                  to: w.parseDate(e.to, void 0),
                }
              : e;
        })
        .filter(function (e) {
          return e;
        });
    }
    function ve() {
      w._positionElement = w.config.positionElement || w._input;
    }
    function De(e, n) {
      if (void 0 !== w.config) {
        var t = w.config[e];
        if (void 0 !== t && t.length > 0)
          for (var a = 0; t[a] && a < t.length; a++)
            t[a](w.selectedDates, w.input.value, w, n);
        "onChange" === e &&
          (w.input.dispatchEvent(we("change")),
          w.input.dispatchEvent(we("input")));
      }
    }
    function we(e) {
      var n = document.createEvent("Event");
      return n.initEvent(e, !0, !0), n;
    }
    function be(e) {
      for (var n = 0; n < w.selectedDates.length; n++) {
        var t = w.selectedDates[n];
        if (t instanceof Date && 0 === M(t, e)) return "" + n;
      }
      return !1;
    }
    function Ce() {
      w.config.noCalendar ||
        w.isMobile ||
        !w.monthNav ||
        (w.yearElements.forEach(function (e, n) {
          var t = new Date(w.currentYear, w.currentMonth, 1);
          t.setMonth(w.currentMonth + n),
            w.config.showMonths > 1 || "static" === w.config.monthSelectorType
              ? (w.monthElements[n].textContent =
                  h(t.getMonth(), w.config.shorthandCurrentMonth, w.l10n) + " ")
              : (w.monthsDropdownContainer.value = t.getMonth().toString()),
            (e.value = t.getFullYear().toString());
        }),
        (w._hidePrevMonthArrow =
          void 0 !== w.config.minDate &&
          (w.currentYear === w.config.minDate.getFullYear()
            ? w.currentMonth <= w.config.minDate.getMonth()
            : w.currentYear < w.config.minDate.getFullYear())),
        (w._hideNextMonthArrow =
          void 0 !== w.config.maxDate &&
          (w.currentYear === w.config.maxDate.getFullYear()
            ? w.currentMonth + 1 > w.config.maxDate.getMonth()
            : w.currentYear > w.config.maxDate.getFullYear())));
    }
    function Me(e) {
      var n =
        e || (w.config.altInput ? w.config.altFormat : w.config.dateFormat);
      return w.selectedDates
        .map(function (e) {
          return w.formatDate(e, n);
        })
        .filter(function (e, n, t) {
          return (
            "range" !== w.config.mode ||
            w.config.enableTime ||
            t.indexOf(e) === n
          );
        })
        .join(
          "range" !== w.config.mode
            ? w.config.conjunction
            : w.l10n.rangeSeparator,
        );
    }
    function ye(e) {
      void 0 === e && (e = !0),
        void 0 !== w.mobileInput &&
          w.mobileFormatStr &&
          (w.mobileInput.value =
            void 0 !== w.latestSelectedDateObj
              ? w.formatDate(w.latestSelectedDateObj, w.mobileFormatStr)
              : ""),
        (w.input.value = Me(w.config.dateFormat)),
        void 0 !== w.altInput && (w.altInput.value = Me(w.config.altFormat)),
        !1 !== e && De("onValueUpdate");
    }
    function xe(e) {
      var n = g(e),
        t = w.prevMonthNav.contains(n),
        a = w.nextMonthNav.contains(n);
      t || a
        ? Z(t ? -1 : 1)
        : w.yearElements.indexOf(n) >= 0
          ? n.select()
          : n.classList.contains("arrowUp")
            ? w.changeYear(w.currentYear + 1)
            : n.classList.contains("arrowDown") &&
              w.changeYear(w.currentYear - 1);
    }
    return (
      (function () {
        (w.element = w.input = p),
          (w.isOpen = !1),
          (function () {
            var n = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
              ],
              i = e(e({}, JSON.parse(JSON.stringify(p.dataset || {}))), v),
              o = {};
            (w.config.parseDate = i.parseDate),
              (w.config.formatDate = i.formatDate),
              Object.defineProperty(w.config, "enable", {
                get: function () {
                  return w.config._enable;
                },
                set: function (e) {
                  w.config._enable = he(e);
                },
              }),
              Object.defineProperty(w.config, "disable", {
                get: function () {
                  return w.config._disable;
                },
                set: function (e) {
                  w.config._disable = he(e);
                },
              });
            var r = "time" === i.mode;
            if (!i.dateFormat && (i.enableTime || r)) {
              var l = I.defaultConfig.dateFormat || a.dateFormat;
              o.dateFormat =
                i.noCalendar || r
                  ? "H:i" + (i.enableSeconds ? ":S" : "")
                  : l + " H:i" + (i.enableSeconds ? ":S" : "");
            }
            if (i.altInput && (i.enableTime || r) && !i.altFormat) {
              var s = I.defaultConfig.altFormat || a.altFormat;
              o.altFormat =
                i.noCalendar || r
                  ? "h:i" + (i.enableSeconds ? ":S K" : " K")
                  : s + " h:i" + (i.enableSeconds ? ":S" : "") + " K";
            }
            Object.defineProperty(w.config, "minDate", {
              get: function () {
                return w.config._minDate;
              },
              set: le("min"),
            }),
              Object.defineProperty(w.config, "maxDate", {
                get: function () {
                  return w.config._maxDate;
                },
                set: le("max"),
              });
            var d = function (e) {
              return function (n) {
                w.config["min" === e ? "_minTime" : "_maxTime"] = w.parseDate(
                  n,
                  "H:i:S",
                );
              };
            };
            Object.defineProperty(w.config, "minTime", {
              get: function () {
                return w.config._minTime;
              },
              set: d("min"),
            }),
              Object.defineProperty(w.config, "maxTime", {
                get: function () {
                  return w.config._maxTime;
                },
                set: d("max"),
              }),
              "time" === i.mode &&
                ((w.config.noCalendar = !0), (w.config.enableTime = !0));
            Object.assign(w.config, o, i);
            for (var u = 0; u < n.length; u++)
              w.config[n[u]] =
                !0 === w.config[n[u]] || "true" === w.config[n[u]];
            t
              .filter(function (e) {
                return void 0 !== w.config[e];
              })
              .forEach(function (e) {
                w.config[e] = c(w.config[e] || []).map(T);
              }),
              (w.isMobile =
                !w.config.disableMobile &&
                !w.config.inline &&
                "single" === w.config.mode &&
                !w.config.disable.length &&
                !w.config.enable &&
                !w.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                ));
            for (u = 0; u < w.config.plugins.length; u++) {
              var f = w.config.plugins[u](w) || {};
              for (var m in f)
                t.indexOf(m) > -1
                  ? (w.config[m] = c(f[m]).map(T).concat(w.config[m]))
                  : void 0 === i[m] && (w.config[m] = f[m]);
            }
            i.altInputClass ||
              (w.config.altInputClass =
                ce().className + " " + w.config.altInputClass);
            De("onParseConfig");
          })(),
          se(),
          (function () {
            if (((w.input = ce()), !w.input))
              return void w.config.errorHandler(
                new Error("Invalid input element specified"),
              );
            (w.input._type = w.input.type),
              (w.input.type = "text"),
              w.input.classList.add("flatpickr-input"),
              (w._input = w.input),
              w.config.altInput &&
                ((w.altInput = d(w.input.nodeName, w.config.altInputClass)),
                (w._input = w.altInput),
                (w.altInput.placeholder = w.input.placeholder),
                (w.altInput.disabled = w.input.disabled),
                (w.altInput.required = w.input.required),
                (w.altInput.tabIndex = w.input.tabIndex),
                (w.altInput.type = "text"),
                w.input.setAttribute("type", "hidden"),
                !w.config.static &&
                  w.input.parentNode &&
                  w.input.parentNode.insertBefore(
                    w.altInput,
                    w.input.nextSibling,
                  ));
            w.config.allowInput ||
              w._input.setAttribute("readonly", "readonly");
            ve();
          })(),
          (function () {
            (w.selectedDates = []),
              (w.now = w.parseDate(w.config.now) || new Date());
            var e =
              w.config.defaultDate ||
              (("INPUT" !== w.input.nodeName &&
                "TEXTAREA" !== w.input.nodeName) ||
              !w.input.placeholder ||
              w.input.value !== w.input.placeholder
                ? w.input.value
                : null);
            e && pe(e, w.config.dateFormat);
            (w._initialDate =
              w.selectedDates.length > 0
                ? w.selectedDates[0]
                : w.config.minDate &&
                    w.config.minDate.getTime() > w.now.getTime()
                  ? w.config.minDate
                  : w.config.maxDate &&
                      w.config.maxDate.getTime() < w.now.getTime()
                    ? w.config.maxDate
                    : w.now),
              (w.currentYear = w._initialDate.getFullYear()),
              (w.currentMonth = w._initialDate.getMonth()),
              w.selectedDates.length > 0 &&
                (w.latestSelectedDateObj = w.selectedDates[0]);
            void 0 !== w.config.minTime &&
              (w.config.minTime = w.parseDate(w.config.minTime, "H:i"));
            void 0 !== w.config.maxTime &&
              (w.config.maxTime = w.parseDate(w.config.maxTime, "H:i"));
            (w.minDateHasTime =
              !!w.config.minDate &&
              (w.config.minDate.getHours() > 0 ||
                w.config.minDate.getMinutes() > 0 ||
                w.config.minDate.getSeconds() > 0)),
              (w.maxDateHasTime =
                !!w.config.maxDate &&
                (w.config.maxDate.getHours() > 0 ||
                  w.config.maxDate.getMinutes() > 0 ||
                  w.config.maxDate.getSeconds() > 0));
          })(),
          (w.utils = {
            getDaysInMonth: function (e, n) {
              return (
                void 0 === e && (e = w.currentMonth),
                void 0 === n && (n = w.currentYear),
                1 === e && ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0)
                  ? 29
                  : w.l10n.daysInMonth[e]
              );
            },
          }),
          w.isMobile ||
            (function () {
              var e = window.document.createDocumentFragment();
              if (
                ((w.calendarContainer = d("div", "flatpickr-calendar")),
                (w.calendarContainer.tabIndex = -1),
                !w.config.noCalendar)
              ) {
                if (
                  (e.appendChild(
                    ((w.monthNav = d("div", "flatpickr-months")),
                    (w.yearElements = []),
                    (w.monthElements = []),
                    (w.prevMonthNav = d("span", "flatpickr-prev-month")),
                    (w.prevMonthNav.innerHTML = w.config.prevArrow),
                    (w.nextMonthNav = d("span", "flatpickr-next-month")),
                    (w.nextMonthNav.innerHTML = w.config.nextArrow),
                    V(),
                    Object.defineProperty(w, "_hidePrevMonthArrow", {
                      get: function () {
                        return w.__hidePrevMonthArrow;
                      },
                      set: function (e) {
                        w.__hidePrevMonthArrow !== e &&
                          (s(w.prevMonthNav, "flatpickr-disabled", e),
                          (w.__hidePrevMonthArrow = e));
                      },
                    }),
                    Object.defineProperty(w, "_hideNextMonthArrow", {
                      get: function () {
                        return w.__hideNextMonthArrow;
                      },
                      set: function (e) {
                        w.__hideNextMonthArrow !== e &&
                          (s(w.nextMonthNav, "flatpickr-disabled", e),
                          (w.__hideNextMonthArrow = e));
                      },
                    }),
                    (w.currentYearElement = w.yearElements[0]),
                    Ce(),
                    w.monthNav),
                  ),
                  (w.innerContainer = d("div", "flatpickr-innerContainer")),
                  w.config.weekNumbers)
                ) {
                  var n = (function () {
                      w.calendarContainer.classList.add("hasWeeks");
                      var e = d("div", "flatpickr-weekwrapper");
                      e.appendChild(
                        d("span", "flatpickr-weekday", w.l10n.weekAbbreviation),
                      );
                      var n = d("div", "flatpickr-weeks");
                      return (
                        e.appendChild(n), { weekWrapper: e, weekNumbers: n }
                      );
                    })(),
                    t = n.weekWrapper,
                    a = n.weekNumbers;
                  w.innerContainer.appendChild(t),
                    (w.weekNumbers = a),
                    (w.weekWrapper = t);
                }
                (w.rContainer = d("div", "flatpickr-rContainer")),
                  w.rContainer.appendChild(z()),
                  w.daysContainer ||
                    ((w.daysContainer = d("div", "flatpickr-days")),
                    (w.daysContainer.tabIndex = -1)),
                  U(),
                  w.rContainer.appendChild(w.daysContainer),
                  w.innerContainer.appendChild(w.rContainer),
                  e.appendChild(w.innerContainer);
              }
              w.config.enableTime &&
                e.appendChild(
                  (function () {
                    w.calendarContainer.classList.add("hasTime"),
                      w.config.noCalendar &&
                        w.calendarContainer.classList.add("noCalendar");
                    var e = E(w.config);
                    (w.timeContainer = d("div", "flatpickr-time")),
                      (w.timeContainer.tabIndex = -1);
                    var n = d("span", "flatpickr-time-separator", ":"),
                      t = m("flatpickr-hour", {
                        "aria-label": w.l10n.hourAriaLabel,
                      });
                    w.hourElement = t.getElementsByTagName("input")[0];
                    var a = m("flatpickr-minute", {
                      "aria-label": w.l10n.minuteAriaLabel,
                    });
                    (w.minuteElement = a.getElementsByTagName("input")[0]),
                      (w.hourElement.tabIndex = w.minuteElement.tabIndex = -1),
                      (w.hourElement.value = o(
                        w.latestSelectedDateObj
                          ? w.latestSelectedDateObj.getHours()
                          : w.config.time_24hr
                            ? e.hours
                            : (function (e) {
                                switch (e % 24) {
                                  case 0:
                                  case 12:
                                    return 12;
                                  default:
                                    return e % 12;
                                }
                              })(e.hours),
                      )),
                      (w.minuteElement.value = o(
                        w.latestSelectedDateObj
                          ? w.latestSelectedDateObj.getMinutes()
                          : e.minutes,
                      )),
                      w.hourElement.setAttribute(
                        "step",
                        w.config.hourIncrement.toString(),
                      ),
                      w.minuteElement.setAttribute(
                        "step",
                        w.config.minuteIncrement.toString(),
                      ),
                      w.hourElement.setAttribute(
                        "min",
                        w.config.time_24hr ? "0" : "1",
                      ),
                      w.hourElement.setAttribute(
                        "max",
                        w.config.time_24hr ? "23" : "12",
                      ),
                      w.hourElement.setAttribute("maxlength", "2"),
                      w.minuteElement.setAttribute("min", "0"),
                      w.minuteElement.setAttribute("max", "59"),
                      w.minuteElement.setAttribute("maxlength", "2"),
                      w.timeContainer.appendChild(t),
                      w.timeContainer.appendChild(n),
                      w.timeContainer.appendChild(a),
                      w.config.time_24hr &&
                        w.timeContainer.classList.add("time24hr");
                    if (w.config.enableSeconds) {
                      w.timeContainer.classList.add("hasSeconds");
                      var i = m("flatpickr-second");
                      (w.secondElement = i.getElementsByTagName("input")[0]),
                        (w.secondElement.value = o(
                          w.latestSelectedDateObj
                            ? w.latestSelectedDateObj.getSeconds()
                            : e.seconds,
                        )),
                        w.secondElement.setAttribute(
                          "step",
                          w.minuteElement.getAttribute("step"),
                        ),
                        w.secondElement.setAttribute("min", "0"),
                        w.secondElement.setAttribute("max", "59"),
                        w.secondElement.setAttribute("maxlength", "2"),
                        w.timeContainer.appendChild(
                          d("span", "flatpickr-time-separator", ":"),
                        ),
                        w.timeContainer.appendChild(i);
                    }
                    w.config.time_24hr ||
                      ((w.amPM = d(
                        "span",
                        "flatpickr-am-pm",
                        w.l10n.amPM[
                          r(
                            (w.latestSelectedDateObj
                              ? w.hourElement.value
                              : w.config.defaultHour) > 11,
                          )
                        ],
                      )),
                      (w.amPM.title = w.l10n.toggleTitle),
                      (w.amPM.tabIndex = -1),
                      w.timeContainer.appendChild(w.amPM));
                    return w.timeContainer;
                  })(),
                );
              s(w.calendarContainer, "rangeMode", "range" === w.config.mode),
                s(w.calendarContainer, "animate", !0 === w.config.animate),
                s(w.calendarContainer, "multiMonth", w.config.showMonths > 1),
                w.calendarContainer.appendChild(e);
              var i =
                void 0 !== w.config.appendTo &&
                void 0 !== w.config.appendTo.nodeType;
              if (
                (w.config.inline || w.config.static) &&
                (w.calendarContainer.classList.add(
                  w.config.inline ? "inline" : "static",
                ),
                w.config.inline &&
                  (!i && w.element.parentNode
                    ? w.element.parentNode.insertBefore(
                        w.calendarContainer,
                        w._input.nextSibling,
                      )
                    : void 0 !== w.config.appendTo &&
                      w.config.appendTo.appendChild(w.calendarContainer)),
                w.config.static)
              ) {
                var l = d("div", "flatpickr-wrapper");
                w.element.parentNode &&
                  w.element.parentNode.insertBefore(l, w.element),
                  l.appendChild(w.element),
                  w.altInput && l.appendChild(w.altInput),
                  l.appendChild(w.calendarContainer);
              }
              w.config.static ||
                w.config.inline ||
                (void 0 !== w.config.appendTo
                  ? w.config.appendTo
                  : window.document.body
                ).appendChild(w.calendarContainer);
            })(),
          (function () {
            w.config.wrap &&
              ["open", "close", "toggle", "clear"].forEach(function (e) {
                Array.prototype.forEach.call(
                  w.element.querySelectorAll("[data-" + e + "]"),
                  function (n) {
                    return P(n, "click", w[e]);
                  },
                );
              });
            if (w.isMobile)
              return void (function () {
                var e = w.config.enableTime
                  ? w.config.noCalendar
                    ? "time"
                    : "datetime-local"
                  : "date";
                (w.mobileInput = d(
                  "input",
                  w.input.className + " flatpickr-mobile",
                )),
                  (w.mobileInput.tabIndex = 1),
                  (w.mobileInput.type = e),
                  (w.mobileInput.disabled = w.input.disabled),
                  (w.mobileInput.required = w.input.required),
                  (w.mobileInput.placeholder = w.input.placeholder),
                  (w.mobileFormatStr =
                    "datetime-local" === e
                      ? "Y-m-d\\TH:i:S"
                      : "date" === e
                        ? "Y-m-d"
                        : "H:i:S"),
                  w.selectedDates.length > 0 &&
                    (w.mobileInput.defaultValue = w.mobileInput.value =
                      w.formatDate(w.selectedDates[0], w.mobileFormatStr));
                w.config.minDate &&
                  (w.mobileInput.min = w.formatDate(w.config.minDate, "Y-m-d"));
                w.config.maxDate &&
                  (w.mobileInput.max = w.formatDate(w.config.maxDate, "Y-m-d"));
                w.input.getAttribute("step") &&
                  (w.mobileInput.step = String(w.input.getAttribute("step")));
                (w.input.type = "hidden"),
                  void 0 !== w.altInput && (w.altInput.type = "hidden");
                try {
                  w.input.parentNode &&
                    w.input.parentNode.insertBefore(
                      w.mobileInput,
                      w.input.nextSibling,
                    );
                } catch (e) {}
                P(w.mobileInput, "change", function (e) {
                  w.setDate(g(e).value, !1, w.mobileFormatStr),
                    De("onChange"),
                    De("onClose");
                });
              })();
            var e = l(re, 50);
            (w._debouncedChange = l(Y, 300)),
              w.daysContainer &&
                !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                P(w.daysContainer, "mouseover", function (e) {
                  "range" === w.config.mode && oe(g(e));
                });
            P(w._input, "keydown", ie),
              void 0 !== w.calendarContainer &&
                P(w.calendarContainer, "keydown", ie);
            w.config.inline || w.config.static || P(window, "resize", e);
            void 0 !== window.ontouchstart
              ? P(window.document, "touchstart", X)
              : P(window.document, "mousedown", X);
            P(window.document, "focus", X, { capture: !0 }),
              !0 === w.config.clickOpens &&
                (P(w._input, "focus", w.open), P(w._input, "click", w.open));
            void 0 !== w.daysContainer &&
              (P(w.monthNav, "click", xe),
              P(w.monthNav, ["keyup", "increment"], N),
              P(w.daysContainer, "click", me));
            if (
              void 0 !== w.timeContainer &&
              void 0 !== w.minuteElement &&
              void 0 !== w.hourElement
            ) {
              var n = function (e) {
                return g(e).select();
              };
              P(w.timeContainer, ["increment"], _),
                P(w.timeContainer, "blur", _, { capture: !0 }),
                P(w.timeContainer, "click", H),
                P([w.hourElement, w.minuteElement], ["focus", "click"], n),
                void 0 !== w.secondElement &&
                  P(w.secondElement, "focus", function () {
                    return w.secondElement && w.secondElement.select();
                  }),
                void 0 !== w.amPM &&
                  P(w.amPM, "click", function (e) {
                    _(e);
                  });
            }
            w.config.allowInput && P(w._input, "blur", ae);
          })(),
          (w.selectedDates.length || w.config.noCalendar) &&
            (w.config.enableTime &&
              F(w.config.noCalendar ? w.latestSelectedDateObj : void 0),
            ye(!1)),
          S();
        var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !w.isMobile && n && de(), De("onReady");
      })(),
      w
    );
  }
  function T(e, n) {
    for (
      var t = Array.prototype.slice.call(e).filter(function (e) {
          return e instanceof HTMLElement;
        }),
        a = [],
        i = 0;
      i < t.length;
      i++
    ) {
      var o = t[i];
      try {
        if (null !== o.getAttribute("data-fp-omit")) continue;
        void 0 !== o._flatpickr &&
          (o._flatpickr.destroy(), (o._flatpickr = void 0)),
          (o._flatpickr = k(o, n || {})),
          a.push(o._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }
    return 1 === a.length ? a[0] : a;
  }
  "undefined" != typeof HTMLElement &&
    "undefined" != typeof HTMLCollection &&
    "undefined" != typeof NodeList &&
    ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
      function (e) {
        return T(this, e);
      }),
    (HTMLElement.prototype.flatpickr = function (e) {
      return T([this], e);
    }));
  var I = function (e, n) {
    return "string" == typeof e
      ? T(window.document.querySelectorAll(e), n)
      : e instanceof Node
        ? T([e], n)
        : T(e, n);
  };
  return (
    (I.defaultConfig = {}),
    (I.l10ns = { en: e({}, i), default: e({}, i) }),
    (I.localize = function (n) {
      I.l10ns.default = e(e({}, I.l10ns.default), n);
    }),
    (I.setDefaults = function (n) {
      I.defaultConfig = e(e({}, I.defaultConfig), n);
    }),
    (I.parseDate = C({})),
    (I.formatDate = b({})),
    (I.compareDates = M),
    "undefined" != typeof jQuery &&
      void 0 !== jQuery.fn &&
      (jQuery.fn.flatpickr = function (e) {
        return T(this, e);
      }),
    (Date.prototype.fp_incr = function (e) {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e),
      );
    }),
    "undefined" != typeof window && (window.flatpickr = I),
    I
  );
});
