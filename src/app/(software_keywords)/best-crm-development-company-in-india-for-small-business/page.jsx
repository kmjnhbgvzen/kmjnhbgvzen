import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best CRM Development Company in India for Small Business",

    description:
        "Looking for the best CRM development company in India for small business? See what to look for, typical features and phased options. Zentrix Infotech offers a free consultation.",

    keywords: [
        "best CRM development company in India for small business",
        "CRM for small business India",
        "affordable CRM development company",
        "custom CRM for small business",
        "small business CRM software India",
        "CRM development for startups",
        "low cost CRM development India",
        "simple CRM for small business",
        "CRM development company for SMEs",
        "small business CRM developers",
        "Zentrix Infotech CRM",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-crm-development-company-in-india-for-small-business",
    },

    openGraph: {
        title: "Best CRM Development Company in India for Small Business",

        description:
            "Looking for the best CRM development company in India for small business? See what to look for, typical features and phased options. Zentrix Infotech offers a free consultation.",

        url: "https://www.zentrixinfotech.com/best-crm-development-company-in-india-for-small-business",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Best CRM Development Company in India for Small Business | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Best CRM Development Company in India for Small Business",

        description:
            "Looking for the best CRM development company in India for small business? See what to look for, typical features and phased options. Zentrix Infotech offers a free consultation.",

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
