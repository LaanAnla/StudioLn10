import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Controller = class {
  contstructor() {
  }

  modal() {
    const images = document.querySelectorAll('.member_image--container img');
    const modalImages = document.querySelector('.member_modal--img');
    const modalFullImage = document.querySelector('img.full-image');
    const buttonClose = document.querySelector('button.member_modal--close--img');
    images.forEach((obj) => {
      const img = obj;
      img.onclick = () => {
        const timeline = gsap.timeline();
        gsap.set(modalImages, { x: -2000 });
        timeline
          .to(modalImages, {
            duration: 0.4,
            display: 'block',
            x: 0,
            ease: 'power4.out'
          })
          .to(buttonClose, {
            duration: 0.1,
            display: 'block'
          }, 1);

        const originalSrc = img.getAttribute('data-src');
        modalFullImage.src = originalSrc;
      };
    });
    buttonClose.onclick = () => {
      gsap.to(modalImages, {
        x: 2000,
        duration: 0.4,
        ease: 'power4.out',
        onComplete: () => {
          modalImages.style.display = 'none';
        }
      });
      gsap.to(buttonClose, {
        display: 'none',
        duration: 0.01
      });
    };
  }

  menuSite() {
    const hamburger = document.querySelector('.main_navigation--burger');
    const menu = document.querySelector('.main_menu');
    const links = document.querySelectorAll('.main_menu--links a');
    const logo = document.querySelector('.main_menu--logo img');
    let toggle = 0;
    hamburger.addEventListener('click', () => {
      if (toggle === 0) {
        toggle += 1;
        hamburger.classList.add('active');
        gsap.set(menu, { x: '-101%' });
        gsap.set(links, { autoAlpha: 0, x: '-500' });
        gsap.set(logo, { scale: 0, autoAlpha: 0 });
        const timeline = gsap.timeline();

        timeline.to(menu, { x: 0, duration: 0.6, ease: 'power4.out' }, 0);
        timeline.to(logo, {
          scale: 1, duration: 0.3, autoAlpha: 1, ease: 'power4.out'
        }, 0.4);
        timeline.to(links, {
          autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power4.out'
        }, 0.2);
      } else {
        toggle -= 1;
        hamburger.classList.remove('active');
        gsap.to(menu, { x: '101%', duration: 0.5, ease: 'power4.easeInOut' });
      }
    });
  }

  contact() {
    const holder = document.querySelectorAll('.main_contact--holder h2');
    const email = document.querySelector('.main_contact--email a');
    const timeline = gsap.timeline();
    timeline
      .set(email, { autoAlpha: 0 })
      .set(holder, { y: '-100%' })
      .to(holder, { y: 0, duration: 0.5 }, 0.5)
      .to(email, { autoAlpha: 1, duration: 0.5 }, 1);
  }

  videosClick() {
    const videos = document.querySelectorAll('.member_image--container video');
    const modalVideos = document.querySelector('.member_modal--video');
    const modalFullVideo = document.querySelector('video.full-video');
    const buttonClose = document.querySelector('button.member_modal--close');
    console.log(buttonClose);

    videos.forEach((obj) => {
      const vid = obj;
      vid.onclick = () => {
        const timeline = gsap.timeline();
        gsap.set(modalVideos, { x: -2000 });
        timeline
          .to(modalVideos, {
            duration: 0.2,
            display: 'block',
            x: 0,
            ease: 'power4.out'
          })
          .to(buttonClose, {
            duration: 0.1,
            display: 'block'
          }, 1);
        const originalSrc = vid.getAttribute('data-src');
        modalFullVideo.src = originalSrc;
      };
    });
    buttonClose.onclick = () => {
      gsap.to(modalVideos, {
        x: 2000,
        duration: 0.4,
        ease: 'power4.out',
        onComplete: () => {
          modalVideos.style.display = 'none';
          modalFullVideo.pause();
        }
      });
      gsap.to(buttonClose, {
        display: 'none',
        duration: 0.1
      });
    };
  }

  animation() {
    const container = document.querySelector('.main_projet--container');
    const sections = document.querySelectorAll('.main_projet--module');
    const images = gsap.utils.toArray('.main_projet--module img');
    const texts = gsap.utils.toArray('.main_projet--module p');
    const circle = document.querySelector('.scroll-down-ext');
    // const scrollDown = document.querySelector('line');
    const scrollTween = gsap.to(container, {
      x: -(container.scrollWidth - container.clientWidth),
      ease: 'none', // <-- IMPORTANT!
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${container.offsetWidth}`,
        pin: true,
        scrub: 1.5
      }
    });
    gsap.set(images, { autoAlpha: 1 });
    gsap.to(circle, {
      rotation: 360 * 8,
      ease: 'none',
      scrollTrigger: {
        trigger: sections,
        containerAnimation: scrollTween,
        // pin: true,
        scrub: true,
        start: 'top top',
        end: '+=10000'
      }
    });
    images.forEach((image) => {
      gsap.to(image, {
        autoAlpha: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: image,
          containerAnimation: scrollTween,
          start: 'left-=60% center',
          end: 'right center',
          // toggleClass: {targets: image, className: "is-active"},
          toggleActions: 'play reverse play reverse'
        }
      });
    });
    gsap.set(texts, { autoAlpha: 0 });
    texts.forEach((text) => {
      gsap.to(text, {
        autoAlpha: 1,
        duration: 0.6,
        ease: 'Power4.out',
        scrollTrigger: {
          trigger: text,
          containerAnimation: scrollTween,
          start: 'left center',
          end: 'center center-=5%',
          // markers: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });
  }

  animationGallerie() {
    this.buttonClose = document.querySelector('.member_modal--close');
    this.container = document.querySelector('.main_gallerie--container');
    this.sections = document.querySelectorAll('.main_gallerie--module');
    this.images = gsap.utils.toArray('.main_gallerie--img img');
    this.text = gsap.utils.toArray('.main_projet--module p');
    this.circle = document.querySelector('.scroll-down-ext');
    this.svgLine = document.querySelector('svg.line line');
    this.scrollDown = document.querySelector('line');
    this.scrollTween = gsap.to(this.container, {
      x: -(this.container.scrollWidth - this.container.clientWidth),
      ease: 'none', // <-- IMPORTANT!
      scrollTrigger: {
        trigger: this.container,
        start: 'top top',
        end: `+=${this.container.offsetWidth}`,
        pin: true,
        scrub: 1.5
      }
    });
    gsap.set(this.images, { autoAlpha: 1 });
    gsap.to(this.circle, {
      rotation: 360 * 5,
      ease: 'none',
      scrollTrigger: {
        trigger: this.sections,
        containerAnimation: this.scrollTween,
        // pin: true,
        scrub: true,
        start: 'top top',
        end: '+=10000'
      }
    });
  }

  imagesClick() {
    const images = document.querySelectorAll('.main_gallerie--img img');
    const modalImages = document.querySelector('.member_modal--img');
    const modalFullImage = document.querySelector('img.full-image');
    images.forEach((obj) => {
      const img = obj;
      img.onclick = () => {
        const timeline = gsap.timeline();
        gsap.set(modalImages, { x: -2000 });
        timeline
          .to(modalImages, {
            duration: 0.2,
            display: 'block',
            x: 0,
            ease: 'power4.out'
          })
          .to(this.buttonClose, {
            duration: 0.1,
            display: 'block'
          }, 1);
        const originalSrc = img.getAttribute('data-src');
        modalFullImage.src = originalSrc;
      };
    });
    this.buttonClose.onclick = () => {
      gsap.to(this.buttonClose, {
        display: 'none',
        duration: 0.1
      });
      gsap.to(modalImages, {
        x: 2000,
        duration: 0.4,
        ease: 'power4.out',
        onComplete: () => {
          modalImages.style.display = 'none';
        }
      });
    };
  }

  backToTop() {
    const bodyTag = document.querySelector('body');
    const button = document.createElement('div');
    button.classList.add('button');
    bodyTag.appendChild(button);
    window.addEventListener('scroll', () => {
      gsap.to(button, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: bodyTag,
          // markers: true,
          start: 'bottom top-=65%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        }
      });
    });
    button.addEventListener('click', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
};

export default Controller;
