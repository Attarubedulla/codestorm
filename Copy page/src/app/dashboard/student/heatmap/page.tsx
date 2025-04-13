'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowUpRight } from 'lucide-react';

export default function SkillHeatmapPage() {
  // Sample skill data - in a real app, this would come from an API
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 4 },
        { name: "Python", level: 3 },
        { name: "Java", level: 2 },
        { name: "C++", level: 1 },
        { name: "TypeScript", level: 3 }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 4 },
        { name: "React", level: 3 },
        { name: "Node.js", level: 3 },
        { name: "Next.js", level: 2 },
        { name: "Database", level: 2 }
      ]
    },
    {
      name: "Data Structures",
      skills: [
        { name: "Arrays", level: 4 },
        { name: "Linked Lists", level: 3 },
        { name: "Trees", level: 2 },
        { name: "Graphs", level: 1 },
        { name: "Sorting", level: 3 }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 1: return "bg-green-100";
      case 2: return "bg-green-300";
      case 3: return "bg-green-500";
      case 4: return "bg-green-700";
      default: return "bg-gray-100";
    }
  };

  const getLevelText = (level) => {
    switch(level) {
      case 1: return "Beginner";
      case 2: return "Intermediate";
      case 3: return "Advanced";
      case 4: return "Expert";
      default: return "Not Started";
    }
  };

  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Skill Heatmap
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-6"
      >
        Visualize your technical strengths and areas for improvement.
      </motion.p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Flame className="h-5 w-5 text-indigo-500 mr-2" />
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              <button className="flex items-center text-xs text-indigo-600 font-medium hover:text-indigo-800">
                View Details <ArrowUpRight className="h-3 w-3 ml-1" />
              </button>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  className="flex items-center"
                >
                  <div className="w-36 text-sm font-medium text-gray-700">{skill.name}</div>
                  <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden flex items-center">
                    <div 
                      className={`h-full ${getLevelColor(skill.level)} flex items-center justify-center text-xs font-medium text-white`}
                      style={{ width: `${skill.level * 25}%` }}
                    >
                      {getLevelText(skill.level)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 