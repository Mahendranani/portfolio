import React from 'react';
import { profileData, assets } from '../assets/assets';
import { FaGraduationCap, FaCode, FaChartBar, FaBrain, FaDownload, FaTrophy, FaHeart, FaMapMarkerAlt, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const infoCards = [
    {
      icon: FaLaptopCode,
      title: 'Languages & Tools',
      content: [
        'Python, SQL, JavaScript',
        'Power BI, Flask, React',
        'MySQL, TensorFlow',
        'Git, VS Code, Linux'
      ]
    },
    {
      icon: FaGraduationCap,
      title: 'Education',
      content: [
        'B.Tech in Computer Science',
        'Specialization: AI & ML',
        'Sahyadri College of Engineering',
        'Mangalore, Karnataka'
      ]
    },
    {
      icon: FaTrophy,
      title: 'Projects & Experience',
      content: [
        
        '5+ Data Analytics Projects',
        '2Web Development Projects ',
        '1 AI/ML Project'
    
      ]
    }
  ];

  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ABOUT <span className="text-teal-600">ME</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Hello! I'm <span className="text-teal-600">Mahendra Kumar</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a  Computer Science student with a specialization in 
                  <strong className="text-gray-800"> Artificial Intelligence and Machine Learning</strong>, 
                  passionate about creating innovative digital solutions that bridge technology and real-world problems.
                </p>
                
                <p>
                  Coming from a <strong className="text-gray-800">family of farmers</strong> and completing 
                  my initial education at Government Telugu Medium School, I've learned the value of hard work, 
                  perseverance, and the transformative power of education.
                </p>
                
                <p>
                  My journey spans across <strong className="text-gray-800">Data Analytics</strong>, 
                  <strong className="text-gray-800"> Web Development</strong>, and 
                  <strong className="text-gray-800"> Business Intelligence</strong>, with hands-on experience 
                  in building applications that solve real business problems.
                </p>
                
                <p>
                  I've had the privilege of participating in <strong className="text-gray-800">Engineering Day events</strong> 
                  and <strong className="text-gray-800">IIT fests in Indore and Jodhpur</strong>, 
                  which expanded my technical horizons and networking skills.
                </p>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <FaHeart className="text-red-500 mr-3" />
                Beyond Coding
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3">
                  <div className="text-2xl mb-2">♟️</div>
                  <div className="text-sm font-semibold text-gray-700">Chess</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl mb-2">🍳</div>
                  <div className="text-sm font-semibold text-gray-700">Cooking</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl mb-2">🎒</div>
                  <div className="text-sm font-semibold text-gray-700">Traveling</div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a 
                href="/resumee.pdf" 
                download="Mahendra_Kumar_Resume.pdf"
                className="flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg cursor-pointer"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image and Cards */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-80 h-96 mx-auto relative">
                <img 
                  src={assets.profileImg} 
                  alt="Mahendra Kumar" 
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              {infoCards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <card.icon className="text-xl text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">{card.title}</h4>
                      <div className="space-y-1">
                        {card.content.map((item, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="mb-6 text-teal-100 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and explore opportunities 
              in data analytics, AI/ML, and web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Let's Connect
              </a>
              <a
                href="#work"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
