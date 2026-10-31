import { Award, BadgeCheck, BookOpen, Bot, Briefcase, Brain, ClipboardCheck, Code2, Compass, FileText, FolderGit2, Globe, GraduationCap, Hammer, Layers, Lock, Megaphone, MessageSquare, Monitor, PenTool, Search, Server, Smartphone, Terminal, TrendingUp, UserCheck, UserCog, Users, Wrench } from 'lucide-react';
export const HERO_TRUST_POINTS = [
    '100% Virtual Internship',
    'Beginner Friendly',
    'Mentor Support',
    'AI-Assisted Learning',
    'Practical Project',
    'Professional Certificate',
];

export const WHO_CAN_JOIN = [
    { icon: BookOpen, label: 'Beginners', desc: 'You can start even if you are just learning the basics.' },
    { icon: GraduationCap, label: 'College Students', desc: 'Add practical experience alongside your studies.' },
    { icon: UserCheck, label: 'Freshers', desc: 'Build project experience before you start applying.' },
    { icon: Wrench, label: 'Skill Builders', desc: 'For students looking to build practical skills.' },
    { icon: FolderGit2, label: 'Project Seekers', desc: 'For students who want real project experience.' },
    { icon: Bot, label: 'AI-Assisted Developers', desc: 'For students who want to learn AI-assisted development.' },
    { icon: Layers, label: 'Portfolio Builders', desc: 'For students who want to build a portfolio.' },
];

export const JOURNEY_STEPS = [
    { icon: BookOpen, title: 'Learn the Fundamentals', desc: 'Start with the core concepts of your chosen domain.' },
    { icon: Wrench, title: 'Understand the Tools', desc: 'Get comfortable with the tools used in real work.' },
    { icon: Bot, title: 'Learn AI-Assisted Workflows', desc: 'See how AI tools can support learning and building.' },
    { icon: Users, title: 'Get Mentor Guidance', desc: 'Get help and feedback whenever you need it.' },
    { icon: Hammer, title: 'Build a Practical Project', desc: 'Apply what you learn to a project in your domain.' },
    { icon: ClipboardCheck, title: 'Submit & Review', desc: 'Submit your project and get it reviewed by a mentor.' },
    { icon: Award, title: 'Get Certified', desc: 'Receive your internship certificate on completion.' },
    { icon: Briefcase, title: 'Career / Hiring Consideration', desc: 'Top performers may be considered for suitable opportunities.' },
];

export const AI_TOPICS = [
    'AI-assisted coding',
    'Understanding AI-generated code',
    'Prompting for development tasks',
    'Debugging with AI',
    'Improving AI-generated solutions',
    'AI-assisted research',
    'AI-assisted design / content workflows, where relevant',
    'Responsible AI usage',
    'Combining fundamentals with AI tools',
];

export const AI_PRINCIPLES = ['Fundamentals', 'Practical Skills', 'AI Tools', 'Human Understanding'];

