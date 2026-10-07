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
    "Zentrix Infotech is a trusted digital marketing company in Moradabad offering SEO, social media, Google Ads and websites that bring leads, calls and sales.",
  keywords:
    "digital marketing company Moradabad, digital marketing company in Moradabad, digital marketing services Moradabad, best digital marketing company in Moradabad, affordable digital marketing company Moradabad, SEO company Moradabad, SEO services Moradabad, local SEO Moradabad, Google Ads agency Moradabad, PPC services Moradabad, social media marketing Moradabad, digital marketing agency Moradabad, digital marketing for small business Moradabad, online marketing company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-moradabad",
  },

  openGraph: {
    title: "Digital Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted digital marketing company in Moradabad offering SEO, social media, Google Ads and websites that bring leads, calls and sales.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-moradabad",
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
      "Zentrix Infotech is a trusted digital marketing company in Moradabad offering SEO, social media, Google Ads and websites that bring leads, calls and sales.",
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
