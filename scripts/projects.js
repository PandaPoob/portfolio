gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  let goBack = document.querySelector(".go-back-ani");
  gsap.to(goBack, {
    delay: 1.1,
    duration: 2,
    x: "0%",
    opacity: 1,
    ease: Power2.easeOut,
  });
  headerAnimation();
}

function headerAnimation() {
  let pHeaderText = document.querySelector(".project-header");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  tl.to(pHeaderText, { duration: 0.2, opacity: 0, scale: 0.6 });
  tl.to(pHeaderText, { duration: 0.5, opacity: 1, scale: 1 });
  //tl.to(goBack, 0.5, { css: { className: "+=wiggle" } });
  animations();
}

function animations() {
  gsap.to(".mockup-left", {
    delay: 0.75,
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".project-page",
      start: "top 70%",
    },
  });

  gsap.to(".mockup-right", {
    delay: 0.75,
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".project-page",
      start: "top 70%",
    },
  });

  gsap.to(".first-detail", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mockup",

      start: "60% center",
    },
  });

  gsap.to(".second-detail", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".first-detail",
      start: "30% 40%",
    },
  });
}
