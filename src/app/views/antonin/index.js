import View from '../../hooks/View';
import Pokemon from '../../assets/images/antonin-pokemon-miniature.jpg';
import Volley from '../../assets/images/antonin-volley-ball-miniature.jpg';
import CitySkyline from '../../assets/images/antonin-cityskyline-miniature.jpg';
import Maison from '../../assets/images/antonin-maison-miniature.jpg';
import PokemonFull from '../../assets/images/antonin-pokemon.jpg';
import VolleyFull from '../../assets/images/antonin-volley-ball.jpg';
import CitySkylineFull from '../../assets/images/antonin-cityskyline.jpg';
import MaisonFull from '../../assets/images/antonin-maison.jpg';
import ArtStation from '../../assets/images/artstation-brand.svg';
import Globe from '../../assets/images/globe-solid.svg';
import Linkedin from '../../assets/images/linkedin-brand.svg';
import Instagram from '../../assets/images/instagram-brand.svg';

class AntoninInner extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <div class="member_introduction">
        <h1>Antonin Lucien</h1>
        <h2>Décorateur trait et couleur • Développement visuel • Modélisation 3D</h2>
    </div>
    <div class="member_work">
        <div class="member_image--container">
            <img src=${Pokemon} loading="lazy" alt="modéliasation 3D d'un pokemon dans une chambre" data-src=${PokemonFull} />
        </div>
        <div class="member_image--container">
            <img src=${Volley} loading="lazy" alt="dessin d'un joueur de volley ball" data-src=${VolleyFull} />
        </div>
        <div class="member_image--container">
            <img src=${Maison} loading="lazy" alt="dessin d'une maison" data-src=${MaisonFull} />
        </div>
        <div class="member_image--container">
            <img src=${CitySkyline} loading="lazy" alt="dessin d'une tente dans une forêt" data-src=${CitySkylineFull} />
        </div>
    </div>
    <div class="member_social">
            <a href="https://antoninlucien.myportfolio.com/" target="_blank"><img src=${Globe} alt="Lien vers le portfolio Adobe d'Antonin Lucien"></a>
            <a href="https://www.instagram.com/antonin__l/" target="_blank"><img src=${Instagram} alt="Lien vers le compte Instagram d'Antonin Lucien"></a>
            <a href="https://www.artstation.com/antonin_lucien" target="_blank"><img src=${ArtStation} alt="Lien vers le compte ArtStation d'Antonin Lucien"></a>
            <a href="https://www.linkedin.com/in/antonin-lucien/" target="_blank"><img src=${Linkedin} alt="Lien vers le profil Linkedin d'Antonin Lucien"></a>
    </div>  
    `;
  }
}

export default AntoninInner;
