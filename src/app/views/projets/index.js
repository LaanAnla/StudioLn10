import View from '../../hooks/View';
import Silence from '../../assets/images/projet-le-silence.jpg';
import Monaco from '../../assets/images/projet-musee-monaco.jpg';
import SaintGilles from '../../assets/images/projet-musee-saint-gilles.jpg';
import '../../scss/projets.scss';

class ProjetsInner extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <section class="main_projet--container">
        <div class="main_projet--module">
            <div class="main_projet--img">
                <a href="/silence"><img src=${Silence} alt=""></a>
            </div>
            <p>Au fur et à mesure que Lou s’enfonce dans l’eau, son monde sonore se transforme et l’entraîne dans une sérénité totale - 2020.</p>
        </div>
        <div class="main_projet--module">
            <div class="main_projet--img">
                <a href="/monaco"><img src=${Monaco} alt=""></a>
            </div>
            <p>Réalisation de visuels pour l'agence Maskarade dans le cadre du concours du <a href="https://www.oceano.org/" target="_blank">Musée Océanographique de Monaco</a> - 2021.</p>
        </div>
        <div class="main_projet--module">
            <div class="main_projet--img">
                <a href="/saint-gilles"><img src=${SaintGilles} alt=""></a>
            </div>
            <p>Réalisation de visuels pour l'agence Maskarade dans le cadre du concours du nouveau <a href="https://saint-gilles.fr/musee-de-la-maison-romane" target="_blank">Musée de Saint-Gilles</a> - 2021.</p>
        </div>
    </section>    
    `;
  }
}

export default ProjetsInner;
