import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Personalized Software Solutions Cost in India | Zentrix Infotech",
    description:
        "Wondering what personalized software solutions cost? Learn the pricing factors, typical budget ranges and ways to save, with guidance from Zentrix Infotech.",
    keywords:
        "personalized software solutions cost, custom software development cost India, personalized software pricing, cost of tailor-made software, custom web application cost, custom mobile app development cost, software development cost estimate, affordable custom software development, factors affecting software development cost, business software development cost, software development company in Moradabad, Zentrix Infotech",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/personalized-software-solutions-cost",
    },
    openGraph: {
        title: "Personalized Software Solutions Cost in India | Zentrix Infotech",
        description:
            "Wondering what personalized software solutions cost? Learn the pricing factors, typical budget ranges and ways to save, with guidance from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/personalized-software-solutions-cost",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Zentrix Infotech Logo",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Personalized Software Solutions Cost in India | Zentrix Infotech",
        description:
            "Wondering what personalized software solutions cost? Learn the pricing factors, typical budget ranges and ways to save, with guidance from Zentrix Infotech.",
        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },
    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function Page() {
    return (
        <>
            <Banner />
            <Client />
            <Content />
            <WhyChooseUs />
            <LandingServices />
            <Portfolio />
            <LovedByClients />
        </>
    );
}
