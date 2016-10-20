import { ErrorType } from "./enums";

export function loadAudioContext() {
  return new Promise(function (resolve, reject) {
    if (typeof window.AudioContext !== "undefined") {
      resolve(new window.AudioContext());
    } else if (typeof window.webkitAudioContext !== "undefined") {
      resolve(new window.webkitAudioContext());
    } else {
      reject(ErrorType.loadAudioContext);
    }
  });
}

export function loadImage(src) {
  let image = new Image();
  return new Promise(function (resolve, reject) {
    image.onload = e => resolve(image);
    image.onerror = e => reject(ErrorType.loadImage);
    image.src = src;
  }, function () {
    image.onload = null;
    image.onerror = null;
    image.src = "";
  });
}