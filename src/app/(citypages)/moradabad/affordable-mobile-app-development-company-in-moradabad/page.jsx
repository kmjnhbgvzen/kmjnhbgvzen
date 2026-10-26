import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Affordable Mobile App Development Company in Moradabad | Zentrix Infotech",
    description:
        "Looking for an affordable mobile app development company in Moradabad? Zentrix Infotech builds quality Android and iOS apps at fair prices. Call +91 72488 00839.",
    keywords:
        "affordable mobile app development company in moradabad, affordable app development moradabad, cheap mobile app development moradabad, low cost app development company moradabad, budget app development moradabad, affordable android app development moradabad, affordable ios app development moradabad, affordable app developers in moradabad, mobile app development company moradabad, mobile app development moradabad price, app development for small business moradabad, startup app development moradabad, cost effective app development moradabad, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/affordable-mobile-app-development-company-in-moradabad",
    },

    openGraph: {
        title: "Affordable Mobile App Development Company in Moradabad | Zentrix Infotech",
        description:
            "Looking for an affordable mobile app development company in Moradabad? Zentrix Infotech builds quality Android and iOS apps at fair prices. Call +91 72488 00839.",
        url: "https://www.zentrixinfotech.com/moradabad/affordable-mobile-app-development-company-in-moradabad",
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
        title: "Affordable Mobile App Development Company in Moradabad | Zentrix Infotech",
        description:
            "Looking for an affordable mobile app development company in Moradabad? Zentrix Infotech builds quality Android and iOS apps at fair prices. Call +91 72488 00839.",
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