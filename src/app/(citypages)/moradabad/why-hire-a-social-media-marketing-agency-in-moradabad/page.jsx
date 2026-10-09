import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Why Hire a Social Media Marketing Agency in Moradabad | Zentrix Infotech",
    description:
        "Why hire a social media marketing agency in Moradabad? Get expert strategy, targeted ads and real leads with Zentrix Infotech. Call +91 72488 00839.",
    keywords:
        "why hire a social media marketing agency in Moradabad, social media marketing agency Moradabad, social media marketing company Moradabad, benefits of hiring social media agency, social media management Moradabad, social media advertising Moradabad, Instagram marketing Moradabad, Facebook ads Moradabad, social media marketing for small business Moradabad, affordable social media agency Moradabad, Zentrix Infotech",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/why-hire-a-social-media-marketing-agency-in-moradabad",
    },


    openGraph: {
        title: "Why Hire a Social Media Marketing Agency in Moradabad | Zentrix Infotech",
        description:
            "Why hire a social media marketing agency in Moradabad? Get expert strategy, targeted ads and real leads with Zentrix Infotech. Call +91 72488 00839.",
        url: "https://www.zentrixinfotech.com/moradabad/why-hire-a-social-media-marketing-agency-in-moradabad",
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
        title: "Why Hire a Social Media Marketing Agency in Moradabad | Zentrix Infotech",
        description:
            "Why hire a social media marketing agency in Moradabad? Get expert strategy, targeted ads and real leads with Zentrix Infotech. Call +91 72488 00839.",
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