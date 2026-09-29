import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Business Software Development Outsourcing | Zentrix Infotech",
    description:
        "Outsource business software development to Zentrix Infotech. Cut costs, launch faster and get scalable custom software from an experienced team in India.",
    keywords:
        "business software development outsourcing, software development outsourcing company, outsource software development India, custom software development services, offshore software development, dedicated software development team, business software solutions company, affordable software development company, outsourced software development for startups, software outsourcing benefits, IT outsourcing services, Zentrix Infotech",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/business-software-development-outsourcing",
    },
    openGraph: {
        title: "Business Software Development Outsourcing | Zentrix Infotech",
        description:
            "Outsource business software development to Zentrix Infotech. Cut costs, launch faster and get scalable custom software from an experienced team in India.",
        url: "https://www.zentrixinfotech.com/business-software-development-outsourcing",
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
        title: "Business Software Development Outsourcing | Zentrix Infotech",
        description:
            "Outsource business software development to Zentrix Infotech. Cut costs, launch faster and get scalable custom software from an experienced team in India.",
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
