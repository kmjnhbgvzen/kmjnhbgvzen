import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Integration Company Quotes: How to Compare | Zentrix Infotech",

    description:
        "Getting software integration company quotes? Learn how to request, read and compare them, spot red flags and get a clear scope-based quote from Zentrix Infotech.",

    keywords: [
        "software integration company quotes",
        "software integration quotation",
        "software integration company quote India",
        "get software integration quote",
        "compare software integration quotes",
        "software integration proposal",
        "API integration quote",
        "ERP integration quotation",
        "CRM integration quote",
        "system integration quotation India",
        "how to read a software integration quote",
        "software integration pricing proposal",
        "request for quotation software integration",
        "scope-based quotation",
        "software integration company India",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-integration-company-quotes",
    },

    openGraph: {
        title: "Software Integration Company Quotes: How to Compare | Zentrix Infotech",

        description:
            "Getting software integration company quotes? Learn how to request, read and compare them, spot red flags and get a clear scope-based quote from Zentrix Infotech.",

        url: "https://www.zentrixinfotech.com/software-integration-company-quotes",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Integration Company Quotes: How to Compare | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Integration Company Quotes: How to Compare | Zentrix Infotech",

        description:
            "Getting software integration company quotes? Learn how to request, read and compare them, spot red flags and get a clear scope-based quote from Zentrix Infotech.",

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
