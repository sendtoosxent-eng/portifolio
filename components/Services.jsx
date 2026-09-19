"use client";

import { motion } from "motion/react";

export default function Services() {
    const services = [
        {
            name: "Full-Stack Web Development",
            icon: "/assets/web-icon.png",
            description:
                "I build responsive, database-driven web applications with modern frontend interfaces and reliable backend systems.",
            link: "#work",
        },
        {
            name: "PHP & Laravel Development",
            icon: "/assets/code-icon.png",
            description:
                "I develop secure and maintainable PHP and Laravel applications, including authentication, APIs, business logic and database-driven systems.",
            link: "#work",
        },
        {
            name: "WordPress Development",
            icon: "/assets/web-icon.png",
            description:
                "I build and customize WordPress websites, plugins and integrations to create practical and scalable web solutions.",
            link: "#work",
        },
        {
            name: "Business Systems & APIs",
            icon: "/assets/project-icon.png",
            description:
                "I develop software solutions for real business needs, including school management, finance, POS, inventory and other operational systems.",
            link: "#work",
        },
    ];

    return (
        <section
            id="services"
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
                    transition={{
                        duration: 0.5,
                    }}
                >
                    What I Offer
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
                    My Services
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
                    I build practical digital solutions for businesses
                    and organizations, from responsive websites to
                    full-stack applications and database-driven
                    management systems. My approach focuses on clean
                    development, usability, maintainability and
                    real-world business requirements.
                </p>
            </motion.div>

            {/* ==================================================
                SERVICES GRID
            ================================================== */}
            <motion.div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-5
                    mt-12
                "
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.12,
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
                {services.map((service, index) => (
                    <motion.article
                        key={service.name}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 50,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.65,
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
                            h-full
                            flex
                            flex-col
                            overflow-hidden
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white
                            dark:bg-[#122B4A]
                            px-7
                            py-8
                            cursor-pointer
                            transition-all
                            duration-500
                            hover:border-[#B38B00]
                            dark:hover:border-[#F5C542]/60
                            hover:shadow-xl
                            dark:hover:shadow-black/30
                        "
                    >
                        {/* ==================================================
                            HOVER DETAIL
                        ================================================== */}
                        <div
                            className="
                                absolute
                                -top-16
                                -right-16
                                w-36
                                h-36
                                rounded-full
                                bg-gray-100
                                dark:bg-[#162E4D]
                                opacity-0
                                group-hover:opacity-70
                                blur-3xl
                                transition-opacity
                                duration-500
                                pointer-events-none
                            "
                        />

                        {/* ==================================================
                            NUMBER
                        ================================================== */}
                        <span
                            className="
                                absolute
                                top-5
                                right-6
                                text-xs
                                font-semibold
                                text-gray-300
                                dark:text-white/20
                                group-hover:text-[#B38B00]
                                dark:group-hover:text-[#F5C542]
                                transition-colors
                                duration-300
                            "
                        >
                            0{index + 1}
                        </span>

                        {/* ==================================================
                            ICON
                        ================================================== */}
                        <motion.div
                            className="
                                relative
                                w-14
                                h-14
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                bg-gray-100
                                dark:bg-[#0B1F3A]
                                border
                                border-gray-200
                                dark:border-white/10
                                group-hover:border-[#B38B00]
                                dark:group-hover:border-[#F5C542]/60
                                transition-all
                                duration-300
                            "
                            whileHover={{
                                scale: 1.08,
                                rotate: 3,
                            }}
                        >
                            <img
                                src={service.icon}
                                alt=""
                                className="
                                    w-9
                                    h-9
                                    object-contain
                                    dark:brightness-0
                                    dark:invert
                                "
                            />
                        </motion.div>

                        {/* ==================================================
                            TITLE
                        ================================================== */}
                        <h3
                            className="
                                relative
                                text-lg
                                font-semibold
                                mt-5
                                mb-4
                                text-gray-800
                                dark:text-white
                                group-hover:text-[#8A6B00]
                                dark:group-hover:text-[#F5C542]
                                transition-colors
                                duration-300
                            "
                        >
                            {service.name}
                        </h3>

                        {/* ==================================================
                            DESCRIPTION
                        ================================================== */}
                        <p
                            className="
                                relative
                                text-sm
                                leading-6
                                text-gray-600
                                dark:text-white/65
                            "
                        >
                            {service.description}
                        </p>

                        {/* ==================================================
                            PROJECT LINK
                        ================================================== */}
                        <a
                            href={service.link}
                            className="
                                relative
                                inline-flex
                                items-center
                                gap-2
                                mt-auto
                                pt-7
                                text-sm
                                font-semibold
                                text-[#8A6B00]
                                dark:text-[#F5C542]
                            "
                        >
                            <span>View projects</span>

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
                        </a>

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
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}