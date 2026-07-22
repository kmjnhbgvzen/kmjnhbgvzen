import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Outsource Web Development to India from USA | Zentrix Infotech",
  description:
    "Learn why US businesses outsource web development to India for cost savings, faster delivery, and skilled talent. Zentrix Infotech helps USA companies build websites affordably.",
  keywords:
    "outsource web development to India USA, outsourcing web development India for US companies, hire Indian web developers from USA, why outsource web development to India, US companies outsourcing website development to India, offshore web development company India, best Indian web development company for US clients, cost of outsourcing web development to India, benefits of outsourcing website development India, remote web development team India for USA business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/outsource-web-development-to-india-from-usa",
  },
  openGraph: {
    title: "Outsource Web Development to India from USA | Zentrix Infotech",
    description:
      "Learn why US businesses outsource web development to India for cost savings, faster delivery, and skilled talent. Zentrix Infotech helps USA companies build websites affordably.",
    url: "https://www.zentrixinfotech.com/usa/outsource-web-development-to-india-from-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Web Development to India from USA | Zentrix Infotech",
    description:
      "Learn why US businesses outsource web development to India for cost savings, faster delivery, and skilled talent. Zentrix Infotech helps USA companies build websites affordably.",
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