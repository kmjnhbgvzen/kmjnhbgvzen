import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Development Services for Businesses | Zentrix Infotech",
    description:
        "Zentrix Infotech provides end-to-end software development services for businesses of every size — from startups to enterprises. Custom, scalable, and affordable solutions built to grow with you.",
    keywords:
        "software development services for businesses, software development company for startups, custom software development company, professional software development services, affordable software development company, outsourced software development services, software development partner for business, enterprise software development company, scalable software solutions for business, software development services India, IT solutions company for businesses, reliable software development company, business technology solutions provider, custom application development company, dedicated software development team",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-development-services-for-businesses",
    },
    openGraph: {
        title: "Software Development Services for Businesses | Zentrix Infotech",
        description:
            "Zentrix Infotech provides end-to-end software development services for businesses of every size — from startups to enterprises. Custom, scalable, and affordable solutions built to grow with you.",
        url: "https://www.zentrixinfotech.com/software-development-services-for-businesses",
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
        title: "Software Development Services for Businesses | Zentrix Infotech",
        description:
            "Zentrix Infotech provides end-to-end software development services for businesses of every size — from startups to enterprises. Custom, scalable, and affordable solutions built to grow with you.",
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