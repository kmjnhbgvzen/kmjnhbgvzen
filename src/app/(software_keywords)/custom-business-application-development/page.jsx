import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom Business Application Development | Zentrix Infotech",

    description:
        "Custom business application development that fits your workflow. Zentrix Infotech builds scalable web, mobile and cloud apps for startups and enterprises.",

    keywords:
        "custom business application development, custom application development company, bespoke business software, custom web application development, custom enterprise application development, business process automation software, custom CRM development, custom ERP software development, cloud-based business applications, custom mobile app development for business, custom software development company India, business software solutions company, scalable business applications, custom software vs off-the-shelf, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-business-application-development",
    },

    openGraph: {
        title: "Custom Business Application Development | Zentrix Infotech",

        description:
            "Custom business application development that fits your workflow. Zentrix Infotech builds scalable web, mobile and cloud apps for startups and enterprises.",

        url: "https://www.zentrixinfotech.com/custom-business-application-development",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom Business Application Development | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Custom Business Application Development | Zentrix Infotech",

        description:
            "Custom business application development that fits your workflow. Zentrix Infotech builds scalable web, mobile and cloud apps for startups and enterprises.",

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
