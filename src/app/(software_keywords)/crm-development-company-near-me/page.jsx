import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Company Near Me | Zentrix Infotech",

    description:
        "Searching for a CRM development company near you? Zentrix Infotech builds custom CRM software from Moradabad and Ghaziabad, serving businesses across India. Book a free consultation.",

    keywords: [
        "CRM development company near me",
        "CRM software company near me",
        "CRM development company Moradabad",
        "CRM development company Ghaziabad",
        "CRM development company Delhi NCR",
        "local CRM development company",
        "custom CRM developers near me",
        "CRM software development near me",
        "CRM company in Uttar Pradesh",
        "hire CRM developers India",
        "Zentrix Infotech CRM",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-company-near-me",
    },

    openGraph: {
        title: "CRM Development Company Near Me | Zentrix Infotech",

        description:
            "Searching for a CRM development company near you? Zentrix Infotech builds custom CRM software from Moradabad and Ghaziabad, serving businesses across India. Book a free consultation.",

        url: "https://www.zentrixinfotech.com/crm-development-company-near-me",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Company Near Me | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Company Near Me | Zentrix Infotech",

        description:
            "Searching for a CRM development company near you? Zentrix Infotech builds custom CRM software from Moradabad and Ghaziabad, serving businesses across India. Book a free consultation.",

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
