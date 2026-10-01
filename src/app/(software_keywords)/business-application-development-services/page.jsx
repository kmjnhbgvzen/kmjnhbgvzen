import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Application Development Services | Zentrix Infotech",

    description:
        "Transform your operations with Zentrix Infotech's custom business application development services. We build scalable, secure software to streamline workflows and drive growth.",

    keywords:
        "business application development services, custom business application development, enterprise application development, business software solutions, custom software development company, ERP development services, CRM application development, workflow automation software, scalable business applications, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-application-development-services",
    },

    openGraph: {
        title: "Business Application Development Services | Zentrix Infotech",

        description:
            "Transform your operations with Zentrix Infotech's custom business application development services. We build scalable, secure software to streamline workflows and drive growth.",

        url: "https://www.zentrixinfotech.com/business-application-development-services",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Business Application Development Services | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Business Application Development Services | Zentrix Infotech",

        description:
            "Transform your operations with Zentrix Infotech's custom business application development services. We build scalable, secure software to streamline workflows and drive growth.",

        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },

    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function BusinessApplicationDevelopmentServicesPage() {
    return (
        <main>
            <Banner />
            <Content />
            <Client />
            <LovedByClients />
            <WhyChooseUs />
            <Portfolio />
            <LandingServices />
        </main>
    );
}
