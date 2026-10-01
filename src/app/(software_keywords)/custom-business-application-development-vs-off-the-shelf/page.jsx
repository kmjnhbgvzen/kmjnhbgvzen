import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom vs Off-the-Shelf Software: Which Is Right? | Zentrix",

    description:
        "Custom business application development vs off-the-shelf software: compare cost, flexibility, security and scalability to choose right. Talk to Zentrix Infotech.",

    keywords:
        "custom business application development vs off the shelf, custom software vs off the shelf software, custom vs packaged software, custom business application development, off the shelf software pros and cons, custom software development company, bespoke software vs ready-made software, build vs buy software, custom software development India, business software solutions company, custom application development cost, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-business-application-development-vs-off-the-shelf",
    },

    openGraph: {
        title: "Custom vs Off-the-Shelf Software: Which Is Right? | Zentrix",

        description:
            "Custom business application development vs off-the-shelf software: compare cost, flexibility, security and scalability to choose right. Talk to Zentrix Infotech.",

        url:
            "https://www.zentrixinfotech.com/custom-business-application-development-vs-off-the-shelf",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom vs Off-the-Shelf Software: Which Is Right? | Zentrix",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Custom vs Off-the-Shelf Software: Which Is Right? | Zentrix",

        description:
            "Custom business application development vs off-the-shelf software: compare cost, flexibility, security and scalability to choose right. Talk to Zentrix Infotech.",

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