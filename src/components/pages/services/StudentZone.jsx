// // import {
// //     FileCode2, GraduationCap, Globe, Smartphone,
// //     Brain, Database, BarChart3,
// //     FileText, Presentation, Bug,
// //     Users, Code, Award, FolderGit2,
// //     Briefcase, Home, ArrowRight,
// //     Megaphone, PenTool,
// // } from 'lucide-react';
// // import { useSEO } from '../../../hooks/useSEO';
// // import CTA from '../../CTA';
// // import video from '../../../assets/videos/Students.mp4';

// // const PROJECT_ITEMS = [
// //     { icon: FileCode2, title: 'Mini Projects', desc: 'Quick, focused builds to strengthen your fundamentals.' },
// //     { icon: GraduationCap, title: 'Final Year Projects', desc: 'End-to-end projects built to impress your review panel.' },
// //     { icon: Globe, title: 'Web Development Projects', desc: 'Full-stack apps using modern, in-demand frameworks.' },
// //     { icon: Smartphone, title: 'Mobile App Projects', desc: 'Android, iOS, and cross-platform app builds.' },
// //     { icon: Brain, title: 'AI/ML Projects', desc: 'Practical machine learning projects with real datasets.' },
// //     { icon: Database, title: 'Data Science Projects', desc: 'From data cleaning to models that actually predict.' },
// //     { icon: BarChart3, title: 'Data Analytics Projects', desc: 'Dashboards and insights that tell a clear story.' },
// // ];

// // const DOC_ITEMS = [
// //     { icon: FileText, title: 'Project Documentation', desc: 'Reports, synopsis, and records formatted to university standard.' },
// //     { icon: Presentation, title: 'Project Presentation / PPT', desc: 'Slides that explain your project with confidence.' },
// // ];

// // const SUPPORT_ITEMS = [
// //     { icon: Bug, title: 'Project Support & Debugging', desc: 'Stuck on an error? We help you fix it and understand why.' },
// //     { icon: Users, title: 'Internship & Training', desc: 'Structured programs that build real, job-ready skills.' },
// //     { icon: Code, title: 'Programming & Technology Training', desc: 'Hands-on training in the languages and tools that matter.' },
// // ];

// // const INTERNSHIP_HIGHLIGHTS = [
// //     { icon: FolderGit2, title: 'Real-time Project Work', desc: 'Work on live projects, not just tutorials — build things that actually ship.' },
// //     { icon: Award, title: 'Internship Certificate', desc: 'Get an official certificate on completion, recognised for your resume.' },
// //     { icon: Users, title: 'Mentor Guidance', desc: 'A dedicated mentor reviews your work and helps you grow.' },
// // ];

// // const HIRING_ROLES = [
// //     { icon: Smartphone, title: 'App Development' },
// //     { icon: Globe, title: 'iOS Development' },
// //     { icon: Code, title: 'Web Development' },
// //     { icon: Megaphone, title: 'Digital Marketing' },
// //     { icon: PenTool, title: 'UI/UX Design' },
// // ];

// // function ServiceRow({ icon: Icon, title, desc }) {
// //     return (
// //         <div className="flex items-start gap-3">
// //             <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
// //                 <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
// //             </div>
// //             <div>
// //                 <p className="text-sm sm:text-base font-medium text-[#E2E8F0]">{title}</p>
// //                 <p className="mt-0.5 text-xs sm:text-sm leading-6 text-[#64748B]">{desc}</p>
// //             </div>
// //         </div>
// //     );
// // }

// // function StudentZone() {
// //     useSEO({
// //         title: 'Software & Digital Marketing Internships in Salem | Rachry Technologies',
// //         description: 'Student internships and project training in software development, web development, and digital marketing, based in Salem, Tamil Nadu.',
// //         path: '/services/student-zone',
// //     });

// //     return (
// //         <>
// //             {/* Hero with Video Background */}
// //             <section className="relative flex min-h-[70vh] sm:min-h-[80vh] items-center justify-center overflow-hidden bg-[#050B18] pt-20 sm:pt-24 lg:pt-28">
// //                 <video
// //                     autoPlay
// //                     muted
// //                     loop
// //                     playsInline
// //                     className="absolute inset-0 h-full w-full object-cover"
// //                 >
// //                     <source src={video} type="video/mp4" />
// //                 </video>

// //                 <div className="absolute inset-0 bg-[#050B18]/75" />

