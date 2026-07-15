import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Manufacturers in Hapur | B2B Lead Generation",
  description:
    "Looking for digital marketing for manufacturers in Hapur? Zentrix Infotech helps manufacturing businesses get more B2B enquiries through SEO & ads.",
  keywords:
    "digital marketing for manufacturers in Hapur, manufacturing marketing agency Hapur, B2B digital marketing company, industrial marketing services, manufacturer website development Hapur, B2B lead generation services near me, manufacturing SEO company, industrial digital marketing agency UP, exporter marketing services Hapur, B2B marketing agency Delhi NCR, manufacturing company branding services, factory marketing agency, best B2B marketing company, digital marketing for industrial businesses, manufacturer Google ads agency",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-manufacturers-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Manufacturers in Hapur | B2B Lead Generation",
    description:
      "Looking for digital marketing for manufacturers in Hapur? Zentrix Infotech helps manufacturing businesses get more B2B enquiries through SEO & ads.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-manufacturers-hapur",
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
    title: "Digital Marketing for Manufacturers in Hapur | B2B Lead Generation",
    description:
      "Looking for digital marketing for manufacturers in Hapur? Zentrix Infotech helps manufacturing businesses get more B2B enquiries through SEO & ads.",
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