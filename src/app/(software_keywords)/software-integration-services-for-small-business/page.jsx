import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Integration Services for Small Business | Zentrix Infotech",

    description:
        "Affordable software integration services for small business in India. Zentrix Infotech connects your CRM, website, billing, payments and WhatsApp to save time.",

    keywords: [
        "software integration services for small business",
        "small business software integration India",
        "affordable software integration services",
        "business app integration for small business",
        "CRM integration for small business",
        "payment gateway integration small business",
        "WhatsApp integration for small business",
        "e-commerce integration small business",
        "accounting software integration",
        "workflow automation for small business",
        "API integration for small business",
        "small business automation India",
        "data migration for small business",
        "software integration company for small business",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-integration-services-for-small-business",
    },

    openGraph: {
        title: "Software Integration Services for Small Business | Zentrix Infotech",

        description:
            "Affordable software integration services for small business in India. Zentrix Infotech connects your CRM, website, billing, payments and WhatsApp to save time.",

        url: "https://www.zentrixinfotech.com/software-integration-services-for-small-business",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Integration Services for Small Business | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Integration Services for Small Business | Zentrix Infotech",

        description:
            "Affordable software integration services for small business in India. Zentrix Infotech connects your CRM, website, billing, payments and WhatsApp to save time.",

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
