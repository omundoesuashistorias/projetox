// script.js

// Função para controlar o menu: deixa o link clicado verde (classe "active") e remove dos outros
document.addEventListener('DOMContentLoaded', () => {

  const menuLinks = document.querySelectorAll('nav ul li a');

  menuLinks.forEach(link => {

    link.addEventListener('click', (e) => {

      // Remove active de todos
      menuLinks.forEach(l => l.classList.remove('active'));

      // Adiciona active no clicado
      e.currentTarget.classList.add('active');

    });

  });

  // Se quiser manter o link ativo baseado na URL atual, pode fazer assim:

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  menuLinks.forEach(link => {

    const href = link.getAttribute('href');

    if (href === currentPage) {

      link.classList.add('active');

    }

  });

});
