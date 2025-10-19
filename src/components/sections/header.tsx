"use client";

import { useState } from "react";
import { Search, Heart, Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001433] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            BOMBAY YACHT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#charter" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Charter
            </Link>
            <Link href="#buy" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Buy
            </Link>
            <Link href="#sell" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Sell
            </Link>
            <Link href="#build" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Build
            </Link>
            <Link href="#manage" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Manage
            </Link>
            <Link href="#crew" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Crew
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#e31e24] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-[#e31e24] transition-colors" aria-label="Favorites">
              <Heart size={20} />
            </button>
            <button className="hidden lg:block bg-[#e31e24] text-white px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-[#d71920] transition-colors">
              Inquire
            </button>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="#charter" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Charter
              </Link>
              <Link href="#buy" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Buy
              </Link>
              <Link href="#sell" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Sell
              </Link>
              <Link href="#build" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Build
              </Link>
              <Link href="#manage" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Manage
              </Link>
              <Link href="#crew" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Crew
              </Link>
              <Link href="#about" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-[#e31e24] transition-colors">
                Contact
              </Link>
              <button className="bg-[#e31e24] text-white px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-[#d71920] transition-colors">
                Inquire
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}