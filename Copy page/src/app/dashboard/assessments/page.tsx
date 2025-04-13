'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AssessmentsPage() {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Assessments
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-6"
      >
        View and manage your assessments, tests, and assignments.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <h2 className="text-xl font-semibold mb-4">Upcoming Assessments</h2>
        <p className="text-gray-500">Your upcoming tests and assignments will appear here.</p>
      </motion.div>
    </div>
  );
} 