import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Enterprise Software Developers in Moradabad | Zentrix Infotech",
  description:
    "Find the best enterprise software developers in Moradabad. Zentrix Infotech builds secure, scalable ERP, CRM and custom systems. 250+ projects, 4.7/5 rating.",
  keywords:
    "best enterprise software developers moradabad, enterprise software developers moradabad, top enterprise software developers moradabad, hire enterprise software developers moradabad, best enterprise software development company moradabad, enterprise application developers moradabad, custom ERP developers moradabad, CRM developers moradabad, dedicated software developers moradabad, software developers near me moradabad, enterprise software solutions moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-enterprise-software-developers-moradabad",
  },

  openGraph: {
    title: "Best Enterprise Software Developers in Moradabad | Zentrix Infotech",
    description:
      "Find the best enterprise software developers in Moradabad. Zentrix Infotech builds secure, scalable ERP, CRM and custom systems. 250+ projects, 4.7/5 rating.",
    url: "https://www.zentrixinfotech.com/moradabad/best-enterprise-software-developers-moradabad",
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
    title: "Best Enterprise Software Developers in Moradabad | Zentrix Infotech",
    description:
      "Find the best enterprise software developers in Moradabad. Zentrix Infotech builds secure, scalable ERP, CRM and custom systems. 250+ projects, 4.7/5 rating.",
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