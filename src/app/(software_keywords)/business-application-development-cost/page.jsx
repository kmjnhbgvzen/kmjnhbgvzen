import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Application Development Cost | Zentrix Infotech",
    description:
        "What does business application development cost? Learn the factors that affect price, pricing models and ways to save, with Zentrix Infotech.",
    keywords: [
        "business application development cost",
        "cost of business application development",
        "custom business application cost India",
        "how much does it cost to build a business app",
        "business software development cost",
        "web application development cost",
        "mobile app development cost for business",
        "custom software pricing models",
        "business app development pricing India",
        "factors affecting application development cost",
        "affordable business application development",
        "business application development company Moradabad",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-application-development-cost",
    },
    openGraph: {
        title: "Business Application Development Cost | Zentrix Infotech",
        description:
            "What does business application development cost? Learn the factors that affect price, pricing models and ways to save, with Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/business-application-development-cost",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Business Application Development Cost | Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Business Application Development Cost | Zentrix Infotech",
        description:
            "What does business application development cost? Learn the factors that affect price, pricing models and ways to save, with Zentrix Infotech.",
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
