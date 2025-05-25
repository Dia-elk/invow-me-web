'use client'
import React, { useState, useEffect } from 'react';
import Logo from "@/app/components/Logo";
import DrawerIcon from "@/app/components/icons/DrawerIcon";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu on route change
    useEffect(() => {
        closeMenu();
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                closeMenu();
            }
        };

        // Add scroll event listener when menu is open
        if (isMenuOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <div className={'max-w-5xl pt-20 mx-auto px-8'}>
            <div className={'flex justify-between items-center'}>
                <Link href={'/'} className={`relative z-[20000] transition-colors duration-300 ${
                    isMenuOpen ? 'text-background' : ''
                }`}>
                    <Logo/>
                </Link>
                <div
                    className={'cursor-pointer relative'}
                    onClick={toggleMenu}
                >
                    <DrawerIcon/>
                </div>
            </div>
            {/* Menu Widget */}
            <div className={`hidden rounded-b-[120px] w-full fixed left-0 h-51 bg-secondary text-background text-xs  select-none transition-all duration-300 ease-in-out md:flex items-center gap-4 justify-end px-20 ${
                isMenuOpen ? 'top-0' : '-top-52'
            }`}>
                <Link href={'/fonctionnalites'} className={'hover:font-black transition-all duration-300'}>Fonctionnalités</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <Link href={'/tarifs'} className={'hover:font-black transition-all duration-300'}>Tarifs</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <Link href={'/comment-ca-marche'} className={'hover:font-black transition-all duration-300'}>Comment ça marche</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <Link href={'/testimonials'} className={'hover:font-black transition-all duration-300'}>Testimonials</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <a target={'_blank'} href={"https://app.invow.me"} className={'cursor-pointer hover:font-black transition-all duration-300'}>Inscription gratuite</a>
            </div>

            {/* Mobile Menu Widget */}
            <div className={`md:hidden  w-full fixed left-0 h-screen bg-secondary text-background text-xs  select-none transition-all duration-300 ease-in-out flex flex-col items-center gap-4 justify-center px-20 ${
                isMenuOpen ? 'top-0' : '-top-[100vh]'
            }`}>
                <Link href={'/fonctionnalites'} >Fonctionnalités</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <Link href={'/tarifs'} >Tarifs</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <Link href={'/comment-ca-marche'}>Comment ça marche</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <Link href={'/testimonials'} >Testimonials</Link>
                <div className={'w-1 h-1 rounded-full bg-background'}>
                </div>
                <a target={'_blank'} href={"https://app.invow.me"} className={'cursor-pointer'}>Inscription gratuite</a>
            </div>
        </div>
    );
};

export default NavBar;