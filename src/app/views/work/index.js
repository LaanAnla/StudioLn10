import View from '../../hooks/View';
import pokemon from '../../assets/images/antonin-pokemon-miniature.jpg';
import volley from '../../assets/images/antonin-volley-ball-miniature.jpg';
import maison from '../../assets/images/antonin-maison-miniature.jpg';
import cityskyline from '../../assets/images/antonin-cityskyline-miniature.jpg';
import pokemonFull from '../../assets/images/antonin-pokemon.jpg';
import volleyFull from '../../assets/images/antonin-volley-ball.jpg';
import mainsonFull from '../../assets/images/antonin-maison.jpg';
import cityskylineFull from '../../assets/images/antonin-cityskyline.jpg';
import '../../scss/main.scss';
import '../../scss/work.scss';

class Work extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <div class="member_work">
            <div class="member_image--container">
                <img src="${pokemon}" loading="lazy" alt="modéliasation 3D d'un pokemon dans une chambre" data-src="${pokemonFull}" />
            </div>
            <div class="member_image--container">
                <img src="${volley}" loading="lazy" alt="dessin d'un joueur de volley ball" data-src="${volleyFull}" />
            </div>
            <div class="member_image--container">
                <img src="${maison}" loading="lazy" alt="dessin d'une maison" data-src="${mainsonFull}" />
            </div>
            <div class="member_image--container">
                <img src="${cityskyline}" loading="lazy" alt="dessin d'une tente dans une forêt" data-src="${cityskylineFull}" />
            </div>
        </div>
    `;
  }
}

export default Work;
