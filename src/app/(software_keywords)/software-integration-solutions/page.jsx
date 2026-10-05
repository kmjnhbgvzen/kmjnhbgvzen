import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Integration Solutions for Business | Zentrix Infotech",

    description:
        "Zentrix Infotech delivers software integration solutions that unify your CRM, ERP, website, apps and payment tools into one secure, automated business system.",

    keywords: [
        "software integration solutions",
        "business software integration solutions",
        "enterprise integration solutions",
        "custom software integration solutions",
        "API integration solutions",
        "system integration solutions India",
        "cloud integration solutions",
        "ERP CRM integration solutions",
        "e-commerce integration solutions",
        "healthcare software integration",
        "retail software integration",
        "data integration solutions",
        "workflow automation solutions",
        "integration architecture",
        "software integration solutions India",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-integration-solutions",
    },

    openGraph: {
        title: "Software Integration Solutions for Business | Zentrix Infotech",

        description:
            "Zentrix Infotech delivers software integration solutions that unify your CRM, ERP, website, apps and payment tools into one secure, automated business system.",

        url: "https://www.zentrixinfotech.com/software-integration-solutions",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Integration Solutions for Business | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Integration Solutions for Business | Zentrix Infotech",

        description:
            "Zentrix Infotech delivers software integration solutions that unify your CRM, ERP, website, apps and payment tools into one secure, automated business system.",

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
