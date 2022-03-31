import View from '../../hooks/View';
import logo from '../../assets/images/logo-studio-ln10.svg';
import '../../scss/main.scss';
import '../../scss/header-page.scss';
import '../../scss/header.scss';

class HeaderPage extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <header>
        <nav class="page_navigation">
            <div class="page_navigation--logo">
                <a href="./"><img src=${logo} alt="logo du site StudioLN10"></a>
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

export default HeaderPage;
