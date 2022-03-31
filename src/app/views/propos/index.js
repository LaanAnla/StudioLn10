import View from '../../hooks/View';
import antonin from '../../assets/images/antonin-portrait.jpg';
import manon from '../../assets/images/manon-portrait.jpg';
import ninon from '../../assets/images/ninon-portrait.jpg';
import '../../scss/propos.scss';

class Propos extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <section class="main_propos">
            <div class="main_propos--text">
                <h3>LN10 c’est quoi ? Pour faire simple, c’est l’association de trois jeunes diplômés en <a href="https://www.ecolelatelier.com/" target="_blank">graphisme et cinéma d’animation</a>. </h3>
                <h3>Forts de nos complémentarités et de nos différences, nous nous sommes réunis au sein d’un collectif créatif afin de réaliser des illustrations, animations, graphismes et toutes sortes de contenus visuels autour d’univers et de techniques variées.</h3>
            </div>
            <div class="main_propos--members">
                <div class="propos_members">
                    <img src=${antonin} alt="Portrait d'Antonin Lucien">
                    <h3>antoninlucien</h3>
                    <a href="mailto:antoninlucien@studioln10.com"><h4>antoninlucien@studioln10.com</h4></a>    
                </div>
                <div class="propos_members">
                    <img src=${manon} alt="Portrait de Manon Ary">
                    <h3>manonary</h3>
                    <a href="mailto:manonary@studioln10.com"><h4>manonary@studioln10.com</h4></a>
                </div>
                <div class="propos_members">
                    <img src=${ninon} alt="Portrait de Ninon Tevanian">
                    <h3>ninontevanian</h3>
                    <a href="mailto:ninontevanian@studioln10.com"><h4>ninontevanian@studioln10.com</h4></a>
                </div>
            </div>
        </section>      
    `;
  }
}

export default Propos;
