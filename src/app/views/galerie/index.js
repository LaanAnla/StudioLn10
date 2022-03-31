import View from '../../hooks/View';
import Village from '../../assets/images/gallerie-village-couleur-miniature.jpg';
import VillageFull from '../../assets/images/gallerie-village-couleur.jpg';
import Pirates from '../../assets/images/gallerie-pirates-miniature.jpg';
import PiratesFull from '../../assets/images/gallerie-pirates.jpg';
import Nuit from '../../assets/images/gallerie-maison-nuit-miniature.jpg';
import NuitFull from '../../assets/images/gallerie-maison-nuit.jpg';
import Personnage from '../../assets/images/gallerie-personnages-miniature.jpg';
import PersonnageFull from '../../assets/images/gallerie-personnages.jpg';
import Black from '../../assets/images/gallerie-black-white-miniature.jpg';
import BlackFull from '../../assets/images/gallerie-black-white.jpg';
import Jardin from '../../assets/images/gallerie-maison-jardin-miniature.jpg';
import JardinFull from '../../assets/images/gallerie-maison-jardin.jpg';
import Vacances from '../../assets/images/gallerie-vacances-miniature.jpg';
import VacancesFull from '../../assets/images/gallerie-vacances.jpg';
import Drunk from '../../assets/images/gallerie-drunk-miniature.jpg';
import DrunkFull from '../../assets/images/gallerie-drunk.jpg';
import Dog from '../../assets/images/gallerie-dog-miniature.jpg';
import DogFull from '../../assets/images/gallerie-dog.jpg';
import Flowers from '../../assets/images/gallerie-flowers-miniature.jpg';
import FlowersFull from '../../assets/images/gallerie-flowers.jpg';
import Sdb from '../../assets/images/gallerie-sdb-miniature.jpg';
import SdbFull from '../../assets/images/gallerie-sdb.jpg';
import Tetris from '../../assets/images/gallerie-tetris-miniature.jpg';
import TetrisFull from '../../assets/images/gallerie-tetris.jpg';
import Reussir from '../../assets/images/gallerie-reussir-miniature.jpg';
import ReussirFull from '../../assets/images/gallerie-reussir.jpg';
import Cosmonaute from '../../assets/images/gallerie-cosmonaute-miniature.jpg';
import CosmonauteFull from '../../assets/images/gallerie-cosmonaute.jpg';
import Nageuse from '../../assets/images/gallerie-nageuse-miniature.jpg';
import NageuseFull from '../../assets/images/gallerie-nageuse.jpg';
import Visages from '../../assets/images/gallerie-visages-miniature.jpg';
import VisagesFull from '../../assets/images/gallerie-visages.jpg';
import Plongeon from '../../assets/images/gallerie-plongeon-miniature.jpg';
import PlongeonFull from '../../assets/images/gallerie-plongeon.jpg';
import Logo from '../../assets/images/logo-studio-ln10.svg';
import '../../scss/galerie.scss';

class GalerieInner extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <section class="main_gallerie--container">
        <div class="main_gallerie--module">
            <div class="main_gallerie--img">
                <img src=${Village} loading="lazy" alt="" data-src=${VillageFull}>
            </div>
            <div class="main_gallerie--img">
                <img src=${Pirates} loading="lazy" alt="" data-src=${PiratesFull}>
            </div>
            <div class="main_gallerie--img">
                <img src=${Nuit} loading="lazy" alt="" data-src=${NuitFull}>
            </div>
        </div>
        <div class="main_gallerie--module">
            <div class="main_gallerie--img">
                <img src=${Personnage} loading="lazy" alt="" data-src=${PersonnageFull}>
            </div>
            <div class="main_gallerie--img">
                <img src=${Black} loading="lazy" alt="" data-src=${BlackFull}>
            </div>
            <div class="main_gallerie--img">
                <img src=${Jardin} loading="lazy" alt="" data-src=${JardinFull}>
            </div>
        </div>
        <div class="main_gallerie--module">
            <div class="main_gallerie--img">
                <img src=${Vacances} loading="lazy" alt="" data-src=${VacancesFull}>
            </div>
            <div class="main_gallerie--img">
                <img src=${Drunk} loading="lazy" alt="" data-src=${DrunkFull}>
            </div>
            <div class="main_gallerie--img">
                <img src=${Dog} loading="lazy" alt="" data-src=${DogFull}>
            </div>
        </div>
        <div class="main_gallerie--module">
            <div class="main_gallerie--img">
                <img src=${Flowers} loading="lazy" alt="" data-src=${FlowersFull}> 
            </div>
            <div class="main_gallerie--img">
                <img src=${Sdb} loading="lazy" alt="" data-src=${SdbFull}> 
            </div>
            <div class="main_gallerie--img">
                <img src=${Tetris} loading="lazy" alt="" data-src=${TetrisFull}>
            </div>
        </div>
        <div class="main_gallerie--module">
            <div class="main_gallerie--img">
                <img src=${Reussir} loading="lazy" alt="" data-src=${ReussirFull}> 
            </div>
            <div class="main_gallerie--img">
                <img src=${Cosmonaute} loading="lazy" alt="" data-src=${CosmonauteFull}> 
            </div>
            <div class="main_gallerie--img">
                <img src=${Nageuse} loading="lazy" alt="" data-src=${NageuseFull}>
            </div>
        </div>
        <div class="main_gallerie--module">
            <div class="main_gallerie--img">
                <img src=${Visages} loading="lazy" alt="" data-src=${VisagesFull}> 
            </div>
            <div class="main_gallerie--img">
                <img src=${Plongeon} loading="lazy" alt="" data-src=${PlongeonFull}> 
            </div>
            <div class="main_gallerie--img">
                <img src=${Logo} loading="lazy" alt="">
            </div>
        </div>
    </section>
    `;
  }
}

export default GalerieInner;
