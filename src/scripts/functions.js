import { ErrorType } from "./enums";

export function delay(ms, value) {
  return function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), ms);
    });
  };
}

export function loadAudioContext() {
  return new Promise((resolve, reject) => {
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
  return new Promise((resolve, reject) => {
    image.onload = (event) => resolve(image);
    image.onerror = (event) => reject(ErrorType.loadImage);
    image.src = src;
  }, function () {
    image.onload = null;
    image.onerror = null;
    image.src = "";
  });
}