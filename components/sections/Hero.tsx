'use client';

import { Button } from '@/components/ui/button';
import { Github, Mail, MapPin, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">

          {/* Avatar */}
          <div className="mb-10 flex justify-center">
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <Image
                  src="/img1.png"
                  alt="Muhammad Hassan Yahya"
                  width={180}
                  height={180}
                  priority
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Muhammad Hassan Yahya
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            Full Stack Web Developer
          </p>

          {/* Short Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            I build fast, scalable, and user-focused web applications using
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              {' '}React, Next.js, and modern backend technologies
            </span>
            — turning ideas into production-ready solutions.
          </p>

          {/* Location & Email */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Lahore, Pakistan</span>
            </div>
            <a
              href="mailto:mhassan.33431@gmail.com"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-500" />
              <span>mhassan.33431@gmail.com</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg px-8"
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Hire Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800 px-8"
              onClick={() =>
                window.open('https://github.com/MHassan481', '_blank')
              }
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-14 flex justify-center animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-400" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
