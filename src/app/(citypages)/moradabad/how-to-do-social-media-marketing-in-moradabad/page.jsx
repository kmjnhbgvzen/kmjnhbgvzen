import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How to Do Social Media Marketing in Moradabad | Zentrix",
    description:
        "Learn how to do social media marketing in Moradabad step by step: goals, platforms, content, local ads and tracking. Get expert help from Zentrix Infotech.",
    keywords:
        "how to do social media marketing in Moradabad, social media marketing guide Moradabad, social media marketing steps Moradabad, how to promote business on social media Moradabad, social media marketing tips Moradabad, local social media marketing Moradabad, social media strategy Moradabad, Instagram marketing Moradabad, Facebook ads Moradabad, social media marketing for small business Moradabad, social media marketing agency Moradabad, digital marketing company Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/how-to-do-social-media-marketing-in-moradabad",
    },

    openGraph: {
        title: "How to Do Social Media Marketing in Moradabad | Zentrix",
        description:
            "Learn how to do social media marketing in Moradabad step by step: goals, platforms, content, local ads and tracking. Get expert help from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/moradabad/how-to-do-social-media-marketing-in-moradabad",
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
        title: "How to Do Social Media Marketing in Moradabad | Zentrix",
        description:
            "Learn how to do social media marketing in Moradabad step by step: goals, platforms, content, local ads and tracking. Get expert help from Zentrix Infotech.",
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