import { ErrorType } from "./constants";

export function loadAudioContext() {
  return new Promise(function (resolve, reject) {
    if (typeof window.AudioContext !== "undefined") {
      resolve(new window.AudioContext());
    } else if (typeof window.webkitAudioContext !== "undefined") {
      resolve(new window.webkitAudioContext());
    } else {
      reject(ErrorType.audioContextUnsupported);
    }
  });
}

export function loadImage(src) {
  let image = new Image();
  return new Promise(function (resolve, reject) {
    image.onload = function (e) { resolve(); };
    image.onerror = function (e) { reject(ErrorType.imageError); };
    image.src = src;
  }, function () {
    image.onload = null;
    image.onerror = null;
    image.src = "";
  });
}