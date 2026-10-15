import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Ecommerce Website Development Company in Moradabad | Zentrix",
    description:
        "Zentrix Infotech is a Moradabad website development company for ecommerce. Build a fast, secure online store with payments, orders and SEO that helps you sell more.",
    keywords:
        "Moradabad website development company for ecommerce, ecommerce website development company Moradabad, ecommerce website development Moradabad, online store development Moradabad, ecommerce website design Moradabad, ecommerce developers Moradabad, shopping website development Moradabad, handicraft ecommerce website Moradabad, ecommerce website for small business Moradabad, ecommerce website cost Moradabad, website development company in Moradabad, ecommerce web development services India, Zentrix Infotech Moradabad",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company-for-e-commerce",
    },

    openGraph: {
        title: "Ecommerce Website Development Company in Moradabad | Zentrix",
        description:
            "Zentrix Infotech is a Moradabad website development company for ecommerce. Build a fast, secure online store with payments, orders and SEO that helps you sell more.",
        url: "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company-for-e-commerce",
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
        title: "Ecommerce Website Development Company in Moradabad | Zentrix",
        description:
            "Zentrix Infotech is a Moradabad website development company for ecommerce. Build a fast, secure online store with payments, orders and SEO that helps you sell more.",
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