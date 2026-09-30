import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom Enterprise Application Development | Zentrix Infotech",

    description:
        "Zentrix Infotech provides bespoke custom enterprise application development services — scalable, secure ERP, CRM, and cloud solutions built for modern enterprises.",

    keywords:
        "custom enterprise application development, custom enterprise software development, enterprise application development company, custom ERP development, enterprise software solutions, scalable enterprise web applications, legacy software modernization, enterprise cloud application development, business workflow automation, custom enterprise software India, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-enterprise-application-development",
    },

    openGraph: {
        title: "Custom Enterprise Application Development | Zentrix Infotech",

        description:
            "Zentrix Infotech provides bespoke custom enterprise application development services — scalable, secure ERP, CRM, and cloud solutions built for modern enterprises.",

        url: "https://www.zentrixinfotech.com/custom-enterprise-application-development",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom Enterprise Application Development | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Custom Enterprise Application Development | Zentrix Infotech",

        description:
            "Zentrix Infotech provides bespoke custom enterprise application development services — scalable, secure ERP, CRM, and cloud solutions built for modern enterprises.",

        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },

    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function CustomEnterpriseApplicationDevelopmentPage() {
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
