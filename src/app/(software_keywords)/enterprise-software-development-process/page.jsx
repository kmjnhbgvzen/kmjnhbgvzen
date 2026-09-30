import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Software Development Process | Step-by-Step Guide | Zentrix Infotech",

    description:
        "Learn the enterprise software development process — from discovery and architecture planning to agile development, QA testing, deployment, and legacy modernization. Partner with Zentrix Infotech.",

    keywords:
        "enterprise software development process, enterprise software development lifecycle, enterprise application development process, software development stages, enterprise SDLC, custom software development process, agile enterprise software development, enterprise software architecture, software development workflow, enterprise IT solutions, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-software-development-process",
    },

    openGraph: {
        title: "Enterprise Software Development Process | Step-by-Step Guide | Zentrix Infotech",

        description:
            "Learn the enterprise software development process — from discovery and architecture planning to agile development, QA testing, deployment, and legacy modernization. Partner with Zentrix Infotech.",

        url: "https://www.zentrixinfotech.com/enterprise-software-development-process",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Enterprise Software Development Process | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Enterprise Software Development Process | Step-by-Step Guide | Zentrix Infotech",

        description:
            "Learn the enterprise software development process — from discovery and architecture planning to agile development, QA testing, deployment, and legacy modernization. Partner with Zentrix Infotech.",

        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },

    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function EnterpriseSoftwareDevelopmentProcessPage() {
    return (
        <main>
            <Banner />
            <Client />
            <Content />
            <WhyChooseUs />
            <LandingServices />
            <Portfolio />
            <LovedByClients />
        </main>
    );
}
