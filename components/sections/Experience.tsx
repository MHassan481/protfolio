'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'E-Commerce Platform',
    role: 'Full Stack Developer',
    period: '2024',
    description:
      'Designed and developed a scalable e-commerce platform with modern frontend and backend technologies.',
    highlights: [
      'Developed responsive UI using React.js, Redux Toolkit, and Tailwind CSS',
      'Built RESTful APIs with Node.js and Express.js',
      'Integrated MongoDB for product, user, and order management',
      'Implemented authentication, cart, and checkout functionality',
    ],
    technologies: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    title: 'Inventory Management System',
    role: 'Backend Developer',
    period: '2024',
    description:
      'Developed a robust backend system to manage inventory, orders, and user data efficiently.',
    highlights: [
      'Designed scalable backend architecture using Node.js and Express.js',
      'Implemented secure REST APIs with validation and error handling',
      'Optimized MongoDB queries for better performance',
      'Collaborated closely with frontend developers for API integration',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Engineering Company Website',
    role: 'WordPress Developer',
    period: '2023',
    description:
      'Built and customized a WordPress-based CMS for an engineering firm.',
    highlights: [
      'Customized WordPress themes and plugins',
      'Improved website performance and SEO',
      'Created an easy-to-manage content system for non-technical users',
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Hands-on experience building full-stack and backend-focused web
            applications using modern technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-1">
                      {exp.title}
                    </CardTitle>

                    <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        {exp.role}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </CardDescription>

                    <p className="text-slate-600 dark:text-slate-300 mt-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span className="text-slate-700 dark:text-slate-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
