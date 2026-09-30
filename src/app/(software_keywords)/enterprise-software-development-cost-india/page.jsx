import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Software Development Cost in India (2026 Guide)",

    description:
        "How much does enterprise software cost in India? See 2026 price ranges, cost factors, hourly rates and ways to save. Get a free quote from Zentrix Infotech.",

    keywords:
        "enterprise software development cost India, enterprise software development cost in India, custom software development cost India, cost of developing enterprise application, enterprise software pricing India, software development hourly rates India, ERP development cost India, enterprise app development cost, custom software development company India, enterprise software development services India, how much does enterprise software cost, offshore software development India, software development outsourcing India",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-software-development-cost-india",
    },

    openGraph: {
        title: "Enterprise Software Development Cost in India (2026 Guide)",
        description:
            "How much does enterprise software cost in India? See 2026 price ranges, cost factors, hourly rates and ways to save. Get a free quote from Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/enterprise-software-development-cost-india",
        type: "website",
    },
};

export default function EnterpriseSoftwareDevelopmentCostPage() {
    return (
        <main>
            <Banner />
            <Content />
            <Client />
            <LovedByClients />
            <WhyChooseUs />
            <Portfolio />
            <LandingServices />
        </main>
    );
}
