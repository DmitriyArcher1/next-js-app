'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import "../app/globals.css";

interface NavLink {
    label: string;
    href: string;
};

interface Props {
    navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname();
    
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathName === link.href;

                return (
                    <Link 
                        key={link.label} 
                        href={link.href} 
                        className={isActive ? "active" : ""}
                    >
                    {link.label}
                    </Link>
                )
            })}
        </>
    );
};

export default Navigation;