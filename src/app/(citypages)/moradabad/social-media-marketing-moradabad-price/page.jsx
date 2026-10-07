import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media Marketing Price in Moradabad | Zentrix Infotech",
    description:
        "Compare social media marketing price in Moradabad by package, scope and ad budget. See what each plan includes and get a clear quote from Zentrix Infotech.",
    keywords:
        "social media marketing Moradabad price, social media marketing price in Moradabad, social media marketing packages Moradabad, social media marketing plans Moradabad, social media marketing rates Moradabad, monthly social media marketing price Moradabad, social media management price Moradabad, social media ads price Moradabad, affordable social media marketing Moradabad, social media marketing quote Moradabad, social media marketing agency Moradabad, digital marketing company Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/social-media-marketing-moradabad-price",
    },

    openGraph: {
        title: "Social Media Marketing Price in Moradabad | Zentrix Infotech",
        description:
            "Compare social media marketing price in Moradabad by package, scope and ad budget. See what each plan includes and get a clear quote from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-moradabad-price",
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
        title: "Social Media Marketing Price in Moradabad | Zentrix Infotech",
        description:
            "Compare social media marketing price in Moradabad by package, scope and ad budget. See what each plan includes and get a clear quote from Zentrix Infotech.",
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