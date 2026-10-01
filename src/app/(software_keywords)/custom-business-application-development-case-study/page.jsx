import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Custom Business Application Development Case Study | Zentrix",

    description:
        "See how Zentrix Infotech built a custom business application that cut manual work, sped up operations and scaled growth. Read the challenge, solution and results.",

    keywords:
        "custom business application development case study, custom application development case study, business application development case study, custom software development case study, enterprise application case study, custom business software India, franchise management software, custom web application development, business process automation case study, Zentrix Infotech",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/custom-business-application-development-case-study",
    },

    openGraph: {
        title: "Custom Business Application Development Case Study | Zentrix",

        description:
            "See how Zentrix Infotech built a custom business application that cut manual work, sped up operations and scaled growth. Read the challenge, solution and results.",

        url: "https://www.zentrixinfotech.com/custom-business-application-development-case-study",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Custom Business Application Development Case Study | Zentrix",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Custom Business Application Development Case Study | Zentrix",

        description:
            "See how Zentrix Infotech built a custom business application that cut manual work, sped up operations and scaled growth. Read the challenge, solution and results.",

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
