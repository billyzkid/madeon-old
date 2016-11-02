import { SupportFlags, Errors } from "./constants";

export function getClassNames() {
  var classNames = [];

  for (var i = 0, l = arguments.length; i < l; i++) {
    var arg = arguments[i];
    if (arg) {
      var argType = typeof arg;
      if (argType === "string" || argType === "number") {
        classNames.push(arg);
      } else if (Array.isArray(arg)) {
        classNames.push(getClassNames.apply(null, arg));
      } else if (argType === "object") {
        for (var key in arg) {
          if (arg.hasOwnProperty(key) && arg[key]) {
            classNames.push(key);
          }
        }
      }
    }
  }

  return classNames.join(" ");
}

export function getUrl() {
  try {
    // Throws an error in node test environment
    return window.location.href;
  } catch (error) {
    return "";
  }
}

export function getSupport() {
  let support = SupportFlags.none;

  if (window.AudioContext || window.webkitAudioContext) {
    support |= SupportFlags.audio;
  }

  if (window.ontouchstart || window.onmsgesturechange) {
    support |= SupportFlags.touch;
  }

  return support;
}

export function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });
}

export function loadAudioContext() {
  return new Promise((resolve, reject) => {
    if (window.AudioContext) {
      resolve(new window.AudioContext());
    } else if (window.webkitAudioContext) {
      resolve(new window.webkitAudioContext());
    } else {
      reject(Errors.audioContextUnsupported);
    }
  });
}