import View from '../../hooks/View';
import LogoWhite from '../../assets/images/logo-studio-ln10-white.svg';
import '../../scss/menu.scss';
import '../../scss/header.scss';

class Menu extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <div class="main_menu">
            <div class="main_menu--logo">
                <a href="./"><img src="${LogoWhite}" alt="logo du site StudioLN10"></a>
            </div>
            <div class="main_menu--links">
                <ul>
                    <li><a href="/propos">A propos</a></li>
                    <li><a href="/galerie">Galerie</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    `;
  }
}

export default Menu;
