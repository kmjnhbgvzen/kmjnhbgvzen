import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Local Social Media Marketing in Moradabad | Zentrix Infotech",
    description:
        "Reach customers near you with local social media marketing in Moradabad. Zentrix Infotech runs geo-targeted ads, content and reporting that bring real enquiries.",
    keywords:
        "local social media marketing Moradabad, local social media marketing services Moradabad, hyperlocal marketing Moradabad, local business social media Moradabad, social media marketing for local business Moradabad, geo targeted ads Moradabad, local Instagram marketing Moradabad, local Facebook ads Moradabad, social media marketing agency Moradabad, local lead generation Moradabad, social media management Moradabad, digital marketing company Moradabad, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/local-social-media-marketing-moradabad",
    },

    openGraph: {
        title: "Local Social Media Marketing in Moradabad | Zentrix Infotech",
        description:
            "Reach customers near you with local social media marketing in Moradabad. Zentrix Infotech runs geo-targeted ads, content and reporting that bring real enquiries.",
        url: "https://www.zentrixinfotech.com/moradabad/local-social-media-marketing-moradabad",
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
        title: "Local Social Media Marketing in Moradabad | Zentrix Infotech",
        description:
            "Reach customers near you with local social media marketing in Moradabad. Zentrix Infotech runs geo-targeted ads, content and reporting that bring real enquiries.",
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