// ── Lavanya Rayapureddi — Portfolio Data ────────────────────────────────────

export const personalInfo = {
  name: 'Lavanya Rayapureddi',
  title: 'Frontend Developer',
  email: 'lavanyarlvns@gmail.com',
  phone: '+91 9876543210',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/lavanyarayapureddi',
  linkedin: 'https://www.linkedin.com/in/rayapureddi-lavanya',
  resumeUrl: '/resume/Lavanya_Rayapureddi_exp.pdf',
  bio: `Frontend Developer with hands-on experience in React.js, responsive UI development, 
REST API integration, and real-time project development. Passionate about building scalable 
web applications and AI-driven solutions with clean, modern user experiences. 
I love turning complex ideas into elegant interfaces that users enjoy.`,
}

export const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '3+', label: 'Happy Clients' },
]

export const skills = [
  // Frontend
  { name: 'React.js', category: 'Frontend', icon: 'react' },
  { name: 'JavaScript', category: 'Languages', icon: 'js' },
  { name: 'HTML', category: 'Frontend', icon: 'html' },
  { name: 'CSS', category: 'Frontend', icon: 'css' },
  // Backend & DB
  { name: 'Node.js', category: 'Backend', icon: 'node' },
  { name: 'Python', category: 'Languages', icon: 'python' },
  { name: 'Java', category: 'Languages', icon: 'java' },
  { name: 'SQL', category: 'Backend', icon: 'mysql' },
  // Tools
  { name: 'GitHub', category: 'Tools', icon: 'github' },
  { name: 'VS Code', category: 'Tools', icon: 'vscode' },
  { name: 'ChatGPT', category: 'Tools', icon: 'openai' },
  { name: 'Antigravity', category: 'Tools', icon: 'antigravity', badge: 'AI Dev Assistant' },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'CHARANI INFOTECH PVT LTD',
    period: 'Feb 2026 – May 2026',
    location: 'Telangana, India',
    type: 'Internship',
    points: [
      'Developed scalable and responsive frontend applications using React.js, JavaScript, HTML5, and CSS3 with reusable component architecture.',
      'Built Student Dashboard, Trainer Dashboard, Admin Dashboard, Course Management, and Authentication modules.',
      'Integrated REST APIs and improved application performance using GitHub collaboration workflows.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'SKILL DUNIA',
    period: '2025',
    location: 'Remote',
    type: 'Internship',
    points: [
      'Developed machine learning models using Python with supervised learning and preprocessing workflows.',
      'Improved model accuracy through feature optimization and predictive analytics techniques.',
      'Gained practical experience in AI/ML workflows, evaluation, and performance analysis.',
    ],
  },
]

export const projects = [
  {
    id: 'ai-chatbot',
    title: 'AI Project Management Assistant Chatbot Using PDFs',
    description:
      'An AI-powered project assistant that analyzes uploaded PDF documents using NLP and AI technologies to provide intelligent responses, project insights, and document understanding.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Python'],
    github: 'https://github.com/lavanyarayapureddi/Project-Management-Assistant-AI-Chatbot-Using-PDF-s',
    live: 'https://your-chatbot-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900',
    color: '#6c63ff',
    type: 'featured',
    row: 1,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A modern responsive portfolio website showcasing my skills, projects, education, experience, resume, and contact information with an elegant UI and smooth user experience.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Framer Motion', 'Vite'],
    github: 'https://github.com/lavanyarayapureddi/portfolio',
    live: 'https://your-portfolio.vercel.app',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=900',
    color: '#f72585',
    type: 'featured',
    row: 1,
  },
  {
    id: 'student-hub',
    title: 'Student Hub Platform',
    description:
      'A skill development platform that helps students learn industry-relevant technologies through structured learning paths, hands-on training, and real-time project experience.',
    tech: ['React.js', 'Node.js', 'Firebase'],
    github: 'https://github.com/lavanyarayapureddi/student_hub',
    live: null,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900',
    color: '#4cc9f0',
    type: 'details',
    row: 2,
  },
]

export const certifications = [
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Mar 2024',
    credentialUrl: '#',
    color: '#6c63ff',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford)',
    date: 'Jan 2024',
    credentialUrl: '#',
    color: '#f72585',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Nov 2023',
    credentialUrl: '#',
    color: '#4cc9f0',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Sep 2023',
    credentialUrl: '#',
    color: '#7209b7',
  },
  {
    title: 'Python for Everybody',
    issuer: 'Coursera (Michigan)',
    date: 'Jul 2023',
    credentialUrl: '#',
    color: '#4361ee',
  },
]

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'XYZ University',
    period: '2020 – 2024',
    cgpa: '8.4 / 10',
  },
]
