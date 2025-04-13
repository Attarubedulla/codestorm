'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EnrollmentPage() {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        My Enrollment
      </motion.h1>
      {/* Add your enrollment content here */}
    </div>
  );
} 