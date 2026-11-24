import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Agency in Lucknow | Zentrix Infotech",
  description:
    "Website development agency in Lucknow? Zentrix Infotech builds fast, secure, SEO-ready websites and web apps. 250+ projects. Get a free quote today.",
  keywords:
    "website development agency in Lucknow, website development agency Lucknow, website development company in Lucknow, web development agency Lucknow, custom website development Lucknow, ecommerce website development Lucknow, web application development Lucknow, website developers in Lucknow, hire website developer Lucknow, responsive website development Lucknow, SEO friendly website development Lucknow, business website development Lucknow, website development services Lucknow, affordable website development Lucknow, CMS website development Lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-development-agency-lucknow",
  },

  openGraph: {
    title: "Website Development Agency in Lucknow | Zentrix Infotech",
    description:
      "Website development agency in Lucknow? Zentrix Infotech builds fast, secure, SEO-ready websites and web apps. 250+ projects. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/lucknow/website-development-agency-lucknow",
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
    title: "Website Development Agency in Lucknow | Zentrix Infotech",
    description:
      "Website development agency in Lucknow? Zentrix Infotech builds fast, secure, SEO-ready websites and web apps. 250+ projects. Get a free quote today.",
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