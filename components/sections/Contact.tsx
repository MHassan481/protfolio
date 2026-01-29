'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Github, Phone, Heart } from 'lucide-react';

const CONTACT_CARD_STYLE =
  'border-2 transition-all duration-300 hover:border-blue-500 hover:shadow-xl';

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
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/MHassan481',
      href: 'https://github.com/MHassan481',
    },
  ];

  const interests = [
    '🏏 Cricket',
    '🎱 Snooker',
    '⚽ Football',
    '🏸 Badminton',
    '💻 Tech Innovations',
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Open to projects, collaborations, and opportunities — let’s build
            something great together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <Card key={label} className={CONTACT_CARD_STYLE}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <CardTitle className="text-lg">{label}</CardTitle>

                <CardDescription>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 ring-blue-500"
                      aria-label={label}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-600 dark:text-slate-300">
                      {value}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}

          {/* Interests */}
          <Card className={CONTACT_CARD_STYLE}>
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Interests & Hobbies</CardTitle>

              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-3">
                  {interests.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA */}
        <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start a Project?
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Have an idea or need a developer? I’d love to hear about it.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:from-blue-700 hover:to-cyan-700"
              >
                <a href="mailto:mhassan.33431@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
              >
                <a
                  href="https://github.com/MHassan481"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Muhammad Hassan Yahya. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
