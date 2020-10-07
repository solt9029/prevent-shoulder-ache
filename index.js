function handleClick() {
  if (DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState !== "granted") {
          return;
        }
        listenDeviceOrientationEvent();
      })
      .catch(console.error);
    return;
  }
  listenDeviceOrientationEvent();
}

function listenDeviceOrientationEvent() {
  window.addEventListener("deviceorientation", function (event) {
    if (event.beta > 70 && event.beta < 110) {
      return;
    }
    $("body").backgroundBlur({
      imageURL: "https://bit.ly/2gFyM23",
      blurAmount: 50,
      imageClass: "bg-blur",
    });
  });
}

$(function () {
  $(".modal").modal({
    keyboard: false,
  });
});