// //                 <div className="pointer-events-none absolute inset-0">
// //                     <div className="absolute left-1/4 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/20 blur-[80px] sm:blur-[120px]" />
// //                     <div className="absolute right-1/4 top-1/3 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/20 blur-[80px] sm:blur-[120px]" />
// //                 </div>

// //                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 text-center lg:px-12">
// //                     <div className="mx-auto max-w-3xl">
// //                         <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
// //                             Learn
// //                         </p>

// //                         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
// //                             Student{' '}
// //                             <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
// //                                 Zone
// //                             </span>
// //                         </h1>

// //                         <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
// //                             We help students build real projects, gain practical skills, and
// //                             get ready for the industry with hands-on guidance.
// //                         </p>
// //                         <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-[#64748B]">
// //                             From your first mini project to a full internship with a certificate,
// //                             we're with you at every step.
// //                         </p>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Services We Provide — Bento Grid */}
// //             <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-40">
// //                 <div className="pointer-events-none absolute inset-0">
// //                     <div className="absolute left-[-10%] top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
// //                     <div className="absolute right-[-10%] bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
// //                 </div>

// //                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
// //                     <div className="text-center">
// //                         <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
// //                             Services We Provide
// //                         </p>
// //                         <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
// //                             From idea to a finished project, we guide you every step.
// //                         </h2>
// //                     </div>

// //                     <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
// //                         {/* Projects — 7 services, the widest category, gets the big card */}
// //                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-8 lg:p-10">
// //                             <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Projects</h3>
// //                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
// //                                 Real builds across the stacks companies actually hire for.
// //                             </p>
// //                             <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
// //                                 {PROJECT_ITEMS.map((item) => (
// //                                     <ServiceRow key={item.title} {...item} />
// //                                 ))}
// //                             </div>
// //                         </div>

// //                         {/* Internship & Training — featured call-out card */}
// //                         <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 text-left sm:p-8 md:col-span-2 lg:col-span-4 lg:p-10">
// //                             <div>
// //                                 <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
// //                                     <Award className="h-5 w-5 text-white" strokeWidth={1.75} />
// //                                 </div>
// //                                 <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
// //                                     Internship & Training
// //                                 </h3>
// //                                 <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">
// //                                     Work on real-time projects and get a certificate on
// //                                     completion — training that actually counts on your resume.
// //                                 </p>
// //                             </div>
// //                             <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
// //                                 Apply for internship
// //                                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
// //                             </a>
// //                         </div>

// //                         {/* Documentation & Presentation */}
// //                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
// //                             <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Documentation & Presentation</h3>
// //                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
// //                                 Present your work the way it deserves to be seen.
// //                             </p>
// //                             <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
// //                                 {DOC_ITEMS.map((item) => (
// //                                     <ServiceRow key={item.title} {...item} />
// //                                 ))}
// //                             </div>
// //                         </div>

// //                         {/* Support & Training */}
// //                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
// //                             <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Support & Training</h3>
// //                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
// //                                 Help when you're stuck, and skills for what comes next.
// //                             </p>
// //                             <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
// //                                 {SUPPORT_ITEMS.map((item) => (
// //                                     <ServiceRow key={item.title} {...item} />
// //                                 ))}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Internship Program */}
// //             <section className="relative overflow-hidden bg-[#080F22] py-16 sm:py-24 lg:py-32">
// //                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
// //                     <div className="text-center">
// //                         <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
// //                             Internship Program
// //                         </p>
// //                         <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
// //                             Learn by building — not just watching.
// //                         </h2>
// //                         <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#94A3B8]">
// //                             Every intern gets hands-on time on real, live projects alongside
// //                             our team, with a certificate waiting for you at the finish line.
// //                         </p>
// //                     </div>

// //                     <div className="mx-auto mt-10 sm:mt-16 grid max-w-5xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-3">
// //                         {INTERNSHIP_HIGHLIGHTS.map((item) => {
// //                             const Icon = item.icon;
// //                             return (
// //                                 <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
// //                                     <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
// //                                         <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
// //                                     </div>
// //                                     <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">{item.title}</h3>
// //                                     <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
// //                                 </div>
// //                             );
// //                         })}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* We're Hiring */}
// //             <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-32">
// //                 <div className="pointer-events-none absolute inset-0">
// //                     <div className="absolute left-1/3 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
// //                     <div className="absolute right-1/4 bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
// //                 </div>