// The 8 program domains. `name` is the EXACT text used in the website form
// dropdown AND must be the exact option text in the Google Form domain question.
// Confirm the skills/tools below match your actual syllabus.
export const DOMAINS = [
    {
        icon: Globe,
        name: 'Web Development',
        desc: 'Learn to design, build and ship responsive websites and web applications.',
        skills: ['HTML & CSS', 'JavaScript', 'React', 'Git & GitHub'],
        project: 'Build a practical website or web application.',
    },
    {
        icon: Smartphone,
        name: 'App Development',
        desc: 'Learn how mobile apps are planned, built and connected to data.',
        skills: ['JavaScript / Dart basics', 'React Native or Flutter', 'API integration', 'App UI components'],
        project: 'Build a practical mobile application.',
    },
    {
        icon: PenTool,
        name: 'UI/UX Design',
        desc: 'Learn to research, design and prototype interfaces people can actually use.',
        skills: ['Figma', 'Wireframing', 'Prototyping', 'UX fundamentals'],
        project: 'Create a UI/UX case study and prototype.',
    },
    {
        icon: Megaphone,
        name: 'Digital Marketing',
        desc: 'Learn how digital campaigns are planned, run and measured.',
        skills: ['Social media marketing', 'Content planning', 'SEO basics', 'Analytics basics'],
        project: 'Work on a practical marketing workflow or project.',
    },
    {
        icon: Terminal,
        name: 'Python Development',
        desc: 'Learn Python from the fundamentals and use it to build practical programs.',
        skills: ['Python fundamentals', 'Data structures', 'Libraries & APIs', 'Git & GitHub'],
        project: 'Build a Python-based practical project.',
    },
    {
        icon: Brain,
        name: 'AI/ML',
        desc: 'Learn the basics of AI and machine learning through hands-on work.',
        skills: ['Python for AI/ML', 'Data handling', 'ML fundamentals', 'Model building basics'],
        project: 'Build a practical AI/ML project.',
    },
    {
        icon: Monitor,
        name: 'Frontend Development',
        desc: 'Learn to build the user-facing side of modern web applications.',
        skills: ['HTML & CSS', 'JavaScript', 'React', 'Responsive UI'],
        project: 'Build a responsive frontend project.',
    },
    {
        icon: Server,
        name: 'Backend Development',
        desc: 'Learn how the server side of applications is designed and built.',
        skills: ['REST APIs', 'Databases', 'Server-side logic', 'Authentication basics'],
        project: 'Build a backend / API-based practical project.',
    },
        {
        icon: UserCog,
        name: 'Human Resources',
        desc: 'Learn how organizations hire, onboard and support their people.',
        skills: ['Recruitment basics', 'Resume screening', 'Onboarding & engagement', 'HR documentation'],
        project: 'Create a practical HR workflow, such as a recruitment or onboarding plan.',
    },
    {
        icon: Lock,
        name: 'Cyber Security',
        desc: 'Learn how systems and networks are protected from common threats.',
        skills: ['Networking basics', 'Linux basics', 'Security fundamentals', 'Vulnerability assessment basics'],
        project: 'Complete a practical security assessment or awareness project.',
    },
];

export const DOMAIN_NAMES = DOMAINS.map((d) => d.name);

export const MENTOR_ITEMS = [
    { icon: MessageSquare, title: 'Doubt Clarification', desc: 'Get your questions answered as you learn.' },
    { icon: BookOpen, title: 'Learning Guidance', desc: 'Help deciding what to learn and in what order.' },
    { icon: Compass, title: 'Project Guidance', desc: 'Direction on how to plan and build your project.' },
    { icon: Code2, title: 'Technical / Design Feedback', desc: 'Feedback on your code, designs or campaigns.' },
    { icon: Search, title: 'Project Review', desc: 'Your submitted project is reviewed by a mentor.' },
    { icon: BadgeCheck, title: 'Completion Guidance', desc: 'Support to meet the internship requirements.' },
];

export const BENEFIT_CARDS = [
    { icon: BookOpen, title: 'Learn from Basics', desc: 'A beginner-friendly path from fundamentals to practical work.' },
    { icon: Bot, title: 'AI-Assisted Learning', desc: 'Use AI tools while still understanding the fundamentals.' },
    { icon: Users, title: 'Mentor Guidance', desc: 'Domain-specific support throughout your internship.' },
    { icon: FolderGit2, title: 'Practical Project', desc: 'Build a project in your chosen domain.' },
    { icon: Layers, title: 'Portfolio Building', desc: 'Finish with portfolio-ready work you can show.' },
    { icon: Award, title: 'Professional Certificate', desc: 'An internship certificate from Rachry Technologies.' },
    { icon: TrendingUp, title: 'Career Support', desc: 'Resume guidance and interview preparation.' },
    { icon: Briefcase, title: 'Hiring Consideration', desc: 'Top performers may be considered for suitable opportunities.' },
];

