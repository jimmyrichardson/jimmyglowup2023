import Sprites from "./lib/sprites";

class Jimmy {
  constructor() {
    this.init();
  }

  init() {
    new Sprites();
    this.checkProtocol();
    this.checkDarkMode();
  }

  checkProtocol(){
    if (window.location.hostname !== 'localhost' && window.location.protocol == "http:") {
      window.location.href = window.location.href.replace("http:", "https:");
    }
  }

  checkDarkMode(){
    const mode = window.matchMedia("(prefers-color-scheme: dark)");
    if (mode.matches) {
      document.body.classList.add("darkmode");
    }
    var btn = document.querySelectorAll("button");
    btn.forEach((b) => {
      b.addEventListener("click", () => {
        b.id == "lightmode"
          ? document.body.classList.remove("darkmode")
          : document.body.classList.add("darkmode");
      });
    });
  }
}

window.jimmy = new Jimmy();