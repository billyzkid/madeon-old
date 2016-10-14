export function loadImageAsync(src) {
  let image = new Image();
  return new Promise(function (resolve, reject) {
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  }, function () {
    image.onload = null;
    image.onerror = null;
    image.src = "";
  });
}