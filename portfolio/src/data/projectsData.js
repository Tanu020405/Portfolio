import tenantManagerImg from '../assets/Screenshot 2026-03-05 155944.png';

export const projectsData = [
  {
    id: 1,
    title: 'Tenant Manager',
    shortDescription: 'A comprehensive property management solution for landlords and tenants.',
    fullDescription: 'A full-featured tenant management system designed to simplify property management. Allows landlords to track tenants, handle maintenance requests, and manage rental payments efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication'],
    features: [
      'User authentication and role-based access control',
      'Tenant profile management with contact details',
      'Maintenance request tracking and assignment',
      'Rent payment tracking and history',
      'Automated notifications and reminders',
      'Dashboard with key metrics'
    ],
    liveLink: 'https://tenant-manager-beta.vercel.app/',
    githubLink: 'https://github.com/Tanu020405/Tenant_manager',
    image: tenantManagerImg
  },
  {
    id: 2,
    title: 'Speed Typing Game',
    shortDescription: 'An interactive typing speed test game with real-time scoring.',
    fullDescription: 'A fun and engaging typing speed test game that helps users improve their typing skills. Features multiple difficulty levels, real-time WPM tracking, and competitive leaderboards.',
    technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    features: [
      'Real-time WPM and accuracy calculation',
      'Multiple difficulty levels',
      'Timer and countdown functionality',
      'Score leaderboard with local storage',
      'Keyboard sound effects (optional)',
      'Mobile responsive design',
      'Theme toggle (light/dark mode)'
    ],
    liveLink: 'https://example.com/speed-typing',
    githubLink: 'https://github.com/yourusername/speed-typing-game',
    image: 'https://via.placeholder.com/400x250?text=Speed+Typing'
  }
];
