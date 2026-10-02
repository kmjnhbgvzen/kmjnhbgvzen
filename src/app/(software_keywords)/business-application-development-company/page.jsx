import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Application Development Company | Zentrix Infotech",
    description:
        "Zentrix Infotech is a business application development company building custom web and mobile apps, portals and internal tools that streamline operations.",
    keywords: [
        "business application development company",
        "business application development services",
        "custom business application development",
        "enterprise application development company",
        "business software development company India",
        "web application development company",
        "mobile app development for business",
        "internal business tools development",
        "custom CRM and ERP development",
        "business process automation software",
        "application development company Moradabad",
        "business app developers India",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-application-development-company",
    },
    openGraph: {
        title: "Business Application Development Company | Zentrix Infotech",
        description:
            "Zentrix Infotech is a business application development company building custom web and mobile apps, portals and internal tools that streamline operations.",
        url: "https://www.zentrixinfotech.com/business-application-development-company",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Business Application Development Company - Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Business Application Development Company | Zentrix Infotech",
        description:
            "Zentrix Infotech is a business application development company building custom web and mobile apps, portals and internal tools that streamline operations.",
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
