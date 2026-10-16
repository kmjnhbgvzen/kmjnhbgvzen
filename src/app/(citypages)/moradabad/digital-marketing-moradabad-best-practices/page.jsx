import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Best Practices in Moradabad | Zentrix",
  description:
    "Learn digital marketing best practices for Moradabad businesses: local SEO, social media, ads, websites and tracking. Practical tips from Zentrix Infotech.",
  keywords:
    "digital marketing Moradabad best practices, digital marketing tips Moradabad, digital marketing strategy Moradabad, how to do digital marketing in Moradabad, local SEO tips Moradabad, social media marketing tips Moradabad, Google Ads best practices Moradabad, digital marketing for small business Moradabad, online marketing strategy Moradabad, digital marketing company in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-moradabad-best-practices",
  },

  openGraph: {
    title: "Digital Marketing Best Practices in Moradabad | Zentrix",
    description:
      "Learn digital marketing best practices for Moradabad businesses: local SEO, social media, ads, websites and tracking. Practical tips from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-moradabad-best-practices",
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
    title: "Digital Marketing Best Practices in Moradabad | Zentrix",
    description:
      "Learn digital marketing best practices for Moradabad businesses: local SEO, social media, ads, websites and tracking. Practical tips from Zentrix Infotech.",
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