// //                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
// //                     <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:p-14">
// //                         <div className="flex flex-col items-start justify-between gap-6 sm:gap-10 lg:flex-row lg:items-center">
// //                             <div className="max-w-xl text-left">
// //                                 <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5">
// //                                     <Briefcase className="h-3.5 w-3.5 text-[#38BDF8]" strokeWidth={2} />
// //                                     <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
// //                                         We're Hiring
// //                                     </span>
// //                                 </div>
// //                                 <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
// //                                     Join our team — 100% Work From Home.
// //                                 </h2>
// //                                 <p className="mt-4 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#94A3B8]">
// //                                     <Home className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2} />
// //                                     Fully remote roles, with internship openings across every team.
// //                                 </p>
// //                             </div>

// //                             <a href="#contact" className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white">
// //                                 Apply Now
// //                                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
// //                             </a>
// //                         </div>

// //                         <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:pt-8 sm:grid-cols-3 lg:grid-cols-5">
// //                             {HIRING_ROLES.map((role) => {
// //                                 const Icon = role.icon;
// //                                 return (
// //                                     <div key={role.title} className="flex items-center gap-2.5">
// //                                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
// //                                             <Icon className="h-3.5 w-3.5 text-white" strokeWidth={1.75} />
// //                                         </div>
// //                                         <p className="text-xs sm:text-sm font-medium text-[#CBD5E1]">{role.title}</p>
// //                                     </div>
// //                                 );
// //                             })}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             <CTA />
// //         </>
// //     );
// // }

// // export default StudentZone;



// import { useState } from 'react';
// import {
//     FileCode2, GraduationCap, Globe, Smartphone,
//     Brain, Database, BarChart3,
//     FileText, Presentation, Bug,
//     Users, Code, Award, FolderGit2,
//     Briefcase, Home, ArrowRight,
//     PenTool, CheckCircle2, Upload,
// } from 'lucide-react';
// import { useSEO } from '../../../hooks/useSEO';
// import CTA from '../../CTA';
// import video from '../../../assets/videos/Students.mp4';

// const PROJECT_ITEMS = [
//     { icon: FileCode2, title: 'Mini Projects', desc: 'Quick, focused builds to strengthen your fundamentals.' },
//     { icon: GraduationCap, title: 'Final Year Projects', desc: 'End-to-end projects built to impress your review panel.' },
//     { icon: Globe, title: 'Web Development Projects', desc: 'Full-stack apps using modern, in-demand frameworks.' },
//     { icon: Smartphone, title: 'Mobile App Projects', desc: 'Android, iOS, and cross-platform app builds.' },
//     { icon: Brain, title: 'AI/ML Projects', desc: 'Practical machine learning projects with real datasets.' },
//     { icon: Database, title: 'Data Science Projects', desc: 'From data cleaning to models that actually predict.' },
//     { icon: BarChart3, title: 'Data Analytics Projects', desc: 'Dashboards and insights that tell a clear story.' },
// ];

// const DOC_ITEMS = [
//     { icon: FileText, title: 'Project Documentation', desc: 'Reports, synopsis, and records formatted to university standard.' },
//     { icon: Presentation, title: 'Project Presentation / PPT', desc: 'Slides that explain your project with confidence.' },
// ];

// const SUPPORT_ITEMS = [
//     { icon: Bug, title: 'Project Support & Debugging', desc: 'Stuck on an error? We help you fix it and understand why.' },
//     { icon: Users, title: 'Internship & Training', desc: 'Structured programs that build real, job-ready skills.' },
//     { icon: Code, title: 'Programming & Technology Training', desc: 'Hands-on training in the languages and tools that matter.' },
// ];

// const INTERNSHIP_HIGHLIGHTS = [
//     { icon: FolderGit2, title: 'Real-time Project Work', desc: 'Work on live projects, not just tutorials — build things that actually ship.' },
//     { icon: Award, title: 'Internship Certificate', desc: 'Get an official certificate on completion, recognised for your resume.' },
//     { icon: Users, title: 'Mentor Guidance', desc: 'A dedicated mentor reviews your work and helps you grow.' },
// ];

