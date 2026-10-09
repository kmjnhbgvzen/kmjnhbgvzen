import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
    title: "Social Media Marketing Cost in Moradabad | Zentrix Infotech",
    description:
        "Know how much social media marketing costs in Moradabad. Compare packages from Rs 8,000 to Rs 60,000 per month, ad budgets and ROI with Zentrix Infotech.",
    keywords:
        "social media marketing cost in Moradabad, social media marketing packages Moradabad, social media marketing price Moradabad, social media marketing charges Moradabad, social media management cost Moradabad, social media marketing agency Moradabad, affordable social media marketing Moradabad, Instagram marketing cost Moradabad, Facebook ads cost Moradabad, social media advertising cost Moradabad, monthly social media marketing package, social media marketing company Moradabad, digital marketing company Moradabad, social media marketing for small business Moradabad",


    alternates: {
        canonical:
            "https://www.zentrixinfotech.com/moradabad/how-much-does-social-media-marketing-cost-in-moradabad",
    },


    openGraph: {
        title: "Social Media Marketing Cost in Moradabad | Zentrix Infotech",
        description:
            "Know how much social media marketing costs in Moradabad. Compare packages from Rs 8,000 to Rs 60,000 per month, ad budgets and ROI with Zentrix Infotech.",
        url: "https://www.zentrixinfotech.com/moradabad/how-much-does-social-media-marketing-cost-in-moradabad",
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
        title: "Social Media Marketing Cost in Moradabad | Zentrix Infotech",
        description:
            "Know how much social media marketing costs in Moradabad. Compare packages from Rs 8,000 to Rs 60,000 per month, ad budgets and ROI with Zentrix Infotech.",
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