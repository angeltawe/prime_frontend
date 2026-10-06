import { header, footer, page, projectCards } from './views.js';

const app = document.querySelector('#app');
const render = () => {
  app.innerHTML = `${header()}${page(window.location.hash)}${footer()}`;
  bind();
};

function bind() {
  const menu = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  menu?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
  });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }));
  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelector('#project-list').innerHTML = projectCards(button.dataset.filter);
  }));
  document.querySelector('#contact-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const message = event.currentTarget.querySelector('.form-message');
    message.textContent = 'Thanks — your inquiry is on its way. We will be in touch soon.';
    event.currentTarget.reset();
  });
}

window.addEventListener('hashchange', render);
render();
