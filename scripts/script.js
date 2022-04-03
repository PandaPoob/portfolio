gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome to my Portfolio");
  gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#content",
      scrub: 0.3,
      end: "90% 70%",
    },
  });
  let headerImg = document.querySelector(".header-img");
  let headerText = document.querySelector(".header-text");
  let arrow = document.querySelector("#arrow");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  tl.to(headerImg, { duration: 0.1, opacity: 0, scale: 0.6 });
  tl.to(headerImg, { duration: 1.2, opacity: 1, scale: 1 });
  tl.to(headerText, { duration: 0.2, opacity: 0, y: "5rem" });
  tl.to(headerText, { duration: 0.5, opacity: 1, y: "-2rem" });
  tl.to(headerText, { duration: 0.8, opacity: 1, ease: Bounce.easeOut, y: 0 });
  tl.to(headerImg, {
    duration: 1,
    boxShadow: "0 0 40px 40px #ff2986",
  });
  tl.to(arrow, 0.5, { css: { className: "+=bouncing" } });

  frontpageScrollAnimations();
}
function frontpageScrollAnimations() {
  gsap.to(".about-texts", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
    },
  });

  gsap.to(".about-image", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "30% 70%",
        start: "top 70%",
        markers: true,
      },
    })

    .to("#skill-h2", {
      opacity: 1,
      duration: 0.5,
    })

    .to("#skill-line", {
      scaleX: 0,
      opacity: 0,
      duration: 0.1,
    })

    .to("#skill-line", {
      opacity: 1,
      duration: 0.1,
    })

    .to("#skill-line", {
      scaleX: 1,
      duration: 0.8,
    })

    .to(".skills-container", {
      y: "5vw",
      opacity: 0,
      duration: 0.1,
    })

    .to(".skills-container", {
      y: "-1vw",
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    })

    .to(".skills-container", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: Bounce.easeOut,
    })

    .to(".skill-instruc", {
      opacity: 1,
      duration: 0.7,
    });

  /*   gsap.to("#skill-line", {
    scaleX: 1,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#skills",
      start: "top 70%",
      markers: true,
    },
  }); */

  gsap.to(".project-heading", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      scrub: 0.5,
      start: "bottom 70%",
      end: "150% 70%",
    },
  });

  let cardContainer = document.querySelector(".card-container");
  gsap.to(cardContainer, {
    duration: 3,
    y: "-10vw",
    opacity: 1,
    scrollTrigger: {
      trigger: "#projects",
      scrub: 0.5,
      start: "10% 60%",
      end: "17% 50%",
    },
  });

  let circle = document.querySelector(".contact-circle");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "30% 70%",
      },
    })

    .to(circle, {
      y: "-25%",
      duration: 0.5,
    })

    .to(circle, {
      duration: 0.8,
      opacity: 1,
      ease: Bounce.easeOut,
      y: 0,
    });
}
