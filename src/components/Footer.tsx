'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { UrlObject } from 'url';

type Route = `/${string}`;
type FooterLink = {
  name: string;
  href: Route | UrlObject;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: FooterSection[] = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', href: '/' as const },
        { name: 'Yachts', href: '/yachts' as const },
        { name: 'Destinations', href: '/destinations' as const },
        { name: 'Corporate Events', href: '/corporate-events' as const },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' as const },
        { name: 'Contact', href: '/contact' as const },
        { name: 'Blog', href: '/blog' as const },
        { name: 'Careers', href: '/careers' as const },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' as const },
        { name: 'Help Center', href: '/help' as const },
        { name: 'Safety', href: '/safety' as const },
        { name: 'Report an Issue', href: '/report' as const },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@bombayyacht.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Marina Bay, Mumbai, India' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Bombay Yacht</h3>
              <p className="text-gray-400">
                Experience luxury on the water with our premium yacht charters in Mumbai. 
                Your journey of a lifetime starts here.
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-base text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="mt-4 space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-gray-400">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Bombay Yacht. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                href="/terms" as const
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/privacy" as const
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/cookies" as const
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
