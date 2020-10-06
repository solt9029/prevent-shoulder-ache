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

window.addEventListener("deviceorientation", function (evt) {
  evt.preventDefault();
  let alpha = evt.alpha;
  let beta = evt.beta;
  let gamma = evt.gamma;

  // document.write(`${alpha} ${beta} ${gamma}`);
});

window.addEventListener("devicemotion", function (evt) {
  evt.preventDefault();
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  document.write(`${x} ${y} ${z}`);
});
