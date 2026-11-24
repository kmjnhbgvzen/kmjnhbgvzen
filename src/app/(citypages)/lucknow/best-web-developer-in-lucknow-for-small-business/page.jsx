import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Web Developer in Lucknow for Small Business | Zentrix",
  description:
    "Need a reliable web developer in Lucknow for your small business? Zentrix Infotech builds affordable, fast, SEO-ready websites that bring in real customers.",
  keywords:
    "best web developer in Lucknow for small business, web developer in Lucknow, small business website Lucknow, affordable website development Lucknow, website designer Lucknow, freelance web developer Lucknow, low cost website design Lucknow, ecommerce website for small business Lucknow, local SEO website Lucknow, responsive website developer Lucknow, website for startups Lucknow, web development services for small business, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-web-developer-in-lucknow-for-small-business",
  },

  openGraph: {
    title: "Best Web Developer in Lucknow for Small Business | Zentrix",
    description:
      "Need a reliable web developer in Lucknow for your small business? Zentrix Infotech builds affordable, fast, SEO-ready websites that bring in real customers.",
    url: "https://www.zentrixinfotech.com/lucknow/best-web-developer-in-lucknow-for-small-business",
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
    title: "Best Web Developer in Lucknow for Small Business | Zentrix",
    description:
      "Need a reliable web developer in Lucknow for your small business? Zentrix Infotech builds affordable, fast, SEO-ready websites that bring in real customers.",
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