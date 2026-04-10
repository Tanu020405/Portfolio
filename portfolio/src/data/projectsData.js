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
    title: 'RideFlow',
    shortDescription: 'A real-time ride booking platform with live driver tracking and instant ride updates.',
fullDescription: 'A scalable ride-booking application that enables users to request rides, track drivers in real time using WebSockets, and receive instant ride status updates. The system includes features like live location sharing, ride lifecycle notifications (accepted, started, completed), secure backend APIs, and optimized communication between riders and drivers. Designed with a focus on performance, concurrency, and seamless user experience.',
    technologies: ['Spring Boot', 'React.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Real-time driver tracking using WebSockets for instant location updates',
  'Ride booking system with intelligent driver-rider matching',
  'Live ride status notifications (accepted, started, completed)',
  'Scalable backend architecture with REST APIs and event-driven communication',
  'Secure authentication and role-based access control (RBAC)',
  'Efficient state synchronization between driver and rider applications',
  'Optimized performance with reduced latency compared to traditional polling'
    ],
    liveLink: 'https://example.com/speed-typing',
    githubLink: 'https://github.com/yourusername/speed-typing-game',
    image: 'https://via.placeholder.com/400x250?text=Speed+Typing'
  }
];
