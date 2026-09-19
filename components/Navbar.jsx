"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Services", href: "#services", id: "services" },
        { name: "Projects", href: "#work", id: "work" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    // --------------------------------------------------
    // Scroll detection
    // --------------------------------------------------
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // --------------------------------------------------
    // Dark mode
    // --------------------------------------------------
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        const shouldUseDark =
            savedTheme === "dark" ||
            (!savedTheme && prefersDark);

        if (shouldUseDark) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const isDark =
            document.documentElement.classList.contains("dark");

        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    // --------------------------------------------------
    // Detect active section
    // --------------------------------------------------
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    )[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // --------------------------------------------------
    // Close mobile menu
    // --------------------------------------------------
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* ==================================================
                FLOATING NAVBAR
            ================================================== */}
            <motion.nav
                initial={{
                    opacity: 0,
                    y: -30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed top-4 left-0 right-0 mx-auto z-[100] w-[92%] max-w-[1150px]"
            >
                <motion.div
                    animate={{
                        scale: scrolled ? 0.97 : 1,
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeOut",
                    }}
                    className={`
                        w-full
                        flex items-center justify-between
                        px-4 sm:px-5 lg:px-6
                        py-3
                        rounded-full
                        border
                        backdrop-blur-xl
                        transition-all duration-500
                        ${
                            scrolled
                                ? `
                                    bg-white/90
                                    dark:bg-[#0B1F3A]
                                    border-gray-200/70
                                    dark:border-white/10
                                    shadow-xl
                                `
                                : `
                                    bg-white/70
                                    dark:bg-[#0B1F3A]
                                    border-gray-200/50
                                    dark:border-white/10
                                    shadow-lg
                                `
                        }
                    `}
                >
                    {/* ==================================================
                        LOGO / BRAND
                    ================================================== */}
                    <motion.a
                        href="#home"
                        onClick={closeMenu}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="flex items-center gap-2 shrink-0"
                    >
                        <div className="relative">
                            {/* Yellow logo */}
                            <motion.div
                                whileHover={{
                                    rotate: 5,
                                }}
                                className="
                                    w-9 h-9
                                    rounded-full
                                    bg-[#F5C542]
                                    text-[#0B1F3A]
                                    flex items-center justify-center
                                    font-bold
                                    text-sm
                                    shadow-md
                                    shadow-[#F5C542]/20
                                "
                            >
                                OS
                            </motion.div>

                            {/* Online indicator */}
                            <motion.span
                                className="
                                    absolute
                                    -right-0.5
                                    -bottom-0.5
                                    w-2.5
                                    h-2.5
                                    rounded-full
                                    bg-green-500
                                    border-2
                                    border-white
                                    dark:border-[#0B1F3A]
                                "
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </div>

                        <div className="hidden sm:block leading-tight">
                            <p className="font-semibold text-sm text-gray-800 dark:text-white">
                                Oscar Musisi
                            </p>

                            <p className="text-[10px] text-gray-500 dark:text-white/50">
                                Software Engineer
                            </p>
                        </div>
                    </motion.a>

                    {/* ==================================================
                        DESKTOP NAVIGATION
                    ================================================== */}
                    <div className="hidden md:flex items-center">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => {
                                const isActive =
                                    activeSection === item.id;

                                return (
                                    <li
                                        key={item.id}
                                        className="relative"
                                    >
                                        <a
                                            href={item.href}
                                            className="
                                                relative
                                                block
                                                px-4
                                                py-2
                                                text-sm
                                                font-medium
                                                font-Ovo
                                                text-gray-600
                                                dark:text-white/70
                                                hover:text-gray-900
                                                dark:hover:text-white
                                                transition-colors
                                                duration-300
                                            "
                                        >
                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeNav"
                                                    className="
                                                        absolute
                                                        inset-0
                                                        rounded-full
                                                        bg-gray-100
                                                        dark:bg-[#162E4D]
                                                    "
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}

                                            <span
                                                className={`
                                                    relative
                                                    z-10
                                                    transition-colors
                                                    duration-300
                                                    ${
                                                        isActive
                                                            ? "dark:text-[#F5C542]"
                                                            : ""
                                                    }
                                                `}
                                            >
                                                {item.name}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* ==================================================
                        RIGHT CONTROLS
                    ================================================== */}
                    <div className="flex items-center gap-2">

                        {/* Theme toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{
                                scale: 1.1,
                                rotate: 8,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="
                                w-9 h-9
                                rounded-full
                                flex items-center justify-center
                                hover:bg-gray-100
                                dark:hover:bg-[#162E4D]
                                transition-colors
                            "
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {darkMode ? (
                                    <motion.img
                                        key="sun"
                                        src="/assets/sun_icon.png"
                                        alt="Light mode"
                                        className="w-5"
                                        initial={{
                                            opacity: 0,
                                            rotate: -90,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: 90,
                                            scale: 0.5,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    />
                                ) : (
                                    <motion.img
                                        key="moon"
                                        src="/assets/moon_icon.png"
                                        alt="Dark mode"
                                        className="w-5"
                                        initial={{
                                            opacity: 0,
                                            rotate: 90,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: -90,
                                            scale: 0.5,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* ==================================================
                            DESKTOP CONTACT BUTTON
                        ================================================== */}
                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.04,
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            className="
                                hidden lg:flex
                                items-center
                                gap-2
                                px-5
                                py-2
                                rounded-full
                                bg-[#F5C542]
                                hover:bg-[#FFD95A]
                                text-[#0B1F3A]
                                text-sm
                                font-semibold
                                shadow-md
                                shadow-[#F5C542]/20
                                transition-colors
                                duration-300
                            "
                        >
                            Let's Talk

                            <motion.span
                                animate={{
                                    x: [0, 3, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            >
                                →
                            </motion.span>
                        </motion.a>

                        {/* ==================================================
                            MOBILE MENU BUTTON
                        ================================================== */}
                        <motion.button
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="
                                md:hidden
                                w-9 h-9
                                rounded-full
                                flex items-center justify-center
                                hover:bg-gray-100
                                dark:hover:bg-[#162E4D]
                                transition-colors
                            "
                            aria-label={
                                menuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{
                                            opacity: 0,
                                            rotate: -90,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: 90,
                                        }}
                                        className="
                                            text-xl
                                            text-gray-700
                                            dark:text-white
                                        "
                                    >
                                        ×
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{
                                            opacity: 0,
                                            rotate: 90,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: -90,
                                        }}
                                        className="
                                            text-xl
                                            text-gray-700
                                            dark:text-white
                                        "
                                    >
                                        ☰
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* ==================================================
                MOBILE MENU BACKDROP
            ================================================== */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={closeMenu}
                        className="
                            fixed
                            inset-0
                            bg-black/20
                            dark:bg-[#061426]/70
                            backdrop-blur-sm
                            z-[90]
                            md:hidden
                        "
                    />
                )}
            </AnimatePresence>

            {/* ==================================================
                MOBILE MENU
            ================================================== */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                            scale: 0.95,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: 0.95,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            fixed
                            top-20
                            left-4
                            right-4
                            z-[95]
                            md:hidden
                        "
                    >
                        <div
                            className="
                                rounded-3xl
                                border
                                border-gray-200/70
                                dark:border-white/10
                                bg-white/95
                                dark:bg-[#0B1F3A]
                                backdrop-blur-xl
                                shadow-2xl
                                p-3
                                overflow-hidden
                            "
                        >
                            {navItems.map((item, index) => {
                                const isActive =
                                    activeSection === item.id;

                                return (
                                    <motion.a
                                        key={item.id}
                                        href={item.href}
                                        onClick={closeMenu}
                                        initial={{
                                            opacity: 0,
                                            x: -20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: index * 0.05,
                                        }}
                                        whileHover={{
                                            x: 4,
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        className={`
                                            flex
                                            items-center
                                            justify-between
                                            px-5
                                            py-4
                                            rounded-2xl
                                            font-Ovo
                                            transition-all
                                            duration-300

                                            ${
                                                isActive
                                                    ? `
                                                        bg-gray-100
                                                        dark:bg-[#162E4D]
                                                        text-gray-900
                                                        dark:text-[#F5C542]
                                                    `
                                                    : `
                                                        text-gray-600
                                                        dark:text-white/70
                                                        hover:bg-gray-50
                                                        dark:hover:bg-[#122B4A]
                                                        hover:text-gray-900
                                                        dark:hover:text-white
                                                    `
                                            }
                                        `}
                                    >
                                        <span>
                                            {item.name}
                                        </span>

                                        <span
                                            className={`
                                                text-lg
                                                transition-transform
                                                duration-300
                                                ${
                                                    isActive
                                                        ? "translate-x-1"
                                                        : ""
                                                }
                                            `}
                                        >
                                            →
                                        </span>
                                    </motion.a>
                                );
                            })}

                            {/* Mobile CTA */}
                            <motion.a
                                href="#contact"
                                onClick={closeMenu}
                                whileHover={{
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="
                                    mt-2
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    px-5
                                    py-3
                                    rounded-2xl
                                    bg-[#F5C542]
                                    hover:bg-[#FFD95A]
                                    text-[#0B1F3A]
                                    font-semibold
                                    shadow-md
                                    shadow-[#F5C542]/20
                                    transition-colors
                                    duration-300
                                "
                            >
                                Let's Work Together

                                <motion.span
                                    animate={{
                                        x: [0, 3, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                >
                                    →
                                </motion.span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}