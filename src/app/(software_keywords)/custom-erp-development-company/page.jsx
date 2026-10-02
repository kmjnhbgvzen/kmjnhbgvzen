import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom ERP Development Company | Zentrix Infotech",

    description:
        "Zentrix Infotech is a custom ERP development company building tailored inventory, finance, sales and operations systems that fit how your business works.",

    keywords: [
        "custom ERP development company",
        "custom ERP software development",
        "ERP development services",
        "tailor-made ERP solutions",
        "custom ERP for small business",
        "ERP development company India",
        "ERP customization services",
        "web-based ERP development",
        "cloud ERP development",
        "ERP software for manufacturing",
        "ERP integration services",
        "custom ERP development company Moradabad",
    ],

    alternates: {
        canonical: "https://www.zentrixinfotech.com/custom-erp-development-company",
    },

    openGraph: {
        title: "Custom ERP Development Company | Zentrix Infotech",

        description:
            "Zentrix Infotech is a custom ERP development company building tailored inventory, finance, sales and operations systems that fit how your business works.",

        url: "https://www.zentrixinfotech.com/custom-erp-development-company",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom ERP Development Company | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Custom ERP Development Company | Zentrix Infotech",

        description:
            "Zentrix Infotech is a custom ERP development company building tailored inventory, finance, sales and operations systems that fit how your business works.",

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
