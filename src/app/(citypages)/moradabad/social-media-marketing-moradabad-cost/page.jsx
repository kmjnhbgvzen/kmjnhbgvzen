import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media Marketing Cost in Moradabad | Zentrix Infotech",
    description:
        "Wondering about social media marketing cost in Moradabad? See what affects pricing, what is included, and how Zentrix Infotech gives clear, value-led quotes.",
    keywords:
        "social media marketing Moradabad cost, social media marketing cost in Moradabad, social media marketing price Moradabad, social media marketing packages Moradabad, social media management cost Moradabad, social media advertising cost Moradabad, affordable social media marketing Moradabad, monthly social media marketing charges Moradabad, social media marketing agency Moradabad, Instagram marketing cost Moradabad, Facebook ads cost Moradabad, digital marketing company Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/social-media-marketing-moradabad-cost",
    },

    openGraph: {
        title: "Social Media Marketing Cost in Moradabad | Zentrix Infotech",
        description:
            "Wondering about social media marketing cost in Moradabad? See what affects pricing, what is included, and how Zentrix Infotech gives clear, value-led quotes.",
        url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-moradabad-cost",
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
        title: "Social Media Marketing Cost in Moradabad | Zentrix Infotech",
        description:
            "Wondering about social media marketing cost in Moradabad? See what affects pricing, what is included, and how Zentrix Infotech gives clear, value-led quotes.",
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