// const HIRING_ROLES = [
//     { icon: Globe, title: 'Web Developer', experience: '0-1 Yrs Experience' },
//     { icon: Smartphone, title: 'App Developer', experience: '0-1 Yrs Experience' },
//     { icon: PenTool, title: 'UI/UX Designer', experience: '0-1 Yrs Experience' },
// ];

// const RESUME_ROLE_OPTIONS = ['Web Developer', 'App Developer', 'UI/UX Designer'];
// const RESUME_EXPERIENCE_OPTIONS = ['0 - 1 Years', '1 - 2 Years', '2+ Years'];
// const HIRING_EMAIL = 'team@rachrytechnolgies.in';

// function ServiceRow({ icon: Icon, title, desc }) {
//     return (
//         <div className="flex items-start gap-3">
//             <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                 <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
//             </div>
//             <div>
//                 <p className="text-sm sm:text-base font-medium text-[#E2E8F0]">{title}</p>
//                 <p className="mt-0.5 text-xs sm:text-sm leading-6 text-[#64748B]">{desc}</p>
//             </div>
//         </div>
//     );
// }

// function ResumeForm() {
//     const [submitted, setSubmitted] = useState(false);
//     const [fileName, setFileName] = useState('');

//     const handleFileChange = (e) => {
//         if (e.target.files?.[0]) {
//             setFileName(e.target.files[0].name);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitted(true);
//     };

//     if (submitted) {
//         return (
//             <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/5 p-8 text-center sm:p-12">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38BDF8]/15">
//                     <CheckCircle2 className="h-6 w-6 text-[#38BDF8]" strokeWidth={1.75} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">Thanks for uploading!</h3>
//                 <p className="max-w-sm text-sm leading-6 text-[#94A3B8]">
//                     We've received your details and will get back to you soon. You
//                     can also email your resume directly to{' '}
//                     <a href={`mailto:${HIRING_EMAIL}`} className="font-medium text-[#38BDF8]">
//                         {HIRING_EMAIL}
//                     </a>
//                     .
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <form onSubmit={handleSubmit} className="grid gap-4 sm:gap-5">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
//                 <div>
//                     <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
//                         Full Name
//                     </label>
//                     <input
//                         type="text"
//                         required
//                         placeholder="Your name"
//                         className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-[#475569] focus:border-[#38BDF8]/50 focus:outline-none"
//                     />
//                 </div>
//                 <div>
//                     <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         required
//                         placeholder="you@example.com"
//                         className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-[#475569] focus:border-[#38BDF8]/50 focus:outline-none"
//                     />
//                 </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
//                 <div>
//                     <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
//                         Role Applying For
//                     </label>
//                     <select
//                         required
//                         defaultValue=""
//                         className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-[#38BDF8]/50 focus:outline-none"
//                     >
//                         <option value="" disabled className="bg-[#0B1224]">
//                             Select a role
//                         </option>
//                         {RESUME_ROLE_OPTIONS.map((role) => (
//                             <option key={role} value={role} className="bg-[#0B1224]">
//                                 {role}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
//                         Experience
//                     </label>
//                     <select
//                         required
//                         defaultValue=""
//                         className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-[#38BDF8]/50 focus:outline-none"
//                     >
//                         <option value="" disabled className="bg-[#0B1224]">
//                             Select experience
//                         </option>
//                         {RESUME_EXPERIENCE_OPTIONS.map((exp) => (
//                             <option key={exp} value={exp} className="bg-[#0B1224]">
//                                 {exp}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             <div>
//                 <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
//                     Resume
//                 </label>
//                 <label
//                     htmlFor="resume-upload"
//                     className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3.5 text-sm text-[#64748B] transition hover:border-[#38BDF8]/40"
//                 >
//                     <span className="flex min-w-0 items-center gap-2 truncate">
//                         <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
//                         <span className="truncate">
//                             {fileName || 'Upload your resume (PDF, DOC)'}
//                         </span>
//                     </span>
//                     <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[#94A3B8]">
//                         Browse
//                     </span>
//                 </label>
//                 <input
//                     id="resume-upload"
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleFileChange}
//                     className="hidden"
//                     required
//                 />
//             </div>

//             <button
//                 type="submit"
//                 className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
//             >
//                 Submit Application
//                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
//             </button>

//             <p className="text-xs text-[#64748B]">
//                 Prefer email? Send your resume directly to{' '}
//                 <a href={`mailto:${HIRING_EMAIL}`} className="font-medium text-[#38BDF8]">
//                     {HIRING_EMAIL}
//                 </a>
//             </p>
//         </form>
//     );
// }

