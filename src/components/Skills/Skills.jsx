// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-4 md:px-12 lg:px-32 font-sans bg-skills-gradient clip-path-custom min-h-screen flex flex-col items-center justify-center"
  >
    {/* Section Title */}
  <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#18122B] px-8 py-8 rounded-2xl border border-purple-500 shadow-lg flex flex-col items-center justify-center min-h-[340px]"
        >
          <h3
            className={
              `text-2xl sm:text-3xl font-semibold mb-6 text-center tracking-wide ` +
              (category.title.toLowerCase().includes('language') ? 'text-blue-400' :
               category.title.toLowerCase().includes('frontend') ? 'text-pink-400' :
               category.title.toLowerCase().includes('backend') ? 'text-green-400' :
               category.title.toLowerCase().includes('tool') ? 'text-yellow-400' :
               'text-purple-400')
            }
          >
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-[#231942] border-2 border-purple-500 rounded-xl py-4 px-2 shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 mb-2"
                  />
                  <span className="text-sm font-medium text-gray-200 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
  </div>
      ))}
  </div>
  </section>
);

export default Skills;
