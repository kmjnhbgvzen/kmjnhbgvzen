import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Website Development USA | Zentrix Infotech",
  description:
    "Zentrix Infotech delivers custom website development for USA businesses, building unique, scalable, and SEO-friendly websites tailored to your brand and goals.",
  keywords:
    "custom website development USA, custom web development company USA, hire custom website developers USA, tailored website design USA, custom built website for business USA, custom web application development USA, unique website design company USA, custom coded website development, affordable custom website development USA, best custom web development agency for startups",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/custom-website-development-usa",
  },
  openGraph: {
    title: "Custom Website Development USA | Zentrix Infotech",
    description:
      "Zentrix Infotech delivers custom website development for USA businesses, building unique, scalable, and SEO-friendly websites tailored to your brand and goals.",
    url: "https://www.zentrixinfotech.com/usa/custom-website-development-usa",
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
    title: "Custom Website Development USA | Zentrix Infotech",
    description:
      "Zentrix Infotech delivers custom website development for USA businesses, building unique, scalable, and SEO-friendly websites tailored to your brand and goals.",
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