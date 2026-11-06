const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
const still = reduced || saveData;

document.querySelectorAll<HTMLElement>("[data-reel]").forEach((el) => {
  const video = el.querySelector("video");
  if (!video) return;

  if (still) {
    el.classList.add("is-still");
    video.remove();
    return;
  }

  const play = () => {
    video.play()
      .then(() => el.classList.add("is-live"))
      .catch(() => el.classList.add("is-still"));
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) play();
          else video.pause();
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
  } else {
    play();
  }
});

const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if (reduced) {
  reveals.forEach((el) => el.classList.add("is-in"));
} else if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

if (!reduced) {
  const photos = document.querySelectorAll<HTMLElement>("[data-parallax] img");
  let ticking = false;
  const shift = () => {
    ticking = false;
    const vh = window.innerHeight;
    photos.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      img.style.setProperty("--shift", `${(progress * -16).toFixed(1)}px`);
    });
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(shift);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  shift();
}

const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
const mobileNav = document.querySelector<HTMLElement>(".nav-mobile");
if (menuBtn && mobileNav) {
  const setOpen = (open: boolean) => {
    mobileNav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  menuBtn.addEventListener("click", () => setOpen(!mobileNav.classList.contains("is-open")));
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
}

const year = document.getElementById("current-year");
if (year) year.textContent = String(new Date().getFullYear());
