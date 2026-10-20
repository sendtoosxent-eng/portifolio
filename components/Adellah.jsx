"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const knowledge = [
    { q: "Who is Osxent?", a: "Osxent Musisi is a full-stack developer and digital creative based in Kampala, Uganda. He builds practical websites, business systems and polished digital products." },
    { q: "Where is Osxent based?", a: "Osxent is based in Kampala, Uganda and works with clients and teams wherever they are." },
    { q: "What does Osxent do?", a: "He designs and develops responsive websites, full-stack web applications, school systems, business tools, dashboards and product experiences." },
    { q: "What services are available?", a: "Services include web development, UI and UX design, full-stack applications, business systems, school platforms, maintenance and technical consulting." },
    { q: "Can Osxent build a website for my business?", a: "Yes. He can plan, design, develop and launch a professional website tailored to your brand, audience and goals." },
    { q: "Can Osxent build a custom web app?", a: "Yes. Custom web applications can include authentication, dashboards, workflows, reports, payments, inventory, messaging and role-based access." },
    { q: "Does Osxent work on school management systems?", a: "Yes. Edlink is a school management platform built for students, teachers, parents, academics, fees, attendance and daily school operations." },
    { q: "What technologies does Osxent use?", a: "His work includes Laravel, PHP, MySQL, Livewire, C#, .NET, ASP.NET MVC, JavaScript, React, Next.js, responsive CSS and Vercel." },
    { q: "Can I see Osxent's projects?", a: "Yes. Scroll to Featured Projects to explore live websites and software systems, including Edlink, Ripple, Galaxy Procurement and the school and church platforms." },
    { q: "What is Ripple?", a: "Ripple is a clean, mobile-first messaging application with voice notes, photos, groups and dark mode." },
    { q: "What is Galaxy Procurement?", a: "Galaxy Procurement is a requisition and procurement management workspace for Galaxy International School." },
    { q: "What is Adellah?", a: "I am Adellah, Osxent's quick virtual assistant. I help visitors learn about his work, services and projects in real time." },
    { q: "How can I contact Osxent?", a: "You can use the contact section, WhatsApp button or call button on this page. Share what you want to build and Osxent can take it from there." },
    { q: "Is Osxent available for freelance work?", a: "Yes. He is available for selected projects, especially websites, business tools and thoughtfully built digital products." },
    { q: "Does Osxent offer maintenance?", a: "Yes. Existing websites and applications can be improved, maintained, debugged, secured and extended with new features." },
    { q: "Can Osxent improve an existing website?", a: "Yes. He can refresh the design, improve mobile responsiveness, fix bugs, speed up the experience and make the content clearer." },
    { q: "How long does a project take?", a: "Timelines depend on the scope. A focused website can move quickly, while a custom platform needs planning, development, testing and launch time." },
    { q: "What should I include in a project brief?", a: "Tell Osxent what you want to build, who it is for, the key features, your preferred timeline and any examples you like." },
    { q: "Does Osxent work with teams?", a: "Yes. He can work independently or collaborate with founders, designers, developers, schools, businesses and organizations." },
    { q: "What makes Osxent's work different?", a: "He combines thoughtful interface design with practical engineering, so the finished product is clear to use, responsive and built around real needs." },
];