// function StudentZone() {
//     useSEO({
//         title: 'Software & Digital Marketing Internships in Salem | Rachry Technologies',
//         description: 'Student internships and project training in software development, web development, and digital marketing, based in Salem, Tamil Nadu.',
//         path: '/services/student-zone',
//     });

//     return (
//         <>
//             {/* Hero with Video Background */}
//             <section className="relative flex min-h-[70vh] sm:min-h-[80vh] items-center justify-center overflow-hidden bg-[#050B18] pt-20 sm:pt-24 lg:pt-28">
//                 <video
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="absolute inset-0 h-full w-full object-cover"
//                 >
//                     <source src={video} type="video/mp4" />
//                 </video>

//                 <div className="absolute inset-0 bg-[#050B18]/75" />

//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-1/4 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/20 blur-[80px] sm:blur-[120px]" />
//                     <div className="absolute right-1/4 top-1/3 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/20 blur-[80px] sm:blur-[120px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 text-center lg:px-12">
//                     <div className="mx-auto max-w-3xl">
//                         <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
//                             Learn
//                         </p>

//                         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
//                             Student{' '}
//                             <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//                                 Zone
//                             </span>
//                         </h1>

//                         <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
//                             We help students build real projects, gain practical skills, and
//                             get ready for the industry with hands-on guidance.
//                         </p>
//                         <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-[#64748B]">
//                             From your first mini project to a full internship with a certificate,
//                             we're with you at every step.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Services We Provide — Bento Grid */}
//             <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-40">
//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-[-10%] top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
//                     <div className="absolute right-[-10%] bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
//                             Services We Provide
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
//                             From idea to a finished project, we guide you every step.
//                         </h2>
//                     </div>

//                     <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
//                         {/* Projects — 7 services, the widest category, gets the big card */}
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-8 lg:p-10">
//                             <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Projects</h3>
//                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
//                                 Real builds across the stacks companies actually hire for.
//                             </p>
//                             <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
//                                 {PROJECT_ITEMS.map((item) => (
//                                     <ServiceRow key={item.title} {...item} />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Internship & Training — featured call-out card */}
//                         <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 text-left sm:p-8 md:col-span-2 lg:col-span-4 lg:p-10">
//                             <div>
//                                 <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                     <Award className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                 </div>
//                                 <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
//                                     Internship & Training
//                                 </h3>
//                                 <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">
//                                     Work on real-time projects and get a certificate on
//                                     completion — training that actually counts on your resume.
//                                 </p>
//                             </div>
//                             <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
//                                 Apply for internship
//                                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
//                             </a>
//                         </div>

//                         {/* Documentation & Presentation */}
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
//                             <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Documentation & Presentation</h3>
//                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
//                                 Present your work the way it deserves to be seen.
//                             </p>
//                             <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
//                                 {DOC_ITEMS.map((item) => (
//                                     <ServiceRow key={item.title} {...item} />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Support & Training */}
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
//                             <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Support & Training</h3>
//                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
//                                 Help when you're stuck, and skills for what comes next.
//                             </p>
//                             <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
//                                 {SUPPORT_ITEMS.map((item) => (
//                                     <ServiceRow key={item.title} {...item} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Internship Program */}
//             <section className="relative overflow-hidden bg-[#080F22] py-16 sm:py-24 lg:py-32">
//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
//                             Internship Program
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
//                             Learn by building — not just watching.
//                         </h2>
//                         <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#94A3B8]">
//                             Every intern gets hands-on time on real, live projects alongside
//                             our team, with a certificate waiting for you at the finish line.
//                         </p>
//                     </div>

//                     <div className="mx-auto mt-10 sm:mt-16 grid max-w-5xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-3">
//                         {INTERNSHIP_HIGHLIGHTS.map((item) => {
//                             const Icon = item.icon;
//                             return (
//                                 <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
//                                     <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                         <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                     </div>
//                                     <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">{item.title}</h3>
//                                     <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* We're Hiring */}
//             <section id="apply-form" className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-32">
//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-1/3 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
//                     <div className="absolute right-1/4 bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
//                     <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:p-14">
//                         <div className="flex flex-col items-start justify-between gap-6 sm:gap-10 lg:flex-row lg:items-center">
//                             <div className="max-w-xl text-left">
//                                 <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5">
//                                     <Briefcase className="h-3.5 w-3.5 text-[#38BDF8]" strokeWidth={2} />
//                                     <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
//                                         We're Hiring
//                                     </span>
//                                 </div>
//                                 <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
//                                     Join our team — 100% Work From Home.
//                                 </h2>
//                                 <p className="mt-4 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#94A3B8]">
//                                     <Home className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2} />
//                                     Fully remote roles, open to freshers with 0-1 years of experience.
//                                 </p>
//                             </div>

