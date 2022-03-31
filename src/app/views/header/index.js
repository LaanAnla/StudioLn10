import View from '../../hooks/View';
import logo from '../../assets/images/logo-studio-ln10.svg';
import '../../scss/main.scss';
import '../../scss/header.scss';

class Header extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
      <header>
        <nav class="main_navigation">
          <div class="main_navigation--logo">
              <a href="/"><img src="${logo}" alt="logo du site StudioLN10"></a>
          </div>
          <div class="main_navigation--burger">
              <div>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
        </nav>
      </header>
    `;
  }
}

export default Header;
