import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Company India for Small Business | Zentrix Infotech",

    description:
        "Looking for a CRM development company in India for small business? Zentrix Infotech builds affordable custom CRM software that tracks leads, sales and customers.",

    keywords: [
        "CRM development company India for small business",
        "small business CRM India",
        "custom CRM development for small business",
        "affordable CRM development India",
        "CRM software development company India",
        "CRM for startups India",
        "lead management software India",
        "small business CRM software",
        "CRM development services India",
        "CRM integration with WhatsApp India",
        "sales tracking software for small business",
        "customer management software India",
        "CRM development company Moradabad",
        "CRM development company Ghaziabad",
        "Zentrix Infotech CRM",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-company-india-for-small-business",
    },

    openGraph: {
        title: "CRM Development Company India for Small Business | Zentrix Infotech",

        description:
            "Looking for a CRM development company in India for small business? Zentrix Infotech builds affordable custom CRM software that tracks leads, sales and customers.",

        url: "https://www.zentrixinfotech.com/crm-development-company-india-for-small-business",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Company India for Small Business | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Company India for Small Business | Zentrix Infotech",

        description:
            "Looking for a CRM development company in India for small business? Zentrix Infotech builds affordable custom CRM software that tracks leads, sales and customers.",

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
