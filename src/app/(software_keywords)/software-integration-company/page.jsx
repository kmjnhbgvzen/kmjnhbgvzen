import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Integration Company in India | Zentrix Infotech",

    description:
        "Zentrix Infotech is a software integration company in India that connects your CRM, ERP, website, apps and payment tools into one smooth, automated system.",

    keywords: [
        "software integration company",
        "software integration company India",
        "software integration services",
        "system integration company India",
        "API integration services India",
        "custom software integration",
        "business software integration",
        "CRM ERP integration",
        "third-party API integration",
        "enterprise application integration",
        "cloud integration services",
        "payment gateway integration India",
        "WhatsApp API integration",
        "data migration and integration",
        "software integration company Moradabad",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-integration-company",
    },

    openGraph: {
        title: "Software Integration Company in India | Zentrix Infotech",

        description:
            "Zentrix Infotech is a software integration company in India that connects your CRM, ERP, website, apps and payment tools into one smooth, automated system.",

        url: "https://www.zentrixinfotech.com/software-integration-company",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Integration Company in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Integration Company in India | Zentrix Infotech",

        description:
            "Zentrix Infotech is a software integration company in India that connects your CRM, ERP, website, apps and payment tools into one smooth, automated system.",

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
