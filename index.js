function handleClick() {
  if (DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          listenDeviceOrientationEvent();
        }
      })
      .catch(console.error);
  } else {
    listenDeviceOrientationEvent();
  }
}

function listenDeviceOrientationEvent() {
  window.addEventListener("deviceorientation", function (event) {
    document.getElementById("x").innerHTML = event.alpha;
    document.getElementById("y").innerHTML = event.beta; // 70-110くらいを許容する
    document.getElementById("z").innerHTML = event.gamma;
  });
}
