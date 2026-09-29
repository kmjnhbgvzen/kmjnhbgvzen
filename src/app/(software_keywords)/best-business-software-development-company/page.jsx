import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Business Software Development Company | Zentrix Infotech",

    description:
        "Zentrix Infotech is a leading business software development company delivering custom ERP, CRM, automation tools & enterprise solutions. Scalable, secure, and built for growth. Get a free consultation.",

    keywords:
        "best business software development company, top software development company, best custom software development company, leading software development company India, best ERP development company, best CRM development company, top business software solutions, best software development company Moradabad, best software development company Uttar Pradesh",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-business-software-development-company",
    },

    openGraph: {
        title: "Best Business Software Development Company | Zentrix Infotech",

        description:
            "Zentrix Infotech is a leading business software development company delivering custom ERP, CRM, automation tools & enterprise solutions. Scalable, secure, and built for growth.",

        url: "https://www.zentrixinfotech.com/best-business-software-development-company",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Best Business Software Development Company | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Best Business Software Development Company | Zentrix Infotech",

        description:
            "Zentrix Infotech is a leading business software development company delivering custom ERP, CRM, automation tools & enterprise solutions. Scalable, secure, and built for growth.",

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
