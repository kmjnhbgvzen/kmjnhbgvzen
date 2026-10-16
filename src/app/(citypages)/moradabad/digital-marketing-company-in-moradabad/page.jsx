import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted digital marketing company in Moradabad offering SEO, social media, PPC and web solutions that bring real leads.",
  keywords:
    "digital marketing company in Moradabad, digital marketing agency Moradabad, best digital marketing company in Moradabad, digital marketing services Moradabad, SEO company Moradabad, social media marketing Moradabad, PPC services Moradabad, Google Ads agency Moradabad, local SEO Moradabad, website development and digital marketing Moradabad, affordable digital marketing Moradabad, digital marketing for small business Moradabad, lead generation company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-in-moradabad",
  },

  openGraph: {
    title: "Digital Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted digital marketing company in Moradabad offering SEO, social media, PPC and web solutions that bring real leads.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-in-moradabad",
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
    title: "Digital Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted digital marketing company in Moradabad offering SEO, social media, PPC and web solutions that bring real leads.",
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