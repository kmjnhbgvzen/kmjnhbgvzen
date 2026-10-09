import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media Marketing Quote Moradabad | Zentrix Infotech",
    description:
        "Get a clear social media marketing quote in Moradabad. Learn what a quote includes, how to compare offers and request a custom proposal from Zentrix Infotech.",
    keywords:
        "social media marketing quote Moradabad, social media marketing quotation Moradabad, get social media marketing quote, social media marketing proposal Moradabad, social media marketing packages Moradabad, social media marketing cost in Moradabad, social media marketing price Moradabad, social media marketing services Moradabad, social media marketing company Moradabad, social media marketing agency Moradabad, request social media quote, custom social media marketing plan, affordable social media marketing Moradabad, digital marketing company Moradabad",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/social-media-marketing-quote-moradabad",
    },


    openGraph: {
        title: "Social Media Marketing Quote Moradabad | Zentrix Infotech",
        description:
            "Get a clear social media marketing quote in Moradabad. Learn what a quote includes, how to compare offers and request a custom proposal from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-quote-moradabad",
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
        title: "Social Media Marketing Quote Moradabad | Zentrix Infotech",
        description:
            "Get a clear social media marketing quote in Moradabad. Learn what a quote includes, how to compare offers and request a custom proposal from Zentrix Infotech.",
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