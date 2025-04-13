'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Braces, CheckCircle, ArrowRight } from 'lucide-react';

export default function DSATrackPage() {
  const dsaModules = [
    { id: 1, title: "Arrays & Strings", complete: true, progress: 100 },
    { id: 2, title: "Linked Lists", complete: true, progress: 100 },
    { id: 3, title: "Stacks & Queues", complete: false, progress: 65 },
    { id: 4, title: "Trees & Graphs", complete: false, progress: 20 },
    { id: 5, title: "Sorting & Searching", complete: false, progress: 0 },
    { id: 6, title: "Dynamic Programming", complete: false, progress: 0 },
  ];

  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Data Structures & Algorithms
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-6"
      >
        Master fundamental concepts in data structures and algorithms with interactive practice problems.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Braces className="h-5 w-5 text-indigo-500 mr-2" />
            <h2 className="text-xl font-semibold">Learning Track</h2>
          </div>
          <span className="text-sm font-medium text-gray-500">2/6 Modules Completed</span>
        </div>
        
        <div className="space-y-4">
          {dsaModules.map((module) => (
            <motion.div 
              key={module.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + module.id * 0.1 }}
              className="border border-gray-100 rounded-lg p-4 hover:border-indigo-100 hover:bg-indigo-50/20 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {module.complete ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  ) : (
                    <div className={`h-5 w-5 rounded-full mr-3 ${module.progress > 0 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                  )}
                  <span className="font-medium">{module.title}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-100 rounded-full mr-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${module.complete ? 'bg-green-500' : 'bg-blue-500'}`}
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 