'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap, Award, Globe, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A brief overview of my background, education, and professional
            interests.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Profile / Summary */}
          <Card className="md:col-span-1 border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I’m a <span className="font-medium text-slate-900 dark:text-white">
                Full Stack Web Developer
              </span>{' '}
              with hands-on experience building modern web applications using
              React, Next.js, Node.js, and MongoDB. I enjoy solving real-world
              problems and transforming ideas into scalable digital products.
            </CardContent>
          </Card>

          {/* Certification */}
          <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Full Stack Web Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                PNY Training – Arfa Tower, Lahore
              </p>
              <p className="text-sm text-slate-500 mt-1">2024</p>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-200">Urdu</span>
                <span className="text-sm text-slate-500">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-200">Punjabi</span>
                <span className="text-sm text-slate-500">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-200">English</span>
                <span className="text-sm text-slate-500">Fluent</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default About;