//                             <a href="#apply-form-fields" className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white">
//                                 Apply Now
//                                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
//                             </a>
//                         </div>

//                         <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 sm:pt-8">
//                             {HIRING_ROLES.map((role) => {
//                                 const Icon = role.icon;
//                                 return (
//                                     <div key={role.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
//                                         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                             <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
//                                         </div>
//                                         <div>
//                                             <p className="text-sm font-medium text-[#E2E8F0]">{role.title}</p>
//                                             <p className="mt-0.5 text-xs text-[#64748B]">{role.experience}</p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>

//                         {/* Resume Upload Form */}
//                         <div id="apply-form-fields" className="mt-10 border-t border-white/10 pt-8 sm:mt-12 sm:pt-10">
//                             <h3 className="text-base sm:text-lg font-semibold text-white">
//                                 Apply with your resume
//                             </h3>
//                             <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
//                                 Fill in your details and upload your resume — we'll take it from there.
//                             </p>
//                             <div className="mt-6 sm:mt-8">
//                                 <ResumeForm />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <CTA />
//         </>
//     );
// }

// export default StudentZone; 



import { useState } from 'react';
import {
    FileCode2, GraduationCap, Globe, Smartphone,
    Brain, Database, BarChart3,
    FileText, Presentation, Bug,
    Users, Code, Award, FolderGit2,
    Briefcase, Home, ArrowRight,
    PenTool, CheckCircle2, Upload,
} from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import CTA from '../../CTA';
import video from '../../../assets/videos/Students.mp4';

const PROJECT_ITEMS = [
    { icon: FileCode2, title: 'Mini Projects', desc: 'Quick, focused builds to strengthen your fundamentals.' },
    { icon: GraduationCap, title: 'Final Year Projects', desc: 'End-to-end projects built to impress your review panel.' },
    { icon: Globe, title: 'Web Development Projects', desc: 'Full-stack apps using modern, in-demand frameworks.' },
    { icon: Smartphone, title: 'Mobile App Projects', desc: 'Android, iOS, and cross-platform app builds.' },
    { icon: Brain, title: 'AI/ML Projects', desc: 'Practical machine learning projects with real datasets.' },
    { icon: Database, title: 'Data Science Projects', desc: 'From data cleaning to models that actually predict.' },
    { icon: BarChart3, title: 'Data Analytics Projects', desc: 'Dashboards and insights that tell a clear story.' },
];

const DOC_ITEMS = [
    { icon: FileText, title: 'Project Documentation', desc: 'Reports, synopsis, and records formatted to university standard.' },
    { icon: Presentation, title: 'Project Presentation / PPT', desc: 'Slides that explain your project with confidence.' },
];

const SUPPORT_ITEMS = [
    { icon: Bug, title: 'Project Support & Debugging', desc: 'Stuck on an error? We help you fix it and understand why.' },
    { icon: Users, title: 'Internship & Training', desc: 'Structured programs that build real, job-ready skills.' },
    { icon: Code, title: 'Programming & Technology Training', desc: 'Hands-on training in the languages and tools that matter.' },
];

const INTERNSHIP_HIGHLIGHTS = [
    { icon: FolderGit2, title: 'Real-time Project Work', desc: 'Work on live projects, not just tutorials — build things that actually ship.' },
    { icon: Award, title: 'Internship Certificate', desc: 'Get an official certificate on completion, recognised for your resume.' },
    { icon: Users, title: 'Mentor Guidance', desc: 'A dedicated mentor reviews your work and helps you grow.' },
];

