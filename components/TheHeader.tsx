import Link from 'next/link';
import React from 'react';
import "../app/globals.css";

const TheHeader = () => {
    return (
        <header>
            <Link className="link__item" href="/">Home</Link>
            <Link className="link__item" href="/blog">Blog</Link>
            <Link className="link__item" href="/about">About</Link>
        </header>
    );
};

export default TheHeader;