"use client";

export default function CallButton() {
    return (
        <>
            <a
                href="tel:+256743946261"
                className="call-button"
                aria-label="Call Oscar directly"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="call-icon"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
                        fill="currentColor"
                    />
                </svg>
            </a>

            <style jsx>{`
                .call-button {
                    position: fixed;
                    bottom: 20px;
                    right: 76px;
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f5c542;
                    color: #0b1f3a;
                    border-radius: 50%;
                    text-decoration: none;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    z-index: 9999;
                    animation: callPulse 2s infinite;
                    transition:
                        background 0.3s ease,
                        transform 0.3s ease;
                }

                .call-icon {
                    width: 23px;
                    height: 23px;
                }

                .call-button:hover {
                    background: #ffd95a;
                    transform: scale(1.08);
                }

                .call-button::after {
                    content: "Call me directly";
                    position: absolute;
                    bottom: 55px;
                    right: 0;
                    background: #0b1f3a;
                    color: white;
                    padding: 8px 10px;
                    border-radius: 7px;
                    font-size: 12px;
                    font-weight: 500;
                    opacity: 0;
                    transform: translateY(10px);
                    pointer-events: none;
                    transition:
                        opacity 0.3s ease,
                        transform 0.3s ease;
                    width: 130px;
                    text-align: center;
                    white-space: nowrap;
                }

                .call-button:hover::after {
                    opacity: 1;
                    transform: translateY(0);
                }

                @keyframes callPulse {
                    0% {
                        transform: scale(1);
                    }

                    50% {
                        transform: scale(1.08);
                    }

                    100% {
                        transform: scale(1);
                    }
                }

                @media (max-width: 640px) {
                    .call-button {
                        bottom: 18px;
                        right: 72px;
                        width: 46px;
                        height: 46px;
                    }

                    .call-icon {
                        width: 24px;
                        height: 24px;
                    }
                }
            `}</style>
        </>
    );
}