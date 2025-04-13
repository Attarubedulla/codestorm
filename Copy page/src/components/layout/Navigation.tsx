'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Role } from '@prisma/client';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, getInitials, generateAvatarColor } from '@/lib/utils';
import DashboardSidebar from './DashboardSidebar';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  roles: Role[];
}

// Import icons
import {
  RiDashboardLine,
  RiBookOpenLine,
  RiCodeSSlashLine,
  RiTeamLine,
  RiCalendarEventLine,
  RiBarChartBoxLine,
  RiUserSettingsLine,
  RiLogoutBoxLine,
  RiBriefcaseLine,
  RiMenuLine,
  RiCloseLine,
} from 'react-icons/ri';

const navigation: NavItem[] = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: RiDashboardLine,
    roles: ['STUDENT', 'FACULTY', 'ADMIN'] 
  },
  { 
    name: 'Courses', 
    href: '/dashboard/courses', 
    icon: RiBookOpenLine,
    roles: ['STUDENT', 'FACULTY', 'ADMIN'] 
  },
  { 
    name: 'Coding Problems', 
    href: '/dashboard/coding', 
    icon: RiCodeSSlashLine,
    roles: ['STUDENT', 'FACULTY', 'ADMIN'] 
  },
  { 
    name: 'Group Sessions', 
    href: '/dashboard/sessions', 
    icon: RiTeamLine,
    roles: ['STUDENT', 'FACULTY'] 
  },
  { 
    name: 'Schedule', 
    href: '/dashboard/schedule', 
    icon: RiCalendarEventLine,
    roles: ['STUDENT', 'FACULTY', 'ADMIN'] 
  },
  { 
    name: 'Performance', 
    href: '/dashboard/performance', 
    icon: RiBarChartBoxLine,
    roles: ['STUDENT', 'FACULTY', 'ADMIN'] 
  },
  { 
    name: 'Job Opportunities', 
    href: '/dashboard/jobs', 
    icon: RiBriefcaseLine,
    roles: ['STUDENT', 'ADMIN'] 
  },
  { 
    name: 'Settings', 
    href: '/dashboard/settings', 
    icon: RiUserSettingsLine,
    roles: ['STUDENT', 'FACULTY', 'ADMIN'] 
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [userRole, setUserRole] = useState<Role | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    // This would typically come from your auth context
    // For this example, we'll just set a default
    const fetchUser = async () => {
      try {
        // In a real app, you would fetch the user from an API or local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUserRole(user.role);
          setUserName(user.name);
        } else {
          // For demo purposes, set a default role
          setUserRole('STUDENT');
          setUserName('Demo User');
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    // Clear auth token and user data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Redirect to login page
    router.push('/login');
  };

  const filteredNavigation = navigation.filter(item => 
    userRole ? item.roles.includes(userRole) : false
  );

  // Always show the sidebar on dashboard pages
  const showDashboardSidebar = pathname.startsWith('/dashboard');

  return (
    <div className="flex h-full">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <motion.button
          type="button"
          className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200 bg-white shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          suppressHydrationWarning
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <RiCloseLine className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <RiMenuLine className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Navigation Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 bottom-0 z-30 w-64 bg-white shadow-xl transition-transform transform lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:flex-shrink-0 border-r border-gray-200 h-full overflow-hidden`}
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 bg-primary flex-shrink-0">
            <Link 
              href="/"
              className="logo-container"
              onClick={() => setIsOpen(false)}
            >
              <img 
                src="/images/logo.svg" 
                alt="Campus Bridge Logo" 
                className="logo-image"
              />
              <motion.span 
                className="text-white text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Campus Bridge
              </motion.span>
            </Link>
          </div>

          {/* User info */}
          <div className="px-5 py-5 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center">
              <div className={`h-10 w-10 rounded-full ${generateAvatarColor(userName)} flex items-center justify-center text-white font-bold shadow-md`}>
                {getInitials(userName)}
              </div>
              <motion.div 
                className="ml-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-800 font-medium">{userName || 'User'}</p>
                <p className="text-gray-500 text-sm">{userRole?.toLowerCase() || 'Loading...'}</p>
              </motion.div>
            </div>
          </div>

          {/* Navigation - scrollable area */}
          <nav className="flex-1 px-3 py-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="mb-4">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Main Menu
              </h3>
            </div>
            <ul className="space-y-1">
              {filteredNavigation.map((item, index) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                
                return (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                        isActive
                          ? "bg-primary bg-opacity-10 text-primary"
                          : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon
                        className={cn(
                          "mr-3 h-5 w-5 transition-colors duration-200",
                          isActive ? "text-primary" : "text-gray-500 group-hover:text-primary"
                        )}
                      />
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            
            {/* Logout */}
            <div className="mt-10">
              <div className="mb-2">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Account
                </h3>
              </div>
              <motion.button
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500 transition-all duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <RiLogoutBoxLine className="mr-3 h-5 w-5 text-gray-500 group-hover:text-red-500" />
                Logout
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.div>

      {/* Course Navigation Sidebar */}
      {showDashboardSidebar && (
        <DashboardSidebar />
      )}
    </div>
  );
} 