'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Bell } from 'lucide-react';

export default function FacultyInteractionPage() {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Faculty Interaction
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-6"
      >
        Connect with your instructors and view course announcements.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center mb-4">
            <MessageSquare className="h-5 w-5 text-indigo-500 mr-2" />
            <h2 className="text-xl font-semibold">Messages</h2>
          </div>
          <p className="text-gray-500">Contact your instructors or view past conversations.</p>
          <button className="mt-4 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
            New Message
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-indigo-500 mr-2" />
            <h2 className="text-xl font-semibold">Announcements</h2>
          </div>
          <p className="text-gray-500">View important announcements from your instructors.</p>
          <div className="mt-4 text-sm">
            <div className="flex justify-between text-gray-500 mb-2">
              <span>No new announcements</span>
              <span>Today</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 