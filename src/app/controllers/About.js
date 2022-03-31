import Controller from '../hooks/Controller';
// import Model from '../hooks/Model';
import {
  Header, Footer, Propos, Menu
} from '../views';
// import dataUsers from '../models/Users';

const About = class extends Controller {
  constructor() {
    super();
    this.run();
    this.menuSite();
  }

  run() {
    new Menu('body');
    new Header('#container');
    new Propos('#container');
    new Footer('body');
  }
};

export default About;
