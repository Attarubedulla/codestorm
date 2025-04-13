'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Code, Copy, Check } from 'lucide-react';

export default function CodeHelperPage() {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 h-full flex flex-col">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        AI Code Helper
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-6"
      >
        Get AI-powered help with your code, debug issues, and improve your programming skills.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col overflow-hidden"
      >
        <div className="p-4 border-b border-gray-200 flex items-center">
          <Bot className="h-5 w-5 text-indigo-500 mr-2" />
          <h2 className="text-lg font-semibold">Code Assistant</h2>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <div className="flex items-start mb-6">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm max-w-3xl">
              <p className="text-gray-700">
                Hello! I'm your AI code assistant. How can I help you today? You can ask me about code issues, 
                algorithm explanations, or best practices.
              </p>
            </div>
          </div>
          
          <div className="flex items-start justify-end">
            <div className="bg-indigo-500 p-4 rounded-xl shadow-sm max-w-3xl text-white mr-3">
              <p>I'm trying to implement a recursive function to calculate Fibonacci numbers in JavaScript. Can you help?</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 flex-shrink-0">
              <span className="text-sm font-semibold">U</span>
            </div>
          </div>
          
          <div className="flex items-start mt-6">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm max-w-3xl">
              <p className="text-gray-700 mb-4">
                Sure! Here's a recursive function to calculate Fibonacci numbers:
              </p>
              <div className="bg-gray-800 rounded-md p-4 text-gray-100 font-mono text-sm relative">
                <pre className="whitespace-pre-wrap">
{`function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(7)); // Output: 13`}
                </pre>
                <button 
                  className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-gray-700 mt-4">
                Note that this implementation is simple but not efficient for large values of n due to redundant calculations. 
                For better performance, you might want to use memoization or an iterative approach.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center bg-gray-50 rounded-lg p-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question about coding..."
              className="flex-1 bg-transparent border-0 focus:ring-0 outline-none"
            />
            <button className="p-2 rounded-md bg-indigo-500 text-white">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 