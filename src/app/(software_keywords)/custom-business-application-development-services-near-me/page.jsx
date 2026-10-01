import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom Business App Development Near Me | Zentrix Infotech",
    description:
        "Need custom business application development services near you? Zentrix Infotech builds web, mobile and cloud apps from Moradabad and Ghaziabad. Get a quote.",
    keywords: [
        "custom business application development services near me",
        "custom business application development",
        "business application development company near me",
        "custom software development company near me",
        "custom web application development",
        "custom mobile app development",
        "business software solutions",
        "enterprise application development",
        "software development company Moradabad",
        "software development company Ghaziabad",
        "custom software development Delhi NCR",
        "cloud application development",
        "affordable custom software development",
        "ERP and CRM development",
        "business process automation",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-business-application-development-services-near-me",
    },
    openGraph: {
        title: "Custom Business App Development Near Me | Zentrix Infotech",
        description:
            "Need custom business application development services near you? Zentrix Infotech builds web, mobile and cloud apps from Moradabad and Ghaziabad. Get a quote.",
        url: "https://www.zentrixinfotech.com/custom-business-application-development-services-near-me",
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
        title: "Custom Business App Development Near Me | Zentrix Infotech",
        description:
            "Need custom business application development services near you? Zentrix Infotech builds web, mobile and cloud apps from Moradabad and Ghaziabad. Get a quote.",
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
