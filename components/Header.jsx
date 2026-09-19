"use client";

import { motion } from "motion/react";

export default function Header() {
    const technologies = [
        "PHP",
        "Laravel",
        "WordPress",
        "JavaScript",
        "React",
        "Next.js",
        "C#",
        "MySQL",
    ];

    return (
        <section
            id="home"
            className="
                relative
                w-full
                min-h-screen
                px-[7%]
                md:px-[10%]
                lg:px-[12%]
                pt-28
                pb-24
                flex
                flex-col
                items-center
                justify-center
                text-center
                overflow-hidden
                dark:bg-[#0B1F3A]
            "
        >
            {/* ==================================================
                BACKGROUND AMBIENT ELEMENTS
            ================================================== */}

            {/* Main navy ambient circle */}
            <motion.div
                className="
                    absolute
                    -z-10
                    w-72
                    h-72
                    md:w-96
                    md:h-96
                    rounded-full
                    bg-gray-200/40
                    dark:bg-[#122B4A]
                    opacity-50
                    blur-3xl
                "
                animate={{
                    x: [0, 70, -40, 0],
                    y: [0, -35, 50, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary navy ambient circle */}
            <motion.div
                className="
                    absolute
                    -z-10
                    w-52
                    h-52
                    md:w-64
                    md:h-64
                    rounded-full
                    bg-gray-100/30
                    dark:bg-[#162E4D]
                    opacity-40
                    blur-3xl
                "
                animate={{
                    x: [0, -80, 40, 0],
                    y: [0, 45, -25, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 17,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* ==================================================
                PROFILE IMAGE
            ================================================== */}
            <motion.div
                className="relative"
                initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                    scale: 1.04,
                    rotate: 1.5,
                }}
            >
                {/* Animated yellow ring */}
                <motion.div
                    className="
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-transparent
                        dark:border-[#F5C542]/40
                    "
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.35, 0.8, 0.35],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <img
                    src="/assets/osxe1.jpeg"
                    alt="Oscar Musisi Nsamba"
                    className="
                        relative
                        w-32
                        h-32
                        sm:w-36
                        sm:h-36
                        object-cover
                        rounded-full
                        border-4
                        border-white
                        dark:border-[#F5C542]
                        shadow-xl
                        shadow-black/10
                        dark:shadow-black/40
                    "
                />

                {/* Online indicator */}
                <motion.span
                    className="
                        absolute
                        right-1
                        bottom-1
                        w-4
                        h-4
                        rounded-full
                        bg-green-500
                        border-[3px]
                        border-white
                        dark:border-[#0B1F3A]
                    "
                    animate={{
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* ==================================================
                INTRODUCTION
            ================================================== */}
            <motion.div
                className="
                    mt-5
                    flex
                    items-center
                    justify-center
                "
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                }}
            >
                <h3
                    className="
                        flex
                        items-center
                        gap-2
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        font-Ovo
                        text-gray-800
                        dark:text-white
                    "
                >
                    Hi! I&apos;m Oscar Musisi Nsamba

                    <motion.img
                        src="/assets/hand-icon.png"
                        alt="Waving hand"
                        className="w-6"
                        animate={{
                            rotate: [0, 15, -5, 15, 0],
                        }}
                        transition={{
                            delay: 1,
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 5,
                        }}
                    />
                </h3>
            </motion.div>

            {/* ==================================================
                MAIN HEADING
            ================================================== */}
            <motion.h1
                className="
                    mt-2
                    max-w-5xl
                    text-3xl
                    sm:text-5xl
                    lg:text-[62px]
                    font-Ovo
                    leading-[1.15]
                    tracking-tight
                    text-gray-900
                    dark:text-white
                "
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.35,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                Software Engineer specializing in{" "}
                <motion.span
                    className="
                        font-semibold
                        text-[#B38B00]
                        dark:text-[#F5C542]
                    "
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 0.5,
                    }}
                >
                    PHP, Laravel
                </motion.span>{" "}
                & Full-Stack Development.
            </motion.h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}
            <motion.p
                className="
                    max-w-2xl
                    mx-auto
                    mt-5
                    font-Ovo
                    leading-7
                    text-sm
                    sm:text-base
                    text-gray-700
                    dark:text-white/70
                "
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.55,
                    duration: 0.7,
                }}
            >
                Computer Science graduate and Software Engineer based in
                Kampala, Uganda. I build full-stack web applications,
                business management systems and digital solutions that
                solve real-world problems.
            </motion.p>

            {/* ==================================================
                TECHNOLOGY PILLS
            ================================================== */}
            <motion.div
                className="
                    flex
                    flex-wrap
                    justify-center
                    gap-2
                    mt-6
                    max-w-3xl
                "
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.7,
                    duration: 0.6,
                }}
            >
                {technologies.map((technology, index) => (
                    <motion.span
                        key={technology}
                        className="
                            px-3
                            py-1.5
                            text-xs
                            sm:text-sm
                            rounded-full
                            border
                            border-gray-300
                            dark:border-white/10
                            bg-white/50
                            dark:bg-[#122B4A]
                            text-gray-600
                            dark:text-white/75
                            transition-all
                            duration-300
                            hover:border-[#B38B00]
                            hover:text-[#8A6B00]
                            dark:hover:border-[#F5C542]
                            dark:hover:text-[#F5C542]
                        "
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 0.75 + index * 0.06,
                            duration: 0.35,
                        }}
                        whileHover={{
                            y: -4,
                            scale: 1.05,
                        }}
                    >
                        {technology}
                    </motion.span>
                ))}
            </motion.div>

            {/* ==================================================
                CTA BUTTONS
            ================================================== */}
            <motion.div
                className="
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-center
                    gap-4
                    mt-8
                "
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 1,
                    duration: 0.6,
                }}
            >
                {/* ==================================================
                    VIEW MY WORK
                ================================================== */}
                <motion.a
                    href="#work"
                    className="
                        group
                        min-w-[180px]
                        px-8
                        py-3.5
                        rounded-full
                        bg-[#F5C542]
                        hover:bg-[#FFD95A]
                        text-[#0B1F3A]
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        shadow-lg
                        shadow-[#F5C542]/20
                        transition-colors
                        duration-300
                    "
                    whileHover={{
                        scale: 1.05,
                        y: -3,
                    }}
                    whileTap={{
                        scale: 0.96,
                    }}
                >
                    View My Work

                    <motion.img
                        src="/assets/right-arrow-white.png"
                        alt=""
                        className="
                            w-4
                            brightness-0
                            opacity-80
                        "
                        whileHover={{
                            x: 4,
                        }}
                    />
                </motion.a>

                {/* ==================================================
                    DOWNLOAD CV
                ================================================== */}
                <motion.a
                    href="/assets/Oscar%20Cv%20Dev.pdf"
                    download="Oscar-Musisi-Nsamba-CV.pdf"
                    className="
                        group
                        min-w-[180px]
                        px-8
                        py-3.5
                        rounded-full
                        border
                        border-[#B38B00]
                        dark:border-[#F5C542]
                        bg-transparent
                        dark:bg-[#162E4D]
                        text-[#8A6B00]
                        dark:text-[#F5C542]
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-gray-50
                        dark:hover:bg-[#1A385D]
                        transition-all
                        duration-300
                    "
                    whileHover={{
                        scale: 1.05,
                        y: -3,
                    }}
                    whileTap={{
                        scale: 0.96,
                    }}
                >
                    Download CV

                    <motion.img
                        src="/assets/download-icon.png"
                        alt=""
                        className="
                            w-4
                        "
                        whileHover={{
                            y: 2,
                        }}
                    />
                </motion.a>
            </motion.div>

            {/* ==================================================
                SCROLL INDICATOR
            ================================================== */}
            <motion.div
                className="
                    absolute
                    bottom-7
                    left-1/2
                    -translate-x-1/2
                "
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div
                    className="
                        w-6
                        h-10
                        border-2
                        border-gray-400
                        dark:border-white/25
                        rounded-full
                        flex
                        justify-center
                        pt-2
                    "
                >
                    <motion.div
                        className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-[#B38B00]
                            dark:bg-[#F5C542]
                        "
                        animate={{
                            y: [0, 12, 0],
                            opacity: [1, 0.3, 1],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}