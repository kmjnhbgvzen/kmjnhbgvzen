import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Personalized Software Solutions | Zentrix Infotech",
    description:
        "Get personalized software solutions built around your workflows, users and goals. Zentrix Infotech designs scalable, secure custom software for businesses across India. Book a free consultation.",
    keywords:
        "personalized software solutions, personalized software development, tailored software solutions, custom software development company, custom software development services, business software solutions, bespoke software development, custom business software, software development company in Moradabad, software development company in Ghaziabad, custom software for small business, scalable software solutions, workflow automation software, custom ERP and CRM development, Zentrix Infotech",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/personalized-software-solutions",
    },
    openGraph: {
        title: "Personalized Software Solutions | Zentrix Infotech",
        description:
            "Get personalized software solutions built around your workflows, users and goals. Zentrix Infotech designs scalable, secure custom software for businesses across India. Book a free consultation.",
        url: "https://www.zentrixinfotech.com/personalized-software-solutions",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Personalized Software Solutions | Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Personalized Software Solutions | Zentrix Infotech",
        description:
            "Get personalized software solutions built around your workflows, users and goals. Zentrix Infotech designs scalable, secure custom software for businesses across India. Book a free consultation.",
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
