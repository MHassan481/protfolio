'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Github, Phone, Heart } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mhassan.33431@gmail.com',
      href: 'mailto:mhassan.33431@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0323-4725717',
      href: 'tel:03234725717',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Harbanspura, Lahore, Pakistan',
      href: null,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/MHassan481',
      href: 'https://github.com/MHassan481',
    },
  ];

  const interests = [
    { icon: '🏏', label: 'Cricket' },
    { icon: '🎱', label: 'Snooker' },
    { icon: '⚽', label: 'Football' },
    { icon: '🏸', label: 'Badminton' },
    { icon: '💻', label: 'Tech Innovations' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{contact.label}</CardTitle>
                  <CardDescription>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-slate-600 dark:text-slate-300">{contact.value}</span>
                    )}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}

          <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Interests & Hobbies</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm"
                    >
                      <span>{interest.icon}</span>
                      <span>{interest.label}</span>
                    </span>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Reach out and let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
                onClick={() => window.location.href = 'mailto:mhassan.33431@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
                onClick={() => window.open('https://github.com/MHassan481', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Muhammad Hassan Yahya. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
