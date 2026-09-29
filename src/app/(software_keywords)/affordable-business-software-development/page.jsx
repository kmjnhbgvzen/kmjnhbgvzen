import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Affordable Business Software Development | Zentrix Infotech",

    description:
        "Zentrix Infotech offers affordable business software development — custom ERP, CRM, automation tools & enterprise apps at budget-friendly pricing. Get a free consultation.",

    keywords:
        "affordable business software development, affordable custom software development, budget-friendly software development, cheap software development company, affordable ERP development, affordable CRM development, low-cost custom software, affordable software development company India, affordable software development Moradabad, affordable software development Uttar Pradesh",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/affordable-business-software-development",
    },

    openGraph: {
        title: "Affordable Business Software Development | Zentrix Infotech",

        description:
            "Zentrix Infotech offers affordable business software development — custom ERP, CRM, automation tools & enterprise apps at budget-friendly pricing. Get a free consultation.",

        url: "https://www.zentrixinfotech.com/affordable-business-software-development",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Affordable Business Software Development | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Affordable Business Software Development | Zentrix Infotech",

        description:
            "Zentrix Infotech offers affordable business software development — custom ERP, CRM, automation tools & enterprise apps at budget-friendly pricing. Get a free consultation.",

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
