import Display from "./gfx/Display";

export default class Game {
  constructor() {
    this._ready = false;
    this._running = false;
    this._lastDelta = 0;

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
        let delta = d - this._lastDelta;
        this._lastDelta = d;

        if (this._running === false) {
          this._running = true;
        }

        this.delta = delta;
        this.loop();
      });
    }
  }

  update(delta) {
    if (this.timePassed === undefined) {
      this.timePassed = 0;
    }

    if (this.fps === undefined) {
      this.fps = 0;
    }

    this.timePassed += delta;
    this.fps += 1;

    // FPS report
    if (this.timePassed / 1000 >= 1) {
      console.log(`FPS ${this.fps}`);
      this.timePassed = 0;
      this.fps = 0;
    }
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
