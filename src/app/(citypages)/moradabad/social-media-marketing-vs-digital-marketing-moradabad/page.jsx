import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media vs Digital Marketing in Moradabad | Zentrix",
    description:
        "Social media marketing vs digital marketing in Moradabad: learn the difference, costs, results and which fits your business best. Expert guide by Zentrix Infotech.",
    keywords:
        "social media marketing vs digital marketing, social media marketing vs digital marketing Moradabad, difference between social media marketing and digital marketing, digital marketing company Moradabad, social media marketing company Moradabad, digital marketing services Moradabad, social media marketing services Moradabad, which is better social media or digital marketing, digital marketing for small business Moradabad, SEO services Moradabad, social media marketing cost in Moradabad, digital marketing cost in Moradabad, digital marketing agency Moradabad, online marketing Moradabad",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/social-media-marketing-vs-digital-marketing-moradabad",
    },


    openGraph: {
        title: "Social Media vs Digital Marketing in Moradabad | Zentrix",
        description:
            "Social media marketing vs digital marketing in Moradabad: learn the difference, costs, results and which fits your business best. Expert guide by Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-vs-digital-marketing-moradabad",
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
        title: "Social Media vs Digital Marketing in Moradabad | Zentrix",
        description:
            "Social media marketing vs digital marketing in Moradabad: learn the difference, costs, results and which fits your business best. Expert guide by Zentrix Infotech.",
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