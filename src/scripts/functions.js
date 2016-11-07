export function getClassNames() {
  var classNames = [];

  for (var i = 0, l = arguments.length; i < l; i++) {
    var arg = arguments[i];
    if (arg) {
      if (Array.isArray(arg)) {
        classNames.push(getClassNames.apply(null, arg));
      } else {
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classNames.push(arg);
        } else if (argType === "object") {
          for (var key in arg) {
            if (arg.hasOwnProperty(key) && arg[key]) {
              classNames.push(key);
            }
          }
        }
      }
    }
  }

  return classNames.join(" ");
}