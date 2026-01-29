'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Frameworks',
      icon: Code,
      skills: ['JavaScript', 'React.js', 'Node.js', 'Next.js', 'Express.js', 'PHP'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Front-End Development',
      icon: Layout,
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap CSS', 'HTML', 'Vanilla CSS'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'CMS & Tools',
      icon: Wrench,
      skills: ['WordPress', 'Redux Toolkit', 'RESTful APIs', 'Git'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
