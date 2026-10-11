import { siteModel } from './models.js';

const icon = (name) => `<span class="service-icon" aria-hidden="true">${name}</span>`;

export function header() {
  return `<header class="site-header"><div class="header-main"><a class="brand" href="#/" aria-label="Prime Stack home"><span class="brand-mark">P</span><span>Prime <b>Stack</b></span></a>
    <nav class="desktop-nav">${siteModel.nav.map(item => `<a href="${item.path}">${item.label}</a>`).join('')}</nav>
    <div class="header-actions"><a class="button button-small button-outline" href="#/portfolio">See our work</a><a class="button button-small desktop-cta" href="#/contact">Book consultation <span>↗</span></a></div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu"><span></span><span></span></button>
    </div>
    <nav id="mobile-nav" class="mobile-nav">${siteModel.nav.map(item => `<a href="${item.path}">${item.label}</a>`).join('')}<a class="button" href="#/contact">Book consultation <span>↗</span></a></nav>
  </header>`;
}

export function footer() {
  return `<footer class="site-footer"><div><a class="brand" href="#/"><span class="brand-mark">P</span><span>Prime <b>Stack</b></span></a><p>Engineering the systems that move business forward.</p></div><div class="footer-links"><a href="#/services">Services</a><a href="#/portfolio">Portfolio</a><a href="#/contact">Contact</a></div><div class="footer-meta"><span>© 2026 Prime Stack, Inc.</span><span>Bamenda, Cameroon · Remote</span></div></footer>`;
}

function cta(title = 'Have a complex problem to solve?', text = 'Tell us where you want to go. We will help you find the clearest path there.') {
  return `<section class="cta-section"><div><p class="eyebrow">LET'S WORK TOGETHER</p><h2>${title}</h2><p>${text}</p></div><a class="button" href="#/contact">Start a conversation <span>↗</span></a></section>`;
}

function serviceCards() {
  return `<div class="service-grid">${siteModel.services.map(service => `<article class="service-card"><div class="card-top">${icon(service.icon)}<span class="arrow">↗</span></div><h3>${service.title}</h3><p class="service-short">${service.short}</p><p>${service.description}</p><a href="#/contact" class="text-link">Explore capability <span>↗</span></a></article>`).join('')}</div>`;
}

function projectCards(filter = 'All') {
  const projects = siteModel.projects.filter(item => filter === 'All' || item.type === filter);
  return `<div class="project-grid">${projects.map(project => `<article class="project-card ${project.color}"><div class="project-visual"><span>${project.tag}</span><b>${project.name.slice(0, 1)}</b></div><div class="project-info"><p class="eyebrow">${project.type}</p><h3>${project.name}</h3><p>${project.result}</p><a href="#/contact" class="text-link">View case study <span>↗</span></a></div></article>`).join('')}</div>`;
}

