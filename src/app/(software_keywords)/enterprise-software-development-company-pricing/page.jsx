import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Software Development Company Pricing | Zentrix",
    description:
        "Learn how enterprise software development company pricing works: models, cost factors, INR ranges and hidden costs. Get a clear quote from Zentrix Infotech.",
    keywords:
        "enterprise software development company pricing, enterprise software development cost, enterprise software development cost in India, custom software development pricing, software development pricing models, enterprise application development cost, fixed price vs time and materials, software development company in India, Zentrix Infotech, custom enterprise software",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-software-development-company-pricing",
    },
    openGraph: {
        title: "Enterprise Software Development Company Pricing | Zentrix",
        description:
            "Learn how enterprise software development company pricing works: models, cost factors, INR ranges and hidden costs. Get a clear quote from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/enterprise-software-development-company-pricing",
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
        title: "Enterprise Software Development Company Pricing | Zentrix",
        description:
            "Learn how enterprise software development company pricing works: models, cost factors, INR ranges and hidden costs. Get a clear quote from Zentrix Infotech.",
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
