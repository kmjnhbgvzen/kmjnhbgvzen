import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Development Services in India | Zentrix Infotech",

    description:
        "Custom software development services in India from Zentrix Infotech. Web, mobile, cloud & UI/UX solutions for startups and enterprises. Get a free quote.",

    keywords: [
        "software development services India",
        "custom software development company in India",
        "software development company in Moradabad",
        "business software solutions India",
        "web application development India",
        "mobile app development services India",
        "affordable software development India",
        "cloud software solutions India",
        "enterprise software development India",
        "software outsourcing to India",
        "IT solutions company for startups",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-development-services-india",
    },

    openGraph: {
        title: "Software Development Services in India | Zentrix Infotech",

        description:
            "Custom software development services in India from Zentrix Infotech. Web, mobile, cloud & UI/UX solutions for startups and enterprises. Get a free quote.",

        url: "https://www.zentrixinfotech.com/software-development-services-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Development Services in India - Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Development Services in India | Zentrix Infotech",

        description:
            "Custom software development services in India from Zentrix Infotech. Web, mobile, cloud & UI/UX solutions for startups and enterprises. Get a free quote.",

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
