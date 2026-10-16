import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Company Near Me in Moradabad | Zentrix",
  description:
    "Searching for a digital marketing company near you in Moradabad? Zentrix Infotech offers local SEO, social media, PPC and web solutions that bring leads.",
  keywords:
    "digital marketing company near me Moradabad, digital marketing agency near me Moradabad, digital marketing services near me, local digital marketing company Moradabad, SEO company near me Moradabad, social media marketing near me Moradabad, Google Ads agency near me Moradabad, local SEO Moradabad, digital marketing company in Moradabad, best digital marketing agency Moradabad, affordable digital marketing Moradabad, digital marketing for small business Moradabad, website and digital marketing company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-near-me-moradabad",
  },

  openGraph: {
    title: "Digital Marketing Company Near Me in Moradabad | Zentrix",
    description:
      "Searching for a digital marketing company near you in Moradabad? Zentrix Infotech offers local SEO, social media, PPC and web solutions that bring leads.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-near-me-moradabad",
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
    title: "Digital Marketing Company Near Me in Moradabad | Zentrix",
    description:
      "Searching for a digital marketing company near you in Moradabad? Zentrix Infotech offers local SEO, social media, PPC and web solutions that bring leads.",
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