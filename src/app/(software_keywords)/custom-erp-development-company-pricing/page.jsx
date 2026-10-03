import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom ERP Development Company Pricing | Zentrix Infotech",
    description:
        "Transparent custom ERP development company pricing guide. Compare engagement models, module cost breakdowns, and ROI estimates with Zentrix Infotech.",
    keywords: [
        "custom ERP development company pricing",
        "custom ERP pricing",
        "custom ERP development cost",
        "ERP development company pricing models",
        "cost of custom ERP software",
        "ERP customization cost",
        "ERP development services India",
        "custom ERP development pricing India",
        "Zentrix Infotech",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-erp-development-company-pricing",
    },
    openGraph: {
        title: "Custom ERP Development Company Pricing | Zentrix Infotech",
        description:
            "Transparent custom ERP development company pricing guide. Compare engagement models, module cost breakdowns, and ROI estimates with Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/custom-erp-development-company-pricing",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom ERP Development Company Pricing | Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom ERP Development Company Pricing | Zentrix Infotech",
        description:
            "Transparent custom ERP development company pricing guide. Compare engagement models, module cost breakdowns, and ROI estimates with Zentrix Infotech.",
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
