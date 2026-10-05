import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Hire CRM Development Company in India | Zentrix Infotech",

    description:
        "Looking to hire a CRM development company in India? Learn how to choose the right partner, hiring models, costs and process. Get a free consultation today.",

    keywords:
        "hire CRM development company India, CRM development company in India, hire CRM developers India, custom CRM development services, CRM software development company, hire dedicated CRM developers, CRM development outsourcing India, best CRM development company India, CRM development for small business, CRM development company Moradabad, CRM development company Ghaziabad, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/hire-crm-development-company-india",
    },

    openGraph: {
        title: "Hire CRM Development Company in India | Zentrix Infotech",

        description:
            "Looking to hire a CRM development company in India? Learn how to choose the right partner, hiring models, costs and process. Get a free consultation today.",

        url: "https://www.zentrixinfotech.com/hire-crm-development-company-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Hire CRM Development Company in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Hire CRM Development Company in India | Zentrix Infotech",

        description:
            "Looking to hire a CRM development company in India? Learn how to choose the right partner, hiring models, costs and process. Get a free consultation today.",

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
