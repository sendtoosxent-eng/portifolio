"use client";

import { motion } from "motion/react";

export default function About() {
    const tools = [
        {
            name: "VS Code",
            icon: "/assets/vscode.png",
        },
        {
            name: "Git",
            icon: "/assets/git.png",
        },
        {
            name: "Figma",
            icon: "/assets/figma.png",
        },
    ];

    const data = [
        {
            name: "Core Stack",
            icon1: "/assets/code-icon.png",
            icon2: "/assets/code-icon-dark.png",
            description:
                "PHP, Laravel, WordPress, JavaScript, React, Next.js & C#",
        },
        {
            name: "Education",
            icon1: "/assets/edu-icon.png",
            icon2: "/assets/edu-icon-dark.png",
            description:
                "Degree in Computer Science",
        },
        {
            name: "Projects",
            icon1: "/assets/project-icon.png",
            icon2: "/assets/project-icon-dark.png",
            description:
                "Full-stack applications, business systems & websites",
        },
    ];

    return (
        <section
            id="about"
            className="
                relative
                w-full
                px-[7%]
                md:px-[10%]
                lg:px-[12%]
                py-20
                scroll-mt-20
                dark:bg-[#0B1F3A]
            "
        >
            {/* ==================================================
                SECTION HEADING
            ================================================== */}
            <motion.div
                className="text-center"
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <motion.h4
                    className="
                        mb-2
                        text-lg
                        font-Ovo
                        text-gray-600
                        dark:text-[#F5C542]
                    "
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    Introduction
                </motion.h4>

                <h2
                    className="
                        text-4xl
                        md:text-5xl
                        font-Ovo
                        text-gray-900
                        dark:text-white
                    "
                >
                    About Me
                </h2>

                {/* Yellow accent */}
                <motion.div
                    className="
                        h-1
                        rounded-full
                        bg-[#F5C542]
                        mx-auto
                        mt-4
                    "
                    initial={{
                        width: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        width: 48,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                    }}
                />
            </motion.div>

            {/* ==================================================
                ABOUT CONTENT
            ================================================== */}
            <div
                className="
                    flex
                    w-full
                    flex-col
                    lg:flex-row
                    items-center
                    gap-16
                    lg:gap-20
                    mt-16
                    lg:mt-20
                "
            >
                {/* ==================================================
                    PROFILE IMAGE
                ================================================== */}
                <motion.div
                    className="
                        max-w-max
                        mx-auto
                        relative
                        shrink-0
                    "
                    initial={{
                        opacity: 0,
                        x: -60,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {/* Image */}
                    <motion.div
                        whileHover={{
                            y: -6,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 20,
                        }}
                        className="
                            relative
                            rounded-3xl
                            overflow-hidden
                            border
                            border-gray-200
                            dark:border-[#F5C542]/40
                            shadow-xl
                            dark:shadow-black/30
                        "
                    >
                        <img
                            src="/assets/osxe1.jpeg"
                            alt="Oscar Musisi Nsamba"
                            className="
                                w-64
                                sm:w-80
                                rounded-3xl
                                max-w-none
                                block
                            "
                        />

                        {/* Image overlay */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/0
                                hover:bg-black/5
                                dark:hover:bg-black/10
                                transition-colors
                                duration-500
                            "
                        />
                    </motion.div>

                    {/* ==================================================
                        DECORATIVE CIRCLE
                    ================================================== */}
                    <motion.div
                        className="
                            bg-white
                            dark:bg-[#122B4A]
                            w-1/2
                            aspect-square
                            absolute
                            right-0
                            bottom-0
                            rounded-full
                            translate-x-1/4
                            translate-y-1/3
                            border
                            border-gray-200
                            dark:border-[#F5C542]/40
                            shadow-[0_10px_45px_rgba(0,0,0,0.08)]
                            dark:shadow-black/30
                            flex
                            items-center
                            justify-center
                        "
                        initial={{
                            scale: 0.7,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.35,
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Circular text */}
                        <img
                            src="/assets/circular-text.png"
                            alt=""
                            className="
                                w-full
                                animate-spin_slow
                            "
                        />

                        {/* Developer icon */}
                        <div
                            className="
                                absolute
                                top-1/2
                                left-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                                w-12
                                h-12
                                sm:w-14
                                sm:h-14
                                rounded-full
                                flex
                                items-center
                                justify-center
                                bg-[#F5C542]
                                shadow-lg
                            "
                        >
                            <img
                                src="/assets/dev-icon.png"
                                alt=""
                                className="
                                    w-1/2
                                    h-1/2
                                    object-contain
                                "
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* ==================================================
                    ABOUT TEXT
                ================================================== */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{
                        opacity: 0,
                        x: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {/* Paragraph 1 */}
                    <motion.p
                        className="
                            mb-7
                            max-w-2xl
                            font-Ovo
                            leading-7
                            text-gray-700
                            dark:text-white/80
                        "
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.15,
                            duration: 0.6,
                        }}
                    >
                        I&apos;m Oscar Musisi Nsamba, a Computer Science
                        graduate and Software Engineer based in Kampala,
                        Uganda. I build full-stack web applications,
                        business management systems, and digital platforms
                        that solve practical business problems.
                    </motion.p>

                    {/* Paragraph 2 */}
                    <motion.p
                        className="
                            mb-7
                            max-w-2xl
                            font-Ovo
                            leading-7
                            text-gray-700
                            dark:text-white/80
                        "
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.25,
                            duration: 0.6,
                        }}
                    >
                        My primary focus is on PHP and Laravel, with
                        experience working with WordPress, JavaScript,
                        React, Next.js, C#/.NET, MySQL, and SQL Server.
                        I enjoy working across both the backend and
                        frontend, from designing databases and APIs to
                        building responsive user interfaces.
                    </motion.p>

                    {/* Paragraph 3 */}
                    <motion.p
                        className="
                            mb-10
                            max-w-2xl
                            font-Ovo
                            leading-7
                            text-gray-700
                            dark:text-white/80
                        "
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.35,
                            duration: 0.6,
                        }}
                    >
                        I&apos;ve worked on systems ranging from school
                        management and financial applications to
                        point-of-sale, inventory, e-commerce, and business
                        websites. My goal is to create software that is
                        practical, maintainable, and ready for real-world
                        use.
                    </motion.p>

                    {/* ==================================================
                        INFORMATION CARDS
                    ================================================== */}
                    <motion.ul
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-3
                            gap-5
                            max-w-2xl
                        "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                },
                            },
                        }}
                    >
                        {data.map((item) => (
                            <motion.li
                                key={item.name}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 35,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        },
                                    },
                                }}
                                whileHover={{
                                    y: -7,
                                }}
                                className="
                                    group
                                    relative
                                    h-full
                                    overflow-hidden
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    rounded-2xl
                                    p-6
                                    bg-white
                                    dark:bg-[#122B4A]
                                    cursor-pointer
                                    transition-all
                                    duration-500
                                    hover:border-[#B38B00]
                                    dark:hover:border-[#F5C542]/50
                                    hover:shadow-xl
                                    dark:hover:shadow-black/30
                                "
                            >
                                {/* Hover highlight */}
                                <div
                                    className="
                                        absolute
                                        -top-10
                                        -right-10
                                        w-24
                                        h-24
                                        rounded-full
                                        bg-gray-100
                                        dark:bg-[#162E4D]
                                        opacity-0
                                        group-hover:opacity-70
                                        blur-2xl
                                        transition-opacity
                                        duration-500
                                        pointer-events-none
                                    "
                                />

                                {/* Icon */}
                                <div
                                    className="
                                        relative
                                        w-11
                                        h-11
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        bg-gray-100
                                        dark:bg-[#0B1F3A]
                                        border
                                        border-gray-200
                                        dark:border-white/10
                                        group-hover:border-[#B38B00]
                                        dark:group-hover:border-[#F5C542]/50
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <img
                                        src={item.icon1}
                                        alt=""
                                        className="
                                            w-7
                                            dark:hidden
                                        "
                                    />

                                    <img
                                        src={item.icon2}
                                        alt=""
                                        className="
                                            w-7
                                            hidden
                                            dark:block
                                        "
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                                        relative
                                        my-4
                                        font-semibold
                                        text-gray-700
                                        dark:text-white
                                        group-hover:text-[#8A6B00]
                                        dark:group-hover:text-[#F5C542]
                                        transition-colors
                                        duration-300
                                    "
                                >
                                    {item.name}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        relative
                                        text-sm
                                        leading-6
                                        text-gray-600
                                        dark:text-white/65
                                    "
                                >
                                    {item.description}
                                </p>

                                {/* Bottom accent */}
                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-1
                                        w-0
                                        bg-[#F5C542]
                                        rounded-full
                                        group-hover:w-full
                                        transition-all
                                        duration-500
                                    "
                                />
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* ==================================================
                        TOOLS
                    ================================================== */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                        }}
                    >
                        <h4
                            className="
                                my-6
                                font-Ovo
                                text-gray-700
                                dark:text-[#F5C542]
                            "
                        >
                            Tools I Use
                        </h4>

                        <ul className="flex items-center gap-3 sm:gap-5">
                            {tools.map((tool, index) => (
                                <motion.li
                                    key={tool.name}
                                    title={tool.name}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.05,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.4 + index * 0.1,
                                        duration: 0.4,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        w-12
                                        sm:w-14
                                        aspect-square
                                        border
                                        border-gray-200
                                        dark:border-white/10
                                        rounded-xl
                                        bg-white
                                        dark:bg-[#122B4A]
                                        cursor-pointer
                                        hover:border-[#B38B00]
                                        dark:hover:border-[#F5C542]/50
                                        hover:shadow-lg
                                        dark:hover:shadow-black/20
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="
                                            w-5
                                            sm:w-7
                                            object-contain
                                        "
                                    />
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}