const View = class {
  constructor(el, html) {
    this.el = document.querySelector(el);
    this.html = html;
  }

  render() {
    this.el.innerHTML += this.html;
  }
};

export default View;
