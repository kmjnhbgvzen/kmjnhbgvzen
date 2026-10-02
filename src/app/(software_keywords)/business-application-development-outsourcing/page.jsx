import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Application Development Outsourcing | Zentrix Infotech",

    description:
        "Learn how business application development outsourcing works: benefits, models, risks and how to choose a partner, with Zentrix Infotech in India.",

    keywords: [
        "business application development outsourcing",
        "outsource business application development",
        "application development outsourcing India",
        "outsourced software development company",
        "offshore application development",
        "dedicated development team India",
        "custom application development outsourcing",
        "outsourcing app development benefits",
        "how to outsource application development",
        "software outsourcing company India",
        "outsource web and mobile app development",
        "business application outsourcing Moradabad",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-application-development-outsourcing",
    },

    openGraph: {
        title: "Business Application Development Outsourcing | Zentrix Infotech",

        description:
            "Learn how business application development outsourcing works: benefits, models, risks and how to choose a partner, with Zentrix Infotech in India.",

        url: "https://www.zentrixinfotech.com/business-application-development-outsourcing",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Business Application Development Outsourcing | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Business Application Development Outsourcing | Zentrix Infotech",

        description:
            "Learn how business application development outsourcing works: benefits, models, risks and how to choose a partner, with Zentrix Infotech in India.",

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
