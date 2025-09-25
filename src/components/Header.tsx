"use client";

import React, { useState, useEffect } from 'react';

// A simple placeholder for a link component, replacing next/link.
const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

// This component now uses standard browser APIs to determine the active link.
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Check the current window's path to determine if the link is active.
        if (typeof window !== 'undefined') {
            setIsActive(window.location.pathname === href);
        }
    }, [href]);

    return (
        <Link href={href}>
            <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}>
                {children}
            </span>
        </Link>
    );
};

export default function Header() {
    return (
        <header className="py-4 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-lg z-50">
            <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="120" rx="20" fill="white" />
                        <path d="M30 90L60 30L90 90" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M45 70H75" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" />
                    </svg>
                    <h1 className="text-xl font-bold text-white tracking-tighter hidden sm:block">
                        alphaaccess.exchange
                    </h1>
                </div>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/blueprint">Blueprint</NavLink>
                <NavLink href="/banking">Banking</NavLink>
                <NavLink href="/learn">Learn</NavLink>
                <NavLink href="/about">About</NavLink>
            </nav>
            <Link href="/app">
                <span className="bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    Launch App
                </span>
            </Link>
        </header>
    );
}

