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
    FaArrowRight,
    FaBrain
  } from 'react-icons/fa';

  import profileImg from './logo copy.png';
  
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
    image: './projects/milk-purity-system.jpg',
    tech: ['Python', 'TensorFlow', 'Machine Learning', 'Research Paper']
  },
  {
    title: 'Blinkit Data Analysis Dashboard',
    description: 'Comprehensive data analytics project analyzing delivery patterns and business metrics',
    image: './projects/blinkit-dashboard.png',
    tech: ['Power BI', 'Python', 'Data Analytics', 'Visualization'],
    github: 'https://github.com/Mahendranani/Data-Analysis'
  },
  {
    title: 'Weather API Analysis System',
    description: 'Python-based weather data analysis with API integration and forecasting capabilities',
    image: './projects/weather-api.png',
    tech: ['Python', 'API Integration', 'Data Analysis', 'JSON'],
    github: 'https://github.com/Mahendranani/Weather-Analysis-'
  },
  {
    title: 'Road Safety Alert System',
    description: 'IoT-based hardware device that provides real-time alerts for potholes, speedbreakers, sharp curves, and road hazards to enhance driver safety',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTBiOTgxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Um9hZCBTYWZldHkgSW9UIFN5c3RlbTwvdGV4dD48L3N2Zz4=',
    tech: ['Arduino/Raspberry Pi', 'IoT Sensors', 'Python', 'Hardware Design', 'Alert Systems']
  },
  {
    title: 'Shark Tank Business Analytics Dashboard',
    description: 'Comprehensive analysis of Shark Tank investments, success rates, and entrepreneur demographics with predictive modeling for deal outcomes',
    image: './projects/shark-tank-dashboard.png',
    tech: ['Python', 'Pandas', 'Data Analytics', 'Business Intelligence', 'Predictive Modeling'],
    streamlit: 'https://sharktankindia-mahendra.streamlit.app/'
  },
  {
    title: 'Flask Student Event Management System',
    description: 'Full-stack web application with MySQL database, user authentication, and event management features',
    image: './projects/flask-event-system.png',
    tech: ['Flask', 'MySQL', 'SQLAlchemy', 'HTML/CSS', 'JavaScript']
  },
  {
    title: 'Human Resources Management System',
    description: 'Complete HRMS solution with employee management, payroll processing, and performance tracking',
    image: './projects/hrms-system.png',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'Employee Analytics'],
    
  },
  {
    title: 'Hospitality Domain Analytics',
    description: 'Hotel and restaurant industry data analysis focusing on customer satisfaction and revenue optimization',
    image: './projects/hospitality-analytics.png',
    tech: ['Power BI', 'Data Analytics', 'Business Intelligence', 'Customer Analytics'],
    github: 'https://github.com/Mahendranani/Grands-Revenue-Recovery-Analytics'
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
    email: 'mahendranani515@gmail.com',
    phone: '+91-9353393168',
    linkedin: 'www.linkedin.com/in/mahendra-kumar-2b363426a',
    github: 'https://github.com/Mahendranani',
    location: 'Karnataka, India'
  };
  
