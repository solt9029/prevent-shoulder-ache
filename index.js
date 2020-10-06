$(function () {
  $("#button").click(function () {
    request_permission();
  });
});

function request_permission() {
  if (
    DeviceMotionEvent &&
    DeviceMotionEvent.requestPermission &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  if (
    DeviceOrientationEvent &&
    DeviceOrientationEvent.requestPermission &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission();
  }
}

window.addEventListener(
  "deviceorientation",
  function (evt) {
    evt.preventDefault();
    let alpha = evt.alpha;
    let beta = evt.beta;
    let gamma = evt.gamma;

    document.write(`${alpha} ${beta} ${gamma}`);
  },
  false
);
