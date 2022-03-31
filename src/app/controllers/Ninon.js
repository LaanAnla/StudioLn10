import Controller from '../hooks/Controller';
// import Model from '../hooks/Model';
import {
  HeaderPage, FooterPage, Menu, NinonInner, Modal, ModalVideo
} from '../views';
// import dataUsers from '../models/Users';

const Ninon = class extends Controller {
  constructor() {
    super();
    this.run();
    this.menuSite();
    this.videosClick();
    this.modal();
  }

  run() {
    new Menu('body');
    new HeaderPage('#container');
    new NinonInner('#container');
    new FooterPage('body');
    new Modal('body');
    new ModalVideo('body');
  }
};

export default Ninon;
