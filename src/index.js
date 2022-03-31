// import './index.scss';
import controllers from './app/controllers';

const Routes = class Routes {
  constructor() {
    this.pathname = location.pathname;

    this.run();
  }

  run() {
    switch (this.pathname) {
      case '/':
        return new controllers.Home();
      case '/propos':
        return new controllers.About();
      case '/contact':
        return new controllers.Contact();
      case '/galerie':
        return new controllers.Galerie();
      case '/antonin':
        return new controllers.Antonin();
      case '/ninon':
        return new controllers.Ninon();
      case '/manon':
        return new controllers.Manon();
      case '/projets':
        return new controllers.Projets();
      case '/silence':
        return new controllers.Silence();
      case '/monaco':
        return new controllers.Monaco();
      case '/saint-gilles':
        return new controllers.SaintGilles();
      default:
        return '/404';
    }
  }
};

new Routes();
