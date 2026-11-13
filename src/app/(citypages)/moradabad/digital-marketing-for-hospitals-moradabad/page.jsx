import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Digital Marketing for Hospitals in Moradabad | Zentrix",
  description:
    "Digital marketing for hospitals in Moradabad by Zentrix Infotech. Reach patients at every stage with a strong website, local SEO, ads, content and reviews.",
  keywords:
    "digital marketing for hospitals Moradabad, hospital digital marketing Moradabad, hospital SEO Moradabad, hospital website design Moradabad, hospital Google Ads Moradabad, hospital social media marketing Moradabad, hospital patient journey marketing, hospital online reputation Moradabad, hospital lead generation Moradabad, healthcare digital marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-for-hospitals-moradabad",
  },

  openGraph: {
    title:
      "Digital Marketing for Hospitals in Moradabad | Zentrix",
    description:
      "Digital marketing for hospitals in Moradabad by Zentrix Infotech. Reach patients at every stage with a strong website, local SEO, ads, content and reviews.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-for-hospitals-moradabad",
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
    title:
      "Digital Marketing for Hospitals in Moradabad | Zentrix",
    description:
      "Digital marketing for hospitals in Moradabad by Zentrix Infotech. Reach patients at every stage with a strong website, local SEO, ads, content and reviews.",
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