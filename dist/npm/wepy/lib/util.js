'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
    $isEmpty: function $isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },
    $isEqual: function $isEqual(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;

        if (a !== a) return b !== b;

        if (!a || !b) return a === b;

        var type = typeof a === 'undefined' ? 'undefined' : _typeof(a);
        if (type !== 'function' && type !== 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return false;
        return this.$isDeepEqual(a, b, aStack, bStack);
    },
    $isDeepEqual: function $isDeepEqual(a, b, aStack, bStack) {
        var self = this;

        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) return +b !== +b;

                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
            case '[object Symbol]':
                var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
                return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return a === b;

            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
                return false;
            }
        }

        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) return bStack[length] === b;
        }

        aStack.push(a);
        bStack.push(b);

        if (areArrays) {
            length = a.length;
            if (length !== b.length) return false;

            while (length--) {
                if (!self.$isEqual(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            var keys = Object.keys(a),
                key;
            length = keys.length;

            if (Object.keys(b).length !== length) return false;
            while (length--) {
                key = keys[length];
                if (!(self.$has(b, key) && self.$isEqual(a[key], b[key], aStack, bStack))) return false;
            }
        }

        aStack.pop();
        bStack.pop();
        return true;
    },
    $has: function $has(obj, path) {
        if (toString.call(path) !== '[object Array]') {
            return obj && hasOwnProperty.call(obj, path);
        }
        var length = path.length;
        for (var i = 0; i < length; i++) {
            var key = path[i];
            if (!obj || !hasOwnProperty.call(obj, key)) {
                return false;
            }
            obj = obj[key];
        }
        return !!length;
    },
    $extend: function $extend() {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        var self = this;

        if (typeof target === 'boolean') {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !(typeof target === 'function')) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if (options = arguments[i]) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (self.$isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && self.$isPlainObject(src) ? src : {};
                        }

                        target[name] = self.$extend(deep, clone, copy);
                    } else {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    },
    $copy: function $copy(obj) {
        var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(obj)) {
            return this.$extend(deep, [], obj);
        } else if ('' + obj === 'null') {
            return obj;
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
            return this.$extend(deep, {}, obj);
        } else return obj;
    },
    $isPlainObject: function $isPlainObject(obj) {
        var proto, Ctor;

        if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
            return false;
        }

        proto = Object.getPrototypeOf(obj);

        if (!proto) {
            return true;
        }

        Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor === 'function' && Object.prototype.hasOwnProperty.toString.call(Ctor) === Object.prototype.hasOwnProperty.toString.call(Object);
    },
    $resolvePath: function $resolvePath(route, url) {
        if (!url) return route;
        if (url[0] === '/') {
            url = url.substr(1);
            return this.$resolvePath('', url);
        }
        if (url[0] !== '.') {
            return this.$resolvePath(route, './' + url);
        }
        var current = route.split('/');
        if (url[0] === '.' && url[1] === '/') {
            url = url.substr(2);
            if (url[0] !== '.') {
                if (current.length) current[current.length - 1] = url;else current = [url];
                return current.length === 1 ? '/' + current[0] : current.join('/');
            }
            return this.$resolvePath(current.join('/'), url);
        }
        if (url[0] === '.' && url[1] === '.' && url[2] === '/') {
            url = url.replace(/^\.*/ig, '');
            current.pop();
            return this.$resolvePath(current.join('/'), '.' + url);
        }
        if (url[0] === '.') {
            return this.$resolvePath(route, url.substr(1));
        }
    },
    $getParams: function $getParams(url) {
        var rst = {};
        var quoteIndex = url.indexOf('?');

        if (quoteIndex !== -1) {
            var str = url.substr(quoteIndex + 1);
            var tmp = void 0;
            str.split('&').forEach(function (v) {
                tmp = v.split('=');
                rst[tmp[0]] = decodeURIComponent(tmp[1]);
            });
        }
        return rst;
    }
};
//# sourceMappingURL=util.js.map