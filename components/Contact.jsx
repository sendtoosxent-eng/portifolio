"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        const captchaDiv = document.querySelector(
            '[data-captcha="true"]'
        );

        if (!captchaDiv) return;

        if (!captchaDiv.dataset.sitekey) {
            captchaDiv.dataset.sitekey =
                "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }

        // Prevent the hCaptcha script from being loaded more than once
        if (document.getElementById("hcaptcha-script")) {
            return;
        }

        const script = document.createElement("script");

        script.id = "hcaptcha-script";
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src =
            "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";

        document.body.appendChild(script);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const hCaptcha = form.querySelector(
            'textarea[name="h-captcha-response"]'
        );

        if (!hCaptcha?.value) {
            setStatus("error");
            setResult("Please complete the CAPTCHA verification.");
            return;
        }

        setIsSending(true);
        setStatus("");
        setResult("Sending your message...");

        const formData = new FormData(form);

        // ==========================================================
        // WEB3FORMS ACCESS KEY
        // Replace the value below with your actual Web3Forms key.
        // ==========================================================
        formData.append(
            "access_key",
            "--- enter your access key here ---"
        );

        formData.append(
            "subject",
            "New Portfolio Contact Message - Oscar Musisi Nsamba"
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                console.log("Success", data);

                setStatus("success");
                setResult(
                    "Message sent successfully. Thank you for reaching out!"
                );

                form.reset();

                // hCaptcha sometimes needs a reset after submission
                if (window.hcaptcha) {
                    window.hcaptcha.reset();
                }
            } else {
                console.log("Error", data);

                setStatus("error");
                setResult(
                    data.message ||
                        "Something went wrong. Please try again."
                );
            }
        } catch (error) {
            console.error("Submission error:", error);

            setStatus("error");
            setResult(
                "Unable to send your message right now. Please try again."
            );
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            id="contact"
            className="
                relative
                w-full
                px-[7%]
                md:px-[10%]
                lg:px-[12%]
                py-20
                scroll-mt-20
                overflow-hidden
                bg-[url('/assets/footer-bg-color.png')]
                bg-no-repeat
                bg-[length:90%_auto]
                bg-center
                dark:bg-[#0B1F3A]
            "
        >
            {/* ==================================================
                SUBTLE DARK MODE BACKGROUND DETAILS
            ================================================== */}
            <div
                className="
                    absolute
                    top-20
                    left-10
                    w-40
                    h-40
                    rounded-full
                    bg-gray-100/40
                    blur-3xl
                    pointer-events-none
                    dark:bg-[#122B4A]
                    dark:opacity-40
                "
            />

            <div
                className="
                    absolute
                    bottom-10
                    right-10
                    w-52
                    h-52
                    rounded-full
                    bg-gray-100/30
                    blur-3xl
                    pointer-events-none
                    dark:bg-[#162E4D]
                    dark:opacity-40
                "
            />

            {/* ==================================================
                SECTION HEADING
            ================================================== */}
            <motion.div
                className="relative text-center"
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
                    Connect with me
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
                    Get in touch
                </h2>

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
                        max-w-2xl
                        mx-auto
                        mt-5
                        font-Ovo
                        leading-7
                        text-gray-700
                        dark:text-white/70
                    "
                >
                    Have a project in mind, need a website or business
                    system, or simply want to connect? Send me a message
                    and I&apos;ll get back to you.
                </p>
            </motion.div>

            {/* ==================================================
                CONTACT FORM
            ================================================== */}
            <motion.div
                className="
                    relative
                    max-w-3xl
                    mx-auto
                    mt-12
                "
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <form
                    onSubmit={onSubmit}
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white
                        dark:bg-[#122B4A]
                        p-6
                        sm:p-8
                        md:p-10
                        shadow-xl
                        dark:shadow-black/30
                    "
                >
                    {/* ==================================================
                        FORM TOP ACCENT
                    ================================================== */}
                    <div
                        className="
                            absolute
                            top-0
                            left-0
                            w-full
                            h-1
                            bg-[#F5C542]
                        "
                    />

                    {/* Hidden subject */}
                    <input
                        type="hidden"
                        name="subject"
                        value="New Portfolio Contact Message - Oscar Musisi Nsamba"
                    />

                    {/* ==================================================
                        NAME + EMAIL
                    ================================================== */}
                    <motion.div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-5
                            mb-5
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
                            duration: 0.5,
                        }}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="
                                    block
                                    mb-2
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                    dark:text-white
                                "
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-300
                                    dark:border-white/10
                                    bg-gray-50
                                    dark:bg-[#0B1F3A]
                                    text-gray-900
                                    dark:text-white
                                    placeholder:text-gray-400
                                    dark:placeholder:text-white/35
                                    outline-none
                                    focus:border-[#B38B00]
                                    dark:focus:border-[#F5C542]
                                    focus:ring-2
                                    focus:ring-[#F5C542]/10
                                    transition-all
                                    duration-300
                                "
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="
                                    block
                                    mb-2
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                    dark:text-white
                                "
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-300
                                    dark:border-white/10
                                    bg-gray-50
                                    dark:bg-[#0B1F3A]
                                    text-gray-900
                                    dark:text-white
                                    placeholder:text-gray-400
                                    dark:placeholder:text-white/35
                                    outline-none
                                    focus:border-[#B38B00]
                                    dark:focus:border-[#F5C542]
                                    focus:ring-2
                                    focus:ring-[#F5C542]/10
                                    transition-all
                                    duration-300
                                "
                            />
                        </div>
                    </motion.div>

                    {/* ==================================================
                        MESSAGE
                    ================================================== */}
                    <motion.div
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
                            duration: 0.5,
                        }}
                    >
                        <label
                            htmlFor="message"
                            className="
                                block
                                mb-2
                                text-sm
                                font-semibold
                                text-gray-700
                                dark:text-white
                            "
                        >
                            Your Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Tell me about your project..."
                            required
                            className="
                                w-full
                                px-4
                                py-3
                                rounded-xl
                                border
                                border-gray-300
                                dark:border-white/10
                                bg-gray-50
                                dark:bg-[#0B1F3A]
                                text-gray-900
                                dark:text-white
                                placeholder:text-gray-400
                                dark:placeholder:text-white/35
                                outline-none
                                resize-none
                                focus:border-[#B38B00]
                                dark:focus:border-[#F5C542]
                                focus:ring-2
                                focus:ring-[#F5C542]/10
                                transition-all
                                duration-300
                            "
                        />
                    </motion.div>

                    {/* ==================================================
                        HCAPTCHA
                    ================================================== */}
                    <motion.div
                        className="mt-6 mb-6"
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
                            duration: 0.5,
                        }}
                    >
                        <div
                            className="h-captcha max-w-full"
                            data-captcha="true"
                            data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        />
                    </motion.div>

                    {/* ==================================================
                        SUBMIT BUTTON
                    ================================================== */}
                    <motion.div
                        className="flex justify-center"
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
                            delay: 0.45,
                            duration: 0.5,
                        }}
                    >
                        <motion.button
                            type="submit"
                            disabled={isSending}
                            className="
                                group
                                min-w-[190px]
                                px-8
                                py-3.5
                                rounded-full
                                flex
                                items-center
                                justify-center
                                gap-3
                                bg-[#F5C542]
                                hover:bg-[#FFD95A]
                                disabled:opacity-60
                                disabled:cursor-not-allowed
                                text-[#0B1F3A]
                                font-semibold
                                shadow-lg
                                shadow-[#F5C542]/20
                                transition-all
                                duration-300
                            "
                            whileHover={
                                !isSending
                                    ? {
                                          scale: 1.04,
                                          y: -3,
                                      }
                                    : {}
                            }
                            whileTap={
                                !isSending
                                    ? {
                                          scale: 0.97,
                                      }
                                    : {}
                            }
                        >
                            {isSending ? "Sending..." : "Send Message"}

                            {!isSending && (
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
                            )}
                        </motion.button>
                    </motion.div>

                    {/* ==================================================
                        RESULT MESSAGE
                    ================================================== */}
                    {result && (
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            className={`
                                mt-5
                                text-center
                                text-sm
                                font-medium
                                ${
                                    status === "success"
                                        ? "text-green-600 dark:text-green-400"
                                        : "text-red-600 dark:text-red-400"
                                }
                            `}
                        >
                            {result}
                        </motion.p>
                    )}
                </form>
            </motion.div>

            {/* ==================================================
                BOTTOM MESSAGE
            ================================================== */}
            <motion.p
                className="
                    relative
                    text-center
                    mt-8
                    text-sm
                    text-gray-500
                    dark:text-white/45
                    font-Ovo
                "
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.5,
                    duration: 0.6,
                }}
            >
                I&apos;m always open to discussing new projects,
                opportunities and ideas.
            </motion.p>
        </section>
    );
}