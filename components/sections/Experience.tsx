'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'E-Commerce Website',
      type: 'Full Stack Development',
      description: 'Designed and developed a full-stack e-commerce website from scratch',
      achievements: [
        'Built the frontend using React.js, Redux Toolkit, and Tailwind CSS',
        'Developed the backend using Node.js and Express.js',
        'Integrated MongoDB for database management',
        'Implemented RESTful APIs for smooth communication',
      ],
      technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Inventory Management System',
      type: 'Backend Development',
      description: 'Developed the backend of an e-commerce platform',
      achievements: [
        'Built robust server-side functionality using Node.js and Express.js',
        'Integrated MongoDB for efficient data storage and retrieval',
        'Designed and implemented secure RESTful APIs',
        'Collaborated with frontend team for seamless integration',
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    },
    {
      title: 'Engineering Website',
      type: 'CMS Development',
      description: 'Created a content management system using WordPress',
      achievements: [
        'Developed efficient content updates and management system',
        'Customized WordPress themes and plugins',
        'Optimized website performance and SEO',
      ],
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">{exp.type}</CardDescription>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">{exp.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span className="text-slate-700 dark:text-slate-200">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
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
