import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "CRM Development Company India Reviews | Zentrix Infotech",

    description:
        "Read honest reviews, ratings and client feedback on CRM development companies in India. Learn how to verify CRM developers and why businesses trust Zentrix Infotech.",

    keywords: [
        "CRM development company India reviews",
        "CRM development company reviews",
        "best CRM development company reviews India",
        "CRM software developer ratings",
        "how to choose CRM developer India",
        "CRM vendor reviews India",
        "custom CRM company client testimonials",
        "top CRM development companies reviews",
        "Zentrix Infotech CRM reviews",
        "CRM development company Moradabad",
        "CRM development company Ghaziabad",
    ],

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/crm-development-company-india-reviews",
    },

    openGraph: {
        title: "CRM Development Company India Reviews | Zentrix Infotech",

        description:
            "Read honest reviews, ratings and client feedback on CRM development companies in India. Learn how to verify CRM developers and why businesses trust Zentrix Infotech.",

        url: "https://www.zentrixinfotech.com/crm-development-company-india-reviews",

        siteName: "Zentrix Infotech",

        images: [
            {
                url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Development Company India Reviews | Zentrix Infotech",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "CRM Development Company India Reviews | Zentrix Infotech",

        description:
            "Read honest reviews, ratings and client feedback on CRM development companies in India. Learn how to verify CRM developers and why businesses trust Zentrix Infotech.",

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
