/* ============================================================
   CASA DOIS ARQUITETOS — main.js
   ============================================================

   Este arquivo contém apenas:
   1. Animação de entrada dos elementos ao fazer scroll
   2. Scroll suave para âncoras do menu

   Não há lógica de edição aqui — tudo é editado
   diretamente no HTML e no CSS.

   ============================================================ */


/* ── 1. ANIMAÇÃO DE SCROLL (reveal) ─────────────────────────

   Todos os elementos com a classe "reveal" no HTML
   ficam invisíveis até aparecerem na tela.

   Para remover a animação de um elemento:
     → apague a classe "reveal" da tag no index.html

   Para adicionar a animação a um novo elemento:
     → adicione class="reveal" na tag desejada
     → opcionalmente: class="reveal reveal-delay-1" (até delay-4)

   ─────────────────────────────────────────────────────────── */

const elementosReveal = document.querySelectorAll('.reveal');

const observadorScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  },
  { threshold: 0.12 }
);

elementosReveal.forEach(el => observadorScroll.observe(el));


/* ── 2. SCROLL SUAVE PARA ÂNCORAS ───────────────────────────

   Funciona automaticamente para todos os links
   do menu (href="#secao").

   ─────────────────────────────────────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
  });
});


/* ── 3. MENU MOBILE (hambúrguer) ─────────────────────────────

   Controla a abertura/fechamento do menu no mobile e fecha
   automaticamente o menu ao clicar em qualquer item.

   ─────────────────────────────────────────────────────────── */

const botaoMenu = document.querySelector('.nav-toggle');
const menuMobile = document.querySelector('.nav-menu');

if (botaoMenu && menuMobile) {
  botaoMenu.addEventListener('click', () => {
    const aberto = menuMobile.classList.toggle('aberto');
    botaoMenu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', aberto);
  });

  menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('aberto');
      botaoMenu.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener("DOMContentLoaded", () => {

    const steps = document.querySelectorAll(".step");
    const totalSteps = steps.length;

    steps.forEach((step, index) => {

        const bar = step.querySelector(".step-bar");

        const percentage =
            ((index + 1) / totalSteps) * 100;

        step.addEventListener("mouseenter", () => {
            bar.style.width = percentage + "%";
        });

        step.addEventListener("mouseleave", () => {
            bar.style.width = "0";
        });

    });

});

}
