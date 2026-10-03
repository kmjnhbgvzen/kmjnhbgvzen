import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Small Business ERP Software Development in India | Zentrix",

    description:
        "Get small business ERP software built around your workflow. Affordable custom ERP with GST billing, stock control and support from Zentrix Infotech.",

    keywords: [
        "custom ERP development for small business",
        "small business ERP software development",
        "ERP software for SMEs India",
        "custom ERP for small companies",
        "affordable ERP development India",
        "ERP with GST billing",
        "inventory and billing ERP",
        "small business ERP cost India",
        "ERP development company for small business",
        "ERP for growing business",
        "bespoke ERP small business",
        "ERP software India",
        "Zentrix Infotech ERP",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-erp-development-for-small-business",
    },

    openGraph: {
        title: "Custom ERP Development for Small Business | Zentrix",

        description:
            "Get custom ERP software built around your workflow. Affordable custom ERP with GST billing, stock control and support from Zentrix Infotech.",

        url: "https://www.zentrixinfotech.com/custom-erp-development-for-small-business",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Small Business ERP Software Development in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Small Business ERP Software Development in India | Zentrix",

        description:
            "Get small business ERP software built around your workflow. Affordable custom ERP with GST billing, stock control and support from Zentrix Infotech.",

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