const HIRING_ROLES = [
    {
        icon: Globe,
        title: 'Web Developer',
        experience: '0-1 Yrs Experience',
        criteria: [
            'Strong fundamentals in HTML5, CSS3 & JavaScript (ES6+)',
            'Hands-on experience with React.js',
            'Ability to build responsive and reusable UI components',
            'Understanding of REST APIs, JSON & asynchronous JavaScript',
            'Proficiency with Git & GitHub workflows',
            'Basic understanding of performance optimization and SEO',
            'Ability to debug issues and solve problems independently',
        ],
    },

    {
        icon: Smartphone,
        title: 'App Developer',
        experience: '0-1 Yrs Experience',
        criteria: [
            'Strong fundamentals in JavaScript / Dart',
            'Hands-on experience with React Native or Flutter',
            'Ability to build responsive and reusable mobile components',
            'Understanding of REST APIs, JSON & API integration',
            'Knowledge of state management concepts',
            'Proficiency with Git & GitHub workflows',
            'Ability to debug mobile applications and resolve issues independently',
        ],
    },

    {
        icon: PenTool,
        title: 'UI/UX Designer',
        experience: '3+ Yrs Experience',
        criteria: [
            'Strong understanding of UI/UX design principles',
            'Advanced working knowledge of Figma',
            'Ability to create wireframes, prototypes & user flows',
            'Strong understanding of responsive and accessible design',
            'Understanding of typography, color theory & visual hierarchy',
            'Ability to design consistent and reusable UI systems',
            'Strong portfolio demonstrating real-world design projects',
        ],
    },
];

const RESUME_ROLE_OPTIONS = ['Web Developer', 'App Developer', 'UI/UX Designer'];
const RESUME_EXPERIENCE_OPTIONS = ['0 - 1 Years', '1 - 2 Years', '2+ Years'];
const HIRING_EMAIL = 'team@rachrytechnolgies.in';

function ServiceRow({ icon: Icon, title, desc }) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
            </div>
            <div>
                <p className="text-sm sm:text-base font-medium text-[#E2E8F0]">{title}</p>
                <p className="mt-0.5 text-xs sm:text-sm leading-6 text-[#64748B]">{desc}</p>
            </div>
        </div>
    );
}

