import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Software Development Company List India (2026)",
    description:
        "Explore a curated enterprise software development company list in India for 2026: top firms, selection criteria, engagement models and FAQs to pick the right partner.",
    keywords:
        "enterprise software development company list India, top enterprise software development companies in India, best enterprise software companies India, enterprise software development services India, custom enterprise software development India, enterprise application development company India, enterprise software outsourcing India, enterprise software development company near me, Zentrix Infotech, how to choose enterprise software development company",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-software-development-company-list-india",
    },
    openGraph: {
        title: "Enterprise Software Development Company List India (2026)",
        description:
            "Explore a curated enterprise software development company list in India for 2026: top firms, selection criteria, engagement models and FAQs to pick the right partner.",
        url: "https://www.zentrixinfotech.com/enterprise-software-development-company-list-india",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Zentrix Infotech Logo",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Software Development Company List India (2026)",
        description:
            "Explore a curated enterprise software development company list in India for 2026: top firms, selection criteria, engagement models and FAQs to pick the right partner.",
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