export const CHECKLIST = [
    'Virtual Internship Experience',
    'Beginner-Friendly Learning Path',
    'Domain-Specific Mentor Support',
    'AI-Assisted Learning',
    'Practical Project',
    'Project Guidance & Review',
    'Project Documentation',
    'Portfolio-Ready Work',
    'Internship Certificate',
    'Certificate Verification',
    'Resume Guidance',
    'Interview Preparation',
    'Performance Evaluation',
    'Career Support',
    'Hiring Consideration for Top Performers',
];

export const CAREER_FACTORS = [
    'Performance',
    'Project quality',
    'Skills',
    'Interview performance',
    'Current company hiring requirements',
];

export const CAREER_ITEMS = [
    { icon: FileText, label: 'Resume guidance' },
    { icon: MessageSquare, label: 'Interview preparation' },
    { icon: TrendingUp, label: 'Performance evaluation' },
    { icon: Search, label: 'Project review' },
    { icon: Compass, label: 'Career guidance' },
    { icon: Briefcase, label: 'Hiring consideration' },
];

export const PROCESS_STEPS = [
    { icon: ClipboardCheck, title: 'Apply', desc: 'Fill in the application form on this page.' },
    { icon: Compass, title: 'Select Your Domain', desc: 'Choose the track you want to work in.' },
    { icon: BookOpen, title: 'Start Learning', desc: 'Begin with the fundamentals of your domain.' },
    { icon: Users, title: 'Get Mentor Support', desc: 'Get guidance and feedback along the way.' },
    { icon: Hammer, title: 'Build Your Project', desc: 'Apply your learning to a practical project.' },
    { icon: Search, title: 'Submit & Review', desc: 'Submit your project for mentor review.' },
    { icon: Award, title: 'Receive Certificate', desc: 'Get your internship certificate on completion.' },
    { icon: Briefcase, title: 'Career / Hiring Consideration', desc: 'Top performers may be considered for suitable opportunities.' },
];

export const PRICING_INCLUDES = [
    '100% Virtual Internship',
    'Domain-specific mentor support',
    'Practical project with review',
    'Internship certificate',
    'Resume guidance & interview preparation',
    'Hiring consideration for top performers',
];

export const FAQS = [
    { q: 'Is the internship completely online?', a: 'Yes. The Rachry Technologies Virtual Internship Program is 100% virtual, so you can take part from anywhere.' },
    { q: 'Who can apply?', a: 'Beginners, college students, freshers and anyone who wants to build practical skills, gain project experience and create a portfolio.' },
    { q: 'Can beginners apply?', a: 'Yes. The program is beginner friendly and starts from the fundamentals before moving on to practical project work.' },
    { q: 'What domains are available?', a: 'Web Development, App Development, UI/UX Design, Digital Marketing, Python Development, AI/ML, Frontend Development, Backend Development, Human Resources and Cyber Security.'},
    { q: 'Is mentor support provided?', a: 'Yes. Mentor support is available across every offered domain, including doubt clarification, project guidance, feedback and project review.' },
    { q: 'Will I work on a practical project?', a: 'Yes. You will work on a practical project related to your selected domain, such as a website or web app, a mobile app, a UI/UX case study and prototype, or a marketing project.' },
    { q: 'How is AI used during the internship?', a: 'AI tools are taught as assistants for coding, debugging, research and workflows. The focus is on fundamentals and understanding, not on generating everything automatically.' },
    { q: 'Will I receive a certificate?', a: 'Yes. Students who successfully complete the internship requirements and the assigned project receive an internship certificate from Rachry Technologies.' },
    { q: 'Is the certificate verifiable?', a: 'Certificates include a certificate ID and a verification option, so the certificate can be checked.' },
    { q: 'What happens after I apply?', a: 'Our team reviews your application and contacts you with the next steps. No payment is taken on this page.' },
    { q: 'Is placement guaranteed?', a: 'No. Placement or a job is not guaranteed. Career and hiring opportunities are performance-based and subject to company requirements.' },
    { q: 'Can top-performing interns be considered for opportunities at Rachry Technologies?', a: 'Top-performing interns may be considered for suitable opportunities at Rachry Technologies based on company requirements and candidate performance.' },
];

/* ==========================================================================
   FORM LOGIC — validation + Google Form submission
   ========================================================================== */
