import React, { useState } from 'react';
import { projectData } from '../assets/assets';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiStreamlit } from 'react-icons/si';

const Work = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div id="work" className="py-20 pt-32">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-700">
            Featured <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Cutting-edge web applications built with modern technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-1 transition duration-300 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                {imageErrors[index] ? (
                  <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h4 className="font-semibold text-gray-700">Project Preview</h4>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(index)}
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-900 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((language, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {(project.github || project.streamlit) && (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">View Project:</span>
                    {project.streamlit ? (
                      <a
                        href={project.streamlit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <SiStreamlit className="text-lg" />
                        Streamlit
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                      >
                        <FaGithub className="text-lg" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
