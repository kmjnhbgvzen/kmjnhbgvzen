import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media Marketing Consultation Moradabad | Zentrix",
    description:
        "Book a social media marketing consultation in Moradabad. Get a custom strategy, budget plan and growth roadmap for your business from Zentrix Infotech experts.",
    keywords:
        "social media marketing consultation Moradabad, social media consultant Moradabad, social media strategy consultation, social media marketing consultant Moradabad, social media marketing strategy Moradabad, social media audit Moradabad, social media marketing advice for small business, social media marketing services Moradabad, social media marketing company Moradabad, digital marketing consultant Moradabad, free social media consultation, social media marketing cost in Moradabad, social media growth plan, social media marketing agency Moradabad",



    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/social-media-marketing-consultation-moradabad",
    },



    openGraph: {
        title: "Social Media Marketing Consultation Moradabad | Zentrix",
        description:
            "Book a social media marketing consultation in Moradabad. Get a custom strategy, budget plan and growth roadmap for your business from Zentrix Infotech experts.",
        url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-consultation-moradabad",
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
        title: "Social Media Marketing Consultation Moradabad | Zentrix",
        description:
            "Book a social media marketing consultation in Moradabad. Get a custom strategy, budget plan and growth roadmap for your business from Zentrix Infotech experts.",
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