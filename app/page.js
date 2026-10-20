import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import Adellah from "@/components/Adellah";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Contact />
            <Footer />
            <WhatsAppButton/>
            <CallButton />
            <Adellah />

        </>
    )
};
