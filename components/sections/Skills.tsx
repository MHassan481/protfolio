'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code,
    skills: ['JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'PHP'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    color: 'from-emerald-600 to-green-600',
  },
  {
    title: 'Frontend & Styling',
    icon: Layout,
    skills: ['Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Tools & CMS',
    icon: Wrench,
    skills: ['Redux Toolkit', 'REST APIs', 'Git & GitHub', 'WordPress'],
    color: 'from-purple-600 to-pink-600',
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance web
            applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Card
                key={index}
                className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 
                          text-slate-700 dark:text-slate-200 
                          hover:bg-blue-100 dark:hover:bg-blue-900 
                          transition-colors"
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
