import React from 'react';
import { skillsData } from '../assets/assets';

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex items-center pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="text-teal-600">Skills</span>
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Mastering the tools that power modern web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 hover:border-r-4 hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full border border-gray-300 bg-gray-50 mb-4 flex items-center justify-center">
                <skill.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              
              <div className="flex flex-wrap gap-1 justify-center">
                {skill.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
