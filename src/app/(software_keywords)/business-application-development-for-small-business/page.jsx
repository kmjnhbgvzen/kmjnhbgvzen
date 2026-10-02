import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Application Development for Small Business | Zentrix",

    description:
        "Business application development for small business: what to build first, how to stay on budget and how Zentrix Infotech builds affordable custom apps.",

    keywords: [
        "business application development for small business",
        "small business app development",
        "custom software for small business",
        "affordable business application development",
        "small business software solutions India",
        "small business web and mobile apps",
        "business automation for small business",
        "custom CRM for small business",
        "booking and billing app for small business",
        "small business app development company India",
        "small business application development Moradabad",
        "how small businesses can build custom apps",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-application-development-for-small-business",
    },

    openGraph: {
        title: "Business Application Development for Small Business | Zentrix",

        description:
            "Business application development for small business: what to build first, how to stay on budget and how Zentrix Infotech builds affordable custom apps.",

        url: "https://www.zentrixinfotech.com/business-application-development-for-small-business",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Business Application Development for Small Business | Zentrix",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Business Application Development for Small Business | Zentrix",

        description:
            "Business application development for small business: what to build first, how to stay on budget and how Zentrix Infotech builds affordable custom apps.",

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
