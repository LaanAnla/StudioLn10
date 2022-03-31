import View from '../../hooks/View';
import button from '../../assets/images/btn-close.svg';
import hotgirls from '../../assets/videos/HOTGIRLSUMMER_sans_son.mp4';
import '../../scss/main.scss';
import '../../scss/work.scss';
import '../../scss/modal.scss';

class ModalVideo extends View {
  constructor(el) {
    super();
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    return `
        <button class="member_modal--close">
            <img src=${button} alt="">
        </button>
        <div class="member_modal--video">
            <video src=${hotgirls} class="full-video" controls></video>
        </div>    
    `;
  }
}

export default ModalVideo;
