"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9999] bg-gradient-to-r from-[#b820e6] to-[#da7d20]"
            style={{
                scaleX,
            }}
        />
    );
}