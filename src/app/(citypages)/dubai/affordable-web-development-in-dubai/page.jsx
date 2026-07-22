import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Web Development in Dubai | Budget-Friendly Website Design Company",
  description:
    "Get affordable web development in Dubai without compromising quality. Custom, SEO-friendly, mobile-responsive websites and e-commerce stores at budget-friendly prices.",
  keywords:
    "affordable web development in dubai, cheap website design dubai, low cost website development uae, budget website development company dubai, affordable ecommerce website dubai, affordable web design company uae, cost effective website development dubai, small business website development dubai, affordable wordpress development dubai, best affordable web developers dubai, startup website development dubai, low budget website design dubai, dubai web development agency prices, affordable digital agency dubai, business website development at low cost",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/affordable-web-development-in-dubai",
  },

  openGraph: {
    title: "Affordable Web Development in Dubai | Budget-Friendly Website Design Company",
    description:
      "Get affordable web development in Dubai without compromising quality. Custom, SEO-friendly, mobile-responsive websites and e-commerce stores at budget-friendly prices.",
    url: "https://www.zentrixinfotech.com/dubai/affordable-web-development-in-dubai",
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
    title: "Affordable Web Development in Dubai | Budget-Friendly Website Design Company",
    description:
      "Get affordable web development in Dubai without compromising quality. Custom, SEO-friendly, mobile-responsive websites and e-commerce stores at budget-friendly prices.",
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