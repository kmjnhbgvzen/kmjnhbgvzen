import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Personalized Software Solutions Providers | Zentrix Infotech",
    description:
        "Looking for personalized software solutions providers? Learn how to compare them and see how Zentrix Infotech builds custom software for growing businesses.",
    keywords: [
        "personalized software solutions providers",
        "custom software solutions provider",
        "personalized software development company",
        "custom software development company India",
        "bespoke software solutions provider",
        "tailor-made software solutions",
        "business software solutions company",
        "custom software development services",
        "software solutions provider for small business",
        "best custom software provider",
        "custom software company Moradabad",
        "enterprise software solutions provider",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/personalized-software-solutions-providers",
    },
    openGraph: {
        title: "Personalized Software Solutions Providers | Zentrix Infotech",
        description:
            "Looking for personalized software solutions providers? Learn how to compare them and see how Zentrix Infotech builds custom software for growing businesses.",
        url: "https://www.zentrixinfotech.com/personalized-software-solutions-providers",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Personalized Software Solutions Providers - Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Personalized Software Solutions Providers | Zentrix Infotech",
        description:
            "Looking for personalized software solutions providers? Learn how to compare them and see how Zentrix Infotech builds custom software for growing businesses.",
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
