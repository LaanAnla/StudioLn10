import Controller from '../hooks/Controller';
// import Model from '../hooks/Model';
import {
  Menu, HeaderFixed, FooterFixed, Modal
} from '../views';
import GalerieInner from '../views/galerie';
// import dataUsers from '../models/Users';

const Galerie = class extends Controller {
  constructor() {
    super();
    // this.modelUsers = new Model(dataUsers);
    this.run();
    this.menuSite();
    this.animationGallerie();
    this.imagesClick();
    this.modal();
  }

  run() {
    new Menu('body');
    new HeaderFixed('#container');
    new GalerieInner('#container');
    new FooterFixed('body');
    new Modal('body');
  }
};

export default Galerie;
