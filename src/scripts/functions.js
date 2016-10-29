import { SupportFlags, ErrorType } from "./enums";

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

export function loadAudioContext() {
  return new Promise((resolve, reject) => {
    if (window.AudioContext) {
      resolve(new window.AudioContext());
    } else if (window.webkitAudioContext) {
      resolve(new window.webkitAudioContext());
    } else {
      reject(ErrorType.loadAudioContext);
    }
  });
}

export function loadImage(src) {
  const image = new Image();
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