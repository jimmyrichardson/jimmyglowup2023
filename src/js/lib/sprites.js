import spritesheet from '../util/spritesheet';

export default class Sprites {
  constructor() {
    this.init();
    this.container;
  }

  init() {
    this.container = document.getElementById('ascii');
    this.initSprites();
    this.initRaf();
  }

  initSprites(){
    spritesheet.forEach((s)=>{
      let pre = document.createElement('pre');
      pre.innerText = s;
      this.container.appendChild(pre);
    });
  }

  initRaf() {
    const $this = this;
    function go(time) {
      const s = time / 100;
      const x = Math.round(s);
      const l = spritesheet.length;
      const a = x % l * -100;
      $this.container.style.transform = `translate3d(${a}%,0px,0px)`;
      requestAnimationFrame(go);
    }
    requestAnimationFrame(go);
  }
}

