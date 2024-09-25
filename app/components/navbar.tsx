"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full">
            <div className="flex justify-between items-center w-full">
                <div>
                    <Link href="/nearth" className={pathname === "/nearth" ? "font-bold" : ""}>Nearth Studio</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex gap-4">
                    <li>
                        <Link href="/calendar" className={pathname === "/calendar" ? "font-bold" : ""}>Calendar</Link>
                    </li>
                    <li>
                        <Link href="/events" className={pathname === "/events" ? "font-bold" : ""}>Events</Link>
                    </li>
                    <li>
                        <Link href="/method" className={pathname === "/method" ? "font-bold" : ""}>Método</Link>
                    </li>
                </ul>
            </div>
            {isMenuOpen && (
                <ul className="md:hidden mt-4 space-y-2">
                    <li>
                        <Link href="/calendar" className={pathname === "/calendar" ? "font-bold block" : "block"}>Calendar</Link>
                    </li>
                    <li>
                        <Link href="/events" className={pathname === "/events" ? "font-bold block" : "block"}>Events</Link>
                    </li>
                    <li>
                        <Link href="/method" className={pathname === "/method" ? "font-bold block" : "block"}>Método</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}