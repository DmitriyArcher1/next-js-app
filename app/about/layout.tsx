import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "О нас | Блог",
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <h1>О нас</h1>
            <ul>
                <li><Link href="/about/contacts">Контакты</Link></li>
                <li><Link href="/about/team">Команда</Link></li>
            </ul>
            {children}
        </div>
    );
};