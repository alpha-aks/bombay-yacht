"use client";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Orchids
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}