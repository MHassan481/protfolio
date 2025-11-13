'use client';

import { Button } from '@/components/ui/button';
import { Github, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  MH
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            Muhammad Hassan Yahya
          </h1>

          <p className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            Full Stack Web Developer
          </p>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Innovative and results-driven developer with expertise in React.js, passionate about
            delivering scalable and user-centric web solutions using cutting-edge technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="w-5 h-5" />
              <span>Harbanspura, Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Mail className="w-5 h-5" />
              <span>mhassan.33431@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
              onClick={() => window.open('https://github.com/MHassan481', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
