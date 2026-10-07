import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Top Social Media Marketing Agencies in Moradabad | Zentrix",
    description:
        "Comparing top social media marketing agencies in Moradabad? Learn what to look for, and see how Zentrix Infotech delivers leads, not just likes. Get a free quote.",
    keywords:
        "top social media marketing agencies Moradabad, best social media marketing agency in Moradabad, social media marketing agencies in Moradabad, social media agency Moradabad, social media marketing company Moradabad, social media management agency Moradabad, Instagram marketing agency Moradabad, Facebook ads agency Moradabad, social media advertising Moradabad, digital marketing agency Moradabad, affordable social media agency Moradabad, social media marketing for local business Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/top-social-media-marketing-agencies-moradabad",
    },

    openGraph: {
        title: "Top Social Media Marketing Agencies in Moradabad | Zentrix",
        description:
            "Comparing top social media marketing agencies in Moradabad? Learn what to look for, and see how Zentrix Infotech delivers leads, not just likes. Get a free quote.",
        url: "https://www.zentrixinfotech.com/moradabad/top-social-media-marketing-agencies-moradabad",
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
        title: "Top Social Media Marketing Agencies in Moradabad | Zentrix",
        description:
            "Comparing top social media marketing agencies in Moradabad? Learn what to look for, and see how Zentrix Infotech delivers leads, not just likes. Get a free quote.",
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