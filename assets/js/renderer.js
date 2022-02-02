const getControlsHeight = () => {
  const controls = document.querySelector("#controls");
  if (controls) {
    return controls.offsetHeight;
  }
  return 0;
};

function calculateLayoutSize() {
  const webview = document.querySelector("webview");
  const windowWidth = document.documentElement.clientWidth;
  const windowHeight = document.documentElement.clientHeight;
  const controlsHeight = getControlsHeight();
  const webviewHeight = windowHeight - controlsHeight;

  webview.style.width = windowWidth + "px";
  webview.style.height = webviewHeight + "px";
}

window.onload = () => {
  calculateLayoutSize();
  homeButton();
};

window.onresize = calculateLayoutSize;
