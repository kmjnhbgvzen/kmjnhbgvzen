import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Personalized Software Company | Zentrix Infotech",
    description:
        "Looking for the best personalized software company? Learn how to choose one, and how Zentrix Infotech builds tailored web, mobile and cloud software.",
    keywords:
        "best personalized software company, personalized software development, custom software development company, tailor-made software solutions, bespoke software development India, personalized business software, custom web application development, custom mobile app development, software development company in Moradabad, business software solutions company, affordable custom software development, Zentrix Infotech",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/best-personalized-software-company",
    },
    openGraph: {
        title: "Best Personalized Software Company | Zentrix Infotech",
        description:
            "Looking for the best personalized software company? Learn how to choose one, and how Zentrix Infotech builds tailored web, mobile and cloud software.",
        url: "https://www.zentrixinfotech.com/best-personalized-software-company",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Zentrix Infotech Logo",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Personalized Software Company | Zentrix Infotech",
        description:
            "Looking for the best personalized software company? Learn how to choose one, and how Zentrix Infotech builds tailored web, mobile and cloud software.",
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
