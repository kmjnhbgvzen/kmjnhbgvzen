import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How to Choose Business Software Development Services | Zentrix Infotech",

    description:
        "Learn how to evaluate and choose the right business software development services. A complete guide covering key factors, red flags, and why Zentrix Infotech is the trusted choice.",

    keywords:
        "how to choose business software development services, select software development company, best software development partner, software development evaluation guide, choosing custom software company, business software selection criteria, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/how-to-choose-business-software-development-services",
    },

    openGraph: {
        title: "How to Choose Business Software Development Services | Zentrix Infotech",

        description:
            "Learn how to evaluate and choose the right business software development services. Key factors, red flags, and why Zentrix Infotech is the trusted choice.",

        url: "https://www.zentrixinfotech.com/how-to-choose-business-software-development-services",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "How to Choose Business Software Development Services | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "How to Choose Business Software Development Services | Zentrix Infotech",

        description:
            "Learn how to evaluate and choose the right business software development services. Key factors, red flags, and why Zentrix Infotech is the trusted choice.",

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
