import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Affordable Social Media Marketing in Moradabad | Zentrix",
    description:
        "Get affordable social media marketing in Moradabad without cutting quality. Zentrix Infotech builds budget-smart plans that bring local leads. Ask for a free quote.",
    keywords:
        "affordable social media marketing Moradabad, cheap social media marketing Moradabad, budget social media marketing Moradabad, low cost social media marketing Moradabad, affordable social media agency Moradabad, affordable social media management Moradabad, social media marketing for small business Moradabad, affordable Instagram marketing Moradabad, affordable Facebook ads Moradabad, social media marketing agency Moradabad, digital marketing company Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/affordable-social-media-marketing-moradabad",
    },

    openGraph: {
        title: "Affordable Social Media Marketing in Moradabad | Zentrix",
        description:
            "Get affordable social media marketing in Moradabad without cutting quality. Zentrix Infotech builds budget-smart plans that bring local leads. Ask for a free quote.",
        url: "https://www.zentrixinfotech.com/moradabad/affordable-social-media-marketing-moradabad",
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
        title: "Affordable Social Media Marketing in Moradabad | Zentrix",
        description:
            "Get affordable social media marketing in Moradabad without cutting quality. Zentrix Infotech builds budget-smart plans that bring local leads. Ask for a free quote.",
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