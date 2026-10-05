import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "What Does a Software Integration Company Do? | Zentrix Infotech",

    description:
        "What does a software integration company do? Learn its services, process, team roles and benefits, and how Zentrix Infotech connects your business software.",

    keywords: [
        "what does a software integration company do",
        "software integration company",
        "what is software integration",
        "software integration services",
        "role of a software integration company",
        "API integration company",
        "system integration company India",
        "business software integration",
        "CRM ERP integration",
        "data migration and synchronisation",
        "workflow automation",
        "legacy system integration",
        "software integration process",
        "benefits of software integration",
        "software integration company India",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/what-does-a-software-integration-company-do",
    },

    openGraph: {
        title: "What Does a Software Integration Company Do? | Zentrix Infotech",

        description:
            "What does a software integration company do? Learn its services, process, team roles and benefits, and how Zentrix Infotech connects your business software.",

        url: "https://www.zentrixinfotech.com/what-does-a-software-integration-company-do",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "What Does a Software Integration Company Do? | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "What Does a Software Integration Company Do? | Zentrix Infotech",

        description:
            "What does a software integration company do? Learn its services, process, team roles and benefits, and how Zentrix Infotech connects your business software.",

        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },

    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function Page() {
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
