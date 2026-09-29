
import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Software Development Services | Zentrix Infotech",

    description:
        "Zentrix Infotech delivers enterprise software development services — scalable ERP, workflow automation & integrated systems built for large-scale operations. Get a free consultation.",

    keywords:
        "enterprise software development services, enterprise software development company, enterprise application development, business software solutions company, custom enterprise software, ERP development company, enterprise software solutions for startups, enterprise IT solutions company, scalable software development services, large-scale software development company, enterprise software development company India, enterprise software development Uttar Pradesh",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-software-development-services",
    },

    openGraph: {
        title: "Enterprise Software Development Services | Zentrix Infotech",

        description:
            "Zentrix Infotech delivers enterprise software development services — scalable ERP, workflow automation & integrated systems built for large-scale operations. Get a free consultation.",

        url: "https://www.zentrixinfotech.com/enterprise-software-development-services",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Enterprise Software Development Services | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Enterprise Software Development Services | Zentrix Infotech",

        description:
            "Zentrix Infotech delivers enterprise software development services — scalable ERP, workflow automation & integrated systems built for large-scale operations. Get a free consultation.",

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
