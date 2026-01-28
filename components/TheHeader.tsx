import Link from 'next/link';
import React from 'react';
import "../app/globals.css";
import Navigation from './Navigation';

const navItems = [
    { label: "Главная", href: "/" },
    { label: "Блог", href: "/blog" },
    { label: "О нас", href: "/about" },
];

const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItems} />
        </header>
    );
};

export default TheHeader;