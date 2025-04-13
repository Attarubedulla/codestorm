'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Layers, 
  Users, 
  Calendar, 
  Clock,
  ClipboardCheck,
  GraduationCap,
  FileText,
  MessageSquare,
  Code,
  Braces,
  Globe,
  Terminal,
  Bot,
  Sparkles,
  Users as UsersGroup,
  Briefcase,
  CheckSquare,
  Award,
  LineChart,
  Flame
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function DashboardSidebar() {
  const pathname = usePathname();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Navigation structure with categories
  const navCategories = [
    {
      title: 'LMS Module',
      items: [
        {
          name: 'Courses',
          href: '/dashboard/all-courses',
          icon: BookOpen
        },
        {
          name: 'Attendance',
          href: '/dashboard/attendance',
          icon: ClipboardCheck
        },
        {
          name: 'Assessments',
          href: '/dashboard/assessments',
          icon: FileText
        },
        {
          name: 'Faculty Interaction',
          href: '/dashboard/faculty',
          icon: MessageSquare
        }
      ]
    },
    {
      title: 'Coding Training',
      items: [
        {
          name: 'DSA Track',
          href: '/dashboard/coding/dsa',
          icon: Braces
        },
        {
          name: 'Web Development',
          href: '/dashboard/coding/web',
          icon: Globe
        },
        {
          name: 'Python Track',
          href: '/dashboard/coding/python',
          icon: Code
        },
        {
          name: 'Java Track',
          href: '/dashboard/coding/java',
          icon: Code
        },
        {
          name: 'Online Compiler',
          href: '/dashboard/coding/compiler',
          icon: Terminal
        }
      ]
    },
    {
      title: 'AI Assistant',
      items: [
        {
          name: 'Code Helper',
          href: '/dashboard/ai/code-helper',
          icon: Bot
        },
        {
          name: 'Group Code Rooms',
          href: '/dashboard/ai/group-rooms',
          icon: UsersGroup
        },
        {
          name: 'Job Match',
          href: '/dashboard/ai/job-match',
          icon: Briefcase
        },
        {
          name: 'Code Review',
          href: '/dashboard/ai/code-review',
          icon: CheckSquare
        }
      ]
    },
    {
      title: 'Student Dashboard',
      items: [
        {
          name: 'Skill Heatmap',
          href: '/dashboard/student/heatmap',
          icon: Flame
        },
        {
          name: 'Badges & Achievements',
          href: '/dashboard/student/badges',
          icon: Award
        },
        {
          name: 'Weekly Streaks',
          href: '/dashboard/student/streaks',
          icon: LineChart
        }
      ]
    }
  ];

  return (
    <motion.aside
      className="min-w-[240px] w-60 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="p-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
        variants={itemVariants}
      >
        <h2 className="font-bold text-lg">Academic Hub</h2>
        <p className="text-indigo-100 text-sm">All-in-one learning platform</p>
      </motion.div>

      <div className="flex-1 overflow-y-auto">
        {navCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mt-4">
            <motion.div
              className="px-4 py-2"
              variants={itemVariants}
              transition={{
                delay: 0.1 + categoryIndex * 0.05,
              }}
            >
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {category.title}
              </h3>
            </motion.div>
            <nav className="mt-1">
              <ul className="space-y-1 px-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item.href} 
                    variants={itemVariants}
                    transition={{
                      delay: 0.1 + categoryIndex * 0.05 + itemIndex * 0.03,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm rounded-lg transition-colors group",
                        pathname === item.href
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                      )}
                    >
                      <item.icon className={cn(
                        "h-4 w-4 mr-3",
                        pathname === item.href
                          ? "text-indigo-500"
                          : "text-gray-400 group-hover:text-indigo-500"
                      )} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>

      <motion.div
        className="p-4 bg-indigo-50 border-t border-indigo-100"
        variants={itemVariants}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-indigo-700">Current Semester</div>
          <div className="text-sm font-bold bg-white px-2 py-1 rounded-md text-indigo-600 border border-indigo-100">
            Fall 2023
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
} 