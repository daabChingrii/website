"use client"
import { IconArrowRight, IconHome, IconInfoCircle, IconMenu4, IconPhone, IconTool, IconTools } from '@tabler/icons-react'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
// import { colgroup } from 'framer-motion/client';
// import { catalogue } from '@react-three/fiber/dist/declarations/src/core/renderer';

const NavBar = () => {

    interface NavLink {
        href: string;
        label: string;
        icon: JSX.Element;
        posX: string;
        posY: string;
    }

    const links: NavLink[] = [
        { href: '#', label: 'Home', icon: <IconHome />, posX: "0%", posY: "3%" },
        { href: '#', label: 'About', icon: <IconInfoCircle />, posX: "25%", posY: "28%" },
        { href: '#', label: 'Services', icon: <IconTool />, posX: "50%", posY: "52%" },
        { href: '#', label: 'Contact', icon: <IconPhone />, posX: "75%", posY: "78%" },
    ];

    const [isOpen, setisOpen] = useState<boolean>(false);
    const [navPosX, setnavPosX] = useState<string>('110%');
    const [navPosY, setnavPosY] = useState<string>('110%');
    const [isRotated, setisRotated] = useState<boolean>(false);

    const navRef = useRef<HTMLDivElement | null>(null);


    //hide navbar on scroll down and show on scroll up
    useEffect(() => {
        let prevScrollY = window.scrollY;
        const handleScroll = () => {
            const currScrollY = window.scrollY;
            if (prevScrollY > currScrollY) navRef.current!.style.top = '5%';
            else navRef.current!.style.top = '-10%';
            prevScrollY = currScrollY;
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (
        <>
            {/*nav for desktop screens */}
            <nav className='hidden sm:flex justify-around w-2/3 h-[8vh] mx-auto border-2 rounded-2xl shadow-[0_0_10px_1px_var(--foreground)] fixed top-[5%] overflow-hidden z-50 left-1/2 -translate-x-1/2
            bg-[#17171765]'
                ref={navRef}
                style={{
                    transition:"top 0.3s",
                    backdropFilter: "blur(10px)",
                }}
                onMouseLeave={() => { setnavPosX('110%') }}>

                {links.map((link, index) => (
                    <Link key={link.label} href={link.href} className='w-[25%] h-full text-center flex justify-center  items-center gap-2 group hover:text-[var(--background)]' onMouseEnter={() => { setnavPosX(link.posX) }}>
                        {link.icon}<p className='hidden group-hover:block font-semibold'>{link.label}</p>
                    </Link>
                ))}

                <span className='absolute bg-[var(--foreground)] w-[25%] h-full rounded-[10px] -z-10' style={{
                    top: 0,
                    left: navPosX,
                    transition: 'all 0.3s'
                }}></span>

            </nav>

            {/*nav for mobile screens */}
            <nav className='sm:hidden fixed z-50 top-2 right-2 border-2 rounded-lg bg-[#000000ef] '>
                <div className='text-right flex justify-end'>
                    <motion.div onClick={() => { setisRotated(!isRotated); setisOpen(!isOpen) }}
                        animate={{ rotate: isRotated ? 360 : 0 }}
                        transition={{ duration: 1 }} className='w-fit  rounded-lg p-2'>
                        {isOpen ? <IconArrowRight /> : <IconMenu4 />}</motion.div>
                </div>

                {isOpen && <section className='w-[50vw] h-[50vh] text-[5vw] flex flex-col items-center relative overflow-hidden' onMouseLeave={() => { setnavPosY("110%") }}>

                    {links.map((link, index) => (
                        <Link key={link.label} href={link.href} className='w-2/3 grow text-center hover:text-[var(--background)]  py-1 rounded-lg flex items-center justify-center gap-1' onMouseEnter={() => { setnavPosY(link.posY) }}>{link.icon}<p>{link.label}</p></Link>
                    ))}
                    <span className='absolute bg-[var(--foreground)] w-[80%] h-[20%] -translate-x-1/2 rounded-[10px] -z-10 ' style={{
                        top: navPosY,
                        left: "50%",
                        transition: 'all 0.3s'
                    }}></span>
                </section>}

            </nav>

        </>
    )
}

export default NavBar