import { Facebook, Instagram, Youtube, Linkedin, Search, Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#000d1f] text-white">
      {/* Red accent line */}
      <div className="h-1 bg-[#e31e24]" />

      {/* Top Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Office Selector & Newsletter */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <select className="bg-transparent border border-white/30 px-4 py-2 text-sm rounded">
                <option>SELECT AN OFFICE</option>
              </select>
              <div className="text-sm">
                <span className="opacity-70">LET'S KEEP IN TOUCH</span>
              </div>
            </div>

            {/* Center: Logo */}
            <div className="text-2xl font-bold tracking-wider">BOMBAY YACHT</div>

            {/* Right: Search, Favorite, Inquire */}
            <div className="flex items-center gap-4">
              <button className="p-2" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="p-2" aria-label="Favorites">
                <Heart size={20} />
              </button>
              <button className="bg-[#e31e24] text-white px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-[#d71920] transition-colors">
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm uppercase tracking-wider">
            <a href="#charter" className="hover:text-[#e31e24] transition-colors">Charter</a>
            <a href="#buy" className="hover:text-[#e31e24] transition-colors">Buy</a>
            <a href="#sell" className="hover:text-[#e31e24] transition-colors">Sell</a>
            <a href="#build" className="hover:text-[#e31e24] transition-colors">Build</a>
            <a href="#manage" className="hover:text-[#e31e24] transition-colors">Manage</a>
            <a href="#crew" className="hover:text-[#e31e24] transition-colors">Crew</a>
            <a href="#about" className="hover:text-[#e31e24] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#e31e24] transition-colors">Contact</a>
          </nav>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Charter & Sales */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">CHARTER & SALES</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Yachts for Charter</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Charter Destinations</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Yachts for Sale</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Sell your Yacht</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Recent Sales</a></li>
            </ul>
          </div>

          {/* Owner Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">OWNER SERVICES</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Charter Management</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Yacht Management</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Yacht Marketing</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Build & Refit</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#e31e24] transition-colors">Crew Services</a></li>
            </ul>
          </div>

          {/* Future & Sustainability */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">FUTURE & SUSTAINABILITY</h3>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/future-margin-t5KVRb3b-29.png?"
                  alt="Sustainability"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Bombay Yacht is committed to sustainable yachting practices and environmental stewardship.
              </p>
            </div>
            <a href="#" className="text-sm text-[#e31e24] hover:underline">
              BOMBAY YACHT'S GREEN LEADERSHIP
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">LEGAL & PRIVACY</a>
            <a href="#" className="hover:opacity-100 transition-opacity">COOKIES</a>
            <a href="#" className="hover:opacity-100 transition-opacity">SITEMAP</a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider opacity-70">Follow Us</span>
            <a href="#" className="hover:text-[#e31e24] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#e31e24] transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#e31e24] transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-[#e31e24] transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs opacity-70">
            © BOMBAY YACHT 2025 ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Certification Logo */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-24 relative opacity-50">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/crest@3x-439vitpu-28.png?"
              alt="Bombay Yacht Crest"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}