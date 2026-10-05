import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How Much Does Software Integration Cost in India? | Pricing Guide 2026",

    description:
        "Transparent software integration cost guide in India. Explore pricing by complexity, API connectors, ERP/CRM setups, hidden fees, and cost comparison with Zentrix Infotech.",

    keywords: [
        "how much does software integration cost in India",
        "software integration cost India",
        "API integration cost India",
        "system integration pricing India",
        "CRM ERP integration cost",
        "custom software integration pricing",
        "software integration cost breakdown",
        "software integration hourly rates India",
        "SaaS integration cost",
        "enterprise software integration cost",
        "software integration company India",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/how-much-does-software-integration-cost-in-india",
    },

    openGraph: {
        title: "How Much Does Software Integration Cost in India? | Pricing Guide 2026",

        description:
            "Transparent software integration cost guide in India. Explore pricing by complexity, API connectors, ERP/CRM setups, hidden fees, and cost comparison with Zentrix Infotech.",

        url: "https://www.zentrixinfotech.com/how-much-does-software-integration-cost-in-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "How Much Does Software Integration Cost in India? | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "How Much Does Software Integration Cost in India? | Pricing Guide 2026",

        description:
            "Transparent software integration cost guide in India. Explore pricing by complexity, API connectors, ERP/CRM setups, hidden fees, and cost comparison with Zentrix Infotech.",

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
