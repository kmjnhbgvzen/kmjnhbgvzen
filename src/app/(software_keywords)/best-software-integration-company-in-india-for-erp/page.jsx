import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Software Integration Company in India for ERP | Zentrix Infotech",

    description:
        "Looking for the best software integration company in India for ERP? Learn how to choose one, and see how Zentrix Infotech connects ERP with CRM, web and payments.",

    keywords: [
        "best software integration company in India for ERP",
        "ERP integration company India",
        "ERP integration services India",
        "ERP software integration India",
        "ERP CRM integration",
        "ERP API integration",
        "ERP e-commerce integration",
        "ERP payment gateway integration",
        "ERP accounting integration",
        "ERP data migration India",
        "custom ERP integration",
        "ERP mobile app integration",
        "legacy ERP integration",
        "ERP integration cost India",
        "ERP integration company Moradabad",
        "ERP integration company Ghaziabad",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-software-integration-company-in-india-for-erp",
    },

    openGraph: {
        title: "Best Software Integration Company in India for ERP | Zentrix Infotech",

        description:
            "Looking for the best software integration company in India for ERP? Learn how to choose one, and see how Zentrix Infotech connects ERP with CRM, web and payments.",

        url: "https://www.zentrixinfotech.com/best-software-integration-company-in-india-for-erp",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Best Software Integration Company in India for ERP | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Best Software Integration Company in India for ERP | Zentrix Infotech",

        description:
            "Looking for the best software integration company in India for ERP? Learn how to choose one, and see how Zentrix Infotech connects ERP with CRM, web and payments.",

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
