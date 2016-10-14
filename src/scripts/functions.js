export function loadImageAsync(src) {
  let image = new Image();
  return new window.WinJS.Promise(function (complete, error, progress) {
    image.onload = complete;
    image.onerror = error;
    image.onprogress = progress;
    image.src = src;
  }, function () {
    image.onload = null;
    image.onerror = null;
    image.onprogress = null;
    image.src = "";
  });
}