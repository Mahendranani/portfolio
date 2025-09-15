import React, { useState } from 'react';
import { projectData } from '../assets/assets';

const Work = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index, imageSrc) => {
    console.log(`Image failed to load: ${imageSrc} for project ${index}`);
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index, imageSrc) => {
    console.log(`Image loaded successfully: ${imageSrc} for project ${index}`);
  };

  return (
    <div id="work" className="py-20">
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
              className="group rounded-lg overflow-hidden shadow-lg border border-gray-200 cursor-pointer hover:-translate-y-1 transition duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {imageErrors[index] ? (
                  <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h4 className="font-semibold text-gray-700">Project Image</h4>
                      <p className="text-xs text-red-500 mt-1">Failed to load: {project.image}</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(index, project.image)}
                    onLoad={() => handleImageLoad(index, project.image)}
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-900 text-sm mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((language, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
