import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Services India | Custom CRM | Zentrix Infotech",

    description:
        "Explore CRM development services in India: custom CRM, integration, mobile apps, migration and support. Zentrix Infotech builds CRMs that fit your business. Get a free quote.",

    keywords: [
        "CRM development services India",
        "custom CRM development services",
        "CRM software development services",
        "CRM integration services India",
        "CRM customization services",
        "CRM migration services",
        "mobile CRM app development",
        "web-based CRM development India",
        "CRM support and maintenance",
        "CRM consulting services",
        "CRM for small business India",
        "Zentrix Infotech CRM services",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-services-india",
    },

    openGraph: {
        title: "CRM Development Services India | Custom CRM | Zentrix Infotech",

        description:
            "Explore CRM development services in India: custom CRM, integration, mobile apps, migration and support. Zentrix Infotech builds CRMs that fit your business. Get a free quote.",

        url: "https://www.zentrixinfotech.com/crm-development-services-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Services India - Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Services India | Custom CRM | Zentrix Infotech",

        description:
            "Explore CRM development services in India: custom CRM, integration, mobile apps, migration and support. Zentrix Infotech builds CRMs that fit your business. Get a free quote.",

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
