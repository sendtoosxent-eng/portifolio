import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});

const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Oscar Musisi Nsamba | Software Engineer",
    description:
        "Oscar Musisi Nsamba is a Computer Science graduate and Software Engineer specializing in PHP, Laravel, WordPress and full-stack web development. He builds business systems, websites and practical digital solutions.",
    keywords: [
        "Oscar Musisi Nsamba",
        "Oscar Nsamba",
        "Osxent",
        "Software Engineer",
        "PHP Developer",
        "Laravel Developer",
        "WordPress Developer",
        "Full Stack Developer",
        "Web Developer",
        "Uganda Software Developer",
    ],
    authors: [
        {
            name: "Oscar Musisi Nsamba",
        },
    ],
    creator: "Oscar Musisi Nsamba",
    publisher: "Oscar Musisi Nsamba",

    openGraph: {
        title: "Oscar Musisi Nsamba | Software Engineer",
        description:
            "Software Engineer specializing in PHP, Laravel, WordPress and full-stack development.",
        type: "website",
        locale: "en_US",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`
                    ${outfit.variable}
                    ${ovo.variable}
                    font-Outfit
                    leading-8
                    bg-white
                    text-gray-900
                    dark:bg-[#0B1F3A]
                    dark:text-white
                    transition-colors
                    duration-300
                `}
            >
                {children}
            </body>
        </html>
    );
}