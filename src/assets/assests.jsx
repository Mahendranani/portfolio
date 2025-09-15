import { 
    FaCode, 
    FaDesktop, 
    FaMicrochip, 
    FaMobile, 
    FaReact, 
    FaDatabase,
    FaTools,
    FaChartBar,
    FaPython,
    FaProjectDiagram,
    FaArrowRight
  } from 'react-icons/fa';

  import profileImg from '../assets/logocopy.png';
  
  // Export assets (images)
  export const assets = {
    profileImg,
  }
  
  // Navigation Menu Items
  export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact'];
  
  // Skills Data
  export const skillsData = [
    {
      icon: FaChartBar,
      title: 'Data Analytics',
      technologies: ['Power BI', 'MySQL', 'Python', 'Pandas', 'NumPy']
    },
    {
      icon: FaCode,
      title: 'Web Development',
      technologies: ['Flask', 'HTML', 'CSS', 'JavaScript', 'WordPress','React','Express.js']
    },
    {
      icon: FaDatabase,
      title: 'Database',
      technologies: ['MySQL', 'Database Design', 'ETL Processes', 'SQL','Supabase']
    },
    {
      icon: FaBrain,
      title: 'AI & ML',
      technologies: ['TensorFlow', 'Machine Learning', 'Python', 'AI Models','NLP','Computer Vision','Deep Learning']
    },
    {
      icon: FaTools,
      title: 'Tools & Platforms',
      technologies: ['VS Code', 'Canva', 'Git', 'LaTeX', 'Linux']
    }
  ];
  
  // Project  Data
export const projectData = [
  {
    title: 'AI-Powered Milk Purity Monitoring System',
    description: 'Machine learning system using Python and TensorFlow for milk quality assessment with advanced testing procedures',
    image: '/api/placeholder/300/200',
    tech: ['Python', 'TensorFlow', 'Machine Learning', 'Research Paper']
  },
  {
    title: 'Blinkit Data Analysis Dashboard',
    description: 'Comprehensive data analytics project analyzing delivery patterns and business metrics',
    image: '/api/placeholder/300/200',
    tech: ['Power BI', 'Python', 'Data Analytics', 'Visualization']
  },
  {
    title: 'Weather API Analysis System',
    description: 'Python-based weather data analysis with API integration and forecasting capabilities',
    image: '/api/placeholder/300/200',
    tech: ['Python', 'API Integration', 'Data Analysis', 'JSON']
  },
  {
    title: 'Road Safety Alert System',
    description: 'IoT-based hardware device that provides real-time alerts for potholes, speedbreakers, sharp curves, and road hazards to enhance driver safety',
    image: '/api/placeholder/300/200',
    tech: ['Arduino/Raspberry Pi', 'IoT Sensors', 'Python', 'Hardware Design', 'Alert Systems']
  },
  {
    title: 'Shark Tank Business Analytics Dashboard',
    description: 'Comprehensive analysis of Shark Tank investments, success rates, and entrepreneur demographics with predictive modeling for deal outcomes',
    image: '/api/placeholder/300/200',
    tech: ['Python', 'Pandas', 'Data Analytics', 'Business Intelligence', 'Predictive Modeling']
  },  
  {
    title: 'Flask Student Event Management System',
    description: 'Full-stack web application with MySQL database, user authentication, and event management features',
    image: '/api/placeholder/300/200',
    tech: ['Flask', 'MySQL', 'SQLAlchemy', 'HTML/CSS', 'JavaScript']
  },
  
  {
    title: 'HR Analytics Dashboard',
    description: 'Employee performance and HR metrics visualization system with interactive dashboards',
    image: '/api/placeholder/300/200',
    tech: ['Power BI', 'Data Analysis', 'MySQL', 'ETL']
  },
  
  {
    title: 'Tata Retail Online Analysis',
    description: 'E-commerce data analysis project focusing on customer behavior and sales patterns',
    image: '/api/placeholder/300/200',
    tech: ['Power BI', 'Data Analytics', 'Business Intelligence', 'SQL']
  },
  {
    title: 'Human Resources Management System',
    description: 'Complete HRMS solution with employee management, payroll processing, and performance tracking',
    image: '/api/placeholder/300/200',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'Employee Analytics']
  },
  {
    title: 'Hospitality Domain Analytics',
    description: 'Hotel and restaurant industry data analysis focusing on customer satisfaction and revenue optimization',
    image: '/api/placeholder/300/200',
    tech: ['Power BI', 'Data Analytics', 'Business Intelligence', 'Customer Analytics']
  },
  
];

  
  // Profile Data
  export const profileData = {
    name: 'Mahendra Kumar P',
    designation: 'Data Analytics & AI/ML Enthusiast',
    description: 'Final year Computer Science student specializing in Data Analytics, Web Development, and AI/ML solutions. Passionate about transforming data into actionable insights.',
    education: 'B.Tech CSE (AI/ML) - Sahyadri College of Engineering',
    location: 'Mangalore, Karnataka',
    background: 'From a family of farmers, completed schooling at Government Telugu Medium School',
  };
  
  // Contact Data
  export const contactData = {
    email: 'mahendranani515@gmail.com', // Replace with your actual email
    phone: '+91-9353393168', // Replace with your actual phone
    linkedin: 'www.linkedin.com/in/mahendra-kumar-2b363426a', // Replace with your actual LinkedIn
    github: 'https://github.com/Mahendranani', // Replace with your actual GitHub
    location: 'Karnataka, India'
  };
  