import View from '../../hooks/View';
import VideoDemo from '../../assets/videos/BANDE_DEMO_LN10.mp4';
import Poster from '../../assets/images/demo-reel-basic.jpg';
import '../../scss/navigation.scss';

class Navigation extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <main class="main_content--index">
            <div class="ul_menu">
                <ul class="ul_menu--index">
                    <li><a href="/projets">projets</a></li>
                    <li><a href="/antonin">antonin</a></li>
                    <li><a href="/manon">manon</a></li>
                    <li><a href="/ninon">ninon</a></li>
                </ul>
            </div>
            <div class="video">
                <video src="${VideoDemo}" preload="auto" controls poster="${Poster}" >
                    <p>Votre navigateur ne prend pas en charge les vidéos HTML5.</p>
                </video>
            </div>
        </main>
    `;
  }
}

export default Navigation;
