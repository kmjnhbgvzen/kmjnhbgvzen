import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile Responsive Website Development in Dubai | Zentrix Infotech",
  description:
    "Get a fast, SEO-friendly, mobile responsive website in Dubai. Zentrix Infotech builds custom responsive websites that rank higher, load faster, and convert more visitors into customers.",
  keywords:
    "mobile responsive website development Dubai, responsive web design Dubai, mobile friendly website Dubai, website development company Dubai, responsive website design company, UAE web development agency, custom responsive website UAE, mobile optimized website Dubai, best web development company Dubai, affordable responsive website design UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/mobile-responsive-website-development-in-dubai",
  },

  openGraph: {
    title: "Mobile Responsive Website Development in Dubai | Zentrix Infotech",
    description:
      "Get a fast, SEO-friendly, mobile responsive website in Dubai. Zentrix Infotech builds custom responsive websites that rank higher, load faster, and convert more visitors into customers.",
    url: "https://www.zentrixinfotech.com/dubai/mobile-responsive-website-development-in-dubai",
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
    title: "Mobile Responsive Website Development in Dubai | Zentrix Infotech",
    description:
      "Get a fast, SEO-friendly, mobile responsive website in Dubai. Zentrix Infotech builds custom responsive websites that rank higher, load faster, and convert more visitors into customers.",
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