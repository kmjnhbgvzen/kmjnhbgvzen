import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Business Application Development | Zentrix Infotech",
    description:
        "Enterprise business application development explained: types, architecture, security, integration and process, with Zentrix Infotech as your partner.",
    keywords: [
        "enterprise business application development",
        "enterprise application development services",
        "custom enterprise application development",
        "enterprise software development company India",
        "enterprise web application development",
        "enterprise mobile app development",
        "enterprise application integration",
        "scalable business applications",
        "secure enterprise software",
        "enterprise application development process",
        "enterprise application modernization",
        "enterprise application development company Moradabad",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-business-application-development",
    },
    openGraph: {
        title: "Enterprise Business Application Development | Zentrix Infotech",
        description:
            "Enterprise business application development explained: types, architecture, security, integration and process, with Zentrix Infotech as your partner.",
        url: "https://www.zentrixinfotech.com/enterprise-business-application-development",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Enterprise Business Application Development | Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Business Application Development | Zentrix Infotech",
        description:
            "Enterprise business application development explained: types, architecture, security, integration and process, with Zentrix Infotech as your partner.",
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
