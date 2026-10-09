import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Hire Social Media Marketing Company Moradabad | Zentrix",
    description:
        "Planning to hire a social media marketing company in Moradabad? Learn what to check, what it costs and how to choose the right partner with Zentrix Infotech.",
    keywords:
        "hire social media marketing company Moradabad, hire social media marketing agency Moradabad, social media marketing company Moradabad, social media marketing agency Moradabad, how to choose social media marketing company, social media marketing services Moradabad, social media marketing cost in Moradabad, social media marketing packages Moradabad, best social media marketing company in Moradabad, social media management company Moradabad, affordable social media marketing Moradabad, social media marketing for small business Moradabad, digital marketing company Moradabad, social media marketing consultation Moradabad",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/hire-social-media-marketing-company-moradabad",
    },


    openGraph: {
        title: "Hire Social Media Marketing Company Moradabad | Zentrix",
        description:
            "Planning to hire a social media marketing company in Moradabad? Learn what to check, what it costs and how to choose the right partner with Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/moradabad/hire-social-media-marketing-company-moradabad",
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
        title: "Hire Social Media Marketing Company Moradabad | Zentrix",
        description:
            "Planning to hire a social media marketing company in Moradabad? Learn what to check, what it costs and how to choose the right partner with Zentrix Infotech.",
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