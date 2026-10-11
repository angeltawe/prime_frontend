export const siteModel = {
  nav: [
    { label: 'Services', path: '#/services' },
    { label: 'Portfolio', path: '#/portfolio' },
    { label: 'Stack', path: '#/stack' },
    { label: 'Team', path: '#/team' },
    { label: 'Careers', path: '#/careers' }
  ],
  metrics: [
    { value: '10M+', label: 'Users scaled' },
    { value: '20k+', label: 'Deployments' },
    { value: '99.99%', label: 'Uptime delivered' }
  ],
  services: [
    { slug: 'product-engineering', icon: '&lt;/&gt;', title: 'Software', short: 'Product engineering', pageTitle: 'Products people want to use.', pageIntro: 'We turn ambitious product ideas into fast, accessible, dependable software that is ready for real users and real growth.', description: 'From first commit to millions of users, we build reliable products that stay fast as they grow.', capabilities: [{ title: 'Product strategy', description: 'Clarify the opportunity, users, and outcomes before investing in a build.' }, { title: 'Web and application development', description: 'Build polished experiences with maintainable architecture and a focus on performance.' }, { title: 'Quality engineering', description: 'Protect every release with practical testing, automation, and observability.' }] },
    { slug: 'cloud-architecture', icon: '☁', title: 'Cloud', short: 'Cloud architecture', pageTitle: 'Infrastructure ready for change.', pageIntro: 'We design secure, observable cloud foundations that make your systems easier to operate, scale, and improve.', description: 'Modernize infrastructure with secure, observable cloud foundations that are ready for change.', capabilities: [{ title: 'Cloud foundations', description: 'Create reliable environments, networking, identity, and deployment foundations.' }, { title: 'Modernization', description: 'Move legacy systems forward without disrupting the teams and customers that depend on them.' }, { title: 'Reliability and cost', description: 'Improve resilience, monitoring, and cloud economics with clear operational ownership.' }] },
    { slug: 'data-intelligence', icon: '▤', title: 'Data', short: 'Data & intelligence', pageTitle: 'Make better decisions with your data.', pageIntro: 'We turn complex data into trusted systems, useful insight, and a foundation for responsible AI.', description: 'Turn complex data into clear decisions with durable platforms, analytics, and AI-ready systems.', capabilities: [{ title: 'Data platforms', description: 'Build dependable pipelines and models that make information available when it matters.' }, { title: 'Analytics and reporting', description: 'Give teams clear answers through practical dashboards, metrics, and reporting workflows.' }, { title: 'AI readiness', description: 'Prepare your data, processes, and governance for useful machine learning applications.' }] },
    { slug: 'experience-design', icon: '◫', title: 'UI/UX', short: 'Experience design', pageTitle: 'Make complex feel simple.', pageIntro: 'We create thoughtful, accessible experiences that help people understand your product and move with confidence.', description: 'Make sophisticated technology feel simple through thoughtful research, systems, and interfaces.', capabilities: [{ title: 'Research and discovery', description: 'Understand people, context, and friction before shaping the experience.' }, { title: 'Product and interface design', description: 'Turn insight into clear journeys, useful interactions, and coherent visual systems.' }, { title: 'Design systems', description: 'Create reusable patterns that keep teams aligned as the product grows.' }] }
  ],
  projects: [
    { name: 'Northstar Health', type: 'Product engineering', tag: 'Healthcare', result: '3.4× faster patient onboarding', color: 'rose' },
    { name: 'Aster Finance', type: 'Cloud architecture', tag: 'Fintech', result: '40% lower infrastructure cost', color: 'plum' },
    { name: 'Morrow Data', type: 'Data & intelligence', tag: 'SaaS', result: '12M events processed daily', color: 'sand' }
  ],
  stack: ['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Terraform', 'OpenAI'],
  team: [
    { name: 'Che Neba Metuge', role: 'Full-stack engineer', initials: 'CN', focus: 'Product engineering', bio: 'Builds dependable web products from the first prototype through production.' },
    { name: 'A. Angel Tawe', role: 'Quality assurance & architecture officer', initials: 'AT', focus: 'Quality and systems', bio: 'Connects thoughtful quality practices with architecture that teams can confidently grow.' },
    { name: 'Neba Okafor', role: 'Design director', initials: 'NO', focus: 'Experience design', bio: 'Turns complex workflows into clear, useful experiences people enjoy using.' }
  ]
};
