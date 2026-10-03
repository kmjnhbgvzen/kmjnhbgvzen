import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "ERP Development Company Near Me | Zentrix Infotech",

    description:
        "Looking for an ERP development company near you? Zentrix Infotech builds custom ERP software from Moradabad and Ghaziabad. Get a free consultation.",

    keywords: [
        "ERP development company near me",
        "ERP software company near me",
        "custom ERP development near me",
        "ERP developers near me",
        "best ERP company near me",
        "ERP development company in Moradabad",
        "ERP development company in Ghaziabad",
        "ERP software development Delhi NCR",
        "local ERP development company",
        "custom ERP software company India",
        "ERP solution provider near me",
        "ERP development services",
        "Zentrix Infotech ERP",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/erp-development-company-near-me",
    },

    openGraph: {
        title: "ERP Development Company Near Me | Zentrix Infotech",

        description:
            "Looking for an ERP development company near you? Zentrix Infotech builds custom ERP software from Moradabad and Ghaziabad. Get a free consultation.",

        url: "https://www.zentrixinfotech.com/erp-development-company-near-me",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "ERP Development Company Near Me | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "ERP Development Company Near Me | Zentrix Infotech",

        description:
            "Looking for an ERP development company near you? Zentrix Infotech builds custom ERP software from Moradabad and Ghaziabad. Get a free consultation.",

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
