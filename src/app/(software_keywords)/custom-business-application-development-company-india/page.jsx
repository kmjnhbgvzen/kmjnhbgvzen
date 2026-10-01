import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom Business Application Development India | Zentrix",
    description:
        "Zentrix Infotech is a custom business application development company in India building web, mobile and cloud apps for startups and enterprises. Get a free quote.",
    keywords: [
        "custom business application development company India",
        "custom application development India",
        "custom business software development India",
        "bespoke business application development",
        "custom web application development company",
        "enterprise application development India",
        "custom software development company in India",
        "business app development services India",
        "custom mobile app development India",
        "how to choose a custom application development company",
        "custom business application development cost India",
        "custom business software vs off-the-shelf",
        "affordable custom software development company India",
        "custom ERP and CRM development India",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-business-application-development-company-india",
    },
    openGraph: {
        title: "Custom Business Application Development India | Zentrix",
        description:
            "Zentrix Infotech is a custom business application development company in India building web, mobile and cloud apps for startups and enterprises. Get a free quote.",
        url: "https://www.zentrixinfotech.com/custom-business-application-development-company-india",
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
        title: "Custom Business Application Development India | Zentrix",
        description:
            "Zentrix Infotech is a custom business application development company in India building web, mobile and cloud apps for startups and enterprises. Get a free quote.",
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
