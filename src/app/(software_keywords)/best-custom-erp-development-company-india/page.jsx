import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Custom ERP Development Company in India | Zentrix Infotech",

    description:
        "Looking for the best custom ERP development company in India? Learn what to check, and see how Zentrix Infotech builds secure, scalable ERP. Get a free quote.",

    keywords: [
        "best custom ERP development company India",
        "top ERP development company in India",
        "custom ERP software development company",
        "ERP development company India",
        "bespoke ERP software India",
        "ERP software company Moradabad",
        "ERP development company Ghaziabad",
        "ERP development company Delhi NCR",
        "how to choose ERP development company",
        "custom ERP solutions for business",
        "cloud ERP development India",
        "ERP customization company",
        "ERP integration services India",
        "GST ready ERP software",
        "affordable custom ERP development",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-custom-erp-development-company-india",
    },

    openGraph: {
        title: "Best Custom ERP Development Company in India | Zentrix Infotech",

        description:
            "Looking for the best custom ERP development company in India? Learn what to check, and see how Zentrix Infotech builds secure, scalable ERP. Get a free quote.",

        url: "https://www.zentrixinfotech.com/best-custom-erp-development-company-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Best Custom ERP Development Company in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Best Custom ERP Development Company in India | Zentrix Infotech",

        description:
            "Looking for the best custom ERP development company in India? Learn what to check, and see how Zentrix Infotech builds secure, scalable ERP. Get a free quote.",

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
