import Controller from '../hooks/Controller';
// import Model from '../hooks/Model';
import {
  HeaderPage, FooterPage, Menu, ModalVideo
} from '../views';
import ManonInner from '../views/manon';
// import dataUsers from '../models/Users';

const Manon = class extends Controller {
  constructor() {
    super();
    this.run();
    this.menuSite();
    this.videosClick();
  }

  run() {
    new Menu('body');
    new HeaderPage('#container');
    new ManonInner('#container');
    new FooterPage('body');
    new ModalVideo('body');
  }
};

export default Manon;
