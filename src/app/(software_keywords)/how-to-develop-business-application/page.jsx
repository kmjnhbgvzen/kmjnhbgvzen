import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How to Develop a Business Application | Zentrix Infotech",
    description:
        "Learn how to develop a business application step by step, from planning and design to testing, launch and support, with expert tips from Zentrix Infotech.",
    keywords: [
        "how to develop business application",
        "how to develop a business app",
        "business application development process",
        "steps to build a business application",
        "how to create a custom business app",
        "business application development guide",
        "business app development for beginners",
        "web application development steps",
        "mobile business app development",
        "business application development company India",
        "custom business software development",
        "business application development company Moradabad",
    ],
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/how-to-develop-business-application",
    },
    openGraph: {
        title: "How to Develop a Business Application | Zentrix Infotech",
        description:
            "Learn how to develop a business application step by step, from planning and design to testing, launch and support, with expert tips from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/how-to-develop-business-application",
        siteName: "Zentrix Infotech",
        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "How to Develop a Business Application | Zentrix Infotech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Develop a Business Application | Zentrix Infotech",
        description:
            "Learn how to develop a business application step by step, from planning and design to testing, launch and support, with expert tips from Zentrix Infotech.",
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
