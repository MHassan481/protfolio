'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Building2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Full Stack E-Commerce Platform',
      description: 'A complete e-commerce solution with modern UI and robust backend',
      icon: ShoppingCart,
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout system',
        'Order management and tracking',
        'Admin dashboard for inventory management',
      ],
      technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      link: 'https://e-commerce-14wa.vercel.app/',
      github: 'https://github.com/MHassan481/e-commerce',
    },
    {
      title: 'Inventory Management System',
      description: 'Backend system for efficient inventory and order management',
      icon: Package,
      features: [
        'RESTful API architecture',
        'Real-time inventory tracking',
        'Order processing system',
        'Database optimization',
        'Secure API endpoints',
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Engineering Company Website',
      description: 'Content management system for engineering services showcase',
      icon: Building2,
      features: [
        'Custom WordPress theme',
        'Content management system',
        'Service portfolio display',
        'Contact forms and inquiries',
        'SEO optimization',
      ],
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl flex flex-col">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                    {project.link && (
                      <Button
                        onClick={() => window.open(project.link, '_blank')}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    
                     {project.github && (
                        <Button
                          onClick={() => window.open(project.github, '_blank')}
                          variant="outline"
                          className="flex-1 border-slate-300 dark:border-slate-700"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      )}
                      </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
