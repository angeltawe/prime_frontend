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
    { icon: '&lt;/&gt;', title: 'Software', short: 'Product engineering', description: 'From first commit to millions of users, we build reliable products that stay fast as they grow.' },
    { icon: '☁', title: 'Cloud', short: 'Cloud architecture', description: 'Modernize infrastructure with secure, observable cloud foundations that are ready for change.' },
    { icon: '▤', title: 'Data', short: 'Data & intelligence', description: 'Turn complex data into clear decisions with durable platforms, analytics, and AI-ready systems.' },
    { icon: '◫', title: 'UI/UX', short: 'Experience design', description: 'Make sophisticated technology feel simple through thoughtful research, systems, and interfaces.' }
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
