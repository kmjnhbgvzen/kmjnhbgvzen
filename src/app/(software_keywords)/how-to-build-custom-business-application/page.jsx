import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How to Build a Custom Business Application | Zentrix Infotech",
    description:
        "Learn how to build a custom business application step by step: planning, design, development, testing and launch. Talk to Zentrix Infotech experts.",
    keywords:
        "how to build custom business application, custom business application development, build a custom business app, custom software development process, business application development steps, how to develop a business app, custom app development company, business software solutions company, custom software development services, mobile and web app development, custom application development India, MVP development for business",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/how-to-build-custom-business-application",
    },
    openGraph: {
        title: "How to Build a Custom Business Application | Zentrix Infotech",
        description:
            "Learn how to build a custom business application step by step: planning, design, development, testing and launch. Talk to Zentrix Infotech experts.",
        url: "https://www.zentrixinfotech.com/how-to-build-custom-business-application",
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
        title: "How to Build a Custom Business Application | Zentrix Infotech",
        description:
            "Learn how to build a custom business application step by step: planning, design, development, testing and launch. Talk to Zentrix Infotech experts.",
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
