/*
==========================================================
SUMAN SAHU PORTFOLIO
script.js
==========================================================
*/
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initSmoothScroll();
    initReveal();
    initTyping();
    initCounters();
    initMouseGlow();
    initParticles();
    initParallax();
    initScrollProgress();
});
/* ==========================================================
NAVBAR
========================================================== */
function initNavbar() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}
/* ==========================================================
SMOOTH SCROLL
========================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}
/* ==========================================================
SCROLL REVEAL
========================================================== */
function initReveal() {
    const elements = document.querySelectorAll("section,.card,.skills span");
    elements.forEach(el => el.classList.add("reveal"));
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });
    elements.forEach(el => observer.observe(el));
}
/* ==========================================================
TYPING EFFECT
========================================================== */
function initTyping() {
    const subtitle = document.querySelector(".hero h2");
    if (!subtitle) return;
    const text = subtitle.innerText;
    subtitle.innerText = "";
    let index = 0;
    function type() {
        if (index < text.length) {
            subtitle.innerText += text.charAt(index);
            index++;
            setTimeout(type, 45);
        }
    }
    type();
}
/* ==========================================================
COUNTERS
========================================================== */
function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    counters.forEach(counter => {
        const target = Number(counter.dataset.counter);
        let current = 0;
        const increment = target / 80;
        const update = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = target;
            } else {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(update);
            }
        };
        update();
    });
}
/* ==========================================================
MOUSE GLOW
========================================================== */
function initMouseGlow() {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    window.addEventListener("mousemove", e => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}
/* ==========================================================
FLOATING PARTICLES
========================================================== */
function initParticles() {
    const container = document.getElementById("particles");
    if (!container) return;
    for (let i = 0; i < 35; i++) {
        const dot = document.createElement("span");
        const size = Math.random() * 5 + 2;
        dot.style.position = "absolute";
        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.borderRadius = "50%";
        dot.style.background = "rgba(255,255,255,.3)";
        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";
        dot.style.animation = `float${i} ${10 + Math.random() * 15}s linear infinite`;
        const style = document.createElement("style");
        style.innerHTML = `
        @keyframes float${i}{
            from{
                transform:translateY(0px);
                opacity:.2;
            }
            50%{
                opacity:.8;
            }
            to{
                transform:translateY(-120vh);
                opacity:0;
            }
        }
        `;
        document.head.appendChild(style);
        container.appendChild(dot);
    }
}
/* ==========================================================
PARALLAX HERO
========================================================== */
function initParallax() {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    window.addEventListener("scroll", () => {
        hero.style.transform = `translateY(${window.scrollY * .15}px)`;
    });
}
/* ==========================================================
ACTIVE NAVIGATION
========================================================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
/* ==========================================================
SCROLL PROGRESS
========================================================== */
function initScrollProgress() {
    const progress = document.createElement("div");
    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "3px";
    progress.style.background =
        "linear-gradient(90deg,#3B82F6,#8B5CF6)";
    progress.style.zIndex = "99999";
    progress.style.width = "0%";
    document.body.appendChild(progress);
    window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;
        progress.style.width = (scroll / height) * 100 + "%";
    });
}
/* ==========================================================
CARD HOVER TILT
========================================================== */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (x / rect.width - .5) * 10;
        const rotateX = (rect.height / 2 - y) / 15;
        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});
/* ==========================================================
PRELOADER
========================================================== */
window.addEventListener("load", () => {
    document.body.classList.add("loading");
});
/* ==========================================================
CONSOLE MESSAGE
========================================================== */
console.log(`
███████╗██╗   ██╗███╗   ███╗ █████╗ ███╗   ██╗
██╔════╝██║   ██║████╗ ████║██╔══██╗████╗  ██║
███████╗██║   ██║██╔████╔██║███████║██╔██╗ ██║
╚════██║██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║
███████║╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚████║
╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
Thanks for checking out my portfolio!
https://github.com/suman95
`);