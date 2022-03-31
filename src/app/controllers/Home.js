import Controller from '../hooks/Controller';
//  import Model from '../hooks/Model';
import {
  Menu, Header, Navigation, Footer
} from '../views';
//  import dataUsers from '../models/Users';
//  import Work from '../views/work';

const Home = class extends Controller {
  constructor() {
    super();
    this.display();
    this.menuSite();
  }

  display() {
    new Menu('body');
    new Header('#container');
    new Navigation('#container');
    new Footer('body');
  }
};

export default Home;
