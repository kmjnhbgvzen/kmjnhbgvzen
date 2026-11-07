import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Solutions Provider Moradabad | Zentrix",
  description:
    "Zentrix Infotech is an enterprise software development solutions provider in Moradabad. We turn business problems into secure, scalable systems. Get a free consultation.",
  keywords:
    "enterprise software development solutions provider moradabad, enterprise software solutions provider moradabad, enterprise software solutions moradabad, business software solutions moradabad, custom enterprise solutions moradabad, ERP solutions provider moradabad, enterprise software development company moradabad, enterprise digital solutions moradabad, business process automation moradabad, enterprise application solutions moradabad, software solutions provider moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-solutions-provider-moradabad",
  },

  openGraph: {
    title: "Enterprise Software Solutions Provider Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an enterprise software development solutions provider in Moradabad. We turn business problems into secure, scalable systems. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-solutions-provider-moradabad",
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
    title: "Enterprise Software Solutions Provider Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an enterprise software development solutions provider in Moradabad. We turn business problems into secure, scalable systems. Get a free consultation.",
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