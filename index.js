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
