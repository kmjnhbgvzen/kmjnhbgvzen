import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "How to Choose an Enterprise Software Development Company",
    description:
        "Learn how to choose an enterprise software development company: 10 key criteria, red flags, questions to ask and cost tips. A Zentrix Infotech guide.",
    keywords:
        "how to choose enterprise software development company, enterprise software development company, choosing a software development partner, custom enterprise software development, enterprise software development services, enterprise application development, software development company India, hire enterprise software developers, enterprise software vendor selection, enterprise software development outsourcing, custom software development services, software development company Moradabad",
    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/how-to-choose-enterprise-software-development-company",
    },
    openGraph: {
        title: "How to Choose an Enterprise Software Development Company",
        description:
            "Learn how to choose an enterprise software development company: 10 key criteria, red flags, questions to ask and cost tips. A Zentrix Infotech guide.",
        url: "https://www.zentrixinfotech.com/how-to-choose-enterprise-software-development-company",
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
        title: "How to Choose an Enterprise Software Development Company",
        description:
            "Learn how to choose an enterprise software development company: 10 key criteria, red flags, questions to ask and cost tips. A Zentrix Infotech guide.",
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
