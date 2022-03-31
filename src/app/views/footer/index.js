import View from '../../hooks/View';
import linkedin from '../../assets/images/linkedin-brand.svg';
import youtube from '../../assets/images/youtube-brand.svg';
import vimeo from '../../assets/images/vimeo-brand.svg';
import instagram from '../../assets/images/instagram-brand.svg';
import '../../scss/main.scss';
import '../../scss/footer.scss';
import '../../scss/fonts.scss';

class Footer extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <footer class="main_footer">
            <div class="main_footer--social">
                <a href="https://www.linkedin.com/company/studioln10/about/" target="_blank"><img src="${linkedin}" alt="logo du lien Linkedin de Studioln10"></a>
                <a href="https://vimeo.com/studioln10" target="_blank"><img src="${vimeo}" alt="logo du lien Vimeo de Studioln10"></a>
                <a href="https://www.youtube.com/channel/UCqC4gB0mU-vWviQg1JzAv1w" target="_blank" ><img src="${youtube}" alt="logo du lien Youtube de Studioln10"></a>
                <a href="https://www.instagram.com/studioln10/" target="_blank" ><img src="${instagram}" alt="logo du lien Instagram de Studioln10"></a>
            </div>
          <p>@tous droits réservés | <a href="https://www.studioln10.com">STUDIO LN10</a></p>
        </footer>
    `;
  }
}

export default Footer;
