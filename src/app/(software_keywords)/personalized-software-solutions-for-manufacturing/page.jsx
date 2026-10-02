import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Personalized Software Solutions for Manufacturing | Zentrix",
    description:
        "Zentrix Infotech builds personalized software for manufacturers: production tracking, inventory, quality, dispatch and dashboards tailored to your plant.",
    keywords: [
        "personalized software solutions for manufacturing",
        "custom software for manufacturing companies",
        "manufacturing software development India",
        "production management software",
        "inventory management software for manufacturers",
        "manufacturing ERP customization",
        "factory management software",
        "quality control software development",
        "supply chain software for manufacturers",
        "manufacturing software company Moradabad",
        "custom MES software",
        "software for small manufacturing business",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/personalized-software-solutions-for-manufacturing",
    },
    openGraph: {
        title: "Personalized Software Solutions for Manufacturing | Zentrix",
        description:
            "Zentrix Infotech builds personalized software for manufacturers: production tracking, inventory, quality, dispatch and dashboards tailored to your plant.",
        url: "https://www.zentrixinfotech.com/personalized-software-solutions-for-manufacturing",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Personalized Software Solutions for Manufacturing - Zentrix",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Personalized Software Solutions for Manufacturing | Zentrix",
        description:
            "Zentrix Infotech builds personalized software for manufacturers: production tracking, inventory, quality, dispatch and dashboards tailored to your plant.",
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
