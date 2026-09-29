import Content from "./Content";
import Banner from "./Banner";

import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Enterprise Software Development Company | Zentrix Infotech",

    description:
        "Zentrix Infotech is a trusted enterprise software development company delivering scalable, secure, and custom-built solutions for growing businesses. Get a free consultation today.",

    keywords:
        "enterprise software development company, custom enterprise software solutions, enterprise application development, enterprise software development services, business software development company, scalable software solutions for enterprises, enterprise web application development, enterprise mobile app development, custom software development for enterprises, cloud-based enterprise software, enterprise IT solutions company, enterprise software integration services, legacy software modernization, enterprise ERP and CRM development, affordable enterprise software development company",

    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/enterprise-software-development-company",
    },

    openGraph: {
        title: "Enterprise Software Development Company | Zentrix Infotech",
        description:
            "Zentrix Infotech delivers scalable, secure and custom enterprise software development solutions for modern businesses.",
        url: "https://www.zentrixinfotech.com/enterprise-software-development-company",
        type: "website",
    },
};

export default function EnterpriseSoftwareDevelopmentCompanyPage() {
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