'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { ArrowRight, Code, Database, Zap, Users, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Redirect to tasks page after a longer delay to allow users to see the landing page
    const timer = setTimeout(() => {
      router.push('/tasks');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built with Next.js 14 and Spring Boot for optimal performance"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Management",
      description: "Complete user system with role-based access control"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Task Tracking",
      description: "Comprehensive task management with status and priority tracking"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-time Updates",
      description: "Instant updates and notifications for task changes"
    }
  ];

  const techStack = [
    { name: "Next.js 14", color: "bg-blue-500", icon: <Code className="h-4 w-4" /> },
    { name: "Spring Boot", color: "bg-green-500", icon: <Database className="h-4 w-4" /> },
    { name: "PostgreSQL", color: "bg-purple-500", icon: <Database className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading with animated gradient */}
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Task Management
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              A modern, full-stack task management application built with cutting-edge technologies
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Built with</h3>
            <div className="flex items-center justify-center space-x-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${(index + 4) * 200}ms` }}
                >
                  <div className={`p-1 rounded-full ${tech.color} text-white`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                onClick={() => router.push('/tasks')}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('http://localhost:8080/swagger-ui.html', '_blank')}
                className="px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View API Docs
              </Button>
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-8">
              <Clock className="h-4 w-4" />
              <span>Redirecting to dashboard in 5 seconds...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float animation-delay-2000">
        <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 left-10 animate-float animation-delay-4000">
        <div className="w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
      </div>
    </div>
  );
}
