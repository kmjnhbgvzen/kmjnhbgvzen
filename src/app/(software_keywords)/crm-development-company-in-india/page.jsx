import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Company in India | Zentrix Infotech",

    description:
        "Looking for a CRM development company in India? Learn how to choose the right partner, what to check, and how Zentrix Infotech builds custom CRMs. Free consultation.",

    keywords: [
        "CRM development company in India",
        "best CRM development company India",
        "top CRM software development company",
        "custom CRM development company",
        "how to choose CRM development company",
        "CRM development company Moradabad",
        "CRM development company Ghaziabad",
        "CRM software company India",
        "CRM developers India",
        "hire CRM development company",
        "Zentrix Infotech CRM",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-company-in-india",
    },

    openGraph: {
        title: "CRM Development Company in India | Zentrix Infotech",

        description:
            "Looking for a CRM development company in India? Learn how to choose the right partner, what to check, and how Zentrix Infotech builds custom CRMs. Free consultation.",

        url: "https://www.zentrixinfotech.com/crm-development-company-in-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Company in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Company in India | Zentrix Infotech",

        description:
            "Looking for a CRM development company in India? Learn how to choose the right partner, what to check, and how Zentrix Infotech builds custom CRMs. Free consultation.",

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
