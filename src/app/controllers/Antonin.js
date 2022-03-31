import Controller from '../hooks/Controller';
// import Model from '../hooks/Model';
import {
  HeaderPage, FooterPage, Menu, AntoninInner, Modal
} from '../views';
import '../scss/work.scss';
// import dataUsers from '../models/Users';

const Antonin = class extends Controller {
  constructor() {
    super();
    this.run();
    this.menuSite();
    this.modal();
  }

  run() {
    new Menu('body');
    new HeaderPage('#container');
    new AntoninInner('#container');
    new FooterPage('body');
    new Modal('body');
  }
};

export default Antonin;
