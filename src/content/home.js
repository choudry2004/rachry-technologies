import { company, productDirections } from './company.js';
export const heroCopy = {
 introduction: company.positioning,
 heading: 'Build . Grow . Learn',
 primaryLabel: 'Explore What We Do',
 secondaryLabel: 'Discuss Your Project',
};
export const aboutCopy = {
 introduction: company.introduction,
 focusAreas: [
  { title: 'Our Own Products', description: `${productDirections[0].category} and an aptitude learning platform are in development. Names and launch details are not yet final.` },
  { title: 'Services for Businesses', description: 'Websites, applications, creative design and digital marketing, shaped around the needs of your business.' },
  { title: 'Learning Opportunities', description: 'Training, student projects and internships that connect learning with practical work.' },
 ],
};
export const serviceCopy = {
 introduction: 'Alongside our own product development, we help businesses build software, strengthen their digital presence and connect students with practical learning.',
 build: { subtitle: 'Software & IT Solutions', description: 'Websites, mobile applications and custom software built around your business workflows and users.', linkLabel: 'Explore software services' },
 grow: { subtitle: 'Design & Digital Marketing', description: 'Creative design, content and digital marketing to help your business communicate clearly and reach its audience.', linkLabel: 'Explore marketing services' },
 learn: { subtitle: 'Student Projects & Internships', description: 'Practical training, project guidance and internship opportunities for students developing their skills.', linkLabel: 'Explore student opportunities' },
};
