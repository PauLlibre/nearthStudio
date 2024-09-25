"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center w-full">
            <div>
                <Link href="/nearth" className={pathname === "/nearth" ? "font-bold" : ""}>Nearth Studio</Link>
            </div>
            <ul className="flex gap-4">
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
    )
}