import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Integration Services India | Zentrix Infotech",

    description:
        "Explore software integration services from Zentrix Infotech. We connect your CRM, ERP, website, apps and payment tools with secure APIs and automated workflows.",

    keywords: [
        "software integration services",
        "software integration services India",
        "API integration services",
        "system integration services India",
        "business software integration services",
        "custom software integration",
        "third-party API integration",
        "CRM integration services",
        "ERP integration services",
        "cloud integration services",
        "payment gateway integration",
        "WhatsApp API integration services",
        "data migration and synchronisation",
        "workflow automation services",
        "legacy system integration",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-integration-services",
    },

    openGraph: {
        title: "Software Integration Services India | Zentrix Infotech",

        description:
            "Explore software integration services from Zentrix Infotech. We connect your CRM, ERP, website, apps and payment tools with secure APIs and automated workflows.",

        url: "https://www.zentrixinfotech.com/software-integration-services",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Integration Services India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Integration Services India | Zentrix Infotech",

        description:
            "Explore software integration services from Zentrix Infotech. We connect your CRM, ERP, website, apps and payment tools with secure APIs and automated workflows.",

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
