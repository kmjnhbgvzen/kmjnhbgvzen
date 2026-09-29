import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Enterprise Software Development Company in India | Zentrix Infotech",

    description:
        "Zentrix Infotech is a leading enterprise software development company in India delivering custom ERP, CRM, automation tools & scalable enterprise solutions. Secure, reliable, and built for growth. Get a free consultation.",

    keywords:
        "best enterprise software development company in India, top enterprise software company India, enterprise software development India, custom enterprise software India, ERP development company India, CRM development company India, enterprise solutions India, software development company Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-enterprise-software-development-company-in-india",
    },

    openGraph: {
        title: "Best Enterprise Software Development Company in India | Zentrix Infotech",

        description:
            "Zentrix Infotech is a leading enterprise software development company in India delivering custom ERP, CRM, automation tools & scalable enterprise solutions. Secure, reliable, and built for growth.",

        url: "https://www.zentrixinfotech.com/best-enterprise-software-development-company-in-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Best Enterprise Software Development Company in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Best Enterprise Software Development Company in India | Zentrix Infotech",

        description:
            "Zentrix Infotech is a leading enterprise software development company in India delivering custom ERP, CRM, automation tools & scalable enterprise solutions. Secure, reliable, and built for growth.",

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
