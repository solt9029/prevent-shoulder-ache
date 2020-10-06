$(function () {
  DeviceOrientationEvent.requestPermission()
    .then(function (response) {
      if (response === "granted") {
        window.addEventListener("deviceorientation", deviceOrientation);
        $("#sensorrequest").css("display", "none");
        $("#cdiv").css("display", "block");
      }
    })
    .catch(function (e) {
      console.log(e);
    });

  DeviceMotionEvent.requestPermission()
    .then(function (response) {
      if (response === "granted") {
        window.addEventListener("devicemotion", deviceMotion);
        $("#sensorrequest").css("display", "none");
        $("#cdiv").css("display", "block");
      }
    })
    .catch(function (e) {
      console.log(e);
    });
});

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