export function page(path) {
  const route = path.replace(/^#\/?/, '') || 'home';
  if (route === 'home') return home();
  if (route === 'services') return innerPage('Services', 'The expertise to make your next chapter possible.', 'We bring product, platform, data, and design thinking together to make hard things feel clear.', serviceCards());
  if (route === 'portfolio') return innerPage('Portfolio', 'A track record of turning complexity into momentum.', 'We partner with teams who are building what comes next. Here are a few of the systems we have helped move forward.', `<div class="filter-row">${['All', ...siteModel.services.map(item => item.short)].map(filter => `<button class="filter-button ${filter === 'All' ? 'active' : ''}" data-filter="${filter}">${filter}</button>`).join('')}</div><div id="project-list">${projectCards()}</div>`);
  if (route === 'stack') return innerPage('Our stack', 'Tools should disappear behind the work.', 'We choose technology for its fit, not its fashion. Our stack is adaptable, proven, and built for teams that want to own their future.', `<div class="stack-grid">${siteModel.stack.map((item, index) => `<div class="stack-item"><span>0${index + 1}</span><strong>${item}</strong></div>`).join('')}</div>`);
  if (route === 'team') return innerPage('The team', 'Small enough to care. Experienced enough to lead.', 'We are a distributed group of engineers, designers, and strategists who like complicated problems and generous collaboration.', `<div class="team-grid">${siteModel.team.map(person => `<article class="person-card"><div class="avatar">${person.initials}</div><h3>${person.name}</h3><p>${person.role}</p></article>`).join('')}</div>`);
  if (route === 'careers') return innerPage('Careers', 'Build work you are proud to put your name on.', 'Join a thoughtful, high-agency team working on meaningful systems with people who make each other better.', `<div class="career-list">${['Senior Product Engineer', 'Staff Cloud Architect', 'Product Designer'].map((role, index) => `<a href="#/contact" class="career-row"><span>0${index + 1}</span><div><h3>${role}</h3><p>Remote · Full-time</p></div><span class="arrow">↗</span></a>`).join('')}</div>`);
  if (route === 'contact') return contact();
  return home();
}

function home() {
  return `<main><section class="hero"><div class="hero-copy"><p class="eyebrow">PRODUCT · PLATFORM · PEOPLE</p><h1>Build what’s next<br><em>without the guesswork.</em></h1><p class="hero-lede">Prime Stack brings senior engineers, thoughtful designers, and proven systems together to turn ambitious ideas into durable products.</p><div class="hero-actions"><a class="button" href="#/contact">Start a project <span>↗</span></a><a class="text-link" href="#/services">Explore capabilities <span>↓</span></a></div><p class="micro-proof"><span>✦</span> A senior team from day one. No handoffs. No hidden layers.</p><div class="metric-grid">${siteModel.metrics.map(metric => `<div><strong>${metric.value}</strong><span>${metric.label}</span></div>`).join('')}</div></div><div class="hero-art"><div class="art-label">ONE TEAM<br>FOR THE WHOLE<br>JOURNEY</div><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-core"><span class="brand-mark">P</span><small>PRIME<br>STACK</small></div><div class="art-node node-one">⌘</div><div class="art-node node-two">◇</div><div class="art-node node-three">▤</div><div class="art-node node-four">◌</div></div></section><section class="proof-strip"><span>TRUSTED BY TEAMS BUILDING</span><b>HEALTHCARE</b><b>FINTECH</b><b>CLIMATE</b><b>SAAS</b><b>MARKETPLACES</b></section><section class="home-section"><div class="section-heading"><div><p class="eyebrow">WHAT WE DO</p><h2>Built for the<br><em>next scale.</em></h2></div><p>Great software is more than code. It is a system that gives people room to do their best work.</p></div>${serviceCards()}</section>${cta()}</main>`;
}

function innerPage(eyebrowText, title, intro, content) {
  return `<main><section class="page-intro"><p class="eyebrow">${eyebrowText.toUpperCase()}</p><h1>${title}</h1><p>${intro}</p></section><section class="content-section">${content}</section>${cta()}</main>`;
}

function contact() {
  return `<main><section class="page-intro contact-intro"><p class="eyebrow">CONTACT</p><h1>Let's make something<br><em>remarkable.</em></h1><p>Have a new product, a growing platform, or a problem that will not leave you alone? We would love to hear about it.</p></section><section class="contact-layout"><div class="contact-details"><p class="eyebrow">START HERE</p><a href="mailto:hello@primestack.dev">hello@primestack.dev</a><p>We typically reply within two business days.</p><div class="contact-detail"><span>01</span><div><b>Bamenda</b><p>cameroon<br>Bamenda, cameroon</p></div></div><div class="contact-detail"><span>02</span><div><b>Remote-first</b><p>Working across time zones,<br>always close to the work.</p></div></div></div><form class="contact-form" id="contact-form"><label>Name<input name="name" required placeholder="Your name"></label><label>Work email<input name="email" type="email" required placeholder="you@company.com"></label><label>What can we help with?<textarea name="message" rows="5" required placeholder="Tell us a little about your project..."></textarea></label><button class="button" type="submit">Send inquiry <span>↗</span></button><p class="form-message" role="status"></p></form></section></main>`;
}

export { cta, projectCards };
