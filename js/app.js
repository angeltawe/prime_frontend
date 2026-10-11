import { header, footer, page, projectCards } from './views.js';

const app = document.querySelector('#app');
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
};

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
  document.querySelector('#contact-form')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.querySelector('.form-message');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!window.emailjs) {
      message.textContent = 'The contact service is unavailable right now. Please email us directly.';
      return;
    }

    if (Object.values(EMAILJS_CONFIG).some(value => value.startsWith('YOUR_'))) {
      message.textContent = 'The contact form still needs its EmailJS configuration.';
      return;
    }

    submitButton.disabled = true;
    message.textContent = 'Sending your inquiry...';

    try {
      window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
      await window.emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form
      );
      message.textContent = 'Thanks — your inquiry is on its way. We will be in touch soon.';
      form.reset();
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      message.textContent = 'We could not send your inquiry. Please email us directly instead.';
    } finally {
      submitButton.disabled = false;
    }
  });
}

window.addEventListener('hashchange', render);
render();
