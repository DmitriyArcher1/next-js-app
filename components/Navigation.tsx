'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import "../app/globals.css";
import { useSession, signOut } from 'next-auth/react';

interface NavLink {
    label: string;
    href: string;
};

interface Props {
    navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname();
    const session = useSession();

    console.log(session)
    
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
            {session?.data && (
                <Link href="/profile">Профиль</Link>
            )}
            {session?.data 
            ? <Link href="#" onClick={() => signOut({callbackUrl: "/"})}>Выход</Link> 
            : <Link href="/signin">Войти</Link>
            }
        </>
    );
};

export default Navigation;