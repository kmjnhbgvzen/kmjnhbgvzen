import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Application Development Company Reviews | Zentrix",
    description:
        "How to read business application development company reviews, and what clients say about Zentrix Infotech's custom apps, websites and support.",
    keywords: [
        "business application development company reviews",
        "application development company reviews India",
        "custom software company reviews",
        "Zentrix Infotech reviews",
        "business app developer testimonials",
        "how to check software company reviews",
        "software development company ratings",
        "client reviews for app development company",
        "trusted business application development company",
        "business application development company Moradabad",
        "software company testimonials India",
        "best reviewed application development company",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-application-development-company-reviews",
    },
    openGraph: {
        title: "Business Application Development Company Reviews | Zentrix",
        description:
            "How to read business application development company reviews, and what clients say about Zentrix Infotech's custom apps, websites and support.",
        url: "https://www.zentrixinfotech.com/business-application-development-company-reviews",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Business Application Development Company Reviews | Zentrix",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Business Application Development Company Reviews | Zentrix",
        description:
            "How to read business application development company reviews, and what clients say about Zentrix Infotech's custom apps, websites and support.",
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
