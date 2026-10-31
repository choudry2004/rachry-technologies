// Business facts supplied by the owner; keep development status explicit.
export const company = {
 name: 'Rachry Technologies',
 tagline: 'Build. Grow. Learn.',
 positioning: 'We build our own digital products, deliver software and creative services, and create opportunities to learn.',
 introduction: 'Rachry Technologies combines product development with client services and student learning. Alongside software, design and digital marketing work, we are developing interactive web products and an aptitude learning platform.',
 email: 'team@rachrytechnolgies.in',
 phone: '+91 95665 69612',
 phoneHref: 'tel:+919566569612',
 emailHref: 'mailto:team@rachrytechnolgies.in',
 whatsappHref: 'https://wa.me/919566569612',
 location: 'Salem, Tamil Nadu, India',
};

// These are descriptive categories, not final product names. Do not add launch
// links, features, release dates or availability claims until the owner confirms.
export const productDirections = [
 { id: 'interactive-web', category: 'Interactive web products', status: 'In development', description: 'We are developing our own interactive web experiences. Product names and launch details are not yet final.' },
 { id: 'aptitude-learning', category: 'Aptitude learning platform', status: 'In development', description: 'We are developing a platform for aptitude learning. Its name, features and launch details will be shared when confirmed.' },
];

export const navigation = {
 company: [{ label: 'About Us', href: '/about' }, { label: 'Our Strategy', href: '/our-strategy' }],
 services: [
  { label: 'Software & IT Solutions', href: '/services/software-it' },
  { label: 'Creative & Design Solutions', href: '/services/creative-design' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Student Opportunities & Career', href: '/services/student-zone' },
 ],
};