function RobotIcon() {
    return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="adellah-robot-icon">
            <path d="M32 7v7M26 7h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <rect x="11" y="15" width="42" height="34" rx="12" fill="currentColor" />
            <rect x="17" y="22" width="30" height="20" rx="7" fill="#0B1F3A" />
            <circle cx="25" cy="32" r="3" fill="#F5C542" />
            <circle cx="39" cy="32" r="3" fill="#F5C542" />
            <path d="M25 37h14" stroke="#F5C542" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M11 29H6m52 0h-5M22 52h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export default function Adellah() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [answer, setAnswer] = useState(knowledge[0]);
    const [showIntro, setShowIntro] = useState(true);
    const [position, setPosition] = useState({ right: 24, bottom: 105 });
    const [dragging, setDragging] = useState(false);
    const dragState = useRef(null);
    const moved = useRef(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 9000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (open || dragging) return undefined;

        const wander = () => {
            const maxRight = Math.max(24, window.innerWidth - 95);
            const maxBottom = Math.max(105, window.innerHeight - 95);
            setPosition({
                right: Math.round(24 + Math.random() * (maxRight - 24)),
                bottom: Math.round(105 + Math.random() * (maxBottom - 105)),
            });
        };

        const timer = setInterval(wander, 4500);
        return () => clearInterval(timer);
    }, [open, dragging]);

    useEffect(() => {
        const moveRobot = (event) => {
            if (!dragState.current) return;
            const { startX, startY, right, bottom } = dragState.current;
            const nextRight = Math.min(Math.max(12, right - (event.clientX - startX)), window.innerWidth - 78);
            const nextBottom = Math.min(Math.max(85, bottom - (event.clientY - startY)), window.innerHeight - 78);
            if (Math.abs(event.clientX - startX) > 4 || Math.abs(event.clientY - startY) > 4) moved.current = true;
            setPosition({ right: nextRight, bottom: nextBottom });
        };
        const stopDragging = () => {
            dragState.current = null;
            setDragging(false);
        };
        window.addEventListener("pointermove", moveRobot);
        window.addEventListener("pointerup", stopDragging);
        return () => {
            window.removeEventListener("pointermove", moveRobot);
            window.removeEventListener("pointerup", stopDragging);
        };
    }, []);

    const startDragging = (event) => {
        event.preventDefault();
        moved.current = false;
        dragState.current = { startX: event.clientX, startY: event.clientY, right: position.right, bottom: position.bottom };
        setDragging(true);
    };

    const toggleAssistant = () => {
        if (moved.current) {
            moved.current = false;
            return;
        }
        setOpen(!open);
        setShowIntro(false);
    };

    const filteredQuestions = useMemo(() => {
        const clean = query.trim().toLowerCase();
        if (!clean) return knowledge.slice(0, 6);
        return knowledge.filter((item) => item.q.toLowerCase().includes(clean));
    }, [query]);

    const chooseQuestion = (item) => {
        setAnswer(item);
        setQuery("");
        setOpen(true);
    };

    return (
        <div className="adellah-widget" aria-live="polite">
            {showIntro && !open && (
                <button className="adellah-intro" style={{ right: position.right, bottom: position.bottom + 78 }} onClick={() => { setOpen(true); setShowIntro(false); }}>
                    <strong>Hi, I&apos;m Adellah</strong>
                    <span>What would you like to know about Osxent?</span>
                </button>
            )}

            {open && (
                <div className="adellah-panel" style={{ right: position.right, bottom: position.bottom + 78 }}>
                    <div className="adellah-panel-head">
                        <div className="adellah-title"><span className="adellah-mini-icon"><RobotIcon /></span><span><strong>Adellah</strong><small>Osxent&apos;s virtual assistant · online</small></span></div>
                        <button className="adellah-close" onClick={() => setOpen(false)} aria-label="Close Adellah">×</button>
                    </div>
                    <div className="adellah-answer"><span className="adellah-answer-label">Adellah</span><p>{answer.a}</p></div>
                    <div className="adellah-actions">
                        <a href="https://wa.me/256743946261?text=Hi%20Osxent!%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer"><span>◌</span> Chat on WhatsApp</a>
                        <a href="tel:+256743946261"><span>⌕</span> Call Osxent</a>
                    </div>
                    <label className="adellah-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a question..." aria-label="Search Adellah questions" /></label>
                    <div className="adellah-questions">
                        {(filteredQuestions.length ? filteredQuestions : knowledge.slice(0, 5)).map((item) => <button key={item.q} onClick={() => chooseQuestion(item)}>{item.q}<span>↗</span></button>)}
                    </div>
                    <p className="adellah-hint">Choose a question or type a keyword to explore.</p>
                </div>
            )}

            <button className={`adellah-orbit ${open ? "is-open" : ""} ${dragging ? "is-dragging" : ""}`} style={{ right: position.right, bottom: position.bottom }} onPointerDown={startDragging} onClick={toggleAssistant} aria-label="Press and hold to move Adellah, or click to ask a question">
                <span className="adellah-speech">Ask me</span><span className="adellah-robot"><RobotIcon /></span>
            </button>

            <style jsx>{`
                .adellah-widget { position: static; z-index: 10000; font-family: Arial, sans-serif; }
                .adellah-orbit { position: fixed; z-index: 10001; border: 0; background: transparent; cursor: grab; touch-action: none; transition: right 1.4s ease, bottom 1.4s ease; }
                .adellah-orbit.is-dragging { cursor: grabbing; transition: none; }
                .adellah-robot { display: grid; place-items: center; width: 66px; height: 66px; color: #0B1F3A; background: #F5C542; border: 4px solid white; border-radius: 50%; box-shadow: 0 12px 30px rgba(11,31,58,.24); animation: adellahBob 1.7s ease-in-out infinite; }
                .adellah-robot-icon { width: 43px; height: 43px; }
                .adellah-speech { position: absolute; right: 58px; top: -15px; padding: 7px 10px; color: white; background: #0B1F3A; border-radius: 9px 9px 2px 9px; font-size: 10px; font-weight: 700; white-space: nowrap; }
                .adellah-intro { position: absolute; right: 0; bottom: 82px; width: 220px; padding: 14px 16px; display: grid; gap: 5px; text-align: left; border: 1px solid #e5e7eb; border-radius: 16px 16px 3px 16px; color: #0B1F3A; background: white; box-shadow: 0 16px 40px rgba(11,31,58,.16); cursor: pointer; animation: adellahAppear .6s ease both; }
                .adellah-intro strong { font-size: 13px; } .adellah-intro span { color: #667085; font-size: 12px; line-height: 1.4; }
                .adellah-panel { position: absolute; right: 0; bottom: 82px; width: min(360px, calc(100vw - 32px)); overflow: hidden; border: 1px solid rgba(11,31,58,.12); border-radius: 20px; background: white; box-shadow: 0 20px 60px rgba(11,31,58,.24); animation: adellahAppear .35s ease both; }
                .adellah-panel-head { display: flex; align-items: center; justify-content: space-between; padding: 15px 16px; color: white; background: #0B1F3A; }
                .adellah-title { display: flex; align-items: center; gap: 9px; } .adellah-title strong,.adellah-title small { display: block; } .adellah-title strong { font-size: 14px; } .adellah-title small { margin-top: 3px; color: #b8c2d4; font-size: 10px; }
                .adellah-mini-icon { display: grid; place-items: center; width: 32px; height: 32px; color: #0B1F3A; background: #F5C542; border-radius: 50%; } .adellah-mini-icon .adellah-robot-icon { width: 24px; height: 24px; }
                .adellah-close { border: 0; color: white; background: transparent; font-size: 24px; line-height: 1; cursor: pointer; }
                .adellah-answer { margin: 14px 14px 10px; padding: 12px; color: #344054; background: #f4f7fb; border-radius: 12px; font-size: 13px; line-height: 1.55; } .adellah-answer p { margin: 4px 0 0; } .adellah-answer-label { color: #0B1F3A; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
                .adellah-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin: 0 14px 10px; } .adellah-actions a { display: flex; align-items: center; justify-content: center; gap: 5px; min-height: 34px; border-radius: 8px; color: #0B1F3A; background: #F5C542; font-size: 11px; font-weight: 700; text-decoration: none; } .adellah-actions a:last-child { color: white; background: #0B1F3A; } .adellah-actions span { font-size: 15px; }
                .adellah-search { display: flex; align-items: center; gap: 7px; margin: 0 14px 10px; padding: 9px 11px; border: 1px solid #dfe4ec; border-radius: 9px; color: #667085; } .adellah-search input { width: 100%; border: 0; outline: 0; color: #344054; font: inherit; font-size: 12px; }
                .adellah-questions { display: grid; gap: 6px; max-height: 220px; overflow-y: auto; padding: 0 14px; } .adellah-questions button { display: flex; justify-content: space-between; gap: 12px; padding: 9px 10px; border: 1px solid #e6eaf0; border-radius: 8px; color: #344054; background: white; text-align: left; font-size: 11px; cursor: pointer; } .adellah-questions button:hover { border-color: #F5C542; background: #fffdf3; } .adellah-questions button span { color: #0B1F3A; font-size: 15px; }
                .adellah-hint { margin: 12px 14px 14px; color: #98a2b3; font-size: 10px; }
                @keyframes adellahBob { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-8px) rotate(2deg); } } @keyframes adellahAppear { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
                @media (max-width: 560px) { .adellah-widget { right: 15px; bottom: 15px; } .adellah-panel { bottom: 78px; } }
                @media (prefers-reduced-motion: reduce) { .adellah-orbit,.adellah-robot { animation: none; transition: none; } }
            `}</style>
        </div>
    );
}
