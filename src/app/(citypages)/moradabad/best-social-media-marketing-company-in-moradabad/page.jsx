import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Best Social Media Marketing Company in Moradabad | Zentrix",
    description:
        "Looking for the best social media marketing company in Moradabad? Zentrix Infotech offers strategy, ads, content and reporting that bring real local leads.",
    keywords:
        "best social media marketing company in Moradabad, social media marketing company in Moradabad, social media marketing agency Moradabad, social media marketing services Moradabad, top social media marketing company Moradabad, social media management company Moradabad, Instagram marketing Moradabad, Facebook ads agency Moradabad, social media advertising Moradabad, digital marketing company Moradabad, affordable social media marketing Moradabad, social media marketing for small business Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/best-social-media-marketing-company-in-moradabad",
    },

    openGraph: {
        title: "Best Social Media Marketing Company in Moradabad | Zentrix",
        description:
            "Looking for the best social media marketing company in Moradabad? Zentrix Infotech offers strategy, ads, content and reporting that bring real local leads.",
        url: "https://www.zentrixinfotech.com/moradabad/best-social-media-marketing-company-in-moradabad",
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
        title: "Best Social Media Marketing Company in Moradabad | Zentrix",
        description:
            "Looking for the best social media marketing company in Moradabad? Zentrix Infotech offers strategy, ads, content and reporting that bring real local leads.",
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