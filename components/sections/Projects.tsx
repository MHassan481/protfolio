'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ShoppingCart,
  Package,
  Building2,
  ExternalLink,
  Github,
} from 'lucide-react';

const projects = [
  {
    title: 'Full-Stack E-Commerce Platform',
    description:
      'A production-ready e-commerce platform with authentication, payments, and admin management.',
    icon: ShoppingCart,
    highlights: [
      'User authentication and role-based authorization',
      'Advanced product search, filters, and cart system',
      'Secure checkout and order tracking',
      'Admin dashboard for inventory and order management',
    ],
    technologies: [
      'React.js',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    color: 'from-blue-600 to-cyan-600',
    live: 'https://e-commerce-14wa.vercel.app/',
    github: 'https://github.com/MHassan481/e-commerce',
  },
  {
    title: 'Inventory Management System',
    description:
      'Backend-focused system for managing products, orders, and inventory efficiently.',
    icon: Package,
    highlights: [
      'RESTful API architecture with validation',
      'Real-time inventory and order tracking',
      'Optimized MongoDB queries for performance',
      'Secure and scalable backend design',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    color: 'from-emerald-600 to-green-600',
    github:
      'https://github.com/MHassan481/inventory-management-system',
  },
  {
    title: 'Engineering Company Website',
    description:
      'Custom WordPress CMS for showcasing engineering services and projects.',
    icon: Building2,
    highlights: [
      'Custom WordPress theme and CMS setup',
      'Service portfolio and contact integrations',
      'SEO optimization and performance tuning',
      'User-friendly content management',
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    color: 'from-orange-600 to-red-600',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of real-world projects demonstrating my ability to
            design, build, and deploy scalable web applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Card
                key={index}
                className="flex flex-col border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <CardTitle className="text-xl mb-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  {/* Highlights */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        <span className="text-slate-600 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.live && (
                      <Button
                        onClick={() =>
                          window.open(project.live, '_blank')
                        }
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}

                    {project.github && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(project.github, '_blank')
                        }
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
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
