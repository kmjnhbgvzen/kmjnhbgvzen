import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How to Choose a Custom ERP Development Company | Zentrix",

    description:
        "Not sure how to choose a custom ERP development company? Learn the 12 checks, red flags and questions to ask before you hire. Zentrix Infotech guide.",

    keywords: [
        "how to choose custom ERP development company",
        "choosing an ERP development company",
        "how to select ERP software vendor",
        "best custom ERP development company",
        "ERP vendor selection checklist",
        "questions to ask ERP development company",
        "ERP development company India",
        "custom ERP software company",
        "ERP partner selection",
        "red flags ERP vendor",
        "ERP development company evaluation",
        "custom ERP development services",
        "Zentrix Infotech ERP",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/how-to-choose-custom-erp-development-company",
    },

    openGraph: {
        title: "How to Choose a Custom ERP Development Company | Zentrix",

        description:
            "Not sure how to choose a custom ERP development company? Learn the 12 checks, red flags and questions to ask before you hire. Zentrix Infotech guide.",

        url: "https://www.zentrixinfotech.com/how-to-choose-custom-erp-development-company",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "How to Choose a Custom ERP Development Company | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "How to Choose a Custom ERP Development Company | Zentrix",

        description:
            "Not sure how to choose a custom ERP development company? Learn the 12 checks, red flags and questions to ask before you hire. Zentrix Infotech guide.",

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
