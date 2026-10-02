import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "ERP Development Company for Manufacturing | Zentrix Infotech",

    description:
        "Zentrix Infotech is a leading ERP development company for manufacturing in India, delivering scalable custom ERP, workflow automation & integrated systems.",

    keywords: [
        "ERP development company for manufacturing",
        "custom ERP for manufacturing",
        "manufacturing ERP software development",
        "ERP software development company India",
        "cloud ERP for manufacturing",
        "custom enterprise application development",
        "manufacturing software solutions India",
        "manufacturing ERP integration services",
        "production planning ERP software",
        "inventory ERP software for manufacturing",
        "ERP development company Moradabad",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/erp-development-company-for-manufacturing",
    },

    openGraph: {
        title: "ERP Development Company for Manufacturing | Zentrix Infotech",
        description:
            "Zentrix Infotech is a leading ERP development company for manufacturing in India, delivering scalable custom ERP, workflow automation & integrated systems.",
        url: "https://www.zentrixinfotech.com/erp-development-company-for-manufacturing",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "ERP Development Company for Manufacturing | Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "ERP Development Company for Manufacturing | Zentrix Infotech",
        description:
            "Zentrix Infotech is a leading ERP development company for manufacturing in India, delivering scalable custom ERP, workflow automation & integrated systems.",
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
