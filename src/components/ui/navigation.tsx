"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

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
          <div className="flex items-center space-x-1 overflow-x-auto">
            <Link href={"/"} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${pathname === "/" ? "bg-gray-900 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`}>Gallery</Link>
            <Link href={"/bento"} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${pathname === "/bento" ? "bg-gray-900 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`}>Bentos</Link>
            <Link href={"/casestudies"} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${pathname === "/casestudies" ? "bg-gray-900 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`}>Case Studies</Link>
            <Link href={"/contacts"} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${pathname === "/contacts" ? "bg-gray-900 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}