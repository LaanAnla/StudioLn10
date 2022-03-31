import Controller from '../hooks/Controller';
import Model from '../hooks/Model';
import { Header, Footer } from '../views';
import dataUsers from '../models/Users';

const Silence = class extends Controller {
  constructor() {
    super();

    this.modelUsers = new Model(dataUsers);
    this.run();
  }

  run() {
    new Header('#container');
    new Footer('body');
  }
};

export default Silence;
