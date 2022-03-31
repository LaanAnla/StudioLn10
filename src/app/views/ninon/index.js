import View from '../../hooks/View';
import Zidane from '../../assets/images/ninon-zidane-miniature.jpg';
import ZidaneFull from '../../assets/images/ninon-zidane.jpg';
import Etablissement from '../../assets/images/ninon-etablissement-miniature.jpg';
import EtablissementFull from '../../assets/images/ninon-etablissement.jpg';
import HotGirlsVideo from '../../assets/videos/HOTGIRLSUMMER_sans_son.mp4';
import HotGirl from '../../assets/images/ninon-hot-girls-miniature.jpg';
import BalconVideo from '../../assets/videos/balcon.mp4';
import Balcon from '../../assets/images/ninon-balcon-miniature.jpg';
import Globe from '../../assets/images/globe-solid.svg';
import Linkedin from '../../assets/images/linkedin-brand.svg';
import Instagram from '../../assets/images/instagram-brand.svg';

class NinonInner extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <div class="member_introduction">
      <h1>Ninon Tevanian</h1>
      <h2>Illustration • Développement visuel • Animation</h2>
    </div>
    <div class="member_work">
        <div class="member_image--container">
            <img src=${Zidane} loading="lazy" alt="Dessin d'adolescents dans une chambre avec un poster de Zidane" data-src=${ZidaneFull} />
        </div>
        <div class="member_image--container">
            <img src=${Etablissement} loading="lazy" alt="Dessin d'un bâtiment industriel" data-src=${EtablissementFull} />
        </div>
        <div class="member_image--container">
          <video src=${HotGirlsVideo} preload="auto" poster=${HotGirl} class="click hot-girl" data-src=${HotGirlsVideo} ></video>
        </div>
        <div class="member_image--container">
          <video src=${BalconVideo} preload="auto" poster=${Balcon} class="click" data-src=${BalconVideo}></video>
        </div>
    </div>
    <div class="member_social">
      <a href="https://ninontevanian.myportfolio.com/" target="_blank"><img src=${Globe} alt="Lien vers le portfolio de Ninon Tevanian"></a>
      <a href="https://www.linkedin.com/in/ninon-tevanian-271534216/" target="_blank"><img src=${Linkedin} alt="Lien vers le profil Linkedin de Ninon Tevanian"></a>
      <a href="https://www.instagram.com/nin__on/" target="_blank"><img src=${Instagram} alt="Lien vers le compte Instagram de Ninon Tevanian"></a>
    </div>  
    `;
  }
}

export default NinonInner;