function ResumeForm() {
    const [submitted, setSubmitted] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files?.[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/5 p-8 text-center sm:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38BDF8]/15">
                    <CheckCircle2 className="h-6 w-6 text-[#38BDF8]" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-white">Thanks for uploading!</h3>
                <p className="max-w-sm text-sm leading-6 text-[#94A3B8]">
                    We've received your details and will get back to you soon. You
                    can also email your resume directly to{' '}
                    <a href={`mailto:${HIRING_EMAIL}`} className="font-medium text-[#38BDF8]">
                        {HIRING_EMAIL}
                    </a>
                    .
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 sm:gap-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-[#475569] focus:border-[#38BDF8]/50 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-[#475569] focus:border-[#38BDF8]/50 focus:outline-none"
                    />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
                        Role Applying For
                    </label>
                    <select
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-[#38BDF8]/50 focus:outline-none"
                    >
                        <option value="" disabled className="bg-[#0B1224]">
                            Select a role
                        </option>
                        {RESUME_ROLE_OPTIONS.map((role) => (
                            <option key={role} value={role} className="bg-[#0B1224]">
                                {role}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
                        Experience
                    </label>
                    <select
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-[#38BDF8]/50 focus:outline-none"
                    >
                        <option value="" disabled className="bg-[#0B1224]">
                            Select experience
                        </option>
                        {RESUME_EXPERIENCE_OPTIONS.map((exp) => (
                            <option key={exp} value={exp} className="bg-[#0B1224]">
                                {exp}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
                    Resume
                </label>
                <label
                    htmlFor="resume-upload"
                    className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3.5 text-sm text-[#64748B] transition hover:border-[#38BDF8]/40"
                >
                    <span className="flex min-w-0 items-center gap-2 truncate">
                        <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                        <span className="truncate">
                            {fileName || 'Upload your resume (PDF, DOC)'}
                        </span>
                    </span>
                    <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[#94A3B8]">
                        Browse
                    </span>
                </label>
                <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                />
            </div>

            <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
            >
                Submit Application
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>

            <p className="text-xs text-[#64748B]">
                Prefer email? Send your resume directly to{' '}
                <a href={`mailto:${HIRING_EMAIL}`} className="font-medium text-[#38BDF8]">
                    {HIRING_EMAIL}
                </a>
            </p>
        </form>
    );
}

function StudentZone() {
    useSEO({
        title: 'Software & Digital Marketing Internships in Salem | Rachry Technologies',
        description: 'Student internships and project training in software development, web development, and digital marketing, based in Salem, Tamil Nadu.',
        path: '/services/student-zone',
    });

    return (
        <>
            {/* Hero with Video Background */}
            <section className="relative flex min-h-[70vh] sm:min-h-[80vh] items-center justify-center overflow-hidden bg-[#050B18] pt-20 sm:pt-24 lg:pt-28">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[#050B18]/75" />

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/20 blur-[80px] sm:blur-[120px]" />
                    <div className="absolute right-1/4 top-1/3 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/20 blur-[80px] sm:blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 text-center lg:px-12">
                    <div className="mx-auto max-w-3xl">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Learn
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
                            Student{' '}
                            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                Zone & Career
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
                            We help students build real projects, gain practical skills, and
                            get ready for the industry with hands-on guidance.
                        </p>
                        <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-[#64748B]">
                            From your first mini project to a full internship with a certificate,
                            we're with you at every step.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services We Provide — Bento Grid */}
            <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-10%] top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
                    <div className="absolute right-[-10%] bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Services We Provide
                        </p>
                        <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
                            From idea to a finished project, we guide you every step.
                        </h2>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
                        {/* Projects — 7 services, the widest category, gets the big card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-8 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Projects</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Real builds across the stacks companies actually hire for.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {PROJECT_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Internship & Training — featured call-out card */}
                        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 text-left sm:p-8 md:col-span-2 lg:col-span-4 lg:p-10">
                            <div>
                                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                    <Award className="h-5 w-5 text-white" strokeWidth={1.75} />
                                </div>
                                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
                                    Internship & Training
                                </h3>
                                <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">
                                    Work on real-time projects and get a certificate on
                                    completion — training that actually counts on your resume.
                                </p>
                            </div>
                            <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
                                Apply for internship
                                <ArrowRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                        </div>

                        {/* Documentation & Presentation */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Documentation & Presentation</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Present your work the way it deserves to be seen.
                            </p>
                            <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
                                {DOC_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Support & Training */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Support & Training</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Help when you're stuck, and skills for what comes next.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {SUPPORT_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship Program */}
            <section className="relative overflow-hidden bg-[#080F22] py-16 sm:py-24 lg:py-32">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Internship Program
                        </p>
                        <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                            Learn by building — not just watching.
                        </h2>
                        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#94A3B8]">
                            Every intern gets hands-on time on real, live projects alongside
                            our team, with a certificate waiting for you at the finish line.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-5xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-3">
                        {INTERNSHIP_HIGHLIGHTS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* We're Hiring */}
            <section id="apply-form" className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-32">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/3 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
                    <div className="absolute right-1/4 bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:p-14">
                        <div className="flex flex-col items-start justify-between gap-6 sm:gap-10 lg:flex-row lg:items-center">
                            <div className="max-w-xl text-left">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5">
                                    <Briefcase className="h-3.5 w-3.5 text-[#38BDF8]" strokeWidth={2} />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                                        We're Hiring
                                    </span>
                                </div>
                                <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                                    Join our team — 100% Work From Home.
                                </h2>
                                <p className="mt-4 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#94A3B8]">
                                    <Home className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2} />
                                    Fully remote roles, open to freshers with 0-1 years of experience.
                                </p>
                            </div>

                            <a href="#apply-form-fields" className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white">
                                Apply Now
                                <ArrowRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                        </div>

                        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:gap-5 sm:pt-8 lg:grid-cols-3">
                            {HIRING_ROLES.map((role) => {
                                const Icon = role.icon;
                                return (
                                    <div key={role.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                                <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-white">{role.title}</p>
                                                <p className="mt-0.5 text-xs text-[#38BDF8]">{role.experience}</p>
                                            </div>
                                        </div>

                                        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                                            {role.criteria.map((point) => (
                                                <li key={point} className="flex items-start gap-2 text-xs leading-5 text-[#94A3B8] sm:text-sm">
                                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#38BDF8]" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Resume Upload Form */}
                        <div id="apply-form-fields" className="mt-10 border-t border-white/10 pt-8 sm:mt-12 sm:pt-10">
                            <h3 className="text-base sm:text-lg font-semibold text-white">
                                Apply with your resume
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Fill in your details and upload your resume — we'll take it from there.
                            </p>
                            <div className="mt-6 sm:mt-8">
                                <ResumeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}

export default StudentZone;