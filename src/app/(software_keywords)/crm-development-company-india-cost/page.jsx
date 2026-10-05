import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Company India Cost: 2026 Pricing Guide",

    description:
        "What does a CRM development company in India charge? Compare pricing models, company types, hidden costs and quotes. Get a free estimate from Zentrix Infotech.",

    keywords: [
        "CRM development company India cost",
        "CRM development company pricing India",
        "CRM development charges India",
        "CRM software development company cost",
        "custom CRM development price India",
        "CRM development hourly rate India",
        "CRM development company quote",
        "affordable CRM development company India",
        "CRM development cost for small business",
        "CRM development company Moradabad",
        "CRM development company Ghaziabad",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-company-india-cost",
    },

    openGraph: {
        title: "CRM Development Company India Cost: 2026 Pricing Guide",

        description:
            "What does a CRM development company in India charge? Compare pricing models, company types, hidden costs and quotes. Get a free estimate from Zentrix Infotech.",

        url: "https://www.zentrixinfotech.com/crm-development-company-india-cost",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Company India Cost: 2026 Pricing Guide",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Company India Cost: 2026 Pricing Guide",

        description:
            "What does a CRM development company in India charge? Compare pricing models, company types, hidden costs and quotes. Get a free estimate from Zentrix Infotech.",

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
