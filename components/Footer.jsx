export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="https://prebuiltui.com?utm_source=eliana">
                    <img src="/assets/logo-light.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo-dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:oscarnsamba1@gmail.com">contact@osxent.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com?iana">Osxent</a>. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/prebuiltui">GitHub</a></li>
                    <li><a target='_blank' href="linkedin.com/company/preuiltui">LinkedIn</a></li>
                    <li><a target='_blank' href="https://x.com/prebui">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}