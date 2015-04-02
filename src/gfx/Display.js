class Display {
  constructor(width = 800, height = 600, fullscreen = false) {
    this.width = width;
    this.height = height;
    this.fullscreen = fullscreen;

    this.pixels = new Uint32Array(this.width * this.height);
  }

  get element() {
    if (this._canvasElement === undefined) {
      this._canvasElement = document.createElement('canvas');
      this._canvasElement.width = this.width;
      this._canvasElement.height = this.height;

      document.body.appendChild(this._canvasElement);
    }

    return this._canvasElement;
  }

  get context() {
    if (this._canvasContext === undefined) {
      this._canvasContext = this.element.getContext('2d');
    }

    return this._canvasContext;
  }

  clear() {
    this.element.width = this.width;
    this.element.height = this.height;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;

    this.clear();
  }

  render() {
    console.log('Not implemented');
  }
}

export default Display;
