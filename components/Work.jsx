"use client";

import { motion } from "motion/react";

export default function Work() {
    const work = [
        {
            name: "Edlink",
            icon: "/assets/work-1.png",
            description: "School Management System",
            details:
                "A full-stack school management platform for managing students, teachers, parents, academics, fees, attendance and school operations.",
            technologies: ["Laravel", "PHP", "MySQL", "Livewire"],
            link: "https://edlink.space",
            linkText: "View Live Project",
        },
        {
            name: "XPOS",
            icon: "/assets/work-2.png",
            description: "Point of Sale & Inventory System",
            details:
                "A business management and point-of-sale system designed to handle sales, inventory and day-to-day business operations.",
            technologies: ["C#", ".NET", "ASP.NET MVC", "SQL"],
            link: "https://github.com/sendtoosxent-eng/xpos",
            linkText: "View Source Code",
        },
        {
            name: "Entebbe Associates",
            icon: "/assets/work-3.png",
            description: "Law Firm Website",
            details:
                "A professional business website developed to establish a modern online presence for a law firm and present its services and information.",
            technologies: [
                "Laravel",
                "PHP",
                "JavaScript",
                "Responsive Web",
            ],
            link: "https://entebbeassociates.com",
            linkText: "Visit Website",
        },
        {
            name: "Aureus Africa",
            icon: "/assets/work-4.png",
            description: "Gold Business Website",
            details:
                "A modern business website developed for a gold-focused company, with emphasis on product presentation, business information and online visibility.",
            technologies: [
                "Laravel",
                "PHP",
                "JavaScript",
                "Responsive Web",
            ],
            link: "https://aureusafrica.online",
            linkText: "Visit Website",
        },
    ];

    return (
        <section
            id="work"
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
                    My Portfolio
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
                    Featured Projects
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

                <p
                    className="
                        text-center
                        max-w-3xl
                        mx-auto
                        mt-5
                        font-Ovo
                        leading-7
                        text-gray-700
                        dark:text-white/70
                    "
                >
                    A selection of software systems and websites I have
                    designed, developed and deployed. These projects
                    demonstrate my experience building practical solutions
                    for real-world business and organizational needs.
                </p>
            </motion.div>

            {/* ==================================================
                PROJECT GRID
            ================================================== */}
            <motion.div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-6
                    mt-12
                "
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {work.map((project, index) => (
                    <motion.a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 60,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        whileHover={{
                            y: -8,
                        }}
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white
                            dark:bg-[#122B4A]
                            shadow-sm
                            hover:shadow-xl
                            dark:hover:shadow-black/40
                            transition-all
                            duration-500
                        "
                    >
                        {/* ==================================================
                            PROJECT IMAGE
                        ================================================== */}
                        <div
                            className="
                                relative
                                w-full
                                aspect-[16/10]
                                overflow-hidden
                                bg-gray-100
                                dark:bg-[#162E4D]
                            "
                        >
                            <motion.img
                                src={project.icon}
                                alt={`${project.name} project`}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                                whileHover={{
                                    scale: 1.06,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                            />

                            {/* Dark image overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    group-hover:bg-black/25
                                    transition-all
                                    duration-500
                                "
                            />

                            {/* ==================================================
                                PROJECT NUMBER
                            ================================================== */}
                            <div
                                className="
                                    absolute
                                    top-4
                                    left-4
                                    w-10
                                    h-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    bg-[#0B1F3A]/90
                                    border
                                    border-white/20
                                    text-[#F5C542]
                                    text-sm
                                    font-semibold
                                    backdrop-blur-sm
                                "
                            >
                                0{index + 1}
                            </div>

                            {/* ==================================================
                                OPEN PROJECT INDICATOR
                            ================================================== */}
                            <motion.div
                                className="
                                    absolute
                                    top-4
                                    right-4
                                    w-10
                                    h-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    bg-[#F5C542]
                                    text-[#0B1F3A]
                                    opacity-0
                                    scale-75
                                    group-hover:opacity-100
                                    group-hover:scale-100
                                    transition-all
                                    duration-300
                                "
                            >
                                <img
                                    src="/assets/send-icon.png"
                                    alt=""
                                    className="w-5"
                                />
                            </motion.div>
                        </div>

                        {/* ==================================================
                            PROJECT INFORMATION
                        ================================================== */}
                        <div
                            className="
                                relative
                                p-6
                                sm:p-7
                            "
                        >
                            {/* Project title */}
                            <h3
                                className="
                                    text-xl
                                    font-semibold
                                    text-gray-900
                                    dark:text-white
                                    group-hover:text-[#8A6B00]
                                    dark:group-hover:text-[#F5C542]
                                    transition-colors
                                    duration-300
                                "
                            >
                                {project.name}
                            </h3>

                            {/* Project type */}
                            <p
                                className="
                                    mt-1
                                    text-sm
                                    font-medium
                                    text-[#8A6B00]
                                    dark:text-[#F5C542]
                                "
                            >
                                {project.description}
                            </p>

                            {/* Details */}
                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-6
                                    text-gray-600
                                    dark:text-white/65
                                "
                            >
                                {project.details}
                            </p>

                            {/* ==================================================
                                TECHNOLOGIES
                            ================================================== */}
                            <div
                                className="
                                    flex
                                    flex-wrap
                                    gap-2
                                    mt-5
                                "
                            >
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="
                                            px-2.5
                                            py-1
                                            rounded-full
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-gray-50
                                            dark:bg-[#0B1F3A]
                                            text-[11px]
                                            font-medium
                                            text-gray-600
                                            dark:text-white/65
                                        "
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* ==================================================
                                PROJECT LINK
                            ================================================== */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    mt-6
                                    pt-5
                                    border-t
                                    border-gray-200
                                    dark:border-white/10
                                "
                            >
                                <span
                                    className="
                                        text-sm
                                        font-semibold
                                        text-gray-800
                                        dark:text-white
                                        group-hover:text-[#8A6B00]
                                        dark:group-hover:text-[#F5C542]
                                        transition-colors
                                        duration-300
                                    "
                                >
                                    {project.linkText}
                                </span>

                                <motion.div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        border
                                        border-gray-300
                                        dark:border-white/15
                                        bg-transparent
                                        dark:bg-[#162E4D]
                                    "
                                    whileHover={{
                                        scale: 1.1,
                                        x: 3,
                                    }}
                                >
                                    <img
                                        src="/assets/right-arrow.png"
                                        alt=""
                                        className="
                                            w-4
                                            dark:invert
                                        "
                                    />
                                </motion.div>
                            </div>

                            {/* ==================================================
                                YELLOW BOTTOM ACCENT
                            ================================================== */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1
                                    w-0
                                    rounded-full
                                    bg-[#F5C542]
                                    group-hover:w-full
                                    transition-all
                                    duration-500
                                "
                            />
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* ==================================================
                WORK TOGETHER CTA
            ================================================== */}
            <motion.div
                className="
                    flex
                    justify-center
                    mt-14
                "
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
                    delay: 0.2,
                    duration: 0.6,
                }}
            >
                <motion.a
                    href="#contact"
                    className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-8
                        py-3
                        rounded-full
                        border
                        border-[#B38B00]
                        dark:border-[#F5C542]
                        text-[#8A6B00]
                        dark:text-[#F5C542]
                        font-semibold
                        hover:bg-gray-50
                        dark:hover:bg-[#162E4D]
                        transition-all
                        duration-300
                    "
                    whileHover={{
                        y: -3,
                        scale: 1.03,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                >
                    Let&apos;s Work Together

                    <motion.img
                        src="/assets/right-arrow.png"
                        alt=""
                        className="
                            w-4
                            dark:invert
                        "
                        whileHover={{
                            x: 4,
                        }}
                    />
                </motion.a>
            </motion.div>
        </section>
    );
}