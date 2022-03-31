import View from '../../hooks/View';
import TypoVideo from '../../assets/videos/typo.mp4';
import LpdmVideo from '../../assets/videos/lpdm.mp4';
import MouvVideo from '../../assets/videos/mouv-camera.mp4';
import OuyouonbottleVideo from '../../assets/videos/ouyouonbottle.mp4';
import Lpdm from '../../assets/images/manon-homme-miniature.jpg';
import Mouv from '../../assets/images/manon-camera-miniature.jpg';
import Ouyouonbottle from '../../assets/images/manon-bouteille-miniature.jpg';
import Typo from '../../assets/images/manon-typo-miniature.jpg';
import Globe from '../../assets/images/globe-solid.svg';
import Linkedin from '../../assets/images/linkedin-brand.svg';
import Instagram from '../../assets/images/instagram-brand.svg';
import Behance from '../../assets/images/behance-brand.svg';

class ManonInner extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <div class="member_introduction">
        <h1>Manonary</h1>
        <h2>Direction Artistique • Design Graphique • Motion Design • Développement visuel</h2>
    </div>
    <div class="member_work">
        <div class="member_image--container">
            <video src=${TypoVideo} preload="auto" poster=${Typo} data-src=${TypoVideo}></video>
        </div>
        <div class="member_image--container">
            <video src=${OuyouonbottleVideo} preload="auto" poster=${Ouyouonbottle} data-src=${OuyouonbottleVideo}></video>
        </div>
        <div class="member_image--container">
            <video src=${LpdmVideo} preload="auto" poster=${Lpdm} data-src=${LpdmVideo}></video>
        </div>
        <div class="member_image--container">
            <video src=${MouvVideo} preload="auto" poster=${Mouv} data-src=${MouvVideo} ></video>
        </div>
    </div>
    <div class="member_social">
        <a href="https://www.behance.net/ManonARY" target="_blank"><img src=${Behance} alt="Lien vers le compte Behance de Manon Ary"></a>
        <a href="https://www.instagram.com/manonary/" target="_blank"><img src=${Instagram} alt="Lien vers le compte instagram de Manon Ary"></a>
        <a href="https://www.linkedin.com/in/manon-ary-106887213/" target="_blank"><img src=${Linkedin} alt="Lien vers le profil Linkedin de Manon Ary"></a>
        <a href="https://manonary.myportfolio.com/" target="_blank"><img src=${Globe} alt="Lien vers le portfolio Adobe de Manon Ary"></a>
    </div>      
    `;
  }
}

export default ManonInner;
