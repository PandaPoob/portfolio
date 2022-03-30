gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  let goBack = document.querySelector("#go-back-link");
  gsap.to(goBack, { delay: 2.5, duration: 1, x: "0%", opacity: 1 });

  let goBackGrow = gsap
    .timeline({
      repeat: Infinity,
      repeatDelay: 8,
      scrollTrigger: {
        trigger: ".first-detail",
        start: "20% 70%",
      },
    })
    .to(goBack, { duration: 0.1, y: "0%" })
    .to(goBack, { duration: 1.5, y: "-2rem", ease: Expo.easeOut })
    .to(goBack, { duration: 0.2, rotation: 5, transformOrigin: "top 50%" })
    .to(goBack, { duration: 0.2, rotation: -5, transformOrigin: "top 50%" })
    .to(goBack, { duration: 0.2, rotation: 5, transformOrigin: "top 50%" })
    .to(goBack, { duration: 0.2, rotation: -5, transformOrigin: "top 50%" })
    .to(goBack, { duration: 2, y: "0%", rotation: 0, ease: Bounce.easeOut });
  //.to(goBack, { duration: 1.2, scale: 1.2 })
  //.to(goBack, { duration: 1.2, scale: 1 });

  goBack.addEventListener("mouseenter", () => goBackGrow.pause());
  goBack.addEventListener("mouseleave", () => goBackGrow.resume());
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
