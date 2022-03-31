import Controller from '../hooks/Controller';
// import Model from '../hooks/Model';
import {
  Menu, HeaderFixed, ProjetsInner, FooterFixed
} from '../views';
// import dataUsers from '../models/Users';

const Projets = class extends Controller {
  constructor() {
    super();
    // this.modelUsers = new Model(dataUsers);
    this.run();
    this.menuSite();
    this.animation();
  }

  run() {
    new Menu('body');
    new HeaderFixed('#container');
    new ProjetsInner('#container');
    new FooterFixed('body');
  }
};

export default Projets;
