import Controller from '../hooks/Controller';
//  import Model from '../hooks/Model';
import {
  Menu, Header, ContactInner, Footer
} from '../views';
import '../scss/contact.scss';
//  import dataUsers from '../models/Users';
//  import Work from '../views/work';

const Contact = class extends Controller {
  constructor() {
    super();
    this.display();
    this.menuSite();
    this.contact();
  }

  display() {
    new Menu('body');
    new Header('#container');
    new ContactInner('#container');
    new Footer('body');
  }
};

export default Contact;
