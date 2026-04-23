import gsap from "gsap";

export default function animateHero(container) {

  const reveals = container.querySelectorAll(".reveal");
  const role = container.querySelector(".roleLine");

  gsap.from(reveals, {
    y: 200,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out"
  });

  gsap.from(role, {
    y: 50,
    opacity: 0,
    delay: 0.6,
    duration: 1,
    ease: "power3.out"
  });
}