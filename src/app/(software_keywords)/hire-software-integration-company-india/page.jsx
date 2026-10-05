import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Hire Software Integration Company in India | Zentrix Infotech",
    description:
        "Planning to hire a software integration company in India? Use this guide to compare options, check credentials and get started with Zentrix Infotech.",
    keywords:
        "hire software integration company India, hire software integration company, hire system integration company India, hire API integration developers India, software integration company India, how to hire a software integration company, software integration outsourcing India, dedicated integration team India, ERP CRM integration company hire, hire integration experts India, software integration contract checklist, software integration project brief, choosing integration partner India, software integration company Moradabad, Zentrix Infotech",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/hire-software-integration-company-india",
    },
    openGraph: {
        title: "Hire Software Integration Company in India | Zentrix Infotech",
        description:
            "Planning to hire a software integration company in India? Use this guide to compare options, check credentials and get started with Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/hire-software-integration-company-india",
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
        title: "Hire Software Integration Company in India | Zentrix Infotech",
        description:
            "Planning to hire a software integration company in India? Use this guide to compare options, check credentials and get started with Zentrix Infotech.",
        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },
    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function Page() {
    return (
        <main>
            <Banner />
            <Client />
            <Content />
            <WhyChooseUs />
            <LandingServices />
            <Portfolio />
            <LovedByClients />
        </main>
    );
}
