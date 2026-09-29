
import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom Business Software Development Company | Zentrix Infotech",

    description:
        "Zentrix Infotech builds custom business software that fits your workflow — ERP, CRM, automation tools & enterprise apps. Scalable, secure, and built for growth. Get a free consultation.",

    keywords:
        "custom business software development, custom software development company, business software solutions company, custom software development services, enterprise software development company, bespoke software development, software development company India, ERP software development, CRM software development, workflow automation software, custom software for small business, affordable custom software development, custom software development company Moradabad, custom software development company Uttar Pradesh",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-business-software-development",
    },

    openGraph: {
        title: "Custom Business Software Development Company | Zentrix Infotech",

        description:
            "Zentrix Infotech builds custom business software that fits your workflow — ERP, CRM, automation tools & enterprise apps. Scalable, secure, and built for growth. Get a free consultation.",

        url: "https://www.zentrixinfotech.com/custom-business-software-development",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom Business Software Development Company | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Custom Business Software Development Company | Zentrix Infotech",

        description:
            "Zentrix Infotech builds custom business software that fits your workflow — ERP, CRM, automation tools & enterprise apps. Scalable, secure, and built for growth. Get a free consultation.",

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
