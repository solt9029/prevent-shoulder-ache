let initialBadTime = null;

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
    // スマホが垂直に近い場合
    if (event.beta > 70 && event.beta < 110) {
      if (initialBadTime !== null) {
        initialBadTime = null;
        $("body, #link").css({
          color: "black",
          "text-shadow": "",
        });
      }
      return;
    }

    const currentTime = new Date().getTime();
    if (initialBadTime === null) {
      initialBadTime = currentTime;
    }
    if (initialBadTime + 10000 >= currentTime) {
      $("body, #link").css({
        color: "transparent",
        "text-shadow":
          "0 0 " +
          (currentTime - initialBadTime) / 1250 +
          "px rgba(0,0,0," +
          (1 - (currentTime - initialBadTime) / 20000) +
          ")",
      });
    }
  });
}

$(function () {
  $(".modal").modal({
    keyboard: false,
  });
});
