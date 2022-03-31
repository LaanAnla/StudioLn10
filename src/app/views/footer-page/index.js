import View from '../../hooks/View';
import '../../scss/main.scss';
import '../../scss/footer-page.scss';
import '../../scss/fonts.scss';

class FooterPage extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <footer class="main_footer--page">
            <p>@tous droits réservés | <a href="https://www.studioln10.com">STUDIO LN10</a></p>
        </footer>   
    `;
  }
}

export default FooterPage;
