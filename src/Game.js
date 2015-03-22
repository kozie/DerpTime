import Display from "./gfx/Display";

export default class Game {
  constructor() {
    this._ready = false;
    this._running = false;

    this.init();
  }

  init() {
    this.display = new Display();
    this._ready = true;
    this.loop();
  }

  loop() {
    if (this._ready) {
      if (this._running) {
        this.update(this.delta);
        this.draw();
      }

      requestAnimationFrame(d => {
        if (this._running === false) {
          this._running = true;
        }

        this.delta = d;
        this.loop();
      });
    }
  }

  update(delta) {
    console.log(`Running at ${delta}`);
  }

  draw() {
    this.display.render();
  }

  get delta() {
    return this._delta;
  }

  set delta(value) {
    this._delta = value;
  }
}
