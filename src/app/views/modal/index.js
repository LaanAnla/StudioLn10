import View from '../../hooks/View';
import button from '../../assets/images/btn-close.svg';
import pokemon from '../../assets/images/antonin-pokemon-miniature.jpg';
import '../../scss/main.scss';
import '../../scss/work.scss';
import '../../scss/modal.scss';

class Modal extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
    <button class="member_modal--close--img">
        <img src="${button}" alt="">
    </button>
    <div class="member_modal--img">
        <img src="${pokemon}" class="full-image"></img>
    </div>      
    `;
  }
}

export default Modal;
