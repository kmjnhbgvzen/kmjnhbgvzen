import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Agency in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best digital marketing agency in Moradabad? Zentrix Infotech offers SEO, social media, PPC and web solutions that deliver real leads.",
  keywords:
    "best digital marketing agency Moradabad, top digital marketing agency in Moradabad, digital marketing agency Moradabad, best digital marketing company in Moradabad, digital marketing services Moradabad, SEO agency Moradabad, social media marketing agency Moradabad, PPC agency Moradabad, Google Ads agency Moradabad, local SEO Moradabad, affordable digital marketing agency Moradabad, digital marketing for small business Moradabad, performance marketing agency Moradabad, website and digital marketing agency Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-digital-marketing-agency-moradabad",
  },

  openGraph: {
    title: "Best Digital Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best digital marketing agency in Moradabad? Zentrix Infotech offers SEO, social media, PPC and web solutions that deliver real leads.",
    url: "https://www.zentrixinfotech.com/moradabad/best-digital-marketing-agency-moradabad",
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
    title: "Best Digital Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best digital marketing agency in Moradabad? Zentrix Infotech offers SEO, social media, PPC and web solutions that deliver real leads.",
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