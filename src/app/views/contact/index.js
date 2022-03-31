import View from '../../hooks/View';

class ContactInner extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <section class="main_contact">
            <div class="main_contact--holder">
                <div><h2>Vous souhaitez plus d'informations ?</h2></div>
                <div><h2 class="thin-text">contactez-nous</h2></div>
            </div>
            <div class="main_contact--email">
                <a href="mailto:contact@StudioLN10.com"><h3>contact@studioln10.com</h3></a>
            </div>
        </section>
    `;
  }
}

export default ContactInner;
