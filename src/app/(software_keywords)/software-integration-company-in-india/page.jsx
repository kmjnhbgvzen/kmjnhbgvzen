import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Software Integration Company in India | Zentrix Infotech",

    description:
        "Zentrix Infotech is a software integration company in India connecting CRM, ERP, GST billing, payments, WhatsApp and web apps into one secure, automated system.",

    keywords: [
        "software integration company in India",
        "software integration company India",
        "best software integration company in India",
        "system integration company India",
        "API integration company India",
        "software integration services India",
        "business software integration India",
        "ERP CRM integration India",
        "payment gateway integration India",
        "WhatsApp Business API integration India",
        "GST billing software integration",
        "e-commerce integration India",
        "cloud integration services India",
        "legacy system integration India",
        "software integration company Moradabad",
        "software integration company Ghaziabad",
        "Zentrix Infotech",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/software-integration-company-in-india",
    },

    openGraph: {
        title: "Software Integration Company in India | Zentrix Infotech",

        description:
            "Zentrix Infotech is a software integration company in India connecting CRM, ERP, GST billing, payments, WhatsApp and web apps into one secure, automated system.",

        url: "https://www.zentrixinfotech.com/software-integration-company-in-india",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "Software Integration Company in India | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Software Integration Company in India | Zentrix Infotech",

        description:
            "Zentrix Infotech is a software integration company in India connecting CRM, ERP, GST billing, payments, WhatsApp and web apps into one secure, automated system.",

        images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
    },

    icons: {
        icon: "/favicon-v2.ico",
    },
};

export default function Page() {
    return (
        <main>
            <Banner />
            <Client />
            <Content />
            <WhyChooseUs />
            <LandingServices />
            <Portfolio />
            <LovedByClients />
        </main>
    );
}
