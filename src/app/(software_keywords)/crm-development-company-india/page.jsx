import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Company India | Custom CRM | Zentrix Infotech",

    description:
        "Zentrix Infotech is a CRM development company in India building custom CRM software for sales, support and marketing. Automate leads, grow faster. Get a free consultation.",

    keywords: [
        "CRM development company India",
        "custom CRM development India",
        "CRM software development company",
        "CRM development services",
        "custom CRM software",
        "CRM development company near me",
        "CRM for small business India",
        "CRM integration services",
        "web-based CRM development",
        "mobile CRM app development",
        "CRM development cost India",
        "Zentrix Infotech CRM",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-company-india",
    },

    openGraph: {
        title: "CRM Development Company India | Custom CRM | Zentrix Infotech",

        description:
            "Zentrix Infotech is a CRM development company in India building custom CRM software for sales, support and marketing. Automate leads, grow faster. Get a free consultation.",

        url: "https://www.zentrixinfotech.com/crm-development-company-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Company India - Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Company India | Custom CRM | Zentrix Infotech",

        description:
            "Zentrix Infotech is a CRM development company in India building custom CRM software for sales, support and marketing. Automate leads, grow faster. Get a free consultation.",

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
