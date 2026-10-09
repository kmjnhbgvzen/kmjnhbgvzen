import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "What Does a Social Media Marketing Agency Do in Moradabad | Zentrix Infotech",
    description:
        "Learn what a social media marketing agency does in Moradabad: strategy, content, ads, reporting and lead generation. Talk to Zentrix Infotech today.",
    keywords:
        "what does a social media marketing agency do in Moradabad, social media marketing agency Moradabad, social media marketing services Moradabad, social media agency roles and responsibilities, social media management Moradabad, social media advertising Moradabad, Instagram marketing Moradabad, Facebook ads Moradabad, content creation for social media Moradabad, social media marketing for small business Moradabad, local social media marketing Moradabad, social media marketing company Moradabad, Zentrix Infotech",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/what-does-a-social-media-marketing-agency-do-in-moradabad",
    },


    openGraph: {
        title: "What Does a Social Media Marketing Agency Do in Moradabad | Zentrix Infotech",
        description:
            "Learn what a social media marketing agency does in Moradabad: strategy, content, ads, reporting and lead generation. Talk to Zentrix Infotech today.",
        url: "https://www.zentrixinfotech.com/moradabad/what-does-a-social-media-marketing-agency-do-in-moradabad",
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
        title: "What Does a Social Media Marketing Agency Do in Moradabad | Zentrix Infotech",
        description:
            "Learn what a social media marketing agency does in Moradabad: strategy, content, ads, reporting and lead generation. Talk to Zentrix Infotech today.",
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