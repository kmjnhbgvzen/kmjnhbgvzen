import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Application Development Services Moradabad | Zentrix",
  description:
    "Zentrix Infotech offers enterprise application development services in Moradabad: web, mobile, cloud, integration and support. 250+ projects, 4.7/5 rating. Get a free quote.",
  keywords:
    "enterprise application development services moradabad, enterprise application development moradabad, enterprise web application development moradabad, enterprise mobile app development moradabad, enterprise app developers moradabad, legacy application modernization moradabad, enterprise application integration moradabad, cloud application development moradabad, custom business application moradabad, enterprise software development company moradabad, IT solutions company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-application-development-services-moradabad",
  },

  openGraph: {
    title: "Enterprise Application Development Services Moradabad | Zentrix",
    description:
      "Zentrix Infotech offers enterprise application development services in Moradabad: web, mobile, cloud, integration and support. 250+ projects, 4.7/5 rating. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-application-development-services-moradabad",
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
    title: "Enterprise Application Development Services Moradabad | Zentrix",
    description:
      "Zentrix Infotech offers enterprise application development services in Moradabad: web, mobile, cloud, integration and support. 250+ projects, 4.7/5 rating. Get a free quote.",
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