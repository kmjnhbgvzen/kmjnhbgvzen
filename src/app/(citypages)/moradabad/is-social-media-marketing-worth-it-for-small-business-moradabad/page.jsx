import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media Marketing for Small Business in Moradabad | Zentrix",
    description:
        "Is social media marketing worth it for small business in Moradabad? See real costs, benefits, risks and ROI tips from Zentrix Infotech before you invest.",
    keywords:
        "is social media marketing worth it for small business, social media marketing for small business Moradabad, social media marketing worth it Moradabad, benefits of social media marketing for small business, social media marketing ROI Moradabad, small business social media marketing Moradabad, social media marketing agency Moradabad, social media marketing cost in Moradabad, affordable social media marketing Moradabad, social media marketing for local business, Instagram marketing for small business Moradabad, Facebook marketing Moradabad, digital marketing company Moradabad, social media marketing company Moradabad",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/is-social-media-marketing-worth-it-for-small-business-moradabad",
    },


    openGraph: {
        title: "Social Media Marketing for Small Business in Moradabad | Zentrix",
        description:
            "Is social media marketing worth it for small business in Moradabad? See real costs, benefits, risks and ROI tips from Zentrix Infotech before you invest.",
        url: "https://www.zentrixinfotech.com/moradabad/is-social-media-marketing-worth-it-for-small-business-moradabad",
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
        title: "Social Media Marketing for Small Business in Moradabad | Zentrix",
        description:
            "Is social media marketing worth it for small business in Moradabad? See real costs, benefits, risks and ROI tips from Zentrix Infotech before you invest.",
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