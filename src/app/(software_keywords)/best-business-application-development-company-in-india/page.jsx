import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Business Application Development Company in India | Zentrix",
    description:
        "How to choose the best business application development company in India, and why businesses trust Zentrix Infotech for custom web and mobile apps.",
    keywords: [
        "best business application development company in India",
        "top business application development company India",
        "business application development services India",
        "custom business application development India",
        "business software development company India",
        "web and mobile app development company India",
        "enterprise application development India",
        "business app developers India",
        "custom software development company India",
        "application development company Moradabad",
        "business application development company near me",
        "affordable application development company India",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-business-application-development-company-in-india",
    },
    openGraph: {
        title: "Best Business Application Development Company in India | Zentrix",
        description:
            "How to choose the best business application development company in India, and why businesses trust Zentrix Infotech for custom web and mobile apps.",
        url: "https://www.zentrixinfotech.com/best-business-application-development-company-in-india",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Best Business Application Development Company in India | Zentrix",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Business Application Development Company in India | Zentrix",
        description:
            "How to choose the best business application development company in India, and why businesses trust Zentrix Infotech for custom web and mobile apps.",
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
