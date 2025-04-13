'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import FloatingAIChatbot from '@/components/ai/FloatingAIChatbot';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userName, setUserName] = useState('Student');
  const [userRole, setUserRole] = useState('student');
  
  useEffect(() => {
    // Get user data from localStorage if available
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserName(user.name || 'Student');
        setUserRole(user.role || 'student');
      }
    } catch (error) {
      console.error('Failed to get user data:', error);
    }
  }, []);

  return (
    <div className="h-screen w-full flex bg-gray-50">
      {/* Navigation with Course Sidebar */}
      <Navigation />

      {/* Main content area - takes remaining space */}
      <div className="flex-1 overflow-hidden">
        <main className="h-full">
          <div className="h-full overflow-y-auto p-8">
            {children}
          </div>
        </main>
      </div>
      
      {/* Floating AI Chatbot */}
      <FloatingAIChatbot 
        userName={userName}
        userRole={userRole}
      />
    </div>
  );
} 