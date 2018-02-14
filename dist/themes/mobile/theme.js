(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_a03c0uw7jdmdg563 = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_32ef1jw6jdmdg55z = {
    contextmenu: $_a03c0uw7jdmdg563.constant('contextmenu'),
    touchstart: $_a03c0uw7jdmdg563.constant('touchstart'),
    touchmove: $_a03c0uw7jdmdg563.constant('touchmove'),
    touchend: $_a03c0uw7jdmdg563.constant('touchend'),
    gesturestart: $_a03c0uw7jdmdg563.constant('gesturestart'),
    mousedown: $_a03c0uw7jdmdg563.constant('mousedown'),
    mousemove: $_a03c0uw7jdmdg563.constant('mousemove'),
    mouseout: $_a03c0uw7jdmdg563.constant('mouseout'),
    mouseup: $_a03c0uw7jdmdg563.constant('mouseup'),
    mouseover: $_a03c0uw7jdmdg563.constant('mouseover'),
    focusin: $_a03c0uw7jdmdg563.constant('focusin'),
    keydown: $_a03c0uw7jdmdg563.constant('keydown'),
    input: $_a03c0uw7jdmdg563.constant('input'),
    change: $_a03c0uw7jdmdg563.constant('change'),
    focus: $_a03c0uw7jdmdg563.constant('focus'),
    click: $_a03c0uw7jdmdg563.constant('click'),
    transitionend: $_a03c0uw7jdmdg563.constant('transitionend'),
    selectstart: $_a03c0uw7jdmdg563.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_90td7zw9jdmdg569 = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_4agxqxwcjdmdg56f = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_4agxqxwcjdmdg56f.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_c0q1vpwbjdmdg56c = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_a03c0uw7jdmdg563.constant(edge),
    chrome: $_a03c0uw7jdmdg563.constant(chrome),
    ie: $_a03c0uw7jdmdg563.constant(ie),
    opera: $_a03c0uw7jdmdg563.constant(opera),
    firefox: $_a03c0uw7jdmdg563.constant(firefox),
    safari: $_a03c0uw7jdmdg563.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_4agxqxwcjdmdg56f.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_ecnifbwdjdmdg56h = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_a03c0uw7jdmdg563.constant(windows),
    ios: $_a03c0uw7jdmdg563.constant(ios),
    android: $_a03c0uw7jdmdg563.constant(android),
    linux: $_a03c0uw7jdmdg563.constant(linux),
    osx: $_a03c0uw7jdmdg563.constant(osx),
    solaris: $_a03c0uw7jdmdg563.constant(solaris),
    freebsd: $_a03c0uw7jdmdg563.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_a03c0uw7jdmdg563.constant(isiPad),
      isiPhone: $_a03c0uw7jdmdg563.constant(isiPhone),
      isTablet: $_a03c0uw7jdmdg563.constant(isTablet),
      isPhone: $_a03c0uw7jdmdg563.constant(isPhone),
      isTouch: $_a03c0uw7jdmdg563.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_a03c0uw7jdmdg563.constant(iOSwebview)
    };
  }

  var never$1 = $_a03c0uw7jdmdg563.never;
  var always$1 = $_a03c0uw7jdmdg563.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_a03c0uw7jdmdg563.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_4p2wg0wgjdmdg56u = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_4p2wg0wgjdmdg56u.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_4agxqxwcjdmdg56f.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_4agxqxwcjdmdg56f.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_4sbo7jwfjdmdg56n = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_aq9cdxwkjdmdg57j = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_61mtfwwljdmdg57l = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_aq9cdxwkjdmdg57j.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_aq9cdxwkjdmdg57j.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_aq9cdxwkjdmdg57j.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_aq9cdxwkjdmdg57j.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_61mtfwwljdmdg57l.head(str).bind(function (head) {
      return $_61mtfwwljdmdg57l.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_ergp8awjjdmdg57g = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_ergp8awjjdmdg57g.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_ergp8awjjdmdg57g.contains(uastring, 'edge/') && $_ergp8awjjdmdg57g.contains(uastring, 'chrome') && $_ergp8awjjdmdg57g.contains(uastring, 'safari') && $_ergp8awjjdmdg57g.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_ergp8awjjdmdg57g.contains(uastring, 'chrome') && !$_ergp8awjjdmdg57g.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_ergp8awjjdmdg57g.contains(uastring, 'msie') || $_ergp8awjjdmdg57g.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_ergp8awjjdmdg57g.contains(uastring, 'safari') || $_ergp8awjjdmdg57g.contains(uastring, 'mobile/')) && $_ergp8awjjdmdg57g.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_ergp8awjjdmdg57g.contains(uastring, 'iphone') || $_ergp8awjjdmdg57g.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_3d72t0wijdmdg57b = {
    browsers: $_a03c0uw7jdmdg563.constant(browsers),
    oses: $_a03c0uw7jdmdg563.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_3d72t0wijdmdg57b.browsers();
    var oses = $_3d72t0wijdmdg57b.oses();
    var browser = $_4sbo7jwfjdmdg56n.detectBrowser(browsers, userAgent).fold($_c0q1vpwbjdmdg56c.unknown, $_c0q1vpwbjdmdg56c.nu);
    var os = $_4sbo7jwfjdmdg56n.detectOs(oses, userAgent).fold($_ecnifbwdjdmdg56h.unknown, $_ecnifbwdjdmdg56h.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_45hnm0wajdmdg56b = { detect: detect$2 };

  var detect$3 = $_90td7zw9jdmdg569.cached(function () {
    var userAgent = navigator.userAgent;
    return $_45hnm0wajdmdg56b.detect(userAgent);
  });
  var $_dcymntw8jdmdg567 = { detect: detect$3 };

  var alloy = { tap: $_a03c0uw7jdmdg563.constant('alloy.tap') };
  var $_16nbvcw5jdmdg55u = {
    focus: $_a03c0uw7jdmdg563.constant('alloy.focus'),
    postBlur: $_a03c0uw7jdmdg563.constant('alloy.blur.post'),
    receive: $_a03c0uw7jdmdg563.constant('alloy.receive'),
    execute: $_a03c0uw7jdmdg563.constant('alloy.execute'),
    focusItem: $_a03c0uw7jdmdg563.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_dcymntw8jdmdg567.detect().deviceType.isTouch() ? alloy.tap : $_32ef1jw6jdmdg55z.click,
    longpress: $_a03c0uw7jdmdg563.constant('alloy.longpress'),
    sandboxClose: $_a03c0uw7jdmdg563.constant('alloy.sandbox.close'),
    systemInit: $_a03c0uw7jdmdg563.constant('alloy.system.init'),
    windowScroll: $_a03c0uw7jdmdg563.constant('alloy.system.scroll'),
    attachedToDom: $_a03c0uw7jdmdg563.constant('alloy.system.attached'),
    detachedFromDom: $_a03c0uw7jdmdg563.constant('alloy.system.detached'),
    changeTab: $_a03c0uw7jdmdg563.constant('alloy.change.tab'),
    dismissTab: $_a03c0uw7jdmdg563.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_3ixh81wnjdmdg57o = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_3ixh81wnjdmdg57o.isObject(old) && $_3ixh81wnjdmdg57o.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_9dh6dlwmjdmdg57m = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_a1h469wojdmdg57q = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_16nbvcw5jdmdg55u.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_9dh6dlwmjdmdg57m.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_a1h469wojdmdg57q.map(data, $_a03c0uw7jdmdg563.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_14uwprw4jdmdg55l = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_4p2wg0wgjdmdg56u.each(fields, function (name, i) {
        struct[name] = $_a03c0uw7jdmdg563.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_3ixh81wnjdmdg57o.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_4p2wg0wgjdmdg56u.each(array, function (a) {
      if (!$_3ixh81wnjdmdg57o.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_4p2wg0wgjdmdg56u.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_42274qwvjdmdg58r = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_42274qwvjdmdg58r.validateStrArr('required', required);
    $_42274qwvjdmdg58r.validateStrArr('optional', optional);
    $_42274qwvjdmdg58r.checkDupes(everything);
    return function (obj) {
      var keys = $_a1h469wojdmdg57q.keys(obj);
      var allReqd = $_4p2wg0wgjdmdg56u.forall(required, function (req) {
        return $_4p2wg0wgjdmdg56u.contains(keys, req);
      });
      if (!allReqd)
        $_42274qwvjdmdg58r.reqMessage(required, keys);
      var unsupported = $_4p2wg0wgjdmdg56u.filter(keys, function (key) {
        return !$_4p2wg0wgjdmdg56u.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_42274qwvjdmdg58r.unsuppMessage(unsupported);
      var r = {};
      $_4p2wg0wgjdmdg56u.each(required, function (req) {
        r[req] = $_a03c0uw7jdmdg563.constant(obj[req]);
      });
      $_4p2wg0wgjdmdg56u.each(optional, function (opt) {
        r[opt] = $_a03c0uw7jdmdg563.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_8q0o9uwsjdmdg58l = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_7z9iwawwjdmdg58t = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_71zib4x0jdmdg599 = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_71zib4x0jdmdg599.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_ekqusjwzjdmdg596 = { getOrDie: getOrDie };

  var node = function () {
    var f = $_ekqusjwzjdmdg596.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_f2iqwwyjdmdg595 = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_a03c0uw7jdmdg563.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_b21tyhx3jdmdg59q = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_bij7usx4jdmdg59u = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_bij7usx4jdmdg59u.ELEMENT;
  var DOCUMENT = $_bij7usx4jdmdg59u.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_4p2wg0wgjdmdg56u.map(base.querySelectorAll(selector), $_b21tyhx3jdmdg59q.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var $_9mlux3x2jdmdg59d = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_4p2wg0wgjdmdg56u.exists(elements, $_a03c0uw7jdmdg563.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_f2iqwwyjdmdg595.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_dcymntw8jdmdg567.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_3r00diwxjdmdg58u = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_9mlux3x2jdmdg59d.is
  };

  var owner = function (element) {
    return $_b21tyhx3jdmdg59q.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_b21tyhx3jdmdg59q.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_b21tyhx3jdmdg59q.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_4p2wg0wgjdmdg56u.findIndex(kin, function (elem) {
        return $_3r00diwxjdmdg58u.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_3ixh81wnjdmdg57o.isFunction(isRoot) ? isRoot : $_a03c0uw7jdmdg563.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_b21tyhx3jdmdg59q.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_4p2wg0wgjdmdg56u.filter(elements, function (x) {
        return !$_3r00diwxjdmdg58u.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var prevSiblings = function (element) {
    return $_4p2wg0wgjdmdg56u.reverse($_7z9iwawwjdmdg58t.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_7z9iwawwjdmdg58t.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_4p2wg0wgjdmdg56u.map(dom.childNodes, $_b21tyhx3jdmdg59q.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_8q0o9uwsjdmdg58l.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_dahlvqwrjdmdg589 = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_dahlvqwrjdmdg589.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_dahlvqwrjdmdg589.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_dahlvqwrjdmdg589.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_dahlvqwrjdmdg589.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_dahlvqwrjdmdg589.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_3kw2tpwqjdmdg587 = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_4p2wg0wgjdmdg56u.each(elements, function (x) {
      $_3kw2tpwqjdmdg587.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_4p2wg0wgjdmdg56u.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_3kw2tpwqjdmdg587.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_4p2wg0wgjdmdg56u.each(elements.slice().reverse(), function (x) {
      $_3kw2tpwqjdmdg587.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_4p2wg0wgjdmdg56u.each(elements, function (x) {
      $_3kw2tpwqjdmdg587.append(parent, x);
    });
  };
  var $_g7tb0cx6jdmdg59y = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_4p2wg0wgjdmdg56u.each($_dahlvqwrjdmdg589.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_dahlvqwrjdmdg589.children(wrapper);
    if (children.length > 0)
      $_g7tb0cx6jdmdg59y.before(wrapper, children);
    remove(wrapper);
  };
  var $_d3epb4x5jdmdg59v = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_bij7usx4jdmdg59u.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_bij7usx4jdmdg59u.ELEMENT);
  var isText = isType$1($_bij7usx4jdmdg59u.TEXT);
  var isDocument = isType$1($_bij7usx4jdmdg59u.DOCUMENT);
  var $_41506tx8jdmdg5a3 = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_41506tx8jdmdg5a3.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_90td7zw9jdmdg569.cached(function () {
    return getBody($_b21tyhx3jdmdg59q.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_b21tyhx3jdmdg59q.fromDom(body);
  };
  var $_bue8box7jdmdg5a1 = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_14uwprw4jdmdg55l.emit(component, $_16nbvcw5jdmdg55u.detachedFromDom());
    var children = component.components();
    $_4p2wg0wgjdmdg56u.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_4p2wg0wgjdmdg56u.each(children, fireAttaching);
    $_14uwprw4jdmdg55l.emit(component, $_16nbvcw5jdmdg55u.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_3kw2tpwqjdmdg587.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_bue8box7jdmdg5a1.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_d3epb4x5jdmdg59v.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_dahlvqwrjdmdg589.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_4p2wg0wgjdmdg56u.each(subs, doDetach);
    $_d3epb4x5jdmdg59v.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_3kw2tpwqjdmdg587.append(element, guiSystem.element());
    var children = $_dahlvqwrjdmdg589.children(guiSystem.element());
    $_4p2wg0wgjdmdg56u.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_dahlvqwrjdmdg589.children(guiSystem.element());
    $_4p2wg0wgjdmdg56u.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_d3epb4x5jdmdg59v.remove(guiSystem.element());
  };
  var $_f9s3chwpjdmdg57w = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_dahlvqwrjdmdg589.children($_b21tyhx3jdmdg59q.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_4p2wg0wgjdmdg56u.map(tags, function (x) {
      return $_b21tyhx3jdmdg59q.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_4p2wg0wgjdmdg56u.map(texts, function (x) {
      return $_b21tyhx3jdmdg59q.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_4p2wg0wgjdmdg56u.map(nodes, $_b21tyhx3jdmdg59q.fromDom);
  };
  var $_6insg8xdjdmdg5az = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_dahlvqwrjdmdg589.owner(element);
    var docDom = owner.dom();
    var fragment = $_b21tyhx3jdmdg59q.fromDom(docDom.createDocumentFragment());
    var contentElements = $_6insg8xdjdmdg5az.fromHtml(content, docDom);
    $_g7tb0cx6jdmdg59y.append(fragment, contentElements);
    $_d3epb4x5jdmdg59v.empty(element);
    $_3kw2tpwqjdmdg587.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_b21tyhx3jdmdg59q.fromTag('div');
    var clone = $_b21tyhx3jdmdg59q.fromDom(element.dom().cloneNode(true));
    $_3kw2tpwqjdmdg587.append(container, clone);
    return get(container);
  };
  var $_cdwp4wxcjdmdg5ax = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_3ixh81wnjdmdg57o.isString(value) || $_3ixh81wnjdmdg57o.isBoolean(value) || $_3ixh81wnjdmdg57o.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_a1h469wojdmdg57q.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_4p2wg0wgjdmdg56u.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_41506tx8jdmdg5a3.isElement(source) || !$_41506tx8jdmdg5a3.isElement(destination))
      return;
    $_4p2wg0wgjdmdg56u.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_f4ouopxfjdmdg5b4 = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_b21tyhx3jdmdg59q.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_b21tyhx3jdmdg59q.fromTag(tag);
    var attributes = $_f4ouopxfjdmdg5b4.clone(original);
    $_f4ouopxfjdmdg5b4.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_dahlvqwrjdmdg589.children(deep$1(original));
    $_g7tb0cx6jdmdg59y.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_3kw2tpwqjdmdg587.before(original, nu);
    var children = $_dahlvqwrjdmdg589.children(original);
    $_g7tb0cx6jdmdg59y.append(nu, children);
    $_d3epb4x5jdmdg59v.remove(original);
    return nu;
  };
  var $_6hhpwlxejdmdg5b2 = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_6hhpwlxejdmdg5b2.shallow(element);
    return $_cdwp4wxcjdmdg5ax.getOuter(clone);
  };
  var $_9c9dyjxbjdmdg5at = { getHtml: getHtml };

  var element = function (elem) {
    return $_9c9dyjxbjdmdg5at.getHtml(elem);
  };
  var $_eyl1edxajdmdg5ao = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_a03c0uw7jdmdg563.always,
      isError: $_a03c0uw7jdmdg563.never,
      getOr: $_a03c0uw7jdmdg563.constant(o),
      getOrThunk: $_a03c0uw7jdmdg563.constant(o),
      getOrDie: $_a03c0uw7jdmdg563.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_a03c0uw7jdmdg563.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_a03c0uw7jdmdg563.never,
      isValue: $_a03c0uw7jdmdg563.never,
      isError: $_a03c0uw7jdmdg563.always,
      getOr: $_a03c0uw7jdmdg563.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_a03c0uw7jdmdg563.noop,
      bind: bind,
      exists: $_a03c0uw7jdmdg563.never,
      forall: $_a03c0uw7jdmdg563.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_3ixh81wnjdmdg57o.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_4p2wg0wgjdmdg56u.each(cases, function (acase, count) {
      var keys = $_a1h469wojdmdg57q.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_3ixh81wnjdmdg57o.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_a1h469wojdmdg57q.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_4p2wg0wgjdmdg56u.forall(constructors, function (reqKey) {
            return $_4p2wg0wgjdmdg56u.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_aqbjpgxkjdmdg5br = { generate: generate };

  var comparison = $_aqbjpgxkjdmdg5br.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_4p2wg0wgjdmdg56u.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_9g77f0xjjdmdg5bo = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_9dh6dlwmjdmdg57m.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_a03c0uw7jdmdg563.compose(Result.error, $_4p2wg0wgjdmdg56u.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_9g77f0xjjdmdg5bo.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_9g77f0xjjdmdg5bo.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_12v3p6xhjdmdg5be = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_4p2wg0wgjdmdg56u.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_4p2wg0wgjdmdg56u.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_a1h469wojdmdg57q.each(obj, function (v, k) {
      if (!$_4p2wg0wgjdmdg56u.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_9q2suzxljdmdg5c2 = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_5ruq57xmjdmdg5c7 = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_4p2wg0wgjdmdg56u.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_7sy4rwxnjdmdg5cb = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_9q2suzxljdmdg5c2.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_9q2suzxljdmdg5c2.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_5ruq57xmjdmdg5c7.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_5ruq57xmjdmdg5c7.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_5ruq57xmjdmdg5c7.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_7sy4rwxnjdmdg5cb.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_7sy4rwxnjdmdg5cb.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_9q2suzxljdmdg5c2.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_12v3p6xhjdmdg5be.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_5ruq57xmjdmdg5c7.hasKey(obj, key);
  };
  var $_alqjtqxgjdmdg5bc = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_fe09vsxojdmdg5cf = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_4p2wg0wgjdmdg56u.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_4p2wg0wgjdmdg56u.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_a03c0uw7jdmdg563.noop,
    logEventStopped: $_a03c0uw7jdmdg563.noop,
    logNoParent: $_a03c0uw7jdmdg563.noop,
    logEventNoHandlers: $_a03c0uw7jdmdg563.noop,
    logEventResponse: $_a03c0uw7jdmdg563.noop,
    write: $_a03c0uw7jdmdg563.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_4p2wg0wgjdmdg56u.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_4p2wg0wgjdmdg56u.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_16nbvcw5jdmdg55u.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_4p2wg0wgjdmdg56u.map(sequence, function (s) {
              if (!$_4p2wg0wgjdmdg56u.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_eyl1edxajdmdg5ao.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_eyl1edxajdmdg5ao.element(c.element()),
        '(initComponents)': $_4p2wg0wgjdmdg56u.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_4p2wg0wgjdmdg56u.map(c.components(), go),
        '(bound.events)': $_a1h469wojdmdg57q.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_a1h469wojdmdg57q.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_a1h469wojdmdg57q.keys(systems);
          return $_fe09vsxojdmdg5cf.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_alqjtqxgjdmdg5bc.wrap($_eyl1edxajdmdg5ao.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_bhxux7x9jdmdg5a9 = {
    logHandler: logHandler,
    noLogger: $_a03c0uw7jdmdg563.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_a03c0uw7jdmdg563.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_3r00diwxjdmdg58u.eq(component.element(), simulatedEvent.event().target());
  };
  var $_1cj4edxtjdmdg5du = { isSource: isSource };

  var adt = $_aqbjpgxkjdmdg5br.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_a03c0uw7jdmdg563.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_a03c0uw7jdmdg563.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_a03c0uw7jdmdg563.constant(base));
  };
  var $_du2dcgxwjdmdg5eh = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var json = function () {
    return $_ekqusjwzjdmdg596.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_g9tjlhy0jdmdg5fh = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_3ixh81wnjdmdg57o.isObject(input) && $_a1h469wojdmdg57q.keys(input).length > 100 ? ' removed due to size' : $_g9tjlhy0jdmdg5fh.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_4p2wg0wgjdmdg56u.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_6tf6x5xzjdmdg5fb = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_6tf6x5xzjdmdg5fb.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_6tf6x5xzjdmdg5fb.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_3x7mj9xyjdmdg5f7 = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var typeAdt = $_aqbjpgxkjdmdg5br.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    }
  ]);
  var fieldAdt = $_aqbjpgxkjdmdg5br.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_2seg1ey1jdmdg5fj = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var adt$1 = $_aqbjpgxkjdmdg5br.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_a03c0uw7jdmdg563.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_a03c0uw7jdmdg563.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_5ruq57xmjdmdg5c7.readOptFrom(obj, key).fold(function () {
      return $_3x7mj9xyjdmdg5f7.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_5ruq57xmjdmdg5c7.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_a03c0uw7jdmdg563.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_5ruq57xmjdmdg5c7.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_5ruq57xmjdmdg5c7.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_7sy4rwxnjdmdg5cb.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_7sy4rwxnjdmdg5cb.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_7sy4rwxnjdmdg5cb.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_a03c0uw7jdmdg563.constant({})).map(function (v) {
            return $_9dh6dlwmjdmdg57m.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_7sy4rwxnjdmdg5cb.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_4p2wg0wgjdmdg56u.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_12v3p6xhjdmdg5be.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val).fold(function (err) {
        return $_3x7mj9xyjdmdg5f7.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_2seg1ey1jdmdg5fj.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_a1h469wojdmdg57q.keys(obj);
    return $_4p2wg0wgjdmdg56u.filter(keys, function (k) {
      return $_alqjtqxgjdmdg5bc.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_4p2wg0wgjdmdg56u.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_9dh6dlwmjdmdg57m.deepMerge(acc, $_alqjtqxgjdmdg5bc.wrap(key, true));
      }, $_a03c0uw7jdmdg563.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_3ixh81wnjdmdg57o.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_4p2wg0wgjdmdg56u.filter(keys, function (k) {
        return !$_alqjtqxgjdmdg5bc.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_3x7mj9xyjdmdg5f7.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_4p2wg0wgjdmdg56u.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_2seg1ey1jdmdg5fj.typeAdt.objOf($_4p2wg0wgjdmdg56u.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_2seg1ey1jdmdg5fj.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_2seg1ey1jdmdg5fj.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_4p2wg0wgjdmdg56u.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_12v3p6xhjdmdg5be.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_2seg1ey1jdmdg5fj.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_a03c0uw7jdmdg563.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_a1h469wojdmdg57q.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_4p2wg0wgjdmdg56u.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_du2dcgxwjdmdg5eh.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_2seg1ey1jdmdg5fj.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_a03c0uw7jdmdg563.compose(arr, obj);
  var $_77zvuwxxjdmdg5en = {
    anyValue: $_a03c0uw7jdmdg563.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot
  };

  var strict = function (key) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.strict(), $_77zvuwxxjdmdg5en.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.strict(), $_77zvuwxxjdmdg5en.value(function (f) {
      return $_3ixh81wnjdmdg57o.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.asOption(), $_77zvuwxxjdmdg5en.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.strict(), $_77zvuwxxjdmdg5en.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.strict(), $_77zvuwxxjdmdg5en.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.asOption(), $_77zvuwxxjdmdg5en.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.asOption(), $_77zvuwxxjdmdg5en.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.asOption(), $_77zvuwxxjdmdg5en.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.defaulted(fallback), $_77zvuwxxjdmdg5en.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_77zvuwxxjdmdg5en.field(key, key, $_du2dcgxwjdmdg5eh.defaulted(fallback), $_77zvuwxxjdmdg5en.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_77zvuwxxjdmdg5en.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_77zvuwxxjdmdg5en.state(okey, instantiator);
  };
  var $_eiyjlwxvjdmdg5ec = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_alqjtqxgjdmdg5bc.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_3x7mj9xyjdmdg5f7.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_77zvuwxxjdmdg5en.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_alqjtqxgjdmdg5bc.readOptFrom(input, key);
      return choice.fold(function () {
        return $_3x7mj9xyjdmdg5f7.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_a1h469wojdmdg57q.keys(branches);
    };
    var toDsl = function () {
      return $_2seg1ey1jdmdg5fj.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_9dv9t2y3jdmdg5ft = { choose: choose };

  var anyValue$1 = $_77zvuwxxjdmdg5en.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_77zvuwxxjdmdg5en.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_77zvuwxxjdmdg5en.arr(anyValue$1);
  };
  var arrOf = $_77zvuwxxjdmdg5en.arr;
  var objOf = $_77zvuwxxjdmdg5en.obj;
  var objOfOnly = $_77zvuwxxjdmdg5en.objOnly;
  var setOf$1 = $_77zvuwxxjdmdg5en.setOf;
  var valueOf = function (validator) {
    return $_77zvuwxxjdmdg5en.value(validator);
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_a03c0uw7jdmdg563.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_a03c0uw7jdmdg563.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_a03c0uw7jdmdg563.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_6tf6x5xzjdmdg5fb.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_6tf6x5xzjdmdg5fb.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_9dv9t2y3jdmdg5ft.choose(key, branches);
  };
  var $_3tzholy2jdmdg5fn = {
    anyValue: $_a03c0uw7jdmdg563.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1
  };

  var nu$4 = function (parts) {
    if (!$_alqjtqxgjdmdg5bc.hasKey(parts, 'can') && !$_alqjtqxgjdmdg5bc.hasKey(parts, 'abort') && !$_alqjtqxgjdmdg5bc.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_g9tjlhy0jdmdg5fh.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_3tzholy2jdmdg5fn.asRawOrDie('Extracting event.handler', $_3tzholy2jdmdg5fn.objOfOnly([
      $_eiyjlwxvjdmdg5ec.defaulted('can', $_a03c0uw7jdmdg563.constant(true)),
      $_eiyjlwxvjdmdg5ec.defaulted('abort', $_a03c0uw7jdmdg563.constant(false)),
      $_eiyjlwxvjdmdg5ec.defaulted('run', $_a03c0uw7jdmdg563.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_4p2wg0wgjdmdg56u.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_4p2wg0wgjdmdg56u.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_3ixh81wnjdmdg57o.isFunction(handler) ? {
      can: $_a03c0uw7jdmdg563.constant(true),
      abort: $_a03c0uw7jdmdg563.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_4p2wg0wgjdmdg56u.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_22ma9pxujdmdg5e1 = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_alqjtqxgjdmdg5bc.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_22ma9pxujdmdg5e1.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_22ma9pxujdmdg5e1.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_22ma9pxujdmdg5e1.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_22ma9pxujdmdg5e1.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_22ma9pxujdmdg5e1.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_22ma9pxujdmdg5e1.nu({
          run: function (component, simulatedEvent) {
            if ($_1cj4edxtjdmdg5du.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_14uwprw4jdmdg55l.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_binsu8xsjdmdg5dn = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_16nbvcw5jdmdg55u.attachedToDom()),
    runOnDetached: runOnSourceName($_16nbvcw5jdmdg55u.detachedFromDom()),
    runOnInit: runOnSourceName($_16nbvcw5jdmdg55u.systemInit()),
    runOnExecute: runOnName($_16nbvcw5jdmdg55u.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_bht4rcy4jdmdg5g0 = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_8q0o9uwsjdmdg58l.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_g9tjlhy0jdmdg5fh.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_emi0rny6jdmdg5gn = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_8q0o9uwsjdmdg58l.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_a1h469wojdmdg57q.keys(settings);
    $_4p2wg0wgjdmdg56u.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_g9tjlhy0jdmdg5fh.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_alqjtqxgjdmdg5bc.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_alqjtqxgjdmdg5bc.wrap(key, arr1);
      }, function (arr2) {
        return $_alqjtqxgjdmdg5bc.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_9dh6dlwmjdmdg57m.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_9dh6dlwmjdmdg57m.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_9dh6dlwmjdmdg57m.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_alqjtqxgjdmdg5bc.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_alqjtqxgjdmdg5bc.wrap('value', value);
    }).getOr({}));
    return $_emi0rny6jdmdg5gn.nu(raw);
  };
  var $_6ksvbly5jdmdg5g7 = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_binsu8xsjdmdg5dn.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_binsu8xsjdmdg5dn.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_3tzholy2jdmdg5fn.objOfOnly(schema);
    var schemaSchema = $_eiyjlwxvjdmdg5ec.optionObjOf(name, [$_eiyjlwxvjdmdg5ec.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_eiyjlwxvjdmdg5ec.optionObjOf(name, [$_eiyjlwxvjdmdg5ec.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_a03c0uw7jdmdg563.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_bht4rcy4jdmdg5g0.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_alqjtqxgjdmdg5bc.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_a1h469wojdmdg57q.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_a1h469wojdmdg57q.map(extra, function (extraF, extraName) {
      return $_bht4rcy4jdmdg5g0.markAsExtraApi(extraF, extraName);
    });
    var me = $_9dh6dlwmjdmdg57m.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_a03c0uw7jdmdg563.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_3tzholy2jdmdg5fn.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_90td7zw9jdmdg569.cached(function () {
              return $_3tzholy2jdmdg5fn.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_alqjtqxgjdmdg5bc.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_6ksvbly5jdmdg5g7.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_alqjtqxgjdmdg5bc.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_5v3gfpxrjdmdg5d8 = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_3ixh81wnjdmdg57o.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_42274qwvjdmdg58r.validateStrArr('required', required);
    $_42274qwvjdmdg58r.checkDupes(required);
    return function (obj) {
      var keys = $_a1h469wojdmdg57q.keys(obj);
      var allReqd = $_4p2wg0wgjdmdg56u.forall(required, function (req) {
        return $_4p2wg0wgjdmdg56u.contains(keys, req);
      });
      if (!allReqd)
        $_42274qwvjdmdg58r.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_4p2wg0wgjdmdg56u.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_42274qwvjdmdg58r.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_4p2wg0wgjdmdg56u.filter(keys, function (key) {
      return !$_4p2wg0wgjdmdg56u.contains(required, key);
    });
    if (unsupported.length > 0)
      $_42274qwvjdmdg58r.unsuppMessage(unsupported);
  };
  var allowExtra = $_a03c0uw7jdmdg563.noop;
  var $_3kszoyy9jdmdg5h1 = {
    exactly: $_a03c0uw7jdmdg563.curry(base, handleExact),
    ensure: $_a03c0uw7jdmdg563.curry(base, allowExtra),
    ensureWith: $_a03c0uw7jdmdg563.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_3kszoyy9jdmdg5h1.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_9hia1zy7jdmdg5gu = { init: init };

  var derive$2 = function (capabilities) {
    return $_alqjtqxgjdmdg5bc.wrapAll(capabilities);
  };
  var simpleSchema = $_3tzholy2jdmdg5fn.objOfOnly([
    $_eiyjlwxvjdmdg5ec.strict('fields'),
    $_eiyjlwxvjdmdg5ec.strict('name'),
    $_eiyjlwxvjdmdg5ec.defaulted('active', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('apis', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('extra', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('state', $_9hia1zy7jdmdg5gu)
  ]);
  var create$1 = function (data) {
    var value = $_3tzholy2jdmdg5fn.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_5v3gfpxrjdmdg5d8.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_3tzholy2jdmdg5fn.objOfOnly([
    $_eiyjlwxvjdmdg5ec.strict('branchKey'),
    $_eiyjlwxvjdmdg5ec.strict('branches'),
    $_eiyjlwxvjdmdg5ec.strict('name'),
    $_eiyjlwxvjdmdg5ec.defaulted('active', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('apis', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('extra', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('state', $_9hia1zy7jdmdg5gu)
  ]);
  var createModes$1 = function (data) {
    var value = $_3tzholy2jdmdg5fn.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_5v3gfpxrjdmdg5d8.createModes($_3tzholy2jdmdg5fn.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_djhbsfxqjdmdg5cx = {
    derive: derive$2,
    revoke: $_a03c0uw7jdmdg563.constant(undefined),
    noActive: $_a03c0uw7jdmdg563.constant({}),
    noApis: $_a03c0uw7jdmdg563.constant({}),
    noExtra: $_a03c0uw7jdmdg563.constant({}),
    noState: $_a03c0uw7jdmdg563.constant($_9hia1zy7jdmdg5gu),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_f4ouopxfjdmdg5b4.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_f4ouopxfjdmdg5b4.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_4p2wg0wgjdmdg56u.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_f4ouopxfjdmdg5b4.set(element, attr, nu.join(' '));
    else
      $_f4ouopxfjdmdg5b4.remove(element, attr);
  };
  var $_ft0kc2yejdmdg5hg = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_ft0kc2yejdmdg5hg.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_ft0kc2yejdmdg5hg.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_ft0kc2yejdmdg5hg.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_4p2wg0wgjdmdg56u.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_2b8n83ydjdmdg5hd = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_2b8n83ydjdmdg5hd.supports(element))
      element.dom().classList.add(clazz);
    else
      $_2b8n83ydjdmdg5hd.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_2b8n83ydjdmdg5hd.supports(element) ? element.dom().classList : $_2b8n83ydjdmdg5hd.get(element);
    if (classList.length === 0) {
      $_f4ouopxfjdmdg5b4.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_2b8n83ydjdmdg5hd.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_2b8n83ydjdmdg5hd.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_2b8n83ydjdmdg5hd.supports(element) ? element.dom().classList.toggle(clazz) : $_2b8n83ydjdmdg5hd.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_2b8n83ydjdmdg5hd.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_2b8n83ydjdmdg5hd.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_2b8n83ydjdmdg5hd.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_2b8n83ydjdmdg5hd.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_644gmdybjdmdg5h9 = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_644gmdybjdmdg5h9.remove(element, removeCls);
    $_644gmdybjdmdg5h9.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_644gmdybjdmdg5h9.remove(component.element(), swapConfig.alpha());
    $_644gmdybjdmdg5h9.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_644gmdybjdmdg5h9.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_644gmdybjdmdg5h9.has(component.element(), swapConfig.omega());
  };
  var $_7x4y05yajdmdg5h6 = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_eiyjlwxvjdmdg5ec.strict('alpha'),
    $_eiyjlwxvjdmdg5ec.strict('omega')
  ];

  var Swapping = $_djhbsfxqjdmdg5cx.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_7x4y05yajdmdg5h6
  });

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_3ixh81wnjdmdg57o.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_bue8box7jdmdg5a1.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_3ixh81wnjdmdg57o.isFunction(isRoot) ? isRoot : $_a03c0uw7jdmdg563.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_b21tyhx3jdmdg59q.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_b21tyhx3jdmdg59q.fromDom(element.parentNode), function (x) {
      return !$_3r00diwxjdmdg58u.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_4p2wg0wgjdmdg56u.find(scope.dom().childNodes, $_a03c0uw7jdmdg563.compose(predicate, $_b21tyhx3jdmdg59q.fromDom));
    return result.map($_b21tyhx3jdmdg59q.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_b21tyhx3jdmdg59q.fromDom(element.childNodes[i])))
          return Option.some($_b21tyhx3jdmdg59q.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_4py5u5yjjdmdg5i1 = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_4py5u5yjjdmdg5i1.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_4py5u5yjjdmdg5i1.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_4py5u5yjjdmdg5i1.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_4py5u5yjjdmdg5i1.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_4py5u5yjjdmdg5i1.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_4py5u5yjjdmdg5i1.descendant(scope, predicate).isSome();
  };
  var $_2575f4yijdmdg5hz = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_dahlvqwrjdmdg589.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_b21tyhx3jdmdg59q.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_dahlvqwrjdmdg589.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_2575f4yijdmdg5hz.closest(a, $_a03c0uw7jdmdg563.curry($_3r00diwxjdmdg58u.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_a03c0uw7jdmdg563.noop);
  };
  var search = function (element) {
    return active($_dahlvqwrjdmdg589.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_4tq63ayhjdmdg5hu = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_7gos3kynjdmdg5ie = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_a1yth8yojdmdg5if = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_dw9uskypjdmdg5ig = {
    formatChanged: $_a03c0uw7jdmdg563.constant(formatChanged),
    orientationChanged: $_a03c0uw7jdmdg563.constant(orientationChanged),
    dropupDismissed: $_a03c0uw7jdmdg563.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_4p2wg0wgjdmdg56u.filter(channels, function (ch) {
      return $_4p2wg0wgjdmdg56u.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_a1h469wojdmdg57q.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_4p2wg0wgjdmdg56u.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_3tzholy2jdmdg5fn.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_eyl1edxajdmdg5ao.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_8oyqy7ysjdmdg5iz = { events: events };

  var menuFields = [
    $_eiyjlwxvjdmdg5ec.strict('menu'),
    $_eiyjlwxvjdmdg5ec.strict('selectedMenu')
  ];
  var itemFields = [
    $_eiyjlwxvjdmdg5ec.strict('item'),
    $_eiyjlwxvjdmdg5ec.strict('selectedItem')
  ];
  var schema = $_3tzholy2jdmdg5fn.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_3tzholy2jdmdg5fn.objOfOnly(itemFields);
  var $_1gtz7zyvjdmdg5jq = {
    menuFields: $_a03c0uw7jdmdg563.constant(menuFields),
    itemFields: $_a03c0uw7jdmdg563.constant(itemFields),
    schema: $_a03c0uw7jdmdg563.constant(schema),
    itemSchema: $_a03c0uw7jdmdg563.constant(itemSchema)
  };

  var initSize = $_eiyjlwxvjdmdg5ec.strictObjOf('initSize', [
    $_eiyjlwxvjdmdg5ec.strict('numColumns'),
    $_eiyjlwxvjdmdg5ec.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_eiyjlwxvjdmdg5ec.strictOf('markers', $_1gtz7zyvjdmdg5jq.itemSchema());
  };
  var menuMarkers = function () {
    return $_eiyjlwxvjdmdg5ec.strictOf('markers', $_1gtz7zyvjdmdg5jq.schema());
  };
  var tieredMenuMarkers = function () {
    return $_eiyjlwxvjdmdg5ec.strictObjOf('markers', [$_eiyjlwxvjdmdg5ec.strict('backgroundMenu')].concat($_1gtz7zyvjdmdg5jq.menuFields()).concat($_1gtz7zyvjdmdg5jq.itemFields()));
  };
  var markers = function (required) {
    return $_eiyjlwxvjdmdg5ec.strictObjOf('markers', $_4p2wg0wgjdmdg56u.map(required, $_eiyjlwxvjdmdg5ec.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_bhxux7x9jdmdg5a9.getTrace();
    return $_eiyjlwxvjdmdg5ec.field(fieldName, fieldName, presence, $_3tzholy2jdmdg5fn.valueOf(function (f) {
      return Result.value(function () {
        $_bhxux7x9jdmdg5a9.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_du2dcgxwjdmdg5eh.defaulted($_a03c0uw7jdmdg563.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_du2dcgxwjdmdg5eh.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_du2dcgxwjdmdg5eh.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_du2dcgxwjdmdg5eh.strict());
  };
  var output$1 = function (name, value) {
    return $_eiyjlwxvjdmdg5ec.state(name, $_a03c0uw7jdmdg563.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_eiyjlwxvjdmdg5ec.state(name, $_a03c0uw7jdmdg563.identity);
  };
  var $_2q529cyujdmdg5je = {
    initSize: $_a03c0uw7jdmdg563.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_eiyjlwxvjdmdg5ec.strictOf('channels', $_3tzholy2jdmdg5fn.setOf(Result.value, $_3tzholy2jdmdg5fn.objOfOnly([
      $_2q529cyujdmdg5je.onStrictHandler('onReceive'),
      $_eiyjlwxvjdmdg5ec.defaulted('schema', $_3tzholy2jdmdg5fn.anyValue())
    ])))];

  var Receiving = $_djhbsfxqjdmdg5cx.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_8oyqy7ysjdmdg5iz
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_644gmdybjdmdg5h9.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_644gmdybjdmdg5h9.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_644gmdybjdmdg5h9.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_644gmdybjdmdg5h9.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_6r1ppcyyjdmdg5k7 = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_6ksvbly5jdmdg5g7.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_5v3gfpxrjdmdg5d8.executeEvent(toggleConfig, toggleState, $_6r1ppcyyjdmdg5k7.toggle);
    var load = $_5v3gfpxrjdmdg5d8.loadEvent(toggleConfig, toggleState, $_6r1ppcyyjdmdg5k7.onLoad);
    return $_binsu8xsjdmdg5dn.derive($_4p2wg0wgjdmdg56u.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_91i0w6yxjdmdg5k1 = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_41506tx8jdmdg5a3.name(elem);
    var suffix = rawTag === 'input' && $_f4ouopxfjdmdg5b4.has(elem, 'type') ? ':' + $_f4ouopxfjdmdg5b4.get(elem, 'type') : '';
    return $_alqjtqxgjdmdg5bc.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_f4ouopxfjdmdg5b4.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_f4ouopxfjdmdg5b4.get(elem, 'role');
      return $_alqjtqxgjdmdg5bc.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_4p2wg0wgjdmdg56u.each(attributes, function (attr) {
      $_f4ouopxfjdmdg5b4.set(component.element(), attr, status);
    });
  };
  var $_86xjmpz0jdmdg5kv = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_eiyjlwxvjdmdg5ec.defaulted('selected', false),
    $_eiyjlwxvjdmdg5ec.strict('toggleClass'),
    $_eiyjlwxvjdmdg5ec.defaulted('toggleOnExecute', true),
    $_eiyjlwxvjdmdg5ec.defaultedOf('aria', { mode: 'none' }, $_3tzholy2jdmdg5fn.choose('mode', {
      'pressed': [
        $_eiyjlwxvjdmdg5ec.defaulted('syncWithExpanded', false),
        $_2q529cyujdmdg5je.output('update', $_86xjmpz0jdmdg5kv.updatePressed)
      ],
      'checked': [$_2q529cyujdmdg5je.output('update', $_86xjmpz0jdmdg5kv.updateChecked)],
      'expanded': [$_2q529cyujdmdg5je.output('update', $_86xjmpz0jdmdg5kv.updateExpanded)],
      'selected': [$_2q529cyujdmdg5je.output('update', $_86xjmpz0jdmdg5kv.updateSelected)],
      'none': [$_2q529cyujdmdg5je.output('update', $_a03c0uw7jdmdg563.noop)]
    }))
  ];

  var Toggling = $_djhbsfxqjdmdg5cx.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_91i0w6yxjdmdg5k1,
    apis: $_6r1ppcyyjdmdg5k7
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_alqjtqxgjdmdg5bc.wrap($_dw9uskypjdmdg5ig.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_alqjtqxgjdmdg5bc.wrap($_dw9uskypjdmdg5ig.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_d6wqf6z1jdmdg5l4 = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_93lc86z2jdmdg5l8 = {
    resolve: resolve$1,
    prefix: $_a03c0uw7jdmdg563.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_4tq63ayhjdmdg5hu.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_4tq63ayhjdmdg5hu.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_4tq63ayhjdmdg5hu.hasFocus(component.element());
  };
  var $_x1da9z7jdmdg5lw = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_6ksvbly5jdmdg5g7.nu({});
    else
      return $_6ksvbly5jdmdg5g7.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.focus(), function (component, simulatedEvent) {
        $_x1da9z7jdmdg5lw.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_byyb4uz6jdmdg5lr = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_2q529cyujdmdg5je.onHandler('onFocus'),
    $_eiyjlwxvjdmdg5ec.defaulted('ignore', false)
  ];

  var Focusing = $_djhbsfxqjdmdg5cx.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_byyb4uz6jdmdg5lr,
    apis: $_x1da9z7jdmdg5lw
  });

  var $_4afaqfzdjdmdg5mz = {
    BACKSPACE: $_a03c0uw7jdmdg563.constant([8]),
    TAB: $_a03c0uw7jdmdg563.constant([9]),
    ENTER: $_a03c0uw7jdmdg563.constant([13]),
    SHIFT: $_a03c0uw7jdmdg563.constant([16]),
    CTRL: $_a03c0uw7jdmdg563.constant([17]),
    ALT: $_a03c0uw7jdmdg563.constant([18]),
    CAPSLOCK: $_a03c0uw7jdmdg563.constant([20]),
    ESCAPE: $_a03c0uw7jdmdg563.constant([27]),
    SPACE: $_a03c0uw7jdmdg563.constant([32]),
    PAGEUP: $_a03c0uw7jdmdg563.constant([33]),
    PAGEDOWN: $_a03c0uw7jdmdg563.constant([34]),
    END: $_a03c0uw7jdmdg563.constant([35]),
    HOME: $_a03c0uw7jdmdg563.constant([36]),
    LEFT: $_a03c0uw7jdmdg563.constant([37]),
    UP: $_a03c0uw7jdmdg563.constant([38]),
    RIGHT: $_a03c0uw7jdmdg563.constant([39]),
    DOWN: $_a03c0uw7jdmdg563.constant([40]),
    INSERT: $_a03c0uw7jdmdg563.constant([45]),
    DEL: $_a03c0uw7jdmdg563.constant([46]),
    META: $_a03c0uw7jdmdg563.constant([
      91,
      93,
      224
    ]),
    F10: $_a03c0uw7jdmdg563.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_gbadrlzijdmdg5o9 = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_bue8box7jdmdg5a1.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_4p2wg0wgjdmdg56u.filter($_dahlvqwrjdmdg589.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_4p2wg0wgjdmdg56u.filter($_dahlvqwrjdmdg589.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_4p2wg0wgjdmdg56u.filter($_dahlvqwrjdmdg589.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_4p2wg0wgjdmdg56u.each($_dahlvqwrjdmdg589.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_bdcr20zkjdmdg5oc = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_9mlux3x2jdmdg59d.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_bdcr20zkjdmdg5oc.ancestors(scope, function (e) {
      return $_9mlux3x2jdmdg59d.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_bdcr20zkjdmdg5oc.siblings(scope, function (e) {
      return $_9mlux3x2jdmdg59d.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_bdcr20zkjdmdg5oc.children(scope, function (e) {
      return $_9mlux3x2jdmdg59d.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_9mlux3x2jdmdg59d.all(selector, scope);
  };
  var $_f2xur6zjjdmdg5ob = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_9mlux3x2jdmdg59d.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_4py5u5yjjdmdg5i1.ancestor(scope, function (e) {
      return $_9mlux3x2jdmdg59d.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_4py5u5yjjdmdg5i1.sibling(scope, function (e) {
      return $_9mlux3x2jdmdg59d.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_4py5u5yjjdmdg5i1.child(scope, function (e) {
      return $_9mlux3x2jdmdg59d.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_9mlux3x2jdmdg59d.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_9mlux3x2jdmdg59d.is, ancestor$2, scope, selector, isRoot);
  };
  var $_ce7mdfzljdmdg5of = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_f2xur6zjjdmdg5ob.descendants(component.element(), '.' + hConfig.highlightClass());
    $_4p2wg0wgjdmdg56u.each(highlighted, function (h) {
      $_644gmdybjdmdg5h9.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_644gmdybjdmdg5h9.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_644gmdybjdmdg5h9.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_f2xur6zjjdmdg5ob.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_fe09vsxojdmdg5cf.cat($_4p2wg0wgjdmdg56u.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_4p2wg0wgjdmdg56u.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_644gmdybjdmdg5h9.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_ce7mdfzljdmdg5of.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_f2xur6zjjdmdg5ob.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_ce7mdfzljdmdg5of.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_f2xur6zjjdmdg5ob.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_f2xur6zjjdmdg5ob.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_4p2wg0wgjdmdg56u.findIndex(items, function (item) {
      return $_644gmdybjdmdg5h9.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_gbadrlzijdmdg5o9.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_59hss1zhjdmdg5nv = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_eiyjlwxvjdmdg5ec.strict('highlightClass'),
    $_eiyjlwxvjdmdg5ec.strict('itemClass'),
    $_2q529cyujdmdg5je.onHandler('onHighlight'),
    $_2q529cyujdmdg5je.onHandler('onDehighlight')
  ];

  var Highlighting = $_djhbsfxqjdmdg5cx.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_59hss1zhjdmdg5nv
  });

  var dom = function () {
    var get = function (component) {
      return $_4tq63ayhjdmdg5hu.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_a03c0uw7jdmdg563.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_4ip23czfjdmdg5nc = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_4p2wg0wgjdmdg56u.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_4p2wg0wgjdmdg56u.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_fha7glzojdmdg5os = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_a03c0uw7jdmdg563.not(isShift),
    isControl: isControl,
    isNotControl: $_a03c0uw7jdmdg563.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_fha7glzojdmdg5os.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_4p2wg0wgjdmdg56u.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_9cjyurznjdmdg5oo = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_eiyjlwxvjdmdg5ec.defaulted('focusManager', $_4ip23czfjdmdg5nc.dom()),
        $_2q529cyujdmdg5je.output('handler', me),
        $_2q529cyujdmdg5je.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_9cjyurznjdmdg5oo.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_binsu8xsjdmdg5dn.derive(optFocusIn.map(function (focusIn) {
        return $_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_9dh6dlwmjdmdg57m.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_9e4aumzejdmdg5n5 = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_4p2wg0wgjdmdg56u.reverse(values.slice(0, index));
    var after = $_4p2wg0wgjdmdg56u.reverse(values.slice(index + 1));
    return $_4p2wg0wgjdmdg56u.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_4p2wg0wgjdmdg56u.reverse(values.slice(0, index));
    return $_4p2wg0wgjdmdg56u.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_4p2wg0wgjdmdg56u.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_4p2wg0wgjdmdg56u.find(after, predicate);
  };
  var $_cf0o5izpjdmdg5oz = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_dm0288zsjdmdg5pe = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_3ixh81wnjdmdg57o.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_dm0288zsjdmdg5pe.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_dm0288zsjdmdg5pe.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_a1h469wojdmdg57q.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_a1h469wojdmdg57q.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_bue8box7jdmdg5a1.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_dm0288zsjdmdg5pe.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_dm0288zsjdmdg5pe.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_b21tyhx3jdmdg59q.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_f4ouopxfjdmdg5b4.has(element, 'style') && $_ergp8awjjdmdg57g.trim($_f4ouopxfjdmdg5b4.get(element, 'style')) === '') {
      $_f4ouopxfjdmdg5b4.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_f4ouopxfjdmdg5b4.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_f4ouopxfjdmdg5b4.remove : $_f4ouopxfjdmdg5b4.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_dm0288zsjdmdg5pe.isSupported(sourceDom) && $_dm0288zsjdmdg5pe.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_41506tx8jdmdg5a3.isElement(source) || !$_41506tx8jdmdg5a3.isElement(destination))
      return;
    $_4p2wg0wgjdmdg56u.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_bstocczrjdmdg5p4 = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_3ixh81wnjdmdg57o.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_dm0288zsjdmdg5pe.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_bstocczrjdmdg5p4.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_4p2wg0wgjdmdg56u.foldl(properties, function (acc, property) {
        var val = $_bstocczrjdmdg5p4.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_bue8box7jdmdg5a1.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_bstocczrjdmdg5p4.set(element, 'max-height', absMax + 'px');
  };
  var $_g2waijzqjdmdg5p2 = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_eiyjlwxvjdmdg5ec.option('onEscape'),
      $_eiyjlwxvjdmdg5ec.option('onEnter'),
      $_eiyjlwxvjdmdg5ec.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_eiyjlwxvjdmdg5ec.defaulted('firstTabstop', 0),
      $_eiyjlwxvjdmdg5ec.defaulted('useTabstopAt', $_a03c0uw7jdmdg563.constant(true)),
      $_eiyjlwxvjdmdg5ec.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_ce7mdfzljdmdg5of.closest(element, sel);
      }).getOr(element);
      return $_g2waijzqjdmdg5p2.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_f2xur6zjjdmdg5ob.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_4p2wg0wgjdmdg56u.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_ce7mdfzljdmdg5of.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_f2xur6zjjdmdg5ob.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_4p2wg0wgjdmdg56u.findIndex(tabstops, $_a03c0uw7jdmdg563.curry($_3r00diwxjdmdg58u.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_cf0o5izpjdmdg5oz.cyclePrev : $_cf0o5izpjdmdg5oz.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_cf0o5izpjdmdg5oz.cycleNext : $_cf0o5izpjdmdg5oz.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_a03c0uw7jdmdg563.constant([
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isShift,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
      ]), goBackwards),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB()), goForwards),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ESCAPE()), exit),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isNotShift,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ENTER())
      ]), execute)
    ]);
    var getEvents = $_a03c0uw7jdmdg563.constant({});
    var getApis = $_a03c0uw7jdmdg563.constant({});
    return $_9e4aumzejdmdg5n5.typical(schema, $_9hia1zy7jdmdg5gu.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_3uidqczcjdmdg5mk = { create: create$2 };

  var AcyclicType = $_3uidqczcjdmdg5mk.create($_eiyjlwxvjdmdg5ec.state('cyclic', $_a03c0uw7jdmdg563.constant(false)));

  var CyclicType = $_3uidqczcjdmdg5mk.create($_eiyjlwxvjdmdg5ec.state('cyclic', $_a03c0uw7jdmdg563.constant(true)));

  var inside = function (target) {
    return $_41506tx8jdmdg5a3.name(target) === 'input' && $_f4ouopxfjdmdg5b4.get(target, 'type') !== 'radio' || $_41506tx8jdmdg5a3.name(target) === 'textarea';
  };
  var $_bnoawzwjdmdg5q2 = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_14uwprw4jdmdg55l.dispatch(component, focused, $_16nbvcw5jdmdg55u.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_bnoawzwjdmdg5q2.inside(focused) && $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_5y18nezxjdmdg5qh = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_eiyjlwxvjdmdg5ec.defaulted('execute', $_5y18nezxjdmdg5qh.defaultExecute),
    $_eiyjlwxvjdmdg5ec.defaulted('useSpace', false),
    $_eiyjlwxvjdmdg5ec.defaulted('useEnter', true),
    $_eiyjlwxvjdmdg5ec.defaulted('useControlEnter', false),
    $_eiyjlwxvjdmdg5ec.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_bnoawzwjdmdg5q2.inside(component.element()) ? $_4afaqfzdjdmdg5mz.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_4afaqfzdjdmdg5mz.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_4afaqfzdjdmdg5mz.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isControl,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_a03c0uw7jdmdg563.constant({});
  var getApis = $_a03c0uw7jdmdg563.constant({});
  var ExecutionType = $_9e4aumzejdmdg5n5.typical(schema$1, $_9hia1zy7jdmdg5gu.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_a03c0uw7jdmdg563.constant(numRows),
        numColumns: $_a03c0uw7jdmdg563.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_a03c0uw7jdmdg563.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_5qqsbgzzjdmdg5qz = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_bstocczrjdmdg5p4.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_emk5ai101jdmdg5rc = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_emk5ai101jdmdg5rc.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_emk5ai101jdmdg5rc.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_fl62kw100jdmdg5r8 = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_8q0o9uwsjdmdg58l.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_4p2wg0wgjdmdg56u.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_4o5r4b103jdmdg5rp = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_bstocczrjdmdg5p4.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_a03c0uw7jdmdg563.curry($_bstocczrjdmdg5p4.set, element, property, initial);
    var on = $_a03c0uw7jdmdg563.curry($_bstocczrjdmdg5p4.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_fjtzgh104jdmdg5rt = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_fjtzgh104jdmdg5rt.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_a03c0uw7jdmdg563.curry($_3r00diwxjdmdg58u.eq, current);
    var candidates = $_f2xur6zjjdmdg5ob.descendants(container, selector);
    var visible = $_4p2wg0wgjdmdg56u.filter(candidates, $_fjtzgh104jdmdg5rt.isVisible);
    return $_4o5r4b103jdmdg5rp.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_4p2wg0wgjdmdg56u.findIndex(elements, function (elem) {
      return $_3r00diwxjdmdg58u.eq(target, elem);
    });
  };
  var $_dt0tpq102jdmdg5rf = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_gbadrlzijdmdg5o9.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_a03c0uw7jdmdg563.constant(oldRow),
        column: $_a03c0uw7jdmdg563.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_gbadrlzijdmdg5o9.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_gbadrlzijdmdg5o9.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_a03c0uw7jdmdg563.constant(newRow),
        column: $_a03c0uw7jdmdg563.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_e6ivsd105jdmdg5s0 = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_eiyjlwxvjdmdg5ec.strict('selector'),
    $_eiyjlwxvjdmdg5ec.defaulted('execute', $_5y18nezxjdmdg5qh.defaultExecute),
    $_2q529cyujdmdg5je.onKeyboardHandler('onEscape'),
    $_eiyjlwxvjdmdg5ec.defaulted('captureTab', false),
    $_2q529cyujdmdg5je.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_ce7mdfzljdmdg5of.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_ce7mdfzljdmdg5of.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_dt0tpq102jdmdg5rf.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_e6ivsd105jdmdg5s0.cycleLeft);
  var moveRight = doMove($_e6ivsd105jdmdg5s0.cycleRight);
  var moveNorth = doMove($_e6ivsd105jdmdg5s0.cycleUp);
  var moveSouth = doMove($_e6ivsd105jdmdg5s0.cycleDown);
  var getRules$1 = $_a03c0uw7jdmdg563.constant([
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.LEFT()), $_fl62kw100jdmdg5r8.west(moveLeft, moveRight)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.RIGHT()), $_fl62kw100jdmdg5r8.east(moveLeft, moveRight)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.UP()), $_fl62kw100jdmdg5r8.north(moveNorth)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.DOWN()), $_fl62kw100jdmdg5r8.south(moveSouth)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
      $_fha7glzojdmdg5os.isShift,
      $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
    ]), handleTab),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
      $_fha7glzojdmdg5os.isNotShift,
      $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
    ]), handleTab),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ESCAPE()), doEscape),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE().concat($_4afaqfzdjdmdg5mz.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_a03c0uw7jdmdg563.constant({});
  var getApis$1 = {};
  var FlatgridType = $_9e4aumzejdmdg5n5.typical(schema$2, $_5qqsbgzzjdmdg5qz.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_dt0tpq102jdmdg5rf.locateVisible(container, current, selector, $_a03c0uw7jdmdg563.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_gbadrlzijdmdg5o9.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_4m9tm4107jdmdg5so = { horizontal: horizontal };

  var schema$3 = [
    $_eiyjlwxvjdmdg5ec.strict('selector'),
    $_eiyjlwxvjdmdg5ec.defaulted('getInitial', Option.none),
    $_eiyjlwxvjdmdg5ec.defaulted('execute', $_5y18nezxjdmdg5qh.defaultExecute),
    $_eiyjlwxvjdmdg5ec.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_ce7mdfzljdmdg5of.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_ce7mdfzljdmdg5of.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_4m9tm4107jdmdg5so.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_4m9tm4107jdmdg5so.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.LEFT().concat($_4afaqfzdjdmdg5mz.UP())), doMove$1($_fl62kw100jdmdg5r8.west(moveLeft$1, moveRight$1))),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.RIGHT().concat($_4afaqfzdjdmdg5mz.DOWN())), doMove$1($_fl62kw100jdmdg5r8.east(moveLeft$1, moveRight$1))),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ENTER()), execute$2),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_a03c0uw7jdmdg563.constant({});
  var getApis$2 = $_a03c0uw7jdmdg563.constant({});
  var FlowType = $_9e4aumzejdmdg5n5.typical(schema$3, $_9hia1zy7jdmdg5gu.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_8q0o9uwsjdmdg58l.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_gbadrlzijdmdg5o9.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_gbadrlzijdmdg5o9.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_gbadrlzijdmdg5o9.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_gbadrlzijdmdg5o9.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_gbadrlzijdmdg5o9.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_gbadrlzijdmdg5o9.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_450mnf109jdmdg5tg = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_eiyjlwxvjdmdg5ec.strictObjOf('selectors', [
      $_eiyjlwxvjdmdg5ec.strict('row'),
      $_eiyjlwxvjdmdg5ec.strict('cell')
    ]),
    $_eiyjlwxvjdmdg5ec.defaulted('cycles', true),
    $_eiyjlwxvjdmdg5ec.defaulted('previousSelector', Option.none),
    $_eiyjlwxvjdmdg5ec.defaulted('execute', $_5y18nezxjdmdg5qh.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_ce7mdfzljdmdg5of.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_4tq63ayhjdmdg5hu.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_4p2wg0wgjdmdg56u.map(rows, function (row) {
      return $_f2xur6zjjdmdg5ob.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_ce7mdfzljdmdg5of.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_f2xur6zjjdmdg5ob.descendants(inRow, matrixConfig.selectors().cell());
        return $_dt0tpq102jdmdg5rf.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_f2xur6zjjdmdg5ob.descendants(element, matrixConfig.selectors().row());
          return $_dt0tpq102jdmdg5rf.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_450mnf109jdmdg5tg.cycleLeft, $_450mnf109jdmdg5tg.moveLeft);
  var moveRight$3 = doMove$2($_450mnf109jdmdg5tg.cycleRight, $_450mnf109jdmdg5tg.moveRight);
  var moveNorth$1 = doMove$2($_450mnf109jdmdg5tg.cycleUp, $_450mnf109jdmdg5tg.moveUp);
  var moveSouth$1 = doMove$2($_450mnf109jdmdg5tg.cycleDown, $_450mnf109jdmdg5tg.moveDown);
  var getRules$3 = $_a03c0uw7jdmdg563.constant([
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.LEFT()), $_fl62kw100jdmdg5r8.west(moveLeft$3, moveRight$3)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.RIGHT()), $_fl62kw100jdmdg5r8.east(moveLeft$3, moveRight$3)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.UP()), $_fl62kw100jdmdg5r8.north(moveNorth$1)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.DOWN()), $_fl62kw100jdmdg5r8.south(moveSouth$1)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE().concat($_4afaqfzdjdmdg5mz.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_a03c0uw7jdmdg563.constant({});
  var getApis$3 = $_a03c0uw7jdmdg563.constant({});
  var MatrixType = $_9e4aumzejdmdg5n5.typical(schema$4, $_9hia1zy7jdmdg5gu.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_eiyjlwxvjdmdg5ec.strict('selector'),
    $_eiyjlwxvjdmdg5ec.defaulted('execute', $_5y18nezxjdmdg5qh.defaultExecute),
    $_eiyjlwxvjdmdg5ec.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_ce7mdfzljdmdg5of.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_4m9tm4107jdmdg5so.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_4m9tm4107jdmdg5so.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_fl62kw100jdmdg5r8.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_fl62kw100jdmdg5r8.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_a03c0uw7jdmdg563.constant([
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.UP()), $_fl62kw100jdmdg5r8.move(moveUp$1)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.DOWN()), $_fl62kw100jdmdg5r8.move(moveDown$1)),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
      $_fha7glzojdmdg5os.isShift,
      $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
    ]), fireShiftTab),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
      $_fha7glzojdmdg5os.isNotShift,
      $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
    ]), fireTab),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ENTER()), execute$4),
    $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_a03c0uw7jdmdg563.constant({});
  var getApis$4 = $_a03c0uw7jdmdg563.constant({});
  var MenuType = $_9e4aumzejdmdg5n5.typical(schema$5, $_9hia1zy7jdmdg5gu.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_2q529cyujdmdg5je.onKeyboardHandler('onSpace'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onEnter'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onShiftEnter'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onLeft'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onRight'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onTab'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onShiftTab'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onUp'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onDown'),
    $_2q529cyujdmdg5je.onKeyboardHandler('onEscape'),
    $_eiyjlwxvjdmdg5ec.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE()), executeInfo.onSpace()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isNotShift,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ENTER())
      ]), executeInfo.onEnter()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isShift,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isShift,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
      ]), executeInfo.onShiftTab()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.and([
        $_fha7glzojdmdg5os.isNotShift,
        $_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.TAB())
      ]), executeInfo.onTab()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.UP()), executeInfo.onUp()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.DOWN()), executeInfo.onDown()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.LEFT()), executeInfo.onLeft()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.RIGHT()), executeInfo.onRight()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.SPACE()), executeInfo.onSpace()),
      $_9cjyurznjdmdg5oo.rule($_fha7glzojdmdg5os.inSet($_4afaqfzdjdmdg5mz.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_a03c0uw7jdmdg563.constant({});
  var getApis$5 = $_a03c0uw7jdmdg563.constant({});
  var SpecialType = $_9e4aumzejdmdg5n5.typical(schema$6, $_9hia1zy7jdmdg5gu.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_f04uudzajdmdg5mb = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_djhbsfxqjdmdg5cx.createModes({
    branchKey: 'mode',
    branches: $_f04uudzajdmdg5mb,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_alqjtqxgjdmdg5bc.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_5qqsbgzzjdmdg5qz
  });

  var field$1 = function (name, forbidden) {
    return $_eiyjlwxvjdmdg5ec.defaultedObjOf(name, {}, $_4p2wg0wgjdmdg56u.map(forbidden, function (f) {
      return $_eiyjlwxvjdmdg5ec.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_eiyjlwxvjdmdg5ec.state('dump', $_a03c0uw7jdmdg563.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_c92yb610cjdmdg5uc = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_cfy2j510fjdmdg5ux = { generate: generate$1 };

  var premadeTag = $_cfy2j510fjdmdg5ux.generate('alloy-premade');
  var apiConfig = $_cfy2j510fjdmdg5ux.generate('api');
  var premade = function (comp) {
    return $_alqjtqxgjdmdg5bc.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_alqjtqxgjdmdg5bc.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_bht4rcy4jdmdg5g0.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_54hcuy10ejdmdg5us = {
    apiConfig: $_a03c0uw7jdmdg563.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_aqbjpgxkjdmdg5br.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_eiyjlwxvjdmdg5ec.defaulted('factory', { sketch: $_a03c0uw7jdmdg563.identity });
  var fSchema = $_eiyjlwxvjdmdg5ec.defaulted('schema', []);
  var fName = $_eiyjlwxvjdmdg5ec.strict('name');
  var fPname = $_eiyjlwxvjdmdg5ec.field('pname', 'pname', $_du2dcgxwjdmdg5eh.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_cfy2j510fjdmdg5ux.generate(typeSpec.name) + '>';
  }), $_3tzholy2jdmdg5fn.anyValue());
  var fDefaults = $_eiyjlwxvjdmdg5ec.defaulted('defaults', $_a03c0uw7jdmdg563.constant({}));
  var fOverrides = $_eiyjlwxvjdmdg5ec.defaulted('overrides', $_a03c0uw7jdmdg563.constant({}));
  var requiredSpec = $_3tzholy2jdmdg5fn.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_3tzholy2jdmdg5fn.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_3tzholy2jdmdg5fn.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_3tzholy2jdmdg5fn.objOf([
    fFactory,
    fSchema,
    fName,
    $_eiyjlwxvjdmdg5ec.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_a03c0uw7jdmdg563.identity, $_a03c0uw7jdmdg563.identity, $_a03c0uw7jdmdg563.identity, $_a03c0uw7jdmdg563.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_3tzholy2jdmdg5fn.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_96sxjv10jjdmdg5w0 = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_a03c0uw7jdmdg563.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_aqbjpgxkjdmdg5br.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_4p2wg0wgjdmdg56u.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_a03c0uw7jdmdg563.constant(compSpec));
    return $_alqjtqxgjdmdg5bc.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_a1h469wojdmdg57q.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_g9tjlhy0jdmdg5fh.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_a03c0uw7jdmdg563.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_alqjtqxgjdmdg5bc.readOptFrom(value, 'components').getOr([]);
      var substituted = $_4p2wg0wgjdmdg56u.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_9dh6dlwmjdmdg57m.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_4p2wg0wgjdmdg56u.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_a03c0uw7jdmdg563.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_a1h469wojdmdg57q.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_a1h469wojdmdg57q.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_g9tjlhy0jdmdg5fh.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_11kggw10kjdmdg5wk = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_a03c0uw7jdmdg563.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_9dh6dlwmjdmdg57m.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_alqjtqxgjdmdg5bc.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_4p2wg0wgjdmdg56u.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_11kggw10kjdmdg5wk.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_a03c0uw7jdmdg563.constant(combine(detail, data, partSpec[$_96sxjv10jjdmdg5w0.original()]()));
      }, function (data) {
        internals[data.pname()] = $_11kggw10kjdmdg5wk.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_11kggw10kjdmdg5wk.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_4p2wg0wgjdmdg56u.map(units, function (u) {
            return data.factory().sketch($_9dh6dlwmjdmdg57m.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_a03c0uw7jdmdg563.constant(internals),
      externals: $_a03c0uw7jdmdg563.constant(externals)
    };
  };
  var $_c3pxj010ijdmdg5vq = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_4p2wg0wgjdmdg56u.each(parts, function (part) {
      $_96sxjv10jjdmdg5w0.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_3tzholy2jdmdg5fn.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_3tzholy2jdmdg5fn.objOf(np.schema()), config);
          return $_9dh6dlwmjdmdg57m.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_11kggw10kjdmdg5wk.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_11kggw10kjdmdg5wk.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_4p2wg0wgjdmdg56u.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_eiyjlwxvjdmdg5ec.strictObjOf(data.name(), data.schema().concat([$_2q529cyujdmdg5je.snapshot($_96sxjv10jjdmdg5w0.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_4p2wg0wgjdmdg56u.map(parts, $_96sxjv10jjdmdg5w0.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_c3pxj010ijdmdg5vq.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_11kggw10kjdmdg5wk.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_4p2wg0wgjdmdg56u.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_a1h469wojdmdg57q.map(r, $_a03c0uw7jdmdg563.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_a1h469wojdmdg57q.map(detail.partUids(), function (pUid, k) {
      return $_a03c0uw7jdmdg563.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_4p2wg0wgjdmdg56u.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_a1h469wojdmdg57q.map(r, $_a03c0uw7jdmdg563.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_alqjtqxgjdmdg5bc.wrapAll($_4p2wg0wgjdmdg56u.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_eiyjlwxvjdmdg5ec.field('partUids', 'partUids', $_du2dcgxwjdmdg5eh.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_3tzholy2jdmdg5fn.anyValue());
  };
  var $_cw0gyz10hjdmdg5va = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_c1114i10mjdmdg5xb = {
    prefix: $_a03c0uw7jdmdg563.constant(prefix$1),
    idAttr: $_a03c0uw7jdmdg563.constant(idAttr)
  };

  var prefix$2 = $_c1114i10mjdmdg5xb.prefix();
  var idAttr$1 = $_c1114i10mjdmdg5xb.idAttr();
  var write = function (label, elem) {
    var id = $_cfy2j510fjdmdg5ux.generate(prefix$2 + label);
    $_f4ouopxfjdmdg5b4.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_f4ouopxfjdmdg5b4.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_41506tx8jdmdg5a3.isElement(elem) ? $_f4ouopxfjdmdg5b4.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_ce7mdfzljdmdg5of.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_cfy2j510fjdmdg5ux.generate(prefix);
  };
  var revoke = function (elem) {
    $_f4ouopxfjdmdg5b4.remove(elem, idAttr$1);
  };
  var $_fr5ird10ljdmdg5wz = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_a03c0uw7jdmdg563.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_2q529cyujdmdg5je.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_eiyjlwxvjdmdg5ec.strictObjOf('parts', $_4p2wg0wgjdmdg56u.flatten([
      $_4p2wg0wgjdmdg56u.map(partNames, $_eiyjlwxvjdmdg5ec.strict),
      $_4p2wg0wgjdmdg56u.map(optPartNames, function (optPart) {
        return $_eiyjlwxvjdmdg5ec.defaulted(optPart, $_11kggw10kjdmdg5wk.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_eiyjlwxvjdmdg5ec.state('partUids', function (spec) {
      if (!$_alqjtqxgjdmdg5bc.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_g9tjlhy0jdmdg5fh.stringify(spec, null, 2));
      }
      var uids = $_a1h469wojdmdg57q.map(spec.parts, function (v, k) {
        return $_alqjtqxgjdmdg5bc.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_eiyjlwxvjdmdg5ec.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_eiyjlwxvjdmdg5ec.strict('uid'),
      $_eiyjlwxvjdmdg5ec.defaulted('dom', {}),
      $_eiyjlwxvjdmdg5ec.defaulted('components', []),
      $_2q529cyujdmdg5je.snapshot('originalSpec'),
      $_eiyjlwxvjdmdg5ec.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_3tzholy2jdmdg5fn.asRawOrDie(label + ' [SpecSchema]', $_3tzholy2jdmdg5fn.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_3tzholy2jdmdg5fn.asStructOrDie(label + ' [SpecSchema]', $_3tzholy2jdmdg5fn.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_9dh6dlwmjdmdg57m.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_9dh6dlwmjdmdg57m.deepMerge(original, behaviours);
  };
  var $_8m03l410njdmdg5xh = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_8m03l410njdmdg5xh.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_9dh6dlwmjdmdg57m.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_alqjtqxgjdmdg5bc.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_cw0gyz10hjdmdg5va.schemas(partTypes);
    var partUidsSchema = $_cw0gyz10hjdmdg5va.defaultUidsSchema(partTypes);
    var detail = $_8m03l410njdmdg5xh.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_cw0gyz10hjdmdg5va.substitutes(owner, detail, partTypes);
    var components = $_cw0gyz10hjdmdg5va.components(owner, detail, subs.internals());
    return $_9dh6dlwmjdmdg57m.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_alqjtqxgjdmdg5bc.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_9dh6dlwmjdmdg57m.deepMerge({ uid: $_fr5ird10ljdmdg5wz.generate('uid') }, spec);
  };
  var $_937vgj10gjdmdg5v2 = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_3tzholy2jdmdg5fn.objOfOnly([
    $_eiyjlwxvjdmdg5ec.strict('name'),
    $_eiyjlwxvjdmdg5ec.strict('factory'),
    $_eiyjlwxvjdmdg5ec.strict('configFields'),
    $_eiyjlwxvjdmdg5ec.defaulted('apis', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_3tzholy2jdmdg5fn.objOfOnly([
    $_eiyjlwxvjdmdg5ec.strict('name'),
    $_eiyjlwxvjdmdg5ec.strict('factory'),
    $_eiyjlwxvjdmdg5ec.strict('configFields'),
    $_eiyjlwxvjdmdg5ec.strict('partFields'),
    $_eiyjlwxvjdmdg5ec.defaulted('apis', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_3tzholy2jdmdg5fn.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_937vgj10gjdmdg5v2.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_a1h469wojdmdg57q.map(config.apis, $_54hcuy10ejdmdg5us.makeApi);
    var extraApis = $_a1h469wojdmdg57q.map(config.extraApis, function (f, k) {
      return $_bht4rcy4jdmdg5g0.markAsExtraApi(f, k);
    });
    return $_9dh6dlwmjdmdg57m.deepMerge({
      name: $_a03c0uw7jdmdg563.constant(config.name),
      partFields: $_a03c0uw7jdmdg563.constant([]),
      configFields: $_a03c0uw7jdmdg563.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_3tzholy2jdmdg5fn.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_937vgj10gjdmdg5v2.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_cw0gyz10hjdmdg5va.generate(config.name, config.partFields);
    var apis = $_a1h469wojdmdg57q.map(config.apis, $_54hcuy10ejdmdg5us.makeApi);
    var extraApis = $_a1h469wojdmdg57q.map(config.extraApis, function (f, k) {
      return $_bht4rcy4jdmdg5g0.markAsExtraApi(f, k);
    });
    return $_9dh6dlwmjdmdg57m.deepMerge({
      name: $_a03c0uw7jdmdg563.constant(config.name),
      partFields: $_a03c0uw7jdmdg563.constant(config.partFields),
      configFields: $_a03c0uw7jdmdg563.constant(config.configFields),
      sketch: sketch,
      parts: $_a03c0uw7jdmdg563.constant(parts)
    }, apis, extraApis);
  };
  var $_5fhi9810djdmdg5uk = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_14uwprw4jdmdg55l.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_dcymntw8jdmdg567.detect().deviceType.isTouch() ? [$_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.tap(), onClick)] : [
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.click(), onClick),
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mousedown(), onMousedown)
    ];
    return $_binsu8xsjdmdg5dn.derive($_4p2wg0wgjdmdg56u.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_6t9khj10ojdmdg5xw = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_6t9khj10ojdmdg5xw.events(detail.action());
    var optType = $_alqjtqxgjdmdg5bc.readOptFrom(detail.dom(), 'attributes').bind($_alqjtqxgjdmdg5bc.readOpt('type'));
    var optTag = $_alqjtqxgjdmdg5bc.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_c92yb610cjdmdg5uc.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_9dh6dlwmjdmdg57m.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_5fhi9810djdmdg5uk.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_eiyjlwxvjdmdg5ec.defaulted('uid', undefined),
      $_eiyjlwxvjdmdg5ec.strict('dom'),
      $_eiyjlwxvjdmdg5ec.defaulted('components', []),
      $_c92yb610cjdmdg5uc.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_eiyjlwxvjdmdg5ec.option('action'),
      $_eiyjlwxvjdmdg5ec.option('role'),
      $_eiyjlwxvjdmdg5ec.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_6ksvbly5jdmdg5g7.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.abort($_32ef1jw6jdmdg55z.selectstart(), $_a03c0uw7jdmdg563.constant(true))]);
  };
  var $_5lup0910qjdmdg5ya = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_djhbsfxqjdmdg5cx.create({
    fields: [],
    name: 'unselecting',
    active: $_5lup0910qjdmdg5ya
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_4p2wg0wgjdmdg56u.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_9dh6dlwmjdmdg57m.deepMerge(b, $_alqjtqxgjdmdg5bc.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_b21tyhx3jdmdg59q.fromHtml(html);
    var children = $_dahlvqwrjdmdg589.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_cdwp4wxcjdmdg5ax.get(elem) };
    return $_9dh6dlwmjdmdg57m.deepMerge({
      tag: $_41506tx8jdmdg5a3.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_9dh6dlwmjdmdg57m.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_4h952h10sjdmdg5yk = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_ergp8awjjdmdg57g.supplant(rawHtml, { prefix: $_93lc86z2jdmdg5l8.prefix() });
    return $_4h952h10sjdmdg5yk.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_97aw6e10rjdmdg5ye = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_djhbsfxqjdmdg5cx.derive([
      Toggling.config({
        toggleClass: $_93lc86z2jdmdg5l8.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_d6wqf6z1jdmdg5l4.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_8a1mr3z3jdmdg5la = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_apv7dn10xjdmdg604 = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_dcymntw8jdmdg567.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_14uwprw4jdmdg55l.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_apv7dn10xjdmdg604.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_apv7dn10xjdmdg604.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_apv7dn10xjdmdg604.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_9jnokm10wjdmdg5zv = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_a03c0uw7jdmdg563.constant(changeEvent)
  };

  var platform = $_dcymntw8jdmdg567.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_96sxjv10jjdmdg5w0.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.runActionExtra($_32ef1jw6jdmdg55z.touchstart(), action, [detail])]);
        var mouseEvents = $_binsu8xsjdmdg5dn.derive([
          $_binsu8xsjdmdg5dn.runActionExtra($_32ef1jw6jdmdg55z.mousedown(), action, [detail]),
          $_binsu8xsjdmdg5dn.runActionExtra($_32ef1jw6jdmdg55z.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_9jnokm10wjdmdg5zv.setToLedge);
  var redgePart = edgePart('right', $_9jnokm10wjdmdg5zv.setToRedge);
  var thumbPart = $_96sxjv10jjdmdg5w0.required({
    name: 'thumb',
    defaults: $_a03c0uw7jdmdg563.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_binsu8xsjdmdg5dn.derive([
          $_binsu8xsjdmdg5dn.redirectToPart($_32ef1jw6jdmdg55z.touchstart(), detail, 'spectrum'),
          $_binsu8xsjdmdg5dn.redirectToPart($_32ef1jw6jdmdg55z.touchmove(), detail, 'spectrum'),
          $_binsu8xsjdmdg5dn.redirectToPart($_32ef1jw6jdmdg55z.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_96sxjv10jjdmdg5w0.required({
    schema: [$_eiyjlwxvjdmdg5ec.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_9jnokm10wjdmdg5zv.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchstart(), moveToX),
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchmove(), moveToX)
      ]);
      var mouseEvents = $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mousedown(), moveToX),
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_djhbsfxqjdmdg5cx.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_9jnokm10wjdmdg5zv.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_9jnokm10wjdmdg5zv.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_aftwvc111jdmdg60t = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_binsu8xsjdmdg5dn.runOnAttached(function (comp, se) {
        $_aftwvc111jdmdg60t.onLoad(comp, repConfig, repState);
      }),
      $_binsu8xsjdmdg5dn.runOnDetached(function (comp, se) {
        $_aftwvc111jdmdg60t.onUnload(comp, repConfig, repState);
      })
    ] : [$_5v3gfpxrjdmdg5d8.loadEvent(repConfig, repState, $_aftwvc111jdmdg60t.onLoad)];
    return $_binsu8xsjdmdg5dn.derive(es);
  };
  var $_3d0pu2110jdmdg60n = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_at5z1b114jdmdg61d = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_alqjtqxgjdmdg5bc.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_eiyjlwxvjdmdg5ec.option('initialValue'),
    $_eiyjlwxvjdmdg5ec.strict('getFallbackEntry'),
    $_eiyjlwxvjdmdg5ec.strict('getDataKey'),
    $_eiyjlwxvjdmdg5ec.strict('setData'),
    $_2q529cyujdmdg5je.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_at5z1b114jdmdg61d.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_eiyjlwxvjdmdg5ec.strict('getValue'),
    $_eiyjlwxvjdmdg5ec.defaulted('setValue', $_a03c0uw7jdmdg563.noop),
    $_eiyjlwxvjdmdg5ec.option('initialValue'),
    $_2q529cyujdmdg5je.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_a03c0uw7jdmdg563.noop,
      state: $_9hia1zy7jdmdg5gu.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_eiyjlwxvjdmdg5ec.option('initialValue'),
    $_2q529cyujdmdg5je.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_at5z1b114jdmdg61d.memory
    })
  ];

  var RepresentSchema = [
    $_eiyjlwxvjdmdg5ec.defaultedOf('store', { mode: 'memory' }, $_3tzholy2jdmdg5fn.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_2q529cyujdmdg5je.onHandler('onSetValue'),
    $_eiyjlwxvjdmdg5ec.defaulted('resetOnDom', false)
  ];

  var me = $_djhbsfxqjdmdg5cx.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_3d0pu2110jdmdg60n,
    apis: $_aftwvc111jdmdg60t,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_at5z1b114jdmdg61d
  });

  var isTouch$2 = $_dcymntw8jdmdg567.detect().deviceType.isTouch();
  var SliderSchema = [
    $_eiyjlwxvjdmdg5ec.strict('min'),
    $_eiyjlwxvjdmdg5ec.strict('max'),
    $_eiyjlwxvjdmdg5ec.defaulted('stepSize', 1),
    $_eiyjlwxvjdmdg5ec.defaulted('onChange', $_a03c0uw7jdmdg563.noop),
    $_eiyjlwxvjdmdg5ec.defaulted('onInit', $_a03c0uw7jdmdg563.noop),
    $_eiyjlwxvjdmdg5ec.defaulted('onDragStart', $_a03c0uw7jdmdg563.noop),
    $_eiyjlwxvjdmdg5ec.defaulted('onDragEnd', $_a03c0uw7jdmdg563.noop),
    $_eiyjlwxvjdmdg5ec.defaulted('snapToGrid', false),
    $_eiyjlwxvjdmdg5ec.option('snapStart'),
    $_eiyjlwxvjdmdg5ec.strict('getInitialValue'),
    $_c92yb610cjdmdg5uc.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_eiyjlwxvjdmdg5ec.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_eiyjlwxvjdmdg5ec.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_bstocczrjdmdg5p4.set(element, 'max-width', absMax + 'px');
  };
  var $_doh637118jdmdg62m = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_dcymntw8jdmdg567.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_cw0gyz10hjdmdg5va.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_cw0gyz10hjdmdg5va.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_cw0gyz10hjdmdg5va.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_cw0gyz10hjdmdg5va.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_doh637118jdmdg62m.get(thumb.element()) / 2;
      $_bstocczrjdmdg5p4.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_bstocczrjdmdg5p4.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive($_4p2wg0wgjdmdg56u.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_cw0gyz10hjdmdg5va.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_a03c0uw7jdmdg563.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_c92yb610cjdmdg5uc.get(detail.sliderBehaviours())),
      events: $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.run($_9jnokm10wjdmdg5zv.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_binsu8xsjdmdg5dn.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_eest14117jdmdg623 = { sketch: sketch$1 };

  var Slider = $_5fhi9810djdmdg5uk.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_eest14117jdmdg623.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_8a1mr3z3jdmdg5la.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_68u9y8119jdmdg62o = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_bstocczrjdmdg5p4.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_bstocczrjdmdg5p4.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_97aw6e10rjdmdg5ye.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_97aw6e10rjdmdg5ye.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_djhbsfxqjdmdg5cx.derive([Toggling.config({ toggleClass: $_93lc86z2jdmdg5l8.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_97aw6e10rjdmdg5ye.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_djhbsfxqjdmdg5cx.derive([Toggling.config({ toggleClass: $_93lc86z2jdmdg5l8.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_djhbsfxqjdmdg5cx.derive([$_d6wqf6z1jdmdg5l4.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_68u9y8119jdmdg62o.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_7dj3zx10tjdmdg5z3 = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_3tzholy2jdmdg5fn.objOfOnly([
    $_eiyjlwxvjdmdg5ec.strict('getInitialValue'),
    $_eiyjlwxvjdmdg5ec.strict('onChange'),
    $_eiyjlwxvjdmdg5ec.strict('category'),
    $_eiyjlwxvjdmdg5ec.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_3tzholy2jdmdg5fn.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_93lc86z2jdmdg5l8.resolve('slider-' + spec.category + '-size-container'),
          $_93lc86z2jdmdg5l8.resolve('slider'),
          $_93lc86z2jdmdg5l8.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_djhbsfxqjdmdg5cx.derive([$_d6wqf6z1jdmdg5l4.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_97aw6e10rjdmdg5ye.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_djhbsfxqjdmdg5cx.derive([Toggling.config({ toggleClass: $_93lc86z2jdmdg5l8.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_2nrveq11bjdmdg62r = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_3ixh81wnjdmdg57o.isFunction(isRoot) ? isRoot : $_a03c0uw7jdmdg563.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_b21tyhx3jdmdg59q.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_2r3pzz11djdmdg638 = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_4p2wg0wgjdmdg56u.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_41506tx8jdmdg5a3.isElement(rawStart) ? Option.some(rawStart) : $_dahlvqwrjdmdg589.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_2r3pzz11djdmdg638.closest(start, function (elem) {
        return $_bstocczrjdmdg5p4.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_bstocczrjdmdg5p4.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_b21tyhx3jdmdg59q.fromDom(node);
    var root = $_b21tyhx3jdmdg59q.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_3r00diwxjdmdg58u.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_4p2wg0wgjdmdg56u.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_ez60yo11cjdmdg62y = {
    candidates: $_a03c0uw7jdmdg563.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_ez60yo11cjdmdg62y.candidates();
  var makeSlider$1 = function (spec) {
    return $_2nrveq11bjdmdg62r.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_97aw6e10rjdmdg5ye.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_97aw6e10rjdmdg5ye.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_ez60yo11cjdmdg62y.apply(editor, value);
      },
      getInitialValue: function () {
        return $_ez60yo11cjdmdg62y.get(editor);
      }
    };
    return $_68u9y8119jdmdg62o.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_6xh2xw11ajdmdg62p = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_alqjtqxgjdmdg5bc.hasKey(spec, 'uid') ? spec.uid : $_fr5ird10ljdmdg5wz.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_9dh6dlwmjdmdg57m.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_9p9cy611fjdmdg642 = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_ecm14b11ijdmdg64p = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_ayvnl411jjdmdg64s = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_ekqusjwzjdmdg596.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_ekqusjwzjdmdg596.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_ekqusjwzjdmdg596.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_ekqusjwzjdmdg596.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_ekqusjwzjdmdg596.getOrDie('atob');
    return f(base64);
  };
  var $_6bws2n11ojdmdg65a = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function loadImage(image) {
    return new Promise(function (resolve) {
      function loaded() {
        image.removeEventListener('load', loaded);
        resolve(image);
      }
      if (image.complete) {
        resolve(image);
      } else {
        image.addEventListener('load', loaded);
      }
    });
  }
  function imageToBlob(image) {
    return loadImage(image).then(function (image) {
      var src = image.src;
      if (src.indexOf('blob:') === 0) {
        return anyUriToBlob(src);
      }
      if (src.indexOf('data:') === 0) {
        return dataUriToBlob(src);
      }
      return anyUriToBlob(src);
    });
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_6bws2n11ojdmdg65a.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_ecm14b11ijdmdg64p.create($_ayvnl411jjdmdg64s.getWidth(image), $_ayvnl411jjdmdg64s.getHeight(image));
      context = $_ecm14b11ijdmdg64p.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_9rscxa11hjdmdg64b = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_9rscxa11hjdmdg64b.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_9rscxa11hjdmdg64b.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_9rscxa11hjdmdg64b.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_9rscxa11hjdmdg64b.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_9rscxa11hjdmdg64b.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_9rscxa11hjdmdg64b.uriToBlob(uri));
  };
  var $_m1zhm11gjdmdg648 = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_m1zhm11gjdmdg648.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_cfy2j510fjdmdg5ux.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_9p9cy611fjdmdg642.record({
      dom: pickerDom,
      events: $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.cutter($_32ef1jw6jdmdg55z.click()),
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_fsut1811ejdmdg63e = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_9vra0n11rjdmdg65t = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_9vra0n11rjdmdg65t.get(link);
    var url = $_f4ouopxfjdmdg5b4.get(link, 'href');
    var title = $_f4ouopxfjdmdg5b4.get(link, 'title');
    var target = $_f4ouopxfjdmdg5b4.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_f4ouopxfjdmdg5b4.get(link, 'href');
    var prevText = $_9vra0n11rjdmdg65t.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_a03c0uw7jdmdg563.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_a03c0uw7jdmdg563.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_f4ouopxfjdmdg5b4.setAll(link, attrs);
        text.each(function (newText) {
          $_9vra0n11rjdmdg65t.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_b21tyhx3jdmdg59q.fromDom(editor.selection.getStart());
    return $_ce7mdfzljdmdg5of.closest(start, 'a');
  };
  var $_3asrx311qjdmdg65j = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_dcymntw8jdmdg567.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_a03c0uw7jdmdg563.apply;
    wrapper(f, editor);
  };
  var $_ge53fl11sjdmdg65v = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_binsu8xsjdmdg5dn.derive(eventHandlers);
    return $_djhbsfxqjdmdg5cx.create({
      fields: [$_eiyjlwxvjdmdg5ec.strict('enabled')],
      name: name,
      active: { events: $_a03c0uw7jdmdg563.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_a03c0uw7jdmdg563.constant({}),
        initialConfig: {},
        state: $_djhbsfxqjdmdg5cx.noState()
      }
    };
  };
  var $_8qv30t11ujdmdg66o = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_b1tkcs11wjdmdg66y = { getCurrent: getCurrent };

  var ComposeSchema = [$_eiyjlwxvjdmdg5ec.strict('find')];

  var Composing = $_djhbsfxqjdmdg5cx.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_b1tkcs11wjdmdg66y
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_9dh6dlwmjdmdg57m.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_c92yb610cjdmdg5uc.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_5fhi9810djdmdg5uk.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_eiyjlwxvjdmdg5ec.defaulted('components', []),
      $_c92yb610cjdmdg5uc.field('containerBehaviours', []),
      $_eiyjlwxvjdmdg5ec.defaulted('events', {}),
      $_eiyjlwxvjdmdg5ec.defaulted('domModification', {}),
      $_eiyjlwxvjdmdg5ec.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_c92yb610cjdmdg5uc.get(detail.dataBehaviours())),
      events: $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_5fhi9810djdmdg5uk.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_eiyjlwxvjdmdg5ec.strict('uid'),
      $_eiyjlwxvjdmdg5ec.strict('dom'),
      $_eiyjlwxvjdmdg5ec.strict('getInitialValue'),
      $_c92yb610cjdmdg5uc.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_aqt4kz122jdmdg68i = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_eiyjlwxvjdmdg5ec.option('data'),
    $_eiyjlwxvjdmdg5ec.defaulted('inputAttributes', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('inputStyles', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('type', 'input'),
    $_eiyjlwxvjdmdg5ec.defaulted('tag', 'input'),
    $_eiyjlwxvjdmdg5ec.defaulted('inputClasses', []),
    $_2q529cyujdmdg5je.onHandler('onSetValue'),
    $_eiyjlwxvjdmdg5ec.defaulted('styles', {}),
    $_eiyjlwxvjdmdg5ec.option('placeholder'),
    $_eiyjlwxvjdmdg5ec.defaulted('eventOrder', {}),
    $_c92yb610cjdmdg5uc.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_eiyjlwxvjdmdg5ec.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_aqt4kz122jdmdg68i.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_aqt4kz122jdmdg68i.get(input.element());
            if (current !== data) {
              $_aqt4kz122jdmdg68i.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_a03c0uw7jdmdg563.noop : function (component) {
          var input = component.element();
          var value = $_aqt4kz122jdmdg68i.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_c92yb610cjdmdg5uc.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_9dh6dlwmjdmdg57m.deepMerge($_alqjtqxgjdmdg5bc.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_7xjwhf121jdmdg683 = {
    schema: $_a03c0uw7jdmdg563.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_7xjwhf121jdmdg683.dom(detail),
      components: [],
      behaviours: $_7xjwhf121jdmdg683.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_5fhi9810djdmdg5uk.single({
    name: 'Input',
    configFields: $_7xjwhf121jdmdg683.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_6ksvbly5jdmdg5g7.nu({
      attributes: $_alqjtqxgjdmdg5bc.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_76j6wm124jdmdg696 = { exhibit: exhibit$3 };

  var TabstopSchema = [$_eiyjlwxvjdmdg5ec.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_djhbsfxqjdmdg5cx.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_76j6wm124jdmdg696
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_9p9cy611fjdmdg642.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_14uwprw4jdmdg55l.emit(input, $_32ef1jw6jdmdg55z.input());
      },
      inputBehaviours: $_djhbsfxqjdmdg5cx.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_9p9cy611fjdmdg642.record(Button.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_djhbsfxqjdmdg5cx.derive([
          Toggling.config({ toggleClass: $_93lc86z2jdmdg5l8.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_8qv30t11ujdmdg66o.config(clearInputBehaviour, [$_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_42cm2s11tjdmdg65z = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_4p2wg0wgjdmdg56u.contains(nativeDisabled, $_41506tx8jdmdg5a3.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_f4ouopxfjdmdg5b4.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_f4ouopxfjdmdg5b4.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_f4ouopxfjdmdg5b4.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_f4ouopxfjdmdg5b4.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_644gmdybjdmdg5h9.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_644gmdybjdmdg5h9.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_dvedma129jdmdg6ai = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_6ksvbly5jdmdg5g7.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_4p2wg0wgjdmdg56u.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_binsu8xsjdmdg5dn.derive([
      $_binsu8xsjdmdg5dn.abort($_16nbvcw5jdmdg55u.execute(), function (component, simulatedEvent) {
        return $_dvedma129jdmdg6ai.isDisabled(component, disableConfig, disableState);
      }),
      $_5v3gfpxrjdmdg5d8.loadEvent(disableConfig, disableState, $_dvedma129jdmdg6ai.onLoad)
    ]);
  };
  var $_1jxn0m128jdmdg6aa = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_eiyjlwxvjdmdg5ec.defaulted('disabled', false),
    $_eiyjlwxvjdmdg5ec.option('disableClass')
  ];

  var Disabling = $_djhbsfxqjdmdg5cx.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_1jxn0m128jdmdg6aa,
    apis: $_dvedma129jdmdg6ai
  });

  var owner$1 = 'form';
  var schema$9 = [$_c92yb610cjdmdg5uc.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_cw0gyz10hjdmdg5va.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_4p2wg0wgjdmdg56u.map(partNames, function (n) {
      return $_96sxjv10jjdmdg5w0.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_937vgj10gjdmdg5v2.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_9dh6dlwmjdmdg57m.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_cw0gyz10hjdmdg5va.getAllParts(form, detail);
              return $_a1h469wojdmdg57q.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_a1h469wojdmdg57q.each(values, function (newValue, key) {
                $_cw0gyz10hjdmdg5va.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_c92yb610cjdmdg5uc.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_cw0gyz10hjdmdg5va.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_ekz6ej12bjdmdg6ax = {
    getField: $_54hcuy10ejdmdg5us.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_1n4cra12cjdmdg6b7 = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_799x4112djdmdg6ba = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_3tzholy2jdmdg5fn.objOf([
      $_eiyjlwxvjdmdg5ec.strict('fields'),
      $_eiyjlwxvjdmdg5ec.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_eiyjlwxvjdmdg5ec.strict('onExecute'),
      $_eiyjlwxvjdmdg5ec.strict('getInitialValue'),
      $_eiyjlwxvjdmdg5ec.state('state', function () {
        return {
          dialogSwipeState: $_1n4cra12cjdmdg6b7.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_3tzholy2jdmdg5fn.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_97aw6e10rjdmdg5ye.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_14uwprw4jdmdg55l.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_djhbsfxqjdmdg5cx.derive([Disabling.config({
            disableClass: $_93lc86z2jdmdg5l8.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_ce7mdfzljdmdg5of.descendant(dialog.element(), '.' + $_93lc86z2jdmdg5l8.resolve('serialised-dialog-chain')).each(function (parent) {
        $_bstocczrjdmdg5p4.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_f2xur6zjjdmdg5ob.descendants(dialog.element(), '.' + $_93lc86z2jdmdg5l8.resolve('serialised-dialog-screen'));
      $_ce7mdfzljdmdg5of.descendant(dialog.element(), '.' + $_93lc86z2jdmdg5l8.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_bstocczrjdmdg5p4.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_doh637118jdmdg62m.get(screens[0]);
            $_bstocczrjdmdg5p4.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_f2xur6zjjdmdg5ob.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_14uwprw4jdmdg55l.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_9p9cy611fjdmdg642.record($_ekz6ej12bjdmdg6ax.sketch(function (parts) {
      return {
        dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_4p2wg0wgjdmdg56u.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_4p2wg0wgjdmdg56u.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_djhbsfxqjdmdg5cx.derive([
          $_d6wqf6z1jdmdg5l4.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_8qv30t11ujdmdg66o.config(formAdhocEvents, [
            $_binsu8xsjdmdg5dn.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_binsu8xsjdmdg5dn.runOnExecute(spec.onExecute),
            $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_binsu8xsjdmdg5dn.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_9p9cy611fjdmdg642.record({
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_djhbsfxqjdmdg5cx.derive([Highlighting.config({
          highlightClass: $_93lc86z2jdmdg5l8.resolve('dot-active'),
          itemClass: $_93lc86z2jdmdg5l8.resolve('dot-item')
        })]),
      components: $_4p2wg0wgjdmdg56u.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_97aw6e10rjdmdg5ye.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_djhbsfxqjdmdg5cx.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_8qv30t11ujdmdg66o.config(wrapperAdhocEvents, [
          $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_799x4112djdmdg6ba.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_799x4112djdmdg6ba.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_799x4112djdmdg6ba.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_dhfj18126jdmdg69d = { sketch: sketch$7 };

  var getGroups = $_90td7zw9jdmdg569.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_dhfj18126jdmdg69d.sketch({
            fields: [
              $_42cm2s11tjdmdg65z.field('url', 'Type or paste URL'),
              $_42cm2s11tjdmdg65z.field('text', 'Link text'),
              $_42cm2s11tjdmdg65z.field('title', 'Link title'),
              $_42cm2s11tjdmdg65z.field('target', 'Link target'),
              $_42cm2s11tjdmdg65z.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_3asrx311qjdmdg65j.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_3asrx311qjdmdg65j.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_8a1mr3z3jdmdg5la.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_ge53fl11sjdmdg65v.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_3asrx311qjdmdg65j.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_6bhlob11pjdmdg65c = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_4p2wg0wgjdmdg56u.map(all, function (a) {
      return $_eiyjlwxvjdmdg5ec.field(a.name(), a.name(), $_du2dcgxwjdmdg5eh.asOption(), $_3tzholy2jdmdg5fn.objOf([
        $_eiyjlwxvjdmdg5ec.strict('config'),
        $_eiyjlwxvjdmdg5ec.defaulted('state', $_9hia1zy7jdmdg5gu)
      ]));
    });
    var validated = $_3tzholy2jdmdg5fn.asStruct('component.behaviours', $_3tzholy2jdmdg5fn.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_3tzholy2jdmdg5fn.formatError(errInfo) + '\nComplete spec:\n' + $_g9tjlhy0jdmdg5fh.stringify(spec, null, 2));
    }, $_a03c0uw7jdmdg563.identity);
    return {
      list: all,
      data: $_a1h469wojdmdg57q.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_a03c0uw7jdmdg563.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_3fbttr12kjdmdg6dn = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_alqjtqxgjdmdg5bc.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_4p2wg0wgjdmdg56u.filter($_a1h469wojdmdg57q.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_4p2wg0wgjdmdg56u.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_3fbttr12kjdmdg6dn.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_1a1k4t12jjdmdg6df = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_3kszoyy9jdmdg5h1.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_3kszoyy9jdmdg5h1.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_eyl1edxajdmdg5ao.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_a03c0uw7jdmdg563.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_a1h469wojdmdg57q.each(data, function (detail, key) {
      $_a1h469wojdmdg57q.each(detail, function (value, indexKey) {
        var chain = $_alqjtqxgjdmdg5bc.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_9uwr7c12pjdmdg6f0 = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_a03c0uw7jdmdg563.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_4p2wg0wgjdmdg56u.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_alqjtqxgjdmdg5bc.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_g9tjlhy0jdmdg5fh.stringify($_4p2wg0wgjdmdg56u.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_alqjtqxgjdmdg5bc.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_g9tjlhy0jdmdg5fh.stringify($_4p2wg0wgjdmdg56u.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_4p2wg0wgjdmdg56u.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_a1h469wojdmdg57q.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_alqjtqxgjdmdg5bc.wrap(k, v));
        });
        return $_alqjtqxgjdmdg5bc.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_alqjtqxgjdmdg5bc.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_9dh6dlwmjdmdg57m.deepMerge({}, baseMod);
    $_4p2wg0wgjdmdg56u.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_9uwr7c12pjdmdg6f0.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_a1h469wojdmdg57q.map(byAspect, function (values, aspect) {
      return $_4p2wg0wgjdmdg56u.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_a1h469wojdmdg57q.mapToArray(usedAspect, function (values, aspect) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_alqjtqxgjdmdg5bc.consolidate(modifications, {});
    return consolidated.map($_6ksvbly5jdmdg5g7.nu);
  };
  var $_diiqof12ojdmdg6ej = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_g9tjlhy0jdmdg5fh.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_g9tjlhy0jdmdg5fh.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_fezuv912rjdmdg6fl = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_a03c0uw7jdmdg563.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_a03c0uw7jdmdg563.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_dn05mp12sjdmdg6fv = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_a03c0uw7jdmdg563.constant(name),
      handler: $_a03c0uw7jdmdg563.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_4p2wg0wgjdmdg56u.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_9dh6dlwmjdmdg57m.deepMerge(base, nameToHandlers(behaviours, info));
    return $_9uwr7c12pjdmdg6f0.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_22ma9pxujdmdg5e1.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_g9tjlhy0jdmdg5fh.stringify($_4p2wg0wgjdmdg56u.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_fezuv912rjdmdg6fl.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_4p2wg0wgjdmdg56u.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_22ma9pxujdmdg5e1.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_a1h469wojdmdg57q.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_4p2wg0wgjdmdg56u.filter(eventOrder, function (o) {
          return $_4p2wg0wgjdmdg56u.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_alqjtqxgjdmdg5bc.wrap(eventName, $_dn05mp12sjdmdg6fv.nu(assembled, purpose));
      });
    });
    return $_alqjtqxgjdmdg5bc.consolidate(r, {});
  };
  var $_6ikg4r12qjdmdg6f8 = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_3tzholy2jdmdg5fn.asStruct('custom.definition', $_3tzholy2jdmdg5fn.objOfOnly([
      $_eiyjlwxvjdmdg5ec.field('dom', 'dom', $_du2dcgxwjdmdg5eh.strict(), $_3tzholy2jdmdg5fn.objOfOnly([
        $_eiyjlwxvjdmdg5ec.strict('tag'),
        $_eiyjlwxvjdmdg5ec.defaulted('styles', {}),
        $_eiyjlwxvjdmdg5ec.defaulted('classes', []),
        $_eiyjlwxvjdmdg5ec.defaulted('attributes', {}),
        $_eiyjlwxvjdmdg5ec.option('value'),
        $_eiyjlwxvjdmdg5ec.option('innerHtml')
      ])),
      $_eiyjlwxvjdmdg5ec.strict('components'),
      $_eiyjlwxvjdmdg5ec.strict('uid'),
      $_eiyjlwxvjdmdg5ec.defaulted('events', {}),
      $_eiyjlwxvjdmdg5ec.defaulted('apis', $_a03c0uw7jdmdg563.constant({})),
      $_eiyjlwxvjdmdg5ec.field('eventOrder', 'eventOrder', $_du2dcgxwjdmdg5eh.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_3tzholy2jdmdg5fn.anyValue()),
      $_eiyjlwxvjdmdg5ec.option('domModification'),
      $_2q529cyujdmdg5je.snapshot('originalSpec'),
      $_eiyjlwxvjdmdg5ec.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_alqjtqxgjdmdg5bc.wrap($_c1114i10mjdmdg5xb.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_9dh6dlwmjdmdg57m.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_4p2wg0wgjdmdg56u.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_emi0rny6jdmdg5gn.nu($_9dh6dlwmjdmdg57m.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_alqjtqxgjdmdg5bc.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_alqjtqxgjdmdg5bc.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_6ksvbly5jdmdg5g7.nu({});
    }, $_6ksvbly5jdmdg5g7.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_50vzr512tjdmdg6g4 = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_4p2wg0wgjdmdg56u.each(classes, function (x) {
      $_644gmdybjdmdg5h9.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_4p2wg0wgjdmdg56u.each(classes, function (x) {
      $_644gmdybjdmdg5h9.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_4p2wg0wgjdmdg56u.each(classes, function (x) {
      $_644gmdybjdmdg5h9.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_4p2wg0wgjdmdg56u.forall(classes, function (clazz) {
      return $_644gmdybjdmdg5h9.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_4p2wg0wgjdmdg56u.exists(classes, function (clazz) {
      return $_644gmdybjdmdg5h9.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_2b8n83ydjdmdg5hd.supports(element) ? getNative(element) : $_2b8n83ydjdmdg5hd.get(element);
  };
  var $_2e447u12vjdmdg6gt = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_emi0rny6jdmdg5gn.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_4p2wg0wgjdmdg56u.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_b21tyhx3jdmdg59q.fromTag(definition.tag());
    $_f4ouopxfjdmdg5b4.setAll(subject, definition.attributes().getOr({}));
    $_2e447u12vjdmdg6gt.add(subject, definition.classes().getOr([]));
    $_bstocczrjdmdg5p4.setAll(subject, definition.styles().getOr({}));
    $_cdwp4wxcjdmdg5ax.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_g7tb0cx6jdmdg59y.append(subject, children);
    definition.value().each(function (value) {
      $_aqt4kz122jdmdg68i.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_emi0rny6jdmdg5gn.nu(spec);
    return renderToDom(definition);
  };
  var $_9shegw12ujdmdg6gi = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_3tzholy2jdmdg5fn.getOrDie($_50vzr512tjdmdg6g4.toInfo($_9dh6dlwmjdmdg57m.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_1a1k4t12jjdmdg6df.generate(spec);
    var bList = $_3fbttr12kjdmdg6dn.getBehaviours(bBlob);
    var bData = $_3fbttr12kjdmdg6dn.getData(bBlob);
    var definition = $_50vzr512tjdmdg6g4.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_50vzr512tjdmdg6g4.toModification(info) };
    var modification = $_diiqof12ojdmdg6ej.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_6ksvbly5jdmdg5g7.merge(definition, modification);
    var item = $_9shegw12ujdmdg6gi.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_50vzr512tjdmdg6g4.toEvents(info) };
    var events = $_6ikg4r12qjdmdg6f8.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_dahlvqwrjdmdg589.children(item);
      var subs = $_4p2wg0wgjdmdg56u.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_54hcuy10ejdmdg5us.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_3ixh81wnjdmdg57o.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_g9tjlhy0jdmdg5fh.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_3ixh81wnjdmdg57o.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_a03c0uw7jdmdg563.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_a03c0uw7jdmdg563.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_a03c0uw7jdmdg563.constant(events)
    });
    return me;
  };
  var $_lipk312ijdmdg6cz = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_3r00diwxjdmdg58u.eq(originator, component.element()) && !$_3r00diwxjdmdg58u.eq(originator, target);
  };
  var $_bmz1d912wjdmdg6h5 = {
    events: $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.can($_16nbvcw5jdmdg55u.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_16nbvcw5jdmdg55u.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_eyl1edxajdmdg5ao.element(originator) + '\nTarget: ' + $_eyl1edxajdmdg5ao.element(target) + '\nCheck the ' + $_16nbvcw5jdmdg55u.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_2c4eeo12xjdmdg6hb = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_alqjtqxgjdmdg5bc.readOr('components', [])(spec);
    return $_4p2wg0wgjdmdg56u.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_2c4eeo12xjdmdg6hb.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_9dh6dlwmjdmdg57m.deepMerge($_bmz1d912wjdmdg6h5, spec, $_alqjtqxgjdmdg5bc.wrap('components', components));
    return Result.value($_lipk312ijdmdg6cz.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_b21tyhx3jdmdg59q.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_3tzholy2jdmdg5fn.asStructOrDie('external.component', $_3tzholy2jdmdg5fn.objOfOnly([
      $_eiyjlwxvjdmdg5ec.strict('element'),
      $_eiyjlwxvjdmdg5ec.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_fr5ird10ljdmdg5wz.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_a03c0uw7jdmdg563.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_a03c0uw7jdmdg563.constant(extSpec.element()),
      spec: $_a03c0uw7jdmdg563.constant(spec),
      readState: $_a03c0uw7jdmdg563.constant('No state'),
      syncComponents: $_a03c0uw7jdmdg563.noop,
      components: $_a03c0uw7jdmdg563.constant([]),
      events: $_a03c0uw7jdmdg563.constant({})
    });
    return $_54hcuy10ejdmdg5us.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_54hcuy10ejdmdg5us.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_9dh6dlwmjdmdg57m.deepMerge({ uid: $_fr5ird10ljdmdg5wz.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_4lxbw512hjdmdg6cd = {
    build: build$1,
    premade: $_54hcuy10ejdmdg5us.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_4tq63ayhjdmdg5hu.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_14uwprw4jdmdg55l.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_14uwprw4jdmdg55l.emitWith(item, focusEvent, { item: item });
  };
  var $_c6vnuw131jdmdg6i4 = {
    hover: $_a03c0uw7jdmdg563.constant(hoverEvent),
    focus: $_a03c0uw7jdmdg563.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_9dh6dlwmjdmdg57m.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_9dh6dlwmjdmdg57m.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_c6vnuw131jdmdg6i4.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.runWithTarget($_16nbvcw5jdmdg55u.tapOrClick(), $_14uwprw4jdmdg55l.emitExecute),
        $_binsu8xsjdmdg5dn.cutter($_32ef1jw6jdmdg55z.mousedown()),
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mouseover(), $_c6vnuw131jdmdg6i4.onHover),
        $_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_eiyjlwxvjdmdg5ec.strict('data'),
    $_eiyjlwxvjdmdg5ec.strict('components'),
    $_eiyjlwxvjdmdg5ec.strict('dom'),
    $_eiyjlwxvjdmdg5ec.option('toggling'),
    $_eiyjlwxvjdmdg5ec.defaulted('itemBehaviours', {}),
    $_eiyjlwxvjdmdg5ec.defaulted('ignoreFocus', false),
    $_eiyjlwxvjdmdg5ec.defaulted('domModification', {}),
    $_2q529cyujdmdg5je.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.stopper($_16nbvcw5jdmdg55u.focusItem())])
    };
  };
  var schema$11 = [
    $_eiyjlwxvjdmdg5ec.strict('dom'),
    $_eiyjlwxvjdmdg5ec.strict('components'),
    $_2q529cyujdmdg5je.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_96sxjv10jjdmdg5w0.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_djhbsfxqjdmdg5cx.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_cufwl7134jdmdg6iw = {
    owner: $_a03c0uw7jdmdg563.constant(owner$2),
    parts: $_a03c0uw7jdmdg563.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_cw0gyz10hjdmdg5va.substitutes($_cufwl7134jdmdg6iw.owner(), info, $_cufwl7134jdmdg6iw.parts());
    var components = $_cw0gyz10hjdmdg5va.components($_cufwl7134jdmdg6iw.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_cw0gyz10hjdmdg5va.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_bnoawzwjdmdg5q2.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_9dh6dlwmjdmdg57m.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.mouseover(), $_c6vnuw131jdmdg6i4.onHover),
        $_binsu8xsjdmdg5dn.run($_16nbvcw5jdmdg55u.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_djhbsfxqjdmdg5cx.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_c6vnuw131jdmdg6i4.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_eiyjlwxvjdmdg5ec.strict('uid'),
    $_eiyjlwxvjdmdg5ec.strict('data'),
    $_eiyjlwxvjdmdg5ec.strict('components'),
    $_eiyjlwxvjdmdg5ec.strict('dom'),
    $_eiyjlwxvjdmdg5ec.defaulted('autofocus', false),
    $_eiyjlwxvjdmdg5ec.defaulted('domModification', {}),
    $_cw0gyz10hjdmdg5va.defaultUidsSchema($_cufwl7134jdmdg6iw.parts()),
    $_2q529cyujdmdg5je.output('builder', builder$2)
  ];

  var itemSchema$1 = $_3tzholy2jdmdg5fn.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_96sxjv10jjdmdg5w0.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_3tzholy2jdmdg5fn.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_fr5ird10ljdmdg5wz.generate('');
        return $_9dh6dlwmjdmdg57m.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_eiyjlwxvjdmdg5ec.strict('value'),
    $_eiyjlwxvjdmdg5ec.strict('items'),
    $_eiyjlwxvjdmdg5ec.strict('dom'),
    $_eiyjlwxvjdmdg5ec.strict('components'),
    $_eiyjlwxvjdmdg5ec.defaulted('eventOrder', {}),
    $_c92yb610cjdmdg5uc.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_eiyjlwxvjdmdg5ec.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_3tzholy2jdmdg5fn.choose('mode', {
      grid: [
        $_2q529cyujdmdg5je.initSize(),
        $_2q529cyujdmdg5je.output('config', configureGrid)
      ],
      menu: [
        $_eiyjlwxvjdmdg5ec.defaulted('moveOnTab', true),
        $_2q529cyujdmdg5je.output('config', configureMenu)
      ]
    })),
    $_2q529cyujdmdg5je.itemMarkers(),
    $_eiyjlwxvjdmdg5ec.defaulted('fakeFocus', false),
    $_eiyjlwxvjdmdg5ec.defaulted('focusManager', $_4ip23czfjdmdg5nc.dom()),
    $_2q529cyujdmdg5je.onHandler('onHighlight')
  ];
  var $_eaibem12zjdmdg6hk = {
    name: $_a03c0uw7jdmdg563.constant('Menu'),
    schema: $_a03c0uw7jdmdg563.constant(schema$13),
    parts: $_a03c0uw7jdmdg563.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_925kkx136jdmdg6jc = { focus: $_a03c0uw7jdmdg563.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_9dh6dlwmjdmdg57m.deepMerge({
      dom: $_9dh6dlwmjdmdg57m.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_a03c0uw7jdmdg563.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_c92yb610cjdmdg5uc.get(detail.menuBehaviours())),
      events: $_binsu8xsjdmdg5dn.derive([
        $_binsu8xsjdmdg5dn.run($_c6vnuw131jdmdg6i4.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_14uwprw4jdmdg55l.emitWith(menu, $_925kkx136jdmdg6jc.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_binsu8xsjdmdg5dn.run($_c6vnuw131jdmdg6i4.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_dskm7v135jdmdg6j5 = { make: make$2 };

  var Menu = $_5fhi9810djdmdg5uk.composite({
    name: 'Menu',
    configFields: $_eaibem12zjdmdg6hk.schema(),
    partFields: $_eaibem12zjdmdg6hk.parts(),
    factory: $_dskm7v135jdmdg6j5.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_dahlvqwrjdmdg589.owner(container);
    var refocus = $_4tq63ayhjdmdg5hu.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_3r00diwxjdmdg58u.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_4py5u5yjjdmdg5i1.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_4tq63ayhjdmdg5hu.active(ownerDoc).filter(function (newFocus) {
        return $_3r00diwxjdmdg58u.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_4tq63ayhjdmdg5hu.focus(oldFocus);
      });
    });
    return result;
  };
  var $_8z7uge13ajdmdg6jy = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_f9s3chwpjdmdg57w.detachChildren(component);
    $_8z7uge13ajdmdg6jy.preserve(function () {
      var children = $_4p2wg0wgjdmdg56u.map(data, component.getSystem().build);
      $_4p2wg0wgjdmdg56u.each(children, function (l) {
        $_f9s3chwpjdmdg57w.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_f9s3chwpjdmdg57w.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_3kw2tpwqjdmdg587.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_3kw2tpwqjdmdg587.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_4p2wg0wgjdmdg56u.find(children, function (child) {
      return $_3r00diwxjdmdg58u.eq(removee.element(), child.element());
    });
    foundChild.each($_f9s3chwpjdmdg57w.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_669yul139jdmdg6js = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_djhbsfxqjdmdg5cx.create({
    fields: [],
    name: 'replacing',
    apis: $_669yul139jdmdg6js
  });

  var transpose = function (obj) {
    return $_a1h469wojdmdg57q.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_alqjtqxgjdmdg5bc.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_a1h469wojdmdg57q.each(menus, function (menuItems, menu) {
      $_4p2wg0wgjdmdg56u.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_a1h469wojdmdg57q.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_a1h469wojdmdg57q.map(items, function (path) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_2o9dd613djdmdg6lx = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_a03c0uw7jdmdg563.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_2o9dd613djdmdg6lx.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_alqjtqxgjdmdg5bc.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_4p2wg0wgjdmdg56u.difference($_a1h469wojdmdg57q.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_a1h469wojdmdg57q.map(menus, function (spec, name) {
        var data = Menu.sketch($_9dh6dlwmjdmdg57m.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_alqjtqxgjdmdg5bc.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_4ip23czfjdmdg5nc.highlights() : $_4ip23czfjdmdg5nc.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_a1h469wojdmdg57q.map(detail.data().menus(), function (data, menuName) {
        return $_4p2wg0wgjdmdg56u.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_14uwprw4jdmdg55l.dispatch(container, item.element(), $_16nbvcw5jdmdg55u.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_fe09vsxojdmdg5cf.cat($_4p2wg0wgjdmdg56u.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_4p2wg0wgjdmdg56u.each(rest, function (r) {
          $_644gmdybjdmdg5h9.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_bue8box7jdmdg5a1.inBody(activeMenu.element())) {
          Replacing.append(container, $_4lxbw512hjdmdg6cd.premade(activeMenu));
        }
        $_2e447u12vjdmdg6gt.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_4p2wg0wgjdmdg56u.each(others, function (o) {
          $_2e447u12vjdmdg6gt.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_bue8box7jdmdg5a1.inBody(activeMenu.element())) {
            Replacing.append(container, $_4lxbw512hjdmdg6cd.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_bnoawzwjdmdg5q2.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_bnoawzwjdmdg5q2.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_ce7mdfzljdmdg5of.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_binsu8xsjdmdg5dn.derive([
      $_binsu8xsjdmdg5dn.run($_925kkx136jdmdg6jc.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_binsu8xsjdmdg5dn.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_binsu8xsjdmdg5dn.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_4lxbw512hjdmdg6cd.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_binsu8xsjdmdg5dn.run($_c6vnuw131jdmdg6i4.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_14uwprw4jdmdg55l.dispatch(container, primary.element(), $_16nbvcw5jdmdg55u.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_c92yb610cjdmdg5uc.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_8j2to413bjdmdg6ku = {
    make: make$3,
    collapseItem: $_a03c0uw7jdmdg563.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_alqjtqxgjdmdg5bc.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_cfy2j510fjdmdg5ux.generate($_8j2to413bjdmdg6ku.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_5fhi9810djdmdg5uk.single({
    name: 'TieredMenu',
    configFields: [
      $_2q529cyujdmdg5je.onStrictKeyboardHandler('onExecute'),
      $_2q529cyujdmdg5je.onStrictKeyboardHandler('onEscape'),
      $_2q529cyujdmdg5je.onStrictHandler('onOpenMenu'),
      $_2q529cyujdmdg5je.onStrictHandler('onOpenSubmenu'),
      $_2q529cyujdmdg5je.onHandler('onCollapseMenu'),
      $_eiyjlwxvjdmdg5ec.defaulted('openImmediately', true),
      $_eiyjlwxvjdmdg5ec.strictObjOf('data', [
        $_eiyjlwxvjdmdg5ec.strict('primary'),
        $_eiyjlwxvjdmdg5ec.strict('menus'),
        $_eiyjlwxvjdmdg5ec.strict('expansions')
      ]),
      $_eiyjlwxvjdmdg5ec.defaulted('fakeFocus', false),
      $_2q529cyujdmdg5je.onHandler('onHighlight'),
      $_2q529cyujdmdg5je.onHandler('onHover'),
      $_2q529cyujdmdg5je.tieredMenuMarkers(),
      $_eiyjlwxvjdmdg5ec.strict('dom'),
      $_eiyjlwxvjdmdg5ec.defaulted('navigateOnHover', true),
      $_eiyjlwxvjdmdg5ec.defaulted('stayInDom', false),
      $_c92yb610cjdmdg5uc.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_eiyjlwxvjdmdg5ec.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_8j2to413bjdmdg6ku.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_alqjtqxgjdmdg5bc.readOptFrom(transConfig.routes(), route.start()).map($_a03c0uw7jdmdg563.apply).bind(function (sConfig) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(sConfig, route.destination()).map($_a03c0uw7jdmdg563.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_a03c0uw7jdmdg563.constant(t),
          route: $_a03c0uw7jdmdg563.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_644gmdybjdmdg5h9.remove(comp.element(), t.transitionClass());
      $_f4ouopxfjdmdg5b4.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_a03c0uw7jdmdg563.constant($_f4ouopxfjdmdg5b4.get(comp.element(), transConfig.stateAttr())),
      destination: $_a03c0uw7jdmdg563.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_f4ouopxfjdmdg5b4.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_a03c0uw7jdmdg563.constant($_f4ouopxfjdmdg5b4.get(comp.element(), transConfig.stateAttr())),
      destination: $_a03c0uw7jdmdg563.constant($_f4ouopxfjdmdg5b4.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_f4ouopxfjdmdg5b4.has(comp.element(), transConfig.stateAttr()) && $_f4ouopxfjdmdg5b4.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_f4ouopxfjdmdg5b4.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_f4ouopxfjdmdg5b4.has(comp.element(), transConfig.destinationAttr())) {
      $_f4ouopxfjdmdg5b4.set(comp.element(), transConfig.stateAttr(), $_f4ouopxfjdmdg5b4.get(comp.element(), transConfig.destinationAttr()));
      $_f4ouopxfjdmdg5b4.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_644gmdybjdmdg5h9.add(comp.element(), t.transitionClass());
      $_f4ouopxfjdmdg5b4.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_f4ouopxfjdmdg5b4.has(e, transConfig.stateAttr()) ? Option.some($_f4ouopxfjdmdg5b4.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_ef56aq13gjdmdg6mk = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_binsu8xsjdmdg5dn.derive([
      $_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_ef56aq13gjdmdg6mk.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_ef56aq13gjdmdg6mk.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_ef56aq13gjdmdg6mk.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_binsu8xsjdmdg5dn.runOnAttached(function (comp, se) {
        $_ef56aq13gjdmdg6mk.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_atp1m413fjdmdg6mf = { events: events$8 };

  var TransitionSchema = [
    $_eiyjlwxvjdmdg5ec.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_eiyjlwxvjdmdg5ec.defaulted('stateAttr', 'data-transitioning-state'),
    $_eiyjlwxvjdmdg5ec.strict('initialState'),
    $_2q529cyujdmdg5je.onHandler('onTransition'),
    $_2q529cyujdmdg5je.onHandler('onFinish'),
    $_eiyjlwxvjdmdg5ec.strictOf('routes', $_3tzholy2jdmdg5fn.setOf(Result.value, $_3tzholy2jdmdg5fn.setOf(Result.value, $_3tzholy2jdmdg5fn.objOfOnly([$_eiyjlwxvjdmdg5ec.optionObjOfOnly('transition', [
        $_eiyjlwxvjdmdg5ec.strict('property'),
        $_eiyjlwxvjdmdg5ec.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_a1h469wojdmdg57q.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_alqjtqxgjdmdg5bc.wrap(waypoints[1], v);
      r[waypoints[1]] = $_alqjtqxgjdmdg5bc.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_alqjtqxgjdmdg5bc.wrapAll([
      {
        key: first,
        value: $_alqjtqxgjdmdg5bc.wrap(second, transitions)
      },
      {
        key: second,
        value: $_alqjtqxgjdmdg5bc.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_alqjtqxgjdmdg5bc.wrapAll([
      {
        key: first,
        value: $_alqjtqxgjdmdg5bc.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_alqjtqxgjdmdg5bc.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_alqjtqxgjdmdg5bc.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_djhbsfxqjdmdg5cx.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_atp1m413fjdmdg6mf,
    apis: $_ef56aq13gjdmdg6mk,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_93lc86z2jdmdg5l8.resolve('scrollable');
  var register = function (element) {
    $_644gmdybjdmdg5h9.add(element, scrollable);
  };
  var deregister = function (element) {
    $_644gmdybjdmdg5h9.remove(element, scrollable);
  };
  var $_vf5r913ijdmdg6n5 = {
    register: register,
    deregister: deregister,
    scrollable: $_a03c0uw7jdmdg563.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_alqjtqxgjdmdg5bc.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_4p2wg0wgjdmdg56u.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_alqjtqxgjdmdg5bc.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_a1h469wojdmdg57q.map(formats.menus, function (menuItems, menuName) {
      var items = $_4p2wg0wgjdmdg56u.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_alqjtqxgjdmdg5bc.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_9dh6dlwmjdmdg57m.deepMerge(submenus, $_alqjtqxgjdmdg5bc.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_93lc86z2jdmdg5l8.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_93lc86z2jdmdg5l8.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_djhbsfxqjdmdg5cx.derive(isMenu ? [] : [$_d6wqf6z1jdmdg5l4.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_93lc86z2jdmdg5l8.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_93lc86z2jdmdg5l8.resolve('styles-collapse-icon')]
              }
            },
            $_4lxbw512hjdmdg6cd.text(value)
          ] : [$_4lxbw512hjdmdg6cd.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_93lc86z2jdmdg5l8.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_djhbsfxqjdmdg5cx.derive([$_8qv30t11ujdmdg66o.config('adhoc-scrollable-menu', [
              $_binsu8xsjdmdg5dn.runOnAttached(function (component, simulatedEvent) {
                $_bstocczrjdmdg5p4.set(component.element(), 'overflow-y', 'auto');
                $_bstocczrjdmdg5p4.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_vf5r913ijdmdg6n5.register(component.element());
              }),
              $_binsu8xsjdmdg5dn.runOnDetached(function (component) {
                $_bstocczrjdmdg5p4.remove(component.element(), 'overflow-y');
                $_bstocczrjdmdg5p4.remove(component.element(), '-webkit-overflow-scrolling');
                $_vf5r913ijdmdg6n5.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_djhbsfxqjdmdg5cx.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_9p9cy611fjdmdg642.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_93lc86z2jdmdg5l8.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_doh637118jdmdg62m.get(container.element());
        $_doh637118jdmdg62m.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_doh637118jdmdg62m.get(container.element());
        var menu = $_ce7mdfzljdmdg5of.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_doh637118jdmdg62m.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_ce7mdfzljdmdg5of.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_93lc86z2jdmdg5l8.resolve('styles-background-menu'),
        menu: $_93lc86z2jdmdg5l8.resolve('styles-menu'),
        selectedMenu: $_93lc86z2jdmdg5l8.resolve('styles-selected-menu'),
        item: $_93lc86z2jdmdg5l8.resolve('styles-item'),
        selectedItem: $_93lc86z2jdmdg5l8.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_38mkmv12gjdmdg6bq = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_9dh6dlwmjdmdg57m.deepMerge($_alqjtqxgjdmdg5bc.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_9dh6dlwmjdmdg57m.deepMerge(rest.menus, $_alqjtqxgjdmdg5bc.wrap(item.title, rest.items));
    var newExpansions = $_9dh6dlwmjdmdg57m.deepMerge(rest.expansions, $_alqjtqxgjdmdg5bc.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_alqjtqxgjdmdg5bc.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_4p2wg0wgjdmdg56u.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_9dh6dlwmjdmdg57m.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_9dh6dlwmjdmdg57m.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_46iuse13jjdmdg6n8 = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_9dh6dlwmjdmdg57m.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_9dh6dlwmjdmdg57m.deepMerge(item, {
        isSelected: $_a03c0uw7jdmdg563.constant(false),
        getPreview: $_a03c0uw7jdmdg563.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_cfy2j510fjdmdg5ux.generate(item.title);
      var newItem = $_9dh6dlwmjdmdg57m.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_alqjtqxgjdmdg5bc.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_4p2wg0wgjdmdg56u.map(items, function (item) {
        if ($_alqjtqxgjdmdg5bc.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_9dh6dlwmjdmdg57m.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_alqjtqxgjdmdg5bc.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_4p2wg0wgjdmdg56u.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_alqjtqxgjdmdg5bc.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_46iuse13jjdmdg6n8.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_38mkmv12gjdmdg6bq.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_7jsb3k12ejdmdg6bc = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_4p2wg0wgjdmdg56u.bind(toolbar, function (item) {
      return $_3ixh81wnjdmdg57o.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_3ixh81wnjdmdg57o.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_8a1mr3z3jdmdg5la.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_8a1mr3z3jdmdg5la.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_8a1mr3z3jdmdg5la.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_6bhlob11pjdmdg65c.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_fsut1811ejdmdg63e.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_6xh2xw11ajdmdg62p.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_7dj3zx10tjdmdg5z3.sketch(realm, editor);
    };
    var styleFormats = $_7jsb3k12ejdmdg6bc.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_7jsb3k12ejdmdg6bc.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_8a1mr3z3jdmdg5la.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_djhbsfxqjdmdg5cx.derive([
        Toggling.config({
          toggleClass: $_93lc86z2jdmdg5l8.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_alqjtqxgjdmdg5bc.wrapAll([
            $_d6wqf6z1jdmdg5l4.receive($_dw9uskypjdmdg5ig.orientationChanged(), Toggling.off),
            $_d6wqf6z1jdmdg5l4.receive($_dw9uskypjdmdg5ig.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_alqjtqxgjdmdg5bc.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_4p2wg0wgjdmdg56u.bind(itemNames, function (iName) {
      var r = !$_alqjtqxgjdmdg5bc.hasKey(present, iName) && $_alqjtqxgjdmdg5bc.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_54tp1xyqjdmdg5ij = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_a03c0uw7jdmdg563.constant(target),
      'x': $_a03c0uw7jdmdg563.constant(x),
      'y': $_a03c0uw7jdmdg563.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_a03c0uw7jdmdg563.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_b21tyhx3jdmdg59q.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_a03c0uw7jdmdg563.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_a03c0uw7jdmdg563.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_9zva2o13mjdmdg6nm = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_a03c0uw7jdmdg563.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_9zva2o13mjdmdg6nm.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_9zva2o13mjdmdg6nm.capture(element, event, filter$1, handler);
  };
  var $_54o5xd13ljdmdg6nk = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_a03c0uw7jdmdg563.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_dcymntw8jdmdg567.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_b21tyhx3jdmdg59q.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_54o5xd13ljdmdg6nk.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_enrvgg13kjdmdg6nc = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_16nbvcw5jdmdg55u.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_a03c0uw7jdmdg563.constant(touch.clientX),
          y: $_a03c0uw7jdmdg563.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_3r00diwxjdmdg58u.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_16nbvcw5jdmdg55u.tap(), event);
      });
    };
    var handlers = $_alqjtqxgjdmdg5bc.wrapAll([
      {
        key: $_32ef1jw6jdmdg55z.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_32ef1jw6jdmdg55z.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_32ef1jw6jdmdg55z.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_danuyt13sjdmdg6os = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_danuyt13sjdmdg6os.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_54o5xd13ljdmdg6nk.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_54o5xd13ljdmdg6nk.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_8oke3o13rjdmdg6ol = { monitor: monitor$1 };

  var isAndroid6 = $_dcymntw8jdmdg567.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_8oke3o13rjdmdg6ol.monitor(editorApi);
    var outerDoc = $_dahlvqwrjdmdg589.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_3r00diwxjdmdg58u.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_4tq63ayhjdmdg5hu.active(outerDoc).filter(function (input) {
        return $_41506tx8jdmdg5a3.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_54o5xd13ljdmdg6nk.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_54o5xd13ljdmdg6nk.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_4tq63ayhjdmdg5hu.blur(editorApi.body());
      }),
      editorApi.onToEditing($_a03c0uw7jdmdg563.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_54o5xd13ljdmdg6nk.bind($_b21tyhx3jdmdg59q.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_54o5xd13ljdmdg6nk.bind(outerDoc, 'select', updateMargin),
      $_54o5xd13ljdmdg6nk.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_4p2wg0wgjdmdg56u.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_g5fr9a13qjdmdg6o8 = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_f4ouopxfjdmdg5b4.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_ccb5jz13vjdmdg6pf = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_dcymntw8jdmdg567.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_41506tx8jdmdg5a3.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_eg7u1h13yjdmdg6pw = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_41506tx8jdmdg5a3.name(element) === 'img' ? 1 : $_eg7u1h13yjdmdg6pw.getOption(element).fold(function () {
      return $_dahlvqwrjdmdg589.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_eg7u1h13yjdmdg6pw.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_4p2wg0wgjdmdg56u.contains(elementsWithCursorPosition, $_41506tx8jdmdg5a3.name(elem));
  };
  var $_7yl9pf13xjdmdg6ps = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_aqbjpgxkjdmdg5br.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_a03c0uw7jdmdg563.identity, $_a03c0uw7jdmdg563.identity, $_a03c0uw7jdmdg563.identity);
  };
  var $_ekuur9141jdmdg6q5 = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_aqbjpgxkjdmdg5br.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_8q0o9uwsjdmdg58l.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_b21tyhx3jdmdg59q.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_ekuur9141jdmdg6q5.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_dahlvqwrjdmdg589.defaultView(start);
  };
  var $_ar5lkt140jdmdg6q1 = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_dahlvqwrjdmdg589.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_b21tyhx3jdmdg59q.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_3r00diwxjdmdg58u.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_e1z2v2143jdmdg6qf = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_4p2wg0wgjdmdg56u.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_b21tyhx3jdmdg59q.fromDom(fragment);
  };
  var $_a2wmmc144jdmdg6qh = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_b21tyhx3jdmdg59q.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_a03c0uw7jdmdg563.constant(rect.left),
      top: $_a03c0uw7jdmdg563.constant(rect.top),
      right: $_a03c0uw7jdmdg563.constant(rect.right),
      bottom: $_a03c0uw7jdmdg563.constant(rect.bottom),
      width: $_a03c0uw7jdmdg563.constant(rect.width),
      height: $_a03c0uw7jdmdg563.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_8iysfb145jdmdg6qk = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_aqbjpgxkjdmdg5br.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_b21tyhx3jdmdg59q.fromDom(range.startContainer), range.startOffset, $_b21tyhx3jdmdg59q.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_a03c0uw7jdmdg563.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_90td7zw9jdmdg569.cached(function () {
            return $_8iysfb145jdmdg6qk.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_90td7zw9jdmdg569.cached(function () {
            return Option.some($_8iysfb145jdmdg6qk.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_90td7zw9jdmdg569.cached(function () {
            return $_8iysfb145jdmdg6qk.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_90td7zw9jdmdg569.cached(function () {
            return Option.some($_8iysfb145jdmdg6qk.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_b21tyhx3jdmdg59q.fromDom(rev.endContainer), rev.endOffset, $_b21tyhx3jdmdg59q.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_9po5ox146jdmdg6qp = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_a6365o149jdmdg6r7 = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_eg7u1h13yjdmdg6pw.get(textnode).length;
    var offset = $_a6365o149jdmdg6r7.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_fe09vsxojdmdg5cf.findMap(rects, function (rect) {
      return $_a6365o149jdmdg6r7.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_d7v3p114ajdmdg6rd = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_dahlvqwrjdmdg589.children(node);
    return $_fe09vsxojdmdg5cf.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_a6365o149jdmdg6r7.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_41506tx8jdmdg5a3.isText(node) ? $_d7v3p114ajdmdg6rd.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_ck1kxv148jdmdg6r3 = { locate: locate$2 };

  var first$3 = function (element) {
    return $_4py5u5yjjdmdg5i1.descendant(element, $_7yl9pf13xjdmdg6ps.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_7yl9pf13xjdmdg6ps.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_dahlvqwrjdmdg589.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_by1ffm14cjdmdg6rm = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_by1ffm14cjdmdg6rm.first : $_by1ffm14cjdmdg6rm.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_dahlvqwrjdmdg589.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_16m42e14bjdmdg6rj = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_ck1kxv148jdmdg6r3.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_b21tyhx3jdmdg59q.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_16m42e14bjdmdg6rj.search(doc, elem, x);
      };
      return $_dahlvqwrjdmdg589.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_b21tyhx3jdmdg59q.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_ar5lkt140jdmdg6q1.range($_b21tyhx3jdmdg59q.fromDom(rng.startContainer), rng.startOffset, $_b21tyhx3jdmdg59q.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_18elde147jdmdg6qz = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_8iysfb145jdmdg6qk.create(win);
    var self = $_9mlux3x2jdmdg59d.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_f2xur6zjjdmdg5ob.descendants(ancestor, selector));
    return $_4p2wg0wgjdmdg56u.filter(elements, function (elem) {
      $_8iysfb145jdmdg6qk.selectNodeContentsUsing(innerRange, elem);
      return $_8iysfb145jdmdg6qk.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    var ancestor = $_b21tyhx3jdmdg59q.fromDom(outerRange.commonAncestorContainer);
    return $_41506tx8jdmdg5a3.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_at3b5i14djdmdg6ro = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_41506tx8jdmdg5a3.name(element);
    if ('input' === name)
      return $_ekuur9141jdmdg6q5.after(element);
    else if (!$_4p2wg0wgjdmdg56u.contains([
        'br',
        'img'
      ], name))
      return $_ekuur9141jdmdg6q5.on(element, offset);
    else
      return offset === 0 ? $_ekuur9141jdmdg6q5.before(element) : $_ekuur9141jdmdg6q5.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_ekuur9141jdmdg6q5.before, beforeSpecial, $_ekuur9141jdmdg6q5.after);
    var finish = finishSitu.fold($_ekuur9141jdmdg6q5.before, beforeSpecial, $_ekuur9141jdmdg6q5.after);
    return $_ar5lkt140jdmdg6q1.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_ar5lkt140jdmdg6q1.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_b21tyhx3jdmdg59q.fromDom(rng.startContainer);
        var finish = $_b21tyhx3jdmdg59q.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_e50ll814ejdmdg6rr = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_8iysfb145jdmdg6qk.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_at3b5i14djdmdg6ro.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_9po5ox146jdmdg6qp.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_e50ll814ejdmdg6rr.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_e50ll814ejdmdg6rr.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_ar5lkt140jdmdg6q1.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_8iysfb145jdmdg6qk.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_e50ll814ejdmdg6rr.preprocess(selection);
    return $_9po5ox146jdmdg6qp.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_ar5lkt140jdmdg6q1.range($_b21tyhx3jdmdg59q.fromDom(firstRng.startContainer), firstRng.startOffset, $_b21tyhx3jdmdg59q.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_b21tyhx3jdmdg59q.fromDom(selection.anchorNode);
    var focusNode = $_b21tyhx3jdmdg59q.fromDom(selection.focusNode);
    return $_e1z2v2143jdmdg6qf.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_ar5lkt140jdmdg6q1.range($_b21tyhx3jdmdg59q.fromDom(selection.anchorNode), selection.anchorOffset, $_b21tyhx3jdmdg59q.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_8iysfb145jdmdg6qk.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_8iysfb145jdmdg6qk.selectNodeContents(win, element);
    return $_ar5lkt140jdmdg6q1.range($_b21tyhx3jdmdg59q.fromDom(rng.startContainer), rng.startOffset, $_b21tyhx3jdmdg59q.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_ar5lkt140jdmdg6q1.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    return $_8iysfb145jdmdg6qk.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    return $_8iysfb145jdmdg6qk.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_18elde147jdmdg6qz.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    return $_8iysfb145jdmdg6qk.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    return $_8iysfb145jdmdg6qk.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    var fragment = $_a2wmmc144jdmdg6qh.fromElements(elements, win.document);
    $_8iysfb145jdmdg6qk.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_9po5ox146jdmdg6qp.asLtrRange(win, selection);
    $_8iysfb145jdmdg6qk.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_3r00diwxjdmdg58u.eq(start, finish) && soffset === foffset;
  };
  var $_8w9wfd142jdmdg6qa = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_a03c0uw7jdmdg563.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_a03c0uw7jdmdg563.constant(rawRect.left),
      top: $_a03c0uw7jdmdg563.constant(rawRect.top),
      right: $_a03c0uw7jdmdg563.constant(rawRect.right),
      bottom: $_a03c0uw7jdmdg563.constant(rawRect.bottom),
      width: $_a03c0uw7jdmdg563.constant(rawRect.width),
      height: $_a03c0uw7jdmdg563.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_4p2wg0wgjdmdg56u.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_b21tyhx3jdmdg59q.fromDom(range.startContainer);
      return $_dahlvqwrjdmdg589.parent(start_1).bind(function (parent) {
        var selection = $_ar5lkt140jdmdg6q1.exact(start_1, range.startOffset, parent, $_7yl9pf13xjdmdg6ps.getEnd(parent));
        var optRect = $_8w9wfd142jdmdg6qa.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_4p2wg0wgjdmdg56u.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_5yd9w613wjdmdg6pk = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_b21tyhx3jdmdg59q.fromDom(cWin.document.body);
    var inInput = $_4tq63ayhjdmdg5hu.active().exists(function (elem) {
      return $_4p2wg0wgjdmdg56u.contains([
        'input',
        'textarea'
      ], $_41506tx8jdmdg5a3.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_a03c0uw7jdmdg563.apply;
    transaction(function () {
      $_4tq63ayhjdmdg5hu.active().each($_4tq63ayhjdmdg5hu.blur);
      $_4tq63ayhjdmdg5hu.focus(iBody);
    });
  };
  var $_5o957b14fjdmdg6rv = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_93lc86z2jdmdg5l8.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_f4ouopxfjdmdg5b4.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_ccb5jz13vjdmdg6pf.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_a03c0uw7jdmdg563.constant(rect.top()),
      bottom: $_a03c0uw7jdmdg563.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_5yd9w613wjdmdg6pk.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_b21tyhx3jdmdg59q.fromDom(cWin.document.body);
    var toEditing = function () {
      $_5o957b14fjdmdg6rv.resume(cWin);
    };
    var onResize = $_54o5xd13ljdmdg6nk.bind($_b21tyhx3jdmdg59q.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_26mubj13ujdmdg6p4 = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_b21tyhx3jdmdg59q.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_b21tyhx3jdmdg59q.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_8w9wfd142jdmdg6qa.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_54o5xd13ljdmdg6nk.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_a03c0uw7jdmdg563.constant(rect.left),
      top: $_a03c0uw7jdmdg563.constant(rect.top),
      right: $_a03c0uw7jdmdg563.constant(rect.right),
      bottom: $_a03c0uw7jdmdg563.constant(rect.bottom),
      width: $_a03c0uw7jdmdg563.constant(rect.width),
      height: $_a03c0uw7jdmdg563.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_3r00diwxjdmdg58u.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_8w9wfd142jdmdg6qa.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_b21tyhx3jdmdg59q.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_8w9wfd142jdmdg6qa.get(win).bind(function (sel) {
                return $_8w9wfd142jdmdg6qa.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_8w9wfd142jdmdg6qa.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_8w9wfd142jdmdg6qa.clear(win);
            };
          });
          return {
            body: $_a03c0uw7jdmdg563.constant(body),
            doc: $_a03c0uw7jdmdg563.constant(doc),
            win: $_a03c0uw7jdmdg563.constant(win),
            html: $_a03c0uw7jdmdg563.constant(html),
            getSelection: $_a03c0uw7jdmdg563.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_a03c0uw7jdmdg563.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_533yln14gjdmdg6s2 = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_dcymntw8jdmdg567.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_bstocczrjdmdg5p4.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_f2xur6zjjdmdg5ob.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_f4ouopxfjdmdg5b4.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_f4ouopxfjdmdg5b4.set(element, attr, backup);
          $_f4ouopxfjdmdg5b4.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_f2xur6zjjdmdg5ob.ancestors(container, '*');
    var siblings = $_4p2wg0wgjdmdg56u.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_4p2wg0wgjdmdg56u.each(siblings, clobber(siblingStyles));
    $_4p2wg0wgjdmdg56u.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_f2xur6zjjdmdg5ob.all('[' + attr + ']');
    $_4p2wg0wgjdmdg56u.each(clobberedEls, function (element) {
      var restore = $_f4ouopxfjdmdg5b4.get(element, attr);
      if (restore !== 'no-styles') {
        $_f4ouopxfjdmdg5b4.set(element, 'style', restore);
      } else {
        $_f4ouopxfjdmdg5b4.remove(element, 'style');
      }
      $_f4ouopxfjdmdg5b4.remove(element, attr);
    });
  };
  var $_c7u56y14hjdmdg6sa = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_ce7mdfzljdmdg5of.first('head').getOrDie();
    var nu = function () {
      var meta = $_b21tyhx3jdmdg59q.fromTag('meta');
      $_f4ouopxfjdmdg5b4.set(meta, 'name', 'viewport');
      $_3kw2tpwqjdmdg587.append(head, meta);
      return meta;
    };
    var element = $_ce7mdfzljdmdg5of.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_f4ouopxfjdmdg5b4.get(element, 'content');
    var maximize = function () {
      $_f4ouopxfjdmdg5b4.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_f4ouopxfjdmdg5b4.set(element, 'content', backup);
      } else {
        $_f4ouopxfjdmdg5b4.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_4lekch14ijdmdg6sh = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_4lekch14ijdmdg6sh.tag();
    var androidApi = $_1n4cra12cjdmdg6b7.api();
    var androidEvents = $_1n4cra12cjdmdg6b7.api();
    var enter = function () {
      mask.hide();
      $_644gmdybjdmdg5h9.add(platform.container, $_93lc86z2jdmdg5l8.resolve('fullscreen-maximized'));
      $_644gmdybjdmdg5h9.add(platform.container, $_93lc86z2jdmdg5l8.resolve('android-maximized'));
      meta.maximize();
      $_644gmdybjdmdg5h9.add(platform.body, $_93lc86z2jdmdg5l8.resolve('android-scroll-reload'));
      androidApi.set($_26mubj13ujdmdg6p4.setup(platform.win, $_533yln14gjdmdg6s2.getWin(platform.editor).getOrDie('no')));
      $_533yln14gjdmdg6s2.getActiveApi(platform.editor).each(function (editorApi) {
        $_c7u56y14hjdmdg6sa.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_g5fr9a13qjdmdg6o8.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_644gmdybjdmdg5h9.remove(platform.container, $_93lc86z2jdmdg5l8.resolve('fullscreen-maximized'));
      $_644gmdybjdmdg5h9.remove(platform.container, $_93lc86z2jdmdg5l8.resolve('android-maximized'));
      $_c7u56y14hjdmdg6sa.restoreStyles();
      $_644gmdybjdmdg5h9.remove(platform.body, $_93lc86z2jdmdg5l8.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_57i45g13pjdmdg6o2 = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_galb2m14kjdmdg6su = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_9p9cy611fjdmdg642.record(Container.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_djhbsfxqjdmdg5cx.derive([Toggling.config({
          toggleClass: $_93lc86z2jdmdg5l8.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_galb2m14kjdmdg6su.first(onView, 200);
    return Container.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_djhbsfxqjdmdg5cx.derive([Toggling.config({ toggleClass: $_93lc86z2jdmdg5l8.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_2ox4em14jjdmdg6sn = { sketch: sketch$10 };

  var MobileSchema = $_3tzholy2jdmdg5fn.objOf([
    $_eiyjlwxvjdmdg5ec.strictObjOf('editor', [
      $_eiyjlwxvjdmdg5ec.strict('getFrame'),
      $_eiyjlwxvjdmdg5ec.option('getBody'),
      $_eiyjlwxvjdmdg5ec.option('getDoc'),
      $_eiyjlwxvjdmdg5ec.option('getWin'),
      $_eiyjlwxvjdmdg5ec.option('getSelection'),
      $_eiyjlwxvjdmdg5ec.option('setSelection'),
      $_eiyjlwxvjdmdg5ec.option('clearSelection'),
      $_eiyjlwxvjdmdg5ec.option('cursorSaver'),
      $_eiyjlwxvjdmdg5ec.option('onKeyup'),
      $_eiyjlwxvjdmdg5ec.option('onNodeChanged'),
      $_eiyjlwxvjdmdg5ec.option('getCursorBox'),
      $_eiyjlwxvjdmdg5ec.strict('onDomChanged'),
      $_eiyjlwxvjdmdg5ec.defaulted('onTouchContent', $_a03c0uw7jdmdg563.noop),
      $_eiyjlwxvjdmdg5ec.defaulted('onTapContent', $_a03c0uw7jdmdg563.noop),
      $_eiyjlwxvjdmdg5ec.defaulted('onTouchToolstrip', $_a03c0uw7jdmdg563.noop),
      $_eiyjlwxvjdmdg5ec.defaulted('onScrollToCursor', $_a03c0uw7jdmdg563.constant({ unbind: $_a03c0uw7jdmdg563.noop })),
      $_eiyjlwxvjdmdg5ec.defaulted('onScrollToElement', $_a03c0uw7jdmdg563.constant({ unbind: $_a03c0uw7jdmdg563.noop })),
      $_eiyjlwxvjdmdg5ec.defaulted('onToEditing', $_a03c0uw7jdmdg563.constant({ unbind: $_a03c0uw7jdmdg563.noop })),
      $_eiyjlwxvjdmdg5ec.defaulted('onToReading', $_a03c0uw7jdmdg563.constant({ unbind: $_a03c0uw7jdmdg563.noop })),
      $_eiyjlwxvjdmdg5ec.defaulted('onToolbarScrollStart', $_a03c0uw7jdmdg563.identity)
    ]),
    $_eiyjlwxvjdmdg5ec.strict('socket'),
    $_eiyjlwxvjdmdg5ec.strict('toolstrip'),
    $_eiyjlwxvjdmdg5ec.strict('dropup'),
    $_eiyjlwxvjdmdg5ec.strict('toolbar'),
    $_eiyjlwxvjdmdg5ec.strict('container'),
    $_eiyjlwxvjdmdg5ec.strict('alloy'),
    $_eiyjlwxvjdmdg5ec.state('win', function (spec) {
      return $_dahlvqwrjdmdg589.owner(spec.socket).dom().defaultView;
    }),
    $_eiyjlwxvjdmdg5ec.state('body', function (spec) {
      return $_b21tyhx3jdmdg59q.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_eiyjlwxvjdmdg5ec.defaulted('translate', $_a03c0uw7jdmdg563.identity),
    $_eiyjlwxvjdmdg5ec.defaulted('setReadOnly', $_a03c0uw7jdmdg563.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_3tzholy2jdmdg5fn.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_bstocczrjdmdg5p4.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_4lxbw512hjdmdg6cd.build($_2ox4em14jjdmdg6sn.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_3kw2tpwqjdmdg587.append(mobile.container, mask.element());
    var mode = $_57i45g13pjdmdg6o2.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_a03c0uw7jdmdg563.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_a03c0uw7jdmdg563.noop
    };
  };
  var $_9niroo13ojdmdg6nv = { produce: produce };

  var schema$14 = [
    $_eiyjlwxvjdmdg5ec.defaulted('shell', true),
    $_c92yb610cjdmdg5uc.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_djhbsfxqjdmdg5cx.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_96sxjv10jjdmdg5w0.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_6c8jvw14ojdmdg6u5 = {
    name: $_a03c0uw7jdmdg563.constant('Toolbar'),
    schema: $_a03c0uw7jdmdg563.constant(schema$14),
    parts: $_a03c0uw7jdmdg563.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_cw0gyz10hjdmdg5va.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive(extra.behaviours), $_c92yb610cjdmdg5uc.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_5fhi9810djdmdg5uk.composite({
    name: 'Toolbar',
    configFields: $_6c8jvw14ojdmdg6u5.schema(),
    partFields: $_6c8jvw14ojdmdg6u5.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_eiyjlwxvjdmdg5ec.strict('items'),
    $_2q529cyujdmdg5je.markers(['itemClass']),
    $_c92yb610cjdmdg5uc.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_96sxjv10jjdmdg5w0.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_dzi7ea14qjdmdg6uj = {
    name: $_a03c0uw7jdmdg563.constant('ToolbarGroup'),
    schema: $_a03c0uw7jdmdg563.constant(schema$15),
    parts: $_a03c0uw7jdmdg563.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_9dh6dlwmjdmdg57m.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_9dh6dlwmjdmdg57m.deepMerge($_djhbsfxqjdmdg5cx.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_c92yb610cjdmdg5uc.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_5fhi9810djdmdg5uk.composite({
    name: 'ToolbarGroup',
    configFields: $_dzi7ea14qjdmdg6uj.schema(),
    partFields: $_dzi7ea14qjdmdg6uj.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_93lc86z2jdmdg5l8.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_f4ouopxfjdmdg5b4.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_f4ouopxfjdmdg5b4.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_54o5xd13ljdmdg6nk.bind(scope, 'touchmove', function (event) {
      $_ce7mdfzljdmdg5of.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_a03c0uw7jdmdg563.noop);
    });
  };
  var $_3oa3e214rjdmdg6up = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_97aw6e10rjdmdg5ye.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_djhbsfxqjdmdg5cx.derive([$_8qv30t11ujdmdg66o.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_binsu8xsjdmdg5dn.runOnInit(function (component, simulatedEvent) {
              $_bstocczrjdmdg5p4.set(component.element(), 'overflow-x', 'auto');
              $_3oa3e214rjdmdg6up.markAsHorizontal(component.element());
              $_vf5r913ijdmdg6n5.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_93lc86z2jdmdg5l8.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_4lxbw512hjdmdg6cd.build(Toolbar.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_djhbsfxqjdmdg5cx.derive([
        Toggling.config({
          toggleClass: $_93lc86z2jdmdg5l8.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_4lxbw512hjdmdg6cd.build(Container.sketch({
      dom: { classes: [$_93lc86z2jdmdg5l8.resolve('toolstrip')] },
      components: [$_4lxbw512hjdmdg6cd.premade(toolbar)],
      containerBehaviours: $_djhbsfxqjdmdg5cx.derive([Toggling.config({
          toggleClass: $_93lc86z2jdmdg5l8.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_4p2wg0wgjdmdg56u.map(gs, $_a03c0uw7jdmdg563.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_a03c0uw7jdmdg563.constant(wrapper),
      toolbar: $_a03c0uw7jdmdg563.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_4lxbw512hjdmdg6cd.build(Button.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_4lxbw512hjdmdg6cd.build(Container.sketch({
      dom: $_97aw6e10rjdmdg5ye.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_djhbsfxqjdmdg5cx.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_4lxbw512hjdmdg6cd.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_cwm6ve14sjdmdg6uv = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_2e447u12vjdmdg6gt.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_644gmdybjdmdg5h9.remove(component.element(), slideConfig.openClass());
    $_644gmdybjdmdg5h9.add(component.element(), slideConfig.closedClass());
    $_bstocczrjdmdg5p4.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_bstocczrjdmdg5p4.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_644gmdybjdmdg5h9.remove(component.element(), slideConfig.closedClass());
    $_644gmdybjdmdg5h9.add(component.element(), slideConfig.openClass());
    $_bstocczrjdmdg5p4.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_bstocczrjdmdg5p4.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_bstocczrjdmdg5p4.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_bstocczrjdmdg5p4.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_bstocczrjdmdg5p4.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_644gmdybjdmdg5h9.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_644gmdybjdmdg5h9.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_bstocczrjdmdg5p4.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_644gmdybjdmdg5h9.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_644gmdybjdmdg5h9.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_9yew014wjdmdg6vm = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_6ksvbly5jdmdg5g7.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_6ksvbly5jdmdg5g7.nu({
      classes: [slideConfig.closedClass()],
      styles: $_alqjtqxgjdmdg5bc.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_binsu8xsjdmdg5dn.derive([$_binsu8xsjdmdg5dn.run($_32ef1jw6jdmdg55z.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_9yew014wjdmdg6vm.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_bstocczrjdmdg5p4.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_8v2hz414vjdmdg6ve = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_eiyjlwxvjdmdg5ec.strict('closedClass'),
    $_eiyjlwxvjdmdg5ec.strict('openClass'),
    $_eiyjlwxvjdmdg5ec.strict('shrinkingClass'),
    $_eiyjlwxvjdmdg5ec.strict('growingClass'),
    $_eiyjlwxvjdmdg5ec.option('getAnimationRoot'),
    $_2q529cyujdmdg5je.onHandler('onShrunk'),
    $_2q529cyujdmdg5je.onHandler('onStartShrink'),
    $_2q529cyujdmdg5je.onHandler('onGrown'),
    $_2q529cyujdmdg5je.onHandler('onStartGrow'),
    $_eiyjlwxvjdmdg5ec.defaulted('expanded', false),
    $_eiyjlwxvjdmdg5ec.strictOf('dimension', $_3tzholy2jdmdg5fn.choose('property', {
      width: [
        $_2q529cyujdmdg5je.output('property', 'width'),
        $_2q529cyujdmdg5je.output('getDimension', function (elem) {
          return $_doh637118jdmdg62m.get(elem) + 'px';
        })
      ],
      height: [
        $_2q529cyujdmdg5je.output('property', 'height'),
        $_2q529cyujdmdg5je.output('getDimension', function (elem) {
          return $_g2waijzqjdmdg5p2.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_a03c0uw7jdmdg563.curry(state.set, false),
      setExpanded: $_a03c0uw7jdmdg563.curry(state.set, true),
      readState: readState
    });
  };
  var $_2910ks14yjdmdg6w8 = { init: init$4 };

  var Sliding = $_djhbsfxqjdmdg5cx.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_8v2hz414vjdmdg6ve,
    apis: $_9yew014wjdmdg6vm,
    state: $_2910ks14yjdmdg6w8
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_4lxbw512hjdmdg6cd.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_93lc86z2jdmdg5l8.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_djhbsfxqjdmdg5cx.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_93lc86z2jdmdg5l8.resolve('dropup-closed'),
          openClass: $_93lc86z2jdmdg5l8.resolve('dropup-open'),
          shrinkingClass: $_93lc86z2jdmdg5l8.resolve('dropup-shrinking'),
          growingClass: $_93lc86z2jdmdg5l8.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_d6wqf6z1jdmdg5l4.orientation(function (component, data) {
          disappear($_a03c0uw7jdmdg563.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_a03c0uw7jdmdg563.constant(dropup),
      element: dropup.element
    };
  };
  var $_f0747l14tjdmdg6v2 = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_4afaqfzdjdmdg5mz.BACKSPACE()[0] && !$_4p2wg0wgjdmdg56u.contains([
      'input',
      'textarea'
    ], $_41506tx8jdmdg5a3.name(event.target()));
  };
  var isFirefox = $_dcymntw8jdmdg567.detect().browser.isFirefox();
  var settingsSchema = $_3tzholy2jdmdg5fn.objOfOnly([
    $_eiyjlwxvjdmdg5ec.strictFunction('triggerEvent'),
    $_eiyjlwxvjdmdg5ec.strictFunction('broadcastEvent'),
    $_eiyjlwxvjdmdg5ec.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_54o5xd13ljdmdg6nk.capture(container, 'focus', handler);
    } else {
      return $_54o5xd13ljdmdg6nk.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_54o5xd13ljdmdg6nk.capture(container, 'blur', handler);
    } else {
      return $_54o5xd13ljdmdg6nk.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_3tzholy2jdmdg5fn.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_dcymntw8jdmdg567.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_danuyt13sjdmdg6os.monitor(settings);
    var simpleEvents = $_4p2wg0wgjdmdg56u.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_54o5xd13ljdmdg6nk.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_54o5xd13ljdmdg6nk.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_16nbvcw5jdmdg55u.postBlur(), event);
      }, 0);
    });
    var defaultView = $_dahlvqwrjdmdg589.defaultView(container);
    var onWindowScroll = $_54o5xd13ljdmdg6nk.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_16nbvcw5jdmdg55u.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_4p2wg0wgjdmdg56u.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_fsdcp1151jdmdg6xc = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_alqjtqxgjdmdg5bc.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_ds244q153jdmdg6y1 = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_a03c0uw7jdmdg563.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_a03c0uw7jdmdg563.noop,
      isStopped: stopper.get,
      isCut: $_a03c0uw7jdmdg563.constant(false),
      event: $_a03c0uw7jdmdg563.constant(event),
      setTarget: $_a03c0uw7jdmdg563.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_a03c0uw7jdmdg563.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_c8gq64154jdmdg6y9 = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_aqbjpgxkjdmdg5br.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_c8gq64154jdmdg6y9.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_dn05mp12sjdmdg6fv.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_dahlvqwrjdmdg589.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_ds244q153jdmdg6y1.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_c8gq64154jdmdg6y9.fromExternal(rawEvent);
    $_4p2wg0wgjdmdg56u.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_dn05mp12sjdmdg6fv.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_ds244q153jdmdg6y1.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_a0xjss152jdmdg6xs = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_4py5u5yjjdmdg5i1.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_85dn3v157jdmdg6z5 = { closest: closest$4 };

  var eventHandler = $_8q0o9uwsjdmdg58l.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_a03c0uw7jdmdg563.constant(id),
      descHandler: $_a03c0uw7jdmdg563.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_a1h469wojdmdg57q.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_dn05mp12sjdmdg6fv.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_fr5ird10ljdmdg5wz.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_alqjtqxgjdmdg5bc.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_alqjtqxgjdmdg5bc.readOptFrom(registry, type).map(function (handlers) {
        return $_a1h469wojdmdg57q.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_alqjtqxgjdmdg5bc.readOpt(type);
      var handlers = readType(registry);
      return $_85dn3v157jdmdg6z5.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_a1h469wojdmdg57q.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_fr5ird10ljdmdg5wz.read(elem).fold(function () {
        return $_fr5ird10ljdmdg5wz.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_eyl1edxajdmdg5ao.element(conflict.element()) + '\nCannot use it for: ' + $_eyl1edxajdmdg5ao.element(component.element()) + '\n' + 'The conflicting element is' + ($_bue8box7jdmdg5a1.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_alqjtqxgjdmdg5bc.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_fr5ird10ljdmdg5wz.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_alqjtqxgjdmdg5bc.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_4lxbw512hjdmdg6cd.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_dahlvqwrjdmdg589.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_3r00diwxjdmdg58u.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_fsdcp1151jdmdg6xc.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_bhxux7x9jdmdg5a9.monitorEvent(eventName, event.target(), function (logger) {
          return $_a0xjss152jdmdg6xs.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_a0xjss152jdmdg6xs.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_a03c0uw7jdmdg563.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_bhxux7x9jdmdg5a9.monitorEvent(customType, target, function (logger) {
          $_a0xjss152jdmdg6xs.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_fr5ird10ljdmdg5wz.read(target).fold(function () {
          $_4tq63ayhjdmdg5hu.focus(target);
        }, function (_alloyId) {
          $_bhxux7x9jdmdg5a9.monitorEvent($_16nbvcw5jdmdg55u.focus(), target, function (logger) {
            $_a0xjss152jdmdg6xs.triggerHandler(lookup, $_16nbvcw5jdmdg55u.focus(), {
              originator: $_a03c0uw7jdmdg563.constant(originator),
              target: $_a03c0uw7jdmdg563.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_4lxbw512hjdmdg6cd.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_41506tx8jdmdg5a3.isText(component.element())) {
        registry.register(component);
        $_4p2wg0wgjdmdg56u.each(component.components(), addToWorld);
        systemApi.triggerEvent($_16nbvcw5jdmdg55u.systemInit(), component.element(), { target: $_a03c0uw7jdmdg563.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_41506tx8jdmdg5a3.isText(component.element())) {
        $_4p2wg0wgjdmdg56u.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_f9s3chwpjdmdg57w.attach(root, component);
    };
    var remove = function (component) {
      $_f9s3chwpjdmdg57w.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_d3epb4x5jdmdg59v.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_16nbvcw5jdmdg55u.receive());
      $_4p2wg0wgjdmdg56u.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_dn05mp12sjdmdg6fv.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_a03c0uw7jdmdg563.constant(true),
        data: $_a03c0uw7jdmdg563.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_a03c0uw7jdmdg563.constant(false),
        channels: $_a03c0uw7jdmdg563.constant(channels),
        data: $_a03c0uw7jdmdg563.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_fr5ird10ljdmdg5wz.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_a03c0uw7jdmdg563.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_ftpop7150jdmdg6wr = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_a03c0uw7jdmdg563.constant($_93lc86z2jdmdg5l8.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_a03c0uw7jdmdg563.constant($_93lc86z2jdmdg5l8.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_4lxbw512hjdmdg6cd.build(Container.sketch({
      dom: { classes: [$_93lc86z2jdmdg5l8.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_djhbsfxqjdmdg5cx.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_ftpop7150jdmdg6wr.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_93lc86z2jdmdg5l8.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_1n4cra12cjdmdg6b7.api();
    var switchToEdit = $_cwm6ve14sjdmdg6uv.makeEditSwitch(webapp);
    var socket = $_cwm6ve14sjdmdg6uv.makeSocket();
    var dropup = $_f0747l14tjdmdg6v2.build($_a03c0uw7jdmdg563.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_9niroo13ojdmdg6nv.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_cwm6ve14sjdmdg6uv.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_a03c0uw7jdmdg563.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_a03c0uw7jdmdg563.constant(socket),
      dropup: $_a03c0uw7jdmdg563.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_b21tyhx3jdmdg59q.fromTag('input');
    $_bstocczrjdmdg5p4.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_3kw2tpwqjdmdg587.append(parent, input);
    $_4tq63ayhjdmdg5hu.focus(input);
    operation(input);
    $_d3epb4x5jdmdg59v.remove(input);
  };
  var $_4dbkzt15cjdmdg706 = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_4tq63ayhjdmdg5hu.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_3lue1015ejdmdg70h = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_4tq63ayhjdmdg5hu.active().each(function (active) {
      if (!$_3r00diwxjdmdg58u.eq(active, frame)) {
        $_4tq63ayhjdmdg5hu.blur(active);
      }
    });
    cWin.focus();
    $_4tq63ayhjdmdg5hu.focus($_b21tyhx3jdmdg59q.fromDom(cWin.document.body));
    $_3lue1015ejdmdg70h.refresh(cWin);
  };
  var $_3m6dlt15djdmdg70c = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_3m6dlt15djdmdg70c.resume(cWin, frame);
    };
    var toReading = function () {
      $_4dbkzt15cjdmdg706.input(outerBody, $_4tq63ayhjdmdg5hu.blur);
    };
    var captureInput = $_54o5xd13ljdmdg6nk.bind(page, 'keydown', function (evt) {
      if (!$_4p2wg0wgjdmdg56u.contains([
          'input',
          'textarea'
        ], $_41506tx8jdmdg5a3.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_4tq63ayhjdmdg5hu.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_3m6dlt15djdmdg70c.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_a03c0uw7jdmdg563.noop
    };
  };
  var $_40rdmd15bjdmdg6zz = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_g2waijzqjdmdg5p2.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_8oke3o13rjdmdg6ol.monitor(editorApi);
    var refreshThrottle = $_galb2m14kjdmdg6su.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_54o5xd13ljdmdg6nk.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_3r00diwxjdmdg58u.eq(editorApi.html(), touchEvent.target()) || $_3r00diwxjdmdg58u.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_54o5xd13ljdmdg6nk.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_54o5xd13ljdmdg6nk.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_54o5xd13ljdmdg6nk.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_54o5xd13ljdmdg6nk.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_54o5xd13ljdmdg6nk.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_4p2wg0wgjdmdg56u.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_bouwip15fjdmdg70k = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_b21tyhx3jdmdg59q.fromTag('div');
    $_644gmdybjdmdg5h9.add(container, $_93lc86z2jdmdg5l8.resolve('unfocused-selections'));
    $_3kw2tpwqjdmdg587.append($_b21tyhx3jdmdg59q.fromDom(doc.documentElement), container);
    var onTouch = $_54o5xd13ljdmdg6nk.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_3m6dlt15djdmdg70c.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_b21tyhx3jdmdg59q.fromTag('span');
      $_2e447u12vjdmdg6gt.add(span, [
        $_93lc86z2jdmdg5l8.resolve('layer-editor'),
        $_93lc86z2jdmdg5l8.resolve('unfocused-selection')
      ]);
      $_bstocczrjdmdg5p4.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_5yd9w613wjdmdg6pk.getRectangles(win);
      var spans = $_4p2wg0wgjdmdg56u.map(rectangles, make);
      $_g7tb0cx6jdmdg59y.append(container, spans);
    };
    var clear = function () {
      $_d3epb4x5jdmdg59v.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_d3epb4x5jdmdg59v.remove(container);
    };
    var isActive = function () {
      return $_dahlvqwrjdmdg589.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_4p2wg0wgjdmdg56u.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_5of19215ljdmdg71y = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_5of19215ljdmdg71y.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_59brh315mjdmdg71z = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_fe09vsxojdmdg5cf.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_fwh6su15pjdmdg72k = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_fwh6su15pjdmdg72k.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_enrvgg13kjdmdg6nc.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_dahlvqwrjdmdg589.owner(socket).dom().defaultView;
    var viewportHeight = $_g2waijzqjdmdg5p2.get(socket) + $_g2waijzqjdmdg5p2.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_g2waijzqjdmdg5p2.get(socket) + $_g2waijzqjdmdg5p2.get(dropup) - greenzoneHeight;
    $_bstocczrjdmdg5p4.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_fssr8015ojdmdg72g = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_aqbjpgxkjdmdg5br.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_93lc86z2jdmdg5l8.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_93lc86z2jdmdg5l8.resolve('y-property');
  var yScrollingData = 'data-' + $_93lc86z2jdmdg5l8.resolve('scrolling');
  var windowSizeData = 'data-' + $_93lc86z2jdmdg5l8.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_ccb5jz13vjdmdg6pf.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_f4ouopxfjdmdg5b4.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_ccb5jz13vjdmdg6pf.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_f4ouopxfjdmdg5b4.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_f2xur6zjjdmdg5ob.descendants(container, '[' + yFixedData + ']');
    return $_4p2wg0wgjdmdg56u.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_f4ouopxfjdmdg5b4.get(toolbar, 'style');
    $_bstocczrjdmdg5p4.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_f4ouopxfjdmdg5b4.set(toolbar, yFixedData, '0px');
    $_f4ouopxfjdmdg5b4.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_f4ouopxfjdmdg5b4.set(toolbar, 'style', oldToolbarStyle || '');
      $_f4ouopxfjdmdg5b4.remove(toolbar, yFixedData);
      $_f4ouopxfjdmdg5b4.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_f4ouopxfjdmdg5b4.get(viewport, 'style');
    $_vf5r913ijdmdg6n5.register(viewport);
    $_bstocczrjdmdg5p4.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_f4ouopxfjdmdg5b4.set(viewport, yFixedData, toolbarHeight + 'px');
    $_f4ouopxfjdmdg5b4.set(viewport, yScrollingData, 'true');
    $_f4ouopxfjdmdg5b4.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_vf5r913ijdmdg6n5.deregister(viewport);
      $_f4ouopxfjdmdg5b4.set(viewport, 'style', oldViewportStyle || '');
      $_f4ouopxfjdmdg5b4.remove(viewport, yFixedData);
      $_f4ouopxfjdmdg5b4.remove(viewport, yScrollingData);
      $_f4ouopxfjdmdg5b4.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_f4ouopxfjdmdg5b4.get(dropup, 'style');
    $_bstocczrjdmdg5p4.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_f4ouopxfjdmdg5b4.set(dropup, yFixedData, '0px');
    $_f4ouopxfjdmdg5b4.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_f4ouopxfjdmdg5b4.set(dropup, 'style', oldDropupStyle || '');
      $_f4ouopxfjdmdg5b4.remove(dropup, yFixedData);
      $_f4ouopxfjdmdg5b4.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_dahlvqwrjdmdg589.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_f4ouopxfjdmdg5b4.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_dahlvqwrjdmdg589.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_g2waijzqjdmdg5p2.get(toolbar);
    var dropupHeight = $_g2waijzqjdmdg5p2.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_g2waijzqjdmdg5p2.get(toolbar);
        var dropupHeight_1 = $_g2waijzqjdmdg5p2.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_f4ouopxfjdmdg5b4.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_bstocczrjdmdg5p4.set(viewport, 'height', newHeight + 'px');
        $_bstocczrjdmdg5p4.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_fssr8015ojdmdg72g.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_f4ouopxfjdmdg5b4.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_fssr8015ojdmdg72g.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_a03c0uw7jdmdg563.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_87ca4615njdmdg722 = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_59brh315mjdmdg71z.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_93lc86z2jdmdg5l8.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_bstocczrjdmdg5p4.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_a03c0uw7jdmdg563.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_bstocczrjdmdg5p4.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_bstocczrjdmdg5p4.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_a03c0uw7jdmdg563.curry(getScrollTop, element);
      $_f4ouopxfjdmdg5b4.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_ccb5jz13vjdmdg6pf.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_f4ouopxfjdmdg5b4.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_f4ouopxfjdmdg5b4.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_a03c0uw7jdmdg563.curry(getTop, element);
      var update = function (newTop) {
        $_bstocczrjdmdg5p4.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_87ca4615njdmdg722.getYFixedData(element) + 'px';
    $_bstocczrjdmdg5p4.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_dahlvqwrjdmdg589.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_6c1dm15ijdmdg71n = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_fssr8015ojdmdg72g.getGreenzone(socket, dropup);
    var refreshCursor = $_a03c0uw7jdmdg563.curry($_3lue1015ejdmdg70h.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_6c1dm15ijdmdg71n.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_6c1dm15ijdmdg71n.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_aadqqk15rjdmdg72r = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_4p2wg0wgjdmdg56u.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_6i70p515ujdmdg734 = { par: par };

  var par$1 = function (futures) {
    return $_6i70p515ujdmdg734.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_4p2wg0wgjdmdg56u.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_fhfr8815tjdmdg72z = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_bstocczrjdmdg5p4.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_bstocczrjdmdg5p4.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_6c1dm15ijdmdg71n.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_87ca4615njdmdg722.findFixtures(container);
    var updates = $_4p2wg0wgjdmdg56u.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_fhfr8815tjdmdg72z.par(updates);
  };
  var $_9dd2f115sjdmdg72u = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_6c1dm15ijdmdg71n.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_5yd9w613wjdmdg6pk.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_a03c0uw7jdmdg563.constant(viewTop),
          bottom: $_a03c0uw7jdmdg563.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_galb2m14kjdmdg6su.last(function () {
      scroller.idle(function () {
        $_9dd2f115sjdmdg72u.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_54o5xd13ljdmdg6nk.bind($_b21tyhx3jdmdg59q.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_9dd2f115sjdmdg72u.updatePositions(container, outerWindow.pageYOffset).get($_a03c0uw7jdmdg563.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_87ca4615njdmdg722.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_bue8box7jdmdg5a1.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_enrvgg13kjdmdg6nc.onChange(outerWindow, {
      onChange: $_a03c0uw7jdmdg563.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_54o5xd13ljdmdg6nk.bind($_b21tyhx3jdmdg59q.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_aadqqk15rjdmdg72r.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_bstocczrjdmdg5p4.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_6c1dm15ijdmdg71n.moveOnlyTop(socket, newYOffset).get($_a03c0uw7jdmdg563.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_4dbkzt15cjdmdg706.input($_bue8box7jdmdg5a1.body(), $_4tq63ayhjdmdg5hu.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_a03c0uw7jdmdg563.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_am3q4015gjdmdg70v = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_4lekch14ijdmdg6sh.tag();
    var priorState = $_1n4cra12cjdmdg6b7.value();
    var scrollEvents = $_1n4cra12cjdmdg6b7.value();
    var iosApi = $_1n4cra12cjdmdg6b7.api();
    var iosEvents = $_1n4cra12cjdmdg6b7.api();
    var enter = function () {
      mask.hide();
      var doc = $_b21tyhx3jdmdg59q.fromDom(document);
      $_533yln14gjdmdg6s2.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_bstocczrjdmdg5p4.getRaw(platform.socket, 'height'),
          iframeHeight: $_bstocczrjdmdg5p4.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_3oa3e214rjdmdg6up.exclusive(doc, '.' + $_vf5r913ijdmdg6n5.scrollable()) });
        $_644gmdybjdmdg5h9.add(platform.container, $_93lc86z2jdmdg5l8.resolve('fullscreen-maximized'));
        $_c7u56y14hjdmdg6sa.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_bstocczrjdmdg5p4.set(platform.socket, 'overflow', 'scroll');
        $_bstocczrjdmdg5p4.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_4tq63ayhjdmdg5hu.focus(editorApi.body());
        var setupBag = $_8q0o9uwsjdmdg58l.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_am3q4015gjdmdg70v.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_a03c0uw7jdmdg563.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_40rdmd15bjdmdg6zz.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_bouwip15fjdmdg70k.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_bstocczrjdmdg5p4.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_bstocczrjdmdg5p4.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_644gmdybjdmdg5h9.remove(platform.container, $_93lc86z2jdmdg5l8.resolve('fullscreen-maximized'));
      $_c7u56y14hjdmdg6sa.restoreStyles();
      $_vf5r913ijdmdg6n5.deregister(platform.toolbar);
      $_bstocczrjdmdg5p4.remove(platform.socket, 'overflow');
      $_bstocczrjdmdg5p4.remove(platform.socket, '-webkit-overflow-scrolling');
      $_4tq63ayhjdmdg5hu.blur(platform.editor.getFrame());
      $_533yln14gjdmdg6s2.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_2yimyp15ajdmdg6zm = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_3tzholy2jdmdg5fn.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_bstocczrjdmdg5p4.set(mobile.toolstrip, 'width', '100%');
    $_bstocczrjdmdg5p4.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_4lxbw512hjdmdg6cd.build($_2ox4em14jjdmdg6sn.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_2yimyp15ajdmdg6zm.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_a03c0uw7jdmdg563.noop
    };
  };
  var $_9d1wnc159jdmdg6zf = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_93lc86z2jdmdg5l8.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_1n4cra12cjdmdg6b7.api();
    var switchToEdit = $_cwm6ve14sjdmdg6uv.makeEditSwitch(webapp);
    var socket = $_cwm6ve14sjdmdg6uv.makeSocket();
    var dropup = $_f0747l14tjdmdg6v2.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_9d1wnc159jdmdg6zf.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_cwm6ve14sjdmdg6uv.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_a03c0uw7jdmdg563.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_a03c0uw7jdmdg563.constant(socket),
      dropup: $_a03c0uw7jdmdg563.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_alqjtqxgjdmdg5bc.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_8g02k915vjdmdg736 = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_dw9uskypjdmdg5ig.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_a1h469wojdmdg57q.keys(editor.formatter.get());
    $_4p2wg0wgjdmdg56u.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_4p2wg0wgjdmdg56u.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_fuouo215xjdmdg739 = {
    init: init$5,
    fontSizes: $_a03c0uw7jdmdg563.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_bspsca15yjdmdg73c = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_a03c0uw7jdmdg563.constant('toReading');
  var EDITING = $_a03c0uw7jdmdg563.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_8g02k915vjdmdg736.derive(editor);
      if ($_a1yth8yojdmdg5if.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_bspsca15yjdmdg73c.fireSkinLoaded(editor));
      } else {
        $_bspsca15yjdmdg73c.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_b21tyhx3jdmdg59q.fromTag('div');
      var realm = $_dcymntw8jdmdg567.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_b21tyhx3jdmdg59q.fromDom(args.targetNode);
      $_3kw2tpwqjdmdg587.after(original, wrapper);
      $_f9s3chwpjdmdg57w.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_4tq63ayhjdmdg5hu.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_enrvgg13kjdmdg6nc.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_dw9uskypjdmdg5ig.orientationChanged()], { width: $_enrvgg13kjdmdg6nc.getActualWidth(outerWindow) });
        },
        onReady: $_a03c0uw7jdmdg563.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_b21tyhx3jdmdg59q.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_a03c0uw7jdmdg563.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_b21tyhx3jdmdg59q.fromDom(editor.editorContainer.querySelector('.' + $_93lc86z2jdmdg5l8.resolve('toolbar')));
              findFocusIn(toolbar).each($_14uwprw4jdmdg55l.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_41506tx8jdmdg5a3.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_41506tx8jdmdg5a3.name(target) === 'a') {
                var component = realm.system().getByDom($_b21tyhx3jdmdg59q.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_7gos3kynjdmdg5ie.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_b21tyhx3jdmdg59q.fromDom(editor.editorContainer),
          socket: $_b21tyhx3jdmdg59q.fromDom(editor.contentAreaContainer),
          toolstrip: $_b21tyhx3jdmdg59q.fromDom(editor.editorContainer.querySelector('.' + $_93lc86z2jdmdg5l8.resolve('toolstrip'))),
          toolbar: $_b21tyhx3jdmdg59q.fromDom(editor.editorContainer.querySelector('.' + $_93lc86z2jdmdg5l8.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_a03c0uw7jdmdg563.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_dw9uskypjdmdg5ig.dropupDismissed()], {});
          });
        };
        $_bhxux7x9jdmdg5a9.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_8a1mr3z3jdmdg5la.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_8a1mr3z3jdmdg5la.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_54tp1xyqjdmdg5ij.setup(realm, editor);
        var items = $_54tp1xyqjdmdg5ij.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_fuouo215xjdmdg739.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_a03c0uw7jdmdg563.identity,
          close: $_a03c0uw7jdmdg563.noop,
          reposition: $_a03c0uw7jdmdg563.noop,
          getArgs: $_a03c0uw7jdmdg563.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();
